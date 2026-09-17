import type { Metadata } from "next"
import { Suspense } from "react"

import { VisaDirectory } from "@/components/visas/visa-directory"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { visaDirectoryPage } from "@/lib/visas/directory-content"
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
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-medium tracking-[0.16em] text-muted uppercase">
            Directory
          </p>
          <h1
            id="visas-directory-heading"
            className="font-serif text-4xl leading-[1.08] tracking-tight md:text-5xl"
          >
            {visaDirectoryPage.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {visaDirectoryPage.description}
          </p>
        </div>

        <div className="mt-10">
          <Suspense fallback={null}>
            <VisaDirectory countries={countries} />
          </Suspense>
        </div>

        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-muted">
          {visaDirectoryPage.disclaimer}
        </p>
      </Container>
    </Section>
  )
}
