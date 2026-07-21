import Link from "next/link";
import { CareOptionsViewBeacon } from "@/components/care-navigation/care-options-view-beacon";
import {
  CARE_OPTIONS_FOOTNOTE,
  CARE_OPTIONS_TITLE,
  CARE_TRANSPARENCY_CTA_LABEL,
  CARE_TRANSPARENCY_PATH,
  getCareOptionsIntro,
  getCareOptionsPrimaryCta,
} from "@/lib/care-navigation/conversion";

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
      "A clear goal for the outside review (second opinion, trial screen, or surgery view)",
      "Complete records so the outside team can assess your case",
      "A written plan for what happens after the visit — not a one-off conversation with no next step",
    ],
  },
] as const;

type CareOptionsSectionProps = {
  /** Analytics source, e.g. entry slug or "global-care-hub" */
  source: string;
  /**
   * `panel` — sits in Entry page ending (right under Continue after this decision).
   * `page` — hub pages with more vertical room.
   */
  variant?: "panel" | "page";
  className?: string;
};

/**
 * Neutral Care Options module — never inside DecisionWorkspace clinical path.
 * Naming: Explore Care Options (not recommend).
 * Funnel: three Entries → this module → International Medical Guide (/global-care).
 */
export function CareOptionsSection({
  source,
  variant = "page",
  className = "",
}: CareOptionsSectionProps) {
  const isPanel = variant === "panel";
  const intro = getCareOptionsIntro(source);
  const primary = getCareOptionsPrimaryCta(source);

  return (
    <section
      id="explore-care-options"
      aria-labelledby="explore-care-options-heading"
      className={
        isPanel
          ? `scroll-mt-24 rounded-xl border-2 border-[var(--accent)]/35 bg-[linear-gradient(180deg,rgba(15,118,110,0.07)_0%,rgba(255,255,255,0.92)_42%)] px-5 py-5 shadow-[0_10px_28px_rgba(15,118,110,0.08)] md:px-6 md:py-6 ${className}`
          : `mt-12 scroll-mt-24 rounded-xl border-2 border-[var(--accent)]/35 bg-[linear-gradient(180deg,rgba(15,118,110,0.07)_0%,rgba(255,255,255,0.92)_42%)] px-5 py-6 shadow-[0_10px_28px_rgba(15,118,110,0.08)] md:px-7 md:py-8 ${className}`
      }
    >
      <CareOptionsViewBeacon source={source} />
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
        Explore Care Options
      </p>
      <h2
        id="explore-care-options-heading"
        className={
          isPanel
            ? "mt-2 font-heading text-xl font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-2xl"
            : "mt-2 font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-3xl"
        }
      >
        {CARE_OPTIONS_TITLE}
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-[var(--ink-soft)] leading-relaxed md:text-[0.95rem]">
        {intro}
      </p>

      <div
        className={
          isPanel
            ? "mt-5 grid gap-4 sm:grid-cols-2"
            : "mt-8 grid gap-6 sm:grid-cols-2"
        }
      >
        {FACTOR_BLOCKS.map((block) => (
          <div
            key={block.title}
            className="rounded-lg border border-[var(--accent)]/15 bg-white/80 px-3.5 py-3"
          >
            <h3 className="font-heading text-base font-semibold text-[var(--ink)]">
              {block.title}
            </h3>
            <ul className="mt-1.5 list-disc space-y-1 pl-5 text-sm text-[var(--ink-soft)] leading-relaxed">
              {block.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
        <Link
          href={primary.href}
          className="inline-flex rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0d655e]"
        >
          {primary.label} →
        </Link>
        <Link
          href={CARE_TRANSPARENCY_PATH}
          className="text-sm font-medium text-[var(--ink-soft)] hover:text-[var(--accent)] hover:underline"
        >
          {CARE_TRANSPARENCY_CTA_LABEL}
        </Link>
      </div>
      <p className="mt-3 max-w-2xl text-xs text-[var(--muted)] leading-relaxed">
        {CARE_OPTIONS_FOOTNOTE}
      </p>
    </section>
  );
}
