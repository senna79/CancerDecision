import { notFound } from "next/navigation";
import { Markdown } from "@/components/content/markdown";
import { Section } from "@/components/content/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { MedicalDisclaimer } from "@/components/trust/medical-disclaimer";
import { TrustStrip } from "@/components/trust/trust-strip";
import { getTreatmentPage, getTreatments } from "@/lib/queries";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

export async function generateStaticParams() {
  const treatments = await getTreatments();
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getTreatmentPage(slug);
  if (!data) return {};
  return buildMetadata({
    title: data.treatment.seo_title || data.treatment.name,
    description:
      data.treatment.seo_description || data.treatment.description.slice(0, 160),
    path: `/treatments/${slug}`,
    keywords: data.treatment.seo_keywords,
  });
}

export default async function TreatmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getTreatmentPage(slug);
  if (!data) notFound();
  const { treatment, countries, sources } = data;

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-10 md:px-8">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: treatment.name, path: `/treatments/${treatment.slug}` },
          ]),
          articleJsonLd({
            title: treatment.name,
            description: treatment.description.slice(0, 160),
            path: `/treatments/${treatment.slug}`,
            dateModified: treatment.content_reviewed_at,
            datePublished: treatment.created_at,
          }),
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Treatments" },
          { label: treatment.name },
        ]}
      />
      <TrustStrip reviewedAt={treatment.content_reviewed_at} />
      <h1 className="font-heading text-4xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
        {treatment.name}
      </h1>

      <Section title="What is this treatment?">
        <Markdown content={treatment.description} />
      </Section>
      <Section title="When doctors consider it">
        <Markdown content={treatment.when_considered} />
      </Section>
      <Section title="Potential advantages">
        <ul className="list-disc space-y-2 pl-5">
          {treatment.advantages.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>
      <Section title="Limitations">
        <ul className="list-disc space-y-2 pl-5">
          {treatment.limitations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>
      <Section title="Questions to discuss with doctors">
        <ul className="list-disc space-y-2 pl-5">
          {treatment.doctor_questions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>
      <Section title="Countries offering this option">
        {countries.length === 0 ? (
          <p>Availability varies; discuss regional options with your care team.</p>
        ) : (
          <ul className="list-disc space-y-1 pl-5">
            {countries.map((c) => (
              <li key={c.code}>{c.name}</li>
            ))}
          </ul>
        )}
      </Section>
      <Section title="Cost considerations">
        <Markdown content={treatment.cost_considerations} />
      </Section>

      <MedicalDisclaimer
        reviewedAt={treatment.content_reviewed_at}
        sources={sources}
      />
    </div>
  );
}
