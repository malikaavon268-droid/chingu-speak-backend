// Russian lesson content — real vocabulary/phrases with transliteration, fully offline.
import { LessonContent } from "../meta";

const RU: Record<string, LessonContent> = {
  greetings: {
    intro: "Learn the essential words for greeting people and saying goodbye in Russian.",
    examples: [
      { target: "Привет", translit: "Privet", meaning: "A friendly greeting" },
      { target: "Доброе утро", translit: "Dobroye utro", meaning: "Greeting used before noon" },
      { target: "Спасибо", translit: "Spasibo", meaning: "Expressing gratitude" },
      { target: "До свидания", translit: "Do svidaniya", meaning: "Said when leaving" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Привет' mean?", options: ["A friendly greeting", "Said when leaving", "Expressing gratitude", "Greeting before noon"], a: 0 },
      { type: "fill", q: "How do you say 'Expressing gratitude' in Russian?", a: "Спасибо" },
      { type: "mc", q: "Which word means 'Said when leaving'?", options: ["Привет", "Доброе утро", "До свидания", "Спасибо"], a: 2 },
    ],
  },
  numbers: {
    intro: "Practice counting from one to twenty in Russian.",
    examples: [
      { target: "Один", translit: "Odin", meaning: "The number 1" },
      { target: "Пять", translit: "Pyat'", meaning: "The number 5" },
      { target: "Десять", translit: "Desyat'", meaning: "The number 10" },
      { target: "Двадцать", translit: "Dvadtsat'", meaning: "The number 20" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Десять' mean?", options: ["The number 1", "The number 5", "The number 10", "The number 20"], a: 2 },
      { type: "fill", q: "How do you say 'The number 20' in Russian?", a: "Двадцать" },
      { type: "mc", q: "Which word means 'The number 1'?", options: ["Пять", "Один", "Десять", "Двадцать"], a: 1 },
    ],
  },
  family: {
    intro: "Learn words for close family members in Russian.",
    examples: [
      { target: "Мать", translit: "Mat'", meaning: "Female parent" },
      { target: "Отец", translit: "Otets", meaning: "Male parent" },
      { target: "Сестра", translit: "Sestra", meaning: "Female sibling" },
      { target: "Брат", translit: "Brat", meaning: "Male sibling" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Мать' mean?", options: ["Male parent", "Female parent", "Male sibling", "Female sibling"], a: 1 },
      { type: "fill", q: "How do you say 'Male sibling' in Russian?", a: "Брат" },
      { type: "mc", q: "Which word means 'Female sibling'?", options: ["Мать", "Отец", "Сестра", "Брат"], a: 2 },
    ],
  },
  colors: {
    intro: "Learn the four most common colors in Russian.",
    examples: [
      { target: "Красный", translit: "Krasnyy", meaning: "The color of fire" },
      { target: "Синий", translit: "Siniy", meaning: "The color of the sky" },
      { target: "Зелёный", translit: "Zelyonyy", meaning: "The color of grass" },
      { target: "Жёлтый", translit: "Zholtyy", meaning: "The color of the sun" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Синий' mean?", options: ["The color of fire", "The color of the sky", "The color of grass", "The color of the sun"], a: 1 },
      { type: "fill", q: "How do you say 'The color of grass' in Russian?", a: "Зелёный" },
      { type: "mc", q: "Which word means 'The color of fire'?", options: ["Красный", "Синий", "Зелёный", "Жёлтый"], a: 0 },
    ],
  },
  days: {
    intro: "Learn a few days of the week in Russian.",
    examples: [
      { target: "Понедельник", translit: "Ponedel'nik", meaning: "First workday" },
      { target: "Пятница", translit: "Pyatnitsa", meaning: "Last workday" },
      { target: "Субботa", translit: "Subbota", meaning: "First weekend day" },
      { target: "Воскресенье", translit: "Voskresen'ye", meaning: "Second weekend day" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Пятница' mean?", options: ["First workday", "Last workday", "First weekend day", "Second weekend day"], a: 1 },
      { type: "fill", q: "How do you say 'Second weekend day' in Russian?", a: "Воскресенье" },
      { type: "mc", q: "Which word means 'First workday'?", options: ["Понедельник", "Пятница", "Субботa", "Воскресенье"], a: 0 },
    ],
  },
  food_basics: {
    intro: "Learn basic food and drink words in Russian.",
    examples: [
      { target: "Вода", translit: "Voda", meaning: "A clear drink" },
      { target: "Хлеб", translit: "Khleb", meaning: "Baked food staple" },
      { target: "Рис", translit: "Ris", meaning: "A grain staple food" },
      { target: "Кофе", translit: "Kofe", meaning: "A hot caffeinated drink" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Рис' mean?", options: ["A clear drink", "Baked food staple", "A grain staple food", "A hot caffeinated drink"], a: 2 },
      { type: "fill", q: "How do you say 'A hot caffeinated drink' in Russian?", a: "Кофе" },
      { type: "mc", q: "Which word means 'A clear drink'?", options: ["Вода", "Хлеб", "Рис", "Кофе"], a: 0 },
    ],
  },
  shopping: {
    intro: "Useful phrases for shopping and paying in Russian.",
    examples: [
      { target: "Сколько это стоит?", translit: "Skol'ko eto stoit?", meaning: "Asking for a price" },
      { target: "Я хочу это", translit: "Ya khochu eto", meaning: "Choosing an item" },
      { target: "Скидка", translit: "Skidka", meaning: "A price reduction" },
      { target: "Наличные", translit: "Nalichnyye", meaning: "Paper money" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Скидка' mean?", options: ["Asking for a price", "Choosing an item", "A price reduction", "Paper money"], a: 2 },
      { type: "fill", q: "How do you say 'Paper money' in Russian?", a: "Наличные" },
      { type: "mc", q: "Which phrase means 'Asking for a price'?", options: ["Я хочу это", "Сколько это стоит?", "Скидка", "Наличные"], a: 1 },
    ],
  },
  directions: {
    intro: "Learn to ask for and follow directions in Russian.",
    examples: [
      { target: "Слева", translit: "Sleva", meaning: "Opposite of right" },
      { target: "Справа", translit: "Sprava", meaning: "Opposite of left" },
      { target: "Прямо", translit: "Pryamo", meaning: "Go forward" },
      { target: "Где туалет?", translit: "Gde tualet?", meaning: "Asking for a location" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Прямо' mean?", options: ["Opposite of right", "Opposite of left", "Go forward", "Asking for a location"], a: 2 },
      { type: "fill", q: "How do you say 'Opposite of right' in Russian?", a: "Слева" },
      { type: "mc", q: "Which phrase means 'Asking for a location'?", options: ["Слева", "Справа", "Прямо", "Где туалет?"], a: 3 },
    ],
  },
  time: {
    intro: "Learn to talk about time of day in Russian.",
    examples: [
      { target: "Который час?", translit: "Kotoryy chas?", meaning: "Asking the current time" },
      { target: "Утро", translit: "Utro", meaning: "Early part of the day" },
      { target: "День", translit: "Den'", meaning: "Midday part of the day" },
      { target: "Полночь", translit: "Polnoch'", meaning: "12 AM" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Полночь' mean?", options: ["Asking the current time", "Early part of the day", "Midday part of the day", "12 AM"], a: 3 },
      { type: "fill", q: "How do you say 'Early part of the day' in Russian?", a: "Утро" },
      { type: "mc", q: "Which phrase means 'Asking the current time'?", options: ["Который час?", "Утро", "День", "Полночь"], a: 0 },
    ],
  },
  weather: {
    intro: "Describe common weather conditions in Russian.",
    examples: [
      { target: "Идёт дождь", translit: "Idyot dozhd'", meaning: "Rain is falling" },
      { target: "Солнечно", translit: "Solnechno", meaning: "Bright with sunshine" },
      { target: "Холодно", translit: "Kholodno", meaning: "Low temperature" },
      { target: "Жарко", translit: "Zharko", meaning: "High temperature" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Солнечно' mean?", options: ["Rain is falling", "Bright with sunshine", "Low temperature", "High temperature"], a: 1 },
      { type: "fill", q: "How do you say 'High temperature' in Russian?", a: "Жарко" },
      { type: "mc", q: "Which phrase means 'Rain is falling'?", options: ["Идёт дождь", "Солнечно", "Холодно", "Жарко"], a: 0 },
    ],
  },
  hobbies: {
    intro: "Talk about free-time activities in Russian.",
    examples: [
      { target: "Чтение", translit: "Chteniye", meaning: "Enjoying books" },
      { target: "Музыка", translit: "Muzyka", meaning: "Listening to songs" },
      { target: "Спорт", translit: "Sport", meaning: "Physical games" },
      { target: "Готовка", translit: "Gotovka", meaning: "Preparing food" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Готовка' mean?", options: ["Enjoying books", "Listening to songs", "Physical games", "Preparing food"], a: 3 },
      { type: "fill", q: "How do you say 'Enjoying books' in Russian?", a: "Чтение" },
      { type: "mc", q: "Which word means 'Physical games'?", options: ["Чтение", "Музыка", "Спорт", "Готовка"], a: 2 },
    ],
  },
  body_health: {
    intro: "Learn body parts and how to describe feeling unwell in Russian.",
    examples: [
      { target: "Голова", translit: "Golova", meaning: "Top part of the body" },
      { target: "Живот", translit: "Zhivot", meaning: "Belly area" },
      { target: "Мне плохо", translit: "Mne plokho", meaning: "Not feeling well" },
      { target: "Врач", translit: "Vrach", meaning: "Medical professional" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Живот' mean?", options: ["Top part of the body", "Belly area", "Not feeling well", "Medical professional"], a: 1 },
      { type: "fill", q: "How do you say 'Medical professional' in Russian?", a: "Врач" },
      { type: "mc", q: "Which phrase means 'Not feeling well'?", options: ["Голова", "Живот", "Мне плохо", "Врач"], a: 2 },
    ],
  },
  restaurant: {
    intro: "Order food and ask for the bill in Russian.",
    examples: [
      { target: "Меню", translit: "Menyu", meaning: "List of dishes" },
      { target: "Я возьму это", translit: "Ya voz'mu eto", meaning: "Ordering a dish" },
      { target: "Счёт, пожалуйста", translit: "Schyot, pozhaluysta", meaning: "Asking to pay" },
      { target: "Вкусно", translit: "Vkusno", meaning: "Tastes great" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Счёт, пожалуйста' mean?", options: ["List of dishes", "Ordering a dish", "Asking to pay", "Tastes great"], a: 2 },
      { type: "fill", q: "How do you say 'Tastes great' in Russian?", a: "Вкусно" },
      { type: "mc", q: "Which phrase means 'List of dishes'?", options: ["Меню", "Я возьму это", "Счёт, пожалуйста", "Вкусно"], a: 0 },
    ],
  },
  travel: {
    intro: "Key words for airports and train stations in Russian.",
    examples: [
      { target: "Аэропорт", translit: "Aeroport", meaning: "Place planes depart from" },
      { target: "Билет", translit: "Bilet", meaning: "Pass to travel" },
      { target: "Паспорт", translit: "Pasport", meaning: "Travel ID document" },
      { target: "Вокзал", translit: "Vokzal", meaning: "Place trains depart from" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Паспорт' mean?", options: ["Place planes depart from", "Pass to travel", "Travel ID document", "Place trains depart from"], a: 2 },
      { type: "fill", q: "How do you say 'Pass to travel' in Russian?", a: "Билет" },
      { type: "mc", q: "Which word means 'Place trains depart from'?", options: ["Аэропорт", "Билет", "Паспорт", "Вокзал"], a: 3 },
    ],
  },
  work: {
    intro: "Talk about your job and workplace in Russian.",
    examples: [
      { target: "Встреча", translit: "Vstrecha", meaning: "A work gathering" },
      { target: "Срок", translit: "Srok", meaning: "Due date" },
      { target: "Коллега", translit: "Kollega", meaning: "Co-worker" },
      { target: "Офис", translit: "Ofis", meaning: "Workplace" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Срок' mean?", options: ["A work gathering", "Due date", "Co-worker", "Workplace"], a: 1 },
      { type: "fill", q: "How do you say 'Co-worker' in Russian?", a: "Коллега" },
      { type: "mc", q: "Which word means 'A work gathering'?", options: ["Встреча", "Срок", "Коллега", "Офис"], a: 0 },
    ],
  },
  emotions: {
    intro: "Describe how you feel in Russian.",
    examples: [
      { target: "Счастливый", translit: "Schastlivyy", meaning: "Feeling joy" },
      { target: "Грустный", translit: "Grustnyy", meaning: "Feeling down" },
      { target: "Устал", translit: "Ustal", meaning: "Needing rest" },
      { target: "Взволнован", translit: "Vzvolnovan", meaning: "Feeling enthusiastic" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Устал' mean?", options: ["Feeling joy", "Feeling down", "Needing rest", "Feeling enthusiastic"], a: 2 },
      { type: "fill", q: "How do you say 'Feeling enthusiastic' in Russian?", a: "Взволнован" },
      { type: "mc", q: "Which word means 'Feeling joy'?", options: ["Счастливый", "Грустный", "Устал", "Взволнован"], a: 0 },
    ],
  },
  technology: {
    intro: "Learn common phone and internet vocabulary in Russian.",
    examples: [
      { target: "Телефон", translit: "Telefon", meaning: "Device for calls" },
      { target: "Интернет", translit: "Internet", meaning: "Global network" },
      { target: "Пароль", translit: "Parol'", meaning: "Secret access code" },
      { target: "Батарея", translit: "Batareya", meaning: "Stores power" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Пароль' mean?", options: ["Device for calls", "Global network", "Secret access code", "Stores power"], a: 2 },
      { type: "fill", q: "How do you say 'Stores power' in Russian?", a: "Батарея" },
      { type: "mc", q: "Which word means 'Global network'?", options: ["Телефон", "Интернет", "Пароль", "Батарея"], a: 1 },
    ],
  },
  home: {
    intro: "Learn common room and furniture words in Russian.",
    examples: [
      { target: "Кухня", translit: "Kukhnya", meaning: "Room for cooking" },
      { target: "Спальня", translit: "Spal'nya", meaning: "Room for sleeping" },
      { target: "Стол", translit: "Stol", meaning: "Furniture to eat/work on" },
      { target: "Стул", translit: "Stul", meaning: "Furniture for sitting" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Спальня' mean?", options: ["Room for cooking", "Room for sleeping", "Furniture to eat/work on", "Furniture for sitting"], a: 1 },
      { type: "fill", q: "How do you say 'Furniture for sitting' in Russian?", a: "Стул" },
      { type: "mc", q: "Which word means 'Room for cooking'?", options: ["Кухня", "Спальня", "Стол", "Стул"], a: 0 },
    ],
  },
  opinions: {
    intro: "Learn phrases for sharing your point of view in Russian.",
    examples: [
      { target: "Я думаю", translit: "Ya dumayu", meaning: "Introducing an opinion" },
      { target: "Я согласен", translit: "Ya soglasen", meaning: "Sharing the same view" },
      { target: "Я не согласен", translit: "Ya ne soglasen", meaning: "Having a different view" },
      { target: "По моему мнению", translit: "Po moyemu mneniyu", meaning: "Introducing a personal view" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Я не согласен' mean?", options: ["Introducing an opinion", "Sharing the same view", "Having a different view", "Introducing a personal view"], a: 2 },
      { type: "fill", q: "How do you say 'Sharing the same view' in Russian?", a: "Я согласен" },
      { type: "mc", q: "Which phrase means 'Introducing an opinion'?", options: ["Я думаю", "Я согласен", "Я не согласен", "По моему мнению"], a: 0 },
    ],
  },
  past_tense: {
    intro: "Talk about things that already happened in Russian.",
    examples: [
      { target: "Вчера", translit: "Vchera", meaning: "The day before today" },
      { target: "Я пошёл", translit: "Ya poshyol", meaning: "Past of 'I go'" },
      { target: "Я поел", translit: "Ya poel", meaning: "Past of 'I eat'" },
      { target: "На прошлой неделе", translit: "Na proshloy nedele", meaning: "The week before this one" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Я пошёл' mean?", options: ["The day before today", "Past of 'I go'", "Past of 'I eat'", "The week before this one"], a: 1 },
      { type: "fill", q: "How do you say 'Past of I eat' in Russian?", a: "Я поел" },
      { type: "mc", q: "Which phrase means 'The day before today'?", options: ["Вчера", "Я пошёл", "Я поел", "На прошлой неделе"], a: 0 },
    ],
  },
  future_plans: {
    intro: "Talk about plans and future events in Russian.",
    examples: [
      { target: "Завтра", translit: "Zavtra", meaning: "The day after today" },
      { target: "Я пойду", translit: "Ya poydu", meaning: "Future of 'I go'" },
      { target: "В следующем году", translit: "V sleduyushchem godu", meaning: "The year after this one" },
      { target: "Я планирую", translit: "Ya planiruyu", meaning: "Expressing intent" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Я пойду' mean?", options: ["The day after today", "Future of 'I go'", "The year after this one", "Expressing intent"], a: 1 },
      { type: "fill", q: "How do you say 'Expressing intent' in Russian?", a: "Я планирую" },
      { type: "mc", q: "Which phrase means 'The day after today'?", options: ["Завтра", "Я пойду", "В следующем году", "Я планирую"], a: 0 },
    ],
  },
  socializing: {
    intro: "Casual phrases for small talk with friends in Russian.",
    examples: [
      { target: "Как дела?", translit: "Kak dela?", meaning: "Casual greeting" },
      { target: "Давно не виделись", translit: "Davno ne videlis'", meaning: "Said after a while apart" },
      { target: "Давай встретимся", translit: "Davay vstretimsya", meaning: "Suggesting to meet" },
      { target: "Приятно тебя видеть", translit: "Priyatno tebya videt'", meaning: "Friendly greeting" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Давно не виделись' mean?", options: ["Casual greeting", "Said after a while apart", "Suggesting to meet", "Friendly greeting"], a: 1 },
      { type: "fill", q: "How do you say 'Suggesting to meet' in Russian?", a: "Давай встретимся" },
      { type: "mc", q: "Which phrase is a casual greeting?", options: ["Как дела?", "Давно не виделись", "Давай встретимся", "Приятно тебя видеть"], a: 0 },
    ],
  },
  negotiating: {
    intro: "Bargain and negotiate prices politely in Russian.",
    examples: [
      { target: "Можете снизить цену?", translit: "Mozhete snizit' tsenu?", meaning: "Asking for a discount" },
      { target: "Это слишком дорого", translit: "Eto slishkom dorogo", meaning: "Complaining about price" },
      { target: "Финальное предложение", translit: "Final'noye predlozheniye", meaning: "Last price offered" },
      { target: "Договорились", translit: "Dogovorilis'", meaning: "Agreement reached" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Финальное предложение' mean?", options: ["Asking for a discount", "Complaining about price", "Last price offered", "Agreement reached"], a: 2 },
      { type: "fill", q: "How do you say 'Agreement reached' in Russian?", a: "Договорились" },
      { type: "mc", q: "Which phrase means 'Asking for a discount'?", options: ["Можете снизить цену?", "Это слишком дорого", "Финальное предложение", "Договорились"], a: 0 },
    ],
  },
  news_media: {
    intro: "Vocabulary for reading and discussing the news in Russian.",
    examples: [
      { target: "Новости", translit: "Novosti", meaning: "Recent information" },
      { target: "Газета", translit: "Gazeta", meaning: "Printed news publication" },
      { target: "По данным", translit: "Po dannym", meaning: "Citing a source" },
      { target: "Срочные новости", translit: "Srochnyye novosti", meaning: "Urgent new report" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Срочные новости' mean?", options: ["Recent information", "Printed news publication", "Citing a source", "Urgent new report"], a: 3 },
      { type: "fill", q: "How do you say 'Citing a source' in Russian?", a: "По данным" },
      { type: "mc", q: "Which word means 'Printed news publication'?", options: ["Новости", "Газета", "По данным", "Срочные новости"], a: 1 },
    ],
  },
  business: {
    intro: "Formal vocabulary for business settings in Russian.",
    examples: [
      { target: "Контракт", translit: "Kontrakt", meaning: "A legal agreement" },
      { target: "Встреча", translit: "Vstrecha", meaning: "A business gathering" },
      { target: "Срок", translit: "Srok", meaning: "Due date" },
      { target: "Счёт-фактура", translit: "Schyot-faktura", meaning: "A bill for payment" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Счёт-фактура' mean?", options: ["A legal agreement", "A business gathering", "Due date", "A bill for payment"], a: 3 },
      { type: "fill", q: "How do you say 'A legal agreement' in Russian?", a: "Контракт" },
      { type: "mc", q: "Which word means 'Due date'?", options: ["Контракт", "Встреча", "Срок", "Счёт-фактура"], a: 2 },
    ],
  },
  idioms: {
    intro: "Learn common idiomatic expressions in Russian.",
    examples: [
      { target: "Растопить лёд", translit: "Rastopit' lyod", meaning: "Start a conversation easily" },
      { target: "Проще простого", translit: "Proshche prostogo", meaning: "Something very easy" },
      { target: "Время летит", translit: "Vremya letit", meaning: "Time passes quickly" },
      { target: "Время от времени", translit: "Vremya ot vremeni", meaning: "Occasionally" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Проще простого' mean?", options: ["Start a conversation easily", "Something very easy", "Time passes quickly", "Occasionally"], a: 1 },
      { type: "fill", q: "How do you say 'Occasionally' in Russian?", a: "Время от времени" },
      { type: "mc", q: "Which idiom means 'Time passes quickly'?", options: ["Растопить лёд", "Проще простого", "Время летит", "Время от времени"], a: 2 },
    ],
  },
  debate: {
    intro: "Phrases for debating and persuading others in Russian.",
    examples: [
      { target: "Я твёрдо верю", translit: "Ya tvyordo veryu", meaning: "Stating a firm opinion" },
      { target: "С другой стороны", translit: "S drugoy storony", meaning: "Presenting a contrast" },
      { target: "Доказательства показывают", translit: "Dokazatel'stva pokazyvayut", meaning: "Citing proof" },
      { target: "В заключение", translit: "V zaklyucheniye", meaning: "Summarizing an argument" },
    ],
    quiz: [
      { type: "mc", q: "What does 'С другой стороны' mean?", options: ["Stating a firm opinion", "Presenting a contrast", "Citing proof", "Summarizing an argument"], a: 1 },
      { type: "fill", q: "How do you say 'Summarizing an argument' in Russian?", a: "В заключение" },
      { type: "mc", q: "Which phrase means 'Citing proof'?", options: ["Я твёрдо верю", "С другой стороны", "Доказательства показывают", "В заключение"], a: 2 },
    ],
  },
  culture: {
    intro: "Vocabulary about traditions and heritage in Russian.",
    examples: [
      { target: "Традиция", translit: "Traditsiya", meaning: "A long-held custom" },
      { target: "Фестиваль", translit: "Festival'", meaning: "A celebration event" },
      { target: "Обычай", translit: "Obychay", meaning: "A usual practice" },
      { target: "Наследие", translit: "Naslediye", meaning: "Inherited culture" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Фестиваль' mean?", options: ["A long-held custom", "A celebration event", "A usual practice", "Inherited culture"], a: 1 },
      { type: "fill", q: "How do you say 'Inherited culture' in Russian?", a: "Наследие" },
      { type: "mc", q: "Which word means 'A usual practice'?", options: ["Традиция", "Фестиваль", "Обычай", "Наследие"], a: 2 },
    ],
  },
  formal_writing: {
    intro: "Phrases for writing formal letters and emails in Russian.",
    examples: [
      { target: "Уважаемый господин/госпожа", translit: "Uvazhayemyy gospodin/gospozha", meaning: "Formal letter opening" },
      { target: "С уважением", translit: "S uvazheniyem", meaning: "Formal letter closing" },
      { target: "Я пишу вам, чтобы", translit: "Ya pishu vam, chtoby", meaning: "Stating the letter's purpose" },
      { target: "Прилагается", translit: "Prilagayetsya", meaning: "Referring to an attachment" },
    ],
    quiz: [
      { type: "mc", q: "What does 'С уважением' mean?", options: ["Formal letter opening", "Formal letter closing", "Stating the letter's purpose", "Referring to an attachment"], a: 1 },
      { type: "fill", q: "How do you say 'Formal letter opening' in Russian?", a: "Уважаемый господин/госпожа" },
      { type: "mc", q: "Which phrase refers to an attachment?", options: ["Уважаемый господин/госпожа", "С уважением", "Я пишу вам, чтобы", "Прилагается"], a: 3 },
    ],
  },
  advanced_conversation: {
    intro: "Nuanced phrases for advanced, fluent conversation in Russian.",
    examples: [
      { target: "Нюанс", translit: "Nyuans", meaning: "A subtle difference" },
      { target: "Другими словами", translit: "Drugimi slovami", meaning: "Rephrasing something" },
      { target: "При этом", translit: "Pri etom", meaning: "Adding a contrasting point" },
      { target: "Подробнее объяснить", translit: "Podrobneye ob'yasnit'", meaning: "Explaining in more detail" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Нюанс' mean?", options: ["A subtle difference", "Rephrasing something", "Adding a contrasting point", "Explaining in more detail"], a: 0 },
      { type: "fill", q: "How do you say 'Explaining in more detail' in Russian?", a: "Подробнее объяснить" },
      { type: "mc", q: "Which phrase means 'Adding a contrasting point'?", options: ["Нюанс", "Другими словами", "При этом", "Подробнее объяснить"], a: 2 },
    ],
  },
};

export default RU;
