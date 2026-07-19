import { PrepSheetView } from "@/components/prep-sheet/prep-sheet-view";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "My appointment prep sheet",
  description:
    "Collect questions to ask and records to bring before your lung cancer appointment. Copy or print your prep sheet — educational decision support, not medical advice.",
  path: "/prep-sheet",
  keywords: [
    "cancer appointment checklist",
    "questions to ask oncologist",
    "lung cancer prep sheet",
  ],
});

export default function PrepSheetPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-10 md:px-8 md:py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
        Take to your appointment
      </p>
      <h1 className="mt-2 font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)] md:text-4xl">
        My appointment prep sheet
      </h1>
      <p className="mt-3 max-w-2xl text-[var(--muted)]">
        Add questions and materials while you browse decision guides. Nothing
        here diagnoses or recommends treatment — it helps you walk into the
        next conversation prepared.
      </p>
      <div className="mt-8">
        <PrepSheetView />
      </div>
    </div>
  );
}
