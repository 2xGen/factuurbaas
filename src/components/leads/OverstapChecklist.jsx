'use client';

import { useEffect, useMemo, useState } from 'react';
import { btn } from '@/components/site/editorial';

const STORAGE_KEY = 'fb_overstap_checklist';

const CATEGORIES = [
  {
    id: 'prep',
    title: 'Voorbereiding',
    items: [
      'Reden voor overstappen bepaald',
      'Huidige overeenkomst gecontroleerd',
      'Opzegtermijn gecontroleerd',
      'Nieuwe boekhouder gevonden',
      'Nieuwe dienstverlening en tarieven besproken',
      'Eventuele overstapkosten besproken',
      'Overstapdatum afgesproken',
    ],
  },
  {
    id: 'transfer',
    title: 'Administratieve overdracht',
    items: [
      'Verkoopfacturen beschikbaar',
      'Inkoopfacturen en bonnetjes beschikbaar',
      'Banktransacties beschikbaar',
      'Grootboekadministratie geëxporteerd',
      'Openstaande facturen in kaart gebracht',
      'Financiële overzichten beschikbaar',
      'Eerdere belastingaangiften beschikbaar',
      'Jaarrekeningen beschikbaar indien van toepassing',
      'Salarisadministratie beschikbaar indien van toepassing',
    ],
  },
  {
    id: 'finish',
    title: 'Afronding',
    items: [
      'Huidige overeenkomst schriftelijk opgezegd',
      'Einddatum bevestigd',
      'Verantwoordelijkheid voor lopende aangiften afgesproken',
      'Administratie veilig overgedragen',
      'Nieuwe boekhoudkundige werkwijze ingericht',
      'Oude toegangsrechten en machtigingen waar nodig ingetrokken',
    ],
  },
];

const ALL_KEYS = CATEGORIES.flatMap((category) =>
  category.items.map((_, index) => `${category.id}-${index}`)
);

function emptyState() {
  return Object.fromEntries(ALL_KEYS.map((key) => [key, false]));
}

export default function OverstapChecklist({ id = 'overstap-checklist' }) {
  const [checked, setChecked] = useState(emptyState);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setReady(true);
        return;
      }
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        setChecked({ ...emptyState(), ...parsed });
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

  const done = useMemo(() => Object.values(checked).filter(Boolean).length, [checked]);
  const total = ALL_KEYS.length;

  function toggle(key) {
    setChecked((current) => ({ ...current, [key]: !current[key] }));
  }

  function handlePrint() {
    window.print();
  }

  return (
    <div
      id={id}
      className="scroll-mt-28 overflow-hidden rounded-[1.5rem] border border-ink/[0.08] bg-white p-5 shadow-paper sm:p-7 print:border-0 print:shadow-none"
    >
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">Overstapchecklist</p>
          <h3 className="mt-2 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
            Voorbereiding, overdracht en afronding
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
            {done} van {total} afgerond
          </p>
          <button type="button" onClick={handlePrint} className={`${btn.secondary} print:hidden`}>
            Print checklist
          </button>
        </div>
      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-ink/10" aria-hidden>
        <span
          className="block h-full rounded-full bg-ember transition-all"
          style={{ width: `${(done / total) * 100}%` }}
        />
      </div>

      <div className="mt-8 space-y-8">
        {CATEGORIES.map((category) => {
          const categoryDone = category.items.filter((_, index) => checked[`${category.id}-${index}`]).length;
          return (
            <section key={category.id}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-display text-xl font-normal tracking-[-0.02em] text-ink">
                  {category.title}
                </h4>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400">
                  {categoryDone}/{category.items.length}
                </p>
              </div>
              <ul className="mt-4 space-y-2">
                {category.items.map((label, index) => {
                  const key = `${category.id}-${index}`;
                  const inputId = `overstap-check-${key}`;
                  return (
                    <li key={key}>
                      <label
                        htmlFor={inputId}
                        className="flex cursor-pointer items-start gap-3 rounded-xl border border-ink/[0.08] bg-paper-50 px-4 py-3 text-[15px] leading-relaxed text-ink-700 transition-colors hover:border-ink/20 print:border-ink/20"
                      >
                        <input
                          id={inputId}
                          type="checkbox"
                          checked={Boolean(checked[key])}
                          onChange={() => toggle(key)}
                          className="mt-1 h-4 w-4 shrink-0 rounded border-ink/30 text-ember focus:ring-ember"
                        />
                        <span className={checked[key] ? 'text-ink-400 line-through' : ''}>{label}</span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>

      <p className="mt-6 text-[13px] leading-relaxed text-ink-400 print:hidden">
        Je voortgang wordt alleen lokaal op dit apparaat bewaard. Je nieuwe boekhouder kan aanvullende documenten
        nodig hebben.
      </p>
    </div>
  );
}
