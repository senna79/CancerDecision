"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";
import {
  getEntryPathV2,
  type EntryPathStep,
  type EntryPathV2,
} from "@/lib/content/entry-path-v2";
import { cn } from "@/lib/utils";
import { DecisionPathCardDetail } from "./decision-path-cards-v2";
import { DoctorChecklistTakeaway } from "./doctor-checklist-takeaway";
import { DoctorQuestionGroups } from "./doctor-question-groups";
import { DoesNotDecide } from "./does-not-decide";
import { WhyDecisionMatters } from "./why-decision-matters";

function useStepReveal() {
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const items = root.querySelectorAll<HTMLElement>("[data-path-step]");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return ref;
}

function readCardFromUrl() {
  if (typeof window === "undefined") return null;
  const fromQuery = new URLSearchParams(window.location.search).get("card");
  if (fromQuery?.trim()) return fromQuery.trim();
  const hash = window.location.hash;
  if (hash.startsWith("#card-")) {
    const id = decodeURIComponent(hash.slice("#card-".length)).trim();
    return id || null;
  }
  return null;
}

function syncCardToUrl(cardId: string | null) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (cardId) {
    url.searchParams.set("card", cardId);
  } else {
    url.searchParams.delete("card");
  }
  // Prefer ?card= over hash so the browser does not fight scroll position.
  if (url.hash.startsWith("#card-")) {
    url.hash = "";
  }
  const next = `${url.pathname}${url.search}${url.hash}`;
  window.history.replaceState(null, "", next);
}

