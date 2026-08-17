import Link from "next/link"

type CountryBreadcrumbProps = {
  countryName: string
}

export function CountryBreadcrumb({ countryName }: CountryBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
        <li>
          <Link
            href="/"
            className="text-foreground underline-offset-4 hover:underline"
          >
            Home
          </Link>
        </li>
        <li aria-hidden className="text-border">
          /
        </li>
        <li>
          <Link
            href="/visas"
            className="text-foreground underline-offset-4 hover:underline"
          >
            Visas
          </Link>
        </li>
        <li aria-hidden className="text-border">
          /
        </li>
        <li>
          <span aria-current="page" className="text-foreground">
            {countryName}
          </span>
        </li>
      </ol>
    </nav>
  )
}
