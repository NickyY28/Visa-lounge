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
    "inline-flex shrink-0 items-center justify-center rounded-full font-medium tracking-tight transition-[color,background-color,border-color,opacity] duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    "disabled:pointer-events-none disabled:opacity-50",
    variant === "primary" &&
      "btn-aura border-[1.5px] border-ink",
    variant === "secondary" &&
      "btn-fill border-[1.5px] border-ink bg-paper text-ink",
    variant === "ghost" && "text-foreground hover:bg-foreground/5",
    size === "sm" && "h-9 px-4 text-sm",
    size === "md" && "h-11 px-5 text-sm",
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
