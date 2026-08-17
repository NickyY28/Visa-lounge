import Link from "next/link"

import { HeroSearch } from "@/components/home/hero-search"
import { OrbitingPlane } from "@/components/home/orbiting-plane"
import { buttonClassName } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { heroContent } from "@/lib/home-content"
import { primaryCta } from "@/lib/site"

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-paper">
      <HeroDrafting />

      <Container className="relative z-10 grid items-center gap-8 py-16 md:gap-12 md:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:py-24">
        <div>
          <p className="reveal text-xs font-medium tracking-[0.22em] text-muted uppercase">
            {heroContent.eyebrow}
          </p>

          <div className="mt-5 flex items-center gap-4 sm:gap-8">
            <h1 className="reveal reveal-delay-1 min-w-0 max-w-xl font-serif text-[2.65rem] leading-[0.98] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[4.85rem]">
              {heroContent.headlineLead}{" "}
              <em className="font-normal italic">
                {heroContent.headlineAccent}
              </em>
            </h1>
            <OrbitingPlane className="reveal reveal-delay-2 size-[7.25rem] shrink-0 sm:size-[9.5rem] lg:hidden" />
          </div>

          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {heroContent.supporting}
          </p>

          <div className="reveal reveal-delay-3 mt-8 max-w-xl">
            <HeroSearch />
            <div className="mt-5 flex flex-col gap-3 p-1 sm:flex-row sm:gap-4">
              <Link href={primaryCta.href} className={buttonClassName()}>
                {primaryCta.label}
              </Link>
              <Link
                href="/visas"
                className={buttonClassName({ variant: "secondary" })}
              >
                {heroContent.exploreVisas}
              </Link>
            </div>
          </div>
        </div>

        <OrbitingPlane className="reveal reveal-delay-2 mx-auto hidden w-full max-w-[26rem] lg:block" />
      </Container>

      <Container className="relative z-10 pb-12 md:pb-16">
        <ul className="reveal reveal-delay-4 flex flex-wrap gap-x-7 gap-y-2 border-t border-ink/12 pt-6 text-[0.7rem] font-medium tracking-[0.18em] text-muted uppercase">
          {heroContent.ribbon.map((label) => (
            <li key={label}>{label}</li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

function HeroDrafting() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full text-ink"
      viewBox="0 0 1200 720"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <path
        d="M-40 160C180 40 360 90 520 180C720 290 860 80 1280 140"
        stroke="currentColor"
        strokeOpacity="0.1"
        strokeWidth="1.25"
        strokeDasharray="2 12"
      />
      <path
        d="M-20 520C220 600 480 420 720 470C940 516 1080 640 1280 560"
        stroke="currentColor"
        strokeOpacity="0.08"
        strokeWidth="1.25"
        strokeDasharray="2 14"
      />
      <circle cx="1080" cy="210" r="220" stroke="currentColor" strokeOpacity="0.06" />
      <circle cx="80" cy="640" r="140" stroke="currentColor" strokeOpacity="0.05" />
    </svg>
  )
}
