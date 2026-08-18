import Link from "next/link"
import type { ReactNode } from "react"

import { SiteLogo } from "@/components/layout/site-logo"
import { Container } from "@/components/ui/container"
import { footerNav, site } from "@/lib/site"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-border bg-paper-deep">
      <Container className="grid gap-12 py-12 md:grid-cols-2 md:py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SiteLogo imageClassName="h-12 w-auto md:h-14" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Visa assistance for travellers and businesses, from Gurugram.
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-start gap-2.5 text-ink underline-offset-4 hover:underline"
              >
                <MailIcon />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.phone.href}
                className="inline-flex items-start gap-2.5 text-ink underline-offset-4 hover:underline"
              >
                <PhoneIcon />
                {site.phone.display}
              </a>
            </li>
            <li>
              <a
                href={site.whatsapp.href}
                className="inline-flex items-start gap-2.5 text-ink underline-offset-4 hover:underline"
                rel="noreferrer"
                target="_blank"
              >
                <WhatsAppIcon />
                {site.whatsapp.label}
              </a>
            </li>
            <li>
              <a
                href={site.address.mapsHref}
                className="inline-flex items-start gap-2.5 text-ink underline-offset-4 hover:underline"
                rel="noreferrer"
                target="_blank"
              >
                <PinIcon />
                <span>
                  {site.address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </a>
            </li>
            <li className="inline-flex items-start gap-2.5 text-muted">
              <ClockIcon />
              {site.hours}
            </li>
          </ul>
        </div>

        <FooterColumn title="Services" className="lg:col-span-2">
          {footerNav.services.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-ink underline-offset-4 hover:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Destinations" className="lg:col-span-3">
          {footerNav.destinations.map((item) => (
            <li key={item.href + item.label}>
              <Link
                href={item.href}
                className="text-sm text-ink underline-offset-4 hover:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Company" className="lg:col-span-2">
          {footerNav.company.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-ink underline-offset-4 hover:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={site.mtc.href}
              className="text-sm text-ink underline-offset-4 hover:underline"
              rel="noreferrer"
              target="_blank"
            >
              Travel with {site.mtc.name}
            </a>
          </li>
        </FooterColumn>
      </Container>

      <Container className="border-t border-ink/10 py-10 md:py-12">
        <p className="font-serif text-3xl leading-tight tracking-tight text-ink md:text-center md:text-5xl">
          {site.tagline}
        </p>
      </Container>

      <div className="bg-ink text-paper">
        <Container className="flex flex-col gap-4 py-4 text-xs text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {footerNav.legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-paper/70 underline-offset-4 hover:text-paper hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p>A related business of {site.mtc.name}</p>
        </Container>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  children,
  className,
}: {
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  )
}

function MailIcon() {
  return (
    <svg className="mt-0.5 size-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="mt-0.5 size-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 3h3l1.5 4-2 1.5a12 12 0 0 0 6 6L17 13l4 1.5V18a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="mt-0.5 size-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
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

function PinIcon() {
  return (
    <svg className="mt-0.5 size-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="mt-0.5 size-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8v4.5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
