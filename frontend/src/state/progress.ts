// Gamified progression store: XP, auto-leveling, and module completion tracking.
// Persisted locally via @/src/utils/storage; mirrors user level into prefs so the
// AI prompts and profile stay in sync.

import React from "react";
import { storage } from "@/src/utils/storage";
import { setLevel } from "@/src/state/prefs";

const XP_KEY = "chingu:xp";
const DONE_KEY = "chingu:done_modules";

export const LEVEL_THRESHOLDS = [0, 60, 150, 280, 450]; // index+1 = level
export const MAX_LEVEL = LEVEL_THRESHOLDS.length;
export const TIER_KEYS = ["tier1", "tier2", "tier3", "tier4", "tier5"] as const;

export function levelForXp(xp: number): number {
  let level = 1;
  for (let i = 1; i < LEVEL_THRESHOLDS.length; i++) {
    if (xp >= LEVEL_THRESHOLDS[i]) level = i + 1;
  }
  return level;
}

export function nextThreshold(level: number): number | null {
  return level >= MAX_LEVEL ? null : LEVEL_THRESHOLDS[level];
}

type ProgressState = { xp: number; done: string[]; level: number; loaded: boolean };

let _state: ProgressState = { xp: 0, done: [], level: 1, loaded: false };
const listeners: Set<() => void> = new Set();
const emit = () => listeners.forEach((l) => l());

let _loading: Promise<void> | null = null;

export function loadProgress(): Promise<void> {
  if (_loading) return _loading;
  _loading = (async () => {
    const [xpRaw, doneRaw] = await Promise.all([
      storage.getItem(XP_KEY, "0"),
      storage.getItem(DONE_KEY, "[]"),
    ]);
    const xp = Math.max(0, parseInt(String(xpRaw || "0"), 10) || 0);
    let done: string[] = [];
    try { done = JSON.parse(String(doneRaw || "[]")) || []; } catch { done = []; }
    _state = { xp, done, level: levelForXp(xp), loaded: true };
    emit();
  })();
  return _loading;
}

export function getProgress(): ProgressState {
  return { ..._state };
}

export function isModuleDone(id: string): boolean {
  return _state.done.includes(id);
}

export type CompletionResult = { awarded: number; leveledUp: boolean; newLevel: number; alreadyDone: boolean };

export async function completeModule(id: string, xpReward: number): Promise<CompletionResult> {
  await loadProgress();
  if (_state.done.includes(id)) {
    return { awarded: 0, leveledUp: false, newLevel: _state.level, alreadyDone: true };
  }
  const prevLevel = _state.level;
  _state.xp += xpReward;
  _state.done = [..._state.done, id];
  _state.level = levelForXp(_state.xp);
  await Promise.all([
    storage.setItem(XP_KEY, String(_state.xp)),
    storage.setItem(DONE_KEY, JSON.stringify(_state.done)),
  ]);
  const leveledUp = _state.level > prevLevel;
  if (leveledUp) {
    // Keep prefs.level (used by AI prompts + profile) in sync with progression.
    setLevel(_state.level);
  }
  emit();
  return { awarded: xpReward, leveledUp, newLevel: _state.level, alreadyDone: false };
}

export function useProgress(): ProgressState {
  const [, force] = React.useReducer((n: number) => n + 1, 0);
  React.useEffect(() => {
    listeners.add(force);
    if (!_state.loaded) loadProgress();
    return () => { listeners.delete(force); };
  }, []);
  return getProgress();
}
