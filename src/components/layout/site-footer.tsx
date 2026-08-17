import Link from "next/link"

import { Container } from "@/components/ui/container"
import { footerNav, primaryCta, site } from "@/lib/site"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto bg-ink text-paper">
      <Container className="grid gap-10 py-12 md:grid-cols-4 md:gap-8">
        <div className="md:col-span-2">
          <p className="font-serif text-xl tracking-tight">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/60">
            Visa assistance for travellers and businesses.
          </p>
          <p className="mt-6 text-sm text-paper/60">
            <a
              href={`mailto:${site.email}`}
              className="text-paper underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
            <span className="mt-1 block">{site.location}</span>
          </p>
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.16em] text-paper/45 uppercase">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5">
            {footerNav.explore.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-paper underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={primaryCta.href}
                className="text-sm text-paper underline-offset-4 hover:underline"
              >
                {primaryCta.label}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.16em] text-paper/45 uppercase">
            Company
          </p>
          <ul className="mt-4 space-y-2.5">
            {footerNav.legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-paper underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.mtc.href}
                className="text-sm text-paper underline-offset-4 hover:underline"
                rel="noreferrer"
                target="_blank"
              >
                Travel with {site.mtc.name}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-4 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <p>A related business of {site.mtc.name}</p>
        </Container>
      </div>
    </footer>
  )
}
