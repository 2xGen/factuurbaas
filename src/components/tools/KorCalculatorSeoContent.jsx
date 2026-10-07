import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ArrowIcon, btn, FaqList } from '@/components/site/editorial';
import { Reveal } from '@/components/landing/page/motion';
import {
  KOR_FAQS,
  KOR_REVENUE_LIMIT,
  formatEuro,
  KOR_BELASTINGDIENST_URL,
  EU_KOR_BELASTINGDIENST_URL,
} from '@/lib/korCalculator';

const ARTICLE =
  'article-body prose prose-lg mx-auto max-w-3xl prose-p:leading-[1.75] prose-h2:text-[1.85rem] sm:prose-h2:text-[2.15rem] prose-h3:text-[1.35rem] [&>section:first-child>h2]:mt-0';

function Cta({ href, children }) {
  return (
    <div className="not-prose my-8">
      <Link href={href} className={btn.primary}>
        {children}
        <ArrowIcon />
      </Link>
    </div>
  );
}

function ExternalLink({ href, children }) {
  return (
    <p className="not-prose my-6">
      <a href={href} target="_blank" rel="noopener noreferrer" className={btn.link}>
        {children}
        <ArrowUpRight
          className="h-4 w-4 text-ember transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden
        />
      </a>
    </p>
  );
}

