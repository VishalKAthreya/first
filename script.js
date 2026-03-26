// ── TRANSLATIONS ──────────────────────────────────
const T = {
  en: {
    eye: 'Powered by Gemini · Built for India', title: 'Verify Information. <em>Understand</em> the Truth.',
    sub: 'TruthLens uses Google Gemini AI to detect misleading news and misinformation — with clear, explainable analysis in your language.',
    cta: 'Analyze Content', hs1: 'Articles analyzed', hs2: 'Detection accuracy', hs3: 'Languages supported',
    dpTitle: 'Analyze content', dpSub: 'Submit text, URL, or image for Gemini AI analysis',
    gstatus: 'Gemini 2.5 Flash connected — real AI analysis enabled',
    btnTxt: 'Run Gemini Analysis', emptyTitle: 'No analysis yet', emptySub: 'Submit content to see AI-powered\nmisinformation analysis',
    aiLabel: 'Analyzed by Gemini 2.5 Flash', resTitle: 'Analysis result',
    rlRisk: 'Misinformation risk', rlIssues: 'Detected issues', rlExplain: 'What this means', rlFc: 'Fact-check sources',
    blLow: 'Low risk', blHigh: 'High risk', fcNote: 'External links open verified fact-checking organizations',
    urlHint: 'Paste any news article or social media link', ulTxt: 'Click to upload',
    lhTitle: 'Learning Hub', lhSub: 'Build your digital literacy. Understand how misinformation spreads.',
    quizLabel: 'Test yourself', histTitle: 'Analysis history', histSub: 'Your recent content analyses',
    st_title: 'Settings', st_sub: 'Customize your TruthLens experience',
    st_sec1: 'Language & region', st_l1: 'Interface language', st_d1: 'Language for UI and explanations',
    st_l2: 'Analysis language', st_d2: 'Primary language of content you analyze',
    st_sec2: 'AI Model', st_l3: 'Gemini API Key', st_d3: 'Enter your key to enable real AI analysis',
    st_l4: 'Model', st_d4: 'Gemini model for analysis',
    st_sec3: 'Explanation style', st_l5: 'Simple explanations', st_d5: 'Plain language, fewer technical terms',
    st_l6: 'Show confidence intervals', st_d6: 'Display uncertainty ranges in scores',
    st_l7: 'Trust indicator badges', st_d7: 'Visual trust badges on analysis results',
    st_sec4: 'Privacy', st_l8: 'Save analysis history', st_d8: 'Store results locally for reference',
    st_l9: 'Improve the model', st_d9: 'Share anonymized data to help accuracy'
  },
  hi: {
    eye: 'Gemini द्वारा संचालित · भारत के लिए निर्मित', title: 'जानकारी सत्यापित करें। <em>सच्चाई</em> समझें।',
    sub: 'TruthLens Google Gemini AI का उपयोग करके भ्रामक समाचार और गलत जानकारी का पता लगाता है — आपकी भाषा में स्पष्ट विश्लेषण के साथ।',
    cta: 'सामग्री विश्लेषण करें', hs1: 'लेखों का विश्लेषण', hs2: 'पहचान की सटीकता', hs3: 'भाषाएँ समर्थित',
    dpTitle: 'सामग्री का विश्लेषण करें', dpSub: 'Gemini AI विश्लेषण के लिए टेक्स्ट, URL या छवि सबमिट करें',
    gstatus: 'Gemini 2.5 Flash कनेक्टेड — वास्तविक AI विश्लेषण सक्षम',
    btnTxt: 'Gemini विश्लेषण चलाएं', emptyTitle: 'अभी तक कोई विश्लेषण नहीं', emptySub: 'AI-संचालित विश्लेषण देखने के लिए\nसामग्री सबमिट करें',
    aiLabel: 'Gemini 2.5 Flash द्वारा विश्लेषण', resTitle: 'विश्लेषण परिणाम',
    rlRisk: 'गलत सूचना जोखिम', rlIssues: 'पहचानी गई समस्याएं', rlExplain: 'इसका क्या अर्थ है', rlFc: 'तथ्य-जांच स्रोत',
    blLow: 'कम जोखिम', blHigh: 'उच्च जोखिम', fcNote: 'बाहरी लिंक सत्यापित तथ्य-जांच संगठन खोलते हैं',
    urlHint: 'कोई भी समाचार लेख या सोशल मीडिया लिंक पेस्ट करें', ulTxt: 'अपलोड करने के लिए क्लिक करें',
    lhTitle: 'लर्निंग हब', lhSub: 'अपनी डिजिटल साक्षरता बनाएं। गलत सूचना कैसे फैलती है, इसे समझें।',
    quizLabel: 'स्वयं का परीक्षण करें', histTitle: 'विश्लेषण इतिहास', histSub: 'आपके हालिया सामग्री विश्लेषण',
    st_title: 'सेटिंग्स', st_sub: 'अपना TruthLens अनुभव कस्टमाइज़ करें',
    st_sec1: 'भाषा और क्षेत्र', st_l1: 'इंटरफ़ेस भाषा', st_d1: 'UI और स्पष्टीकरण के लिए भाषा',
    st_l2: 'विश्लेषण भाषा', st_d2: 'आप जिस सामग्री का विश्लेषण करते हैं उसकी प्राथमिक भाषा',
    st_sec2: 'AI मॉडल', st_l3: 'Gemini API कुंजी', st_d3: 'वास्तविक AI विश्लेषण सक्षम करने के लिए अपनी कुंजी दर्ज करें',
    st_l4: 'मॉडल', st_d4: 'विश्लेषण के लिए Gemini मॉडल',
    st_sec3: 'स्पष्टीकरण शैली', st_l5: 'सरल स्पष्टीकरण', st_d5: 'सादी भाषा, कम तकनीकी शब्द',
    st_l6: 'विश्वास अंतराल दिखाएं', st_d6: 'स्कोर में अनिश्चितता सीमाएं प्रदर्शित करें',
    st_l7: 'विश्वास संकेतक बैज', st_d7: 'विश्लेषण परिणामों पर दृश्य विश्वास बैज',
    st_sec4: 'गोपनीयता', st_l8: 'विश्लेषण इतिहास सहेजें', st_d8: 'संदर्भ के लिए परिणाम स्थानीय रूप से संग्रहीत करें',
    st_l9: 'मॉडल में सुधार करें', st_d9: 'सटीकता में मदद करने के लिए अनाम डेटा साझा करें'
  },
  bn: {
    eye: 'Gemini দ্বারা চালিত · ভারতের জন্য তৈরি', title: 'তথ্য যাচাই করুন। <em>সত্য</em> বুঝুন।',
    sub: 'TruthLens আপনার ভাষায় স্পষ্ট বিশ্লেষণ সহ বিভ্রান্তিকর খবর এবং ভুল তথ্য শনাক্ত করতে Google Gemini AI ব্যবহার করে।',
    cta: 'কন্টেন্ট বিশ্লেষণ করুন', hs1: 'বিশ্লেষণ করা প্রবন্ধ', hs2: 'শনাক্তকরণের নির্ভুলতা', hs3: 'সমর্থিত ভাষা',
    dpTitle: 'কন্টেন্ট বিশ্লেষণ করুন', dpSub: 'Gemini AI বিশ্লেষণের জন্য টেক্সট, URL বা ছবি জমা দিন',
    gstatus: 'Gemini 2.5 Flash সংযুক্ত — আসল AI বিশ্লেষণ সক্ষম',
    btnTxt: 'Gemini বিশ্লেষণ চালান', emptyTitle: 'এখনও কোনো বিশ্লেষণ নেই', emptySub: 'AI-চালিত বিশ্লেষণ দেখতে কন্টেন্ট জমা দিন',
    aiLabel: 'Gemini 2.5 Flash দ্বারা বিশ্লেষণ', resTitle: 'বিশ্লেষণ ফলাফল',
    rlRisk: 'ভুল তথ্যের ঝুঁকি', rlIssues: 'শনাক্ত করা সমস্যা', rlExplain: 'এর মানে কি', rlFc: 'তথ্য-যাচাই উৎস',
    blLow: 'কম ঝুঁকি', blHigh: 'উচ্চ ঝুঁকি', fcNote: 'বহিরাগত লিঙ্ক যাচাইকৃত তথ্য-যাচাই সংস্থাগুলি খোলে',
    urlHint: 'যেকোনো খবরের প্রবন্ধ বা সোশ্যাল মিডিয়া লিঙ্ক পেস্ট করুন', ulTxt: 'আপলোড করতে ক্লিক করুন',
    lhTitle: 'লার্নিং হাব', lhSub: 'আপনার ডিজিটাল লিটারেসি তৈরি করুন। ভুল তথ্য কিভাবে ছড়ায় বুঝুন।',
    quizLabel: 'নিজেকে পরীক্ষা করুন', histTitle: 'বিশ্লেষণ ইতিহাস', histSub: 'আপনার সাম্প্রতিক কন্টেন্ট বিশ্লেষণ',
    st_title: 'সেটিংস', st_sub: 'আপনার TruthLens অভিজ্ঞতা কাস্টমাইজ করুন',
    st_sec1: 'ভাষা এবং অঞ্চল', st_l1: 'ইন্টারফেস ভাষা', st_d1: 'UI এবং ব্যাখ্যার জন্য ভাষা',
    st_l2: 'বিশ্লেষণ ভাষা', st_d2: 'আপনি যে কন্টেন্ট বিশ্লেষণ করেন তার প্রাথমিক ভাষা',
    st_sec2: 'AI মডেল', st_l3: 'Gemini API কী', st_d3: 'আসল AI বিশ্লেষণ সক্ষম করতে আপনার কী লিখুন',
    st_l4: 'মডেল', st_d4: 'বিশ্লেষণের জন্য Gemini মডেল',
    st_sec3: 'ব্যাখ্যার স্টাইল', st_l5: 'সহজ ব্যাখ্যা', st_d5: 'সহজ ভাষা, কম প্রযুক্তিগত শব্দ',
    st_l6: 'কনফিডেন্স ইন্টারভাল দেখান', st_d6: 'স্কোরে অনিশ্চয়তার রেঞ্জ প্রদর্শন করুন',
    st_l7: 'বিশ্বাস সূচক ব্যাজ', st_d7: 'বিশ্লেষণ ফলাফলে ভিজ্যুয়াল বিশ্বাস ব্যাজ',
    st_sec4: 'গোপনীয়তা', st_l8: 'বিশ্লেষণ ইতিহাস সেভ করুন', st_d8: 'রেফারেন্সের জন্য ফলাফল স্থানীয়ভাবে সংরক্ষণ করুন',
    st_l9: 'মডেল উন্নত করুন', st_d9: 'নির্ভুলতা উন্নত করতে বেনামী ডেটা শেয়ার করুন'
  },
  ta: {
    eye: 'Gemini ஆல் இயக்கப்படுகிறது · இந்தியாவுக்காக உருவாக்கப்பட்டது', title: 'தகவலை சரிபார்க்கவும். <em>உண்மையை</em> புரிந்து கொள்ளுங்கள்.',
    sub: 'TruthLens உங்கள் மொழியில் தெளிவான பகுப்பாய்வுடன் தவறான செய்திகள் மற்றும் தவறான தகவல்களைக் கண்டறிய Google Gemini AI ஐப் பயன்படுத்துகிறது.',
    cta: 'உள்ளடக்கத்தை பகுப்பாய்வு செய்', hs1: 'பகுப்பாய்வு செய்யப்பட்ட கட்டுரைகள்', hs2: 'கண்டறிதல் துல்லியம்', hs3: 'ஆதரிக்கப்படும் மொழிகள்',
    dpTitle: 'உள்ளடக்கத்தை பகுப்பாய்வு செய்', dpSub: 'Gemini AI பகுப்பாய்வுக்கு உரை, URL அல்லது படத்தை சமர்ப்பிக்கவும்',
    gstatus: 'Gemini 2.5 Flash இணைக்கப்பட்டுள்ளது — உண்மையான AI பகுப்பாய்வு இயக்கப்பட்டது',
    btnTxt: 'Gemini பகுப்பாய்வை இயக்கு', emptyTitle: 'இன்னும் பகுப்பாய்வு இல்லை', emptySub: 'AI-இயங்கும் பகுப்பாய்வைக் காண உள்ளடக்கத்தை சமர்ப்பிக்கவும்',
    aiLabel: 'Gemini 2.5 Flash ஆல் பகுப்பாய்வு செய்யப்பட்டது', resTitle: 'பகுப்பாய்வு முடிவு',
    rlRisk: 'தவறான தகவல் ஆபத்து', rlIssues: 'கண்டறியப்பட்ட சிக்கல்கள்', rlExplain: 'இதன் அர்த்தம் என்ன', rlFc: 'உண்மை-சரிபார்ப்பு ஆதாரங்கள்',
    blLow: 'குறைந்த ஆபத்து', blHigh: 'அதிக ஆபத்து', fcNote: 'வெளிப்புற இணைப்புகள் சரிபார்க்கப்பட்ட உண்மை-சரிபார்ப்பு நிறுவனங்களைத் திறக்கின்றன',
    urlHint: 'எந்த செய்தி கட்டுரையும் அல்லது சமூக ஊடக இணைப்பையும் ஒட்டவும்', ulTxt: 'பதிவேற்ற கிளிக் செய்யவும்',
    lhTitle: 'கற்றல் மையம்', lhSub: 'உங்கள் டிஜிட்டல் கல்வியறிவை உருவாக்குங்கள். தவறான தகவல்கள் எவ்வாறு பரவுகின்றன என்பதைப் புரிந்து கொள்ளுங்கள்.',
    quizLabel: 'உங்களை சோதிக்கவும்', histTitle: 'பகுப்பாய்வு வரலாறு', histSub: 'உங்கள் சமீபத்திய உள்ளடக்க பகுப்பாய்வுகள்',
    st_title: 'அமைப்புகள்', st_sub: 'உங்கள் TruthLens அனுபவத்தைத் தனிப்பயனாக்கவும்',
    st_sec1: 'மொழி & பகுதி', st_l1: 'இடைமுக மொழி', st_d1: 'UI மற்றும் விளக்கங்களுக்கான மொழி',
    st_l2: 'பகுப்பாய்வு மொழி', st_d2: 'நீங்கள் பகுப்பாய்வு செய்யும் உள்ளடக்கத்தின் முதன்மை மொழி',
    st_sec2: 'AI மாதிரி', st_l3: 'Gemini API திறவுகோல்', st_d3: 'உண்மையான AI பகுப்பாய்வை இயக்க உங்கள் திறவுகோலை உள்ளிடவும்',
    st_l4: 'மாதிரி', st_d4: 'பகுப்பாய்வுக்கான Gemini மாதிரி',
    st_sec3: 'விளக்க பாணி', st_l5: 'எளிய விளக்கங்கள்', st_d5: 'எளிய மொழி, குறைவான தொழில்நுட்ப சொற்கள்',
    st_l6: 'நம்பிக்கை இடைவெளிகளைக் காட்டு', st_d6: 'மதிப்பெண்களில் நிச்சயமற்ற வரம்புகளைக் காண்பி',
    st_l7: 'நம்பிக்கை காட்டி பேட்ஜ்கள்', st_d7: 'பகுப்பாய்வு முடிவுகளில் காட்சி நம்பிக்கை பேட்ஜ்கள்',
    st_sec4: 'தனியுரிமை', st_l8: 'பகுப்பாய்வு வரலாற்றைச் சேமி', st_d8: 'குறிப்புக்காக முடிவுகளை உள்ளூரில் சேமிக்கவும்',
    st_l9: 'மாதிரியை மேம்படுத்தவும்', st_d9: 'துல்லியத்திற்கு உதவ அநாமதேய தரவைப் பகிரவும்'
  },
  te: {
    eye: 'Gemini ద్వారా ఆధారితం · భారతదేశం కోసం రూపొందించబడింది', title: 'సమాచారాన్ని ధృవీకరించండి. <em>నిజాన్ని</em> అర్థం చేసుకోండి.',
    sub: 'TruthLens మీ భాషలో స్పష్టమైన విశ్లేషణతో తప్పుదారి పట్టించే వార్తలు మరియు తప్పుడు సమాచారాన్ని గుర్తించడానికి Google Gemini AIని ఉపయోగిస్తుంది.',
    cta: 'కంటెంట్‌ని విశ్లేషించండి', hs1: 'విశ్లేషించబడిన కథనాలు', hs2: 'గుర్తింపు ఖచ్చితత్వం', hs3: 'మద్దతు ఉన్న భాషలు',
    dpTitle: 'కంటెంట్‌ని విశ్లేషించండి', dpSub: 'Gemini AI విశ్లేషణ కోసం వచనం, URL లేదా చిత్రాన్ని సమర్పించండి',
    gstatus: 'Gemini 2.5 Flash కనెక్ట్ చేయబడింది — నిజమైన AI విశ్లేషణ ప్రారంభించబడింది',
    btnTxt: 'Gemini విశ్లేషణను అమలు చేయండి', emptyTitle: 'ఇంకా విశ్లేషణ లేదు', emptySub: 'AI-ఆధారిత విశ్లేషణను చూడటానికి కంటెంట్‌ను సమర్పించండి',
    aiLabel: 'Gemini 2.5 Flash ద్వారా విశ్లేషించబడింది', resTitle: 'విశ్లేషణ ఫలితం',
    rlRisk: 'తప్పుడు సమాచార ప్రమాదం', rlIssues: 'గుర్తించబడిన సమస్యలు', rlExplain: 'దీని అర్థం ఏమిటి', rlFc: 'వాస్తవ-తనిఖీ మూలాలు',
    blLow: 'తక్కువ ప్రమాదం', blHigh: 'అధిక ప్రమాదం', fcNote: 'బాహ్య లింక్‌లు ధృవీకరించబడిన వాస్తవ-తనిఖీ సంస్థలను తెరుస్తాయి',
    urlHint: 'ఏదైనా వార్తా కథనం లేదా సోషల్ మీడియా లింక్‌ను పేస్ట్ చేయండి', ulTxt: 'అప్‌లోడ్ చేయడానికి క్లిక్ చేయండి',
    lhTitle: 'లెర్నింగ్ హబ్', lhSub: 'మీ డిజిటల్ అక్షరాస్యతను పెంచుకోండి. తప్పుడు సమాచారం ఎలా వ్యాపిస్తుందో అర్థం చేసుకోండి.',
    quizLabel: 'మిమ్మల్ని మీరు పరీక్షించుకోండి', histTitle: 'విశ్లేషణ చరిత్ర', histSub: 'మీ ఇటీవలి కంటెంట్ విశ్లేషణలు',
    st_title: 'సెట్టింగ్‌లు', st_sub: 'మీ TruthLens అనుభవాన్ని కస్టమైజ్ చేయండి',
    st_sec1: 'భాష & ప్రాంతం', st_l1: 'ఇంటర్‌ఫేస్ భాష', st_d1: 'UI మరియు వివరణల కోసం భాష',
    st_l2: 'విశ్లేషణ భాష', st_d2: 'మీరు విశ్లేషించే కంటెంట్ యొక్క ప్రాథమిక భాష',
    st_sec2: 'AI మోడల్', st_l3: 'Gemini API కీ', st_d3: 'నిజమైన AI విశ్లేషణను ప్రారంభించడానికి మీ కీని నమోదు చేయండి',
    st_l4: 'మోడల్', st_d4: 'విశ్లేషణ కోసం Gemini మోడల్',
    st_sec3: 'వివరణ శైలి', st_l5: 'సరళమైన వివరణలు', st_d5: 'సాధారణ భాష, తక్కువ సాంకేతిక పదాలు',
    st_l6: 'కాన్ఫిడెన్స్ ఆంతరాలను చూపించు', st_d6: 'స్కోర్‌లలో అనిశ్చితి పరిధులను ప్రదర్శించండి',
    st_l7: 'నమ్మక సూచిక బ్యాడ్జ్‌లు', st_d7: 'విశ్లేషణ ఫలితాలపై దృశ్య నమ్మక బ్యాడ్జ్‌లు',
    st_sec4: 'గోప్యత', st_l8: 'విశ్లేషణ చరిత్రను సేవ్ చేయండి', st_d8: 'సూచన కోసం ఫలితాలను స్థానికంగా నిల్వ చేయండి',
    st_l9: 'మోడల్‌ను మెరుగుపరచండి', st_d9: 'ఖచ్చితత్వానికి సహాయం చేయడానికి అనామక డేటాను భాగస్వామ్యం చేయండి'
  },
  mr: {
    eye: 'Gemini द्वारे समर्थित · भारतासाठी निर्मित', title: 'माहिती पडताळून पहा. <em>सत्य</em> समजून घ्या.',
    sub: 'TruthLens तुमच्या भाषेत स्पष्ट विश्लेषणासह दिशाभूल करणाऱ्या बातम्या आणि चुकीच्या माहितीचा शोध घेण्यासाठी Google Gemini AI चा वापर करते.',
    cta: 'सामग्रीचे विश्लेषण करा', hs1: 'विश्लेषण केलेले लेख', hs2: 'शोध अचूकता', hs3: 'समर्थित भाषा',
    dpTitle: 'सामग्रीचे विश्लेषण करा', dpSub: 'Gemini AI विश्लेषणासाठी मजकूर, URL किंवा प्रतिमा सबमिट करा',
    gstatus: 'Gemini 2.5 Flash कनेक्ट केले आहे — वास्तविक AI विश्लेषण सक्षम केले आहे',
    btnTxt: 'Gemini विश्लेषण चालवा', emptyTitle: 'अद्याप कोणतेही विश्लेषण नाही', emptySub: 'AI-चालित विश्लेषण पाहण्यासाठी सामग्री सबमिट करा',
    aiLabel: 'Gemini 2.5 Flash द्वारे विश्लेषण केले', resTitle: 'विश्लेषण परिणाम',
    rlRisk: 'चुकीच्या माहितीचा धोका', rlIssues: 'आढळलेल्या समस्या', rlExplain: 'याचा अर्थ काय', rlFc: 'तथ्य-तपासणी स्रोत',
    blLow: 'कमी धोका', blHigh: 'जास्त धोका', fcNote: 'बाह्य दुवे सत्यापित तथ्य-तपासणी संस्था उघडतात',
    urlHint: 'कोणताही बातमीचा लेख किंवा सोशल मीडिया लिंक पेस्ट करा', ulTxt: 'अपलोड करण्यासाठी क्लिक करा',
    lhTitle: 'लर्निंग हब', lhSub: 'तुमची डिजिटल साक्षरता वाढवा. चुकीची माहिती कशी पसरते ते समजून घ्या.',
    quizLabel: 'स्वतःची चाचणी घ्या', histTitle: 'विश्लेषण इतिहास', histSub: 'तुमची अलीकडील सामग्री विश्लेषणे',
    st_title: 'सेटिंग्ज', st_sub: 'तुमचा TruthLens अनुभव सानुकूलित करा',
    st_sec1: 'भाषा आणि प्रदेश', st_l1: 'इंटरफेस भाषा', st_d1: 'UI आणि स्पष्टीकरणासाठी भाषा',
    st_l2: 'विश्लेषण भाषा', st_d2: 'तुम्ही विश्लेषण करत असलेल्या सामग्रीची प्राथमिक भाषा',
    st_sec2: 'AI मॉडेल', st_l3: 'Gemini API की', st_d3: 'वास्तविक AI विश्लेषण सक्षम करण्यासाठी तुमची की प्रविष्ट करा',
    st_l4: 'मॉडेल', st_d4: 'विश्लेषणासाठी Gemini मॉडेल',
    st_sec3: 'स्पष्टीकरण शैली', st_l5: 'सोपे स्पष्टीकरण', st_d5: 'सोपी भाषा, कमी तांत्रिक शब्द',
    st_l6: 'आत्मविश्वास अंतराल दाखवा', st_d6: 'स्कोअरमध्ये अनिश्चितता श्रेणी प्रदर्शित करा',
    st_l7: 'विश्वास दर्शक बॅज', st_d7: 'विश्लेषण परिणामांवर दृश्यमान विश्वास बॅज',
    st_sec4: 'गोपनीयता', st_l8: 'विश्लेषण इतिहास जतन करा', st_d8: 'संदर्भासाठी परिणाम स्थानिक पातळीवर संग्रहित करा',
    st_l9: 'मॉडेल सुधारित करा', st_d9: 'अचूकतेसाठी निनावी डेटा शेअर करा'
  }
};
let curLang = 'en';

