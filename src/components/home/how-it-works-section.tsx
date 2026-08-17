import { EditorialCollage } from "@/components/home/editorial-collage"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/ui/reveal"
import { Section } from "@/components/ui/section"
import { howItWorksSection } from "@/lib/home-content"

export function HowItWorksSection() {
  return (
    <Section aria-labelledby="how-it-works-heading" className="bg-paper pt-4">
      <Container>
        <div className="ink-block px-6 py-12 md:px-12 md:py-16 lg:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <EditorialCollage />
            <Reveal>
              <p className="text-xs font-medium tracking-[0.18em] text-paper/55 uppercase">
                The process
              </p>
              <h2
                id="how-it-works-heading"
                className="mt-3 font-serif text-4xl leading-[1.08] tracking-tight text-paper md:text-6xl"
              >
                How it{" "}
                <em className="font-normal italic">works</em>
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-paper/70 md:text-lg">
                {howItWorksSection.intro}
              </p>
            </Reveal>
          </div>

          <ol className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {howItWorksSection.steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl bg-ink-soft p-5 transition-colors duration-300 hover:bg-white/5"
              >
                <span
                  className="font-serif text-4xl leading-none text-paper/25 tabular-nums"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="sr-only">Step {index + 1}:</span>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-paper">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/65">
                  {step.body}
                </p>
                {"caveat" in step && step.caveat ? (
                  <p className="mt-2 text-sm leading-relaxed text-paper/55 italic">
                    {step.caveat}
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  )
}
