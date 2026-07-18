import { UnderstandingStage } from "@/components/cancer/understanding-stage";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { LUNG_UNDERSTANDING_STAGE } from "@/lib/content/lung-understanding-stage";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

const path = LUNG_UNDERSTANDING_STAGE.path;

export const metadata = buildMetadata({
  title: "What Does My Lung Cancer Stage Mean?",
  description:
    "Understand what lung cancer stage means in plain language — early, locally advanced, and advanced — why stage changes treatment discussions, and questions to ask your doctor.",
  path,
  keywords: [
    "what does my lung cancer stage mean",
    "lung cancer stage explained for patients",
    "early vs advanced lung cancer",
    "stage IV lung cancer treatment goals",
  ],
});

export default function LungUnderstandingStagePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Cancers", path: "/cancers" },
          { name: "Lung Cancer", path: "/cancers/lung-cancer" },
          { name: "Understanding Stage", path },
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Cancers", href: "/cancers" },
          { label: "Lung Cancer", href: "/cancers/lung-cancer" },
          { label: "Understanding Stage" },
        ]}
      />
      <UnderstandingStage />
    </div>
  );
}
