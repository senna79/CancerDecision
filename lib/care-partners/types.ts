/**
 * Care Navigation Partner model (Phase A shape).
 * Profiles and lead forms ship in Phase B / C — see
 * docs/Cancer_Decision_Care_Navigation_Positioning_v1.0.md
 */

export type CarePartnerCancerType =
  | "lung-cancer"
  | "breast-cancer"
  | "other";

export type CarePartner = {
  id: string;
  slug: string;
  name: string;
  /** Short factual summary — not a recommendation */
  summary: string;
  programs: string[];
  internationalServices: string[];
  /** Partner’s own site (outbound fallback) */
  externalUrl?: string;
  /** Handoff inbox — Phase C only */
  contactEmail?: string;
  active: boolean;
  cancerTypes: CarePartnerCancerType[];
};
