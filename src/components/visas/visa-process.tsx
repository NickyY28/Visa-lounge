import type { VisaProcessStep } from "@/lib/visas/types"

type VisaProcessProps = {
  steps: VisaProcessStep[]
}

export function VisaProcess({ steps }: VisaProcessProps) {
  return (
    <section aria-labelledby="visa-process-heading">
      <h2
        id="visa-process-heading"
        className="font-serif text-2xl tracking-tight text-foreground md:text-3xl"
      >
        Application process
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
        This is how Visa Lounge typically handles a visa application. Steps can
        vary by destination; we will confirm what applies in your case.
      </p>

      <ol className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title} className="flex gap-4 md:block">
            <span
              className="font-serif text-3xl leading-none text-foreground/20 tabular-nums md:mb-3 md:block"
              aria-hidden
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="sr-only">Step {index + 1}:</span>
            <div className="min-w-0 border-t border-border pt-3 md:pt-0">
              <h3 className="text-base font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
              {step.caveat ? (
                <p className="mt-2 text-sm leading-relaxed text-muted italic">
                  {step.caveat}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
