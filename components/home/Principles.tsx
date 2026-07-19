"use client";

import { motion } from "framer-motion";
import { principles } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { fadeUp, stagger } from "@/lib/motion";

const icons = ["clock", "spark", "compass", "handshake"] as const;

function Icon({ name, className }: { name: (typeof icons)[number]; className?: string }) {
  const common = { className, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true } as const;
  switch (name) {
    case "clock":
      return (
        <svg {...common}><path d="M4 8h5M3 12h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><circle cx="14" cy="12" r="7" stroke="currentColor" strokeWidth="1.6" /><path d="M14 8.5V12l2.4 1.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      );
    case "spark":
      return (
        <svg {...common}><path d="M12 3c.5 4 2 5.5 6 6-4 .5-5.5 2-6 6-.5-4-2-5.5-6-6 4-.5 5.5-2 6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
      );
    case "compass":
      return (
        <svg {...common}><circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.6" /><path d="M15 9l-2 5-4 1 2-5 4-1z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
      );
    case "handshake":
      return (
        <svg {...common}><path d="M3 8l3-1 4 3.5 4-3.5 3 1 4 4-2 2-3-2-4 3.5a1.5 1.5 0 01-2 0L6 12l-3 2-2-2 2-4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>
      );
  }
}

export function Principles() {
  return (
    <section className="section">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow">What we stand for</span>
            </Reveal>
            <Reveal index={1}>
              <h2 className="mt-5 text-display-sm">Principles we don&apos;t bend on.</h2>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-5 text-lg leading-relaxed text-ink-secondary">
                Four simple commitments that shape every decision we make — and every website we build.
              </p>
            </Reveal>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 sm:grid-cols-2 lg:col-span-8"
          >
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-line bg-white/[0.02] p-7 transition-colors duration-300 hover:border-white/15"
              >
                {/* Light sweep on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-chartreuse/10 to-transparent transition-transform duration-700 ease-gentle group-hover:translate-x-full"
                />
                <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-base text-chartreuse transition-colors duration-300 group-hover:border-chartreuse/30">
                  <Icon name={icons[i]} className="h-5 w-5" />
                </span>
                <h3 className="relative mt-5 text-lg font-semibold text-ink">{p.title}</h3>
                <p className="relative mt-2 text-[0.95rem] leading-relaxed text-ink-secondary">{p.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
