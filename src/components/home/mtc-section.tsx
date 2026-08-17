import Link from "next/link"

import { Container } from "@/components/ui/container"
import { Section, SectionHeading } from "@/components/ui/section"
import { mtcSection } from "@/lib/home-content"
import { site } from "@/lib/site"

export function MtcSection() {
  return (
    <Section aria-labelledby="mtc-heading">
      <Container>
        <div className="max-w-2xl">
          <SectionHeading
            id="mtc-heading"
            title={mtcSection.title}
            description={mtcSection.description}
            className="mb-6"
          />
          <Link
            href={site.mtc.href}
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            rel="noreferrer"
            target="_blank"
          >
            {mtcSection.cta}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </Container>
    </Section>
  )
}
