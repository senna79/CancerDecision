import { GenerateForm } from "@/components/admin/generate-form";
import { guardAdmin } from "@/lib/auth/guard";
import { getCancers } from "@/lib/queries";

export default async function AdminGeneratePage() {
  await guardAdmin();
  const cancers = await getCancers({ includeUnpublished: true });

  return (
    <div>
      <h1 className="font-heading text-3xl font-semibold">AI draft generation</h1>
      <p className="mt-2 max-w-2xl text-[var(--muted)]">
        Generate educational draft fields for a question. Output is saved as
        draft for human review and never published automatically.
      </p>
      <div className="mt-8">
        <GenerateForm
          cancers={cancers.map((c) => ({ id: c.id, name: c.name }))}
        />
      </div>
    </div>
  );
}