function StepCards({
  step,
  openId,
  landedId,
  onToggle,
  slug,
  modules,
}: {
  step: EntryPathStep & { number: number };
  openId: string | null;
  /** Card opened via ?card= / #card- landing */
  landedId: string | null;
  onToggle: (id: string) => void;
  slug: string;
  modules: AiEntryFlagshipModules;
}) {
  const railHasOpen = Boolean(
    openId && step.cards.some((card) => card.id === openId)
  );

  return (
    <div
      className={cn(
        "path-question-rail",
        railHasOpen && "path-question-rail--has-open"
      )}
    >
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
        Questions you may have
      </p>
      <ul className="mt-2">
        {step.cards.map((card) => {
          const open = openId === card.id;
          const fromLanding = open && landedId === card.id;
          return (
            <li
              key={card.id}
              id={`card-${card.id}`}
              className={cn(
                "path-question-item scroll-mt-28",
                open && "path-question-item--open"
              )}
            >
              {fromLanding ? (
                <p className="px-3.5 pt-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                  Answering your question
                </p>
              ) : null}
              <button
                type="button"
                aria-expanded={open}
                onClick={() => onToggle(card.id)}
                className={cn(
                  "flex w-full items-start gap-2 text-left transition",
                  open
                    ? "px-3.5 py-3 hover:bg-transparent"
                    : "px-2 py-2.5 hover:bg-white/70"
                )}
              >
                <span className="min-w-0 flex-1">
                  <span
                    className={cn(
                      "block font-semibold text-[var(--ink)]",
                      open ? "text-base md:text-lg" : "text-sm"
                    )}
                  >
                    {card.title}
                  </span>
                  {!open ? (
                    <span className="mt-0.5 block text-xs leading-relaxed text-[var(--muted)]">
                      {card.summary}
                    </span>
                  ) : null}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "mt-1 shrink-0 text-[var(--muted)] transition-transform duration-200",
                    open && "rotate-180 text-[var(--accent)]"
                  )}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 5l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              {open ? (
                <div className="px-3.5 pb-4">
                  <div className="path-question-answer min-h-[4.5rem] text-[0.95rem] leading-relaxed text-[var(--ink)] md:text-base">
                    <DecisionPathCardDetail
                      id={card.id}
                      slug={slug}
                      modules={modules}
                    />
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[var(--accent)]/15 pt-3">
                    <a
                      href={`#path-step-${step.id}`}
                      className="text-sm font-semibold text-[var(--accent)] hover:underline"
                    >
                      Back to Step {step.number} →
                    </a>
                    <button
                      type="button"
                      onClick={() => onToggle(card.id)}
                      className="text-sm font-semibold text-[var(--muted)] hover:text-[var(--accent)] hover:underline"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function StepMain({
  step,
  path,
  modules,
  slug,
}: {
  step: EntryPathStep;
  path: EntryPathV2;
  modules: AiEntryFlagshipModules;
  slug: string;
}) {
  switch (step.main) {
    case "biomarker-understand":
      return (
        <div className="space-y-3">
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            Before making treatment decisions, ask whether the picture is
            complete.
          </p>
          <WhyDecisionMatters modules={modules} embedded />
        </div>
      );
    case "why":
      return <WhyDecisionMatters modules={modules} embedded />;
    case "surgery-understand":
      return <WhyDecisionMatters modules={modules} embedded />;
    case "does-not-decide":
      return <DoesNotDecide modules={modules} embedded />;
    case "surgery-compare":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            Surgery is one possible treatment approach. Doctors compare it with
            other options based on stage, tumor characteristics, biomarker
            information when relevant, your overall health, and your goals.
          </p>
          <ul className="space-y-1.5 text-[var(--ink)]">
            {[
              "For some people, surgery is the main treatment",
              "For others, treatment may happen before or after surgery",
              "For some people, a different approach is discussed instead",
            ].map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            The decision is not “surgery or no surgery?” It is which approach
            gives the best balance of benefit and risk for your situation.
          </p>
        </div>
      );
    case "second-understand":
      return <WhyDecisionMatters modules={modules} embedded />;
    case "second-compare":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            A second opinion may lead to different outcomes — and sometimes the
            most valuable result is knowing why the current plan makes sense.
          </p>
          <ul className="space-y-1.5 text-[var(--ink)]">
            {[
              "Confirm — your current plan is reasonable",
              "Clarify — why a treatment is recommended",
              "Expand — other options worth discussing",
              "Identify — information that may affect the decision",
            ].map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            It is not about finding a different answer. It is about understanding
            the reasoning behind the answer.
          </p>
        </div>
      );
    case "treatment-understand":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <WhyDecisionMatters modules={modules} embedded />
          <div className="mt-2 space-y-3 border-t border-[var(--line)]/80 pt-3">
            <p className="text-sm font-semibold text-[var(--ink)]">
              Treatment landscape
            </p>
            <ul className="space-y-2 text-sm text-[var(--ink)]">
              <li>
                <span className="font-medium">Local treatments</span>
                <span className="text-[var(--ink-soft)]">
                  {" "}
                  — surgery and radiation, when controlling a specific area
                  matters.
                </span>
              </li>
              <li>
                <span className="font-medium">Systemic treatments</span>
                <span className="text-[var(--ink-soft)]">
                  {" "}
                  — chemotherapy, immunotherapy, and targeted therapy, when
                  treatment needs to work throughout the body.
                </span>
              </li>
              <li>
                <span className="font-medium">Clinical trials</span>
                <span className="text-[var(--ink-soft)]">
                  {" "}
                  — newer approaches or combinations under structured research.
                </span>
              </li>
            </ul>
          </div>
        </div>
      );
    case "treatment-why-fit":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            A treatment recommendation comes from putting many pieces together —
            cancer type, stage and spread, biomarker information, previous
            treatments, your overall health, and your goals.
          </p>
          <p className="text-sm font-semibold text-[var(--ink)]">
            Plans are usually chosen by balancing:
          </p>
          <ul className="space-y-1.5 text-[var(--ink)]">
            {[
              "Expected benefit — what doctors hope treatment can achieve",
              "Possible risks — side effects or challenges that may occur",
              "Personal priorities — what matters most in your daily life",
            ].map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            The goal is not the most aggressive treatment. The goal is the plan
            with the right balance for you.
          </p>
        </div>
      );
    case "recurrence-understand":
      return <WhyDecisionMatters modules={modules} embedded />;
    case "recurrence-info":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            After recurrence, doctors usually reassess the situation instead of
            simply repeating the previous plan — new imaging, pathology when
            useful, biomarker results, previous treatments, symptoms, and overall
            health.
          </p>
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            Sometimes the most important next step is not choosing a treatment
            immediately. It is making sure the team understands the current
            cancer.
          </p>
        </div>
      );
    case "recurrence-compare":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            Possible approaches may include another systemic treatment, local
            treatment in selected situations, clinical trials, or supportive care
            focused on symptoms and quality of life.
          </p>
          <ul className="space-y-1.5 text-[var(--ink)]">
            {[
              "Expected benefit",
              "Possible risks",
              "Treatment burden",
              "Your personal priorities",
            ].map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            The goal is not simply “find another treatment.” It is “find the
            approach that best fits my situation now.”
          </p>
        </div>
      );
    case "brain-mets-understand":
      return <WhyDecisionMatters modules={modules} embedded />;
    case "brain-mets-info":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            Before choosing a path, teams usually clarify the brain imaging,
            symptoms, how much cancer is active elsewhere, prior treatments,
            biomarker results when relevant, and your goals.
          </p>
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            Sometimes the most important next step is not picking a treatment
            immediately. It is making sure the team has the information that
            would change the options.
          </p>
        </div>
      );
    case "brain-mets-compare":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            Possible approaches may include local treatment aimed at the brain
            findings, systemic therapy for cancer elsewhere — and sometimes for
            the brain — clinical trials, supportive care focused on symptoms, or
            a sequenced combination.
          </p>
          <ul className="space-y-1.5 text-[var(--ink)]">
            {[
              "Goal for the brain findings and for disease elsewhere",
              "Expected benefit and main risks",
              "Effects on thinking, steroids, and daily life",
              "Timing — what is urgent versus what can wait",
            ].map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            The goal is not “find the strongest treatment.” It is “find the
            approach that best fits my situation now.”
          </p>
        </div>
      );
    case "nd-understand":
      return <WhyDecisionMatters modules={modules} embedded />;
    case "nd-information":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            Many treatment discussions depend on having enough information —
            pathology, imaging, stage, biomarker testing when relevant, and your
            health.
          </p>
          <ul className="space-y-1.5 text-[var(--ink)]">
            {[
              "What do we already know?",
              "What is still pending?",
              "Would pending results change the options we discuss?",
              "How urgent is the next decision?",
            ].map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            The useful question is not “Why are we waiting?” It is “Is there
            important information that could change my options?”
          </p>
        </div>
      );
    case "nd-ahead":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            You will not make every decision today. Cancer care is usually a
            series of decisions — information decisions, treatment decisions, and
            planning decisions that fit your life.
          </p>
          <ul className="space-y-1.5 text-[var(--ink)]">
            {[
              "Information — type, stage, biomarkers, more evaluation",
              "Treatment — which approaches to discuss when the picture is clearer",
              "Planning — how care fits daily life, support, and priorities",
            ].map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            Your next decision matters more than every future decision.
          </p>
        </div>
      );
    case "siv-understand":
      return <WhyDecisionMatters modules={modules} embedded />;
    case "siv-goals":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            Treatment goals are personal. Your care team can help explain what
            treatment may achieve, which options fit your situation, and what
            matters most to you.
          </p>
          <ul className="space-y-1.5 text-[var(--ink)]">
            {[
              "Treatments that may slow or reduce cancer growth",
              "Improving symptoms so daily life is more manageable",
              "Supporting the activities and independence that matter to you",
            ].map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            Different treatment goals do not mean less care. They mean your care
            plan is designed around your situation.
          </p>
        </div>
      );
    case "siv-information":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            Doctors usually look at several pieces of information together — not
            Stage alone. The right decision comes from the whole picture.
          </p>
          <ul className="space-y-1.5 text-[var(--ink)]">
            {[
              "Cancer type — what kind of lung cancer do you have?",
              "Biomarker information — characteristics that may affect options",
              "Previous treatment — what has already been tried?",
              "Your health and priorities — what fits your life and goals?",
            ].map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            Ask how urgent the next decision is. If symptoms worsen, seek urgent
            care rather than waiting for elective comparisons.
          </p>
        </div>
      );
    case "cc-when":
      return <WhyDecisionMatters modules={modules} embedded />;
    case "cc-setups":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            Cancer care is organized in different ways. Knowing the setups helps
            you choose a network — not only a building.
          </p>
          <ul className="space-y-1.5 text-[var(--ink)]">
            {[
              "Academic or university-linked centers — specialized experience, multidisciplinary review, trial access",
              "Community cancer centers — convenient ongoing treatment closer to home",
              "Hybrid approach — specialist planning for complex decisions; local care for regular treatment and follow-up",
            ].map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            The best approach is not always choosing one location. It is building
            the right care network.
          </p>
        </div>
      );
    case "cc-look-for":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            Evaluate a lung cancer team by fit — not by reputation alone. Focus
            on experience, multidisciplinary care, access to needed services, and
            clear communication.
          </p>
          <ul className="space-y-1.5 text-[var(--ink)]">
            {[
              "Lung cancer experience — how often does this team treat cases like yours?",
              "Multidisciplinary care — surgeons, oncologists, radiation, radiology, pathology, supportive care",
              "Access — biomarker testing, pathology review, trials, supportive services",
              "Communication — clear options, answered questions, understandable reasoning",
            ].map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            Credentials such as NCI designation can be one useful signal. They
            are not a substitute for asking whether the team fits your situation.
          </p>
        </div>
      );
    case "fe-why":
      return <WhyDecisionMatters modules={modules} embedded />;
    case "fe-where":
      return (
        <div className="space-y-4 text-[var(--ink-soft)] leading-relaxed">
          <p>
            This page is a pointer — not an insurance or price guide. Open the
            decision that matches your concern:
          </p>
          <ul className="space-y-3 text-[var(--ink)]">
            <li className="flex gap-2.5">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>
                <span className="font-medium">Where care happens</span> — travel,
                hybrid care, and who coordinates your network.{" "}
                <Link
                  href="/questions/do-i-need-different-lung-cancer-center-or-specialized-expertise"
                  className="font-semibold text-[var(--accent)] hover:underline"
                >
                  Care Team →
                </Link>
              </span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>
                <span className="font-medium">Which option fits a real week</span>{" "}
                — visit load, recovery, and practical burden.{" "}
                <Link
                  href="/questions/how-to-compare-surgery-and-systemic-therapy-lung-cancer"
                  className="font-semibold text-[var(--accent)] hover:underline"
                >
                  Treatment Options →
                </Link>
              </span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>
                <span className="font-medium">
                  Whether the burden is sustainable
                </span>{" "}
                — daily life, symptoms, and what you can keep doing.{" "}
                <Link
                  href="/questions/how-should-quality-of-life-factor-into-lung-cancer-decisions"
                  className="font-semibold text-[var(--accent)] hover:underline"
                >
                  Quality of Life →
                </Link>
              </span>
            </li>
          </ul>
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            Exact prices and insurance rules vary. Put constraints on the table
            with your care team.
          </p>
        </div>
      );
    case "fe-ask":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>Three questions help most:</p>
          <ul className="space-y-1.5 text-[var(--ink)]">
            {[
              "What will a normal treatment week look like?",
              "What travel, time, or cost pressures should we plan for?",
              "If this becomes too hard, what can we adjust?",
            ].map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            Raising practical limits is part of good decision-making — not
            quitting care.
          </p>
        </div>
      );
    case "qol-understand":
      return <WhyDecisionMatters modules={modules} embedded />;
    case "qol-symptoms":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            Many symptoms and treatment side effects can be managed. The most
            important step is communication — new symptoms, worsening symptoms,
            changes in daily activities, and concerns about treatment burden.
          </p>
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            Managing symptoms is part of cancer treatment, not a sign that
            treatment is failing.
          </p>
        </div>
      );
    case "qol-balance":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            Every treatment decision involves tradeoffs. Doctors consider
            possible benefit, possible burden — side effects, appointments,
            recovery time, and impact on daily life — and your personal goals.
          </p>
          <ul className="space-y-1.5 text-[var(--ink)]">
            {[
              "Possible benefit — what the treatment may achieve",
              "Possible burden — side effects, time, and daily-life impact",
              "Personal goals — what matters most to you",
            ].map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            More treatment is not always the same as better treatment. The right
            amount depends on your situation.
          </p>
        </div>
      );
    case "followup-understand":
      return <WhyDecisionMatters modules={modules} embedded />;
    case "followup-watching":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            Follow-up visits usually focus on three areas: cancer status,
            treatment effects, and overall health — looking for possible
            recurrence, managing ongoing effects, and supporting recovery.
          </p>
          <ul className="space-y-1.5 text-[var(--ink)]">
            {[
              "Cancer status — signs that cancer may have returned",
              "Treatment effects — ongoing effects from prior care",
              "Overall health — recovery and future health needs",
            ].map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            Follow-up is not only about finding problems. It is also about
            helping you recover and live well.
          </p>
        </div>
      );
    case "followup-between":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            You do not need to wait until your next scheduled visit if something
            concerns you. Contact your team about new or worsening symptoms,
            changes affecting daily activities, or concerns that feel unusual
            for you.
          </p>
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            The goal is not to monitor every small change with fear. The goal is
            knowing which changes deserve attention.
          </p>
        </div>
      );
    case "progression-understand":
      return <WhyDecisionMatters modules={modules} embedded />;
    case "progression-info":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            When treatment changes, doctors usually review the complete picture
            again — latest imaging, symptoms, previous treatments, biomarker
            information, and whether additional testing is needed.
          </p>
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            Sometimes the most useful next step is not immediately choosing
            another treatment. It is understanding what has changed.
          </p>
        </div>
      );
    case "progression-compare":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            Possible next steps may include another approved treatment, a
            different combination, a clinical trial, or supportive care focused
            on symptoms and quality of life.
          </p>
          <ul className="space-y-1.5 text-[var(--ink)]">
            {[
              "Expected benefit",
              "Possible risks",
              "Your goals",
              "Daily-life priorities",
            ].map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            The next decision is not “What is the newest option?” It is “What
            option best fits my situation now?”
          </p>
        </div>
      );
    case "trial-understand":
      return <WhyDecisionMatters modules={modules} embedded />;
    case "trial-fit":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            Clinical trials have specific requirements. Your care team may
            consider lung cancer type, stage, biomarker results, previous
            treatments, overall health, and treatment goals.
          </p>
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            Finding a trial is not about finding the newest option. It is about
            finding a trial that matches your situation.
          </p>
        </div>
      );
    case "trial-compare":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            A clinical trial should be evaluated like any other treatment
            decision — with both opportunity and uncertainty on the table.
          </p>
          <ul className="space-y-2 text-[var(--ink)]">
            <li>
              <span className="font-medium">Goal</span>
              <span className="text-[var(--ink-soft)]">
                {" "}
                — treat cancer, delay progression, relieve symptoms, or improve
                future options?
              </span>
            </li>
            <li>
              <span className="font-medium">What is known</span>
              <span className="text-[var(--ink-soft)]">
                {" "}
                — what results exist, and what is still uncertain?
              </span>
            </li>
            <li>
              <span className="font-medium">Impact</span>
              <span className="text-[var(--ink-soft)]">
                {" "}
                — side effects, visits, travel, and time commitment?
              </span>
            </li>
          </ul>
        </div>
      );
    case "treatment-compare":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            Every treatment option involves tradeoffs. Before deciding, discuss
            goal, timing, and impact for each option on the table.
          </p>
          <ul className="space-y-2 text-[var(--ink)]">
            <li>
              <span className="font-medium">Goal</span>
              <span className="text-[var(--ink-soft)]">
                {" "}
                — remove, reduce, control growth, or relieve symptoms?
              </span>
            </li>
            <li>
              <span className="font-medium">Timing</span>
              <span className="text-[var(--ink-soft)]">
                {" "}
                — before surgery, after, instead, or combined with another
                treatment?
              </span>
            </li>
            <li>
              <span className="font-medium">Impact</span>
              <span className="text-[var(--ink-soft)]">
                {" "}
                — side effects, how often treatment is given, and daily life?
              </span>
            </li>
          </ul>
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            A good decision is not only about medical effectiveness. It also
            considers how treatment fits your life.
          </p>
        </div>
      );
    case "practical-points":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            Real decisions include the practical layer — not only whether this
            path could help, but what you may need to go through.
          </p>
          <ul className="space-y-1.5 text-[var(--ink)]">
            {(path.practicalPoints ?? []).map((point) => (
              <li key={point} className="flex gap-2.5">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm font-medium text-[var(--ink)]">
            Open a question beside this step for details that match your worry.
          </p>
        </div>
      );
    case "checklist": {
      const leaveItems =
        modules.doctorLeaveItems?.length
          ? modules.doctorLeaveItems
          : modules.doctorGroups?.[0]?.questions?.slice(0, 4) ?? [];
      const leaveTitle =
        modules.doctorLeaveTitle ?? "Before leaving your appointment, ask:";
      return (
        <div className="space-y-5">
          {leaveItems.length ? (
            <DoctorChecklistTakeaway
              lead={leaveTitle}
              items={leaveItems}
              sourceLabel={modules.decisionMoment}
              sourceHref={`/questions/${slug}`}
            />
          ) : null}
          <DoctorQuestionGroups
            modules={modules}
            embedded
            omitLeave
            sourceLabel={modules.decisionMoment}
            sourceHref={`/questions/${slug}`}
          />
        </div>
      );
    }
    default:
      return null;
  }
}

