import { notFound } from "next/navigation";
import {
  AreaField,
  Field,
  StatusField,
} from "@/components/admin/form-fields";
import { MultiCheckField } from "@/components/admin/multi-check";
import { Button } from "@/components/ui/button";
import { saveTreatmentAction } from "@/lib/admin/actions";
import { guardAdmin } from "@/lib/auth/guard";
import { readStore } from "@/lib/db/store";
import { newId } from "@/lib/utils/slug";

export default async function AdminTreatmentEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await guardAdmin();
  const { id } = await params;
  const store = await readStore();
  const isNew = id === "new";
  const treatment = isNew
    ? null
    : store.treatments.find((t) => t.id === id) ?? null;
  if (!isNew && !treatment) notFound();
  const entityId = treatment?.id ?? newId("tx");
  const selectedCountries = store.treatment_countries
    .filter((tc) => tc.treatment_id === entityId)
    .map((tc) => tc.country_code);
  const selectedSources = store.content_sources
    .filter((cs) => cs.entity_type === "treatment" && cs.entity_id === entityId)
    .map((cs) => cs.source_id);

  return (
    <div className="max-w-3xl">
      <h1 className="font-heading text-3xl font-semibold">
        {isNew ? "New treatment" : `Edit ${treatment?.name}`}
      </h1>
      <form action={saveTreatmentAction} className="mt-6 space-y-4">
        <input type="hidden" name="id" value={entityId} />
        <Field label="Name" name="name" defaultValue={treatment?.name} required />
        <Field label="Slug" name="slug" defaultValue={treatment?.slug} />
        <AreaField
          label="Description"
          name="description"
          defaultValue={treatment?.description}
        />
        <AreaField
          label="When considered"
          name="when_considered"
          defaultValue={treatment?.when_considered}
        />
        <AreaField
          label="Advantages"
          name="advantages"
          defaultValue={treatment?.advantages.join("\n")}
          hint="One per line"
        />
        <AreaField
          label="Limitations"
          name="limitations"
          defaultValue={treatment?.limitations.join("\n")}
          hint="One per line"
        />
        <AreaField
          label="Doctor questions"
          name="doctor_questions"
          defaultValue={treatment?.doctor_questions.join("\n")}
          hint="One per line"
        />
        <AreaField
          label="Cost considerations"
          name="cost_considerations"
          defaultValue={treatment?.cost_considerations}
        />
        <Field
          label="SEO title"
          name="seo_title"
          defaultValue={treatment?.seo_title}
        />
        <AreaField
          label="SEO description"
          name="seo_description"
          defaultValue={treatment?.seo_description}
          rows={3}
        />
        <AreaField
          label="SEO keywords"
          name="seo_keywords"
          defaultValue={treatment?.seo_keywords.join("\n")}
          hint="One keyword per line"
          rows={3}
        />
        <Field
          label="Content reviewed at (ISO)"
          name="content_reviewed_at"
          defaultValue={treatment?.content_reviewed_at}
        />
        <StatusField defaultValue={treatment?.status} />
        <MultiCheckField
          label="Countries"
          name="country_codes"
          selected={selectedCountries}
          options={store.countries.map((c) => ({
            id: c.code,
            label: c.name,
          }))}
        />
        <MultiCheckField
          label="Sources"
          name="source_ids"
          selected={selectedSources}
          options={store.sources.map((s) => ({ id: s.id, label: s.title }))}
        />
        <Button type="submit">Save treatment</Button>
      </form>
    </div>
  );
}
