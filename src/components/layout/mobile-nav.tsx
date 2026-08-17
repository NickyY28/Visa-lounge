"use client"

import { useCallback, useEffect, useId, useRef } from "react"
import Link from "next/link"

import { buttonClassName } from "@/components/ui/button"
import { primaryCta, primaryNav, site } from "@/lib/site"

type MobileNavProps = {
  pathname: string
}

export function MobileNav({ pathname }: MobileNavProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  const close = useCallback(() => {
    dialogRef.current?.close()
  }, [])

  const open = useCallback(() => {
    dialogRef.current?.showModal()
  }, [])

  useEffect(() => {
    close()
  }, [pathname, close])

  return (
    <>
      <button
        type="button"
        className="-mr-2 inline-flex size-10 items-center justify-center rounded-md text-foreground hover:bg-foreground/5 md:hidden"
        aria-haspopup="dialog"
        aria-controls="mobile-nav"
        onClick={open}
      >
        <span className="sr-only">Open menu</span>
        <span className="flex flex-col gap-1.5" aria-hidden>
          <span className="block h-px w-5 bg-current" />
          <span className="block h-px w-5 bg-current" />
          <span className="block h-px w-3.5 bg-current" />
        </span>
      </button>

      <dialog
        ref={dialogRef}
        id="mobile-nav"
        aria-labelledby={titleId}
        className="fixed inset-0 m-0 h-svh max-h-svh w-full max-w-none border-0 bg-paper p-0 text-foreground backdrop:bg-black/70 open:flex open:flex-col"
        onClick={(event) => {
          if (event.target === dialogRef.current) close()
        }}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <p id={titleId} className="text-sm font-semibold tracking-tight">
            {site.name}
          </p>
          <button
            type="button"
            className="-mr-2 inline-flex size-10 items-center justify-center rounded-md hover:bg-foreground/5"
            onClick={close}
          >
            <span className="sr-only">Close menu</span>
            <span aria-hidden className="text-2xl leading-none">
              ×
            </span>
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-5 py-6" aria-label="Mobile">
          {primaryNav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="rounded-md px-2 py-3 text-lg tracking-tight hover:bg-foreground/5"
                onClick={close}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="border-t border-border px-5 py-4">
          <Link
            href={primaryCta.href}
            className={buttonClassName({ className: "w-full" })}
            onClick={close}
          >
            {primaryCta.label}
          </Link>
        </div>
      </dialog>
    </>
  )
}