function t(k) { return (T[curLang] || T.en)[k] || T.en[k] || k }

function applyLang() {
  const ids = {
    'h-eye': 'eye', 'h-cta-txt': 'cta', 'hs1': 'hs1', 'hs2': 'hs2', 'hs3': 'hs3',
    'dp-title': 'dpTitle', 'dp-sub': 'dpSub', 'gstatus': 'gstatus', 'btn-txt': 'btnTxt',
    'empty-title': 'emptyTitle', 'ai-label': 'aiLabel', 'res-title': 'resTitle',
    'rl-risk': 'rlRisk', 'rl-issues': 'rlIssues', 'rl-explain': 'rlExplain', 'rl-fc': 'rlFc',
    'bl-low': 'blLow', 'bl-high': 'blHigh', 'fc-note': 'fcNote', 'url-hint': 'urlHint', 'ul-txt': 'ulTxt',
    'lh-title': 'lhTitle', 'lh-sub': 'lhSub', 'quiz-label': 'quizLabel',
    'hist-title': 'histTitle', 'hist-sub': 'histSub',
    'st_title': 'st_title', 'st_sub': 'st_sub', 'st_sec1': 'st_sec1', 'st_l1': 'st_l1', 'st_d1': 'st_d1',
    'st_l2': 'st_l2', 'st_d2': 'st_d2', 'st_sec2': 'st_sec2', 'st_l3': 'st_l3', 'st_d3': 'st_d3',
    'st_l4': 'st_l4', 'st_d4': 'st_d4', 'st_sec3': 'st_sec3', 'st_l5': 'st_l5', 'st_d5': 'st_d5',
    'st_l6': 'st_l6', 'st_d6': 'st_d6', 'st_l7': 'st_l7', 'st_d7': 'st_d7',
    'st_sec4': 'st_sec4', 'st_l8': 'st_l8', 'st_d8': 'st_d8', 'st_l9': 'st_l9', 'st_d9': 'st_d9'
  };
  Object.entries(ids).forEach(([id, key]) => { const el = document.getElementById(id); if (el) el.textContent = t(key) });
  const h1 = document.getElementById('h-title'); if (h1) h1.innerHTML = t('title');
  const sub = document.getElementById('h-sub'); if (sub) sub.innerHTML = t('sub');
}

