// Portuguese lesson content — real vocabulary/phrases, fully offline.
import { LessonContent } from "../meta";

const PT: Record<string, LessonContent> = {
  greetings: {
    intro: "Learn the essential words for greeting people and saying goodbye in Portuguese.",
    examples: [
      { target: "Olá", meaning: "A friendly greeting" },
      { target: "Bom dia", meaning: "Greeting used before noon" },
      { target: "Obrigado", meaning: "Expressing gratitude" },
      { target: "Adeus", meaning: "Said when leaving" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Olá' mean?", options: ["A friendly greeting", "Said when leaving", "Expressing gratitude", "Greeting before noon"], a: 0 },
      { type: "fill", q: "How do you say 'Expressing gratitude' in Portuguese?", a: "Obrigado" },
      { type: "mc", q: "Which word means 'Said when leaving'?", options: ["Olá", "Bom dia", "Adeus", "Obrigado"], a: 2 },
    ],
  },
  numbers: {
    intro: "Practice counting from one to twenty in Portuguese.",
    examples: [
      { target: "Um", meaning: "The number 1" },
      { target: "Cinco", meaning: "The number 5" },
      { target: "Dez", meaning: "The number 10" },
      { target: "Vinte", meaning: "The number 20" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Dez' mean?", options: ["The number 1", "The number 5", "The number 10", "The number 20"], a: 2 },
      { type: "fill", q: "How do you say 'The number 20' in Portuguese?", a: "Vinte" },
      { type: "mc", q: "Which word means 'The number 1'?", options: ["Cinco", "Um", "Dez", "Vinte"], a: 1 },
    ],
  },
  family: {
    intro: "Learn words for close family members in Portuguese.",
    examples: [
      { target: "Mãe", meaning: "Female parent" },
      { target: "Pai", meaning: "Male parent" },
      { target: "Irmã", meaning: "Female sibling" },
      { target: "Irmão", meaning: "Male sibling" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Mãe' mean?", options: ["Male parent", "Female parent", "Male sibling", "Female sibling"], a: 1 },
      { type: "fill", q: "How do you say 'Male sibling' in Portuguese?", a: "Irmão" },
      { type: "mc", q: "Which word means 'Female sibling'?", options: ["Mãe", "Pai", "Irmã", "Irmão"], a: 2 },
    ],
  },
  colors: {
    intro: "Learn the four most common colors in Portuguese.",
    examples: [
      { target: "Vermelho", meaning: "The color of fire" },
      { target: "Azul", meaning: "The color of the sky" },
      { target: "Verde", meaning: "The color of grass" },
      { target: "Amarelo", meaning: "The color of the sun" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Azul' mean?", options: ["The color of fire", "The color of the sky", "The color of grass", "The color of the sun"], a: 1 },
      { type: "fill", q: "How do you say 'The color of grass' in Portuguese?", a: "Verde" },
      { type: "mc", q: "Which word means 'The color of fire'?", options: ["Vermelho", "Azul", "Verde", "Amarelo"], a: 0 },
    ],
  },
  days: {
    intro: "Learn a few days of the week in Portuguese.",
    examples: [
      { target: "Segunda-feira", meaning: "First workday" },
      { target: "Sexta-feira", meaning: "Last workday" },
      { target: "Sábado", meaning: "First weekend day" },
      { target: "Domingo", meaning: "Second weekend day" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Sexta-feira' mean?", options: ["First workday", "Last workday", "First weekend day", "Second weekend day"], a: 1 },
      { type: "fill", q: "How do you say 'Second weekend day' in Portuguese?", a: "Domingo" },
      { type: "mc", q: "Which word means 'First workday'?", options: ["Segunda-feira", "Sexta-feira", "Sábado", "Domingo"], a: 0 },
    ],
  },
  food_basics: {
    intro: "Learn basic food and drink words in Portuguese.",
    examples: [
      { target: "Água", meaning: "A clear drink" },
      { target: "Pão", meaning: "Baked food staple" },
      { target: "Arroz", meaning: "A grain staple food" },
      { target: "Café", meaning: "A hot caffeinated drink" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Arroz' mean?", options: ["A clear drink", "Baked food staple", "A grain staple food", "A hot caffeinated drink"], a: 2 },
      { type: "fill", q: "How do you say 'A hot caffeinated drink' in Portuguese?", a: "Café" },
      { type: "mc", q: "Which word means 'A clear drink'?", options: ["Água", "Pão", "Arroz", "Café"], a: 0 },
    ],
  },
  shopping: {
    intro: "Useful phrases for shopping and paying in Portuguese.",
    examples: [
      { target: "Quanto custa isto?", meaning: "Asking for a price" },
      { target: "Quero este", meaning: "Choosing an item" },
      { target: "Desconto", meaning: "A price reduction" },
      { target: "Dinheiro", meaning: "Paper money" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Desconto' mean?", options: ["Asking for a price", "Choosing an item", "A price reduction", "Paper money"], a: 2 },
      { type: "fill", q: "How do you say 'Paper money' in Portuguese?", a: "Dinheiro" },
      { type: "mc", q: "Which phrase means 'Asking for a price'?", options: ["Quero este", "Quanto custa isto?", "Desconto", "Dinheiro"], a: 1 },
    ],
  },
  directions: {
    intro: "Learn to ask for and follow directions in Portuguese.",
    examples: [
      { target: "Esquerda", meaning: "Opposite of right" },
      { target: "Direita", meaning: "Opposite of left" },
      { target: "Sempre em frente", meaning: "Go forward" },
      { target: "Onde é o banheiro?", meaning: "Asking for a location" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Sempre em frente' mean?", options: ["Opposite of right", "Opposite of left", "Go forward", "Asking for a location"], a: 2 },
      { type: "fill", q: "How do you say 'Opposite of right' in Portuguese?", a: "Esquerda" },
      { type: "mc", q: "Which phrase means 'Asking for a location'?", options: ["Esquerda", "Direita", "Sempre em frente", "Onde é o banheiro?"], a: 3 },
    ],
  },
  time: {
    intro: "Learn to talk about time of day in Portuguese.",
    examples: [
      { target: "Que horas são?", meaning: "Asking the current time" },
      { target: "Manhã", meaning: "Early part of the day" },
      { target: "Tarde", meaning: "Midday part of the day" },
      { target: "Meia-noite", meaning: "12 AM" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Meia-noite' mean?", options: ["Asking the current time", "Early part of the day", "Midday part of the day", "12 AM"], a: 3 },
      { type: "fill", q: "How do you say 'Early part of the day' in Portuguese?", a: "Manhã" },
      { type: "mc", q: "Which phrase means 'Asking the current time'?", options: ["Que horas são?", "Manhã", "Tarde", "Meia-noite"], a: 0 },
    ],
  },
  weather: {
    intro: "Describe common weather conditions in Portuguese.",
    examples: [
      { target: "Está chovendo", meaning: "Rain is falling" },
      { target: "Ensolarado", meaning: "Bright with sunshine" },
      { target: "Frio", meaning: "Low temperature" },
      { target: "Quente", meaning: "High temperature" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Ensolarado' mean?", options: ["Rain is falling", "Bright with sunshine", "Low temperature", "High temperature"], a: 1 },
      { type: "fill", q: "How do you say 'High temperature' in Portuguese?", a: "Quente" },
      { type: "mc", q: "Which phrase means 'Rain is falling'?", options: ["Está chovendo", "Ensolarado", "Frio", "Quente"], a: 0 },
    ],
  },
  hobbies: {
    intro: "Talk about free-time activities in Portuguese.",
    examples: [
      { target: "Leitura", meaning: "Enjoying books" },
      { target: "Música", meaning: "Listening to songs" },
      { target: "Esportes", meaning: "Physical games" },
      { target: "Cozinhar", meaning: "Preparing food" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Cozinhar' mean?", options: ["Enjoying books", "Listening to songs", "Physical games", "Preparing food"], a: 3 },
      { type: "fill", q: "How do you say 'Enjoying books' in Portuguese?", a: "Leitura" },
      { type: "mc", q: "Which word means 'Physical games'?", options: ["Leitura", "Música", "Esportes", "Cozinhar"], a: 2 },
    ],
  },
  body_health: {
    intro: "Learn body parts and how to describe feeling unwell in Portuguese.",
    examples: [
      { target: "Cabeça", meaning: "Top part of the body" },
      { target: "Estômago", meaning: "Belly area" },
      { target: "Estou me sentindo mal", meaning: "Not feeling well" },
      { target: "Médico", meaning: "Medical professional" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Estômago' mean?", options: ["Top part of the body", "Belly area", "Not feeling well", "Medical professional"], a: 1 },
      { type: "fill", q: "How do you say 'Medical professional' in Portuguese?", a: "Médico" },
      { type: "mc", q: "Which phrase means 'Not feeling well'?", options: ["Cabeça", "Estômago", "Estou me sentindo mal", "Médico"], a: 2 },
    ],
  },
  restaurant: {
    intro: "Order food and ask for the bill in Portuguese.",
    examples: [
      { target: "Cardápio", meaning: "List of dishes" },
      { target: "Vou querer este", meaning: "Ordering a dish" },
      { target: "A conta, por favor", meaning: "Asking to pay" },
      { target: "Delicioso", meaning: "Tastes great" },
    ],
    quiz: [
      { type: "mc", q: "What does 'A conta, por favor' mean?", options: ["List of dishes", "Ordering a dish", "Asking to pay", "Tastes great"], a: 2 },
      { type: "fill", q: "How do you say 'Tastes great' in Portuguese?", a: "Delicioso" },
      { type: "mc", q: "Which phrase means 'List of dishes'?", options: ["Cardápio", "Vou querer este", "A conta, por favor", "Delicioso"], a: 0 },
    ],
  },
  travel: {
    intro: "Key words for airports and train stations in Portuguese.",
    examples: [
      { target: "Aeroporto", meaning: "Place planes depart from" },
      { target: "Passagem", meaning: "Pass to travel" },
      { target: "Passaporte", meaning: "Travel ID document" },
      { target: "Estação de trem", meaning: "Place trains depart from" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Passaporte' mean?", options: ["Place planes depart from", "Pass to travel", "Travel ID document", "Place trains depart from"], a: 2 },
      { type: "fill", q: "How do you say 'Pass to travel' in Portuguese?", a: "Passagem" },
      { type: "mc", q: "Which word means 'Place trains depart from'?", options: ["Aeroporto", "Passagem", "Passaporte", "Estação de trem"], a: 3 },
    ],
  },
  work: {
    intro: "Talk about your job and workplace in Portuguese.",
    examples: [
      { target: "Reunião", meaning: "A work gathering" },
      { target: "Prazo", meaning: "Due date" },
      { target: "Colega", meaning: "Co-worker" },
      { target: "Escritório", meaning: "Workplace" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Prazo' mean?", options: ["A work gathering", "Due date", "Co-worker", "Workplace"], a: 1 },
      { type: "fill", q: "How do you say 'Co-worker' in Portuguese?", a: "Colega" },
      { type: "mc", q: "Which word means 'A work gathering'?", options: ["Reunião", "Prazo", "Colega", "Escritório"], a: 0 },
    ],
  },
  emotions: {
    intro: "Describe how you feel in Portuguese.",
    examples: [
      { target: "Feliz", meaning: "Feeling joy" },
      { target: "Triste", meaning: "Feeling down" },
      { target: "Cansado", meaning: "Needing rest" },
      { target: "Animado", meaning: "Feeling enthusiastic" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Cansado' mean?", options: ["Feeling joy", "Feeling down", "Needing rest", "Feeling enthusiastic"], a: 2 },
      { type: "fill", q: "How do you say 'Feeling enthusiastic' in Portuguese?", a: "Animado" },
      { type: "mc", q: "Which word means 'Feeling joy'?", options: ["Feliz", "Triste", "Cansado", "Animado"], a: 0 },
    ],
  },
  technology: {
    intro: "Learn common phone and internet vocabulary in Portuguese.",
    examples: [
      { target: "Telefone", meaning: "Device for calls" },
      { target: "Internet", meaning: "Global network" },
      { target: "Senha", meaning: "Secret access code" },
      { target: "Bateria", meaning: "Stores power" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Senha' mean?", options: ["Device for calls", "Global network", "Secret access code", "Stores power"], a: 2 },
      { type: "fill", q: "How do you say 'Stores power' in Portuguese?", a: "Bateria" },
      { type: "mc", q: "Which word means 'Global network'?", options: ["Telefone", "Internet", "Senha", "Bateria"], a: 1 },
    ],
  },
  home: {
    intro: "Learn common room and furniture words in Portuguese.",
    examples: [
      { target: "Cozinha", meaning: "Room for cooking" },
      { target: "Quarto", meaning: "Room for sleeping" },
      { target: "Mesa", meaning: "Furniture to eat/work on" },
      { target: "Cadeira", meaning: "Furniture for sitting" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Quarto' mean?", options: ["Room for cooking", "Room for sleeping", "Furniture to eat/work on", "Furniture for sitting"], a: 1 },
      { type: "fill", q: "How do you say 'Furniture for sitting' in Portuguese?", a: "Cadeira" },
      { type: "mc", q: "Which word means 'Room for cooking'?", options: ["Cozinha", "Quarto", "Mesa", "Cadeira"], a: 0 },
    ],
  },
  opinions: {
    intro: "Learn phrases for sharing your point of view in Portuguese.",
    examples: [
      { target: "Eu acho que", meaning: "Introducing an opinion" },
      { target: "Eu concordo", meaning: "Sharing the same view" },
      { target: "Eu não concordo", meaning: "Having a different view" },
      { target: "Na minha opinião", meaning: "Introducing a personal view" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Eu não concordo' mean?", options: ["Introducing an opinion", "Sharing the same view", "Having a different view", "Introducing a personal view"], a: 2 },
      { type: "fill", q: "How do you say 'Sharing the same view' in Portuguese?", a: "Eu concordo" },
      { type: "mc", q: "Which phrase means 'Introducing an opinion'?", options: ["Eu acho que", "Eu concordo", "Eu não concordo", "Na minha opinião"], a: 0 },
    ],
  },
  past_tense: {
    intro: "Talk about things that already happened in Portuguese.",
    examples: [
      { target: "Ontem", meaning: "The day before today" },
      { target: "Eu fui", meaning: "Past of 'I go'" },
      { target: "Eu comi", meaning: "Past of 'I eat'" },
      { target: "Semana passada", meaning: "The week before this one" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Eu fui' mean?", options: ["The day before today", "Past of 'I go'", "Past of 'I eat'", "The week before this one"], a: 1 },
      { type: "fill", q: "How do you say 'Past of I eat' in Portuguese?", a: "Eu comi" },
      { type: "mc", q: "Which phrase means 'The day before today'?", options: ["Ontem", "Eu fui", "Eu comi", "Semana passada"], a: 0 },
    ],
  },
  future_plans: {
    intro: "Talk about plans and future events in Portuguese.",
    examples: [
      { target: "Amanhã", meaning: "The day after today" },
      { target: "Eu irei", meaning: "Future of 'I go'" },
      { target: "Ano que vem", meaning: "The year after this one" },
      { target: "Estou planejando", meaning: "Expressing intent" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Eu irei' mean?", options: ["The day after today", "Future of 'I go'", "The year after this one", "Expressing intent"], a: 1 },
      { type: "fill", q: "How do you say 'Expressing intent' in Portuguese?", a: "Estou planejando" },
      { type: "mc", q: "Which phrase means 'The day after today'?", options: ["Amanhã", "Eu irei", "Ano que vem", "Estou planejando"], a: 0 },
    ],
  },
  socializing: {
    intro: "Casual phrases for small talk with friends in Portuguese.",
    examples: [
      { target: "Como vai?", meaning: "Casual greeting" },
      { target: "Há quanto tempo", meaning: "Said after a while apart" },
      { target: "Vamos nos encontrar", meaning: "Suggesting to meet" },
      { target: "Que bom te ver", meaning: "Friendly greeting" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Há quanto tempo' mean?", options: ["Casual greeting", "Said after a while apart", "Suggesting to meet", "Friendly greeting"], a: 1 },
      { type: "fill", q: "How do you say 'Suggesting to meet' in Portuguese?", a: "Vamos nos encontrar" },
      { type: "mc", q: "Which phrase is a casual greeting?", options: ["Como vai?", "Há quanto tempo", "Vamos nos encontrar", "Que bom te ver"], a: 0 },
    ],
  },
  negotiating: {
    intro: "Bargain and negotiate prices politely in Portuguese.",
    examples: [
      { target: "Pode baixar o preço?", meaning: "Asking for a discount" },
      { target: "Está muito caro", meaning: "Complaining about price" },
      { target: "Oferta final", meaning: "Last price offered" },
      { target: "Negócio fechado", meaning: "Agreement reached" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Oferta final' mean?", options: ["Asking for a discount", "Complaining about price", "Last price offered", "Agreement reached"], a: 2 },
      { type: "fill", q: "How do you say 'Agreement reached' in Portuguese?", a: "Negócio fechado" },
      { type: "mc", q: "Which phrase means 'Asking for a discount'?", options: ["Pode baixar o preço?", "Está muito caro", "Oferta final", "Negócio fechado"], a: 0 },
    ],
  },
  news_media: {
    intro: "Vocabulary for reading and discussing the news in Portuguese.",
    examples: [
      { target: "Notícias", meaning: "Recent information" },
      { target: "Jornal", meaning: "Printed news publication" },
      { target: "Segundo", meaning: "Citing a source" },
      { target: "Última hora", meaning: "Urgent new report" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Última hora' mean?", options: ["Recent information", "Printed news publication", "Citing a source", "Urgent new report"], a: 3 },
      { type: "fill", q: "How do you say 'Citing a source' in Portuguese?", a: "Segundo" },
      { type: "mc", q: "Which word means 'Printed news publication'?", options: ["Notícias", "Jornal", "Segundo", "Última hora"], a: 1 },
    ],
  },
  business: {
    intro: "Formal vocabulary for business settings in Portuguese.",
    examples: [
      { target: "Contrato", meaning: "A legal agreement" },
      { target: "Reunião", meaning: "A business gathering" },
      { target: "Prazo", meaning: "Due date" },
      { target: "Fatura", meaning: "A bill for payment" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Fatura' mean?", options: ["A legal agreement", "A business gathering", "Due date", "A bill for payment"], a: 3 },
      { type: "fill", q: "How do you say 'A legal agreement' in Portuguese?", a: "Contrato" },
      { type: "mc", q: "Which word means 'Due date'?", options: ["Contrato", "Reunião", "Prazo", "Fatura"], a: 2 },
    ],
  },
  idioms: {
    intro: "Learn common idiomatic expressions in Portuguese.",
    examples: [
      { target: "Quebrar o gelo", meaning: "Start a conversation easily" },
      { target: "Mamão com açúcar", meaning: "Something very easy" },
      { target: "O tempo voa", meaning: "Time passes quickly" },
      { target: "De vez em quando", meaning: "Occasionally" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Mamão com açúcar' mean?", options: ["Start a conversation easily", "Something very easy", "Time passes quickly", "Occasionally"], a: 1 },
      { type: "fill", q: "How do you say 'Occasionally' in Portuguese?", a: "De vez em quando" },
      { type: "mc", q: "Which idiom means 'Time passes quickly'?", options: ["Quebrar o gelo", "Mamão com açúcar", "O tempo voa", "De vez em quando"], a: 2 },
    ],
  },
  debate: {
    intro: "Phrases for debating and persuading others in Portuguese.",
    examples: [
      { target: "Eu acredito firmemente", meaning: "Stating a firm opinion" },
      { target: "Por outro lado", meaning: "Presenting a contrast" },
      { target: "As evidências mostram", meaning: "Citing proof" },
      { target: "Para concluir", meaning: "Summarizing an argument" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Por outro lado' mean?", options: ["Stating a firm opinion", "Presenting a contrast", "Citing proof", "Summarizing an argument"], a: 1 },
      { type: "fill", q: "How do you say 'Summarizing an argument' in Portuguese?", a: "Para concluir" },
      { type: "mc", q: "Which phrase means 'Citing proof'?", options: ["Eu acredito firmemente", "Por outro lado", "As evidências mostram", "Para concluir"], a: 2 },
    ],
  },
  culture: {
    intro: "Vocabulary about traditions and heritage in Portuguese.",
    examples: [
      { target: "Tradição", meaning: "A long-held custom" },
      { target: "Festival", meaning: "A celebration event" },
      { target: "Costume", meaning: "A usual practice" },
      { target: "Patrimônio", meaning: "Inherited culture" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Festival' mean?", options: ["A long-held custom", "A celebration event", "A usual practice", "Inherited culture"], a: 1 },
      { type: "fill", q: "How do you say 'Inherited culture' in Portuguese?", a: "Patrimônio" },
      { type: "mc", q: "Which word means 'A usual practice'?", options: ["Tradição", "Festival", "Costume", "Patrimônio"], a: 2 },
    ],
  },
  formal_writing: {
    intro: "Phrases for writing formal letters and emails in Portuguese.",
    examples: [
      { target: "Caro Senhor ou Senhora", meaning: "Formal letter opening" },
      { target: "Atenciosamente", meaning: "Formal letter closing" },
      { target: "Escrevo para", meaning: "Stating the letter's purpose" },
      { target: "Segue em anexo", meaning: "Referring to an attachment" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Atenciosamente' mean?", options: ["Formal letter opening", "Formal letter closing", "Stating the letter's purpose", "Referring to an attachment"], a: 1 },
      { type: "fill", q: "How do you say 'Formal letter opening' in Portuguese?", a: "Caro Senhor ou Senhora" },
      { type: "mc", q: "Which phrase refers to an attachment?", options: ["Caro Senhor ou Senhora", "Atenciosamente", "Escrevo para", "Segue em anexo"], a: 3 },
    ],
  },
  advanced_conversation: {
    intro: "Nuanced phrases for advanced, fluent conversation in Portuguese.",
    examples: [
      { target: "Sutileza", meaning: "A subtle difference" },
      { target: "Em outras palavras", meaning: "Rephrasing something" },
      { target: "Dito isso", meaning: "Adding a contrasting point" },
      { target: "Elaborar", meaning: "Explaining in more detail" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Sutileza' mean?", options: ["A subtle difference", "Rephrasing something", "Adding a contrasting point", "Explaining in more detail"], a: 0 },
      { type: "fill", q: "How do you say 'Explaining in more detail' in Portuguese?", a: "Elaborar" },
      { type: "mc", q: "Which phrase means 'Adding a contrasting point'?", options: ["Sutileza", "Em outras palavras", "Dito isso", "Elaborar"], a: 2 },
    ],
  },
};

export default PT;
