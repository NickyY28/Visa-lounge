import Link from "next/link"
import Image from "next/image"

import { buttonClassName } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/ui/reveal"
import { corporateVisaSection } from "@/lib/home-content"
import { pageImages } from "@/lib/media"

export function CorporateVisaSection() {
  return (
    <section
      aria-labelledby="corporate-visa-heading"
      className="relative isolate min-h-[34rem] overflow-hidden md:min-h-[40rem]"
    >
      <Image
        src={pageImages.corporate.src}
        alt={pageImages.corporate.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/78 to-ink/25"
        aria-hidden
      />

      <Container className="relative z-10 flex min-h-[34rem] flex-col justify-end py-16 md:min-h-[40rem] md:py-20">
        <Reveal className="max-w-xl">
          <p className="text-xs font-medium tracking-[0.18em] text-paper/60 uppercase">
            For organisations
          </p>
          <h2
            id="corporate-visa-heading"
            className="mt-3 font-serif text-4xl leading-[1.08] tracking-tight text-paper md:text-6xl"
          >
            Corporate visa{" "}
            <em className="font-normal italic">support</em>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-paper/75 md:text-lg">
            {corporateVisaSection.description}
          </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {corporateVisaSection.points.map((point) => (
              <div
                key={point.label}
                className="border-t border-white/20 pt-3"
              >
                <dt className="text-[0.65rem] font-medium tracking-[0.16em] text-paper/50 uppercase">
                  {point.label}
                </dt>
                <dd className="mt-2 text-sm leading-snug text-paper">
                  {point.value}
                </dd>
              </div>
            ))}
          </dl>

          <Link
            href="/corporate-visa"
            className={buttonClassName({
              variant: "secondary",
              className: "mt-8",
            })}
          >
            {corporateVisaSection.cta}
          </Link>
        </Reveal>

        <p className="paper-card mt-8 max-w-xs p-4 font-serif text-lg leading-snug text-ink md:absolute md:right-8 md:bottom-16 md:mt-0 lg:right-12">
          {corporateVisaSection.overlay}
        </p>
      </Container>
    </section>
  )
}