// ── LANG SWITCHER ─────────────────────────────────
let langOpen = false;
function toggleLang() { langOpen = !langOpen; document.getElementById('lang-drawer').classList.toggle('open', langOpen) }
document.addEventListener('click', e => { if (!e.target.closest('.lang-pill') && !e.target.closest('.lang-drawer')) { langOpen = false; document.getElementById('lang-drawer').classList.remove('open') } })

const LANG_MAP = {
  en: { label: 'EN', flag: '🇮🇳' },
  hi: { label: 'HI', flag: '🇮🇳' },
  bn: { label: 'BN', flag: '🇮🇳' },
  ta: { label: 'TA', flag: '🇮🇳' },
  te: { label: 'TE', flag: '🇮🇳' },
  mr: { label: 'MR', flag: '🇮🇳' }
};

function setLang(code, label, flag) {
  const info = LANG_MAP[code] || LANG_MAP.en;
  curLang = code;
  document.getElementById('lang-cur').textContent = label || info.label;
  document.getElementById('lang-flag').textContent = flag || info.flag;

  document.querySelectorAll('.lang-opt').forEach(o => o.classList.remove('active'));
  const drawerOpt = Array.from(document.querySelectorAll('.lang-opt')).find(o => o.getAttribute('onclick') && o.getAttribute('onclick').includes(`'${code}'`));
  if (drawerOpt) drawerOpt.classList.add('active');

  const uiSel = document.getElementById('set-ui-lang');
  if (uiSel && uiSel.value !== code) uiSel.value = code;

  applyLang();
  langOpen = false;
  const drawer = document.getElementById('lang-drawer');
  if (drawer) drawer.classList.remove('open');
  localStorage.setItem('geminiApiUiLang', code);
}

