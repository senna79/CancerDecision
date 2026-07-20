import Link from "next/link";
import { CareOptionsViewBeacon } from "@/components/care-navigation/care-options-view-beacon";

const FACTOR_BLOCKS = [
  {
    title: "Clinical expertise",
    points: [
      "Experience with your cancer type",
      "Multidisciplinary team",
    ],
  },
  {
    title: "Treatment access",
    points: [
      "Clinical trials",
      "Advanced therapies (as available)",
    ],
  },
  {
    title: "Practical factors",
    points: [
      "Travel",
      "Language",
      "International patient support",
    ],
  },
  {
    title: "Continuity",
    points: [
      "Coordination with your current / home care team",
    ],
  },
] as const;

type CareOptionsSectionProps = {
  /** Analytics source, e.g. entry slug or "global-care-hub" */
  source: string;
  className?: string;
};

/**
 * Neutral Care Options module — sibling to Decision content, never inside
 * DecisionWorkspace clinical path. Naming: Explore Care Options (not recommend).
 */
export function CareOptionsSection({
  source,
  className = "",
}: CareOptionsSectionProps) {
  return (
    <section
      id="explore-care-options"
      aria-labelledby="explore-care-options-heading"
      className={`mt-12 border-t border-[var(--line)] pt-10 ${className}`}
    >
      <CareOptionsViewBeacon source={source} />
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
        Explore Care Options
      </p>
      <h2
        id="explore-care-options-heading"
        className="mt-2 font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-3xl"
      >
        Factors to consider when exploring care centers
      </h2>
      <p className="mt-3 max-w-2xl text-[var(--ink-soft)] leading-relaxed">
        If you are exploring treatment centers or a second opinion across
        borders, these factors may help you compare options.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {FACTOR_BLOCKS.map((block) => (
          <div key={block.title}>
            <h3 className="font-heading text-lg font-semibold text-[var(--ink)]">
              {block.title}
            </h3>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-[var(--ink-soft)] leading-relaxed">
              {block.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-baseline gap-x-5 gap-y-2">
        <Link
          href="/care-partners"
          className="text-sm font-semibold text-[var(--accent)] hover:underline"
        >
          Explore Partner Profiles →
        </Link>
        <Link
          href="/transparency"
          className="text-sm text-[var(--muted)] hover:text-[var(--accent)] hover:underline"
        >
          How partnerships work
        </Link>
      </div>
      <p className="mt-3 max-w-2xl text-xs text-[var(--muted)] leading-relaxed">
        Partner Profiles are optional listings of organizations that may offer
        international patient services. Exploring a profile is not a medical
        recommendation.
      </p>
    </section>
  );
}
