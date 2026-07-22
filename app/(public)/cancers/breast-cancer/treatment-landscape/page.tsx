import { TreatmentLandscape } from "@/components/cancer/treatment-landscape";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { BREAST_TREATMENT_LANDSCAPE } from "@/lib/content/breast-treatment-landscape";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

const path = BREAST_TREATMENT_LANDSCAPE.path;

export const metadata = buildMetadata({
  title: "What Breast Cancer Treatments Might Be Discussed?",
  description:
    "A breast cancer treatment map — surgery, radiation, endocrine, chemo, targeted/immuno, reconstruction — plus how doctors choose, questions to ask, and which Decision Path to open next.",
  path,
  index: false,
  keywords: [
    "breast cancer treatment options",
    "breast cancer treatment landscape",
    "surgery radiation endocrine chemotherapy",
    "how doctors choose breast cancer treatment",
  ],
});

export default function BreastTreatmentLandscapePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Cancers", path: "/cancers" },
          { name: "Breast Cancer", path: "/cancers/breast-cancer" },
          { name: "Treatment Landscape", path },
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Cancers", href: "/cancers" },
          { label: "Breast Cancer", href: "/cancers/breast-cancer" },
          { label: "Treatment Landscape" },
        ]}
      />
      <TreatmentLandscape content={BREAST_TREATMENT_LANDSCAPE} />
    </div>
  );
}
