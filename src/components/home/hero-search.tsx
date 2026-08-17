"use client"

import { useId, useState } from "react"

import { heroContent } from "@/lib/home-content"
import { cn } from "@/lib/utils"

export function HeroSearch() {
  const id = useId()
  const [query, setQuery] = useState("")
  const trimmed = query.trim()

  return (
    <div>
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
        className={cn(
          "mt-2 w-full rounded-full border-[1.5px] border-ink/25 bg-surface px-5 py-3 text-base text-ink",
          "placeholder:text-muted/70",
          "transition-[border-color] duration-200 hover:border-ink/30",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        )}
      />
      {trimmed ? (
        <p
          className="mt-3 text-sm text-muted"
          aria-live="polite"
          aria-atomic="true"
        >
          {heroContent.searchEmpty}
        </p>
      ) : null}
    </div>
  )
}
