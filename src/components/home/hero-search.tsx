"use client"

import { FormEvent, useId, useMemo, useState } from "react"
import { useRouter } from "next/navigation"

import { heroContent } from "@/lib/home-content"
import { getVisaCountries } from "@/lib/visas"
import { cn } from "@/lib/utils"

export function HeroSearch() {
  const router = useRouter()
  const id = useId()
  const [query, setQuery] = useState("")
  const trimmed = query.trim()
  const countries = useMemo(() => getVisaCountries(), [])
  const suggestions = useMemo(() => {
    if (!trimmed) return []
    const lower = trimmed.toLowerCase()
    return countries
      .filter((country) => country.name.toLowerCase().includes(lower))
      .slice(0, 5)
  }, [countries, trimmed])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!trimmed) return

    const lower = trimmed.toLowerCase()
    const exact =
      countries.find((country) => country.name.toLowerCase() === lower) ??
      countries.find((country) => country.slug === lower.replace(/\s+/g, "-"))

    if (exact) {
      router.push(`/visas/${exact.slug}`)
      return
    }
    router.push(`/visas?search=${encodeURIComponent(trimmed)}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {heroContent.searchLabel}
      </label>
      <input
        id={id}
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={heroContent.searchPlaceholder}
        autoComplete="off"
        list={`${id}-suggestions`}
        className={cn(
          "mt-2 w-full rounded-full border-[1.5px] border-ink/25 bg-surface px-5 py-3 text-base text-ink",
          "placeholder:text-muted/70",
          "transition-[border-color] duration-200 hover:border-ink/30",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        )}
      />
      <datalist id={`${id}-suggestions`}>
        {suggestions.map((country) => (
          <option key={country.slug} value={country.name} />
        ))}
      </datalist>
      {trimmed ? (
        <p
          className="mt-3 text-sm text-muted"
          aria-live="polite"
          aria-atomic="true"
        >
          {suggestions.length > 0
            ? `Press Enter to continue with ${suggestions[0]!.name}.`
            : heroContent.searchEmpty}
        </p>
      ) : null}
    </form>
  )
}
