"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { fadeUp, stagger } from "@/lib/motion";

export function Problem() {
  const nots = ["No lengthy meetings.", "No confusing jargon.", "No unnecessary sales calls."];

  return (
    <section className="section">
      <div className="shell">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">The honest bit</span>
            </Reveal>
            <Reveal index={1}>
              <h2 className="mt-5 text-display-sm text-gradient">Running a business is hard enough.</h2>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-5 font-display text-2xl font-medium text-chartreuse">
                Your online presence shouldn&apos;t be.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal index={1}>
              <p className="text-lg leading-relaxed text-ink-secondary">
                Whether you&apos;re starting from scratch or improving what you already have, we
                make the process simple — and keep you moving.
              </p>
            </Reveal>
            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="mt-8 space-y-3"
            >
              {nots.map((n) => (
                <motion.li
                  key={n}
                  variants={fadeUp}
                  className="flex items-center gap-3 text-lg text-ink"
                >
                  <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-chartreuse/10 text-chartreuse">
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" aria-hidden>
                      <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                    </svg>
                  </span>
                  {n}
                </motion.li>
              ))}
            </motion.ul>
            <Reveal index={2}>
              <p className="mt-8 text-lg leading-relaxed text-ink-secondary">
                Just straightforward advice and professional websites built around your business.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
