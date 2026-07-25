import { UnderstandingStage } from "@/components/cancer/understanding-stage";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { PROSTATE_UNDERSTANDING_STAGE } from "@/lib/content/prostate-understanding-stage";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

const path = PROSTATE_UNDERSTANDING_STAGE.path;

export const metadata = buildMetadata({
  title: "How Far Has My Prostate Cancer Spread?",
  description:
    "Understand what prostate cancer stage means in plain language — localized, locally advanced, and metastatic — why stage changes options, and questions to ask your doctor.",
  path,
  index: false,
  keywords: [
    "what does my prostate cancer stage mean",
    "localized vs metastatic prostate cancer",
    "prostate cancer stage explained for patients",
    "prostate cancer staging patient guide",
  ],
});

export default function ProstateUnderstandingStagePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Cancers", path: "/cancers" },
          { name: "Prostate Cancer", path: "/cancers/prostate-cancer" },
          { name: "Understanding Stage", path },
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Cancers", href: "/cancers" },
          { label: "Prostate Cancer", href: "/cancers/prostate-cancer" },
          { label: "Understanding Stage" },
        ]}
      />
      <UnderstandingStage content={PROSTATE_UNDERSTANDING_STAGE} />
    </div>
  );
}
