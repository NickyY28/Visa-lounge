import Link from "next/link"

import { buttonClassName } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { MediaFrame } from "@/components/ui/media-frame"
import { Reveal } from "@/components/ui/reveal"
import { Section } from "@/components/ui/section"
import {
  destinationsSection,
  placeholderDestinations,
} from "@/lib/home-content"
import { getDestinationImage } from "@/lib/media"
import { cn } from "@/lib/utils"

export function DestinationsSection() {
  const featured = placeholderDestinations[0]
  const rest = placeholderDestinations.slice(1)

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
          {featured ? (
            <li className="col-span-2 md:row-span-2">
              <DestinationCard
                name={featured.name}
                slug={featured.slug}
                featured
              />
            </li>
          ) : null}
          {rest.map((destination, index) => (
            <li key={destination.slug}>
              <DestinationCard
                name={destination.name}
                slug={destination.slug}
                delay={index * 40}
              />
            </li>
          ))}
          <li>
            <Link
              href="/visas"
              className="group flex aspect-[3/4] h-full flex-col justify-between rounded-[1.25rem] bg-ink p-5 text-paper shadow-[0_28px_64px_-28px_#000] transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="text-[0.7rem] font-medium tracking-[0.16em] text-paper/50 uppercase">
                Directory
              </span>
              <span>
                <span className="block font-serif text-3xl leading-tight">
                  {destinationsSection.viewAll}
                </span>
                <span
                  className="mt-3 inline-flex size-10 items-center justify-center rounded-full border border-paper/25 text-lg transition-colors duration-200 group-hover:bg-paper group-hover:text-ink"
                  aria-hidden
                >
                  →
                </span>
              </span>
            </Link>
          </li>
        </ul>

        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted">
          Destinations shown are representative placeholders for layout only.
          A full supported-country list will be published separately.
        </p>
      </Container>
    </Section>
  )
}

function DestinationCard({
  name,
  slug,
  featured = false,
  delay = 0,
}: {
  name: string
  slug: string
  featured?: boolean
  delay?: number
}) {
  const image = getDestinationImage(slug)

  return (
    <Reveal delayMs={delay} className="h-full">
      <Link
        href={`/visas/${slug}`}
        className={cn(
          "group block h-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        )}
      >
        {image ? (
          <MediaFrame
            src={image.src}
            alt={image.alt}
            caption={name}
            className={featured ? "h-full min-h-[22rem]" : "aspect-[3/4]"}
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 50vw"
                : "(max-width: 640px) 50vw, 25vw"
            }
          />
        ) : (
          <div className="media-frame relative flex aspect-[3/4] h-full flex-col justify-end p-4">
            <span className="relative z-10 font-serif text-xl text-white">
              {name}
            </span>
          </div>
        )}
      </Link>
    </Reveal>
  )
}
