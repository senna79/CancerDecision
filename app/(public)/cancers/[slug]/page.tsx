import Link from "next/link";
import { notFound } from "next/navigation";
import { DecisionMapFold } from "@/components/cancer/decision-map-fold";
import { DecisionMapLocator } from "@/components/cancer/decision-map-locator";
import { DecisionMapView } from "@/components/cancer/decision-map";
import { Markdown } from "@/components/content/markdown";
import { Section } from "@/components/content/section";
import { SituationGuidedRouter } from "@/components/journey/situation-guided-router";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { MedicalDisclaimer } from "@/components/trust/medical-disclaimer";
import { TrustStrip } from "@/components/trust/trust-strip";
import {
  BREAST_DECISION_MOMENTS,
  getDecisionMoment,
  LUNG_DECISION_MOMENTS,
} from "@/lib/journey/decision-moments";
import {
  BREAST_ORIENTATION_LINKS,
  BREAST_QUICK_SCENARIOS,
  BREAST_SITUATION_BUCKETS,
  LUNG_ORIENTATION_LINKS,
  LUNG_SITUATION_BUCKETS,
} from "@/lib/journey/situation-buckets";
import { getCancerDecisionCenter, getCancers } from "@/lib/queries";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { isIndexableCancerSlug } from "@/lib/seo/indexing";
import { BREAST_HUB_FAQS } from "@/lib/content/breast-hub-faq";
import { isRetiredBreastQuestionSlug } from "@/lib/content/breast-entry-slugs";
import { isRetiredLungQuestionSlug } from "@/lib/seo/retired-lung-questions";
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
    index: isIndexableCancerSlug(slug),
  });
}

