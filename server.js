const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '15mb' }));

app.post('/api/analyze', async (req, res) => {
  try {
    const { apiKey, text, base64Image, mimeType, modelSetting } = req.body;
    const geminiKey = (apiKey || process.env.GEMINI_API_KEY || "").trim();

    if (!geminiKey) {
      return res.status(400).json({ error: { message: "Gemini API key is missing. Add it to Settings or .env file." } });
    }

    // Extract a heuristic query from the text (first few words)
    let query = "misinformation";
    if (text) {
      query = text.split(' ').slice(0, 6).join(' ');
      if (query.trim().length === 0) query = "breaking news fact check";
    }

    let newsContext = "";
    let factCheckContext = "";

    // Step 1: Fetch News (NewsAPI)
    const newsKey = process.env.NEWS_API_KEY;
    if (newsKey && newsKey !== 'your_newsapi_key_here') {
      try {
        const newsResponse = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&pageSize=3&apiKey=${newsKey}`);
        if (newsResponse.data && newsResponse.data.articles) {
          newsContext = newsResponse.data.articles.map(a => `- [${a.source.name}] ${a.title}: ${a.description}`).join('\n');
        }
      } catch (err) {
        console.error("NewsAPI Error:", err?.response?.data || err.message);
      }
    }

    // Step 2: Fact-Check (Google API)
    const googleFCKey = process.env.GOOGLE_API_KEY;
    if (googleFCKey && googleFCKey !== 'your_google_api_key_here') {
      try {
        const fcResponse = await axios.get(`https://factchecktools.googleapis.com/v1alpha1/claims:search?query=${encodeURIComponent(query)}&key=${googleFCKey}`);
        if (fcResponse.data && fcResponse.data.claims) {
          factCheckContext = fcResponse.data.claims.map(c => `- Claim by ${c.claimant}: ${c.text}\n  Rating: ${c.claimReview[0].textualRating} by ${c.claimReview[0].publisher.name}`).join('\n');
        }
      } catch (err) {
        console.error("Google Fact Check API Error:", err?.response?.data || err.message);
      }
    }

    // Step 3/4/5: AI Analysis (Gemini) + Multi-source check + Confidence Score
    const sysInstruction = `You are TruthLens, an expert fact-checker and misinformation analyst.
You are given a user request alongside fetched context from NewsAPI and Google Fact Check Tools.
Analyze all data in a comprehensive "multi-source check". Assign a final Confidence score for misinformation risk (0-100).

You MUST respond exactly in this JSON format:
{"score":NUMBER_0_TO_100,"level":"high"|"medium"|"low","badge":"string","issues":[{"name":"string","s":"flagged"|"warn"|"ok","d":"string"}],"explain":"string","tip":"string","fc":[{"src":"string","claim":"string","v":"string","c":"red"|"amber"|"green"}]}

Rules:
score = misinformation risk 0-100 (100 = definitely fake/scam, 0 = entirely verified). 
level = high (>65), medium (35-65), low (<35).
issues = Provide up to 5 specific evaluation tags evaluating emotional tone, sources, and plausibility.
explain = Combine the user content and the provided context API data to write a plain language explanation summarizing the multi-source check. You MUST conclude this explanation with a capitalized "DISCLAIMER:" summarizing the final verdict.
fc = Fill this section using the FACT_CHECK_CONTEXT provided to you if applicable, otherwise suggest 2 ways to verify.`;

    const userPrompt = `USER CONTENT TO ANALYZE:
"${text || "[Image attached without text]"}"

--- MULTI-SOURCE CHECK DATA ---

NEWS_API_CONTEXT:
${newsContext || "No relevant recent news found for the query."}

FACT_CHECK_CONTEXT:
${factCheckContext || "No official fact-checks found in Google Fact Check database."}
`;

    const parts = [{ text: sysInstruction + '\n\n' + userPrompt }];
    if (base64Image && mimeType) {
      parts.push({
        inlineData: {
          data: base64Image,
          mimeType: mimeType
        }
      });
    }

    const model = (modelSetting || 'gemini-2.5-flash').trim();

    const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiKey}`, {
      contents: [{ parts: parts }],
      generationConfig: { temperature: 0.2 }
    }, {
      headers: { 'Content-Type': 'application/json' }
    });

    const data = response.data;
    if (data.error) throw new Error(data.error.message);

    // Parse JSON safely
    const raw = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const clean = raw.replace(/```json|```/g, '').trim();
    const result = JSON.parse(clean);

    return res.json(result);

  } catch (error) {
    console.error("Backend Error:", error?.response?.data || error.message);
    res.status(500).json({ error: { message: error.message || "Failed to process analysis.", details: error?.response?.data } });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`TruthLens API server listening on port ${PORT}`);
});
