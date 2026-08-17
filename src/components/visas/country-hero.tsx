import Link from "next/link"

import { CountryBreadcrumb } from "@/components/visas/country-breadcrumb"
import { buttonClassName } from "@/components/ui/button"
import { MediaFrame } from "@/components/ui/media-frame"
import { getDestinationImage } from "@/lib/media"
import { isoCodeToFlag } from "@/lib/visas"
import { primaryCta } from "@/lib/site"

type CountryHeroProps = {
  name: string
  isoCode: string
  intro: string
  slug: string
}

export function CountryHero({ name, isoCode, intro, slug }: CountryHeroProps) {
  const flag = isoCodeToFlag(isoCode)
  const image = getDestinationImage(slug)

  return (
    <header className="grid items-end gap-10 md:grid-cols-12">
      <div className={image ? "md:col-span-5" : "md:col-span-8"}>
        <CountryBreadcrumb countryName={name} />

        <p className="mt-8 text-xs font-medium tracking-[0.16em] text-muted uppercase">
          {isoCode}
          {flag ? (
            <span
              className="ml-2 font-normal normal-case tracking-normal"
              aria-hidden
            >
              {flag}
            </span>
          ) : null}
        </p>

        <h1 className="mt-3 font-serif text-4xl leading-[1.08] tracking-tight text-foreground md:text-6xl">
          {name}{" "}
          <em className="font-normal italic">visa</em>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {intro}
        </p>

        <Link href={primaryCta.href} className={buttonClassName({ className: "mt-8" })}>
          {primaryCta.label}
        </Link>
      </div>

      {image ? (
        <div className="md:col-span-7">
          <MediaFrame
            src={image.src}
            alt={image.alt}
            priority
            className="aspect-[4/3] md:aspect-[5/4]"
            sizes="(max-width: 768px) 100vw, 58vw"
          />
        </div>
      ) : null}
    </header>
  )
}
