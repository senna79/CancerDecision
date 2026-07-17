import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Trust & Disclaimer",
  description:
    "Learn what Global Cancer Decision Platform is, what it is not, and how educational content is reviewed.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-10 md:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <h1 className="font-heading text-4xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
        Trust & Disclaimer
      </h1>
      <div className="mt-8 space-y-6 text-[var(--ink-soft)] leading-relaxed">
        <p>
          Global Cancer Decision Platform is an AI-powered cancer decision
          knowledge platform. It helps patients understand diagnosis context,
          compare treatment options, explore global medical choices, and learn
          from real patient decision journeys.
        </p>
        <div>
          <h2 className="font-heading text-2xl font-semibold text-[var(--ink)]">
            This product is not
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>A cancer encyclopedia</li>
            <li>A medical diagnosis system</li>
            <li>An online hospital marketplace</li>
            <li>A doctor replacement</li>
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-2xl font-semibold text-[var(--ink)]">
            Medical information disclaimer
          </h2>
          <p className="mt-3">
            This content provides educational information and does not replace
            professional medical advice, diagnosis, or treatment. Always seek
            the guidance of qualified clinicians for decisions about your care.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-2xl font-semibold text-[var(--ink)]">
            How we build trust
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Structured answers organized as a knowledge graph</li>
            <li>Sources and references on medical pages</li>
            <li>Patient decision stories, not miracle narratives</li>
            <li>Transparent content review dates and limitations</li>
            <li>AI drafts that require human review before publishing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
