import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { BOEKHOUD_CHECK_FAQS } from '@/lib/boekhoudprogrammaCheck';

export default function BoekhoudprogrammaCheckSeoContent({
  toolHref = '/tools/boekhoudprogramma-check/berekenen',
}) {
  return (
    <div className="space-y-14 sm:space-y-16">
      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Jouw resultaat
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Op basis van je antwoorden valt jouw situatie waarschijnlijk in één van deze vier
          categorieën.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          🟢 1. Een eenvoudige factuurtool is waarschijnlijk genoeg
        </h2>
        <h3 className="mt-6 font-heading text-lg font-bold text-deep-blue sm:text-xl">
          Dit past waarschijnlijk bij jou als:
        </h3>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-slate-600">
          <li>je maar weinig facturen verstuurt;</li>
          <li>je weinig zakelijke kosten hebt;</li>
          <li>je weinig banktransacties hebt;</li>
          <li>je administratie overzichtelijk is;</li>
          <li>je prima zelf je administratie kunt bijhouden;</li>
          <li>en je geen behoefte hebt aan uitgebreide automatisering.</li>
        </ul>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>
            Je hoeft dan niet automatisch een uitgebreid boekhoudprogramma te nemen.
          </p>
          <p>
            Als je vooral een professionele factuur wilt maken en je administratie verder eenvoudig
            is, kan een <strong>gratis factuurtool</strong> voldoende zijn.
          </p>
        </div>
        <h3 className="mt-6 font-heading text-lg font-bold text-deep-blue sm:text-xl">
          Waarom dit bij jou past
        </h3>
        <div className="mt-3 space-y-4 leading-relaxed text-slate-600">
          <p>
            Je administratie lijkt op basis van je antwoorden relatief eenvoudig. Een uitgebreid
            boekhoudprogramma kan dan meer functies bieden dan je daadwerkelijk gebruikt.
          </p>
          <p>
            Je kunt altijd later overstappen wanneer je aantal klanten, kosten of transacties groeit.
          </p>
        </div>
        <h3 className="mt-6 font-heading text-lg font-bold text-deep-blue sm:text-xl">
          Wat zou deze uitkomst veranderen?
        </h3>
        <p className="mt-3 leading-relaxed text-slate-600">
          Een boekhoudprogramma wordt interessanter als je bijvoorbeeld:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-slate-600">
          <li>veel meer zakelijke kosten krijgt;</li>
          <li>steeds meer bonnetjes en inkoopfacturen moet verwerken;</li>
          <li>veel banktransacties krijgt;</li>
          <li>automatisch wilt werken;</li>
          <li>of meer inzicht wilt in je financiële situatie.</li>
        </ul>
        <h3 className="mt-6 font-heading text-lg font-bold text-deep-blue sm:text-xl">
          Voor jou interessant
        </h3>
        <p className="mt-3 leading-relaxed text-slate-600">
          Met{' '}
          <Link href="/create-invoice" className="font-semibold text-warm-orange hover:underline">
            FactuurBaas
          </Link>{' '}
          kun je gratis een professionele factuur maken zonder account. Je downloadt de factuur als
          PDF en verstuurt deze zelf naar je klant.
        </p>
        <div className="mt-6">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href="/create-invoice">
              Maak gratis een factuur →
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          🟡 2. Een eenvoudig boekhoudprogramma kan goed passen
        </h2>
        <h3 className="mt-6 font-heading text-lg font-bold text-deep-blue sm:text-xl">
          Dit past waarschijnlijk bij jou als:
        </h3>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-slate-600">
          <li>je regelmatig facturen verstuurt;</li>
          <li>je ook zakelijke kosten hebt;</li>
          <li>je meer administratie krijgt dan je gemakkelijk zelf kunt bijhouden;</li>
          <li>je wel zelf je boekhouding wilt doen;</li>
          <li>maar je handmatig werk wilt verminderen.</li>
        </ul>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>Je hoeft waarschijnlijk nog geen ingewikkelde totaaloplossing te gebruiken.</p>
          <p>
            Een eenvoudig boekhoudprogramma waarmee je bijvoorbeeld facturen, kosten, btw en je
            administratie op één plek kunt bijhouden kan dan voldoende zijn.
          </p>
        </div>
        <h3 className="mt-6 font-heading text-lg font-bold text-deep-blue sm:text-xl">
          Waarom dit bij jou past
        </h3>
        <div className="mt-3 space-y-4 leading-relaxed text-slate-600">
          <p>
            Je administratie is groot genoeg om meer structuur te gebruiken, maar uit je antwoorden
            blijkt niet dat je meteen een zeer uitgebreide oplossing nodig hebt.
          </p>
          <p>
            Het belangrijkste voordeel is dat je minder losse bestanden, spreadsheets en handmatige
            overzichten nodig hebt.
          </p>
        </div>
        <h3 className="mt-6 font-heading text-lg font-bold text-deep-blue sm:text-xl">
          Waar je op kunt letten
        </h3>
        <p className="mt-3 leading-relaxed text-slate-600">
          Voor jouw situatie kunnen vooral deze functies interessant zijn:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-slate-600">
          <li>verkoopfacturen;</li>
          <li>inkoopfacturen;</li>
          <li>btw-overzicht;</li>
          <li>klant- en leveranciersgegevens;</li>
          <li>eenvoudige financiële overzichten;</li>
          <li>eventueel een bankkoppeling.</li>
        </ul>
        <h3 className="mt-6 font-heading text-lg font-bold text-deep-blue sm:text-xl">
          Wanneer zou een uitgebreider programma beter zijn?
        </h3>
        <p className="mt-3 leading-relaxed text-slate-600">
          Als je aantal transacties sterk groeit, veel automatisering wilt of uitgebreidere
          financiële rapportages nodig hebt, kan een uitgebreider boekhoudprogramma interessanter
          worden.
        </p>
        <div className="mt-6">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href="/blogs/beste-boekhoudprogramma-zzp">
              Bekijk de beste boekhoudprogramma&apos;s voor zzp&apos;ers →
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          🟠 3. Een compleet boekhoudprogramma is waarschijnlijk interessant
        </h2>
        <h3 className="mt-6 font-heading text-lg font-bold text-deep-blue sm:text-xl">
          Dit past waarschijnlijk bij jou als:
        </h3>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-slate-600">
          <li>je regelmatig of veel facturen verstuurt;</li>
          <li>je veel zakelijke kosten hebt;</li>
          <li>je veel banktransacties hebt;</li>
          <li>je je administratie zoveel mogelijk wilt automatiseren;</li>
          <li>je een bankkoppeling wilt;</li>
          <li>je btw-administratie in software wilt bijhouden;</li>
          <li>of je inzicht wilt in omzet, kosten en resultaat.</li>
        </ul>
        <h3 className="mt-6 font-heading text-lg font-bold text-deep-blue sm:text-xl">
          Waarom dit bij jou past
        </h3>
        <div className="mt-3 space-y-4 leading-relaxed text-slate-600">
          <p>
            Je administratie heeft waarschijnlijk genoeg omvang om handmatig bijhouden onnodig veel
            tijd te laten kosten.
          </p>
          <p>
            In jouw situatie kunnen functies zoals een bankkoppeling, automatische verwerking en
            financiële overzichten een duidelijk voordeel opleveren.
          </p>
          <p>
            Het gaat dus niet alleen om het maken van facturen. Je wilt waarschijnlijk je{' '}
            <strong>hele financiële administratie</strong> beter organiseren.
          </p>
        </div>
        <h3 className="mt-6 font-heading text-lg font-bold text-deep-blue sm:text-xl">
          Waar je op kunt letten
        </h3>
        <p className="mt-3 leading-relaxed text-slate-600">Vergelijk boekhoudprogramma&apos;s vooral op:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-slate-600">
          <li>bankkoppeling;</li>
          <li>verwerking van inkomsten en uitgaven;</li>
          <li>btw-administratie;</li>
          <li>verkoop- en inkoopfacturen;</li>
          <li>automatische verwerking;</li>
          <li>financiële rapportages;</li>
          <li>gebruiksgemak;</li>
          <li>prijs.</li>
        </ul>
        <p className="mt-4 leading-relaxed text-slate-600">
          Er is niet één boekhoudprogramma dat voor iedere zzp&apos;er het beste is.
        </p>
        <div className="mt-6">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href="/blogs/beste-boekhoudprogramma-zzp">
              Vergelijk Moneybird, Jortt en e-Boekhouden.nl →
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          🔴 4. Boekhoudsoftware combineren met een boekhouder kan verstandig zijn
        </h2>
        <h3 className="mt-6 font-heading text-lg font-bold text-deep-blue sm:text-xl">
          Dit past waarschijnlijk bij jou als:
        </h3>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-slate-600">
          <li>je weinig tijd aan administratie wilt besteden;</li>
          <li>je boekhouden lastig vindt;</li>
          <li>je administratie omvangrijk is;</li>
          <li>je veel verschillende soorten transacties hebt;</li>
          <li>je situatie relatief complex is;</li>
          <li>of je liever hebt dat iemand je administratie controleert of verzorgt.</li>
        </ul>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>
            Software kan ook in deze situatie nuttig zijn. Het zorgt voor structuur en kan het
            uitwisselen van gegevens met een boekhouder makkelijker maken.
          </p>
          <p>
            Je hoeft dus niet te kiezen tussen <strong>software óf een boekhouder</strong>.
          </p>
          <p>Een combinatie kan bijvoorbeeld zijn:</p>
          <p className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-medium text-slate-800">
            Boekhoudsoftware → dagelijkse administratie → boekhouder voor controle en fiscale zaken
          </p>
        </div>
        <h3 className="mt-6 font-heading text-lg font-bold text-deep-blue sm:text-xl">
          Waarom dit bij jou past
        </h3>
        <div className="mt-3 space-y-4 leading-relaxed text-slate-600">
          <p>
            Uit je antwoorden blijkt dat het waarschijnlijk niet alleen om software gaat. Je wilt
            vooral voorkomen dat je veel tijd en energie aan je administratie kwijt bent.
          </p>
          <p>
            Een boekhouder kan dan meer waarde toevoegen dan alleen een uitgebreider softwarepakket.
          </p>
        </div>
        <h3 className="mt-6 font-heading text-lg font-bold text-deep-blue sm:text-xl">
          Wanneer zou je toch alles zelf kunnen doen?
        </h3>
        <p className="mt-3 leading-relaxed text-slate-600">
          Als je administratie eenvoudiger wordt, je meer kennis opbouwt of je voldoende tijd hebt
          om de boekhouding zelf te doen, kun je altijd meer zelf gaan beheren.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Waarom krijg ik deze uitkomst?
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>De check kijkt niet alleen naar het aantal facturen.</p>
          <p>
            Een zzp&apos;er met 5 facturen en 100 zakelijke transacties heeft bijvoorbeeld een heel
            andere administratie dan iemand met 20 facturen en bijna geen kosten.
          </p>
          <p>Daarom kijken we naar meerdere factoren:</p>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-3 pr-4 font-semibold text-deep-blue">Factor</th>
                <th className="py-3 font-semibold text-deep-blue">Waarom belangrijk?</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              {[
                ['Aantal facturen', 'Meer facturen betekent meer administratie'],
                ['Zakelijke kosten', 'Inkoop en bonnetjes moeten ook worden bijgehouden'],
                ['Banktransacties', 'Veel transacties maken handmatig verwerken tijdrovend'],
                ['Automatisering', 'Bepaalt hoeveel waarde software voor je heeft'],
                ['Bankkoppeling', 'Interessant wanneer je veel transacties hebt'],
                ['Btw-administratie', 'Software kan helpen bij overzicht en verwerking'],
                ['Boekhoudkennis', 'Bepaalt hoeveel ondersteuning je nodig hebt'],
                ['Beschikbare tijd', 'Tijd besparen kan belangrijker zijn dan softwarekosten'],
              ].map(([factor, why]) => (
                <tr key={factor} className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-medium text-slate-800">{factor}</td>
                  <td className="py-3">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 leading-relaxed text-slate-600">
          Daarom is er ook <strong>geen harde grens</strong>, zoals “vanaf 10 facturen heb je een
          boekhoudprogramma nodig”.
        </p>
        <div className="mt-6">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href={toolHref}>
              Doe de check opnieuw
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wat is het verschil tussen een factuurtool en boekhoudprogramma?
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>
            Een factuurtool is vooral gericht op het maken en beheren van verkoopfacturen.
          </p>
          <p>
            Een boekhoudprogramma gaat een stap verder en richt zich op je bredere administratie.
          </p>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-3 pr-4 font-semibold text-deep-blue" />
                <th className="py-3 pr-4 font-semibold text-deep-blue">Factuurtool</th>
                <th className="py-3 font-semibold text-deep-blue">Boekhoudprogramma</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              {[
                ['Verkoopfacturen', '✓', '✓'],
                ['PDF-facturen maken', '✓', '✓'],
                ['Inkoopfacturen verwerken', 'Beperkt', '✓'],
                ['Zakelijke kosten bijhouden', 'Beperkt', '✓'],
                ['Bankkoppeling', 'Meestal niet', 'Vaak wel'],
                ['Btw-administratie', 'Beperkt', '✓'],
                ['Winst- en verliesoverzicht', 'Meestal niet', '✓'],
                ['Uitgebreide administratie', 'Nee', '✓'],
              ].map(([feature, factuur, boekhoud]) => (
                <tr key={feature} className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-medium text-slate-800">{feature}</td>
                  <td className="py-3 pr-4">{factuur}</td>
                  <td className="py-3">{boekhoud}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>
            Een factuurtool kan dus prima het startpunt zijn. Je hoeft niet direct een uitgebreid
            boekhoudprogramma te nemen omdat je zzp&apos;er bent.
          </p>
          <p>Wil je meer weten over het verschil?</p>
        </div>
        <div className="mt-6">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href="/blogs/gratis-factuurtool-vs-boekhoudprogramma">
              Factuurprogramma of boekhoudprogramma: wat heb je nodig? →
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Welke boekhoudprogramma&apos;s kun je vergelijken?
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>
            Als uit de check komt dat boekhoudsoftware bij je past, zijn er verschillende
            programma&apos;s die je kunt bekijken.
          </p>
          <p>Voor Nederlandse zzp&apos;ers kun je bijvoorbeeld vergelijken:</p>
        </div>
        <h3 className="mt-6 font-heading text-lg font-bold text-deep-blue sm:text-xl">Moneybird</h3>
        <p className="mt-2 leading-relaxed text-slate-600">
          Een online boekhoudprogramma dat zich richt op ondernemers en administratie.
        </p>
        <h3 className="mt-6 font-heading text-lg font-bold text-deep-blue sm:text-xl">Jortt</h3>
        <p className="mt-2 leading-relaxed text-slate-600">
          Een online boekhoudprogramma met veel aandacht voor automatisering en inzicht.
        </p>
        <h3 className="mt-6 font-heading text-lg font-bold text-deep-blue sm:text-xl">
          e-Boekhouden.nl
        </h3>
        <p className="mt-2 leading-relaxed text-slate-600">
          Een online boekhoudpakket dat zich richt op administratie voor ondernemers en zzp&apos;ers.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Welke van deze het beste bij je past, hangt af van je situatie, voorkeuren en benodigde
          functies.
        </p>
        <div className="mt-6">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href="/blogs/beste-boekhoudprogramma-zzp">
              Bekijk onze vergelijking van boekhoudprogramma&apos;s voor zzp&apos;ers →
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Heb ik als zzp&apos;er überhaupt een boekhoudprogramma nodig?
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>Niet per se.</p>
          <p>
            Je bent als zzp&apos;er niet verplicht om een specifiek boekhoudprogramma te gebruiken.
            Je moet wel een goede administratie bijhouden.
          </p>
          <p>
            Voor een kleine en overzichtelijke administratie kan een eenvoudige oplossing voldoende
            zijn.
          </p>
          <p>Een boekhoudprogramma wordt vooral interessant wanneer je:</p>
        </div>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-slate-600">
          <li>meer transacties krijgt;</li>
          <li>meer kosten en bonnetjes moet verwerken;</li>
          <li>een bankkoppeling wilt;</li>
          <li>meer automatisering wilt;</li>
          <li>of meer inzicht in je administratie nodig hebt.</li>
        </ul>
        <p className="mt-4 leading-relaxed text-slate-600">
          Je kunt dus ook klein beginnen en later overstappen.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">Lees meer over dit onderwerp in:</p>
        <div className="mt-6">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href="/blogs/wanneer-boekhoudsoftware-nodig-zzp">
              Heb ik als zzp&apos;er een boekhoudprogramma nodig? →
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Kan ik eerst FactuurBaas gebruiken en later overstappen?
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>Ja.</p>
          <p>
            Je hoeft niet vanaf de eerste dag een uitgebreid boekhoudprogramma te gebruiken.
          </p>
          <p>
            Als je nu vooral facturen wilt maken, kun je beginnen met een eenvoudige factuurtool.
            Zodra je administratie groeit, kun je een boekhoudprogramma toevoegen of overstappen
            naar een uitgebreidere oplossing.
          </p>
          <p>Dat kan bijvoorbeeld betekenen:</p>
          <p className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-medium text-slate-800">
            FactuurBaas → groeiende administratie → boekhoudsoftware
          </p>
          <p>Of:</p>
          <p className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-medium text-slate-800">
            FactuurBaas + boekhoudsoftware
          </p>
          <p>
            Je hoeft factureren en boekhouden dus niet noodzakelijk in hetzelfde programma te doen.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Wanneer is een boekhouder interessanter dan alleen software?
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>
            Software helpt vooral met het <strong>organiseren en automatiseren</strong> van je
            administratie.
          </p>
          <p>
            Een boekhouder kan daarnaast helpen met het <strong>beoordelen en verwerken</strong> van
            je administratie en met fiscale vraagstukken.
          </p>
          <p>Een boekhouder kan daarom interessant worden als:</p>
        </div>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-slate-600">
          <li>je weinig tijd hebt;</li>
          <li>je administratie complex wordt;</li>
          <li>je fiscale kennis beperkt is;</li>
          <li>je veel fouten wilt voorkomen;</li>
          <li>of je gewoon liever iemand anders naar je administratie laat kijken.</li>
        </ul>
        <p className="mt-4 leading-relaxed text-slate-600">
          Voor een eenvoudige onderneming kan alles zelf doen prima zijn. Voor een complexere
          administratie kan professionele hulp de extra kosten waard zijn.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Veelgestelde vragen
        </h2>
        <div className="mt-6 space-y-8">
          {BOEKHOUD_CHECK_FAQS.map((faq) => (
            <div key={faq.q}>
              <h3 className="font-heading text-lg font-bold text-deep-blue sm:text-xl">{faq.q}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{faq.a}</p>
              {faq.q.includes('beste boekhoudprogramma') && (
                <div className="mt-4">
                  <Button asChild size="lg" className="rounded-xl px-8">
                    <Link href="/blogs/beste-boekhoudprogramma-zzp">
                      Bekijk de beste boekhoudprogramma&apos;s voor zzp&apos;ers →
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Start met wat je daadwerkelijk nodig hebt
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
          <p>
            Je hoeft als startende zzp&apos;er niet meteen het meest uitgebreide boekhoudprogramma te
            nemen.
          </p>
          <p>
            Heb je weinig facturen en kosten? Dan kan een eenvoudige factuurtool voldoende zijn.
          </p>
          <p>
            Groeit je administratie? Dan kan een basis-boekhoudprogramma meer overzicht geven.
          </p>
          <p>
            Heb je veel transacties of wil je veel automatiseren? Dan is een compleet
            boekhoudprogramma waarschijnlijk interessanter.
          </p>
          <p>
            En wil je helemaal weinig tijd aan je administratie besteden? Dan kan een combinatie van
            software en een boekhouder een betere oplossing zijn.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-xl px-8">
            <Link href="/create-invoice">
              Maak gratis een factuur met FactuurBaas →
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-xl px-8">
            <Link href="/blogs/beste-boekhoudprogramma-zzp">
              Of vergelijk de beste boekhoudprogramma&apos;s voor zzp&apos;ers →
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
