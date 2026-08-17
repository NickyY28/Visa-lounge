import { cn } from "@/lib/utils"

type GlanceEntry = {
  label: string
  value: string
}

type VisaGlanceListProps = {
  entries: GlanceEntry[]
  className?: string
}

export function VisaGlanceList({ entries, className }: VisaGlanceListProps) {
  if (entries.length === 0) return null

  return (
    <dl
      className={cn(
        "grid gap-4 sm:grid-cols-2",
        className
      )}
    >
      {entries.map((entry) => (
        <div key={entry.label} className="paper-card px-5 py-4">
          <dt className="text-xs font-medium tracking-[0.14em] text-muted uppercase">
            {entry.label}
          </dt>
          <dd className="mt-1 text-sm text-foreground">{entry.value}</dd>
        </div>
      ))}
    </dl>
  )
}

type VisaGlanceSectionProps = {
  entries: GlanceEntry[]
}

export function VisaGlanceSection({ entries }: VisaGlanceSectionProps) {
  if (entries.length === 0) return null

  return (
    <section aria-labelledby="visa-glance-heading">
      <h2
        id="visa-glance-heading"
        className="font-serif text-2xl tracking-tight text-foreground md:text-3xl"
      >
        At a glance
      </h2>
      <VisaGlanceList entries={entries} className="mt-6" />
    </section>
  )
}
