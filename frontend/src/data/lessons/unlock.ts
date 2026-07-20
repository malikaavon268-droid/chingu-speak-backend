// Strict-sequential lesson unlocking: lesson N+1 only unlocks once lesson N
// (in curriculum order — level 1..5, order 1..6 within each level) is marked
// done in the local progress store. Fully offline, pure functions only.
import { LESSONS } from "./meta";

export function lessonIndex(id: string): number {
  return LESSONS.findIndex((l) => l.id === id);
}

/** First lesson is always unlocked; every other lesson requires the previous one done. */
export function isLessonUnlocked(id: string, doneIds: string[]): boolean {
  const idx = lessonIndex(id);
  if (idx <= 0) return true;
  const prev = LESSONS[idx - 1];
  return doneIds.includes(prev.id);
}

/** The next lesson the learner should take (first not-yet-done lesson in order), or null if all 30 are done. */
export function getNextLessonId(doneIds: string[]): string | null {
  for (const l of LESSONS) {
    if (!doneIds.includes(l.id)) return l.id;
  }
  return null;
}

export function levelProgress(level: number, doneIds: string[]): { done: number; total: number } {
  const lessons = LESSONS.filter((l) => l.level === level);
  return { done: lessons.filter((l) => doneIds.includes(l.id)).length, total: lessons.length };
}

/** A level is fully finished when every lesson inside it is done. */
export function isLevelComplete(level: number, doneIds: string[]): boolean {
  const { done, total } = levelProgress(level, doneIds);
  return total > 0 && done === total;
}