/**
 * Entry Template v2 workspace — config-driven Decision Path.
 */
export function DecisionWorkspaceV2({
  modules,
  slug,
}: {
  modules: AiEntryFlagshipModules;
  slug: string;
}) {
  const path = getEntryPathV2(slug);
  const [openId, setOpenId] = useState<string | null>(null);
  /** Set only when the page opened via ?card= / #card- */
  const [landedId, setLandedId] = useState<string | null>(null);
  const listRef = useStepReveal();
  const deepLinkDone = useRef(false);

  const validCardIds = useMemo(() => {
    if (!path) return new Set<string>();
    return new Set(
      path.steps.flatMap((step) => step.cards.map((card) => card.id))
    );
  }, [path]);

  useEffect(() => {
    if (!path || deepLinkDone.current) return;
    const fromUrl = readCardFromUrl();
    if (!fromUrl || !validCardIds.has(fromUrl)) {
      deepLinkDone.current = true;
      return;
    }
    deepLinkDone.current = true;
    setOpenId(fromUrl);
    setLandedId(fromUrl);
    syncCardToUrl(fromUrl);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => {
      const el = document.getElementById(`card-${fromUrl}`);
      el?.closest<HTMLElement>("[data-path-step]")?.classList.add("is-visible");
      el?.scrollIntoView({
        behavior: reduced ? "auto" : "smooth",
        block: "start",
      });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [path, validCardIds]);

  if (!path) return null;

  function toggleCard(id: string) {
    const next = openId === id ? null : id;
    setOpenId(next);
    if (next !== landedId) setLandedId(null);
    syncCardToUrl(next);
    if (next) {
      // Ensure the step is visible if reveal animation has not fired yet.
      document
        .getElementById(`card-${next}`)
        ?.closest<HTMLElement>("[data-path-step]")
        ?.classList.add("is-visible");
    }
  }

  const numberedSteps = path.steps.map((step, index) => ({
    ...step,
    number: index + 1,
  }));

  const landedStep =
    landedId && openId === landedId
      ? numberedSteps.find((step) =>
          step.cards.some((card) => card.id === landedId)
        )
      : null;

  return (
    <div
      id="decision-path"
      className="decision-path-canvas mt-6 scroll-mt-24 rounded-xl border border-[var(--accent)]/15 bg-white/70 px-4 py-5 md:px-7 md:py-7"
    >
      <header className="mb-8 animate-rise">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
          {path.pathEyebrow ?? "Decision Path"}
        </p>
        <h2 className="mt-1.5 font-heading text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)] md:text-3xl">
          {path.pathTitle}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)] md:text-base">
          {path.pathSubtitle}
        </p>
        {landedStep ? (
          <p className="mt-4 max-w-2xl rounded-md border border-[var(--accent)]/25 bg-[rgba(15,118,110,0.06)] px-3 py-2.5 text-sm text-[var(--ink-soft)]">
            <span className="font-semibold text-[var(--accent)]">
              Opened from a specific question
            </span>
            {" — "}
            you are in Step {landedStep.number}. The highlighted answer is
            below; the Decision Path on the left (or above on mobile) is the
            full guide.
          </p>
        ) : null}
        {path.orientationTrail?.length ? (
          <ol className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm">
            {path.orientationTrail.map((label, index) => (
              <li key={label} className="flex items-center gap-2">
                {index > 0 ? (
                  <span className="text-[var(--muted)]" aria-hidden>
                    →
                  </span>
                ) : null}
                <span className="rounded-md border border-[var(--line)] bg-white/80 px-2.5 py-1 font-medium text-[var(--ink)]">
                  {label}
                </span>
              </li>
            ))}
          </ol>
        ) : null}
      </header>

      <ol ref={listRef} className="relative">
        {numberedSteps.map((step, index) => {
          const isLast = index === numberedSteps.length - 1;
          const stepHoldsOpen = Boolean(
            openId && step.cards.some((card) => card.id === openId)
          );
          return (
            <li
              key={step.id}
              id={`path-step-${step.id}`}
              data-path-step
              className={cn(
                "path-step-reveal relative",
                stepHoldsOpen && "path-step--holds-open"
              )}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,62fr)_minmax(240px,38fr)] lg:gap-8">
                <div className="relative min-w-0 pl-11 md:pl-12">
                  {!isLast ? (
                    <span
                      aria-hidden
                      className="absolute left-[0.95rem] top-9 bottom-[-1.1rem] w-px bg-[var(--accent)]/20 md:left-[1.05rem]"
                    />
                  ) : null}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute left-0 top-0.5 flex size-8 items-center justify-center rounded-full text-sm font-bold text-white md:size-9",
                      stepHoldsOpen
                        ? "bg-[var(--accent)] ring-[6px] ring-[rgba(15,118,110,0.14)]"
                        : "bg-[var(--accent)]"
                    )}
                  >
                    {step.number}
                  </span>

                  <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[var(--muted)]/90">
                    {step.stage}
                  </p>
                  <h2 className="mt-1 font-heading text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)] md:text-[1.75rem]">
                    {step.title}
                  </h2>
                  {step.lead ? (
                    <p className="mt-1.5 text-sm text-[var(--muted)]">{step.lead}</p>
                  ) : null}
                  <div className="mt-3.5">
                    <StepMain
                      step={step}
                      path={path}
                      modules={modules}
                      slug={slug}
                    />
                  </div>
                </div>

                <div className="min-w-0 overflow-visible pl-11 lg:sticky lg:top-24 lg:pl-0 lg:pt-7 lg:self-start">
                  <StepCards
                    step={step}
                    openId={
                      step.cards.some((c) => c.id === openId) ? openId : null
                    }
                    landedId={
                      step.cards.some((c) => c.id === landedId)
                        ? landedId
                        : null
                    }
                    onToggle={toggleCard}
                    slug={slug}
                    modules={modules}
                  />
                </div>
              </div>
              {!isLast ? (
                <div
                  className="my-6 h-px bg-[var(--line)]/70 md:my-8"
                  aria-hidden
                />
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
