import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import {
  CARE_ABROAD_ENTRY_CTA_LABEL,
  CARE_ABROAD_ENTRY_PATH,
  CARE_CONVERSION_CTA_LABEL,
  CARE_CONVERSION_PATH,
  CARE_TRANSPARENCY_CTA_LABEL,
  CARE_TRANSPARENCY_PATH,
} from "@/lib/care-navigation/conversion";
import { getActiveCarePartners } from "@/lib/care-partners/fixtures";
import { buildMetadata } from "@/lib/seo/metadata";

/** Phase A/B: keep Partner surfaces out of search until listings are content-rich. */
export const metadata = buildMetadata({
  title: "Partner Profiles",
  description:
    "Optional profiles of organizations that may offer international patient services. Not hospital rankings or medical recommendations.",
  path: "/care-partners",
  index: false,
});

export default function CarePartnersIndexPage() {
  const partners = getActiveCarePartners();

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-10 md:px-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Partner Profiles" },
        ]}
      />
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
        Explore Care Options
      </p>
      <h1 className="mt-2 font-heading text-4xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
        Partner Profiles
      </h1>
      <p className="mt-3 max-w-2xl text-[var(--ink-soft)] leading-relaxed">
        These are optional listings of organizations that may offer
        international patient services. They are not rankings, and exploring a
        profile is not a medical recommendation.
      </p>

      {partners.length === 0 ? (
        <div className="mt-10 rounded-lg border border-[var(--line)] bg-white/60 px-5 py-8">
          <p className="text-[var(--ink-soft)] leading-relaxed">
            Partner Profiles will appear here as organizations are added. Until
            then, continue with the same conversion path used after Care Options
            on the three decision Entries.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link
              href={CARE_CONVERSION_PATH}
              className="inline-flex rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0d655e]"
            >
              {CARE_CONVERSION_CTA_LABEL} →
            </Link>
            <Link
              href={CARE_ABROAD_ENTRY_PATH}
              className="text-sm font-medium text-[var(--accent)] hover:underline"
            >
              {CARE_ABROAD_ENTRY_CTA_LABEL} →
            </Link>
          </div>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-[var(--ink-soft)]">
            <li>
              <Link
                href="/questions/do-i-need-different-lung-cancer-center-or-specialized-expertise"
                className="text-[var(--accent)] hover:underline"
              >
                Care center &amp; expertise
              </Link>
            </li>
            <li>
              <Link
                href="/questions/should-i-get-second-opinion-after-lung-cancer-diagnosis"
                className="text-[var(--accent)] hover:underline"
              >
                Second opinion
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <ul className="mt-10 space-y-4">
          {partners.map((partner) => (
            <li key={partner.id}>
              <Link
                href={`/care-partners/${partner.slug}`}
                className="block rounded-lg border border-[var(--line)] bg-white/70 px-5 py-4 hover:border-[var(--accent)]/40"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                  Partner profile
                </p>
                <p className="mt-1 font-heading text-xl font-semibold text-[var(--ink)]">
                  {partner.name}
                </p>
                <p className="mt-2 text-sm text-[var(--ink-soft)]">
                  {partner.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-10 text-sm text-[var(--muted)]">
        <Link
          href={CARE_TRANSPARENCY_PATH}
          className="font-semibold text-[var(--accent)] hover:underline"
        >
          {CARE_TRANSPARENCY_CTA_LABEL}
        </Link>
        {" · "}
        <Link href="/about" className="hover:text-[var(--accent)] hover:underline">
          Trust &amp; Disclaimer
        </Link>
      </p>
    </div>
  );
}
