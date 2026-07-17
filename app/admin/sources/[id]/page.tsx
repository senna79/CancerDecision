import { notFound } from "next/navigation";
import { AreaField, Field } from "@/components/admin/form-fields";
import { Button } from "@/components/ui/button";
import { saveSourceAction } from "@/lib/admin/actions";
import { guardAdmin } from "@/lib/auth/guard";
import { readStore } from "@/lib/db/store";
import { newId } from "@/lib/utils/slug";

export default async function AdminSourceEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await guardAdmin();
  const { id } = await params;
  const store = await readStore();
  const isNew = id === "new";
  const source = isNew ? null : store.sources.find((s) => s.id === id) ?? null;
  if (!isNew && !source) notFound();
  const entityId = source?.id ?? newId("src");

  return (
    <div className="max-w-3xl">
      <h1 className="font-heading text-3xl font-semibold">
        {isNew ? "New source" : "Edit source"}
      </h1>
      <form action={saveSourceAction} className="mt-6 space-y-4">
        <input type="hidden" name="id" value={entityId} />
        <Field label="Title" name="title" defaultValue={source?.title} required />
        <Field label="URL" name="url" defaultValue={source?.url} required />
        <Field
          label="Publisher"
          name="publisher"
          defaultValue={source?.publisher}
        />
        <Field
          label="Published on"
          name="published_on"
          defaultValue={source?.published_on}
        />
        <AreaField label="Notes" name="notes" defaultValue={source?.notes} />
        <Button type="submit">Save source</Button>
      </form>
    </div>
  );
}
