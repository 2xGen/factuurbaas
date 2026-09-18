import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { HYPOTHEEK_ZZP_GATE_FAQS } from '@/lib/hypotheekZzpGate';

const TOOL_HREF = '/tools/hypotheek-berekenen-zzp';

function Cta({ href = TOOL_HREF, label, external = false }) {
  if (external) {
    return (
      <Button asChild size="lg" className="rounded-xl px-8">
        <a href={href} target="_blank" rel="noopener noreferrer">
          {label}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    );
  }

  return (
    <Button asChild size="lg" className="rounded-xl px-8">
      <Link href={href}>
        {label}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </Button>
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

function TextLink({ href, children }) {
  return (
    <Link href={href} className="font-medium text-warm-orange hover:underline">
      {children}
    </Link>
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
    <div className="space-y-14">
      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Kun je een hypotheek krijgen als zzp&apos;er?
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Ja, als zzp&apos;er kun je een hypotheek aanvragen.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Zelfstandig ondernemer zijn betekent niet dat je geen woning kunt kopen of geen hypotheek
          kunt krijgen. Wel moet je inkomen op een andere manier worden vastgesteld dan bij iemand
          in loondienst.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Bij een werknemer wordt bijvoorbeeld gekeken naar salarisgegevens en een
          werkgeversverklaring. Als ondernemer wordt gekeken naar het inkomen dat uit je
          onderneming kan worden vastgesteld.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Voor een hypotheek met NHG bestaat hiervoor de{' '}
          <strong className="text-deep-blue">Inkomensverklaring Ondernemer</strong>. Daarmee wordt
          het inkomen uit de onderneming beoordeeld volgens de geldende regels.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Je ondernemingsvorm, de duur van je onderneming en de ontwikkeling van je inkomen kunnen
          daarbij een rol spelen.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hoe werkt een hypotheek voor een zzp&apos;er?
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Bij een hypotheekaanvraag draait het uiteindelijk om de vraag welk inkomen als
          toetsinkomen kan worden gebruikt.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Dat is belangrijk, want je{' '}
          <strong className="text-deep-blue">omzet is niet hetzelfde als je inkomen</strong>.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Stel dat je onderneming €80.000 omzet heeft. Als je €20.000 zakelijke kosten hebt, blijft
          er €60.000 winst over. Je kunt daarom niet simpelweg je omzet gebruiken om te bepalen
          hoeveel hypotheek je kunt krijgen.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Bij een ondernemer wordt naar de financiële situatie van de onderneming gekeken om het
          inkomen vast te stellen. Daarnaast spelen ook andere factoren een rol, zoals bestaande
          financiële verplichtingen en de waarde van de woning.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Er is geen vast bedrag dat iedere zzp&apos;er met een bepaald inkomen kan lenen. Lees
          ook onze gids{' '}
          <Link
            href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper"
            className="font-medium text-warm-orange hover:underline"
          >
            Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
          </Link>
          .
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Je maximale hypotheek hangt onder andere af van:
        </p>
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
        <p className="mt-4 text-slate-600 leading-relaxed">
          Daarom kan twee zzp&apos;ers met ongeveer dezelfde winst toch een verschillende maximale
          hypotheek hebben.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">Wil je een eerste indicatie?</p>
        <div className="mt-6">
          <Cta label="Bereken je maximale hypotheek als zzp'er" />
        </div>
        <p className="mt-4 text-sm text-slate-500 leading-relaxed">
          De calculator geeft je een indicatie. De uiteindelijke maximale hypotheek wordt bepaald
          tijdens een daadwerkelijke hypotheekaanvraag.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hypotheek berekenen als zzp&apos;er
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Wil je weten binnen welke prijsklasse je ongeveer naar een woning kunt kijken?
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Met de gratis hypotheekcalculator voor zzp&apos;ers van FactuurBaas kun je een eerste
          berekening maken. Je vult je relevante gegevens in en krijgt vervolgens een indicatie van
          je maximale hypotheek.
        </p>
        <div className="mt-6">
          <Cta label="Bereken je hypotheek als zzp'er" />
        </div>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Een berekening is vooral handig als eerste stap. Het geeft je een beeld van je mogelijke
          budget voordat je serieus naar woningen gaat kijken.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          De uitkomst is geen hypotheekadvies, offerte of garantie dat een geldverstrekker het
          bedrag zal accepteren.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Welk inkomen telt voor een hypotheek als zzp&apos;er?
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Een belangrijke vraag voor iedere zelfstandig ondernemer is welk inkomen de
          hypotheekverstrekker gebruikt.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Dat is niet automatisch je omzet en ook niet altijd simpelweg de winst van het meest
          recente jaar. Voor ondernemers moet het inkomen volgens de geldende hypotheekregels worden
          vastgesteld.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Bij NHG wordt hiervoor de Inkomensverklaring Ondernemer gebruikt. Hierbij wordt naar de
          financiële gegevens van de onderneming gekeken. Je bedrijfsresultaten over meerdere jaren
          kunnen daarom belangrijk zijn.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Ook de ontwikkeling van je inkomen kan relevant zijn. Een onderneming met een sterk
          stijgende omzet en winst wordt anders bekeken dan een onderneming waarvan het inkomen al
          meerdere jaren daalt. Lees meer in onze gids{' '}
          <Link
            href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper"
            className="font-medium text-warm-orange hover:underline"
          >
            Welk inkomen telt voor een hypotheek als zzp&apos;er?
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hypotheek met een eenmanszaak
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Heb je een eenmanszaak? Dan kun je als ondernemer een hypotheek aanvragen.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Een eenmanszaak is een veel voorkomende ondernemingsvorm voor zzp&apos;ers. Voor de
          hypotheekaanvraag wordt gekeken naar het inkomen dat uit je onderneming kan worden
          vastgesteld. Daarbij zijn je financiële cijfers belangrijk.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Het hebben van een eenmanszaak betekent dus niet dat je inkomen automatisch als ongeschikt
          voor een hypotheek wordt gezien. De exacte beoordeling hangt af van je situatie en de
          voorwaarden van de geldverstrekker. Lees meer in onze gids{' '}
          <Link
            href="/blogs/hypotheek-met-eenmanszaak"
            className="font-medium text-warm-orange hover:underline"
          >
            Hypotheek met een eenmanszaak
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hypotheek met wisselend inkomen
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Het inkomen van een zzp&apos;er kan van jaar tot jaar verschillen.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">Misschien heb je bijvoorbeeld:</p>
        <BulletList
          items={[
            '€40.000 winst in het ene jaar',
            '€55.000 in het volgende jaar',
            '€65.000 in het meest recente jaar',
          ]}
        />
        <p className="mt-4 text-slate-600 leading-relaxed">Maar het kan ook andersom zijn.</p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Omdat ondernemersinkomen kan fluctueren, wordt bij een hypotheekaanvraag gekeken naar de
          beschikbare financiële informatie en de manier waarop het inkomen volgens de geldende
          regels moet worden vastgesteld.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Een wisselend inkomen betekent daarom niet automatisch dat je geen hypotheek kunt krijgen.
          Wel kan de inkomensbeoordeling anders uitvallen dan wanneer je inkomen al jaren stabiel is.
          Lees meer in onze gids{' '}
          <Link
            href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper"
            className="font-medium text-warm-orange hover:underline"
          >
            Hypotheek met wisselend inkomen als zzp&apos;er
          </Link>
          .
        </p>
      </section>

      <section id="startende-zzper">
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hypotheek als startende zzp&apos;er
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Ben je net begonnen als zzp&apos;er? Dan is je hypotheekaanvraag vaak anders dan die van
          een ondernemer die al jarenlang actief is.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Je hebt mogelijk nog maar beperkte financiële historie en misschien nog geen drie
          volledige boekjaren. Dat betekent niet automatisch dat je geen hypotheek kunt krijgen.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Welke mogelijkheden je hebt hangt onder andere af van hoe lang je onderneming bestaat, je
          inkomen en de voorwaarden die voor de hypotheek gelden.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Voor NHG geldt voor de Inkomensverklaring Ondernemer dat de ondernemer langer dan 12
          maanden zelfstandig moet zijn. Bij een kortere ondernemingshistorie wordt met de
          beschikbare periode gewerkt.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Ben je pas gestart? Laat daarom vooraf beoordelen welke inkomensgegevens in jouw situatie
          kunnen worden gebruikt. Lees ook onze gids{' '}
          <Link
            href="/blogs/hypotheek-voor-startende-zzpers"
            className="font-medium text-warm-orange hover:underline"
          >
            Hypotheek voor startende zzp&apos;ers
          </Link>
          .
        </p>
      </section>

      <section id="zonder-3-jaar">
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hypotheek zonder 3 jaar cijfers
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Veel ondernemers denken dat je altijd drie volledige jaarcijfers nodig hebt voordat je een
          hypotheek kunt aanvragen. Dat is niet zo eenvoudig.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Of je zonder drie volledige jaren cijfers een hypotheek kunt krijgen, hangt af van je
          situatie en de voorwaarden die van toepassing zijn.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Voor NHG kan een ondernemer die langer dan 12 maanden zelfstandig werkt gebruikmaken van
          de Inkomensverklaring Ondernemer. Daarbij wordt gekeken naar de beschikbare financiële
          gegevens van de onderneming.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Heb je dus nog geen drie volledige boekjaren? Dan is het verstandig om niet automatisch
          aan te nemen dat je moet wachten. Lees meer in{' '}
          <Link
            href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers"
            className="font-medium text-warm-orange hover:underline"
          >
            Hypotheek als zzp&apos;er zonder 3 jaar cijfers
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Welke documenten heb je nodig voor een hypotheek?
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Welke documenten je nodig hebt, hangt af van je persoonlijke situatie en de
          hypotheekverstrekker.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
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
        <p className="mt-4 text-slate-600 leading-relaxed">
          De precieze documentenlijst kan per situatie verschillen. Vraag daarom vooraf aan je
          hypotheekadviseur welke documenten je moet aanleveren.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Winst uit onderneming voor je hypotheek
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Als zzp&apos;er is het belangrijk om omzet en winst uit elkaar te houden.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          <strong className="text-deep-blue">Omzet</strong> is het bedrag dat je onderneming in
          rekening brengt. <strong className="text-deep-blue">Winst</strong> is wat er na zakelijke
          kosten overblijft.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">Bijvoorbeeld:</p>
        <ul className="mt-3 space-y-1 text-slate-600">
          <li>
            <strong className="text-deep-blue">Omzet:</strong> €75.000
          </li>
          <li>
            <strong className="text-deep-blue">Zakelijke kosten:</strong> €15.000
          </li>
          <li>
            <strong className="text-deep-blue">Winst:</strong> €60.000
          </li>
        </ul>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Dat betekent niet automatisch dat €60.000 volledig als hypotheekinkomen wordt gebruikt. Het
          toetsinkomen moet volgens de geldende hypotheekregels worden vastgesteld.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Je administratie en financiële cijfers zijn daarom belangrijk wanneer je als ondernemer
          een hypotheek wilt aanvragen. Dit is ook een reden om je administratie vanaf het begin
          goed bij te houden.
        </p>
        <div className="mt-6">
          <Cta href="/tools" label="Bekijk onze tools voor zzp'ers" />
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hypotheek met inkomen uit loondienst én zzp
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Sommige ondernemers combineren hun onderneming met een baan in loondienst.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">Bijvoorbeeld:</p>
        <BulletList
          items={[
            'je werkt vier dagen per week in loondienst',
            'daarnaast werk je één of twee dagen als zzp\'er',
          ]}
        />
        <p className="mt-4 text-slate-600 leading-relaxed">
          In zo&apos;n situatie kunnen zowel je inkomen uit loondienst als je ondernemersinkomen
          relevant zijn. Hoe deze inkomsten worden meegenomen hangt af van je persoonlijke situatie
          en de geldende hypotheekregels.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Het is daarom verstandig om bij een hypotheekaanvraag je volledige inkomenssituatie in
          kaart te brengen.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hypotheek en schulden
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Naast je inkomen wordt ook gekeken naar je financiële verplichtingen. Bestaande schulden
          of andere financiële verplichtingen kunnen invloed hebben op hoeveel je kunt lenen.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">Denk bijvoorbeeld aan:</p>
        <BulletList
          items={[
            'studieschuld',
            'persoonlijke leningen',
            'doorlopende kredieten',
            'private lease',
            'andere financiële verplichtingen',
          ]}
        />
        <p className="mt-4 text-slate-600 leading-relaxed">
          Daarom zegt je ondernemersinkomen alleen niet hoeveel je maximaal kunt lenen.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hypotheek voor zzp&apos;ers met NHG
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          De Nationale Hypotheek Garantie (NHG) heeft specifieke regels voor ondernemers.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Voor ondernemers die langer dan 12 maanden zelfstandig werken kan de Inkomensverklaring
          Ondernemer worden gebruikt voor een hypotheek met NHG. De inkomensverklaring wordt
          opgesteld op basis van de financiële situatie van de onderneming.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          NHG werkt met specifieke voorwaarden en toetskaders. Deze kunnen veranderen, dus
          controleer altijd de actuele voorwaarden wanneer je daadwerkelijk een hypotheek aanvraagt.
        </p>
        <div className="mt-6">
          <Cta
            href="https://www.nhg.nl/"
            label="Bekijk de actuele NHG-informatie"
            external
          />
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hoeveel moet je verdienen voor een hypotheek?
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Er bestaat geen universeel minimuminkomen waarmee je als zzp&apos;er een bepaald
          hypotheekbedrag kunt krijgen. De maximale hypotheek wordt bepaald aan de hand van meerdere
          factoren.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Een hoger inkomen kan een hogere leencapaciteit betekenen, maar je inkomen is slechts één
          onderdeel van de berekening. Ook rente, financiële verplichtingen en de woningwaarde
          spelen een rol.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Daarom is het nuttiger om je maximale hypotheek te berekenen op basis van je eigen
          situatie dan om alleen naar algemene inkomensbedragen te kijken.
        </p>
        <div className="mt-6">
          <Cta label="Bereken je maximale hypotheek" />
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Kan een zzp&apos;er meer lenen met een hoger inkomen?
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Een hoger toetsinkomen kan invloed hebben op de maximale hypotheek, maar het verband is
          niet simpelweg één-op-één.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          De hypotheek wordt berekend binnen de geldende normen en rekening houdend met andere
          financiële verplichtingen. Ook de rente en waarde van de woning spelen een rol.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Gebruik daarom een hypotheekberekening voor je eigen situatie in plaats van alleen uit te
          gaan van een algemene vuistregel.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Hypotheekadviseur voor zzp&apos;ers
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Een online calculator kan een goede eerste stap zijn, maar vervangt geen persoonlijk
          hypotheekadvies.
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Een hypotheekadviseur kan je helpen beoordelen:
        </p>
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
        <p className="mt-4 text-slate-600 leading-relaxed">
          Dit kan vooral relevant zijn wanneer je onderneming nog jong is, je inkomen sterk wisselt
          of je meerdere inkomstenbronnen hebt.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Veelgestelde vragen over een hypotheek als zzp&apos;er
        </h2>
        <div className="mt-6 space-y-4">
          {HYPOTHEEK_ZZP_GATE_FAQS.map(({ q, a }) => (
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
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {a}
                {(q.includes('Hoeveel hypotheek') ||
                  q.includes('online berekenen')) && (
                  <>
                    {' '}
                    <TextLink href={TOOL_HREF}>Bereken je maximale hypotheek</TextLink>
                  </>
                )}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Bereken je maximale hypotheek als zzp&apos;er
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Wil je weten wat je ongeveer kunt lenen?
        </p>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Gebruik de gratis hypotheekcalculator voor zzp&apos;ers van FactuurBaas. Vul je gegevens
          in en krijg een eerste indicatie van je maximale hypotheek.
        </p>
        <div className="mt-6">
          <Cta label="Bereken je maximale hypotheek" />
        </div>
        <p className="mt-4 text-sm text-slate-500 leading-relaxed">
          Gebruik de uitkomst als eerste indicatie. Voor een daadwerkelijke hypotheekaanvraag is een
          beoordeling van je persoonlijke situatie nodig.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Meer voor zzp&apos;ers
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Een hypotheek is slechts één onderdeel van je financiële planning als ondernemer. Bekijk
          ook onze andere informatie en tools:
        </p>
        <ul className="mt-4 space-y-3">
          {MORE_LINKS.map((link) => (
            <li key={link.label}>
              <TextLink href={link.href}>{link.label}</TextLink>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