// ── NAVIGATION ───────────────────────────────────
function go(pg) {
  document.querySelectorAll('.page').forEach(p => { p.classList.remove('active'); p.style.display = 'none' });
  document.querySelectorAll('.ntab').forEach(t => t.classList.remove('active'));
  const el = document.getElementById('page-' + pg);
  el.style.display = 'block';
  requestAnimationFrame(() => requestAnimationFrame(() => {
    el.classList.add('active', 'fade-in');
    setTimeout(() => el.classList.remove('fade-in'), 500);
  }));
  document.getElementById('tab-' + pg).classList.add('active');
  if (pg === 'history') renderHistory('all');
  if (pg === 'learn') renderQuiz();
}

// ── INPUT TABS ──────────────────────────────────
function switchTab(t) {
  ['text', 'url', 'image'].forEach(x => {
    document.getElementById('inp-' + x).style.display = x === t ? 'block' : 'none';
    document.getElementById('itab-' + x).classList.toggle('active', x === t);
  });
}

let selectedImageBase64 = null;
let selectedImageMime = null;

document.getElementById('img-upload').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (!file) return;
  document.getElementById('img-name').textContent = file.name;
  document.getElementById('img-prev').style.display = 'block';
  document.getElementById('upload-zone').style.borderColor = 'var(--green)';

  const reader = new FileReader();
  reader.onload = function (evt) {
    selectedImageBase64 = evt.target.result.split(',')[1];
    selectedImageMime = file.type;
  };
  reader.readAsDataURL(file);
});

