import Link from "next/link";
import { notFound } from "next/navigation";
import { DecisionMapView } from "@/components/cancer/decision-map";
import { Markdown } from "@/components/content/markdown";
import { Section } from "@/components/content/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { MedicalDisclaimer } from "@/components/trust/medical-disclaimer";
import { TrustStrip } from "@/components/trust/trust-strip";
import { getCancerDecisionCenter, getCancers } from "@/lib/queries";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

export async function generateStaticParams() {
  const cancers = await getCancers();
  return cancers.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getCancerDecisionCenter(slug);
  if (!data) return {};
  return buildMetadata({
    title: data.cancer.seo_title || `${data.cancer.name} Decision Center`,
    description:
      data.cancer.seo_description || data.cancer.overview.slice(0, 160),
    path: `/cancers/${slug}`,
    keywords: data.cancer.seo_keywords,
  });
}

export default async function CancerDecisionCenterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getCancerDecisionCenter(slug);
  if (!data) notFound();

  const {
    cancer,
    questions,
    treatments,
    stories,
    globalOptions,
    sources,
    decisionMap,
    secondOpinionQuestions,
  } = data;

  const questionTitles = Object.fromEntries(
    questions.map((q) => [q.slug, q.title])
  );
  const treatmentNames = Object.fromEntries(
    treatments.map((t) => [t.slug, t.name])
  );
  const storyTitles = Object.fromEntries(stories.map((s) => [s.slug, s.title]));

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Cancers", path: "/cancers" },
            { name: cancer.name, path: `/cancers/${cancer.slug}` },
          ]),
          articleJsonLd({
            title: `${cancer.name} Decision Center`,
            description: cancer.overview.slice(0, 160),
            path: `/cancers/${cancer.slug}`,
            dateModified: cancer.content_reviewed_at,
            datePublished: cancer.created_at,
          }),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Cancers", href: "/cancers" },
          { label: cancer.name },
        ]}
      />
      <TrustStrip reviewedAt={cancer.content_reviewed_at} />
      <h1 className="font-heading text-4xl font-semibold tracking-[-0.03em] text-[var(--ink)] md:text-5xl">
        {cancer.name} Decision Center
      </h1>
      <p className="mt-3 max-w-3xl text-[var(--muted)]">
        Follow the decision journey below, then open the step that matches where
        you are now.
      </p>
      {decisionMap ? (
        <p className="mt-3">
          <a
            href="#decision-map"
            className="text-sm font-semibold text-[var(--accent)] hover:underline"
          >
            Jump to decision map →
          </a>
        </p>
      ) : null}

      <Section title="Cancer Overview">
        <Markdown content={cancer.overview} />
      </Section>

      {decisionMap ? (
        <DecisionMapView
          map={decisionMap}
          questionTitles={questionTitles}
          treatmentNames={treatmentNames}
          storyTitles={storyTitles}
        />
      ) : null}

      <Section title="Common Patient Decisions">
        <ul className="space-y-2">
          {questions.map((q) => (
            <li key={q.id}>
              <Link
                href={`/questions/${q.slug}`}
                className="text-[var(--accent)] hover:underline"
              >
                {q.title}
              </Link>
              <span className="ml-2 text-xs uppercase tracking-wide text-[var(--muted)]">
                {q.category.replaceAll("_", " ")}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Treatment Options">
        <div className="grid gap-3 md:grid-cols-2">
          {treatments.map((tx) => (
            <Link
              key={tx.id}
              href={`/treatments/${tx.slug}`}
              className="rounded-lg border border-[var(--line)] bg-white/70 p-4 hover:border-[var(--accent)]"
            >
              <h3 className="font-heading text-lg font-semibold text-[var(--ink)]">
                {tx.name}
              </h3>
              <p className="mt-1 line-clamp-3 text-sm text-[var(--muted)]">
                {tx.description}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Second Opinion">
        <ul className="space-y-2">
          {secondOpinionQuestions.map((q) => (
            <li key={q.id}>
              <Link
                href={`/questions/${q.slug}`}
                className="text-[var(--accent)] hover:underline"
              >
                {q.title}
              </Link>
            </li>
          ))}
          {secondOpinionQuestions.length === 0 ? (
            <p>No second-opinion questions published for this cancer yet.</p>
          ) : null}
        </ul>
      </Section>

      <Section title="International options (when relevant)">
        <p className="mb-3 text-sm text-[var(--muted)]">
          Cross-border care is a branch of the journey when a specific
          capability is missing locally — not a default destination.
        </p>
        <ul className="space-y-2">
          {globalOptions.map((opt) => (
            <li key={opt.id}>
              <Link
                href="/global-care"
                className="text-[var(--accent)] hover:underline"
              >
                {opt.title}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/global-care" className="text-[var(--accent)] hover:underline">
              International medical guide
            </Link>
          </li>
        </ul>
      </Section>

      <Section title="Illustrative decision journeys">
        <p className="mb-3 text-sm text-[var(--muted)]">
          Editorial examples of how patients compare options — not verified
          personal testimonials.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          {stories.map((story) => (
            <Link
              key={story.id}
              href={`/stories/${story.slug}`}
              className="rounded-lg border border-[var(--line)] bg-white/70 p-4 hover:border-[var(--accent)]"
            >
              <h3 className="font-heading text-lg font-semibold">{story.title}</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Illustrative · {story.country} · {story.age_range}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Related Questions">
        <ul className="space-y-2">
          {questions.slice(0, 8).map((q) => (
            <li key={q.id}>
              <Link
                href={`/questions/${q.slug}`}
                className="text-[var(--accent)] hover:underline"
              >
                {q.title}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <MedicalDisclaimer reviewedAt={cancer.content_reviewed_at} sources={sources} />
    </div>
  );
}
