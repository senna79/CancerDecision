import type { MetadataRoute } from "next";
import { isRetiredBreastQuestionSlug } from "@/lib/content/breast-entry-slugs";
import { getSitemapEntries } from "@/lib/queries";
import {
  INDEXABLE_CANCER_SLUGS,
  SUPPORTING_GUIDE_PATHS,
} from "@/lib/seo/indexing";
import { isAiEntrySlug } from "@/lib/seo/ai-entry-portfolio";
import { isRetiredLungQuestionSlug } from "@/lib/seo/retired-lung-questions";
import { absoluteUrl } from "@/lib/seo/metadata";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { cancers, questions, treatments, stories } = await getSitemapEntries();

  const indexableCancers = cancers.filter((c) =>
    (INDEXABLE_CANCER_SLUGS as readonly string[]).includes(c.slug)
  );
  const indexableCancerIds = new Set(indexableCancers.map((c) => c.id));

  const indexableQuestions = questions.filter(
    (q) =>
      indexableCancerIds.has(q.cancer_id) &&
      !isRetiredLungQuestionSlug(q.slug) &&
      !isRetiredBreastQuestionSlug(q.slug)
  );
  const indexableStories = stories.filter((s) =>
    indexableCancerIds.has(s.cancer_id)
  );

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/cancers"), changeFrequency: "weekly", priority: 0.85 },
    ...indexableCancers.map((cancer) => ({
      url: absoluteUrl(`/cancers/${cancer.slug}`),
      lastModified: cancer.updated_at,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    })),
    {
      url: absoluteUrl("/global-care"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    { url: absoluteUrl("/about"), changeFrequency: "yearly", priority: 0.5 },
    { url: absoluteUrl("/llms.txt"), changeFrequency: "weekly", priority: 0.4 },
  ];

  const supportingGuides: MetadataRoute.Sitemap = SUPPORTING_GUIDE_PATHS.map(
    (path) => ({
      url: absoluteUrl(path),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  return [
    ...staticRoutes,
    ...supportingGuides,
    ...indexableQuestions.map((q) => ({
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
    ...indexableStories.map((s) => ({
      url: absoluteUrl(`/stories/${s.slug}`),
      lastModified: s.updated_at,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
