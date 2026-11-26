'use client';

import { useMemo, useState } from 'react';
import { FieldHint, FieldLabel } from '@/components/tools/calculatorUi';
import { btn } from '@/components/site/editorial';

const inputClass =
  'mt-1.5 w-full rounded-xl border border-ink/15 bg-paper-50 px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-ink-400 focus:border-ink focus:bg-white focus:ring-2 focus:ring-ember/40';

function buildLetter({ bookkeeperName, yourName, companyName, endDate }) {
  const greeting = bookkeeperName.trim() || '[naam boekhouder]';
  const signer = yourName.trim() || '[Naam]';
  const company = companyName.trim() || '[Bedrijfsnaam]';
  const dateLine = endDate
    ? `\n\nIk verzoek je de samenwerking te beëindigen per ${endDate}, voor zover dit binnen de overeengekomen opzegtermijn past.`
    : '';

  return `Onderwerp: Beëindiging boekhoudkundige dienstverlening

Beste ${greeting},

Hierbij wil ik onze samenwerking met betrekking tot de boekhoudkundige dienstverlening beëindigen, met inachtneming van de overeengekomen opzegtermijn.${dateLine}

Graag ontvang ik een schriftelijke bevestiging van de einddatum van onze overeenkomst.

Daarnaast wil ik graag afspraken maken over de overdracht van mijn financiële administratie, waaronder de relevante financiële documenten, administratieve exports, belastingaangiften en eventuele lopende werkzaamheden.

Kun je aangeven welke stappen hiervoor nodig zijn en of er nog werkzaamheden of kosten openstaan?

Bedankt voor de samenwerking.

Met vriendelijke groet,
${signer}
${company}`;
}

export default function OpzegbriefGenerator({ id = 'opzegbrief-generator' }) {
  const [bookkeeperName, setBookkeeperName] = useState('');
  const [yourName, setYourName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [endDate, setEndDate] = useState('');
  const [copied, setCopied] = useState(false);

  const letter = useMemo(
    () => buildLetter({ bookkeeperName, yourName, companyName, endDate }),
    [bookkeeperName, yourName, companyName, endDate]
  );

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(letter);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div
      id={id}
      className="scroll-mt-28 overflow-hidden rounded-[1.5rem] border border-ink/[0.08] bg-white shadow-paper lg:grid lg:grid-cols-[0.95fr_1.05fr]"
    >
      <div className="space-y-5 border-b border-ink/[0.06] p-5 sm:p-7 lg:border-b-0 lg:border-r">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">
            Opzegbrief boekhouder maken
          </p>
          <h3 className="mt-2 font-display text-2xl font-normal tracking-[-0.02em] text-ink sm:text-[1.75rem]">
            Maak gratis een persoonlijke voorbeeldbrief
          </h3>
        </div>

        <div>
          <FieldLabel>Naam huidige boekhouder</FieldLabel>
          <input
            type="text"
            value={bookkeeperName}
            onChange={(event) => setBookkeeperName(event.target.value)}
            className={inputClass}
            placeholder="Bijv. Administratiekantoor Jansen"
            autoComplete="organization"
          />
        </div>

        <div>
          <FieldLabel>Jouw naam</FieldLabel>
          <input
            type="text"
            value={yourName}
            onChange={(event) => setYourName(event.target.value)}
            className={inputClass}
            placeholder="Voor- en achternaam"
            autoComplete="name"
          />
        </div>

        <div>
          <FieldLabel>Bedrijfsnaam</FieldLabel>
          <input
            type="text"
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
            className={inputClass}
            placeholder="Jouw bedrijfsnaam"
            autoComplete="organization"
          />
        </div>

        <div>
          <FieldLabel>Gewenste einddatum (optioneel)</FieldLabel>
          <input
            type="date"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
            className={inputClass}
          />
          <FieldHint className="mt-2">
            Controleer je contractuele opzegtermijn. De gewenste einddatum is niet automatisch de geldige einddatum.
          </FieldHint>
        </div>
      </div>

      <div className="flex flex-col bg-paper-50 p-5 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">Jouw opzegbrief</p>
          <button type="button" onClick={handleCopy} className={btn.secondary}>
            {copied ? 'Gekopieerd' : 'Kopiëren'}
          </button>
        </div>
        <pre className="mt-4 flex-1 whitespace-pre-wrap rounded-2xl border border-ink/[0.08] bg-white p-4 font-sans text-[15px] leading-relaxed text-ink-700 shadow-paper sm:p-5">
          {letter}
        </pre>
        <p className="mt-4 text-[13px] leading-relaxed text-ink-400">
          Pas de brief aan op jouw overeenkomst en situatie. Dit is een voorbeeldbrief, geen juridisch advies.
        </p>
      </div>
    </div>
  );
}
