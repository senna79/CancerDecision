/**
 * CancerDecision Source & Trust Framework v1.0
 * See docs/CancerDecision_Source_Trust_Framework_v1.0.md
 * Entry-specific references: docs/CancerDecision_Lung_AI_Entry_Source_Mapping_v1.0.md
 */

export type GuidanceOrganization = {
  name: string;
  shortName: string;
};

/** Default guidance families shown on lung Tier-1 Entry trust modules */
export const LUNG_GUIDANCE_ORGANIZATIONS: GuidanceOrganization[] = [
  {
    name: "National Comprehensive Cancer Network",
    shortName: "NCCN",
  },
  { name: "National Cancer Institute", shortName: "NCI" },
  {
    name: "American Society of Clinical Oncology",
    shortName: "ASCO / Cancer.Net",
  },
  {
    name: "European Society for Medical Oncology",
    shortName: "ESMO",
  },
];

export const TRUST_COPY = {
  purpose: "Decision support and patient preparation",
  notPurpose: "Diagnosis or medical advice",
  reviewedAgainst:
    "Current clinical guidelines and publicly available patient education resources",
  aiAssisted: "AI-assisted content creation",
  editorialReview:
    "Reviewed for structure, accuracy, and source alignment",
  notMedicallyReviewedDefault:
    "Not physician-medically reviewed unless a named medical reviewer is listed.",
  educationalBoundary:
    "Educational information only — not a diagnosis or treatment recommendation.",
  disclaimer:
    "This content provides educational information and does not replace professional medical advice, diagnosis, or treatment. Always discuss decisions with your clinicians.",
  sourcesIntro:
    "This page is informed by publicly available cancer guidance from NCCN, NCI, ASCO/Cancer.Net, and ESMO. Entry-specific references are listed below.",
} as const;

export type TrustReviewMeta = {
  reviewedAt?: string | null;
  /** Named physician reviewer — only pass when actually reviewed */
  medicallyReviewedBy?: string | null;
  medicalSpecialty?: string | null;
};

export function formatTrustDate(
  value: string | null | undefined,
  style: "long" | "short" = "long"
): string {
  if (!value) return "Not yet checked";
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: style === "long" ? "long" : "short",
    day: "numeric",
  }).format(new Date(value));
}
