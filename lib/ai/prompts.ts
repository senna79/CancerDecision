export function questionDraftPrompt(input: {
  title: string;
  cancerName: string;
  category: string;
}) {
  return `You are helping editors draft educational cancer decision content for patients.
This is NOT medical advice, diagnosis, or a treatment recommendation.

Cancer type: ${input.cancerName}
Question category: ${input.category}
Question title: ${input.title}

Return strict JSON with these keys:
- summary: string, max 300 words, short educational answer
- why_patients_ask: string, explain uncertainty and decision context
- key_factors: string array, 4-7 decision factors
- doctor_questions: string array, 3-5 questions patients can ask clinicians

Rules:
- Use cautious, educational language
- Do not diagnose or recommend a specific treatment
- Do not invent citations
- Keep tone calm and practical`;
}

export type QuestionDraft = {
  summary: string;
  why_patients_ask: string;
  key_factors: string[];
  doctor_questions: string[];
};
