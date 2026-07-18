import { Section } from "@/components/content/section";

const DEFAULT_STEPS = [
  "Confirm whether biomarker testing is needed for the decision in front of you.",
  "Ask whether existing tissue or a blood sample can be used before considering another biopsy.",
  "Agree with your team on timing — when results are expected, and whether treatment decisions will wait.",
  "Use the results (or a clear plan while waiting) to compare options and take your next step.",
];

/** Short left-column story: process without becoming an encyclopedia */
export function WhatHappensNext({
  title = "What happens next?",
  lead = "Think of this as a sequence of conversations with your care team — not a checklist you must finish alone.",
  steps = DEFAULT_STEPS,
}: {
  title?: string;
  lead?: string;
  steps?: string[];
}) {
  return (
    <Section id="what-happens-next" title={title}>
      <p>{lead}</p>
      <ol className="mt-4 space-y-3">
        {steps.map((step, index) => (
          <li
            key={step}
            className="flex gap-3 rounded-md border border-[var(--line)] bg-white/70 px-4 py-3"
          >
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[var(--accent)]/40 text-xs font-bold text-[var(--accent)]">
              {index + 1}
            </span>
            <span className="text-[var(--ink)]">{step}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
