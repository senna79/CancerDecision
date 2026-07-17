import type { Question } from "@/types/database";
import type { JourneyContext } from "@/lib/journey/engine";

export type NextActionBundle = {
  hereLabel: string;
  hereSummary: string;
  beforeDeciding: string[];
  askDoctor: string[];
  continueLabel: string | null;
  continueHref: string | null;
};

export function buildNextActionBundle(
  question: Question,
  journey: JourneyContext | null,
  cancerSlug?: string | null
): NextActionBundle {
  const hereLabel = journey
    ? journey.currentNode.state_label ??
      journey.currentNode.label.replace(/^\d+\.\s*/, "")
    : question.category.replaceAll("_", " ");

  const hereSummary = journey
    ? journey.currentNode.summary
    : question.summary.slice(0, 140);

  const beforeDeciding =
    question.next_steps.length > 0
      ? question.next_steps.slice(0, 3)
      : question.records_to_prepare.length > 0
        ? question.records_to_prepare.slice(0, 3)
        : [
            "Write down what is still unknown",
            "Ask which next result would change the plan",
            "List the questions you will bring to your next visit",
          ];

  const askDoctor = question.doctor_questions.slice(0, 3);

  let continueLabel: string | null = null;
  let continueHref: string | null = null;

  if (journey?.next?.questionSlug) {
    continueLabel =
      journey.next.node.state_label ??
      journey.next.node.label.replace(/^\d+\.\s*/, "");
    continueHref = `/questions/${journey.next.questionSlug}`;
  } else if (cancerSlug) {
    continueLabel = "Review the full decision map";
    continueHref = `/cancers/${cancerSlug}#decision-map`;
  }

  return {
    hereLabel,
    hereSummary,
    beforeDeciding,
    askDoctor,
    continueLabel,
    continueHref,
  };
}
