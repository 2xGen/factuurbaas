'use client';

import React, { useMemo, useState, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  QUESTIONS,
  RESULTS,
  evaluateBoekhoudCheck,
} from '@/lib/boekhoudprogrammaCheck';

const ACCENT_STYLES = {
  green: {
    panel: 'border-green-200 bg-green-50',
    badge: 'bg-green-100 text-green-900',
    title: 'text-green-950',
  },
  amber: {
    panel: 'border-amber-200 bg-amber-50',
    badge: 'bg-amber-100 text-amber-900',
    title: 'text-amber-950',
  },
  orange: {
    panel: 'border-orange-200 bg-orange-50',
    badge: 'bg-orange-100 text-orange-900',
    title: 'text-orange-950',
  },
  red: {
    panel: 'border-red-200 bg-red-50',
    badge: 'bg-red-100 text-red-900',
    title: 'text-red-950',
  },
};

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

  useEffect(() => {
    if (finished && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [finished]);

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
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Welk boekhoudprogramma past bij jou?
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
          Beantwoord 8 korte vragen en ontdek of een factuurtool, basissoftware, compleet
          boekhoudprogramma of een boekhouder naast software beter past.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
        <div className="mb-6">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-deep-blue">Doe de check</p>
            <p className="text-sm text-slate-500">
              {finished ? 'Resultaat' : `Vraag ${step + 1} van ${QUESTIONS.length}`}
            </p>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-warm-orange transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {!finished && current && (
          <div className="space-y-5">
            <div>
              <h2 className="font-heading text-xl font-bold text-deep-blue sm:text-2xl">
                {current.number}. {current.title}
              </h2>
              {current.hint && (
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {current.hint}
                </p>
              )}
            </div>

            <div className="grid gap-3">
              {current.options.map((option) => {
                const selected = answers[current.id] === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => selectAnswer(option.value)}
                    className={cn(
                      'flex w-full items-start gap-3 rounded-xl border px-4 py-3.5 text-left transition',
                      selected
                        ? 'border-warm-orange bg-orange-50 ring-2 ring-warm-orange/30'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                    )}
                  >
                    <span
                      className={cn(
                        'mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg text-sm font-bold',
                        selected
                          ? 'bg-warm-orange text-white'
                          : 'bg-slate-100 text-slate-700'
                      )}
                    >
                      {option.label}
                    </span>
                    <span className="text-sm leading-relaxed text-slate-800 sm:text-base">
                      {option.text}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-between pt-2">
              <Button
                type="button"
                variant="ghost"
                onClick={goBack}
                disabled={step === 0}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Vorige
              </Button>
            </div>
          </div>
        )}

        {finished && result && accent && (
          <div ref={resultRef} className="space-y-6">
            <div className={cn('rounded-2xl border p-5 sm:p-6', accent.panel)}>
              <span
                className={cn(
                  'inline-flex rounded-lg px-2.5 py-1 text-xs font-semibold',
                  accent.badge
                )}
              >
                Jouw resultaat
              </span>
              <h2 className={cn('mt-3 font-heading text-2xl font-bold sm:text-3xl', accent.title)}>
                {result.emoji} {result.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                Deze check geeft een indicatie op basis van je antwoorden. Het is geen persoonlijk
                financieel of fiscaal advies.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-deep-blue">
                Dit past waarschijnlijk bij jou als:
              </h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 sm:text-base">
                {result.fitsWhen.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {result.body?.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-slate-700 sm:text-base">
                {paragraph}
              </p>
            ))}

            {result.comboLine && (
              <p className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800 sm:text-base">
                {result.comboLine}
              </p>
            )}

            <div>
              <h3 className="font-heading text-lg font-bold text-deep-blue">
                Waarom dit bij jou past
              </h3>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                {result.why.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {evaluation.reasons.length > 0 && (
                  <ul className="list-disc space-y-1.5 pl-5">
                    {evaluation.reasons.map((reason) => (
                      <li key={reason}>{reason}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {result.changeWhen && (
              <div>
                <h3 className="font-heading text-lg font-bold text-deep-blue">
                  Wat zou deze uitkomst veranderen?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
                  Een boekhoudprogramma wordt interessanter als je bijvoorbeeld:
                </p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 sm:text-base">
                  {result.changeWhen.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {result.lookFor && (
              <div>
                <h3 className="font-heading text-lg font-bold text-deep-blue">
                  Waar je op kunt letten
                </h3>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 sm:text-base">
                  {result.lookFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {result.upgradeWhen && (
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                    {result.upgradeWhen}
                  </p>
                )}
                {result.note && (
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                    {result.note}
                  </p>
                )}
              </div>
            )}

            {result.selfDoWhen && (
              <div>
                <h3 className="font-heading text-lg font-bold text-deep-blue">
                  Wanneer zou je toch alles zelf kunnen doen?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
                  {result.selfDoWhen}
                </p>
              </div>
            )}

            {result.primaryNote && (
              <div>
                <h3 className="font-heading text-lg font-bold text-deep-blue">Voor jou interessant</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
                  {result.primaryNote}
                </p>
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-xl px-6">
                <Link href={result.primaryCta.href}>
                  {result.primaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="rounded-xl px-6"
                onClick={reset}
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Opnieuw doen
              </Button>
            </div>

            <div className="flex justify-between border-t border-slate-100 pt-4">
              <Button type="button" variant="ghost" onClick={goBack} className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Antwoord wijzigen
              </Button>
            </div>
          </div>
        )}
      </div>

      <p className="text-sm text-slate-500">
        <Link href="/tools/boekhoudprogramma-check" className="text-warm-orange hover:underline">
          ← Meer uitleg over welk boekhoudprogramma bij jou past
        </Link>
      </p>
    </div>
  );
}
