/**
 * Normalization notes for the legacy Visa Lounge destination list.
 *
 * UAE / Dubai:
 * The legacy site listed "Dubai" in the footer and "UNITED ARAB EMIRATES" on the
 * homepage trending cards as separate labels. They are represented here as a single
 * record (United Arab Emirates). The legacy Dubai tourist page lives at
 * `/__dubai-tourist-visa-summay`. The slug `/dubai` on the legacy site currently
 * resolves to unrelated blog content and is not used as this record's legacyUrl.
 *
 * New Zealand:
 * The legacy footer link text used the misspelling "New-Zieland". The working legacy
 * page path is `/new-zealand`.
 *
 * China:
 * The legacy page path is `/china-business-summary` (business summary), not a generic
 * tourist summary URL.
 */

export const legacyNormalizationNotes = {
  uaeDubai:
    "United Arab Emirates merges legacy labels 'Dubai' (footer) and 'UNITED ARAB EMIRATES' (homepage). Legacy Dubai page: /__dubai-tourist-visa-summay",
  newZealand:
    'Footer link text used "New-Zieland"; legacy page path is /new-zealand',
  china:
    "Legacy URL is /china-business-summary (business summary page)",
} as const
