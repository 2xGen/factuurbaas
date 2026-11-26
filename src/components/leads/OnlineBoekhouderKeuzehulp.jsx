'use client';

import { useMemo, useState } from 'react';
import { ArrowIcon, btn } from '@/components/site/editorial';

const QUESTIONS = [
  {
    id: 'documents',
    question: 'Hoe bewaar je momenteel je facturen en bonnetjes?',
    options: [
      { id: 'digital', label: 'Volledig digitaal', scores: { online: 2, hybrid: 1, local: 0 } },
      { id: 'mixed', label: 'Deels digitaal, deels op papier', scores: { online: 1, hybrid: 2, local: 1 } },
      { id: 'paper', label: 'Voornamelijk op papier', scores: { online: 0, hybrid: 1, local: 2 } },
    ],
  },
  {
    id: 'contact',
    question: 'Hoe wil je contact houden met je boekhouder?',
    options: [
      { id: 'remote', label: 'E-mail, telefoon of video', scores: { online: 2, hybrid: 1, local: 0 } },
      { id: 'both', label: 'Digitaal en af en toe persoonlijk', scores: { online: 1, hybrid: 2, local: 1 } },
      { id: 'inperson', label: 'Voornamelijk persoonlijk', scores: { online: 0, hybrid: 1, local: 2 } },
    ],
  },
  {
    id: 'software',
    question: 'Hoe comfortabel ben je met online software?',
    options: [
      { id: 'very', label: 'Heel comfortabel', scores: { online: 2, hybrid: 1, local: 0 } },
      { id: 'some', label: 'Met enige uitleg', scores: { online: 1, hybrid: 2, local: 1 } },
      { id: 'low', label: 'Liever zo min mogelijk', scores: { online: 0, hybrid: 1, local: 2 } },
    ],
  },
  {
    id: 'location',
    question: 'Waar werk je voornamelijk?',
    options: [
      { id: 'mobile', label: 'Op verschillende locaties', scores: { online: 2, hybrid: 1, local: 0 } },
      { id: 'mixedloc', label: 'Op een vaste locatie, soms onderweg', scores: { online: 1, hybrid: 2, local: 1 } },
      { id: 'fixed', label: 'Op een vaste locatie', scores: { online: 0, hybrid: 1, local: 2 } },
    ],
  },
  {
    id: 'meetings',
    question: 'Hoe belangrijk zijn fysieke afspraken?',
    options: [
      { id: 'none', label: 'Niet belangrijk', scores: { online: 2, hybrid: 1, local: 0 } },
      { id: 'sometimes', label: 'Af en toe prettig', scores: { online: 1, hybrid: 2, local: 1 } },
      { id: 'important', label: 'Heel belangrijk', scores: { online: 0, hybrid: 1, local: 2 } },
    ],
  },
];

const RESULTS = {
  online: {
    eyebrow: 'Online',
    title: 'Een online boekhouder past waarschijnlijk goed bij jou',
    text: 'Je werkt digitaal, hebt weinig behoefte aan fysieke afspraken en voelt je comfortabel met online software. Een volledig digitale samenwerking kan je flexibel houden.',
  },
  hybrid: {
    eyebrow: 'Hybride',
    title: 'Een hybride samenwerking lijkt het best bij je te passen',
    text: 'Je wilt digitaal werken, maar ook af en toe persoonlijk contact. Zoek een boekhouder die digitale aanlevering combineert met bereikbaar overleg.',
  },
  local: {
    eyebrow: 'Persoonlijk',
    title: 'Een meer persoonlijke of lokale samenwerking past beter',
    text: 'Fysieke afspraken of minder digitale processen zijn voor jou belangrijk. Een traditionele of hybride boekhouder kan beter aansluiten — digitaal aanleveren blijft vaak wel mogelijk.',
  },
};

