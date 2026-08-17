import Link from "next/link"

import { buttonClassName } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { FaqList } from "@/components/ui/faq-list"
import { Reveal } from "@/components/ui/reveal"
import { Section } from "@/components/ui/section"
import { faqItems } from "@/lib/home-content"
import { primaryCta } from "@/lib/site"

export function FaqSection() {
  return (
    <Section className="bg-paper" aria-labelledby="faq-heading">
      <Container className="max-w-3xl">
        <Reveal>
          <p className="mb-3 text-xs font-medium tracking-[0.16em] text-muted uppercase">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="font-serif text-4xl leading-[1.12] tracking-tight md:text-5xl"
          >
            Common{" "}
            <em className="font-normal italic">questions</em>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Straight answers to the questions people ask before handing over a
            passport.
          </p>
        </Reveal>

        <div className="mt-10">
          <FaqList items={faqItems} />
        </div>

        <div className="mt-12">
          <p className="text-sm text-muted">Ready to discuss your destination?</p>
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
