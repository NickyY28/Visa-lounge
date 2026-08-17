import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CountryVisaPage } from "@/components/visas/country-visa-page"
import { visaCountries } from "@/lib/visas"
import {
  countryPageMetadata,
  getCountryPageBySlug,
} from "@/lib/visas/country-page"

type PageProps = {
  params: Promise<{ country: string }>
}

export function generateStaticParams() {
  return visaCountries.map((country) => ({ country: country.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { country: slug } = await params
  const page = getCountryPageBySlug(slug)
  if (!page) return { title: "Visa destination" }

  return countryPageMetadata(page.country)
}

export default async function CountryVisaRoute({ params }: PageProps) {
  const { country: slug } = await params
  const page = getCountryPageBySlug(slug)

  if (!page) notFound()

  return <CountryVisaPage model={page} />
}
