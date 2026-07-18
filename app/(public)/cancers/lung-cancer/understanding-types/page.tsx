import { UnderstandingTypes } from "@/components/cancer/understanding-types";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { LUNG_UNDERSTANDING_TYPES } from "@/lib/content/lung-understanding-types";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

const path = LUNG_UNDERSTANDING_TYPES.path;

export const metadata = buildMetadata({
  title: "What Type of Lung Cancer Do I Have?",
  description:
    "Understand NSCLC vs SCLC in plain language — why your lung cancer type changes treatment discussions, what to find on your pathology report, and questions to ask your doctor.",
  path,
  keywords: [
    "what type of lung cancer do I have",
    "NSCLC vs SCLC patient guide",
    "lung cancer pathology report",
    "how cancer type affects treatment decisions",
  ],
});

export default function LungUnderstandingTypesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Cancers", path: "/cancers" },
          { name: "Lung Cancer", path: "/cancers/lung-cancer" },
          { name: "Understanding Types", path },
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Cancers", href: "/cancers" },
          { label: "Lung Cancer", href: "/cancers/lung-cancer" },
          { label: "Understanding Types" },
        ]}
      />
      <UnderstandingTypes />
    </div>
  );
}
