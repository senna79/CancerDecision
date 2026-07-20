import type { MetadataRoute } from "next";
import { getSitemapEntries } from "@/lib/queries";
import {
  INDEXABLE_CANCER_SLUG,
  LUNG_SUPPORTING_GUIDE_PATHS,
} from "@/lib/seo/indexing";
import { isAiEntrySlug } from "@/lib/seo/ai-entry-portfolio";
import { isRetiredLungQuestionSlug } from "@/lib/seo/retired-lung-questions";
import { absoluteUrl } from "@/lib/seo/metadata";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { cancers, questions, treatments, stories } = await getSitemapEntries();

  const lung = cancers.find((c) => c.slug === INDEXABLE_CANCER_SLUG);
  const lungQuestions = questions.filter(
    (q) =>
      lung != null &&
      q.cancer_id === lung.id &&
      !isRetiredLungQuestionSlug(q.slug)
  );
  const lungStories = stories.filter(
    (s) => lung != null && s.cancer_id === lung.id
  );

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/cancers"), changeFrequency: "weekly", priority: 0.85 },
    {
      url: absoluteUrl("/cancers/lung-cancer"),
      lastModified: lung?.updated_at,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: absoluteUrl("/global-care"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    { url: absoluteUrl("/about"), changeFrequency: "yearly", priority: 0.5 },
    { url: absoluteUrl("/llms.txt"), changeFrequency: "weekly", priority: 0.4 },
  ];

  const supportingGuides: MetadataRoute.Sitemap =
    LUNG_SUPPORTING_GUIDE_PATHS.map((path) => ({
      url: absoluteUrl(path),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [
    ...staticRoutes,
    ...supportingGuides,
    // Portfolio AI Entries first-class; other lung questions still listed slightly lower
    ...lungQuestions.map((q) => ({
      url: absoluteUrl(`/questions/${q.slug}`),
      lastModified: q.updated_at,
      changeFrequency: "weekly" as const,
      priority: isAiEntrySlug(q.slug) ? 0.95 : 0.8,
    })),
    ...treatments.map((t) => ({
      url: absoluteUrl(`/treatments/${t.slug}`),
      lastModified: t.updated_at,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...lungStories.map((s) => ({
      url: absoluteUrl(`/stories/${s.slug}`),
      lastModified: s.updated_at,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
