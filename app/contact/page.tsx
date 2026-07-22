import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { brand, hours } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your business and we'll take it from here. Reach FlowPilot by email — everything can begin by email, with no scheduling software and no pressure.",
  alternates: { canonical: "/contact" },
};

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden><rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" /><path d="M4 7l8 5.5L20 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  );
}
function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden><circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.6" /><path d="M12 8v4.2l2.8 1.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  );
}

const reassurance = [
  { title: "No pressure", text: "An enquiry is just a conversation. We'll never chase or hard-sell." },
  { title: "Quick to reply", text: "Most messages answered within one working day, in plain English." },
  { title: "Here for the long run", text: "We aim to be your website partner for years, not a one-off job." },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us about your business."
        lede="We'll take it from here. Send a few details below or email us directly — whatever's easiest. There's no scheduling software to wrestle with and no obligation."
      />

      <section className="pb-24">
        <div className="shell">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Details */}
            <div className="lg:col-span-5">
              <div className="space-y-4">
                <Reveal>
                  <a href={`mailto:${brand.email}`} className="flex items-center gap-4 rounded-2xl border border-line bg-white/[0.02] p-5 transition-colors hover:border-white/15">
                    <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-line bg-base text-chartreuse"><MailIcon /></span>
                    <span>
                      <span className="block text-sm text-ink-muted">Email us</span>
                      <span className="block font-medium text-ink">{brand.email}</span>
                    </span>
                  </a>
                </Reveal>
                <Reveal index={1}>
                  <div className="flex items-center gap-4 rounded-2xl border border-line bg-white/[0.02] p-5">
                    <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-line bg-base text-chartreuse"><ClockIcon /></span>
                    <span>
                      <span className="block text-sm text-ink-muted">Typical reply time</span>
                      <span className="block font-medium text-ink">Within one working day</span>
                    </span>
                  </div>
                </Reveal>
              </div>

              <Reveal index={2} className="mt-6 rounded-2xl border border-line bg-white/[0.02] p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-chartreuse/10 text-chartreuse"><ClockIcon /></span>
                  <h2 className="font-semibold text-ink">Business hours</h2>
                </div>
                <dl className="mt-5 divide-y divide-line">
                  {hours.map((h) => (
                    <div key={h.day} className="flex items-center justify-between py-2.5 text-[0.95rem]">
                      <dt className="text-ink-secondary">{h.day}</dt>
                      <dd className="font-medium text-ink">{h.time}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  We reply to most emails within one working day. Everything can begin by email — no
                  calls required unless you&apos;d prefer one.
                </p>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal index={1} className="rounded-3xl border border-line bg-card p-6 shadow-card sm:p-8">
                <h2 className="text-xl font-semibold text-ink">Send us a message</h2>
                <p className="mt-2 text-[0.95rem] text-ink-secondary">A few details are all we need to point you in the right direction.</p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>

          {/* Reassurance */}
          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {reassurance.map((p, i) => (
              <Reveal key={p.title} index={i} className="rounded-2xl border border-line bg-white/[0.02] p-6">
                <h3 className="font-semibold text-ink">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-secondary">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
