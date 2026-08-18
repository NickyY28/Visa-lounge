export const site = {
  name: "Visa Lounge",
  domain: "visalounge.in",
  description:
    "Visa assistance for travellers and businesses. Guidance through applications, documents, and the steps required to submit a visa.",
  email: "info@visalounge.in",
  phone: {
    display: "+91 95994 48100",
    href: "tel:+919599448100",
  },
  whatsapp: {
    label: "WhatsApp",
    href: "https://wa.me/919599448100",
  },
  location: "Gurugram, India",
  address: {
    lines: [
      "39 GF, Augusta Point",
      "Sector 53, DLF Phase 5, Golf Course Road",
      "Gurugram, Haryana 122003, India",
    ],
    mapsHref:
      "https://maps.google.com/?q=39+GF+Augusta+Point+Sector+53+Gurugram",
  },
  hours: "Monday–Saturday, 8:00–23:00. Sunday closed.",
  tagline: "Delivering visas. Defining trust.",
  mtc: {
    name: "My Travel Company",
    href: "https://mytravelcompany.in",
  },
} as const

export const primaryNav = [
  { label: "Visas", href: "/visas" },
  { label: "Corporate Visa", href: "/corporate-visa" },
  { label: "Travel Insurance", href: "/travel-insurance" },
  { label: "About", href: "/about" },
] as const

export const primaryCta = {
  label: "Start your visa application",
  href: "/contact",
} as const

export const footerNav = {
  services: [
    { label: "Visas", href: "/visas" },
    { label: "Corporate Visa", href: "/corporate-visa" },
    { label: "Travel Insurance", href: "/travel-insurance" },
    { label: primaryCta.label, href: primaryCta.href },
  ],
  destinations: [
    { label: "France", href: "/visas/france" },
    { label: "Japan", href: "/visas/japan" },
    { label: "Singapore", href: "/visas/singapore" },
    { label: "United Kingdom", href: "/visas/united-kingdom" },
    { label: "United States", href: "/visas/united-states" },
    { label: "Australia", href: "/visas/australia" },
    { label: "All destinations", href: "/visas" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
  ],
} as const
