import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Transparency",
  description:
    "How Cancer Next Step stays independent in educational guides while disclosing optional care-organization partnerships.",
  path: "/transparency",
});

export default function TransparencyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-10 md:px-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Transparency" },
        ]}
      />
      <h1 className="font-heading text-4xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
        Transparency
      </h1>
      <p className="mt-3 text-[var(--muted)]">
        Independent educational content. Transparent partnerships.
      </p>

      <div className="mt-8 space-y-6 text-[var(--ink-soft)] leading-relaxed">
        <p>
          Cancer Next Step provides independent educational decision guides.
          Some healthcare organizations may compensate us when you choose to
          request information or contact their services. Compensation does not
          change our educational content or Decision Paths. We do not tell you
          which hospital to choose.
        </p>

        <div>
          <h2 className="font-heading text-2xl font-semibold text-[var(--ink)]">
            What stays independent
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              Decision guides, Direct Answers, and clinical explanations are not
              rewritten because an organization pays us.
            </li>
            <li>
              We do not rank “best” hospitals or match you to a single center as
              a medical conclusion.
            </li>
            <li>
              Educational pages remain decision navigation — not a diagnosis or
              treatment plan.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-semibold text-[var(--ink)]">
            Partner Profiles
          </h2>
          <p className="mt-3">
            When we list a{" "}
            <Link
              href="/care-partners"
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Partner Profile
            </Link>
            , it is labeled. Exploring a profile is optional. Contacting an
            organization is always your choice.
          </p>
          <p className="mt-3">
            If you contact a partner through our site, we may receive
            compensation. That relationship does not turn a profile into a
            medical recommendation.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-semibold text-[var(--ink)]">
            What we are not
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>A healthcare provider or hospital</li>
            <li>An online hospital marketplace</li>
            <li>A substitute for your care team</li>
          </ul>
        </div>

        <p>
          For educational purpose and medical disclaimers, see{" "}
          <Link
            href="/about"
            className="font-semibold text-[var(--accent)] hover:underline"
          >
            Trust &amp; Disclaimer
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
