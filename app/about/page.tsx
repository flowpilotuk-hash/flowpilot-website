import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Principles } from "@/components/home/Principles";
import { FinalCTA } from "@/components/ui/FinalCTA";
import { audiences } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "We started FlowPilot because small businesses deserve professional online tools without expensive agencies, confusing processes or wasted time. Our mission is simple — make it straightforward.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Built for small businesses. On purpose."
        lede="We're not here to dazzle you with jargon or sell you things you don't need. We're here to make getting online genuinely simple — and to keep your business moving long after launch."
      />

      {/* Mission */}
      <section className="section pt-4">
        <div className="shell">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="font-display text-[1.6rem] font-medium leading-[1.35] text-ink sm:text-[2rem] sm:leading-[1.3]">
                We believe small businesses deserve professional online tools without expensive
                agencies, confusing processes or <span className="text-chartreuse">wasted time.</span>
              </p>
            </Reveal>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-secondary">
              <Reveal index={1}>
                <p>
                  Too many talented business owners are let down by their online presence. Not because
                  they don&apos;t care — but because getting a good website has become slow, confusing and
                  expensive. Endless meetings. Quotes full of jargon. Agencies that vanish the moment the
                  invoice is paid.
                </p>
              </Reveal>
              <Reveal index={2}>
                <p>
                  We started FlowPilot to do the opposite. To treat a plumber, a groomer or a solicitor
                  with the same care a big company expects — and to make the whole thing feel calm and
                  straightforward instead of stressful.
                </p>
              </Reveal>
              <Reveal index={3}>
                <p className="font-medium text-ink">
                  Our goal is simple: to make improving your online presence straightforward.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Principles (reused) */}
      <Principles />

      {/* Who we help */}
      <section className="section pt-0">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal><span className="eyebrow mx-auto">Who we help</span></Reveal>
            <Reveal index={1}><h2 className="mt-5 text-display-sm">Local businesses, doing real work.</h2></Reveal>
            <Reveal index={2}>
              <p className="lede mx-auto mt-5">
                The people who keep our towns and high streets running. If you serve a local community,
                you&apos;re exactly who we build for.
              </p>
            </Reveal>
          </div>
          <Reveal index={2} className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-3">
            {audiences.map((a) => (
              <span key={a} className="rounded-full border border-line bg-white/[0.02] px-4 py-2 text-sm font-medium text-ink-secondary">
                {a}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Promise */}
      <section className="section relative overflow-hidden pt-0">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-chartreuse/[0.05] blur-[110px]" />
        <div className="shell relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal><span className="eyebrow mx-auto">Our promise</span></Reveal>
            <Reveal index={1}>
              <p className="mt-7 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
                &ldquo;If we care this much about our own website, imagine how we&apos;ll care about yours.&rdquo;
              </p>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-6 text-lg text-ink-secondary">
                That&apos;s the standard we hold ourselves to — every business, every time.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
