"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { process } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Aircraft } from "@/components/effects/Aircraft";
import { fadeUp, stagger } from "@/lib/motion";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 65%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.6 });
  const fillScale = progress;
  const planeTop = useTransform(progress, [0, 1], ["0%", "100%"]);
  const planeOpacity = useTransform(progress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);

  return (
    <section className="section relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid [background-size:64px_64px] opacity-[0.35] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent_75%)]" />
      <div className="shell relative">
        <SectionHeading
          eyebrow="How it works"
          title={<>Three steps. <span className="text-chartreuse">That&apos;s it.</span></>}
          lede="We've stripped the process back to what matters, so getting a professional website feels effortless."
        />

        <div ref={ref} className="relative mx-auto mt-16 max-w-3xl">
          {/* Track */}
          <div aria-hidden className="absolute left-6 top-2 bottom-2 w-px bg-line sm:left-1/2 sm:-translate-x-1/2" />
          {/* Animated fill */}
          <motion.div
            aria-hidden
            style={{ scaleY: fillScale }}
            className="absolute left-6 top-2 bottom-2 w-px origin-top bg-gradient-to-b from-chartreuse via-chartreuse to-chartreuse/40 sm:left-1/2 sm:-translate-x-1/2"
          />
          {/* Aircraft riding the leading edge */}
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
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-10 sm:space-y-16"
          >
            {process.map((step, i) => {
              const left = i % 2 === 0;
              return (
                <motion.li
                  key={step.step}
                  variants={fadeUp}
                  className="relative sm:grid sm:grid-cols-2 sm:gap-x-14"
                >
                  {/* Node */}
                  <span className="absolute left-6 top-1 z-[5] flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-base sm:left-1/2">
                    <span className="h-2.5 w-2.5 rounded-full bg-chartreuse shadow-[0_0_12px_2px_rgba(182,255,0,0.7)]" />
                  </span>

                  <div className={`pl-16 sm:pl-0 ${left ? "sm:col-start-1 sm:pr-10 sm:text-right" : "sm:col-start-2 sm:pl-10"}`}>
                    <div className="rounded-2xl border border-line bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/15">
                      <span className="font-display text-4xl font-semibold text-chartreuse">{step.step}</span>
                      <h3 className="mt-3 text-xl font-semibold text-ink">{step.title}</h3>
                      <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-secondary">{step.description}</p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
