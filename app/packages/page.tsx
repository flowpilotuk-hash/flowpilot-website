import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { PricingBoard } from "@/components/pricing/PricingBoard";
import { FinalCTA } from "@/components/ui/FinalCTA";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Website packages for UK small businesses — Essential, Professional and Business Growth — plus optional extras and a Monthly Business Support Plan. Every website quoted individually.",
};

export default function PackagesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Website packages"
        title="Straightforward packages."
        lede="Three clear options built around what small businesses actually need — with optional extras and ongoing support when you want it. Not sure which fits? We'll recommend one, no pressure."
      />
      <PricingBoard />
      <FinalCTA heading="Not sure which package fits?" sub="Tell us about your business and we'll recommend the right option — in plain English, with no pressure." />
    </>
  );
}
