import Link from "next/link"

import { PlaceholderNote } from "@/components/visas/placeholder-note"
import { buttonClassName } from "@/components/ui/button"
import type { CountryFaqItem } from "@/lib/visas/types"
import { primaryCta } from "@/lib/site"

type CountryVisaFaqProps = {
  items?: CountryFaqItem[]
}

export function CountryVisaFaq({ items }: CountryVisaFaqProps) {
  const hasItems = Boolean(items?.length)

  return (
    <section aria-labelledby="country-faq-heading">
      <h2
        id="country-faq-heading"
        className="font-serif text-2xl tracking-tight text-foreground md:text-3xl"
      >
        Frequently asked questions
      </h2>

      {hasItems ? (
        <div className="mt-6 divide-y divide-border border-y border-border">
          {items!.map((item) => (
            <details key={item.q} className="group">
              <summary className="cursor-pointer list-none py-4 pr-4 text-base font-medium tracking-tight marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  <span>{item.q}</span>
                  <span
                    className="mt-0.5 shrink-0 text-muted transition-transform duration-150 group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <div className="pb-4 pr-8 text-sm leading-relaxed text-muted">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      ) : (
        <div className="mt-6">
          <PlaceholderNote>
            Country-specific questions will appear here as destination details
            are confirmed.
          </PlaceholderNote>
        </div>
      )}

      <div className="mt-10">
        <Link href={primaryCta.href} className={buttonClassName()}>
          {primaryCta.label}
        </Link>
      </div>
    </section>
  )
}
