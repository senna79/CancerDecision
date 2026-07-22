/** Hang-card bodies for Breast Radiation Decision Path (Entry Template v2) */

export const BREAST_RADIATION_ENTRY_CARDS = {
  whatIs: {
    lead: "Radiation therapy uses focused energy to treat remaining breast tissue, the chest wall, and sometimes nearby lymph-node areas. In breast cancer it is often part of the local plan after surgery — not a standalone “strongest treatment” contest.",
    close:
      "This guide helps you understand when radiation enters the conversation and what to ask — not how to design a radiation plan yourself.",
  },
  whyMatters: {
    lead: "Radiation can change which surgery path feels workable, how reconstruction is timed, and what your calendar looks like for weeks. Clarifying radiation early prevents locking lumpectomy or reconstruction without knowing the trade-offs.",
    close:
      "Ask what radiation would involve for each surgery path — before assuming mastectomy avoids radiation.",
  },
  afterLumpectomy: {
    lead: "Most people who choose breast-conserving surgery (lumpectomy) are recommended radiation afterward. Conservation plus radiation is often discussed as a package for cancer control in appropriate candidates.",
    items: [
      "Radiation usually treats the remaining breast tissue",
      "Nodal areas may be included depending on your situation",
      "Skipping radiation after lumpectomy is not automatic — ask what is recommended for you",
    ],
    close:
      "If you are not willing or able to complete radiation, ask whether conservation is still the right path.",
  },
  afterMastectomy: {
    lead: "After mastectomy, radiation is situational — more often discussed with larger tumors, node involvement, or other risk features. Mastectomy does not automatically mean “no radiation.”",
    ask: [
      "Am I likely to need radiation after mastectomy?",
      "What findings would tip that recommendation?",
      "Would waiting for final pathology change the answer?",
    ],
    close:
      "Get a clear “likely / maybe / unlikely” answer before assuming mastectomy avoids radiation.",
  },
  surgeryChoice: {
    lead: "Radiation willingness and logistics often tip lumpectomy vs mastectomy. Some people prefer a longer local operation to avoid a multi-week radiation course; others prefer conservation and accept radiation as part of the package.",
    close:
      "Compare the full local plan — surgery plus expected radiation — not the operation name alone.",
  },
  schedule: {
    lead: "Schedules vary. Many courses run over several weeks with daily treatments; some people are candidates for shorter courses. Exact recommendations depend on your situation and center.",
    ask: [
      "What schedule is most likely for me — and are shorter options appropriate?",
      "How many visits per week, and for how long?",
      "What happens if a session is missed?",
    ],
    close:
      "Ask for a realistic calendar before locking work, travel, or caregiving plans.",
  },
  sideEffects: {
    lead: "Common short-term effects can include skin changes, fatigue, and breast or chest-wall discomfort. Longer-term effects are less common but worth asking about for your body and prior treatments.",
    ask: [
      "What side effects are most common in my situation?",
      "What should I watch for during and after treatment?",
      "How might radiation affect the heart, lungs, or reconstructed tissue if relevant?",
    ],
  },
  reconstruction: {
    lead: "Radiation can change reconstruction timing and method. If post-mastectomy radiation is likely, teams often adjust whether reconstruction is immediate, delayed, or staged differently.",
    ask: [
      "If radiation is likely, how does that change reconstruction timing?",
      "Should plastic surgery and radiation planning happen before I lock a date?",
    ],
    close:
      "Do not finalize immediate reconstruction without a radiation-aware plan.",
  },
  sequencing: {
    lead: "Radiation usually follows surgery (and often follows or coordinates with systemic therapy). Neoadjuvant medicines before surgery can change timing — but radiation is still a local decision tied to the surgical path and pathology.",
    ask: [
      "Where would radiation sit in my overall sequence?",
      "Would systemic therapy start before or after radiation?",
    ],
  },
  practical: {
    lead: "Radiation is often a daily commitment for a period of time. Distance to a center, work leave, childcare, and transportation can matter as much as the medical rationale.",
    ask: [
      "Where would I receive treatment, and what does the daily schedule look like?",
      "Are there closer centers or schedule options that still fit my plan?",
      "What support is available if travel or fatigue becomes hard?",
    ],
  },
  pending: {
    lead: "Before locking surgery or reconstruction around radiation assumptions, confirm:",
    items: [
      "Whether radiation is expected after lumpectomy in your case",
      "Whether radiation is likely after mastectomy",
      "How radiation would affect reconstruction timing",
      "What schedule and side-effect picture to expect",
    ],
    close:
      "Clear answers here prevent choosing surgery to “avoid radiation” when radiation may still be needed.",
  },
  thisWeek: {
    lead: "If radiation is part of your decision, focus on:",
    steps: [
      "Ask whether radiation is expected after lumpectomy — and how likely after mastectomy",
      "Ask how radiation would change reconstruction timing if mastectomy is chosen",
      "Get a rough schedule and side-effect picture for planning work and life",
    ],
    close:
      "A short “expected / maybe / unlikely” answer beats researching machine types alone.",
  },
  mistakes: {
    lead: "Common radiation-decision mistakes include:",
    items: [
      {
        mistake: "Assuming mastectomy always avoids radiation",
        why: "Node status and other features can still lead to post-mastectomy radiation.",
      },
      {
        mistake: "Choosing lumpectomy without accepting the radiation package",
        why: "For many people, conservation and radiation are planned together.",
      },
      {
        mistake: "Locking immediate reconstruction before a radiation plan",
        why: "Radiation often changes timing and durability considerations.",
      },
      {
        mistake: "Treating radiation as optional detail after surgery is booked",
        why: "Radiation willingness and logistics can tip the surgery choice itself.",
      },
    ],
  },
} as const;

export const BREAST_RADIATION_GLOSS =
  "Radiation often follows lumpectomy and is sometimes needed after mastectomy. Ask how radiation fits each surgery path, reconstruction timing, schedule, and side effects — before locking a local plan.";

export const BREAST_RADIATION_DIRECT_ANSWER = `Radiation is a common part of breast cancer local treatment — especially after lumpectomy. After mastectomy it is situational. The useful question is not “Is radiation the strongest option?” It is “How does radiation fit my surgery path, reconstruction timing, calendar, and goals?”

Ask: “If I choose lumpectomy, what radiation would I need? If I choose mastectomy, am I still likely to need radiation — and how would that change reconstruction?”

Clarify the expected schedule and side effects early enough that surgery and life plans are made with eyes open.`;
