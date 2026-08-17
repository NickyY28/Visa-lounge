import { CorporateVisaSection } from "@/components/home/corporate-visa-section"
import { DestinationsSection } from "@/components/home/destinations-section"
import { FaqSection } from "@/components/home/faq-section"
import { HeroSection } from "@/components/home/hero-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"
import { MtcSection } from "@/components/home/mtc-section"
import { TravelInsuranceSection } from "@/components/home/travel-insurance-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DestinationsSection />
      <HowItWorksSection />
      <CorporateVisaSection />
      <TravelInsuranceSection />
      <MtcSection />
      <FaqSection />
    </>
  )
}
