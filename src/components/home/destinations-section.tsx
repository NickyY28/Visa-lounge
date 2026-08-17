import Link from "next/link"

import { buttonClassName } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section, SectionHeading } from "@/components/ui/section"
import {
  destinationsSection,
  placeholderDestinations,
} from "@/lib/home-content"

export function DestinationsSection() {
  return (
    <Section aria-labelledby="destinations-heading">
      <Container>
        <SectionHeading
          id="destinations-heading"
          title={destinationsSection.title}
          description={destinationsSection.description}
        />

        <ul className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {placeholderDestinations.map((destination) => (
            <li key={destination.slug}>
              <Link
                href={`/visas/${destination.slug}`}
                className="group flex h-full flex-col justify-between bg-surface px-5 py-5 transition-colors duration-150 hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring"
              >
                <span
                  className="text-xs font-medium tracking-widest text-muted uppercase"
                  aria-hidden
                >
                  {destination.code}
                </span>
                <span className="mt-8 font-serif text-xl tracking-tight text-foreground group-hover:underline group-hover:underline-offset-4">
                  {destination.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted">
          Destinations shown are representative placeholders for layout only.
          A full supported-country list will be published separately.
        </p>

        <div className="mt-8">
          <Link
            href="/visas"
            className={buttonClassName({ variant: "secondary" })}
          >
            {destinationsSection.viewAll}
          </Link>
        </div>
      </Container>
    </Section>
  )
}
