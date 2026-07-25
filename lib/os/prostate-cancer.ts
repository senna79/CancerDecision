import type { CancerDecisionOs } from "@/lib/os/types";
import {
  PROSTATE_CARE_TEAM_SLUG,
  PROSTATE_COST_SLUG,
  PROSTATE_FOLLOW_UP_SLUG,
  PROSTATE_GLOBAL_CARE_SLUG,
  PROSTATE_NEWLY_DIAGNOSED_SLUG,
  PROSTATE_QOL_SLUG,
  PROSTATE_RECURRENCE_SLUG,
  PROSTATE_SECOND_OPINION_SLUG,
  PROSTATE_SURVEILLANCE_SLUG,
  PROSTATE_TREATMENT_COMPARE_SLUG,
} from "@/lib/content/prostate-entry-slugs";

/**
 * Prostate Cancer Decision OS — hub-first.
 * Distinctive patient path:
 *   risk clarity → active surveillance vs treatment → surgery vs radiation
 *   → function / practical fit → second look when unsure.
 * Full Template v2 Entries deferred; active nodes link to seed question pages.
 */
export const PROSTATE_CANCER_DECISION_OS: CancerDecisionOs = {
  cancer_slug: "prostate-cancer",
  title: "Prostate Cancer Decision Map",
  intro:
    "A branching journey from newly diagnosed to the next decision. Risk clarity and the surveillance-versus-treatment fork usually sit before locking surgery or radiation. Each active node links to a decision guide — not a personal care plan.",
  moments: [
    {
      id: "node-diagnosis",
      slug: "newly-diagnosed",
      label: "1. Newly diagnosed",
      state_label: "Diagnosis confirmed",
      summary:
        "Confirm what is known — PSA, Grade Group / Gleason, MRI and staging — and which decisions are time-sensitive versus deliberately paced.",
      why_this_matters:
        "Early prostate decisions depend on risk clarity. Rushing treatment before risk is clear can close off surveillance when it would have been reasonable.",
      tier: 1,
      status: "active",
      stage: "diagnosis",
      sort_order: 1,
      ai_entry_slug: PROSTATE_NEWLY_DIAGNOSED_SLUG,
      question_slugs: [PROSTATE_NEWLY_DIAGNOSED_SLUG],
      treatment_slugs: [],
      story_slugs: ["weighing-active-surveillance-prostate-cancer"],
      next_moment_ids: [
        "node-surveillance",
        "node-compare",
        "node-second-opinion",
      ],
      patient_router: {
        label: "What should happen first after a prostate cancer diagnosis?",
        hint: "Confirm risk group, what results are still pending, and which decisions are time-sensitive.",
        nextStep: "Start here",
      },
    },
    {
      id: "node-surveillance",
      slug: "active-surveillance",
      label: "2. Active surveillance vs treatment",
      state_label: "Monitor or treat",
      summary:
        "Decide whether structured monitoring is reasonable for your risk group — or whether definitive therapy is favored now.",
      why_this_matters:
        "This is the prostate-distinctive fork: for selected lower-risk cancers, surveillance can defer treatment side effects while watching for change.",
      tier: 1,
      status: "active",
      stage: "treatment",
      sort_order: 2,
      ai_entry_slug: PROSTATE_SURVEILLANCE_SLUG,
      question_slugs: [PROSTATE_SURVEILLANCE_SLUG],
      treatment_slugs: ["active-surveillance"],
      story_slugs: ["weighing-active-surveillance-prostate-cancer"],
      next_moment_ids: [
        "node-compare",
        "node-second-opinion",
        "node-qol",
        "node-costs",
      ],
      patient_router: {
        label: "Is active surveillance a reasonable option for me?",
        hint: "Risk group, MRI/biopsy findings, follow-up intensity, and comfort with monitoring instead of immediate treatment.",
        nextStep: "Start here",
      },
    },
    {
      id: "node-compare",
      slug: "treatment-comparison",
      label: "3. Surgery vs radiation",
      state_label: "Treatment comparison",
      summary:
        "Compare surgery and radiation (and related options) when definitive therapy is on the table — including side-effect tradeoffs that matter to you.",
      why_this_matters:
        "Multiple guideline-supported paths can be reasonable. The useful comparison is fit for your risk group and priorities, not a single “best” treatment.",
      tier: 1,
      status: "active",
      stage: "treatment",
      sort_order: 3,
      ai_entry_slug: PROSTATE_TREATMENT_COMPARE_SLUG,
      question_slugs: [PROSTATE_TREATMENT_COMPARE_SLUG],
      treatment_slugs: ["surgery", "radiation-therapy"],
      story_slugs: [],
      next_moment_ids: [
        "node-second-opinion",
        "node-care-team",
        "node-qol",
        "node-costs",
      ],
      patient_router: {
        label: "How should I compare surgery and radiation?",
        hint: "Cancer-control expectations, urinary/sexual/bowel tradeoffs, and what would change the recommendation.",
        nextStep: "Start here",
      },
    },
    {
      id: "node-second-opinion",
      slug: "second-opinion",
      label: "4. Second opinion",
      state_label: "Another review",
      summary:
        "Decide whether another expert review helps before locking surveillance or definitive therapy.",
      why_this_matters:
        "Prostate pathways often diverge across specialties. An independent review can confirm risk group and clarify fit with your priorities.",
      tier: 1,
      status: "active",
      stage: "second_opinion",
      sort_order: 4,
      ai_entry_slug: PROSTATE_SECOND_OPINION_SLUG,
      question_slugs: [PROSTATE_SECOND_OPINION_SLUG],
      treatment_slugs: [],
      story_slugs: [],
      next_moment_ids: [
        "node-care-team",
        "node-surveillance",
        "node-compare",
      ],
      patient_router: {
        label: "Should I get a second opinion before deciding?",
        hint: "Useful when recommendations diverge, or before locking surveillance or irreversible treatment.",
        nextStep: "Start here",
      },
    },
    {
      id: "node-care-team",
      slug: "care-center-expertise",
      label: "5. Specialty recommendations differ",
      state_label: "Urology vs radiation framing",
      summary:
        "When urology and radiation oncology frame options differently, clarify where they disagree and what would reconcile the plan.",
      why_this_matters:
        "Specialty differences are often complementary perspectives — not proof that one doctor is wrong.",
      tier: 1,
      status: "active",
      stage: "second_opinion",
      sort_order: 5,
      ai_entry_slug: PROSTATE_CARE_TEAM_SLUG,
      question_slugs: [PROSTATE_CARE_TEAM_SLUG],
      treatment_slugs: [],
      story_slugs: [],
      next_moment_ids: [
        "node-second-opinion",
        "node-compare",
        "node-surveillance",
        "node-global",
      ],
      patient_router: {
        label: "What if specialists give different recommendations?",
        hint: "Where urology and radiation oncology disagree — and whether a joint consult helps.",
        nextStep: "Start here",
      },
    },
    {
      id: "node-costs",
      slug: "cost-logistics",
      label: "6. Cost & practical fit",
      state_label: "Cost and logistics",
      summary:
        "Compare how surveillance, surgery, and radiation concentrate costs and time — including follow-up and complications.",
      why_this_matters:
        "Cost and logistics belong in the decision when pathways are otherwise similar for your risk group.",
      tier: 2,
      status: "active",
      stage: "practical",
      sort_order: 6,
      optional: true,
      ai_entry_slug: PROSTATE_COST_SLUG,
      question_slugs: [PROSTATE_COST_SLUG],
      treatment_slugs: [],
      story_slugs: [],
      next_moment_ids: [
        "node-compare",
        "node-surveillance",
        "node-qol",
      ],
      patient_router: {
        label: "How do cost and practical burden differ across options?",
        hint: "Upfront versus ongoing costs, time, and logistics across surveillance, surgery, and radiation.",
        nextStep: "Start here",
      },
    },
    {
      id: "node-global",
      slug: "global-care",
      label: "Local vs international branch",
      state_label: "International option",
      summary:
        "Only explore cross-border care when a specific capability or high-volume expertise is missing locally.",
      why_this_matters:
        "Abroad care matters only when a capability gap is real — not as a default upgrade.",
      tier: 2,
      status: "active",
      stage: "global",
      sort_order: 7,
      optional: true,
      ai_entry_slug: PROSTATE_GLOBAL_CARE_SLUG,
      question_slugs: [PROSTATE_GLOBAL_CARE_SLUG],
      treatment_slugs: [],
      story_slugs: [],
      next_moment_ids: [
        "node-care-team",
        "node-second-opinion",
        "node-compare",
      ],
      patient_router: {
        label: "When should I consider prostate cancer care abroad?",
        hint: "Name the capability gap first — then compare continuity and follow-up at home.",
        nextStep: "Start here",
      },
    },
    {
      id: "node-qol",
      slug: "quality-of-life",
      label: "Quality of life & side effects",
      state_label: "Function priorities",
      summary:
        "Bring urinary, sexual, and bowel priorities into the choice between surveillance, surgery, and radiation.",
      why_this_matters:
        "For many men, function tradeoffs are the real decision — not only cancer control numbers.",
      tier: 2,
      status: "planned",
      stage: "supportive",
      sort_order: 8,
      ai_entry_slug: PROSTATE_QOL_SLUG,
      question_slugs: [PROSTATE_QOL_SLUG],
      treatment_slugs: [],
      story_slugs: [],
      next_moment_ids: [
        "node-surveillance",
        "node-compare",
        "node-second-opinion",
      ],
    },
    {
      id: "node-recurrence",
      slug: "recurrence",
      label: "Rising PSA / recurrence",
      state_label: "PSA rising",
      summary:
        "When PSA rises after treatment or during surveillance, sort what the change means and which decisions come next.",
      why_this_matters:
        "A rising PSA creates urgency and fragmented advice — patients need a clear next-decision frame.",
      tier: 2,
      status: "planned",
      stage: "recurrence",
      sort_order: 9,
      ai_entry_slug: PROSTATE_RECURRENCE_SLUG,
      question_slugs: [PROSTATE_RECURRENCE_SLUG],
      treatment_slugs: [],
      story_slugs: [],
      next_moment_ids: [
        "node-second-opinion",
        "node-compare",
        "node-follow-up",
      ],
    },
    {
      id: "node-follow-up",
      slug: "follow-up-monitoring",
      label: "Long-term monitoring & follow-up",
      state_label: "Follow-up monitoring",
      summary:
        "After treatment or on surveillance, clarify what to monitor, when to contact the team, and what triggers a change.",
      why_this_matters:
        "Surveillance and post-treatment follow-up only work with a written plan — not vague reassurance.",
      tier: 2,
      status: "planned",
      stage: "supportive",
      sort_order: 10,
      ai_entry_slug: PROSTATE_FOLLOW_UP_SLUG,
      question_slugs: [PROSTATE_FOLLOW_UP_SLUG],
      treatment_slugs: [],
      story_slugs: [],
      next_moment_ids: ["node-recurrence", "node-second-opinion", "node-qol"],
    },
  ],
};
