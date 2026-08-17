import Link from "next/link"
import Image from "next/image"

import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/ui/reveal"
import { mtcSection } from "@/lib/home-content"
import { pageImages } from "@/lib/media"
import { site } from "@/lib/site"

export function MtcSection() {
  return (
    <section
      aria-labelledby="mtc-heading"
      className="relative isolate min-h-[30rem] overflow-hidden md:min-h-[36rem]"
    >
      <Image
        src={pageImages.mtc.src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/30"
        aria-hidden
      />
      <Container className="relative z-10 flex min-h-[30rem] flex-col justify-end py-16 md:min-h-[36rem] md:py-20">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.18em] text-paper/60 uppercase">
            Related travel
          </p>
          <h2
            id="mtc-heading"
            className="mt-3 max-w-2xl font-serif text-4xl leading-[1.08] tracking-tight text-paper md:text-6xl"
          >
            Visa Lounge{" "}
            <em className="font-normal italic">×</em> My Travel Company
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-paper/75 md:text-lg">
            {mtcSection.description}
          </p>
          <Link
            href={site.mtc.href}
            className="mt-8 inline-flex w-fit items-center gap-3 text-sm font-medium text-paper"
            rel="noreferrer"
            target="_blank"
          >
            {mtcSection.cta}
            <span
              className="inline-flex size-9 items-center justify-center rounded-full border border-paper/30"
              aria-hidden
            >
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  )
}
