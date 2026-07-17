import { notFound } from "next/navigation";
import {
  AreaField,
  Field,
  StatusField,
} from "@/components/admin/form-fields";
import { MultiCheckField } from "@/components/admin/multi-check";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { saveStoryAction } from "@/lib/admin/actions";
import { guardAdmin } from "@/lib/auth/guard";
import { readStore } from "@/lib/db/store";
import { newId } from "@/lib/utils/slug";

export default async function AdminStoryEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await guardAdmin();
  const { id } = await params;
  const store = await readStore();
  const isNew = id === "new";
  const story = isNew ? null : store.stories.find((s) => s.id === id) ?? null;
  if (!isNew && !story) notFound();
  const entityId = story?.id ?? newId("story");
  const selectedTreatments = store.story_treatments
    .filter((st) => st.story_id === entityId)
    .map((st) => st.treatment_id);
  const selectedSources = store.content_sources
    .filter((cs) => cs.entity_type === "story" && cs.entity_id === entityId)
    .map((cs) => cs.source_id);

  return (
    <div className="max-w-3xl">
      <h1 className="font-heading text-3xl font-semibold">
        {isNew ? "New story" : "Edit story"}
      </h1>
      <form action={saveStoryAction} className="mt-6 space-y-4">
        <input type="hidden" name="id" value={entityId} />
        <Field label="Title" name="title" defaultValue={story?.title} required />
        <Field label="Slug" name="slug" defaultValue={story?.slug} />
        <div className="space-y-2">
          <Label htmlFor="cancer_id">Cancer</Label>
          <select
            id="cancer_id"
            name="cancer_id"
            defaultValue={story?.cancer_id ?? store.cancers[0]?.id}
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm"
            required
          >
            {store.cancers.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <Field label="Country" name="country" defaultValue={story?.country} />
        <Field
          label="Age range"
          name="age_range"
          defaultValue={story?.age_range}
        />
        <Field
          label="Decision topic"
          name="decision_topic"
          defaultValue={story?.decision_topic}
        />
        <AreaField
          label="Background"
          name="background"
          defaultValue={story?.background}
        />
        <AreaField
          label="Initial diagnosis"
          name="initial_diagnosis"
          defaultValue={story?.initial_diagnosis}
        />
        <AreaField
          label="Decision challenge"
          name="decision_challenge"
          defaultValue={story?.decision_challenge}
        />
        <AreaField
          label="Options considered"
          name="options_considered"
          defaultValue={story?.options_considered}
        />
        <AreaField
          label="Why compared"
          name="why_compared"
          defaultValue={story?.why_compared}
        />
        <AreaField
          label="Final decision"
          name="final_decision"
          defaultValue={story?.final_decision}
        />
        <AreaField
          label="Lessons learned"
          name="lessons_learned"
          defaultValue={story?.lessons_learned}
        />
        <Field label="SEO title" name="seo_title" defaultValue={story?.seo_title} />
        <AreaField
          label="SEO description"
          name="seo_description"
          defaultValue={story?.seo_description}
          rows={3}
        />
        <AreaField
          label="SEO keywords"
          name="seo_keywords"
          defaultValue={story?.seo_keywords.join("\n")}
          hint="One keyword per line"
          rows={3}
        />
        <Field
          label="Content reviewed at (ISO)"
          name="content_reviewed_at"
          defaultValue={story?.content_reviewed_at}
        />
        <StatusField defaultValue={story?.status} />
        <MultiCheckField
          label="Linked treatments"
          name="treatment_ids"
          selected={selectedTreatments}
          options={store.treatments.map((t) => ({ id: t.id, label: t.name }))}
        />
        <MultiCheckField
          label="Sources"
          name="source_ids"
          selected={selectedSources}
          options={store.sources.map((s) => ({ id: s.id, label: s.title }))}
        />
        <Button type="submit">Save story</Button>
      </form>
    </div>
  );
}