// ── EXAMPLES ─────────────────────────────────────
const EXAMPLES = {
  1: 'URGENT: Government announces FREE electricity for all households! Scheme starts April 1st — every family gets 200 units free. Register your Aadhaar now — deadline is 3 days! Share this with everyone! 🙏🙏🙏',
  2: 'Doctor reveals one SIMPLE TRICK that Big Pharma doesn\'t want you to know! This common kitchen ingredient CURES diabetes in 2 weeks! Thousands already reversed their condition. Watch before it gets deleted!',
  3: 'BREAKING: Massive earthquake hits Delhi, measuring 7.2 on the Richter scale. Multiple buildings collapsed in Central Delhi. Emergency services deployed. Share immediately!'
};
let lastEx = 0;
function loadEx(n) {
  document.getElementById('text-in').value = EXAMPLES[n];
  switchTab('text');
  lastEx = n;
}

// ── MOCK RESULTS ────────────────────────────────
const RESULTS = {
  1: {
    score: 82, level: 'high', badge: 'Likely Misinformation',
    issues: [{ name: 'Emotional manipulation', s: 'flagged', d: 'High' }, { name: 'Unverified govt claim', s: 'flagged', d: 'Confirmed' }, { name: 'Clickbait pattern', s: 'warn', d: 'Detected' }, { name: 'Source verification', s: 'flagged', d: 'Failed' }, { name: 'Factual accuracy', s: 'ok', d: 'Partial' }],
    explain: 'This message uses urgency and financial incentive — classic markers of misinformation. No official government communication would announce policy via WhatsApp or request Aadhaar via a link. The phrasing mirrors known phishing schemes targeting rural Indian users.',
    tip: 'Tip: Government schemes are always announced on pib.gov.in or MyGov.in — never through messaging apps first.',
    fc: [{ src: 'PIB Fact Check', claim: 'No such electricity scheme announced', v: 'False', c: 'red' }, { src: 'Alt News', claim: 'Recurring WhatsApp hoax — third occurrence', v: 'Hoax', c: 'red' }]
  },
  2: {
    score: 76, level: 'high', badge: 'Likely Misinformation',
    issues: [{ name: 'Medical misinformation', s: 'flagged', d: 'High' }, { name: 'Fake authority claim', s: 'flagged', d: 'Unverified' }, { name: 'Clickbait headline', s: 'flagged', d: 'Detected' }, { name: 'Cited sources', s: 'warn', d: 'Missing' }, { name: 'Treatment validity', s: 'ok', d: 'Partial' }],
    explain: '"One simple trick" is a known pattern from health misinformation campaigns. Diabetes requires ongoing medical supervision — no single intervention cures it. The absence of any clinical study citation is a major red flag.',
    tip: 'Tip: Legitimate medical claims cite peer-reviewed journals. If you cannot find the study on PubMed, treat it with skepticism.',
    fc: [{ src: 'WHO India', claim: 'No evidence for single-cure diabetes claims', v: 'False', c: 'red' }, { src: 'ICMR', claim: 'Diabetes requires ongoing management', v: 'Verified', c: 'green' }]
  },
  3: {
    score: 38, level: 'medium', badge: 'Needs Verification',
    issues: [{ name: 'Emotional trigger words', s: 'warn', d: 'Moderate' }, { name: 'Source verification', s: 'warn', d: 'Unclear' }, { name: 'Factual accuracy', s: 'ok', d: 'Likely true' }, { name: 'Clickbait pattern', s: 'ok', d: 'None' }, { name: 'Exaggeration', s: 'warn', d: 'Magnitude unclear' }],
    explain: 'The core claim may have a factual basis, but the "7.2" magnitude and "BREAKING" framing haven\'t been verified against USGS or IMD data. Breaking news is often exaggerated in the first hours. Wait for official sources.',
    tip: 'Tip: For earthquake news, check imd.gov.in or USGS Earthquake Hazards Program within minutes of a report.',
    fc: [{ src: 'IMD India', claim: 'Check official earthquake records', v: 'Verify', c: 'amber' }, { src: 'NDTV Fact Check', claim: 'Magnitude unconfirmed at time of pub', v: 'Unverified', c: 'amber' }]
  }
};

