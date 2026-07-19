"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Global motion configuration. `reducedMotion="user"` makes every Framer
 * Motion component honour the OS "reduce motion" setting automatically —
 * transform/position animations are suppressed while essential opacity
 * changes remain, so the site stays calm and accessible.
 */
export function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
