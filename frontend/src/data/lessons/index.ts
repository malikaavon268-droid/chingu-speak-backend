// Aggregates all per-language offline lesson packs and exposes a single
// lookup API used by app/learn.tsx and app/lesson/[id].tsx. Fully offline —
// no network calls. Falls back to the English pack for any target language
// that doesn't have a dedicated pack yet (e.g. Hindi, Thai, Swedish...).
import { LessonContent, LessonMeta, LESSONS, XP_PER_LESSON, getLessonMeta, lessonsByLevel, TOTAL_LESSONS } from "./meta";
import EN from "./content/en";
import KO from "./content/ko";
import AR from "./content/ar";
import DE from "./content/de";
import ES from "./content/es";
import FR from "./content/fr";
import IT from "./content/it";
import JA from "./content/ja";
import NL from "./content/nl";
import PL from "./content/pl";
import PT from "./content/pt";
import RU from "./content/ru";
import TR from "./content/tr";
import VI from "./content/vi";
import ZH from "./content/zh";

const PACKS: Record<string, Record<string, LessonContent>> = {
  en: EN, ko: KO, ar: AR, de: DE, es: ES, fr: FR, it: IT, ja: JA,
  nl: NL, pl: PL, pt: PT, ru: RU, tr: TR, vi: VI, zh: ZH,
};

export const SUPPORTED_LESSON_LANGS = Object.keys(PACKS);

function baseCode(langCode?: string): string {
  return (langCode || "en").toLowerCase().split("-")[0];
}

/** True if this target language has real, dedicated lesson content. */
export function hasDedicatedPack(langCode?: string): boolean {
  return !!PACKS[baseCode(langCode)];
}

/** Returns the full lesson-content map for a language, or the English fallback pack. */
export function getLangPack(langCode?: string): Record<string, LessonContent> {
  return PACKS[baseCode(langCode)] || PACKS.en;
}

/** Returns a single lesson's content in the target language (or English fallback). */
export function getLessonContent(langCode: string | undefined, lessonId: string): LessonContent {
  const pack = getLangPack(langCode);
  return pack[lessonId] || PACKS.en[lessonId];
}

export { LESSONS, XP_PER_LESSON, getLessonMeta, lessonsByLevel, TOTAL_LESSONS };
export type { LessonMeta, LessonContent };
