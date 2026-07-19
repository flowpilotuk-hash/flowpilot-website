"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { journey } from "@/lib/content";
import { Aircraft } from "@/components/effects/Aircraft";
import { fadeUp, stagger } from "@/lib/motion";

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 26, mass: 0.6 });
  const planeTop = useTransform(progress, [0, 1], ["0%", "100%"]);
  const planeOpacity = useTransform(progress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="relative mx-auto mt-16 max-w-3xl">
      <div aria-hidden className="absolute left-6 top-2 bottom-2 w-px bg-line sm:left-1/2 sm:-translate-x-1/2" />
      <motion.div
        aria-hidden
        style={{ scaleY: progress }}
        className="absolute left-6 top-2 bottom-2 w-px origin-top bg-gradient-to-b from-chartreuse to-chartreuse/40 sm:left-1/2 sm:-translate-x-1/2"
      />
      <motion.div
        aria-hidden
        style={{ top: planeTop, opacity: planeOpacity }}
        className="absolute left-6 z-10 -translate-x-1/2 -translate-y-1/2 text-chartreuse sm:left-1/2"
      >
        <span className="block rotate-[135deg] drop-shadow-[0_0_12px_rgba(182,255,0,0.9)]">
          <Aircraft className="h-6 w-6" />
        </span>
      </motion.div>

      <motion.ol
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-8 sm:space-y-12"
      >
        {journey.map((step, i) => {
          const left = i % 2 === 0;
          return (
            <motion.li key={step.step} variants={fadeUp} className="relative sm:grid sm:grid-cols-2 sm:gap-x-14">
              <span className="absolute left-6 top-2 z-[5] flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-line bg-base font-display text-sm font-semibold text-ink sm:left-1/2">
                {step.step}
              </span>
              <div className={`pl-16 sm:pl-0 ${left ? "sm:col-start-1 sm:pr-12 sm:text-right" : "sm:col-start-2 sm:pl-12"}`}>
                <div className="rounded-2xl border border-line bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/15">
                  <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-secondary">{step.description}</p>
                </div>
              </div>
            </motion.li>
          );
        })}
      </motion.ol>
    </div>
  );
}