const loadSteps = ['Sending to Gemini...', 'Analyzing content patterns...', 'Checking source credibility...', 'Scoring misinformation signals...', 'Building your report...'];

function runAnalysis() {
  const apiKeyEl = document.getElementById('api-key-input');
  const apiKey = apiKeyEl ? apiKeyEl.value.trim() : "";
  const activeTab = document.querySelector('.itab.active').id.replace('itab-', '');
  let contentText = "";
  let base64 = null;
  let mime = null;

  if (activeTab === 'text') {
    contentText = document.getElementById('text-in').value.trim();
    if (!contentText) return;
  } else if (activeTab === 'url') {
    const url = document.getElementById('url-in').value.trim();
    if (!url) return;
    contentText = `Please analyze the following URL for MISINFORMATION, clickbait, and phishing risk: ${url}. Consider the domain credibility and URL structure.`;
  } else if (activeTab === 'image') {
    if (!selectedImageBase64) return;
    contentText = "Please analyze this image for misinformation, manipulated context, or fake news elements. Also analyze any text visible in the image.";
    base64 = selectedImageBase64;
    mime = selectedImageMime;
  }

  document.getElementById('r-empty').style.display = 'none';
  document.getElementById('r-loading').style.display = 'block';
  document.getElementById('r-content').style.display = 'none';
  document.getElementById('analyze-btn').disabled = true;

  let step = 0;
  const si = setInterval(() => {
    step = (step + 1) % loadSteps.length;
    const el = document.getElementById('load-txt');
    if (el) { el.style.opacity = 0; setTimeout(() => { el.textContent = loadSteps[step]; el.style.opacity = 1 }, 200) }
  }, 700);

  if (contentText || activeTab === 'image') {
    callGemini(apiKey, contentText, base64, mime).then(result => {
      clearInterval(si);
      document.getElementById('r-loading').style.display = 'none';
      addToHistory(activeTab, contentText || "Image Analysis", result);
      showResult(result);
      document.getElementById('analyze-btn').disabled = false;
    }).catch((e) => {
      console.error(e);
      clearInterval(si);
      document.getElementById('r-loading').style.display = 'none';
      document.getElementById('r-empty').style.display = 'flex';
      document.getElementById('analyze-btn').disabled = false;
      alert("Analysis Failed: " + e.message);
    });
  } else {
    clearInterval(si);
    document.getElementById('r-loading').style.display = 'none';
    document.getElementById('r-empty').style.display = 'flex';
    document.getElementById('analyze-btn').disabled = false;
    alert("Please provide text, a URL, or an image to analyze.");
  }
}

