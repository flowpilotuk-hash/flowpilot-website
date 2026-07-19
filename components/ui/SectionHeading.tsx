"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({ eyebrow, title, lede, align = "center", className = "" }: Props) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <motion.div variants={fadeUp} className={align === "center" ? "flex justify-center" : ""}>
          <span className="eyebrow">{eyebrow}</span>
        </motion.div>
      )}
      <motion.h2 variants={fadeUp} className="mt-5 text-display-sm">
        {title}
      </motion.h2>
      {lede && (
        <motion.p variants={fadeUp} className={`lede mt-5 ${align === "center" ? "mx-auto" : ""}`}>
          {lede}
        </motion.p>
      )}
    </motion.div>
  );
}
