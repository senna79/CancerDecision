import { UnderstandingTypes } from "@/components/cancer/understanding-types";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { PROSTATE_UNDERSTANDING_RISK } from "@/lib/content/prostate-understanding-risk";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

const path = PROSTATE_UNDERSTANDING_RISK.path;

export const metadata = buildMetadata({
  title: "What Is My Prostate Cancer Risk Group?",
  description:
    "Understand prostate cancer risk group in plain language — PSA, Grade Group / Gleason, and MRI — why risk shapes monitoring versus treatment, and questions to ask your doctor.",
  path,
  index: true,
  keywords: [
    "prostate cancer risk group",
    "Grade Group Gleason patient guide",
    "prostate cancer PSA risk explained",
    "active surveillance risk group",
  ],
});

export default function ProstateUnderstandingRiskPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Cancers", path: "/cancers" },
          { name: "Prostate Cancer", path: "/cancers/prostate-cancer" },
          { name: "Understanding Risk Group", path },
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Cancers", href: "/cancers" },
          { label: "Prostate Cancer", href: "/cancers/prostate-cancer" },
          { label: "Understanding Risk Group" },
        ]}
      />
      <UnderstandingTypes content={PROSTATE_UNDERSTANDING_RISK} />
    </div>
  );
}
