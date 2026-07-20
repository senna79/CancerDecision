import { absoluteUrl, SITE_NAME } from "./metadata";
import { SITE_ORGANIZATION } from "./organization";

function organizationNode(extra?: Record<string, unknown>) {
  return {
    "@type": "Organization" as const,
    name: SITE_ORGANIZATION.name,
    url: SITE_ORGANIZATION.url,
    ...extra,
  };
}

/** Sitewide Organization + WebSite graph for E-E-A-T / AI discovery. */
export function organizationWebSiteJsonLd() {
  const orgId = absoluteUrl("/#organization");
  const siteId = absoluteUrl("/#website");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE_ORGANIZATION.name,
        legalName: SITE_ORGANIZATION.legalName,
        url: SITE_ORGANIZATION.url,
        description: SITE_ORGANIZATION.description,
        publishingPrinciples: SITE_ORGANIZATION.publishingPrinciples,
        knowsAbout: [
          "Lung cancer decision making",
          "Cancer patient education",
          "Second opinion preparation",
          "Treatment option comparison",
        ],
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        name: SITE_NAME,
        url: SITE_ORGANIZATION.url,
        description: SITE_ORGANIZATION.description,
        inLanguage: "en",
        publisher: { "@id": orgId },
      },
    ],
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  dateModified?: string | null;
  datePublished?: string | null;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    mainEntityOfPage: absoluteUrl(input.path),
    url: absoluteUrl(input.path),
    dateModified: input.dateModified ?? undefined,
    datePublished: input.datePublished ?? undefined,
    inLanguage: "en",
    isAccessibleForFree: true,
    author: organizationNode(),
    publisher: organizationNode({
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/opengraph-image"),
      },
    }),
    reviewedBy: {
      "@type": "Organization",
      name: SITE_ORGANIZATION.editorialReviewerName,
    },
  };
}

/** Use only when the page visibly answers multiple distinct FAQ items. */
export function faqJsonLd(
  items: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** Primary Q&A for a decision question page (not FAQPage). */
export function questionAnswerJsonLd(input: {
  question: string;
  answer: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Question",
    name: input.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: input.answer,
    },
  };
}

export function medicalWebPageJsonLd(input: {
  title: string;
  description: string;
  path: string;
  dateModified?: string | null;
  aboutName?: string | null;
  /** Decision-moment / journey labels */
  mentions?: string[];
  /** Typed entities for AI Search (procedure, test, therapy names) */
  mentionEntities?: Array<{
    type: "MedicalProcedure" | "MedicalTest" | "MedicalTherapy" | "Thing";
    name: string;
  }>;
  relatedTreatmentNames?: string[];
  partOfName?: string | null;
  partOfUrl?: string | null;
  /** Adjacent Decision Graph neighbors */
  relatedLinks?: Array<{ name: string; url: string }>;
  /** Primary next-step URL on the Decision Graph */
  significantLinkUrl?: string | null;
}) {
  const mentions = [
    ...(input.mentions ?? []).map((name) => ({
      "@type": "Thing" as const,
      name,
    })),
    ...(input.mentionEntities ?? []).map((entity) => ({
      "@type": entity.type,
      name: entity.name,
    })),
    ...(input.relatedTreatmentNames ?? []).map((name) => ({
      "@type": "MedicalTherapy" as const,
      name,
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    lastReviewed: input.dateModified ?? undefined,
    audience: {
      "@type": "MedicalAudience",
      audienceType: "Patient",
    },
    about: input.aboutName
      ? {
          "@type": "MedicalCondition",
          name: input.aboutName,
        }
      : undefined,
    mentions: mentions.length > 0 ? mentions : undefined,
    isPartOf:
      input.partOfName && input.partOfUrl
        ? {
            "@type": "WebPage",
            name: input.partOfName,
            url: absoluteUrl(input.partOfUrl),
          }
        : undefined,
    relatedLink: input.relatedLinks?.length
      ? input.relatedLinks.map((link) => absoluteUrl(link.url))
      : undefined,
    significantLink: input.significantLinkUrl
      ? absoluteUrl(input.significantLinkUrl)
      : undefined,
    inLanguage: "en",
    isAccessibleForFree: true,
    publisher: organizationNode(),
    author: organizationNode(),
    reviewedBy: {
      "@type": "Organization",
      name: SITE_ORGANIZATION.editorialReviewerName,
    },
  };
}
