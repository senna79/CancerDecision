import { TreatmentLandscape } from "@/components/cancer/treatment-landscape";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { LUNG_TREATMENT_LANDSCAPE } from "@/lib/content/lung-treatment-landscape";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

const path = LUNG_TREATMENT_LANDSCAPE.path;

export const metadata = buildMetadata({
  title: "What Lung Cancer Treatments Might Be Discussed?",
  description:
    "A lung cancer treatment map — local, systemic, trials, and supportive care — plus how doctors choose, questions to ask, and which Decision Path to open next.",
  path,
  keywords: [
    "lung cancer treatment options",
    "lung cancer treatment landscape",
    "surgery radiation systemic therapy",
    "how doctors choose lung cancer treatment",
  ],
});

export default function LungTreatmentLandscapePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Cancers", path: "/cancers" },
          { name: "Lung Cancer", path: "/cancers/lung-cancer" },
          { name: "Treatment Landscape", path },
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Cancers", href: "/cancers" },
          { label: "Lung Cancer", href: "/cancers/lung-cancer" },
          { label: "Treatment Landscape" },
        ]}
      />
      <TreatmentLandscape />
    </div>
  );
}
