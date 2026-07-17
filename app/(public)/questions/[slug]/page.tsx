import Link from "next/link";
import { notFound } from "next/navigation";
import { Markdown } from "@/components/content/markdown";
import { Section } from "@/components/content/section";
import { DecisionWorkspace } from "@/components/journey/decision-workspace";
import { JourneyProgressRail } from "@/components/journey/progress-rail";
import { JourneyStepNav } from "@/components/journey/step-nav";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { DoctorQuestionsPanel } from "@/components/question/doctor-questions-panel";
import { JourneySections } from "@/components/question/journey-sections";
import { RelatedPathway } from "@/components/question/related-pathway";
import { SummaryPanel } from "@/components/question/summary-panel";
import { JsonLd } from "@/components/seo/json-ld";
import { MedicalDisclaimer } from "@/components/trust/medical-disclaimer";
import { SourcesList } from "@/components/trust/sources-list";
import { TrustStrip } from "@/components/trust/trust-strip";
import { getQuestionPage, getQuestions } from "@/lib/queries";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  medicalWebPageJsonLd,
  questionAnswerJsonLd,
} from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

export async function generateStaticParams() {
  const questions = await getQuestions();
  return questions.map((q) => ({ slug: q.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getQuestionPage(slug);
  if (!data) return {};
  return buildMetadata({
    title: data.question.seo_title || data.question.title,
    description:
      data.question.seo_description || data.question.summary.slice(0, 160),
    path: `/questions/${slug}`,
    keywords: data.question.seo_keywords.length
      ? data.question.seo_keywords
      : data.question.key_factors.slice(0, 6),
  });
}

export default async function QuestionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getQuestionPage(slug);
  if (!data) notFound();

  const {
    question,
    cancer,
    treatments,
    stories,
    relatedQuestions,
    sources,
    journey,
  } = data;

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-10 md:px-8">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            ...(cancer
              ? [
                  { name: "Cancers", path: "/cancers" },
                  { name: cancer.name, path: `/cancers/${cancer.slug}` },
                ]
              : []),
            { name: question.title, path: `/questions/${question.slug}` },
          ]),
          medicalWebPageJsonLd({
            title: question.title,
            description: question.summary.slice(0, 160),
            path: `/questions/${question.slug}`,
            dateModified: question.content_reviewed_at,
            aboutName: cancer?.name,
            mentions: [
              question.category.replaceAll("_", " "),
              ...(journey
                ? [
                    journey.currentNode.state_label ??
                      journey.currentNode.label.replace(/^\d+\.\s*/, ""),
                  ]
                : []),
            ],
            relatedTreatmentNames: treatments.map((tx) => tx.name),
            partOfName: journey
              ? journey.map.title
              : cancer
                ? `${cancer.name} Decision Center`
                : null,
            partOfUrl: cancer
              ? `/cancers/${cancer.slug}${journey ? "#decision-map" : ""}`
              : null,
          }),
          articleJsonLd({
            title: question.title,
            description: question.summary.slice(0, 160),
            path: `/questions/${question.slug}`,
            dateModified: question.content_reviewed_at,
            datePublished: question.created_at,
          }),
          questionAnswerJsonLd({
            question: question.title,
            answer: question.summary,
          }),
        ]}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          ...(cancer
            ? [
                { label: "Cancers", href: "/cancers" },
                { label: cancer.name, href: `/cancers/${cancer.slug}` },
              ]
            : []),
          { label: journey ? "Journey step" : "Decision question" },
        ]}
      />

      <TrustStrip reviewedAt={question.content_reviewed_at} />

      {journey && cancer ? (
        <JourneyProgressRail journey={journey} cancerSlug={cancer.slug} />
      ) : null}

      <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
        {question.category.replaceAll("_", " ")}
        {cancer ? ` · ${cancer.name}` : ""}
        {journey
          ? ` · ${journey.currentNode.state_label ?? `Step ${journey.currentNode.sort_order}`}`
          : ""}
      </p>
      <h1 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)] md:text-4xl">
        {question.title}
      </h1>

      <SummaryPanel summary={question.summary} />

      {journey ? (
        <DecisionWorkspace question={question} journey={journey} />
      ) : null}

      <Section title="Why patients ask this">
        <Markdown content={question.why_patients_ask} />
      </Section>

      <JourneySections question={question} />

      <Section title="Key factors to consider">
        <ul className="space-y-3">
          {question.key_factors.map((factor) => (
            <li
              key={factor}
              className="flex gap-3 rounded-md border border-[var(--line)] bg-white/60 px-4 py-3"
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>{factor}</span>
            </li>
          ))}
        </ul>
      </Section>

      <DoctorQuestionsPanel questions={question.doctor_questions} />

      {question.body ? (
        <Section title="Deeper context">
          <Markdown content={question.body} />
        </Section>
      ) : null}

      <SourcesList sources={sources} />

      {journey && cancer ? (
        <JourneyStepNav journey={journey} cancerSlug={cancer.slug} />
      ) : null}

      <RelatedPathway
        title="Compare treatments for this step"
        items={treatments.map((tx) => ({
          href: `/treatments/${tx.slug}`,
          title: tx.name,
          meta: "Treatment comparison",
        }))}
        emptyHint="No linked treatments yet."
      />

      <RelatedPathway
        title="Illustrative journeys at nearby stages"
        items={stories.map((story) => ({
          href: `/stories/${story.slug}`,
          title: story.title,
          meta: `Illustrative · ${story.country} · ${story.age_range}`,
        }))}
        emptyHint="No linked stories yet."
      />

      {!journey ? (
        <RelatedPathway
          title="Related questions"
          items={relatedQuestions.map((rq) => ({
            href: `/questions/${rq.slug}`,
            title: rq.title,
            meta: rq.category.replaceAll("_", " "),
          }))}
          emptyHint="No related questions yet."
        />
      ) : null}

      {cancer ? (
        <div className="mt-6 text-sm text-[var(--muted)]">
          <Link
            href={`/cancers/${cancer.slug}#decision-map`}
            className="font-semibold text-[var(--accent)] hover:underline"
          >
            Open full {cancer.name} Decision Map →
          </Link>
        </div>
      ) : null}

      <MedicalDisclaimer
        reviewedAt={question.content_reviewed_at}
        sources={sources}
      />
    </div>
  );
}
