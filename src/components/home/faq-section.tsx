import Link from "next/link"

import { buttonClassName } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section, SectionHeading } from "@/components/ui/section"
import { faqItems } from "@/lib/home-content"
import { primaryCta } from "@/lib/site"

export function FaqSection() {
  return (
    <Section
      className="border-t border-border bg-surface"
      aria-labelledby="faq-heading"
    >
      <Container className="max-w-3xl">
        <SectionHeading
          id="faq-heading"
          title="Common questions"
          description="Straight answers to the questions people ask before handing over a passport."
        />

        <div className="divide-y divide-border border-y border-border">
          {faqItems.map((item) => (
            <details key={item.q} className="group">
              <summary className="cursor-pointer list-none py-4 pr-4 text-base font-medium tracking-tight text-foreground marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  <span>{item.q}</span>
                  <span
                    className="mt-0.5 shrink-0 text-muted transition-transform duration-150 group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <div className="pb-4 pr-8 text-sm leading-relaxed text-muted">
                {item.a}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-10">
          <p className="text-sm text-muted">
            Ready to discuss your destination?
          </p>
          <Link
            href={primaryCta.href}
            className={buttonClassName({ className: "mt-4" })}
          >
            {primaryCta.label}
          </Link>
        </div>
      </Container>
    </Section>
  )
}
