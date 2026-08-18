"use client"

import { useMemo, useState } from "react"

import { VisaDestinationCard } from "@/components/visas/visa-destination-card"
import { VisaDirectoryToolbar } from "@/components/visas/visa-directory-toolbar"
import {
  visaDirectoryFilters,
  visaDirectoryPage,
} from "@/lib/visas/directory-content"
import type { VisaCountry } from "@/lib/visas"

type VisaDirectoryProps = {
  countries: VisaCountry[]
}

export function VisaDirectory({ countries }: VisaDirectoryProps) {
  const [query, setQuery] = useState("")
  const [delivery, setDelivery] = useState<string>(
    visaDirectoryFilters.delivery.defaultValue
  )
  const [visaType, setVisaType] = useState<string>(
    visaDirectoryFilters.type.defaultValue
  )
  const [documents, setDocuments] = useState<string>(
    visaDirectoryFilters.documents.defaultValue
  )
  const [travelDate, setTravelDate] = useState<string>(
    visaDirectoryFilters.travel.defaultValue
  )

  const filtersActive =
    delivery !== visaDirectoryFilters.delivery.defaultValue ||
    visaType !== visaDirectoryFilters.type.defaultValue ||
    documents !== visaDirectoryFilters.documents.defaultValue ||
    travelDate !== visaDirectoryFilters.travel.defaultValue

  const filtered = useMemo(() => {
    const trimmed = query.trim().toLowerCase()
    if (!trimmed) return countries
    return countries.filter((country) =>
      country.name.toLowerCase().includes(trimmed)
    )
  }, [query, countries])

  const isEmpty = query.trim().length > 0 && filtered.length === 0

  return (
    <div>
      <div className="sticky top-[4.5rem] z-30 -mx-1 bg-paper/95 py-1 backdrop-blur-sm">
        <VisaDirectoryToolbar
          query={query}
          onQueryChange={setQuery}
          delivery={delivery}
          onDeliveryChange={setDelivery}
          visaType={visaType}
          onVisaTypeChange={setVisaType}
          documents={documents}
          onDocumentsChange={setDocuments}
          travelDate={travelDate}
          onTravelDateChange={setTravelDate}
          showFilterHint={filtersActive}
          resultCount={filtered.length}
        />
      </div>

      {isEmpty ? (
        <p className="mt-10 text-sm text-muted" role="status">
          {visaDirectoryPage.emptySearch}
        </p>
      ) : (
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-5">
          {filtered.map((country) => (
            <li key={country.slug}>
              <VisaDestinationCard
                name={country.name}
                slug={country.slug}
                isoCode={country.isoCode}
                footnote={visaDirectoryPage.cardFootnote}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
