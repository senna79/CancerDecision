import Link from "next/link";
import { CareOptionsSection } from "@/components/care-navigation/care-options-section";
import { Markdown } from "@/components/content/markdown";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { MedicalDisclaimer } from "@/components/trust/medical-disclaimer";
import {
  getCancers,
  getGlobalCareOptions,
  getSourcesForEntity,
} from "@/lib/queries";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "International Medical Guide",
  description:
    "Six reasons people explore cancer care across borders — access, confidence, plan disagreement, international support, cost, and missing local paths — and how to compare options without country rankings.",
  path: "/global-care",
  keywords: ["cancer care abroad", "medical travel", "global oncology"],
});

export default async function GlobalCarePage() {
  const [options, cancers] = await Promise.all([
    getGlobalCareOptions(),
    getCancers(),
  ]);
  const general = options.filter((o) => !o.cancer_id);
  const byCancer = options.filter((o) => o.cancer_id);
  const primary = general[0];
  const sources = primary
    ? await getSourcesForEntity("global_care_option", primary.id)
    : [];

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Global Care", path: "/global-care" },
          ]),
          articleJsonLd({
            title: "International Medical Guide",
            description:
              "Six reasons people explore cancer care across borders — and how to compare options without country rankings.",
            path: "/global-care",
            dateModified: primary?.content_reviewed_at,
            datePublished: primary?.created_at,
          }),
        ]}
      />
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Global Care" }]}
      />
      <h1 className="font-heading text-4xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
        International Medical Guide
      </h1>
      <p className="mt-3 max-w-2xl text-[var(--muted)]">
        People explore care across borders for access limits, lost confidence,
        rejecting the current plan, international-patient support, cost or
        coverage, or a path not available locally — not because a country is
        simply more famous. Use this guide to name your reason and structure the
        comparison.
      </p>

      <div className="mt-10 space-y-8">
        {general.map((opt) => (
          <article
            key={opt.id}
            className="rounded-lg border border-[var(--line)] bg-white/70 p-6"
          >
            <h2 className="font-heading text-2xl font-semibold text-[var(--ink)]">
              {opt.title}
            </h2>
            <p className="mt-2 text-[var(--muted)]">{opt.summary}</p>
            <div className="mt-4">
              <Markdown content={opt.body} />
            </div>
            <p className="mt-4 text-sm text-[var(--ink-soft)]">
              <span className="font-semibold">Cost notes:</span> {opt.cost_notes}
            </p>
          </article>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="font-heading text-3xl font-semibold text-[var(--ink)]">
          Cancer-specific global options
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {byCancer.map((opt) => {
            const cancer = cancers.find((c) => c.id === opt.cancer_id);
            return (
              <article
                key={opt.id}
                className="rounded-lg border border-[var(--line)] bg-white/70 p-5"
              >
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                  {cancer?.name ?? "Cancer-specific"} · {opt.country_code}
                </p>
                <h3 className="mt-2 font-heading text-xl font-semibold">
                  {opt.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{opt.summary}</p>
                {cancer ? (
                  <Link
                    href={`/cancers/${cancer.slug}`}
                    className="mt-3 inline-block text-sm text-[var(--accent)] hover:underline"
                  >
                    Open {cancer.name} Decision Center
                  </Link>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      <CareOptionsSection source="global-care-hub" />

      <MedicalDisclaimer
        reviewedAt={primary?.content_reviewed_at}
        sources={sources}
      />
    </div>
  );
}
