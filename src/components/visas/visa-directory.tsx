"use client"

import Link from "next/link"
import { useMemo, useState } from "react"

import type { VisaCountry } from "@/lib/visas"
import { isoCodeToFlag } from "@/lib/visas"
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
          "mt-2 w-full max-w-md border border-border bg-surface px-4 py-3 text-base",
          "placeholder:text-muted/80",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        )}
      />

      {isEmpty ? (
        <p className="mt-8 text-sm text-muted" role="status">
          No destinations match your search.
        </p>
      ) : (
        <ul className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((country) => (
            <li key={country.slug}>
              <Link
                href={`/visas/${country.slug}`}
                className="group flex items-center gap-3 bg-surface px-4 py-4 transition-colors duration-150 hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring"
              >
                <span className="text-xl leading-none" aria-hidden>
                  {isoCodeToFlag(country.isoCode)}
                </span>
                <span className="font-medium tracking-tight text-foreground group-hover:underline group-hover:underline-offset-4">
                  {country.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
