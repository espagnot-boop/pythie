import { Hero } from "@/components/landing/hero";
import { SourcesBand } from "@/components/landing/sources-band";
import { BeforeAfterSection } from "@/components/landing/before-after";
import { HowSection } from "@/components/landing/how-section";
import { BentoSection } from "@/components/landing/bento-section";
import { NumbersSection } from "@/components/landing/numbers-section";
import { TrustSection } from "@/components/landing/trust-section";
import { ApiSection } from "@/components/landing/api-section";
import { WaitlistSection } from "@/components/landing/waitlist-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { FaqSection } from "@/components/landing/faq-section";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SourcesBand />
      <BeforeAfterSection />
      <HowSection />
      <BentoSection />
      <NumbersSection />
      <TrustSection />
      <ApiSection />
      <WaitlistSection />
      <PricingSection />
      <FaqSection />
      <FinalCta />
      <Footer />
    </>
  );
}
