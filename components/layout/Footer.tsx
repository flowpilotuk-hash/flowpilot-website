"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { brand, nav, hours } from "@/lib/content";
import { Aircraft } from "@/components/effects/Aircraft";
import { useIdle } from "@/lib/hooks";

export function Footer() {
  const idle = useIdle(7000);
  const year = 2026;

  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface">
      {/* Idle easter-egg: a small aircraft drifts across the footer. */}
      <AnimatePresence>
        {idle && (
          <motion.div
            key="idle-plane"
            aria-hidden
            initial={{ x: "-10vw", opacity: 0 }}
            animate={{ x: "110vw", opacity: [0, 1, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 6, ease: "linear", times: [0, 0.1, 0.9, 1] }}
            className="pointer-events-none absolute top-10 z-10 text-chartreuse/70"
          >
            <Aircraft className="h-5 w-5 drop-shadow-[0_0_10px_rgba(182,255,0,0.6)]" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="shell relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" aria-label={`${brand.name} — home`} className="inline-flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-white/[0.03]">
                <Aircraft className="h-4 w-4 text-chartreuse" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-ink">
                Flow<span className="text-chartreuse">Pilot</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-ink-secondary">
              {brand.description}
            </p>
            <div className="mt-6 flex flex-col gap-2 text-[0.95rem]">
              <a href={`mailto:${brand.email}`} className="link-underline w-fit text-ink-secondary">
                {brand.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-8">
            <h2 className="overline">Pages</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {[{ label: "Home", href: "/" }, ...nav].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[0.95rem] text-ink-secondary transition-colors hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="overline">Hours</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {hours.map((h) => (
                <li key={h.day} className="text-[0.95rem] text-ink-muted">
                  <span className="block text-ink-secondary">{h.day}</span>
                  {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-sm text-ink-muted sm:flex-row sm:items-center">
          <p>© {year} {brand.legalName}. All rights reserved.</p>
          <p className="inline-flex items-center gap-2">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-chartreuse shadow-[0_0_10px_1px_rgba(182,255,0,0.7)]" />
            Built and looked after in the UK.
          </p>
        </div>
      </div>
    </footer>
  );
}
