import Link from "next/link";
import type { Source } from "@/types/database";
import {
  LUNG_GUIDANCE_ORGANIZATIONS,
  TRUST_COPY,
  formatTrustDate,
  type GuidanceOrganization,
  type TrustReviewMeta,
} from "@/lib/trust/framework";

type SourcesAndReviewProps = TrustReviewMeta & {
  sources?: Source[];
  /** Override default lung guidance org list (e.g. other cancers later) */
  guidanceOrganizations?: GuidanceOrganization[];
  showGuidanceFamilies?: boolean;
  /** Collapse detail so trust stays out of the main reading flow */
  defaultCollapsed?: boolean;
};

/**
 * Unified Sources & Review Information module — Source & Trust Framework v1.0
 * Mount at the bottom of Tier-1 AI Entry / medical decision pages.
 */
export function SourcesAndReview({
  reviewedAt,
  medicallyReviewedBy,
  medicalSpecialty,
  sources = [],
  guidanceOrganizations = LUNG_GUIDANCE_ORGANIZATIONS,
  showGuidanceFamilies = true,
  defaultCollapsed = false,
}: SourcesAndReviewProps) {
  const detail = (
    <>
      {showGuidanceFamilies ? (
        <div className="mt-5">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            Medical information sources
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
            {TRUST_COPY.sourcesIntro}
          </p>
          <ul className="mt-3 space-y-2">
            {guidanceOrganizations.map((org) => (
              <li
                key={org.shortName}
                className="flex gap-3 rounded-md border border-[var(--line)] bg-white/60 px-4 py-3 text-sm text-[var(--ink)]"
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>
                  <span className="font-medium">{org.name}</span>
                  <span className="text-[var(--muted)]">
                    {" "}
                    ({org.shortName})
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {sources.length > 0 ? (
        <div className="mt-6">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            References
          </h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed">
            {sources.map((source, index) => (
              <li key={source.id} value={index + 1}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--accent)] underline-offset-4 hover:underline"
                >
                  {source.title}
                </a>
                {source.publisher ? (
                  <span className="text-[var(--muted)]">
                    {" "}
                    — {source.publisher}
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      <div className="mt-6 border-t border-[var(--line)] pt-5">
        <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
          Content review
        </h3>
        <dl className="mt-3 space-y-2 text-sm text-[var(--ink-soft)]">
          <div>
            <dt className="inline text-[var(--muted)]">Content last checked: </dt>
            <dd className="inline font-medium text-[var(--ink)]">
              {formatTrustDate(reviewedAt)}
            </dd>
          </div>
          <div>
            <dt className="inline text-[var(--muted)]">Creation: </dt>
            <dd className="inline">{TRUST_COPY.aiAssisted}</dd>
          </div>
          <div>
            <dt className="inline text-[var(--muted)]">Editorial review: </dt>
            <dd className="inline">{TRUST_COPY.editorialReview}</dd>
          </div>
          <div>
            <dt className="inline text-[var(--muted)]">
              Medical information reviewed against:{" "}
            </dt>
            <dd className="inline">{TRUST_COPY.reviewedAgainst}</dd>
          </div>
          {medicallyReviewedBy ? (
            <div>
              <dt className="inline text-[var(--muted)]">
                Medically reviewed by:{" "}
              </dt>
              <dd className="inline font-medium text-[var(--ink)]">
                {medicallyReviewedBy}
                {medicalSpecialty ? (
                  <span className="font-normal text-[var(--ink-soft)]">
                    {" "}
                    · {medicalSpecialty}
                  </span>
                ) : null}
              </dd>
            </div>
          ) : (
            <div>
              <dd>{TRUST_COPY.notMedicallyReviewedDefault}</dd>
            </div>
          )}
          <div>
            <dt className="inline text-[var(--muted)]">Purpose: </dt>
            <dd className="inline">{TRUST_COPY.purpose}</dd>
          </div>
          <div>
            <dt className="inline text-[var(--muted)]">Not: </dt>
            <dd className="inline">{TRUST_COPY.notPurpose}</dd>
          </div>
        </dl>
      </div>

      <div className="mt-6 border-t border-[var(--line)] pt-5">
        <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
          Medical information disclaimer
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
          {TRUST_COPY.disclaimer}
        </p>
        <p className="mt-3 text-xs text-[var(--muted)]">
          See our{" "}
          <Link
            href="/about"
            className="font-medium text-[var(--accent)] hover:underline"
          >
            Trust &amp; Disclaimer
          </Link>{" "}
          for how content is prepared.
        </p>
      </div>
    </>
  );

  if (defaultCollapsed) {
    return (
      <aside
        id="sources-and-review"
        className="mt-10 scroll-mt-24 rounded-lg border border-[var(--line)] bg-[var(--paper-deep)]/60 px-4 py-4 md:px-5"
      >
        <details className="group">
          <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="font-heading text-lg font-semibold tracking-[-0.02em] text-[var(--ink)]">
                  Sources &amp; Review Information
                </h2>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  Reviewed sources and medical references supporting this
                  decision guide.
                </p>
              </div>
              <span className="shrink-0 rounded-md border border-[var(--accent)]/30 bg-white/80 px-3 py-1.5 text-sm font-semibold text-[var(--accent)] group-open:hidden">
                View sources
              </span>
              <span className="hidden shrink-0 text-sm font-semibold text-[var(--muted)] group-open:inline">
                Hide sources
              </span>
            </div>
          </summary>
          <div className="mt-2">{detail}</div>
        </details>
      </aside>
    );
  }

  return (
    <aside
      id="sources-and-review"
      className="mt-12 scroll-mt-24 rounded-lg border border-[var(--line)] bg-[var(--paper-deep)]/80 p-5 md:p-6"
    >
      <h2 className="font-heading text-xl font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-2xl">
        Sources &amp; Review Information
      </h2>
      {detail}
    </aside>
  );
}
