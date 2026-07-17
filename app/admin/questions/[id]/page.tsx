import { notFound } from "next/navigation";
import {
  AreaField,
  Field,
  StatusField,
} from "@/components/admin/form-fields";
import { MultiCheckField } from "@/components/admin/multi-check";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { saveQuestionAction } from "@/lib/admin/actions";
import { guardAdmin } from "@/lib/auth/guard";
import { readStore } from "@/lib/db/store";
import { newId } from "@/lib/utils/slug";
import { QUESTION_CATEGORIES } from "@/types/database";

export default async function AdminQuestionEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await guardAdmin();
  const { id } = await params;
  const store = await readStore();
  const isNew = id === "new";
  const question = isNew
    ? null
    : store.questions.find((q) => q.id === id) ?? null;
  if (!isNew && !question) notFound();

  const entityId = question?.id ?? newId("q");
  const selectedTreatments = store.question_treatments
    .filter((qt) => qt.question_id === entityId)
    .map((qt) => qt.treatment_id);
  const selectedStories = store.question_stories
    .filter((qs) => qs.question_id === entityId)
    .map((qs) => qs.story_id);
  const selectedRelated = store.related_questions
    .filter((rq) => rq.from_id === entityId)
    .map((rq) => rq.to_id);
  const selectedSources = store.content_sources
    .filter((cs) => cs.entity_type === "question" && cs.entity_id === entityId)
    .map((cs) => cs.source_id);

  return (
    <div className="max-w-3xl">
      <h1 className="font-heading text-3xl font-semibold">
        {isNew ? "New question" : "Edit question"}
      </h1>
      <form action={saveQuestionAction} className="mt-6 space-y-4">
        <input type="hidden" name="id" value={entityId} />
        <input
          type="hidden"
          name="ai_generated_at"
          value={question?.ai_generated_at ?? ""}
        />
        <Field label="Title" name="title" defaultValue={question?.title} required />
        <Field label="Slug" name="slug" defaultValue={question?.slug} />
        <div className="space-y-2">
          <Label htmlFor="cancer_id">Cancer</Label>
          <select
            id="cancer_id"
            name="cancer_id"
            defaultValue={question?.cancer_id ?? store.cancers[0]?.id}
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
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <select
            id="category"
            name="category"
            defaultValue={question?.category ?? "diagnosis"}
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm"
          >
            {QUESTION_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <AreaField
          label="Summary"
          name="summary"
          defaultValue={question?.summary}
          rows={6}
        />
        <AreaField
          label="Why patients ask"
          name="why_patients_ask"
          defaultValue={question?.why_patients_ask}
          rows={4}
        />
        <AreaField
          label="Key factors"
          name="key_factors"
          defaultValue={question?.key_factors.join("\n")}
          hint="One factor per line"
        />
        <AreaField
          label="Doctor questions"
          name="doctor_questions"
          defaultValue={question?.doctor_questions.join("\n")}
          hint="One question per line"
        />
        <AreaField label="Body" name="body" defaultValue={question?.body} rows={6} />
        <Field
          label="SEO title"
          name="seo_title"
          defaultValue={question?.seo_title}
        />
        <AreaField
          label="SEO description"
          name="seo_description"
          defaultValue={question?.seo_description}
          rows={3}
        />
        <AreaField
          label="SEO keywords"
          name="seo_keywords"
          defaultValue={question?.seo_keywords.join("\n")}
          hint="One keyword per line"
          rows={3}
        />
        <Field
          label="Content reviewed at (ISO)"
          name="content_reviewed_at"
          defaultValue={question?.content_reviewed_at}
        />
        <StatusField defaultValue={question?.status} />
        <MultiCheckField
          label="Related treatments"
          name="treatment_ids"
          selected={selectedTreatments}
          options={store.treatments.map((t) => ({ id: t.id, label: t.name }))}
        />
        <MultiCheckField
          label="Related stories"
          name="story_ids"
          selected={selectedStories}
          options={store.stories.map((s) => ({ id: s.id, label: s.title }))}
        />
        <MultiCheckField
          label="Related questions"
          name="related_question_ids"
          selected={selectedRelated}
          options={store.questions
            .filter((q) => q.id !== entityId)
            .map((q) => ({ id: q.id, label: q.title }))}
        />
        <MultiCheckField
          label="Sources"
          name="source_ids"
          selected={selectedSources}
          options={store.sources.map((s) => ({ id: s.id, label: s.title }))}
        />
        <Button type="submit">Save question</Button>
      </form>
    </div>
  );
}
