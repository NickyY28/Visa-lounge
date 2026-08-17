export const site = {
  name: "Visa Lounge",
  domain: "visalounge.in",
  description:
    "Visa assistance for travellers and businesses. Guidance through applications, documents, and the steps required to submit a visa.",
  email: "info@visalounge.in",
  location: "Gurugram, India",
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
  explore: primaryNav,
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
    { label: "Careers", href: "/careers" },
  ],
} as const
