import { Hero } from "@/components/home/Hero";
import { Problem } from "@/components/home/Problem";
import { Packages } from "@/components/home/Packages";
import { Process } from "@/components/home/Process";
import { WhyWeStarted } from "@/components/home/WhyWeStarted";
import { Principles } from "@/components/home/Principles";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/ui/FinalCTA";
import type { Metadata } from "next";
import { brand, faqs } from "@/lib/content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: brand.legalName,
  description: brand.description,
  url: brand.url,
  email: brand.email,
  areaServed: "GB",
  priceRange: "££",
  openingHours: "Mo-Fr 09:00-17:00",
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Hero />
      <Problem />
      <Packages />
      <Process />
      <WhyWeStarted />
      <Principles />
      <FAQ />
      <FinalCTA />
    </>
  );
}
