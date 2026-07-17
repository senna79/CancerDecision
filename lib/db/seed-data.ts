import type { KnowledgeGraphStore } from "@/types/database";
import { id, now } from "./ids";

const ts = now();
const reviewed = "2026-06-15T00:00:00.000Z";

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
      title: "Should I get a second opinion after a lung cancer diagnosis?",
      slug: "should-i-get-second-opinion-after-lung-cancer-diagnosis",
      category: "second_opinion",
      summary:
        "A second opinion may be especially valuable when the diagnosis is complex, treatment involves multiple reasonable options, or a major procedure is being considered. It does not mean your first doctor is wrong — it helps confirm the diagnosis and clarify available choices. Timing matters: urgent clinical risk can outweigh a brief delay for review, and many reviews can start with remote records.",
      why: "Patients fear missing a better path, feel pressure to decide quickly, or wonder whether their local team has the right specialty mix. The useful question is not “should everyone get a second opinion?” but “when is the review likely to change the plan — and when is it unlikely to?”",
      factors: [
        "Whether staging and pathology workup are complete",
        "Availability and turnaround of molecular or biomarker results",
        "Complexity of the recommended plan and specialty mix required",
        "Whether another pathology review could change options",
        "How urgent treatment is versus the value of a brief second review",
        "Whether a remote records review can answer the question before travel",
      ],
      doctorQs: [
        "Would another pathology review change my treatment plan?",
        "Are there alternative approaches for my stage and biomarkers?",
        "What are the risks of waiting a short time for a second opinion?",
        "Should a multidisciplinary tumor board review my case before starting?",
        "Which records should I send for a remote second opinion today?",
      ],
    },
    {
      n: 2,
      cancer: 1,
      title: "What should I do first after a lung cancer diagnosis?",
      slug: "what-decisions-matter-most-after-new-lung-cancer-diagnosis",
      category: "diagnosis",
      summary:
        "After a new lung cancer diagnosis, the highest-value first moves are usually: confirm the diagnosis and subtype, finish staging, make sure tissue is adequate for biomarkers, and clarify treatment intent. Ask which tests are still outstanding and which choices are time-sensitive versus deliberately paced — so you know what to do next, not only what cancer is.",
      why: "Newly diagnosed patients face many appointments at once. Without a map of foundational decisions, it is easy to confuse urgent logistics with irreversible treatment choices.",
      factors: [
        "Completeness of pathology and staging",
        "Biomarker testing turnaround and tissue adequacy",
        "Performance status and comorbidities",
        "Local specialist and tumor-board availability",
        "Caregiver support and treatment logistics",
        "Which next step would actually change the first treatment decision",
      ],
      doctorQs: [
        "Which tests are still needed before a final plan?",
        "What is the treatment intent: curative or disease control?",
        "Which decision cannot wait, and which can?",
        "Do we have enough tissue for the biomarker panel you recommend?",
      ],
    },
    {
      n: 3,
      cancer: 1,
      title: "How do I compare lung cancer treatment options?",
      slug: "how-to-compare-surgery-and-systemic-therapy-lung-cancer",
      category: "treatment",
      summary:
        "Comparing lung cancer treatment options depends on stage, resectability, biomarkers, and overall health — not on which specialty speaks first. Surgery may lead in selected localized cases; systemic therapy (targeted drugs, immunotherapy, or chemotherapy) may lead when disease is advanced or when systemic therapy before surgery is preferred. Compare goals, sequencing, recovery, and what information is still missing before locking a path.",
      why: "Patients often hear both surgical and medical oncology perspectives and need a structured way to compare timing, side effects, and what each option is trying to achieve.",
      factors: [
        "Stage and current resectability",
        "Molecular profile and whether results should arrive before locking a sequence",
        "Expected recovery, lung function, and daily-life impact",
        "Evidence for neoadjuvant or adjuvant approaches in your setting",
        "Personal priorities around speed, durability, and side effects",
      ],
      doctorQs: [
        "Is my tumor currently resectable?",
        "Would systemic therapy before surgery change outcomes or options?",
        "What happens if surgery is deferred briefly for biomarker results?",
        "If we disagree across specialties, can we review the case together?",
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
        "Lung cancer care abroad is worth considering when a specific capability — technique, trial, or specialty review — is missing locally, not as a default upgrade. Start by naming the capability gap in one sentence, try remote review before travel when safe, and confirm home follow-up and complication coverage before booking flights.",
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
      title: "Do I need biomarker testing before starting lung cancer treatment?",
      slug: "do-i-need-biomarker-testing-before-lung-cancer-treatment",
      category: "diagnosis",
      summary:
        "For many non-small cell lung cancers, biomarker results can change which first-line treatments are considered. The decision is whether a short, managed wait for results is safer than starting immediately — and what would change if a targetable alteration is found. Incomplete tissue or urgent symptoms can shift that balance; ask your team which result would actually change the plan.",
      why: "Patients fear delay, while incomplete molecular data can lead to a less tailored first line.",
      factors: [
        "Histology subtype",
        "Tissue adequacy",
        "Turnaround time",
        "Disease pace and symptoms",
        "Local testing panel breadth",
      ],
      doctorQs: [
        "Which biomarkers are essential before first-line therapy?",
        "Is liquid biopsy useful if tissue is limited?",
        "What is the risk of starting before results return?",
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
        "Who manages complications after I return?",
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
      decision_context: string;
      when_this_may_help: string[];
      when_it_may_not_help: string[];
      timing_considerations: string[];
      options_and_tradeoffs: string[];
      records_to_prepare: string[];
      next_steps: string[];
      if_opinions_conflict: string[];
      body: string;
      seo_title: string;
      seo_description: string;
      seo_keywords: string[];
    }
  > = {
    2: {
      decision_context:
        "After a new lung cancer diagnosis, the job is not to learn every fact at once — it is to sequence the decisions that change the first treatment plan. Confirm what is already known, which tests are still outstanding, and which choices are time-sensitive versus deliberately paced. Biomarker workup, treatment comparison, and a second-opinion review can run in parallel once the foundation is clear.",
      when_this_may_help: [
        "You recently received a lung cancer diagnosis",
        "Pathology, staging, or biomarker results are still incomplete",
        "You cannot tell which next test would actually change first-line therapy",
        "Different clinicians emphasize different first steps",
        "You need a shared checklist with caregivers before major choices",
      ],
      when_it_may_not_help: [
        "Acute symptoms require immediate stabilization before elective sequencing",
        "A clearly time-critical intervention has already been explained, agreed, and started",
      ],
      timing_considerations: [
        "Ask which decisions cannot wait overnight versus which can wait for a key test result",
        "A short pause to finish staging or biomarkers is different from an open-ended delay",
        "If symptoms worsen (breathing, bleeding, severe pain), seek urgent care — do not wait for elective sequencing",
        "Write a dated checklist so “waiting” has an end point",
      ],
      options_and_tradeoffs: [
        "Benefit — Finish staging first: reduces guesswork before locking a path",
        "Trade-off — Finish staging first: may briefly delay treatment start",
        "Benefit — Start local therapy sooner: can ease symptoms or anxiety",
        "Trade-off — Start sooner: may precede incomplete molecular data",
        "Benefit — Prioritize tissue adequacy for biomarkers: can redirect systemic options",
        "Trade-off — Repeat biopsy or wait: added procedures and calendar delay",
      ],
      records_to_prepare: [
        "Pathology report and slides if available",
        "Imaging reports and disks/links (CT, PET, MRI as applicable)",
        "Operative or biopsy procedure notes",
        "Current medication list and major comorbidities",
        "A one-page list of what each clinician has recommended so far",
      ],
      next_steps: [
        "List every outstanding test and its due date",
        "Ask which single result would change the first treatment decision",
        "Confirm whether tissue is adequate for the recommended biomarker panel",
        "Decide whether a brief second-opinion records review should run in parallel",
      ],
      if_opinions_conflict: [
        "Ask each clinician to name the exact disagreement (staging, resectability, sequencing, or drug choice)",
        "Request a multidisciplinary tumor-board framing of the conflict",
        "Clarify which decision is reversible versus irreversible",
      ],
      body: "Think in checkpoints, not in panic. Diagnosis confirmation, staging completeness, and biomarker readiness are foundation decisions. Treatment comparison and second opinion are often parallel forks — not a forced queue you must finish before thinking about alternatives.",
      seo_title: "What Should I Do First After a Lung Cancer Diagnosis?",
      seo_description:
        "A decision guide for newly diagnosed lung cancer: first checkpoints, what can wait, and what to do next — not an encyclopedia page.",
      seo_keywords: [
        "what should I do first after lung cancer diagnosis",
        "newly diagnosed lung cancer next steps",
        "lung cancer decision guide",
      ],
    },
    21: {
      decision_context:
        "For many non-small cell lung cancers, biomarker results can redirect first-line therapy. The real choice is whether waiting for results is safer than starting immediately — and what would change if a targetable alteration or immunotherapy marker is found.",
      when_this_may_help: [
        "Non-small cell histology is confirmed or strongly suspected",
        "Tissue adequacy is uncertain or the panel is incomplete",
        "Targeted therapy or immunotherapy pathways may depend on markers",
        "You want to avoid locking a first line before molecular data returns",
        "Surgery versus systemic sequencing might change with results",
      ],
      when_it_may_not_help: [
        "Disease pace or symptoms require urgent systemic therapy before results — and your team explains why",
        "Your care team already has a complete panel with actionable results",
        "Small-cell pathways where the biomarker decision frame differs",
      ],
      timing_considerations: [
        "Ask for the expected turnaround date and what happens if results are late",
        "A time-boxed wait (with a revisit date) is safer than an indefinite pause",
        "If the team says starting now is required for clinical urgency, document why waiting is riskier",
        "Ask whether liquid biopsy can shorten the wait when tissue is limited",
      ],
      options_and_tradeoffs: [
        "Benefit — Wait for tissue-based panel: more complete matching of first-line options",
        "Trade-off — Wait: short calendar delay and anxiety while results return",
        "Benefit — Add liquid biopsy if tissue is limited: may return faster in some settings",
        "Trade-off — Liquid biopsy: can miss alterations that tissue would catch",
        "Benefit — Start therapy now for clinical urgency: addresses immediate risk",
        "Trade-off — Start now: may need later adjustment when markers arrive",
      ],
      records_to_prepare: [
        "Pathology diagnosis and specimen adequacy notes",
        "Any molecular reports already completed",
        "Imaging that shows disease pace",
        "Prior cancer treatment history",
      ],
      next_steps: [
        "Confirm the exact biomarker panel ordered and expected turnaround",
        "Ask whether liquid biopsy is useful if tissue is limited",
        "Document what would change if a targetable alteration is found",
        "Agree on a date to revisit the plan if results are delayed",
      ],
      if_opinions_conflict: [
        "Ask whether the disagreement is about waiting versus starting, or about which panel to order",
        "Request the clinical risk of a short wait in plain language",
        "If needed, get a thoracic oncology second review focused only on sequencing",
      ],
      body: "Biomarker testing is a decision about information value versus delay. Ask what result would change the plan — if nothing would change, waiting may have less value. If a positive EGFR, ALK, ROS1, or other finding would redirect therapy, protecting that information can be worth a managed wait.",
      seo_title: "Do I Need Biomarker Testing Before Lung Cancer Treatment?",
      seo_description:
        "When to wait for molecular results before starting lung cancer therapy — and when waiting may not change the plan.",
      seo_keywords: [
        "biomarker testing before lung cancer treatment",
        "molecular testing lung cancer",
        "wait for biomarkers before therapy",
      ],
    },
    3: {
      decision_context:
        "This decision compares local surgical control with systemic strategies (targeted therapy, immunotherapy, chemotherapy), including whether systemic therapy should come before surgery. Stage, resectability, biomarkers, and personal priorities all matter — not which specialty speaks first.",
      when_this_may_help: [
        "You have been offered more than one reasonable treatment path",
        "Stage and resectability are still being interpreted",
        "Biomarkers may change sequencing (neoadjuvant vs surgery-first)",
        "Surgery and medical oncology recommendations differ",
        "Major surgery is on the table and you want trade-offs in plain language",
      ],
      when_it_may_not_help: [
        "Emergency complications require immediate intervention",
        "Disease extent already clearly places you outside surgical pathways",
      ],
      timing_considerations: [
        "Ask whether a brief wait for biomarkers or a joint discussion changes sequencing",
        "Clarify which step is irreversible (e.g., major resection) versus adjustable",
        "Do not delay emergency care for elective comparison",
        "Set a decision date so comparison does not become endless research",
      ],
      options_and_tradeoffs: [
        "Benefit — Surgery-led path: strong local control in selected cases",
        "Trade-off — Surgery-led: recovery time, lung-function impact, operative risk",
        "Benefit — Systemic-first / neoadjuvant path: may improve selection or response before resection",
        "Trade-off — Systemic-first: delays resection; side effects may affect operability timing",
        "Benefit — Systemic-led non-surgical path: appropriate when resection is not the goal",
        "Trade-off — Non-surgical path: different side-effect profile and follow-up intensity",
      ],
      records_to_prepare: [
        "Staging imaging and multidisciplinary notes",
        "Pulmonary function tests if surgery is considered",
        "Biomarker results",
        "Comorbidity and performance-status summary",
      ],
      next_steps: [
        "Ask for resectability in plain language",
        "Ask whether waiting briefly for biomarkers changes sequencing",
        "Compare expected recovery and daily-life impact for each path",
        "Request a joint surgical/medical oncology discussion if advice diverges",
      ],
      if_opinions_conflict: [
        "Write down each specialty's goal (cure, control, symptom relief)",
        "Ask what evidence would change each recommendation",
        "Use tumor board or a second opinion focused on sequencing, not hospital brand",
      ],
      body: "Treatment comparison is a fork, not a verdict. Two reasonable teams can disagree when stage interpretation, biomarker timing, or risk tolerance differ. Your job is to make the disagreement concrete: what is the goal, what information is missing, and which step is irreversible.",
      seo_title: "How Do I Compare Lung Cancer Treatment Options?",
      seo_description:
        "Compare lung cancer treatment paths — surgery-led vs systemic — with trade-offs, timing, and questions for your oncology visit.",
      seo_keywords: [
        "lung cancer treatment options comparison",
        "surgery vs systemic therapy lung cancer",
        "compare lung cancer treatments",
      ],
    },
    1: {
      decision_context:
        "A second opinion is a structured review of pathology, staging, and treatment sequencing. It matters most when the diagnosis is complex, multiple treatment options exist, major surgery is being considered, or a rare subtype is involved. It is less useful when data are already complete and multidisciplinary advice is concordant — or when delay clearly increases clinical risk.",
      when_this_may_help: [
        "You recently received a diagnosis and want confirmation before major steps",
        "Treatment has multiple reasonable options (surgery vs systemic paths)",
        "Major surgery or another irreversible step is being considered",
        "A rare subtype, complex anatomy, or incomplete biomarkers is involved",
        "Specialists disagree on sequencing and you need a structured comparison",
      ],
      when_it_may_not_help: [
        "Delay would clearly worsen urgent clinical risk and your team explains why",
        "You already have concordant multidisciplinary recommendations with complete data",
        "The only disagreement is preference/style with no material outcome difference",
      ],
      timing_considerations: [
        "Ask: what is the risk of waiting a short, defined time for a records review?",
        "Remote review can often run in parallel with local care so treatment is not abandoned",
        "Set a time box (days/weeks) so the second opinion does not drift indefinitely",
        "If the team says delay is unsafe, prioritize stabilization and revisit review after",
      ],
      options_and_tradeoffs: [
        "Benefit — Remote records review: confirm diagnosis and alternatives with low travel burden",
        "Trade-off — Remote review: depends on complete records; limited exam context",
        "Benefit — In-person specialty visit: richer exam and team access",
        "Trade-off — In-person: more time, cost, and scheduling friction",
        "Benefit — Pathology-only re-review: focused check on diagnosis/subtype",
        "Trade-off — Pathology-only: may not resolve full treatment sequencing",
        "Benefit — Full treatment-plan second opinion: broader comparison before irreversible steps",
        "Trade-off — Full plan review: heavier preparation and emotional load",
      ],
      records_to_prepare: [
        "Pathology report and slides if requested",
        "All key imaging with reports",
        "Biopsy/operative notes",
        "Current recommended plan in writing",
        "Medication and comorbidity list",
      ],
      next_steps: [
        "Decide whether the question is pathology, staging, sequencing, or all three",
        "Ask your current team which records to send today",
        "Set a time box so review does not drift indefinitely",
        "Return with a written comparison of agreements and disagreements",
      ],
      if_opinions_conflict: [
        "Ask both teams to list what would change their advice",
        "Separate facts (stage, markers) from judgment (preferred sequence)",
        "Consider a third multidisciplinary review only if conflict remains high-stakes",
      ],
      body: "Trust comes from honesty about when a second opinion is worth it — and when it may not change the decision. Use it to reduce uncertainty before irreversible steps, not as a default upgrade or a rejection of your current team.",
      seo_title: "Should I Get a Second Opinion After Lung Cancer Diagnosis?",
      seo_description:
        "When a lung cancer second opinion helps, when it may not, timing if you wait, and how to prepare — a decision entry, not a loyalty test.",
      seo_keywords: [
        "should I get a second opinion lung cancer",
        "second opinion after lung cancer diagnosis",
        "lung cancer second opinion timing",
      ],
    },
    5: {
      decision_context:
        "International care is a branch of the decision path when a specific capability, trial, or second-opinion expertise is missing locally — not a default upgrade. Define the capability gap first, then compare remote review versus travel, total episode cost, and home follow-up continuity.",
      when_this_may_help: [
        "A defined technique, trial, or specialty review is unavailable locally",
        "Remote second opinion suggests a capability gap worth exploring",
        "You can sustain travel, lodging, companion support, and follow-up logistics",
        "Local and foreign recommendations differ on a material clinical point",
      ],
      when_it_may_not_help: [
        "Local care already offers an equivalent evidence-aligned option",
        "Travel would interrupt urgent therapy without clear added value",
        "No home follow-up plan exists after return",
      ],
      timing_considerations: [
        "Try remote international review before booking travel when clinically safe",
        "Do not interrupt urgent local therapy for elective travel without a clear capability gap",
        "Confirm who manages complications after you return before you leave",
        "Compare total episode timing including repeat visits, not only the first appointment abroad",
      ],
      options_and_tradeoffs: [
        "Benefit — Remote international review only: lower cost/burden; clarifies whether travel is needed",
        "Trade-off — Remote only: limited exam; may still leave logistics unanswered",
        "Benefit — Travel for a specific procedure or trial: potential access gain",
        "Trade-off — Travel: continuity risk, cost, and complication coverage abroad",
        "Benefit — Stay local with clarified sequencing: strongest continuity",
        "Trade-off — Stay local: may lack a niche capability if the gap is real",
      ],
      records_to_prepare: [
        "Complete imaging and pathology package",
        "Written one-sentence question you want the foreign center to answer",
        "Insurance / self-pay estimate worksheet",
        "Home-team follow-up contact plan",
      ],
      next_steps: [
        "Define the exact capability gap in one sentence",
        "Try remote review before booking travel when safe",
        "Compare total episode cost including repeat visits",
        "Confirm who manages complications after you return",
      ],
      if_opinions_conflict: [
        "Ask whether the abroad recommendation changes survival, side effects, or only convenience",
        "Have your local team respond to the foreign plan in writing",
        "Do not travel until continuity and emergency coverage are clear",
      ],
      body: "Cross-border care should answer a specific clinical question. If you cannot name the capability gap, pause before booking flights. Continuity after return is part of the decision — not an afterthought.",
      seo_title: "When Is Lung Cancer Treatment Abroad Worth Considering?",
      seo_description:
        "When seeking lung cancer care abroad may help, when it may not, and what to decide before travel — capability gap first.",
      seo_keywords: [
        "lung cancer treatment abroad",
        "when is cancer care abroad worth it",
        "international lung cancer treatment",
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
        "Home follow-up and complication coverage are part of the decision",
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
      body: "Cross-border care is a decision about a specific capability gap, not a general upgrade. Start with remote records review, define the exact question a foreign center will answer, and plan home follow-up before travel.",
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

  const content_sources = [
    ...questions.flatMap((q, index) => {
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
    // Flagship second-opinion page gets extra trust references
    {
      entity_type: "question" as const,
      entity_id: id("q", 1),
      source_id: id("src", 4),
    },
    {
      entity_type: "question" as const,
      entity_id: id("q", 1),
      source_id: id("src", 8),
    },
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

  const decision_maps = [
    {
      id: id("map", 1),
      cancer_id: id("cancer", 1),
      title: "Lung Cancer Decision Map",
      intro:
        "A branching journey from newly diagnosed to the next decision. Paths can fork — biomarkers, treatment comparison, and second opinion often run in parallel. Each node links to decision questions, treatment comparisons, and illustrative scenarios — not a personal care plan.",
      nodes: [
        {
          id: "node-diagnosis",
          label: "1. Newly diagnosed",
          state_label: "Diagnosis confirmed",
          summary:
            "Confirm what is known, which tests are outstanding, and which decisions are time-sensitive. From here the path forks.",
          sort_order: 1,
          question_slugs: [
            "what-decisions-matter-most-after-new-lung-cancer-diagnosis",
          ],
          treatment_slugs: [],
          story_slugs: ["choosing-second-opinion-before-lung-surgery"],
          next_node_ids: [
            "node-biomarkers",
            "node-compare",
            "node-second-opinion",
          ],
        },
        {
          id: "node-biomarkers",
          label: "2. Confirm subtype & biomarkers",
          state_label: "Biomarker testing",
          summary:
            "Make sure pathology and molecular testing are complete enough to shape first-line choices — or decide when waiting is not safe.",
          sort_order: 2,
          question_slugs: [
            "do-i-need-biomarker-testing-before-lung-cancer-treatment",
          ],
          treatment_slugs: ["targeted-therapy", "immunotherapy"],
          story_slugs: ["biomarker-result-changed-lung-cancer-treatment-plan"],
          next_node_ids: ["node-compare", "node-second-opinion"],
        },
        {
          id: "node-compare",
          label: "3. Compare treatment paths",
          state_label: "Treatment comparison",
          summary:
            "Weigh surgery-led versus systemic-led sequencing using stage, markers, and priorities. This can run alongside biomarker workup.",
          sort_order: 3,
          question_slugs: [
            "how-to-compare-surgery-and-systemic-therapy-lung-cancer",
          ],
          treatment_slugs: [
            "surgery",
            "chemotherapy",
            "immunotherapy",
            "targeted-therapy",
          ],
          story_slugs: [
            "choosing-second-opinion-before-lung-surgery",
            "biomarker-result-changed-lung-cancer-treatment-plan",
          ],
          next_node_ids: [
            "node-second-opinion",
            "node-global",
            "node-costs",
          ],
        },
        {
          id: "node-second-opinion",
          label: "4. Second opinion checkpoint",
          state_label: "Second opinion",
          summary:
            "Decide whether a pathology, staging, or sequencing review would reduce uncertainty before irreversible steps.",
          sort_order: 4,
          question_slugs: [
            "should-i-get-second-opinion-after-lung-cancer-diagnosis",
          ],
          treatment_slugs: ["surgery"],
          story_slugs: ["choosing-second-opinion-before-lung-surgery"],
          next_node_ids: ["node-compare", "node-global", "node-costs"],
        },
        {
          id: "node-global",
          label: "5. Local vs international branch",
          state_label: "International option",
          summary:
            "Only explore cross-border care when a specific capability, trial, or review is missing locally.",
          sort_order: 5,
          question_slugs: ["when-to-consider-lung-cancer-care-abroad"],
          treatment_slugs: ["immunotherapy", "targeted-therapy"],
          story_slugs: ["comparing-local-and-international-lung-cancer-options"],
          next_node_ids: ["node-costs"],
          optional: true,
        },
        {
          id: "node-costs",
          label: "6. Clarify costs & logistics",
          state_label: "Costs & logistics",
          summary:
            "Estimate the full episode — tests, drugs, travel, time away — before locking a pathway.",
          sort_order: 6,
          question_slugs: ["lung-cancer-treatment-costs-what-to-ask"],
          treatment_slugs: [],
          story_slugs: ["comparing-local-and-international-lung-cancer-options"],
          next_node_ids: [],
          optional: true,
        },
      ],
    },
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
