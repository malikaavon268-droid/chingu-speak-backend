// Dutch lesson content — real vocabulary/phrases, fully offline.
import { LessonContent } from "../meta";

const NL: Record<string, LessonContent> = {
  greetings: {
    intro: "Learn the essential words for greeting people and saying goodbye in Dutch.",
    examples: [
      { target: "Hallo", meaning: "A friendly greeting" },
      { target: "Goedemorgen", meaning: "Greeting used before noon" },
      { target: "Dank je", meaning: "Expressing gratitude" },
      { target: "Tot ziens", meaning: "Said when leaving" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Hallo' mean?", options: ["A friendly greeting", "Said when leaving", "Expressing gratitude", "Greeting before noon"], a: 0 },
      { type: "fill", q: "How do you say 'Expressing gratitude' in Dutch?", a: "Dank je" },
      { type: "mc", q: "Which word means 'Said when leaving'?", options: ["Hallo", "Goedemorgen", "Tot ziens", "Dank je"], a: 2 },
    ],
  },
  numbers: {
    intro: "Practice counting from one to twenty in Dutch.",
    examples: [
      { target: "Een", meaning: "The number 1" },
      { target: "Vijf", meaning: "The number 5" },
      { target: "Tien", meaning: "The number 10" },
      { target: "Twintig", meaning: "The number 20" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Tien' mean?", options: ["The number 1", "The number 5", "The number 10", "The number 20"], a: 2 },
      { type: "fill", q: "How do you say 'The number 20' in Dutch?", a: "Twintig" },
      { type: "mc", q: "Which word means 'The number 1'?", options: ["Vijf", "Een", "Tien", "Twintig"], a: 1 },
    ],
  },
  family: {
    intro: "Learn words for close family members in Dutch.",
    examples: [
      { target: "Moeder", meaning: "Female parent" },
      { target: "Vader", meaning: "Male parent" },
      { target: "Zus", meaning: "Female sibling" },
      { target: "Broer", meaning: "Male sibling" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Moeder' mean?", options: ["Male parent", "Female parent", "Male sibling", "Female sibling"], a: 1 },
      { type: "fill", q: "How do you say 'Male sibling' in Dutch?", a: "Broer" },
      { type: "mc", q: "Which word means 'Female sibling'?", options: ["Moeder", "Vader", "Zus", "Broer"], a: 2 },
    ],
  },
  colors: {
    intro: "Learn the four most common colors in Dutch.",
    examples: [
      { target: "Rood", meaning: "The color of fire" },
      { target: "Blauw", meaning: "The color of the sky" },
      { target: "Groen", meaning: "The color of grass" },
      { target: "Geel", meaning: "The color of the sun" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Blauw' mean?", options: ["The color of fire", "The color of the sky", "The color of grass", "The color of the sun"], a: 1 },
      { type: "fill", q: "How do you say 'The color of grass' in Dutch?", a: "Groen" },
      { type: "mc", q: "Which word means 'The color of fire'?", options: ["Rood", "Blauw", "Groen", "Geel"], a: 0 },
    ],
  },
  days: {
    intro: "Learn a few days of the week in Dutch.",
    examples: [
      { target: "Maandag", meaning: "First workday" },
      { target: "Vrijdag", meaning: "Last workday" },
      { target: "Zaterdag", meaning: "First weekend day" },
      { target: "Zondag", meaning: "Second weekend day" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Vrijdag' mean?", options: ["First workday", "Last workday", "First weekend day", "Second weekend day"], a: 1 },
      { type: "fill", q: "How do you say 'Second weekend day' in Dutch?", a: "Zondag" },
      { type: "mc", q: "Which word means 'First workday'?", options: ["Maandag", "Vrijdag", "Zaterdag", "Zondag"], a: 0 },
    ],
  },
  food_basics: {
    intro: "Learn basic food and drink words in Dutch.",
    examples: [
      { target: "Water", meaning: "A clear drink" },
      { target: "Brood", meaning: "Baked food staple" },
      { target: "Rijst", meaning: "A grain staple food" },
      { target: "Koffie", meaning: "A hot caffeinated drink" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Rijst' mean?", options: ["A clear drink", "Baked food staple", "A grain staple food", "A hot caffeinated drink"], a: 2 },
      { type: "fill", q: "How do you say 'A hot caffeinated drink' in Dutch?", a: "Koffie" },
      { type: "mc", q: "Which word means 'A clear drink'?", options: ["Water", "Brood", "Rijst", "Koffie"], a: 0 },
    ],
  },
  shopping: {
    intro: "Useful phrases for shopping and paying in Dutch.",
    examples: [
      { target: "Hoeveel kost dit?", meaning: "Asking for a price" },
      { target: "Ik wil deze", meaning: "Choosing an item" },
      { target: "Korting", meaning: "A price reduction" },
      { target: "Contant geld", meaning: "Paper money" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Korting' mean?", options: ["Asking for a price", "Choosing an item", "A price reduction", "Paper money"], a: 2 },
      { type: "fill", q: "How do you say 'Paper money' in Dutch?", a: "Contant geld" },
      { type: "mc", q: "Which phrase means 'Asking for a price'?", options: ["Ik wil deze", "Hoeveel kost dit?", "Korting", "Contant geld"], a: 1 },
    ],
  },
  directions: {
    intro: "Learn to ask for and follow directions in Dutch.",
    examples: [
      { target: "Links", meaning: "Opposite of right" },
      { target: "Rechts", meaning: "Opposite of left" },
      { target: "Rechtdoor", meaning: "Go forward" },
      { target: "Waar is het toilet?", meaning: "Asking for a location" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Rechtdoor' mean?", options: ["Opposite of right", "Opposite of left", "Go forward", "Asking for a location"], a: 2 },
      { type: "fill", q: "How do you say 'Opposite of right' in Dutch?", a: "Links" },
      { type: "mc", q: "Which phrase means 'Asking for a location'?", options: ["Links", "Rechts", "Rechtdoor", "Waar is het toilet?"], a: 3 },
    ],
  },
  time: {
    intro: "Learn to talk about time of day in Dutch.",
    examples: [
      { target: "Hoe laat is het?", meaning: "Asking the current time" },
      { target: "Ochtend", meaning: "Early part of the day" },
      { target: "Middag", meaning: "Midday part of the day" },
      { target: "Middernacht", meaning: "12 AM" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Middernacht' mean?", options: ["Asking the current time", "Early part of the day", "Midday part of the day", "12 AM"], a: 3 },
      { type: "fill", q: "How do you say 'Early part of the day' in Dutch?", a: "Ochtend" },
      { type: "mc", q: "Which phrase means 'Asking the current time'?", options: ["Hoe laat is het?", "Ochtend", "Middag", "Middernacht"], a: 0 },
    ],
  },
  weather: {
    intro: "Describe common weather conditions in Dutch.",
    examples: [
      { target: "Het regent", meaning: "Rain is falling" },
      { target: "Zonnig", meaning: "Bright with sunshine" },
      { target: "Koud", meaning: "Low temperature" },
      { target: "Warm", meaning: "High temperature" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Zonnig' mean?", options: ["Rain is falling", "Bright with sunshine", "Low temperature", "High temperature"], a: 1 },
      { type: "fill", q: "How do you say 'High temperature' in Dutch?", a: "Warm" },
      { type: "mc", q: "Which phrase means 'Rain is falling'?", options: ["Het regent", "Zonnig", "Koud", "Warm"], a: 0 },
    ],
  },
  hobbies: {
    intro: "Talk about free-time activities in Dutch.",
    examples: [
      { target: "Lezen", meaning: "Enjoying books" },
      { target: "Muziek", meaning: "Listening to songs" },
      { target: "Sport", meaning: "Physical games" },
      { target: "Koken", meaning: "Preparing food" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Koken' mean?", options: ["Enjoying books", "Listening to songs", "Physical games", "Preparing food"], a: 3 },
      { type: "fill", q: "How do you say 'Enjoying books' in Dutch?", a: "Lezen" },
      { type: "mc", q: "Which word means 'Physical games'?", options: ["Lezen", "Muziek", "Sport", "Koken"], a: 2 },
    ],
  },
  body_health: {
    intro: "Learn body parts and how to describe feeling unwell in Dutch.",
    examples: [
      { target: "Hoofd", meaning: "Top part of the body" },
      { target: "Maag", meaning: "Belly area" },
      { target: "Ik voel me ziek", meaning: "Not feeling well" },
      { target: "Dokter", meaning: "Medical professional" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Maag' mean?", options: ["Top part of the body", "Belly area", "Not feeling well", "Medical professional"], a: 1 },
      { type: "fill", q: "How do you say 'Medical professional' in Dutch?", a: "Dokter" },
      { type: "mc", q: "Which phrase means 'Not feeling well'?", options: ["Hoofd", "Maag", "Ik voel me ziek", "Dokter"], a: 2 },
    ],
  },
  restaurant: {
    intro: "Order food and ask for the bill in Dutch.",
    examples: [
      { target: "Menu", meaning: "List of dishes" },
      { target: "Ik neem dit", meaning: "Ordering a dish" },
      { target: "De rekening, graag", meaning: "Asking to pay" },
      { target: "Lekker", meaning: "Tastes great" },
    ],
    quiz: [
      { type: "mc", q: "What does 'De rekening, graag' mean?", options: ["List of dishes", "Ordering a dish", "Asking to pay", "Tastes great"], a: 2 },
      { type: "fill", q: "How do you say 'Tastes great' in Dutch?", a: "Lekker" },
      { type: "mc", q: "Which phrase means 'List of dishes'?", options: ["Menu", "Ik neem dit", "De rekening, graag", "Lekker"], a: 0 },
    ],
  },
  travel: {
    intro: "Key words for airports and train stations in Dutch.",
    examples: [
      { target: "Luchthaven", meaning: "Place planes depart from" },
      { target: "Ticket", meaning: "Pass to travel" },
      { target: "Paspoort", meaning: "Travel ID document" },
      { target: "Treinstation", meaning: "Place trains depart from" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Paspoort' mean?", options: ["Place planes depart from", "Pass to travel", "Travel ID document", "Place trains depart from"], a: 2 },
      { type: "fill", q: "How do you say 'Pass to travel' in Dutch?", a: "Ticket" },
      { type: "mc", q: "Which word means 'Place trains depart from'?", options: ["Luchthaven", "Ticket", "Paspoort", "Treinstation"], a: 3 },
    ],
  },
  work: {
    intro: "Talk about your job and workplace in Dutch.",
    examples: [
      { target: "Vergadering", meaning: "A work gathering" },
      { target: "Deadline", meaning: "Due date" },
      { target: "Collega", meaning: "Co-worker" },
      { target: "Kantoor", meaning: "Workplace" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Deadline' mean?", options: ["A work gathering", "Due date", "Co-worker", "Workplace"], a: 1 },
      { type: "fill", q: "How do you say 'Co-worker' in Dutch?", a: "Collega" },
      { type: "mc", q: "Which word means 'A work gathering'?", options: ["Vergadering", "Deadline", "Collega", "Kantoor"], a: 0 },
    ],
  },
  emotions: {
    intro: "Describe how you feel in Dutch.",
    examples: [
      { target: "Blij", meaning: "Feeling joy" },
      { target: "Verdrietig", meaning: "Feeling down" },
      { target: "Moe", meaning: "Needing rest" },
      { target: "Opgewonden", meaning: "Feeling enthusiastic" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Moe' mean?", options: ["Feeling joy", "Feeling down", "Needing rest", "Feeling enthusiastic"], a: 2 },
      { type: "fill", q: "How do you say 'Feeling enthusiastic' in Dutch?", a: "Opgewonden" },
      { type: "mc", q: "Which word means 'Feeling joy'?", options: ["Blij", "Verdrietig", "Moe", "Opgewonden"], a: 0 },
    ],
  },
  technology: {
    intro: "Learn common phone and internet vocabulary in Dutch.",
    examples: [
      { target: "Telefoon", meaning: "Device for calls" },
      { target: "Internet", meaning: "Global network" },
      { target: "Wachtwoord", meaning: "Secret access code" },
      { target: "Batterij", meaning: "Stores power" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Wachtwoord' mean?", options: ["Device for calls", "Global network", "Secret access code", "Stores power"], a: 2 },
      { type: "fill", q: "How do you say 'Stores power' in Dutch?", a: "Batterij" },
      { type: "mc", q: "Which word means 'Global network'?", options: ["Telefoon", "Internet", "Wachtwoord", "Batterij"], a: 1 },
    ],
  },
  home: {
    intro: "Learn common room and furniture words in Dutch.",
    examples: [
      { target: "Keuken", meaning: "Room for cooking" },
      { target: "Slaapkamer", meaning: "Room for sleeping" },
      { target: "Tafel", meaning: "Furniture to eat/work on" },
      { target: "Stoel", meaning: "Furniture for sitting" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Slaapkamer' mean?", options: ["Room for cooking", "Room for sleeping", "Furniture to eat/work on", "Furniture for sitting"], a: 1 },
      { type: "fill", q: "How do you say 'Furniture for sitting' in Dutch?", a: "Stoel" },
      { type: "mc", q: "Which word means 'Room for cooking'?", options: ["Keuken", "Slaapkamer", "Tafel", "Stoel"], a: 0 },
    ],
  },
  opinions: {
    intro: "Learn phrases for sharing your point of view in Dutch.",
    examples: [
      { target: "Ik denk dat", meaning: "Introducing an opinion" },
      { target: "Ik ben het ermee eens", meaning: "Sharing the same view" },
      { target: "Ik ben het er niet mee eens", meaning: "Having a different view" },
      { target: "Naar mijn mening", meaning: "Introducing a personal view" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Ik ben het er niet mee eens' mean?", options: ["Introducing an opinion", "Sharing the same view", "Having a different view", "Introducing a personal view"], a: 2 },
      { type: "fill", q: "How do you say 'Sharing the same view' in Dutch?", a: "Ik ben het ermee eens" },
      { type: "mc", q: "Which phrase means 'Introducing an opinion'?", options: ["Ik denk dat", "Ik ben het ermee eens", "Ik ben het er niet mee eens", "Naar mijn mening"], a: 0 },
    ],
  },
  past_tense: {
    intro: "Talk about things that already happened in Dutch.",
    examples: [
      { target: "Gisteren", meaning: "The day before today" },
      { target: "Ik ging", meaning: "Past of 'I go'" },
      { target: "Ik heb gegeten", meaning: "Past of 'I eat'" },
      { target: "Vorige week", meaning: "The week before this one" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Ik ging' mean?", options: ["The day before today", "Past of 'I go'", "Past of 'I eat'", "The week before this one"], a: 1 },
      { type: "fill", q: "How do you say 'Past of I eat' in Dutch?", a: "Ik heb gegeten" },
      { type: "mc", q: "Which phrase means 'The day before today'?", options: ["Gisteren", "Ik ging", "Ik heb gegeten", "Vorige week"], a: 0 },
    ],
  },
  future_plans: {
    intro: "Talk about plans and future events in Dutch.",
    examples: [
      { target: "Morgen", meaning: "The day after today" },
      { target: "Ik zal gaan", meaning: "Future of 'I go'" },
      { target: "Volgend jaar", meaning: "The year after this one" },
      { target: "Ik ben van plan", meaning: "Expressing intent" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Ik zal gaan' mean?", options: ["The day after today", "Future of 'I go'", "The year after this one", "Expressing intent"], a: 1 },
      { type: "fill", q: "How do you say 'Expressing intent' in Dutch?", a: "Ik ben van plan" },
      { type: "mc", q: "Which phrase means 'The day after today'?", options: ["Morgen", "Ik zal gaan", "Volgend jaar", "Ik ben van plan"], a: 0 },
    ],
  },
  socializing: {
    intro: "Casual phrases for small talk with friends in Dutch.",
    examples: [
      { target: "Hoe gaat het?", meaning: "Casual greeting" },
      { target: "Lang niet gezien", meaning: "Said after a while apart" },
      { target: "Laten we afspreken", meaning: "Suggesting to meet" },
      { target: "Leuk je te zien", meaning: "Friendly greeting" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Lang niet gezien' mean?", options: ["Casual greeting", "Said after a while apart", "Suggesting to meet", "Friendly greeting"], a: 1 },
      { type: "fill", q: "How do you say 'Suggesting to meet' in Dutch?", a: "Laten we afspreken" },
      { type: "mc", q: "Which phrase is a casual greeting?", options: ["Hoe gaat het?", "Lang niet gezien", "Laten we afspreken", "Leuk je te zien"], a: 0 },
    ],
  },
  negotiating: {
    intro: "Bargain and negotiate prices politely in Dutch.",
    examples: [
      { target: "Kunt u de prijs verlagen?", meaning: "Asking for a discount" },
      { target: "Dat is te duur", meaning: "Complaining about price" },
      { target: "Laatste aanbod", meaning: "Last price offered" },
      { target: "Deal", meaning: "Agreement reached" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Laatste aanbod' mean?", options: ["Asking for a discount", "Complaining about price", "Last price offered", "Agreement reached"], a: 2 },
      { type: "fill", q: "How do you say 'Agreement reached' in Dutch?", a: "Deal" },
      { type: "mc", q: "Which phrase means 'Asking for a discount'?", options: ["Kunt u de prijs verlagen?", "Dat is te duur", "Laatste aanbod", "Deal"], a: 0 },
    ],
  },
  news_media: {
    intro: "Vocabulary for reading and discussing the news in Dutch.",
    examples: [
      { target: "Nieuws", meaning: "Recent information" },
      { target: "Krant", meaning: "Printed news publication" },
      { target: "Volgens", meaning: "Citing a source" },
      { target: "Laatste nieuws", meaning: "Urgent new report" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Laatste nieuws' mean?", options: ["Recent information", "Printed news publication", "Citing a source", "Urgent new report"], a: 3 },
      { type: "fill", q: "How do you say 'Citing a source' in Dutch?", a: "Volgens" },
      { type: "mc", q: "Which word means 'Printed news publication'?", options: ["Nieuws", "Krant", "Volgens", "Laatste nieuws"], a: 1 },
    ],
  },
  business: {
    intro: "Formal vocabulary for business settings in Dutch.",
    examples: [
      { target: "Contract", meaning: "A legal agreement" },
      { target: "Vergadering", meaning: "A business gathering" },
      { target: "Deadline", meaning: "Due date" },
      { target: "Factuur", meaning: "A bill for payment" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Factuur' mean?", options: ["A legal agreement", "A business gathering", "Due date", "A bill for payment"], a: 3 },
      { type: "fill", q: "How do you say 'A legal agreement' in Dutch?", a: "Contract" },
      { type: "mc", q: "Which word means 'Due date'?", options: ["Contract", "Vergadering", "Deadline", "Factuur"], a: 2 },
    ],
  },
  idioms: {
    intro: "Learn common idiomatic expressions in Dutch.",
    examples: [
      { target: "Het ijs breken", meaning: "Start a conversation easily" },
      { target: "Een fluitje van een cent", meaning: "Something very easy" },
      { target: "De tijd vliegt", meaning: "Time passes quickly" },
      { target: "Af en toe", meaning: "Occasionally" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Een fluitje van een cent' mean?", options: ["Start a conversation easily", "Something very easy", "Time passes quickly", "Occasionally"], a: 1 },
      { type: "fill", q: "How do you say 'Occasionally' in Dutch?", a: "Af en toe" },
      { type: "mc", q: "Which idiom means 'Time passes quickly'?", options: ["Het ijs breken", "Een fluitje van een cent", "De tijd vliegt", "Af en toe"], a: 2 },
    ],
  },
  debate: {
    intro: "Phrases for debating and persuading others in Dutch.",
    examples: [
      { target: "Ik geloof sterk", meaning: "Stating a firm opinion" },
      { target: "Aan de andere kant", meaning: "Presenting a contrast" },
      { target: "Bewijs toont", meaning: "Citing proof" },
      { target: "Concluderend", meaning: "Summarizing an argument" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Aan de andere kant' mean?", options: ["Stating a firm opinion", "Presenting a contrast", "Citing proof", "Summarizing an argument"], a: 1 },
      { type: "fill", q: "How do you say 'Summarizing an argument' in Dutch?", a: "Concluderend" },
      { type: "mc", q: "Which phrase means 'Citing proof'?", options: ["Ik geloof sterk", "Aan de andere kant", "Bewijs toont", "Concluderend"], a: 2 },
    ],
  },
  culture: {
    intro: "Vocabulary about traditions and heritage in Dutch.",
    examples: [
      { target: "Traditie", meaning: "A long-held custom" },
      { target: "Festival", meaning: "A celebration event" },
      { target: "Gewoonte", meaning: "A usual practice" },
      { target: "Erfgoed", meaning: "Inherited culture" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Festival' mean?", options: ["A long-held custom", "A celebration event", "A usual practice", "Inherited culture"], a: 1 },
      { type: "fill", q: "How do you say 'Inherited culture' in Dutch?", a: "Erfgoed" },
      { type: "mc", q: "Which word means 'A usual practice'?", options: ["Traditie", "Festival", "Gewoonte", "Erfgoed"], a: 2 },
    ],
  },
  formal_writing: {
    intro: "Phrases for writing formal letters and emails in Dutch.",
    examples: [
      { target: "Geachte heer/mevrouw", meaning: "Formal letter opening" },
      { target: "Met vriendelijke groet", meaning: "Formal letter closing" },
      { target: "Ik schrijf u om", meaning: "Stating the letter's purpose" },
      { target: "Bijgevoegd vindt u", meaning: "Referring to an attachment" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Met vriendelijke groet' mean?", options: ["Formal letter opening", "Formal letter closing", "Stating the letter's purpose", "Referring to an attachment"], a: 1 },
      { type: "fill", q: "How do you say 'Formal letter opening' in Dutch?", a: "Geachte heer/mevrouw" },
      { type: "mc", q: "Which phrase refers to an attachment?", options: ["Geachte heer/mevrouw", "Met vriendelijke groet", "Ik schrijf u om", "Bijgevoegd vindt u"], a: 3 },
    ],
  },
  advanced_conversation: {
    intro: "Nuanced phrases for advanced, fluent conversation in Dutch.",
    examples: [
      { target: "Nuance", meaning: "A subtle difference" },
      { target: "Met andere woorden", meaning: "Rephrasing something" },
      { target: "Dat gezegd hebbende", meaning: "Adding a contrasting point" },
      { target: "Uitweiden", meaning: "Explaining in more detail" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Nuance' mean?", options: ["A subtle difference", "Rephrasing something", "Adding a contrasting point", "Explaining in more detail"], a: 0 },
      { type: "fill", q: "How do you say 'Explaining in more detail' in Dutch?", a: "Uitweiden" },
      { type: "mc", q: "Which phrase means 'Adding a contrasting point'?", options: ["Nuance", "Met andere woorden", "Dat gezegd hebbende", "Uitweiden"], a: 2 },
    ],
  },
};

export default NL;
