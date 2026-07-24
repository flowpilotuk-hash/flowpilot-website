import "server-only";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

/**
 * Lightweight rate limiting for serverless route handlers.
 *
 * - If Upstash Redis is configured (UPSTASH_REDIS_REST_URL/TOKEN), uses a
 *   distributed sliding-window limiter that is correct across every serverless
 *   instance and cold start. This is the recommended production setup.
 * - Otherwise falls back to a per-instance in-memory limiter. This still stops
 *   naive floods and pairs with the honeypot, but is best-effort only because
 *   each serverless instance has its own memory.
 */

const MAX_REQUESTS = 5;
const WINDOW = "10 m" as const;
const WINDOW_MS = 10 * 60 * 1000;

export type RateLimitResult = {
  success: boolean;
  remaining: number;
  /** epoch ms when the window resets */
  reset: number;
};

/* ----------------------------- Upstash path ----------------------------- */
// undefined = not yet resolved, null = not configured, Ratelimit = active.
let upstash: Ratelimit | null | undefined;

function getUpstashLimiter(): Ratelimit | null {
  if (upstash !== undefined) return upstash;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    upstash = null;
    return null;
  }
  upstash = new Ratelimit({
    redis: new Redis({ url, token }),
    limiter: Ratelimit.slidingWindow(MAX_REQUESTS, WINDOW),
    prefix: "flowpilot:contact",
    analytics: false,
  });
  return upstash;
}

/* --------------------------- In-memory fallback -------------------------- */
const memory = new Map<string, number[]>();

function inMemoryLimit(key: string): RateLimitResult {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;
  const recent = (memory.get(key) ?? []).filter((t) => t > windowStart);
  const success = recent.length < MAX_REQUESTS;
  if (success) recent.push(now);
  memory.set(key, recent);

  // Opportunistic cleanup so the map can't grow unbounded on a warm instance.
  if (memory.size > 5000) {
    for (const [k, v] of memory) {
      if (v.every((t) => t <= windowStart)) memory.delete(k);
    }
  }

  return {
    success,
    remaining: Math.max(0, MAX_REQUESTS - recent.length),
    reset: now + WINDOW_MS,
  };
}

/** Rate-limit a contact submission by a stable identifier (usually client IP). */
export async function rateLimitContact(identifier: string): Promise<RateLimitResult> {
  const limiter = getUpstashLimiter();
  if (limiter) {
    const res = await limiter.limit(identifier);
    return { success: res.success, remaining: res.remaining, reset: res.reset };
  }
  return inMemoryLimit(identifier);
}