function addToHistory(tab, content, result) {
  let title = content.substring(0, 40) + '...';
  if (tab === 'image') title = document.getElementById('img-name').textContent;
  else if (tab === 'url') {
    const u = document.getElementById('url-in').value.trim();
    title = u.length > 40 ? u.substring(0, 40) + '...' : u;
  }

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) + ', ' + now.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit' });

  const entry = {
    title: title,
    date: dateStr,
    score: result.score,
    level: result.level,
    type: tab
  };
  HDATA.unshift(entry);
  if (HDATA.length > 50) HDATA.pop();
  localStorage.setItem('truthlensHistory', JSON.stringify(HDATA));
  if (document.getElementById('page-history').classList.contains('active')) {
    renderHistory('all');
  }
}

// ── GEMINI INTEGRATION ───────────────────────────
async function callGemini(apiKey, text, base64Image, mimeType) {
  const modelSelect = document.getElementById('set-model');
  const modelSetting = modelSelect ? modelSelect.value : 'gemini-2.5-flash';

  const res = await fetch(`http://localhost:3000/api/analyze`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      apiKey: apiKey,
      text: text,
      base64Image: base64Image,
      mimeType: mimeType,
      modelSetting: modelSetting
    })
  });

  const data = await res.json();
  if (data.error) throw new Error(data.error.message);

  return data;
}

// ── SHOW RESULT ──────────────────────────────────
function showResult(data) {
  document.getElementById('r-content').style.display = 'block';
  const now = new Date();
  document.getElementById('res-time').textContent = 'Analyzed ' + now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

  const sc = document.getElementById('r-score');
  sc.textContent = data.score + '%';
  sc.className = 'score-num ' + data.level;

  const badge = document.getElementById('r-badge');
  badge.className = 'risk-badge ' + data.level;
  const labels = { high: 'High risk', medium: 'Medium risk', low: 'Low risk' };
  badge.innerHTML = '<div class="rdot"></div>' + labels[data.level];

  const bar = document.getElementById('r-bar');
  bar.style.setProperty('--w', data.score + '%');
  bar.className = 'bar-fill ' + data.level;
  setTimeout(() => bar.style.width = data.score + '%', 50);

  const tw = document.getElementById('trust-badge-wrap');
  const tbClass = { high: 'flagged-b', medium: 'caution', low: 'verified' };
  const tbIcon = { high: '⚑', medium: '⚠', low: '✓' };
  tw.innerHTML = `<div class="trust-badge ${tbClass[data.level]}">${tbIcon[data.level]} ${data.badge || labels[data.level]}</div>`;

  const il = document.getElementById('issues-list');
  il.innerHTML = '';
  (data.issues || []).forEach((iss, i) => {
    const d = document.createElement('div');
    d.className = 'issue-row ' + iss.s;
    d.style.animationDelay = (i * 0.07) + 's';
    const ic = iss.s === 'flagged' ? '✕' : iss.s === 'warn' ? '!' : '✓';
    d.innerHTML = `<div class="issue-ic">${ic}</div><span class="issue-name">${iss.name}</span><span class="issue-tag">${iss.d}</span>`;
    il.appendChild(d);
  });

  document.getElementById('r-explain').textContent = data.explain || '';
  document.getElementById('r-tip').textContent = data.tip || '';

  const fcl = document.getElementById('fc-links');
  fcl.innerHTML = '';
  (data.fc || []).forEach(fc => {
    const vc = { red: 'var(--red)', green: 'var(--green)', amber: 'var(--amber)' };
    const vb = { red: 'var(--red-bg)', green: 'var(--green-bg)', amber: 'var(--amber-bg)' };
    const d = document.createElement('div');
    d.className = 'fc-row';
    d.innerHTML = `<div style="flex:1;min-width:0"><div class="fc-src">${fc.src}</div><div class="fc-claim">${fc.claim}</div></div><span class="fc-badge" style="background:${vb[fc.c]};color:${vc[fc.c]};border:1px solid ${vc[fc.c]}30">${fc.v}</span>`;
    fcl.appendChild(d);
  });
}

