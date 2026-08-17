import Link from "next/link"

import { buttonClassName } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section, SectionHeading } from "@/components/ui/section"
import { corporateVisaSection } from "@/lib/home-content"

export function CorporateVisaSection() {
  return (
    <Section aria-labelledby="corporate-visa-heading">
      <Container>
        <div className="max-w-2xl border-l-2 border-foreground pl-6 md:pl-8">
          <SectionHeading
            id="corporate-visa-heading"
            title={corporateVisaSection.title}
            description={corporateVisaSection.description}
            className="mb-6"
          />
          <Link
            href="/corporate-visa"
            className={buttonClassName({ variant: "secondary" })}
          >
            {corporateVisaSection.cta}
          </Link>
        </div>
      </Container>
    </Section>
  )
}
