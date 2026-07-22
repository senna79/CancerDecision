import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { Markdown } from "@/components/content/markdown";
import { Section } from "@/components/content/section";
import { DecisionJourneyNav } from "@/components/journey/decision-journey-nav";
import { DecisionWorkspace } from "@/components/journey/decision-workspace";
import { NextActionClose } from "@/components/journey/next-action-close";
import { JourneyProgressRail } from "@/components/journey/progress-rail";
import { JourneyStepNav } from "@/components/journey/step-nav";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { AiEntryFlagshipBody } from "@/components/question/ai-entry/flagship-body";
import { AiEntryFlagshipBodyV2 } from "@/components/question/ai-entry/flagship-body-v2";
import { DecisionContext } from "@/components/question/ai-entry/decision-context";
import { EntryViewBeacon } from "@/components/analytics/entry-view-beacon";
import { EntryHeroV2 } from "@/components/question/ai-entry/entry-hero-v2";
import { EntryPageEndingV2 } from "@/components/question/ai-entry/entry-page-ending-v2";
import { AiEntrySections } from "@/components/question/ai-entry-sections";
import { CitationBlock } from "@/components/question/citation-block";
import { usesEntryTemplateV2 } from "@/lib/content/entry-template-v2";
import { DoctorQuestionsPanel } from "@/components/question/doctor-questions-panel";
import { JourneySections } from "@/components/question/journey-sections";
import { RelatedPathway } from "@/components/question/related-pathway";
import { RelationshipStrip } from "@/components/question/relationship-strip";
import { SummaryPanel } from "@/components/question/summary-panel";
import { JsonLd } from "@/components/seo/json-ld";
import { SourcesAndReview } from "@/components/trust/sources-and-review";
import { TrustStrip } from "@/components/trust/trust-strip";
import { getAiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";
import { getDecisionGraphNodeByAiEntrySlug } from "@/lib/os/decision-graph";
import { getQuestionPage, getQuestions } from "@/lib/queries";
import {
  getAiEntryBySlug,
  getRelatedAiEntries,
  isAiEntrySlug,
} from "@/lib/seo/ai-entry-portfolio";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  medicalWebPageJsonLd,
  questionAnswerJsonLd,
} from "@/lib/seo/json-ld";
import { isIndexableQuestionSlug } from "@/lib/seo/indexing";
import { breastLegacyQuestionRedirect } from "@/lib/content/breast-entry-slugs";
import {
  cancerSituationMapHref,
  momentIdForEntrySlug,
} from "@/lib/journey/decision-moments";
import { retiredLungQuestionRedirect } from "@/lib/seo/retired-lung-questions";
import { buildMetadata } from "@/lib/seo/metadata";

function legacyQuestionRedirect(slug: string): string | undefined {
  return (
    retiredLungQuestionRedirect(slug) ?? breastLegacyQuestionRedirect(slug)
  );
}

