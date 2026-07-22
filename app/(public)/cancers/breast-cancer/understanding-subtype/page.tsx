import { UnderstandingTypes } from "@/components/cancer/understanding-types";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { BREAST_UNDERSTANDING_SUBTYPE } from "@/lib/content/breast-understanding-subtype";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

const path = BREAST_UNDERSTANDING_SUBTYPE.path;

export const metadata = buildMetadata({
  title: "What Is My Breast Cancer Subtype?",
  description:
    "Understand HR+, HER2+, and triple-negative breast cancer in plain language — why subtype shapes the first plan, what to find on your pathology report, and questions to ask your doctor.",
  path,
  index: false,
  keywords: [
    "breast cancer subtype",
    "HR+ HER2+ triple-negative patient guide",
    "breast cancer pathology report receptors",
    "how subtype affects breast cancer treatment decisions",
  ],
});

export default function BreastUnderstandingSubtypePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Cancers", path: "/cancers" },
          { name: "Breast Cancer", path: "/cancers/breast-cancer" },
          { name: "Understanding Subtype", path },
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Cancers", href: "/cancers" },
          { label: "Breast Cancer", href: "/cancers/breast-cancer" },
          { label: "Understanding Subtype" },
        ]}
      />
      <UnderstandingTypes content={BREAST_UNDERSTANDING_SUBTYPE} />
    </div>
  );
}
