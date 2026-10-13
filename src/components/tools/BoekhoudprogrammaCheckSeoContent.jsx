import Link from 'next/link';
import { BOEKHOUD_CHECK_FAQS } from '@/lib/boekhoudprogrammaCheck';
import { ArrowIcon, btn } from '@/components/site/editorial';

const PROSE =
  'article-body prose prose-lg max-w-none prose-p:leading-[1.75] prose-h2:text-[1.85rem] sm:prose-h2:text-[2.15rem] prose-h3:text-[1.35rem] [&>section:first-child>h2:first-child]:mt-0';

const RESULT_CARD =
  'mt-10 rounded-2xl border border-ink/[0.08] bg-white px-6 py-8 shadow-paper sm:px-10 sm:py-10 [&>h2:first-child]:mt-0 [&>*:last-child]:mb-0';

const FLOW =
  'not-prose my-6 rounded-2xl border border-ink/10 bg-paper px-5 py-4 font-mono text-[13px] uppercase leading-relaxed tracking-[0.06em] text-ink sm:text-sm';

function Cta({ href, label, variant = 'primary' }) {
  return (
    <Link href={href} className={`${btn[variant]} w-full text-center sm:w-auto`}>
      {label}
      {!label.trim().endsWith('→') && <ArrowIcon />}
    </Link>
  );
}

function CtaRow({ children }) {
  return <div className="not-prose my-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{children}</div>;
}

