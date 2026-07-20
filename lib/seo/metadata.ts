import type { Metadata } from "next";

const SITE_NAME = "Cancer Next Step";
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata(input: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  /** When false, ask crawlers not to index (thin / utility / in-development pages). */
  index?: boolean;
  /** Override default Open Graph type */
  ogType?: "website" | "article";
}): Metadata {
  const title = input.title.includes(SITE_NAME)
    ? input.title
    : `${input.title} | ${SITE_NAME}`;
  const index = input.index !== false;
  const url = absoluteUrl(input.path);
  const ogType = input.ogType ?? "article";

  return {
    title,
    description: input.description,
    keywords: input.keywords,
    metadataBase: new URL(SITE_URL),
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: true },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: input.description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: ogType,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: input.description,
    },
  };
}

export { SITE_NAME, SITE_URL };
