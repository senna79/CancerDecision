import Link from "next/link";
import { notFound } from "next/navigation";
import { Markdown } from "@/components/content/markdown";
import { Section } from "@/components/content/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { MedicalDisclaimer } from "@/components/trust/medical-disclaimer";
import { getStories, getStoryPage } from "@/lib/queries";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

export async function generateStaticParams() {
  const stories = await getStories();
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getStoryPage(slug);
  if (!data) return {};
  return buildMetadata({
    title: data.story.seo_title || data.story.title,
    description:
      data.story.seo_description || data.story.decision_challenge.slice(0, 160),
    path: `/stories/${slug}`,
    keywords: data.story.seo_keywords,
  });
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getStoryPage(slug);
  if (!data) notFound();
  const { story, cancer, treatments, sources } = data;

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-10 md:px-8">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: story.title, path: `/stories/${story.slug}` },
          ]),
          articleJsonLd({
            title: story.title,
            description: story.decision_challenge.slice(0, 160),
            path: `/stories/${story.slug}`,
            dateModified: story.content_reviewed_at,
            datePublished: story.created_at,
          }),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Stories" },
          { label: story.title },
        ]}
      />
      <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
        Decision journey · {story.country} · {story.age_range}
      </p>
      <h1 className="mt-3 font-heading text-4xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
        {story.title}
      </h1>
      {cancer ? (
        <p className="mt-3 text-sm text-[var(--muted)]">
          Cancer type:{" "}
          <Link
            href={`/cancers/${cancer.slug}`}
            className="text-[var(--accent)] hover:underline"
          >
            {cancer.name}
          </Link>
        </p>
      ) : null}

      <Section title="Patient Background">
        <Markdown content={story.background} />
      </Section>
      <Section title="Initial Diagnosis">
        <Markdown content={story.initial_diagnosis} />
      </Section>
      <Section title="Decision Challenge">
        <Markdown content={story.decision_challenge} />
      </Section>
      <Section title="Options Considered">
        <Markdown content={story.options_considered} />
        {treatments.length > 0 ? (
          <ul className="mt-3 list-disc space-y-1 pl-5">
            {treatments.map((tx) => (
              <li key={tx.id}>
                <Link
                  href={`/treatments/${tx.slug}`}
                  className="text-[var(--accent)] hover:underline"
                >
                  {tx.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </Section>
      <Section title="Why Options Were Compared">
        <Markdown content={story.why_compared} />
      </Section>
      <Section title="Final Decision">
        <Markdown content={story.final_decision} />
      </Section>
      <Section title="Lessons Learned">
        <Markdown content={story.lessons_learned} />
      </Section>

      <MedicalDisclaimer reviewedAt={story.content_reviewed_at} sources={sources} />
    </div>
  );
}
