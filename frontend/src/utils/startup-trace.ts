import { Platform } from "react-native";

export const STARTUP_BYPASS = process.env.EXPO_PUBLIC_STARTUP_BYPASS === "true";
export const STARTUP_DIAGNOSTICS = process.env.EXPO_PUBLIC_STARTUP_DIAGNOSTICS === "true";

const startedAt = Date.now();
const sessionId = `${startedAt}-${Math.random().toString(36).slice(2, 8)}`;
const entries: string[] = [];
let uploadScheduled = false;
let consoleCaptureInstalled = false;

function formatConsoleValue(value: unknown) {
  if (value instanceof Error) return `${value.name}: ${value.message}`;
  if (typeof value === "string") return value;
  try { return JSON.stringify(value); } catch { return String(value); }
}

function appendConsoleEntry(level: string, values: unknown[]) {
  const elapsed = Date.now() - startedAt;
  entries.push(`[CHINGU_STARTUP +${elapsed}ms] ${level}: ${values.map(formatConsoleValue).join(" ")}`);
  if (entries.length > 100) entries.shift();
}

export function installStartupConsoleCapture() {
  if (!STARTUP_DIAGNOSTICS || consoleCaptureInstalled) return;
  consoleCaptureInstalled = true;
  const originalWarn = console.warn.bind(console);
  const originalError = console.error.bind(console);
  console.warn = (...values: unknown[]) => {
    appendConsoleEntry("WARN", values);
    originalWarn(...values);
  };
  console.error = (...values: unknown[]) => {
    appendConsoleEntry("ERROR", values);
    originalError(...values);
  };

  const errorUtils = (globalThis as typeof globalThis & {
    ErrorUtils?: {
      getGlobalHandler?: () => (error: Error, isFatal?: boolean) => void;
      setGlobalHandler?: (handler: (error: Error, isFatal?: boolean) => void) => void;
    };
  }).ErrorUtils;
  const previousHandler = errorUtils?.getGlobalHandler?.();
  errorUtils?.setGlobalHandler?.((error, isFatal) => {
    appendConsoleEntry(isFatal ? "FATAL" : "UNHANDLED", [error]);
    previousHandler?.(error, isFatal);
  });
}

export function startupTrace(stage: string, details?: Record<string, unknown>) {
  const elapsed = Date.now() - startedAt;
  const suffix = details ? ` ${JSON.stringify(details)}` : "";
  const line = `[CHINGU_STARTUP +${elapsed}ms] ${stage}${suffix}`;
  entries.push(line);
  if (entries.length > 100) entries.shift();
  console.log(line);
}

export function getStartupTraceLines() {
  return [...entries];
}

export function scheduleStartupTraceUpload() {
  if (!STARTUP_DIAGNOSTICS || uploadScheduled) return;
  uploadScheduled = true;
  startupTrace("Diagnostics: upload scheduled");
  const upload = async (checkpoint: string) => {
    const baseUrl = (process.env.EXPO_PUBLIC_BACKEND_URL || "").replace(/\/$/, "");
    if (!baseUrl) return startupTrace("Diagnostics: upload skipped; backend URL missing");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3_000);
    try {
      await fetch(`${baseUrl}/api/startup-diagnostics`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({ session_id: sessionId, platform: Platform.OS, bypass: STARTUP_BYPASS, events: [...entries, `[CHECKPOINT] ${checkpoint}`] }),
      });
      startupTrace("Diagnostics: upload completed", { checkpoint });
    } catch (error) {
      startupTrace("Diagnostics: upload failed", { checkpoint, error: String(error) });
    } finally {
      clearTimeout(timeout);
    }
  };

  setTimeout(() => void upload("1.5s"), 1_500);
  setTimeout(() => void upload("5s"), 5_000);
  setTimeout(() => void upload("9s"), 9_000);
}