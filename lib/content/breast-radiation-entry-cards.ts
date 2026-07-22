/** Hang-card bodies for Breast Radiation Decision Path (Entry Template v2) */

export const BREAST_RADIATION_ENTRY_CARDS = {
  whatIs: {
    lead: "Radiation therapy uses focused energy to treat remaining breast tissue, the chest wall, and sometimes nearby lymph-node areas. In breast cancer it is often part of the local plan after surgery — not a standalone “strongest treatment” contest.",
    close:
      "This guide helps you understand when radiation enters the conversation and what to ask — not how to design a radiation plan yourself.",
  },
  whyMatters: {
    lead: "Radiation is not only a treatment after surgery. It can affect which surgery path, reconstruction timing, and schedule make sense — so doctors often discuss it before you lock a local plan.",
    ask: [
      "If I choose lumpectomy, what radiation is expected?",
      "If I choose mastectomy, could radiation still be needed?",
      "How would radiation change reconstruction timing?",
    ],
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
  skipAfterLumpectomy: {
    lead: "Skipping radiation after lumpectomy is not a routine default. For many people who choose conservation, radiation is part of the cancer-control package. Whether anyone can safely omit or shorten radiation depends on age, tumor features, margins, and other factors — ask for your situation.",
    ask: [
      "If I skip radiation after lumpectomy, how does that change my risk?",
      "Am I a candidate for a shorter course — or for omitting radiation?",
      "If I cannot complete radiation, is conservation still the right surgery?",
    ],
    close:
      "Do not assume skipping radiation is equivalent to mastectomy. Ask what is recommended for you before locking conservation.",
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
    lead: "Length varies. Many courses run over several weeks with weekday treatments; some people are candidates for shorter courses (sometimes discussed as one to a few weeks). Exact recommendations depend on your situation and center.",
    ask: [
      "How long would radiation last for me — and are shorter options appropriate?",
      "How many visits per week, and for how many weeks?",
      "What happens if a session is missed?",
    ],
    close:
      "Ask for a realistic calendar before locking work, travel, or caregiving plans.",
  },
  shorter: {
    lead: "Shorter radiation courses — including regimens sometimes discussed as about one week (for example 5-treatment schedules in selected people) — can be appropriate for some early breast cancers. Not everyone is a candidate; age, tumor features, surgery type, and center protocols matter.",
    ask: [
      "Am I a candidate for a shorter radiation course?",
      "What would make a standard longer course recommended instead?",
      "How do side effects and follow-up compare for the shorter option in my case?",
    ],
    close:
      "Ask about candidacy for your pathology — not whether “5-day radiation” exists somewhere online.",
  },
  whenStarts: {
    lead: "Radiation usually starts after surgical healing — and is coordinated with any planned systemic therapy. There is often a window rather than a single fixed day.",
    ask: [
      "When would radiation typically start after my surgery?",
      "Would chemo or other medicines come before, during, or after radiation?",
      "How long can we safely wait if recovery or logistics are delayed?",
    ],
    close:
      "Ask for a sequencing sketch — surgery → healing → medicines/radiation — instead of a single internet timeline.",
  },
  wait: {
    lead: "There is usually a clinically acceptable window after surgery before radiation should start — not an unlimited delay. How long you can wait depends on healing, pathology, systemic therapy sequencing, and your risk features.",
    ask: [
      "What is the safe window from surgery to starting radiation for me?",
      "What would make waiting longer unsafe?",
      "If chemo comes first, when does the radiation clock start?",
    ],
    close:
      "Ask for your personal window. “As soon as possible” and “whenever” are both too vague.",
  },
  during: {
    lead: "During radiation, teams usually give skin-care and activity guidance. Common themes include protecting treated skin, managing fatigue, and knowing which products or habits to avoid — exact instructions vary by center and treatment area.",
    ask: [
      "What should I do — and avoid — for skin care during treatment?",
      "Can I exercise, swim, or wear certain fabrics?",
      "Which symptoms should make me call the radiation team?",
    ],
    close:
      "Follow your center’s written instructions. Generic online “don’t lists” often conflict with real protocols.",
  },
  refuse: {
    lead: "You can always discuss declining radiation. Whether that is reasonable depends on your surgery path, pathology, and risk. Declining after lumpectomy often changes the cancer-control package more than declining in a situation where radiation was already unlikely.",
    ask: [
      "If I decline radiation, how does my risk change?",
      "Are there shorter courses or alternatives that still fit my goals?",
      "If I cannot or will not do radiation, should we revisit lumpectomy vs mastectomy?",
    ],
    close:
      "Saying no is a conversation with trade-offs — not a moral failure. Ask for your personal risk change in plain language.",
  },
  sideEffects: {
    lead: "After lumpectomy, radiation side effects often include skin changes in the treated breast, temporary swelling or tenderness, and fatigue during the course. Longer-term effects are less common but worth asking about for your body and prior treatments.",
    ask: [
      "What side effects are most common after radiation following lumpectomy?",
      "What should I watch for during and after treatment?",
      "How might radiation affect the heart, lungs, or breast appearance over time?",
    ],
    close:
      "Ask for your personal side-effect picture — photos online are a poor substitute for your plan.",
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

export const BREAST_RADIATION_DIRECT_ANSWER = `Many people ask whether they will need radiation after breast cancer surgery. After lumpectomy, radiation is often part of the plan. After mastectomy, it is situational — not automatically zero.

The useful question is not “Is radiation the strongest option?” It is “How does radiation fit my surgery path, reconstruction timing, calendar, and goals?”

Ask: “If I choose lumpectomy, what radiation would I need? If I choose mastectomy, am I still likely to need radiation — and how would that change reconstruction?”

Clarify the expected schedule and side effects early enough that surgery and life plans are made with eyes open.`;
