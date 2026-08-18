import Image from "next/image"
import Link from "next/link"

import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

export const brandLogo = {
  src: "/assets/images/logo.png",
  width: 324,
  height: 124,
} as const

type SiteLogoProps = {
  className?: string
  imageClassName?: string
  priority?: boolean
  id?: string
  onClick?: () => void
}

export function SiteLogo({
  className,
  imageClassName,
  priority = false,
  id,
  onClick,
}: SiteLogoProps) {
  return (
    <Link
      id={id}
      href="/"
      onClick={onClick}
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src={brandLogo.src}
        alt={site.name}
        width={brandLogo.width}
        height={brandLogo.height}
        priority={priority}
        className={cn("h-10 w-auto object-contain md:h-11", imageClassName)}
      />
    </Link>
  )
}
