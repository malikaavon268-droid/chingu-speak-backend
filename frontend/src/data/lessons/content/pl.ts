// Polish lesson content — real vocabulary/phrases, fully offline.
import { LessonContent } from "../meta";

const PL: Record<string, LessonContent> = {
  greetings: {
    intro: "Learn the essential words for greeting people and saying goodbye in Polish.",
    examples: [
      { target: "Cześć", meaning: "A friendly greeting" },
      { target: "Dzień dobry", meaning: "Greeting used before noon" },
      { target: "Dziękuję", meaning: "Expressing gratitude" },
      { target: "Do widzenia", meaning: "Said when leaving" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Cześć' mean?", options: ["A friendly greeting", "Said when leaving", "Expressing gratitude", "Greeting before noon"], a: 0 },
      { type: "fill", q: "How do you say 'Expressing gratitude' in Polish?", a: "Dziękuję" },
      { type: "mc", q: "Which word means 'Said when leaving'?", options: ["Cześć", "Dzień dobry", "Do widzenia", "Dziękuję"], a: 2 },
    ],
  },
  numbers: {
    intro: "Practice counting from one to twenty in Polish.",
    examples: [
      { target: "Jeden", meaning: "The number 1" },
      { target: "Pięć", meaning: "The number 5" },
      { target: "Dziesięć", meaning: "The number 10" },
      { target: "Dwadzieścia", meaning: "The number 20" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Dziesięć' mean?", options: ["The number 1", "The number 5", "The number 10", "The number 20"], a: 2 },
      { type: "fill", q: "How do you say 'The number 20' in Polish?", a: "Dwadzieścia" },
      { type: "mc", q: "Which word means 'The number 1'?", options: ["Pięć", "Jeden", "Dziesięć", "Dwadzieścia"], a: 1 },
    ],
  },
  family: {
    intro: "Learn words for close family members in Polish.",
    examples: [
      { target: "Matka", meaning: "Female parent" },
      { target: "Ojciec", meaning: "Male parent" },
      { target: "Siostra", meaning: "Female sibling" },
      { target: "Brat", meaning: "Male sibling" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Matka' mean?", options: ["Male parent", "Female parent", "Male sibling", "Female sibling"], a: 1 },
      { type: "fill", q: "How do you say 'Male sibling' in Polish?", a: "Brat" },
      { type: "mc", q: "Which word means 'Female sibling'?", options: ["Matka", "Ojciec", "Siostra", "Brat"], a: 2 },
    ],
  },
  colors: {
    intro: "Learn the four most common colors in Polish.",
    examples: [
      { target: "Czerwony", meaning: "The color of fire" },
      { target: "Niebieski", meaning: "The color of the sky" },
      { target: "Zielony", meaning: "The color of grass" },
      { target: "Żółty", meaning: "The color of the sun" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Niebieski' mean?", options: ["The color of fire", "The color of the sky", "The color of grass", "The color of the sun"], a: 1 },
      { type: "fill", q: "How do you say 'The color of grass' in Polish?", a: "Zielony" },
      { type: "mc", q: "Which word means 'The color of fire'?", options: ["Czerwony", "Niebieski", "Zielony", "Żółty"], a: 0 },
    ],
  },
  days: {
    intro: "Learn a few days of the week in Polish.",
    examples: [
      { target: "Poniedziałek", meaning: "First workday" },
      { target: "Piątek", meaning: "Last workday" },
      { target: "Sobota", meaning: "First weekend day" },
      { target: "Niedziela", meaning: "Second weekend day" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Piątek' mean?", options: ["First workday", "Last workday", "First weekend day", "Second weekend day"], a: 1 },
      { type: "fill", q: "How do you say 'Second weekend day' in Polish?", a: "Niedziela" },
      { type: "mc", q: "Which word means 'First workday'?", options: ["Poniedziałek", "Piątek", "Sobota", "Niedziela"], a: 0 },
    ],
  },
  food_basics: {
    intro: "Learn basic food and drink words in Polish.",
    examples: [
      { target: "Woda", meaning: "A clear drink" },
      { target: "Chleb", meaning: "Baked food staple" },
      { target: "Ryż", meaning: "A grain staple food" },
      { target: "Kawa", meaning: "A hot caffeinated drink" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Ryż' mean?", options: ["A clear drink", "Baked food staple", "A grain staple food", "A hot caffeinated drink"], a: 2 },
      { type: "fill", q: "How do you say 'A hot caffeinated drink' in Polish?", a: "Kawa" },
      { type: "mc", q: "Which word means 'A clear drink'?", options: ["Woda", "Chleb", "Ryż", "Kawa"], a: 0 },
    ],
  },
  shopping: {
    intro: "Useful phrases for shopping and paying in Polish.",
    examples: [
      { target: "Ile to kosztuje?", meaning: "Asking for a price" },
      { target: "Chcę to", meaning: "Choosing an item" },
      { target: "Zniżka", meaning: "A price reduction" },
      { target: "Gotówka", meaning: "Paper money" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Zniżka' mean?", options: ["Asking for a price", "Choosing an item", "A price reduction", "Paper money"], a: 2 },
      { type: "fill", q: "How do you say 'Paper money' in Polish?", a: "Gotówka" },
      { type: "mc", q: "Which phrase means 'Asking for a price'?", options: ["Chcę to", "Ile to kosztuje?", "Zniżka", "Gotówka"], a: 1 },
    ],
  },
  directions: {
    intro: "Learn to ask for and follow directions in Polish.",
    examples: [
      { target: "Lewo", meaning: "Opposite of right" },
      { target: "Prawo", meaning: "Opposite of left" },
      { target: "Prosto", meaning: "Go forward" },
      { target: "Gdzie jest toaleta?", meaning: "Asking for a location" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Prosto' mean?", options: ["Opposite of right", "Opposite of left", "Go forward", "Asking for a location"], a: 2 },
      { type: "fill", q: "How do you say 'Opposite of right' in Polish?", a: "Lewo" },
      { type: "mc", q: "Which phrase means 'Asking for a location'?", options: ["Lewo", "Prawo", "Prosto", "Gdzie jest toaleta?"], a: 3 },
    ],
  },
  time: {
    intro: "Learn to talk about time of day in Polish.",
    examples: [
      { target: "Która jest godzina?", meaning: "Asking the current time" },
      { target: "Rano", meaning: "Early part of the day" },
      { target: "Popołudnie", meaning: "Midday part of the day" },
      { target: "Północ", meaning: "12 AM" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Północ' mean?", options: ["Asking the current time", "Early part of the day", "Midday part of the day", "12 AM"], a: 3 },
      { type: "fill", q: "How do you say 'Early part of the day' in Polish?", a: "Rano" },
      { type: "mc", q: "Which phrase means 'Asking the current time'?", options: ["Która jest godzina?", "Rano", "Popołudnie", "Północ"], a: 0 },
    ],
  },
  weather: {
    intro: "Describe common weather conditions in Polish.",
    examples: [
      { target: "Pada deszcz", meaning: "Rain is falling" },
      { target: "Słonecznie", meaning: "Bright with sunshine" },
      { target: "Zimno", meaning: "Low temperature" },
      { target: "Gorąco", meaning: "High temperature" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Słonecznie' mean?", options: ["Rain is falling", "Bright with sunshine", "Low temperature", "High temperature"], a: 1 },
      { type: "fill", q: "How do you say 'High temperature' in Polish?", a: "Gorąco" },
      { type: "mc", q: "Which phrase means 'Rain is falling'?", options: ["Pada deszcz", "Słonecznie", "Zimno", "Gorąco"], a: 0 },
    ],
  },
  hobbies: {
    intro: "Talk about free-time activities in Polish.",
    examples: [
      { target: "Czytanie", meaning: "Enjoying books" },
      { target: "Muzyka", meaning: "Listening to songs" },
      { target: "Sport", meaning: "Physical games" },
      { target: "Gotowanie", meaning: "Preparing food" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Gotowanie' mean?", options: ["Enjoying books", "Listening to songs", "Physical games", "Preparing food"], a: 3 },
      { type: "fill", q: "How do you say 'Enjoying books' in Polish?", a: "Czytanie" },
      { type: "mc", q: "Which word means 'Physical games'?", options: ["Czytanie", "Muzyka", "Sport", "Gotowanie"], a: 2 },
    ],
  },
  body_health: {
    intro: "Learn body parts and how to describe feeling unwell in Polish.",
    examples: [
      { target: "Głowa", meaning: "Top part of the body" },
      { target: "Żołądek", meaning: "Belly area" },
      { target: "Czuję się chory", meaning: "Not feeling well" },
      { target: "Lekarz", meaning: "Medical professional" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Żołądek' mean?", options: ["Top part of the body", "Belly area", "Not feeling well", "Medical professional"], a: 1 },
      { type: "fill", q: "How do you say 'Medical professional' in Polish?", a: "Lekarz" },
      { type: "mc", q: "Which phrase means 'Not feeling well'?", options: ["Głowa", "Żołądek", "Czuję się chory", "Lekarz"], a: 2 },
    ],
  },
  restaurant: {
    intro: "Order food and ask for the bill in Polish.",
    examples: [
      { target: "Menu", meaning: "List of dishes" },
      { target: "Zamówię to", meaning: "Ordering a dish" },
      { target: "Proszę o rachunek", meaning: "Asking to pay" },
      { target: "Smaczne", meaning: "Tastes great" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Proszę o rachunek' mean?", options: ["List of dishes", "Ordering a dish", "Asking to pay", "Tastes great"], a: 2 },
      { type: "fill", q: "How do you say 'Tastes great' in Polish?", a: "Smaczne" },
      { type: "mc", q: "Which phrase means 'List of dishes'?", options: ["Menu", "Zamówię to", "Proszę o rachunek", "Smaczne"], a: 0 },
    ],
  },
  travel: {
    intro: "Key words for airports and train stations in Polish.",
    examples: [
      { target: "Lotnisko", meaning: "Place planes depart from" },
      { target: "Bilet", meaning: "Pass to travel" },
      { target: "Paszport", meaning: "Travel ID document" },
      { target: "Stacja kolejowa", meaning: "Place trains depart from" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Paszport' mean?", options: ["Place planes depart from", "Pass to travel", "Travel ID document", "Place trains depart from"], a: 2 },
      { type: "fill", q: "How do you say 'Pass to travel' in Polish?", a: "Bilet" },
      { type: "mc", q: "Which word means 'Place trains depart from'?", options: ["Lotnisko", "Bilet", "Paszport", "Stacja kolejowa"], a: 3 },
    ],
  },
  work: {
    intro: "Talk about your job and workplace in Polish.",
    examples: [
      { target: "Spotkanie", meaning: "A work gathering" },
      { target: "Termin", meaning: "Due date" },
      { target: "Kolega", meaning: "Co-worker" },
      { target: "Biuro", meaning: "Workplace" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Termin' mean?", options: ["A work gathering", "Due date", "Co-worker", "Workplace"], a: 1 },
      { type: "fill", q: "How do you say 'Co-worker' in Polish?", a: "Kolega" },
      { type: "mc", q: "Which word means 'A work gathering'?", options: ["Spotkanie", "Termin", "Kolega", "Biuro"], a: 0 },
    ],
  },
  emotions: {
    intro: "Describe how you feel in Polish.",
    examples: [
      { target: "Szczęśliwy", meaning: "Feeling joy" },
      { target: "Smutny", meaning: "Feeling down" },
      { target: "Zmęczony", meaning: "Needing rest" },
      { target: "Podekscytowany", meaning: "Feeling enthusiastic" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Zmęczony' mean?", options: ["Feeling joy", "Feeling down", "Needing rest", "Feeling enthusiastic"], a: 2 },
      { type: "fill", q: "How do you say 'Feeling enthusiastic' in Polish?", a: "Podekscytowany" },
      { type: "mc", q: "Which word means 'Feeling joy'?", options: ["Szczęśliwy", "Smutny", "Zmęczony", "Podekscytowany"], a: 0 },
    ],
  },
  technology: {
    intro: "Learn common phone and internet vocabulary in Polish.",
    examples: [
      { target: "Telefon", meaning: "Device for calls" },
      { target: "Internet", meaning: "Global network" },
      { target: "Hasło", meaning: "Secret access code" },
      { target: "Bateria", meaning: "Stores power" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Hasło' mean?", options: ["Device for calls", "Global network", "Secret access code", "Stores power"], a: 2 },
      { type: "fill", q: "How do you say 'Stores power' in Polish?", a: "Bateria" },
      { type: "mc", q: "Which word means 'Global network'?", options: ["Telefon", "Internet", "Hasło", "Bateria"], a: 1 },
    ],
  },
  home: {
    intro: "Learn common room and furniture words in Polish.",
    examples: [
      { target: "Kuchnia", meaning: "Room for cooking" },
      { target: "Sypialnia", meaning: "Room for sleeping" },
      { target: "Stół", meaning: "Furniture to eat/work on" },
      { target: "Krzesło", meaning: "Furniture for sitting" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Sypialnia' mean?", options: ["Room for cooking", "Room for sleeping", "Furniture to eat/work on", "Furniture for sitting"], a: 1 },
      { type: "fill", q: "How do you say 'Furniture for sitting' in Polish?", a: "Krzesło" },
      { type: "mc", q: "Which word means 'Room for cooking'?", options: ["Kuchnia", "Sypialnia", "Stół", "Krzesło"], a: 0 },
    ],
  },
  opinions: {
    intro: "Learn phrases for sharing your point of view in Polish.",
    examples: [
      { target: "Myślę, że", meaning: "Introducing an opinion" },
      { target: "Zgadzam się", meaning: "Sharing the same view" },
      { target: "Nie zgadzam się", meaning: "Having a different view" },
      { target: "Moim zdaniem", meaning: "Introducing a personal view" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Nie zgadzam się' mean?", options: ["Introducing an opinion", "Sharing the same view", "Having a different view", "Introducing a personal view"], a: 2 },
      { type: "fill", q: "How do you say 'Sharing the same view' in Polish?", a: "Zgadzam się" },
      { type: "mc", q: "Which phrase means 'Introducing an opinion'?", options: ["Myślę, że", "Zgadzam się", "Nie zgadzam się", "Moim zdaniem"], a: 0 },
    ],
  },
  past_tense: {
    intro: "Talk about things that already happened in Polish.",
    examples: [
      { target: "Wczoraj", meaning: "The day before today" },
      { target: "Poszedłem", meaning: "Past of 'I go'" },
      { target: "Zjadłem", meaning: "Past of 'I eat'" },
      { target: "W zeszłym tygodniu", meaning: "The week before this one" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Poszedłem' mean?", options: ["The day before today", "Past of 'I go'", "Past of 'I eat'", "The week before this one"], a: 1 },
      { type: "fill", q: "How do you say 'Past of I eat' in Polish?", a: "Zjadłem" },
      { type: "mc", q: "Which phrase means 'The day before today'?", options: ["Wczoraj", "Poszedłem", "Zjadłem", "W zeszłym tygodniu"], a: 0 },
    ],
  },
  future_plans: {
    intro: "Talk about plans and future events in Polish.",
    examples: [
      { target: "Jutro", meaning: "The day after today" },
      { target: "Pójdę", meaning: "Future of 'I go'" },
      { target: "W przyszłym roku", meaning: "The year after this one" },
      { target: "Planuję", meaning: "Expressing intent" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Pójdę' mean?", options: ["The day after today", "Future of 'I go'", "The year after this one", "Expressing intent"], a: 1 },
      { type: "fill", q: "How do you say 'Expressing intent' in Polish?", a: "Planuję" },
      { type: "mc", q: "Which phrase means 'The day after today'?", options: ["Jutro", "Pójdę", "W przyszłym roku", "Planuję"], a: 0 },
    ],
  },
  socializing: {
    intro: "Casual phrases for small talk with friends in Polish.",
    examples: [
      { target: "Jak się masz?", meaning: "Casual greeting" },
      { target: "Dawno się nie widzieliśmy", meaning: "Said after a while apart" },
      { target: "Spotkajmy się", meaning: "Suggesting to meet" },
      { target: "Miło cię widzieć", meaning: "Friendly greeting" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Dawno się nie widzieliśmy' mean?", options: ["Casual greeting", "Said after a while apart", "Suggesting to meet", "Friendly greeting"], a: 1 },
      { type: "fill", q: "How do you say 'Suggesting to meet' in Polish?", a: "Spotkajmy się" },
      { type: "mc", q: "Which phrase is a casual greeting?", options: ["Jak się masz?", "Dawno się nie widzieliśmy", "Spotkajmy się", "Miło cię widzieć"], a: 0 },
    ],
  },
  negotiating: {
    intro: "Bargain and negotiate prices politely in Polish.",
    examples: [
      { target: "Może pan obniżyć cenę?", meaning: "Asking for a discount" },
      { target: "To jest za drogie", meaning: "Complaining about price" },
      { target: "Ostateczna oferta", meaning: "Last price offered" },
      { target: "Zgoda", meaning: "Agreement reached" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Ostateczna oferta' mean?", options: ["Asking for a discount", "Complaining about price", "Last price offered", "Agreement reached"], a: 2 },
      { type: "fill", q: "How do you say 'Agreement reached' in Polish?", a: "Zgoda" },
      { type: "mc", q: "Which phrase means 'Asking for a discount'?", options: ["Może pan obniżyć cenę?", "To jest za drogie", "Ostateczna oferta", "Zgoda"], a: 0 },
    ],
  },
  news_media: {
    intro: "Vocabulary for reading and discussing the news in Polish.",
    examples: [
      { target: "Wiadomości", meaning: "Recent information" },
      { target: "Gazeta", meaning: "Printed news publication" },
      { target: "Według", meaning: "Citing a source" },
      { target: "Wiadomości z ostatniej chwili", meaning: "Urgent new report" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Wiadomości z ostatniej chwili' mean?", options: ["Recent information", "Printed news publication", "Citing a source", "Urgent new report"], a: 3 },
      { type: "fill", q: "How do you say 'Citing a source' in Polish?", a: "Według" },
      { type: "mc", q: "Which word means 'Printed news publication'?", options: ["Wiadomości", "Gazeta", "Według", "Wiadomości z ostatniej chwili"], a: 1 },
    ],
  },
  business: {
    intro: "Formal vocabulary for business settings in Polish.",
    examples: [
      { target: "Umowa", meaning: "A legal agreement" },
      { target: "Spotkanie", meaning: "A business gathering" },
      { target: "Termin", meaning: "Due date" },
      { target: "Faktura", meaning: "A bill for payment" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Faktura' mean?", options: ["A legal agreement", "A business gathering", "Due date", "A bill for payment"], a: 3 },
      { type: "fill", q: "How do you say 'A legal agreement' in Polish?", a: "Umowa" },
      { type: "mc", q: "Which word means 'Due date'?", options: ["Umowa", "Spotkanie", "Termin", "Faktura"], a: 2 },
    ],
  },
  idioms: {
    intro: "Learn common idiomatic expressions in Polish.",
    examples: [
      { target: "Przełamać lód", meaning: "Start a conversation easily" },
      { target: "Bułka z masłem", meaning: "Something very easy" },
      { target: "Czas płynie szybko", meaning: "Time passes quickly" },
      { target: "Od czasu do czasu", meaning: "Occasionally" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Bułka z masłem' mean?", options: ["Start a conversation easily", "Something very easy", "Time passes quickly", "Occasionally"], a: 1 },
      { type: "fill", q: "How do you say 'Occasionally' in Polish?", a: "Od czasu do czasu" },
      { type: "mc", q: "Which idiom means 'Time passes quickly'?", options: ["Przełamać lód", "Bułka z masłem", "Czas płynie szybko", "Od czasu do czasu"], a: 2 },
    ],
  },
  debate: {
    intro: "Phrases for debating and persuading others in Polish.",
    examples: [
      { target: "Głęboko wierzę", meaning: "Stating a firm opinion" },
      { target: "Z drugiej strony", meaning: "Presenting a contrast" },
      { target: "Dowody wskazują", meaning: "Citing proof" },
      { target: "Podsumowując", meaning: "Summarizing an argument" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Z drugiej strony' mean?", options: ["Stating a firm opinion", "Presenting a contrast", "Citing proof", "Summarizing an argument"], a: 1 },
      { type: "fill", q: "How do you say 'Summarizing an argument' in Polish?", a: "Podsumowując" },
      { type: "mc", q: "Which phrase means 'Citing proof'?", options: ["Głęboko wierzę", "Z drugiej strony", "Dowody wskazują", "Podsumowując"], a: 2 },
    ],
  },
  culture: {
    intro: "Vocabulary about traditions and heritage in Polish.",
    examples: [
      { target: "Tradycja", meaning: "A long-held custom" },
      { target: "Festiwal", meaning: "A celebration event" },
      { target: "Zwyczaj", meaning: "A usual practice" },
      { target: "Dziedzictwo", meaning: "Inherited culture" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Festiwal' mean?", options: ["A long-held custom", "A celebration event", "A usual practice", "Inherited culture"], a: 1 },
      { type: "fill", q: "How do you say 'Inherited culture' in Polish?", a: "Dziedzictwo" },
      { type: "mc", q: "Which word means 'A usual practice'?", options: ["Tradycja", "Festiwal", "Zwyczaj", "Dziedzictwo"], a: 2 },
    ],
  },
  formal_writing: {
    intro: "Phrases for writing formal letters and emails in Polish.",
    examples: [
      { target: "Szanowny Panie/Pani", meaning: "Formal letter opening" },
      { target: "Z poważaniem", meaning: "Formal letter closing" },
      { target: "Piszę, aby", meaning: "Stating the letter's purpose" },
      { target: "W załączeniu znajdą Państwo", meaning: "Referring to an attachment" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Z poważaniem' mean?", options: ["Formal letter opening", "Formal letter closing", "Stating the letter's purpose", "Referring to an attachment"], a: 1 },
      { type: "fill", q: "How do you say 'Formal letter opening' in Polish?", a: "Szanowny Panie/Pani" },
      { type: "mc", q: "Which phrase refers to an attachment?", options: ["Szanowny Panie/Pani", "Z poważaniem", "Piszę, aby", "W załączeniu znajdą Państwo"], a: 3 },
    ],
  },
  advanced_conversation: {
    intro: "Nuanced phrases for advanced, fluent conversation in Polish.",
    examples: [
      { target: "Niuans", meaning: "A subtle difference" },
      { target: "Innymi słowy", meaning: "Rephrasing something" },
      { target: "Mimo to", meaning: "Adding a contrasting point" },
      { target: "Rozwinąć", meaning: "Explaining in more detail" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Niuans' mean?", options: ["A subtle difference", "Rephrasing something", "Adding a contrasting point", "Explaining in more detail"], a: 0 },
      { type: "fill", q: "How do you say 'Explaining in more detail' in Polish?", a: "Rozwinąć" },
      { type: "mc", q: "Which phrase means 'Adding a contrasting point'?", options: ["Niuans", "Innymi słowy", "Mimo to", "Rozwinąć"], a: 2 },
    ],
  },
};

export default PL;
