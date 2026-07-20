// English (also used as the universal fallback when a target language has no
// dedicated pack yet). 30 lessons matching src/data/lessons/meta.ts.
import { LessonContent } from "../meta";

const EN: Record<string, LessonContent> = {
  greetings: {
    intro: "Learn the essential words for greeting people and saying goodbye.",
    examples: [
      { target: "Hello", meaning: "A friendly greeting" },
      { target: "Good morning", meaning: "Greeting used before noon" },
      { target: "Thank you", meaning: "Expressing gratitude" },
      { target: "Goodbye", meaning: "Said when leaving" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Hello' mean?", options: ["A friendly greeting", "Said when leaving", "Expressing gratitude", "Greeting before noon"], a: 0 },
      { type: "fill", q: "How do you say 'Expressing gratitude' in English?", a: "Thank you" },
      { type: "mc", q: "Which word means 'Said when leaving'?", options: ["Hello", "Good morning", "Goodbye", "Thank you"], a: 2 },
    ],
  },
  numbers: {
    intro: "Practice counting from one to twenty.",
    examples: [
      { target: "One", meaning: "The number 1" },
      { target: "Five", meaning: "The number 5" },
      { target: "Ten", meaning: "The number 10" },
      { target: "Twenty", meaning: "The number 20" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Ten' mean?", options: ["The number 1", "The number 5", "The number 10", "The number 20"], a: 2 },
      { type: "fill", q: "How do you say 'The number 20' in English?", a: "Twenty" },
      { type: "mc", q: "Which word means 'The number 1'?", options: ["Five", "One", "Ten", "Twenty"], a: 1 },
    ],
  },
  family: {
    intro: "Learn words for close family members.",
    examples: [
      { target: "Mother", meaning: "Female parent" },
      { target: "Father", meaning: "Male parent" },
      { target: "Sister", meaning: "Female sibling" },
      { target: "Brother", meaning: "Male sibling" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Mother' mean?", options: ["Male parent", "Female parent", "Male sibling", "Female sibling"], a: 1 },
      { type: "fill", q: "How do you say 'Male sibling' in English?", a: "Brother" },
      { type: "mc", q: "Which word means 'Female sibling'?", options: ["Mother", "Father", "Sister", "Brother"], a: 2 },
    ],
  },
  colors: {
    intro: "Learn the four most common colors.",
    examples: [
      { target: "Red", meaning: "The color of fire" },
      { target: "Blue", meaning: "The color of the sky" },
      { target: "Green", meaning: "The color of grass" },
      { target: "Yellow", meaning: "The color of the sun" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Blue' mean?", options: ["The color of fire", "The color of the sky", "The color of grass", "The color of the sun"], a: 1 },
      { type: "fill", q: "How do you say 'The color of grass' in English?", a: "Green" },
      { type: "mc", q: "Which word means 'The color of fire'?", options: ["Red", "Blue", "Green", "Yellow"], a: 0 },
    ],
  },
  days: {
    intro: "Learn a few days of the week.",
    examples: [
      { target: "Monday", meaning: "First workday" },
      { target: "Friday", meaning: "Last workday" },
      { target: "Saturday", meaning: "First weekend day" },
      { target: "Sunday", meaning: "Second weekend day" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Friday' mean?", options: ["First workday", "Last workday", "First weekend day", "Second weekend day"], a: 1 },
      { type: "fill", q: "How do you say 'Second weekend day' in English?", a: "Sunday" },
      { type: "mc", q: "Which word means 'First workday'?", options: ["Monday", "Friday", "Saturday", "Sunday"], a: 0 },
    ],
  },
  food_basics: {
    intro: "Learn basic food and drink words.",
    examples: [
      { target: "Water", meaning: "A clear drink" },
      { target: "Bread", meaning: "Baked food staple" },
      { target: "Rice", meaning: "A grain staple food" },
      { target: "Coffee", meaning: "A hot caffeinated drink" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Rice' mean?", options: ["A clear drink", "Baked food staple", "A grain staple food", "A hot caffeinated drink"], a: 2 },
      { type: "fill", q: "How do you say 'A hot caffeinated drink' in English?", a: "Coffee" },
      { type: "mc", q: "Which word means 'A clear drink'?", options: ["Water", "Bread", "Rice", "Coffee"], a: 0 },
    ],
  },
  shopping: {
    intro: "Useful phrases for shopping and paying.",
    examples: [
      { target: "How much is this?", meaning: "Asking for a price" },
      { target: "I'd like this one", meaning: "Choosing an item" },
      { target: "Discount", meaning: "A price reduction" },
      { target: "Cash", meaning: "Paper money" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Discount' mean?", options: ["Asking for a price", "Choosing an item", "A price reduction", "Paper money"], a: 2 },
      { type: "fill", q: "How do you say 'Paper money' in English?", a: "Cash" },
      { type: "mc", q: "Which phrase means 'Asking for a price'?", options: ["I'd like this one", "How much is this?", "Discount", "Cash"], a: 1 },
    ],
  },
  directions: {
    intro: "Learn to ask for and follow directions.",
    examples: [
      { target: "Left", meaning: "Opposite of right" },
      { target: "Right", meaning: "Opposite of left" },
      { target: "Straight ahead", meaning: "Go forward" },
      { target: "Where is the bathroom?", meaning: "Asking for a location" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Straight ahead' mean?", options: ["Opposite of right", "Opposite of left", "Go forward", "Asking for a location"], a: 2 },
      { type: "fill", q: "How do you say 'Opposite of right' in English?", a: "Left" },
      { type: "mc", q: "Which phrase means 'Asking for a location'?", options: ["Left", "Right", "Straight ahead", "Where is the bathroom?"], a: 3 },
    ],
  },
  time: {
    intro: "Learn to talk about time of day.",
    examples: [
      { target: "What time is it?", meaning: "Asking the current time" },
      { target: "Morning", meaning: "Early part of the day" },
      { target: "Afternoon", meaning: "Midday part of the day" },
      { target: "Midnight", meaning: "12 AM" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Midnight' mean?", options: ["Asking the current time", "Early part of the day", "Midday part of the day", "12 AM"], a: 3 },
      { type: "fill", q: "How do you say 'Early part of the day' in English?", a: "Morning" },
      { type: "mc", q: "Which phrase means 'Asking the current time'?", options: ["What time is it?", "Morning", "Afternoon", "Midnight"], a: 0 },
    ],
  },
  weather: {
    intro: "Describe common weather conditions.",
    examples: [
      { target: "It's raining", meaning: "Rain is falling" },
      { target: "Sunny", meaning: "Bright with sunshine" },
      { target: "Cold", meaning: "Low temperature" },
      { target: "Hot", meaning: "High temperature" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Sunny' mean?", options: ["Rain is falling", "Bright with sunshine", "Low temperature", "High temperature"], a: 1 },
      { type: "fill", q: "How do you say 'High temperature' in English?", a: "Hot" },
      { type: "mc", q: "Which phrase means 'Rain is falling'?", options: ["It's raining", "Sunny", "Cold", "Hot"], a: 0 },
    ],
  },
  hobbies: {
    intro: "Talk about free-time activities.",
    examples: [
      { target: "Reading", meaning: "Enjoying books" },
      { target: "Music", meaning: "Listening to songs" },
      { target: "Sports", meaning: "Physical games" },
      { target: "Cooking", meaning: "Preparing food" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Cooking' mean?", options: ["Enjoying books", "Listening to songs", "Physical games", "Preparing food"], a: 3 },
      { type: "fill", q: "How do you say 'Enjoying books' in English?", a: "Reading" },
      { type: "mc", q: "Which word means 'Physical games'?", options: ["Reading", "Music", "Sports", "Cooking"], a: 2 },
    ],
  },
  body_health: {
    intro: "Learn body parts and how to describe feeling unwell.",
    examples: [
      { target: "Head", meaning: "Top part of the body" },
      { target: "Stomach", meaning: "Belly area" },
      { target: "I feel sick", meaning: "Not feeling well" },
      { target: "Doctor", meaning: "Medical professional" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Stomach' mean?", options: ["Top part of the body", "Belly area", "Not feeling well", "Medical professional"], a: 1 },
      { type: "fill", q: "How do you say 'Medical professional' in English?", a: "Doctor" },
      { type: "mc", q: "Which phrase means 'Not feeling well'?", options: ["Head", "Stomach", "I feel sick", "Doctor"], a: 2 },
    ],
  },
  restaurant: {
    intro: "Order food and ask for the bill.",
    examples: [
      { target: "Menu", meaning: "List of dishes" },
      { target: "I'll have this", meaning: "Ordering a dish" },
      { target: "The bill, please", meaning: "Asking to pay" },
      { target: "Delicious", meaning: "Tastes great" },
    ],
    quiz: [
      { type: "mc", q: "What does 'The bill, please' mean?", options: ["List of dishes", "Ordering a dish", "Asking to pay", "Tastes great"], a: 2 },
      { type: "fill", q: "How do you say 'Tastes great' in English?", a: "Delicious" },
      { type: "mc", q: "Which phrase means 'List of dishes'?", options: ["Menu", "I'll have this", "The bill, please", "Delicious"], a: 0 },
    ],
  },
  travel: {
    intro: "Key words for airports and train stations.",
    examples: [
      { target: "Airport", meaning: "Place planes depart from" },
      { target: "Ticket", meaning: "Pass to travel" },
      { target: "Passport", meaning: "Travel ID document" },
      { target: "Train station", meaning: "Place trains depart from" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Passport' mean?", options: ["Place planes depart from", "Pass to travel", "Travel ID document", "Place trains depart from"], a: 2 },
      { type: "fill", q: "How do you say 'Pass to travel' in English?", a: "Ticket" },
      { type: "mc", q: "Which word means 'Place trains depart from'?", options: ["Airport", "Ticket", "Passport", "Train station"], a: 3 },
    ],
  },
  work: {
    intro: "Talk about your job and workplace.",
    examples: [
      { target: "Meeting", meaning: "A work gathering" },
      { target: "Deadline", meaning: "Due date" },
      { target: "Colleague", meaning: "Co-worker" },
      { target: "Office", meaning: "Workplace" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Deadline' mean?", options: ["A work gathering", "Due date", "Co-worker", "Workplace"], a: 1 },
      { type: "fill", q: "How do you say 'Co-worker' in English?", a: "Colleague" },
      { type: "mc", q: "Which word means 'A work gathering'?", options: ["Meeting", "Deadline", "Colleague", "Office"], a: 0 },
    ],
  },
  emotions: {
    intro: "Describe how you feel.",
    examples: [
      { target: "Happy", meaning: "Feeling joy" },
      { target: "Sad", meaning: "Feeling down" },
      { target: "Tired", meaning: "Needing rest" },
      { target: "Excited", meaning: "Feeling enthusiastic" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Tired' mean?", options: ["Feeling joy", "Feeling down", "Needing rest", "Feeling enthusiastic"], a: 2 },
      { type: "fill", q: "How do you say 'Feeling enthusiastic' in English?", a: "Excited" },
      { type: "mc", q: "Which word means 'Feeling joy'?", options: ["Happy", "Sad", "Tired", "Excited"], a: 0 },
    ],
  },
  technology: {
    intro: "Learn common phone and internet vocabulary.",
    examples: [
      { target: "Phone", meaning: "Device for calls" },
      { target: "Internet", meaning: "Global network" },
      { target: "Password", meaning: "Secret access code" },
      { target: "Battery", meaning: "Stores power" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Password' mean?", options: ["Device for calls", "Global network", "Secret access code", "Stores power"], a: 2 },
      { type: "fill", q: "How do you say 'Stores power' in English?", a: "Battery" },
      { type: "mc", q: "Which word means 'Global network'?", options: ["Phone", "Internet", "Password", "Battery"], a: 1 },
    ],
  },
  home: {
    intro: "Learn common room and furniture words.",
    examples: [
      { target: "Kitchen", meaning: "Room for cooking" },
      { target: "Bedroom", meaning: "Room for sleeping" },
      { target: "Table", meaning: "Furniture to eat/work on" },
      { target: "Chair", meaning: "Furniture for sitting" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Bedroom' mean?", options: ["Room for cooking", "Room for sleeping", "Furniture to eat/work on", "Furniture for sitting"], a: 1 },
      { type: "fill", q: "How do you say 'Furniture for sitting' in English?", a: "Chair" },
      { type: "mc", q: "Which word means 'Room for cooking'?", options: ["Kitchen", "Bedroom", "Table", "Chair"], a: 0 },
    ],
  },
  opinions: {
    intro: "Learn phrases for sharing your point of view.",
    examples: [
      { target: "I think", meaning: "Introducing an opinion" },
      { target: "I agree", meaning: "Sharing the same view" },
      { target: "I disagree", meaning: "Having a different view" },
      { target: "In my opinion", meaning: "Introducing a personal view" },
    ],
    quiz: [
      { type: "mc", q: "What does 'I disagree' mean?", options: ["Introducing an opinion", "Sharing the same view", "Having a different view", "Introducing a personal view"], a: 2 },
      { type: "fill", q: "How do you say 'Sharing the same view' in English?", a: "I agree" },
      { type: "mc", q: "Which phrase means 'Introducing an opinion'?", options: ["I think", "I agree", "I disagree", "In my opinion"], a: 0 },
    ],
  },
  past_tense: {
    intro: "Talk about things that already happened.",
    examples: [
      { target: "Yesterday", meaning: "The day before today" },
      { target: "I went", meaning: "Past of 'I go'" },
      { target: "I ate", meaning: "Past of 'I eat'" },
      { target: "Last week", meaning: "The week before this one" },
    ],
    quiz: [
      { type: "mc", q: "What does 'I went' mean?", options: ["The day before today", "Past of 'I go'", "Past of 'I eat'", "The week before this one"], a: 1 },
      { type: "fill", q: "How do you say 'Past of I eat' in English?", a: "I ate" },
      { type: "mc", q: "Which phrase means 'The day before today'?", options: ["Yesterday", "I went", "I ate", "Last week"], a: 0 },
    ],
  },
  future_plans: {
    intro: "Talk about plans and future events.",
    examples: [
      { target: "Tomorrow", meaning: "The day after today" },
      { target: "I will go", meaning: "Future of 'I go'" },
      { target: "Next year", meaning: "The year after this one" },
      { target: "I'm planning to", meaning: "Expressing intent" },
    ],
    quiz: [
      { type: "mc", q: "What does 'I will go' mean?", options: ["The day after today", "Future of 'I go'", "The year after this one", "Expressing intent"], a: 1 },
      { type: "fill", q: "How do you say 'Expressing intent' in English?", a: "I'm planning to" },
      { type: "mc", q: "Which phrase means 'The day after today'?", options: ["Tomorrow", "I will go", "Next year", "I'm planning to"], a: 0 },
    ],
  },
  socializing: {
    intro: "Casual phrases for small talk with friends.",
    examples: [
      { target: "How's it going?", meaning: "Casual greeting" },
      { target: "Long time no see", meaning: "Said after a while apart" },
      { target: "Let's meet up", meaning: "Suggesting to meet" },
      { target: "Nice to see you", meaning: "Friendly greeting" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Long time no see' mean?", options: ["Casual greeting", "Said after a while apart", "Suggesting to meet", "Friendly greeting"], a: 1 },
      { type: "fill", q: "How do you say 'Suggesting to meet' in English?", a: "Let's meet up" },
      { type: "mc", q: "Which phrase is a casual greeting?", options: ["How's it going?", "Long time no see", "Let's meet up", "Nice to see you"], a: 0 },
    ],
  },
  negotiating: {
    intro: "Bargain and negotiate prices politely.",
    examples: [
      { target: "Can you lower the price?", meaning: "Asking for a discount" },
      { target: "That's too expensive", meaning: "Complaining about price" },
      { target: "Final offer", meaning: "Last price offered" },
      { target: "Deal", meaning: "Agreement reached" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Final offer' mean?", options: ["Asking for a discount", "Complaining about price", "Last price offered", "Agreement reached"], a: 2 },
      { type: "fill", q: "How do you say 'Agreement reached' in English?", a: "Deal" },
      { type: "mc", q: "Which phrase means 'Asking for a discount'?", options: ["Can you lower the price?", "That's too expensive", "Final offer", "Deal"], a: 0 },
    ],
  },
  news_media: {
    intro: "Vocabulary for reading and discussing the news.",
    examples: [
      { target: "News", meaning: "Recent information" },
      { target: "Newspaper", meaning: "Printed news publication" },
      { target: "According to", meaning: "Citing a source" },
      { target: "Breaking news", meaning: "Urgent new report" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Breaking news' mean?", options: ["Recent information", "Printed news publication", "Citing a source", "Urgent new report"], a: 3 },
      { type: "fill", q: "How do you say 'Citing a source' in English?", a: "According to" },
      { type: "mc", q: "Which word means 'Printed news publication'?", options: ["News", "Newspaper", "According to", "Breaking news"], a: 1 },
    ],
  },
  business: {
    intro: "Formal vocabulary for business settings.",
    examples: [
      { target: "Contract", meaning: "A legal agreement" },
      { target: "Meeting", meaning: "A business gathering" },
      { target: "Deadline", meaning: "Due date" },
      { target: "Invoice", meaning: "A bill for payment" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Invoice' mean?", options: ["A legal agreement", "A business gathering", "Due date", "A bill for payment"], a: 3 },
      { type: "fill", q: "How do you say 'A legal agreement' in English?", a: "Contract" },
      { type: "mc", q: "Which word means 'Due date'?", options: ["Contract", "Meeting", "Deadline", "Invoice"], a: 2 },
    ],
  },
  idioms: {
    intro: "Learn common idiomatic expressions.",
    examples: [
      { target: "Break the ice", meaning: "Start a conversation easily" },
      { target: "Piece of cake", meaning: "Something very easy" },
      { target: "Time flies", meaning: "Time passes quickly" },
      { target: "Once in a while", meaning: "Occasionally" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Piece of cake' mean?", options: ["Start a conversation easily", "Something very easy", "Time passes quickly", "Occasionally"], a: 1 },
      { type: "fill", q: "How do you say 'Occasionally' in English?", a: "Once in a while" },
      { type: "mc", q: "Which idiom means 'Time passes quickly'?", options: ["Break the ice", "Piece of cake", "Time flies", "Once in a while"], a: 2 },
    ],
  },
  debate: {
    intro: "Phrases for debating and persuading others.",
    examples: [
      { target: "I strongly believe", meaning: "Stating a firm opinion" },
      { target: "On the other hand", meaning: "Presenting a contrast" },
      { target: "Evidence shows", meaning: "Citing proof" },
      { target: "To conclude", meaning: "Summarizing an argument" },
    ],
    quiz: [
      { type: "mc", q: "What does 'On the other hand' mean?", options: ["Stating a firm opinion", "Presenting a contrast", "Citing proof", "Summarizing an argument"], a: 1 },
      { type: "fill", q: "How do you say 'Summarizing an argument' in English?", a: "To conclude" },
      { type: "mc", q: "Which phrase means 'Citing proof'?", options: ["I strongly believe", "On the other hand", "Evidence shows", "To conclude"], a: 2 },
    ],
  },
  culture: {
    intro: "Vocabulary about traditions and heritage.",
    examples: [
      { target: "Tradition", meaning: "A long-held custom" },
      { target: "Festival", meaning: "A celebration event" },
      { target: "Custom", meaning: "A usual practice" },
      { target: "Heritage", meaning: "Inherited culture" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Festival' mean?", options: ["A long-held custom", "A celebration event", "A usual practice", "Inherited culture"], a: 1 },
      { type: "fill", q: "How do you say 'Inherited culture' in English?", a: "Heritage" },
      { type: "mc", q: "Which word means 'A usual practice'?", options: ["Tradition", "Festival", "Custom", "Heritage"], a: 2 },
    ],
  },
  formal_writing: {
    intro: "Phrases for writing formal letters and emails.",
    examples: [
      { target: "Dear Sir or Madam", meaning: "Formal letter opening" },
      { target: "Sincerely", meaning: "Formal letter closing" },
      { target: "I am writing to", meaning: "Stating the letter's purpose" },
      { target: "Please find attached", meaning: "Referring to an attachment" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Sincerely' mean?", options: ["Formal letter opening", "Formal letter closing", "Stating the letter's purpose", "Referring to an attachment"], a: 1 },
      { type: "fill", q: "How do you say 'Formal letter opening' in English?", a: "Dear Sir or Madam" },
      { type: "mc", q: "Which phrase refers to an attachment?", options: ["Dear Sir or Madam", "Sincerely", "I am writing to", "Please find attached"], a: 3 },
    ],
  },
  advanced_conversation: {
    intro: "Nuanced phrases for advanced, fluent conversation.",
    examples: [
      { target: "Nuance", meaning: "A subtle difference" },
      { target: "In other words", meaning: "Rephrasing something" },
      { target: "That being said", meaning: "Adding a contrasting point" },
      { target: "To elaborate", meaning: "Explaining in more detail" },
    ],
    quiz: [
      { type: "mc", q: "What does 'Nuance' mean?", options: ["A subtle difference", "Rephrasing something", "Adding a contrasting point", "Explaining in more detail"], a: 0 },
      { type: "fill", q: "How do you say 'Explaining in more detail' in English?", a: "To elaborate" },
      { type: "mc", q: "Which phrase means 'Adding a contrasting point'?", options: ["Nuance", "In other words", "That being said", "To elaborate"], a: 2 },
    ],
  },
};

export default EN;
