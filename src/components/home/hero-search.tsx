"use client"

import { useId, useState } from "react"

import { heroContent } from "@/lib/home-content"
import { cn } from "@/lib/utils"

export function HeroSearch() {
  const id = useId()
  const [query, setQuery] = useState("")
  const trimmed = query.trim()
  const showEmpty = trimmed.length > 0

  return (
    <div className="mt-10 max-w-xl">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
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
          "mt-2 w-full border border-border bg-surface px-4 py-3 text-base text-foreground",
          "placeholder:text-muted/80",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        )}
      />
      <div
        className={cn(
          "mt-3 min-h-[2.75rem] border border-dashed border-border bg-surface/60 px-4 py-3 text-sm text-muted transition-opacity duration-150",
          showEmpty ? "opacity-100" : "opacity-70"
        )}
        aria-live="polite"
        aria-atomic="true"
      >
        {showEmpty ? (
          <p>
            <span className="sr-only">Search results: </span>
            {heroContent.searchEmpty}
          </p>
        ) : (
          <p className="text-muted/80">{heroContent.searchEmpty}</p>
        )}
      </div>
    </div>
  )
}
