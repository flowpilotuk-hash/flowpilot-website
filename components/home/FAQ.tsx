"use client";

import { faqs, brand } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";

export function FAQ() {
  return (
    <section className="section">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow">Good questions</span>
            </Reveal>
            <Reveal index={1}>
              <h2 className="mt-5 text-display-sm">Frequently asked.</h2>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-5 text-lg leading-relaxed text-ink-secondary">
                Still wondering about something? Email us any time at{" "}
                <a href={`mailto:${brand.email}`} className="link-underline text-ink">
                  {brand.email}
                </a>
                .
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal index={1}>
              <Accordion items={faqs} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