export default function BoekhoudprogrammaCheckSeoContent({
  toolHref = '/tools/boekhoudprogramma-check/berekenen',
}) {
  return (
    <div className={PROSE}>
      <section>
        <h2>Jouw resultaat</h2>
        <p>
          Op basis van je antwoorden valt jouw situatie waarschijnlijk in één van deze vier
          categorieën.
        </p>
      </section>

      <section className={RESULT_CARD}>
        <h2>🟢 1. Een eenvoudige factuurtool is waarschijnlijk genoeg</h2>
        <h3>Dit past waarschijnlijk bij jou als:</h3>
        <ul>
          <li>je maar weinig facturen verstuurt;</li>
          <li>je weinig zakelijke kosten hebt;</li>
          <li>je weinig banktransacties hebt;</li>
          <li>je administratie overzichtelijk is;</li>
          <li>je prima zelf je administratie kunt bijhouden;</li>
          <li>en je geen behoefte hebt aan uitgebreide automatisering.</li>
        </ul>
        <p>Je hoeft dan niet automatisch een uitgebreid boekhoudprogramma te nemen.</p>
        <p>
          Als je vooral een professionele factuur wilt maken en je administratie verder eenvoudig
          is, kan een <strong>gratis factuurtool</strong> voldoende zijn.
        </p>
        <h3>Waarom dit bij jou past</h3>
        <p>
          Je administratie lijkt op basis van je antwoorden relatief eenvoudig. Een uitgebreid
          boekhoudprogramma kan dan meer functies bieden dan je daadwerkelijk gebruikt.
        </p>
        <p>
          Je kunt altijd later overstappen wanneer je aantal klanten, kosten of transacties groeit.
        </p>
        <h3>Wat zou deze uitkomst veranderen?</h3>
        <p>Een boekhoudprogramma wordt interessanter als je bijvoorbeeld:</p>
        <ul>
          <li>veel meer zakelijke kosten krijgt;</li>
          <li>steeds meer bonnetjes en inkoopfacturen moet verwerken;</li>
          <li>veel banktransacties krijgt;</li>
          <li>automatisch wilt werken;</li>
          <li>of meer inzicht wilt in je financiële situatie.</li>
        </ul>
        <h3>Voor jou interessant</h3>
        <p>
          Met <Link href="/create-invoice">FactuurBaas</Link> kun je gratis een professionele
          factuur maken zonder account. Je downloadt de factuur als PDF en verstuurt deze zelf naar
          je klant.
        </p>
        <CtaRow>
          <Cta href="/create-invoice" label="Maak gratis een factuur →" />
        </CtaRow>
      </section>

      <section className={RESULT_CARD}>
        <h2>🟡 2. Een eenvoudig boekhoudprogramma kan goed passen</h2>
        <h3>Dit past waarschijnlijk bij jou als:</h3>
        <ul>
          <li>je regelmatig facturen verstuurt;</li>
          <li>je ook zakelijke kosten hebt;</li>
          <li>je meer administratie krijgt dan je gemakkelijk zelf kunt bijhouden;</li>
          <li>je wel zelf je boekhouding wilt doen;</li>
          <li>maar je handmatig werk wilt verminderen.</li>
        </ul>
        <p>Je hoeft waarschijnlijk nog geen ingewikkelde totaaloplossing te gebruiken.</p>
        <p>
          Een eenvoudig boekhoudprogramma waarmee je bijvoorbeeld facturen, kosten, btw en je
          administratie op één plek kunt bijhouden kan dan voldoende zijn.
        </p>
        <h3>Waarom dit bij jou past</h3>
        <p>
          Je administratie is groot genoeg om meer structuur te gebruiken, maar uit je antwoorden
          blijkt niet dat je meteen een zeer uitgebreide oplossing nodig hebt.
        </p>
        <p>
          Het belangrijkste voordeel is dat je minder losse bestanden, spreadsheets en handmatige
          overzichten nodig hebt.
        </p>
        <h3>Waar je op kunt letten</h3>
        <p>Voor jouw situatie kunnen vooral deze functies interessant zijn:</p>
        <ul>
          <li>verkoopfacturen;</li>
          <li>inkoopfacturen;</li>
          <li>btw-overzicht;</li>
          <li>klant- en leveranciersgegevens;</li>
          <li>eenvoudige financiële overzichten;</li>
          <li>eventueel een bankkoppeling.</li>
        </ul>
        <h3>Wanneer zou een uitgebreider programma beter zijn?</h3>
        <p>
          Als je aantal transacties sterk groeit, veel automatisering wilt of uitgebreidere
          financiële rapportages nodig hebt, kan een uitgebreider boekhoudprogramma interessanter
          worden.
        </p>
        <CtaRow>
          <Cta
            href="/boekhoudprogramma-vergelijken"
            label="Vergelijk boekhoudprogramma's →"
          />
        </CtaRow>
      </section>

      <section className={RESULT_CARD}>
        <h2>🟠 3. Een compleet boekhoudprogramma is waarschijnlijk interessant</h2>
        <h3>Dit past waarschijnlijk bij jou als:</h3>
        <ul>
          <li>je regelmatig of veel facturen verstuurt;</li>
          <li>je veel zakelijke kosten hebt;</li>
          <li>je veel banktransacties hebt;</li>
          <li>je je administratie zoveel mogelijk wilt automatiseren;</li>
          <li>je een bankkoppeling wilt;</li>
          <li>je btw-administratie in software wilt bijhouden;</li>
          <li>of je inzicht wilt in omzet, kosten en resultaat.</li>
        </ul>
        <h3>Waarom dit bij jou past</h3>
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
        <h3>Waar je op kunt letten</h3>
        <p>Vergelijk boekhoudprogramma&apos;s vooral op:</p>
        <ul>
          <li>bankkoppeling;</li>
          <li>verwerking van inkomsten en uitgaven;</li>
          <li>btw-administratie;</li>
          <li>verkoop- en inkoopfacturen;</li>
          <li>automatische verwerking;</li>
          <li>financiële rapportages;</li>
          <li>gebruiksgemak;</li>
          <li>prijs.</li>
        </ul>
        <p>Er is niet één boekhoudprogramma dat voor iedere zzp&apos;er het beste is.</p>
        <CtaRow>
          <Cta
            href="/boekhoudprogramma-vergelijken"
            label="Vergelijk boekhoudprogramma's →"
          />
        </CtaRow>
      </section>

      <section className={RESULT_CARD}>
        <h2>🔴 4. Boekhoudsoftware combineren met een boekhouder kan verstandig zijn</h2>
        <h3>Dit past waarschijnlijk bij jou als:</h3>
        <ul>
          <li>je weinig tijd aan administratie wilt besteden;</li>
          <li>je boekhouden lastig vindt;</li>
          <li>je administratie omvangrijk is;</li>
          <li>je veel verschillende soorten transacties hebt;</li>
          <li>je situatie relatief complex is;</li>
          <li>of je liever hebt dat iemand je administratie controleert of verzorgt.</li>
        </ul>
        <p>
          <Link href="/boekhoudprogramma-vergelijken">Boekhoudsoftware</Link> kan ook in deze
          situatie nuttig zijn. Het zorgt voor structuur en kan het uitwisselen van gegevens met
          een boekhouder makkelijker maken.
        </p>
        <p>
          Je hoeft dus niet te kiezen tussen <strong>software óf een boekhouder</strong>.
        </p>
        <p>Een combinatie kan bijvoorbeeld zijn:</p>
        <p className={FLOW}>
          Boekhoudsoftware → dagelijkse administratie → boekhouder voor controle en fiscale zaken
        </p>
        <h3>Waarom dit bij jou past</h3>
        <p>
          Uit je antwoorden blijkt dat het waarschijnlijk niet alleen om software gaat. Je wilt
          vooral voorkomen dat je veel tijd en energie aan je administratie kwijt bent.
        </p>
        <p>
          Een boekhouder kan dan meer waarde toevoegen dan alleen een uitgebreider softwarepakket.
        </p>
        <h3>Wanneer zou je toch alles zelf kunnen doen?</h3>
        <p>
          Als je administratie eenvoudiger wordt, je meer kennis opbouwt of je voldoende tijd hebt
          om de boekhouding zelf te doen, kun je altijd meer zelf gaan beheren.
        </p>
        <CtaRow>
          <Cta
            href="/boekhoudprogramma-vergelijken"
            label="Vergelijk boekhoudprogramma's →"
          />
        </CtaRow>
      </section>

      <section>
        <h2>Waarom krijg ik deze uitkomst?</h2>
        <p>De check kijkt niet alleen naar het aantal facturen.</p>
        <p>
          Een zzp&apos;er met 5 facturen en 100 zakelijke transacties heeft bijvoorbeeld een heel
          andere administratie dan iemand met 20 facturen en bijna geen kosten.
        </p>
        <p>Daarom kijken we naar meerdere factoren:</p>
        <div className="overflow-x-auto">
          <table className="min-w-[32rem]">
            <thead>
              <tr>
                <th>Factor</th>
                <th>Waarom belangrijk?</th>
              </tr>
            </thead>
            <tbody>
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
                <tr key={factor}>
                  <td className="font-medium text-ink">{factor}</td>
                  <td>{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Daarom is er ook <strong>geen harde grens</strong>, zoals “vanaf 10 facturen heb je een
          boekhoudprogramma nodig”.
        </p>
        <CtaRow>
          <Cta href={toolHref} label="Doe de check opnieuw" />
        </CtaRow>
      </section>

      <section>
        <h2>Wat is het verschil tussen een factuurtool en boekhoudprogramma?</h2>
        <p>Een factuurtool is vooral gericht op het maken en beheren van verkoopfacturen.</p>
        <p>Een boekhoudprogramma gaat een stap verder en richt zich op je bredere administratie.</p>
        <div className="overflow-x-auto">
          <table className="min-w-[36rem]">
            <thead>
              <tr>
                <th />
                <th>Factuurtool</th>
                <th>Boekhoudprogramma</th>
              </tr>
            </thead>
            <tbody>
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
                <tr key={feature}>
                  <td className="font-medium text-ink">{feature}</td>
                  <td className={factuur === '✓' ? 'text-ember' : undefined}>{factuur}</td>
                  <td className={boekhoud === '✓' ? 'text-ember' : undefined}>{boekhoud}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Een factuurtool kan dus prima het startpunt zijn. Je hoeft niet direct een uitgebreid
          boekhoudprogramma te nemen omdat je zzp&apos;er bent.
        </p>
        <p>Wil je meer weten over het verschil?</p>
        <CtaRow>
          <Cta
            href="/blogs/gratis-factuurtool-vs-boekhoudprogramma"
            label="Factuurprogramma of boekhoudprogramma: wat heb je nodig? →"
          />
        </CtaRow>
      </section>

      <section>
        <h2>Welke boekhoudprogramma&apos;s kun je vergelijken?</h2>
        <p>
          Als uit de check komt dat boekhoudsoftware bij je past, zijn er verschillende
          programma&apos;s die je kunt bekijken.
        </p>
        <p>Voor Nederlandse zzp&apos;ers kun je bijvoorbeeld vergelijken:</p>
        <div className="not-prose my-8 border-t border-ink/15">
          {[
            ['Moneybird', 'Een online boekhoudprogramma dat zich richt op ondernemers en administratie.'],
            ['Jortt', 'Een online boekhoudprogramma met veel aandacht voor automatisering en inzicht.'],
            [
              'e-Boekhouden.nl',
              "Een online boekhoudpakket dat zich richt op administratie voor ondernemers en zzp'ers.",
            ],
          ].map(([name, text], index) => (
            <div
              key={name}
              className="grid gap-2 border-b border-ink/15 py-6 sm:grid-cols-[3rem_14rem_1fr] sm:items-baseline sm:gap-6"
            >
              <span className="font-display text-lg italic text-ember" aria-hidden>
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-[1.35rem] font-normal leading-tight tracking-[-0.015em] text-ink">
                {name}
              </h3>
              <p className="text-[15px] leading-relaxed text-ink-500 sm:text-base">{text}</p>
            </div>
          ))}
        </div>
        <p>
          Welke van deze het beste bij je past, hangt af van je situatie, voorkeuren en benodigde
          functies.
        </p>
        <CtaRow>
          <Cta
            href="/boekhoudprogramma-vergelijken"
            label="Vergelijk boekhoudprogramma's voor zzp'ers →"
          />
        </CtaRow>
      </section>

      <section>
        <h2>Heb ik als zzp&apos;er überhaupt een boekhoudprogramma nodig?</h2>
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
        <ul>
          <li>meer transacties krijgt;</li>
          <li>meer kosten en bonnetjes moet verwerken;</li>
          <li>een bankkoppeling wilt;</li>
          <li>meer automatisering wilt;</li>
          <li>of meer inzicht in je administratie nodig hebt.</li>
        </ul>
        <p>Je kunt dus ook klein beginnen en later overstappen.</p>
        <p>Lees meer over dit onderwerp in:</p>
        <CtaRow>
          <Cta
            href="/blogs/wanneer-boekhoudsoftware-nodig-zzp"
            label="Heb ik als zzp'er een boekhoudprogramma nodig? →"
          />
        </CtaRow>
      </section>

      <section>
        <h2>Kan ik eerst FactuurBaas gebruiken en later overstappen?</h2>
        <p>Ja.</p>
        <p>Je hoeft niet vanaf de eerste dag een uitgebreid boekhoudprogramma te gebruiken.</p>
        <p>
          Als je nu vooral facturen wilt maken, kun je beginnen met een eenvoudige factuurtool.
          Zodra je administratie groeit, kun je een boekhoudprogramma toevoegen of overstappen
          naar een uitgebreidere oplossing.
        </p>
        <p>Dat kan bijvoorbeeld betekenen:</p>
        <p className={FLOW}>FactuurBaas → groeiende administratie → boekhoudsoftware</p>
        <p>Of:</p>
        <p className={FLOW}>FactuurBaas + boekhoudsoftware</p>
        <p>
          Je hoeft factureren en boekhouden dus niet noodzakelijk in hetzelfde programma te doen.
        </p>
      </section>

      <section>
        <h2>Wanneer is een boekhouder interessanter dan alleen software?</h2>
        <p>
          Software helpt vooral met het <strong>organiseren en automatiseren</strong> van je
          administratie.
        </p>
        <p>
          Een boekhouder kan daarnaast helpen met het <strong>beoordelen en verwerken</strong> van
          je administratie en met fiscale vraagstukken.
        </p>
        <p>Een boekhouder kan daarom interessant worden als:</p>
        <ul>
          <li>je weinig tijd hebt;</li>
          <li>je administratie complex wordt;</li>
          <li>je fiscale kennis beperkt is;</li>
          <li>je veel fouten wilt voorkomen;</li>
          <li>of je gewoon liever iemand anders naar je administratie laat kijken.</li>
        </ul>
        <p>
          Voor een eenvoudige onderneming kan alles zelf doen prima zijn. Voor een complexere
          administratie kan professionele hulp de extra kosten waard zijn.
        </p>
      </section>

      <section>
        <h2>Veelgestelde vragen</h2>
        <div className="not-prose mt-8 border-t border-ink/15">
          {BOEKHOUD_CHECK_FAQS.map((faq) => (
            <div key={faq.q} className="border-b border-ink/15 py-6">
              <h3 className="font-display text-xl font-normal leading-snug tracking-[-0.01em] text-ink sm:text-[1.35rem]">
                {faq.q}
              </h3>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-500 sm:text-base">
                {faq.a}
              </p>
              {faq.q.includes('beste boekhoudprogramma') && (
                <div className="mt-5 flex">
                  <Cta
                    href="/boekhoudprogramma-vergelijken"
                    label="Vergelijk boekhoudprogramma's →"
                    variant="secondary"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Start met wat je daadwerkelijk nodig hebt</h2>
        <p>
          Je hoeft als startende zzp&apos;er niet meteen het meest uitgebreide boekhoudprogramma te
          nemen.
        </p>
        <p>Heb je weinig facturen en kosten? Dan kan een eenvoudige factuurtool voldoende zijn.</p>
        <p>Groeit je administratie? Dan kan een basis-boekhoudprogramma meer overzicht geven.</p>
        <p>
          Heb je veel transacties of wil je veel automatiseren? Dan is een compleet
          boekhoudprogramma waarschijnlijk interessanter.
        </p>
        <p>
          En wil je helemaal weinig tijd aan je administratie besteden? Dan kan een combinatie van
          software en een boekhouder een betere oplossing zijn.
        </p>
        <CtaRow>
          <Cta href="/create-invoice" label="Maak gratis een factuur met FactuurBaas →" />
          <Cta
            href="/boekhoudprogramma-vergelijken"
            label="Of vergelijk boekhoudprogramma's →"
            variant="secondary"
          />
        </CtaRow>
      </section>
    </div>
  );
}
