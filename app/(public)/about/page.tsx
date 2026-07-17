import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Trust & Disclaimer",
  description:
    "Learn what Global Cancer Decision Platform is, what it is not, and how educational content is prepared and checked.",
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
          Global Cancer Decision Platform helps patients understand diagnosis
          context, compare treatment options, explore international care
          questions, and learn from structured decision scenarios. It is
          educational guidance for conversations with clinicians — not a care
          service.
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
            How content is prepared
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>AI-assisted content creation:</strong> AI may help organize
              questions and draft educational text.
            </li>
            <li>
              <strong>Editorial review:</strong> Drafts are reviewed for
              structure, accuracy, source alignment, and cautious wording before
              publishing.
            </li>
            <li>
              <strong>Not medically reviewed by default:</strong> Unless a named
              physician reviewer is listed, pages are not physician-medically
              reviewed.
            </li>
            <li>
              <strong>Content last checked:</strong> Dates show when content was
              last checked — not automatic proof of medical certification.
            </li>
            <li>
              <strong>Purpose:</strong> Decision support and patient preparation —
              not diagnosis or medical advice.
            </li>
            <li>
              <strong>Decision scenarios:</strong> Story pages are illustrative
              examples unless marked as verified patient contributions.
            </li>
            <li>
              <strong>Sources:</strong> Tier-1 decision pages include a Sources
              &amp; Review Information module grounded in public guidance from
              organizations such as NCI, ASCO, ESMO, and NCCN. AI output is never
              auto-published.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
