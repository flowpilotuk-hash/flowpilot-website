"use client";

import { motion } from "framer-motion";
import { brand } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { ParticleField } from "@/components/effects/ParticleField";
import { fadeUp, stagger } from "@/lib/motion";

type Props = {
  heading?: string;
  sub?: string;
};

export function FinalCTA({
  heading = "Tell us about your business.",
  sub = "We'll take it from here.",
}: Props) {
  return (
    <section className="section relative overflow-hidden">
      <ParticleField className="absolute inset-0 h-full w-full opacity-60" density={0.7} interactive={false} />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-chartreuse/[0.06] blur-[100px]" />

      <div className="shell relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2 variants={fadeUp} className="text-display">
            {heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="lede mx-auto mt-5 max-w-lg">
            {sub}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact" size="lg">
              Start a project
            </Button>
            <Button href="/packages" variant="secondary" size="lg">
              View packages
            </Button>
          </motion.div>
          <motion.p variants={fadeUp} className="mt-6 text-sm text-ink-muted">
            Prefer email?{" "}
            <a href={`mailto:${brand.email}`} className="link-underline text-ink-secondary">
              {brand.email}
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
