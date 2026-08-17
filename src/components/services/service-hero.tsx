import Link from "next/link"

import { buttonClassName } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { MediaFrame } from "@/components/ui/media-frame"
import { primaryCta } from "@/lib/site"

type ServiceHeroProps = {
  eyebrow: string
  title: string
  intro: string
  image: { src: string; alt: string }
  ctaLabel: string
}

export function ServiceHero({
  eyebrow,
  title,
  intro,
  image,
  ctaLabel,
}: ServiceHeroProps) {
  return (
    <header className="bg-paper">
      <Container className="grid items-center gap-10 py-14 md:grid-cols-12 md:gap-16 md:py-20">
        <div className="md:col-span-5">
          <p className="reveal text-xs font-medium tracking-[0.18em] text-muted uppercase">
            {eyebrow}
          </p>
          <h1 className="reveal reveal-delay-1 mt-4 max-w-xl font-serif text-4xl leading-[1.08] tracking-tight md:text-6xl">
            {title}
          </h1>
          <p className="reveal reveal-delay-2 mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            {intro}
          </p>
          <Link
            href={primaryCta.href}
            className={buttonClassName({ className: "reveal reveal-delay-3 mt-8" })}
          >
            {ctaLabel}
          </Link>
        </div>
        <div className="reveal reveal-delay-2 md:col-span-7">
          <MediaFrame
            src={image.src}
            alt={image.alt}
            priority
            className="aspect-[4/3] md:aspect-[5/4]"
            sizes="(max-width: 768px) 100vw, 58vw"
          />
        </div>
      </Container>
    </header>
  )
}
