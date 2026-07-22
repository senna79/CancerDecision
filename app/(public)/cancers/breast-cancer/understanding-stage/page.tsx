import { UnderstandingStage } from "@/components/cancer/understanding-stage";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { BREAST_UNDERSTANDING_STAGE } from "@/lib/content/breast-understanding-stage";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

const path = BREAST_UNDERSTANDING_STAGE.path;

export const metadata = buildMetadata({
  title: "What Does My Breast Cancer Stage Mean?",
  description:
    "Understand what breast cancer stage means in plain language — early, locally advanced / nodes, and advanced — why stage changes options and sequencing, and questions to ask your doctor.",
  path,
  index: false,
  keywords: [
    "what does my breast cancer stage mean",
    "breast cancer stage explained for patients",
    "locally advanced breast cancer lymph nodes",
    "early vs advanced breast cancer treatment goals",
  ],
});

export default function BreastUnderstandingStagePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Cancers", path: "/cancers" },
          { name: "Breast Cancer", path: "/cancers/breast-cancer" },
          { name: "Understanding Stage", path },
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Cancers", href: "/cancers" },
          { label: "Breast Cancer", href: "/cancers/breast-cancer" },
          { label: "Understanding Stage" },
        ]}
      />
      <UnderstandingStage content={BREAST_UNDERSTANDING_STAGE} />
    </div>
  );
}
