import Link from "next/link";
import { notFound } from "next/navigation";
import { Markdown } from "@/components/content/markdown";
import { Section } from "@/components/content/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { DoctorQuestionsPanel } from "@/components/question/doctor-questions-panel";
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
  faqJsonLd,
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
          articleJsonLd({
            title: question.title,
            description: question.summary.slice(0, 160),
            path: `/questions/${question.slug}`,
            dateModified: question.content_reviewed_at,
            datePublished: question.created_at,
          }),
          faqJsonLd([
            {
              question: question.title,
              answer: question.summary,
            },
            {
              question: `Why do patients ask: ${question.title}`,
              answer: question.why_patients_ask,
            },
            ...question.doctor_questions.map((dq) => ({
              question: dq,
              answer: `Use this question with your care team while reviewing your ${cancer?.name ?? "cancer"} situation, staging details, and personal priorities. ${question.key_factors.slice(0, 2).join("; ")}.`,
            })),
          ]),
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
          { label: "Decision question" },
        ]}
      />

      <TrustStrip reviewedAt={question.content_reviewed_at} />

      <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
        {question.category.replaceAll("_", " ")}
        {cancer ? ` · ${cancer.name}` : ""}
      </p>
      <h1 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)] md:text-4xl">
        {question.title}
      </h1>

      <SummaryPanel summary={question.summary} />

      <Section title="Why patients ask this">
        <Markdown content={question.why_patients_ask} />
      </Section>

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

      <RelatedPathway
        title="Related treatment options"
        items={treatments.map((tx) => ({
          href: `/treatments/${tx.slug}`,
          title: tx.name,
          meta: "Treatment comparison",
        }))}
        emptyHint="No linked treatments yet."
      />

      <RelatedPathway
        title="Related patient stories"
        items={stories.map((story) => ({
          href: `/stories/${story.slug}`,
          title: story.title,
          meta: `${story.country} · ${story.age_range}`,
        }))}
        emptyHint="No linked stories yet."
      />

      <RelatedPathway
        title="Related questions"
        items={relatedQuestions.map((rq) => ({
          href: `/questions/${rq.slug}`,
          title: rq.title,
          meta: rq.category.replaceAll("_", " "),
        }))}
        emptyHint="No related questions yet."
      />

      {cancer ? (
        <p className="mt-4 text-sm text-[var(--muted)]">
          Continue in the{" "}
          <Link
            href={`/cancers/${cancer.slug}`}
            className="text-[var(--accent)] hover:underline"
          >
            {cancer.name} Decision Center
          </Link>
        </p>
      ) : null}

      <MedicalDisclaimer
        reviewedAt={question.content_reviewed_at}
        sources={sources}
      />
    </div>
  );
}
