"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { MobileNav } from "@/components/layout/mobile-nav"
import { buttonClassName } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"
import { primaryCta, primaryNav, site } from "@/lib/site"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="shrink-0 font-serif text-lg tracking-tight text-foreground md:text-xl"
        >
          {site.name}
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary"
        >
          {primaryNav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm text-muted transition-colors duration-150 hover:text-foreground",
                  active && "text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={primaryCta.href}
            className={buttonClassName({
              size: "sm",
              className: "hidden md:inline-flex",
            })}
          >
            {primaryCta.label}
          </Link>
          <MobileNav pathname={pathname} />
        </div>
      </Container>
    </header>
  )
}
