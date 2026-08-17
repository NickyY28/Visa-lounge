type FaqItem = {
  q: string
  a: string
}

type FaqListProps = {
  items: readonly FaqItem[]
}

export function FaqList({ items }: FaqListProps) {
  return (
    <div>
      {items.map((item) => (
        <details key={item.q} className="faq-item group">
          <summary className="cursor-pointer list-none py-5 text-base font-medium tracking-tight marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring [&::-webkit-details-marker]:hidden">
            <span className="flex items-start justify-between gap-4">
              <span>{item.q}</span>
              <span
                className="mt-0.5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-45 group-open:text-paper/60"
                aria-hidden
              >
                +
              </span>
            </span>
          </summary>
          <div className="pb-5 pr-8 text-sm leading-relaxed text-muted group-open:text-paper/70">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  )
}
