"use client";

import { motion } from "framer-motion";
import { GridBackdrop } from "@/components/effects/GridBackdrop";
import { fadeUp, stagger } from "@/lib/motion";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
};

export function PageHeader({ eyebrow, title, lede }: Props) {
  return (
    <section className="relative overflow-hidden pb-16 pt-[calc(var(--header-h)+5rem)] sm:pb-20 lg:pt-[calc(var(--header-h)+7rem)]">
      <GridBackdrop travel={80} />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[380px] bg-radial-fade" />
      <div className="shell relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp}>
            <span className="eyebrow">{eyebrow}</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="mt-6 text-display">
            {title}
          </motion.h1>
          {lede && (
            <motion.p variants={fadeUp} className="lede mt-6 max-w-2xl">
              {lede}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
