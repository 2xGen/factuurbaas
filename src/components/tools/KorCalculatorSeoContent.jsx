import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { KOR_FAQS, KOR_REVENUE_LIMIT, formatEuro } from '@/lib/korCalculator';

export default function KorCalculatorSeoContent({
  toolHref = '/tools/kor-calculator/berekenen',
}) {
  return (
    <div className="space-y-14 sm:space-y-16">
      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <p className="text-sm font-semibold text-deep-blue">Officiële informatie</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
          Deze tool geeft een indicatie. Voor aanmelding en voorwaarden: Belastingdienst KOR.
        </p>
        <a
          href="https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/hoe_werkt_de_btw_voor_mij/kleineondernemersregeling/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-warm-orange hover:underline"
        >
          <ArrowRight className="h-3.5 w-3.5" />
          Kleineondernemersregeling (Belastingdienst)
        </a>
      </div>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wat is de kleineondernemersregeling (KOR)?
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>
            De <strong>KOR</strong> is een btw-vrijstelling voor kleine ondernemers in Nederland.
            Is je omzet niet meer dan <strong>{formatEuro(KOR_REVENUE_LIMIT)}</strong> per
            kalenderjaar? Dan kun je mogelijk deelnemen.
          </p>
          <p>
            Als je in de KOR zit, reken je <strong>geen btw</strong> aan klanten, doe je{' '}
            <strong>geen btw-aangifte</strong> en kun je <strong>geen btw terugvragen</strong> op
            zakelijke kosten en investeringen.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wanneer is de KOR interessant?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          De KOR is vooral voordelig als je levert aan particulieren of btw-vrijgestelde
          organisaties — zij kunnen btw toch niet aftrekken. Heb je veel btw op inkopen? Dan kan
          btw-plicht met aftrek voordeliger zijn.
        </p>
        <ul className="mt-6 space-y-3">
          {[
            'Je verwachte jaaromzet blijft onder €20.000',
            'Je klanten zijn voornamelijk consumenten (particulieren)',
            'Je hebt weinig btw op zakelijke kosten',
            'Je wilt geen kwartaal-btw-aangifte doen',
          ].map((item) => (
            <li key={item} className="flex gap-2.5 text-slate-600">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-warm-orange" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Belangrijke regels en data
        </h2>
        <div className="mt-6 space-y-4">
          {[
            {
              title: 'Omzetgrens',
              text: 'Zodra je in een kalenderjaar meer dan €20.000 omzet behaalt, moet je je direct afmelden voor de KOR.',
            },
            {
              title: 'Aanmelden',
              text: 'Dien je aanvraag minimaal 4 weken vóór de start van een nieuw kwartaal in bij de Belastingdienst. De wijziging gaat in vanaf het volgende kwartaal.',
            },
            {
              title: 'EU-KOR',
              text: 'Sinds 1 januari 2025 kunnen kleine ondernemers onder voorwaarden ook gebruikmaken van de KOR in andere EU-landen.',
            },
            {
              title: 'Zakendoen binnen de EU',
              text: 'Lever je goederen of diensten binnen de EU? Dan gelden soms aangepaste btw-regels, ook als je in de KOR zit.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-deep-blue">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          KOR berekenen in 2 stappen
        </h2>
        <ol className="mt-6 space-y-4">
          <li className="text-slate-600">
            <strong className="text-deep-blue">1. Vul je verwachte jaaromzet in</strong> — wat denk
            je dit kalenderjaar te factureren?
          </li>
          <li className="text-slate-600">
            <strong className="text-deep-blue">2. Bekijk het resultaat</strong> — lig je onder of
            boven de KOR-grens van {formatEuro(KOR_REVENUE_LIMIT)}?
          </li>
        </ol>
        <div className="mt-6">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href={toolHref}>
              Open KOR calculator
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Veelgestelde vragen
        </h2>
        <div className="mt-6 space-y-4">
          {KOR_FAQS.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-xl border border-slate-200 bg-white p-4 sm:p-5"
            >
              <summary className="cursor-pointer list-none font-semibold text-deep-blue marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-3">
                  {q}
                  <span className="text-warm-orange transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-heading text-lg font-bold text-deep-blue">Gerelateerde tools</h2>
        <ul className="mt-4 space-y-2">
          {[
            { label: 'BTW calculator', href: '/tools/btw-calculator' },
            { label: 'Factuur maken', href: '/tools/factuur-maken' },
            { label: 'Uurtarief naar inkomen', href: '/tools/uurtarief-naar-inkomen' },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-warm-orange hover:underline"
              >
                <ArrowRight className="h-3.5 w-3.5" />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
        <h2 className="font-heading text-xl font-bold text-deep-blue sm:text-2xl">
          Check of de KOR bij jouw omzet past
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
          Gratis indicatie voor zzp&apos;ers en starters. Geen account nodig.
        </p>
        <div className="mt-6">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href={toolHref}>
              Open KOR calculator
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
