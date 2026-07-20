// Spanish lesson content — real vocabulary/phrases, fully offline.
import { LessonContent } from "../meta";

const ES: Record<string, LessonContent> = {
  greetings: {
    intro: "Learn the essential words for greeting people and saying goodbye in Spanish.",
    examples: [
      { target: "Hola", meaning: "A friendly greeting" },
      { target: "Buenos días", meaning: "Greeting used before noon" },
      { target: "Gracias", meaning: "Expressing gratitude" },
      { target: "Adiós", meaning: "Said when leaving" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Hola' mean?", options: ["A friendly greeting", "Said when leaving", "Expressing gratitude", "Greeting before noon"], a: 0 },
      { type: "fill", q: "How do you say 'Expressing gratitude' in Spanish?", a: "Gracias" },
      { type: "mc", q: "Which word means 'Said when leaving'?", options: ["Hola", "Buenos días", "Adiós", "Gracias"], a: 2 },
    ],
  },
  numbers: {
    intro: "Practice counting from one to twenty in Spanish.",
    examples: [
      { target: "Uno", meaning: "The number 1" },
      { target: "Cinco", meaning: "The number 5" },
      { target: "Diez", meaning: "The number 10" },
      { target: "Veinte", meaning: "The number 20" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Diez' mean?", options: ["The number 1", "The number 5", "The number 10", "The number 20"], a: 2 },
      { type: "fill", q: "How do you say 'The number 20' in Spanish?", a: "Veinte" },
      { type: "mc", q: "Which word means 'The number 1'?", options: ["Cinco", "Uno", "Diez", "Veinte"], a: 1 },
    ],
  },
  family: {
    intro: "Learn words for close family members in Spanish.",
    examples: [
      { target: "Madre", meaning: "Female parent" },
      { target: "Padre", meaning: "Male parent" },
      { target: "Hermana", meaning: "Female sibling" },
      { target: "Hermano", meaning: "Male sibling" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Madre' mean?", options: ["Male parent", "Female parent", "Male sibling", "Female sibling"], a: 1 },
      { type: "fill", q: "How do you say 'Male sibling' in Spanish?", a: "Hermano" },
      { type: "mc", q: "Which word means 'Female sibling'?", options: ["Madre", "Padre", "Hermana", "Hermano"], a: 2 },
    ],
  },
  colors: {
    intro: "Learn the four most common colors in Spanish.",
    examples: [
      { target: "Rojo", meaning: "The color of fire" },
      { target: "Azul", meaning: "The color of the sky" },
      { target: "Verde", meaning: "The color of grass" },
      { target: "Amarillo", meaning: "The color of the sun" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Azul' mean?", options: ["The color of fire", "The color of the sky", "The color of grass", "The color of the sun"], a: 1 },
      { type: "fill", q: "How do you say 'The color of grass' in Spanish?", a: "Verde" },
      { type: "mc", q: "Which word means 'The color of fire'?", options: ["Rojo", "Azul", "Verde", "Amarillo"], a: 0 },
    ],
  },
  days: {
    intro: "Learn a few days of the week in Spanish.",
    examples: [
      { target: "Lunes", meaning: "First workday" },
      { target: "Viernes", meaning: "Last workday" },
      { target: "Sábado", meaning: "First weekend day" },
      { target: "Domingo", meaning: "Second weekend day" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Viernes' mean?", options: ["First workday", "Last workday", "First weekend day", "Second weekend day"], a: 1 },
      { type: "fill", q: "How do you say 'Second weekend day' in Spanish?", a: "Domingo" },
      { type: "mc", q: "Which word means 'First workday'?", options: ["Lunes", "Viernes", "Sábado", "Domingo"], a: 0 },
    ],
  },
  food_basics: {
    intro: "Learn basic food and drink words in Spanish.",
    examples: [
      { target: "Agua", meaning: "A clear drink" },
      { target: "Pan", meaning: "Baked food staple" },
      { target: "Arroz", meaning: "A grain staple food" },
      { target: "Café", meaning: "A hot caffeinated drink" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Arroz' mean?", options: ["A clear drink", "Baked food staple", "A grain staple food", "A hot caffeinated drink"], a: 2 },
      { type: "fill", q: "How do you say 'A hot caffeinated drink' in Spanish?", a: "Café" },
      { type: "mc", q: "Which word means 'A clear drink'?", options: ["Agua", "Pan", "Arroz", "Café"], a: 0 },
    ],
  },
  shopping: {
    intro: "Useful phrases for shopping and paying in Spanish.",
    examples: [
      { target: "¿Cuánto cuesta esto?", meaning: "Asking for a price" },
      { target: "Quiero este", meaning: "Choosing an item" },
      { target: "Descuento", meaning: "A price reduction" },
      { target: "Efectivo", meaning: "Paper money" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Descuento' mean?", options: ["Asking for a price", "Choosing an item", "A price reduction", "Paper money"], a: 2 },
      { type: "fill", q: "How do you say 'Paper money' in Spanish?", a: "Efectivo" },
      { type: "mc", q: "Which phrase means 'Asking for a price'?", options: ["Quiero este", "¿Cuánto cuesta esto?", "Descuento", "Efectivo"], a: 1 },
    ],
  },
  directions: {
    intro: "Learn to ask for and follow directions in Spanish.",
    examples: [
      { target: "Izquierda", meaning: "Opposite of right" },
      { target: "Derecha", meaning: "Opposite of left" },
      { target: "Todo recto", meaning: "Go forward" },
      { target: "¿Dónde está el baño?", meaning: "Asking for a location" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Todo recto' mean?", options: ["Opposite of right", "Opposite of left", "Go forward", "Asking for a location"], a: 2 },
      { type: "fill", q: "How do you say 'Opposite of right' in Spanish?", a: "Izquierda" },
      { type: "mc", q: "Which phrase means 'Asking for a location'?", options: ["Izquierda", "Derecha", "Todo recto", "¿Dónde está el baño?"], a: 3 },
    ],
  },
  time: {
    intro: "Learn to talk about time of day in Spanish.",
    examples: [
      { target: "¿Qué hora es?", meaning: "Asking the current time" },
      { target: "Por la mañana", meaning: "Early part of the day" },
      { target: "Por la tarde", meaning: "Midday part of the day" },
      { target: "Medianoche", meaning: "12 AM" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Medianoche' mean?", options: ["Asking the current time", "Early part of the day", "Midday part of the day", "12 AM"], a: 3 },
      { type: "fill", q: "How do you say 'Early part of the day' in Spanish?", a: "Por la mañana" },
      { type: "mc", q: "Which phrase means 'Asking the current time'?", options: ["¿Qué hora es?", "Por la mañana", "Por la tarde", "Medianoche"], a: 0 },
    ],
  },
  weather: {
    intro: "Describe common weather conditions in Spanish.",
    examples: [
      { target: "Está lloviendo", meaning: "Rain is falling" },
      { target: "Soleado", meaning: "Bright with sunshine" },
      { target: "Hace frío", meaning: "Low temperature" },
      { target: "Hace calor", meaning: "High temperature" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Soleado' mean?", options: ["Rain is falling", "Bright with sunshine", "Low temperature", "High temperature"], a: 1 },
      { type: "fill", q: "How do you say 'High temperature' in Spanish?", a: "Hace calor" },
      { type: "mc", q: "Which phrase means 'Rain is falling'?", options: ["Está lloviendo", "Soleado", "Hace frío", "Hace calor"], a: 0 },
    ],
  },
  hobbies: {
    intro: "Talk about free-time activities in Spanish.",
    examples: [
      { target: "Lectura", meaning: "Enjoying books" },
      { target: "Música", meaning: "Listening to songs" },
      { target: "Deportes", meaning: "Physical games" },
      { target: "Cocinar", meaning: "Preparing food" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Cocinar' mean?", options: ["Enjoying books", "Listening to songs", "Physical games", "Preparing food"], a: 3 },
      { type: "fill", q: "How do you say 'Enjoying books' in Spanish?", a: "Lectura" },
      { type: "mc", q: "Which word means 'Physical games'?", options: ["Lectura", "Música", "Deportes", "Cocinar"], a: 2 },
    ],
  },
  body_health: {
    intro: "Learn body parts and how to describe feeling unwell in Spanish.",
    examples: [
      { target: "Cabeza", meaning: "Top part of the body" },
      { target: "Estómago", meaning: "Belly area" },
      { target: "Me siento mal", meaning: "Not feeling well" },
      { target: "Médico", meaning: "Medical professional" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Estómago' mean?", options: ["Top part of the body", "Belly area", "Not feeling well", "Medical professional"], a: 1 },
      { type: "fill", q: "How do you say 'Medical professional' in Spanish?", a: "Médico" },
      { type: "mc", q: "Which phrase means 'Not feeling well'?", options: ["Cabeza", "Estómago", "Me siento mal", "Médico"], a: 2 },
    ],
  },
  restaurant: {
    intro: "Order food and ask for the bill in Spanish.",
    examples: [
      { target: "Menú", meaning: "List of dishes" },
      { target: "Quiero esto", meaning: "Ordering a dish" },
      { target: "La cuenta, por favor", meaning: "Asking to pay" },
      { target: "Delicioso", meaning: "Tastes great" },
    ],
    quiz: [
      { type: "mc", q: "What does 'La cuenta, por favor' mean?", options: ["List of dishes", "Ordering a dish", "Asking to pay", "Tastes great"], a: 2 },
      { type: "fill", q: "How do you say 'Tastes great' in Spanish?", a: "Delicioso" },
      { type: "mc", q: "Which phrase means 'List of dishes'?", options: ["Menú", "Quiero esto", "La cuenta, por favor", "Delicioso"], a: 0 },
    ],
  },
  travel: {
    intro: "Key words for airports and train stations in Spanish.",
    examples: [
      { target: "Aeropuerto", meaning: "Place planes depart from" },
      { target: "Boleto", meaning: "Pass to travel" },
      { target: "Pasaporte", meaning: "Travel ID document" },
      { target: "Estación de tren", meaning: "Place trains depart from" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Pasaporte' mean?", options: ["Place planes depart from", "Pass to travel", "Travel ID document", "Place trains depart from"], a: 2 },
      { type: "fill", q: "How do you say 'Pass to travel' in Spanish?", a: "Boleto" },
      { type: "mc", q: "Which word means 'Place trains depart from'?", options: ["Aeropuerto", "Boleto", "Pasaporte", "Estación de tren"], a: 3 },
    ],
  },
  work: {
    intro: "Talk about your job and workplace in Spanish.",
    examples: [
      { target: "Reunión", meaning: "A work gathering" },
      { target: "Fecha límite", meaning: "Due date" },
      { target: "Colega", meaning: "Co-worker" },
      { target: "Oficina", meaning: "Workplace" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Fecha límite' mean?", options: ["A work gathering", "Due date", "Co-worker", "Workplace"], a: 1 },
      { type: "fill", q: "How do you say 'Co-worker' in Spanish?", a: "Colega" },
      { type: "mc", q: "Which word means 'A work gathering'?", options: ["Reunión", "Fecha límite", "Colega", "Oficina"], a: 0 },
    ],
  },
  emotions: {
    intro: "Describe how you feel in Spanish.",
    examples: [
      { target: "Feliz", meaning: "Feeling joy" },
      { target: "Triste", meaning: "Feeling down" },
      { target: "Cansado", meaning: "Needing rest" },
      { target: "Emocionado", meaning: "Feeling enthusiastic" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Cansado' mean?", options: ["Feeling joy", "Feeling down", "Needing rest", "Feeling enthusiastic"], a: 2 },
      { type: "fill", q: "How do you say 'Feeling enthusiastic' in Spanish?", a: "Emocionado" },
      { type: "mc", q: "Which word means 'Feeling joy'?", options: ["Feliz", "Triste", "Cansado", "Emocionado"], a: 0 },
    ],
  },
  technology: {
    intro: "Learn common phone and internet vocabulary in Spanish.",
    examples: [
      { target: "Teléfono", meaning: "Device for calls" },
      { target: "Internet", meaning: "Global network" },
      { target: "Contraseña", meaning: "Secret access code" },
      { target: "Batería", meaning: "Stores power" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Contraseña' mean?", options: ["Device for calls", "Global network", "Secret access code", "Stores power"], a: 2 },
      { type: "fill", q: "How do you say 'Stores power' in Spanish?", a: "Batería" },
      { type: "mc", q: "Which word means 'Global network'?", options: ["Teléfono", "Internet", "Contraseña", "Batería"], a: 1 },
    ],
  },
  home: {
    intro: "Learn common room and furniture words in Spanish.",
    examples: [
      { target: "Cocina", meaning: "Room for cooking" },
      { target: "Dormitorio", meaning: "Room for sleeping" },
      { target: "Mesa", meaning: "Furniture to eat/work on" },
      { target: "Silla", meaning: "Furniture for sitting" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Dormitorio' mean?", options: ["Room for cooking", "Room for sleeping", "Furniture to eat/work on", "Furniture for sitting"], a: 1 },
      { type: "fill", q: "How do you say 'Furniture for sitting' in Spanish?", a: "Silla" },
      { type: "mc", q: "Which word means 'Room for cooking'?", options: ["Cocina", "Dormitorio", "Mesa", "Silla"], a: 0 },
    ],
  },
  opinions: {
    intro: "Learn phrases for sharing your point of view in Spanish.",
    examples: [
      { target: "Creo que", meaning: "Introducing an opinion" },
      { target: "Estoy de acuerdo", meaning: "Sharing the same view" },
      { target: "No estoy de acuerdo", meaning: "Having a different view" },
      { target: "En mi opinión", meaning: "Introducing a personal view" },
    ],
    quiz: [
      { type: "mc", q: "What does 'No estoy de acuerdo' mean?", options: ["Introducing an opinion", "Sharing the same view", "Having a different view", "Introducing a personal view"], a: 2 },
      { type: "fill", q: "How do you say 'Sharing the same view' in Spanish?", a: "Estoy de acuerdo" },
      { type: "mc", q: "Which phrase means 'Introducing an opinion'?", options: ["Creo que", "Estoy de acuerdo", "No estoy de acuerdo", "En mi opinión"], a: 0 },
    ],
  },
  past_tense: {
    intro: "Talk about things that already happened in Spanish.",
    examples: [
      { target: "Ayer", meaning: "The day before today" },
      { target: "Fui", meaning: "Past of 'I go'" },
      { target: "Comí", meaning: "Past of 'I eat'" },
      { target: "La semana pasada", meaning: "The week before this one" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Fui' mean?", options: ["The day before today", "Past of 'I go'", "Past of 'I eat'", "The week before this one"], a: 1 },
      { type: "fill", q: "How do you say 'Past of I eat' in Spanish?", a: "Comí" },
      { type: "mc", q: "Which phrase means 'The day before today'?", options: ["Ayer", "Fui", "Comí", "La semana pasada"], a: 0 },
    ],
  },
  future_plans: {
    intro: "Talk about plans and future events in Spanish.",
    examples: [
      { target: "Mañana", meaning: "The day after today" },
      { target: "Iré", meaning: "Future of 'I go'" },
      { target: "El año próximo", meaning: "The year after this one" },
      { target: "Estoy planeando", meaning: "Expressing intent" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Iré' mean?", options: ["The day after today", "Future of 'I go'", "The year after this one", "Expressing intent"], a: 1 },
      { type: "fill", q: "How do you say 'Expressing intent' in Spanish?", a: "Estoy planeando" },
      { type: "mc", q: "Which phrase means 'The day after today'?", options: ["Mañana", "Iré", "El año próximo", "Estoy planeando"], a: 0 },
    ],
  },
  socializing: {
    intro: "Casual phrases for small talk with friends in Spanish.",
    examples: [
      { target: "¿Cómo te va?", meaning: "Casual greeting" },
      { target: "Hace tiempo que no te veo", meaning: "Said after a while apart" },
      { target: "Vamos a reunirnos", meaning: "Suggesting to meet" },
      { target: "Qué gusto verte", meaning: "Friendly greeting" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Hace tiempo que no te veo' mean?", options: ["Casual greeting", "Said after a while apart", "Suggesting to meet", "Friendly greeting"], a: 1 },
      { type: "fill", q: "How do you say 'Suggesting to meet' in Spanish?", a: "Vamos a reunirnos" },
      { type: "mc", q: "Which phrase is a casual greeting?", options: ["¿Cómo te va?", "Hace tiempo que no te veo", "Vamos a reunirnos", "Qué gusto verte"], a: 0 },
    ],
  },
  negotiating: {
    intro: "Bargain and negotiate prices politely in Spanish.",
    examples: [
      { target: "¿Puede bajar el precio?", meaning: "Asking for a discount" },
      { target: "Es demasiado caro", meaning: "Complaining about price" },
      { target: "Oferta final", meaning: "Last price offered" },
      { target: "Trato", meaning: "Agreement reached" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Oferta final' mean?", options: ["Asking for a discount", "Complaining about price", "Last price offered", "Agreement reached"], a: 2 },
      { type: "fill", q: "How do you say 'Agreement reached' in Spanish?", a: "Trato" },
      { type: "mc", q: "Which phrase means 'Asking for a discount'?", options: ["¿Puede bajar el precio?", "Es demasiado caro", "Oferta final", "Trato"], a: 0 },
    ],
  },
  news_media: {
    intro: "Vocabulary for reading and discussing the news in Spanish.",
    examples: [
      { target: "Noticias", meaning: "Recent information" },
      { target: "Periódico", meaning: "Printed news publication" },
      { target: "Según", meaning: "Citing a source" },
      { target: "Última hora", meaning: "Urgent new report" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Última hora' mean?", options: ["Recent information", "Printed news publication", "Citing a source", "Urgent new report"], a: 3 },
      { type: "fill", q: "How do you say 'Citing a source' in Spanish?", a: "Según" },
      { type: "mc", q: "Which word means 'Printed news publication'?", options: ["Noticias", "Periódico", "Según", "Última hora"], a: 1 },
    ],
  },
  business: {
    intro: "Formal vocabulary for business settings in Spanish.",
    examples: [
      { target: "Contrato", meaning: "A legal agreement" },
      { target: "Reunión", meaning: "A business gathering" },
      { target: "Fecha límite", meaning: "Due date" },
      { target: "Factura", meaning: "A bill for payment" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Factura' mean?", options: ["A legal agreement", "A business gathering", "Due date", "A bill for payment"], a: 3 },
      { type: "fill", q: "How do you say 'A legal agreement' in Spanish?", a: "Contrato" },
      { type: "mc", q: "Which word means 'Due date'?", options: ["Contrato", "Reunión", "Fecha límite", "Factura"], a: 2 },
    ],
  },
  idioms: {
    intro: "Learn common idiomatic expressions in Spanish.",
    examples: [
      { target: "Romper el hielo", meaning: "Start a conversation easily" },
      { target: "Pan comido", meaning: "Something very easy" },
      { target: "El tiempo vuela", meaning: "Time passes quickly" },
      { target: "De vez en cuando", meaning: "Occasionally" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Pan comido' mean?", options: ["Start a conversation easily", "Something very easy", "Time passes quickly", "Occasionally"], a: 1 },
      { type: "fill", q: "How do you say 'Occasionally' in Spanish?", a: "De vez en cuando" },
      { type: "mc", q: "Which idiom means 'Time passes quickly'?", options: ["Romper el hielo", "Pan comido", "El tiempo vuela", "De vez en cuando"], a: 2 },
    ],
  },
  debate: {
    intro: "Phrases for debating and persuading others in Spanish.",
    examples: [
      { target: "Creo firmemente", meaning: "Stating a firm opinion" },
      { target: "Por otro lado", meaning: "Presenting a contrast" },
      { target: "La evidencia muestra", meaning: "Citing proof" },
      { target: "Para concluir", meaning: "Summarizing an argument" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Por otro lado' mean?", options: ["Stating a firm opinion", "Presenting a contrast", "Citing proof", "Summarizing an argument"], a: 1 },
      { type: "fill", q: "How do you say 'Summarizing an argument' in Spanish?", a: "Para concluir" },
      { type: "mc", q: "Which phrase means 'Citing proof'?", options: ["Creo firmemente", "Por otro lado", "La evidencia muestra", "Para concluir"], a: 2 },
    ],
  },
  culture: {
    intro: "Vocabulary about traditions and heritage in Spanish.",
    examples: [
      { target: "Tradición", meaning: "A long-held custom" },
      { target: "Festival", meaning: "A celebration event" },
      { target: "Costumbre", meaning: "A usual practice" },
      { target: "Patrimonio", meaning: "Inherited culture" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Festival' mean?", options: ["A long-held custom", "A celebration event", "A usual practice", "Inherited culture"], a: 1 },
      { type: "fill", q: "How do you say 'Inherited culture' in Spanish?", a: "Patrimonio" },
      { type: "mc", q: "Which word means 'A usual practice'?", options: ["Tradición", "Festival", "Costumbre", "Patrimonio"], a: 2 },
    ],
  },
  formal_writing: {
    intro: "Phrases for writing formal letters and emails in Spanish.",
    examples: [
      { target: "Estimado señor o señora", meaning: "Formal letter opening" },
      { target: "Atentamente", meaning: "Formal letter closing" },
      { target: "Le escribo para", meaning: "Stating the letter's purpose" },
      { target: "Adjunto encontrará", meaning: "Referring to an attachment" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Atentamente' mean?", options: ["Formal letter opening", "Formal letter closing", "Stating the letter's purpose", "Referring to an attachment"], a: 1 },
      { type: "fill", q: "How do you say 'Formal letter opening' in Spanish?", a: "Estimado señor o señora" },
      { type: "mc", q: "Which phrase refers to an attachment?", options: ["Estimado señor o señora", "Atentamente", "Le escribo para", "Adjunto encontrará"], a: 3 },
    ],
  },
  advanced_conversation: {
    intro: "Nuanced phrases for advanced, fluent conversation in Spanish.",
    examples: [
      { target: "Matiz", meaning: "A subtle difference" },
      { target: "En otras palabras", meaning: "Rephrasing something" },
      { target: "Dicho esto", meaning: "Adding a contrasting point" },
      { target: "Elaborar", meaning: "Explaining in more detail" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Matiz' mean?", options: ["A subtle difference", "Rephrasing something", "Adding a contrasting point", "Explaining in more detail"], a: 0 },
      { type: "fill", q: "How do you say 'Explaining in more detail' in Spanish?", a: "Elaborar" },
      { type: "mc", q: "Which phrase means 'Adding a contrasting point'?", options: ["Matiz", "En otras palabras", "Dicho esto", "Elaborar"], a: 2 },
    ],
  },
};

export default ES;
