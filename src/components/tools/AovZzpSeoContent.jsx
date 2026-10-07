import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { AOV_ZZP_GATE_FAQS } from '@/lib/aovZzpGate';
import InsifyAovCta from '@/components/aov/InsifyAovCta';
import { ArrowIcon, btn, Eyebrow } from '@/components/site/editorial';

const TOOL_HREF = '/tools/aov-berekenen-zzp';

const PROSE =
  'article-body prose prose-lg max-w-none prose-p:leading-[1.75] prose-h2:text-[1.85rem] sm:prose-h2:text-[2.15rem] prose-h3:text-[1.35rem] [&>section:first-child>h2:first-child]:mt-0';

function Cta({ href = TOOL_HREF, label }) {
  return (
    <div className="not-prose my-8 flex">
      <Link href={href} className={`${btn.primary} w-full text-center sm:w-auto`}>
        {label}
        {!label.trim().endsWith('→') && <ArrowIcon />}
      </Link>
    </div>
  );
}

function TextLink({ href, children }) {
  return <Link href={href}>{children}</Link>;
}

function BulletList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

const RELATED_LINKS = [
  { href: '/blogs/aov-zzp', label: 'AOV zzp: heb je die nodig?' },
  { href: '/blogs/wat-kost-een-aov-voor-zzpers', label: "Wat kost een AOV voor zzp'ers?" },
  { href: '/blogs/aov-voor-startende-zzpers', label: "AOV voor startende zzp'ers" },
  { href: '/blogs/aov-verplicht-voor-zzpers', label: "AOV verplicht voor zzp'ers?" },
  { href: '/blogs/aov-zonder-medische-keuring', label: 'AOV zonder medische keuring' },
  { href: '/blogs/aov-met-korte-wachttijd', label: 'AOV met korte wachttijd' },
  { href: '/blogs/aov-met-lange-wachttijd', label: 'AOV met lange wachttijd' },
  { href: '/blogs/hoeveel-aov-heb-ik-nodig', label: 'Hoeveel AOV heb ik nodig?' },
  { href: '/blogs/aov-berekenen-voor-zzpers', label: "AOV berekenen voor zzp'ers" },
  { href: '/tools/aov-berekenen-zzp', label: 'AOV-calculator' },
  { href: '/tools/uurtarief-naar-inkomen', label: 'Uurtarief naar inkomen' },
  { href: '/tools/hypotheek-zzp', label: "Hypotheek voor zzp'ers" },
];

