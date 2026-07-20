import type { CarePartner } from "@/lib/care-partners/types";

/**
 * Fixture / staging partners. Keep `active: false` until a live Partner
 * is approved for Phase B profiles. Phase A does not render a lead form.
 */
export const CARE_PARTNER_FIXTURES: CarePartner[] = [
  // Example shape only — inactive so it never surfaces publicly yet.
  // {
  //   id: "fixture-example",
  //   slug: "example-international-center",
  //   name: "Example International Cancer Center",
  //   summary:
  //     "Illustrative partner profile for development. Not a live listing.",
  //   programs: ["Lung cancer program", "Multidisciplinary tumor board"],
  //   internationalServices: [
  //     "International patient office",
  //     "Remote second-opinion review (if offered)",
  //   ],
  //   externalUrl: "https://www.example.com",
  //   active: false,
  //   cancerTypes: ["lung-cancer"],
  // },
];

export function getActiveCarePartners(): CarePartner[] {
  return CARE_PARTNER_FIXTURES.filter((p) => p.active);
}

export function getCarePartnerBySlug(slug: string): CarePartner | null {
  return CARE_PARTNER_FIXTURES.find((p) => p.slug === slug && p.active) ?? null;
}
