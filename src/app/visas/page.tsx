import type { Metadata } from "next"

import { VisaDirectory } from "@/components/visas/visa-directory"
import { Container } from "@/components/ui/container"
import { Section, SectionHeading } from "@/components/ui/section"
import { getVisaCountries } from "@/lib/visas"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Visa destinations",
  description: `Browse visa destinations listed by ${site.name}.`,
  alternates: { canonical: "/visas" },
}

export default function VisasPage() {
  const countries = getVisaCountries()

  return (
    <Section aria-labelledby="visas-directory-heading">
      <Container>
        <SectionHeading
          id="visas-directory-heading"
          title="Visa destinations"
          description="Explore the destinations currently listed by Visa Lounge."
        />

        <VisaDirectory countries={countries} />

        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-muted">
          Destination information is being developed and updated. This list
          reflects countries from the legacy Visa Lounge site and is not a
          final supported-country inventory.
        </p>
      </Container>
    </Section>
  )
}
