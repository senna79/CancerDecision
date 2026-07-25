import { TreatmentLandscape } from "@/components/cancer/treatment-landscape";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { PROSTATE_TREATMENT_LANDSCAPE } from "@/lib/content/prostate-treatment-landscape";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { buildMetadata } from "@/lib/seo/metadata";

const path = PROSTATE_TREATMENT_LANDSCAPE.path;

export const metadata = buildMetadata({
  title: "What Prostate Cancer Treatment Paths Might Be Discussed?",
  description:
    "A prostate cancer treatment map — active surveillance, surgery, radiation, hormone therapy — plus how doctors choose, questions to ask, and which Decision Path to open next.",
  path,
  index: false,
  keywords: [
    "prostate cancer treatment options",
    "prostate cancer treatment landscape",
    "active surveillance surgery radiation",
    "how doctors choose prostate cancer treatment",
  ],
});

export default function ProstateTreatmentLandscapePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Cancers", path: "/cancers" },
          { name: "Prostate Cancer", path: "/cancers/prostate-cancer" },
          { name: "Treatment Landscape", path },
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Cancers", href: "/cancers" },
          { label: "Prostate Cancer", href: "/cancers/prostate-cancer" },
          { label: "Treatment Landscape" },
        ]}
      />
      <TreatmentLandscape content={PROSTATE_TREATMENT_LANDSCAPE} />
    </div>
  );
}
