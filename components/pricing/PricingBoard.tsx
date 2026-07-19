"use client";

import { motion } from "framer-motion";
import { packages, comparison, extras, supportPlan } from "@/lib/content";
import { PackageCard } from "@/components/ui/PackageCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { stagger, fadeUp } from "@/lib/motion";

function Cell({ value, featured }: { value: boolean | string; featured?: boolean }) {
  if (value === true) {
    return (
      <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${featured ? "bg-chartreuse text-base" : "bg-chartreuse/10 text-chartreuse"}`}>
        <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" aria-hidden><path d="M4.5 10.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span className="sr-only">Included</span>
      </span>
    );
  }
  if (value === false) {
    return <span className="text-ink-muted/50" aria-hidden>—</span>;
  }
  return <span className="text-sm font-medium text-ink">{value}</span>;
}

export function PricingBoard() {
  const keys = ["essential", "professional", "growth"] as const;

  return (
    <>
      {/* Cards */}
      <section className="pb-8 pt-2 sm:pb-12">
        <div className="shell">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid items-stretch gap-6 lg:grid-cols-3 lg:gap-8"
          >
            {packages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </motion.div>
          <p className="mt-6 text-center text-sm text-ink-muted">
            Every website is quoted individually — you&apos;ll get a clear, fixed price with no surprises.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="section">
        <div className="shell">
          <SectionHeading eyebrow="Compare in detail" title="Everything, side by side." lede="A clear look at what's included in each package." />
          <Reveal index={1} className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[720px] border-separate border-spacing-0 text-left">
              <thead>
                <tr>
                  <th scope="col" className="sticky left-0 z-10 bg-base pb-5 pr-6 align-bottom">
                    <span className="text-sm font-medium text-ink-muted">What&apos;s included</span>
                  </th>
                  {packages.map((pkg) => (
                    <th key={pkg.id} scope="col" className={`px-5 pb-5 align-bottom ${pkg.recommended ? "rounded-t-2xl bg-card" : ""}`}>
                      <div className={pkg.recommended ? "px-2 pt-4" : ""}>
                        {pkg.recommended && (
                          <span className="inline-flex items-center rounded-full bg-chartreuse px-2.5 py-0.5 text-[0.7rem] font-semibold text-base">{pkg.badge}</span>
                        )}
                        <div className="mt-2 text-base font-semibold text-ink">{pkg.name}</div>
                        <div className="mt-1 text-sm text-ink-muted">{pkg.tagline}</div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature}>
                    <th scope="row" className="sticky left-0 z-10 border-t border-line bg-base py-4 pr-6 text-[0.95rem] font-normal text-ink-secondary">{row.feature}</th>
                    {keys.map((k) => (
                      <td key={k} className={`border-t border-line px-5 py-4 text-center ${k === "professional" ? "bg-white/[0.02]" : ""}`}>
                        <Cell value={row[k]} featured={k === "professional"} />
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="sticky left-0 bg-base" />
                  {packages.map((pkg) => (
                    <td key={pkg.id} className={`px-5 pt-6 text-center ${pkg.recommended ? "rounded-b-2xl bg-card pb-6" : ""}`}>
                      <Button href="/contact" variant={pkg.recommended ? "primary" : "secondary"} className="w-full">Get a quote</Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* Extras */}
      <section className="section">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal><span className="eyebrow">Optional extras</span></Reveal>
              <Reveal index={1}><h2 className="mt-5 text-display-sm">Add only what you need.</h2></Reveal>
              <Reveal index={2}><p className="mt-5 text-lg leading-relaxed text-ink-secondary">Every package can be tailored. Add extras now or later — there&apos;s never any pressure to take more than helps your business.</p></Reveal>
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
              {extras.map((extra) => (
                <motion.div key={extra.name} variants={fadeUp} className="flex items-start gap-4 rounded-2xl border border-line bg-white/[0.02] p-6 transition-colors hover:border-white/15">
                  <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-chartreuse shadow-[0_0_10px_1px_rgba(182,255,0,0.6)]" />
                  <div>
                    <h3 className="font-semibold text-ink">{extra.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-secondary">{extra.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support plan */}
      <section className="section" id="support">
        <div className="shell">
          <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-card">
            <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-chartreuse/10 blur-[80px]" />
            <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
              <div>
                <span className="eyebrow">After launch</span>
                <h2 className="mt-5 text-display-sm">{supportPlan.name}</h2>
                <p className="lede mt-4">{supportPlan.intro}</p>
                <p className="mt-6 text-[0.95rem] text-ink-secondary">
                  Simple monthly support with no long contracts. Ask us for details when you get in touch.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/contact">Add ongoing support</Button>
                  <Button href="/how-we-work" variant="secondary">See how it works</Button>
                </div>
              </div>
              <ul className="grid gap-4">
                {supportPlan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-chartreuse text-base">
                      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" aria-hidden><path d="M4.5 10.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <span className="text-[0.95rem] leading-relaxed text-ink-secondary">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
