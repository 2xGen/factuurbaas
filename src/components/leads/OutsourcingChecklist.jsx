'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'fb_uitbesteden_checklist';

const ITEMS = [
  'Bepaal welke werkzaamheden je wilt uitbesteden.',
  'Breng je huidige administratietijd in kaart.',
  'Bepaal je maandelijkse budget.',
  'Vraag naar ervaring met jouw rechtsvorm en branche.',
  'Controleer welke werkzaamheden zijn inbegrepen.',
  'Vraag naar aanvullende en eenmalige kosten.',
  'Bespreek hoe je facturen en bonnetjes aanlevert.',
  'Maak afspraken over belastingaangiften en deadlines.',
  'Controleer hoe je toegang houdt tot je administratie.',
  'Bespreek bereikbaarheid en communicatie.',
  'Controleer contractduur en opzegtermijn.',
  'Maak afspraken over de overdracht van bestaande gegevens.',
];

export default function OutsourcingChecklist() {
  const [checked, setChecked] = useState(() => ITEMS.map(() => false));
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setReady(true);
        return;
      }
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length === ITEMS.length) {
        setChecked(parsed.map(Boolean));
      }
    } catch {
      /* ignore corrupt storage */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {
      /* ignore quota / private mode */
    }
  }, [checked, ready]);

  const done = checked.filter(Boolean).length;

  function toggle(index) {
    setChecked((current) => current.map((value, i) => (i === index ? !value : value)));
  }

  return (
    <div className="rounded-[1.5rem] border border-ink/[0.08] bg-white p-5 shadow-paper sm:p-7">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">Checklist</p>
          <h3 className="mt-2 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
            Je boekhouding uitbesteden
          </h3>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
          {done} van {ITEMS.length} afgerond
        </p>
      </div>
      <ul className="mt-6 space-y-3">
        {ITEMS.map((label, index) => {
          const id = `uitbesteden-check-${index}`;
          return (
            <li key={label}>
              <label
                htmlFor={id}
                className="flex cursor-pointer items-start gap-3 rounded-xl border border-ink/[0.08] bg-paper-50 px-4 py-3 text-[15px] leading-relaxed text-ink-700 transition-colors hover:border-ink/20"
              >
                <input
                  id={id}
                  type="checkbox"
                  checked={checked[index]}
                  onChange={() => toggle(index)}
                  className="mt-1 h-4 w-4 shrink-0 rounded border-ink/30 text-ember focus:ring-ember"
                />
                <span className={checked[index] ? 'text-ink-400 line-through' : ''}>{label}</span>
              </label>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-[13px] leading-relaxed text-ink-400">
        Je voortgang wordt alleen lokaal op dit apparaat bewaard. Er worden geen checklistantwoorden
        verzonden.
      </p>
    </div>
  );
}
