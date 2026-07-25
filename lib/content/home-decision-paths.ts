/** Homepage Phase B — cancer-backed common decision questions + featured journey */

import {
  BREAST_CARE_TEAM_SLUG,
  BREAST_FOLLOW_UP_SLUG,
  BREAST_GENETICS_SLUG,
  BREAST_NEWLY_DIAGNOSED_SLUG,
  BREAST_SECOND_OPINION_SLUG,
  BREAST_SEQUENCING_SLUG,
  BREAST_SUBTYPE_SLUG,
  BREAST_SURGERY_SLUG,
} from "@/lib/content/breast-entry-slugs";
import {
  PROSTATE_NEWLY_DIAGNOSED_SLUG,
  PROSTATE_SECOND_OPINION_SLUG,
  PROSTATE_SURVEILLANCE_SLUG,
  PROSTATE_TREATMENT_COMPARE_SLUG,
} from "@/lib/content/prostate-entry-slugs";
import { cancerSituationMapHref } from "@/lib/journey/decision-moments";

export type HomeDecisionPath = {
  question: string;
  href: string;
};

export type HomeFeaturedJourneyStep = {
  label: string;
  href: string;
};

export const HOME_COMMON_LUNG_DECISION_PATHS: HomeDecisionPath[] = [
  {
    question: "Should I get biomarker testing?",
    href: "/questions/do-i-need-biomarker-testing-before-lung-cancer-treatment",
  },
  {
    question: "Should I consider surgery?",
    href: "/questions/should-surgery-be-part-of-my-lung-cancer-treatment-plan",
  },
  {
    question: "Should I get a second opinion?",
    href: "/questions/should-i-get-second-opinion-after-lung-cancer-diagnosis",
  },
  {
    question: "How do I compare treatments?",
    href: "/questions/how-to-compare-surgery-and-systemic-therapy-lung-cancer",
  },
  {
    question: "How do I choose a care team?",
    href: "/questions/do-i-need-different-lung-cancer-center-or-specialized-expertise",
  },
];

/** @deprecated Use HOME_COMMON_LUNG_DECISION_PATHS */
export const HOME_COMMON_DECISION_PATHS = HOME_COMMON_LUNG_DECISION_PATHS;

export const HOME_COMMON_BREAST_DECISION_PATHS: HomeDecisionPath[] = [
  {
    question: "Do I need subtype results before treatment?",
    href: `/questions/${BREAST_SUBTYPE_SLUG}`,
  },
  {
    question: "Should treatment start before or after surgery?",
    href: `/questions/${BREAST_SEQUENCING_SLUG}`,
  },
  {
    question: "How do I choose between lumpectomy and mastectomy?",
    href: `/questions/${BREAST_SURGERY_SLUG}`,
  },
  {
    question: "Should I get a second opinion?",
    href: `/questions/${BREAST_SECOND_OPINION_SLUG}`,
  },
  {
    question: "How do I choose a care team?",
    href: `/questions/${BREAST_CARE_TEAM_SLUG}`,
  },
];

export const HOME_FEATURED_LUNG_JOURNEY: HomeFeaturedJourneyStep[] = [
  {
    label: "Diagnosis",
    href: "/questions/what-decisions-matter-most-after-new-lung-cancer-diagnosis",
  },
  {
    label: "Testing",
    href: "/questions/do-i-need-biomarker-testing-before-lung-cancer-treatment",
  },
  {
    label: "Treatment decisions",
    href: "/questions/how-to-compare-surgery-and-systemic-therapy-lung-cancer",
  },
  {
    label: "Follow-up",
    href: "/questions/how-do-i-monitor-my-health-after-lung-cancer-treatment",
  },
];

/** Breast spine: diagnosis → subtype → treatment order → follow-up */
export const HOME_FEATURED_BREAST_JOURNEY: HomeFeaturedJourneyStep[] = [
  {
    label: "Diagnosis",
    href: `/questions/${BREAST_NEWLY_DIAGNOSED_SLUG}`,
  },
  {
    label: "Subtype",
    href: `/questions/${BREAST_SUBTYPE_SLUG}`,
  },
  {
    label: "Treatment order",
    href: `/questions/${BREAST_SEQUENCING_SLUG}`,
  },
  {
    label: "Follow-up",
    href: `/questions/${BREAST_FOLLOW_UP_SLUG}`,
  },
];

