// Italian lesson content — real vocabulary/phrases, fully offline.
import { LessonContent } from "../meta";

const IT: Record<string, LessonContent> = {
  greetings: {
    intro: "Learn the essential words for greeting people and saying goodbye in Italian.",
    examples: [
      { target: "Ciao", meaning: "A friendly greeting" },
      { target: "Buongiorno", meaning: "Greeting used before noon" },
      { target: "Grazie", meaning: "Expressing gratitude" },
      { target: "Arrivederci", meaning: "Said when leaving" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Ciao' mean?", options: ["A friendly greeting", "Said when leaving", "Expressing gratitude", "Greeting before noon"], a: 0 },
      { type: "fill", q: "How do you say 'Expressing gratitude' in Italian?", a: "Grazie" },
      { type: "mc", q: "Which word means 'Said when leaving'?", options: ["Ciao", "Buongiorno", "Arrivederci", "Grazie"], a: 2 },
    ],
  },
  numbers: {
    intro: "Practice counting from one to twenty in Italian.",
    examples: [
      { target: "Uno", meaning: "The number 1" },
      { target: "Cinque", meaning: "The number 5" },
      { target: "Dieci", meaning: "The number 10" },
      { target: "Venti", meaning: "The number 20" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Dieci' mean?", options: ["The number 1", "The number 5", "The number 10", "The number 20"], a: 2 },
      { type: "fill", q: "How do you say 'The number 20' in Italian?", a: "Venti" },
      { type: "mc", q: "Which word means 'The number 1'?", options: ["Cinque", "Uno", "Dieci", "Venti"], a: 1 },
    ],
  },
  family: {
    intro: "Learn words for close family members in Italian.",
    examples: [
      { target: "Madre", meaning: "Female parent" },
      { target: "Padre", meaning: "Male parent" },
      { target: "Sorella", meaning: "Female sibling" },
      { target: "Fratello", meaning: "Male sibling" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Madre' mean?", options: ["Male parent", "Female parent", "Male sibling", "Female sibling"], a: 1 },
      { type: "fill", q: "How do you say 'Male sibling' in Italian?", a: "Fratello" },
      { type: "mc", q: "Which word means 'Female sibling'?", options: ["Madre", "Padre", "Sorella", "Fratello"], a: 2 },
    ],
  },
  colors: {
    intro: "Learn the four most common colors in Italian.",
    examples: [
      { target: "Rosso", meaning: "The color of fire" },
      { target: "Blu", meaning: "The color of the sky" },
      { target: "Verde", meaning: "The color of grass" },
      { target: "Giallo", meaning: "The color of the sun" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Blu' mean?", options: ["The color of fire", "The color of the sky", "The color of grass", "The color of the sun"], a: 1 },
      { type: "fill", q: "How do you say 'The color of grass' in Italian?", a: "Verde" },
      { type: "mc", q: "Which word means 'The color of fire'?", options: ["Rosso", "Blu", "Verde", "Giallo"], a: 0 },
    ],
  },
  days: {
    intro: "Learn a few days of the week in Italian.",
    examples: [
      { target: "Lunedì", meaning: "First workday" },
      { target: "Venerdì", meaning: "Last workday" },
      { target: "Sabato", meaning: "First weekend day" },
      { target: "Domenica", meaning: "Second weekend day" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Venerdì' mean?", options: ["First workday", "Last workday", "First weekend day", "Second weekend day"], a: 1 },
      { type: "fill", q: "How do you say 'Second weekend day' in Italian?", a: "Domenica" },
      { type: "mc", q: "Which word means 'First workday'?", options: ["Lunedì", "Venerdì", "Sabato", "Domenica"], a: 0 },
    ],
  },
  food_basics: {
    intro: "Learn basic food and drink words in Italian.",
    examples: [
      { target: "Acqua", meaning: "A clear drink" },
      { target: "Pane", meaning: "Baked food staple" },
      { target: "Riso", meaning: "A grain staple food" },
      { target: "Caffè", meaning: "A hot caffeinated drink" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Riso' mean?", options: ["A clear drink", "Baked food staple", "A grain staple food", "A hot caffeinated drink"], a: 2 },
      { type: "fill", q: "How do you say 'A hot caffeinated drink' in Italian?", a: "Caffè" },
      { type: "mc", q: "Which word means 'A clear drink'?", options: ["Acqua", "Pane", "Riso", "Caffè"], a: 0 },
    ],
  },
  shopping: {
    intro: "Useful phrases for shopping and paying in Italian.",
    examples: [
      { target: "Quanto costa?", meaning: "Asking for a price" },
      { target: "Vorrei questo", meaning: "Choosing an item" },
      { target: "Sconto", meaning: "A price reduction" },
      { target: "Contanti", meaning: "Paper money" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Sconto' mean?", options: ["Asking for a price", "Choosing an item", "A price reduction", "Paper money"], a: 2 },
      { type: "fill", q: "How do you say 'Paper money' in Italian?", a: "Contanti" },
      { type: "mc", q: "Which phrase means 'Asking for a price'?", options: ["Vorrei questo", "Quanto costa?", "Sconto", "Contanti"], a: 1 },
    ],
  },
  directions: {
    intro: "Learn to ask for and follow directions in Italian.",
    examples: [
      { target: "Sinistra", meaning: "Opposite of right" },
      { target: "Destra", meaning: "Opposite of left" },
      { target: "Dritto", meaning: "Go forward" },
      { target: "Dov'è il bagno?", meaning: "Asking for a location" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Dritto' mean?", options: ["Opposite of right", "Opposite of left", "Go forward", "Asking for a location"], a: 2 },
      { type: "fill", q: "How do you say 'Opposite of right' in Italian?", a: "Sinistra" },
      { type: "mc", q: "Which phrase means 'Asking for a location'?", options: ["Sinistra", "Destra", "Dritto", "Dov'è il bagno?"], a: 3 },
    ],
  },
  time: {
    intro: "Learn to talk about time of day in Italian.",
    examples: [
      { target: "Che ora è?", meaning: "Asking the current time" },
      { target: "Mattina", meaning: "Early part of the day" },
      { target: "Pomeriggio", meaning: "Midday part of the day" },
      { target: "Mezzanotte", meaning: "12 AM" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Mezzanotte' mean?", options: ["Asking the current time", "Early part of the day", "Midday part of the day", "12 AM"], a: 3 },
      { type: "fill", q: "How do you say 'Early part of the day' in Italian?", a: "Mattina" },
      { type: "mc", q: "Which phrase means 'Asking the current time'?", options: ["Che ora è?", "Mattina", "Pomeriggio", "Mezzanotte"], a: 0 },
    ],
  },
  weather: {
    intro: "Describe common weather conditions in Italian.",
    examples: [
      { target: "Sta piovendo", meaning: "Rain is falling" },
      { target: "Soleggiato", meaning: "Bright with sunshine" },
      { target: "Freddo", meaning: "Low temperature" },
      { target: "Caldo", meaning: "High temperature" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Soleggiato' mean?", options: ["Rain is falling", "Bright with sunshine", "Low temperature", "High temperature"], a: 1 },
      { type: "fill", q: "How do you say 'High temperature' in Italian?", a: "Caldo" },
      { type: "mc", q: "Which phrase means 'Rain is falling'?", options: ["Sta piovendo", "Soleggiato", "Freddo", "Caldo"], a: 0 },
    ],
  },
  hobbies: {
    intro: "Talk about free-time activities in Italian.",
    examples: [
      { target: "Lettura", meaning: "Enjoying books" },
      { target: "Musica", meaning: "Listening to songs" },
      { target: "Sport", meaning: "Physical games" },
      { target: "Cucinare", meaning: "Preparing food" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Cucinare' mean?", options: ["Enjoying books", "Listening to songs", "Physical games", "Preparing food"], a: 3 },
      { type: "fill", q: "How do you say 'Enjoying books' in Italian?", a: "Lettura" },
      { type: "mc", q: "Which word means 'Physical games'?", options: ["Lettura", "Musica", "Sport", "Cucinare"], a: 2 },
    ],
  },
  body_health: {
    intro: "Learn body parts and how to describe feeling unwell in Italian.",
    examples: [
      { target: "Testa", meaning: "Top part of the body" },
      { target: "Stomaco", meaning: "Belly area" },
      { target: "Mi sento male", meaning: "Not feeling well" },
      { target: "Medico", meaning: "Medical professional" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Stomaco' mean?", options: ["Top part of the body", "Belly area", "Not feeling well", "Medical professional"], a: 1 },
      { type: "fill", q: "How do you say 'Medical professional' in Italian?", a: "Medico" },
      { type: "mc", q: "Which phrase means 'Not feeling well'?", options: ["Testa", "Stomaco", "Mi sento male", "Medico"], a: 2 },
    ],
  },
  restaurant: {
    intro: "Order food and ask for the bill in Italian.",
    examples: [
      { target: "Menù", meaning: "List of dishes" },
      { target: "Prendo questo", meaning: "Ordering a dish" },
      { target: "Il conto, per favore", meaning: "Asking to pay" },
      { target: "Delizioso", meaning: "Tastes great" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Il conto, per favore' mean?", options: ["List of dishes", "Ordering a dish", "Asking to pay", "Tastes great"], a: 2 },
      { type: "fill", q: "How do you say 'Tastes great' in Italian?", a: "Delizioso" },
      { type: "mc", q: "Which phrase means 'List of dishes'?", options: ["Menù", "Prendo questo", "Il conto, per favore", "Delizioso"], a: 0 },
    ],
  },
  travel: {
    intro: "Key words for airports and train stations in Italian.",
    examples: [
      { target: "Aeroporto", meaning: "Place planes depart from" },
      { target: "Biglietto", meaning: "Pass to travel" },
      { target: "Passaporto", meaning: "Travel ID document" },
      { target: "Stazione ferroviaria", meaning: "Place trains depart from" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Passaporto' mean?", options: ["Place planes depart from", "Pass to travel", "Travel ID document", "Place trains depart from"], a: 2 },
      { type: "fill", q: "How do you say 'Pass to travel' in Italian?", a: "Biglietto" },
      { type: "mc", q: "Which word means 'Place trains depart from'?", options: ["Aeroporto", "Biglietto", "Passaporto", "Stazione ferroviaria"], a: 3 },
    ],
  },
  work: {
    intro: "Talk about your job and workplace in Italian.",
    examples: [
      { target: "Riunione", meaning: "A work gathering" },
      { target: "Scadenza", meaning: "Due date" },
      { target: "Collega", meaning: "Co-worker" },
      { target: "Ufficio", meaning: "Workplace" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Scadenza' mean?", options: ["A work gathering", "Due date", "Co-worker", "Workplace"], a: 1 },
      { type: "fill", q: "How do you say 'Co-worker' in Italian?", a: "Collega" },
      { type: "mc", q: "Which word means 'A work gathering'?", options: ["Riunione", "Scadenza", "Collega", "Ufficio"], a: 0 },
    ],
  },
  emotions: {
    intro: "Describe how you feel in Italian.",
    examples: [
      { target: "Felice", meaning: "Feeling joy" },
      { target: "Triste", meaning: "Feeling down" },
      { target: "Stanco", meaning: "Needing rest" },
      { target: "Emozionato", meaning: "Feeling enthusiastic" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Stanco' mean?", options: ["Feeling joy", "Feeling down", "Needing rest", "Feeling enthusiastic"], a: 2 },
      { type: "fill", q: "How do you say 'Feeling enthusiastic' in Italian?", a: "Emozionato" },
      { type: "mc", q: "Which word means 'Feeling joy'?", options: ["Felice", "Triste", "Stanco", "Emozionato"], a: 0 },
    ],
  },
  technology: {
    intro: "Learn common phone and internet vocabulary in Italian.",
    examples: [
      { target: "Telefono", meaning: "Device for calls" },
      { target: "Internet", meaning: "Global network" },
      { target: "Password", meaning: "Secret access code" },
      { target: "Batteria", meaning: "Stores power" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Password' mean?", options: ["Device for calls", "Global network", "Secret access code", "Stores power"], a: 2 },
      { type: "fill", q: "How do you say 'Stores power' in Italian?", a: "Batteria" },
      { type: "mc", q: "Which word means 'Global network'?", options: ["Telefono", "Internet", "Password", "Batteria"], a: 1 },
    ],
  },
  home: {
    intro: "Learn common room and furniture words in Italian.",
    examples: [
      { target: "Cucina", meaning: "Room for cooking" },
      { target: "Camera da letto", meaning: "Room for sleeping" },
      { target: "Tavolo", meaning: "Furniture to eat/work on" },
      { target: "Sedia", meaning: "Furniture for sitting" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Camera da letto' mean?", options: ["Room for cooking", "Room for sleeping", "Furniture to eat/work on", "Furniture for sitting"], a: 1 },
      { type: "fill", q: "How do you say 'Furniture for sitting' in Italian?", a: "Sedia" },
      { type: "mc", q: "Which word means 'Room for cooking'?", options: ["Cucina", "Camera da letto", "Tavolo", "Sedia"], a: 0 },
    ],
  },
  opinions: {
    intro: "Learn phrases for sharing your point of view in Italian.",
    examples: [
      { target: "Penso che", meaning: "Introducing an opinion" },
      { target: "Sono d'accordo", meaning: "Sharing the same view" },
      { target: "Non sono d'accordo", meaning: "Having a different view" },
      { target: "A mio parere", meaning: "Introducing a personal view" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Non sono d'accordo' mean?", options: ["Introducing an opinion", "Sharing the same view", "Having a different view", "Introducing a personal view"], a: 2 },
      { type: "fill", q: "How do you say 'Sharing the same view' in Italian?", a: "Sono d'accordo" },
      { type: "mc", q: "Which phrase means 'Introducing an opinion'?", options: ["Penso che", "Sono d'accordo", "Non sono d'accordo", "A mio parere"], a: 0 },
    ],
  },
  past_tense: {
    intro: "Talk about things that already happened in Italian.",
    examples: [
      { target: "Ieri", meaning: "The day before today" },
      { target: "Sono andato", meaning: "Past of 'I go'" },
      { target: "Ho mangiato", meaning: "Past of 'I eat'" },
      { target: "La settimana scorsa", meaning: "The week before this one" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Sono andato' mean?", options: ["The day before today", "Past of 'I go'", "Past of 'I eat'", "The week before this one"], a: 1 },
      { type: "fill", q: "How do you say 'Past of I eat' in Italian?", a: "Ho mangiato" },
      { type: "mc", q: "Which phrase means 'The day before today'?", options: ["Ieri", "Sono andato", "Ho mangiato", "La settimana scorsa"], a: 0 },
    ],
  },
  future_plans: {
    intro: "Talk about plans and future events in Italian.",
    examples: [
      { target: "Domani", meaning: "The day after today" },
      { target: "Andrò", meaning: "Future of 'I go'" },
      { target: "Il prossimo anno", meaning: "The year after this one" },
      { target: "Ho intenzione di", meaning: "Expressing intent" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Andrò' mean?", options: ["The day after today", "Future of 'I go'", "The year after this one", "Expressing intent"], a: 1 },
      { type: "fill", q: "How do you say 'Expressing intent' in Italian?", a: "Ho intenzione di" },
      { type: "mc", q: "Which phrase means 'The day after today'?", options: ["Domani", "Andrò", "Il prossimo anno", "Ho intenzione di"], a: 0 },
    ],
  },
  socializing: {
    intro: "Casual phrases for small talk with friends in Italian.",
    examples: [
      { target: "Come va?", meaning: "Casual greeting" },
      { target: "Non ci vediamo da tanto", meaning: "Said after a while apart" },
      { target: "Incontriamoci", meaning: "Suggesting to meet" },
      { target: "Piacere di vederti", meaning: "Friendly greeting" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Non ci vediamo da tanto' mean?", options: ["Casual greeting", "Said after a while apart", "Suggesting to meet", "Friendly greeting"], a: 1 },
      { type: "fill", q: "How do you say 'Suggesting to meet' in Italian?", a: "Incontriamoci" },
      { type: "mc", q: "Which phrase is a casual greeting?", options: ["Come va?", "Non ci vediamo da tanto", "Incontriamoci", "Piacere di vederti"], a: 0 },
    ],
  },
  negotiating: {
    intro: "Bargain and negotiate prices politely in Italian.",
    examples: [
      { target: "Può abbassare il prezzo?", meaning: "Asking for a discount" },
      { target: "È troppo caro", meaning: "Complaining about price" },
      { target: "Ultima offerta", meaning: "Last price offered" },
      { target: "Affare fatto", meaning: "Agreement reached" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Ultima offerta' mean?", options: ["Asking for a discount", "Complaining about price", "Last price offered", "Agreement reached"], a: 2 },
      { type: "fill", q: "How do you say 'Agreement reached' in Italian?", a: "Affare fatto" },
      { type: "mc", q: "Which phrase means 'Asking for a discount'?", options: ["Può abbassare il prezzo?", "È troppo caro", "Ultima offerta", "Affare fatto"], a: 0 },
    ],
  },
  news_media: {
    intro: "Vocabulary for reading and discussing the news in Italian.",
    examples: [
      { target: "Notizie", meaning: "Recent information" },
      { target: "Giornale", meaning: "Printed news publication" },
      { target: "Secondo", meaning: "Citing a source" },
      { target: "Ultima ora", meaning: "Urgent new report" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Ultima ora' mean?", options: ["Recent information", "Printed news publication", "Citing a source", "Urgent new report"], a: 3 },
      { type: "fill", q: "How do you say 'Citing a source' in Italian?", a: "Secondo" },
      { type: "mc", q: "Which word means 'Printed news publication'?", options: ["Notizie", "Giornale", "Secondo", "Ultima ora"], a: 1 },
    ],
  },
  business: {
    intro: "Formal vocabulary for business settings in Italian.",
    examples: [
      { target: "Contratto", meaning: "A legal agreement" },
      { target: "Riunione", meaning: "A business gathering" },
      { target: "Scadenza", meaning: "Due date" },
      { target: "Fattura", meaning: "A bill for payment" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Fattura' mean?", options: ["A legal agreement", "A business gathering", "Due date", "A bill for payment"], a: 3 },
      { type: "fill", q: "How do you say 'A legal agreement' in Italian?", a: "Contratto" },
      { type: "mc", q: "Which word means 'Due date'?", options: ["Contratto", "Riunione", "Scadenza", "Fattura"], a: 2 },
    ],
  },
  idioms: {
    intro: "Learn common idiomatic expressions in Italian.",
    examples: [
      { target: "Rompere il ghiaccio", meaning: "Start a conversation easily" },
      { target: "Un gioco da ragazzi", meaning: "Something very easy" },
      { target: "Il tempo vola", meaning: "Time passes quickly" },
      { target: "Di tanto in tanto", meaning: "Occasionally" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Un gioco da ragazzi' mean?", options: ["Start a conversation easily", "Something very easy", "Time passes quickly", "Occasionally"], a: 1 },
      { type: "fill", q: "How do you say 'Occasionally' in Italian?", a: "Di tanto in tanto" },
      { type: "mc", q: "Which idiom means 'Time passes quickly'?", options: ["Rompere il ghiaccio", "Un gioco da ragazzi", "Il tempo vola", "Di tanto in tanto"], a: 2 },
    ],
  },
  debate: {
    intro: "Phrases for debating and persuading others in Italian.",
    examples: [
      { target: "Credo fermamente", meaning: "Stating a firm opinion" },
      { target: "D'altra parte", meaning: "Presenting a contrast" },
      { target: "Le prove dimostrano", meaning: "Citing proof" },
      { target: "In conclusione", meaning: "Summarizing an argument" },
    ],
    quiz: [
      { type: "mc", q: "What does 'D'altra parte' mean?", options: ["Stating a firm opinion", "Presenting a contrast", "Citing proof", "Summarizing an argument"], a: 1 },
      { type: "fill", q: "How do you say 'Summarizing an argument' in Italian?", a: "In conclusione" },
      { type: "mc", q: "Which phrase means 'Citing proof'?", options: ["Credo fermamente", "D'altra parte", "Le prove dimostrano", "In conclusione"], a: 2 },
    ],
  },
  culture: {
    intro: "Vocabulary about traditions and heritage in Italian.",
    examples: [
      { target: "Tradizione", meaning: "A long-held custom" },
      { target: "Festival", meaning: "A celebration event" },
      { target: "Usanza", meaning: "A usual practice" },
      { target: "Patrimonio", meaning: "Inherited culture" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Festival' mean?", options: ["A long-held custom", "A celebration event", "A usual practice", "Inherited culture"], a: 1 },
      { type: "fill", q: "How do you say 'Inherited culture' in Italian?", a: "Patrimonio" },
      { type: "mc", q: "Which word means 'A usual practice'?", options: ["Tradizione", "Festival", "Usanza", "Patrimonio"], a: 2 },
    ],
  },
  formal_writing: {
    intro: "Phrases for writing formal letters and emails in Italian.",
    examples: [
      { target: "Egregio Signore o Signora", meaning: "Formal letter opening" },
      { target: "Cordiali saluti", meaning: "Formal letter closing" },
      { target: "Le scrivo per", meaning: "Stating the letter's purpose" },
      { target: "In allegato troverà", meaning: "Referring to an attachment" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Cordiali saluti' mean?", options: ["Formal letter opening", "Formal letter closing", "Stating the letter's purpose", "Referring to an attachment"], a: 1 },
      { type: "fill", q: "How do you say 'Formal letter opening' in Italian?", a: "Egregio Signore o Signora" },
      { type: "mc", q: "Which phrase refers to an attachment?", options: ["Egregio Signore o Signora", "Cordiali saluti", "Le scrivo per", "In allegato troverà"], a: 3 },
    ],
  },
  advanced_conversation: {
    intro: "Nuanced phrases for advanced, fluent conversation in Italian.",
    examples: [
      { target: "Sfumatura", meaning: "A subtle difference" },
      { target: "In altre parole", meaning: "Rephrasing something" },
      { target: "Detto questo", meaning: "Adding a contrasting point" },
      { target: "Approfondire", meaning: "Explaining in more detail" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Sfumatura' mean?", options: ["A subtle difference", "Rephrasing something", "Adding a contrasting point", "Explaining in more detail"], a: 0 },
      { type: "fill", q: "How do you say 'Explaining in more detail' in Italian?", a: "Approfondire" },
      { type: "mc", q: "Which phrase means 'Adding a contrasting point'?", options: ["Sfumatura", "In altre parole", "Detto questo", "Approfondire"], a: 2 },
    ],
  },
};

export default IT;
