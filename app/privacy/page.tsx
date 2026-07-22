import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How FlowPilot handles your information — in plain English. We collect only what we need to reply to your enquiry, and we never sell your data.",
  alternates: { canonical: "/privacy" },
};

const updated = "22 July 2026";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-12 text-xl font-semibold text-ink">{children}</h2>;
}

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="Your information, handled honestly."
        lede="No jargon, no dark patterns. Here's exactly what we collect, why, and what we do with it."
      />

      <section className="pb-24">
        <div className="shell">
          <div className="max-w-prose space-y-4 text-[0.975rem] leading-relaxed text-ink-secondary">
            <p className="text-sm text-ink-muted">Last updated: {updated}</p>

            <p>
              This notice explains how {brand.legalName} (&ldquo;FlowPilot&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;) handles personal information for visitors to {brand.url.replace("https://", "")}.
              We keep it short on purpose.
            </p>

            <H2>What we collect</H2>
            <p>
              <strong className="text-ink">When you contact us.</strong> If you use our contact form or
              email us, we receive the details you choose to send — typically your name, email address,
              business name, an optional phone number, and your message. We use these only to reply to you
              and to discuss any work you ask us about.
            </p>
            <p>
              <strong className="text-ink">When you browse.</strong> We use privacy-friendly, cookieless
              analytics to understand which pages are visited and how the site performs. This does not
              identify you personally and does not track you across other websites.
            </p>

            <H2>What we don&apos;t do</H2>
            <p>
              We do not sell your information. We do not share it with advertisers. We do not use
              advertising cookies or cross-site tracking. We ask only for what we genuinely need.
            </p>

            <H2>How long we keep it</H2>
            <p>
              We keep enquiry emails for as long as we&apos;re in contact and for a reasonable period
              afterwards in case you get back in touch. If you&apos;d like us to delete your details,
              just ask and we will.
            </p>

            <H2>Who we use to run the site</H2>
            <p>
              Our website is hosted on Vercel, and enquiries reach us by email (and, where enabled, a
              form-delivery service). These providers process data on our behalf to deliver the site and
              your messages, under their own security and privacy terms.
            </p>

            <H2>Your rights</H2>
            <p>
              Under UK data protection law you can ask us what information we hold about you, ask us to
              correct or delete it, or object to how we use it. To do any of these, just email us — we&apos;ll
              sort it out simply and quickly.
            </p>

            <H2>Contact</H2>
            <p>
              Questions about your privacy? Email{" "}
              <a href={`mailto:${brand.email}`} className="link-underline text-ink">
                {brand.email}
              </a>
              . We&apos;re the data controller for the information described here.
            </p>

            <p className="pt-4 text-sm text-ink-muted">
              If we make material changes to this notice, we&apos;ll update the date above.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
