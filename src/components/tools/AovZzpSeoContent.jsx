import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { AOV_ZZP_GATE_FAQS } from '@/lib/aovZzpGate';

const TOOL_HREF = '/tools/aov-berekenen-zzp';

function Cta({ href = TOOL_HREF, label }) {
  return (
    <Button asChild size="lg" className="rounded-xl px-8">
      <Link href={href}>
        {label}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </Button>
  );
}

function TextLink({ href, children }) {
  return (
    <Link href={href} className="font-medium text-warm-orange hover:underline">
      {children}
    </Link>
  );
}

function BulletList({ items }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-slate-600">
          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-warm-orange" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AovZzpSeoContent() {
  return (
    <div className="space-y-14">
      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wat is een AOV voor zzp&apos;ers?
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Een <strong>AOV (arbeidsongeschiktheidsverzekering)</strong> is een verzekering die
          inkomen kan uitkeren als je door ziekte of een ongeval niet of minder kunt werken.
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Als werknemer kun je bij ziekte meestal terugvallen op loondoorbetaling door je
          werkgever. Als zzp&apos;er heb je die werkgever niet. Je inkomen kan daardoor direct
          onder druk komen te staan als je langere tijd niet kunt werken.
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Een AOV kan dat financiële risico gedeeltelijk opvangen. Hoeveel je kunt verzekeren,
          wanneer de verzekering uitkeert en onder welke voorwaarden, verschilt per verzekeraar en
          polis.
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Daarom zijn er bij het kiezen van een AOV voor zzp&apos;ers vooral twee vragen belangrijk:
        </p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-600">
          <li>
            <strong>Hoeveel inkomen wil je beschermen?</strong>
          </li>
          <li>
            <strong>Hoe lang kun je zelf zonder deze uitkering?</strong>
          </li>
        </ol>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Onze calculator helpt je met die financiële uitgangspunten.
        </p>
        <div className="mt-6">
          <Cta label="Bereken je benodigde AOV-dekking →" />
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hoeveel AOV-dekking heb je nodig?
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Een logisch startpunt is het bedrag dat je maandelijks nodig hebt als je door
          arbeidsongeschiktheid minder of helemaal niet meer kunt werken.
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Stel dat je bij arbeidsongeschiktheid €3.000 per maand wilt kunnen besteden. Heb je in
          die situatie nog €500 aan ander inkomen, dan blijft er een verschil van:
        </p>
        <p className="mt-4 text-lg font-semibold text-deep-blue">
          €3.000 − €500 = €2.500 per maand
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Je benodigde inkomensdekking komt in dit voorbeeld uit op{' '}
          <strong>€2.500 per maand</strong>, oftewel €30.000 per jaar.
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Dit is alleen een rekenkundige indicatie. Het bedrag dat je daadwerkelijk kunt verzekeren
          wordt door de verzekeraar bepaald. Ander inkomen is bovendien niet automatisch hetzelfde
          als inkomen dat voor een AOV kan worden meegerekend.
        </p>
        <h3 className="mt-8 font-heading text-xl font-semibold text-deep-blue">
          Gebruik de calculator
        </h3>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Vul je gewenste maandinkomen, ander inkomen en gewenste wachttijd in. Je ziet vervolgens
          hoeveel inkomen je volgens deze eenvoudige berekening zou willen beschermen.
        </p>
        <div className="mt-6">
          <Cta label="Bereken je AOV-dekking →" />
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wat is een wachttijd bij een AOV?
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          De <strong>wachttijd</strong>, ook wel eigenrisicoperiode genoemd, is de periode tussen
          het moment waarop je arbeidsongeschikt raakt en het moment waarop een eventuele
          AOV-uitkering begint.
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Je kiest bij een verzekering een bepaalde wachttijd. Hoe langer deze periode, hoe langer
          je zelf voldoende financiële ruimte moet hebben.
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Stel dat je €2.500 per maand aan inkomen wilt beschermen:
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[280px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-4 font-medium">Wachttijd</th>
                <th className="py-2 font-medium text-right">Zelf te overbruggen inkomen</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {[
                ['1 maand', '€2.500'],
                ['3 maanden', '€7.500'],
                ['6 maanden', '€15.000'],
                ['12 maanden', '€30.000'],
                ['24 maanden', '€60.000'],
              ].map(([period, amount]) => (
                <tr key={period} className="border-b border-slate-100">
                  <td className="py-2.5 pr-4">{period}</td>
                  <td className="py-2.5 text-right font-medium">{amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-slate-600 leading-relaxed">
          De berekening is eenvoudig:{' '}
          <strong>
            benodigde maandelijkse dekking × aantal maanden wachttijd = inkomen dat je moet kunnen
            overbruggen
          </strong>
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Dit is geen berekening van de AOV-premie. Het laat alleen zien welke financiële buffer een
          bepaalde wachttijd betekent.
        </p>
        <div className="mt-6">
          <Cta label="Vergelijk wachttijden met de calculator →" />
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Welke factoren beïnvloeden de kosten van een AOV?
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          De premie van een AOV is niet voor iedere zzp&apos;er hetzelfde. Verschillende
          persoonlijke en verzekeringstechnische keuzes kunnen invloed hebben op de premie.
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">Belangrijke factoren zijn onder andere:</p>
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
        <p className="mt-4 text-slate-600 leading-relaxed">
          Ook de manier waarop arbeidsongeschiktheid wordt vastgesteld en welke dekking je kiest,
          kan van belang zijn.
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          FactuurBaas berekent daarom geen universele AOV-premie. Een bedrag dat voor de ene
          zzp&apos;er geldt, zegt weinig over wat een andere ondernemer daadwerkelijk betaalt.
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Meer weten?{' '}
          <TextLink href="/blogs/wat-kost-een-aov-voor-zzpers">
            Lees: Wat kost een AOV voor zzp&apos;ers? →
          </TextLink>
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          AOV voor startende zzp&apos;ers
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Ben je net gestart als zzp&apos;er, dan kan een AOV extra aandacht verdienen. Je hebt
          mogelijk nog weinig financiële buffer opgebouwd en je inkomen kan in de eerste jaren
          veranderen.
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Tegelijkertijd betekent starten als zzp&apos;er niet automatisch dat je direct een
          bepaalde AOV moet afsluiten. Of een verzekering bij je past, hangt af van je financiële
          situatie, risico&apos;s en persoonlijke voorkeuren.
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Meer over de afweging:{' '}
          <TextLink href="/blogs/aov-zzp">AOV zzp: heb je die nodig?</TextLink>
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Is een AOV verplicht voor zzp&apos;ers?
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          De vraag of een AOV verplicht is, komt bij veel zelfstandigen terug. De regels en plannen
          rond arbeidsongeschiktheidsverzekeringen voor zelfstandigen kunnen veranderen.
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Daarom is het belangrijk om onderscheid te maken tussen{' '}
          <strong>wat momenteel wettelijk verplicht is</strong>, bestaande vangnetten en eventuele
          toekomstige regelgeving.
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Lees hierover op{' '}
          <TextLink href="/blogs/aov-zzp">AOV zzp: heb je die nodig?</TextLink>
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wat berekent de AOV-calculator?
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          De gratis calculator van FactuurBaas is bedoeld om je{' '}
          <strong>inkomensbehoefte en wachttijd</strong> inzichtelijk te maken.
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">Je vult onder andere in:</p>
        <BulletList
          items={[
            'Gewenst maandinkomen bij arbeidsongeschiktheid',
            'Ander inkomen in die situatie',
            'Gewenste wachttijd',
            'Huidige leeftijd',
            'Gewenste eindleeftijd',
          ]}
        />
        <p className="mt-4 text-slate-600 leading-relaxed">
          De calculator laat vervolgens zien:
        </p>
        <BulletList
          items={[
            'Je benodigde maandelijkse dekking',
            'Je benodigde jaarlijkse dekking',
            'Hoeveel inkomen je tijdens de wachttijd zelf moet kunnen opvangen',
            'Wat verschillende wachttijden betekenen',
            'Welke factoren de daadwerkelijke AOV-premie kunnen beïnvloeden',
          ]}
        />
        <p className="mt-4 text-slate-600 leading-relaxed">
          De calculator geeft <strong>geen premie</strong>, offerte of persoonlijk
          verzekeringsadvies.
        </p>
        <div className="mt-6">
          <Cta label="Bereken je benodigde AOV-dekking →" />
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          AOV vergelijken
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Als je eenmaal weet hoeveel inkomen je ongeveer wilt beschermen en hoeveel wachttijd je
          financieel kunt overbruggen, kun je verschillende AOV&apos;s beter met elkaar vergelijken.
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Let daarbij niet alleen op de premie. Kijk ook naar bijvoorbeeld:
        </p>
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
        <p className="mt-4 text-slate-600 leading-relaxed">
          Een goedkope AOV is niet automatisch dezelfde dekking als een duurdere verzekering. De
          voorwaarden bepalen mede wat je daadwerkelijk verzekert.
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Meer context:{' '}
          <TextLink href="/blogs/aov-zzp">AOV zzp: heb je die nodig?</TextLink>
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Veelgestelde vragen over AOV voor zzp&apos;ers
        </h2>
        <div className="mt-6 space-y-6">
          {AOV_ZZP_GATE_FAQS.map(({ q, a }) => (
            <div key={q}>
              <h3 className="font-heading text-lg font-semibold text-deep-blue">{q}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
        <h2 className="font-heading text-xl font-bold text-deep-blue sm:text-2xl">
          Geen verzekeringsadvies
        </h2>
        <p className="mt-3 text-slate-600 leading-relaxed">
          De informatie op deze pagina en de berekening zijn uitsluitend bedoeld als algemene
          informatie.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Het daadwerkelijk verzekerbare bedrag, de premie, acceptatie en polisvoorwaarden
          verschillen per verzekeraar en persoonlijke situatie. Gebruik de calculator om je eigen
          uitgangspunten scherp te krijgen en vergelijk daarna de daadwerkelijke voorwaarden en
          offertes.
        </p>
        <div className="mt-5">
          <Cta label="Start de AOV-calculator →" />
        </div>
      </section>

      <section>
        <h2 className="font-heading text-xl font-bold text-deep-blue">Gerelateerde tools & artikelen</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <TextLink href="/blogs/aov-zzp">AOV zzp: heb je die nodig?</TextLink>
          </li>
          <li>
            <TextLink href="/blogs/wat-kost-een-aov-voor-zzpers">
              Wat kost een AOV voor zzp&apos;ers?
            </TextLink>
          </li>
          <li>
            <TextLink href="/blogs/aov-voor-startende-zzpers">
              AOV voor startende zzp&apos;ers
            </TextLink>
          </li>
          <li>
            <TextLink href="/blogs/aov-verplicht-voor-zzpers">
              AOV verplicht voor zzp&apos;ers?
            </TextLink>
          </li>
          <li>
            <TextLink href="/blogs/aov-zonder-medische-keuring">
              AOV zonder medische keuring
            </TextLink>
          </li>
          <li>
            <TextLink href="/blogs/aov-met-korte-wachttijd">
              AOV met korte wachttijd
            </TextLink>
          </li>
          <li>
            <TextLink href="/blogs/aov-met-lange-wachttijd">
              AOV met lange wachttijd
            </TextLink>
          </li>
          <li>
            <TextLink href="/blogs/hoeveel-aov-heb-ik-nodig">
              Hoeveel AOV heb ik nodig?
            </TextLink>
          </li>
          <li>
            <TextLink href="/blogs/aov-berekenen-voor-zzpers">
              AOV berekenen voor zzp&apos;ers
            </TextLink>
          </li>
          <li>
            <TextLink href="/tools/aov-berekenen-zzp">AOV-calculator</TextLink>
          </li>
          <li>
            <TextLink href="/tools/uurtarief-naar-inkomen">Uurtarief naar inkomen</TextLink>
          </li>
          <li>
            <TextLink href="/tools/hypotheek-zzp">Hypotheek voor zzp&apos;ers</TextLink>
          </li>
        </ul>
      </section>
    </div>
  );
}
