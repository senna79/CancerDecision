import Link from "next/link";
import { notFound } from "next/navigation";
import { Markdown } from "@/components/content/markdown";
import { Section } from "@/components/content/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { MedicalDisclaimer } from "@/components/trust/medical-disclaimer";
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
    keywords: data.question.seo_keywords,
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
            ...question.doctor_questions.map((dq) => ({
              question: dq,
              answer:
                "Discuss this question with your care team in the context of your diagnosis, staging, and personal priorities.",
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
          { label: "Question" },
        ]}
      />

      <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
        {question.category.replaceAll("_", " ")}
        {cancer ? ` · ${cancer.name}` : ""}
      </p>
      <h1 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)] md:text-4xl">
        {question.title}
      </h1>

      <Section title="AI Summary">
        <Markdown content={question.summary} />
      </Section>

      <Section title="Why Patients Ask This">
        <Markdown content={question.why_patients_ask} />
      </Section>

      <Section title="Key Factors To Consider">
        <ul className="list-disc space-y-2 pl-5">
          {question.key_factors.map((factor) => (
            <li key={factor}>{factor}</li>
          ))}
        </ul>
      </Section>

      <Section title="Questions To Ask Your Doctor">
        <ul className="list-disc space-y-2 pl-5">
          {question.doctor_questions.map((dq) => (
            <li key={dq}>{dq}</li>
          ))}
        </ul>
      </Section>

      {question.body ? (
        <Section title="Deeper Context">
          <Markdown content={question.body} />
        </Section>
      ) : null}

      <Section title="Related Treatment Options">
        {treatments.length === 0 ? (
          <p>No linked treatments yet.</p>
        ) : (
          <ul className="space-y-2">
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
        )}
      </Section>

      <Section title="Related Patient Stories">
        {stories.length === 0 ? (
          <p>No linked stories yet.</p>
        ) : (
          <ul className="space-y-2">
            {stories.map((story) => (
              <li key={story.id}>
                <Link
                  href={`/stories/${story.slug}`}
                  className="text-[var(--accent)] hover:underline"
                >
                  {story.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Section title="Related Questions">
        {relatedQuestions.length === 0 ? (
          <p>No related questions yet.</p>
        ) : (
          <ul className="space-y-2">
            {relatedQuestions.map((rq) => (
              <li key={rq.id}>
                <Link
                  href={`/questions/${rq.slug}`}
                  className="text-[var(--accent)] hover:underline"
                >
                  {rq.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Section>

      {cancer ? (
        <p className="mt-8 text-sm text-[var(--muted)]">
          Part of the{" "}
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
