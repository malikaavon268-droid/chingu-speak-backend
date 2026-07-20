// Korean lesson content — real vocabulary/phrases with romanization, fully offline.
import { LessonContent } from "../meta";

const KO: Record<string, LessonContent> = {
  greetings: {
    intro: "Learn the essential words for greeting people and saying goodbye in Korean.",
    examples: [
      { target: "안녕하세요", translit: "annyeonghaseyo", meaning: "A friendly greeting" },
      { target: "좋은 아침입니다", translit: "joeun achimimnida", meaning: "Greeting used before noon" },
      { target: "감사합니다", translit: "gamsahamnida", meaning: "Expressing gratitude" },
      { target: "안녕히 가세요", translit: "annyeonghi gaseyo", meaning: "Said when leaving" },
    ],
    quiz: [
      { type: "mc", q: "What does '안녕하세요' mean?", options: ["A friendly greeting", "Said when leaving", "Expressing gratitude", "Greeting before noon"], a: 0 },
      { type: "fill", q: "How do you say 'Expressing gratitude' in Korean?", a: "감사합니다" },
      { type: "mc", q: "Which word means 'Said when leaving'?", options: ["안녕하세요", "좋은 아침입니다", "안녕히 가세요", "감사합니다"], a: 2 },
    ],
  },
  numbers: {
    intro: "Practice counting from one to twenty using native Korean numbers.",
    examples: [
      { target: "하나", translit: "hana", meaning: "The number 1" },
      { target: "다섯", translit: "daseot", meaning: "The number 5" },
      { target: "열", translit: "yeol", meaning: "The number 10" },
      { target: "스물", translit: "seumul", meaning: "The number 20" },
    ],
    quiz: [
      { type: "mc", q: "What does '열' mean?", options: ["The number 1", "The number 5", "The number 10", "The number 20"], a: 2 },
      { type: "fill", q: "How do you say 'The number 20' in Korean?", a: "스물" },
      { type: "mc", q: "Which word means 'The number 1'?", options: ["다섯", "하나", "열", "스물"], a: 1 },
    ],
  },
  family: {
    intro: "Learn words for close family members.",
    examples: [
      { target: "엄마", translit: "eomma", meaning: "Female parent" },
      { target: "아빠", translit: "appa", meaning: "Male parent" },
      { target: "여동생", translit: "yeodongsaeng", meaning: "Younger female sibling" },
      { target: "남동생", translit: "namdongsaeng", meaning: "Younger male sibling" },
    ],
    quiz: [
      { type: "mc", q: "What does '엄마' mean?", options: ["Male parent", "Female parent", "Younger male sibling", "Younger female sibling"], a: 1 },
      { type: "fill", q: "How do you say 'Younger male sibling' in Korean?", a: "남동생" },
      { type: "mc", q: "Which word means 'Younger female sibling'?", options: ["엄마", "아빠", "여동생", "남동생"], a: 2 },
    ],
  },
  colors: {
    intro: "Learn the four most common colors in Korean.",
    examples: [
      { target: "빨간색", translit: "ppalgansaek", meaning: "The color of fire" },
      { target: "파란색", translit: "paransaek", meaning: "The color of the sky" },
      { target: "초록색", translit: "choroksaek", meaning: "The color of grass" },
      { target: "노란색", translit: "noransaek", meaning: "The color of the sun" },
    ],
    quiz: [
      { type: "mc", q: "What does '파란색' mean?", options: ["The color of fire", "The color of the sky", "The color of grass", "The color of the sun"], a: 1 },
      { type: "fill", q: "How do you say 'The color of grass' in Korean?", a: "초록색" },
      { type: "mc", q: "Which word means 'The color of fire'?", options: ["빨간색", "파란색", "초록색", "노란색"], a: 0 },
    ],
  },
  days: {
    intro: "Learn a few days of the week in Korean.",
    examples: [
      { target: "월요일", translit: "woryoil", meaning: "First workday" },
      { target: "금요일", translit: "geumyoil", meaning: "Last workday" },
      { target: "토요일", translit: "toyoil", meaning: "First weekend day" },
      { target: "일요일", translit: "iryoil", meaning: "Second weekend day" },
    ],
    quiz: [
      { type: "mc", q: "What does '금요일' mean?", options: ["First workday", "Last workday", "First weekend day", "Second weekend day"], a: 1 },
      { type: "fill", q: "How do you say 'Second weekend day' in Korean?", a: "일요일" },
      { type: "mc", q: "Which word means 'First workday'?", options: ["월요일", "금요일", "토요일", "일요일"], a: 0 },
    ],
  },
  food_basics: {
    intro: "Learn basic food and drink words in Korean.",
    examples: [
      { target: "물", translit: "mul", meaning: "A clear drink" },
      { target: "빵", translit: "ppang", meaning: "Baked food staple" },
      { target: "밥", translit: "bap", meaning: "A grain staple food" },
      { target: "커피", translit: "keopi", meaning: "A hot caffeinated drink" },
    ],
    quiz: [
      { type: "mc", q: "What does '밥' mean?", options: ["A clear drink", "Baked food staple", "A grain staple food", "A hot caffeinated drink"], a: 2 },
      { type: "fill", q: "How do you say 'A hot caffeinated drink' in Korean?", a: "커피" },
      { type: "mc", q: "Which word means 'A clear drink'?", options: ["물", "빵", "밥", "커피"], a: 0 },
    ],
  },
  shopping: {
    intro: "Useful phrases for shopping and paying in Korean.",
    examples: [
      { target: "얼마예요?", translit: "eolmayeyo?", meaning: "Asking for a price" },
      { target: "이거 주세요", translit: "igeo juseyo", meaning: "Choosing an item" },
      { target: "할인", translit: "harin", meaning: "A price reduction" },
      { target: "현금", translit: "hyeongeum", meaning: "Paper money" },
    ],
    quiz: [
      { type: "mc", q: "What does '할인' mean?", options: ["Asking for a price", "Choosing an item", "A price reduction", "Paper money"], a: 2 },
      { type: "fill", q: "How do you say 'Paper money' in Korean?", a: "현금" },
      { type: "mc", q: "Which phrase means 'Asking for a price'?", options: ["이거 주세요", "얼마예요?", "할인", "현금"], a: 1 },
    ],
  },
  directions: {
    intro: "Learn to ask for and follow directions in Korean.",
    examples: [
      { target: "왼쪽", translit: "oenjjok", meaning: "Opposite of right" },
      { target: "오른쪽", translit: "oreunjjok", meaning: "Opposite of left" },
      { target: "곧장 가세요", translit: "gotjang gaseyo", meaning: "Go forward" },
      { target: "화장실이 어디예요?", translit: "hwajangsiri eodiyeyo?", meaning: "Asking for a location" },
    ],
    quiz: [
      { type: "mc", q: "What does '곧장 가세요' mean?", options: ["Opposite of right", "Opposite of left", "Go forward", "Asking for a location"], a: 2 },
      { type: "fill", q: "How do you say 'Opposite of right' in Korean?", a: "왼쪽" },
      { type: "mc", q: "Which phrase means 'Asking for a location'?", options: ["왼쪽", "오른쪽", "곧장 가세요", "화장실이 어디예요?"], a: 3 },
    ],
  },
  time: {
    intro: "Learn to talk about time of day in Korean.",
    examples: [
      { target: "지금 몇 시예요?", translit: "jigeum myeot siyeyo?", meaning: "Asking the current time" },
      { target: "아침", translit: "achim", meaning: "Early part of the day" },
      { target: "오후", translit: "ohu", meaning: "Midday part of the day" },
      { target: "자정", translit: "jajeong", meaning: "12 AM" },
    ],
    quiz: [
      { type: "mc", q: "What does '자정' mean?", options: ["Asking the current time", "Early part of the day", "Midday part of the day", "12 AM"], a: 3 },
      { type: "fill", q: "How do you say 'Early part of the day' in Korean?", a: "아침" },
      { type: "mc", q: "Which phrase means 'Asking the current time'?", options: ["지금 몇 시예요?", "아침", "오후", "자정"], a: 0 },
    ],
  },
  weather: {
    intro: "Describe common weather conditions in Korean.",
    examples: [
      { target: "비가 와요", translit: "biga wayo", meaning: "Rain is falling" },
      { target: "화창해요", translit: "hwachanghaeyo", meaning: "Bright with sunshine" },
      { target: "추워요", translit: "chuwoyo", meaning: "Low temperature" },
      { target: "더워요", translit: "deowoyo", meaning: "High temperature" },
    ],
    quiz: [
      { type: "mc", q: "What does '화창해요' mean?", options: ["Rain is falling", "Bright with sunshine", "Low temperature", "High temperature"], a: 1 },
      { type: "fill", q: "How do you say 'High temperature' in Korean?", a: "더워요" },
      { type: "mc", q: "Which phrase means 'Rain is falling'?", options: ["비가 와요", "화창해요", "추워요", "더워요"], a: 0 },
    ],
  },
  hobbies: {
    intro: "Talk about free-time activities in Korean.",
    examples: [
      { target: "독서", translit: "dokseo", meaning: "Enjoying books" },
      { target: "음악", translit: "eumak", meaning: "Listening to songs" },
      { target: "운동", translit: "undong", meaning: "Physical games" },
      { target: "요리", translit: "yori", meaning: "Preparing food" },
    ],
    quiz: [
      { type: "mc", q: "What does '요리' mean?", options: ["Enjoying books", "Listening to songs", "Physical games", "Preparing food"], a: 3 },
      { type: "fill", q: "How do you say 'Enjoying books' in Korean?", a: "독서" },
      { type: "mc", q: "Which word means 'Physical games'?", options: ["독서", "음악", "운동", "요리"], a: 2 },
    ],
  },
  body_health: {
    intro: "Learn body parts and how to describe feeling unwell in Korean.",
    examples: [
      { target: "머리", translit: "meori", meaning: "Top part of the body" },
      { target: "배", translit: "bae", meaning: "Belly area" },
      { target: "아파요", translit: "apayo", meaning: "Not feeling well" },
      { target: "의사", translit: "uisa", meaning: "Medical professional" },
    ],
    quiz: [
      { type: "mc", q: "What does '배' mean?", options: ["Top part of the body", "Belly area", "Not feeling well", "Medical professional"], a: 1 },
      { type: "fill", q: "How do you say 'Medical professional' in Korean?", a: "의사" },
      { type: "mc", q: "Which phrase means 'Not feeling well'?", options: ["머리", "배", "아파요", "의사"], a: 2 },
    ],
  },
  restaurant: {
    intro: "Order food and ask for the bill in Korean.",
    examples: [
      { target: "메뉴", translit: "menyu", meaning: "List of dishes" },
      { target: "이걸로 할게요", translit: "igeollo halgeyo", meaning: "Ordering a dish" },
      { target: "계산해 주세요", translit: "gyesanhae juseyo", meaning: "Asking to pay" },
      { target: "맛있어요", translit: "masisseoyo", meaning: "Tastes great" },
    ],
    quiz: [
      { type: "mc", q: "What does '계산해 주세요' mean?", options: ["List of dishes", "Ordering a dish", "Asking to pay", "Tastes great"], a: 2 },
      { type: "fill", q: "How do you say 'Tastes great' in Korean?", a: "맛있어요" },
      { type: "mc", q: "Which phrase means 'List of dishes'?", options: ["메뉴", "이걸로 할게요", "계산해 주세요", "맛있어요"], a: 0 },
    ],
  },
  travel: {
    intro: "Key words for airports and train stations in Korean.",
    examples: [
      { target: "공항", translit: "gonghang", meaning: "Place planes depart from" },
      { target: "표", translit: "pyo", meaning: "Pass to travel" },
      { target: "여권", translit: "yeogwon", meaning: "Travel ID document" },
      { target: "기차역", translit: "gichayeok", meaning: "Place trains depart from" },
    ],
    quiz: [
      { type: "mc", q: "What does '여권' mean?", options: ["Place planes depart from", "Pass to travel", "Travel ID document", "Place trains depart from"], a: 2 },
      { type: "fill", q: "How do you say 'Pass to travel' in Korean?", a: "표" },
      { type: "mc", q: "Which word means 'Place trains depart from'?", options: ["공항", "표", "여권", "기차역"], a: 3 },
    ],
  },
  work: {
    intro: "Talk about your job and workplace in Korean.",
    examples: [
      { target: "회의", translit: "hoeui", meaning: "A work gathering" },
      { target: "마감일", translit: "magamil", meaning: "Due date" },
      { target: "동료", translit: "dongryo", meaning: "Co-worker" },
      { target: "회사", translit: "hoesa", meaning: "Workplace" },
    ],
    quiz: [
      { type: "mc", q: "What does '마감일' mean?", options: ["A work gathering", "Due date", "Co-worker", "Workplace"], a: 1 },
      { type: "fill", q: "How do you say 'Co-worker' in Korean?", a: "동료" },
      { type: "mc", q: "Which word means 'A work gathering'?", options: ["회의", "마감일", "동료", "회사"], a: 0 },
    ],
  },
  emotions: {
    intro: "Describe how you feel in Korean.",
    examples: [
      { target: "행복해요", translit: "haengbokhaeyo", meaning: "Feeling joy" },
      { target: "슬퍼요", translit: "seulpeoyo", meaning: "Feeling down" },
      { target: "피곤해요", translit: "pigonhaeyo", meaning: "Needing rest" },
      { target: "신나요", translit: "sinnayo", meaning: "Feeling enthusiastic" },
    ],
    quiz: [
      { type: "mc", q: "What does '피곤해요' mean?", options: ["Feeling joy", "Feeling down", "Needing rest", "Feeling enthusiastic"], a: 2 },
      { type: "fill", q: "How do you say 'Feeling enthusiastic' in Korean?", a: "신나요" },
      { type: "mc", q: "Which word means 'Feeling joy'?", options: ["행복해요", "슬퍼요", "피곤해요", "신나요"], a: 0 },
    ],
  },
  technology: {
    intro: "Learn common phone and internet vocabulary in Korean.",
    examples: [
      { target: "전화", translit: "jeonhwa", meaning: "Device for calls" },
      { target: "인터넷", translit: "inteonet", meaning: "Global network" },
      { target: "비밀번호", translit: "bimilbeonho", meaning: "Secret access code" },
      { target: "배터리", translit: "baeteori", meaning: "Stores power" },
    ],
    quiz: [
      { type: "mc", q: "What does '비밀번호' mean?", options: ["Device for calls", "Global network", "Secret access code", "Stores power"], a: 2 },
      { type: "fill", q: "How do you say 'Stores power' in Korean?", a: "배터리" },
      { type: "mc", q: "Which word means 'Global network'?", options: ["전화", "인터넷", "비밀번호", "배터리"], a: 1 },
    ],
  },
  home: {
    intro: "Learn common room and furniture words in Korean.",
    examples: [
      { target: "부엌", translit: "bueok", meaning: "Room for cooking" },
      { target: "침실", translit: "chimsil", meaning: "Room for sleeping" },
      { target: "테이블", translit: "teibeul", meaning: "Furniture to eat/work on" },
      { target: "의자", translit: "uija", meaning: "Furniture for sitting" },
    ],
    quiz: [
      { type: "mc", q: "What does '침실' mean?", options: ["Room for cooking", "Room for sleeping", "Furniture to eat/work on", "Furniture for sitting"], a: 1 },
      { type: "fill", q: "How do you say 'Furniture for sitting' in Korean?", a: "의자" },
      { type: "mc", q: "Which word means 'Room for cooking'?", options: ["부엌", "침실", "테이블", "의자"], a: 0 },
    ],
  },
  opinions: {
    intro: "Learn phrases for sharing your point of view in Korean.",
    examples: [
      { target: "제 생각에는", translit: "je saenggagineun", meaning: "Introducing an opinion" },
      { target: "동의해요", translit: "dongihaeyo", meaning: "Sharing the same view" },
      { target: "동의하지 않아요", translit: "dongihaji anhayo", meaning: "Having a different view" },
      { target: "제 의견으로는", translit: "je uigyeoneuroneun", meaning: "Introducing a personal view" },
    ],
    quiz: [
      { type: "mc", q: "What does '동의하지 않아요' mean?", options: ["Introducing an opinion", "Sharing the same view", "Having a different view", "Introducing a personal view"], a: 2 },
      { type: "fill", q: "How do you say 'Sharing the same view' in Korean?", a: "동의해요" },
      { type: "mc", q: "Which phrase means 'Introducing an opinion'?", options: ["제 생각에는", "동의해요", "동의하지 않아요", "제 의견으로는"], a: 0 },
    ],
  },
  past_tense: {
    intro: "Talk about things that already happened in Korean.",
    examples: [
      { target: "어제", translit: "eoje", meaning: "The day before today" },
      { target: "갔어요", translit: "gasseoyo", meaning: "Past of 'I go'" },
      { target: "먹었어요", translit: "meogeosseoyo", meaning: "Past of 'I eat'" },
      { target: "지난주", translit: "jinanju", meaning: "The week before this one" },
    ],
    quiz: [
      { type: "mc", q: "What does '갔어요' mean?", options: ["The day before today", "Past of 'I go'", "Past of 'I eat'", "The week before this one"], a: 1 },
      { type: "fill", q: "How do you say 'Past of I eat' in Korean?", a: "먹었어요" },
      { type: "mc", q: "Which phrase means 'The day before today'?", options: ["어제", "갔어요", "먹었어요", "지난주"], a: 0 },
    ],
  },
  future_plans: {
    intro: "Talk about plans and future events in Korean.",
    examples: [
      { target: "내일", translit: "naeil", meaning: "The day after today" },
      { target: "갈 거예요", translit: "gal geoyeyo", meaning: "Future of 'I go'" },
      { target: "내년", translit: "naenyeon", meaning: "The year after this one" },
      { target: "계획하고 있어요", translit: "gyehoekhago isseoyo", meaning: "Expressing intent" },
    ],
    quiz: [
      { type: "mc", q: "What does '갈 거예요' mean?", options: ["The day after today", "Future of 'I go'", "The year after this one", "Expressing intent"], a: 1 },
      { type: "fill", q: "How do you say 'Expressing intent' in Korean?", a: "계획하고 있어요" },
      { type: "mc", q: "Which phrase means 'The day after today'?", options: ["내일", "갈 거예요", "내년", "계획하고 있어요"], a: 0 },
    ],
  },
  socializing: {
    intro: "Casual phrases for small talk with friends in Korean.",
    examples: [
      { target: "어떻게 지내요?", translit: "eotteoke jinaeyo?", meaning: "Casual greeting" },
      { target: "오랜만이에요", translit: "oraenmanieyo", meaning: "Said after a while apart" },
      { target: "만나요", translit: "mannayo", meaning: "Suggesting to meet" },
      { target: "반가워요", translit: "bangawoyo", meaning: "Friendly greeting" },
    ],
    quiz: [
      { type: "mc", q: "What does '오랜만이에요' mean?", options: ["Casual greeting", "Said after a while apart", "Suggesting to meet", "Friendly greeting"], a: 1 },
      { type: "fill", q: "How do you say 'Suggesting to meet' in Korean?", a: "만나요" },
      { type: "mc", q: "Which phrase is a casual greeting?", options: ["어떻게 지내요?", "오랜만이에요", "만나요", "반가워요"], a: 0 },
    ],
  },
  negotiating: {
    intro: "Bargain and negotiate prices politely in Korean.",
    examples: [
      { target: "가격을 낮춰 주실 수 있어요?", translit: "gageogeul natchwo jusil su isseoyo?", meaning: "Asking for a discount" },
      { target: "너무 비싸요", translit: "neomu bissayo", meaning: "Complaining about price" },
      { target: "마지막 제안", translit: "majimak jean", meaning: "Last price offered" },
      { target: "좋아요", translit: "johayo", meaning: "Agreement reached" },
    ],
    quiz: [
      { type: "mc", q: "What does '마지막 제안' mean?", options: ["Asking for a discount", "Complaining about price", "Last price offered", "Agreement reached"], a: 2 },
      { type: "fill", q: "How do you say 'Agreement reached' in Korean?", a: "좋아요" },
      { type: "mc", q: "Which phrase means 'Asking for a discount'?", options: ["가격을 낮춰 주실 수 있어요?", "너무 비싸요", "마지막 제안", "좋아요"], a: 0 },
    ],
  },
  news_media: {
    intro: "Vocabulary for reading and discussing the news in Korean.",
    examples: [
      { target: "뉴스", translit: "nyuseu", meaning: "Recent information" },
      { target: "신문", translit: "sinmun", meaning: "Printed news publication" },
      { target: "~에 따르면", translit: "~e ttareumyeon", meaning: "Citing a source" },
      { target: "속보", translit: "sokbo", meaning: "Urgent new report" },
    ],
    quiz: [
      { type: "mc", q: "What does '속보' mean?", options: ["Recent information", "Printed news publication", "Citing a source", "Urgent new report"], a: 3 },
      { type: "fill", q: "How do you say 'Citing a source' in Korean?", a: "~에 따르면" },
      { type: "mc", q: "Which word means 'Printed news publication'?", options: ["뉴스", "신문", "~에 따르면", "속보"], a: 1 },
    ],
  },
  business: {
    intro: "Formal vocabulary for business settings in Korean.",
    examples: [
      { target: "계약", translit: "gyeyak", meaning: "A legal agreement" },
      { target: "회의", translit: "hoeui", meaning: "A business gathering" },
      { target: "마감일", translit: "magamil", meaning: "Due date" },
      { target: "청구서", translit: "cheongguseo", meaning: "A bill for payment" },
    ],
    quiz: [
      { type: "mc", q: "What does '청구서' mean?", options: ["A legal agreement", "A business gathering", "Due date", "A bill for payment"], a: 3 },
      { type: "fill", q: "How do you say 'A legal agreement' in Korean?", a: "계약" },
      { type: "mc", q: "Which word means 'Due date'?", options: ["계약", "회의", "마감일", "청구서"], a: 2 },
    ],
  },
  idioms: {
    intro: "Learn common Korean idiomatic expressions.",
    examples: [
      { target: "분위기를 풀다", translit: "bunwigireul pulda", meaning: "Start a conversation easily" },
      { target: "식은 죽 먹기", translit: "sigeun juk mokgi", meaning: "Something very easy" },
      { target: "시간이 쏜살같이 간다", translit: "sigani ssonsalgatchi ganda", meaning: "Time passes quickly" },
      { target: "가끔", translit: "gakkeum", meaning: "Occasionally" },
    ],
    quiz: [
      { type: "mc", q: "What does '식은 죽 먹기' mean?", options: ["Start a conversation easily", "Something very easy", "Time passes quickly", "Occasionally"], a: 1 },
      { type: "fill", q: "How do you say 'Occasionally' in Korean?", a: "가끔" },
      { type: "mc", q: "Which idiom means 'Time passes quickly'?", options: ["분위기를 풀다", "식은 죽 먹기", "시간이 쏜살같이 간다", "가끔"], a: 2 },
    ],
  },
  debate: {
    intro: "Phrases for debating and persuading others in Korean.",
    examples: [
      { target: "저는 강하게 믿습니다", translit: "jeoneun ganghage midseumnida", meaning: "Stating a firm opinion" },
      { target: "반면에", translit: "banmyeone", meaning: "Presenting a contrast" },
      { target: "증거에 따르면", translit: "jeunggeoe ttareumyeon", meaning: "Citing proof" },
      { target: "결론적으로", translit: "gyeollonjeogeuro", meaning: "Summarizing an argument" },
    ],
    quiz: [
      { type: "mc", q: "What does '반면에' mean?", options: ["Stating a firm opinion", "Presenting a contrast", "Citing proof", "Summarizing an argument"], a: 1 },
      { type: "fill", q: "How do you say 'Summarizing an argument' in Korean?", a: "결론적으로" },
      { type: "mc", q: "Which phrase means 'Citing proof'?", options: ["저는 강하게 믿습니다", "반면에", "증거에 따르면", "결론적으로"], a: 2 },
    ],
  },
  culture: {
    intro: "Vocabulary about Korean traditions and heritage.",
    examples: [
      { target: "전통", translit: "jeontong", meaning: "A long-held custom" },
      { target: "축제", translit: "chukje", meaning: "A celebration event" },
      { target: "풍습", translit: "pungseup", meaning: "A usual practice" },
      { target: "유산", translit: "yusan", meaning: "Inherited culture" },
    ],
    quiz: [
      { type: "mc", q: "What does '축제' mean?", options: ["A long-held custom", "A celebration event", "A usual practice", "Inherited culture"], a: 1 },
      { type: "fill", q: "How do you say 'Inherited culture' in Korean?", a: "유산" },
      { type: "mc", q: "Which word means 'A usual practice'?", options: ["전통", "축제", "풍습", "유산"], a: 2 },
    ],
  },
  formal_writing: {
    intro: "Phrases for writing formal letters and emails in Korean.",
    examples: [
      { target: "담당자님께", translit: "damdangjanimkke", meaning: "Formal letter opening" },
      { target: "올림", translit: "ollim", meaning: "Formal letter closing" },
      { target: "문의드립니다", translit: "munuideurimnida", meaning: "Stating the letter's purpose" },
      { target: "첨부파일을 확인해 주세요", translit: "cheombupaireul hwaginhae juseyo", meaning: "Referring to an attachment" },
    ],
    quiz: [
      { type: "mc", q: "What does '올림' mean?", options: ["Formal letter opening", "Formal letter closing", "Stating the letter's purpose", "Referring to an attachment"], a: 1 },
      { type: "fill", q: "How do you say 'Formal letter opening' in Korean?", a: "담당자님께" },
      { type: "mc", q: "Which phrase refers to an attachment?", options: ["담당자님께", "올림", "문의드립니다", "첨부파일을 확인해 주세요"], a: 3 },
    ],
  },
  advanced_conversation: {
    intro: "Nuanced phrases for advanced, fluent conversation in Korean.",
    examples: [
      { target: "미묘한 차이", translit: "miyohan chai", meaning: "A subtle difference" },
      { target: "다시 말해서", translit: "dasi malhaeseo", meaning: "Rephrasing something" },
      { target: "그렇다고 해도", translit: "geureotago haedo", meaning: "Adding a contrasting point" },
      { target: "더 자세히 설명하다", translit: "deo jasehi seolmyeonghada", meaning: "Explaining in more detail" },
    ],
    quiz: [
      { type: "mc", q: "What does '미묘한 차이' mean?", options: ["A subtle difference", "Rephrasing something", "Adding a contrasting point", "Explaining in more detail"], a: 0 },
      { type: "fill", q: "How do you say 'Explaining in more detail' in Korean?", a: "더 자세히 설명하다" },
      { type: "mc", q: "Which phrase means 'Adding a contrasting point'?", options: ["미묘한 차이", "다시 말해서", "그렇다고 해도", "더 자세히 설명하다"], a: 2 },
    ],
  },
};

export default KO;
