import { visaCountries } from "@/lib/visas/countries"
import type {
  CountryVisaContent,
  VisaCountry,
  VisaGlance,
  VisaProcessStep,
} from "@/lib/visas/types"

export const glanceFieldOrder = [
  { key: "visaType", label: "Visa type" },
  { key: "processingTime", label: "Processing time" },
  { key: "validity", label: "Validity" },
  { key: "stayAllowed", label: "Stay allowed" },
  { key: "entryType", label: "Entry type" },
  { key: "governmentFee", label: "Government fee" },
  { key: "serviceFee", label: "Service fee" },
] as const satisfies ReadonlyArray<{
  key: keyof VisaGlance
  label: string
}>

/** Generic Visa Lounge process — not country-specific. */
export const genericApplicationProcess: VisaProcessStep[] = [
  {
    title: "Application and document preparation",
    body: "We help organise the application and required documents for your destination.",
  },
  {
    title: "Passport collected",
    body: "Once the file is ready, we arrange collection of your passport where applicable.",
  },
  {
    title: "Submission through the applicable channel",
    body: "Your application is submitted through the relevant visa centre, embassy, consulate, or online channel.",
  },
  {
    title: "Biometrics, when required",
    body: "You attend when biometrics are required. We tell you when and where.",
    caveat:
      "For some destinations, biometrics may happen as part of the same appointment as submission.",
  },
  {
    title: "Processing and coordination",
    body: "We coordinate the application through the processing stage and keep you informed when action is needed.",
  },
  {
    title: "Passport and visa returned",
    body: "Once the passport is released, it is returned to you.",
  },
]

export const defaultCountryNotes = [
  "Visa Lounge helps prepare and submit visa applications. The decision rests with the relevant embassy, consulate, or visa authority.",
  "We do not guarantee approval. Requirements and processes can change; we will confirm details for your destination when you get in touch.",
] as const

/**
 * Destination-specific visa facts. Empty until confirmed data is supplied.
 * Add a record keyed by country slug without changing page components.
 */
export const countryVisaContentBySlug: Record<string, CountryVisaContent> = {}

export type CountryPageModel = {
  country: VisaCountry
  content: CountryVisaContent
}

export function getCountryVisaContent(
  slug: string
): CountryVisaContent | undefined {
  return countryVisaContentBySlug[slug]
}

export function defaultCountryIntro(name: string): string {
  return `Visa Lounge can assist with visa applications for ${name}. Destination-specific visa details will be published here as they are confirmed.`
}

export function resolveCountryPage(
  country: VisaCountry
): CountryPageModel {
  const stored = getCountryVisaContent(country.slug)

  return {
    country,
    content: stored ?? { countrySlug: country.slug },
  }
}

export function getCountryPageBySlug(
  slug: string
): CountryPageModel | undefined {
  const country = visaCountries.find((item) => item.slug === slug)
  if (!country) return undefined
  return resolveCountryPage(country)
}

export function getGlanceEntries(
  glance?: VisaGlance
): Array<{ label: string; value: string }> {
  if (!glance) return []

  return glanceFieldOrder.flatMap(({ key, label }) => {
    const value = glance[key]
    return value ? [{ label, value }] : []
  })
}

export function countryPageMetadata(country: VisaCountry) {
  const path = `/visas/${country.slug}`

  return {
    title: `${country.name} visa`,
    description: `Visa assistance for ${country.name}. Contact Visa Lounge to discuss your application.`,
    alternates: { canonical: path },
    openGraph: {
      title: `${country.name} visa`,
      description: `Visa assistance for ${country.name}. Contact Visa Lounge to discuss your application.`,
      url: path,
    },
  }
}