export async function generateStaticParams() {
  const questions = await getQuestions();
  return questions
    .filter((q) => !legacyQuestionRedirect(q.slug))
    .map((q) => ({ slug: q.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (legacyQuestionRedirect(slug)) return {};
  const data = await getQuestionPage(slug);
  if (!data) return {};
  const portfolioIntents = getAiEntryBySlug(slug)?.searchIntents ?? [];
  const keywords = Array.from(
    new Set(
      [
        ...data.question.seo_keywords,
        ...portfolioIntents,
        ...data.question.key_factors.slice(0, 4),
      ].filter(Boolean)
    )
  ).slice(0, 16);
  return buildMetadata({
    title: data.question.seo_title || data.question.title,
    description:
      data.question.seo_description || data.question.summary.slice(0, 160),
    path: `/questions/${slug}`,
    keywords: keywords.length
      ? keywords
      : data.question.key_factors.slice(0, 6),
    index: isIndexableQuestionSlug(slug, data.cancer?.slug),
  });
}

export default async function QuestionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const retiredTo = legacyQuestionRedirect(slug);
  if (retiredTo) permanentRedirect(retiredTo);
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

  const aiEntry = isAiEntrySlug(question.slug);
  const entryMeta = getAiEntryBySlug(question.slug);
  const relatedEntries = entryMeta ? getRelatedAiEntries(entryMeta) : [];
  const flagship = getAiEntryFlagshipModules(question.slug);
  const entryV2 = usesEntryTemplateV2(question.slug);
  const graphNode = getDecisionGraphNodeByAiEntrySlug(question.slug);
  const pageDescription =
    question.seo_description || question.summary.slice(0, 160);
  const graphRelatedLinks = graphNode
    ? [...graphNode.next, ...graphNode.related]
        .filter((link) => !!link.href)
        .slice(0, 8)
        .map((link) => ({
          name: link.stateLabel,
          url: link.href as string,
        }))
    : [];
  const significantNext = graphNode?.next.find((link) => link.href)?.href ?? null;
  const relationshipRelated =
    graphRelatedLinks.length > 0
      ? graphRelatedLinks.map((link) => ({
          href: link.url,
          label: link.name,
        }))
      : relatedEntries.map((e) => ({
          href: `/questions/${e.slug}`,
          label: e.decisionLabel,
        }));

  return (
    <div
      className={
        entryV2
          ? "mx-auto w-full max-w-6xl px-5 py-10 md:px-8"
          : "mx-auto w-full max-w-3xl px-5 py-10 md:px-8"
      }
    >
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
            description: pageDescription,
            path: `/questions/${question.slug}`,
            dateModified: question.content_reviewed_at,
            aboutName: cancer?.name,
            mentions: [
              question.category.replaceAll("_", " "),
              ...(entryMeta ? [entryMeta.decisionLabel] : []),
              ...(graphNode ? [graphNode.stateLabel, "decision navigation"] : []),
              ...(flagship
                ? [
                    cancer?.slug === "breast-cancer"
                      ? "breast cancer decision journey"
                      : "lung cancer decision journey",
                  ]
                : []),
              ...(aiEntry ? ["decision entry", "patient navigation"] : []),
            ],
            mentionEntities: [
              ...(treatments.some((tx) =>
                tx.slug.toLowerCase().includes("surgery")
              ) || question.slug.includes("surgery")
                ? [{ type: "MedicalProcedure" as const, name: "Surgery" }]
                : []),
              ...(question.slug.includes("biomarker")
                ? [
                    {
                      type: "MedicalTest" as const,
                      name: "Biomarker Testing",
                    },
                  ]
                : []),
            ],
            relatedTreatmentNames: treatments.map((tx) => tx.name),
            partOfName: cancer
              ? `${cancer.name} Decision Journey`
              : journey
                ? journey.map.title
                : null,
            partOfUrl: cancer
              ? cancerSituationMapHref(cancer.slug)
              : null,
            relatedLinks: graphRelatedLinks,
            significantLinkUrl: significantNext,
          }),
          articleJsonLd({
            title: question.title,
            description: pageDescription,
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
          {
            label: "Home",
            href: cancer
              ? cancer.slug === "lung-cancer"
                ? "/#choose-cancer"
                : `/?cancer=${cancer.slug}#choose-cancer`
              : "/",
          },
          ...(cancer
            ? [
                { label: "Cancers", href: "/cancers" },
                {
                  label: cancer.name,
                  href: cancerSituationMapHref(cancer.slug),
                },
              ]
            : []),
          {
            label: flagship
              ? "AI decision entry"
              : aiEntry
                ? "AI decision entry"
                : journey
                  ? "Journey step"
                  : "Decision question",
          },
        ]}
      />

      <TrustStrip reviewedAt={question.content_reviewed_at} />

      {aiEntry || flagship ? (
        <EntryViewBeacon
          slug={question.slug}
          template={entryV2 ? "v2" : flagship ? "v1" : "classic"}
        />
      ) : null}

      {journey && cancer && !entryV2 ? (
        <JourneyProgressRail journey={journey} cancerSlug={cancer.slug} />
      ) : null}

      {!flagship ? (
        <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
          {question.category.replaceAll("_", " ")}
          {cancer ? ` · ${cancer.name}` : ""}
          {journey
            ? ` · ${journey.currentNode.state_label ?? `Step ${journey.currentNode.sort_order}`}`
            : ""}
          {aiEntry ? " · Decision entry" : ""}
        </p>
      ) : null}

      {entryV2 ? (
        <EntryHeroV2 title={question.title}>
          {aiEntry ? (
            <CitationBlock
              answer={question.summary}
              questionTitle={question.title}
              compact
              eyebrow="Direct answer"
            />
          ) : (
            <SummaryPanel summary={question.summary} />
          )}
          {cancer ? (
            <p className="mt-4 text-sm text-[var(--ink-soft)]">
              Not sure this is your step?{" "}
              <Link
                href={cancerSituationMapHref(
                  cancer.slug,
                  momentIdForEntrySlug(question.slug)
                )}
                className="font-semibold text-[var(--accent)] hover:underline"
              >
                Start from your situation →
              </Link>
            </p>
          ) : null}
        </EntryHeroV2>
      ) : (
        <>
          <h1 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)] md:text-4xl">
            {question.title}
          </h1>
          {flagship?.subtitle ? (
            <p className="mt-3 text-lg text-[var(--ink-soft)] md:text-xl">
              {flagship.subtitle}
            </p>
          ) : null}
          {flagship ? <DecisionContext modules={flagship} /> : null}
          {aiEntry ? (
            <CitationBlock
              answer={question.summary}
              questionTitle={question.title}
              eyebrow="Direct answer · AI citation block"
              formHint={
                flagship
                  ? "Direct answer · under 100 words · citation-ready"
                  : "Form: direct answer → when it matters → when it may not → next step"
              }
            />
          ) : (
            <SummaryPanel summary={question.summary} />
          )}
        </>
      )}

      {flagship && !entryV2 ? (
        <p className="mt-4 text-sm text-[var(--muted)]">
          <a
            href="#your-next-step"
            className="font-semibold text-[var(--accent)] hover:underline"
          >
            Jump to your next step →
          </a>
          {" · "}
          <a
            href="#decision-journey"
            className="font-semibold text-[var(--accent)] hover:underline"
          >
            See your journey
          </a>
        </p>
      ) : null}

      {aiEntry && (entryMeta || graphNode) && cancer && !entryV2 ? (
        <RelationshipStrip
          about={{
            href: `/cancers/${cancer.slug}`,
            label: cancer.name,
          }}
          decision={
            entryMeta?.decisionLabel ??
            graphNode?.stateLabel ??
            question.title
          }
          partOf={{
            href: cancerSituationMapHref(cancer.slug),
            label: `${cancer.name} Decision Journey`,
          }}
          related={relationshipRelated}
        />
      ) : null}

      {flagship && graphNode && cancer && !entryV2 ? (
        <DecisionJourneyNav
          node={graphNode}
          cancerSlug={cancer.slug}
          cancerName={cancer.name}
        />
      ) : null}

      {flagship ? (
        <>
          {entryV2 ? (
            <AiEntryFlagshipBodyV2 modules={flagship} slug={question.slug} />
          ) : (
            <AiEntryFlagshipBody modules={flagship} />
          )}
          {entryV2 ? (
            <EntryPageEndingV2
              modules={flagship}
              slug={question.slug}
              graphNode={graphNode}
              cancerSlug={cancer?.slug}
              cancerName={cancer?.name}
            />
          ) : null}
          {journey && cancer && !entryV2 ? (
            <JourneyStepNav journey={journey} cancerSlug={cancer.slug} />
          ) : null}
          {cancer && !entryV2 ? (
            <div className="mt-6 text-sm text-[var(--muted)]">
              <Link
                href={cancerSituationMapHref(cancer.slug)}
                className="font-semibold text-[var(--accent)] hover:underline"
              >
                Open full {cancer.name} Decision Map →
              </Link>
            </div>
          ) : null}
          {!entryV2 && flagship && graphNode && cancer ? (
            <div className="mt-6">
              <DecisionJourneyNav
                node={graphNode}
                cancerSlug={cancer.slug}
                cancerName={cancer.name}
              />
            </div>
          ) : null}
          <SourcesAndReview
            reviewedAt={question.content_reviewed_at}
            sources={sources}
            defaultCollapsed={entryV2}
          />
        </>
      ) : (
        <>
          <DecisionWorkspace
            question={question}
            journey={journey}
            cancerSlug={cancer?.slug}
          />

          {aiEntry ? <AiEntrySections question={question} /> : null}

          <Section title="Why patients ask this">
            <Markdown content={question.why_patients_ask} />
          </Section>

          <JourneySections question={question} aiEntryLayout={aiEntry} />

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

          <NextActionClose
            question={question}
            journey={journey}
            cancerSlug={cancer?.slug}
          />

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
                href={cancerSituationMapHref(cancer.slug)}
                className="font-semibold text-[var(--accent)] hover:underline"
              >
                Open full {cancer.name} Decision Map →
              </Link>
            </div>
          ) : null}

          <SourcesAndReview
            reviewedAt={question.content_reviewed_at}
            sources={sources}
          />
        </>
      )}
    </div>
  );
}
