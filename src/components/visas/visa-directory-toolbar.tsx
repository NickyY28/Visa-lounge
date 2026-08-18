"use client"

import { useId } from "react"

import {
  visaDirectoryFilters,
  visaDirectoryPage,
} from "@/lib/visas/directory-content"
import { cn } from "@/lib/utils"

type VisaDirectoryToolbarProps = {
  query: string
  onQueryChange: (value: string) => void
  delivery: string
  onDeliveryChange: (value: string) => void
  visaType: string
  onVisaTypeChange: (value: string) => void
  documents: string
  onDocumentsChange: (value: string) => void
  travelDate: string
  onTravelDateChange: (value: string) => void
  showFilterHint: boolean
  resultCount: number
}

export function VisaDirectoryToolbar({
  query,
  onQueryChange,
  delivery,
  onDeliveryChange,
  visaType,
  onVisaTypeChange,
  documents,
  onDocumentsChange,
  travelDate,
  onTravelDateChange,
  showFilterHint,
  resultCount,
}: VisaDirectoryToolbarProps) {
  const searchId = useId()

  return (
    <div className="space-y-4">
      <div className="visa-toolbar">
        <div className="visa-toolbar-search">
          <label htmlFor={searchId} className="sr-only">
            Search country
          </label>
          <SearchIcon />
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder={visaDirectoryPage.searchPlaceholder}
            autoComplete="off"
            className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-muted/70"
          />
        </div>

        <FilterSelect
          label={visaDirectoryFilters.delivery.label}
          value={delivery}
          onChange={onDeliveryChange}
          options={visaDirectoryFilters.delivery.options}
        />

        <FilterSelect
          label={visaDirectoryFilters.type.label}
          value={visaType}
          onChange={onVisaTypeChange}
          options={visaDirectoryFilters.type.options}
        />

        <FilterSelect
          label={visaDirectoryFilters.documents.label}
          value={documents}
          onChange={onDocumentsChange}
          options={visaDirectoryFilters.documents.options}
        />

        <div className="visa-toolbar-field">
          <span className="visa-toolbar-label">
            {visaDirectoryFilters.travel.label}
          </span>
          <input
            type="date"
            value={travelDate}
            onChange={(event) => onTravelDateChange(event.target.value)}
            className="visa-toolbar-date"
            aria-label={visaDirectoryFilters.travel.label}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted" role="status">
          {resultCount} destination{resultCount === 1 ? "" : "s"}
        </p>
        {showFilterHint ? (
          <p className="text-xs text-muted">{visaDirectoryPage.filterHint}</p>
        ) : null}
      </div>
    </div>
  )
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  options: readonly { value: string; label: string }[]
}) {
  return (
    <div className="visa-toolbar-field">
      <label className="visa-toolbar-label">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="visa-toolbar-select"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronIcon className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2" />
      </div>
    </div>
  )
}

function SearchIcon() {
  return (
    <svg
      className="size-4 shrink-0 text-muted"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 16l4.5 4.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-3.5 text-muted", className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
