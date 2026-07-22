/** Hang-card bodies for Breast Reconstruction Decision Path (Entry Template v2) */

export const BREAST_RECONSTRUCTION_ENTRY_CARDS = {
  whatIs: {
    lead: "Breast reconstruction rebuilds breast shape after mastectomy — with implants, your own tissue, a staged approach, or a decision not to reconstruct. It is part of the cancer surgery conversation for many people, not only a later cosmetic add-on.",
    close:
      "Reconstruction is optional. Choosing not to reconstruct is a valid path when it fits your goals and medical plan.",
  },
  whyInCancerPlan: {
    lead: "Timing and method can affect recovery, radiation planning, and how many operations you need. Discussing reconstruction early helps the surgical plan fit together — even if you are unsure what you want.",
    close:
      "You do not need a final aesthetic preference on day one. You do need to know what options exist and what must wait for cancer treatment.",
  },
  whoFaces: {
    lead: "Reconstruction questions come up most often with mastectomy. After lumpectomy, the conversation is usually different (shape change, oncoplastic techniques) — ask what applies to your operation.",
    items: [
      "Choosing mastectomy and wondering about immediate vs delayed reconstruction",
      "Unsure whether to reconstruct at all",
      "Radiation may be needed and could affect timing",
      "Considering surgery on both breasts and symmetry goals",
    ],
    close:
      "Ask: “For my cancer plan, which reconstruction paths are realistic — and which should wait?”",
  },
  notRequired: {
    lead: "Reconstruction is a choice, not a requirement for completing cancer treatment. Some people reconstruct later; some never do; some use a prosthesis externally.",
    close:
      "A good decision matches medical timing and your priorities — not pressure to “finish” the look immediately.",
  },
  immediate: {
    lead: "Immediate reconstruction starts at the same operation as mastectomy (sometimes as a first stage, such as a tissue expander).",
    items: [
      "Can reduce the number of separate major operations for some people",
      "May involve plastic surgery and breast surgery teams coordinating the same day",
      "Radiation plans, tissue quality, and health can affect whether immediate is recommended",
    ],
    close:
      "Ask whether immediate reconstruction is oncologically and surgically appropriate for you — not only whether it is available.",
  },
  delayed: {
    lead: "Delayed reconstruction happens after mastectomy healing — and often after radiation or other treatments that would complicate an immediate build.",
    items: [
      "Can let cancer treatment and recovery come first",
      "May mean living with a flat closure for a period of time",
      "Still allows a planned reconstruction when timing is clearer",
    ],
    close:
      "Delayed does not mean “you missed your chance.” Ask what the realistic window looks like in your plan.",
  },
  methods: {
    lead: "Two large families are discussed most often — implants and autologous (using your own tissue). Many plans are staged.",
    items: [
      "Implant-based — often with an expander first, then exchange",
      "Autologous / flap — tissue from another part of the body",
      "Combinations or staged approaches depending on anatomy and radiation",
    ],
    close:
      "You do not need to pick a brand or flap name online. Ask which families fit your body, cancer timeline, and goals.",
  },
  radiation: {
    lead: "Radiation can change tissue quality and reconstruction timing. If post-mastectomy radiation is likely, teams often adjust whether reconstruction is immediate, delayed, or staged differently.",
    ask: [
      "Am I likely to need radiation after mastectomy?",
      "If yes, how does that change reconstruction timing or method?",
      "Would starting reconstruction now complicate radiation — or the reverse?",
    ],
    close:
      "Get a radiation-aware answer before locking an immediate reconstruction plan — then open the radiation guide if the local plan is still unclear.",
  },
  geneticsBilateral: {
    lead: "Genetics or bilateral mastectomy can change reconstruction planning — symmetry, staging, and recovery load may differ when both sides are involved.",
    ask: [
      "If both breasts are operated on, how does reconstruction planning change?",
      "Should genetics results be clear before locking reconstruction timing?",
    ],
    close:
      "Bilateral planning is a coordination decision — not automatic “twice the same operation.”",
  },
  recovery: {
    lead: "Recovery depends on mastectomy extent, reconstruction method, lymph-node surgery, and whether treatment continues afterward.",
    ask: [
      "What does the first 2–6 weeks look like for each path?",
      "How many operations might the full reconstruction sequence involve?",
      "When could I return to work, caregiving, or exercise?",
    ],
  },
  systemicTiming: {
    lead: "Chemotherapy, HER2-targeted therapy, or other systemic treatment may start before or after surgery. Reconstruction timing should fit that sequence — not fight it.",
    ask: [
      "Would reconstruction delay a needed systemic therapy?",
      "If medicines start first, when would reconstruction be reconsidered?",
      "Who coordinates plastic surgery with medical oncology timing?",
    ],
  },
  pending: {
    lead: "Before locking reconstruction timing, confirm:",
    items: [
      "Whether mastectomy is the local plan (vs conservation)",
      "Whether radiation is likely afterward",
      "Whether genetics or bilateral surgery could change the plan",
      "Whether immediate reconstruction is medically appropriate",
    ],
    close:
      "Clear answers here prevent locking a cosmetic timeline that cancer treatment would reverse.",
  },
  thisWeek: {
    lead: "If reconstruction is part of your decision, focus on:",
    steps: [
      "Ask whether immediate, delayed, or no reconstruction fits your cancer plan",
      "Ask how radiation and systemic therapy would change timing",
      "If useful, request a plastic surgery consult before locking the mastectomy date",
    ],
    close:
      "A short timing answer beats researching every implant or flap technique alone.",
  },
  mistakes: {
    lead: "Common reconstruction-timing mistakes include:",
    items: [
      {
        mistake: "Treating reconstruction as an afterthought only",
        why: "Timing can affect planning — even if you are unsure about reconstructing.",
      },
      {
        mistake: "Choosing immediate reconstruction without a radiation plan",
        why: "Radiation often changes what is safest and most durable.",
      },
      {
        mistake: "Assuming you must reconstruct to “finish” treatment",
        why: "Not reconstructing is a valid choice; cancer control does not require it.",
      },
      {
        mistake: "Picking a method from photos before medical timing is clear",
        why: "Cancer sequence and anatomy come first; aesthetics follow inside that frame.",
      },
    ],
  },
} as const;

export const BREAST_RECONSTRUCTION_GLOSS =
  "Reconstruction timing (immediate, delayed, or none) and method families (implant vs tissue) should fit the cancer plan — especially mastectomy, radiation, and recovery — not be chosen as a separate cosmetic project.";

export const BREAST_RECONSTRUCTION_DIRECT_ANSWER = `Reconstruction after mastectomy can be immediate, delayed, or not chosen at all. The useful question is not “Which result looks best online?” It is “Which timing and method family fit my cancer plan, radiation likelihood, recovery, and personal goals?”

Ask: “Is immediate reconstruction appropriate for me — or should we wait — and how would radiation or systemic therapy change that?”

You can decide later. What matters now is not locking a mastectomy date that ignores reconstruction timing you still need to understand.`;
