import Image from "next/image"
import Link from "next/link"

import { visaCardMeta } from "@/lib/visas/directory-content"
import { getDestinationImage } from "@/lib/media"
import { isoCodeToFlag } from "@/lib/visas"
import { cn } from "@/lib/utils"

type VisaDestinationCardProps = {
  name: string
  slug: string
  isoCode: string
  footnote?: string
  className?: string
}

export function VisaDestinationCard({
  name,
  slug,
  isoCode,
  footnote,
  className,
}: VisaDestinationCardProps) {
  const image = getDestinationImage(slug)
  const flag = isoCodeToFlag(isoCode)

  return (
    <Link
      href={`/visas/${slug}`}
      className={cn(
        "group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
        className
      )}
    >
      <article className="media-frame relative flex aspect-[3/4] flex-col justify-end overflow-hidden transition-transform duration-300 group-hover:-translate-y-0.5">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 50vw, 20vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className="absolute inset-0 bg-gradient-to-br from-ink-soft via-ink to-ink-soft"
            aria-hidden
          />
        )}
        <span className="media-shade" aria-hidden />

        <div className="relative z-10 flex flex-col items-center px-3 pb-3 text-center sm:px-4 sm:pb-4">
          <span
            className="mb-2 inline-flex size-9 items-center justify-center rounded-full bg-white/15 text-lg ring-1 ring-white/30 backdrop-blur-sm sm:size-10"
            aria-hidden
          >
            {flag}
          </span>
          <p className="font-serif text-lg leading-tight tracking-tight text-white uppercase sm:text-xl">
            {name}
          </p>
          <dl className="mt-3 grid w-full grid-cols-3 gap-1 border-t border-white/20 pt-3">
            {visaCardMeta.map((item) => (
              <div key={item.key}>
                <dt className="text-[0.55rem] font-medium tracking-[0.1em] text-white/55 uppercase sm:text-[0.6rem]">
                  {item.label}
                </dt>
                <dd className="mt-1 text-[0.65rem] leading-snug font-medium text-white sm:text-xs">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </article>
      {footnote ? (
        <p className="mt-2 text-xs leading-relaxed text-muted">{footnote}</p>
      ) : null}
    </Link>
  )
}
