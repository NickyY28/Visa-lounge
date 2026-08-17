import type { ButtonHTMLAttributes } from "react"

import { cn } from "@/lib/utils"

type ButtonVariant = "primary" | "secondary" | "ghost"
type ButtonSize = "sm" | "md"

type ButtonClassNameProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

export function buttonClassName({
  variant = "primary",
  size = "md",
  className,
}: ButtonClassNameProps = {}) {
  return cn(
    "inline-flex shrink-0 items-center justify-center rounded-md font-medium tracking-tight transition-colors duration-150",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    "disabled:pointer-events-none disabled:opacity-50",
    variant === "primary" &&
      "bg-foreground text-background hover:bg-foreground/88",
    variant === "secondary" &&
      "border border-border bg-surface text-foreground hover:bg-foreground/5",
    variant === "ghost" && "text-foreground hover:bg-foreground/5",
    size === "sm" && "h-9 px-3.5 text-sm",
    size === "md" && "h-10 px-4 text-sm",
    className
  )
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonClassNameProps

export function Button({
  variant,
  size,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClassName({ variant, size, className })}
      {...props}
    />
  )
}
