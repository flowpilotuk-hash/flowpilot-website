"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** stagger index → delay */
  index?: number;
  variants?: Variants;
  as?: "div" | "li" | "section" | "span";
  once?: boolean;
  amount?: number;
};

/** Scroll-triggered fade/rise. Respects reduced motion via CSS override. */
export function Reveal({
  children,
  className,
  index = 0,
  variants = fadeUp,
  as = "div",
  once = true,
  amount = 0.2,
}: Props) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </MotionTag>
  );
}
