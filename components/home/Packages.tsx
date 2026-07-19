"use client";

import { motion } from "framer-motion";
import { packages } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PackageCard } from "@/components/ui/PackageCard";
import { Button } from "@/components/ui/Button";
import { stagger } from "@/lib/motion";

export function Packages() {
  return (
    <section className="section relative">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />
      <div className="shell">
        <SectionHeading
          eyebrow="Website packages"
          title={<>Three clear options. <span className="text-ink-muted">No guesswork.</span></>}
          lede="Straightforward packages designed around what small businesses actually need. Not sure which fits? We'll happily recommend one."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid items-stretch gap-6 lg:grid-cols-3 lg:gap-8"
        >
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Button href="/packages" variant="ghost">
            Compare packages in full →
          </Button>
        </div>
      </div>
    </section>
  );
}
