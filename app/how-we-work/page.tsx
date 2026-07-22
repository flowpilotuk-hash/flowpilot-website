import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Journey } from "@/components/how/Journey";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/ui/FinalCTA";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "A simple, honest process from first email to launch and beyond — discovery, quote, payment, intake, build, launch and ongoing support. Mostly handled by email, around your schedule.",
  alternates: { canonical: "/how-we-work" },
};

const promises = [
  { title: "Mostly by email", text: "Reply whenever it suits you. A quick call is always optional, never required." },
  { title: "Clear timelines", text: "You'll know how long each step takes, and we keep you updated in plain English." },
  { title: "No surprises", text: "Fixed quotes, honest advice and your website, domain and content always yours." },
];

const aftercare = [
  "Updates, changes and content edits handled for you",
  "Hosting, security and backups quietly taken care of",
  "A real person to email whenever you need us",
  "No long contracts — stay because it works",
];

export default function HowWeWorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="How we work"
        title="A simple process, start to finish."
        lede="From your first email to launch day and beyond, here's exactly what to expect. No lengthy meetings, no jargon, no surprises — most of it handled by email, around your schedule."
      />

      {/* Promises */}
      <section className="pb-4">
        <div className="shell">
          <div className="grid gap-4 sm:grid-cols-3">
            {promises.map((p, i) => (
              <Reveal key={p.title} index={i} className="rounded-2xl border border-line bg-white/[0.02] p-6">
                <h2 className="font-semibold text-ink">{p.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-ink-secondary">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="The journey"
            title={<>Seven steps to your <span className="text-chartreuse">new website.</span></>}
            lede="Each stage is designed to save you time and keep things simple."
          />
          <Journey />
        </div>
      </section>

      {/* After launch */}
      <section className="section">
        <div className="shell">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal><span className="eyebrow">And then?</span></Reveal>
              <Reveal index={1}><h2 className="mt-5 text-display-sm">We don&apos;t disappear after launch.</h2></Reveal>
              <Reveal index={2}>
                <p className="lede mt-5">
                  The relationship really begins once your website is live. We stay on hand to make
                  updates, answer questions and keep everything running smoothly — for the years ahead,
                  not just the first week.
                </p>
              </Reveal>
              <Reveal index={3} className="mt-8 flex flex-wrap gap-3">
                <Button href="/packages#support">See ongoing support</Button>
                <Button href="/contact" variant="secondary">Start a conversation</Button>
              </Reveal>
            </div>
            <div className="grid gap-4">
              {aftercare.map((a, i) => (
                <Reveal key={a} index={i} className="flex items-start gap-3 rounded-2xl border border-line bg-white/[0.02] p-5">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-chartreuse text-base">
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" aria-hidden><path d="M4.5 10.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <span className="text-[0.95rem] leading-relaxed text-ink-secondary">{a}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
