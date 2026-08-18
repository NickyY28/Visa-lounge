"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { MobileNav } from "@/components/layout/mobile-nav"
import { SiteLogo } from "@/components/layout/site-logo"
import { buttonClassName } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { primaryCta, primaryNav, site } from "@/lib/site"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper/90 backdrop-blur-md">
      <div className="brand-line" aria-hidden />
      <Container className="grid h-[4.5rem] grid-cols-[1fr_auto] items-center gap-4 md:grid-cols-[auto_1fr_auto] md:gap-6">
        <SiteLogo
          priority
          className="justify-self-start"
          imageClassName="h-11 w-auto md:h-12"
        />

        <nav
          className="hidden items-center justify-center gap-1 md:flex"
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
          <a
            href={site.whatsapp.href}
            className="hidden size-10 items-center justify-center rounded-full border-[1.5px] border-ink text-ink transition-colors duration-200 hover:bg-ink hover:text-paper lg:inline-flex"
            rel="noreferrer"
            target="_blank"
          >
            <span className="sr-only">WhatsApp</span>
            <WhatsAppMark />
          </a>
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

function WhatsAppMark() {
  return (
    <svg className="size-4" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3.5A8.5 8.5 0 0 0 5.2 16.7L4 20.5l3.9-1.2A8.5 8.5 0 1 0 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9.2 9.3c.2-.5.4-.5.7-.5h.6c.2 0 .4.1.5.3l.8 1.8c.1.2 0 .4-.1.6l-.4.5c-.1.1-.1.3 0 .4.3.6.8 1.1 1.4 1.4.2.1.3.1.4 0l.5-.4c.2-.2.4-.2.6-.1l1.8.8c.2.1.3.3.3.5v.6c0 .3 0 .5-.5.7-1 .4-3.3.2-5.7-2.2S8.8 10.3 9.2 9.3Z"
        fill="currentColor"
      />
    </svg>
  )
}
