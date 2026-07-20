// Japanese lesson content — real vocabulary/phrases with romanization, fully offline.
import { LessonContent } from "../meta";

const JA: Record<string, LessonContent> = {
  greetings: {
    intro: "Learn the essential words for greeting people and saying goodbye in Japanese.",
    examples: [
      { target: "こんにちは", translit: "Konnichiwa", meaning: "A friendly greeting" },
      { target: "おはようございます", translit: "Ohayou gozaimasu", meaning: "Greeting used before noon" },
      { target: "ありがとうございます", translit: "Arigatou gozaimasu", meaning: "Expressing gratitude" },
      { target: "さようなら", translit: "Sayounara", meaning: "Said when leaving" },
    ],
    quiz: [
      { type: "mc", q: "What does 'こんにちは' mean?", options: ["A friendly greeting", "Said when leaving", "Expressing gratitude", "Greeting before noon"], a: 0 },
      { type: "fill", q: "How do you say 'Expressing gratitude' in Japanese?", a: "ありがとうございます" },
      { type: "mc", q: "Which word means 'Said when leaving'?", options: ["こんにちは", "おはようございます", "さようなら", "ありがとうございます"], a: 2 },
    ],
  },
  numbers: {
    intro: "Practice counting from one to twenty in Japanese.",
    examples: [
      { target: "一", translit: "Ichi", meaning: "The number 1" },
      { target: "五", translit: "Go", meaning: "The number 5" },
      { target: "十", translit: "Juu", meaning: "The number 10" },
      { target: "二十", translit: "Nijuu", meaning: "The number 20" },
    ],
    quiz: [
      { type: "mc", q: "What does '十' mean?", options: ["The number 1", "The number 5", "The number 10", "The number 20"], a: 2 },
      { type: "fill", q: "How do you say 'The number 20' in Japanese?", a: "二十" },
      { type: "mc", q: "Which word means 'The number 1'?", options: ["五", "一", "十", "二十"], a: 1 },
    ],
  },
  family: {
    intro: "Learn words for close family members in Japanese.",
    examples: [
      { target: "母", translit: "Haha", meaning: "Female parent" },
      { target: "父", translit: "Chichi", meaning: "Male parent" },
      { target: "妹", translit: "Imouto", meaning: "Younger female sibling" },
      { target: "弟", translit: "Otouto", meaning: "Younger male sibling" },
    ],
    quiz: [
      { type: "mc", q: "What does '母' mean?", options: ["Male parent", "Female parent", "Younger male sibling", "Younger female sibling"], a: 1 },
      { type: "fill", q: "How do you say 'Younger male sibling' in Japanese?", a: "弟" },
      { type: "mc", q: "Which word means 'Younger female sibling'?", options: ["母", "父", "妹", "弟"], a: 2 },
    ],
  },
  colors: {
    intro: "Learn the four most common colors in Japanese.",
    examples: [
      { target: "赤", translit: "Aka", meaning: "The color of fire" },
      { target: "青", translit: "Ao", meaning: "The color of the sky" },
      { target: "緑", translit: "Midori", meaning: "The color of grass" },
      { target: "黄色", translit: "Kiiro", meaning: "The color of the sun" },
    ],
    quiz: [
      { type: "mc", q: "What does '青' mean?", options: ["The color of fire", "The color of the sky", "The color of grass", "The color of the sun"], a: 1 },
      { type: "fill", q: "How do you say 'The color of grass' in Japanese?", a: "緑" },
      { type: "mc", q: "Which word means 'The color of fire'?", options: ["赤", "青", "緑", "黄色"], a: 0 },
    ],
  },
  days: {
    intro: "Learn a few days of the week in Japanese.",
    examples: [
      { target: "月曜日", translit: "Getsuyoubi", meaning: "First workday" },
      { target: "金曜日", translit: "Kinyoubi", meaning: "Last workday" },
      { target: "土曜日", translit: "Doyoubi", meaning: "First weekend day" },
      { target: "日曜日", translit: "Nichiyoubi", meaning: "Second weekend day" },
    ],
    quiz: [
      { type: "mc", q: "What does '金曜日' mean?", options: ["First workday", "Last workday", "First weekend day", "Second weekend day"], a: 1 },
      { type: "fill", q: "How do you say 'Second weekend day' in Japanese?", a: "日曜日" },
      { type: "mc", q: "Which word means 'First workday'?", options: ["月曜日", "金曜日", "土曜日", "日曜日"], a: 0 },
    ],
  },
  food_basics: {
    intro: "Learn basic food and drink words in Japanese.",
    examples: [
      { target: "水", translit: "Mizu", meaning: "A clear drink" },
      { target: "パン", translit: "Pan", meaning: "Baked food staple" },
      { target: "ご飯", translit: "Gohan", meaning: "A grain staple food" },
      { target: "コーヒー", translit: "Koohii", meaning: "A hot caffeinated drink" },
    ],
    quiz: [
      { type: "mc", q: "What does 'ご飯' mean?", options: ["A clear drink", "Baked food staple", "A grain staple food", "A hot caffeinated drink"], a: 2 },
      { type: "fill", q: "How do you say 'A hot caffeinated drink' in Japanese?", a: "コーヒー" },
      { type: "mc", q: "Which word means 'A clear drink'?", options: ["水", "パン", "ご飯", "コーヒー"], a: 0 },
    ],
  },
  shopping: {
    intro: "Useful phrases for shopping and paying in Japanese.",
    examples: [
      { target: "これはいくらですか?", translit: "Kore wa ikura desu ka?", meaning: "Asking for a price" },
      { target: "これをください", translit: "Kore o kudasai", meaning: "Choosing an item" },
      { target: "割引", translit: "Waribiki", meaning: "A price reduction" },
      { target: "現金", translit: "Genkin", meaning: "Paper money" },
    ],
    quiz: [
      { type: "mc", q: "What does '割引' mean?", options: ["Asking for a price", "Choosing an item", "A price reduction", "Paper money"], a: 2 },
      { type: "fill", q: "How do you say 'Paper money' in Japanese?", a: "現金" },
      { type: "mc", q: "Which phrase means 'Asking for a price'?", options: ["これをください", "これはいくらですか?", "割引", "現金"], a: 1 },
    ],
  },
  directions: {
    intro: "Learn to ask for and follow directions in Japanese.",
    examples: [
      { target: "左", translit: "Hidari", meaning: "Opposite of right" },
      { target: "右", translit: "Migi", meaning: "Opposite of left" },
      { target: "直進してください", translit: "Chokushin shite kudasai", meaning: "Go forward" },
      { target: "トイレはどこですか?", translit: "Toire wa doko desu ka?", meaning: "Asking for a location" },
    ],
    quiz: [
      { type: "mc", q: "What does '直進してください' mean?", options: ["Opposite of right", "Opposite of left", "Go forward", "Asking for a location"], a: 2 },
      { type: "fill", q: "How do you say 'Opposite of right' in Japanese?", a: "左" },
      { type: "mc", q: "Which phrase means 'Asking for a location'?", options: ["左", "右", "直進してください", "トイレはどこですか?"], a: 3 },
    ],
  },
  time: {
    intro: "Learn to talk about time of day in Japanese.",
    examples: [
      { target: "今何時ですか?", translit: "Ima nanji desu ka?", meaning: "Asking the current time" },
      { target: "朝", translit: "Asa", meaning: "Early part of the day" },
      { target: "午後", translit: "Gogo", meaning: "Midday part of the day" },
      { target: "真夜中", translit: "Mayonaka", meaning: "12 AM" },
    ],
    quiz: [
      { type: "mc", q: "What does '真夜中' mean?", options: ["Asking the current time", "Early part of the day", "Midday part of the day", "12 AM"], a: 3 },
      { type: "fill", q: "How do you say 'Early part of the day' in Japanese?", a: "朝" },
      { type: "mc", q: "Which phrase means 'Asking the current time'?", options: ["今何時ですか?", "朝", "午後", "真夜中"], a: 0 },
    ],
  },
  weather: {
    intro: "Describe common weather conditions in Japanese.",
    examples: [
      { target: "雨が降っています", translit: "Ame ga futte imasu", meaning: "Rain is falling" },
      { target: "晴れ", translit: "Hare", meaning: "Bright with sunshine" },
      { target: "寒い", translit: "Samui", meaning: "Low temperature" },
      { target: "暑い", translit: "Atsui", meaning: "High temperature" },
    ],
    quiz: [
      { type: "mc", q: "What does '晴れ' mean?", options: ["Rain is falling", "Bright with sunshine", "Low temperature", "High temperature"], a: 1 },
      { type: "fill", q: "How do you say 'High temperature' in Japanese?", a: "暑い" },
      { type: "mc", q: "Which phrase means 'Rain is falling'?", options: ["雨が降っています", "晴れ", "寒い", "暑い"], a: 0 },
    ],
  },
  hobbies: {
    intro: "Talk about free-time activities in Japanese.",
    examples: [
      { target: "読書", translit: "Dokusho", meaning: "Enjoying books" },
      { target: "音楽", translit: "Ongaku", meaning: "Listening to songs" },
      { target: "スポーツ", translit: "Supootsu", meaning: "Physical games" },
      { target: "料理", translit: "Ryouri", meaning: "Preparing food" },
    ],
    quiz: [
      { type: "mc", q: "What does '料理' mean?", options: ["Enjoying books", "Listening to songs", "Physical games", "Preparing food"], a: 3 },
      { type: "fill", q: "How do you say 'Enjoying books' in Japanese?", a: "読書" },
      { type: "mc", q: "Which word means 'Physical games'?", options: ["読書", "音楽", "スポーツ", "料理"], a: 2 },
    ],
  },
  body_health: {
    intro: "Learn body parts and how to describe feeling unwell in Japanese.",
    examples: [
      { target: "頭", translit: "Atama", meaning: "Top part of the body" },
      { target: "お腹", translit: "Onaka", meaning: "Belly area" },
      { target: "気分が悪いです", translit: "Kibun ga warui desu", meaning: "Not feeling well" },
      { target: "医者", translit: "Isha", meaning: "Medical professional" },
    ],
    quiz: [
      { type: "mc", q: "What does 'お腹' mean?", options: ["Top part of the body", "Belly area", "Not feeling well", "Medical professional"], a: 1 },
      { type: "fill", q: "How do you say 'Medical professional' in Japanese?", a: "医者" },
      { type: "mc", q: "Which phrase means 'Not feeling well'?", options: ["頭", "お腹", "気分が悪いです", "医者"], a: 2 },
    ],
  },
  restaurant: {
    intro: "Order food and ask for the bill in Japanese.",
    examples: [
      { target: "メニュー", translit: "Menyuu", meaning: "List of dishes" },
      { target: "これにします", translit: "Kore ni shimasu", meaning: "Ordering a dish" },
      { target: "お会計お願いします", translit: "Okaikei onegaishimasu", meaning: "Asking to pay" },
      { target: "美味しい", translit: "Oishii", meaning: "Tastes great" },
    ],
    quiz: [
      { type: "mc", q: "What does 'お会計お願いします' mean?", options: ["List of dishes", "Ordering a dish", "Asking to pay", "Tastes great"], a: 2 },
      { type: "fill", q: "How do you say 'Tastes great' in Japanese?", a: "美味しい" },
      { type: "mc", q: "Which phrase means 'List of dishes'?", options: ["メニュー", "これにします", "お会計お願いします", "美味しい"], a: 0 },
    ],
  },
  travel: {
    intro: "Key words for airports and train stations in Japanese.",
    examples: [
      { target: "空港", translit: "Kuukou", meaning: "Place planes depart from" },
      { target: "チケット", translit: "Chiketto", meaning: "Pass to travel" },
      { target: "パスポート", translit: "Pasupooto", meaning: "Travel ID document" },
      { target: "駅", translit: "Eki", meaning: "Place trains depart from" },
    ],
    quiz: [
      { type: "mc", q: "What does 'パスポート' mean?", options: ["Place planes depart from", "Pass to travel", "Travel ID document", "Place trains depart from"], a: 2 },
      { type: "fill", q: "How do you say 'Pass to travel' in Japanese?", a: "チケット" },
      { type: "mc", q: "Which word means 'Place trains depart from'?", options: ["空港", "チケット", "パスポート", "駅"], a: 3 },
    ],
  },
  work: {
    intro: "Talk about your job and workplace in Japanese.",
    examples: [
      { target: "会議", translit: "Kaigi", meaning: "A work gathering" },
      { target: "締め切り", translit: "Shimekiri", meaning: "Due date" },
      { target: "同僚", translit: "Douryou", meaning: "Co-worker" },
      { target: "会社", translit: "Kaisha", meaning: "Workplace" },
    ],
    quiz: [
      { type: "mc", q: "What does '締め切り' mean?", options: ["A work gathering", "Due date", "Co-worker", "Workplace"], a: 1 },
      { type: "fill", q: "How do you say 'Co-worker' in Japanese?", a: "同僚" },
      { type: "mc", q: "Which word means 'A work gathering'?", options: ["会議", "締め切り", "同僚", "会社"], a: 0 },
    ],
  },
  emotions: {
    intro: "Describe how you feel in Japanese.",
    examples: [
      { target: "嬉しい", translit: "Ureshii", meaning: "Feeling joy" },
      { target: "悲しい", translit: "Kanashii", meaning: "Feeling down" },
      { target: "疲れた", translit: "Tsukareta", meaning: "Needing rest" },
      { target: "興奮している", translit: "Koufun shite iru", meaning: "Feeling enthusiastic" },
    ],
    quiz: [
      { type: "mc", q: "What does '疲れた' mean?", options: ["Feeling joy", "Feeling down", "Needing rest", "Feeling enthusiastic"], a: 2 },
      { type: "fill", q: "How do you say 'Feeling enthusiastic' in Japanese?", a: "興奮している" },
      { type: "mc", q: "Which word means 'Feeling joy'?", options: ["嬉しい", "悲しい", "疲れた", "興奮している"], a: 0 },
    ],
  },
  technology: {
    intro: "Learn common phone and internet vocabulary in Japanese.",
    examples: [
      { target: "電話", translit: "Denwa", meaning: "Device for calls" },
      { target: "インターネット", translit: "Intaanetto", meaning: "Global network" },
      { target: "パスワード", translit: "Pasuwaado", meaning: "Secret access code" },
      { target: "バッテリー", translit: "Batterii", meaning: "Stores power" },
    ],
    quiz: [
      { type: "mc", q: "What does 'パスワード' mean?", options: ["Device for calls", "Global network", "Secret access code", "Stores power"], a: 2 },
      { type: "fill", q: "How do you say 'Stores power' in Japanese?", a: "バッテリー" },
      { type: "mc", q: "Which word means 'Global network'?", options: ["電話", "インターネット", "パスワード", "バッテリー"], a: 1 },
    ],
  },
  home: {
    intro: "Learn common room and furniture words in Japanese.",
    examples: [
      { target: "キッチン", translit: "Kitchin", meaning: "Room for cooking" },
      { target: "寝室", translit: "Shinshitsu", meaning: "Room for sleeping" },
      { target: "テーブル", translit: "Teeburu", meaning: "Furniture to eat/work on" },
      { target: "椅子", translit: "Isu", meaning: "Furniture for sitting" },
    ],
    quiz: [
      { type: "mc", q: "What does '寝室' mean?", options: ["Room for cooking", "Room for sleeping", "Furniture to eat/work on", "Furniture for sitting"], a: 1 },
      { type: "fill", q: "How do you say 'Furniture for sitting' in Japanese?", a: "椅子" },
      { type: "mc", q: "Which word means 'Room for cooking'?", options: ["キッチン", "寝室", "テーブル", "椅子"], a: 0 },
    ],
  },
  opinions: {
    intro: "Learn phrases for sharing your point of view in Japanese.",
    examples: [
      { target: "私は思います", translit: "Watashi wa omoimasu", meaning: "Introducing an opinion" },
      { target: "同意します", translit: "Doui shimasu", meaning: "Sharing the same view" },
      { target: "同意しません", translit: "Doui shimasen", meaning: "Having a different view" },
      { target: "私の意見では", translit: "Watashi no iken de wa", meaning: "Introducing a personal view" },
    ],
    quiz: [
      { type: "mc", q: "What does '同意しません' mean?", options: ["Introducing an opinion", "Sharing the same view", "Having a different view", "Introducing a personal view"], a: 2 },
      { type: "fill", q: "How do you say 'Sharing the same view' in Japanese?", a: "同意します" },
      { type: "mc", q: "Which phrase means 'Introducing an opinion'?", options: ["私は思います", "同意します", "同意しません", "私の意見では"], a: 0 },
    ],
  },
  past_tense: {
    intro: "Talk about things that already happened in Japanese.",
    examples: [
      { target: "昨日", translit: "Kinou", meaning: "The day before today" },
      { target: "行きました", translit: "Ikimashita", meaning: "Past of 'I go'" },
      { target: "食べました", translit: "Tabemashita", meaning: "Past of 'I eat'" },
      { target: "先週", translit: "Senshuu", meaning: "The week before this one" },
    ],
    quiz: [
      { type: "mc", q: "What does '行きました' mean?", options: ["The day before today", "Past of 'I go'", "Past of 'I eat'", "The week before this one"], a: 1 },
      { type: "fill", q: "How do you say 'Past of I eat' in Japanese?", a: "食べました" },
      { type: "mc", q: "Which phrase means 'The day before today'?", options: ["昨日", "行きました", "食べました", "先週"], a: 0 },
    ],
  },
  future_plans: {
    intro: "Talk about plans and future events in Japanese.",
    examples: [
      { target: "明日", translit: "Ashita", meaning: "The day after today" },
      { target: "行きます", translit: "Ikimasu", meaning: "Future of 'I go'" },
      { target: "来年", translit: "Rainen", meaning: "The year after this one" },
      { target: "計画しています", translit: "Keikaku shite imasu", meaning: "Expressing intent" },
    ],
    quiz: [
      { type: "mc", q: "What does '行きます' mean?", options: ["The day after today", "Future of 'I go'", "The year after this one", "Expressing intent"], a: 1 },
      { type: "fill", q: "How do you say 'Expressing intent' in Japanese?", a: "計画しています" },
      { type: "mc", q: "Which phrase means 'The day after today'?", options: ["明日", "行きます", "来年", "計画しています"], a: 0 },
    ],
  },
  socializing: {
    intro: "Casual phrases for small talk with friends in Japanese.",
    examples: [
      { target: "最近どうですか?", translit: "Saikin dou desu ka?", meaning: "Casual greeting" },
      { target: "お久しぶりです", translit: "Ohisashiburi desu", meaning: "Said after a while apart" },
      { target: "会いましょう", translit: "Aimashou", meaning: "Suggesting to meet" },
      { target: "お会いできて嬉しいです", translit: "Oai dekite ureshii desu", meaning: "Friendly greeting" },
    ],
    quiz: [
      { type: "mc", q: "What does 'お久しぶりです' mean?", options: ["Casual greeting", "Said after a while apart", "Suggesting to meet", "Friendly greeting"], a: 1 },
      { type: "fill", q: "How do you say 'Suggesting to meet' in Japanese?", a: "会いましょう" },
      { type: "mc", q: "Which phrase is a casual greeting?", options: ["最近どうですか?", "お久しぶりです", "会いましょう", "お会いできて嬉しいです"], a: 0 },
    ],
  },
  negotiating: {
    intro: "Bargain and negotiate prices politely in Japanese.",
    examples: [
      { target: "値段を下げてもらえますか?", translit: "Nedan o sagete moraemasu ka?", meaning: "Asking for a discount" },
      { target: "高すぎます", translit: "Takasugimasu", meaning: "Complaining about price" },
      { target: "最終提案", translit: "Saishuu teian", meaning: "Last price offered" },
      { target: "決まりです", translit: "Kimari desu", meaning: "Agreement reached" },
    ],
    quiz: [
      { type: "mc", q: "What does '最終提案' mean?", options: ["Asking for a discount", "Complaining about price", "Last price offered", "Agreement reached"], a: 2 },
      { type: "fill", q: "How do you say 'Agreement reached' in Japanese?", a: "決まりです" },
      { type: "mc", q: "Which phrase means 'Asking for a discount'?", options: ["値段を下げてもらえますか?", "高すぎます", "最終提案", "決まりです"], a: 0 },
    ],
  },
  news_media: {
    intro: "Vocabulary for reading and discussing the news in Japanese.",
    examples: [
      { target: "ニュース", translit: "Nyuusu", meaning: "Recent information" },
      { target: "新聞", translit: "Shinbun", meaning: "Printed news publication" },
      { target: "~によると", translit: "~ni yoru to", meaning: "Citing a source" },
      { target: "速報", translit: "Sokuhou", meaning: "Urgent new report" },
    ],
    quiz: [
      { type: "mc", q: "What does '速報' mean?", options: ["Recent information", "Printed news publication", "Citing a source", "Urgent new report"], a: 3 },
      { type: "fill", q: "How do you say 'Citing a source' in Japanese?", a: "~によると" },
      { type: "mc", q: "Which word means 'Printed news publication'?", options: ["ニュース", "新聞", "~によると", "速報"], a: 1 },
    ],
  },
  business: {
    intro: "Formal vocabulary for business settings in Japanese.",
    examples: [
      { target: "契約", translit: "Keiyaku", meaning: "A legal agreement" },
      { target: "会議", translit: "Kaigi", meaning: "A business gathering" },
      { target: "締め切り", translit: "Shimekiri", meaning: "Due date" },
      { target: "請求書", translit: "Seikyuusho", meaning: "A bill for payment" },
    ],
    quiz: [
      { type: "mc", q: "What does '請求書' mean?", options: ["A legal agreement", "A business gathering", "Due date", "A bill for payment"], a: 3 },
      { type: "fill", q: "How do you say 'A legal agreement' in Japanese?", a: "契約" },
      { type: "mc", q: "Which word means 'Due date'?", options: ["契約", "会議", "締め切り", "請求書"], a: 2 },
    ],
  },
  idioms: {
    intro: "Learn common idiomatic expressions in Japanese.",
    examples: [
      { target: "緊張をやわらげる", translit: "Kinchou o yawarageru", meaning: "Start a conversation easily" },
      { target: "朝飯前", translit: "Asameshimae", meaning: "Something very easy" },
      { target: "時間が飛ぶように過ぎる", translit: "Jikan ga tobu you ni sugiru", meaning: "Time passes quickly" },
      { target: "時々", translit: "Tokidoki", meaning: "Occasionally" },
    ],
    quiz: [
      { type: "mc", q: "What does '朝飯前' mean?", options: ["Start a conversation easily", "Something very easy", "Time passes quickly", "Occasionally"], a: 1 },
      { type: "fill", q: "How do you say 'Occasionally' in Japanese?", a: "時々" },
      { type: "mc", q: "Which idiom means 'Time passes quickly'?", options: ["緊張をやわらげる", "朝飯前", "時間が飛ぶように過ぎる", "時々"], a: 2 },
    ],
  },
  debate: {
    intro: "Phrases for debating and persuading others in Japanese.",
    examples: [
      { target: "私は強く信じています", translit: "Watashi wa tsuyoku shinjite imasu", meaning: "Stating a firm opinion" },
      { target: "一方で", translit: "Ippou de", meaning: "Presenting a contrast" },
      { target: "証拠が示しています", translit: "Shouko ga shimeshite imasu", meaning: "Citing proof" },
      { target: "結論として", translit: "Ketsuron toshite", meaning: "Summarizing an argument" },
    ],
    quiz: [
      { type: "mc", q: "What does '一方で' mean?", options: ["Stating a firm opinion", "Presenting a contrast", "Citing proof", "Summarizing an argument"], a: 1 },
      { type: "fill", q: "How do you say 'Summarizing an argument' in Japanese?", a: "結論として" },
      { type: "mc", q: "Which phrase means 'Citing proof'?", options: ["私は強く信じています", "一方で", "証拠が示しています", "結論として"], a: 2 },
    ],
  },
  culture: {
    intro: "Vocabulary about traditions and heritage in Japanese.",
    examples: [
      { target: "伝統", translit: "Dentou", meaning: "A long-held custom" },
      { target: "祭り", translit: "Matsuri", meaning: "A celebration event" },
      { target: "習慣", translit: "Shuukan", meaning: "A usual practice" },
      { target: "遺産", translit: "Isan", meaning: "Inherited culture" },
    ],
    quiz: [
      { type: "mc", q: "What does '祭り' mean?", options: ["A long-held custom", "A celebration event", "A usual practice", "Inherited culture"], a: 1 },
      { type: "fill", q: "How do you say 'Inherited culture' in Japanese?", a: "遺産" },
      { type: "mc", q: "Which word means 'A usual practice'?", options: ["伝統", "祭り", "習慣", "遺産"], a: 2 },
    ],
  },
  formal_writing: {
    intro: "Phrases for writing formal letters and emails in Japanese.",
    examples: [
      { target: "拝啓", translit: "Haikei", meaning: "Formal letter opening" },
      { target: "敬具", translit: "Keigu", meaning: "Formal letter closing" },
      { target: "~についてご連絡いたします", translit: "~ni tsuite go-renraku itashimasu", meaning: "Stating the letter's purpose" },
      { target: "添付ファイルをご確認ください", translit: "Tenpu fairu o go-kakunin kudasai", meaning: "Referring to an attachment" },
    ],
    quiz: [
      { type: "mc", q: "What does '敬具' mean?", options: ["Formal letter opening", "Formal letter closing", "Stating the letter's purpose", "Referring to an attachment"], a: 1 },
      { type: "fill", q: "How do you say 'Formal letter opening' in Japanese?", a: "拝啓" },
      { type: "mc", q: "Which phrase refers to an attachment?", options: ["拝啓", "敬具", "~についてご連絡いたします", "添付ファイルをご確認ください"], a: 3 },
    ],
  },
  advanced_conversation: {
    intro: "Nuanced phrases for advanced, fluent conversation in Japanese.",
    examples: [
      { target: "微妙な違い", translit: "Bimyou na chigai", meaning: "A subtle difference" },
      { target: "言い換えると", translit: "Iikaeru to", meaning: "Rephrasing something" },
      { target: "そうは言っても", translit: "Sou wa itte mo", meaning: "Adding a contrasting point" },
      { target: "詳しく説明する", translit: "Kuwashiku setsumei suru", meaning: "Explaining in more detail" },
    ],
    quiz: [
      { type: "mc", q: "What does '微妙な違い' mean?", options: ["A subtle difference", "Rephrasing something", "Adding a contrasting point", "Explaining in more detail"], a: 0 },
      { type: "fill", q: "How do you say 'Explaining in more detail' in Japanese?", a: "詳しく説明する" },
      { type: "mc", q: "Which phrase means 'Adding a contrasting point'?", options: ["微妙な違い", "言い換えると", "そうは言っても", "詳しく説明する"], a: 2 },
    ],
  },
};

export default JA;
