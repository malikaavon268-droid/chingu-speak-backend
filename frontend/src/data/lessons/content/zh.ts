// Chinese (Mandarin) lesson content — real vocabulary/phrases with pinyin, fully offline.
import { LessonContent } from "../meta";

const ZH: Record<string, LessonContent> = {
  greetings: {
    intro: "Learn the essential words for greeting people and saying goodbye in Chinese.",
    examples: [
      { target: "你好", translit: "Nǐ hǎo", meaning: "A friendly greeting" },
      { target: "早上好", translit: "Zǎoshang hǎo", meaning: "Greeting used before noon" },
      { target: "谢谢", translit: "Xièxiè", meaning: "Expressing gratitude" },
      { target: "再见", translit: "Zàijiàn", meaning: "Said when leaving" },
    ],
    quiz: [
      { type: "mc", q: "What does '你好' mean?", options: ["A friendly greeting", "Said when leaving", "Expressing gratitude", "Greeting before noon"], a: 0 },
      { type: "fill", q: "How do you say 'Expressing gratitude' in Chinese?", a: "谢谢" },
      { type: "mc", q: "Which word means 'Said when leaving'?", options: ["你好", "早上好", "再见", "谢谢"], a: 2 },
    ],
  },
  numbers: {
    intro: "Practice counting from one to twenty in Chinese.",
    examples: [
      { target: "一", translit: "Yī", meaning: "The number 1" },
      { target: "五", translit: "Wǔ", meaning: "The number 5" },
      { target: "十", translit: "Shí", meaning: "The number 10" },
      { target: "二十", translit: "Èrshí", meaning: "The number 20" },
    ],
    quiz: [
      { type: "mc", q: "What does '十' mean?", options: ["The number 1", "The number 5", "The number 10", "The number 20"], a: 2 },
      { type: "fill", q: "How do you say 'The number 20' in Chinese?", a: "二十" },
      { type: "mc", q: "Which word means 'The number 1'?", options: ["五", "一", "十", "二十"], a: 1 },
    ],
  },
  family: {
    intro: "Learn words for close family members in Chinese.",
    examples: [
      { target: "妈妈", translit: "Māma", meaning: "Female parent" },
      { target: "爸爸", translit: "Bàba", meaning: "Male parent" },
      { target: "妹妹", translit: "Mèimei", meaning: "Younger female sibling" },
      { target: "弟弟", translit: "Dìdi", meaning: "Younger male sibling" },
    ],
    quiz: [
      { type: "mc", q: "What does '妈妈' mean?", options: ["Male parent", "Female parent", "Younger male sibling", "Younger female sibling"], a: 1 },
      { type: "fill", q: "How do you say 'Younger male sibling' in Chinese?", a: "弟弟" },
      { type: "mc", q: "Which word means 'Younger female sibling'?", options: ["妈妈", "爸爸", "妹妹", "弟弟"], a: 2 },
    ],
  },
  colors: {
    intro: "Learn the four most common colors in Chinese.",
    examples: [
      { target: "红色", translit: "Hóngsè", meaning: "The color of fire" },
      { target: "蓝色", translit: "Lánsè", meaning: "The color of the sky" },
      { target: "绿色", translit: "Lǜsè", meaning: "The color of grass" },
      { target: "黄色", translit: "Huángsè", meaning: "The color of the sun" },
    ],
    quiz: [
      { type: "mc", q: "What does '蓝色' mean?", options: ["The color of fire", "The color of the sky", "The color of grass", "The color of the sun"], a: 1 },
      { type: "fill", q: "How do you say 'The color of grass' in Chinese?", a: "绿色" },
      { type: "mc", q: "Which word means 'The color of fire'?", options: ["红色", "蓝色", "绿色", "黄色"], a: 0 },
    ],
  },
  days: {
    intro: "Learn a few days of the week in Chinese.",
    examples: [
      { target: "星期一", translit: "Xīngqīyī", meaning: "First workday" },
      { target: "星期五", translit: "Xīngqīwǔ", meaning: "Last workday" },
      { target: "星期六", translit: "Xīngqīliù", meaning: "First weekend day" },
      { target: "星期日", translit: "Xīngqīrì", meaning: "Second weekend day" },
    ],
    quiz: [
      { type: "mc", q: "What does '星期五' mean?", options: ["First workday", "Last workday", "First weekend day", "Second weekend day"], a: 1 },
      { type: "fill", q: "How do you say 'Second weekend day' in Chinese?", a: "星期日" },
      { type: "mc", q: "Which word means 'First workday'?", options: ["星期一", "星期五", "星期六", "星期日"], a: 0 },
    ],
  },
  food_basics: {
    intro: "Learn basic food and drink words in Chinese.",
    examples: [
      { target: "水", translit: "Shuǐ", meaning: "A clear drink" },
      { target: "面包", translit: "Miànbāo", meaning: "Baked food staple" },
      { target: "米饭", translit: "Mǐfàn", meaning: "A grain staple food" },
      { target: "咖啡", translit: "Kāfēi", meaning: "A hot caffeinated drink" },
    ],
    quiz: [
      { type: "mc", q: "What does '米饭' mean?", options: ["A clear drink", "Baked food staple", "A grain staple food", "A hot caffeinated drink"], a: 2 },
      { type: "fill", q: "How do you say 'A hot caffeinated drink' in Chinese?", a: "咖啡" },
      { type: "mc", q: "Which word means 'A clear drink'?", options: ["水", "面包", "米饭", "咖啡"], a: 0 },
    ],
  },
  shopping: {
    intro: "Useful phrases for shopping and paying in Chinese.",
    examples: [
      { target: "这个多少钱?", translit: "Zhège duōshǎo qián?", meaning: "Asking for a price" },
      { target: "我要这个", translit: "Wǒ yào zhège", meaning: "Choosing an item" },
      { target: "折扣", translit: "Zhékòu", meaning: "A price reduction" },
      { target: "现金", translit: "Xiànjīn", meaning: "Paper money" },
    ],
    quiz: [
      { type: "mc", q: "What does '折扣' mean?", options: ["Asking for a price", "Choosing an item", "A price reduction", "Paper money"], a: 2 },
      { type: "fill", q: "How do you say 'Paper money' in Chinese?", a: "现金" },
      { type: "mc", q: "Which phrase means 'Asking for a price'?", options: ["我要这个", "这个多少钱?", "折扣", "现金"], a: 1 },
    ],
  },
  directions: {
    intro: "Learn to ask for and follow directions in Chinese.",
    examples: [
      { target: "左边", translit: "Zuǒbiān", meaning: "Opposite of right" },
      { target: "右边", translit: "Yòubiān", meaning: "Opposite of left" },
      { target: "一直走", translit: "Yīzhí zǒu", meaning: "Go forward" },
      { target: "厕所在哪里?", translit: "Cèsuǒ zài nǎlǐ?", meaning: "Asking for a location" },
    ],
    quiz: [
      { type: "mc", q: "What does '一直走' mean?", options: ["Opposite of right", "Opposite of left", "Go forward", "Asking for a location"], a: 2 },
      { type: "fill", q: "How do you say 'Opposite of right' in Chinese?", a: "左边" },
      { type: "mc", q: "Which phrase means 'Asking for a location'?", options: ["左边", "右边", "一直走", "厕所在哪里?"], a: 3 },
    ],
  },
  time: {
    intro: "Learn to talk about time of day in Chinese.",
    examples: [
      { target: "现在几点?", translit: "Xiànzài jǐ diǎn?", meaning: "Asking the current time" },
      { target: "早上", translit: "Zǎoshang", meaning: "Early part of the day" },
      { target: "下午", translit: "Xiàwǔ", meaning: "Midday part of the day" },
      { target: "半夜", translit: "Bànyè", meaning: "12 AM" },
    ],
    quiz: [
      { type: "mc", q: "What does '半夜' mean?", options: ["Asking the current time", "Early part of the day", "Midday part of the day", "12 AM"], a: 3 },
      { type: "fill", q: "How do you say 'Early part of the day' in Chinese?", a: "早上" },
      { type: "mc", q: "Which phrase means 'Asking the current time'?", options: ["现在几点?", "早上", "下午", "半夜"], a: 0 },
    ],
  },
  weather: {
    intro: "Describe common weather conditions in Chinese.",
    examples: [
      { target: "在下雨", translit: "Zài xiàyǔ", meaning: "Rain is falling" },
      { target: "晴天", translit: "Qíngtiān", meaning: "Bright with sunshine" },
      { target: "冷", translit: "Lěng", meaning: "Low temperature" },
      { target: "热", translit: "Rè", meaning: "High temperature" },
    ],
    quiz: [
      { type: "mc", q: "What does '晴天' mean?", options: ["Rain is falling", "Bright with sunshine", "Low temperature", "High temperature"], a: 1 },
      { type: "fill", q: "How do you say 'High temperature' in Chinese?", a: "热" },
      { type: "mc", q: "Which phrase means 'Rain is falling'?", options: ["在下雨", "晴天", "冷", "热"], a: 0 },
    ],
  },
  hobbies: {
    intro: "Talk about free-time activities in Chinese.",
    examples: [
      { target: "阅读", translit: "Yuèdú", meaning: "Enjoying books" },
      { target: "音乐", translit: "Yīnyuè", meaning: "Listening to songs" },
      { target: "运动", translit: "Yùndòng", meaning: "Physical games" },
      { target: "做饭", translit: "Zuòfàn", meaning: "Preparing food" },
    ],
    quiz: [
      { type: "mc", q: "What does '做饭' mean?", options: ["Enjoying books", "Listening to songs", "Physical games", "Preparing food"], a: 3 },
      { type: "fill", q: "How do you say 'Enjoying books' in Chinese?", a: "阅读" },
      { type: "mc", q: "Which word means 'Physical games'?", options: ["阅读", "音乐", "运动", "做饭"], a: 2 },
    ],
  },
  body_health: {
    intro: "Learn body parts and how to describe feeling unwell in Chinese.",
    examples: [
      { target: "头", translit: "Tóu", meaning: "Top part of the body" },
      { target: "胃", translit: "Wèi", meaning: "Belly area" },
      { target: "我感觉不舒服", translit: "Wǒ gǎnjué bù shūfú", meaning: "Not feeling well" },
      { target: "医生", translit: "Yīshēng", meaning: "Medical professional" },
    ],
    quiz: [
      { type: "mc", q: "What does '胃' mean?", options: ["Top part of the body", "Belly area", "Not feeling well", "Medical professional"], a: 1 },
      { type: "fill", q: "How do you say 'Medical professional' in Chinese?", a: "医生" },
      { type: "mc", q: "Which phrase means 'Not feeling well'?", options: ["头", "胃", "我感觉不舒服", "医生"], a: 2 },
    ],
  },
  restaurant: {
    intro: "Order food and ask for the bill in Chinese.",
    examples: [
      { target: "菜单", translit: "Càidān", meaning: "List of dishes" },
      { target: "我要点这个", translit: "Wǒ yào diǎn zhège", meaning: "Ordering a dish" },
      { target: "请结账", translit: "Qǐng jiézhàng", meaning: "Asking to pay" },
      { target: "好吃", translit: "Hǎochī", meaning: "Tastes great" },
    ],
    quiz: [
      { type: "mc", q: "What does '请结账' mean?", options: ["List of dishes", "Ordering a dish", "Asking to pay", "Tastes great"], a: 2 },
      { type: "fill", q: "How do you say 'Tastes great' in Chinese?", a: "好吃" },
      { type: "mc", q: "Which phrase means 'List of dishes'?", options: ["菜单", "我要点这个", "请结账", "好吃"], a: 0 },
    ],
  },
  travel: {
    intro: "Key words for airports and train stations in Chinese.",
    examples: [
      { target: "机场", translit: "Jīchǎng", meaning: "Place planes depart from" },
      { target: "票", translit: "Piào", meaning: "Pass to travel" },
      { target: "护照", translit: "Hùzhào", meaning: "Travel ID document" },
      { target: "火车站", translit: "Huǒchēzhàn", meaning: "Place trains depart from" },
    ],
    quiz: [
      { type: "mc", q: "What does '护照' mean?", options: ["Place planes depart from", "Pass to travel", "Travel ID document", "Place trains depart from"], a: 2 },
      { type: "fill", q: "How do you say 'Pass to travel' in Chinese?", a: "票" },
      { type: "mc", q: "Which word means 'Place trains depart from'?", options: ["机场", "票", "护照", "火车站"], a: 3 },
    ],
  },
  work: {
    intro: "Talk about your job and workplace in Chinese.",
    examples: [
      { target: "会议", translit: "Huìyì", meaning: "A work gathering" },
      { target: "截止日期", translit: "Jiézhǐ rìqī", meaning: "Due date" },
      { target: "同事", translit: "Tóngshì", meaning: "Co-worker" },
      { target: "办公室", translit: "Bàngōngshì", meaning: "Workplace" },
    ],
    quiz: [
      { type: "mc", q: "What does '截止日期' mean?", options: ["A work gathering", "Due date", "Co-worker", "Workplace"], a: 1 },
      { type: "fill", q: "How do you say 'Co-worker' in Chinese?", a: "同事" },
      { type: "mc", q: "Which word means 'A work gathering'?", options: ["会议", "截止日期", "同事", "办公室"], a: 0 },
    ],
  },
  emotions: {
    intro: "Describe how you feel in Chinese.",
    examples: [
      { target: "开心", translit: "Kāixīn", meaning: "Feeling joy" },
      { target: "伤心", translit: "Shāngxīn", meaning: "Feeling down" },
      { target: "累", translit: "Lèi", meaning: "Needing rest" },
      { target: "兴奋", translit: "Xīngfèn", meaning: "Feeling enthusiastic" },
    ],
    quiz: [
      { type: "mc", q: "What does '累' mean?", options: ["Feeling joy", "Feeling down", "Needing rest", "Feeling enthusiastic"], a: 2 },
      { type: "fill", q: "How do you say 'Feeling enthusiastic' in Chinese?", a: "兴奋" },
      { type: "mc", q: "Which word means 'Feeling joy'?", options: ["开心", "伤心", "累", "兴奋"], a: 0 },
    ],
  },
  technology: {
    intro: "Learn common phone and internet vocabulary in Chinese.",
    examples: [
      { target: "电话", translit: "Diànhuà", meaning: "Device for calls" },
      { target: "互联网", translit: "Hùliánwǎng", meaning: "Global network" },
      { target: "密码", translit: "Mìmǎ", meaning: "Secret access code" },
      { target: "电池", translit: "Diànchí", meaning: "Stores power" },
    ],
    quiz: [
      { type: "mc", q: "What does '密码' mean?", options: ["Device for calls", "Global network", "Secret access code", "Stores power"], a: 2 },
      { type: "fill", q: "How do you say 'Stores power' in Chinese?", a: "电池" },
      { type: "mc", q: "Which word means 'Global network'?", options: ["电话", "互联网", "密码", "电池"], a: 1 },
    ],
  },
  home: {
    intro: "Learn common room and furniture words in Chinese.",
    examples: [
      { target: "厨房", translit: "Chúfáng", meaning: "Room for cooking" },
      { target: "卧室", translit: "Wòshì", meaning: "Room for sleeping" },
      { target: "桌子", translit: "Zhuōzi", meaning: "Furniture to eat/work on" },
      { target: "椅子", translit: "Yǐzi", meaning: "Furniture for sitting" },
    ],
    quiz: [
      { type: "mc", q: "What does '卧室' mean?", options: ["Room for cooking", "Room for sleeping", "Furniture to eat/work on", "Furniture for sitting"], a: 1 },
      { type: "fill", q: "How do you say 'Furniture for sitting' in Chinese?", a: "椅子" },
      { type: "mc", q: "Which word means 'Room for cooking'?", options: ["厨房", "卧室", "桌子", "椅子"], a: 0 },
    ],
  },
  opinions: {
    intro: "Learn phrases for sharing your point of view in Chinese.",
    examples: [
      { target: "我认为", translit: "Wǒ rènwéi", meaning: "Introducing an opinion" },
      { target: "我同意", translit: "Wǒ tóngyì", meaning: "Sharing the same view" },
      { target: "我不同意", translit: "Wǒ bù tóngyì", meaning: "Having a different view" },
      { target: "我的意见是", translit: "Wǒ de yìjiàn shì", meaning: "Introducing a personal view" },
    ],
    quiz: [
      { type: "mc", q: "What does '我不同意' mean?", options: ["Introducing an opinion", "Sharing the same view", "Having a different view", "Introducing a personal view"], a: 2 },
      { type: "fill", q: "How do you say 'Sharing the same view' in Chinese?", a: "我同意" },
      { type: "mc", q: "Which phrase means 'Introducing an opinion'?", options: ["我认为", "我同意", "我不同意", "我的意见是"], a: 0 },
    ],
  },
  past_tense: {
    intro: "Talk about things that already happened in Chinese.",
    examples: [
      { target: "昨天", translit: "Zuótiān", meaning: "The day before today" },
      { target: "我去了", translit: "Wǒ qùle", meaning: "Past of 'I go'" },
      { target: "我吃了", translit: "Wǒ chīle", meaning: "Past of 'I eat'" },
      { target: "上周", translit: "Shàng zhōu", meaning: "The week before this one" },
    ],
    quiz: [
      { type: "mc", q: "What does '我去了' mean?", options: ["The day before today", "Past of 'I go'", "Past of 'I eat'", "The week before this one"], a: 1 },
      { type: "fill", q: "How do you say 'Past of I eat' in Chinese?", a: "我吃了" },
      { type: "mc", q: "Which phrase means 'The day before today'?", options: ["昨天", "我去了", "我吃了", "上周"], a: 0 },
    ],
  },
  future_plans: {
    intro: "Talk about plans and future events in Chinese.",
    examples: [
      { target: "明天", translit: "Míngtiān", meaning: "The day after today" },
      { target: "我会去", translit: "Wǒ huì qù", meaning: "Future of 'I go'" },
      { target: "明年", translit: "Míngnián", meaning: "The year after this one" },
      { target: "我打算", translit: "Wǒ dǎsuàn", meaning: "Expressing intent" },
    ],
    quiz: [
      { type: "mc", q: "What does '我会去' mean?", options: ["The day after today", "Future of 'I go'", "The year after this one", "Expressing intent"], a: 1 },
      { type: "fill", q: "How do you say 'Expressing intent' in Chinese?", a: "我打算" },
      { type: "mc", q: "Which phrase means 'The day after today'?", options: ["明天", "我会去", "明年", "我打算"], a: 0 },
    ],
  },
  socializing: {
    intro: "Casual phrases for small talk with friends in Chinese.",
    examples: [
      { target: "你怎么样?", translit: "Nǐ zěnmeyàng?", meaning: "Casual greeting" },
      { target: "好久不见", translit: "Hǎojiǔ bùjiàn", meaning: "Said after a while apart" },
      { target: "我们见面吧", translit: "Wǒmen jiànmiàn ba", meaning: "Suggesting to meet" },
      { target: "很高兴见到你", translit: "Hěn gāoxìng jiàndào nǐ", meaning: "Friendly greeting" },
    ],
    quiz: [
      { type: "mc", q: "What does '好久不见' mean?", options: ["Casual greeting", "Said after a while apart", "Suggesting to meet", "Friendly greeting"], a: 1 },
      { type: "fill", q: "How do you say 'Suggesting to meet' in Chinese?", a: "我们见面吧" },
      { type: "mc", q: "Which phrase is a casual greeting?", options: ["你怎么样?", "好久不见", "我们见面吧", "很高兴见到你"], a: 0 },
    ],
  },
  negotiating: {
    intro: "Bargain and negotiate prices politely in Chinese.",
    examples: [
      { target: "你能便宜一点吗?", translit: "Nǐ néng piányí yīdiǎn ma?", meaning: "Asking for a discount" },
      { target: "太贵了", translit: "Tài guì le", meaning: "Complaining about price" },
      { target: "最终报价", translit: "Zuìzhōng bàojià", meaning: "Last price offered" },
      { target: "成交", translit: "Chéngjiāo", meaning: "Agreement reached" },
    ],
    quiz: [
      { type: "mc", q: "What does '最终报价' mean?", options: ["Asking for a discount", "Complaining about price", "Last price offered", "Agreement reached"], a: 2 },
      { type: "fill", q: "How do you say 'Agreement reached' in Chinese?", a: "成交" },
      { type: "mc", q: "Which phrase means 'Asking for a discount'?", options: ["你能便宜一点吗?", "太贵了", "最终报价", "成交"], a: 0 },
    ],
  },
  news_media: {
    intro: "Vocabulary for reading and discussing the news in Chinese.",
    examples: [
      { target: "新闻", translit: "Xīnwén", meaning: "Recent information" },
      { target: "报纸", translit: "Bàozhǐ", meaning: "Printed news publication" },
      { target: "根据", translit: "Gēnjù", meaning: "Citing a source" },
      { target: "快讯", translit: "Kuàixùn", meaning: "Urgent new report" },
    ],
    quiz: [
      { type: "mc", q: "What does '快讯' mean?", options: ["Recent information", "Printed news publication", "Citing a source", "Urgent new report"], a: 3 },
      { type: "fill", q: "How do you say 'Citing a source' in Chinese?", a: "根据" },
      { type: "mc", q: "Which word means 'Printed news publication'?", options: ["新闻", "报纸", "根据", "快讯"], a: 1 },
    ],
  },
  business: {
    intro: "Formal vocabulary for business settings in Chinese.",
    examples: [
      { target: "合同", translit: "Hétóng", meaning: "A legal agreement" },
      { target: "会议", translit: "Huìyì", meaning: "A business gathering" },
      { target: "截止日期", translit: "Jiézhǐ rìqī", meaning: "Due date" },
      { target: "发票", translit: "Fāpiào", meaning: "A bill for payment" },
    ],
    quiz: [
      { type: "mc", q: "What does '发票' mean?", options: ["A legal agreement", "A business gathering", "Due date", "A bill for payment"], a: 3 },
      { type: "fill", q: "How do you say 'A legal agreement' in Chinese?", a: "合同" },
      { type: "mc", q: "Which word means 'Due date'?", options: ["合同", "会议", "截止日期", "发票"], a: 2 },
    ],
  },
  idioms: {
    intro: "Learn common idiomatic expressions in Chinese.",
    examples: [
      { target: "打破僵局", translit: "Dǎpò jiāngjú", meaning: "Start a conversation easily" },
      { target: "小菜一碟", translit: "Xiǎocài yī dié", meaning: "Something very easy" },
      { target: "时光飞逝", translit: "Shíguāng fēishì", meaning: "Time passes quickly" },
      { target: "偶尔", translit: "Ǒu'ěr", meaning: "Occasionally" },
    ],
    quiz: [
      { type: "mc", q: "What does '小菜一碟' mean?", options: ["Start a conversation easily", "Something very easy", "Time passes quickly", "Occasionally"], a: 1 },
      { type: "fill", q: "How do you say 'Occasionally' in Chinese?", a: "偶尔" },
      { type: "mc", q: "Which idiom means 'Time passes quickly'?", options: ["打破僵局", "小菜一碟", "时光飞逝", "偶尔"], a: 2 },
    ],
  },
  debate: {
    intro: "Phrases for debating and persuading others in Chinese.",
    examples: [
      { target: "我坚信", translit: "Wǒ jiānxìn", meaning: "Stating a firm opinion" },
      { target: "另一方面", translit: "Lìng yī fāngmiàn", meaning: "Presenting a contrast" },
      { target: "证据表明", translit: "Zhèngjù biǎomíng", meaning: "Citing proof" },
      { target: "总之", translit: "Zǒngzhī", meaning: "Summarizing an argument" },
    ],
    quiz: [
      { type: "mc", q: "What does '另一方面' mean?", options: ["Stating a firm opinion", "Presenting a contrast", "Citing proof", "Summarizing an argument"], a: 1 },
      { type: "fill", q: "How do you say 'Summarizing an argument' in Chinese?", a: "总之" },
      { type: "mc", q: "Which phrase means 'Citing proof'?", options: ["我坚信", "另一方面", "证据表明", "总之"], a: 2 },
    ],
  },
  culture: {
    intro: "Vocabulary about traditions and heritage in Chinese.",
    examples: [
      { target: "传统", translit: "Chuántǒng", meaning: "A long-held custom" },
      { target: "节日", translit: "Jiérì", meaning: "A celebration event" },
      { target: "习俗", translit: "Xísú", meaning: "A usual practice" },
      { target: "遗产", translit: "Yíchǎn", meaning: "Inherited culture" },
    ],
    quiz: [
      { type: "mc", q: "What does '节日' mean?", options: ["A long-held custom", "A celebration event", "A usual practice", "Inherited culture"], a: 1 },
      { type: "fill", q: "How do you say 'Inherited culture' in Chinese?", a: "遗产" },
      { type: "mc", q: "Which word means 'A usual practice'?", options: ["传统", "节日", "习俗", "遗产"], a: 2 },
    ],
  },
  formal_writing: {
    intro: "Phrases for writing formal letters and emails in Chinese.",
    examples: [
      { target: "尊敬的先生/女士", translit: "Zūnjìng de xiānshēng/nǔshì", meaning: "Formal letter opening" },
      { target: "敬上", translit: "Jìngshàng", meaning: "Formal letter closing" },
      { target: "我写信是为了", translit: "Wǒ xiěxìn shì wèile", meaning: "Stating the letter's purpose" },
      { target: "请查看附件", translit: "Qǐng chákàn fùjiàn", meaning: "Referring to an attachment" },
    ],
    quiz: [
      { type: "mc", q: "What does '敬上' mean?", options: ["Formal letter opening", "Formal letter closing", "Stating the letter's purpose", "Referring to an attachment"], a: 1 },
      { type: "fill", q: "How do you say 'Formal letter opening' in Chinese?", a: "尊敬的先生/女士" },
      { type: "mc", q: "Which phrase refers to an attachment?", options: ["尊敬的先生/女士", "敬上", "我写信是为了", "请查看附件"], a: 3 },
    ],
  },
  advanced_conversation: {
    intro: "Nuanced phrases for advanced, fluent conversation in Chinese.",
    examples: [
      { target: "细微差别", translit: "Xìwēi chābié", meaning: "A subtle difference" },
      { target: "换句话说", translit: "Huàn jù huà shuō", meaning: "Rephrasing something" },
      { target: "话虽如此", translit: "Huà suī rúcǐ", meaning: "Adding a contrasting point" },
      { target: "详细说明", translit: "Xiángxì shuōmíng", meaning: "Explaining in more detail" },
    ],
    quiz: [
      { type: "mc", q: "What does '细微差别' mean?", options: ["A subtle difference", "Rephrasing something", "Adding a contrasting point", "Explaining in more detail"], a: 0 },
      { type: "fill", q: "How do you say 'Explaining in more detail' in Chinese?", a: "详细说明" },
      { type: "mc", q: "Which phrase means 'Adding a contrasting point'?", options: ["细微差别", "换句话说", "话虽如此", "详细说明"], a: 2 },
    ],
  },
};

export default ZH;
