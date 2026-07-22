import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Aircraft } from "@/components/effects/Aircraft";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-[var(--header-h)]">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid [background-size:64px_64px] opacity-[0.3] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_45%,black,transparent_75%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-2/3 bg-radial-fade" />

      <div className="shell relative z-10">
        <div className="mx-auto max-w-xl text-center">
          <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-white/[0.03] text-chartreuse">
            {/* Aircraft banking off course */}
            <span className="block rotate-[24deg]">
              <Aircraft className="h-6 w-6 drop-shadow-[0_0_12px_rgba(182,255,0,0.7)]" />
            </span>
          </span>

          <p className="mt-8 font-display text-[5rem] font-semibold leading-none tracking-tight text-ink sm:text-[7rem]">
            404
          </p>
          <h1 className="mt-4 text-display-sm">This page has drifted off course.</h1>
          <p className="lede mx-auto mt-5">
            The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href="/" size="lg">
              Back to home
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