// ── HISTORY ──────────────────────────────────────
const defaultHistory = [
  { title: '"Government free electricity scheme — register now"', date: '25 Mar 2026, 11:42 AM', score: 82, level: 'high', type: 'text' },
  { title: 'twitter.com/user/status/17384920938', date: '24 Mar 2026, 4:15 PM', score: 56, level: 'medium', type: 'url' },
  { title: 'screenshot_whatsapp.jpg', date: '24 Mar 2026, 2:01 PM', score: 79, level: 'high', type: 'image' }
];
let HDATA = [];
try {
  HDATA = JSON.parse(localStorage.getItem('truthlensHistory'));
  if (!HDATA || !Array.isArray(HDATA)) HDATA = defaultHistory;
} catch (e) {
  HDATA = defaultHistory;
}

function renderHistory(f) {
  const list = document.getElementById('hist-list');
  const rows = HDATA.filter(h => f === 'all' || h.level === f || h.type === f);
  list.innerHTML = '';
  rows.forEach((h, i) => {
    const d = document.createElement('div');
    d.className = 'hrow';
    d.style.animationDelay = (i * 0.05) + 's';
    const ticon = { text: 'T', url: '↗', image: '⊞' };
    d.innerHTML = `<div class="htype">${ticon[h.type]}</div><div class="hcontent"><div class="htitle">${h.title}</div><div class="hdate">${h.date} · ${h.type}</div></div><div class="hscore ${h.level}">${h.score}%</div><div class="risk-badge ${h.level}"><div class="rdot"></div>${h.level === 'high' ? 'High' : h.level === 'medium' ? 'Medium' : 'Low'}</div>`;
    list.appendChild(d);
  });
  if (!rows.length) list.innerHTML = '<div style="padding:32px;text-align:center;color:var(--muted);font-size:13px">No results for this filter</div>';
}

function filterH(f, btn) {
  document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderHistory(f);
}

// ── QUIZ ─────────────────────────────────────────
const QUIZ = [
  { q: 'A message claims "The government will give ₹5,000 to all citizens — click here to register your Aadhaar." What\'s the most suspicious element?', meta: 'Question 1 of 3 · Scam patterns', opts: ['The amount seems too large', 'Govt policies aren\'t announced via WhatsApp links', 'The message is in Hindi', 'It mentions Aadhaar'], correct: 1, fb: 'Correct. Government schemes are announced on pib.gov.in or MyGov.in. Any link asking you to register your Aadhaar via messaging app is a phishing attempt.' },
  { q: 'A viral video shows flooding captioned "Monsoon floods in Mumbai, 2026." How do you verify it?', meta: 'Question 2 of 3 · Media literacy', opts: ['Trust it if the video looks real', 'Reverse image search key frames from the video', 'Check if you know anyone in Mumbai', 'Share with a disclaimer'], correct: 1, fb: 'Correct. Use InVID or Google reverse image search on key frames to check if footage predates the claimed event or comes from a different location.' },
  { q: 'Which headline is most likely misinformation?', meta: 'Question 3 of 3 · Headline patterns', opts: ['"India\'s GDP grows 6.8% in Q3, says RBI"', '"SHOCKING: Scientists reveal the vegetable that cures cancer"', '"Monsoon expected by June 1, IMD predicts"', '"Three arrested in Delhi over fraud, police confirm"'], correct: 1, fb: 'Correct. "SHOCKING" + superlative medical claim + no cited study = classic misinformation template. Legitimate health news cites specific studies and qualified researchers.' }
];
let qIdx = 0, qAnswered = false;

function renderQuiz() {
  const q = QUIZ[qIdx];
  document.getElementById('q-txt').textContent = q.q;
  document.getElementById('q-meta').textContent = q.meta;
  document.getElementById('quiz-fb').className = 'quiz-fb';
  qAnswered = false;
  const opts = document.getElementById('quiz-opts');
  opts.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const b = document.createElement('button');
    b.className = 'qopt';
    b.textContent = opt;
    b.onclick = () => answerQ(i);
    opts.appendChild(b);
  });
}

function answerQ(idx) {
  if (qAnswered) return;
  qAnswered = true;
  const q = QUIZ[qIdx];
  document.querySelectorAll('.qopt').forEach((b, i) => {
    if (i === q.correct) b.classList.add('correct');
    else if (i === idx && idx !== q.correct) b.classList.add('wrong');
  });
  const fb = document.getElementById('quiz-fb');
  fb.textContent = q.fb;
  fb.classList.add('show');
}

function nextQ() { qIdx = (qIdx + 1) % QUIZ.length; renderQuiz() }

// ── INIT ────────────────────────────────────────
const savedKey = localStorage.getItem('geminiApiKey');
const akEl = document.getElementById('api-key-input');
if (savedKey && akEl) akEl.value = savedKey;

const uiLang = localStorage.getItem('geminiApiUiLang');
if (uiLang) setLang(uiLang);

const anLang = localStorage.getItem('geminiApiAnLang');
const anEl = document.getElementById('set-an-lang');
if (anLang && anEl) anEl.value = anLang;

const modelSettingStr = localStorage.getItem('geminiApiModel');
if (modelSettingStr) {
  const modelSelect = document.getElementById('set-model');
  if (modelSelect) modelSelect.value = modelSettingStr;
}

const apiKeyInput = document.getElementById('api-key-input');
if (apiKeyInput) apiKeyInput.addEventListener('change', (e) => localStorage.setItem('geminiApiKey', e.target.value.trim()));

const uiLangSelect = document.getElementById('set-ui-lang');
if (uiLangSelect) uiLangSelect.addEventListener('change', (e) => setLang(e.target.value));

const anLangSelect = document.getElementById('set-an-lang');
if (anLangSelect) anLangSelect.addEventListener('change', (e) => localStorage.setItem('geminiApiAnLang', e.target.value));

if (document.getElementById('set-model')) {
  document.getElementById('set-model').addEventListener('change', (e) => localStorage.setItem('geminiApiModel', e.target.value));
}

renderQuiz();
renderHistory('all');
applyLang();
