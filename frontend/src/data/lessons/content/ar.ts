// Arabic (Modern Standard) lesson content — real vocabulary/phrases with transliteration, fully offline.
import { LessonContent } from "../meta";

const AR: Record<string, LessonContent> = {
  greetings: {
    intro: "Learn the essential words for greeting people and saying goodbye in Arabic.",
    examples: [
      { target: "مرحبا", translit: "Marhaban", meaning: "A friendly greeting" },
      { target: "صباح الخير", translit: "Sabah al-khair", meaning: "Greeting used before noon" },
      { target: "شكرا", translit: "Shukran", meaning: "Expressing gratitude" },
      { target: "مع السلامة", translit: "Ma'a as-salama", meaning: "Said when leaving" },
    ],
    quiz: [
      { type: "mc", q: "What does 'مرحبا' mean?", options: ["A friendly greeting", "Said when leaving", "Expressing gratitude", "Greeting before noon"], a: 0 },
      { type: "fill", q: "How do you say 'Expressing gratitude' in Arabic?", a: "شكرا" },
      { type: "mc", q: "Which word means 'Said when leaving'?", options: ["مرحبا", "صباح الخير", "مع السلامة", "شكرا"], a: 2 },
    ],
  },
  numbers: {
    intro: "Practice counting from one to twenty in Arabic.",
    examples: [
      { target: "واحد", translit: "Wahid", meaning: "The number 1" },
      { target: "خمسة", translit: "Khamsa", meaning: "The number 5" },
      { target: "عشرة", translit: "Ashara", meaning: "The number 10" },
      { target: "عشرون", translit: "Ishrun", meaning: "The number 20" },
    ],
    quiz: [
      { type: "mc", q: "What does 'عشرة' mean?", options: ["The number 1", "The number 5", "The number 10", "The number 20"], a: 2 },
      { type: "fill", q: "How do you say 'The number 20' in Arabic?", a: "عشرون" },
      { type: "mc", q: "Which word means 'The number 1'?", options: ["خمسة", "واحد", "عشرة", "عشرون"], a: 1 },
    ],
  },
  family: {
    intro: "Learn words for close family members in Arabic.",
    examples: [
      { target: "أم", translit: "Umm", meaning: "Female parent" },
      { target: "أب", translit: "Ab", meaning: "Male parent" },
      { target: "أخت", translit: "Ukht", meaning: "Female sibling" },
      { target: "أخ", translit: "Akh", meaning: "Male sibling" },
    ],
    quiz: [
      { type: "mc", q: "What does 'أم' mean?", options: ["Male parent", "Female parent", "Male sibling", "Female sibling"], a: 1 },
      { type: "fill", q: "How do you say 'Male sibling' in Arabic?", a: "أخ" },
      { type: "mc", q: "Which word means 'Female sibling'?", options: ["أم", "أب", "أخت", "أخ"], a: 2 },
    ],
  },
  colors: {
    intro: "Learn the four most common colors in Arabic.",
    examples: [
      { target: "أحمر", translit: "Ahmar", meaning: "The color of fire" },
      { target: "أزرق", translit: "Azraq", meaning: "The color of the sky" },
      { target: "أخضر", translit: "Akhdar", meaning: "The color of grass" },
      { target: "أصفر", translit: "Asfar", meaning: "The color of the sun" },
    ],
    quiz: [
      { type: "mc", q: "What does 'أزرق' mean?", options: ["The color of fire", "The color of the sky", "The color of grass", "The color of the sun"], a: 1 },
      { type: "fill", q: "How do you say 'The color of grass' in Arabic?", a: "أخضر" },
      { type: "mc", q: "Which word means 'The color of fire'?", options: ["أحمر", "أزرق", "أخضر", "أصفر"], a: 0 },
    ],
  },
  days: {
    intro: "Learn a few days of the week in Arabic.",
    examples: [
      { target: "الإثنين", translit: "Al-ithnayn", meaning: "First workday" },
      { target: "الجمعة", translit: "Al-jum'a", meaning: "Last workday" },
      { target: "السبت", translit: "As-sabt", meaning: "First weekend day" },
      { target: "الأحد", translit: "Al-ahad", meaning: "Second weekend day" },
    ],
    quiz: [
      { type: "mc", q: "What does 'الجمعة' mean?", options: ["First workday", "Last workday", "First weekend day", "Second weekend day"], a: 1 },
      { type: "fill", q: "How do you say 'Second weekend day' in Arabic?", a: "الأحد" },
      { type: "mc", q: "Which word means 'First workday'?", options: ["الإثنين", "الجمعة", "السبت", "الأحد"], a: 0 },
    ],
  },
  food_basics: {
    intro: "Learn basic food and drink words in Arabic.",
    examples: [
      { target: "ماء", translit: "Ma'", meaning: "A clear drink" },
      { target: "خبز", translit: "Khubz", meaning: "Baked food staple" },
      { target: "أرز", translit: "Aruzz", meaning: "A grain staple food" },
      { target: "قهوة", translit: "Qahwa", meaning: "A hot caffeinated drink" },
    ],
    quiz: [
      { type: "mc", q: "What does 'أرز' mean?", options: ["A clear drink", "Baked food staple", "A grain staple food", "A hot caffeinated drink"], a: 2 },
      { type: "fill", q: "How do you say 'A hot caffeinated drink' in Arabic?", a: "قهوة" },
      { type: "mc", q: "Which word means 'A clear drink'?", options: ["ماء", "خبز", "أرز", "قهوة"], a: 0 },
    ],
  },
  shopping: {
    intro: "Useful phrases for shopping and paying in Arabic.",
    examples: [
      { target: "كم سعر هذا؟", translit: "Kam si'r hadha?", meaning: "Asking for a price" },
      { target: "أريد هذا", translit: "Ureedu hadha", meaning: "Choosing an item" },
      { target: "خصم", translit: "Khasm", meaning: "A price reduction" },
      { target: "نقدا", translit: "Naqdan", meaning: "Paper money" },
    ],
    quiz: [
      { type: "mc", q: "What does 'خصم' mean?", options: ["Asking for a price", "Choosing an item", "A price reduction", "Paper money"], a: 2 },
      { type: "fill", q: "How do you say 'Paper money' in Arabic?", a: "نقدا" },
      { type: "mc", q: "Which phrase means 'Asking for a price'?", options: ["أريد هذا", "كم سعر هذا؟", "خصم", "نقدا"], a: 1 },
    ],
  },
  directions: {
    intro: "Learn to ask for and follow directions in Arabic.",
    examples: [
      { target: "يسار", translit: "Yasar", meaning: "Opposite of right" },
      { target: "يمين", translit: "Yamin", meaning: "Opposite of left" },
      { target: "إلى الأمام مباشرة", translit: "Ila al-amam mubashara", meaning: "Go forward" },
      { target: "أين الحمام؟", translit: "Ayna al-hammam?", meaning: "Asking for a location" },
    ],
    quiz: [
      { type: "mc", q: "What does 'إلى الأمام مباشرة' mean?", options: ["Opposite of right", "Opposite of left", "Go forward", "Asking for a location"], a: 2 },
      { type: "fill", q: "How do you say 'Opposite of right' in Arabic?", a: "يسار" },
      { type: "mc", q: "Which phrase means 'Asking for a location'?", options: ["يسار", "يمين", "إلى الأمام مباشرة", "أين الحمام؟"], a: 3 },
    ],
  },
  time: {
    intro: "Learn to talk about time of day in Arabic.",
    examples: [
      { target: "كم الساعة؟", translit: "Kam as-sa'a?", meaning: "Asking the current time" },
      { target: "صباح", translit: "Sabah", meaning: "Early part of the day" },
      { target: "بعد الظهر", translit: "Ba'd az-zuhr", meaning: "Midday part of the day" },
      { target: "منتصف الليل", translit: "Muntasaf al-layl", meaning: "12 AM" },
    ],
    quiz: [
      { type: "mc", q: "What does 'منتصف الليل' mean?", options: ["Asking the current time", "Early part of the day", "Midday part of the day", "12 AM"], a: 3 },
      { type: "fill", q: "How do you say 'Early part of the day' in Arabic?", a: "صباح" },
      { type: "mc", q: "Which phrase means 'Asking the current time'?", options: ["كم الساعة؟", "صباح", "بعد الظهر", "منتصف الليل"], a: 0 },
    ],
  },
  weather: {
    intro: "Describe common weather conditions in Arabic.",
    examples: [
      { target: "إنها تمطر", translit: "Innaha tumtir", meaning: "Rain is falling" },
      { target: "مشمس", translit: "Mushmis", meaning: "Bright with sunshine" },
      { target: "بارد", translit: "Barid", meaning: "Low temperature" },
      { target: "حار", translit: "Har", meaning: "High temperature" },
    ],
    quiz: [
      { type: "mc", q: "What does 'مشمس' mean?", options: ["Rain is falling", "Bright with sunshine", "Low temperature", "High temperature"], a: 1 },
      { type: "fill", q: "How do you say 'High temperature' in Arabic?", a: "حار" },
      { type: "mc", q: "Which phrase means 'Rain is falling'?", options: ["إنها تمطر", "مشمس", "بارد", "حار"], a: 0 },
    ],
  },
  hobbies: {
    intro: "Talk about free-time activities in Arabic.",
    examples: [
      { target: "القراءة", translit: "Al-qira'a", meaning: "Enjoying books" },
      { target: "الموسيقى", translit: "Al-musiqa", meaning: "Listening to songs" },
      { target: "الرياضة", translit: "Ar-riyada", meaning: "Physical games" },
      { target: "الطبخ", translit: "At-tabkh", meaning: "Preparing food" },
    ],
    quiz: [
      { type: "mc", q: "What does 'الطبخ' mean?", options: ["Enjoying books", "Listening to songs", "Physical games", "Preparing food"], a: 3 },
      { type: "fill", q: "How do you say 'Enjoying books' in Arabic?", a: "القراءة" },
      { type: "mc", q: "Which word means 'Physical games'?", options: ["القراءة", "الموسيقى", "الرياضة", "الطبخ"], a: 2 },
    ],
  },
  body_health: {
    intro: "Learn body parts and how to describe feeling unwell in Arabic.",
    examples: [
      { target: "رأس", translit: "Ra's", meaning: "Top part of the body" },
      { target: "بطن", translit: "Batn", meaning: "Belly area" },
      { target: "أشعر بالمرض", translit: "Ash'uru bil-marad", meaning: "Not feeling well" },
      { target: "طبيب", translit: "Tabib", meaning: "Medical professional" },
    ],
    quiz: [
      { type: "mc", q: "What does 'بطن' mean?", options: ["Top part of the body", "Belly area", "Not feeling well", "Medical professional"], a: 1 },
      { type: "fill", q: "How do you say 'Medical professional' in Arabic?", a: "طبيب" },
      { type: "mc", q: "Which phrase means 'Not feeling well'?", options: ["رأس", "بطن", "أشعر بالمرض", "طبيب"], a: 2 },
    ],
  },
  restaurant: {
    intro: "Order food and ask for the bill in Arabic.",
    examples: [
      { target: "قائمة الطعام", translit: "Qa'imat at-ta'am", meaning: "List of dishes" },
      { target: "سأتناول هذا", translit: "Sa'atanawalu hadha", meaning: "Ordering a dish" },
      { target: "الفاتورة من فضلك", translit: "Al-fatura min fadlik", meaning: "Asking to pay" },
      { target: "لذيذ", translit: "Lazeez", meaning: "Tastes great" },
    ],
    quiz: [
      { type: "mc", q: "What does 'الفاتورة من فضلك' mean?", options: ["List of dishes", "Ordering a dish", "Asking to pay", "Tastes great"], a: 2 },
      { type: "fill", q: "How do you say 'Tastes great' in Arabic?", a: "لذيذ" },
      { type: "mc", q: "Which phrase means 'List of dishes'?", options: ["قائمة الطعام", "سأتناول هذا", "الفاتورة من فضلك", "لذيذ"], a: 0 },
    ],
  },
  travel: {
    intro: "Key words for airports and train stations in Arabic.",
    examples: [
      { target: "مطار", translit: "Matar", meaning: "Place planes depart from" },
      { target: "تذكرة", translit: "Tadhkara", meaning: "Pass to travel" },
      { target: "جواز سفر", translit: "Jawaz safar", meaning: "Travel ID document" },
      { target: "محطة القطار", translit: "Mahattat al-qitar", meaning: "Place trains depart from" },
    ],
    quiz: [
      { type: "mc", q: "What does 'جواز سفر' mean?", options: ["Place planes depart from", "Pass to travel", "Travel ID document", "Place trains depart from"], a: 2 },
      { type: "fill", q: "How do you say 'Pass to travel' in Arabic?", a: "تذكرة" },
      { type: "mc", q: "Which word means 'Place trains depart from'?", options: ["مطار", "تذكرة", "جواز سفر", "محطة القطار"], a: 3 },
    ],
  },
  work: {
    intro: "Talk about your job and workplace in Arabic.",
    examples: [
      { target: "اجتماع", translit: "Ijtima'", meaning: "A work gathering" },
      { target: "الموعد النهائي", translit: "Al-maw'id an-nihai", meaning: "Due date" },
      { target: "زميل", translit: "Zamil", meaning: "Co-worker" },
      { target: "مكتب", translit: "Maktab", meaning: "Workplace" },
    ],
    quiz: [
      { type: "mc", q: "What does 'الموعد النهائي' mean?", options: ["A work gathering", "Due date", "Co-worker", "Workplace"], a: 1 },
      { type: "fill", q: "How do you say 'Co-worker' in Arabic?", a: "زميل" },
      { type: "mc", q: "Which word means 'A work gathering'?", options: ["اجتماع", "الموعد النهائي", "زميل", "مكتب"], a: 0 },
    ],
  },
  emotions: {
    intro: "Describe how you feel in Arabic.",
    examples: [
      { target: "سعيد", translit: "Sa'eed", meaning: "Feeling joy" },
      { target: "حزين", translit: "Hazeen", meaning: "Feeling down" },
      { target: "متعب", translit: "Muta'ab", meaning: "Needing rest" },
      { target: "متحمس", translit: "Mutahammis", meaning: "Feeling enthusiastic" },
    ],
    quiz: [
      { type: "mc", q: "What does 'متعب' mean?", options: ["Feeling joy", "Feeling down", "Needing rest", "Feeling enthusiastic"], a: 2 },
      { type: "fill", q: "How do you say 'Feeling enthusiastic' in Arabic?", a: "متحمس" },
      { type: "mc", q: "Which word means 'Feeling joy'?", options: ["سعيد", "حزين", "متعب", "متحمس"], a: 0 },
    ],
  },
  technology: {
    intro: "Learn common phone and internet vocabulary in Arabic.",
    examples: [
      { target: "هاتف", translit: "Hatif", meaning: "Device for calls" },
      { target: "إنترنت", translit: "Internet", meaning: "Global network" },
      { target: "كلمة السر", translit: "Kalimat as-sirr", meaning: "Secret access code" },
      { target: "بطارية", translit: "Battariya", meaning: "Stores power" },
    ],
    quiz: [
      { type: "mc", q: "What does 'كلمة السر' mean?", options: ["Device for calls", "Global network", "Secret access code", "Stores power"], a: 2 },
      { type: "fill", q: "How do you say 'Stores power' in Arabic?", a: "بطارية" },
      { type: "mc", q: "Which word means 'Global network'?", options: ["هاتف", "إنترنت", "كلمة السر", "بطارية"], a: 1 },
    ],
  },
  home: {
    intro: "Learn common room and furniture words in Arabic.",
    examples: [
      { target: "مطبخ", translit: "Matbakh", meaning: "Room for cooking" },
      { target: "غرفة نوم", translit: "Ghurfat nawm", meaning: "Room for sleeping" },
      { target: "طاولة", translit: "Tawila", meaning: "Furniture to eat/work on" },
      { target: "كرسي", translit: "Kursi", meaning: "Furniture for sitting" },
    ],
    quiz: [
      { type: "mc", q: "What does 'غرفة نوم' mean?", options: ["Room for cooking", "Room for sleeping", "Furniture to eat/work on", "Furniture for sitting"], a: 1 },
      { type: "fill", q: "How do you say 'Furniture for sitting' in Arabic?", a: "كرسي" },
      { type: "mc", q: "Which word means 'Room for cooking'?", options: ["مطبخ", "غرفة نوم", "طاولة", "كرسي"], a: 0 },
    ],
  },
  opinions: {
    intro: "Learn phrases for sharing your point of view in Arabic.",
    examples: [
      { target: "أعتقد أن", translit: "A'taqidu anna", meaning: "Introducing an opinion" },
      { target: "أوافق", translit: "Uwafiq", meaning: "Sharing the same view" },
      { target: "لا أوافق", translit: "La uwafiq", meaning: "Having a different view" },
      { target: "في رأيي", translit: "Fi ra'yi", meaning: "Introducing a personal view" },
    ],
    quiz: [
      { type: "mc", q: "What does 'لا أوافق' mean?", options: ["Introducing an opinion", "Sharing the same view", "Having a different view", "Introducing a personal view"], a: 2 },
      { type: "fill", q: "How do you say 'Sharing the same view' in Arabic?", a: "أوافق" },
      { type: "mc", q: "Which phrase means 'Introducing an opinion'?", options: ["أعتقد أن", "أوافق", "لا أوافق", "في رأيي"], a: 0 },
    ],
  },
  past_tense: {
    intro: "Talk about things that already happened in Arabic.",
    examples: [
      { target: "أمس", translit: "Ams", meaning: "The day before today" },
      { target: "ذهبت", translit: "Dhahabtu", meaning: "Past of 'I go'" },
      { target: "أكلت", translit: "Akaltu", meaning: "Past of 'I eat'" },
      { target: "الأسبوع الماضي", translit: "Al-usbu' al-madi", meaning: "The week before this one" },
    ],
    quiz: [
      { type: "mc", q: "What does 'ذهبت' mean?", options: ["The day before today", "Past of 'I go'", "Past of 'I eat'", "The week before this one"], a: 1 },
      { type: "fill", q: "How do you say 'Past of I eat' in Arabic?", a: "أكلت" },
      { type: "mc", q: "Which phrase means 'The day before today'?", options: ["أمس", "ذهبت", "أكلت", "الأسبوع الماضي"], a: 0 },
    ],
  },
  future_plans: {
    intro: "Talk about plans and future events in Arabic.",
    examples: [
      { target: "غدا", translit: "Ghadan", meaning: "The day after today" },
      { target: "سأذهب", translit: "Sa'adhhabu", meaning: "Future of 'I go'" },
      { target: "العام القادم", translit: "Al-'am al-qadim", meaning: "The year after this one" },
      { target: "أخطط لـ", translit: "Ukhattitu li", meaning: "Expressing intent" },
    ],
    quiz: [
      { type: "mc", q: "What does 'سأذهب' mean?", options: ["The day after today", "Future of 'I go'", "The year after this one", "Expressing intent"], a: 1 },
      { type: "fill", q: "How do you say 'Expressing intent' in Arabic?", a: "أخطط لـ" },
      { type: "mc", q: "Which phrase means 'The day after today'?", options: ["غدا", "سأذهب", "العام القادم", "أخطط لـ"], a: 0 },
    ],
  },
  socializing: {
    intro: "Casual phrases for small talk with friends in Arabic.",
    examples: [
      { target: "كيف حالك؟", translit: "Kayfa haluk?", meaning: "Casual greeting" },
      { target: "لم أرك منذ فترة طويلة", translit: "Lam araka mundhu fatra taweela", meaning: "Said after a while apart" },
      { target: "لنتقابل", translit: "Linataqabal", meaning: "Suggesting to meet" },
      { target: "سعيد برؤيتك", translit: "Sa'eed biru'yatik", meaning: "Friendly greeting" },
    ],
    quiz: [
      { type: "mc", q: "What does 'لم أرك منذ فترة طويلة' mean?", options: ["Casual greeting", "Said after a while apart", "Suggesting to meet", "Friendly greeting"], a: 1 },
      { type: "fill", q: "How do you say 'Suggesting to meet' in Arabic?", a: "لنتقابل" },
      { type: "mc", q: "Which phrase is a casual greeting?", options: ["كيف حالك؟", "لم أرك منذ فترة طويلة", "لنتقابل", "سعيد برؤيتك"], a: 0 },
    ],
  },
  negotiating: {
    intro: "Bargain and negotiate prices politely in Arabic.",
    examples: [
      { target: "هل يمكنك تخفيض السعر؟", translit: "Hal yumkinuka takhfid as-si'r?", meaning: "Asking for a discount" },
      { target: "هذا غالٍ جدا", translit: "Hadha ghalin jiddan", meaning: "Complaining about price" },
      { target: "العرض الأخير", translit: "Al-'ard al-akheer", meaning: "Last price offered" },
      { target: "اتفقنا", translit: "Ittafaqna", meaning: "Agreement reached" },
    ],
    quiz: [
      { type: "mc", q: "What does 'العرض الأخير' mean?", options: ["Asking for a discount", "Complaining about price", "Last price offered", "Agreement reached"], a: 2 },
      { type: "fill", q: "How do you say 'Agreement reached' in Arabic?", a: "اتفقنا" },
      { type: "mc", q: "Which phrase means 'Asking for a discount'?", options: ["هل يمكنك تخفيض السعر؟", "هذا غالٍ جدا", "العرض الأخير", "اتفقنا"], a: 0 },
    ],
  },
  news_media: {
    intro: "Vocabulary for reading and discussing the news in Arabic.",
    examples: [
      { target: "أخبار", translit: "Akhbar", meaning: "Recent information" },
      { target: "جريدة", translit: "Jarida", meaning: "Printed news publication" },
      { target: "وفقا لـ", translit: "Wafqan li", meaning: "Citing a source" },
      { target: "أخبار عاجلة", translit: "Akhbar 'ajila", meaning: "Urgent new report" },
    ],
    quiz: [
      { type: "mc", q: "What does 'أخبار عاجلة' mean?", options: ["Recent information", "Printed news publication", "Citing a source", "Urgent new report"], a: 3 },
      { type: "fill", q: "How do you say 'Citing a source' in Arabic?", a: "وفقا لـ" },
      { type: "mc", q: "Which word means 'Printed news publication'?", options: ["أخبار", "جريدة", "وفقا لـ", "أخبار عاجلة"], a: 1 },
    ],
  },
  business: {
    intro: "Formal vocabulary for business settings in Arabic.",
    examples: [
      { target: "عقد", translit: "Aqd", meaning: "A legal agreement" },
      { target: "اجتماع", translit: "Ijtima'", meaning: "A business gathering" },
      { target: "الموعد النهائي", translit: "Al-maw'id an-nihai", meaning: "Due date" },
      { target: "فاتورة", translit: "Fatura", meaning: "A bill for payment" },
    ],
    quiz: [
      { type: "mc", q: "What does 'فاتورة' mean?", options: ["A legal agreement", "A business gathering", "Due date", "A bill for payment"], a: 3 },
      { type: "fill", q: "How do you say 'A legal agreement' in Arabic?", a: "عقد" },
      { type: "mc", q: "Which word means 'Due date'?", options: ["عقد", "اجتماع", "الموعد النهائي", "فاتورة"], a: 2 },
    ],
  },
  idioms: {
    intro: "Learn common idiomatic expressions in Arabic.",
    examples: [
      { target: "كسر الجمود", translit: "Kasr al-jumud", meaning: "Start a conversation easily" },
      { target: "سهل للغاية", translit: "Sahl lil-ghaya", meaning: "Something very easy" },
      { target: "الوقت يمر سريعا", translit: "Al-waqt yamurru sari'an", meaning: "Time passes quickly" },
      { target: "من وقت لآخر", translit: "Min waqtin li'akhar", meaning: "Occasionally" },
    ],
    quiz: [
      { type: "mc", q: "What does 'سهل للغاية' mean?", options: ["Start a conversation easily", "Something very easy", "Time passes quickly", "Occasionally"], a: 1 },
      { type: "fill", q: "How do you say 'Occasionally' in Arabic?", a: "من وقت لآخر" },
      { type: "mc", q: "Which idiom means 'Time passes quickly'?", options: ["كسر الجمود", "سهل للغاية", "الوقت يمر سريعا", "من وقت لآخر"], a: 2 },
    ],
  },
  debate: {
    intro: "Phrases for debating and persuading others in Arabic.",
    examples: [
      { target: "أعتقد بشدة", translit: "A'taqidu bishidda", meaning: "Stating a firm opinion" },
      { target: "من ناحية أخرى", translit: "Min nahiya ukhra", meaning: "Presenting a contrast" },
      { target: "تظهر الأدلة", translit: "Tuzhiru al-adilla", meaning: "Citing proof" },
      { target: "في الختام", translit: "Fi al-khitam", meaning: "Summarizing an argument" },
    ],
    quiz: [
      { type: "mc", q: "What does 'من ناحية أخرى' mean?", options: ["Stating a firm opinion", "Presenting a contrast", "Citing proof", "Summarizing an argument"], a: 1 },
      { type: "fill", q: "How do you say 'Summarizing an argument' in Arabic?", a: "في الختام" },
      { type: "mc", q: "Which phrase means 'Citing proof'?", options: ["أعتقد بشدة", "من ناحية أخرى", "تظهر الأدلة", "في الختام"], a: 2 },
    ],
  },
  culture: {
    intro: "Vocabulary about traditions and heritage in Arabic.",
    examples: [
      { target: "تقليد", translit: "Taqleed", meaning: "A long-held custom" },
      { target: "مهرجان", translit: "Mahrajan", meaning: "A celebration event" },
      { target: "عرف", translit: "Urf", meaning: "A usual practice" },
      { target: "تراث", translit: "Turath", meaning: "Inherited culture" },
    ],
    quiz: [
      { type: "mc", q: "What does 'مهرجان' mean?", options: ["A long-held custom", "A celebration event", "A usual practice", "Inherited culture"], a: 1 },
      { type: "fill", q: "How do you say 'Inherited culture' in Arabic?", a: "تراث" },
      { type: "mc", q: "Which word means 'A usual practice'?", options: ["تقليد", "مهرجان", "عرف", "تراث"], a: 2 },
    ],
  },
  formal_writing: {
    intro: "Phrases for writing formal letters and emails in Arabic.",
    examples: [
      { target: "السيد/السيدة العزيز", translit: "As-sayyid/as-sayyida al-'azeez", meaning: "Formal letter opening" },
      { target: "مع خالص التقدير", translit: "Ma'a khalis at-taqdeer", meaning: "Formal letter closing" },
      { target: "أكتب إليكم لـ", translit: "Aktubu ilaykum li", meaning: "Stating the letter's purpose" },
      { target: "يرجى إيجاد المرفق", translit: "Yurja eejad al-murfaq", meaning: "Referring to an attachment" },
    ],
    quiz: [
      { type: "mc", q: "What does 'مع خالص التقدير' mean?", options: ["Formal letter opening", "Formal letter closing", "Stating the letter's purpose", "Referring to an attachment"], a: 1 },
      { type: "fill", q: "How do you say 'Formal letter opening' in Arabic?", a: "السيد/السيدة العزيز" },
      { type: "mc", q: "Which phrase refers to an attachment?", options: ["السيد/السيدة العزيز", "مع خالص التقدير", "أكتب إليكم لـ", "يرجى إيجاد المرفق"], a: 3 },
    ],
  },
  advanced_conversation: {
    intro: "Nuanced phrases for advanced, fluent conversation in Arabic.",
    examples: [
      { target: "فرق دقيق", translit: "Farq daqeeq", meaning: "A subtle difference" },
      { target: "بعبارة أخرى", translit: "Bi'ibara ukhra", meaning: "Rephrasing something" },
      { target: "مع ذلك", translit: "Ma'a dhalik", meaning: "Adding a contrasting point" },
      { target: "التوضيح بالتفصيل", translit: "At-tawdeeh bit-tafseel", meaning: "Explaining in more detail" },
    ],
    quiz: [
      { type: "mc", q: "What does 'فرق دقيق' mean?", options: ["A subtle difference", "Rephrasing something", "Adding a contrasting point", "Explaining in more detail"], a: 0 },
      { type: "fill", q: "How do you say 'Explaining in more detail' in Arabic?", a: "التوضيح بالتفصيل" },
      { type: "mc", q: "Which phrase means 'Adding a contrasting point'?", options: ["فرق دقيق", "بعبارة أخرى", "مع ذلك", "التوضيح بالتفصيل"], a: 2 },
    ],
  },
};

export default AR;
