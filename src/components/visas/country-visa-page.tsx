import { CountryHero } from "@/components/visas/country-hero"
import { CountryVisaFaq } from "@/components/visas/country-visa-faq"
import { VisaDocuments } from "@/components/visas/visa-documents"
import { VisaGlanceSection } from "@/components/visas/visa-glance"
import { VisaNotes } from "@/components/visas/visa-notes"
import { VisaOptions } from "@/components/visas/visa-options"
import { VisaProcess } from "@/components/visas/visa-process"
import { Container } from "@/components/ui/container"
import {
  defaultCountryIntro,
  defaultCountryNotes,
  genericApplicationProcess,
  getGlanceEntries,
  type CountryPageModel,
} from "@/lib/visas/country-page"

type CountryVisaPageProps = {
  model: CountryPageModel
}

export function CountryVisaPage({ model }: CountryVisaPageProps) {
  const { country, content } = model
  const intro = content.intro ?? defaultCountryIntro(country.name)
  const glanceEntries = getGlanceEntries(content.glance)
  const process = content.process ?? genericApplicationProcess
  const notes = content.notes ?? [...defaultCountryNotes]

  return (
    <article>
      <div className="border-b border-border bg-paper">
        <Container className="py-12 md:py-16">
          <CountryHero
            name={country.name}
            isoCode={country.isoCode}
            intro={intro}
            slug={country.slug}
          />
        </Container>
      </div>

      <Container className="flex flex-col gap-14 py-12 md:gap-16 md:py-16">
        <VisaOptions options={content.visaTypes} />
        <VisaGlanceSection entries={glanceEntries} />
        <VisaDocuments documents={content.documents} />
        <VisaProcess steps={process} />
        <VisaNotes notes={notes} />
        <CountryVisaFaq items={content.faqs} />
      </Container>
    </article>
  )
}
