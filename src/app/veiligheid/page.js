import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Database,
  Download,
  EyeOff,
  Lock,
  MapPin,
  Server,
  Shield,
  Trash2,
} from 'lucide-react';
import { DisplayHeading } from '@/components/site/editorial';

export const metadata = {
  title: 'Veiligheid | FactuurBaas',
  description:
    'Hoe FactuurBaas je gegevens beveiligt: EU-hosting (Stockholm), RLS, privé-opslag, encryptie in transit, export en verwijderen.',
  alternates: { canonical: 'https://factuurbaas.nl/veiligheid' },
};

const POINTS = [
  {
    icon: Lock,
    title: 'Versleuteld in transit',
    text: 'Verkeer naar FactuurBaas loopt via HTTPS. Gegevens worden niet als open tekst over het web gestuurd.',
  },
  {
    icon: MapPin,
    title: 'EU-hosting',
    text: 'Opgeslagen accountgegevens staan bij Supabase in regio eu-north-1 (Stockholm, Zweden) — binnen de EU/EER.',
  },
  {
    icon: Database,
    title: 'Row Level Security',
    text: 'Op databaseniveau: alleen jij kunt jouw facturen, offertes, inkomsten, uitgaven, uren en profiel lezen of wijzigen. Andere accounts zien jouw data niet.',
  },
  {
    icon: Server,
    title: 'Privé-opslag voor logo’s',
    text: 'Logo’s staan in een private bucket. We bewaren geen langlevende openbare downloadlinks in de database.',
  },
  {
    icon: EyeOff,
    title: 'Geen verkoop van data',
    text: 'We verkopen je factuur- of bedrijfsgegevens niet. Google-login vraagt alleen identiteit — geen Gmail of contacten.',
  },
  {
    icon: Download,
    title: 'Export wanneer jij wilt',
    text: 'Download je accountgegevens als JSON via Profiel. Facturen en offertes kun je ook als JSON of CSV exporteren.',
  },
  {
    icon: Trash2,
    title: 'Verwijderen (AVG)',
    text: 'Verwijder facturen, offertes, inkomsten, uitgaven of uren één voor één, of wis je hele account inclusief opgeslagen data.',
  },
  {
    icon: Shield,
    title: 'Back-ups',
    text: 'We gebruiken de geautomatiseerde databaseback-ups van Supabase. Bewaar belangrijke PDF’s ook zelf.',
  },
];

const inlineLink =
  'font-medium text-ink underline decoration-ink/20 underline-offset-[5px] transition-colors hover:decoration-ember';

const rise = (ms) => ({ animationDelay: `${ms}ms` });

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="grain relative isolate overflow-hidden bg-paper">
        <div className="bg-ledger mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div
          className="pointer-events-none absolute -right-40 -top-48 -z-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(210,96,26,0.12),transparent_65%)]"
          aria-hidden
        />
        <div className="container mx-auto px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:pb-24">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-paper motion-safe:animate-rise"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" aria-hidden />
            Terug naar Home
          </Link>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <div>
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/10 bg-white/80 shadow-paper motion-safe:animate-rise"
                style={rise(40)}
              >
                <Shield className="h-5 w-5 text-ember" strokeWidth={1.75} aria-hidden />
              </span>
              <DisplayHeading
                as="h1"
                size="xl"
                className="mt-7 max-w-[14ch] motion-safe:animate-rise"
                style={rise(100)}
              >
                FactuurBaas <em>veiligheid</em>
              </DisplayHeading>
            </div>
            <p
              className="max-w-xl text-lg leading-relaxed text-ink-500 motion-safe:animate-rise sm:text-xl lg:ml-auto"
              style={rise(160)}
            >
              Beveiliging is geen bijzaak. Voor ondernemers die facturen bewaren, leggen we helder uit waar data staat
              en hoe we die beschermen.
            </p>
          </div>
        </div>
      </header>

      <section className="border-t border-ink/[0.06] bg-paper-50">
        <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <ul className="grid border-t border-ink/15 md:grid-cols-2 md:gap-x-16">
            {POINTS.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                className="grid grid-cols-[auto_1fr] gap-5 border-b border-ink/15 py-8 sm:gap-6 sm:py-10"
              >
                <div className="flex flex-col items-center gap-4">
                  <span className="font-display text-2xl italic leading-none text-ember" aria-hidden>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 bg-white text-ink-700">
                    <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                  </span>
                </div>
                <div>
                  <DisplayHeading size="sm">{title}</DisplayHeading>
                  <p className="mt-2.5 max-w-md text-[15px] leading-relaxed text-ink-500 sm:text-base">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-14 rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-paper sm:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end md:gap-12">
              <p className="max-w-2xl text-[15px] leading-relaxed text-ink-500 sm:text-base">
                Details over verwerking en rechten staan in ons{' '}
                <Link href="/privacybeleid" className={inlineLink}>
                  privacybeleid
                </Link>
                . De{' '}
                <Link href="/verwerkersovereenkomst" className={inlineLink}>
                  verwerkersovereenkomst (DPA)
                </Link>{' '}
                maakt deel uit van de dienstverlening. FactuurBaas.nl is een dienst van 2xGen LLC. Vragen?{' '}
                <a href="mailto:mail@factuurbaas.nl" className={inlineLink}>
                  mail@factuurbaas.nl
                </a>
              </p>
              <Link
                href="/"
                className="group inline-flex items-center gap-2.5 self-start rounded-full border border-ink/15 bg-paper-50 py-2 pl-2.5 pr-4 font-display text-lg text-ink transition-colors hover:border-ink/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 md:self-auto"
              >
                <img src="/crown-favicon.svg" alt="" aria-hidden className="h-6 w-6" />
                FactuurBaas.nl
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
