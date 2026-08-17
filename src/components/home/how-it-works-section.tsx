import { Container } from "@/components/ui/container"
import { Section, SectionHeading } from "@/components/ui/section"
import { howItWorksSection } from "@/lib/home-content"

export function HowItWorksSection() {
  return (
    <Section
      className="border-y border-border bg-surface"
      aria-labelledby="how-it-works-heading"
    >
      <Container>
        <SectionHeading
          id="how-it-works-heading"
          title="How it works"
          description={howItWorksSection.intro}
        />

        <ol className="grid gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-10 lg:grid-cols-3">
          {howItWorksSection.steps.map((step, index) => (
            <li key={step.title} className="relative flex gap-4 md:block">
              <div className="flex shrink-0 flex-col items-start md:mb-4">
                <span
                  className="font-serif text-3xl leading-none text-foreground/20 tabular-nums md:text-4xl"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="sr-only">Step {index + 1}:</span>
              </div>
              <div className="min-w-0 flex-1 border-t border-border pt-4 md:pt-0">
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
                {"caveat" in step && step.caveat ? (
                  <p className="mt-2 text-sm leading-relaxed text-muted/90 italic">
                    {step.caveat}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
