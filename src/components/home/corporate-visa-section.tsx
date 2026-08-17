import Link from "next/link"

import { buttonClassName } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { MediaFrame } from "@/components/ui/media-frame"
import { Reveal } from "@/components/ui/reveal"
import { Section } from "@/components/ui/section"
import { corporateVisaSection } from "@/lib/home-content"
import { pageImages } from "@/lib/media"

export function CorporateVisaSection() {
  return (
    <Section aria-labelledby="corporate-visa-heading" className="bg-paper">
      <Container className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="relative pb-10 md:col-span-7">
          <MediaFrame
            src={pageImages.corporate.src}
            alt={pageImages.corporate.alt}
            className="aspect-[5/4]"
            sizes="(max-width: 768px) 100vw, 58vw"
          />
          <p className="paper-card absolute -bottom-5 left-5 z-10 max-w-[16rem] p-4 font-serif text-lg leading-snug md:left-8 md:text-xl">
            One traveller or several. The same end-to-end process.
          </p>
        </Reveal>
        <Reveal className="md:col-span-5 md:pt-4" delayMs={80}>
          <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
            For organisations
          </p>
          <h2
            id="corporate-visa-heading"
            className="mt-3 font-serif text-4xl leading-[1.12] tracking-tight md:text-5xl"
          >
            {corporateVisaSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {corporateVisaSection.description}
          </p>
          <Link
            href="/corporate-visa"
            className={buttonClassName({ className: "mt-8" })}
          >
            {corporateVisaSection.cta}
          </Link>
        </Reveal>
      </Container>
    </Section>
  )
}