export const HOME_COMMON_PROSTATE_DECISION_PATHS: HomeDecisionPath[] = [
  {
    question: "Is active surveillance reasonable for me?",
    href: `/questions/${PROSTATE_SURVEILLANCE_SLUG}`,
  },
  {
    question: "How do I compare surgery and radiation?",
    href: `/questions/${PROSTATE_TREATMENT_COMPARE_SLUG}`,
  },
  {
    question: "Should I get a second opinion?",
    href: `/questions/${PROSTATE_SECOND_OPINION_SLUG}`,
  },
  {
    question: "What should happen first after diagnosis?",
    href: `/questions/${PROSTATE_NEWLY_DIAGNOSED_SLUG}`,
  },
];

/** Prostate spine: diagnosis → surveillance fork → treatment compare → second opinion */
export const HOME_FEATURED_PROSTATE_JOURNEY: HomeFeaturedJourneyStep[] = [
  {
    label: "Diagnosis",
    href: `/questions/${PROSTATE_NEWLY_DIAGNOSED_SLUG}`,
  },
  {
    label: "Surveillance",
    href: `/questions/${PROSTATE_SURVEILLANCE_SLUG}`,
  },
  {
    label: "Treatment compare",
    href: `/questions/${PROSTATE_TREATMENT_COMPARE_SLUG}`,
  },
  {
    label: "Second opinion",
    href: `/questions/${PROSTATE_SECOND_OPINION_SLUG}`,
  },
];

export type HomeCancerFeaturedConfig = {
  slug: "lung-cancer" | "breast-cancer" | "prostate-cancer";
  commonBadge: string;
  commonIntro: string;
  commonPaths: HomeDecisionPath[];
  journeyTitle: string;
  journeyBadge: string;
  journeyIntro: string;
  journeySteps: HomeFeaturedJourneyStep[];
  mapHrefSlug: "lung-cancer" | "breast-cancer" | "prostate-cancer";
};

export const HOME_FEATURED_BY_CANCER: Record<
  "lung-cancer" | "breast-cancer" | "prostate-cancer",
  HomeCancerFeaturedConfig
> = {
  "lung-cancer": {
    slug: "lung-cancer",
    commonBadge: "Lung · Complete",
    commonIntro:
      "Start from the question — not the encyclopedia. These paths are live for lung cancer today.",
    commonPaths: HOME_COMMON_LUNG_DECISION_PATHS,
    journeyTitle: "Lung cancer decision journey",
    journeyBadge: "Featured · Complete",
    journeyIntro:
      "The first complete Cancer Next Step guide — from first clarity to follow-up.",
    journeySteps: HOME_FEATURED_LUNG_JOURNEY,
    mapHrefSlug: "lung-cancer",
  },
  "breast-cancer": {
    slug: "breast-cancer",
    commonBadge: "Breast · Live",
    commonIntro:
      "Start from the question — not the encyclopedia. These paths follow the breast spine: subtype, treatment order, then surgery choices.",
    commonPaths: HOME_COMMON_BREAST_DECISION_PATHS,
    journeyTitle: "Breast cancer decision journey",
    journeyBadge: "Featured · Live",
    journeyIntro:
      "Diagnosis → subtype → treatment before or after surgery → follow-up. Open one guide, then come back for the next decision.",
    journeySteps: HOME_FEATURED_BREAST_JOURNEY,
    mapHrefSlug: "breast-cancer",
  },
  "prostate-cancer": {
    slug: "prostate-cancer",
    commonBadge: "Prostate · Hub live",
    commonIntro:
      "Start from the question — not the encyclopedia. Usual order: risk clarity → monitor or treat → surgery vs radiation if treating.",
    commonPaths: HOME_COMMON_PROSTATE_DECISION_PATHS,
    journeyTitle: "Prostate cancer decision journey",
    journeyBadge: "Featured · Hub live",
    journeyIntro:
      "Risk clarity → active surveillance vs treatment → surgery or radiation (if treating) → second opinion. Full Entry pages come next; the map is live now.",
    journeySteps: HOME_FEATURED_PROSTATE_JOURNEY,
    mapHrefSlug: "prostate-cancer",
  },
};

/** Destination cards under the featured journey (breast mode) */
export type HomeSituationDestination = {
  label: string;
  hint: string;
  href: string;
};

