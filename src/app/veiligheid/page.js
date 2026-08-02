import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Crown,
  Database,
  Download,
  EyeOff,
  Lock,
  MapPin,
  Server,
  Shield,
  Trash2,
} from 'lucide-react';

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
    text: 'Op databaseniveau: alleen jij kunt jouw facturen en profiel lezen of wijzigen. Andere accounts zien jouw data niet.',
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
    text: 'Exporteer opgeslagen facturen als JSON of CSV vanuit je dashboard.',
  },
  {
    icon: Trash2,
    title: 'Verwijderen (AVG)',
    text: 'Verwijder facturen één voor één, of wis je hele account inclusief opgeslagen data.',
  },
  {
    icon: Shield,
    title: 'Back-ups',
    text: 'We gebruiken de geautomatiseerde databaseback-ups van Supabase. Bewaar belangrijke PDF’s ook zelf.',
  },
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fb] px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/"
          className="group mb-8 inline-flex items-center font-semibold text-deep-blue transition-colors hover:text-warm-orange"
        >
          <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
          Terug naar Home
        </Link>

        <header className="mb-10 text-center">
          <Shield className="mx-auto mb-4 h-14 w-14 text-deep-blue" />
          <h1 className="font-heading text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
            FactuurBaas veiligheid
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Beveiliging is geen bijzaak. Voor ondernemers die facturen bewaren, leggen we helder uit waar data staat
            en hoe we die beschermen.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2">
          {POINTS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-deep-blue">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h2 className="font-heading text-lg font-semibold text-deep-blue">{title}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
          <p className="text-sm text-slate-600">
            Details over verwerking en rechten staan in ons{' '}
            <Link href="/privacybeleid" className="font-medium text-warm-orange hover:underline">
              privacybeleid
            </Link>
            . De{' '}
            <Link href="/verwerkersovereenkomst" className="font-medium text-warm-orange hover:underline">
              verwerkersovereenkomst (DPA)
            </Link>{' '}
            maakt deel uit van de dienstverlening. FactuurBaas.nl is een dienst van 2xGen LLC. Vragen?{' '}
            <a href="mailto:mail@factuurbaas.nl" className="font-medium text-warm-orange hover:underline">
              mail@factuurbaas.nl
            </a>
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center font-heading font-bold text-deep-blue hover:text-warm-orange"
          >
            <Crown className="mr-2 h-5 w-5 text-warm-orange" />
            FactuurBaas.nl
          </Link>
        </div>
      </div>
    </div>
  );
}
