'use client';

import React, { useMemo, useState, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { ArrowLeft, Check, ListChecks, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  QUESTIONS,
  RESULTS,
  evaluateBoekhoudCheck,
} from '@/lib/boekhoudprogrammaCheck';
import { ArrowIcon, PageHeader, btn } from '@/components/site/editorial';
import { EASE_OUT } from '@/components/landing/page/motion';

const ACCENT_STYLES = {
  green: {
    dot: 'bg-emerald-400',
    badge: 'border-emerald-300/30 bg-emerald-400/10 text-emerald-200',
  },
  amber: {
    dot: 'bg-amber-400',
    badge: 'border-amber-300/30 bg-amber-400/10 text-amber-200',
  },
  orange: {
    dot: 'bg-ember',
    badge: 'border-ember/40 bg-ember/15 text-ember-100',
  },
  red: {
    dot: 'bg-rose-400',
    badge: 'border-rose-300/30 bg-rose-400/10 text-rose-200',
  },
};

const sectionTitle = 'font-display text-[1.35rem] font-normal leading-tight tracking-[-0.02em] text-ink';
const bodyText = 'text-[15px] leading-relaxed text-ink-500 sm:text-base';
const ghostButton =
  'inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-ink-500 transition-colors hover:bg-paper-100 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember disabled:pointer-events-none disabled:opacity-40';

function DashList({ items, className }) {
  return (
    <ul className={cn('space-y-2', bodyText, className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-[0.7em] h-px w-3 shrink-0 bg-ember" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function BoekhoudprogrammaCheck() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);
  const resultRef = useRef(null);

  const current = QUESTIONS[step];
  const progress = finished ? 100 : Math.round((step / QUESTIONS.length) * 100);

  const evaluation = useMemo(() => {
    if (!finished) return null;
    try {
      return evaluateBoekhoudCheck(answers);
    } catch {
      return null;
    }
  }, [answers, finished]);

  const result = evaluation ? RESULTS[evaluation.resultId] : null;
  const accent = result ? ACCENT_STYLES[result.accent] : null;

  const scrollToResult = useCallback(() => {
    if (finished && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [finished]);

  useEffect(() => {
    scrollToResult();
  }, [scrollToResult]);

  const selectAnswer = useCallback(
    (value) => {
      const nextAnswers = { ...answers, [current.id]: value };
      setAnswers(nextAnswers);

      if (step < QUESTIONS.length - 1) {
        setStep(step + 1);
      } else {
        setFinished(true);
      }
    },
    [answers, current.id, step]
  );

  const goBack = useCallback(() => {
    if (finished) {
      setFinished(false);
      setStep(QUESTIONS.length - 1);
      return;
    }
    if (step > 0) setStep(step - 1);
  }, [finished, step]);

  const reset = useCallback(() => {
    setAnswers({});
    setStep(0);
    setFinished(false);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <PageHeader
        size="lg"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Tools', href: '/tools' },
          { name: 'Boekhoudprogramma-check' },
        ]}
        eyebrow="Gratis check"
        eyebrowIcon={ListChecks}
        title={
          <>
            Welk boekhoudprogramma <em>past bij jou?</em>
          </>
        }
        lead={
          <>
            <p>
              Beantwoord 8 korte vragen en ontdek of een factuurtool, basissoftware, compleet
              boekhoudprogramma of een boekhouder naast software beter past.
            </p>
            <p className="text-base text-ink-400 sm:text-lg">
              Weet je al dat je software zoekt?{' '}
              <Link
                href="/boekhoudprogramma-vergelijken"
                className="font-medium text-ink underline decoration-ink/20 underline-offset-[6px] transition-colors hover:decoration-ember"
              >
                Vergelijk direct pakketten en prijzen
              </Link>
              .
            </p>
          </>
        }
        containerClassName="max-w-6xl pb-10 pt-8 sm:pb-12 sm:pt-10 lg:pb-14 lg:pt-12"
      />

      <section className="border-t border-ink/[0.06] py-10 sm:py-14">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-5 lg:grid-cols-12 lg:items-start lg:gap-6">
            <div
              className="min-w-0 scroll-mt-28 rounded-2xl border border-ink/[0.08] bg-white p-5 shadow-window motion-safe:animate-rise sm:p-8 lg:col-span-8"
              style={{ animationDelay: '200ms' }}
            >
              <div className="mb-7">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink">Doe de check</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400 tabular">
                    {finished ? 'Resultaat' : `Vraag ${step + 1} van ${QUESTIONS.length}`}
                  </p>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-paper-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-ink to-ink-700 transition-[width] duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                {!finished && current && (
                  <motion.div
                    key={`q-${step}`}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.28, ease: EASE_OUT }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="font-display text-[1.6rem] font-normal leading-[1.15] tracking-[-0.02em] text-ink sm:text-[1.9rem]">
                        <span className="text-ink-400">{current.number}.</span> {current.title}
                      </h2>
                      {current.hint && <p className={cn('mt-3', bodyText)}>{current.hint}</p>}
                    </div>

                    <div className="grid gap-2.5">
                      {current.options.map((option) => {
                        const selected = answers[current.id] === option.value;
                        return (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => selectAnswer(option.value)}
                            aria-pressed={selected}
                            className={cn(
                              'group flex w-full items-start gap-4 rounded-xl border px-4 py-3.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 sm:py-4',
                              selected
                                ? 'border-ink bg-paper-50 ring-1 ring-ink'
                                : 'border-ink/10 bg-white hover:border-ink/30 hover:bg-paper-50'
                            )}
                          >
                            <span
                              className={cn(
                                'flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full font-mono text-xs font-medium transition-colors',
                                selected
                                  ? 'bg-ink text-white'
                                  : 'border border-ink/15 text-ink-700 group-hover:border-ink group-hover:bg-ink group-hover:text-white'
                              )}
                            >
                              {option.label}
                            </span>
                            <span className="pt-0.5 text-[15px] leading-relaxed text-ink sm:text-base">
                              {option.text}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex justify-between border-t border-ink/[0.07] pt-4">
                      <button type="button" onClick={goBack} disabled={step === 0} className={ghostButton}>
                        <ArrowLeft className="h-4 w-4" aria-hidden />
                        Vorige
                      </button>
                    </div>
                  </motion.div>
                )}

                {finished && result && accent && (
                  <motion.div
                    key="result"
                    ref={resultRef}
                    onAnimationStart={scrollToResult}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.45, ease: EASE_OUT }}
                    className="scroll-mt-28 space-y-8"
                  >
                    <div className="grain-light relative isolate overflow-hidden rounded-2xl bg-ink-950 p-6 text-white sm:p-8">
                      <div className="bg-ledger-dark mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
                      <div
                        className="pointer-events-none absolute -right-24 -top-24 -z-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(210,96,26,0.3),transparent_65%)]"
                        aria-hidden
                      />
                      <span
                        className={cn(
                          'inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em]',
                          accent.badge
                        )}
                      >
                        <span className={cn('h-1.5 w-1.5 rounded-full', accent.dot)} aria-hidden />
                        Jouw resultaat
                      </span>
                      <h2 className="mt-5 font-display text-[1.9rem] font-normal leading-[1.1] tracking-[-0.025em] sm:text-[2.4rem]">
                        {result.emoji} {result.title}
                      </h2>
                      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
                        Deze check geeft een indicatie op basis van je antwoorden. Het is geen persoonlijk
                        financieel of fiscaal advies.
                      </p>
                    </div>

                    <div>
                      <h3 className={sectionTitle}>Dit past waarschijnlijk bij jou als:</h3>
                      <DashList items={result.fitsWhen} className="mt-4" />
                    </div>

                    {result.body?.map((paragraph) => (
                      <p key={paragraph} className={bodyText}>
                        {paragraph}
                      </p>
                    ))}

                    {result.comboLine && (
                      <p className="rounded-xl border-l-2 border-ember bg-paper-100 px-5 py-4 font-display text-lg leading-snug text-ink">
                        {result.comboLine}
                      </p>
                    )}

                    <div className="border-t border-ink/[0.07] pt-8">
                      <h3 className={sectionTitle}>Waarom dit bij jou past</h3>
                      <div className={cn('mt-4 space-y-3', bodyText)}>
                        {result.why.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                        {evaluation.reasons.length > 0 && <DashList items={evaluation.reasons} />}
                      </div>
                    </div>

                    {result.changeWhen && (
                      <div className="border-t border-ink/[0.07] pt-8">
                        <h3 className={sectionTitle}>Wat zou deze uitkomst veranderen?</h3>
                        <p className={cn('mt-3', bodyText)}>
                          Een boekhoudprogramma wordt interessanter als je bijvoorbeeld:
                        </p>
                        <DashList items={result.changeWhen} className="mt-3" />
                      </div>
                    )}

                    {result.lookFor && (
                      <div className="border-t border-ink/[0.07] pt-8">
                        <h3 className={sectionTitle}>Waar je op kunt letten</h3>
                        <DashList items={result.lookFor} className="mt-4" />
                        {result.upgradeWhen && <p className={cn('mt-4', bodyText)}>{result.upgradeWhen}</p>}
                        {result.note && <p className={cn('mt-4', bodyText)}>{result.note}</p>}
                      </div>
                    )}

                    {result.selfDoWhen && (
                      <div className="border-t border-ink/[0.07] pt-8">
                        <h3 className={sectionTitle}>Wanneer zou je toch alles zelf kunnen doen?</h3>
                        <p className={cn('mt-3', bodyText)}>{result.selfDoWhen}</p>
                      </div>
                    )}

                    {result.primaryNote && (
                      <div className="border-t border-ink/[0.07] pt-8">
                        <h3 className={sectionTitle}>Voor jou interessant</h3>
                        <p className={cn('mt-3', bodyText)}>{result.primaryNote}</p>
                      </div>
                    )}

                    <div className="flex flex-col gap-3 border-t border-ink/[0.07] pt-8 sm:flex-row sm:flex-wrap">
                      <Link href={result.primaryCta.href} className={btn.primary}>
                        {result.primaryCta.label}
                        <ArrowIcon />
                      </Link>
                      {result.secondaryCta && (
                        <Link href={result.secondaryCta.href} className={btn.secondary}>
                          {result.secondaryCta.label}
                        </Link>
                      )}
                      <button type="button" className={btn.secondary} onClick={reset}>
                        <RotateCcw className="h-4 w-4" aria-hidden />
                        Opnieuw doen
                      </button>
                    </div>

                    <div className="flex justify-between border-t border-ink/[0.07] pt-4">
                      <button type="button" onClick={goBack} className={ghostButton}>
                        <ArrowLeft className="h-4 w-4" aria-hidden />
                        Antwoord wijzigen
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <aside
              className="hidden motion-safe:animate-rise lg:col-span-4 lg:block"
              style={{ animationDelay: '280ms' }}
              aria-hidden
            >
              <div className="rounded-2xl border border-ink/[0.08] bg-white/70 p-6 shadow-paper backdrop-blur lg:sticky lg:top-[calc(var(--header-height,6rem)+1.5rem)]">
                <ol className="space-y-1">
                  {QUESTIONS.map((question, index) => {
                    const answered = answers[question.id] !== undefined && (finished || index < step);
                    const active = !finished && index === step;
                    return (
                      <li
                        key={question.id}
                        className={cn(
                          'flex items-start gap-3 rounded-lg px-2 py-2 text-[13px] leading-snug transition-colors',
                          active ? 'bg-paper-100 text-ink' : answered ? 'text-ink-700' : 'text-ink-400'
                        )}
                      >
                        <span
                          className={cn(
                            'mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px] transition-colors',
                            answered
                              ? 'bg-ink text-white'
                              : active
                                ? 'border border-ink text-ink'
                                : 'border border-ink/15'
                          )}
                        >
                          {answered ? <Check className="h-3 w-3" /> : question.number}
                        </span>
                        <span>{question.title}</span>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </aside>
          </div>

          <div className="mt-12 border-t border-ink/10 pt-6">
            <Link href="/tools/boekhoudprogramma-check" className={btn.link}>
              ← Meer uitleg over welk boekhoudprogramma bij jou past
            </Link>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
