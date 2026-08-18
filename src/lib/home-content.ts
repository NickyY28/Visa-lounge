/**
 * Homepage copy and placeholder destination labels.
 * Representative destinations only — not a supported-country inventory.
 */

export const heroContent = {
  eyebrow: "Visa assistance",
  headlineLead: "Your visa, handled from",
  headlineAccent: "application to return.",
  supporting:
    "From document preparation and submission to passport collection and return, we handle the process with you. If biometrics are required, we'll tell you when and where you need to attend.",
  searchLabel: "Search destination",
  searchPlaceholder: "e.g. France, Japan, United Kingdom",
  searchEmpty: "Visa destinations will appear here as they are added to the site.",
  exploreVisas: "Explore visas",
  ribbon: [
    "Prepare",
    "Collect",
    "Submit",
    "Biometrics",
    "Coordinate",
    "Return",
  ],
} as const

/** Visual placeholders — not a claim of supported destinations */
export const placeholderDestinations = [
  { name: "Australia", slug: "australia", code: "AU" },
  { name: "France", slug: "france", code: "FR" },
  { name: "Japan", slug: "japan", code: "JP" },
  { name: "Singapore", slug: "singapore", code: "SG" },
  { name: "Thailand", slug: "thailand", code: "TH" },
  { name: "United Kingdom", slug: "united-kingdom", code: "GB" },
  { name: "USA", slug: "united-states", code: "US" },
  { name: "Italy", slug: "italy", code: "IT" },
] as const

export const destinationsSection = {
  title: "Visa destinations",
  description:
    "Browse destinations we assist with. Type, validity, and fees are confirmed for your case — they are not listed here as a fixed product.",
  viewAll: "View all visa destinations",
  cardMeta: [
    { label: "Service", value: "Visa assistance" },
    { label: "Process", value: "Application to return" },
    { label: "Fees", value: "Quoted for you" },
  ],
  cardNote: "Type, validity, and fees confirmed when you enquire.",
} as const

export const howItWorksSection = {
  intro:
    "After you get in touch, we take you through the visa process step by step.",
  steps: [
    {
      title: "Application and document preparation",
      body: "We help organise the application and required documents for your destination.",
    },
    {
      title: "Passport collected",
      body: "Once the file is ready, we arrange collection of your passport where applicable.",
    },
    {
      title: "Submission through the applicable channel",
      body: "Your application is submitted through the relevant visa centre, embassy, consulate, or online channel.",
    },
    {
      title: "Biometrics, when required",
      body: "You attend when biometrics are required. We tell you when and where.",
      caveat:
        "For some destinations, biometrics may happen as part of the same appointment as submission.",
    },
    {
      title: "Processing and coordination",
      body: "We coordinate the application through the processing stage and keep you informed when action is needed.",
    },
    {
      title: "Passport and visa returned",
      body: "Once the passport is released, it is returned to you.",
    },
  ],
} as const

export const corporateVisaSection = {
  title: "Corporate visa support",
  description:
    "Visa Lounge can support business travellers and organisations with visa requirements. Whether you are sending one employee abroad or coordinating several applications, we can discuss what you need.",
  cta: "Explore Corporate Visa",
  overlay: "One traveller or several. The same process.",
  points: [
    { label: "For", value: "Business travellers and organisations" },
    { label: "Process", value: "The same handling as an individual application" },
    { label: "Biometrics", value: "The traveller attends when required" },
  ],
} as const

export const travelInsuranceSection = {
  title: "Travel insurance",
  description:
    "Travel insurance can be an important part of preparing for an international journey. Explore the cover options available through Visa Lounge.",
  cta: "Explore Travel Insurance",
} as const

export const mtcSection = {
  title: "Visa Lounge × My Travel Company",
  description:
    "Visa Lounge is the visa-specialist offering connected with My Travel Company, bringing visa assistance alongside the wider travel services available through MTC.",
  cta: "Travel with MTC",
  visaSide: {
    label: "Visa Lounge",
    line: "Visa assistance, from application to return.",
  },
  travelSide: {
    label: "My Travel Company",
    line: "Wider travel services, through MTC.",
  },
} as const

export const faqItems = [
  {
    q: "Do I need to attend for biometrics?",
    a: "Many visa applications require you to attend in person for biometrics. When this applies to your destination, we will tell you when and where you need to go.",
  },
  {
    q: "What happens to my passport during the process?",
    a: "We collect your passport when the application file is ready and keep it for the duration of processing. Once your passport is released, we return it to you.",
  },
  {
    q: "Does Visa Lounge decide whether my visa is approved?",
    a: "No. The decision rests with the relevant embassy, consulate, or visa authority. Our role is to help prepare and submit your application and coordinate the process.",
  },
  {
    q: "Can I apply for a destination that isn't listed?",
    a: "If you don't see your destination on our site, contact us. We handle many destinations, but some applications may not be available.",
  },
  {
    q: "What happens if my visa is refused?",
    a: "If your visa is refused, the embassy or consulate's decision stands. Contact us to discuss your situation and any next steps that may apply.",
  },
  {
    q: "Can someone else submit my application?",
    a: "This depends on the destination and visa type. Contact us and we can advise based on your circumstances.",
  },
  {
    q: "Can I visit Visa Lounge in person?",
    a: "We operate from Gurugram. Contact us to confirm whether an in-person visit is appropriate for your enquiry.",
  },
  {
    q: "How do I start my application?",
    a: 'Use "Start your visa application" to get in touch. We will guide you through what is needed for your destination.',
  },
] as const
