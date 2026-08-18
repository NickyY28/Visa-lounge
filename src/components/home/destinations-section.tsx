import Link from "next/link"
import Image from "next/image"

import { buttonClassName } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/ui/reveal"
import { Section } from "@/components/ui/section"
import {
  destinationsSection,
  placeholderDestinations,
} from "@/lib/home-content"
import { getDestinationImage } from "@/lib/media"
import { isoCodeToFlag } from "@/lib/visas"
import { cn } from "@/lib/utils"

export function DestinationsSection() {
  return (
    <Section aria-labelledby="destinations-heading" className="bg-paper">
      <Container>
        <Reveal className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-medium tracking-[0.16em] text-muted uppercase">
              Destinations
            </p>
            <h2
              id="destinations-heading"
              className="font-serif text-4xl leading-[1.12] tracking-tight md:text-5xl"
            >
              {destinationsSection.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              {destinationsSection.description}
            </p>
          </div>
          <Link
            href="/visas"
            className={buttonClassName({ variant: "secondary" })}
          >
            {destinationsSection.viewAll}
          </Link>
        </Reveal>

        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {placeholderDestinations.map((destination, index) => (
            <li key={destination.slug}>
              <DestinationCard
                name={destination.name}
                slug={destination.slug}
                code={destination.code}
                delay={index * 40}
              />
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted">
          {destinationsSection.cardNote} Destinations shown are representative
          placeholders for layout only. A full supported-country list will be
          published separately.
        </p>
      </Container>
    </Section>
  )
}

function DestinationCard({
  name,
  slug,
  code,
  delay = 0,
}: {
  name: string
  slug: string
  code: string
  delay?: number
}) {
  const image = getDestinationImage(slug)
  const flag = isoCodeToFlag(code)

  return (
    <Reveal delayMs={delay} className="h-full">
      <Link
        href={`/visas/${slug}`}
        className="group block h-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        <article
          className={cn(
            "media-frame relative flex aspect-[3/4] flex-col justify-end overflow-hidden"
          )}
        >
          {image ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover"
            />
          ) : null}
          <span className="media-shade" aria-hidden />

          <div className="relative z-10 p-3 sm:p-4">
            <span
              className="mb-2 inline-flex size-8 items-center justify-center rounded-full bg-white/15 text-base ring-1 ring-white/30 backdrop-blur-sm sm:size-9 sm:text-lg"
              aria-hidden
            >
              {flag}
            </span>
            <h3 className="font-serif text-xl leading-tight tracking-tight text-white uppercase sm:text-2xl">
              {name}
            </h3>
            <dl className="mt-3 grid grid-cols-3 gap-2 border-t border-white/20 pt-3">
              {destinationsSection.cardMeta.map((item) => (
                <div key={item.label}>
                  <dt className="text-[0.6rem] font-medium tracking-[0.12em] text-white/60 uppercase">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-[0.7rem] leading-snug font-medium text-white sm:text-xs">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </article>
      </Link>
    </Reveal>
  )
}
