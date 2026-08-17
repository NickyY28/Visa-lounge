import { PlaceholderNote } from "@/components/visas/placeholder-note"
import { VisaGlanceList } from "@/components/visas/visa-glance"
import type { VisaTypeOption } from "@/lib/visas/types"
import { getGlanceEntries } from "@/lib/visas/country-page"

type VisaOptionsProps = {
  options?: VisaTypeOption[]
}

export function VisaOptions({ options }: VisaOptionsProps) {
  const hasOptions = Boolean(options?.length)

  return (
    <section aria-labelledby="visa-options-heading">
      <h2
        id="visa-options-heading"
        className="font-serif text-2xl tracking-tight text-foreground md:text-3xl"
      >
        Visa options
      </h2>

      {hasOptions ? (
        <ul className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2">
          {options!.map((option) => {
            const glance = getGlanceEntries(option.glance)
            return (
              <li key={option.id} className="bg-surface px-5 py-5">
                <h3 className="text-base font-semibold tracking-tight">
                  {option.name}
                </h3>
                {option.summary ? (
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {option.summary}
                  </p>
                ) : null}
                {glance.length > 0 ? (
                  <VisaGlanceList entries={glance} className="mt-4" />
                ) : null}
              </li>
            )
          })}
        </ul>
      ) : (
        <div className="mt-6">
          <PlaceholderNote>
            Visa information coming soon.
          </PlaceholderNote>
        </div>
      )}
    </section>
  )
}
