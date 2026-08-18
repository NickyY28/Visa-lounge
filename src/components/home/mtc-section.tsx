import Link from "next/link"
import Image from "next/image"

import { buttonClassName } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/ui/reveal"
import { mtcSection } from "@/lib/home-content"
import { pageImages } from "@/lib/media"
import { site } from "@/lib/site"

export function MtcSection() {
  return (
    <section
      aria-labelledby="mtc-heading"
      className="relative isolate overflow-hidden"
    >
      <Image
        src={pageImages.mtc.src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-ink/80"
        aria-hidden
      />

      <Container className="relative z-10 py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.18em] text-paper/55 uppercase">
            Related travel
          </p>
          <h2
            id="mtc-heading"
            className="sr-only"
          >
            {mtcSection.title}
          </h2>

          <div className="mt-8 grid items-center gap-8 md:grid-cols-[1fr_auto_1fr] md:gap-10">
            <div className="border-t border-paper/20 pt-6 md:border-t-0 md:border-r md:pt-0 md:pr-10 md:text-right">
              <p className="font-serif text-4xl tracking-tight text-paper md:text-5xl">
                {mtcSection.visaSide.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-paper/70 md:text-base">
                {mtcSection.visaSide.line}
              </p>
            </div>

            <p
              className="font-serif text-5xl text-paper/80 italic md:text-7xl"
              aria-hidden
            >
              ×
            </p>

            <div className="border-t border-paper/20 pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-10">
              <p className="font-serif text-4xl tracking-tight text-paper md:text-5xl">
                {mtcSection.travelSide.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-paper/70 md:text-base">
                {mtcSection.travelSide.line}
              </p>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-paper/65 md:text-base">
            {mtcSection.description}
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href={site.mtc.href}
              className={buttonClassName({ variant: "secondary" })}
              rel="noreferrer"
              target="_blank"
            >
              {mtcSection.cta}
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
