"use client"

import Link from "next/link"
import { useMemo, useState } from "react"

import { MediaFrame } from "@/components/ui/media-frame"
import type { VisaCountry } from "@/lib/visas"
import { isoCodeToFlag } from "@/lib/visas"
import { getDestinationImage } from "@/lib/media"
import { cn } from "@/lib/utils"

type VisaDirectoryProps = {
  countries: VisaCountry[]
}

export function VisaDirectory({ countries }: VisaDirectoryProps) {
  const [query, setQuery] = useState("")

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
      <label htmlFor="visa-directory-search" className="text-sm font-medium">
        Search destinations
      </label>
      <input
        id="visa-directory-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search by country name"
        autoComplete="off"
        className={cn(
          "mt-2 w-full max-w-md rounded-full border border-ink/12 bg-surface px-5 py-3 text-base",
          "placeholder:text-muted/80",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        )}
      />

      {isEmpty ? (
        <p className="mt-8 text-sm text-muted" role="status">
          No destinations match your search.
        </p>
      ) : (
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((country) => {
            const image = getDestinationImage(country.slug)
            const flag = isoCodeToFlag(country.isoCode)

            return (
              <li key={country.slug}>
                <Link
                  href={`/visas/${country.slug}`}
                  className="group paper-card block overflow-hidden transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  {image ? (
                    <MediaFrame
                      src={image.src}
                      alt={image.alt}
                      className="media-flush aspect-[16/10]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex aspect-[16/10] items-end bg-paper-deep px-4 py-3">
                      <span className="text-3xl" aria-hidden>
                        {flag}
                      </span>
                    </div>
                  )}
                  <span className="flex items-center gap-3 px-4 py-4">
                    {image && flag ? (
                      <span className="text-xl leading-none" aria-hidden>
                        {flag}
                      </span>
                    ) : null}
                    <span className="font-medium tracking-tight text-foreground group-hover:underline group-hover:underline-offset-4">
                      {country.name}
                    </span>
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
