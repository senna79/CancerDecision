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
        "Many patients seek a second opinion after a lung cancer diagnosis to confirm staging, review pathology, and compare treatment sequencing. A second opinion is especially useful when surgery versus systemic therapy is unclear, biomarker results are incomplete, or the recommended plan differs across specialists. It does not mean distrusting your current team—it is a structured way to reduce uncertainty before irreversible decisions.",
      why: "Lung cancer plans can change based on staging details, molecular findings, and multidisciplinary interpretation. Patients often feel pressure to start quickly and want confidence that key alternatives were considered.",
      factors: [
        "Cancer stage and whether staging workup is complete",
        "Availability of molecular or biomarker results",
        "Treatment complexity and specialty mix required",
        "Whether pathology review could change the plan",
        "Time sensitivity versus the value of another review",
      ],
      doctorQs: [
        "Would another pathology review change my treatment plan?",
        "Are there alternative treatment approaches for my stage and biomarkers?",
        "Should a multidisciplinary tumor board review my case before starting?",
      ],
    },
    {
      n: 2,
      cancer: 1,
      title: "What decisions matter most after a new lung cancer diagnosis?",
      slug: "what-decisions-matter-most-after-new-lung-cancer-diagnosis",
      category: "diagnosis",
      summary:
        "Early decisions usually focus on confirming the exact diagnosis, completing staging, obtaining adequate tissue for biomarkers, and clarifying treatment intent. Patients benefit from asking which tests are still outstanding and which choices are time-sensitive versus deliberately paced.",
      why: "Newly diagnosed patients face many appointments at once and need a clear map of which decisions are foundational.",
      factors: [
        "Completeness of pathology and staging",
        "Biomarker testing turnaround",
        "Performance status and comorbidities",
        "Local specialist availability",
        "Support system for treatment logistics",
      ],
      doctorQs: [
        "Which tests are still needed before a final plan?",
        "What is the treatment intent: curative or disease control?",
        "Which decision cannot wait, and which can?",
      ],
    },
    {
      n: 3,
      cancer: 1,
      title: "How do I compare surgery and systemic therapy for lung cancer?",
      slug: "how-to-compare-surgery-and-systemic-therapy-lung-cancer",
      category: "treatment",
      summary:
        "Comparison depends on stage, resectability, biomarkers, and overall health. Surgery may be central in localized disease, while systemic therapy—including targeted drugs, immunotherapy, or chemotherapy—may lead when disease is advanced or when neoadjuvant strategies are preferred.",
      why: "Patients often hear both surgical and medical oncology perspectives and need a structured way to compare goals, timing, and side effects.",
      factors: [
        "Stage and resectability",
        "Molecular profile",
        "Expected recovery and lung function",
        "Evidence for neoadjuvant or adjuvant approaches",
        "Patient priorities around speed versus durability",
      ],
      doctorQs: [
        "Is my tumor currently resectable?",
        "Would systemic therapy before surgery improve outcomes?",
        "What happens if surgery is deferred for biomarker results?",
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
        "Cross-border care may be considered for specialized techniques, trials, or second-opinion pathology review. Evaluate continuity of care, language, records transfer, and whether the expected benefit justifies travel burden.",
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
        "For many non-small cell lung cancers, biomarker results can redirect therapy toward targeted drugs or immunotherapy strategies. Ask whether waiting for results is safer than starting immediately, and whether adequate tissue is available.",
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
    body: null,
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
        "A patient with newly diagnosed lung cancer wanted clarity before agreeing to resection.",
      initial_diagnosis:
        "Suspected early-stage non-small cell lung cancer after imaging and biopsy.",
      decision_challenge:
        "Whether to proceed immediately with surgery locally or obtain a thoracic oncology second opinion and complete biomarker testing first.",
      options_considered:
        "Immediate local surgery; second opinion at a high-volume center; waiting for full molecular results before final sequencing.",
      why_compared:
        "The patient wanted to know if neoadjuvant therapy or a different surgical approach might be recommended.",
      final_decision:
        "Completed remote second opinion and biomarker testing, then proceeded with a coordinated local plan.",
      lessons_learned:
        "A second opinion did not require abandoning the local team; it clarified which tests should finish before irreversible steps.",
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
      id: id("story", 2),
      cancer_id: id("cancer", 2),
      title: "Weighing active surveillance for prostate cancer",
      slug: "weighing-active-surveillance-prostate-cancer",
      country: "United Kingdom",
      age_range: "65-74",
      decision_topic: "surveillance versus treatment",
      background:
        "A patient with lower-risk prostate cancer wanted to avoid treatment side effects if safely possible.",
      initial_diagnosis:
        "Lower-risk prostate cancer based on PSA, MRI, and biopsy findings.",
      decision_challenge:
        "Whether active surveillance was appropriate or whether early definitive therapy would be wiser.",
      options_considered:
        "Active surveillance; surgery; radiation therapy.",
      why_compared:
        "The patient prioritized urinary and sexual function while remaining attentive to cancer risk.",
      final_decision:
        "Chose active surveillance with a written trigger plan for reassessment.",
      lessons_learned:
        "Clear monitoring triggers reduced anxiety more than vague reassurance.",
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
        "A patient eligible for either breast-conserving surgery or mastectomy needed to align medical options with personal priorities.",
      initial_diagnosis: "Early-stage hormone receptor-positive breast cancer.",
      decision_challenge:
        "Choosing between lumpectomy with radiation and mastectomy with reconstruction timing questions.",
      options_considered:
        "Lumpectomy plus radiation; mastectomy with immediate reconstruction; mastectomy with delayed reconstruction.",
      why_compared:
        "Genetic counseling results and radiation willingness were both undecided at first.",
      final_decision:
        "Completed genetic counseling, then chose lumpectomy plus radiation.",
      lessons_learned:
        "Sequencing genetic counseling before a final surgery choice prevented a rushed irreversible decision.",
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
      options_considered:
        "Local embolization now; transplant evaluation first; sequential combination guided by a specialty center.",
      why_compared:
        "Local and specialty recommendations framed urgency differently.",
      final_decision:
        "Remote transplant-center review first, then a coordinated local procedure plan.",
      lessons_learned:
        "Center selection mattered less than getting the decision sequence right.",
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
        "After resection, a patient needed to understand differences among radiation approaches discussed by the team.",
      initial_diagnosis: "Glioma requiring adjuvant radiation planning.",
      decision_challenge:
        "How to compare standard fractionated radiation with more specialized techniques offered at another center.",
      options_considered:
        "Local fractionated radiation; referral for specialized technique; clinical trial with novel sequencing.",
      why_compared:
        "The family wanted evidence-based differences, not technology marketing.",
      final_decision:
        "Stayed with the local evidence-aligned plan after a remote specialty review confirmed equivalence for this case.",
      lessons_learned:
        "A remote second opinion prevented unnecessary travel when options were clinically similar.",
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

  const question_treatments = [
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

  const question_stories = [
    { question_id: id("q", 1), story_id: id("story", 1), sort_order: 1 },
    { question_id: id("q", 6), story_id: id("story", 2), sort_order: 1 },
    { question_id: id("q", 9), story_id: id("story", 3), sort_order: 1 },
    { question_id: id("q", 13), story_id: id("story", 4), sort_order: 1 },
    { question_id: id("q", 15), story_id: id("story", 5), sort_order: 1 },
    { question_id: id("q", 7), story_id: id("story", 2), sort_order: 1 },
    { question_id: id("q", 20), story_id: id("story", 5), sort_order: 1 },
  ];

  const related_questions = [
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

  const story_treatments = [
    { story_id: id("story", 1), treatment_id: id("tx", 1), sort_order: 1 },
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
    ...questions.slice(0, 10).map((q) => ({
      entity_type: "question" as const,
      entity_id: q.id,
      source_id: id("src", 1),
    })),
    ...questions.slice(10, 20).map((q) => ({
      entity_type: "question" as const,
      entity_id: q.id,
      source_id: id("src", 2),
    })),
    ...cancers.map((c) => ({
      entity_type: "cancer" as const,
      entity_id: c.id,
      source_id: id("src", 3),
    })),
    ...treatments.map((t) => ({
      entity_type: "treatment" as const,
      entity_id: t.id,
      source_id: id("src", 2),
    })),
    ...stories.map((s) => ({
      entity_type: "story" as const,
      entity_id: s.id,
      source_id: id("src", 1),
    })),
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
    cancer_treatments,
    question_treatments,
    question_stories,
    related_questions,
    story_treatments,
    treatment_countries,
    content_sources,
  };
}
