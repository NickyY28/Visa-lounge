import type { Metadata } from "next"

import { VisaDirectory } from "@/components/visas/visa-directory"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
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
    <Section aria-labelledby="visas-directory-heading" className="bg-paper">
      <Container>
        <p className="mb-3 text-xs font-medium tracking-[0.16em] text-muted uppercase">
          Directory
        </p>
        <h1
          id="visas-directory-heading"
          className="max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight md:text-6xl"
        >
          Visa{" "}
          <em className="font-normal italic">destinations</em>
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          Explore the destinations currently listed by Visa Lounge.
        </p>

        <div className="mt-10">
          <VisaDirectory countries={countries} />
        </div>

        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-muted">
          Destination information is being developed and updated. This list
          reflects countries from the legacy Visa Lounge site and is not a
          final supported-country inventory.
        </p>
      </Container>
    </Section>
  )
}
