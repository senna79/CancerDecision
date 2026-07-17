import type { Metadata } from "next";

const SITE_NAME = "Cancer Next Step";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function absoluteUrl(path: string): string {
  return `${SITE_URL.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata(input: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const title = input.title.includes(SITE_NAME)
    ? input.title
    : `${input.title} | ${SITE_NAME}`;

  return {
    title,
    description: input.description,
    keywords: input.keywords,
    alternates: {
      canonical: absoluteUrl(input.path),
    },
    openGraph: {
      title,
      description: input.description,
      url: absoluteUrl(input.path),
      siteName: SITE_NAME,
      type: "article",
    },
  };
}

export { SITE_NAME, SITE_URL };
