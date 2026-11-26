'use client';

import { useEffect, useState } from 'react';
import { ArrowIcon, btn } from '@/components/site/editorial';

const STORAGE_KEY = 'fb_btw_aangifte_checklist';

const ITEMS = [
  'Alle verkoopfacturen verzameld',
  'Alle creditfacturen verzameld',
  'Alle inkoopfacturen verzameld',
  'Zakelijke bonnetjes verzameld',
  'Banktransacties beschikbaar',
  'Buitenlandse transacties gecontroleerd (indien van toepassing)',
  'Privétransacties toegelicht (indien van toepassing)',
  'Bijzondere btw-regelingen gecontroleerd (indien van toepassing)',
  'Ontbrekende documenten opgevraagd',
  'Eerdere fouten en correcties genoteerd (indien van toepassing)',
];

export default function BtwAangifteChecklist({ id = 'btw-checklist' }) {
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
  const remaining = ITEMS.length - done;
  const progress = Math.round((done / ITEMS.length) * 100);

  function toggle(index) {
    setChecked((current) => current.map((value, i) => (i === index ? !value : value)));
  }

  function reset() {
    setChecked(ITEMS.map(() => false));
  }

  return (
    <div
      id={id}
      className="scroll-mt-28 overflow-hidden rounded-[1.5rem] border border-ink/[0.08] bg-white shadow-paper"
    >
      <div className="border-b border-ink/[0.06] p-5 sm:p-7">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">Klaar voor je btw-aangifte?</p>
        <h3 className="mt-2 font-display text-2xl font-normal tracking-[-0.02em] text-ink sm:text-[1.75rem]">
          Controleer of je alle benodigde documenten hebt verzameld
        </h3>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">Jouw voorbereiding</p>
            <p className="mt-1 font-display text-3xl font-normal tracking-[-0.03em] text-ink">
              {done} van {ITEMS.length}
            </p>
          </div>
          <p className="text-sm text-ink-500">{progress}% afgerond</p>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-ink/10" aria-hidden>
          <span className="block h-full rounded-full bg-ember transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <ul className="space-y-2 p-5 sm:p-7">
        {ITEMS.map((label, index) => {
          const itemId = `btw-check-${index}`;
          return (
            <li key={label}>
              <label
                htmlFor={itemId}
                className="flex cursor-pointer items-start gap-3 rounded-xl border border-ink/[0.08] bg-paper-50 px-4 py-3 text-[15px] leading-relaxed text-ink-700 transition-colors hover:border-ink/20"
              >
                <input
                  id={itemId}
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

      <div className="space-y-4 border-t border-ink/[0.06] p-5 sm:p-7">
        <p className="text-sm leading-relaxed text-ink-500">
          {remaining === 0
            ? 'Je hebt alle voorbereidingspunten afgevinkt. Niet alle onderdelen zijn op iedere onderneming van toepassing.'
            : `Nog ${remaining} voorbereidingspunt${remaining === 1 ? '' : 'en'} te gaan. Niet alle onderdelen zijn op iedere onderneming van toepassing.`}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="#boekhouder-formulier" className={`${btn.primary} w-full sm:w-auto`}>
            Ik wil hulp bij mijn btw-aangifte
            <ArrowIcon />
          </a>
          <button
            type="button"
            onClick={reset}
            className="text-sm font-medium text-ink-500 underline decoration-ink/20 underline-offset-4 hover:decoration-ember"
          >
            Checklist opnieuw beginnen
          </button>
        </div>
        <p className="text-[12px] leading-relaxed text-ink-400">
          Deze checklist helpt bij de voorbereiding en controleert niet of je aangifte fiscaal correct is. Je
          voortgang wordt alleen lokaal op dit apparaat bewaard.
        </p>
      </div>
    </div>
  );
}
