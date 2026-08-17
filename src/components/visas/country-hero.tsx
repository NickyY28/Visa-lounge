import Link from "next/link"

import { CountryBreadcrumb } from "@/components/visas/country-breadcrumb"
import { buttonClassName } from "@/components/ui/button"
import { isoCodeToFlag } from "@/lib/visas"
import { primaryCta } from "@/lib/site"

type CountryHeroProps = {
  name: string
  isoCode: string
  intro: string
}

export function CountryHero({ name, isoCode, intro }: CountryHeroProps) {
  const flag = isoCodeToFlag(isoCode)

  return (
    <header>
      <CountryBreadcrumb countryName={name} />

      <p className="mt-8 text-xs font-medium tracking-[0.16em] text-muted uppercase">
        {isoCode}
        {flag ? (
          <span className="ml-2 font-normal normal-case tracking-normal" aria-hidden>
            {flag}
          </span>
        ) : null}
      </p>

      <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
        {name} visa
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
        {intro}
      </p>

      <Link href={primaryCta.href} className={buttonClassName({ className: "mt-8" })}>
        {primaryCta.label}
      </Link>
    </header>
  )
}
