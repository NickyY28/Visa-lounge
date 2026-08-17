import type { Metadata } from "next"
import Link from "next/link"

import { ServiceHero } from "@/components/services/service-hero"
import { buttonClassName } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { FaqList } from "@/components/ui/faq-list"
import { travelInsurancePage } from "@/lib/service-content"
import { pageImages } from "@/lib/media"
import { primaryCta, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Travel Insurance",
  description:
    "Travel insurance options available through Visa Lounge. Contact us to discuss cover for your journey.",
  alternates: { canonical: "/travel-insurance" },
}

export default function TravelInsurancePage() {
  return (
    <article>
      <ServiceHero
        eyebrow={travelInsurancePage.eyebrow}
        title={travelInsurancePage.title}
        intro={travelInsurancePage.intro}
        image={pageImages.insurance}
        ctaLabel={travelInsurancePage.cta}
      />

      <Container className="flex flex-col gap-16 py-14 md:py-20">
        <section
          aria-labelledby="insurance-why-heading"
          className="grid gap-10 md:grid-cols-2 md:gap-16"
        >
          <h2
            id="insurance-why-heading"
            className="font-serif text-3xl tracking-tight md:text-4xl"
          >
            {travelInsurancePage.why.title}
          </h2>
          <p className="text-base leading-relaxed text-muted md:text-lg">
            {travelInsurancePage.why.body}
          </p>
        </section>

        <section
          aria-labelledby="insurance-next-heading"
          className="ink-block px-8 py-10 md:px-12 md:py-12"
        >
          <h2
            id="insurance-next-heading"
            className="font-serif text-3xl tracking-tight text-paper md:text-4xl"
          >
            {travelInsurancePage.next.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper/70">
            {travelInsurancePage.next.body}
          </p>
        </section>

        <section aria-labelledby="insurance-notes-heading">
          <h2
            id="insurance-notes-heading"
            className="font-serif text-3xl tracking-tight"
          >
            Important notes
          </h2>
          <ul className="mt-6 max-w-2xl space-y-3">
            {travelInsurancePage.notes.map((note) => (
              <li
                key={note}
                className="border-l-2 border-foreground pl-4 text-sm leading-relaxed text-muted"
              >
                {note}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="insurance-faq-heading">
          <h2
            id="insurance-faq-heading"
            className="font-serif text-3xl tracking-tight"
          >
            Questions
          </h2>
          <div className="mt-6 max-w-3xl">
            <FaqList items={travelInsurancePage.faqs} />
          </div>
        </section>

        <div>
          <p className="text-sm text-muted">
            Share your destination and travel dates, and we will explain what is
            available.
          </p>
          <Link
            href={primaryCta.href}
            className={buttonClassName({ className: "mt-4" })}
          >
            {travelInsurancePage.cta}
          </Link>
          <p className="mt-6 text-xs text-muted">
            {site.name} · {site.location}
          </p>
        </div>
      </Container>
    </article>
  )
}
