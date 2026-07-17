import { absoluteUrl } from "./metadata";

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
    dateModified: input.dateModified ?? undefined,
    datePublished: input.datePublished ?? undefined,
    author: {
      "@type": "Organization",
      name: "Global Cancer Decision Platform",
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
}) {
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
    publisher: {
      "@type": "Organization",
      name: "Global Cancer Decision Platform",
    },
  };
}