export default function KorCalculatorSeoContent({
  toolHref = '/tools/kor-calculator/berekenen',
}) {
  return (
    <div className={ARTICLE}>
      <section>
        <h2>KOR berekenen: hoe werkt het?</h2>
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
        <Cta href={toolHref}>KOR berekenen</Cta>
      </section>

      <section>
        <h2>KOR check in 2 stappen</h2>
        <p>Met onze eenvoudige calculator kun je snel een eerste check doen:</p>
        <div className="not-prose my-8 border-t border-ink/10">
          <div className="border-b border-ink/10 py-6">
            <h3 className="font-display text-[1.35rem] font-normal leading-snug tracking-[-0.02em] text-ink">
              <span className="mr-1 italic text-ember">1.</span> Vul je verwachte omzet in
            </h3>
            <p className="mt-2 leading-relaxed text-ink-500">
              Geef aan hoeveel omzet je verwacht te behalen in het betreffende kalenderjaar.
            </p>
          </div>
          <div className="border-b border-ink/10 py-6">
            <h3 className="font-display text-[1.35rem] font-normal leading-snug tracking-[-0.02em] text-ink">
              <span className="mr-1 italic text-ember">2.</span> Bekijk de indicatie
            </h3>
            <p className="mt-2 leading-relaxed text-ink-500">
              De calculator laat zien of je omzet onder of boven de €20.000-grens uitkomt.
            </p>
          </div>
        </div>
        <p>
          Een uitkomst onder {formatEuro(KOR_REVENUE_LIMIT)} betekent{' '}
          <strong>niet automatisch</strong> dat je aan alle voorwaarden voldoet. Gebruik de uitslag
          daarom als eerste indicatie en controleer de actuele voorwaarden bij de Belastingdienst.
        </p>
      </section>

      <section>
        <h2>Wat is de KOR?</h2>
        <p>
          De <strong>kleineondernemersregeling (KOR)</strong> is een btw-vrijstelling voor kleine
          ondernemingen.
        </p>
        <p>Als je deelneemt aan de KOR:</p>
        <ul>
          <li>bereken je geen btw aan je klanten</li>
          <li>doe je in principe geen btw-aangifte</li>
          <li>kun je de btw op zakelijke kosten en investeringen niet aftrekken</li>
        </ul>
        <p>
          De KOR kan daardoor aantrekkelijk zijn voor sommige kleine ondernemingen, maar is niet
          automatisch financieel voordelig voor iedereen.
        </p>
      </section>

      <section>
        <h2>Wanneer kan de KOR interessant zijn?</h2>
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
      </section>

      <section>
        <h2>Wat is de omzetgrens van de KOR?</h2>
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
      </section>

      <section>
        <h2>Wat gebeurt er als je boven {formatEuro(KOR_REVENUE_LIMIT)} omzet komt?</h2>
        <p>
          Neem je al deel aan de KOR en komt je omzet in een kalenderjaar boven{' '}
          {formatEuro(KOR_REVENUE_LIMIT)} uit, dan vervalt de vrijstelling vanaf het moment waarop
          je boven de grens komt. Je moet je dan direct afmelden. Ook de handeling waarmee je boven
          de {formatEuro(KOR_REVENUE_LIMIT)} uitkomt, valt niet meer onder de btw-vrijstelling.
        </p>
        <p>Daarom is het belangrijk om je omzet gedurende het jaar goed bij te houden.</p>
      </section>

      <section>
        <h2>Hoe meld je je aan voor de KOR?</h2>
        <p>
          Voldoe je aan de voorwaarden en wil je deelnemen? Dan meld je je aan via{' '}
          <strong>Mijn Belastingdienst Zakelijk</strong>.
        </p>
        <p>
          De Belastingdienst geeft aan dat de verwerkingstijd 4 weken is. De deelname kan op zijn
          vroegst ingaan vanaf het eerstvolgende kwartaal of aangiftetijdvak.
        </p>
        <p>Wil je bijvoorbeeld vanaf 1 januari deelnemen, houd dan rekening met de aanmeldtermijn.</p>
        <ExternalLink href={KOR_BELASTINGDIENST_URL}>
          Bekijk de officiële KOR-informatie van de Belastingdienst
        </ExternalLink>
      </section>

      <section>
        <h2>KOR en facturen</h2>
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
          <Link href="/tools/factuur-maken">gratis een factuur maken</Link> en je factuur als PDF
          downloaden.
        </p>
        <Cta href="/create-invoice">Maak gratis een factuur</Cta>
      </section>

      <section>
        <h2>KOR voor zzp&apos;ers</h2>
        <p>
          De KOR is niet alleen voor een specifiek type zzp&apos;er. De regeling kan gelden voor
          verschillende soorten ondernemingen, zolang aan de voorwaarden wordt voldaan.
        </p>
        <p>
          Als zzp&apos;er is vooral belangrijk dat je niet alleen naar je omzetverwachting kijkt.
          Denk ook na over:
        </p>
        <ul>
          <li>hoeveel btw je betaalt over zakelijke kosten</li>
          <li>of je grote investeringen verwacht</li>
          <li>of je vooral aan consumenten of bedrijven verkoopt</li>
          <li>of je omzet in de buurt van {formatEuro(KOR_REVENUE_LIMIT)} komt</li>
          <li>of je ook zakendoet met klanten in andere EU-landen</li>
        </ul>
        <p>
          Bij twijfel is het verstandig de actuele informatie van de Belastingdienst te controleren.
        </p>
      </section>

      <section>
        <h2>EU-KOR: zakendoen in andere EU-landen</h2>
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
        <ExternalLink href={EU_KOR_BELASTINGDIENST_URL}>
          Bekijk de EU-KOR bij de Belastingdienst
        </ExternalLink>
      </section>

      <section>
        <h2>Veelgestelde vragen over de KOR</h2>
        <FaqList
          className="not-prose mt-8"
          items={KOR_FAQS.map(({ q, a }) => ({ question: q, answer: a }))}
        />
      </section>

      <section className="not-prose mt-16">
        <h2 className="font-mono text-[11px] font-normal uppercase tracking-[0.18em] text-ember">
          Gerelateerde tools
        </h2>
        <ul className="mt-4 border-t border-ink/10">
          {[
            { label: 'BTW calculator', href: '/tools/btw-calculator' },
            { label: 'Factuur maken', href: '/tools/factuur-maken' },
            { label: 'Uurtarief naar inkomen', href: '/tools/uurtarief-naar-inkomen' },
          ].map((link) => (
            <li key={link.href} className="border-b border-ink/10">
              <Link
                href={link.href}
                className="group flex items-center justify-between gap-6 py-4 font-display text-xl leading-snug text-ink transition-colors hover:text-ink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
              >
                {link.label}
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-ember transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Reveal className="not-prose grain relative isolate mt-20 overflow-hidden rounded-2xl border border-ink/[0.08] bg-paper px-6 py-12 text-center shadow-paper sm:px-12 sm:py-14">
        <div className="bg-ledger mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <h2 className="mx-auto max-w-[22ch] font-display text-[1.9rem] font-normal leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.4rem]">
          Doe de gratis KOR check
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ink-500">
          Wil je snel zien hoe jouw verwachte omzet zich verhoudt tot de Nederlandse KOR-grens?
          Gebruik de gratis calculator als eerste check. Geen account nodig.
        </p>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink-400">
          Controleer voor een definitieve beslissing altijd de actuele voorwaarden bij de
          Belastingdienst.
        </p>
        <div className="mt-8">
          <Link href={toolHref} className={`${btn.primary} w-full sm:w-auto`}>
            Bereken de KOR
            <ArrowIcon />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
