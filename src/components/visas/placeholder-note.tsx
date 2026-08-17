type PlaceholderNoteProps = {
  children: string
}

export function PlaceholderNote({ children }: PlaceholderNoteProps) {
  return (
    <p className="paper-card max-w-xl px-4 py-3 text-sm leading-relaxed text-muted">
      {children}
    </p>
  )
}
