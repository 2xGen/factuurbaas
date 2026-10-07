import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ArrowIcon, btn, FaqList } from '@/components/site/editorial';
import { HYPOTHEEK_ZZP_GATE_FAQS } from '@/lib/hypotheekZzpGate';

const TOOL_HREF = '/tools/hypotheek-berekenen-zzp';

const ARTICLE =
  'article-body prose prose-lg mx-auto max-w-3xl prose-p:leading-[1.75] prose-h2:text-[1.85rem] sm:prose-h2:text-[2.15rem] prose-h3:text-[1.35rem] [&>section:first-child>h2]:mt-0';

function Cta({ href = TOOL_HREF, label, external = false }) {
  if (external) {
    return (
      <div className="not-prose my-8">
        <a href={href} target="_blank" rel="noopener noreferrer" className={btn.secondary}>
          {label}
          <ArrowUpRight
            className="h-4 w-4 text-ember transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden
          />
        </a>
      </div>
    );
  }

  return (
    <div className="not-prose my-8">
      <Link href={href} className={btn.primary}>
        {label}
        <ArrowIcon />
      </Link>
    </div>
  );
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

function Note({ children }) {
  return (
    <p className="not-prose -mt-2 mb-8 border-l border-ember/60 pl-4 text-sm leading-relaxed text-ink-500">
      {children}
    </p>
  );
}

const MORE_LINKS = [
  { label: "Hypotheek als zzp'er: hoe werkt het?", href: '/blogs/hypotheek-als-zzper-hoe-werkt-het' },
  { label: "Hoeveel hypotheek kan ik krijgen als zzp'er?", href: '/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper' },
  { label: 'Hypotheek met een eenmanszaak', href: '/blogs/hypotheek-met-eenmanszaak' },
  { label: "Hypotheek voor startende zzp'ers", href: '/blogs/hypotheek-voor-startende-zzpers' },
  { label: "Hoe lang moet je zzp'er zijn voor een hypotheek?", href: '/blogs/hoe-lang-zzper-zijn-voor-hypotheek' },
  { label: "Welk inkomen telt voor een hypotheek als zzp'er?", href: '/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper' },
  { label: 'Winst uit onderneming voor hypotheek', href: '/blogs/winst-uit-onderneming-voor-hypotheek' },
  { label: "Hypotheek met wisselend inkomen als zzp'er", href: '/blogs/hypotheek-met-wisselend-inkomen-als-zzper' },
  { label: "Jaarcijfers nodig voor hypotheek als zzp'er?", href: '/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper' },
  { label: "Hypotheek als zzp'er zonder 3 jaar cijfers", href: '/blogs/hypotheek-zzp-zonder-3-jaar-cijfers' },
  { label: "Hypotheek berekenen als zzp'er", href: '/blogs/hypotheek-berekenen-als-zzper' },
  { label: "Hypotheekadviseur voor zzp'ers", href: '/blogs/hypotheekadviseur-voor-zzpers' },
  { label: 'AOV zzp: heb je die nodig?', href: '/blogs/aov-zzp' },
  { label: 'AOV voor zzp\'ers', href: '/tools/aov-zzp' },
  { label: 'Pensioen opbouwen als zzp\'er', href: '/tools' },
  { label: 'Zakelijke verzekeringen voor zzp\'ers', href: '/tools' },
  { label: 'Zakelijke rekening voor zzp\'ers', href: '/blogs/zakelijke-rekening-zzp' },
  { label: 'Zakelijke kosten en aftrekposten', href: '/blogs/hoeveel-geld-apart-belasting-zzper' },
  { label: 'Uurtarief berekenen', href: '/tools/uurtarief-calculator' },
  { label: 'Inkomen berekenen als zzp\'er', href: '/tools/uurtarief-naar-inkomen' },
];

export default function HypotheekZzpSeoContent() {
  return (
    <div className={ARTICLE}>
      <section>
        <h2>Kun je een hypotheek krijgen als zzp&apos;er?</h2>
        <p>Ja, als zzp&apos;er kun je een hypotheek aanvragen.</p>
        <p>
          Zelfstandig ondernemer zijn betekent niet dat je geen woning kunt kopen of geen hypotheek
          kunt krijgen. Wel moet je inkomen op een andere manier worden vastgesteld dan bij iemand
          in loondienst.
        </p>
        <p>
          Bij een werknemer wordt bijvoorbeeld gekeken naar salarisgegevens en een
          werkgeversverklaring. Als ondernemer wordt gekeken naar het inkomen dat uit je
          onderneming kan worden vastgesteld.
        </p>
        <p>
          Voor een hypotheek met NHG bestaat hiervoor de{' '}
          <strong>Inkomensverklaring Ondernemer</strong>. Daarmee wordt het inkomen uit de
          onderneming beoordeeld volgens de geldende regels.
        </p>
        <p>
          Je ondernemingsvorm, de duur van je onderneming en de ontwikkeling van je inkomen kunnen
          daarbij een rol spelen.
        </p>
      </section>

      <section>
        <h2>Hoe werkt een hypotheek voor een zzp&apos;er?</h2>
        <p>
          Bij een hypotheekaanvraag draait het uiteindelijk om de vraag welk inkomen als
          toetsinkomen kan worden gebruikt.
        </p>
        <p>
          Dat is belangrijk, want je <strong>omzet is niet hetzelfde als je inkomen</strong>.
        </p>
        <p>
          Stel dat je onderneming €80.000 omzet heeft. Als je €20.000 zakelijke kosten hebt, blijft
          er €60.000 winst over. Je kunt daarom niet simpelweg je omzet gebruiken om te bepalen
          hoeveel hypotheek je kunt krijgen.
        </p>
        <p>
          Bij een ondernemer wordt naar de financiële situatie van de onderneming gekeken om het
          inkomen vast te stellen. Daarnaast spelen ook andere factoren een rol, zoals bestaande
          financiële verplichtingen en de waarde van de woning.
        </p>
      </section>

      <section>
        <h2>Hoeveel hypotheek kan ik krijgen als zzp&apos;er?</h2>
        <p>
          Er is geen vast bedrag dat iedere zzp&apos;er met een bepaald inkomen kan lenen. Lees
          ook onze gids{' '}
          <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper">
            Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
          </Link>
          .
        </p>
        <p>Je maximale hypotheek hangt onder andere af van:</p>
        <BulletList
          items={[
            'je toetsinkomen',
            'de ontwikkeling van je inkomen',
            'bestaande leningen en andere financiële verplichtingen',
            'de rente',
            'de waarde van de woning',
            'de geldverstrekker en de geldende acceptatievoorwaarden',
          ]}
        />
        <p>
          Daarom kan twee zzp&apos;ers met ongeveer dezelfde winst toch een verschillende maximale
          hypotheek hebben.
        </p>
        <p>Wil je een eerste indicatie?</p>
        <Cta label="Bereken je maximale hypotheek als zzp'er" />
        <Note>
          De calculator geeft je een indicatie. De uiteindelijke maximale hypotheek wordt bepaald
          tijdens een daadwerkelijke hypotheekaanvraag.
        </Note>
      </section>

      <section>
        <h2>Hypotheek berekenen als zzp&apos;er</h2>
        <p>Wil je weten binnen welke prijsklasse je ongeveer naar een woning kunt kijken?</p>
        <p>
          Met de gratis hypotheekcalculator voor zzp&apos;ers van FactuurBaas kun je een eerste
          berekening maken. Je vult je relevante gegevens in en krijgt vervolgens een indicatie van
          je maximale hypotheek.
        </p>
        <Cta label="Bereken je hypotheek als zzp'er" />
        <p>
          Een berekening is vooral handig als eerste stap. Het geeft je een beeld van je mogelijke
          budget voordat je serieus naar woningen gaat kijken.
        </p>
        <p>
          De uitkomst is geen hypotheekadvies, offerte of garantie dat een geldverstrekker het
          bedrag zal accepteren.
        </p>
      </section>

      <section>
        <h2>Welk inkomen telt voor een hypotheek als zzp&apos;er?</h2>
        <p>
          Een belangrijke vraag voor iedere zelfstandig ondernemer is welk inkomen de
          hypotheekverstrekker gebruikt.
        </p>
        <p>
          Dat is niet automatisch je omzet en ook niet altijd simpelweg de winst van het meest
          recente jaar. Voor ondernemers moet het inkomen volgens de geldende hypotheekregels worden
          vastgesteld.
        </p>
        <p>
          Bij NHG wordt hiervoor de Inkomensverklaring Ondernemer gebruikt. Hierbij wordt naar de
          financiële gegevens van de onderneming gekeken. Je bedrijfsresultaten over meerdere jaren
          kunnen daarom belangrijk zijn.
        </p>
        <p>
          Ook de ontwikkeling van je inkomen kan relevant zijn. Een onderneming met een sterk
          stijgende omzet en winst wordt anders bekeken dan een onderneming waarvan het inkomen al
          meerdere jaren daalt. Lees meer in onze gids{' '}
          <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper">
            Welk inkomen telt voor een hypotheek als zzp&apos;er?
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Hypotheek met een eenmanszaak</h2>
        <p>Heb je een eenmanszaak? Dan kun je als ondernemer een hypotheek aanvragen.</p>
        <p>
          Een eenmanszaak is een veel voorkomende ondernemingsvorm voor zzp&apos;ers. Voor de
          hypotheekaanvraag wordt gekeken naar het inkomen dat uit je onderneming kan worden
          vastgesteld. Daarbij zijn je financiële cijfers belangrijk.
        </p>
        <p>
          Het hebben van een eenmanszaak betekent dus niet dat je inkomen automatisch als ongeschikt
          voor een hypotheek wordt gezien. De exacte beoordeling hangt af van je situatie en de
          voorwaarden van de geldverstrekker. Lees meer in onze gids{' '}
          <Link href="/blogs/hypotheek-met-eenmanszaak">Hypotheek met een eenmanszaak</Link>.
        </p>
      </section>

      <section>
        <h2>Hypotheek met wisselend inkomen</h2>
        <p>Het inkomen van een zzp&apos;er kan van jaar tot jaar verschillen.</p>
        <p>Misschien heb je bijvoorbeeld:</p>
        <BulletList
          items={[
            '€40.000 winst in het ene jaar',
            '€55.000 in het volgende jaar',
            '€65.000 in het meest recente jaar',
          ]}
        />
        <p>Maar het kan ook andersom zijn.</p>
        <p>
          Omdat ondernemersinkomen kan fluctueren, wordt bij een hypotheekaanvraag gekeken naar de
          beschikbare financiële informatie en de manier waarop het inkomen volgens de geldende
          regels moet worden vastgesteld.
        </p>
        <p>
          Een wisselend inkomen betekent daarom niet automatisch dat je geen hypotheek kunt krijgen.
          Wel kan de inkomensbeoordeling anders uitvallen dan wanneer je inkomen al jaren stabiel is.
          Lees meer in onze gids{' '}
          <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper">
            Hypotheek met wisselend inkomen als zzp&apos;er
          </Link>
          .
        </p>
      </section>

      <section id="startende-zzper" className="scroll-mt-28">
        <h2>Hypotheek als startende zzp&apos;er</h2>
        <p>
          Ben je net begonnen als zzp&apos;er? Dan is je hypotheekaanvraag vaak anders dan die van
          een ondernemer die al jarenlang actief is.
        </p>
        <p>
          Je hebt mogelijk nog maar beperkte financiële historie en misschien nog geen drie
          volledige boekjaren. Dat betekent niet automatisch dat je geen hypotheek kunt krijgen.
        </p>
        <p>
          Welke mogelijkheden je hebt hangt onder andere af van hoe lang je onderneming bestaat, je
          inkomen en de voorwaarden die voor de hypotheek gelden.
        </p>
        <p>
          Voor NHG geldt voor de Inkomensverklaring Ondernemer dat de ondernemer langer dan 12
          maanden zelfstandig moet zijn. Bij een kortere ondernemingshistorie wordt met de
          beschikbare periode gewerkt.
        </p>
        <p>
          Ben je pas gestart? Laat daarom vooraf beoordelen welke inkomensgegevens in jouw situatie
          kunnen worden gebruikt. Lees ook onze gids{' '}
          <Link href="/blogs/hypotheek-voor-startende-zzpers">
            Hypotheek voor startende zzp&apos;ers
          </Link>
          .
        </p>
      </section>

      <section id="zonder-3-jaar" className="scroll-mt-28">
        <h2>Hypotheek zonder 3 jaar cijfers</h2>
        <p>
          Veel ondernemers denken dat je altijd drie volledige jaarcijfers nodig hebt voordat je een
          hypotheek kunt aanvragen. Dat is niet zo eenvoudig.
        </p>
        <p>
          Of je zonder drie volledige jaren cijfers een hypotheek kunt krijgen, hangt af van je
          situatie en de voorwaarden die van toepassing zijn.
        </p>
        <p>
          Voor NHG kan een ondernemer die langer dan 12 maanden zelfstandig werkt gebruikmaken van
          de Inkomensverklaring Ondernemer. Daarbij wordt gekeken naar de beschikbare financiële
          gegevens van de onderneming.
        </p>
        <p>
          Heb je dus nog geen drie volledige boekjaren? Dan is het verstandig om niet automatisch
          aan te nemen dat je moet wachten. Lees meer in{' '}
          <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers">
            Hypotheek als zzp&apos;er zonder 3 jaar cijfers
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Welke documenten heb je nodig voor een hypotheek?</h2>
        <p>
          Welke documenten je nodig hebt, hangt af van je persoonlijke situatie en de
          hypotheekverstrekker.
        </p>
        <p>
          Als ondernemer kunnen financiële gegevens van je onderneming belangrijk zijn voor de
          inkomensbeoordeling. Denk bijvoorbeeld aan:
        </p>
        <BulletList
          items={[
            'jaarcijfers',
            'financiële gegevens van de onderneming',
            'aangiften',
            'informatie over je onderneming',
            'gegevens over bestaande leningen',
            'informatie over eventuele inkomsten uit loondienst',
          ]}
        />
        <p>
          De precieze documentenlijst kan per situatie verschillen. Vraag daarom vooraf aan je
          hypotheekadviseur welke documenten je moet aanleveren.
        </p>
      </section>

      <section>
        <h2>Winst uit onderneming voor je hypotheek</h2>
        <p>Als zzp&apos;er is het belangrijk om omzet en winst uit elkaar te houden.</p>
        <p>
          <strong>Omzet</strong> is het bedrag dat je onderneming in rekening brengt.{' '}
          <strong>Winst</strong> is wat er na zakelijke kosten overblijft.
        </p>
        <p>Bijvoorbeeld:</p>
        <ul className="not-prose my-8 max-w-sm rounded-2xl border border-ink/[0.08] bg-white px-6 py-2 text-[15px] tabular-nums shadow-paper">
          <li className="flex items-baseline justify-between gap-6 border-b border-ink/[0.06] py-3 text-ink-700">
            <strong className="font-normal text-ink-500">Omzet:</strong> €75.000
          </li>
          <li className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-3 text-ink-700">
            <strong className="font-normal text-ink-500">Zakelijke kosten:</strong> €15.000
          </li>
          <li className="flex items-baseline justify-between gap-6 py-3 font-medium text-ink">
            <strong className="font-medium text-ink">Winst:</strong> €60.000
          </li>
        </ul>
        <p>
          Dat betekent niet automatisch dat €60.000 volledig als hypotheekinkomen wordt gebruikt. Het
          toetsinkomen moet volgens de geldende hypotheekregels worden vastgesteld.
        </p>
        <p>
          Je administratie en financiële cijfers zijn daarom belangrijk wanneer je als ondernemer
          een hypotheek wilt aanvragen. Dit is ook een reden om je administratie vanaf het begin
          goed bij te houden.
        </p>
        <Cta href="/tools" label="Bekijk onze tools voor zzp'ers" />
      </section>

      <section>
        <h2>Hypotheek met inkomen uit loondienst én zzp</h2>
        <p>Sommige ondernemers combineren hun onderneming met een baan in loondienst.</p>
        <p>Bijvoorbeeld:</p>
        <BulletList
          items={[
            'je werkt vier dagen per week in loondienst',
            'daarnaast werk je één of twee dagen als zzp\'er',
          ]}
        />
        <p>
          In zo&apos;n situatie kunnen zowel je inkomen uit loondienst als je ondernemersinkomen
          relevant zijn. Hoe deze inkomsten worden meegenomen hangt af van je persoonlijke situatie
          en de geldende hypotheekregels.
        </p>
        <p>
          Het is daarom verstandig om bij een hypotheekaanvraag je volledige inkomenssituatie in
          kaart te brengen.
        </p>
      </section>

      <section>
        <h2>Hypotheek en schulden</h2>
        <p>
          Naast je inkomen wordt ook gekeken naar je financiële verplichtingen. Bestaande schulden
          of andere financiële verplichtingen kunnen invloed hebben op hoeveel je kunt lenen.
        </p>
        <p>Denk bijvoorbeeld aan:</p>
        <BulletList
          items={[
            'studieschuld',
            'persoonlijke leningen',
            'doorlopende kredieten',
            'private lease',
            'andere financiële verplichtingen',
          ]}
        />
        <p>Daarom zegt je ondernemersinkomen alleen niet hoeveel je maximaal kunt lenen.</p>
      </section>

      <section>
        <h2>Hypotheek voor zzp&apos;ers met NHG</h2>
        <p>De Nationale Hypotheek Garantie (NHG) heeft specifieke regels voor ondernemers.</p>
        <p>
          Voor ondernemers die langer dan 12 maanden zelfstandig werken kan de Inkomensverklaring
          Ondernemer worden gebruikt voor een hypotheek met NHG. De inkomensverklaring wordt
          opgesteld op basis van de financiële situatie van de onderneming.
        </p>
        <p>
          NHG werkt met specifieke voorwaarden en toetskaders. Deze kunnen veranderen, dus
          controleer altijd de actuele voorwaarden wanneer je daadwerkelijk een hypotheek aanvraagt.
        </p>
        <Cta href="https://www.nhg.nl/" label="Bekijk de actuele NHG-informatie" external />
      </section>

      <section>
        <h2>Hoeveel moet je verdienen voor een hypotheek?</h2>
        <p>
          Er bestaat geen universeel minimuminkomen waarmee je als zzp&apos;er een bepaald
          hypotheekbedrag kunt krijgen. De maximale hypotheek wordt bepaald aan de hand van meerdere
          factoren.
        </p>
        <p>
          Een hoger inkomen kan een hogere leencapaciteit betekenen, maar je inkomen is slechts één
          onderdeel van de berekening. Ook rente, financiële verplichtingen en de woningwaarde
          spelen een rol.
        </p>
        <p>
          Daarom is het nuttiger om je maximale hypotheek te berekenen op basis van je eigen
          situatie dan om alleen naar algemene inkomensbedragen te kijken.
        </p>
        <Cta label="Bereken je maximale hypotheek" />
      </section>

      <section>
        <h2>Kan een zzp&apos;er meer lenen met een hoger inkomen?</h2>
        <p>
          Een hoger toetsinkomen kan invloed hebben op de maximale hypotheek, maar het verband is
          niet simpelweg één-op-één.
        </p>
        <p>
          De hypotheek wordt berekend binnen de geldende normen en rekening houdend met andere
          financiële verplichtingen. Ook de rente en waarde van de woning spelen een rol.
        </p>
        <p>
          Gebruik daarom een hypotheekberekening voor je eigen situatie in plaats van alleen uit te
          gaan van een algemene vuistregel.
        </p>
      </section>

      <section>
        <h2>Hypotheekadviseur voor zzp&apos;ers</h2>
        <p>
          Een online calculator kan een goede eerste stap zijn, maar vervangt geen persoonlijk
          hypotheekadvies.
        </p>
        <p>Een hypotheekadviseur kan je helpen beoordelen:</p>
        <BulletList
          items={[
            'welk inkomen voor jouw situatie kan worden gebruikt',
            'welke documenten nodig zijn',
            'of NHG mogelijk is',
            'welke hypotheekvormen bij je situatie passen',
            'hoeveel je daadwerkelijk kunt lenen',
            'welke geldverstrekkers jouw ondernemerssituatie accepteren',
          ]}
        />
        <p>
          Dit kan vooral relevant zijn wanneer je onderneming nog jong is, je inkomen sterk wisselt
          of je meerdere inkomstenbronnen hebt.
        </p>
      </section>

      <section>
        <h2>Veelgestelde vragen over een hypotheek als zzp&apos;er</h2>
        <FaqList
          className="not-prose mt-8"
          items={HYPOTHEEK_ZZP_GATE_FAQS.map(({ q, a }) => ({
            question: q,
            answer: (
              <p>
                {a}
                {(q.includes('Hoeveel hypotheek') || q.includes('online berekenen')) && (
                  <>
                    {' '}
                    <Link
                      href={TOOL_HREF}
                      className="font-medium text-ink underline decoration-ink/20 underline-offset-[5px] transition-colors hover:decoration-ember"
                    >
                      Bereken je maximale hypotheek
                    </Link>
                  </>
                )}
              </p>
            ),
          }))}
        />
      </section>

      <section className="not-prose grain relative isolate mt-20 overflow-hidden rounded-2xl border border-ink/[0.08] bg-paper px-6 py-12 shadow-paper sm:px-12 sm:py-14">
        <div className="bg-ledger mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <h2 className="max-w-[22ch] font-display text-[1.9rem] font-normal leading-[1.1] tracking-[-0.03em] text-ink sm:text-[2.4rem]">
          Bereken je maximale hypotheek als zzp&apos;er
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-700">
          Wil je weten wat je ongeveer kunt lenen?
        </p>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-500">
          Gebruik de gratis hypotheekcalculator voor zzp&apos;ers van FactuurBaas. Vul je gegevens
          in en krijg een eerste indicatie van je maximale hypotheek.
        </p>
        <div className="mt-8">
          <Link href={TOOL_HREF} className={`${btn.primary} w-full sm:w-auto`}>
            Bereken je maximale hypotheek
            <ArrowIcon />
          </Link>
        </div>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-400">
          Gebruik de uitkomst als eerste indicatie. Voor een daadwerkelijke hypotheekaanvraag is een
          beoordeling van je persoonlijke situatie nodig.
        </p>
      </section>

      <section className="not-prose mt-20">
        <h2 className="font-display text-[1.85rem] font-normal leading-[1.15] tracking-[-0.02em] text-ink sm:text-[2.15rem]">
          Meer voor zzp&apos;ers
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-[1.75] text-ink-700">
          Een hypotheek is slechts één onderdeel van je financiële planning als ondernemer. Bekijk
          ook onze andere informatie en tools:
        </p>
        <ul className="mt-8 grid border-t border-ink/10 sm:grid-cols-2 sm:gap-x-10">
          {MORE_LINKS.map((link) => (
            <li key={link.label} className="border-b border-ink/10">
              <Link
                href={link.href}
                className="group flex items-start justify-between gap-4 py-4 text-[15px] font-medium leading-snug text-ink transition-colors hover:text-ink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
              >
                {link.label}
                <ArrowUpRight
                  className="mt-0.5 h-4 w-4 shrink-0 text-ember transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
