import Link from "next/link"

import { PlaceholderNote } from "@/components/visas/placeholder-note"
import { buttonClassName } from "@/components/ui/button"
import { FaqList } from "@/components/ui/faq-list"
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
        <div className="mt-6">
          <FaqList items={items!} />
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