export const HOME_BREAST_SITUATION_DESTINATIONS: HomeSituationDestination[] = [
  {
    label: "Newly diagnosed or waiting for results",
    hint: "What comes first, subtype results, and whether a second opinion belongs early.",
    href: cancerSituationMapHref("breast-cancer", "newly-diagnosed"),
  },
  {
    label: "Comparing treatment options",
    hint: "Treatment before or after surgery, lumpectomy vs mastectomy, and systemic choices.",
    href: cancerSituationMapHref("breast-cancer", "treatment-sequencing"),
  },
  {
    label: "Unsure about your plan or care team",
    hint: "Second opinion, care-team fit, and when another review changes confidence.",
    href: cancerSituationMapHref("breast-cancer", "second-opinion"),
  },
  {
    label: "Balancing treatment with everyday life",
    hint: "Side effects, work, fertility, family, cost, and whether the plan is workable.",
    href: cancerSituationMapHref("breast-cancer", "quality-of-life"),
  },
];

/**
 * Illustrative cards for breast when seed stories are sparse.
 * Mix of real story slugs + Entry-path scenarios (not fake testimonials).
 */
export type HomeIllustrativeCard = {
  title: string;
  meta: string;
  summary: string;
  href: string;
};

export const HOME_BREAST_ILLUSTRATIVE_CARDS: HomeIllustrativeCard[] = [
  {
    title: "Comparing lumpectomy and mastectomy priorities",
    meta: "Illustrative · Singapore · 45-54",
    summary:
      "Choosing between breast-conserving surgery and mastectomy when genetics and radiation willingness were still undecided.",
    href: "/stories/comparing-lumpectomy-and-mastectomy-priorities",
  },
  {
    title: "Waiting for subtype before locking treatment",
    meta: "Illustrative path · Subtype",
    summary:
      "When receptor / HER2 results could change sequencing — and how to ask whether waiting is safe.",
    href: `/questions/${BREAST_SUBTYPE_SLUG}`,
  },
  {
    title: "Genetic counseling before a surgery choice",
    meta: "Illustrative path · Genetics",
    summary:
      "When family history or age means genetics could change bilateral or reconstruction timing questions.",
    href: `/questions/${BREAST_GENETICS_SLUG}`,
  },
];

export const HOME_PROSTATE_SITUATION_DESTINATIONS: HomeSituationDestination[] = [
  {
    label: "Newly diagnosed or waiting on risk results",
    hint: "What comes first, risk group clarity, and what can wait before locking a path.",
    href: cancerSituationMapHref("prostate-cancer", "newly-diagnosed"),
  },
  {
    label: "Deciding whether to monitor or treat",
    hint: "Active surveillance first — then surgery vs radiation if treatment is recommended.",
    href: cancerSituationMapHref("prostate-cancer", "active-surveillance"),
  },
  {
    label: "Balancing treatment with everyday life",
    hint: "Function tradeoffs, cost, time, and whether a plan is workable day to day.",
    href: cancerSituationMapHref("prostate-cancer", "cost-logistics"),
  },
  {
    label: "Unsure about your plan or care team",
    hint: "Second opinion, and when specialists frame the same options differently.",
    href: cancerSituationMapHref("prostate-cancer", "second-opinion"),
  },
];

export const HOME_PROSTATE_ILLUSTRATIVE_CARDS: HomeIllustrativeCard[] = [
  {
    title: "Weighing active surveillance for prostate cancer",
    meta: "Illustrative · United Kingdom · 65-74",
    summary:
      "Choosing structured monitoring versus early definitive therapy when function priorities were central.",
    href: "/stories/weighing-active-surveillance-prostate-cancer",
  },
  {
    title: "Comparing surgery and radiation tradeoffs",
    meta: "Illustrative path · Treatment",
    summary:
      "When both paths may be reasonable — ask what would change the recommendation for your risk group.",
    href: `/questions/${PROSTATE_TREATMENT_COMPARE_SLUG}`,
  },
  {
    title: "When specialty recommendations differ",
    meta: "Illustrative path · Care team",
    summary:
      "Urology and radiation oncology can frame the same options differently — clarify where they disagree.",
    href: "/questions/when-prostate-recommendations-differ-across-specialists",
  },
];
