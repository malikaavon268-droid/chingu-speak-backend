// Fully offline lesson curriculum metadata — no AI/network calls required.
// 30 lessons total, 6 per skill level (matches src/state/progress.ts levels 1-5).
// Real per-language teaching content lives in ./content/<langCode>.ts.

export type QuizQuestion =
  | { type: "mc"; q: string; options: string[]; a: number }
  | { type: "fill"; q: string; a: string };

export type LessonExample = { target: string; translit?: string; meaning: string };

export type LessonContent = {
  intro: string;
  examples: LessonExample[];
  quiz: QuizQuestion[];
};

export type LessonMeta = {
  id: string;
  level: number; // 1-5
  order: number; // 1-6 within the level
  icon: string; // Ionicons name
  titleEn: string;
};

export const XP_PER_LESSON = 20;

export const LESSONS: LessonMeta[] = [
  // Level 1 — Beginner
  { id: "greetings", level: 1, order: 1, icon: "hand-left", titleEn: "Greetings & Introductions" },
  { id: "numbers", level: 1, order: 2, icon: "calculator", titleEn: "Numbers 0-20" },
  { id: "family", level: 1, order: 3, icon: "people", titleEn: "Family Members" },
  { id: "colors", level: 1, order: 4, icon: "color-palette", titleEn: "Colors" },
  { id: "days", level: 1, order: 5, icon: "calendar", titleEn: "Days of the Week" },
  { id: "food_basics", level: 1, order: 6, icon: "restaurant", titleEn: "Basic Food & Drinks" },

  // Level 2 — Elementary
  { id: "shopping", level: 2, order: 1, icon: "cart", titleEn: "Shopping" },
  { id: "directions", level: 2, order: 2, icon: "navigate", titleEn: "Asking Directions" },
  { id: "time", level: 2, order: 3, icon: "time", titleEn: "Telling Time" },
  { id: "weather", level: 2, order: 4, icon: "partly-sunny", titleEn: "Weather" },
  { id: "hobbies", level: 2, order: 5, icon: "game-controller", titleEn: "Hobbies & Interests" },
  { id: "body_health", level: 2, order: 6, icon: "medkit", titleEn: "Body & Health" },

  // Level 3 — Intermediate
  { id: "restaurant", level: 3, order: 1, icon: "fast-food", titleEn: "At the Restaurant" },
  { id: "travel", level: 3, order: 2, icon: "airplane", titleEn: "Travel & Transportation" },
  { id: "work", level: 3, order: 3, icon: "briefcase", titleEn: "Work & Jobs" },
  { id: "emotions", level: 3, order: 4, icon: "happy", titleEn: "Emotions & Feelings" },
  { id: "technology", level: 3, order: 5, icon: "call", titleEn: "Phone & Technology" },
  { id: "home", level: 3, order: 6, icon: "home", titleEn: "Home & Furniture" },

  // Level 4 — Upper-Intermediate
  { id: "opinions", level: 4, order: 1, icon: "chatbubbles", titleEn: "Sharing Opinions" },
  { id: "past_tense", level: 4, order: 2, icon: "hourglass-outline", titleEn: "Talking About the Past" },
  { id: "future_plans", level: 4, order: 3, icon: "rocket", titleEn: "Future Plans" },
  { id: "socializing", level: 4, order: 4, icon: "people-circle", titleEn: "Socializing & Small Talk" },
  { id: "negotiating", level: 4, order: 5, icon: "pricetags", titleEn: "Negotiating & Bargaining" },
  { id: "news_media", level: 4, order: 6, icon: "newspaper", titleEn: "News & Media" },

  // Level 5 — Advanced
  { id: "business", level: 5, order: 1, icon: "business", titleEn: "Business Communication" },
  { id: "idioms", level: 5, order: 2, icon: "sparkles", titleEn: "Idioms & Expressions" },
  { id: "debate", level: 5, order: 3, icon: "megaphone", titleEn: "Debating & Persuading" },
  { id: "culture", level: 5, order: 4, icon: "globe", titleEn: "Culture & Traditions" },
  { id: "formal_writing", level: 5, order: 5, icon: "document-text", titleEn: "Formal Writing" },
  { id: "advanced_conversation", level: 5, order: 6, icon: "chatbox-ellipses", titleEn: "Advanced Conversation" },
];

export const getLessonMeta = (id?: string) => LESSONS.find((l) => l.id === id) || null;

export const lessonsByLevel = (level: number) =>
  LESSONS.filter((l) => l.level === level).sort((a, b) => a.order - b.order);

export const TOTAL_LESSONS = LESSONS.length;
