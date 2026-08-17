type PlaceholderNoteProps = {
  children: string
}

export function PlaceholderNote({ children }: PlaceholderNoteProps) {
  return (
    <p className="max-w-xl border border-dashed border-border bg-surface px-4 py-3 text-sm leading-relaxed text-muted">
      {children}
    </p>
  )
}
