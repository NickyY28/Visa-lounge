"use client"

import { site } from "@/lib/site"

export function FloatingWhatsApp() {
  return (
    <a
      href={site.whatsapp.href}
      className="floating-whatsapp"
      rel="noreferrer"
      target="_blank"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppMark />
    </a>
  )
}

function WhatsAppMark() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden>
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
