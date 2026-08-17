import Link from "next/link"

import { buttonClassName } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { MediaFrame } from "@/components/ui/media-frame"
import { Reveal } from "@/components/ui/reveal"
import { Section } from "@/components/ui/section"
import { travelInsuranceSection } from "@/lib/home-content"
import { pageImages } from "@/lib/media"

export function TravelInsuranceSection() {
  return (
    <Section
      className="bg-paper-deep"
      aria-labelledby="travel-insurance-heading"
    >
      <Container className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
            Alongside the visa
          </p>
          <h2
            id="travel-insurance-heading"
            className="mt-3 font-serif text-4xl leading-[1.12] tracking-tight md:text-5xl"
          >
            Travel{" "}
            <em className="font-normal italic">insurance</em>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {travelInsuranceSection.description}
          </p>
          <Link
            href="/travel-insurance"
            className={buttonClassName({ className: "mt-8" })}
          >
            {travelInsuranceSection.cta}
          </Link>
        </Reveal>
        <Reveal className="relative md:col-span-7" delayMs={80}>
          <div
            className="absolute -inset-5 -z-10 rounded-[2rem] bg-ink/5 md:-inset-7"
            aria-hidden
          />
          <MediaFrame
            src={pageImages.insurance.src}
            alt={pageImages.insurance.alt}
            className="aspect-[5/4] md:translate-x-2 md:translate-y-2"
            sizes="(max-width: 768px) 100vw, 58vw"
          />
        </Reveal>
      </Container>
    </Section>
  )
}
