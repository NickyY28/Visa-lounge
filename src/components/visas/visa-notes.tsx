type VisaNotesProps = {
  notes: string[]
}

export function VisaNotes({ notes }: VisaNotesProps) {
  if (notes.length === 0) return null

  return (
    <section aria-labelledby="visa-notes-heading">
      <h2
        id="visa-notes-heading"
        className="font-serif text-2xl tracking-tight text-foreground md:text-3xl"
      >
        Important notes
      </h2>
      <ul className="mt-6 max-w-2xl space-y-3">
        {notes.map((note) => (
          <li
            key={note}
            className="border-l-2 border-foreground pl-4 text-sm leading-relaxed text-muted"
          >
            {note}
          </li>
        ))}
      </ul>
    </section>
  )
}