function scoreAnswers(answers) {
  const totals = { online: 0, hybrid: 0, local: 0 };
  QUESTIONS.forEach((question) => {
    const selectedId = answers[question.id];
    const option = question.options.find((item) => item.id === selectedId);
    if (!option) return;
    totals.online += option.scores.online;
    totals.hybrid += option.scores.hybrid;
    totals.local += option.scores.local;
  });
  const winner = Object.entries(totals).sort((a, b) => b[1] - a[1])[0][0];
  return { totals, winner };
}

export default function OnlineBoekhouderKeuzehulp({ id = 'online-keuzehulp' }) {
  const [answers, setAnswers] = useState({});
  const answered = Object.keys(answers).length;
  const complete = answered === QUESTIONS.length;

  const result = useMemo(() => {
    if (!complete) return null;
    const scored = scoreAnswers(answers);
    return { ...RESULTS[scored.winner], totals: scored.totals, winner: scored.winner };
  }, [answers, complete]);

  function select(questionId, optionId) {
    setAnswers((current) => ({ ...current, [questionId]: optionId }));
  }

  function reset() {
    setAnswers({});
  }

  return (
    <div
      id={id}
      className="scroll-mt-28 overflow-hidden rounded-[1.5rem] border border-ink/[0.08] bg-white shadow-paper"
    >
      <div className="border-b border-ink/[0.06] p-5 sm:p-7">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">
          Past een online boekhouder bij jou?
        </p>
        <h3 className="mt-2 font-display text-2xl font-normal tracking-[-0.02em] text-ink sm:text-[1.75rem]">
          Beantwoord vijf vragen en ontdek welke manier van samenwerken bij je past
        </h3>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">Jouw voortgang</p>
            <p className="mt-1 font-display text-3xl font-normal tracking-[-0.03em] text-ink">
              {answered} van {QUESTIONS.length}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              ['Online', 'online'],
              ['Hybride', 'hybrid'],
              ['Persoonlijk', 'local'],
            ].map(([label, key]) => (
              <span
                key={key}
                className={`rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] ${
                  result?.winner === key
                    ? 'border-ember bg-ember/10 text-ember'
                    : 'border-ink/10 text-ink-400'
                }`}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-ink/10" aria-hidden>
          <span
            className="block h-full rounded-full bg-ember transition-all"
            style={{ width: `${(answered / QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-8 p-5 sm:p-7">
        {QUESTIONS.map((question, index) => (
          <fieldset key={question.id}>
            <legend className="font-medium text-ink">
              {index + 1}. {question.question}
            </legend>
            <div className="mt-3 grid gap-2">
              {question.options.map((option) => {
                const selected = answers[question.id] === option.id;
                return (
                  <label
                    key={option.id}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-[15px] transition-colors ${
                      selected
                        ? 'border-ink bg-white text-ink shadow-sm'
                        : 'border-ink/10 bg-paper-50 text-ink-700 hover:border-ink/30'
                    }`}
                  >
                    <input
                      type="radio"
                      name={question.id}
                      value={option.id}
                      checked={selected}
                      onChange={() => select(question.id, option.id)}
                      className="h-4 w-4 border-ink/30 text-ember focus:ring-ember"
                    />
                    {option.label}
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="border-t border-ink/[0.06] p-5 sm:p-7">
        {result ? (
          <div className="space-y-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">{result.eyebrow}</p>
            <p className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">{result.title}</p>
            <p className="text-[15px] leading-relaxed text-ink-500">{result.text}</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#boekhouder-formulier" className={`${btn.primary} w-full sm:w-auto`}>
                Vind mijn online boekhouder
                <ArrowIcon />
              </a>
              <button
                type="button"
                onClick={reset}
                className="text-sm font-medium text-ink-500 underline decoration-ink/20 underline-offset-4 hover:decoration-ember"
              >
                Opnieuw beginnen
              </button>
            </div>
          </div>
        ) : (
          <p className="text-sm leading-relaxed text-ink-500">
            Beantwoord alle vragen om je resultaat te bekijken. Gratis · Geen account nodig · Indicatieve keuzehulp
            op basis van jouw voorkeuren.
          </p>
        )}
      </div>
    </div>
  );
}
