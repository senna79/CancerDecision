import { notFound } from "next/navigation";
import {
  AreaField,
  Field,
  StatusField,
} from "@/components/admin/form-fields";
import { MultiCheckField } from "@/components/admin/multi-check";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { saveGlobalCareAction } from "@/lib/admin/actions";
import { guardAdmin } from "@/lib/auth/guard";
import { readStore } from "@/lib/db/store";
import { newId } from "@/lib/utils/slug";

export default async function AdminGlobalCareEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await guardAdmin();
  const { id } = await params;
  const store = await readStore();
  const isNew = id === "new";
  const option = isNew
    ? null
    : store.global_care_options.find((o) => o.id === id) ?? null;
  if (!isNew && !option) notFound();
  const entityId = option?.id ?? newId("gco");
  const selectedSources = store.content_sources
    .filter(
      (cs) =>
        cs.entity_type === "global_care_option" && cs.entity_id === entityId
    )
    .map((cs) => cs.source_id);

  return (
    <div className="max-w-3xl">
      <h1 className="font-heading text-3xl font-semibold">
        {isNew ? "New global care option" : "Edit global care option"}
      </h1>
      <form action={saveGlobalCareAction} className="mt-6 space-y-4">
        <input type="hidden" name="id" value={entityId} />
        <Field label="Title" name="title" defaultValue={option?.title} required />
        <Field label="Slug" name="slug" defaultValue={option?.slug} />
        <div className="space-y-2">
          <Label htmlFor="cancer_id">Cancer (optional)</Label>
          <select
            id="cancer_id"
            name="cancer_id"
            defaultValue={option?.cancer_id ?? ""}
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm"
          >
            <option value="">General guide</option>
            {store.cancers.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="country_code">Country</Label>
          <select
            id="country_code"
            name="country_code"
            defaultValue={option?.country_code ?? "US"}
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm"
          >
            {store.countries.map((c) => (
              <option key={c.code} value={c.code}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <AreaField
          label="Summary"
          name="summary"
          defaultValue={option?.summary}
          rows={3}
        />
        <AreaField label="Body" name="body" defaultValue={option?.body} rows={6} />
        <AreaField
          label="Cost notes"
          name="cost_notes"
          defaultValue={option?.cost_notes}
        />
        <Field
          label="SEO title"
          name="seo_title"
          defaultValue={option?.seo_title}
        />
        <AreaField
          label="SEO description"
          name="seo_description"
          defaultValue={option?.seo_description}
          rows={3}
        />
        <AreaField
          label="SEO keywords"
          name="seo_keywords"
          defaultValue={option?.seo_keywords.join("\n")}
          hint="One keyword per line"
          rows={3}
        />
        <Field
          label="Content reviewed at (ISO)"
          name="content_reviewed_at"
          defaultValue={option?.content_reviewed_at}
        />
        <StatusField defaultValue={option?.status} />
        <MultiCheckField
          label="Sources"
          name="source_ids"
          selected={selectedSources}
          options={store.sources.map((s) => ({ id: s.id, label: s.title }))}
        />
        <Button type="submit">Save option</Button>
      </form>
    </div>
  );
}
