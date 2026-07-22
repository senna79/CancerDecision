import { Suspense } from "react";
import { CancerJourneyNav } from "@/components/home/cancer-journey-nav";
import { HomeCancerClosing } from "@/components/home/home-cancer-closing";
import { HomeCancerFeatured } from "@/components/home/home-cancer-featured";
import {
  BREAST_DECISION_MOMENTS,
  LUNG_DECISION_MOMENTS,
} from "@/lib/journey/decision-moments";
import { getCancerBySlug, getCancers, getStories } from "@/lib/queries";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Navigate Cancer Decisions — Know Your Next Step",
  description:
    "Cancer Next Step helps patients and the people supporting them match a cancer situation to the next decision — understand options, prepare questions, know the next step. Lung cancer is the first complete journey.",
  path: "/",
  ogType: "website",
  keywords: [
    "cancer next step",
    "cancer decision",
    "cancer navigation",
    "second opinion",
    "treatment comparison",
    "lung cancer decisions",
  ],
});

function toStoryCards(
  stories: Awaited<ReturnType<typeof getStories>>
) {
  return stories.map((s) => ({
    id: s.id,
    slug: s.slug,
    title: s.title,
    country: s.country,
    age_range: s.age_range,
    decision_challenge: s.decision_challenge,
  }));
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ cancer?: string }>;
}) {
  const { cancer: cancerParam } = await searchParams;
  const [cancers, lungCancer, breastCancer] = await Promise.all([
    getCancers(),
    getCancerBySlug("lung-cancer"),
    getCancerBySlug("breast-cancer"),
  ]);
  const [lungStories, breastStories] = await Promise.all([
    lungCancer
      ? getStories({ cancerId: lungCancer.id, limit: 3 })
      : getStories({ limit: 3 }),
    breastCancer
      ? getStories({ cancerId: breastCancer.id, limit: 3 })
      : Promise.resolve([]),
  ]);

  const cancerOptions = cancers.map((c) => ({
    slug: c.slug,
    name: c.name,
  }));
  const closingCancers = cancers.map((c) => ({
    id: c.id,
    slug: c.slug,
    name: c.name,
  }));
  const initialJourneySlug =
    cancerParam === "breast-cancer" ? "breast-cancer" : "lung-cancer";

  return (
    <div>
      <section
        id="choose-cancer"
        className="relative scroll-mt-20 overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(15,118,110,0.12),transparent_45%),linear-gradient(120deg,rgba(231,238,233,0.85),rgba(243,246,244,0.35))]"
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-10 md:px-8 md:py-14">
          <div className="animate-rise max-w-2xl">
            <h1 className="font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)] sm:text-4xl md:text-5xl md:leading-[1.12]">
              Navigate the next cancer decision with confidence.
            </h1>
            <p className="animate-rise-delay mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Understand the options · Prepare better questions · Know the next
              step.
            </p>
            <p className="animate-rise-delay mt-3 max-w-xl text-base leading-relaxed text-[var(--ink-soft)]">
              For patients and the people helping them decide — match the
              situation to the next decision.
            </p>
          </div>

          <div className="animate-rise-delay mt-10 border-t border-[var(--line)]/80 pt-8">
            <h2 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
              Start from the situation.
            </h2>
            <p className="mt-2 max-w-2xl text-[var(--muted)] md:text-lg">
              Choose a cancer type, then the decision that matters most right
              now.
            </p>
            <div className="mt-6 max-w-3xl">
              <CancerJourneyNav
                cancers={cancerOptions}
                lungMoments={LUNG_DECISION_MOMENTS}
                breastMoments={BREAST_DECISION_MOMENTS}
                initialSlug={initialJourneySlug}
              />
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        <HomeCancerFeatured initialSlug={initialJourneySlug} />
      </Suspense>

      <Suspense fallback={null}>
        <HomeCancerClosing
          initialSlug={initialJourneySlug}
          cancers={closingCancers}
          lungStories={toStoryCards(lungStories)}
          breastStories={toStoryCards(breastStories)}
        />
      </Suspense>
    </div>
  );
}
