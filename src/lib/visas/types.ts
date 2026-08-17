/**
 * Visa destination record — directory metadata only.
 * No fees, processing times, or visa product claims.
 */

export type VisaCountry = {
  slug: string
  name: string
  isoCode: string
  /** Path on the legacy WordPress site (visalounge.in), preserved as-is. */
  legacyUrl?: string
}

export type VisaTypeKind = "tourist" | "business" | "student" | "other"

/** Snapshot fields for a visa product. All optional — omit until confirmed. */
export type VisaGlance = {
  visaType?: string
  processingTime?: string
  validity?: string
  stayAllowed?: string
  entryType?: string
  governmentFee?: string
  serviceFee?: string
}

export type VisaTypeOption = {
  id: string
  name: string
  kind?: VisaTypeKind
  summary?: string
  glance?: VisaGlance
}

export type DocumentRequirement = {
  id: string
  label: string
  note?: string
}

export type VisaProcessStep = {
  title: string
  body: string
  caveat?: string
}

export type CountryFaqItem = {
  q: string
  a: string
}

/**
 * Optional destination-specific visa content, keyed by country slug.
 * Identity stays on VisaCountry; this layer holds product facts when they exist.
 */
export type CountryVisaContent = {
  countrySlug: string
  intro?: string
  visaTypes?: VisaTypeOption[]
  glance?: VisaGlance
  documents?: DocumentRequirement[]
  process?: VisaProcessStep[]
  notes?: string[]
  faqs?: CountryFaqItem[]
}
