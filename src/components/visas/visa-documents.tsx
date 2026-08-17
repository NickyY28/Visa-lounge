import { PlaceholderNote } from "@/components/visas/placeholder-note"
import type { DocumentRequirement } from "@/lib/visas/types"

type VisaDocumentsProps = {
  documents?: DocumentRequirement[]
}

export function VisaDocuments({ documents }: VisaDocumentsProps) {
  const hasDocuments = Boolean(documents?.length)

  return (
    <section aria-labelledby="visa-documents-heading">
      <h2
        id="visa-documents-heading"
        className="font-serif text-2xl tracking-tight text-foreground md:text-3xl"
      >
        Documents and requirements
      </h2>

      {hasDocuments ? (
        <ul className="mt-6 divide-y divide-border border-y border-border">
          {documents!.map((item) => (
            <li key={item.id} className="py-3">
              <p className="text-sm font-medium text-foreground">{item.label}</p>
              {item.note ? (
                <p className="mt-1 text-sm text-muted">{item.note}</p>
              ) : null}
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-6">
          <PlaceholderNote>
            Document requirements for this destination are not yet listed. We
            will confirm what you need when you start your application.
          </PlaceholderNote>
        </div>
      )}
    </section>
  )
}
