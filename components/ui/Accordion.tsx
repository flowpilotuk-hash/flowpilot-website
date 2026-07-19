"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_GENTLE } from "@/lib/motion";

type Item = { q: string; a: string };

export function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="spotlight relative">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="text-lg font-medium text-ink transition-colors">{item.q}</span>
                <span
                  className={`inline-flex h-8 w-8 flex-none items-center justify-center rounded-full border border-line transition-all duration-300 ${
                    isOpen ? "rotate-45 border-chartreuse/40 text-chartreuse" : "text-ink-secondary"
                  }`}
                >
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden>
                    <path d="M10 4.5v11M4.5 10h11" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE_GENTLE }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-12 text-[0.95rem] leading-relaxed text-ink-secondary">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
