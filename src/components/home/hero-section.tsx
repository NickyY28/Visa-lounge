import Link from "next/link"

import { HeroSearch } from "@/components/home/hero-search"
import { buttonClassName } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { heroContent } from "@/lib/home-content"
import { primaryCta } from "@/lib/site"

export function HeroSection() {
  return (
    <section className="border-b border-border bg-surface">
      <Container className="py-16 md:py-24 lg:py-28">
        <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
          {heroContent.eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.12] tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]">
          {heroContent.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {heroContent.supporting}
        </p>

        <HeroSearch />

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={primaryCta.href}
            className={buttonClassName({ size: "md" })}
          >
            {primaryCta.label}
          </Link>
          <Link
            href="/visas"
            className={buttonClassName({ variant: "secondary", size: "md" })}
          >
            {heroContent.exploreVisas}
          </Link>
        </div>
      </Container>
    </section>
  )
}
