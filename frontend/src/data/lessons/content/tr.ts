// Turkish lesson content — real vocabulary/phrases, fully offline.
import { LessonContent } from "../meta";

const TR: Record<string, LessonContent> = {
  greetings: {
    intro: "Learn the essential words for greeting people and saying goodbye in Turkish.",
    examples: [
      { target: "Merhaba", meaning: "A friendly greeting" },
      { target: "Günaydın", meaning: "Greeting used before noon" },
      { target: "Teşekkürler", meaning: "Expressing gratitude" },
      { target: "Hoşça kal", meaning: "Said when leaving" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Merhaba' mean?", options: ["A friendly greeting", "Said when leaving", "Expressing gratitude", "Greeting before noon"], a: 0 },
      { type: "fill", q: "How do you say 'Expressing gratitude' in Turkish?", a: "Teşekkürler" },
      { type: "mc", q: "Which word means 'Said when leaving'?", options: ["Merhaba", "Günaydın", "Hoşça kal", "Teşekkürler"], a: 2 },
    ],
  },
  numbers: {
    intro: "Practice counting from one to twenty in Turkish.",
    examples: [
      { target: "Bir", meaning: "The number 1" },
      { target: "Beş", meaning: "The number 5" },
      { target: "On", meaning: "The number 10" },
      { target: "Yirmi", meaning: "The number 20" },
    ],
    quiz: [
      { type: "mc", q: "What does 'On' mean?", options: ["The number 1", "The number 5", "The number 10", "The number 20"], a: 2 },
      { type: "fill", q: "How do you say 'The number 20' in Turkish?", a: "Yirmi" },
      { type: "mc", q: "Which word means 'The number 1'?", options: ["Beş", "Bir", "On", "Yirmi"], a: 1 },
    ],
  },
  family: {
    intro: "Learn words for close family members in Turkish.",
    examples: [
      { target: "Anne", meaning: "Female parent" },
      { target: "Baba", meaning: "Male parent" },
      { target: "Kız kardeş", meaning: "Female sibling" },
      { target: "Erkek kardeş", meaning: "Male sibling" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Anne' mean?", options: ["Male parent", "Female parent", "Male sibling", "Female sibling"], a: 1 },
      { type: "fill", q: "How do you say 'Male sibling' in Turkish?", a: "Erkek kardeş" },
      { type: "mc", q: "Which word means 'Female sibling'?", options: ["Anne", "Baba", "Kız kardeş", "Erkek kardeş"], a: 2 },
    ],
  },
  colors: {
    intro: "Learn the four most common colors in Turkish.",
    examples: [
      { target: "Kırmızı", meaning: "The color of fire" },
      { target: "Mavi", meaning: "The color of the sky" },
      { target: "Yeşil", meaning: "The color of grass" },
      { target: "Sarı", meaning: "The color of the sun" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Mavi' mean?", options: ["The color of fire", "The color of the sky", "The color of grass", "The color of the sun"], a: 1 },
      { type: "fill", q: "How do you say 'The color of grass' in Turkish?", a: "Yeşil" },
      { type: "mc", q: "Which word means 'The color of fire'?", options: ["Kırmızı", "Mavi", "Yeşil", "Sarı"], a: 0 },
    ],
  },
  days: {
    intro: "Learn a few days of the week in Turkish.",
    examples: [
      { target: "Pazartesi", meaning: "First workday" },
      { target: "Cuma", meaning: "Last workday" },
      { target: "Cumartesi", meaning: "First weekend day" },
      { target: "Pazar", meaning: "Second weekend day" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Cuma' mean?", options: ["First workday", "Last workday", "First weekend day", "Second weekend day"], a: 1 },
      { type: "fill", q: "How do you say 'Second weekend day' in Turkish?", a: "Pazar" },
      { type: "mc", q: "Which word means 'First workday'?", options: ["Pazartesi", "Cuma", "Cumartesi", "Pazar"], a: 0 },
    ],
  },
  food_basics: {
    intro: "Learn basic food and drink words in Turkish.",
    examples: [
      { target: "Su", meaning: "A clear drink" },
      { target: "Ekmek", meaning: "Baked food staple" },
      { target: "Pirinç", meaning: "A grain staple food" },
      { target: "Kahve", meaning: "A hot caffeinated drink" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Pirinç' mean?", options: ["A clear drink", "Baked food staple", "A grain staple food", "A hot caffeinated drink"], a: 2 },
      { type: "fill", q: "How do you say 'A hot caffeinated drink' in Turkish?", a: "Kahve" },
      { type: "mc", q: "Which word means 'A clear drink'?", options: ["Su", "Ekmek", "Pirinç", "Kahve"], a: 0 },
    ],
  },
  shopping: {
    intro: "Useful phrases for shopping and paying in Turkish.",
    examples: [
      { target: "Bu ne kadar?", meaning: "Asking for a price" },
      { target: "Bunu istiyorum", meaning: "Choosing an item" },
      { target: "İndirim", meaning: "A price reduction" },
      { target: "Nakit", meaning: "Paper money" },
    ],
    quiz: [
      { type: "mc", q: "What does 'İndirim' mean?", options: ["Asking for a price", "Choosing an item", "A price reduction", "Paper money"], a: 2 },
      { type: "fill", q: "How do you say 'Paper money' in Turkish?", a: "Nakit" },
      { type: "mc", q: "Which phrase means 'Asking for a price'?", options: ["Bunu istiyorum", "Bu ne kadar?", "İndirim", "Nakit"], a: 1 },
    ],
  },
  directions: {
    intro: "Learn to ask for and follow directions in Turkish.",
    examples: [
      { target: "Sol", meaning: "Opposite of right" },
      { target: "Sağ", meaning: "Opposite of left" },
      { target: "Doğru gidin", meaning: "Go forward" },
      { target: "Tuvalet nerede?", meaning: "Asking for a location" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Doğru gidin' mean?", options: ["Opposite of right", "Opposite of left", "Go forward", "Asking for a location"], a: 2 },
      { type: "fill", q: "How do you say 'Opposite of right' in Turkish?", a: "Sol" },
      { type: "mc", q: "Which phrase means 'Asking for a location'?", options: ["Sol", "Sağ", "Doğru gidin", "Tuvalet nerede?"], a: 3 },
    ],
  },
  time: {
    intro: "Learn to talk about time of day in Turkish.",
    examples: [
      { target: "Saat kaç?", meaning: "Asking the current time" },
      { target: "Sabah", meaning: "Early part of the day" },
      { target: "Öğleden sonra", meaning: "Midday part of the day" },
      { target: "Gece yarısı", meaning: "12 AM" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Gece yarısı' mean?", options: ["Asking the current time", "Early part of the day", "Midday part of the day", "12 AM"], a: 3 },
      { type: "fill", q: "How do you say 'Early part of the day' in Turkish?", a: "Sabah" },
      { type: "mc", q: "Which phrase means 'Asking the current time'?", options: ["Saat kaç?", "Sabah", "Öğleden sonra", "Gece yarısı"], a: 0 },
    ],
  },
  weather: {
    intro: "Describe common weather conditions in Turkish.",
    examples: [
      { target: "Yağmur yağıyor", meaning: "Rain is falling" },
      { target: "Güneşli", meaning: "Bright with sunshine" },
      { target: "Soğuk", meaning: "Low temperature" },
      { target: "Sıcak", meaning: "High temperature" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Güneşli' mean?", options: ["Rain is falling", "Bright with sunshine", "Low temperature", "High temperature"], a: 1 },
      { type: "fill", q: "How do you say 'High temperature' in Turkish?", a: "Sıcak" },
      { type: "mc", q: "Which phrase means 'Rain is falling'?", options: ["Yağmur yağıyor", "Güneşli", "Soğuk", "Sıcak"], a: 0 },
    ],
  },
  hobbies: {
    intro: "Talk about free-time activities in Turkish.",
    examples: [
      { target: "Okumak", meaning: "Enjoying books" },
      { target: "Müzik", meaning: "Listening to songs" },
      { target: "Spor", meaning: "Physical games" },
      { target: "Yemek pişirmek", meaning: "Preparing food" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Yemek pişirmek' mean?", options: ["Enjoying books", "Listening to songs", "Physical games", "Preparing food"], a: 3 },
      { type: "fill", q: "How do you say 'Enjoying books' in Turkish?", a: "Okumak" },
      { type: "mc", q: "Which word means 'Physical games'?", options: ["Okumak", "Müzik", "Spor", "Yemek pişirmek"], a: 2 },
    ],
  },
  body_health: {
    intro: "Learn body parts and how to describe feeling unwell in Turkish.",
    examples: [
      { target: "Baş", meaning: "Top part of the body" },
      { target: "Mide", meaning: "Belly area" },
      { target: "Kendimi hasta hissediyorum", meaning: "Not feeling well" },
      { target: "Doktor", meaning: "Medical professional" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Mide' mean?", options: ["Top part of the body", "Belly area", "Not feeling well", "Medical professional"], a: 1 },
      { type: "fill", q: "How do you say 'Medical professional' in Turkish?", a: "Doktor" },
      { type: "mc", q: "Which phrase means 'Not feeling well'?", options: ["Baş", "Mide", "Kendimi hasta hissediyorum", "Doktor"], a: 2 },
    ],
  },
  restaurant: {
    intro: "Order food and ask for the bill in Turkish.",
    examples: [
      { target: "Menü", meaning: "List of dishes" },
      { target: "Bunu alacağım", meaning: "Ordering a dish" },
      { target: "Hesap, lütfen", meaning: "Asking to pay" },
      { target: "Lezzetli", meaning: "Tastes great" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Hesap, lütfen' mean?", options: ["List of dishes", "Ordering a dish", "Asking to pay", "Tastes great"], a: 2 },
      { type: "fill", q: "How do you say 'Tastes great' in Turkish?", a: "Lezzetli" },
      { type: "mc", q: "Which phrase means 'List of dishes'?", options: ["Menü", "Bunu alacağım", "Hesap, lütfen", "Lezzetli"], a: 0 },
    ],
  },
  travel: {
    intro: "Key words for airports and train stations in Turkish.",
    examples: [
      { target: "Havaalanı", meaning: "Place planes depart from" },
      { target: "Bilet", meaning: "Pass to travel" },
      { target: "Pasaport", meaning: "Travel ID document" },
      { target: "Tren istasyonu", meaning: "Place trains depart from" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Pasaport' mean?", options: ["Place planes depart from", "Pass to travel", "Travel ID document", "Place trains depart from"], a: 2 },
      { type: "fill", q: "How do you say 'Pass to travel' in Turkish?", a: "Bilet" },
      { type: "mc", q: "Which word means 'Place trains depart from'?", options: ["Havaalanı", "Bilet", "Pasaport", "Tren istasyonu"], a: 3 },
    ],
  },
  work: {
    intro: "Talk about your job and workplace in Turkish.",
    examples: [
      { target: "Toplantı", meaning: "A work gathering" },
      { target: "Son tarih", meaning: "Due date" },
      { target: "Meslektaş", meaning: "Co-worker" },
      { target: "Ofis", meaning: "Workplace" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Son tarih' mean?", options: ["A work gathering", "Due date", "Co-worker", "Workplace"], a: 1 },
      { type: "fill", q: "How do you say 'Co-worker' in Turkish?", a: "Meslektaş" },
      { type: "mc", q: "Which word means 'A work gathering'?", options: ["Toplantı", "Son tarih", "Meslektaş", "Ofis"], a: 0 },
    ],
  },
  emotions: {
    intro: "Describe how you feel in Turkish.",
    examples: [
      { target: "Mutlu", meaning: "Feeling joy" },
      { target: "Üzgün", meaning: "Feeling down" },
      { target: "Yorgun", meaning: "Needing rest" },
      { target: "Heyecanlı", meaning: "Feeling enthusiastic" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Yorgun' mean?", options: ["Feeling joy", "Feeling down", "Needing rest", "Feeling enthusiastic"], a: 2 },
      { type: "fill", q: "How do you say 'Feeling enthusiastic' in Turkish?", a: "Heyecanlı" },
      { type: "mc", q: "Which word means 'Feeling joy'?", options: ["Mutlu", "Üzgün", "Yorgun", "Heyecanlı"], a: 0 },
    ],
  },
  technology: {
    intro: "Learn common phone and internet vocabulary in Turkish.",
    examples: [
      { target: "Telefon", meaning: "Device for calls" },
      { target: "İnternet", meaning: "Global network" },
      { target: "Şifre", meaning: "Secret access code" },
      { target: "Pil", meaning: "Stores power" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Şifre' mean?", options: ["Device for calls", "Global network", "Secret access code", "Stores power"], a: 2 },
      { type: "fill", q: "How do you say 'Stores power' in Turkish?", a: "Pil" },
      { type: "mc", q: "Which word means 'Global network'?", options: ["Telefon", "İnternet", "Şifre", "Pil"], a: 1 },
    ],
  },
  home: {
    intro: "Learn common room and furniture words in Turkish.",
    examples: [
      { target: "Mutfak", meaning: "Room for cooking" },
      { target: "Yatak odası", meaning: "Room for sleeping" },
      { target: "Masa", meaning: "Furniture to eat/work on" },
      { target: "Sandalye", meaning: "Furniture for sitting" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Yatak odası' mean?", options: ["Room for cooking", "Room for sleeping", "Furniture to eat/work on", "Furniture for sitting"], a: 1 },
      { type: "fill", q: "How do you say 'Furniture for sitting' in Turkish?", a: "Sandalye" },
      { type: "mc", q: "Which word means 'Room for cooking'?", options: ["Mutfak", "Yatak odası", "Masa", "Sandalye"], a: 0 },
    ],
  },
  opinions: {
    intro: "Learn phrases for sharing your point of view in Turkish.",
    examples: [
      { target: "Bence", meaning: "Introducing an opinion" },
      { target: "Katılıyorum", meaning: "Sharing the same view" },
      { target: "Katılmıyorum", meaning: "Having a different view" },
      { target: "Bana göre", meaning: "Introducing a personal view" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Katılmıyorum' mean?", options: ["Introducing an opinion", "Sharing the same view", "Having a different view", "Introducing a personal view"], a: 2 },
      { type: "fill", q: "How do you say 'Sharing the same view' in Turkish?", a: "Katılıyorum" },
      { type: "mc", q: "Which phrase means 'Introducing an opinion'?", options: ["Bence", "Katılıyorum", "Katılmıyorum", "Bana göre"], a: 0 },
    ],
  },
  past_tense: {
    intro: "Talk about things that already happened in Turkish.",
    examples: [
      { target: "Dün", meaning: "The day before today" },
      { target: "Gittim", meaning: "Past of 'I go'" },
      { target: "Yedim", meaning: "Past of 'I eat'" },
      { target: "Geçen hafta", meaning: "The week before this one" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Gittim' mean?", options: ["The day before today", "Past of 'I go'", "Past of 'I eat'", "The week before this one"], a: 1 },
      { type: "fill", q: "How do you say 'Past of I eat' in Turkish?", a: "Yedim" },
      { type: "mc", q: "Which phrase means 'The day before today'?", options: ["Dün", "Gittim", "Yedim", "Geçen hafta"], a: 0 },
    ],
  },
  future_plans: {
    intro: "Talk about plans and future events in Turkish.",
    examples: [
      { target: "Yarın", meaning: "The day after today" },
      { target: "Gideceğim", meaning: "Future of 'I go'" },
      { target: "Gelecek yıl", meaning: "The year after this one" },
      { target: "Planlıyorum", meaning: "Expressing intent" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Gideceğim' mean?", options: ["The day after today", "Future of 'I go'", "The year after this one", "Expressing intent"], a: 1 },
      { type: "fill", q: "How do you say 'Expressing intent' in Turkish?", a: "Planlıyorum" },
      { type: "mc", q: "Which phrase means 'The day after today'?", options: ["Yarın", "Gideceğim", "Gelecek yıl", "Planlıyorum"], a: 0 },
    ],
  },
  socializing: {
    intro: "Casual phrases for small talk with friends in Turkish.",
    examples: [
      { target: "Nasılsın?", meaning: "Casual greeting" },
      { target: "Uzun zaman oldu", meaning: "Said after a while apart" },
      { target: "Buluşalım", meaning: "Suggesting to meet" },
      { target: "Seni görmek güzel", meaning: "Friendly greeting" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Uzun zaman oldu' mean?", options: ["Casual greeting", "Said after a while apart", "Suggesting to meet", "Friendly greeting"], a: 1 },
      { type: "fill", q: "How do you say 'Suggesting to meet' in Turkish?", a: "Buluşalım" },
      { type: "mc", q: "Which phrase is a casual greeting?", options: ["Nasılsın?", "Uzun zaman oldu", "Buluşalım", "Seni görmek güzel"], a: 0 },
    ],
  },
  negotiating: {
    intro: "Bargain and negotiate prices politely in Turkish.",
    examples: [
      { target: "Fiyatı düşürebilir misiniz?", meaning: "Asking for a discount" },
      { target: "Bu çok pahalı", meaning: "Complaining about price" },
      { target: "Son teklif", meaning: "Last price offered" },
      { target: "Anlaştık", meaning: "Agreement reached" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Son teklif' mean?", options: ["Asking for a discount", "Complaining about price", "Last price offered", "Agreement reached"], a: 2 },
      { type: "fill", q: "How do you say 'Agreement reached' in Turkish?", a: "Anlaştık" },
      { type: "mc", q: "Which phrase means 'Asking for a discount'?", options: ["Fiyatı düşürebilir misiniz?", "Bu çok pahalı", "Son teklif", "Anlaştık"], a: 0 },
    ],
  },
  news_media: {
    intro: "Vocabulary for reading and discussing the news in Turkish.",
    examples: [
      { target: "Haberler", meaning: "Recent information" },
      { target: "Gazete", meaning: "Printed news publication" },
      { target: "Göre", meaning: "Citing a source" },
      { target: "Son dakika haberi", meaning: "Urgent new report" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Son dakika haberi' mean?", options: ["Recent information", "Printed news publication", "Citing a source", "Urgent new report"], a: 3 },
      { type: "fill", q: "How do you say 'Citing a source' in Turkish?", a: "Göre" },
      { type: "mc", q: "Which word means 'Printed news publication'?", options: ["Haberler", "Gazete", "Göre", "Son dakika haberi"], a: 1 },
    ],
  },
  business: {
    intro: "Formal vocabulary for business settings in Turkish.",
    examples: [
      { target: "Sözleşme", meaning: "A legal agreement" },
      { target: "Toplantı", meaning: "A business gathering" },
      { target: "Son tarih", meaning: "Due date" },
      { target: "Fatura", meaning: "A bill for payment" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Fatura' mean?", options: ["A legal agreement", "A business gathering", "Due date", "A bill for payment"], a: 3 },
      { type: "fill", q: "How do you say 'A legal agreement' in Turkish?", a: "Sözleşme" },
      { type: "mc", q: "Which word means 'Due date'?", options: ["Sözleşme", "Toplantı", "Son tarih", "Fatura"], a: 2 },
    ],
  },
  idioms: {
    intro: "Learn common idiomatic expressions in Turkish.",
    examples: [
      { target: "Buzları kırmak", meaning: "Start a conversation easily" },
      { target: "Çocuk oyuncağı", meaning: "Something very easy" },
      { target: "Zaman su gibi akıyor", meaning: "Time passes quickly" },
      { target: "Ara sıra", meaning: "Occasionally" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Çocuk oyuncağı' mean?", options: ["Start a conversation easily", "Something very easy", "Time passes quickly", "Occasionally"], a: 1 },
      { type: "fill", q: "How do you say 'Occasionally' in Turkish?", a: "Ara sıra" },
      { type: "mc", q: "Which idiom means 'Time passes quickly'?", options: ["Buzları kırmak", "Çocuk oyuncağı", "Zaman su gibi akıyor", "Ara sıra"], a: 2 },
    ],
  },
  debate: {
    intro: "Phrases for debating and persuading others in Turkish.",
    examples: [
      { target: "Kesinlikle inanıyorum", meaning: "Stating a firm opinion" },
      { target: "Öte yandan", meaning: "Presenting a contrast" },
      { target: "Kanıtlar gösteriyor", meaning: "Citing proof" },
      { target: "Sonuç olarak", meaning: "Summarizing an argument" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Öte yandan' mean?", options: ["Stating a firm opinion", "Presenting a contrast", "Citing proof", "Summarizing an argument"], a: 1 },
      { type: "fill", q: "How do you say 'Summarizing an argument' in Turkish?", a: "Sonuç olarak" },
      { type: "mc", q: "Which phrase means 'Citing proof'?", options: ["Kesinlikle inanıyorum", "Öte yandan", "Kanıtlar gösteriyor", "Sonuç olarak"], a: 2 },
    ],
  },
  culture: {
    intro: "Vocabulary about traditions and heritage in Turkish.",
    examples: [
      { target: "Gelenek", meaning: "A long-held custom" },
      { target: "Festival", meaning: "A celebration event" },
      { target: "Adet", meaning: "A usual practice" },
      { target: "Miras", meaning: "Inherited culture" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Festival' mean?", options: ["A long-held custom", "A celebration event", "A usual practice", "Inherited culture"], a: 1 },
      { type: "fill", q: "How do you say 'Inherited culture' in Turkish?", a: "Miras" },
      { type: "mc", q: "Which word means 'A usual practice'?", options: ["Gelenek", "Festival", "Adet", "Miras"], a: 2 },
    ],
  },
  formal_writing: {
    intro: "Phrases for writing formal letters and emails in Turkish.",
    examples: [
      { target: "Sayın Bay/Bayan", meaning: "Formal letter opening" },
      { target: "Saygılarımla", meaning: "Formal letter closing" },
      { target: "Size yazıyorum çünkü", meaning: "Stating the letter's purpose" },
      { target: "Ekte bulabilirsiniz", meaning: "Referring to an attachment" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Saygılarımla' mean?", options: ["Formal letter opening", "Formal letter closing", "Stating the letter's purpose", "Referring to an attachment"], a: 1 },
      { type: "fill", q: "How do you say 'Formal letter opening' in Turkish?", a: "Sayın Bay/Bayan" },
      { type: "mc", q: "Which phrase refers to an attachment?", options: ["Sayın Bay/Bayan", "Saygılarımla", "Size yazıyorum çünkü", "Ekte bulabilirsiniz"], a: 3 },
    ],
  },
  advanced_conversation: {
    intro: "Nuanced phrases for advanced, fluent conversation in Turkish.",
    examples: [
      { target: "Nüans", meaning: "A subtle difference" },
      { target: "Başka bir deyişle", meaning: "Rephrasing something" },
      { target: "Bununla birlikte", meaning: "Adding a contrasting point" },
      { target: "Detaylandırmak", meaning: "Explaining in more detail" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Nüans' mean?", options: ["A subtle difference", "Rephrasing something", "Adding a contrasting point", "Explaining in more detail"], a: 0 },
      { type: "fill", q: "How do you say 'Explaining in more detail' in Turkish?", a: "Detaylandırmak" },
      { type: "mc", q: "Which phrase means 'Adding a contrasting point'?", options: ["Nüans", "Başka bir deyişle", "Bununla birlikte", "Detaylandırmak"], a: 2 },
    ],
  },
};

export default TR;
