import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

type SectionProps = ComponentProps<"section">

export function Section({ className, ...props }: SectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)} {...props} />
  )
}

type SectionHeadingProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  invert?: boolean
  className?: string
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-medium tracking-[0.16em] uppercase",
            invert ? "text-paper/55" : "text-muted"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "font-serif text-4xl leading-[1.12] tracking-tight md:text-5xl",
          invert ? "text-paper" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            invert ? "text-paper/70" : "text-muted"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
