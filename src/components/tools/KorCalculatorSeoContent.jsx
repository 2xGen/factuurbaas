import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {
  KOR_FAQS,
  KOR_REVENUE_LIMIT,
  formatEuro,
  KOR_BELASTINGDIENST_URL,
  EU_KOR_BELASTINGDIENST_URL,
} from '@/lib/korCalculator';

export default function KorCalculatorSeoContent({
  toolHref = '/tools/kor-calculator/berekenen',
}) {
  return (
    <div className="space-y-14 sm:space-y-16">
      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          KOR berekenen: hoe werkt het?
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>
            De belangrijkste Nederlandse omzetgrens voor de KOR is{' '}
            <strong>{formatEuro(KOR_REVENUE_LIMIT)} per kalenderjaar</strong>.
          </p>
          <p>
            Heb je een onderneming die in Nederland is gevestigd en voldoe je aan de overige
            voorwaarden? Dan kun je mogelijk deelnemen aan de KOR wanneer je omzet niet hoger is dan{' '}
            {formatEuro(KOR_REVENUE_LIMIT)} per kalenderjaar.
          </p>
          <p>
            Bij de beoordeling wordt niet alleen naar je verwachte omzet gekeken. De Belastingdienst
            kijkt onder andere naar je omzet in het kalenderjaar waarin je je aanmeldt en het
            kalenderjaar daarvoor.
          </p>
        </div>
        <div className="mt-6">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href={toolHref}>
              KOR berekenen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          KOR check in 2 stappen
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Met onze eenvoudige calculator kun je snel een eerste check doen:
        </p>
        <h3 className="mt-6 font-heading text-lg font-bold text-deep-blue sm:text-xl">
          1. Vul je verwachte omzet in
        </h3>
        <p className="mt-2 leading-relaxed text-slate-600">
          Geef aan hoeveel omzet je verwacht te behalen in het betreffende kalenderjaar.
        </p>
        <h3 className="mt-6 font-heading text-lg font-bold text-deep-blue sm:text-xl">
          2. Bekijk de indicatie
        </h3>
        <p className="mt-2 leading-relaxed text-slate-600">
          De calculator laat zien of je omzet onder of boven de €20.000-grens uitkomt.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Een uitkomst onder {formatEuro(KOR_REVENUE_LIMIT)} betekent{' '}
          <strong>niet automatisch</strong> dat je aan alle voorwaarden voldoet. Gebruik de uitslag
          daarom als eerste indicatie en controleer de actuele voorwaarden bij de Belastingdienst.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">Wat is de KOR?</h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>
            De <strong>kleineondernemersregeling (KOR)</strong> is een btw-vrijstelling voor kleine
            ondernemingen.
          </p>
          <p>Als je deelneemt aan de KOR:</p>
        </div>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
          <li>bereken je geen btw aan je klanten</li>
          <li>doe je in principe geen btw-aangifte</li>
          <li>kun je de btw op zakelijke kosten en investeringen niet aftrekken</li>
        </ul>
        <p className="mt-4 leading-relaxed text-slate-600">
          De KOR kan daardoor aantrekkelijk zijn voor sommige kleine ondernemingen, maar is niet
          automatisch financieel voordelig voor iedereen.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wanneer kan de KOR interessant zijn?
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>
            De KOR kan interessant zijn wanneer je onderneming relatief weinig omzet heeft en je
            bijvoorbeeld weinig btw op zakelijke kosten en investeringen hebt.
          </p>
          <p>
            Voor sommige ondernemers kan deelname juist minder aantrekkelijk zijn. Als je bijvoorbeeld
            veel investeert en daardoor veel btw betaalt, kan het niet kunnen aftrekken van die btw
            een belangrijk nadeel zijn.
          </p>
          <p>Ook het type klant kan een rol spelen.</p>
          <p>
            Bij zakelijke klanten die btw kunnen aftrekken kan het bijvoorbeeld minder belangrijk zijn
            of je wel of geen btw in rekening brengt. Bij consumenten kan de situatie anders zijn.
          </p>
          <p>
            Kijk daarom niet alleen naar de €20.000-grens, maar ook naar de
            gevolgen voor je eigen onderneming.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wat is de omzetgrens van de KOR?
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>
            Voor de Nederlandse KOR geldt een omzetgrens van{' '}
            <strong>{formatEuro(KOR_REVENUE_LIMIT)} per kalenderjaar</strong>.
          </p>
          <p>
            Voor de beoordeling van de voorwaarden kijkt de Belastingdienst onder meer naar het
            kalenderjaar waarin je je aanmeldt en het kalenderjaar daarvoor.
          </p>
          <p>
            De manier waarop je omzet voor de KOR wordt berekend, kan afhankelijk zijn van je
            situatie. Als je bijvoorbeeld nog geen KOR gebruikt en btw in rekening brengt, telt die
            btw niet mee als omzet voor deze grens.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wat gebeurt er als je boven {formatEuro(KOR_REVENUE_LIMIT)} omzet komt?
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>
            Neem je al deel aan de KOR en komt je omzet in een kalenderjaar boven{' '}
            {formatEuro(KOR_REVENUE_LIMIT)} uit, dan vervalt de vrijstelling vanaf het moment waarop
            je boven de grens komt. Je moet je dan direct afmelden. Ook de handeling waarmee je boven
            de {formatEuro(KOR_REVENUE_LIMIT)} uitkomt, valt niet meer onder de btw-vrijstelling.
          </p>
          <p>Daarom is het belangrijk om je omzet gedurende het jaar goed bij te houden.</p>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hoe meld je je aan voor de KOR?
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>
            Voldoe je aan de voorwaarden en wil je deelnemen? Dan meld je je aan via{' '}
            <strong>Mijn Belastingdienst Zakelijk</strong>.
          </p>
          <p>
            De Belastingdienst geeft aan dat de verwerkingstijd 4 weken is. De deelname kan op zijn
            vroegst ingaan vanaf het eerstvolgende kwartaal of aangiftetijdvak.
          </p>
          <p>Wil je bijvoorbeeld vanaf 1 januari deelnemen, houd dan rekening met de aanmeldtermijn.</p>
        </div>
        <a
          href={KOR_BELASTINGDIENST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 font-semibold text-warm-orange hover:underline"
        >
          Bekijk de officiële KOR-informatie van de Belastingdienst
          <ArrowRight className="h-4 w-4" />
        </a>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          KOR en facturen
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>Doe je mee aan de KOR, dan bereken je geen btw aan je klanten.</p>
          <p>
            Dat betekent dat je facturen er anders uitzien dan facturen van een ondernemer die
            normaal btw in rekening brengt.
          </p>
          <p>
            Zet daarom niet zomaar 21% btw op een factuur wanneer je gebruikmaakt van de KOR.
          </p>
          <p>
            Wil je een factuur maken voor een klant? Met FactuurBaas kun je{' '}
            <Link href="/tools/factuur-maken" className="font-medium text-warm-orange hover:underline">
              gratis een factuur maken
            </Link>{' '}
            en je factuur als PDF downloaden.
          </p>
        </div>
        <div className="mt-6">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href="/create-invoice">
              Maak gratis een factuur
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          KOR voor zzp&apos;ers
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>
            De KOR is niet alleen voor een specifiek type zzp&apos;er. De regeling kan gelden voor
            verschillende soorten ondernemingen, zolang aan de voorwaarden wordt voldaan.
          </p>
          <p>
            Als zzp&apos;er is vooral belangrijk dat je niet alleen naar je omzetverwachting kijkt.
            Denk ook na over:
          </p>
        </div>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
          <li>hoeveel btw je betaalt over zakelijke kosten</li>
          <li>of je grote investeringen verwacht</li>
          <li>of je vooral aan consumenten of bedrijven verkoopt</li>
          <li>of je omzet in de buurt van {formatEuro(KOR_REVENUE_LIMIT)} komt</li>
          <li>of je ook zakendoet met klanten in andere EU-landen</li>
        </ul>
        <p className="mt-4 leading-relaxed text-slate-600">
          Bij twijfel is het verstandig de actuele informatie van de Belastingdienst te controleren.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          EU-KOR: zakendoen in andere EU-landen
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>
            Sinds 2025 bestaat er ook een <strong>EU-KOR</strong> voor ondernemers die in andere
            EU-landen zakendoen.
          </p>
          <p>
            Daarvoor gelden aanvullende voorwaarden. Zo geldt naast nationale omzetgrenzen een totale
            omzetgrens van <strong>€100.000 per kalenderjaar voor de EU</strong>.
          </p>
          <p>
            De EU-KOR is daarom niet hetzelfde als simpelweg de Nederlandse KOR toepassen op iedere
            buitenlandse klant.
          </p>
          <p>
            Heb je klanten in andere EU-landen? Controleer dan welke btw-regels voor jouw specifieke
            situatie gelden.
          </p>
        </div>
        <a
          href={EU_KOR_BELASTINGDIENST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 font-semibold text-warm-orange hover:underline"
        >
          Bekijk de EU-KOR bij de Belastingdienst
          <ArrowRight className="h-4 w-4" />
        </a>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Veelgestelde vragen over de KOR
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
          Doe de gratis KOR check
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
          Wil je snel zien hoe jouw verwachte omzet zich verhoudt tot de Nederlandse KOR-grens?
          Gebruik de gratis calculator als eerste check. Geen account nodig.
        </p>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
          Controleer voor een definitieve beslissing altijd de actuele voorwaarden bij de
          Belastingdienst.
        </p>
        <div className="mt-6">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href={toolHref}>
              Bereken de KOR
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