export default async function CancerDecisionCenterPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ moment?: string }>;
}) {
  const { slug } = await params;
  const { moment: momentParam } = await searchParams;
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

  const visibleQuestions = questions.filter(
    (q) =>
      !isRetiredLungQuestionSlug(q.slug) &&
      !isRetiredBreastQuestionSlug(q.slug)
  );
  const questionTitles = Object.fromEntries(
    visibleQuestions.map((q) => [q.slug, q.title])
  );
  const treatmentNames = Object.fromEntries(
    treatments.map((t) => [t.slug, t.name])
  );
  const storyTitles = Object.fromEntries(stories.map((s) => [s.slug, s.title]));

  const isLung = cancer.slug === "lung-cancer";
  const isBreast = cancer.slug === "breast-cancer";
  const hasSituationNav = isLung || isBreast;
  const journeyMoments = isBreast
    ? BREAST_DECISION_MOMENTS
    : isLung
      ? LUNG_DECISION_MOMENTS
      : [];
  const activeMoment = hasSituationNav
    ? getDecisionMoment(momentParam, cancer.slug)
    : null;

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
        {isLung
          ? "Lung cancer is our first complete cancer decision journey. Any stage — newly diagnosed, comparing options, second opinion, or care center expertise. Pick where you are; leave knowing your next step."
          : isBreast
            ? "A breast cancer diagnosis creates many questions at once. You do not need to solve them all today — start from the decision you are facing now. The usual path runs diagnosis → subtype → treatment order → surgery or systemic choices."
            : "Start from the decision you are facing, then explore questions, treatments, and illustrative journeys for this cancer type."}
      </p>

      {hasSituationNav ? (
        <div className="mt-8 max-w-3xl space-y-5">
          <SituationGuidedRouter
            moments={journeyMoments}
            buckets={isBreast ? BREAST_SITUATION_BUCKETS : LUNG_SITUATION_BUCKETS}
            orientationLinks={
              isBreast ? BREAST_ORIENTATION_LINKS : LUNG_ORIENTATION_LINKS
            }
            quickScenarios={isBreast ? BREAST_QUICK_SCENARIOS : undefined}
            cancerLabel={isBreast ? "breast cancer" : "lung cancer"}
            activeId={activeMoment?.id}
            footer={
              isLung ? (
                <>
                  Unsure where you are on the map?{" "}
                  <a
                    href="#map-locator"
                    className="font-semibold text-[var(--accent)] hover:underline"
                  >
                    See nearby decisions
                  </a>
                </>
              ) : (
                <>
                  Optional foundation guides are above if you want basics —
                  otherwise pick a situation and open one decision guide.
                </>
              )
            }
          />
          {isLung ? (
            <DecisionMapLocator activeNodeId={activeMoment?.nodeId} />
          ) : null}

          {isBreast ? (
            <section
              id="common-first-questions"
              aria-label="Common first questions after a breast cancer diagnosis"
              className="rounded-lg border border-[var(--line)] bg-white/90 p-5 md:p-6"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                For search and first visits
              </p>
              <h2 className="mt-1 font-heading text-xl font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-2xl">
                Common first questions after a breast cancer diagnosis
              </h2>
              <p className="mt-2 text-sm text-[var(--ink-soft)]">
                Short answers that point to one decision guide — not a full
                reading list.
              </p>
              <ul className="mt-5 space-y-4">
                {BREAST_HUB_FAQS.map((item) => (
                  <li
                    key={item.question}
                    className="border-t border-[var(--line)]/80 pt-4 first:border-t-0 first:pt-0"
                  >
                    <h3 className="font-heading text-base font-semibold tracking-[-0.02em] text-[var(--ink)]">
                      {item.question}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--ink-soft)]">
                      {item.answer}
                    </p>
                    <Link
                      href={item.href}
                      className="mt-2 inline-block text-sm font-semibold text-[var(--accent)] hover:underline"
                    >
                      {item.cta}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      ) : null}

      {!hasSituationNav ? (
        <Section title="Cancer Overview">
          <Markdown content={cancer.overview} />
        </Section>
      ) : null}

      {!hasSituationNav && decisionMap ? (
        <DecisionMapView
          map={decisionMap}
          questionTitles={questionTitles}
          treatmentNames={treatmentNames}
          storyTitles={storyTitles}
        />
      ) : null}

      {hasSituationNav ? (
        <Section title="About this decision center">
          <Markdown content={cancer.overview} />
        </Section>
      ) : null}

      <Section title="Common Patient Decisions">
        <ul className="space-y-2">
          {visibleQuestions.map((q) => (
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

      {isLung ? (
        <Section title="Supporting guides">
          <ul className="space-y-4">
            <li>
              <p className="font-semibold text-[var(--ink)]">
                Understanding lung cancer types
              </p>
              <p className="mt-1 max-w-2xl text-sm text-[var(--muted)]">
                Orient to NSCLC vs SCLC, what to find on your pathology report,
                and how type changes the next conversation.
              </p>
              <Link
                href="/cancers/lung-cancer/understanding-types"
                className="mt-2 inline-block text-sm font-semibold text-[var(--accent)] hover:underline"
              >
                Open Understanding Types →
              </Link>
            </li>
            <li>
              <p className="font-semibold text-[var(--ink)]">
                Understanding lung cancer stage
              </p>
              <p className="mt-1 max-w-2xl text-sm text-[var(--muted)]">
                Orient to what stage means, early vs advanced discussions, and
                questions to ask before choosing a path.
              </p>
              <Link
                href="/cancers/lung-cancer/understanding-stage"
                className="mt-2 inline-block text-sm font-semibold text-[var(--accent)] hover:underline"
              >
                Open Understanding Stage →
              </Link>
            </li>
            <li>
              <p className="font-semibold text-[var(--ink)]">
                Treatment Landscape
              </p>
              <p className="mt-1 max-w-2xl text-sm text-[var(--muted)]">
                Orient to local vs systemic directions, how doctors choose, and
                which Decision Path to open next — not a treatment menu.
              </p>
              <Link
                href="/cancers/lung-cancer/treatment-landscape"
                className="mt-2 inline-block text-sm font-semibold text-[var(--accent)] hover:underline"
              >
                Open Treatment Landscape →
              </Link>
            </li>
          </ul>
        </Section>
      ) : isBreast ? (
        <Section title="Supporting guides">
          <ul className="space-y-4">
            <li>
              <p className="font-semibold text-[var(--ink)]">
                Understanding breast cancer subtype
              </p>
              <p className="mt-1 max-w-2xl text-sm text-[var(--muted)]">
                Orient to HR+, HER2+, and triple-negative biology, what to find
                on your pathology report, and how subtype changes the first plan.
              </p>
              <Link
                href="/cancers/breast-cancer/understanding-subtype"
                className="mt-2 inline-block text-sm font-semibold text-[var(--accent)] hover:underline"
              >
                Open Understanding Subtype →
              </Link>
            </li>
            <li>
              <p className="font-semibold text-[var(--ink)]">
                Understanding breast cancer stage
              </p>
              <p className="mt-1 max-w-2xl text-sm text-[var(--muted)]">
                Orient to early, locally advanced / nodes, and advanced extent —
                why stage changes options and sequencing, not a prognosis table.
              </p>
              <Link
                href="/cancers/breast-cancer/understanding-stage"
                className="mt-2 inline-block text-sm font-semibold text-[var(--accent)] hover:underline"
              >
                Open Understanding Stage →
              </Link>
            </li>
            <li>
              <p className="font-semibold text-[var(--ink)]">
                Treatment Landscape
              </p>
              <p className="mt-1 max-w-2xl text-sm text-[var(--muted)]">
                Orient to surgery, radiation, endocrine, chemo, targeted/immuno,
                and reconstruction families — so later comparisons make sense.
              </p>
              <Link
                href="/cancers/breast-cancer/treatment-landscape"
                className="mt-2 inline-block text-sm font-semibold text-[var(--accent)] hover:underline"
              >
                Open Treatment Landscape →
              </Link>
            </li>
          </ul>
        </Section>
      ) : (
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
      )}

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
          {isLung ? (
            <li>
              <Link
                href="/questions/when-to-consider-lung-cancer-care-abroad"
                className="text-[var(--accent)] hover:underline"
              >
                When to consider lung cancer care abroad
              </Link>
            </li>
          ) : null}
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
            <Link
              href="/global-care"
              className="text-[var(--accent)] hover:underline"
            >
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
              <h3 className="font-heading text-lg font-semibold">
                {story.title}
              </h3>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Illustrative · {story.country} · {story.age_range}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {hasSituationNav && decisionMap ? (
        <DecisionMapFold>
          <DecisionMapView
            map={decisionMap}
            questionTitles={questionTitles}
            treatmentNames={treatmentNames}
            storyTitles={storyTitles}
            embedded
          />
        </DecisionMapFold>
      ) : null}

      <MedicalDisclaimer
        reviewedAt={cancer.content_reviewed_at}
        sources={sources}
      />
    </div>
  );
}
