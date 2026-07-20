import Link from "next/link";
import { notFound } from "next/navigation";
import { Markdown } from "@/components/content/markdown";
import { Section } from "@/components/content/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { StoryJourneyLoop } from "@/components/journey/story-journey-loop";
import { MedicalDisclaimer } from "@/components/trust/medical-disclaimer";
import { StoryDisclosure } from "@/components/trust/story-disclosure";
import { TrustStrip } from "@/components/trust/trust-strip";
import { getStories, getStoryPage } from "@/lib/queries";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { isIndexableCancerSlug } from "@/lib/seo/indexing";
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
    index: isIndexableCancerSlug(data.cancer?.slug),
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
  const {
    story,
    cancer,
    treatments,
    sources,
    journeyLoop,
    questionTitles,
    treatmentNames,
  } = data;

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
      <TrustStrip reviewedAt={story.content_reviewed_at} />
      <StoryDisclosure />
      <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
        Illustrative decision journey · {story.country} · {story.age_range}
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

      <Section title="Patient background">
        <Markdown content={story.background} />
      </Section>
      <Section title="Initial diagnosis">
        <Markdown content={story.initial_diagnosis} />
      </Section>
      <Section title="Decision challenge">
        <Markdown content={story.decision_challenge} />
      </Section>
      <Section title="Options considered">
        <ul className="space-y-2">
          {story.options_considered.map((option) => (
            <li
              key={option}
              className="flex gap-3 rounded-md border border-[var(--line)] bg-white/60 px-4 py-3"
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>{option}</span>
            </li>
          ))}
        </ul>
        {treatments.length > 0 ? (
          <div className="mt-4">
            <p className="text-sm font-medium text-[var(--ink)]">
              Linked treatment comparisons
            </p>
            <ul className="mt-2 space-y-1">
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
          </div>
        ) : null}
      </Section>
      <Section title="Why options were compared">
        <Markdown content={story.why_compared} />
      </Section>
      <section className="scroll-mt-24 py-8">
        <div className="rounded-lg border border-[var(--accent)]/20 bg-white/80 p-5 md:p-6">
          <h2 className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)]">
            Final decision
          </h2>
          <div className="mt-3 text-[var(--ink-soft)] leading-relaxed">
            <Markdown content={story.final_decision} />
          </div>
        </div>
      </section>
      <Section title="Lessons learned">
        <ul className="space-y-3">
          {story.lessons_learned.map((lesson) => (
            <li
              key={lesson}
              className="rounded-md border border-[var(--line)] bg-[var(--paper-deep)]/70 px-4 py-3 leading-relaxed"
            >
              {lesson}
            </li>
          ))}
        </ul>
      </Section>

      {journeyLoop && cancer ? (
        <StoryJourneyLoop
          cancerSlug={cancer.slug}
          cancerName={cancer.name}
          currentNode={journeyLoop.currentNode}
          nextNode={journeyLoop.nextNode}
          nextQuestionSlug={journeyLoop.nextQuestionSlug}
          questionTitles={questionTitles}
          treatmentNames={treatmentNames}
        />
      ) : cancer ? (
        <section className="mt-10 rounded-lg border border-[var(--line)] bg-white/80 p-5">
          <p className="text-sm text-[var(--muted)]">
            Continue exploring the{" "}
            <Link
              href={`/cancers/${cancer.slug}#decision-map`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              {cancer.name} Decision Map
            </Link>
            .
          </p>
        </section>
      ) : null}

      <MedicalDisclaimer reviewedAt={story.content_reviewed_at} sources={sources} />
    </div>
  );
}
