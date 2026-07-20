// Learning categories, scenarios (with difficulty levels), and fallback content.
// Dynamic AI content is layered on top via api.moduleContent; this data guarantees
// the app is fully functional offline.

export type CategoryKey = "daily" | "travel" | "work" | "school";

export const CATEGORIES = [
  { key: "daily" as CategoryKey, tag: "Daily Life", nameKey: "cat_daily", icon: "sunny", color: "#F472B6" },
  { key: "travel" as CategoryKey, tag: "Travel", nameKey: "cat_travel", icon: "airplane", color: "#60A5FA" },
  { key: "work" as CategoryKey, tag: "Work", nameKey: "cat_work", icon: "briefcase", color: "#A78BFA" },
  { key: "school" as CategoryKey, tag: "School", nameKey: "cat_school", icon: "school", color: "#8B5CF6" },
] as const;

export const getCategory = (key?: string) => CATEGORIES.find((c) => c.key === key) || CATEGORIES[0];

export const SCENARIOS = [
  { key: "cafe",       titleKey: "scn_cafe",       blurbKey: "scn_cafe_b",       icon: "cafe",     tag: "Daily Life", color: "#F472B6", level: 1 },
  { key: "shopping",   titleKey: "scn_shopping",   blurbKey: "scn_shopping_b",   icon: "bag",      tag: "Daily Life", color: "#FBBF24", level: 1 },
  { key: "directions", titleKey: "scn_directions", blurbKey: "scn_directions_b", icon: "navigate", tag: "Travel",     color: "#22D3EE", level: 1 },
  { key: "airport",    titleKey: "scn_airport",    blurbKey: "scn_airport_b",    icon: "airplane", tag: "Travel",     color: "#34D399", level: 2 },
  { key: "hotel",      titleKey: "scn_hotel",      blurbKey: "scn_hotel_b",      icon: "bed",      tag: "Travel",     color: "#60A5FA", level: 2 },
  { key: "classroom",  titleKey: "scn_classroom",  blurbKey: "scn_classroom_b",  icon: "school",   tag: "School",     color: "#8B5CF6", level: 2 },
  { key: "doctor",     titleKey: "scn_doctor",     blurbKey: "scn_doctor_b",     icon: "medkit",   tag: "Daily Life", color: "#FB7185", level: 3 },
  { key: "interview",  titleKey: "scn_interview",  blurbKey: "scn_interview_b",  icon: "briefcase", tag: "Work",      color: "#A78BFA", level: 3 },
] as const;

export type TierContent = { vocab: string[]; phrases: string[] };

// Starter (fallback) learning content per category per difficulty tier (1–3).
export const FALLBACK_CONTENT: Record<CategoryKey, Record<1 | 2 | 3, TierContent>> = {
  daily: {
    1: {
      vocab: ["hello", "please", "thank you", "water", "food", "morning"],
      phrases: ["How are you today?", "I would like a coffee, please.", "How much does this cost?"],
    },
    2: {
      vocab: ["appointment", "neighborhood", "grocery", "schedule", "favorite"],
      phrases: ["Could you recommend a good restaurant nearby?", "I'm looking for the pharmacy.", "What time do you open tomorrow?"],
    },
    3: {
      vocab: ["prescription", "symptom", "insurance", "emergency", "allergy"],
      phrases: ["I've had a headache since yesterday morning.", "Is this covered by my insurance?", "I'm allergic to peanuts — does this contain any?"],
    },
  },
  travel: {
    1: {
      vocab: ["ticket", "map", "left", "right", "station", "taxi"],
      phrases: ["Where is the train station?", "One ticket to the city center, please.", "Can you show me on the map?"],
    },
    2: {
      vocab: ["reservation", "check-in", "luggage", "boarding pass", "customs"],
      phrases: ["I have a reservation under my name.", "What time is check-out?", "My flight was delayed — can you help me?"],
    },
    3: {
      vocab: ["itinerary", "layover", "visa requirements", "refund", "compensation"],
      phrases: ["I'd like to change my itinerary to an earlier flight.", "Am I entitled to compensation for the delay?", "Could you explain the visa requirements for my stay?"],
    },
  },
  work: {
    1: {
      vocab: ["meeting", "email", "deadline", "team", "office"],
      phrases: ["Nice to meet you, I'm the new team member.", "When is the deadline for this task?", "Could you send me that by email?"],
    },
    2: {
      vocab: ["presentation", "feedback", "colleague", "project", "report"],
      phrases: ["I'd like your feedback on my presentation.", "Let's schedule a follow-up meeting.", "The report will be ready by Friday."],
    },
    3: {
      vocab: ["negotiation", "salary", "responsibilities", "promotion", "strategy"],
      phrases: ["I believe my experience justifies a higher salary.", "What would my responsibilities be in this role?", "Let's discuss the long-term strategy for this project."],
    },
  },
  school: {
    1: {
      vocab: ["teacher", "homework", "question", "book", "classroom"],
      phrases: ["May I ask a question?", "I don't understand this word.", "Could you repeat that, please?"],
    },
    2: {
      vocab: ["assignment", "exam", "grade", "lecture", "library"],
      phrases: ["When is the exam scheduled?", "Could you explain this topic again?", "I'd like to borrow this book from the library."],
    },
    3: {
      vocab: ["thesis", "research", "citation", "scholarship", "seminar"],
      phrases: ["My research focuses on language acquisition.", "How should I cite this source?", "I'm applying for a scholarship this semester."],
    },
  },
};
