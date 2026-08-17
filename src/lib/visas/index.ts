import { visaCountries } from "@/lib/visas/countries"
import type { VisaCountry } from "@/lib/visas/types"

export function getVisaCountries(): VisaCountry[] {
  return [...visaCountries].sort((a, b) =>
    a.name.localeCompare(b.name, "en", { sensitivity: "base" })
  )
}

export function filterVisaCountriesByName(query: string): VisaCountry[] {
  const trimmed = query.trim().toLowerCase()
  const sorted = getVisaCountries()

  if (!trimmed) return sorted

  return sorted.filter((country) =>
    country.name.toLowerCase().includes(trimmed)
  )
}

export function getVisaCountryBySlug(slug: string): VisaCountry | undefined {
  return visaCountries.find((country) => country.slug === slug)
}

/** Regional indicator flag emoji from ISO 3166-1 alpha-2 code */
export function isoCodeToFlag(isoCode: string): string {
  const code = isoCode.toUpperCase()
  if (code.length !== 2 || /[^A-Z]/.test(code)) return ""

  return String.fromCodePoint(
    ...code.split("").map((char) => 0x1f1e6 - 65 + char.charCodeAt(0))
  )
}

export type {
  CountryFaqItem,
  CountryVisaContent,
  DocumentRequirement,
  VisaCountry,
  VisaGlance,
  VisaProcessStep,
  VisaTypeKind,
  VisaTypeOption,
} from "@/lib/visas/types"
export { visaCountries } from "@/lib/visas/countries"
export { legacyNormalizationNotes } from "@/lib/visas/legacy-normalization"
export {
  countryPageMetadata,
  getCountryPageBySlug,
  getGlanceEntries,
  resolveCountryPage,
} from "@/lib/visas/country-page"
