import type { MetadataRoute } from "next";
import { getSitemapEntries } from "@/lib/queries";
import { absoluteUrl } from "@/lib/seo/metadata";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { cancers, questions, treatments, stories } = await getSitemapEntries();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/cancers"), changeFrequency: "weekly", priority: 0.9 },
    {
      url: absoluteUrl("/global-care"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: absoluteUrl("/about"), changeFrequency: "yearly", priority: 0.5 },
  ];

  return [
    ...staticRoutes,
    ...cancers.map((c) => ({
      url: absoluteUrl(`/cancers/${c.slug}`),
      lastModified: c.updated_at,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...questions.map((q) => ({
      url: absoluteUrl(`/questions/${q.slug}`),
      lastModified: q.updated_at,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...treatments.map((t) => ({
      url: absoluteUrl(`/treatments/${t.slug}`),
      lastModified: t.updated_at,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...stories.map((s) => ({
      url: absoluteUrl(`/stories/${s.slug}`),
      lastModified: s.updated_at,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
