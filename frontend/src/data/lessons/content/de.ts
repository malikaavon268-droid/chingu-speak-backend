// German lesson content — real vocabulary/phrases, fully offline.
import { LessonContent } from "../meta";

const DE: Record<string, LessonContent> = {
  greetings: {
    intro: "Learn the essential words for greeting people and saying goodbye in German.",
    examples: [
      { target: "Hallo", meaning: "A friendly greeting" },
      { target: "Guten Morgen", meaning: "Greeting used before noon" },
      { target: "Danke", meaning: "Expressing gratitude" },
      { target: "Auf Wiedersehen", meaning: "Said when leaving" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Hallo' mean?", options: ["A friendly greeting", "Said when leaving", "Expressing gratitude", "Greeting before noon"], a: 0 },
      { type: "fill", q: "How do you say 'Expressing gratitude' in German?", a: "Danke" },
      { type: "mc", q: "Which word means 'Said when leaving'?", options: ["Hallo", "Guten Morgen", "Auf Wiedersehen", "Danke"], a: 2 },
    ],
  },
  numbers: {
    intro: "Practice counting from one to twenty in German.",
    examples: [
      { target: "Eins", meaning: "The number 1" },
      { target: "Fünf", meaning: "The number 5" },
      { target: "Zehn", meaning: "The number 10" },
      { target: "Zwanzig", meaning: "The number 20" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Zehn' mean?", options: ["The number 1", "The number 5", "The number 10", "The number 20"], a: 2 },
      { type: "fill", q: "How do you say 'The number 20' in German?", a: "Zwanzig" },
      { type: "mc", q: "Which word means 'The number 1'?", options: ["Fünf", "Eins", "Zehn", "Zwanzig"], a: 1 },
    ],
  },
  family: {
    intro: "Learn words for close family members in German.",
    examples: [
      { target: "Mutter", meaning: "Female parent" },
      { target: "Vater", meaning: "Male parent" },
      { target: "Schwester", meaning: "Female sibling" },
      { target: "Bruder", meaning: "Male sibling" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Mutter' mean?", options: ["Male parent", "Female parent", "Male sibling", "Female sibling"], a: 1 },
      { type: "fill", q: "How do you say 'Male sibling' in German?", a: "Bruder" },
      { type: "mc", q: "Which word means 'Female sibling'?", options: ["Mutter", "Vater", "Schwester", "Bruder"], a: 2 },
    ],
  },
  colors: {
    intro: "Learn the four most common colors in German.",
    examples: [
      { target: "Rot", meaning: "The color of fire" },
      { target: "Blau", meaning: "The color of the sky" },
      { target: "Grün", meaning: "The color of grass" },
      { target: "Gelb", meaning: "The color of the sun" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Blau' mean?", options: ["The color of fire", "The color of the sky", "The color of grass", "The color of the sun"], a: 1 },
      { type: "fill", q: "How do you say 'The color of grass' in German?", a: "Grün" },
      { type: "mc", q: "Which word means 'The color of fire'?", options: ["Rot", "Blau", "Grün", "Gelb"], a: 0 },
    ],
  },
  days: {
    intro: "Learn a few days of the week in German.",
    examples: [
      { target: "Montag", meaning: "First workday" },
      { target: "Freitag", meaning: "Last workday" },
      { target: "Samstag", meaning: "First weekend day" },
      { target: "Sonntag", meaning: "Second weekend day" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Freitag' mean?", options: ["First workday", "Last workday", "First weekend day", "Second weekend day"], a: 1 },
      { type: "fill", q: "How do you say 'Second weekend day' in German?", a: "Sonntag" },
      { type: "mc", q: "Which word means 'First workday'?", options: ["Montag", "Freitag", "Samstag", "Sonntag"], a: 0 },
    ],
  },
  food_basics: {
    intro: "Learn basic food and drink words in German.",
    examples: [
      { target: "Wasser", meaning: "A clear drink" },
      { target: "Brot", meaning: "Baked food staple" },
      { target: "Reis", meaning: "A grain staple food" },
      { target: "Kaffee", meaning: "A hot caffeinated drink" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Reis' mean?", options: ["A clear drink", "Baked food staple", "A grain staple food", "A hot caffeinated drink"], a: 2 },
      { type: "fill", q: "How do you say 'A hot caffeinated drink' in German?", a: "Kaffee" },
      { type: "mc", q: "Which word means 'A clear drink'?", options: ["Wasser", "Brot", "Reis", "Kaffee"], a: 0 },
    ],
  },
  shopping: {
    intro: "Useful phrases for shopping and paying in German.",
    examples: [
      { target: "Wie viel kostet das?", meaning: "Asking for a price" },
      { target: "Ich möchte dieses", meaning: "Choosing an item" },
      { target: "Rabatt", meaning: "A price reduction" },
      { target: "Bargeld", meaning: "Paper money" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Rabatt' mean?", options: ["Asking for a price", "Choosing an item", "A price reduction", "Paper money"], a: 2 },
      { type: "fill", q: "How do you say 'Paper money' in German?", a: "Bargeld" },
      { type: "mc", q: "Which phrase means 'Asking for a price'?", options: ["Ich möchte dieses", "Wie viel kostet das?", "Rabatt", "Bargeld"], a: 1 },
    ],
  },
  directions: {
    intro: "Learn to ask for and follow directions in German.",
    examples: [
      { target: "Links", meaning: "Opposite of right" },
      { target: "Rechts", meaning: "Opposite of left" },
      { target: "Geradeaus", meaning: "Go forward" },
      { target: "Wo ist die Toilette?", meaning: "Asking for a location" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Geradeaus' mean?", options: ["Opposite of right", "Opposite of left", "Go forward", "Asking for a location"], a: 2 },
      { type: "fill", q: "How do you say 'Opposite of right' in German?", a: "Links" },
      { type: "mc", q: "Which phrase means 'Asking for a location'?", options: ["Links", "Rechts", "Geradeaus", "Wo ist die Toilette?"], a: 3 },
    ],
  },
  time: {
    intro: "Learn to talk about time of day in German.",
    examples: [
      { target: "Wie viel Uhr ist es?", meaning: "Asking the current time" },
      { target: "Vormittag", meaning: "Early part of the day" },
      { target: "Nachmittag", meaning: "Midday part of the day" },
      { target: "Mitternacht", meaning: "12 AM" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Mitternacht' mean?", options: ["Asking the current time", "Early part of the day", "Midday part of the day", "12 AM"], a: 3 },
      { type: "fill", q: "How do you say 'Early part of the day' in German?", a: "Vormittag" },
      { type: "mc", q: "Which phrase means 'Asking the current time'?", options: ["Wie viel Uhr ist es?", "Vormittag", "Nachmittag", "Mitternacht"], a: 0 },
    ],
  },
  weather: {
    intro: "Describe common weather conditions in German.",
    examples: [
      { target: "Es regnet", meaning: "Rain is falling" },
      { target: "Sonnig", meaning: "Bright with sunshine" },
      { target: "Kalt", meaning: "Low temperature" },
      { target: "Heiß", meaning: "High temperature" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Sonnig' mean?", options: ["Rain is falling", "Bright with sunshine", "Low temperature", "High temperature"], a: 1 },
      { type: "fill", q: "How do you say 'High temperature' in German?", a: "Heiß" },
      { type: "mc", q: "Which phrase means 'Rain is falling'?", options: ["Es regnet", "Sonnig", "Kalt", "Heiß"], a: 0 },
    ],
  },
  hobbies: {
    intro: "Talk about free-time activities in German.",
    examples: [
      { target: "Lesen", meaning: "Enjoying books" },
      { target: "Musik", meaning: "Listening to songs" },
      { target: "Sport", meaning: "Physical games" },
      { target: "Kochen", meaning: "Preparing food" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Kochen' mean?", options: ["Enjoying books", "Listening to songs", "Physical games", "Preparing food"], a: 3 },
      { type: "fill", q: "How do you say 'Enjoying books' in German?", a: "Lesen" },
      { type: "mc", q: "Which word means 'Physical games'?", options: ["Lesen", "Musik", "Sport", "Kochen"], a: 2 },
    ],
  },
  body_health: {
    intro: "Learn body parts and how to describe feeling unwell in German.",
    examples: [
      { target: "Kopf", meaning: "Top part of the body" },
      { target: "Bauch", meaning: "Belly area" },
      { target: "Mir ist schlecht", meaning: "Not feeling well" },
      { target: "Arzt", meaning: "Medical professional" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Bauch' mean?", options: ["Top part of the body", "Belly area", "Not feeling well", "Medical professional"], a: 1 },
      { type: "fill", q: "How do you say 'Medical professional' in German?", a: "Arzt" },
      { type: "mc", q: "Which phrase means 'Not feeling well'?", options: ["Kopf", "Bauch", "Mir ist schlecht", "Arzt"], a: 2 },
    ],
  },
  restaurant: {
    intro: "Order food and ask for the bill in German.",
    examples: [
      { target: "Speisekarte", meaning: "List of dishes" },
      { target: "Ich nehme das", meaning: "Ordering a dish" },
      { target: "Die Rechnung, bitte", meaning: "Asking to pay" },
      { target: "Lecker", meaning: "Tastes great" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Die Rechnung, bitte' mean?", options: ["List of dishes", "Ordering a dish", "Asking to pay", "Tastes great"], a: 2 },
      { type: "fill", q: "How do you say 'Tastes great' in German?", a: "Lecker" },
      { type: "mc", q: "Which phrase means 'List of dishes'?", options: ["Speisekarte", "Ich nehme das", "Die Rechnung, bitte", "Lecker"], a: 0 },
    ],
  },
  travel: {
    intro: "Key words for airports and train stations in German.",
    examples: [
      { target: "Flughafen", meaning: "Place planes depart from" },
      { target: "Ticket", meaning: "Pass to travel" },
      { target: "Reisepass", meaning: "Travel ID document" },
      { target: "Bahnhof", meaning: "Place trains depart from" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Reisepass' mean?", options: ["Place planes depart from", "Pass to travel", "Travel ID document", "Place trains depart from"], a: 2 },
      { type: "fill", q: "How do you say 'Pass to travel' in German?", a: "Ticket" },
      { type: "mc", q: "Which word means 'Place trains depart from'?", options: ["Flughafen", "Ticket", "Reisepass", "Bahnhof"], a: 3 },
    ],
  },
  work: {
    intro: "Talk about your job and workplace in German.",
    examples: [
      { target: "Besprechung", meaning: "A work gathering" },
      { target: "Frist", meaning: "Due date" },
      { target: "Kollege", meaning: "Co-worker" },
      { target: "Büro", meaning: "Workplace" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Frist' mean?", options: ["A work gathering", "Due date", "Co-worker", "Workplace"], a: 1 },
      { type: "fill", q: "How do you say 'Co-worker' in German?", a: "Kollege" },
      { type: "mc", q: "Which word means 'A work gathering'?", options: ["Besprechung", "Frist", "Kollege", "Büro"], a: 0 },
    ],
  },
  emotions: {
    intro: "Describe how you feel in German.",
    examples: [
      { target: "Glücklich", meaning: "Feeling joy" },
      { target: "Traurig", meaning: "Feeling down" },
      { target: "Müde", meaning: "Needing rest" },
      { target: "Aufgeregt", meaning: "Feeling enthusiastic" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Müde' mean?", options: ["Feeling joy", "Feeling down", "Needing rest", "Feeling enthusiastic"], a: 2 },
      { type: "fill", q: "How do you say 'Feeling enthusiastic' in German?", a: "Aufgeregt" },
      { type: "mc", q: "Which word means 'Feeling joy'?", options: ["Glücklich", "Traurig", "Müde", "Aufgeregt"], a: 0 },
    ],
  },
  technology: {
    intro: "Learn common phone and internet vocabulary in German.",
    examples: [
      { target: "Telefon", meaning: "Device for calls" },
      { target: "Internet", meaning: "Global network" },
      { target: "Passwort", meaning: "Secret access code" },
      { target: "Akku", meaning: "Stores power" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Passwort' mean?", options: ["Device for calls", "Global network", "Secret access code", "Stores power"], a: 2 },
      { type: "fill", q: "How do you say 'Stores power' in German?", a: "Akku" },
      { type: "mc", q: "Which word means 'Global network'?", options: ["Telefon", "Internet", "Passwort", "Akku"], a: 1 },
    ],
  },
  home: {
    intro: "Learn common room and furniture words in German.",
    examples: [
      { target: "Küche", meaning: "Room for cooking" },
      { target: "Schlafzimmer", meaning: "Room for sleeping" },
      { target: "Tisch", meaning: "Furniture to eat/work on" },
      { target: "Stuhl", meaning: "Furniture for sitting" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Schlafzimmer' mean?", options: ["Room for cooking", "Room for sleeping", "Furniture to eat/work on", "Furniture for sitting"], a: 1 },
      { type: "fill", q: "How do you say 'Furniture for sitting' in German?", a: "Stuhl" },
      { type: "mc", q: "Which word means 'Room for cooking'?", options: ["Küche", "Schlafzimmer", "Tisch", "Stuhl"], a: 0 },
    ],
  },
  opinions: {
    intro: "Learn phrases for sharing your point of view in German.",
    examples: [
      { target: "Ich denke", meaning: "Introducing an opinion" },
      { target: "Ich stimme zu", meaning: "Sharing the same view" },
      { target: "Ich stimme nicht zu", meaning: "Having a different view" },
      { target: "Meiner Meinung nach", meaning: "Introducing a personal view" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Ich stimme nicht zu' mean?", options: ["Introducing an opinion", "Sharing the same view", "Having a different view", "Introducing a personal view"], a: 2 },
      { type: "fill", q: "How do you say 'Sharing the same view' in German?", a: "Ich stimme zu" },
      { type: "mc", q: "Which phrase means 'Introducing an opinion'?", options: ["Ich denke", "Ich stimme zu", "Ich stimme nicht zu", "Meiner Meinung nach"], a: 0 },
    ],
  },
  past_tense: {
    intro: "Talk about things that already happened in German.",
    examples: [
      { target: "Gestern", meaning: "The day before today" },
      { target: "Ich ging", meaning: "Past of 'I go'" },
      { target: "Ich habe gegessen", meaning: "Past of 'I eat'" },
      { target: "Letzte Woche", meaning: "The week before this one" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Ich ging' mean?", options: ["The day before today", "Past of 'I go'", "Past of 'I eat'", "The week before this one"], a: 1 },
      { type: "fill", q: "How do you say 'Past of I eat' in German?", a: "Ich habe gegessen" },
      { type: "mc", q: "Which phrase means 'The day before today'?", options: ["Gestern", "Ich ging", "Ich habe gegessen", "Letzte Woche"], a: 0 },
    ],
  },
  future_plans: {
    intro: "Talk about plans and future events in German.",
    examples: [
      { target: "Morgen", meaning: "The day after today" },
      { target: "Ich werde gehen", meaning: "Future of 'I go'" },
      { target: "Nächstes Jahr", meaning: "The year after this one" },
      { target: "Ich plane", meaning: "Expressing intent" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Ich werde gehen' mean?", options: ["The day after today", "Future of 'I go'", "The year after this one", "Expressing intent"], a: 1 },
      { type: "fill", q: "How do you say 'Expressing intent' in German?", a: "Ich plane" },
      { type: "mc", q: "Which phrase means 'The day after today'?", options: ["Morgen", "Ich werde gehen", "Nächstes Jahr", "Ich plane"], a: 0 },
    ],
  },
  socializing: {
    intro: "Casual phrases for small talk with friends in German.",
    examples: [
      { target: "Wie geht's?", meaning: "Casual greeting" },
      { target: "Lange nicht gesehen", meaning: "Said after a while apart" },
      { target: "Lass uns treffen", meaning: "Suggesting to meet" },
      { target: "Schön dich zu sehen", meaning: "Friendly greeting" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Lange nicht gesehen' mean?", options: ["Casual greeting", "Said after a while apart", "Suggesting to meet", "Friendly greeting"], a: 1 },
      { type: "fill", q: "How do you say 'Suggesting to meet' in German?", a: "Lass uns treffen" },
      { type: "mc", q: "Which phrase is a casual greeting?", options: ["Wie geht's?", "Lange nicht gesehen", "Lass uns treffen", "Schön dich zu sehen"], a: 0 },
    ],
  },
  negotiating: {
    intro: "Bargain and negotiate prices politely in German.",
    examples: [
      { target: "Können Sie den Preis senken?", meaning: "Asking for a discount" },
      { target: "Das ist zu teuer", meaning: "Complaining about price" },
      { target: "Letztes Angebot", meaning: "Last price offered" },
      { target: "Abgemacht", meaning: "Agreement reached" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Letztes Angebot' mean?", options: ["Asking for a discount", "Complaining about price", "Last price offered", "Agreement reached"], a: 2 },
      { type: "fill", q: "How do you say 'Agreement reached' in German?", a: "Abgemacht" },
      { type: "mc", q: "Which phrase means 'Asking for a discount'?", options: ["Können Sie den Preis senken?", "Das ist zu teuer", "Letztes Angebot", "Abgemacht"], a: 0 },
    ],
  },
  news_media: {
    intro: "Vocabulary for reading and discussing the news in German.",
    examples: [
      { target: "Nachrichten", meaning: "Recent information" },
      { target: "Zeitung", meaning: "Printed news publication" },
      { target: "Laut", meaning: "Citing a source" },
      { target: "Eilmeldung", meaning: "Urgent new report" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Eilmeldung' mean?", options: ["Recent information", "Printed news publication", "Citing a source", "Urgent new report"], a: 3 },
      { type: "fill", q: "How do you say 'Citing a source' in German?", a: "Laut" },
      { type: "mc", q: "Which word means 'Printed news publication'?", options: ["Nachrichten", "Zeitung", "Laut", "Eilmeldung"], a: 1 },
    ],
  },
  business: {
    intro: "Formal vocabulary for business settings in German.",
    examples: [
      { target: "Vertrag", meaning: "A legal agreement" },
      { target: "Besprechung", meaning: "A business gathering" },
      { target: "Frist", meaning: "Due date" },
      { target: "Rechnung", meaning: "A bill for payment" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Rechnung' mean?", options: ["A legal agreement", "A business gathering", "Due date", "A bill for payment"], a: 3 },
      { type: "fill", q: "How do you say 'A legal agreement' in German?", a: "Vertrag" },
      { type: "mc", q: "Which word means 'Due date'?", options: ["Vertrag", "Besprechung", "Frist", "Rechnung"], a: 2 },
    ],
  },
  idioms: {
    intro: "Learn common idiomatic expressions in German.",
    examples: [
      { target: "Das Eis brechen", meaning: "Start a conversation easily" },
      { target: "Ein Kinderspiel", meaning: "Something very easy" },
      { target: "Die Zeit vergeht wie im Flug", meaning: "Time passes quickly" },
      { target: "Von Zeit zu Zeit", meaning: "Occasionally" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Ein Kinderspiel' mean?", options: ["Start a conversation easily", "Something very easy", "Time passes quickly", "Occasionally"], a: 1 },
      { type: "fill", q: "How do you say 'Occasionally' in German?", a: "Von Zeit zu Zeit" },
      { type: "mc", q: "Which idiom means 'Time passes quickly'?", options: ["Das Eis brechen", "Ein Kinderspiel", "Die Zeit vergeht wie im Flug", "Von Zeit zu Zeit"], a: 2 },
    ],
  },
  debate: {
    intro: "Phrases for debating and persuading others in German.",
    examples: [
      { target: "Ich glaube fest daran", meaning: "Stating a firm opinion" },
      { target: "Andererseits", meaning: "Presenting a contrast" },
      { target: "Beweise zeigen", meaning: "Citing proof" },
      { target: "Zusammenfassend", meaning: "Summarizing an argument" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Andererseits' mean?", options: ["Stating a firm opinion", "Presenting a contrast", "Citing proof", "Summarizing an argument"], a: 1 },
      { type: "fill", q: "How do you say 'Summarizing an argument' in German?", a: "Zusammenfassend" },
      { type: "mc", q: "Which phrase means 'Citing proof'?", options: ["Ich glaube fest daran", "Andererseits", "Beweise zeigen", "Zusammenfassend"], a: 2 },
    ],
  },
  culture: {
    intro: "Vocabulary about traditions and heritage in German.",
    examples: [
      { target: "Tradition", meaning: "A long-held custom" },
      { target: "Festival", meaning: "A celebration event" },
      { target: "Brauch", meaning: "A usual practice" },
      { target: "Erbe", meaning: "Inherited culture" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Festival' mean?", options: ["A long-held custom", "A celebration event", "A usual practice", "Inherited culture"], a: 1 },
      { type: "fill", q: "How do you say 'Inherited culture' in German?", a: "Erbe" },
      { type: "mc", q: "Which word means 'A usual practice'?", options: ["Tradition", "Festival", "Brauch", "Erbe"], a: 2 },
    ],
  },
  formal_writing: {
    intro: "Phrases for writing formal letters and emails in German.",
    examples: [
      { target: "Sehr geehrte Damen und Herren", meaning: "Formal letter opening" },
      { target: "Mit freundlichen Grüßen", meaning: "Formal letter closing" },
      { target: "Ich schreibe Ihnen, um", meaning: "Stating the letter's purpose" },
      { target: "Bitte finden Sie im Anhang", meaning: "Referring to an attachment" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Mit freundlichen Grüßen' mean?", options: ["Formal letter opening", "Formal letter closing", "Stating the letter's purpose", "Referring to an attachment"], a: 1 },
      { type: "fill", q: "How do you say 'Formal letter opening' in German?", a: "Sehr geehrte Damen und Herren" },
      { type: "mc", q: "Which phrase refers to an attachment?", options: ["Sehr geehrte Damen und Herren", "Mit freundlichen Grüßen", "Ich schreibe Ihnen, um", "Bitte finden Sie im Anhang"], a: 3 },
    ],
  },
  advanced_conversation: {
    intro: "Nuanced phrases for advanced, fluent conversation in German.",
    examples: [
      { target: "Nuance", meaning: "A subtle difference" },
      { target: "Mit anderen Worten", meaning: "Rephrasing something" },
      { target: "Das gesagt", meaning: "Adding a contrasting point" },
      { target: "Näher erläutern", meaning: "Explaining in more detail" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Nuance' mean?", options: ["A subtle difference", "Rephrasing something", "Adding a contrasting point", "Explaining in more detail"], a: 0 },
      { type: "fill", q: "How do you say 'Explaining in more detail' in German?", a: "Näher erläutern" },
      { type: "mc", q: "Which phrase means 'Adding a contrasting point'?", options: ["Nuance", "Mit anderen Worten", "Das gesagt", "Näher erläutern"], a: 2 },
    ],
  },
};

export default DE;
