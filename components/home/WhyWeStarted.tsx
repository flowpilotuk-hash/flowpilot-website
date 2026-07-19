"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeUp, stagger } from "@/lib/motion";

export function WhyWeStarted() {
  return (
    <section className="section relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-chartreuse/[0.04] blur-[120px]" />
      <div className="shell relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <span className="eyebrow">Why we started</span>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-7 font-display text-[1.75rem] font-medium leading-[1.3] text-ink sm:text-4xl sm:leading-[1.25]"
          >
            We believe small businesses deserve professional online tools without expensive
            agencies, confusing processes or{" "}
            <span className="text-chartreuse">wasted time.</span>
          </motion.p>
          <motion.p variants={fadeUp} className="mt-8 text-lg text-ink-secondary">
            Our goal is simple: to make improving your online presence straightforward.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex justify-center">
            <Button href="/about" variant="secondary">
              Read our story
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
