import type { Metadata } from "next"
import Link from "next/link"

import { ServiceHero } from "@/components/services/service-hero"
import { buttonClassName } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { FaqList } from "@/components/ui/faq-list"
import { corporateVisaPage } from "@/lib/service-content"
import { pageImages } from "@/lib/media"
import { howItWorksSection } from "@/lib/home-content"
import { primaryCta, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Corporate Visa",
  description:
    "Visa assistance for business travellers and organisations. Contact Visa Lounge to discuss your requirements.",
  alternates: { canonical: "/corporate-visa" },
}

export default function CorporateVisaPage() {
  return (
    <article>
      <ServiceHero
        eyebrow={corporateVisaPage.eyebrow}
        title={corporateVisaPage.title}
        intro={corporateVisaPage.intro}
        image={pageImages.corporate}
        ctaLabel={corporateVisaPage.cta}
      />

      <Container className="flex flex-col gap-16 py-14 md:py-20">
        <section aria-labelledby="corporate-who-heading">
          <h2
            id="corporate-who-heading"
            className="font-serif text-3xl tracking-tight"
          >
            {corporateVisaPage.who.title}
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {corporateVisaPage.who.items.map((item) => (
              <li
                key={item.title}
                className="paper-card p-6"
              >
                <h3 className="text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="corporate-how-heading">
          <h2
            id="corporate-how-heading"
            className="font-serif text-3xl tracking-tight"
          >
            {corporateVisaPage.how.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {corporateVisaPage.how.body}
          </p>
          <ol className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {howItWorksSection.steps.map((step, index) => (
              <li
                key={step.title}
                className="paper-card p-5"
              >
                <span
                  className="font-serif text-3xl text-foreground/25 tabular-nums"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-sm font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="corporate-notes-heading">
          <h2
            id="corporate-notes-heading"
            className="font-serif text-3xl tracking-tight"
          >
            Important notes
          </h2>
          <ul className="mt-6 max-w-2xl space-y-3">
            {corporateVisaPage.notes.map((note) => (
              <li
                key={note}
                className="border-l-2 border-foreground pl-4 text-sm leading-relaxed text-muted"
              >
                {note}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="corporate-faq-heading">
          <h2
            id="corporate-faq-heading"
            className="font-serif text-3xl tracking-tight"
          >
            Questions
          </h2>
          <div className="mt-6 max-w-3xl">
            <FaqList items={corporateVisaPage.faqs} />
          </div>
        </section>

        <div>
          <p className="text-sm text-muted">
            Tell us about the travellers and the destination.
          </p>
          <Link
            href={primaryCta.href}
            className={buttonClassName({ className: "mt-4" })}
          >
            {corporateVisaPage.cta}
          </Link>
          <p className="mt-6 text-xs text-muted">
            {site.name} · {site.location}
          </p>
        </div>
      </Container>
    </article>
  )
}
