"use client";

import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  className?: string;
  /** parallax travel in px across the full scroll */
  travel?: number;
  fade?: boolean;
};

/** A faint technical grid that drifts with scroll depth. */
export function GridBackdrop({ className = "", travel = 120, fade = true }: Props) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, travel]);

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <motion.div
        style={{ y }}
        className={`absolute inset-[-20%] bg-grid [background-size:64px_64px] ${
          fade ? "[mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent_75%)]" : ""
        }`}
      />
    </div>
  );
}
