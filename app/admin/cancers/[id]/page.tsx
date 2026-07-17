import { notFound } from "next/navigation";
import {
  AreaField,
  Field,
  StatusField,
} from "@/components/admin/form-fields";
import { MultiCheckField } from "@/components/admin/multi-check";
import { Button } from "@/components/ui/button";
import { saveCancerAction } from "@/lib/admin/actions";
import { guardAdmin } from "@/lib/auth/guard";
import { readStore } from "@/lib/db/store";
import { newId } from "@/lib/utils/slug";

export default async function AdminCancerEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await guardAdmin();
  const { id } = await params;
  const store = await readStore();
  const isNew = id === "new";
  const cancer = isNew
    ? null
    : store.cancers.find((c) => c.id === id) ?? null;
  if (!isNew && !cancer) notFound();

  const entityId = cancer?.id ?? newId("cancer");
  const selectedTreatments = store.cancer_treatments
    .filter((ct) => ct.cancer_id === entityId)
    .map((ct) => ct.treatment_id);
  const selectedSources = store.content_sources
    .filter((cs) => cs.entity_type === "cancer" && cs.entity_id === entityId)
    .map((cs) => cs.source_id);

  return (
    <div className="max-w-3xl">
      <h1 className="font-heading text-3xl font-semibold">
        {isNew ? "New cancer" : `Edit ${cancer?.name}`}
      </h1>
      <form action={saveCancerAction} className="mt-6 space-y-4">
        <input type="hidden" name="id" value={entityId} />
        <Field label="Name" name="name" defaultValue={cancer?.name} required />
        <Field label="Slug" name="slug" defaultValue={cancer?.slug} />
        <AreaField
          label="Overview"
          name="overview"
          defaultValue={cancer?.overview}
          rows={6}
        />
        <Field
          label="SEO title"
          name="seo_title"
          defaultValue={cancer?.seo_title}
        />
        <AreaField
          label="SEO description"
          name="seo_description"
          defaultValue={cancer?.seo_description}
          rows={3}
        />
        <AreaField
          label="SEO keywords"
          name="seo_keywords"
          defaultValue={cancer?.seo_keywords.join("\n")}
          hint="One keyword per line"
          rows={3}
        />
        <Field
          label="Content reviewed at (ISO)"
          name="content_reviewed_at"
          defaultValue={cancer?.content_reviewed_at}
        />
        <StatusField defaultValue={cancer?.status} />
        <MultiCheckField
          label="Linked treatments"
          name="treatment_ids"
          selected={selectedTreatments}
          options={store.treatments.map((t) => ({
            id: t.id,
            label: t.name,
          }))}
        />
        <MultiCheckField
          label="Sources"
          name="source_ids"
          selected={selectedSources}
          options={store.sources.map((s) => ({ id: s.id, label: s.title }))}
        />
        <Button type="submit">Save cancer</Button>
      </form>
    </div>
  );
}
