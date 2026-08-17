import Link from "next/link"

import { Container } from "@/components/ui/container"
import { footerNav, primaryCta, site } from "@/lib/site"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <Container className="grid gap-10 py-12 md:grid-cols-4 md:gap-8">
        <div className="md:col-span-2">
          <p className="font-serif text-xl tracking-tight">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Visa assistance for travellers and businesses.
          </p>
          <p className="mt-6 text-sm text-muted">
            <a
              href={`mailto:${site.email}`}
              className="text-foreground underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
            <span className="mt-1 block">{site.location}</span>
          </p>
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5">
            {footerNav.explore.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-foreground underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={primaryCta.href}
                className="text-sm text-foreground underline-offset-4 hover:underline"
              >
                {primaryCta.label}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
            Company
          </p>
          <ul className="mt-4 space-y-2.5">
            {footerNav.legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-foreground underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.mtc.href}
                className="text-sm text-foreground underline-offset-4 hover:underline"
                rel="noreferrer"
                target="_blank"
              >
                Travel with {site.mtc.name}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-2 py-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <p>A related business of {site.mtc.name}</p>
        </Container>
      </div>
    </footer>
  )
}
