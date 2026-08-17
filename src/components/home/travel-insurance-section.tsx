import Link from "next/link"

import { buttonClassName } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section, SectionHeading } from "@/components/ui/section"
import { travelInsuranceSection } from "@/lib/home-content"

export function TravelInsuranceSection() {
  return (
    <Section
      className="border-t border-border bg-surface"
      aria-labelledby="travel-insurance-heading"
    >
      <Container>
        <div className="max-w-2xl border-l-2 border-foreground pl-6 md:pl-8">
          <SectionHeading
            id="travel-insurance-heading"
            title={travelInsuranceSection.title}
            description={travelInsuranceSection.description}
            className="mb-6"
          />
          <Link
            href="/travel-insurance"
            className={buttonClassName({ variant: "secondary" })}
          >
            {travelInsuranceSection.cta}
          </Link>
        </div>
      </Container>
    </Section>
  )
}
