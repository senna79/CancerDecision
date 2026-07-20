import type { KnowledgeGraphStore } from "@/types/database";
import { buildDecisionMapFromOs } from "@/lib/os/build-decision-map";
import { LUNG_CANCER_DECISION_OS } from "@/lib/os/lung-cancer";
import {
  LUNG_FLAGSHIP_QUESTION_NS,
  LUNG_FLAGSHIP_SOURCES_BY_QUESTION_N,
} from "@/lib/trust/lung-entry-sources";
import { id, now } from "./ids";

const ts = now();
const reviewed = "2026-07-15T00:00:00.000Z";

function seo(title: string, description: string, keywords: string[]) {
  return {
    seo_title: title,
    seo_description: description,
    seo_keywords: keywords,
  };
}

export function createSeedData(): KnowledgeGraphStore {
  const cancers = [
    {
      id: id("cancer", 1),
      name: "Lung Cancer",
      slug: "lung-cancer",
      overview:
        "Lung cancer decision pathways often involve staging clarity, biomarker testing, surgery versus systemic therapy, and when a second opinion may change the plan. This center organizes common decision questions, treatment comparisons, global care options, and patient decision journeys.",
      status: "published" as const,
      content_reviewed_at: reviewed,
      created_at: ts,
      updated_at: ts,
      ...seo(
        "Lung Cancer Decision Center",
        "Understand lung cancer diagnosis decisions, compare treatments, and explore second opinions and global care options.",
        ["lung cancer", "treatment decisions", "second opinion"]
      ),
    },
    {
      id: id("cancer", 2),
      name: "Prostate Cancer",
      slug: "prostate-cancer",
      overview:
        "Prostate cancer decisions frequently center on active surveillance versus treatment, side-effect tradeoffs, and whether genomics or imaging should change the next step. Use this center to compare options and learn from real decision journeys.",
      status: "published" as const,
      content_reviewed_at: reviewed,
      created_at: ts,
      updated_at: ts,
      ...seo(
        "Prostate Cancer Decision Center",
        "Compare prostate cancer treatment options, surveillance decisions, and global care pathways.",
        ["prostate cancer", "active surveillance", "treatment comparison"]
      ),
    },
    {
      id: id("cancer", 3),
      name: "Breast Cancer",
      slug: "breast-cancer",
      overview:
        "Breast cancer pathways include surgery choices, reconstruction timing, systemic therapy sequencing, and genetic risk decisions. This center structures the questions patients commonly face after diagnosis.",
      status: "published" as const,
      content_reviewed_at: reviewed,
      created_at: ts,
      updated_at: ts,
      ...seo(
        "Breast Cancer Decision Center",
        "Explore breast cancer decision questions, treatment comparisons, and patient decision stories.",
        ["breast cancer", "lumpectomy", "chemotherapy decisions"]
      ),
    },
    {
      id: id("cancer", 4),
      name: "Liver Cancer",
      slug: "liver-cancer",
      overview:
        "Liver cancer decisions often depend on liver function, transplant eligibility, local therapies, and systemic options. This center helps patients map decision points without replacing clinical advice.",
      status: "published" as const,
      content_reviewed_at: reviewed,
      created_at: ts,
      updated_at: ts,
      ...seo(
        "Liver Cancer Decision Center",
        "Understand liver cancer treatment pathways, transplant considerations, and global care options.",
        ["liver cancer", "HCC", "transplant decisions"]
      ),
    },
    {
      id: id("cancer", 5),
      name: "Brain Tumor",
      slug: "brain-tumor",
      overview:
        "Brain tumor decisions may involve biopsy versus resection, radiation techniques, clinical trials, and quality-of-life tradeoffs. This center organizes decision questions and comparative options.",
      status: "published" as const,
      content_reviewed_at: reviewed,
      created_at: ts,
      updated_at: ts,
      ...seo(
        "Brain Tumor Decision Center",
        "Compare brain tumor treatment decisions, second opinions, and specialized care pathways.",
        ["brain tumor", "glioma", "neurosurgery decisions"]
      ),
    },
  ];

  const decision_topics = [
    {
      id: id("topic", 1),
      key: "newly_diagnosed" as const,
      label: "I was newly diagnosed",
      description: "First decisions after a cancer diagnosis",
      sort_order: 1,
    },
    {
      id: id("topic", 2),
      key: "second_opinion" as const,
      label: "I need a second opinion",
      description: "When and how to seek another clinical review",
      sort_order: 2,
    },
    {
      id: id("topic", 3),
      key: "compare_treatments" as const,
      label: "I want to compare treatments",
      description: "Tradeoffs between major treatment pathways",
      sort_order: 3,
    },
    {
      id: id("topic", 4),
      key: "treatment_abroad" as const,
      label: "I am considering treatment abroad",
      description: "Cross-border care logistics and decision factors",
      sort_order: 4,
    },
    {
      id: id("topic", 5),
      key: "understand_costs" as const,
      label: "I want to understand costs",
      description: "Cost drivers patients commonly need to clarify",
      sort_order: 5,
    },
  ];

  const countries = [
    { code: "US", name: "United States" },
    { code: "DE", name: "Germany" },
    { code: "JP", name: "Japan" },
    { code: "SG", name: "Singapore" },
    { code: "KR", name: "South Korea" },
    { code: "GB", name: "United Kingdom" },
    { code: "CN", name: "China" },
    { code: "AU", name: "Australia" },
  ];

  const treatments = [
    {
      id: id("tx", 1),
      name: "Surgery",
      slug: "surgery",
      description:
        "Surgical removal of tumor tissue when staging, location, and overall health make resection appropriate.",
      when_considered:
        "Often considered for localized disease when complete or meaningful tumor removal is feasible and benefits outweigh operative risks.",
      advantages: [
        "May provide definitive local control in selected cases",
        "Pathology from resection can refine staging and biomarkers",
        "Can be combined with systemic or radiation therapy",
      ],
      limitations: [
        "Not appropriate for all stages or locations",
        "Recovery time and complication risks vary",
        "Does not address microscopic distant disease alone",
      ],
      doctor_questions: [
        "What is the surgical goal: cure, staging, or symptom control?",
        "What are expected functional impacts after surgery?",
        "Would neoadjuvant therapy change resectability?",
      ],
      cost_considerations:
        "Costs vary by procedure complexity, hospital setting, length of stay, and need for rehabilitation or reconstructive care.",
      status: "published" as const,
      content_reviewed_at: reviewed,
      created_at: ts,
      updated_at: ts,
      ...seo(
        "Cancer Surgery Decisions",
        "When surgery is considered, advantages, limitations, and questions to ask.",
        ["cancer surgery", "resection", "treatment comparison"]
      ),
    },
    {
      id: id("tx", 2),
      name: "Radiation Therapy",
      slug: "radiation-therapy",
      description:
        "High-energy radiation used to control or eradicate tumor cells in a targeted region.",
      when_considered:
        "Used for local control, symptom relief, or as part of combined modality plans depending on cancer type and stage.",
      advantages: [
        "Non-invasive local therapy option",
        "Can preserve organs in selected settings",
        "Useful for palliation of symptoms",
      ],
      limitations: [
        "Cumulative dose limits and nearby organ constraints",
        "Side effects depend on site and technique",
        "Not a substitute for systemic therapy when distant risk is high",
      ],
      doctor_questions: [
        "Is conventional, stereotactic, or proton therapy being considered?",
        "What healthy tissues are in the treatment field?",
        "How does radiation sequence with surgery or drugs?",
      ],
      cost_considerations:
        "Technique, fraction count, imaging guidance, and facility type strongly influence total cost.",
      status: "published" as const,
      content_reviewed_at: reviewed,
      created_at: ts,
      updated_at: ts,
      ...seo(
        "Radiation Therapy Comparison",
        "Understand when radiation is considered and key decision tradeoffs.",
        ["radiation therapy", "radiotherapy", "treatment options"]
      ),
    },
    {
      id: id("tx", 3),
      name: "Proton Therapy vs Traditional Radiation",
      slug: "proton-therapy-vs-traditional-radiation",
      description:
        "A comparison of proton beam therapy and conventional photon radiation, focusing on decision factors rather than recommending either approach.",
      when_considered:
        "Discussed when reducing dose to nearby critical structures may matter, or when a center offers both modalities and tradeoffs need clarification.",
      advantages: [
        "Proton plans may reduce exit dose in selected anatomies",
        "Photon radiation is widely available with mature evidence in many cancers",
        "Both can be curative or palliative depending on intent",
      ],
      limitations: [
        "Availability and travel burden differ by modality",
        "Evidence strength varies by cancer type and indication",
        "Insurance coverage and out-of-pocket costs can diverge sharply",
      ],
      doctor_questions: [
        "For my diagnosis, what evidence compares proton and photon outcomes?",
        "Would either technique meaningfully change side-effect risk?",
        "If I travel for protons, what continuity-of-care plan is needed?",
      ],
      cost_considerations:
        "Proton courses are often more expensive and may require travel; conventional radiation is typically more accessible locally.",
      status: "published" as const,
      content_reviewed_at: reviewed,
      created_at: ts,
      updated_at: ts,
      ...seo(
        "Proton Therapy vs Traditional Radiation",
        "Compare proton therapy and traditional radiation decision factors, limitations, and cost considerations.",
        ["proton therapy", "radiation comparison", "cancer treatment abroad"]
      ),
    },
    {
      id: id("tx", 4),
      name: "Immunotherapy",
      slug: "immunotherapy",
      description:
        "Treatments that help the immune system recognize and attack cancer cells, including checkpoint inhibitors in many settings.",
      when_considered:
        "Often considered when biomarkers, histology, or prior treatment history suggest potential benefit.",
      advantages: [
        "Can produce durable responses in selected patients",
        "May be used alone or with other systemic therapies",
        "Outpatient administration is common",
      ],
      limitations: [
        "Not effective for every patient or cancer subtype",
        "Immune-related side effects can be serious",
        "Biomarker testing may be needed to guide use",
      ],
      doctor_questions: [
        "Which biomarkers were tested and how do they affect options?",
        "What monitoring is needed for immune-related toxicities?",
        "How does immunotherapy compare with chemotherapy for my case?",
      ],
      cost_considerations:
        "Drug costs, duration of therapy, and management of immune-related adverse events drive total expense.",
      status: "published" as const,
      content_reviewed_at: reviewed,
      created_at: ts,
      updated_at: ts,
      ...seo(
        "Immunotherapy Decisions",
        "Key factors when comparing immunotherapy with other systemic options.",
        ["immunotherapy", "checkpoint inhibitor", "cancer decisions"]
      ),
    },
    {
      id: id("tx", 5),
      name: "Targeted Therapy",
      slug: "targeted-therapy",
      description:
        "Drug treatments directed at specific molecular alterations that help drive tumor growth.",
      when_considered:
        "Considered after molecular profiling identifies an actionable alteration matched to an available therapy or trial.",
      advantages: [
        "Can be highly effective when a matching alteration is present",
        "Often oral and given outpatient",
        "May delay or reduce need for broader cytotoxic therapy in some settings",
      ],
      limitations: [
        "Requires timely, adequate molecular testing",
        "Resistance can develop over time",
        "Access to matched drugs or trials varies by region",
      ],
      doctor_questions: [
        "Was comprehensive molecular testing completed?",
        "Are there resistance patterns we should anticipate?",
        "Is a clinical trial a better match than standard targeted options?",
      ],
      cost_considerations:
        "Testing costs plus long-term drug pricing and monitoring labs are major drivers.",
      status: "published" as const,
      content_reviewed_at: reviewed,
      created_at: ts,
      updated_at: ts,
      ...seo(
        "Targeted Therapy Decisions",
        "How molecular findings shape targeted therapy comparisons.",
        ["targeted therapy", "biomarkers", "precision oncology"]
      ),
    },
    {
      id: id("tx", 6),
      name: "Chemotherapy",
      slug: "chemotherapy",
      description:
        "Systemic cytotoxic therapy used to treat cancer throughout the body or to shrink tumors before local therapy.",
      when_considered:
        "Used across many cancers for curative, adjuvant, neoadjuvant, or palliative intent depending on stage and biology.",
      advantages: [
        "Broad applicability across cancer types",
        "Can be combined with surgery, radiation, or immunotherapy",
        "Protocols are well established in many settings",
      ],
      limitations: [
        "Side effects can affect daily function",
        "Benefit varies by cancer biology and stage",
        "Supportive care planning is essential",
      ],
      doctor_questions: [
        "What is the intent of chemotherapy in my plan?",
        "Which side effects are most important to prevent?",
        "Are there less intensive alternatives with similar goals?",
      ],
      cost_considerations:
        "Infusions, supportive medications, lab monitoring, and time away from work contribute to total cost.",
      status: "published" as const,
      content_reviewed_at: reviewed,
      created_at: ts,
      updated_at: ts,
      ...seo(
        "Chemotherapy Decisions",
        "Understand chemotherapy intent, tradeoffs, and questions for your care team.",
        ["chemotherapy", "systemic therapy", "cancer treatment"]
      ),
    },
    {
      id: id("tx", 7),
      name: "Active Surveillance",
      slug: "active-surveillance",
      description:
        "A structured monitoring approach used when immediate treatment may not be necessary, most commonly discussed in prostate cancer.",
      when_considered:
        "Considered for selected low-risk cancers where deferring treatment can avoid side effects without clearly worsening outcomes.",
      advantages: [
        "Avoids or delays treatment-related side effects",
        "Preserves options if disease changes",
        "Uses scheduled PSA, imaging, and biopsies as indicated",
      ],
      limitations: [
        "Requires reliable follow-up",
        "Anxiety during monitoring is common",
        "Not appropriate for higher-risk disease",
      ],
      doctor_questions: [
        "What risk features make surveillance reasonable for me?",
        "What triggers would move us from surveillance to treatment?",
        "How often will testing occur, and who reviews results?",
      ],
      cost_considerations:
        "Lower upfront treatment cost, but ongoing testing and visits accumulate over years.",
      status: "published" as const,
      content_reviewed_at: reviewed,
      created_at: ts,
      updated_at: ts,
      ...seo(
        "Active Surveillance Decisions",
        "When active surveillance is considered and what follow-up involves.",
        ["active surveillance", "prostate cancer", "watchful waiting"]
      ),
    },
  ];

  const questionDefs: Array<{
    n: number;
    cancer: number;
    title: string;
    slug: string;
    category:
      | "diagnosis"
      | "treatment"
      | "second_opinion"
      | "hospital_selection"
      | "global_care"
      | "cost";
    summary: string;
    why: string;
    factors: string[];
    doctorQs: string[];
  }> = [
    {
      n: 1,
      cancer: 1,
      title: "Should I Get a Second Opinion After a Lung Cancer Diagnosis?",
      slug: "should-i-get-second-opinion-after-lung-cancer-diagnosis",
      category: "second_opinion",
      summary:
        "A second opinion is another expert review of your diagnosis, treatment options, or care plan. It does not mean your current doctor is wrong — many patients seek one because cancer decisions are complex and can affect future care.\n\nIt may help you confirm that important information has been considered, understand whether other options should be discussed, and feel more confident before a major decision — especially before choices that may be difficult to reverse.\n\nThe better question is not “Do I trust my doctor?” It is “Do I have enough information to feel confident about this decision?”",
      why: "A second opinion is about confidence and complete information, not distrust. Value is highest before a major decision — and preparation with full records makes the review useful.",
      factors: [
        "Whether a major or hard-to-reverse decision is ahead",
        "Whether diagnosis, stage, or options feel uncertain",
        "Whether records are complete for another review",
        "How urgent treatment timing is",
        "What you most need clarified — confirm, expand, or identify gaps",
      ],
      doctorQs: [
        "Do you agree with my diagnosis and stage?",
        "Would you recommend the same treatment plan?",
        "What alternatives should I discuss?",
        "Are there uncertainties that could affect my options?",
        "What questions should I bring back to my current doctor?",
      ],
    },
    {
      n: 2,
      cancer: 1,
      title: "I Was Just Diagnosed With Lung Cancer. What Happens Next?",
      slug: "what-decisions-matter-most-after-new-lung-cancer-diagnosis",
      category: "diagnosis",
      summary:
        "After a lung cancer diagnosis, you do not need to know every answer immediately.\n\nThe first steps are to understand what type of lung cancer you have, what stage it is, whether more information is needed before treatment discussions, and what to ask your care team next.\n\nA good treatment decision starts with understanding your cancer — not rushing into a choice. You are not lost; you are at the start of a journey.",
      why: "A new diagnosis brings confusion before clear questions. The goal is to lower overwhelm, build direction, and take the next step — not to choose every treatment today.",
      factors: [
        "Cancer type and stage — or what is still pending",
        "Whether biomarker or other testing could change options",
        "How urgent the next decision is",
        "Questions and records for your next appointment",
        "Whether another opinion would help your confidence",
      ],
      doctorQs: [
        "What type of lung cancer do I have?",
        "What stage is it?",
        "What information are we still waiting for?",
        "What decision comes next — and how urgent is it?",
        "Would another opinion be helpful?",
      ],
    },
    {
      n: 3,
      cancer: 1,
      title: "How Should I Compare Lung Cancer Treatment Options?",
      slug: "how-to-compare-surgery-and-systemic-therapy-lung-cancer",
      category: "treatment",
      summary:
        "Choosing a lung cancer treatment is not about finding the “strongest” treatment. It is about the approach that best fits your cancer characteristics, how the cancer is behaving, biomarker information when relevant, your overall health, and your goals.\n\nOptions may include surgery, radiation, chemotherapy, immunotherapy, targeted therapy, or clinical trials — alone, combined, or in sequence.\n\nThe key question is not “Which treatment is the best?” It is “Which treatment plan makes the most sense for my situation, and why?”",
      why: "Treatment decisions are choices, not just recommendations. Compare goal, timing, and life impact — not only which option sounds most aggressive.",
      factors: [
        "Cancer type, stage, and spread pattern",
        "Biomarker information when relevant",
        "Expected benefit versus risks and daily-life impact",
        "Whether treatment comes before, after, or instead of surgery",
        "Personal priorities and what happens if the plan needs to change",
      ],
      doctorQs: [
        "What is the main goal of this treatment?",
        "Why do you think this option fits my situation?",
        "What alternatives should we discuss?",
        "How do these options compare for my daily life?",
        "How will we know whether treatment is working?",
      ],
    },
    {
      n: 4,
      cancer: 1,
      title: "What should I know about lung cancer treatment costs?",
      slug: "lung-cancer-treatment-costs-what-to-ask",
      category: "cost",
      summary:
        "Costs vary by modality, drug regimen, hospitalization, travel, and supportive care. Ask for a financial estimate early, including imaging, infusions, and potential side-effect management—not only the primary procedure or drug.",
      why: "Financial surprise is common because cancer care involves many billable steps beyond the headline treatment.",
      factors: [
        "Insurance coverage and prior authorization",
        "Drug versus procedure-dominated pathways",
        "Travel and lodging if care is elsewhere",
        "Time away from work for patients and caregivers",
        "Supportive medications and monitoring",
      ],
      doctorQs: [
        "Can financial counseling estimate my out-of-pocket costs?",
        "Which parts of the plan are most cost-variable?",
        "Are assistance programs available for recommended drugs?",
      ],
    },
    {
      n: 5,
      cancer: 1,
      title: "When should I consider lung cancer care abroad?",
      slug: "when-to-consider-lung-cancer-care-abroad",
      category: "global_care",
      summary:
        "People consider lung cancer care in another city or country for several reasons \u2014 not because a hospital or country is simply more famous:\n\n\u2022 A different technique, trial, or path may not be available where you are\n\u2022 You have already seen more than one team and still lack confidence\n\u2022 You do not accept the current plan and want an outside review\n\u2022 You need international-patient support (records, language, written plan)\n\u2022 Cost or coverage makes the local path hard to continue\n\nName your reason in one sentence. When safe, try remote review before travel. Ask the receiving center\u2019s international desk for a written next-step plan. Desperation alone is not a clinical reason to book flights.",
      why: "Families sometimes assume abroad equals better, but the real question is whether a specific capability is missing locally.",
      factors: [
        "Specific expertise or technology sought",
        "Travel fitness and caregiver support",
        "Medical record transfer quality",
        "Follow-up plan after returning home",
        "Total cost including lodging and repeat visits",
      ],
      doctorQs: [
        "Is there a capability abroad that changes my options?",
        "How would follow-up be coordinated after I return?",
        "Can my pathology and imaging be reviewed remotely first?",
      ],
    },
    {
      n: 6,
      cancer: 2,
      title: "Is active surveillance a reasonable option for prostate cancer?",
      slug: "is-active-surveillance-reasonable-for-prostate-cancer",
      category: "treatment",
      summary:
        "For selected lower-risk prostate cancers, active surveillance can defer treatment side effects while monitoring for change. Reasonableness depends on risk group, life expectancy, MRI/biopsy findings, and comfort with follow-up intensity.",
      why: "Patients often fear undertreatment and need clarity on when surveillance is evidence-aligned versus when definitive therapy is favored.",
      factors: [
        "Risk classification and PSA kinetics",
        "MRI and biopsy findings",
        "Age and comorbidities",
        "Tolerance for uncertainty",
        "Follow-up access and adherence",
      ],
      doctorQs: [
        "What features put me in a surveillance-appropriate group?",
        "What exact triggers would end surveillance?",
        "How do side-effect profiles of treatment compare with my risk?",
      ],
    },
    {
      n: 7,
      cancer: 2,
      title: "Should I get a second opinion for prostate cancer?",
      slug: "should-i-get-second-opinion-for-prostate-cancer",
      category: "second_opinion",
      summary:
        "A second opinion can help confirm risk stratification and compare surveillance, surgery, and radiation. It is useful when recommendations diverge or when genomics/imaging interpretation is uncertain.",
      why: "Prostate cancer has multiple guideline-supported pathways, so independent review can clarify fit for a patient's priorities.",
      factors: [
        "Discordant recommendations",
        "Interest in surveillance versus treatment",
        "Need for pathology or imaging re-review",
        "Access to high-volume specialists",
        "Patient priorities around urinary and sexual function",
      ],
      doctorQs: [
        "Would another pathologist review change risk group?",
        "How do your outcomes compare for surgery versus radiation in my risk group?",
        "Should genomic testing inform this decision?",
      ],
    },
    {
      n: 8,
      cancer: 2,
      title: "How do prostate cancer treatment costs typically differ?",
      slug: "how-prostate-cancer-treatment-costs-differ",
      category: "cost",
      summary:
        "Surveillance usually has lower upfront cost but ongoing testing. Surgery and radiation concentrate costs differently over time. Ask for episode-of-care estimates including complications and follow-up.",
      why: "Cost conversations help patients compare pathways that may be clinically similar for their risk group.",
      factors: [
        "Upfront versus longitudinal costs",
        "Facility and technology fees",
        "Complication-related expenses",
        "Lost work time",
        "Insurance design and deductibles",
      ],
      doctorQs: [
        "Can you share typical total episode costs for each option?",
        "Which complications most affect cost?",
        "Does my plan cover genomic tests if recommended?",
      ],
    },
    {
      n: 9,
      cancer: 3,
      title: "How should I compare lumpectomy and mastectomy?",
      slug: "how-to-compare-lumpectomy-and-mastectomy",
      category: "treatment",
      summary:
        "For many early breast cancers, lumpectomy plus radiation and mastectomy can offer similar cancer control when candidates are appropriately selected. The decision often hinges on tumor extent, genetics, reconstruction preferences, and radiation willingness.",
      why: "Patients hear that both can be oncologically sound and need help weighing personal priorities.",
      factors: [
        "Tumor size relative to breast size",
        "Multicentric disease",
        "Genetic risk and future risk reduction goals",
        "Radiation feasibility and preference",
        "Reconstruction timing and body-image priorities",
      ],
      doctorQs: [
        "Am I an appropriate candidate for breast-conserving surgery?",
        "How would genetic results change surgery recommendations?",
        "What does recovery look like for each option?",
      ],
    },
    {
      n: 10,
      cancer: 3,
      title: "What should I ask after a new breast cancer diagnosis?",
      slug: "what-to-ask-after-new-breast-cancer-diagnosis",
      category: "diagnosis",
      summary:
        "Priority questions include subtype, stage, need for genetic counseling, and whether systemic therapy comes before surgery. Clarifying the decision sequence reduces overwhelm.",
      why: "Breast cancer care involves multiple specialists quickly; patients need a decision roadmap.",
      factors: [
        "Receptor and HER2 status",
        "Imaging completeness",
        "Genetic counseling indications",
        "Neoadjuvant versus upfront surgery pathway",
        "Fertility and life-stage considerations",
      ],
      doctorQs: [
        "What is my cancer subtype and stage?",
        "Do I need genetic counseling before surgery?",
        "Will systemic therapy start before or after surgery?",
      ],
    },
    {
      n: 11,
      cancer: 3,
      title: "When is a breast cancer second opinion most useful?",
      slug: "when-is-breast-cancer-second-opinion-most-useful",
      category: "second_opinion",
      summary:
        "Second opinions are especially useful for borderline surgery decisions, neoadjuvant sequencing questions, reconstruction planning, or when clinical trial options may exist.",
      why: "Patients want confidence before irreversible surgical choices.",
      factors: [
        "Surgical pathway uncertainty",
        "Interest in trials",
        "Complex reconstruction decisions",
        "Discordant imaging/pathology",
        "Desire for high-volume specialist input",
      ],
      doctorQs: [
        "Would another surgical opinion change options?",
        "Are there trials I should evaluate before starting?",
        "Can my imaging and pathology be re-reviewed?",
      ],
    },
    {
      n: 12,
      cancer: 4,
      title: "How do liver function and stage shape liver cancer decisions?",
      slug: "how-liver-function-and-stage-shape-liver-cancer-decisions",
      category: "diagnosis",
      summary:
        "In primary liver cancer, underlying liver function can matter as much as tumor burden. Transplant eligibility, resection, ablation, embolization, and systemic therapy all depend on both.",
      why: "Patients may focus only on tumor size and miss why liver function changes the feasible path.",
      factors: [
        "Liver function scores and portal hypertension",
        "Tumor number, size, and vascular involvement",
        "Transplant criteria",
        "Comorbidities",
        "Local expertise in interventional and surgical options",
      ],
      doctorQs: [
        "How does my liver function limit treatment choices?",
        "Am I a transplant candidate now or potentially later?",
        "Which local therapies are realistic for my anatomy?",
      ],
    },
    {
      n: 13,
      cancer: 4,
      title: "Should I seek a second opinion for liver cancer treatment options?",
      slug: "should-i-seek-second-opinion-for-liver-cancer",
      category: "second_opinion",
      summary:
        "A hepatobiliary or transplant-center second opinion can clarify whether resection, transplant evaluation, or locoregional therapy is more appropriate. It is useful when local options seem limited or recommendations conflict.",
      why: "Liver cancer pathways are highly specialized and center-dependent.",
      factors: [
        "Access to transplant evaluation",
        "Complexity of liver function assessment",
        "Availability of interventional oncology",
        "Conflicting local recommendations",
        "Travel capacity for specialized centers",
      ],
      doctorQs: [
        "Would a transplant center interpret my case differently?",
        "Have all locoregional options been considered?",
        "What records should I send for remote review?",
      ],
    },
    {
      n: 14,
      cancer: 5,
      title: "What decisions come first after a brain tumor diagnosis?",
      slug: "what-decisions-come-first-after-brain-tumor-diagnosis",
      category: "diagnosis",
      summary:
        "Early decisions often include whether biopsy or resection is needed, how urgently intervention should occur, and which molecular tests will guide therapy. Symptom control and steroid management may run in parallel.",
      why: "Brain tumor pathways move quickly and involve neurosurgery, neuro-oncology, and radiation oncology.",
      factors: [
        "Location and resectability",
        "Neurologic symptoms and urgency",
        "Need for molecular characterization",
        "Performance status",
        "Center experience with similar tumors",
      ],
      doctorQs: [
        "Is biopsy or maximal safe resection recommended first?",
        "How urgent is intervention?",
        "Which molecular results will change therapy?",
      ],
    },
    {
      n: 15,
      cancer: 5,
      title: "How do I compare radiation options for a brain tumor?",
      slug: "how-to-compare-radiation-options-for-brain-tumor",
      category: "treatment",
      summary:
        "Options may include fractionated radiation, stereotactic techniques, or proton therapy in selected cases. Comparison should focus on tumor type, prior treatment, nearby critical structures, and evidence—not technology branding alone.",
      why: "Patients are often presented with advanced modalities and need decision criteria.",
      factors: [
        "Tumor histology and prior radiation",
        "Proximity to critical brain structures",
        "Evidence by indication",
        "Fractionation logistics",
        "Access and travel requirements",
      ],
      doctorQs: [
        "Which radiation technique has the strongest evidence for my tumor?",
        "What neurocognitive risks should I plan for?",
        "Would protons change the risk profile in a meaningful way?",
      ],
    },
    {
      n: 16,
      cancer: 1,
      title: "How do I choose a hospital for complex lung cancer care?",
      slug: "how-to-choose-hospital-for-complex-lung-cancer-care",
      category: "hospital_selection",
      summary:
        "Look for multidisciplinary thoracic oncology, timely biomarker testing, surgery volume for your procedure type, and clear care coordination. Reputation alone is less useful than specific capabilities matched to your decision.",
      why: "Hospital choice can affect which options are offered and how quickly a plan forms.",
      factors: [
        "Multidisciplinary tumor board access",
        "Molecular testing turnaround",
        "Procedure volume and outcomes transparency",
        "Clinical trial portfolio",
        "Travel and caregiver logistics",
      ],
      doctorQs: [
        "Does this center routinely discuss cases like mine in tumor board?",
        "How quickly can biomarker results return?",
        "What happens if I need a capability you do not offer?",
      ],
    },
    {
      n: 17,
      cancer: 2,
      title: "What if recommendations differ between urology and radiation oncology?",
      slug: "when-prostate-recommendations-differ-across-specialists",
      category: "second_opinion",
      summary:
        "Differing recommendations are common because multiple options can be reasonable. Ask each specialist to explain goals, side-effect profiles, and what would change their advice. A joint consult or second opinion can reconcile framing differences.",
      why: "Patients often interpret specialty differences as conflict rather than complementary perspectives.",
      factors: [
        "Risk group agreement",
        "Side-effect priorities",
        "Life expectancy and comorbidities",
        "Center-specific expertise",
        "Patient preference clarity",
      ],
      doctorQs: [
        "Where exactly do you and the other specialist disagree?",
        "If my top priority is function preservation, how does that change advice?",
        "Would a joint consult help finalize the plan?",
      ],
    },
    {
      n: 18,
      cancer: 3,
      title: "How do breast cancer treatment costs accumulate across the pathway?",
      slug: "how-breast-cancer-treatment-costs-accumulate",
      category: "cost",
      summary:
        "Costs may include surgery, reconstruction, systemic therapy, radiation, imaging, genetic testing, and supportive care. Request a pathway-level estimate rather than isolated procedure quotes.",
      why: "Patients underestimate how many phases contribute to total cost.",
      factors: [
        "Surgery and reconstruction combination",
        "Drug regimen duration",
        "Radiation course",
        "Genetic and imaging tests",
        "Work interruption and caregiving",
      ],
      doctorQs: [
        "Can financial navigation map costs for my likely pathway?",
        "Which upcoming decision most changes total cost?",
        "Are there clinically similar options with different cost profiles?",
      ],
    },
    {
      n: 19,
      cancer: 4,
      title: "What should I know before seeking liver cancer care in another country?",
      slug: "liver-cancer-care-in-another-country",
      category: "global_care",
      summary:
        "Confirm the exact service sought—transplant evaluation, resection expertise, or second opinion—and plan for records, language, infection precautions, and home follow-up. Remote review first can prevent unnecessary travel.",
      why: "Cross-border liver care is complex because ongoing liver disease management must continue after return.",
      factors: [
        "Specific missing local capability",
        "Transplant listing rules across systems",
        "Continuity after return",
        "Travel risk with advanced liver disease",
        "Total episode cost",
      ],
      doctorQs: [
        "Can a remote specialist review my imaging before travel?",
        "How would transplant evaluation abroad interact with local listing?",
        "What follow-up must be in place when I return?",
      ],
    },
    {
      n: 20,
      cancer: 5,
      title: "When should families seek a brain tumor second opinion?",
      slug: "when-families-should-seek-brain-tumor-second-opinion",
      category: "second_opinion",
      summary:
        "Second opinions are valuable for rare histologies, borderline resectability, re-irradiation questions, and clinical trial matching. Because timing can be urgent, ask whether remote review is possible while stabilizing care locally.",
      why: "Families want expertise without delaying necessary intervention.",
      factors: [
        "Urgency of neurologic symptoms",
        "Rarity of tumor type",
        "Surgical complexity",
        "Trial availability",
        "Feasibility of remote pathology/imaging review",
      ],
      doctorQs: [
        "Is it safe to pause for a second opinion?",
        "Can you share imaging and pathology for remote review today?",
        "Which centers have the most experience with this tumor type?",
      ],
    },
    {
      n: 21,
      cancer: 1,
      title:
        "Do I Need Biomarker Testing Before Choosing Lung Cancer Treatment?",
      slug: "do-i-need-biomarker-testing-before-lung-cancer-treatment",
      category: "diagnosis",
      summary:
        "Biomarker testing looks for features of your cancer that may affect which treatments your care team discusses. It helps make sure important information is available before treatment decisions are made.\n\nIt does not decide your treatment by itself.",
      why: "Treatment decisions depend on having the right information. The useful question is not whether you need every possible test — it is whether you have the information needed to make a treatment decision.",
      factors: [
        "Whether important information about the cancer may still be missing",
        "Whether test results could change which options are discussed",
        "Timing of testing relative to starting treatment",
        "Cancer type, stage, and overall health",
        "Personal goals and preferences alongside test results",
      ],
      doctorQs: [
        "Do I need biomarker testing?",
        "What tests are recommended for my type of lung cancer?",
        "Are the results complete?",
        "Should testing happen before choosing treatment?",
        "Could waiting for results change my options?",
        "What treatment choices could be affected?",
      ],
    },
    {
      n: 22,
      cancer: 2,
      title: "How should I evaluate treatment abroad for prostate cancer?",
      slug: "evaluate-treatment-abroad-for-prostate-cancer",
      category: "global_care",
      summary:
        "Abroad care may be considered for specialized radiation platforms or high-volume surgery. Compare outcomes evidence, follow-up requirements, and whether equivalent care exists closer to home.",
      why: "Marketing for overseas programs can outpace clarity about continuity and evidence.",
      factors: [
        "Specific technology or surgeon experience sought",
        "Need for multiple visits",
        "Complication management plan at home",
        "Language and consent clarity",
        "Total travel cost",
      ],
      doctorQs: [
        "Is the abroad capability meaningfully different for my risk group?",
        "What written next-step plan will the international desk provide?",
        "Can I get the same modality regionally?",
      ],
    },
    {
      n: 23,
      cancer: 3,
      title: "How do I choose among systemic therapy options in breast cancer?",
      slug: "choose-systemic-therapy-options-breast-cancer",
      category: "treatment",
      summary:
        "Subtype, stage, genomic assays, and comorbidities guide systemic choices. Compare goals, duration, side effects, and whether therapy is neoadjuvant or adjuvant rather than focusing only on drug names.",
      why: "Patients face dense information about chemo, endocrine therapy, targeted agents, and immunotherapy combinations.",
      factors: [
        "Receptor/HER2 status",
        "Stage and nodal involvement",
        "Genomic assay results when relevant",
        "Fertility and comorbidity constraints",
        "Side-effect priorities",
      ],
      doctorQs: [
        "What is the goal of systemic therapy in my sequence?",
        "Which options are equivalent, and which are clearly preferred?",
        "How will we monitor benefit and toxicity?",
      ],
    },
    {
      n: 24,
      cancer: 4,
      title: "What cost questions matter for liver cancer pathways?",
      slug: "cost-questions-for-liver-cancer-pathways",
      category: "cost",
      summary:
        "Ask about transplant evaluation costs, locoregional procedure packages, systemic therapy duration, and repeated imaging. Liver cancer pathways often involve multiple sequential procedures.",
      why: "Episode costs are hard to anticipate when several modalities may be used over time.",
      factors: [
        "Procedure sequencing uncertainty",
        "Transplant-related evaluation expenses",
        "Drug therapy duration",
        "Travel to specialized centers",
        "Caregiver time",
      ],
      doctorQs: [
        "What is a realistic cost range for the first 6 months?",
        "Which decision most changes long-term cost?",
        "Are bundled estimates available for locoregional procedures?",
      ],
    },
    {
      n: 25,
      cancer: 5,
      title: "How do families evaluate brain tumor centers across countries?",
      slug: "evaluate-brain-tumor-centers-across-countries",
      category: "hospital_selection",
      summary:
        "Compare case volume for your tumor type, molecular neuropathology, clinical trials, and rehabilitation support. Cross-country evaluation should start with records review before travel whenever possible.",
      why: "Center experience can matter greatly for rare brain tumors, but travel is costly and sometimes urgent care must stay local.",
      factors: [
        "Tumor-type case volume",
        "Molecular diagnostics quality",
        "Trial access",
        "Rehab and supportive services",
        "Feasibility of remote second opinion",
      ],
      doctorQs: [
        "How many similar tumors does this center treat annually?",
        "Can you review my case remotely before I travel?",
        "What continuity plan exists with my home team?",
      ],
    },
    {
      n: 26,
      cancer: 1,
      title: "How Do I Choose the Right Lung Cancer Care Team?",
      slug: "do-i-need-different-lung-cancer-center-or-specialized-expertise",
      category: "hospital_selection",
      summary:
        "Choosing lung cancer care is not only about finding a famous hospital. It is about finding a team with the right expertise, coordination, access to needed services, and clear communication.\n\nMany people receive excellent care close to home. A specialized team may help when decisions are complex, local experience feels limited, or you need multidisciplinary review or trial access. Some patients combine specialist planning with local treatment.\n\nThe best care team is the one that fits your cancer, your situation, and your goals — not the one with the biggest name.",
      why: "The useful question is not “Where is the most famous hospital?” It is “What expertise and coordination do I need — and can a care network, not only one building, provide it?”",
      factors: [
        "What expertise gap or decision you are trying to improve",
        "Team experience with your lung cancer type",
        "Multidisciplinary review and access to needed services",
        "Whether hybrid care (specialist + local) could fit",
        "Communication quality and follow-up coordination",
      ],
      doctorQs: [
        "How often does this team treat patients with my type of lung cancer?",
        "Will my case be reviewed by specialists together when needed?",
        "Are additional tests, options, or trials worth discussing?",
        "Who coordinates my care day to day?",
        "How would follow-up work with my local team?",
      ],
    },
    {
      n: 27,
      cancer: 1,
      title: "What Should I Know After a Stage IV Lung Cancer Diagnosis?",
      slug: "how-to-choose-treatment-options-for-stage-iv-lung-cancer",
      category: "treatment",
      summary:
        "A Stage IV diagnosis can feel overwhelming. You do not need to answer everything today.\n\nFirst understand what Stage IV means in your situation, clarify what treatment may aim for with your care team, make sure key information is available, and prepare for the next conversation.\n\nA Stage IV diagnosis changes the conversation. It does not end the conversation. Different treatment goals do not mean less care — they mean care designed around your situation.",
      why: "Stage IV care is usually a journey, not one single choice. The useful focus is understanding your situation, clarifying goals, and taking the next important step — not solving every future decision at once.",
      factors: [
        "What doctors have confirmed about your cancer so far",
        "Treatment goals that fit your situation and daily life",
        "Cancer type, biomarker information, and prior treatments",
        "How urgent the next decision is",
        "Whether biomarkers, another opinion, or a trial belongs in the discussion",
      ],
      doctorQs: [
        "What does Stage IV mean in my specific case?",
        "What is the goal of the treatment we are discussing?",
        "What information are we still waiting for?",
        "What decision comes next — and how urgent is it?",
        "Would biomarker results or another opinion change the options we discuss?",
      ],
    },
    {
      n: 28,
      cancer: 1,
      title: "Should I Consider a Clinical Trial for Lung Cancer?",
      slug: "should-i-consider-a-clinical-trial-for-lung-cancer",
      category: "treatment",
      summary:
        "A clinical trial is a research study that evaluates a possible new treatment approach or a new way of using existing treatments. For some people with lung cancer, a trial may be worth discussing before starting treatment, while comparing options, or when plans are changing.\n\nA clinical trial is not automatically better than standard treatment. Evaluate it based on your cancer type and stage, biomarker information, previous treatments, expected benefits and risks, and your personal goals.\n\nThe better question is not “Should I join a clinical trial?” It is “Is there a clinical trial that fits my situation and is worth discussing with my care team?”",
      why: "A clinical trial is a decision option, not a last resort and not a test-subject trap. Compare a specific trial with standard options — goal, evidence, and life impact.",
      factors: [
        "When in your journey a trial is being discussed",
        "Whether eligibility matches your cancer and health",
        "How the trial compares with standard options",
        "What is known versus still uncertain",
        "Visits, travel, and what happens if it does not work",
      ],
      doctorQs: [
        "What question is this trial trying to answer?",
        "Why do you think I may be a candidate?",
        "How does this compare with standard treatment?",
        "What risks and monitoring should I understand?",
        "How might this affect my daily life?",
      ],
    },
    {
      n: 29,
      cancer: 1,
      title: "What Are My Options If Lung Cancer Comes Back?",
      slug: "what-are-my-options-if-lung-cancer-comes-back",
      category: "treatment",
      summary:
        "If lung cancer comes back after treatment, it does not mean there are no options. A recurrence means cancer has returned after a period when it was controlled or not detectable.\n\nThe next decision depends on where the cancer has returned, how much is present, how it has changed, previous treatments, biomarker information, and your health and goals. Doctors may discuss another treatment approach, local treatments in selected situations, clinical trials, or supportive care.\n\nThe more useful question is not “Why did this happen?” It is “What information do we need now to understand my next options?”",
      why: "Recurrence is a new decision point — not automatic treatment failure and not the end of choices. Reassess what changed, then compare options against your goals.",
      factors: [
        "Where cancer returned and how much is present",
        "How long after treatment it appeared",
        "Previous treatments and whether additional testing would change options",
        "Expected benefit, risks, and quality-of-life priorities",
        "Whether a trial or second opinion belongs in the discussion",
      ],
      doctorQs: [
        "Where exactly has the cancer returned?",
        "What treatment options are realistic for me now?",
        "What benefit do we expect?",
        "Are clinical trials relevant?",
        "How will we know if treatment is helping?",
      ],
    },
    {
      n: 30,
      cancer: 1,
      title:
        "What Are My Options If My Lung Cancer Treatment Is No Longer Working?",
      slug: "what-are-my-options-if-lung-cancer-treatment-no-longer-working",
      category: "treatment",
      summary:
        "When lung cancer treatment stops working as expected, it does not mean there are no more options. Cancer treatment often involves multiple decisions over time.\n\nYour care team may review new test information, understand how the cancer has changed, consider another treatment approach, or discuss clinical trials or supportive care — depending on previous treatment, how the cancer changed, biomarker information, your health, and your goals.\n\nThe key question is not “Did my treatment fail?” It is “What information do we need now to understand the next best option?”",
      why: "A treatment change is a new decision point — reassessing, not assuming options are gone. Start with what changed, then compare next options against your goals.",
      factors: [
        "Why the current approach is changing — and how urgent it is",
        "Whether additional testing would change options",
        "Previous treatments and how they performed",
        "Expected benefit, risks, and daily-life impact of next options",
        "Whether goals favor more treatment, symptom focus, or a trial",
      ],
      doctorQs: [
        "Why are we considering changing treatment?",
        "What are my available options now?",
        "What benefit do we expect from each option?",
        "Are clinical trials relevant?",
        "How will we measure whether this treatment is helping?",
      ],
    },
    {
      n: 31,
      cancer: 1,
      title: "Should Surgery Be Part of My Lung Cancer Treatment Plan?",
      slug: "should-surgery-be-part-of-my-lung-cancer-treatment-plan",
      category: "treatment",
      summary:
        "Surgery can be an important treatment option for some people with lung cancer, especially when doctors believe the cancer can be safely removed and that surgery may provide meaningful benefit.\n\nWhether surgery makes sense depends on more than the tumor alone — type and stage, location, whether it can be completely removed, and your overall health and ability to recover. Surgery is not always the best choice for every person.\n\nThe goal is not simply to remove a tumor. The goal is to choose the approach that best matches your cancer, your health, and your treatment goals.",
      why: "Surgery is considered when removing the cancer may offer meaningful benefit — not automatically because a tumor can be removed. Compare benefit, risk, alternatives, and recovery for your situation.",
      factors: [
        "Cancer type, stage, and location",
        "Whether the cancer can be safely and completely removed",
        "Overall health and ability to recover",
        "Whether treatment may come before or after surgery",
        "How surgery compares with other available options",
      ],
      doctorQs: [
        "Why are you recommending surgery in my case?",
        "What is the goal of surgery?",
        "Are there alternatives to surgery?",
        "Would another treatment happen before or after surgery?",
        "How will recovery affect my daily life?",
      ],
    },
    {
      n: 32,
      cancer: 1,
      title: "How Do I Balance Lung Cancer Treatment and Quality of Life?",
      slug: "how-should-quality-of-life-factor-into-lung-cancer-decisions",
      category: "treatment",
      summary:
        "Lung cancer treatment decisions are not only about controlling cancer. They are also about helping you live as well as possible while receiving care.\n\nQuality of life may include staying independent, spending time with family, continuing meaningful activities, managing symptoms, and maintaining the ability to do things that matter to you. Supportive care helps with these challenges — and it does not mean treatment has failed or care is ending.\n\nThe key question is not “Should I choose treatment or quality of life?” It is: “How can my treatment plan support both my cancer goals and my life goals?”",
      why: "Your goals are part of the medical decision — not separate from it. The right amount of treatment depends on benefit, burden, and what matters most to you.",
      factors: [
        "What your plan should help protect in daily life",
        "Symptoms and side effects that affect activities",
        "Possible treatment benefit versus treatment burden",
        "Supportive care for symptoms, emotions, and practical needs",
        "How priorities may change — and who can help with decisions",
      ],
      doctorQs: [
        "What matters most to me during treatment?",
        "How can we include my goals in the treatment plan?",
        "Which symptoms should I report?",
        "Can side effects be reduced?",
        "How will we know if treatment is still right for me?",
      ],
    },
    {
      n: 33,
      cancer: 1,
      title: "Can My Lung Cancer Treatment Plan Work With My Real Life?",
      slug: "can-my-lung-cancer-treatment-plan-work-with-my-real-life",
      category: "cost",
      summary:
        "A good treatment plan needs to fit both your medical situation and your real life. Cost, travel, time, and support do not replace medical advice — but they belong in the conversation, so the plan you choose is one you can realistically follow.\n\nThis page points you to the decisions where practical fit usually matters most: your care team setup, treatment comparison, and quality-of-life tradeoffs.\n\nAsk: “What will a normal treatment week look like — and if this becomes too hard, what can we adjust?”",
      why: "The better question is not only “Is this the strongest plan?” It is “Is this plan workable for my life — and if not, what can we adjust?”",
      factors: [
        "What a normal treatment week may look like",
        "Travel, time, or cost pressures to plan for",
        "Whether care can be coordinated across sites",
        "Family support and caregiver needs",
        "What could be adjusted if the plan becomes too hard",
      ],
      doctorQs: [
        "What will a normal treatment week look like?",
        "What travel, time, or cost pressures should we plan for?",
        "If this becomes too hard, what can we adjust?",
        "Are some parts of care possible closer to home?",
        "Who can help me understand expected costs at a high level?",
      ],
    },
    {
      n: 34,
      cancer: 1,
      title: "How Do I Monitor My Health After Lung Cancer Treatment?",
      slug: "how-do-i-monitor-my-health-after-lung-cancer-treatment",
      category: "treatment",
      summary:
        "Finishing treatment is an important milestone, but cancer care does not simply stop. Follow-up care helps you and your medical team monitor for possible changes, manage long-term effects of treatment, address new symptoms, and support your health after cancer.\n\nA follow-up plan is personalized based on your cancer type and stage, treatments you received, your risk of recurrence, and your current health. It may include appointments, imaging tests, symptom discussions, and long-term health management.\n\nThe goal is not to spend your life waiting for bad news. The goal is to have a clear plan: “What should I monitor, when should I contact my team, and what happens if something changes?”",
      why: "The end of treatment is not the end of care — it is the beginning of a different care phase. A clear follow-up plan helps you know what to watch for and when to act.",
      factors: [
        "Your follow-up schedule and why those tests are recommended",
        "Which symptoms to report between visits",
        "Who manages different concerns after treatment",
        "Long-term effects and returning to activities",
        "Keeping records for future care decisions",
      ],
      doctorQs: [
        "What is my follow-up schedule?",
        "Which symptoms should I report?",
        "Who should I contact if something changes?",
        "What long-term effects should I watch for?",
        "What activities can I safely return to?",
      ],
    },
    {
      n: 35,
      cancer: 1,
      title:
        "What Are My Options If Lung Cancer Spreads to the Brain?",
      slug: "what-are-my-options-if-lung-cancer-spreads-to-the-brain",
      category: "treatment",
      summary:
        "When lung cancer is found in the brain, the next step is not one standard plan for everyone. Doctors usually look at how many lesions are present, whether you have symptoms, how much cancer is active elsewhere, prior treatments, and your goals — then compare local brain-directed options, systemic therapy, clinical trials, and supportive care.\n\nBrain involvement changes the conversation. It does not automatically mean there are no options left.\n\nA useful first question for your care team is: “What is the goal for these brain findings, which options are realistic for me, and what information should guide that choice?”",
      why: "Brain metastases create fear and fragmented advice across specialties. Patients need a clear decision path that holds brain findings and whole-body options together.",
      factors: [
        "What the brain imaging shows in plain language",
        "Whether symptoms need urgent attention",
        "How much cancer is active outside the brain",
        "Local versus systemic options — and how they fit together",
        "Effects on thinking, steroids, daily life, and support at home",
      ],
      doctorQs: [
        "What exactly do the brain findings show, in plain language?",
        "What is the goal for treating the brain findings — and for cancer elsewhere?",
        "Which options are realistic for me, and how do they compare?",
        "What would change the recommendation if we learned one more piece of information?",
      ],
    },
  ];

  const questions = questionDefs.map((q) => ({
    id: id("q", q.n),
    cancer_id: id("cancer", q.cancer),
    title: q.title,
    slug: q.slug,
    category: q.category,
    summary: q.summary,
    why_patients_ask: q.why,
    key_factors: q.factors,
    doctor_questions: q.doctorQs,
    body: null as string | null,
    decision_context: null as string | null,
    when_this_may_help: [] as string[],
    when_it_may_not_help: [] as string[],
    options_and_tradeoffs: [] as string[],
    records_to_prepare: [] as string[],
    next_steps: [] as string[],
    if_opinions_conflict: [] as string[],
    timing_considerations: [] as string[],
    decision_triggers: [] as string[],
    status: "published" as const,
    content_reviewed_at: reviewed,
    ai_generated_at: null,
    created_at: ts,
    updated_at: ts,
    ...seo(q.title, q.summary.slice(0, 155), [
      q.category.replaceAll("_", " "),
      cancers[q.cancer - 1].name.toLowerCase(),
    ]),
  }));

  // AI Entry Portfolio v1 + journey fields (see docs/Lung_Cancer_AI_Entry_Spec_v1.0.md)
  const lungFlagship: Record<
    number,
    {
      summary: string;
      decision_triggers: string[];
      decision_context: string;
      when_this_may_help: string[];
      when_it_may_not_help: string[];
      timing_considerations: string[];
      options_and_tradeoffs: string[];
      records_to_prepare: string[];
      next_steps: string[];
      if_opinions_conflict: string[];
      body: string | null;
      seo_title: string;
      seo_description: string;
      seo_keywords: string[];
    }
  > = {
    2: {
      summary:
        "After a lung cancer diagnosis, you do not need to know every answer immediately.\n\nThe first steps are to understand what type of lung cancer you have, what stage it is, whether more information is needed before treatment discussions, and what to ask your care team next.\n\nA good treatment decision starts with understanding your cancer — not rushing into a choice. You are not lost; you are at the start of a journey.",
      decision_triggers: [
        "You were just told you have lung cancer",
        "You feel pressure to choose a treatment before you understand your situation",
        "You are unsure what information still matters",
        "You want a clear next step — not the whole journey at once",
      ],
      decision_context:
        "Orientation after diagnosis: lower confusion, build direction, and prepare for the next conversation — before comparing every treatment option.",
      when_this_may_help: [
        "You recently received a lung cancer diagnosis",
        "You do not yet fully understand your cancer type or stage",
        "Additional testing such as biomarker testing may still matter",
        "You feel pressure to choose treatment before information is complete",
        "You want a clear next step before comparing options",
      ],
      when_it_may_not_help: [
        "Acute symptoms require immediate stabilization before elective sequencing",
        "A clearly time-critical intervention has already been explained, agreed, and started",
      ],
      timing_considerations: [
        "Some decisions need timely discussion; many still depend on complete information",
        "Ask how urgent your situation is — not every wait is the same",
        "Focus this week on diagnosis clarity, records, and questions",
        "If symptoms worsen, seek urgent care rather than waiting for elective sequencing",
      ],
      options_and_tradeoffs: [
        "Benefit — Clarify type and stage first: clearer next conversations",
        "Trade-off — Clarifying first: may briefly delay locking a path",
        "Benefit — Ask about pending tests: may change which options are discussed",
        "Trade-off — Waiting for results: short uncertainty",
        "Benefit — Prepare questions early: more useful appointments",
        "Trade-off — Trying to learn every treatment now: more overwhelm",
      ],
      records_to_prepare: [
        "Pathology report",
        "Imaging reports and scans",
        "Cancer stage information",
        "Biomarker / molecular testing results",
        "Current medications",
        "Your questions for the next appointment",
      ],
      next_steps: [
        "Clarify your cancer type and stage — or what is still pending",
        "Ask whether biomarker or other testing could change options",
        "Prepare a short question list and keep key reports together",
      ],
      if_opinions_conflict: [
        "A second opinion may help when recommendations differ or the diagnosis is complex",
        "Ask what information each clinician is using",
        "Clarify which next step is urgent versus which can wait",
      ],
      body: null,
      seo_title: "I Was Just Diagnosed With Lung Cancer. What Happens Next?",
      seo_description:
        "Just diagnosed with lung cancer? Learn what to do first — understand type and stage, know if more information is needed, and prepare questions for your care team without rushing every decision.",
      seo_keywords: [
        "just diagnosed with lung cancer what happens next",
        "I was diagnosed with lung cancer what next",
        "newly diagnosed lung cancer next steps",
        "what to do after a lung cancer diagnosis",
        "lung cancer first steps after diagnosis",
        "what should I ask my oncologist after lung cancer diagnosis",
        "questions to ask after lung cancer diagnosis",
        "questions to ask oncologist about lung cancer",
        "questions to ask thoracic surgeon about lung cancer",
        "how soon do I need treatment after lung cancer diagnosis",
        "should I start treatment right away after lung cancer diagnosis",
      ],
    },
    21: {
      summary:
        "Biomarker testing looks for features of your cancer that may affect which treatments your care team discusses. It helps make sure important information is available before treatment decisions are made.\n\nIt does not decide your treatment by itself.",
      decision_triggers: [
        "You recently received a lung cancer diagnosis and wonder if information is still missing",
        "You have been offered treatment options and wonder if testing could change them",
        "You heard about targeted or personalized treatments and want to know if they apply",
        "You are considering a second opinion and want complete information reviewed",
      ],
      decision_context:
        "The useful question is not whether you need every possible test — it is whether you have the information needed to make a treatment decision. Biomarker testing is one way to gather information that could influence which options are considered.",
      when_this_may_help: [
        "You are choosing initial treatment and want to know if information is complete",
        "Multiple treatment approaches seem possible",
        "You are considering specialized treatments that may depend on cancer characteristics",
        "You are seeking another opinion and want complete information reviewed",
      ],
      when_it_may_not_help: [
        "Your care team explains that testing is already complete for the decision at hand",
        "Urgent clinical needs mean starting now is safer than waiting — and your team explains why",
      ],
      timing_considerations: [
        "Waiting for more information and moving forward with care are not always opposite choices",
        "Timing depends on cancer type and stage, how quickly decisions are needed, and what information is still missing",
        "Ask: Could waiting for these results change the treatment options we should consider?",
        "Discuss timing concerns directly with your care team",
      ],
      options_and_tradeoffs: [
        "Benefit — Confirm whether information is complete: clearer treatment discussion",
        "Trade-off — Waiting for results: short calendar delay and uncertainty",
        "Benefit — Ask what results could change: avoids locking a path without relevant information",
        "Trade-off — More testing: not useful if nothing would change the options discussed",
        "Benefit — Use results to compare strategies with your team: better-informed next step",
        "Trade-off — Treating one result as the whole decision: overlooks stage, health, and goals",
      ],
      records_to_prepare: [
        "Pathology diagnosis",
        "Cancer stage information",
        "Any biomarker or molecular reports already completed",
        "Current treatment recommendations",
        "Questions about what information is still missing",
      ],
      next_steps: [
        "Confirm what information is already available about your cancer",
        "Ask whether additional information could change your treatment options",
        "Use the information to compare treatment choices with your care team",
      ],
      if_opinions_conflict: [
        "Ask whether the disagreement is about waiting versus starting, or about which information is needed",
        "Clarify what result would change the options under discussion",
        "If needed, seek a focused second opinion on sequencing and information completeness",
      ],
      body: null,
      seo_title: "Do I Need Biomarker Testing Before Lung Cancer Treatment?",
      seo_description:
        "Wondering if biomarker testing is needed before lung cancer treatment? Learn when testing may affect treatment choices, what information may be missing, and what questions to ask your care team.",
      seo_keywords: [
        "do I need biomarker testing before lung cancer treatment",
        "do I need biomarker testing for lung cancer",
        "does every lung cancer patient need biomarker testing",
        "has my tumor been tested for all recommended biomarkers",
        "NGS testing lung cancer do I need it",
        "comprehensive biomarker testing lung cancer do I need it",
        "should I wait for biomarker results before starting treatment",
        "should I wait for NGS before starting lung cancer treatment",
        "can biomarker testing delay lung cancer treatment",
        "what if lung cancer has no targetable mutation",
      ],
    },
    3: {
      summary:
        "Comparing lung cancer treatment options is not about finding one “best” treatment. Compare each option by goal, expected benefit, trade-offs, what it requires, and how it fits your priorities.\n\nIt does not replace a conversation with your care team.",
      decision_triggers: [
        "You have received a treatment recommendation and want to understand why",
        "You have more than one possible option to compare",
        "You are unsure whether you have enough information to decide",
        "Your situation has changed with new results or health considerations",
      ],
      decision_context:
        "Comparing treatment options is a decision framework, not a ranking. Start with the goal of each option, then compare benefits, trade-offs, requirements, and personal priorities — without assuming there is a single best treatment for everyone.",
      when_this_may_help: [
        "You have received a treatment recommendation and want to understand alternatives",
        "More than one approach appears reasonable",
        "You want a structured way to compare benefits and trade-offs",
        "You want to prepare better questions before deciding",
      ],
      when_it_may_not_help: [
        "Emergency complications require immediate intervention",
        "Your care team explains that only one time-critical path is appropriate right now",
      ],
      timing_considerations: [
        "Confirm whether important information is complete before locking a path",
        "Ask what would change if you wait briefly for missing information",
        "Do not delay emergency care for elective comparison",
        "Prepare questions so comparison leads to a clearer next medical discussion",
      ],
      options_and_tradeoffs: [
        "Benefit — Start with treatment goals: clearer comparison across options",
        "Trade-off — Goal-first framing: takes time before locking a path",
        "Benefit — Five-question framework: compares options without ranking them",
        "Trade-off — Structured comparison: may surface more questions at first",
        "Benefit — Understanding why recommendations differ: reduces false conflict",
        "Trade-off — Different opinions: can feel uncertain until reasoning is clear",
      ],
      records_to_prepare: [
        "Cancer type and stage information",
        "Relevant biomarker information",
        "Current treatment recommendations",
        "Questions about goals, benefits, and trade-offs",
      ],
      next_steps: [
        "Confirm you understand your cancer information",
        "Ask what your reasonable options are",
        "Compare each option by goal, benefit, trade-offs, and life impact",
        "Prepare questions for your next medical discussion",
      ],
      if_opinions_conflict: [
        "Ask what reasoning supports each option",
        "Compare goals, expected benefits, and trade-offs side by side",
        "Consider a second opinion when the decision is complex or confidence is low",
      ],
      body: null,
      seo_title:
        "How to Compare Lung Cancer Treatment Options | Benefits and Trade-offs",
      seo_description:
        "Comparing lung cancer treatment options? Learn how to evaluate choices, understand trade-offs, ask better questions, and prepare for treatment decisions with your care team.",
      seo_keywords: [
        "how should I compare lung cancer treatment options",
        "lung cancer treatment options comparison",
        "lung cancer treatment benefits and trade-offs",
        "compare lung cancer treatments",
        "what treatment do you recommend and why lung cancer",
        "chemotherapy vs immunotherapy lung cancer",
        "targeted therapy vs immunotherapy lung cancer",
        "treatment options for elderly lung cancer patients",
        "can I take time to decide on lung cancer treatment",
      ],
    },
    1: {
      summary:
        "A second opinion is another specialist review of your diagnosis and options. It is often about confidence and clarity — not about proving your first doctor wrong.\n\nIt may confirm a plan, surface alternatives, or show where more information is still needed.",
      decision_triggers: [
        "Received a new diagnosis and want to confirm accuracy, type, and stage",
        "Received a treatment recommendation and want to understand alternatives",
        "Heard different opinions and want to understand why approaches differ",
        "Have a complex or uncommon situation and want specialized perspectives",
      ],
      decision_context:
        "A second opinion is about confidence, not disagreement. It can help confirm important information, review treatment choices, understand alternatives, and decide with greater clarity — without assuming your first doctor is wrong.",
      when_this_may_help: [
        "You face a major treatment decision",
        "Your diagnosis is complex or uncommon",
        "Multiple treatment approaches seem reasonable",
        "You want specialized or multidisciplinary expertise",
        "You want to understand alternatives before deciding",
      ],
      when_it_may_not_help: [
        "The diagnosis is clear and treatment options are well established",
        "Multiple specialists already reach the same conclusion",
        "Delay would create unnecessary risk and your care team explains why",
      ],
      timing_considerations: [
        "Seeking more information and moving forward with care are not always opposite choices",
        "Timing depends on cancer type and stage, how quickly decisions are needed, and your team's guidance",
        "A second opinion should support a more informed decision, not create unnecessary delay",
        "If you are concerned about timing, discuss it directly with your care team",
      ],
      options_and_tradeoffs: [
        "Benefit — Confirm diagnosis and options: greater confidence before major steps",
        "Trade-off — Another review: calendar time and preparation effort",
        "Benefit — Compare reasoning across teams: clearer trade-offs",
        "Trade-off — Different opinions: may increase short-term uncertainty",
        "Benefit — Specialized expertise for complex cases: additional perspective",
        "Trade-off — Seeking more opinions: not useful if the decision is already clear and concordant",
      ],
      records_to_prepare: [
        "Pathology report",
        "Biopsy information",
        "Imaging reports and scans",
        "Cancer stage information",
        "Biomarker / molecular testing results",
        "Current treatment recommendation",
        "Previous treatment information (if any)",
        "Questions you want answered",
      ],
      next_steps: [
        "Collect your medical information",
        "Identify what you want the second opinion to clarify",
        "Prepare questions before speaking with another specialist",
      ],
      if_opinions_conflict: [
        "Ask about diagnostic reasoning — do they agree on the diagnosis?",
        "Ask about treatment reasoning — why this option, what alternatives, what trade-offs?",
        "Consider expertise, multidisciplinary input, and your personal priorities",
      ],
      body: null,
      seo_title: "Should I Get a Second Opinion After Lung Cancer Diagnosis?",
      seo_description:
        "Considering a second opinion after a lung cancer diagnosis? Learn when it may help, what information to prepare, how to evaluate different medical opinions, and what to consider before making treatment decisions.",
      seo_keywords: [
        "should I get a second opinion lung cancer",
        "do I need a second opinion for lung cancer",
        "should I get a second opinion after lung cancer diagnosis",
        "second opinion before lung cancer treatment",
        "second opinion before lung cancer surgery",
        "is a second opinion worth it for lung cancer",
        "is it rude to get a second opinion for lung cancer",
        "why is it important to get a second opinion lung cancer",
        "what records do I need for a lung cancer second opinion",
        "second opinion if biomarker testing was not done lung cancer",
      ],
    },
    5: {
      summary:
        "People consider lung cancer care in another city or country for several reasons \u2014 not because a hospital or country is simply more famous:\n\n\u2022 A different technique, trial, or path may not be available where you are\n\u2022 You have already seen more than one team and still lack confidence\n\u2022 You do not accept the current plan and want an outside review\n\u2022 You need international-patient support (records, language, written plan)\n\u2022 Cost or coverage makes the local path hard to continue\n\nName your reason in one sentence. When safe, try remote review before travel. Ask the receiving center\u2019s international desk for a written next-step plan. Desperation alone is not a clinical reason to book flights.",
      decision_triggers: [
        "You heard another country offers a specialized technique or trial",
        "A remote review suggested a capability missing locally",
        "You are comparing total cost and logistics of staying vs traveling",
        "Family members are pushing for international care without a defined gap",
      ],
      decision_context:
        "Cross-border care is a branch of the path, not a default upgrade. Common reasons include access gaps, lost confidence after multiple opinions, cost or coverage pressure, and need for international-patient coordination \u2014 not country rankings. Then compare remote review versus travel and what written next steps the receiving center will provide.",
      when_this_may_help: [
        "A defined technique, trial, or specialty review is unavailable locally",
        "Remote second opinion suggests a capability gap worth exploring",
        "You can sustain travel, lodging, and companion support for the episode",
        "Centers differ on a material clinical point you want clarified",
      ],
      when_it_may_not_help: [
        "Local care already offers an equivalent evidence-aligned option for your gap",
        "Travel would interrupt urgent therapy without clear added value",
      ],
      timing_considerations: [
        "Try remote international review before booking travel when clinically safe",
        "Do not interrupt urgent therapy for elective travel without a clear capability gap",
        "Ask the receiving center’s international desk for a written next-step plan",
        "Compare total episode timing including repeat visits, not only the first appointment abroad",
      ],
      options_and_tradeoffs: [
        "Benefit — Remote international review only: lower cost/burden; clarifies whether travel is needed",
        "Trade-off — Remote only: limited exam; may still leave logistics unanswered",
        "Benefit — Travel for a specific procedure or trial: potential access gain",
        "Trade-off — Travel: cost, time away, and episode logistics to clarify with the international desk",
        "Benefit — Stay without travel when the gap is already covered: lower burden",
        "Trade-off — Staying: may lack a niche capability if the gap is real",
      ],
      records_to_prepare: [
        "Complete imaging and pathology package",
        "Written one-sentence question you want the foreign center to answer",
        "Insurance / self-pay estimate worksheet",
      ],
      next_steps: [
        "Define the exact capability gap in one sentence",
        "Try remote review before booking travel when safe",
        "Ask the receiving center’s international desk for a written next-step plan",
      ],
      if_opinions_conflict: [
        "Ask whether the abroad recommendation changes survival, side effects, or only convenience",
        "Get the plan you will follow in writing from the center you choose next",
        "Do not travel until the receiving center’s next-step plan is clear",
      ],
      body: "Cross-border care should answer a specific clinical question. If you cannot name the capability gap, pause before booking flights. Written next steps from the receiving center’s international desk are part of a serious episode — not homework for a home doctor before you explore.",
      seo_title: "When Is Lung Cancer Treatment Abroad Worth Considering?",
      seo_description:
        "When lung cancer care abroad may help, when it may not, and what to decide before travel — capability gap first.",
      seo_keywords: [
        "lung cancer treatment abroad",
        "when is cancer care abroad worth it",
        "international lung cancer treatment",
      ],
    },
    26: {
      summary:
        "Choosing lung cancer care is not only about finding a famous hospital. It is about finding a team with the right expertise, coordination, access to needed services, and clear communication.\n\nMany people receive excellent care close to home. A specialized team may help when decisions are complex, local experience feels limited, or you need multidisciplinary review or trial access. Some patients combine specialist planning with local treatment.\n\nThe best care team is the one that fits your cancer, your situation, and your goals — not the one with the biggest name.",
      decision_triggers: [
        "You wonder whether local care is enough for your lung cancer decision",
        "Your decision feels complex and you want multidisciplinary review",
        "You want access to specialized services, biomarkers expertise, or trials",
        "Travel is hard and you want to know if hybrid or remote review could work",
      ],
      decision_context:
        "Choose a care team and network — not a famous building. Clarify the expertise gap first, understand academic/community/hybrid setups, then evaluate experience, multidisciplinary care, access, and coordination.",
      when_this_may_help: [
        "You are deciding whether a more specialized lung cancer team is needed",
        "You want to understand academic, community, and hybrid care setups",
        "You need criteria beyond hospital reputation",
        "You want to prepare records and questions before contacting a center",
      ],
      when_it_may_not_help: [
        "You already have clear, concordant recommendations with matching expertise",
        "Changing locations would interrupt urgent care without a defined expertise gap",
      ],
      timing_considerations: [
        "Name the decision or expertise gap before searching for another center",
        "Ask whether hybrid care or remote case review could reduce unnecessary travel",
        "Prepare medical information so another team can review efficiently",
        "Ask how follow-up would be coordinated with your local team",
      ],
      options_and_tradeoffs: [
        "Benefit — Care-team framing: focuses on expertise and coordination, not rankings",
        "Trade-off — Evaluating fit: takes time before contacting another center",
        "Benefit — Hybrid network: specialist planning with local treatment convenience",
        "Trade-off — Multi-site care: needs clear coordination to avoid fragmentation",
        "Benefit — Credentials as one signal: useful context without treating them as rankings",
        "Trade-off — Travel for specialty care: cost, time, and family burden",
      ],
      records_to_prepare: [
        "Pathology and biopsy reports",
        "Imaging reports and scan images when available",
        "Biomarker or molecular results if available",
        "Treatment history and current recommendations",
        "A one-sentence statement of what expertise you are seeking",
      ],
      next_steps: [
        "Name the gap you want to improve",
        "Ask whether hybrid care could fit",
        "Prepare records and ask about experience, multidisciplinary review, and coordination",
      ],
      if_opinions_conflict: [
        "Compare reasoning and expertise match, not reputation alone",
        "Ask what additional perspective another team could provide",
        "Clarify how follow-up would work if recommendations differ",
      ],
      body: null,
      seo_title: "How Do I Choose the Right Lung Cancer Care Team?",
      seo_description:
        "Wondering if you need a specialized lung cancer center? Learn when another team may help, how academic, community, and hybrid care differ, and what to ask before you choose.",
      seo_keywords: [
        "how to choose lung cancer care team",
        "lung cancer care team",
        "who treats lung cancer",
        "how to choose an oncologist for lung cancer",
        "do I need a different lung cancer center",
        "should I go to a cancer center for lung cancer",
        "does my care team specialize in lung cancer",
        "local oncologist vs cancer center",
        "academic vs community cancer center lung cancer",
        "NCI designated cancer center lung cancer",
        "can I get lung cancer treatment locally after seeing a specialist",
      ],
    },
    27: {
      summary:
        "A Stage IV diagnosis can feel overwhelming. You do not need to answer everything today.\n\nFirst understand what Stage IV means in your situation, clarify what treatment may aim for with your care team, make sure key information is available, and prepare for the next conversation.\n\nA Stage IV diagnosis changes the conversation. It does not end the conversation. Different treatment goals do not mean less care — they mean care designed around your situation.",
      decision_triggers: [
        "You were told you have Stage IV or advanced lung cancer",
        "You feel lost in too much information and want a clear next step",
        "You received a treatment recommendation and want to understand the goal",
        "You are thinking about daily life, priorities, and whether your preferences still matter",
      ],
      decision_context:
        "Stage IV care is usually a journey, not one single choice. Stabilize first, understand your situation, clarify goals, check key information, then prepare for the next conversation.",
      when_this_may_help: [
        "You were diagnosed with Stage IV or advanced lung cancer",
        "You want to understand what the Stage means without assuming care is ending",
        "You need help breaking the problem into smaller questions",
        "You wonder whether biomarkers, trials, or another opinion could help",
      ],
      when_it_may_not_help: [
        "Emergency complications require immediate intervention",
        "Your care team explains that only one time-critical path is appropriate right now",
      ],
      timing_considerations: [
        "Ask how urgent the next decision is — not every wait is the same",
        "Clarify treatment goals before locking a path when time allows",
        "Ask whether missing information could change the options under discussion",
        "If symptoms worsen, seek urgent care rather than waiting for elective comparisons",
      ],
      options_and_tradeoffs: [
        "Benefit — One-step-at-a-time framing: less overwhelm, clearer next action",
        "Trade-off — Stabilizing first: briefly delays locking every future choice",
        "Benefit — Goal clarity: options are judged against what care may achieve for you",
        "Trade-off — Goal conversations: may feel emotional before they feel clarifying",
        "Benefit — Checking biomarkers, trials, and second opinion: more complete support",
        "Trade-off — Seeking more input: calendar time and emotional load",
      ],
      records_to_prepare: [
        "Cancer type and stage information",
        "Biomarker testing results if available",
        "Current treatment recommendations",
        "A short list of personal priorities and concerns",
      ],
      next_steps: [
        "Clarify what doctors have confirmed — and what is still pending",
        "Ask what the goal of treatment is in your situation",
        "Ask whether biomarker information, another opinion, or a trial belongs in the discussion",
      ],
      if_opinions_conflict: [
        "Compare the goal and reasoning behind each recommendation",
        "Ask what information would change each team's advice",
        "Consider a second opinion when confidence is low or options diverge",
      ],
      body: null,
      seo_title: "What Should I Know After a Stage IV Lung Cancer Diagnosis?",
      seo_description:
        "Just heard Stage IV lung cancer? Learn what it means for your situation, how treatment goals are discussed, what information matters, and how to prepare for the next conversation — one step at a time.",
      seo_keywords: [
        "what should I know after stage IV lung cancer diagnosis",
        "stage 4 lung cancer what next",
        "stage IV lung cancer treatment decisions",
        "stage 4 lung cancer treatment options",
        "advanced lung cancer next steps",
        "metastatic lung cancer what happens next",
        "how to choose treatment options for stage IV lung cancer",
        "should I wait for biomarkers with stage 4 lung cancer",
        "questions to ask oncologist stage 4 cancer",
      ],
    },
    28: {
      summary:
        "A clinical trial may be worth discussing when you want to understand additional treatment options, especially if your situation is complex, your treatment choices are changing, or you want to explore approaches being studied by researchers.\n\nA clinical trial is not automatically better than standard treatment, and considering one does not mean giving up other options. Whether a trial is appropriate depends on your cancer situation, available choices, possible benefits and risks, and your personal goals.\n\nA useful question to ask your care team is: “Are there clinical trials that may be relevant to my situation, and how would they compare with my current options?”",
      decision_triggers: [
        "You were recently diagnosed and wonder whether to ask about trials early",
        "You are comparing treatment options and want to know if trials belong in the discussion",
        "Your current treatment is changing and you want additional options",
        "Your cancer situation is complex or uncommon",
      ],
      decision_context:
        "A clinical trial is a decision option, not a last resort. Compare purpose, evidence, benefits, risks, and practical requirements with your other choices before deciding.",
      when_this_may_help: [
        "You want to know whether trials should be discussed before or during treatment",
        "You are comparing standard options and want to understand researched approaches",
        "Your treatment path is changing and you need additional possibilities",
        "Your situation is complex and specialized studies may be relevant",
      ],
      when_it_may_not_help: [
        "Emergency care is needed before elective research discussions",
        "Your care team explains that no relevant trial matches your situation right now",
      ],
      timing_considerations: [
        "Trials may be discussed before starting treatment, during treatment, or when options change",
        "Understanding options early can help before you urgently need them",
        "Waiting until treatment stops working is not always required",
        "Compare a trial with alternatives before joining",
      ],
      options_and_tradeoffs: [
        "Benefit — Discuss trials early: more complete option set",
        "Trade-off — Early discussion: more information to process",
        "Benefit — Same comparison framework as other options: fair evaluation",
        "Trade-off — Research uncertainty: outcomes may be less established",
        "Benefit — Clear purpose and commitments: better informed consent",
        "Trade-off — Visits, monitoring, and travel: practical burden",
      ],
      records_to_prepare: [
        "Cancer type and stage information",
        "Biomarker results",
        "Previous treatments",
        "Current treatment goals",
        "Medical records for eligibility review",
      ],
      next_steps: [
        "Understand your current treatment options",
        "Ask whether clinical trials are relevant to your situation",
        "Compare purpose, evidence, benefits, risks, and practical requirements",
        "Discuss whether the option fits your goals",
      ],
      if_opinions_conflict: [
        "Ask what question each trial is trying to answer",
        "Compare trials with standard options side by side",
        "Consider a second opinion if relevance or fit is unclear",
      ],
      body: null,
      seo_title: "Should I Consider a Clinical Trial for Lung Cancer?",
      seo_description:
        "Considering a lung cancer clinical trial? Learn when trials may be worth discussing, how to compare them with other options, and what questions to ask your care team.",
      seo_keywords: [
        "should I consider a clinical trial for lung cancer",
        "should I join a lung cancer clinical trial",
        "lung cancer clinical trial decision",
        "clinical trial vs standard treatment lung cancer",
        "are clinical trials only for last resort lung cancer",
        "clinical trial pros and cons lung cancer",
        "experimental treatment lung cancer what to ask",
        "lung cancer clinical trials near me",
        "lung cancer clinical trials stage 4",
      ],
    },
    29: {
      summary:
        "If lung cancer comes back, the next step is usually not simply repeating the previous treatment. Doctors typically reassess the current situation, including where the cancer has returned, previous treatments, new information about the cancer, and your personal goals.\n\nOptions after recurrence may depend on factors such as the location of recurrence, timing, previous treatment response, biomarker information, overall health, and what matters most to you.\n\nA useful first question for your care team is: “What has changed, what options do I have now, and what information should guide my next decision?”",
      decision_triggers: [
        "Your scans show the cancer has returned",
        "Your doctor recommends a new treatment plan",
        "Your cancer returned after a period of control",
        "You want more confidence before deciding",
      ],
      decision_context:
        "Recurrence is a new decision point, not simply a return to the old plan. Reassess what changed, confirm updated information, then compare options based on goals, trade-offs, and what matters most now.",
      when_this_may_help: [
        "You recently learned that lung cancer has returned",
        "You are unsure whether previous treatment should be repeated",
        "You want to know what information should guide the next choice",
        "You are considering a second opinion or clinical trial discussion",
      ],
      when_it_may_not_help: [
        "Emergency or urgent symptoms need immediate medical attention first",
        "Your care team has already explained a time-critical next step and why",
      ],
      timing_considerations: [
        "Timing of recurrence may affect which options are discussed",
        "Updated testing may be needed before comparing paths",
        "Ask which decisions need a timely discussion versus which can wait for key information",
        "Personal goals remain part of the decision at every stage",
      ],
      options_and_tradeoffs: [
        "Benefit — Reassess what changed: decisions based on the current situation",
        "Trade-off — Reassessment: more information to process before choosing",
        "Benefit — Compare options with the same questions: clearer trade-offs",
        "Trade-off — Comparing paths: takes time and may raise more questions",
        "Benefit — Consider second opinion or trial discussion: more confidence or options",
        "Trade-off — Additional review: calendar delay and more appointments",
      ],
      records_to_prepare: [
        "Current imaging and pathology reports",
        "Previous treatment history and response",
        "Biomarker / molecular testing results",
        "Current medications and health status",
        "Your goals and questions for the next discussion",
      ],
      next_steps: [
        "Understand what has changed",
        "Confirm what information is available",
        "Compare options based on goals, benefits, trade-offs, and daily life",
        "Consider whether additional expertise or information would help",
      ],
      if_opinions_conflict: [
        "Ask what has changed and what information each recommendation rests on",
        "Compare options side by side using the same questions",
        "A second opinion may help when the situation feels uncertain",
      ],
      body: null,
      seo_title: "What Are My Options If Lung Cancer Comes Back?",
      seo_description:
        "Lung cancer recurrence creates new decisions. Learn how to understand what changed, compare options, and prepare questions for your next treatment discussion.",
      seo_keywords: [
        "what are my options if lung cancer comes back",
        "lung cancer came back what next",
        "lung cancer returned what next",
        "recurrent lung cancer treatment decisions",
        "options after lung cancer recurrence",
        "cancer returned after lung surgery what next",
        "should biomarkers be retested if lung cancer returns",
        "do I need a rebiopsy if lung cancer comes back",
        "lung cancer recurrence after lobectomy",
        "lung cancer recurrence after immunotherapy",
      ],
    },
    30: {
      summary:
        "If lung cancer treatment is no longer working as expected, the next step is usually to reassess the situation rather than assume that there are no options left.\n\nDoctors may review what has changed, how the cancer is responding, what treatments have already been used, whether additional information is needed, and what matters most to you.\n\nDepending on the situation, the next decision may involve comparing different treatment approaches, reviewing new information, considering another opinion, or discussing clinical trials.\n\nA useful question to ask your care team is: “What has changed, what options do I have now, and how should we decide the next step?”",
      decision_triggers: [
        "Your scans show the cancer is growing",
        "Your doctor recommends changing treatment",
        "Your treatment is becoming harder to continue",
        "You want to understand future options",
      ],
      decision_context:
        "A treatment change is a new decision point, not the end of the journey. Understand what changed, confirm whether additional information is needed, then compare next options based on goals, benefits, trade-offs, and daily life.",
      when_this_may_help: [
        "Your current treatment is no longer achieving its expected goal",
        "Your doctor has recommended changing treatment",
        "You want to understand what information should guide the next choice",
        "You are considering a second opinion, additional testing, or a clinical trial",
      ],
      when_it_may_not_help: [
        "Emergency or urgent symptoms need immediate medical attention first",
        "Your care team has already explained a time-critical next step and why",
      ],
      timing_considerations: [
        "Treatment decisions often change over time as the situation changes",
        "Updated testing may be needed before comparing new paths",
        "Ask which decisions need a timely discussion versus which can wait for key information",
        "Personal goals remain part of the decision at every stage",
      ],
      options_and_tradeoffs: [
        "Benefit — Clarify what “not working” means: clearer next discussion",
        "Trade-off — Reassessment: more information to process before choosing",
        "Benefit — Compare options with the same questions: fair evaluation",
        "Trade-off — Comparing paths: takes time and may raise more questions",
        "Benefit — Consider another opinion or trial discussion: more confidence or options",
        "Trade-off — Additional review: calendar delay and more appointments",
      ],
      records_to_prepare: [
        "Current imaging and response assessments",
        "Previous and current treatment history",
        "Biomarker / molecular testing results",
        "Side-effect and daily-life notes",
        "Your goals and questions for the next discussion",
      ],
      next_steps: [
        "Understand what has changed",
        "Confirm whether additional information is needed",
        "Compare options based on goals, benefits, trade-offs, and daily life",
        "Consider whether another perspective or specialized expertise would help",
      ],
      if_opinions_conflict: [
        "Ask what has changed and what information each recommendation rests on",
        "Compare options side by side using the same questions",
        "A second opinion may help when the decision feels complex",
      ],
      body: null,
      seo_title: "What Are My Options If Lung Cancer Treatment Stops Working?",
      seo_description:
        "If lung cancer treatment stops working, new decisions may be needed. Learn how to understand what changed, compare options, and prepare questions for your care team.",
      seo_keywords: [
        "what are my options if lung cancer treatment stops working",
        "lung cancer treatment stopped working what next",
        "lung cancer treatment progression decisions",
        "what to do when lung cancer treatment fails",
        "progression on immunotherapy lung cancer what next",
        "progression on targeted therapy lung cancer",
        "options after targeted therapy stops working lung cancer",
        "scan shows progression but I feel fine lung cancer",
        "should I switch lung cancer treatment",
        "when oncologist says no more chemo lung cancer",
      ],
    },
    31: {
      summary:
        "Surgery may be an option for some people with lung cancer, but whether it should be part of your treatment plan depends on many factors, including the type and stage of cancer, where the cancer is located, your overall health, and your treatment goals.\n\nSurgery is not automatically the best choice for everyone, and it is usually considered alongside other approaches that may include radiation, systemic treatments, or observation depending on the situation.\n\nA useful question to ask your care team is: “Is surgery appropriate for my situation, and how does it compare with my other available options?”",
      decision_triggers: [
        "You were recently diagnosed and wonder if surgery is possible",
        "Your doctor mentioned surgery as an option",
        "You are comparing surgery with other treatment paths",
        "You want more confidence before a major procedure decision",
      ],
      decision_context:
        "Surgery is a treatment option, not the decision itself. Compare whether surgery fits your cancer situation, goals, and priorities — alongside alternatives.",
      when_this_may_help: [
        "Surgery has been mentioned as a possible part of your plan",
        "You want to understand how surgery compares with other options",
        "You are preparing questions before a major treatment discussion",
        "You are considering a second opinion or specialized surgical expertise",
      ],
      when_it_may_not_help: [
        "Emergency or urgent symptoms need immediate medical attention first",
        "Your care team has already explained a time-critical next step and why",
      ],
      timing_considerations: [
        "Some surgery decisions benefit from complete staging and biomarker information first",
        "Ask which questions need a timely discussion versus which can wait for key information",
        "Recovery and daily-life impact are part of the timing conversation",
        "A second opinion may be useful before an irreversible procedure",
      ],
      options_and_tradeoffs: [
        "Benefit — Clarify why surgery is being considered: clearer decision discussion",
        "Trade-off — More comparison: takes time and may raise more questions",
        "Benefit — Compare alternatives with the same questions: fair evaluation",
        "Trade-off — Waiting for more information: short calendar delay",
        "Benefit — Second opinion or specialized review: more confidence before a major step",
        "Trade-off — Additional review: more appointments and planning",
      ],
      records_to_prepare: [
        "Pathology and staging information",
        "Imaging reports and scans",
        "Biomarker / molecular testing results",
        "Current medications and health status",
        "Your goals and questions about surgery and alternatives",
      ],
      next_steps: [
        "Understand why surgery is being considered",
        "Review available alternatives",
        "Compare benefits, trade-offs, recovery, and daily-life impact",
        "Consider whether additional expertise would help",
      ],
      if_opinions_conflict: [
        "Ask what information each recommendation rests on",
        "Compare surgery and alternatives side by side using the same questions",
        "A second opinion may help when the decision feels significant",
      ],
      body: null,
      seo_title: "Should Surgery Be Part of My Lung Cancer Treatment Plan?",
      seo_description:
        "Considering surgery for lung cancer? Learn when surgery may be discussed, how to compare it with other options, and what questions to ask before making a decision.",
      seo_keywords: [
        "should surgery be part of lung cancer treatment",
        "do I need surgery for lung cancer",
        "can lung cancer be removed by surgery",
        "is surgery right for my lung cancer",
        "lung cancer surgery vs other treatments",
        "am I too old for lung cancer surgery",
        "surgery vs radiation for early lung cancer",
        "SBRT vs surgery for lung cancer",
        "can stage 4 lung cancer have surgery",
      ],
    },
    32: {
      summary:
        "Quality of life is an important part of lung cancer decisions because treatment choices involve more than medical outcomes alone. Patients and care teams often consider treatment goals, daily activities, possible benefits, potential burdens, and personal priorities.\n\nThe best decision is not always the option with the most treatment or the least treatment. It is the option that best fits your medical situation and what matters most to you.\n\nA useful question to ask your care team is: “How might each option affect both my health and the life I want to maintain?”",
      decision_triggers: [
        "You are comparing treatments and wonder about daily-life impact",
        "Treatment has significant burdens such as side effects or travel",
        "Your cancer situation is changing and priorities may shift",
        "You are making advanced cancer decisions and want goals included",
      ],
      decision_context:
        "Quality of life means choosing treatment that fits your goals — not automatically choosing less treatment. Bring personal priorities into every comparison of options.",
      when_this_may_help: [
        "You want your goals and daily life included in treatment discussions",
        "You are weighing benefits and burdens across options",
        "You are facing Stage IV, recurrence, or treatment-change decisions",
        "You want clearer language for talking with your care team about priorities",
      ],
      when_it_may_not_help: [
        "Emergency or urgent symptoms need immediate medical attention first",
        "Your care team has already explained a time-critical next step and why",
      ],
      timing_considerations: [
        "Understanding priorities earlier can make future decisions clearer",
        "Priorities may change when the cancer situation or treatment response changes",
        "Trade-offs between medical goals and daily life can be discussed at any stage",
        "Revisit goals when comparing a new set of options",
      ],
      options_and_tradeoffs: [
        "Benefit — Name what matters most: clearer trade-off discussions",
        "Trade-off — More personal reflection: takes time and emotional energy",
        "Benefit — Compare options with goals included: decisions that fit the person",
        "Trade-off — Different priorities among family members: may need more conversation",
        "Benefit — Revisit goals when treatment changes: stays aligned with current life",
        "Trade-off — Waiting to discuss priorities: decisions may feel more urgent later",
      ],
      records_to_prepare: [
        "Your current treatment options as explained by your care team",
        "Notes on daily activities and routines that matter most",
        "Questions about benefits, burdens, and recovery",
        "Support needs and family responsibilities",
        "Your priorities ranked in your own words",
      ],
      next_steps: [
        "Identify what matters most to you",
        "Understand the goals and trade-offs of each option",
        "Discuss how each choice may affect your life",
        "Make sure your priorities are part of the decision",
      ],
      if_opinions_conflict: [
        "Ask how each recommendation fits your stated goals",
        "Compare benefits and burdens side by side",
        "A second opinion may help when priorities and recommendations feel misaligned",
      ],
      body: null,
      seo_title: "How Do I Balance Lung Cancer Treatment and Quality of Life?",
      seo_description:
        "Learn how to balance lung cancer treatment with quality of life — including personal goals, symptom support, treatment burden, and questions to ask your care team.",
      seo_keywords: [
        "how should quality of life factor into lung cancer decisions",
        "balance lung cancer treatment and quality of life",
        "supportive care lung cancer decisions",
        "treatment burden and daily life lung cancer",
        "can I work during lung cancer treatment",
        "can you work while doing chemo and radiation",
        "working during cancer treatment",
        "how will lung cancer treatment affect daily activities",
        "palliative care vs hospice lung cancer",
        "lung cancer palliative care at home",
        "is stopping lung cancer treatment giving up",
      ],
    },
    33: {
      summary:
        "A good treatment plan needs to fit both your medical situation and your real life. Cost, travel, time, and support do not replace medical advice — but they belong in the conversation, so the plan you choose is one you can realistically follow.\n\nThis page points you to the decisions where practical fit usually matters most: your care team setup, treatment comparison, and quality-of-life tradeoffs.\n\nAsk: “What will a normal treatment week look like — and if this becomes too hard, what can we adjust?”",
      decision_triggers: [
        "The plan feels hard to live with because of schedule, travel, or cost",
        "You are choosing where care happens and wonder about hybrid or local options",
        "You are comparing treatments and want to know which fits a real week",
        "You need language to raise practical limits with your care team",
      ],
      decision_context:
        "Practical fit is a pointer into Care Team, Treatment Options, and Quality of Life — not an insurance or price guide. Name constraints early, then open the matching decision.",
      when_this_may_help: [
        "You feel stuck between medical fit and practical limits",
        "You want to know which decision page to open next",
        "You need three clear questions for the care-team conversation",
        "You want to avoid shopping only by cost or only by reputation",
      ],
      when_it_may_not_help: [
        "Emergency or urgent symptoms need immediate medical attention first",
        "Your care team has already explained a time-critical next step and why",
      ],
      timing_considerations: [
        "Raise practical limits early — before the plan is locked",
        "Some parts of care may be possible closer to home",
        "Exact prices and insurance rules vary; put constraints on the table at a high level",
        "Revisit practical fit when the treatment plan changes",
      ],
      options_and_tradeoffs: [
        "Benefit — Pointer framing: faster route into the right decision page",
        "Trade-off — Not a full logistics encyclopedia: details live in Care Team, Treatment, and QoL",
        "Benefit — Name constraints early: more workable plans",
        "Trade-off — Discussing limits can feel uncomfortable at first",
        "Benefit — Three takeaway questions: clearer next conversation",
        "Trade-off — Focusing only on cost: may overlook medical fit or support needs",
      ],
      records_to_prepare: [
        "Notes on travel distance and transportation options",
        "Work and family responsibilities that affect scheduling",
        "Caregiver availability",
        "Questions about visit frequency, location, and expected costs",
      ],
      next_steps: [
        "Open Care Team if the question is where care happens",
        "Open Treatment Options if you need to compare visit load and burden",
        "Open Quality of Life if sustainability and daily life are the issue",
      ],
      if_opinions_conflict: [
        "Ask how each option fits both medical goals and practical requirements",
        "Compare travel, time, cost, and support needs side by side",
        "A care-team or quality-of-life discussion may help when expertise and logistics conflict",
      ],
      body: null,
      seo_title: "Can My Lung Cancer Treatment Plan Work With My Real Life?",
      seo_description:
        "Wondering if a lung cancer plan can work with real life? Learn why cost, travel, and time belong in the conversation — and which decision page to open next.",
      seo_keywords: [
        "can my lung cancer treatment plan work with my real life",
        "lung cancer treatment travel and time",
        "can I travel during lung cancer treatment",
        "lung cancer treatment cost what to ask",
        "can I get lung cancer treatment close to home",
      ],
    },
    34: {
      summary:
        "Finishing treatment is an important milestone, but cancer care does not simply stop. Follow-up care helps you and your medical team monitor for possible changes, manage long-term effects of treatment, address new symptoms, and support your health after cancer.\n\nA follow-up plan is personalized based on your cancer type and stage, treatments you received, your risk of recurrence, and your current health. It may include appointments, imaging tests, symptom discussions, and long-term health management.\n\nThe goal is not to spend your life waiting for bad news. The goal is to have a clear plan: “What should I monitor, when should I contact my team, and what happens if something changes?”",
      decision_triggers: [
        "You recently completed lung cancer treatment",
        "You are moving from active treatment into follow-up care",
        "You are worried about recurrence or unsure what symptoms matter",
        "You want a clearer plan for life after treatment",
      ],
      decision_context:
        "Long-term monitoring asks how to watch for changes, manage treatment effects, and rebuild confidence after active treatment — with a clear plan for what to monitor and when to contact your team.",
      when_this_may_help: [
        "You finished treatment and want to know what comes next",
        "You need clarity on scan schedules and symptom reporting",
        "Fear of recurrence is making daily life harder",
        "You want to keep records and plan recovery steps",
      ],
      when_it_may_not_help: [
        "Emergency or urgent symptoms need immediate medical attention first",
        "Your care team has already given a time-critical next step and why",
      ],
      timing_considerations: [
        "Ask for the follow-up plan before active treatment fully ends when possible",
        "Confirm who to call between visits for different concerns",
        "Revisit the plan if new symptoms or major life changes appear",
        "Keep records ready if another opinion or future decision is needed",
      ],
      options_and_tradeoffs: [
        "Benefit — Clear monitoring schedule: less uncertainty between visits",
        "Trade-off — Ongoing appointments and scans: time and possible anxiety",
        "Benefit — Knowing which symptoms matter: earlier action when needed",
        "Trade-off — Watching too many small changes: unnecessary fear",
        "Benefit — Keeping records: smoother future care decisions",
        "Trade-off — Focusing only on scans: may overlook recovery and daily life",
      ],
      records_to_prepare: [
        "Pathology reports and treatment summaries",
        "Imaging and biomarker results",
        "Medication list and side-effect notes",
        "Questions about schedule, symptoms, and recovery",
        "Contact plan for concerns between visits",
      ],
      next_steps: [
        "Ask for your follow-up schedule and why those tests are recommended",
        "Confirm which symptoms to report and who to contact",
        "Keep your cancer records organized",
        "Plan recovery steps that help you live well after treatment",
      ],
      if_opinions_conflict: [
        "Ask why each recommended monitoring schedule fits your situation",
        "Compare what each team would watch for and when to call",
        "A second opinion may help when follow-up recommendations feel unclear",
      ],
      body: null,
      seo_title: "How Do I Monitor My Health After Lung Cancer Treatment?",
      seo_description:
        "Learn what follow-up care after lung cancer treatment involves — scan schedules, symptoms to report, fear of recurrence, and questions to ask your care team.",
      seo_keywords: [
        "how do I monitor my health after lung cancer treatment",
        "lung cancer follow-up care plan",
        "scan schedule after lung cancer treatment",
        "symptoms to report after lung cancer treatment",
        "who manages lung cancer follow-up oncology or primary care",
        "what should my follow-up plan include after lung cancer",
      ],
    },
    35: {
      summary:
        "When lung cancer is found in the brain, the next step is not one standard plan for everyone. Doctors usually look at how many lesions are present, whether you have symptoms, how much cancer is active elsewhere, prior treatments, and your goals — then compare local brain-directed options, systemic therapy, clinical trials, and supportive care.\n\nBrain involvement changes the conversation. It does not automatically mean there are no options left.\n\nA useful first question for your care team is: “What is the goal for these brain findings, which options are realistic for me, and what information should guide that choice?”",
      decision_triggers: [
        "Scans show lung cancer in the brain",
        "You were told you have brain metastases",
        "Neurologic symptoms led to a brain scan",
        "Your team is comparing local and systemic options",
      ],
      decision_context:
        "Brain metastases are a new decision point. Clarify the findings and symptoms, understand disease outside the brain, then compare local, systemic, trial, and supportive options against your goals — not against fear alone.",
      when_this_may_help: [
        "You recently learned lung cancer was found in the brain",
        "You need to prepare questions before comparing brain-directed and whole-body plans",
        "You want to know what information should guide the next choice",
        "You are considering a second opinion or clinical trial discussion",
      ],
      when_it_may_not_help: [
        "Sudden severe neurologic symptoms need emergency care first",
        "Your care team has already explained a time-critical next step and why",
      ],
      timing_considerations: [
        "Symptom control may be urgent even while options are still being compared",
        "Ask which decisions need a timely discussion versus which can wait for key information",
        "Sequencing of local and systemic treatment may matter — ask why a proposed order was chosen",
        "Personal goals and daily function remain part of the decision",
      ],
      options_and_tradeoffs: [
        "Benefit — Clear goals for brain and body: a plan that fits the whole picture",
        "Trade-off — More specialties involved: more appointments and possible conflicting advice",
        "Benefit — Comparing local and systemic options: fewer fear-only choices",
        "Trade-off — Waiting for information: calendar delay when symptoms are stable",
        "Benefit — Naming daily-life effects early: a more workable plan",
        "Trade-off — Facing cognition, steroids, or travel limits: harder emotional conversations",
      ],
      records_to_prepare: [
        "Brain imaging reports and images when available",
        "Recent body staging scans",
        "Pathology and biomarker results",
        "Treatment history and current medications, including steroids",
        "A short list of symptoms and what matters most to you now",
      ],
      next_steps: [
        "Get a plain-language summary of the brain findings and disease elsewhere",
        "Ask which options are realistic and how they compare",
        "Clarify what is urgent versus what can wait",
        "Consider whether a second opinion or trial discussion would help",
      ],
      if_opinions_conflict: [
        "Ask what each recommendation assumes about the imaging and disease outside the brain",
        "Compare options side by side using the same questions: goal, benefit, risk, fit",
        "A second opinion may help when sequencing or specialty advice feels unclear",
      ],
      body: null,
      seo_title: "What Are My Options If Lung Cancer Spreads to the Brain?",
      seo_description:
        "A decision guide for lung cancer brain metastases — what the findings mean, what information guides next options, and questions to ask before choosing a plan.",
      seo_keywords: [
        "what are my options if lung cancer spreads to the brain",
        "lung cancer brain metastases what next",
        "lung cancer spread to brain treatment decisions",
        "brain mets from lung cancer what should I ask",
        "options when lung cancer is in the brain",
        "questions to ask oncologist about brain metastases lung cancer",
      ],
    },
  };

  for (const [n, fields] of Object.entries(lungFlagship)) {
    const q = questions.find((item) => item.id === id("q", Number(n)));
    if (!q) continue;
    Object.assign(q, fields);
  }

  const stories = [
    {
      id: id("story", 1),
      cancer_id: id("cancer", 1),
      title: "Choosing a second opinion before lung surgery",
      slug: "choosing-second-opinion-before-lung-surgery",
      country: "United States",
      age_range: "55-64",
      decision_topic: "second opinion before surgery",
      background:
        "A newly diagnosed patient wanted clarity before agreeing to lung resection and felt pressure to decide quickly.",
      initial_diagnosis:
        "Suspected early-stage non-small cell lung cancer after imaging and biopsy, with molecular results still pending.",
      decision_challenge:
        "Whether to proceed immediately with local surgery or pause briefly for a thoracic oncology second opinion and complete biomarker testing.",
      options_considered: [
        "Immediate surgery at the local hospital",
        "Remote or in-person second opinion at a high-volume thoracic center",
        "Wait for full molecular results before locking the treatment sequence",
      ],
      why_compared:
        "The patient wanted to know whether neoadjuvant therapy, a different surgical approach, or additional pathology review could change the plan before an irreversible step.",
      final_decision:
        "Completed a remote second opinion and biomarker testing, then returned to a coordinated local plan with clearer sequencing.",
      lessons_learned: [
        "A second opinion did not require leaving the local care team",
        "Waiting for key tests can clarify sequencing without abandoning treatment",
        "Write down which decisions are time-sensitive versus deliberately paced",
      ],
      status: "published" as const,
      content_reviewed_at: reviewed,
      created_at: ts,
      updated_at: ts,
      ...seo(
        "Lung Cancer Decision Story: Second Opinion Before Surgery",
        "A patient decision journey about seeking a second opinion before lung cancer surgery.",
        ["lung cancer story", "second opinion", "decision journey"]
      ),
    },
    {
      id: id("story", 6),
      cancer_id: id("cancer", 1),
      title: "When a biomarker result changed the first treatment plan",
      slug: "biomarker-result-changed-lung-cancer-treatment-plan",
      country: "Singapore",
      age_range: "50-59",
      decision_topic: "biomarker-guided sequencing",
      background:
        "A patient with newly diagnosed non-small cell lung cancer was offered a surgery-first plan before molecular results returned.",
      initial_diagnosis:
        "Suspected resectable NSCLC after staging imaging, with tissue sent for a broad biomarker panel that had not yet resulted.",
      decision_challenge:
        "Whether to schedule resection immediately or wait a short, defined window for biomarker results that might favor systemic therapy first.",
      options_considered: [
        "Proceed to surgery on the original calendar",
        "Wait for the tissue biomarker panel before locking sequencing",
        "Add liquid biopsy while waiting if turnaround was uncertain",
      ],
      why_compared:
        "The team explained that a targetable alteration could redirect first-line therapy and possibly change whether systemic treatment should come before surgery.",
      final_decision:
        "Paused surgery for a time-boxed wait. An actionable alteration was found, and the plan shifted to a systemic-first sequence with surgery reconsidered after response assessment.",
      lessons_learned: [
        "Ask what result would actually change the plan before agreeing to wait",
        "A short, dated pause is different from an open-ended delay",
        "Biomarker timing can turn a surgery-versus-systemic fork into a clearer sequence",
      ],
      status: "published" as const,
      content_reviewed_at: reviewed,
      created_at: ts,
      updated_at: ts,
      ...seo(
        "Lung Cancer Decision Story: Biomarker Changed Treatment Plan",
        "An illustrative journey where biomarker results redirected lung cancer treatment sequencing.",
        ["lung cancer story", "biomarker testing", "decision journey"]
      ),
    },
    {
      id: id("story", 7),
      cancer_id: id("cancer", 1),
      title: "Comparing local treatment with an international option",
      slug: "comparing-local-and-international-lung-cancer-options",
      country: "United Arab Emirates",
      age_range: "45-54",
      decision_topic: "local vs international care",
      background:
        "A family was considering travel abroad after reading about a specialized technique not routinely offered nearby.",
      initial_diagnosis:
        "Locally advanced NSCLC with a completed staging workup and an evidence-aligned local plan already proposed.",
      decision_challenge:
        "Whether to travel for a marketed specialized option or stay with the local multidisciplinary plan after clarifying the true capability gap.",
      options_considered: [
        "Proceed with the local evidence-aligned plan",
        "Obtain a remote international records review before any travel",
        "Travel for the specialized technique if review confirmed a material gap",
      ],
      why_compared:
        "The family needed to know whether abroad care would change outcomes or mainly change venue, cost, and follow-up continuity.",
      final_decision:
        "Completed a remote international review first. The review confirmed the local plan was appropriate; the family stayed local and used the foreign notes to sharpen follow-up questions.",
      lessons_learned: [
        "Name the capability gap in one sentence before booking flights",
        "Remote review can prevent unnecessary travel when options are equivalent",
        "A written next-step plan from the receiving center is part of the episode",
      ],
      status: "published" as const,
      content_reviewed_at: reviewed,
      created_at: ts,
      updated_at: ts,
      ...seo(
        "Lung Cancer Decision Story: Local vs International Care",
        "An illustrative journey comparing local lung cancer treatment with an international option.",
        ["lung cancer story", "care abroad", "decision journey"]
      ),
    },
    {
      id: id("story", 2),
      cancer_id: id("cancer", 2),
      title: "Weighing active surveillance for prostate cancer",
      slug: "weighing-active-surveillance-prostate-cancer",
      country: "United Kingdom",
      age_range: "65-74",
      decision_topic: "surveillance versus treatment",
      background:
        "A patient with lower-risk prostate cancer wanted to avoid treatment side effects if monitoring remained safe.",
      initial_diagnosis:
        "Lower-risk prostate cancer based on PSA, MRI, and biopsy findings, with guideline-supported surveillance as one option.",
      decision_challenge:
        "Whether active surveillance was appropriate or whether early definitive therapy would better match personal risk tolerance.",
      options_considered: [
        "Active surveillance with scheduled PSA, MRI, and biopsy triggers",
        "Surgery",
        "Radiation therapy",
      ],
      why_compared:
        "The patient prioritized urinary and sexual function while still wanting a clear plan if disease features changed.",
      final_decision:
        "Chose active surveillance with a written trigger list for when treatment would be reconsidered.",
      lessons_learned: [
        "Clear monitoring triggers reduced anxiety more than vague reassurance",
        "Function priorities belong in the decision conversation early",
        "Surveillance is a structured plan, not 'doing nothing'",
      ],
      status: "published" as const,
      content_reviewed_at: reviewed,
      created_at: ts,
      updated_at: ts,
      ...seo(
        "Prostate Cancer Decision Story: Active Surveillance",
        "A decision journey comparing active surveillance and definitive prostate cancer treatment.",
        ["prostate cancer story", "active surveillance"]
      ),
    },
    {
      id: id("story", 3),
      cancer_id: id("cancer", 3),
      title: "Comparing lumpectomy and mastectomy priorities",
      slug: "comparing-lumpectomy-and-mastectomy-priorities",
      country: "Singapore",
      age_range: "45-54",
      decision_topic: "surgery choice",
      background:
        "A patient eligible for either breast-conserving surgery or mastectomy needed medical options to match personal priorities.",
      initial_diagnosis: "Early-stage hormone receptor-positive breast cancer.",
      decision_challenge:
        "Choosing between lumpectomy plus radiation and mastectomy, including reconstruction timing questions.",
      options_considered: [
        "Lumpectomy plus radiation",
        "Mastectomy with immediate reconstruction",
        "Mastectomy with delayed reconstruction",
      ],
      why_compared:
        "Genetic counseling results and willingness to undergo radiation were still undecided when surgery was first discussed.",
      final_decision:
        "Completed genetic counseling first, then chose lumpectomy plus radiation.",
      lessons_learned: [
        "Sequencing genetic counseling before a final surgery choice prevented a rushed irreversible decision",
        "Two oncologically reasonable options can still feel very different personally",
        "Ask which next test would actually change the surgery recommendation",
      ],
      status: "published" as const,
      content_reviewed_at: reviewed,
      created_at: ts,
      updated_at: ts,
      ...seo(
        "Breast Cancer Decision Story: Surgery Comparison",
        "How one patient compared lumpectomy and mastectomy decision factors.",
        ["breast cancer story", "lumpectomy", "mastectomy"]
      ),
    },
    {
      id: id("story", 4),
      cancer_id: id("cancer", 4),
      title: "Seeking a transplant-center review for liver cancer",
      slug: "seeking-transplant-center-review-liver-cancer",
      country: "Germany",
      age_range: "50-59",
      decision_topic: "specialist center review",
      background:
        "A patient with hepatocellular carcinoma wanted to know whether transplant evaluation should happen before more locoregional procedures.",
      initial_diagnosis:
        "HCC with compensated cirrhosis under evaluation for local therapy.",
      decision_challenge:
        "Whether to proceed with embolization locally or obtain transplant-center input first.",
      options_considered: [
        "Local embolization now",
        "Transplant evaluation first",
        "A sequenced combination guided by a specialty center",
      ],
      why_compared:
        "Local and specialty recommendations framed urgency differently, and the patient needed the correct decision order more than a brand-name hospital.",
      final_decision:
        "Completed a remote transplant-center review first, then followed a coordinated local procedure plan.",
      lessons_learned: [
        "Decision sequence can matter more than center branding",
        "Remote specialty review can clarify next steps before travel",
        "Ask how each procedure affects later transplant eligibility",
      ],
      status: "published" as const,
      content_reviewed_at: reviewed,
      created_at: ts,
      updated_at: ts,
      ...seo(
        "Liver Cancer Decision Story: Transplant Center Review",
        "A patient journey about sequencing transplant evaluation and local liver cancer therapy.",
        ["liver cancer story", "transplant", "decision journey"]
      ),
    },
    {
      id: id("story", 5),
      cancer_id: id("cancer", 5),
      title: "Comparing radiation techniques after brain tumor surgery",
      slug: "comparing-radiation-techniques-after-brain-tumor-surgery",
      country: "Japan",
      age_range: "40-49",
      decision_topic: "radiation technique comparison",
      background:
        "After resection, a patient needed to understand real differences among radiation approaches discussed by the team.",
      initial_diagnosis: "Glioma requiring adjuvant radiation planning.",
      decision_challenge:
        "How to compare standard fractionated radiation with more specialized techniques offered at another center.",
      options_considered: [
        "Local fractionated radiation",
        "Referral for a specialized radiation technique",
        "Clinical trial with novel sequencing",
      ],
      why_compared:
        "The family wanted evidence-based differences for this tumor type, not technology marketing.",
      final_decision:
        "Stayed with the local evidence-aligned plan after a remote specialty review confirmed clinical equivalence for this case.",
      lessons_learned: [
        "A remote second opinion can prevent unnecessary travel when options are similar",
        "Ask what evidence exists for your exact tumor and prior treatment",
        "Technology labels matter less than indication fit and continuity of care",
      ],
      status: "published" as const,
      content_reviewed_at: reviewed,
      created_at: ts,
      updated_at: ts,
      ...seo(
        "Brain Tumor Decision Story: Radiation Comparison",
        "A decision journey comparing radiation options after brain tumor surgery.",
        ["brain tumor story", "radiation therapy"]
      ),
    },
  ];

  const global_care_options = [
    {
      id: id("gco", 1),
      cancer_id: null,
      title: "How to evaluate cancer care across countries",
      slug: "how-to-evaluate-cancer-care-across-countries",
      country_code: "US",
      summary:
        "A practical framework for comparing cross-border cancer care: capability fit, continuity, records, cost, and follow-up.",
      body: "Cross-border care is a decision about a specific capability gap, not a general upgrade. Start with remote records review, define the exact question a foreign center will answer, and get a written next-step plan from their international desk.",
      cost_notes:
        "Include clinical fees, flights, lodging, companion costs, translator needs, and repeat-visit probability.",
      status: "published" as const,
      content_reviewed_at: reviewed,
      created_at: ts,
      updated_at: ts,
      ...seo(
        "International Medical Guide for Cancer Decisions",
        "Evaluate cancer treatment abroad with a structured decision framework.",
        ["medical travel", "cancer care abroad", "global care"]
      ),
    },
    {
      id: id("gco", 2),
      cancer_id: id("cancer", 1),
      title: "Lung cancer specialized care considerations abroad",
      slug: "lung-cancer-specialized-care-abroad",
      country_code: "DE",
      summary:
        "Patients sometimes travel for complex thoracic surgery, proton access, or trial matching. Confirm whether remote review can answer the question first.",
      body: "For lung cancer, abroad care is most coherent when a defined service—such as a complex resection or a trial—is unavailable locally. Continuity of systemic therapy after return is essential.",
      cost_notes:
        "Complex surgery packages and proton courses can differ widely; request itemized estimates.",
      status: "published" as const,
      content_reviewed_at: reviewed,
      created_at: ts,
      updated_at: ts,
      ...seo(
        "Lung Cancer Care Abroad",
        "Decision factors for considering specialized lung cancer care in another country.",
        ["lung cancer abroad", "medical travel"]
      ),
    },
    {
      id: id("gco", 3),
      cancer_id: id("cancer", 5),
      title: "Brain tumor centers and cross-border second opinions",
      slug: "brain-tumor-centers-cross-border-second-opinions",
      country_code: "JP",
      summary:
        "Rare brain tumors may justify specialty-center review. Remote neuropathology and imaging review can often precede travel.",
      body: "Because neurologic urgency varies, ask whether waiting for travel is safe. Many centers can review imaging and pathology packages before an in-person visit.",
      cost_notes:
        "Remote review is usually far less costly than immediate travel and can prevent unnecessary trips.",
      status: "published" as const,
      content_reviewed_at: reviewed,
      created_at: ts,
      updated_at: ts,
      ...seo(
        "Brain Tumor Care Abroad",
        "How to approach cross-border second opinions for brain tumors.",
        ["brain tumor abroad", "second opinion"]
      ),
    },
  ];

  const sources = [
    {
      id: id("src", 1),
      title: "NCCN Patient Guidelines overview resources",
      url: "https://www.nccn.org/patientresources/patient-resources",
      publisher: "NCCN",
      published_on: "2025-01-01",
      notes: "Educational patient-facing oncology guidance hub",
    },
    {
      id: id("src", 2),
      title: "American Cancer Society treatment decision resources",
      url: "https://www.cancer.org/cancer/managing-cancer/making-treatment-decisions.html",
      publisher: "American Cancer Society",
      published_on: "2025-01-01",
      notes: "General treatment decision education",
    },
    {
      id: id("src", 3),
      title: "WHO cancer fact sheets",
      url: "https://www.who.int/news-room/fact-sheets/detail/cancer",
      publisher: "World Health Organization",
      published_on: "2025-01-01",
      notes: "Global cancer context",
    },
    {
      id: id("src", 4),
      title: "ASCO patient information: getting a second opinion",
      url: "https://www.cancer.net/navigating-cancer-care/cancer-basics/cancer-care-team/seeking-second-opinion",
      publisher: "Cancer.Net / ASCO",
      published_on: "2025-01-01",
      notes: "Second-opinion navigation for patients",
    },
    {
      id: id("src", 5),
      title: "NCI: Finding health care services",
      url: "https://www.cancer.gov/about-cancer/managing-care/services",
      publisher: "National Cancer Institute",
      published_on: "2025-01-01",
      notes: "Care navigation and service finding",
    },
    {
      id: id("src", 6),
      title: "ACS: Understanding your options for treatment",
      url: "https://www.cancer.org/cancer/managing-cancer/making-treatment-decisions/making-treatment-decisions.html",
      publisher: "American Cancer Society",
      published_on: "2025-01-01",
      notes: "Treatment decision framing",
    },
    {
      id: id("src", 7),
      title: "CDC: Cancer survivors—finding support",
      url: "https://www.cdc.gov/cancer-survivors/patients/index.html",
      publisher: "CDC",
      published_on: "2025-01-01",
      notes: "Patient support context",
    },
    {
      id: id("src", 8),
      title: "MedlinePlus: Talking with your doctor",
      url: "https://medlineplus.gov/talkingwithyourdoctor.html",
      publisher: "MedlinePlus",
      published_on: "2025-01-01",
      notes: "Doctor communication guidance",
    },
    {
      id: id("src", 9),
      title: "Non-Small Cell Lung Cancer Treatment (PDQ) — Patient Version",
      url: "https://www.cancer.gov/types/lung/patient/non-small-cell-lung-treatment-pdq",
      publisher: "National Cancer Institute",
      published_on: "2025-01-01",
      notes: "Authoritative NSCLC treatment overview for patients",
    },
    {
      id: id("src", 10),
      title: "Lung Cancer — Patient Information",
      url: "https://www.cancer.net/cancer-types/lung-cancer",
      publisher: "Cancer.Net / ASCO",
      published_on: "2025-01-01",
      notes: "ASCO patient education on lung cancer decisions",
    },
    {
      id: id("src", 11),
      title: "ESMO Patient Guides — Lung Cancer",
      url: "https://www.esmo.org/for-patients/patient-guides/lung-cancer",
      publisher: "European Society for Medical Oncology",
      published_on: "2025-01-01",
      notes: "ESMO patient-facing lung cancer guidance",
    },
    {
      id: id("src", 12),
      title: "ClinicalTrials.gov — Learn About Studies",
      url: "https://clinicaltrials.gov/study-basics/learn-about-studies",
      publisher: "ClinicalTrials.gov / NIH",
      published_on: "2025-01-01",
      notes: "Patient education on clinical trial decisions",
    },
    {
      id: id("src", 13),
      title: "Clinical Trials Information for Patients and Caregivers",
      url: "https://www.cancer.gov/research/participate/clinical-trials",
      publisher: "National Cancer Institute",
      published_on: "2025-01-01",
      notes: "NCI clinical trial decision education",
    },
  ];

  const cancer_treatments = [
    { cancer_id: id("cancer", 1), treatment_id: id("tx", 1), sort_order: 1 },
    { cancer_id: id("cancer", 1), treatment_id: id("tx", 2), sort_order: 2 },
    { cancer_id: id("cancer", 1), treatment_id: id("tx", 3), sort_order: 3 },
    { cancer_id: id("cancer", 1), treatment_id: id("tx", 4), sort_order: 4 },
    { cancer_id: id("cancer", 1), treatment_id: id("tx", 5), sort_order: 5 },
    { cancer_id: id("cancer", 1), treatment_id: id("tx", 6), sort_order: 6 },
    { cancer_id: id("cancer", 2), treatment_id: id("tx", 7), sort_order: 1 },
    { cancer_id: id("cancer", 2), treatment_id: id("tx", 1), sort_order: 2 },
    { cancer_id: id("cancer", 2), treatment_id: id("tx", 2), sort_order: 3 },
    { cancer_id: id("cancer", 3), treatment_id: id("tx", 1), sort_order: 1 },
    { cancer_id: id("cancer", 3), treatment_id: id("tx", 6), sort_order: 2 },
    { cancer_id: id("cancer", 3), treatment_id: id("tx", 4), sort_order: 3 },
    { cancer_id: id("cancer", 3), treatment_id: id("tx", 5), sort_order: 4 },
    { cancer_id: id("cancer", 4), treatment_id: id("tx", 1), sort_order: 1 },
    { cancer_id: id("cancer", 4), treatment_id: id("tx", 6), sort_order: 2 },
    { cancer_id: id("cancer", 5), treatment_id: id("tx", 1), sort_order: 1 },
    { cancer_id: id("cancer", 5), treatment_id: id("tx", 2), sort_order: 2 },
    { cancer_id: id("cancer", 5), treatment_id: id("tx", 3), sort_order: 3 },
  ];

  const question_treatments: Array<{
    question_id: string;
    treatment_id: string;
    sort_order: number;
  }> = [
    { question_id: id("q", 1), treatment_id: id("tx", 1), sort_order: 1 },
    { question_id: id("q", 1), treatment_id: id("tx", 4), sort_order: 2 },
    { question_id: id("q", 1), treatment_id: id("tx", 5), sort_order: 3 },
    { question_id: id("q", 3), treatment_id: id("tx", 1), sort_order: 1 },
    { question_id: id("q", 3), treatment_id: id("tx", 6), sort_order: 2 },
    { question_id: id("q", 3), treatment_id: id("tx", 4), sort_order: 3 },
    { question_id: id("q", 6), treatment_id: id("tx", 7), sort_order: 1 },
    { question_id: id("q", 6), treatment_id: id("tx", 1), sort_order: 2 },
    { question_id: id("q", 6), treatment_id: id("tx", 2), sort_order: 3 },
    { question_id: id("q", 9), treatment_id: id("tx", 1), sort_order: 1 },
    { question_id: id("q", 15), treatment_id: id("tx", 2), sort_order: 1 },
    { question_id: id("q", 15), treatment_id: id("tx", 3), sort_order: 2 },
    { question_id: id("q", 21), treatment_id: id("tx", 5), sort_order: 1 },
    { question_id: id("q", 21), treatment_id: id("tx", 4), sort_order: 2 },
  ];

  // Densify: every question gets at least two cancer-linked treatments.
  for (const question of questions) {
    const existing = new Set(
      question_treatments
        .filter((qt) => qt.question_id === question.id)
        .map((qt) => qt.treatment_id)
    );
    const cancerTx = cancer_treatments
      .filter((ct) => ct.cancer_id === question.cancer_id)
      .map((ct) => ct.treatment_id);
    let sort = existing.size;
    for (const treatmentId of cancerTx) {
      if (existing.has(treatmentId)) continue;
      question_treatments.push({
        question_id: question.id,
        treatment_id: treatmentId,
        sort_order: sort++,
      });
      existing.add(treatmentId);
      if (existing.size >= 2) break;
    }
  }

  const question_stories: Array<{
    question_id: string;
    story_id: string;
    sort_order: number;
  }> = [
    { question_id: id("q", 1), story_id: id("story", 1), sort_order: 1 },
    { question_id: id("q", 2), story_id: id("story", 1), sort_order: 1 },
    { question_id: id("q", 3), story_id: id("story", 1), sort_order: 1 },
    { question_id: id("q", 3), story_id: id("story", 6), sort_order: 2 },
    { question_id: id("q", 21), story_id: id("story", 6), sort_order: 1 },
    { question_id: id("q", 5), story_id: id("story", 7), sort_order: 1 },
    { question_id: id("q", 6), story_id: id("story", 2), sort_order: 1 },
    { question_id: id("q", 9), story_id: id("story", 3), sort_order: 1 },
    { question_id: id("q", 13), story_id: id("story", 4), sort_order: 1 },
    { question_id: id("q", 15), story_id: id("story", 5), sort_order: 1 },
    { question_id: id("q", 7), story_id: id("story", 2), sort_order: 1 },
    { question_id: id("q", 20), story_id: id("story", 5), sort_order: 1 },
  ];

  for (const question of questions) {
    const hasStory = question_stories.some(
      (qs) => qs.question_id === question.id
    );
    if (hasStory) continue;
    const story = stories.find((s) => s.cancer_id === question.cancer_id);
    if (story) {
      question_stories.push({
        question_id: question.id,
        story_id: story.id,
        sort_order: 1,
      });
    }
  }

  const related_questions: Array<{
    from_id: string;
    to_id: string;
    sort_order: number;
  }> = [
    { from_id: id("q", 1), to_id: id("q", 2), sort_order: 1 },
    { from_id: id("q", 1), to_id: id("q", 3), sort_order: 2 },
    { from_id: id("q", 1), to_id: id("q", 21), sort_order: 3 },
    { from_id: id("q", 2), to_id: id("q", 1), sort_order: 1 },
    { from_id: id("q", 2), to_id: id("q", 16), sort_order: 2 },
    { from_id: id("q", 6), to_id: id("q", 7), sort_order: 1 },
    { from_id: id("q", 6), to_id: id("q", 8), sort_order: 2 },
    { from_id: id("q", 9), to_id: id("q", 10), sort_order: 1 },
    { from_id: id("q", 9), to_id: id("q", 11), sort_order: 2 },
    { from_id: id("q", 14), to_id: id("q", 15), sort_order: 1 },
    { from_id: id("q", 14), to_id: id("q", 20), sort_order: 2 },
    { from_id: id("q", 3), to_id: id("q", 1), sort_order: 1 },
    { from_id: id("q", 3), to_id: id("q", 4), sort_order: 2 },
  ];

  for (const question of questions) {
    const existing = new Set(
      related_questions
        .filter((rq) => rq.from_id === question.id)
        .map((rq) => rq.to_id)
    );
    const peers = questions.filter(
      (q) => q.cancer_id === question.cancer_id && q.id !== question.id
    );
    let sort = existing.size;
    for (const peer of peers) {
      if (existing.has(peer.id)) continue;
      related_questions.push({
        from_id: question.id,
        to_id: peer.id,
        sort_order: sort++,
      });
      existing.add(peer.id);
      if (existing.size >= 3) break;
    }
  }

  const story_treatments = [
    { story_id: id("story", 1), treatment_id: id("tx", 1), sort_order: 1 },
    { story_id: id("story", 6), treatment_id: id("tx", 4), sort_order: 1 },
    { story_id: id("story", 6), treatment_id: id("tx", 5), sort_order: 2 },
    { story_id: id("story", 6), treatment_id: id("tx", 1), sort_order: 3 },
    { story_id: id("story", 7), treatment_id: id("tx", 5), sort_order: 1 },
    { story_id: id("story", 7), treatment_id: id("tx", 2), sort_order: 2 },
    { story_id: id("story", 2), treatment_id: id("tx", 7), sort_order: 1 },
    { story_id: id("story", 2), treatment_id: id("tx", 1), sort_order: 2 },
    { story_id: id("story", 3), treatment_id: id("tx", 1), sort_order: 1 },
    { story_id: id("story", 5), treatment_id: id("tx", 2), sort_order: 1 },
    { story_id: id("story", 5), treatment_id: id("tx", 3), sort_order: 2 },
  ];

  const treatment_countries = [
    { treatment_id: id("tx", 3), country_code: "US" },
    { treatment_id: id("tx", 3), country_code: "DE" },
    { treatment_id: id("tx", 3), country_code: "JP" },
    { treatment_id: id("tx", 3), country_code: "KR" },
    { treatment_id: id("tx", 1), country_code: "US" },
    { treatment_id: id("tx", 1), country_code: "DE" },
    { treatment_id: id("tx", 1), country_code: "SG" },
    { treatment_id: id("tx", 4), country_code: "US" },
    { treatment_id: id("tx", 4), country_code: "GB" },
    { treatment_id: id("tx", 4), country_code: "JP" },
    { treatment_id: id("tx", 5), country_code: "US" },
    { treatment_id: id("tx", 5), country_code: "CN" },
    { treatment_id: id("tx", 7), country_code: "US" },
    { treatment_id: id("tx", 7), country_code: "GB" },
    { treatment_id: id("tx", 7), country_code: "AU" },
  ];

  /** Lung Tier-1 AI Entries — Entry-specific References (Source Mapping v1.0) */
  const content_sources = [
    ...questions.flatMap((q, index) => {
      const n = Number(q.id.split("-").pop());
      if (LUNG_FLAGSHIP_QUESTION_NS.includes(n)) {
        const sourceNs = LUNG_FLAGSHIP_SOURCES_BY_QUESTION_N[n] ?? [];
        return sourceNs.map((srcN) => ({
          entity_type: "question" as const,
          entity_id: q.id,
          source_id: id("src", srcN),
        }));
      }
      const primary = id("src", (index % 4) + 1);
      const secondary = id("src", ((index + 3) % 4) + 5);
      return [
        {
          entity_type: "question" as const,
          entity_id: q.id,
          source_id: primary,
        },
        {
          entity_type: "question" as const,
          entity_id: q.id,
          source_id: secondary,
        },
      ];
    }),
    ...cancers.map((c) => ({
      entity_type: "cancer" as const,
      entity_id: c.id,
      source_id: id("src", 3),
    })),
    ...cancers.map((c) => ({
      entity_type: "cancer" as const,
      entity_id: c.id,
      source_id: id("src", 5),
    })),
    ...treatments.map((t) => ({
      entity_type: "treatment" as const,
      entity_id: t.id,
      source_id: id("src", 2),
    })),
    ...treatments.map((t) => ({
      entity_type: "treatment" as const,
      entity_id: t.id,
      source_id: id("src", 6),
    })),
    ...stories.map((s) => ({
      entity_type: "story" as const,
      entity_id: s.id,
      source_id: id("src", 1),
    })),
    ...stories.map((s) => ({
      entity_type: "story" as const,
      entity_id: s.id,
      source_id: id("src", 7),
    })),
  ];

  // Decision Map is built from Cancer Decision OS (active Moments only)
  const decision_maps = [
    buildDecisionMapFromOs(
      LUNG_CANCER_DECISION_OS,
      id("cancer", 1),
      id("map", 1)
    ),
  ];

  return {
    cancers,
    questions,
    treatments,
    stories,
    global_care_options,
    countries,
    sources,
    decision_topics,
    decision_maps,
    cancer_treatments,
    question_treatments,
    question_stories,
    related_questions,
    story_treatments,
    treatment_countries,
    content_sources,
  };
}
