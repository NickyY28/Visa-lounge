"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { MobileNav } from "@/components/layout/mobile-nav"
import { SiteLogo } from "@/components/layout/site-logo"
import { buttonClassName } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { primaryCta, primaryNav } from "@/lib/site"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-[90] border-b border-border bg-paper/90 backdrop-blur-md">
      <Container className="grid h-[4.75rem] grid-cols-[1fr_auto] items-center gap-4 md:grid-cols-[auto_1fr_auto] md:gap-6">
        <SiteLogo
          priority
          className="justify-self-start"
          imageClassName="h-11 w-auto md:h-12"
        />

        <nav
          className="nav-shell hidden items-center justify-center gap-1 md:flex"
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
                className="nav-pill"
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center justify-self-end gap-2">
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
      <div className="brand-line" aria-hidden />
    </header>
  )
}
