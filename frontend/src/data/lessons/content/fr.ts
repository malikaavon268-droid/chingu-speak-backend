// French lesson content — real vocabulary/phrases, fully offline.
import { LessonContent } from "../meta";

const FR: Record<string, LessonContent> = {
  greetings: {
    intro: "Learn the essential words for greeting people and saying goodbye in French.",
    examples: [
      { target: "Bonjour", meaning: "A friendly greeting" },
      { target: "Merci", meaning: "Expressing gratitude" },
      { target: "Au revoir", meaning: "Said when leaving" },
      { target: "S'il vous plaît", meaning: "Used when asking politely" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Bonjour' mean?", options: ["A friendly greeting", "Said when leaving", "Expressing gratitude", "Used when asking politely"], a: 0 },
      { type: "fill", q: "How do you say 'Expressing gratitude' in French?", a: "Merci" },
      { type: "mc", q: "Which word means 'Said when leaving'?", options: ["Bonjour", "Merci", "Au revoir", "S'il vous plaît"], a: 2 },
    ],
  },
  numbers: {
    intro: "Practice counting from one to twenty in French.",
    examples: [
      { target: "Un", meaning: "The number 1" },
      { target: "Cinq", meaning: "The number 5" },
      { target: "Dix", meaning: "The number 10" },
      { target: "Vingt", meaning: "The number 20" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Dix' mean?", options: ["The number 1", "The number 5", "The number 10", "The number 20"], a: 2 },
      { type: "fill", q: "How do you say 'The number 20' in French?", a: "Vingt" },
      { type: "mc", q: "Which word means 'The number 1'?", options: ["Cinq", "Un", "Dix", "Vingt"], a: 1 },
    ],
  },
  family: {
    intro: "Learn words for close family members in French.",
    examples: [
      { target: "Mère", meaning: "Female parent" },
      { target: "Père", meaning: "Male parent" },
      { target: "Sœur", meaning: "Female sibling" },
      { target: "Frère", meaning: "Male sibling" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Mère' mean?", options: ["Male parent", "Female parent", "Male sibling", "Female sibling"], a: 1 },
      { type: "fill", q: "How do you say 'Male sibling' in French?", a: "Frère" },
      { type: "mc", q: "Which word means 'Female sibling'?", options: ["Mère", "Père", "Sœur", "Frère"], a: 2 },
    ],
  },
  colors: {
    intro: "Learn the four most common colors in French.",
    examples: [
      { target: "Rouge", meaning: "The color of fire" },
      { target: "Bleu", meaning: "The color of the sky" },
      { target: "Vert", meaning: "The color of grass" },
      { target: "Jaune", meaning: "The color of the sun" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Bleu' mean?", options: ["The color of fire", "The color of the sky", "The color of grass", "The color of the sun"], a: 1 },
      { type: "fill", q: "How do you say 'The color of grass' in French?", a: "Vert" },
      { type: "mc", q: "Which word means 'The color of fire'?", options: ["Rouge", "Bleu", "Vert", "Jaune"], a: 0 },
    ],
  },
  days: {
    intro: "Learn a few days of the week in French.",
    examples: [
      { target: "Lundi", meaning: "First workday" },
      { target: "Vendredi", meaning: "Last workday" },
      { target: "Samedi", meaning: "First weekend day" },
      { target: "Dimanche", meaning: "Second weekend day" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Vendredi' mean?", options: ["First workday", "Last workday", "First weekend day", "Second weekend day"], a: 1 },
      { type: "fill", q: "How do you say 'Second weekend day' in French?", a: "Dimanche" },
      { type: "mc", q: "Which word means 'First workday'?", options: ["Lundi", "Vendredi", "Samedi", "Dimanche"], a: 0 },
    ],
  },
  food_basics: {
    intro: "Learn basic food and drink words in French.",
    examples: [
      { target: "Eau", meaning: "A clear drink" },
      { target: "Pain", meaning: "Baked food staple" },
      { target: "Riz", meaning: "A grain staple food" },
      { target: "Café", meaning: "A hot caffeinated drink" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Riz' mean?", options: ["A clear drink", "Baked food staple", "A grain staple food", "A hot caffeinated drink"], a: 2 },
      { type: "fill", q: "How do you say 'A hot caffeinated drink' in French?", a: "Café" },
      { type: "mc", q: "Which word means 'A clear drink'?", options: ["Eau", "Pain", "Riz", "Café"], a: 0 },
    ],
  },
  shopping: {
    intro: "Useful phrases for shopping and paying in French.",
    examples: [
      { target: "Combien ça coûte ?", meaning: "Asking for a price" },
      { target: "Je voudrais celui-ci", meaning: "Choosing an item" },
      { target: "Réduction", meaning: "A price reduction" },
      { target: "Argent liquide", meaning: "Paper money" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Réduction' mean?", options: ["Asking for a price", "Choosing an item", "A price reduction", "Paper money"], a: 2 },
      { type: "fill", q: "How do you say 'Paper money' in French?", a: "Argent liquide" },
      { type: "mc", q: "Which phrase means 'Asking for a price'?", options: ["Je voudrais celui-ci", "Combien ça coûte ?", "Réduction", "Argent liquide"], a: 1 },
    ],
  },
  directions: {
    intro: "Learn to ask for and follow directions in French.",
    examples: [
      { target: "Gauche", meaning: "Opposite of right" },
      { target: "Droite", meaning: "Opposite of left" },
      { target: "Tout droit", meaning: "Go forward" },
      { target: "Où sont les toilettes ?", meaning: "Asking for a location" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Tout droit' mean?", options: ["Opposite of right", "Opposite of left", "Go forward", "Asking for a location"], a: 2 },
      { type: "fill", q: "How do you say 'Opposite of right' in French?", a: "Gauche" },
      { type: "mc", q: "Which phrase means 'Asking for a location'?", options: ["Gauche", "Droite", "Tout droit", "Où sont les toilettes ?"], a: 3 },
    ],
  },
  time: {
    intro: "Learn to talk about time of day in French.",
    examples: [
      { target: "Quelle heure est-il ?", meaning: "Asking the current time" },
      { target: "Matin", meaning: "Early part of the day" },
      { target: "Après-midi", meaning: "Midday part of the day" },
      { target: "Minuit", meaning: "12 AM" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Minuit' mean?", options: ["Asking the current time", "Early part of the day", "Midday part of the day", "12 AM"], a: 3 },
      { type: "fill", q: "How do you say 'Early part of the day' in French?", a: "Matin" },
      { type: "mc", q: "Which phrase means 'Asking the current time'?", options: ["Quelle heure est-il ?", "Matin", "Après-midi", "Minuit"], a: 0 },
    ],
  },
  weather: {
    intro: "Describe common weather conditions in French.",
    examples: [
      { target: "Il pleut", meaning: "Rain is falling" },
      { target: "Ensoleillé", meaning: "Bright with sunshine" },
      { target: "Froid", meaning: "Low temperature" },
      { target: "Chaud", meaning: "High temperature" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Ensoleillé' mean?", options: ["Rain is falling", "Bright with sunshine", "Low temperature", "High temperature"], a: 1 },
      { type: "fill", q: "How do you say 'High temperature' in French?", a: "Chaud" },
      { type: "mc", q: "Which phrase means 'Rain is falling'?", options: ["Il pleut", "Ensoleillé", "Froid", "Chaud"], a: 0 },
    ],
  },
  hobbies: {
    intro: "Talk about free-time activities in French.",
    examples: [
      { target: "Lecture", meaning: "Enjoying books" },
      { target: "Musique", meaning: "Listening to songs" },
      { target: "Sport", meaning: "Physical games" },
      { target: "Faire la cuisine", meaning: "Preparing food" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Faire la cuisine' mean?", options: ["Enjoying books", "Listening to songs", "Physical games", "Preparing food"], a: 3 },
      { type: "fill", q: "How do you say 'Enjoying books' in French?", a: "Lecture" },
      { type: "mc", q: "Which word means 'Physical games'?", options: ["Lecture", "Musique", "Sport", "Faire la cuisine"], a: 2 },
    ],
  },
  body_health: {
    intro: "Learn body parts and how to describe feeling unwell in French.",
    examples: [
      { target: "Tête", meaning: "Top part of the body" },
      { target: "Estomac", meaning: "Belly area" },
      { target: "Je me sens malade", meaning: "Not feeling well" },
      { target: "Médecin", meaning: "Medical professional" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Estomac' mean?", options: ["Top part of the body", "Belly area", "Not feeling well", "Medical professional"], a: 1 },
      { type: "fill", q: "How do you say 'Medical professional' in French?", a: "Médecin" },
      { type: "mc", q: "Which phrase means 'Not feeling well'?", options: ["Tête", "Estomac", "Je me sens malade", "Médecin"], a: 2 },
    ],
  },
  restaurant: {
    intro: "Order food and ask for the bill in French.",
    examples: [
      { target: "Menu", meaning: "List of dishes" },
      { target: "Je prendrai ceci", meaning: "Ordering a dish" },
      { target: "L'addition, s'il vous plaît", meaning: "Asking to pay" },
      { target: "Délicieux", meaning: "Tastes great" },
    ],
    quiz: [
      { type: "mc", q: "What does 'L'addition, s'il vous plaît' mean?", options: ["List of dishes", "Ordering a dish", "Asking to pay", "Tastes great"], a: 2 },
      { type: "fill", q: "How do you say 'Tastes great' in French?", a: "Délicieux" },
      { type: "mc", q: "Which phrase means 'List of dishes'?", options: ["Menu", "Je prendrai ceci", "L'addition, s'il vous plaît", "Délicieux"], a: 0 },
    ],
  },
  travel: {
    intro: "Key words for airports and train stations in French.",
    examples: [
      { target: "Aéroport", meaning: "Place planes depart from" },
      { target: "Billet", meaning: "Pass to travel" },
      { target: "Passeport", meaning: "Travel ID document" },
      { target: "Gare", meaning: "Place trains depart from" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Passeport' mean?", options: ["Place planes depart from", "Pass to travel", "Travel ID document", "Place trains depart from"], a: 2 },
      { type: "fill", q: "How do you say 'Pass to travel' in French?", a: "Billet" },
      { type: "mc", q: "Which word means 'Place trains depart from'?", options: ["Aéroport", "Billet", "Passeport", "Gare"], a: 3 },
    ],
  },
  work: {
    intro: "Talk about your job and workplace in French.",
    examples: [
      { target: "Réunion", meaning: "A work gathering" },
      { target: "Date limite", meaning: "Due date" },
      { target: "Collègue", meaning: "Co-worker" },
      { target: "Bureau", meaning: "Workplace" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Date limite' mean?", options: ["A work gathering", "Due date", "Co-worker", "Workplace"], a: 1 },
      { type: "fill", q: "How do you say 'Co-worker' in French?", a: "Collègue" },
      { type: "mc", q: "Which word means 'A work gathering'?", options: ["Réunion", "Date limite", "Collègue", "Bureau"], a: 0 },
    ],
  },
  emotions: {
    intro: "Describe how you feel in French.",
    examples: [
      { target: "Heureux", meaning: "Feeling joy" },
      { target: "Triste", meaning: "Feeling down" },
      { target: "Fatigué", meaning: "Needing rest" },
      { target: "Excité", meaning: "Feeling enthusiastic" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Fatigué' mean?", options: ["Feeling joy", "Feeling down", "Needing rest", "Feeling enthusiastic"], a: 2 },
      { type: "fill", q: "How do you say 'Feeling enthusiastic' in French?", a: "Excité" },
      { type: "mc", q: "Which word means 'Feeling joy'?", options: ["Heureux", "Triste", "Fatigué", "Excité"], a: 0 },
    ],
  },
  technology: {
    intro: "Learn common phone and internet vocabulary in French.",
    examples: [
      { target: "Téléphone", meaning: "Device for calls" },
      { target: "Internet", meaning: "Global network" },
      { target: "Mot de passe", meaning: "Secret access code" },
      { target: "Batterie", meaning: "Stores power" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Mot de passe' mean?", options: ["Device for calls", "Global network", "Secret access code", "Stores power"], a: 2 },
      { type: "fill", q: "How do you say 'Stores power' in French?", a: "Batterie" },
      { type: "mc", q: "Which word means 'Global network'?", options: ["Téléphone", "Internet", "Mot de passe", "Batterie"], a: 1 },
    ],
  },
  home: {
    intro: "Learn common room and furniture words in French.",
    examples: [
      { target: "Cuisine", meaning: "Room for cooking" },
      { target: "Chambre", meaning: "Room for sleeping" },
      { target: "Table", meaning: "Furniture to eat/work on" },
      { target: "Chaise", meaning: "Furniture for sitting" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Chambre' mean?", options: ["Room for cooking", "Room for sleeping", "Furniture to eat/work on", "Furniture for sitting"], a: 1 },
      { type: "fill", q: "How do you say 'Furniture for sitting' in French?", a: "Chaise" },
      { type: "mc", q: "Which word means 'Room for cooking'?", options: ["Cuisine", "Chambre", "Table", "Chaise"], a: 0 },
    ],
  },
  opinions: {
    intro: "Learn phrases for sharing your point of view in French.",
    examples: [
      { target: "Je pense que", meaning: "Introducing an opinion" },
      { target: "Je suis d'accord", meaning: "Sharing the same view" },
      { target: "Je ne suis pas d'accord", meaning: "Having a different view" },
      { target: "À mon avis", meaning: "Introducing a personal view" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Je ne suis pas d'accord' mean?", options: ["Introducing an opinion", "Sharing the same view", "Having a different view", "Introducing a personal view"], a: 2 },
      { type: "fill", q: "How do you say 'Sharing the same view' in French?", a: "Je suis d'accord" },
      { type: "mc", q: "Which phrase means 'Introducing an opinion'?", options: ["Je pense que", "Je suis d'accord", "Je ne suis pas d'accord", "À mon avis"], a: 0 },
    ],
  },
  past_tense: {
    intro: "Talk about things that already happened in French.",
    examples: [
      { target: "Hier", meaning: "The day before today" },
      { target: "Je suis allé", meaning: "Past of 'I go'" },
      { target: "J'ai mangé", meaning: "Past of 'I eat'" },
      { target: "La semaine dernière", meaning: "The week before this one" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Je suis allé' mean?", options: ["The day before today", "Past of 'I go'", "Past of 'I eat'", "The week before this one"], a: 1 },
      { type: "fill", q: "How do you say 'Past of I eat' in French?", a: "J'ai mangé" },
      { type: "mc", q: "Which phrase means 'The day before today'?", options: ["Hier", "Je suis allé", "J'ai mangé", "La semaine dernière"], a: 0 },
    ],
  },
  future_plans: {
    intro: "Talk about plans and future events in French.",
    examples: [
      { target: "Demain", meaning: "The day after today" },
      { target: "J'irai", meaning: "Future of 'I go'" },
      { target: "L'année prochaine", meaning: "The year after this one" },
      { target: "Je prévois de", meaning: "Expressing intent" },
    ],
    quiz: [
      { type: "mc", q: "What does 'J'irai' mean?", options: ["The day after today", "Future of 'I go'", "The year after this one", "Expressing intent"], a: 1 },
      { type: "fill", q: "How do you say 'Expressing intent' in French?", a: "Je prévois de" },
      { type: "mc", q: "Which phrase means 'The day after today'?", options: ["Demain", "J'irai", "L'année prochaine", "Je prévois de"], a: 0 },
    ],
  },
  socializing: {
    intro: "Casual phrases for small talk with friends in French.",
    examples: [
      { target: "Comment ça va ?", meaning: "Casual greeting" },
      { target: "Ça fait longtemps", meaning: "Said after a while apart" },
      { target: "On se retrouve", meaning: "Suggesting to meet" },
      { target: "Content de te voir", meaning: "Friendly greeting" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Ça fait longtemps' mean?", options: ["Casual greeting", "Said after a while apart", "Suggesting to meet", "Friendly greeting"], a: 1 },
      { type: "fill", q: "How do you say 'Suggesting to meet' in French?", a: "On se retrouve" },
      { type: "mc", q: "Which phrase is a casual greeting?", options: ["Comment ça va ?", "Ça fait longtemps", "On se retrouve", "Content de te voir"], a: 0 },
    ],
  },
  negotiating: {
    intro: "Bargain and negotiate prices politely in French.",
    examples: [
      { target: "Pouvez-vous baisser le prix ?", meaning: "Asking for a discount" },
      { target: "C'est trop cher", meaning: "Complaining about price" },
      { target: "Dernière offre", meaning: "Last price offered" },
      { target: "Marché conclu", meaning: "Agreement reached" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Dernière offre' mean?", options: ["Asking for a discount", "Complaining about price", "Last price offered", "Agreement reached"], a: 2 },
      { type: "fill", q: "How do you say 'Agreement reached' in French?", a: "Marché conclu" },
      { type: "mc", q: "Which phrase means 'Asking for a discount'?", options: ["Pouvez-vous baisser le prix ?", "C'est trop cher", "Dernière offre", "Marché conclu"], a: 0 },
    ],
  },
  news_media: {
    intro: "Vocabulary for reading and discussing the news in French.",
    examples: [
      { target: "Actualités", meaning: "Recent information" },
      { target: "Journal", meaning: "Printed news publication" },
      { target: "Selon", meaning: "Citing a source" },
      { target: "Dernière minute", meaning: "Urgent new report" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Dernière minute' mean?", options: ["Recent information", "Printed news publication", "Citing a source", "Urgent new report"], a: 3 },
      { type: "fill", q: "How do you say 'Citing a source' in French?", a: "Selon" },
      { type: "mc", q: "Which word means 'Printed news publication'?", options: ["Actualités", "Journal", "Selon", "Dernière minute"], a: 1 },
    ],
  },
  business: {
    intro: "Formal vocabulary for business settings in French.",
    examples: [
      { target: "Contrat", meaning: "A legal agreement" },
      { target: "Réunion", meaning: "A business gathering" },
      { target: "Date limite", meaning: "Due date" },
      { target: "Facture", meaning: "A bill for payment" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Facture' mean?", options: ["A legal agreement", "A business gathering", "Due date", "A bill for payment"], a: 3 },
      { type: "fill", q: "How do you say 'A legal agreement' in French?", a: "Contrat" },
      { type: "mc", q: "Which word means 'Due date'?", options: ["Contrat", "Réunion", "Date limite", "Facture"], a: 2 },
    ],
  },
  idioms: {
    intro: "Learn common idiomatic expressions in French.",
    examples: [
      { target: "Briser la glace", meaning: "Start a conversation easily" },
      { target: "Du gâteau", meaning: "Something very easy" },
      { target: "Le temps passe vite", meaning: "Time passes quickly" },
      { target: "De temps en temps", meaning: "Occasionally" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Du gâteau' mean?", options: ["Start a conversation easily", "Something very easy", "Time passes quickly", "Occasionally"], a: 1 },
      { type: "fill", q: "How do you say 'Occasionally' in French?", a: "De temps en temps" },
      { type: "mc", q: "Which idiom means 'Time passes quickly'?", options: ["Briser la glace", "Du gâteau", "Le temps passe vite", "De temps en temps"], a: 2 },
    ],
  },
  debate: {
    intro: "Phrases for debating and persuading others in French.",
    examples: [
      { target: "Je crois fermement", meaning: "Stating a firm opinion" },
      { target: "D'un autre côté", meaning: "Presenting a contrast" },
      { target: "Les preuves montrent", meaning: "Citing proof" },
      { target: "Pour conclure", meaning: "Summarizing an argument" },
    ],
    quiz: [
      { type: "mc", q: "What does 'D'un autre côté' mean?", options: ["Stating a firm opinion", "Presenting a contrast", "Citing proof", "Summarizing an argument"], a: 1 },
      { type: "fill", q: "How do you say 'Summarizing an argument' in French?", a: "Pour conclure" },
      { type: "mc", q: "Which phrase means 'Citing proof'?", options: ["Je crois fermement", "D'un autre côté", "Les preuves montrent", "Pour conclure"], a: 2 },
    ],
  },
  culture: {
    intro: "Vocabulary about traditions and heritage in French.",
    examples: [
      { target: "Tradition", meaning: "A long-held custom" },
      { target: "Festival", meaning: "A celebration event" },
      { target: "Coutume", meaning: "A usual practice" },
      { target: "Patrimoine", meaning: "Inherited culture" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Festival' mean?", options: ["A long-held custom", "A celebration event", "A usual practice", "Inherited culture"], a: 1 },
      { type: "fill", q: "How do you say 'Inherited culture' in French?", a: "Patrimoine" },
      { type: "mc", q: "Which word means 'A usual practice'?", options: ["Tradition", "Festival", "Coutume", "Patrimoine"], a: 2 },
    ],
  },
  formal_writing: {
    intro: "Phrases for writing formal letters and emails in French.",
    examples: [
      { target: "Madame, Monsieur", meaning: "Formal letter opening" },
      { target: "Cordialement", meaning: "Formal letter closing" },
      { target: "Je vous écris pour", meaning: "Stating the letter's purpose" },
      { target: "Veuillez trouver ci-joint", meaning: "Referring to an attachment" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Cordialement' mean?", options: ["Formal letter opening", "Formal letter closing", "Stating the letter's purpose", "Referring to an attachment"], a: 1 },
      { type: "fill", q: "How do you say 'Formal letter opening' in French?", a: "Madame, Monsieur" },
      { type: "mc", q: "Which phrase refers to an attachment?", options: ["Madame, Monsieur", "Cordialement", "Je vous écris pour", "Veuillez trouver ci-joint"], a: 3 },
    ],
  },
  advanced_conversation: {
    intro: "Nuanced phrases for advanced, fluent conversation in French.",
    examples: [
      { target: "Nuance", meaning: "A subtle difference" },
      { target: "En d'autres termes", meaning: "Rephrasing something" },
      { target: "Cela dit", meaning: "Adding a contrasting point" },
      { target: "Développer", meaning: "Explaining in more detail" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Nuance' mean?", options: ["A subtle difference", "Rephrasing something", "Adding a contrasting point", "Explaining in more detail"], a: 0 },
      { type: "fill", q: "How do you say 'Explaining in more detail' in French?", a: "Développer" },
      { type: "mc", q: "Which phrase means 'Adding a contrasting point'?", options: ["Nuance", "En d'autres termes", "Cela dit", "Développer"], a: 2 },
    ],
  },
};

export default FR;