export default function AovZzpSeoContent() {
  return (
    <div className={PROSE}>
      <section>
        <h2>Wat is een AOV voor zzp&apos;ers?</h2>
        <p>
          Een <strong>AOV (arbeidsongeschiktheidsverzekering)</strong> is een verzekering die
          inkomen kan uitkeren als je door ziekte of een ongeval niet of minder kunt werken.
        </p>
        <p>
          Als werknemer kun je bij ziekte meestal terugvallen op loondoorbetaling door je
          werkgever. Als zzp&apos;er heb je die werkgever niet. Je inkomen kan daardoor direct
          onder druk komen te staan als je langere tijd niet kunt werken.
        </p>
        <p>
          Een AOV kan dat financiële risico gedeeltelijk opvangen. Hoeveel je kunt verzekeren,
          wanneer de verzekering uitkeert en onder welke voorwaarden, verschilt per verzekeraar en
          polis.
        </p>
        <p>
          Daarom zijn er bij het kiezen van een AOV voor zzp&apos;ers vooral twee vragen belangrijk:
        </p>
        <ol>
          <li>
            <strong>Hoeveel inkomen wil je beschermen?</strong>
          </li>
          <li>
            <strong>Hoe lang kun je zelf zonder deze uitkering?</strong>
          </li>
        </ol>
        <p>Onze calculator helpt je met die financiële uitgangspunten.</p>
        <InsifyAovCta className="mt-6" />
        <Cta label="Bereken je benodigde AOV-dekking →" />
      </section>

      <section>
        <h2>Hoeveel AOV-dekking heb je nodig?</h2>
        <p>
          Een logisch startpunt is het bedrag dat je maandelijks nodig hebt als je door
          arbeidsongeschiktheid minder of helemaal niet meer kunt werken.
        </p>
        <p>
          Stel dat je bij arbeidsongeschiktheid €3.000 per maand wilt kunnen besteden. Heb je in
          die situatie nog €500 aan ander inkomen, dan blijft er een verschil van:
        </p>
        <p className="not-prose my-8 rounded-2xl border border-ink/[0.08] bg-white px-6 py-5 font-display text-[1.6rem] leading-tight tracking-[-0.02em] text-ink tabular-nums shadow-paper sm:text-[1.9rem]">
          €3.000 − €500 = €2.500 per maand
        </p>
        <p>
          Je benodigde inkomensdekking komt in dit voorbeeld uit op{' '}
          <strong>€2.500 per maand</strong>, oftewel €30.000 per jaar.
        </p>
        <p>
          Dit is alleen een rekenkundige indicatie. Het bedrag dat je daadwerkelijk kunt verzekeren
          wordt door de verzekeraar bepaald. Ander inkomen is bovendien niet automatisch hetzelfde
          als inkomen dat voor een AOV kan worden meegerekend.
        </p>
        <h3>Gebruik de calculator</h3>
        <p>
          Vul je gewenste maandinkomen, ander inkomen en gewenste wachttijd in. Je ziet vervolgens
          hoeveel inkomen je volgens deze eenvoudige berekening zou willen beschermen.
        </p>
        <Cta label="Bereken je AOV-dekking →" />
      </section>

      <section>
        <h2>Wat is een wachttijd bij een AOV?</h2>
        <p>
          De <strong>wachttijd</strong>, ook wel eigenrisicoperiode genoemd, is de periode tussen
          het moment waarop je arbeidsongeschikt raakt en het moment waarop een eventuele
          AOV-uitkering begint.
        </p>
        <p>
          Je kiest bij een verzekering een bepaalde wachttijd. Hoe langer deze periode, hoe langer
          je zelf voldoende financiële ruimte moet hebben.
        </p>
        <p>Stel dat je €2.500 per maand aan inkomen wilt beschermen:</p>
        <div className="overflow-x-auto">
          <table className="min-w-[280px]">
            <thead>
              <tr>
                <th>Wachttijd</th>
                <th className="text-right">Zelf te overbruggen inkomen</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1 maand', '€2.500'],
                ['3 maanden', '€7.500'],
                ['6 maanden', '€15.000'],
                ['12 maanden', '€30.000'],
                ['24 maanden', '€60.000'],
              ].map(([period, amount]) => (
                <tr key={period}>
                  <td>{period}</td>
                  <td className="text-right font-medium text-ink">{amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          De berekening is eenvoudig:{' '}
          <strong>
            benodigde maandelijkse dekking × aantal maanden wachttijd = inkomen dat je moet kunnen
            overbruggen
          </strong>
        </p>
        <p>
          Dit is geen berekening van de AOV-premie. Het laat alleen zien welke financiële buffer een
          bepaalde wachttijd betekent.
        </p>
        <Cta label="Vergelijk wachttijden met de calculator →" />
      </section>

      <section>
        <h2>Welke factoren beïnvloeden de kosten van een AOV?</h2>
        <p>
          De premie van een AOV is niet voor iedere zzp&apos;er hetzelfde. Verschillende
          persoonlijke en verzekeringstechnische keuzes kunnen invloed hebben op de premie.
        </p>
        <p>Belangrijke factoren zijn onder andere:</p>
        <BulletList
          items={[
            'Leeftijd',
            'Beroep en beroepsrisico',
            'Het verzekerde maandbedrag',
            'De wachttijd',
            'De eindleeftijd',
            'Gezondheid en medische beoordeling',
            'De voorwaarden van de polis',
          ]}
        />
        <p>
          Ook de manier waarop arbeidsongeschiktheid wordt vastgesteld en welke dekking je kiest,
          kan van belang zijn.
        </p>
        <p>
          FactuurBaas berekent daarom geen universele AOV-premie. Een bedrag dat voor de ene
          zzp&apos;er geldt, zegt weinig over wat een andere ondernemer daadwerkelijk betaalt.
        </p>
        <p>
          Meer weten?{' '}
          <TextLink href="/blogs/wat-kost-een-aov-voor-zzpers">
            Lees: Wat kost een AOV voor zzp&apos;ers? →
          </TextLink>
        </p>
      </section>

      <section>
        <h2>AOV voor startende zzp&apos;ers</h2>
        <p>
          Ben je net gestart als zzp&apos;er, dan kan een AOV extra aandacht verdienen. Je hebt
          mogelijk nog weinig financiële buffer opgebouwd en je inkomen kan in de eerste jaren
          veranderen.
        </p>
        <p>
          Tegelijkertijd betekent starten als zzp&apos;er niet automatisch dat je direct een
          bepaalde AOV moet afsluiten. Of een verzekering bij je past, hangt af van je financiële
          situatie, risico&apos;s en persoonlijke voorkeuren.
        </p>
        <p>
          Meer over de afweging: <TextLink href="/blogs/aov-zzp">AOV zzp: heb je die nodig?</TextLink>
        </p>
      </section>

      <section>
        <h2>Is een AOV verplicht voor zzp&apos;ers?</h2>
        <p>
          De vraag of een AOV verplicht is, komt bij veel zelfstandigen terug. De regels en plannen
          rond arbeidsongeschiktheidsverzekeringen voor zelfstandigen kunnen veranderen.
        </p>
        <p>
          Daarom is het belangrijk om onderscheid te maken tussen{' '}
          <strong>wat momenteel wettelijk verplicht is</strong>, bestaande vangnetten en eventuele
          toekomstige regelgeving.
        </p>
        <p>
          Lees hierover op <TextLink href="/blogs/aov-zzp">AOV zzp: heb je die nodig?</TextLink>
        </p>
      </section>

      <section>
        <h2>Wat berekent de AOV-calculator?</h2>
        <p>
          De gratis calculator van FactuurBaas is bedoeld om je{' '}
          <strong>inkomensbehoefte en wachttijd</strong> inzichtelijk te maken.
        </p>
        <p>Je vult onder andere in:</p>
        <BulletList
          items={[
            'Gewenst maandinkomen bij arbeidsongeschiktheid',
            'Ander inkomen in die situatie',
            'Gewenste wachttijd',
            'Huidige leeftijd',
            'Gewenste eindleeftijd',
          ]}
        />
        <p>De calculator laat vervolgens zien:</p>
        <BulletList
          items={[
            'Je benodigde maandelijkse dekking',
            'Je benodigde jaarlijkse dekking',
            'Hoeveel inkomen je tijdens de wachttijd zelf moet kunnen opvangen',
            'Wat verschillende wachttijden betekenen',
            'Welke factoren de daadwerkelijke AOV-premie kunnen beïnvloeden',
          ]}
        />
        <p>
          De calculator geeft <strong>geen premie</strong>, offerte of persoonlijk
          verzekeringsadvies.
        </p>
        <Cta label="Bereken je benodigde AOV-dekking →" />
      </section>

      <section>
        <h2>AOV vergelijken</h2>
        <p>
          Als je eenmaal weet hoeveel inkomen je ongeveer wilt beschermen en hoeveel wachttijd je
          financieel kunt overbruggen, kun je verschillende AOV&apos;s beter met elkaar vergelijken.
        </p>
        <p>Let daarbij niet alleen op de premie. Kijk ook naar bijvoorbeeld:</p>
        <BulletList
          items={[
            'Het verzekerde bedrag',
            'De wachttijd',
            'De eindleeftijd',
            'De voorwaarden voor een uitkering',
            'De definitie van arbeidsongeschiktheid',
            'Uitsluitingen',
            'Indexatie en eventuele verhogingen',
            'De voorwaarden bij gedeeltelijke arbeidsongeschiktheid',
          ]}
        />
        <p>
          Een goedkope AOV is niet automatisch dezelfde dekking als een duurdere verzekering. De
          voorwaarden bepalen mede wat je daadwerkelijk verzekert.
        </p>
        <p>
          Meer context: <TextLink href="/blogs/aov-zzp">AOV zzp: heb je die nodig?</TextLink>
        </p>
      </section>

      <section>
        <h2>Veelgestelde vragen over AOV voor zzp&apos;ers</h2>
        <div className="not-prose mt-8 border-t border-ink/15">
          {AOV_ZZP_GATE_FAQS.map(({ q, a }) => (
            <div key={q} className="border-b border-ink/15 py-6">
              <h3 className="font-display text-xl font-normal leading-snug tracking-[-0.01em] text-ink sm:text-[1.35rem]">
                {q}
              </h3>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-500 sm:text-base">
                {a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="not-prose mt-16 rounded-2xl border border-ink/[0.08] bg-paper p-6 sm:p-10">
        <Eyebrow>Let op</Eyebrow>
        <h2 className="mt-3 font-display text-[1.6rem] font-normal leading-[1.15] tracking-[-0.02em] text-ink sm:text-[1.9rem]">
          Geen verzekeringsadvies
        </h2>
        <p className="mt-4 leading-relaxed text-ink-700">
          De informatie op deze pagina en de berekening zijn uitsluitend bedoeld als algemene
          informatie.
        </p>
        <p className="mt-3 leading-relaxed text-ink-700">
          Het daadwerkelijk verzekerbare bedrag, de premie, acceptatie en polisvoorwaarden
          verschillen per verzekeraar en persoonlijke situatie. Gebruik de calculator om je eigen
          uitgangspunten scherp te krijgen en vergelijk daarna de daadwerkelijke voorwaarden en
          offertes.
        </p>
        <Cta label="Start de AOV-calculator →" />
      </section>

      <section className="not-prose mt-16">
        <h2 className="border-b border-ink/10 pb-5 font-display text-[1.6rem] font-normal leading-[1.15] tracking-[-0.02em] text-ink sm:text-[1.9rem]">
          Gerelateerde tools & artikelen
        </h2>
        <ul className="grid sm:grid-cols-2 sm:gap-x-10">
          {RELATED_LINKS.map((link) => (
            <li key={link.href} className="border-b border-ink/10">
              <Link
                href={link.href}
                className="group flex items-center justify-between gap-4 py-4 text-[15px] text-ink transition-colors hover:text-ember-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
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
    </div>
  );
}
