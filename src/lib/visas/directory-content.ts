export const visaDirectoryPage = {
  title: "Visa destinations",
  description:
    "Search and browse destinations listed by Visa Lounge. Type, validity, and fees are confirmed for your case.",
  searchPlaceholder: "Search country",
  filterHint:
    "Advanced filters will apply once destination visa details are published.",
  emptySearch: "No destinations match your search.",
  cardFootnote: "Type, validity, and fees confirmed when you enquire.",
  disclaimer:
    "This list reflects countries from the legacy Visa Lounge site and is not a final supported-country inventory. Destination guides are being developed.",
} as const

export const visaDirectoryFilters = {
  delivery: {
    id: "visa-delivery",
    label: "Visa delivery",
    defaultValue: "any",
    options: [
      { value: "any", label: "Any time" },
      { value: "standard", label: "Standard processing" },
      { value: "priority", label: "Priority enquiry" },
    ],
  },
  type: {
    id: "visa-type",
    label: "Type",
    defaultValue: "all",
    options: [
      { value: "all", label: "All visa types" },
      { value: "tourist", label: "Tourist" },
      { value: "business", label: "Business" },
      { value: "other", label: "Other" },
    ],
  },
  documents: {
    id: "visa-documents",
    label: "Documents",
    defaultValue: "any",
    options: [
      { value: "any", label: "Any documents" },
      { value: "minimal", label: "Minimal set" },
      { value: "full", label: "Full file" },
    ],
  },
  travel: {
    id: "visa-travel",
    label: "Travel dates",
    defaultValue: "",
    placeholder: "Select dates",
  },
} as const

export const visaCardMeta = [
  { key: "type", label: "Type", value: "On enquiry" },
  { key: "valid", label: "Valid", value: "On enquiry" },
  { key: "fees", label: "Fees", value: "Quoted for you" },
] as const
