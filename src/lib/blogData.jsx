import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { JORTT_URL, MONEYBIRD_URL } from '@/lib/affiliateLinks';
import { aovArticles } from '@/lib/aovBlogData';
import { uitgavenArticles } from '@/lib/uitgavenBlogData';
import { zakelijkeKostenArticles } from '@/lib/zakelijkeKostenBlogData';
import { zakelijkeLeaseArticles } from '@/lib/zakelijkeLeaseBlogData';
import { zakelijkInternetTelefonieArticles } from '@/lib/zakelijkInternetTelefonieBlogData';
import { gratisFactuurAppArticle } from '@/lib/gratisFactuurAppBlog';
import { facturenVerwerkenArticles } from '@/lib/facturenVerwerkenBlog';

const CtaButton = ({ href = '/create-invoice', label = 'Maak Nu Je Gratis Factuur' }) => (
    <div className="my-8 text-center">
        <Button asChild className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
            <Link href={href}>{label}</Link>
        </Button>
    </div>
);

const BoekhoudCheckCta = () => (
    <div className="my-8 text-center">
        <Button asChild className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
            <Link href="/tools/boekhoudprogramma-check">Doe de boekhoudprogramma-check →</Link>
        </Button>
    </div>
);

const moneybirdLink = {
    href: MONEYBIRD_URL,
    target: '_blank',
    rel: 'noopener noreferrer sponsored',
};

const MoneybirdAffiliateNote = () => (
    <p className="mx-auto mt-3 max-w-md text-center text-xs leading-relaxed text-slate-500">
        De link naar Moneybird is een affiliatelink. Voor jou kost dit niets. FactuurBaas kan een kleine vergoeding ontvangen.
    </p>
);

const MoneybirdCta = () => (
    <div className="my-8 text-center">
        <Button asChild className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
            <a {...moneybirdLink}>Bekijk Moneybird →</a>
        </Button>
        <MoneybirdAffiliateNote />
    </div>
);

const JorttAffiliateNote = () => (
    <p className="mx-auto mt-3 max-w-md text-center text-xs leading-relaxed text-slate-500">
        De link naar Jortt is een affiliatelink. Voor jou kost dit niets. FactuurBaas kan een kleine vergoeding ontvangen.
    </p>
);

const JorttCta = () => (
    <div className="my-8 text-center">
        <Button asChild className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
            <a href={JORTT_URL} target="_blank" rel="noopener noreferrer sponsored">
                Bekijk Jortt →
            </a>
        </Button>
        <JorttAffiliateNote />
    </div>
);

const EBoekhoudenCta = () => (
    <div className="my-8 text-center">
        <Button asChild className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
            <Link href="/boekhoudprogramma-vergelijken">Vergelijk boekhoudprogramma&apos;s →</Link>
        </Button>
    </div>
);

const HypotheekCta = ({ label = "Bereken je maximale hypotheek als zzp'er →" }) => (
    <div className="my-8 text-center">
        <Button asChild className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
            <Link href="/tools/hypotheek-berekenen-zzp">{label}</Link>
        </Button>
    </div>
);

const HypotheekHubLink = () => (
  <p>
    Of bekijk het overzicht:{' '}
    <Link href="/blogs/hypotheek-als-zzper" className="text-warm-orange hover:underline">
      Hypotheek als zzp&apos;er
    </Link>
    .
  </p>
);

const MoneybirdJorttCtas = () => (
    <div className="my-8 text-center">
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
                <a {...moneybirdLink}>Bekijk Moneybird →</a>
            </Button>
            <Button asChild variant="outline" className="font-bold py-3 px-6 rounded-lg text-lg">
                <a href={JORTT_URL} target="_blank" rel="noopener noreferrer sponsored">
                    Bekijk Jortt →
                </a>
            </Button>
        </div>
        <MoneybirdAffiliateNote />
        <JorttAffiliateNote />
    </div>
);

const MoneybirdEBoekhoudenCtas = () => (
    <div className="my-8 text-center">
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
                <a {...moneybirdLink}>Bekijk Moneybird →</a>
            </Button>
            <Button asChild variant="outline" className="font-bold py-3 px-6 rounded-lg text-lg">
                <Link href="/boekhoudprogramma-vergelijken">Vergelijk boekhoudprogramma&apos;s →</Link>
            </Button>
        </div>
        <MoneybirdAffiliateNote />
    </div>
);

const JorttEBoekhoudenCtas = () => (
    <div className="my-8 text-center">
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
                <a href={JORTT_URL} target="_blank" rel="noopener noreferrer sponsored">
                    Bekijk Jortt →
                </a>
            </Button>
            <Button asChild variant="outline" className="font-bold py-3 px-6 rounded-lg text-lg">
                <Link href="/boekhoudprogramma-vergelijken">Vergelijk boekhoudprogramma&apos;s →</Link>
            </Button>
        </div>
        <JorttAffiliateNote />
    </div>
);

const OfferteFactuurCtas = () => (
    <div className="my-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
            <Link href="/tools/offerte-maker">Maak gratis offerte</Link>
        </Button>
        <Button asChild variant="outline" className="font-bold py-3 px-6 rounded-lg text-lg">
            <Link href="/create-invoice">Maak gratis factuur</Link>
        </Button>
    </div>
);

export const articles = [
  {
    slug: 'factuur-maken-zzp',
    relatedSlugs: ['gratis-factuur-zzp', 'factuur-fouten-voorkomen', 'factuur-templates-zzp', 'factuur-pdf-downloaden'],
    metaTitle: 'Factuur maken als zzp\'er? Stappenplan + gratis voorbeeld',
    title: 'Factuur maken als zzp\'er: stappenplan en voorbeeld',
    breadcrumbLabel: 'Factuur maken als zzp\'er',
    excerpt: 'Factuur maken als zzp\'er? Bekijk een compleet voorbeeld, ontdek wat verplicht op je factuur moet staan en maak gratis je eigen factuur als PDF.',
    keywords: 'factuur maken zzp, zzp factuur maken, voorbeeld factuur zzp, hoe maak je een factuur, factuur opstellen, zzp factuur, wat moet er op een factuur staan zzp',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Hoe%20maak%20je%20een%20factuur%20als%20zzp%20er.png',
      alt: 'Factuur maken als zzp\'er: stappenplan met voorbeeld en verplichte gegevens.',
    },
    datePublished: '2026-02-01',
    dateModified: '2026-10-08',
    faq: [
      {
        question: 'Hoe maak ik mijn eerste factuur als zzp\'er?',
        answer: 'Verzamel je bedrijfsgegevens en klantgegevens, kies een uniek factuurnummer, vermeld de datums en werkzaamheden, bereken de juiste bedragen en voeg je betaalgegevens toe. Je kunt hiervoor een gratis online factuurmaker gebruiken.',
      },
      {
        question: 'Kan ik gratis een zzp-factuur maken?',
        answer: 'Ja. Met FactuurBaas kun je gratis een factuur maken en als PDF downloaden zonder account.',
      },
      {
        question: 'Hoe ziet een factuur voor een zzp\'er eruit?',
        answer: 'Een zzp-factuur bevat onder andere bedrijfs- en klantgegevens, een factuurnummer, relevante datums, een omschrijving van de geleverde diensten of producten en de toepasselijke bedragen en btw-gegevens.',
      },
      {
        question: 'Moet ik als zzp\'er btw op mijn factuur zetten?',
        answer: 'Dat hangt af van je werkzaamheden en btw-situatie. Bij btw-belaste prestaties vermeld je doorgaans het btw-tarief en de verschuldigde btw. Voor de KOR, vrijstellingen en bepaalde andere situaties gelden afwijkende regels.',
      },
      {
        question: 'Wat is een goed factuurnummer voor een zzp\'er?',
        answer: 'Een nummer zoals 2026-001 is een eenvoudige keuze. Zorg dat ieder nummer uniek is en binnen een opeenvolgende reeks past.',
      },
      {
        question: 'Kan ik een factuur maken zonder boekhoudprogramma?',
        answer: 'Ja. Je bent niet verplicht een betaald boekhoudprogramma te gebruiken. Wel moet je een correcte administratie bijhouden en voldoen aan de toepasselijke factuureisen.',
      },
      {
        question: 'Kan ik een factuur maken op mijn telefoon?',
        answer: 'Ja. Je kunt FactuurBaas via de browser op je telefoon gebruiken en op ondersteunde apparaten als web-app aan je beginscherm toevoegen.',
      },
      {
        question: 'Mag ik als zzp\'er een factuur maken zonder KvK-nummer?',
        answer: 'Dat hangt af van je situatie. Als je verplicht bent je onderneming bij de KvK in te schrijven, gelden ook de bijbehorende vermeldingsregels. Er zijn situaties waarin iemand niet KvK-inschrijfplichtig is. Controleer welke regels op jou van toepassing zijn.',
      },
      {
        question: 'Welke betalingstermijn gebruik ik als zzp\'er?',
        answer: 'Veel ondernemers gebruiken 14 of 30 dagen. Welke termijn toegestaan of van toepassing is, hangt af van de afspraken en wettelijke regels. Vermeld de afgesproken vervaldatum duidelijk.',
      },
    ],
    content: (
      <>
        <p>Wil je als zzp&apos;er een factuur maken, maar weet je niet precies wat erop moet staan? Of ben je net begonnen met ondernemen en wil je zeker weten dat je eerste factuur klopt?</p>
        <p>Een factuur maken hoeft niet ingewikkeld te zijn. Je hebt de gegevens van je bedrijf en klant nodig, een omschrijving van je werkzaamheden en de juiste bedragen. Daarnaast moet je rekening houden met de factuureisen van de Belastingdienst.</p>
        <p>In deze gids ontdek je:</p>
        <ul>
          <li>Hoe je stap voor stap een factuur opstelt.</li>
          <li>Welke gegevens verplicht op een zzp-factuur staan.</li>
          <li>Hoe een voorbeeldfactuur voor een zzp&apos;er eruitziet.</li>
          <li>Hoe je btw, factuurnummers en betalingstermijnen verwerkt.</li>
          <li>Hoe je gratis een professionele factuur maakt.</li>
        </ul>
        <p>
          <strong>Wil je direct beginnen?</strong> Met{' '}
          <Link href="/create-invoice" className="text-warm-orange hover:underline">FactuurBaas</Link>{' '}
          kun je gratis een factuur maken, zonder account, en deze als PDF downloaden.
        </p>
        <CtaButton href="/create-invoice" label="Maak gratis een factuur" />

        <h2>Hoe maak je een factuur als zzp&apos;er?</h2>
        <p>Een factuur maken als zzp&apos;er bestaat uit zes eenvoudige stappen.</p>
        <ol>
          <li>Verzamel je bedrijfsgegevens en de gegevens van je klant.</li>
          <li>Maak een uniek factuurnummer aan.</li>
          <li>Vermeld de factuurdatum en de datum waarop je hebt geleverd.</li>
          <li>Beschrijf je werkzaamheden, producten of gewerkte uren.</li>
          <li>Bereken het bedrag exclusief btw, de btw en het totaalbedrag.</li>
          <li>Voeg je betaalgegevens toe en controleer de factuur.</li>
        </ol>
        <p>Daarna kun je de factuur downloaden en naar je klant sturen.</p>
        <p>Hieronder leggen we iedere stap uit.</p>

        <h2>Stap 1: Vul je bedrijfsgegevens en klantgegevens in</h2>
        <p>Begin met de gegevens van je eigen onderneming.</p>
        <p>Vermeld je volledige bedrijfsnaam en adres, je KvK-nummer en je btw-identificatienummer wanneer dat op jouw factuur verplicht is.</p>
        <p>Daarna voeg je de gegevens van je klant toe.</p>
        <p>Voor een zakelijke klant zijn dit doorgaans:</p>
        <ul>
          <li>Bedrijfsnaam of volledige naam.</li>
          <li>Volledig adres.</li>
          <li>Eventuele aanvullende gegevens die nodig zijn voor de facturatie.</li>
        </ul>
        <p>Controleer de gegevens voordat je de factuur verstuurt. Een verkeerd adres of een onjuiste bedrijfsnaam kan ervoor zorgen dat je klant om een aangepaste factuur vraagt.</p>

        <h2>Stap 2: Kies een uniek factuurnummer</h2>
        <p>Iedere factuur moet een uniek nummer hebben dat binnen je administratie in een opeenvolgende reeks past.</p>
        <p>Je kunt bijvoorbeeld deze nummering gebruiken:</p>
        <ul>
          <li>2026-001</li>
          <li>2026-002</li>
          <li>2026-003</li>
        </ul>
        <p>Of:</p>
        <ul>
          <li>F2026-001</li>
          <li>F2026-002</li>
          <li>F2026-003</li>
        </ul>
        <p>Het belangrijkste is dat je een logisch systeem kiest en dit consequent gebruikt.</p>
        <p>Begin je voor het eerst met factureren? Dan is een nummer zoals <strong>2026-001</strong> een eenvoudige keuze.</p>
        <p>
          Met de{' '}
          <Link href="/tools/factuurnummer-generator" className="text-warm-orange hover:underline">gratis factuurnummer-generator</Link>{' '}
          kun je een nummer opstellen.
        </p>

        <h2>Stap 3: Vermeld de factuurdatum en leverdatum</h2>
        <p>Een factuur bevat normaal gesproken twee belangrijke datums.</p>
        <p><strong>Factuurdatum:</strong> de datum waarop je de factuur uitreikt.</p>
        <p><strong>Leverdatum:</strong> de datum waarop je het product hebt geleverd of de dienst hebt uitgevoerd, of de periode waarop de werkzaamheden betrekking hebben.</p>
        <p>Voorbeeld:</p>
        <ul>
          <li>Factuurdatum: 8 oktober 2026</li>
          <li>Leverdatum: 6 oktober 2026</li>
        </ul>
        <p>Heb je gedurende een hele maand werkzaamheden uitgevoerd? Dan kun je de betreffende periode duidelijk vermelden, bijvoorbeeld: <em>Werkzaamheden september 2026</em>.</p>

        <h2>Stap 4: Beschrijf je werkzaamheden of producten</h2>
        <p>Je klant moet kunnen begrijpen waarvoor hij betaalt.</p>
        <p>Gebruik daarom liever geen algemene omschrijving zoals &apos;Werkzaamheden&apos; wanneer je specifieker kunt zijn.</p>
        <p>Een voorbeeld voor een freelance marketeer:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Omschrijving</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Aantal</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Tarief</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Bedrag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Website optimalisatie</td>
                <td className="px-4 py-3 text-right">5 uur</td>
                <td className="px-4 py-3 text-right">€60</td>
                <td className="px-4 py-3 text-right">€300</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">SEO-advies</td>
                <td className="px-4 py-3 text-right">3 uur</td>
                <td className="px-4 py-3 text-right">€60</td>
                <td className="px-4 py-3 text-right">€180</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue" colSpan={3}>Totaal excl. btw</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€480</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Voor een schilder, timmerman of consultant werkt dit op dezelfde manier.</p>
        <p>Je kunt uren, aantallen, vaste projectprijzen of afzonderlijke producten vermelden.</p>
        <p>
          <Link href="/factuur-voorbeeld/uren" className="text-warm-orange hover:underline">Bekijk ook het voorbeeld voor een factuur op basis van gewerkte uren</Link>.
        </p>

        <h2>Stap 5: Bereken de btw en het totaalbedrag</h2>
        <p>Als je btw in rekening moet brengen, vermeld je het toepasselijke btw-tarief en het btw-bedrag op je factuur.</p>
        <p>In Nederland komen onder andere de tarieven van 21%, 9% en 0% voor. Welk tarief van toepassing is, hangt af van de geleverde goederen of diensten en de omstandigheden.</p>
        <p>Voorbeeld bij 21% btw:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Berekening</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Bedrag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Werkzaamheden excl. btw</td>
                <td className="px-4 py-3 text-right">€480,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw 21%</td>
                <td className="px-4 py-3 text-right">€100,80</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal incl. btw</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€580,80</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Ben je deelnemer aan de kleineondernemersregeling (KOR)? Dan breng je doorgaans geen btw in rekening en moet je factuur daarbij passen.</p>
        <p>Ook bij vrijgestelde prestaties en bepaalde internationale transacties kunnen andere regels gelden.</p>
        <p>Controleer daarom altijd welke btw-behandeling voor jouw situatie geldt.</p>

        <h2>Stap 6: Voeg je betaalgegevens toe</h2>
        <p>Maak duidelijk hoe en wanneer de klant moet betalen.</p>
        <p>Vermeld bijvoorbeeld:</p>
        <ul>
          <li>Je IBAN.</li>
          <li>De naam van de rekeninghouder.</li>
          <li>De afgesproken betalingstermijn.</li>
          <li>Het factuurnummer als betalingskenmerk.</li>
        </ul>
        <p>Een eenvoudige betaalinstructie is:</p>
        <p><em>Gelieve €580,80 binnen 14 dagen over te maken onder vermelding van factuurnummer 2026-001.</em></p>
        <p>Een betalingstermijn van 14 of 30 dagen komt vaak voor, maar de toepasselijke wettelijke regels en gemaakte afspraken bepalen welke termijn geldt.</p>
        <p>Controleer ook of de afgesproken termijn overeenkomt met de vervaldatum die je op de factuur vermeldt.</p>

        <h2>Voorbeeld factuur zzp</h2>
        <p>Hieronder zie je hoe een eenvoudige factuur voor een zzp&apos;er eruit kan zien.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-lg font-semibold text-deep-blue">Factuur</p>
          </div>
          <div className="grid gap-4 border-b border-slate-100 px-4 py-4 sm:grid-cols-2">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Van</p>
              <p className="font-medium text-deep-blue">Jansen Marketing</p>
              <p>Voorbeeldstraat 12</p>
              <p>1012 AB Amsterdam</p>
              <p>KvK: 12345678</p>
              <p>Btw-id: NL123456789B01</p>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Aan</p>
              <p className="font-medium text-deep-blue">De Vries Webshops</p>
              <p>Klantstraat 25</p>
              <p>3011 AA Rotterdam</p>
            </div>
          </div>
          <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-2 font-medium text-deep-blue">Factuurnummer</td>
                <td className="px-4 py-2">2026-001</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-2 font-medium text-deep-blue">Factuurdatum</td>
                <td className="px-4 py-2">8 oktober 2026</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-2 font-medium text-deep-blue">Leverdatum</td>
                <td className="px-4 py-2">6 oktober 2026</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-2 font-medium text-deep-blue">Vervaldatum</td>
                <td className="px-4 py-2">22 oktober 2026</td>
              </tr>
            </tbody>
          </table>
          <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Omschrijving</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Aantal</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Tarief</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Totaal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Website optimalisatie</td>
                <td className="px-4 py-3 text-right">5 uur</td>
                <td className="px-4 py-3 text-right">€60</td>
                <td className="px-4 py-3 text-right">€300</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">SEO-advies</td>
                <td className="px-4 py-3 text-right">3 uur</td>
                <td className="px-4 py-3 text-right">€60</td>
                <td className="px-4 py-3 text-right">€180</td>
              </tr>
            </tbody>
          </table>
          <div className="space-y-1 px-4 py-4 text-sm text-slate-700 sm:text-base">
            <p className="flex justify-between"><span>Subtotaal</span><span>€480,00</span></p>
            <p className="flex justify-between"><span>Btw 21%</span><span>€100,80</span></p>
            <p className="flex justify-between font-semibold text-deep-blue"><span>Totaal te betalen</span><span>€580,80</span></p>
            <p className="pt-3 text-slate-600">IBAN: NL00 BANK 0123 4567 89</p>
            <p className="text-slate-600">Ten name van: Jansen Marketing</p>
            <p className="text-slate-600">Betalingskenmerk: 2026-001</p>
          </div>
        </div>
        <p><em>Dit is een fictief voorbeeld. Gebruik je eigen gegevens en controleer het toepasselijke btw-tarief.</em></p>
        <p>
          Wil je niet zelf een factuur opmaken? Met{' '}
          <Link href="/create-invoice" className="text-warm-orange hover:underline">FactuurBaas maak je gratis een factuur als PDF</Link>.
        </p>

        <h2>Wat moet er verplicht op een factuur staan als zzp&apos;er?</h2>
        <p>Voor een reguliere btw-factuur gelden in Nederland doorgaans de volgende eisen.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Onderdeel</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Verplicht?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Volledige naam en adres van leverancier</td>
                <td className="px-4 py-3">Ja</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Naam en adres van afnemer</td>
                <td className="px-4 py-3">Ja</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw-identificatienummer leverancier</td>
                <td className="px-4 py-3">Doorgaans</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">KvK-nummer leverancier</td>
                <td className="px-4 py-3">Indien van toepassing</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Uniek opeenvolgend factuurnummer</td>
                <td className="px-4 py-3">Ja</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Factuurdatum</td>
                <td className="px-4 py-3">Ja</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Leverdatum of datum van prestatie</td>
                <td className="px-4 py-3">Ja, indien afwijkend</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Omschrijving en omvang van levering of dienst</td>
                <td className="px-4 py-3">Ja</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Bedrag exclusief btw</td>
                <td className="px-4 py-3">Doorgaans</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Toegepast btw-tarief</td>
                <td className="px-4 py-3">Indien van toepassing</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Verschuldigd btw-bedrag</td>
                <td className="px-4 py-3">Indien van toepassing</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Bijzondere btw-vermelding</td>
                <td className="px-4 py-3">Indien van toepassing</td>
              </tr>
              <tr>
                <td className="px-4 py-3">IBAN en betalingstermijn</td>
                <td className="px-4 py-3">Praktisch belangrijk, niet algemeen verplicht volgens de btw-factuureisen</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Er bestaan uitzonderingen, zoals vereenvoudigde facturen voor bepaalde kleine bedragen en specifieke regels bij btw-verlegging, vrijstellingen en grensoverschrijdende transacties.</p>
        <p>
          Bekijk voor de actuele wettelijke eisen de informatie van de{' '}
          <a href="https://www.belastingdienst.nl/" className="text-warm-orange hover:underline" target="_blank" rel="noopener noreferrer">Belastingdienst</a>.
        </p>

        <h2>Gratis factuur maken als zzp&apos;er</h2>
        <p>Je kunt op verschillende manieren een factuur maken. Meer over gratis opties lees je in ons artikel over{' '}
          <Link href="/blogs/gratis-factuur-zzp" className="text-warm-orange hover:underline">gratis een ZZP-factuur maken</Link>.
        </p>
        <h3>Factuur maken in Word</h3>
        <p>Met Word kun je zelf een factuur ontwerpen en aanpassen.</p>
        <p>Het nadeel is dat je bedragen en btw vaak zelf moet berekenen of controleren.</p>
        <p>
          <Link href="/factuur-template/word" className="text-warm-orange hover:underline">Bekijk de Word-factuurtemplate</Link>.
        </p>
        <h3>Factuur maken in Excel</h3>
        <p>Excel is handig als je graag met tabellen en formules werkt.</p>
        <p>Je kunt berekeningen automatiseren, maar moet nog steeds zorgen dat je factuur de juiste gegevens bevat.</p>
        <p>
          <Link href="/factuur-template/excel" className="text-warm-orange hover:underline">Bekijk de Excel-factuurtemplate</Link>.
        </p>
        <h3>Online factuur maken</h3>
        <p>Met een online factuurmaker hoef je niet zelf een document op te bouwen.</p>
        <p>Bij FactuurBaas vul je de gegevens in, voeg je factuurregels toe en laat je de bedragen berekenen.</p>
        <p>Daarna download je de factuur als PDF.</p>
        <p><strong>Een account is niet verplicht om een losse factuur te maken.</strong></p>
        <CtaButton href="/create-invoice" label="Maak gratis je factuur" />

        <h2>Factuur maken voor een eenmanszaak</h2>
        <p>Heb je een eenmanszaak? Dan gelden voor jou in beginsel dezelfde factuurregels als voor andere ondernemers.</p>
        <p>Zzp&apos;er is geen aparte rechtsvorm. Veel zzp&apos;ers werken als eenmanszaak, maar je kunt ook vanuit een andere rechtsvorm ondernemen.</p>
        <p>Vermeld daarom de gegevens van je eigen onderneming en zorg dat de factuur aansluit op je btw-situatie.</p>
        <p>Je hoeft niet automatisch een betaald factuurprogramma te gebruiken om aan de factuureisen te voldoen.</p>

        <h2>Factuur maken als zzp&apos;er in de zorg</h2>
        <p>Werk je als zelfstandige in de zorg? Dan is het belangrijk om te bepalen of je diensten btw-belast of btw-vrijgesteld zijn.</p>
        <p>Niet iedere zorgdienst is automatisch vrijgesteld van btw. Dit hangt onder andere af van de aard en het doel van de werkzaamheden.</p>
        <p>
          <Link href="/factuur-voorbeeld/zorg" className="text-warm-orange hover:underline">Bekijk een factuur voorbeeld voor zzp zorg</Link>.
        </p>
        <p>Een zorgfactuur kan bijvoorbeeld de volgende regels bevatten:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Omschrijving</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Aantal</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Tarief</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Totaal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Zorgverlening 1 oktober</td>
                <td className="px-4 py-3 text-right">8 uur</td>
                <td className="px-4 py-3 text-right">€45</td>
                <td className="px-4 py-3 text-right">€360</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Zorgverlening 2 oktober</td>
                <td className="px-4 py-3 text-right">6 uur</td>
                <td className="px-4 py-3 text-right">€45</td>
                <td className="px-4 py-3 text-right">€270</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue" colSpan={3}>Totaal</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€630</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>De btw-verwerking moet je vervolgens aanpassen aan jouw werkzaamheden en fiscale situatie.</p>
        <p>Vermeld bij een vrijgestelde prestatie de juiste vrijstellingsvermelding.</p>

        <h2>Veelgemaakte fouten bij het opstellen van een factuur</h2>
        <p>Een factuur hoeft niet ingewikkeld te zijn, maar kleine fouten kunnen problemen veroorzaken.</p>
        <p><strong>1. Een factuurnummer dubbel gebruiken</strong></p>
        <p>Iedere factuur moet een uniek nummer hebben.</p>
        <p><strong>2. De leverdatum vergeten</strong></p>
        <p>Vermeld wanneer de dienst of levering heeft plaatsgevonden als dat afwijkt van de factuurdatum.</p>
        <p><strong>3. Het verkeerde btw-tarief toepassen</strong></p>
        <p>Controleer welk btw-tarief bij je werkzaamheden hoort.</p>
        <p><strong>4. Een onduidelijke omschrijving gebruiken</strong></p>
        <p>Beschrijf wat je daadwerkelijk hebt geleverd.</p>
        <p><strong>5. Geen duidelijke betaalinstructies geven</strong></p>
        <p>Maak het voor je klant eenvoudig om de factuur te betalen.</p>
        <p><strong>6. Geen administratie bijhouden</strong></p>
        <p>Bewaar je verzonden facturen en andere relevante administratieve gegevens volgens de geldende bewaartermijnen.</p>

        <h2>Wanneer moet je als zzp&apos;er een factuur sturen?</h2>
        <p>Voor leveringen en diensten waarvoor de reguliere factureringsplicht geldt, moet je de factuur doorgaans uiterlijk op de vijftiende dag van de maand na de maand van levering of dienstverlening uitreiken.</p>
        <p>Heb je bijvoorbeeld op 20 september een dienst geleverd, dan moet de factuur in de reguliere situatie uiterlijk op 15 oktober worden uitgereikt.</p>
        <p>Er bestaan uitzonderingen en bijzondere regels, onder meer voor bepaalde internationale transacties.</p>
        <p>Voor je cashflow is het vaak verstandig om niet tot de uiterste datum te wachten.</p>

        <h2>Heb je als zzp&apos;er een boekhoudprogramma nodig?</h2>
        <p>Niet noodzakelijk.</p>
        <p>Als je weinig facturen en zakelijke kosten hebt, kun je mogelijk beginnen met een gratis factuurtool en een eenvoudige eigen administratie.</p>
        <p>Naarmate je onderneming groeit, kan boekhoudsoftware handig worden voor banktransacties, uitgaven, btw-overzichten en andere administratieve werkzaamheden.</p>
        <p>Twijfel je wat je nodig hebt?</p>
        <p>
          <Link href="/tools/boekhoudprogramma-check" className="text-warm-orange hover:underline">Doe de boekhoudprogramma-check</Link>.
        </p>

        <h2>Veelgestelde vragen over factuur maken als zzp&apos;er</h2>
        <h3>Hoe maak ik mijn eerste factuur als zzp&apos;er?</h3>
        <p>Verzamel je bedrijfsgegevens en klantgegevens, kies een uniek factuurnummer, vermeld de datums en werkzaamheden, bereken de juiste bedragen en voeg je betaalgegevens toe. Je kunt hiervoor een gratis online factuurmaker gebruiken.</p>
        <h3>Kan ik gratis een zzp-factuur maken?</h3>
        <p>Ja. Met FactuurBaas kun je gratis een factuur maken en als PDF downloaden zonder account.</p>
        <h3>Hoe ziet een factuur voor een zzp&apos;er eruit?</h3>
        <p>Een zzp-factuur bevat onder andere bedrijfs- en klantgegevens, een factuurnummer, relevante datums, een omschrijving van de geleverde diensten of producten en de toepasselijke bedragen en btw-gegevens.</p>
        <h3>Moet ik als zzp&apos;er btw op mijn factuur zetten?</h3>
        <p>Dat hangt af van je werkzaamheden en btw-situatie. Bij btw-belaste prestaties vermeld je doorgaans het btw-tarief en de verschuldigde btw. Voor de KOR, vrijstellingen en bepaalde andere situaties gelden afwijkende regels.</p>
        <h3>Wat is een goed factuurnummer voor een zzp&apos;er?</h3>
        <p>Een nummer zoals 2026-001 is een eenvoudige keuze. Zorg dat ieder nummer uniek is en binnen een opeenvolgende reeks past.</p>
        <h3>Kan ik een factuur maken zonder boekhoudprogramma?</h3>
        <p>Ja. Je bent niet verplicht een betaald boekhoudprogramma te gebruiken. Wel moet je een correcte administratie bijhouden en voldoen aan de toepasselijke factuureisen.</p>
        <h3>Kan ik een factuur maken op mijn telefoon?</h3>
        <p>Ja. Je kunt FactuurBaas via de browser op je telefoon gebruiken en op ondersteunde apparaten als web-app aan je beginscherm toevoegen.</p>
        <h3>Mag ik als zzp&apos;er een factuur maken zonder KvK-nummer?</h3>
        <p>Dat hangt af van je situatie. Als je verplicht bent je onderneming bij de KvK in te schrijven, gelden ook de bijbehorende vermeldingsregels. Er zijn situaties waarin iemand niet KvK-inschrijfplichtig is. Controleer welke regels op jou van toepassing zijn.</p>
        <h3>Welke betalingstermijn gebruik ik als zzp&apos;er?</h3>
        <p>Veel ondernemers gebruiken 14 of 30 dagen. Welke termijn toegestaan of van toepassing is, hangt af van de afspraken en wettelijke regels. Vermeld de afgesproken vervaldatum duidelijk.</p>

        <h2>Maak nu je eerste zzp-factuur</h2>
        <p>Je weet nu welke gegevens je nodig hebt, hoe je een factuurnummer kiest en hoe je de bedragen berekent.</p>
        <p>Met FactuurBaas hoef je geen eigen Word- of Excel-document te ontwerpen.</p>
        <p><strong>Maak gratis een professionele factuur, download hem als PDF en stuur hem zelf naar je klant.</strong></p>
        <CtaButton href="/create-invoice" label="Gratis factuur maken" />
      </>
    )
  },
  {
    slug: 'factuur-fouten-voorkomen',
    relatedSlugs: ['factuur-maken-zzp', 'gratis-factuur-zzp', 'factuur-pdf-downloaden', 'factuur-templates-zzp'],
    metaTitle: '7 veelgemaakte fouten op facturen (en hoe je ze voorkomt)',
    title: '7 veelgemaakte fouten op facturen en hoe je ze voorkomt',
    breadcrumbLabel: '7 veelgemaakte fouten op facturen',
    excerpt: 'Welke fouten worden vaak gemaakt op facturen? Ontdek 7 veelgemaakte factuurfouten, hoe je dubbele facturatie voorkomt en hoe je ze eenvoudig corrigeert.',
    keywords: 'veelgemaakte fouten op facturen, factuur fouten, fouten op factuur, facturatie fouten voorkomen, dubbele facturatie, factuur corrigeren',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/7%20veelgemaakte%20fouten%20op%20facturen%20en%20hoe%20je%20ze%20voorkomt.png',
      alt: '7 veelgemaakte fouten op facturen en hoe je ze voorkomt.',
    },
    datePublished: '2026-02-01',
    dateModified: '2026-10-08',
    faq: [
      {
        question: 'Wat staat er meestal fout op facturen?',
        answer: 'Veelvoorkomende fouten zijn verkeerde factuurnummers, onjuiste btw-bedragen, ontbrekende klantgegevens, onduidelijke omschrijvingen en verkeerde betalingstermijnen.',
      },
      {
        question: 'Hoe voorkom ik fouten bij het maken van facturen?',
        answer: 'Gebruik een vaste factuuropmaak, controleer de verplichte gegevens, houd je factuurnummers bij en controleer de definitieve factuur voordat je deze verstuurt.',
      },
      {
        question: 'Hoe voorkom ik dubbele facturatie?',
        answer: 'Houd bij welke opdrachten al zijn gefactureerd en gebruik één duidelijk overzicht. Controleer ook of dezelfde werkzaamheden niet op meerdere facturen voorkomen.',
      },
      {
        question: 'Zijn PDF-facturen veiliger dan Word-facturen?',
        answer: 'PDF-bestanden behouden doorgaans beter hun opmaak, maar zijn niet automatisch beveiligd tegen bewerken. Een PDF kan dus nog steeds fouten bevatten of worden aangepast.',
      },
      {
        question: 'Mag ik een verkeerde factuur aanpassen?',
        answer: 'Dat hangt af van de situatie. Als de factuur al is uitgereikt of verwerkt, kan een correctiedocument of creditfactuur nodig zijn. Bewaar altijd een duidelijk administratief spoor.',
      },
      {
        question: 'Hoe voorkom ik fouten bij het factureren van uren?',
        answer: 'Registreer je uren tijdens de werkzaamheden, controleer het afgesproken uurtarief en vergelijk de urenregistratie met de factuur voordat je deze verstuurt.',
      },
      {
        question: 'Kan ik gratis facturen maken zonder Word of Excel?',
        answer: 'Ja. Met FactuurBaas kun je online een factuur opstellen, bedragen laten berekenen en de factuur als PDF downloaden.',
      },
    ],
    content: (
      <>
        <p>Een verkeerd factuurnummer, een onjuist btw-bedrag of een vergeten betalingstermijn. Kleine fouten op een factuur kunnen zorgen voor vertraging, extra administratie en discussies met klanten.</p>
        <p>Vooral wanneer je facturen handmatig maakt in Word of Excel, is het gemakkelijk om iets over het hoofd te zien.</p>
        <p>Gelukkig zijn de meeste factuurfouten eenvoudig te voorkomen.</p>
        <p>In dit artikel bespreken we <strong>7 veelgemaakte fouten op facturen</strong>, hoe je ze herkent en wat je kunt doen als je al een verkeerde factuur hebt verstuurd.</p>
        <p>
          Wil je direct een factuur maken? Met{' '}
          <Link href="/create-invoice" className="text-warm-orange hover:underline">FactuurBaas maak je gratis een factuur als PDF</Link>, zonder account.
        </p>
        <CtaButton href="/create-invoice" label="Maak gratis een factuur" />

        <h2>Wat gaat er meestal fout op facturen?</h2>
        <p>De meest voorkomende fouten zijn:</p>
        <ol>
          <li>Een verkeerd of dubbel factuurnummer.</li>
          <li>Een verkeerd btw-tarief of een onjuiste berekening.</li>
          <li>Ontbrekende bedrijfs- of klantgegevens.</li>
          <li>Een onduidelijke omschrijving van werkzaamheden.</li>
          <li>Een verkeerde betalingstermijn of ontbrekende betaalgegevens.</li>
          <li>Dubbele facturatie of fouten bij het overnemen van gegevens.</li>
          <li>Een onjuiste of verouderde versie van de factuur versturen.</li>
        </ol>
        <p>Deze fouten komen zowel bij startende zzp&apos;ers als bij ervaren ondernemers voor.</p>
        <p>Hieronder leggen we uit hoe je ze voorkomt.</p>

        <h2>1. Een verkeerd of dubbel factuurnummer</h2>
        <p>Iedere factuur moet een uniek factuurnummer hebben dat binnen een opeenvolgende nummerreeks past.</p>
        <p>Bijvoorbeeld:</p>
        <ul>
          <li>2026-001</li>
          <li>2026-002</li>
          <li>2026-003</li>
        </ul>
        <p>Een veelgemaakte fout is dat ondernemers een oude factuur kopiëren en vergeten het factuurnummer aan te passen.</p>
        <p>Hierdoor kunnen twee verschillende facturen hetzelfde nummer krijgen.</p>
        <p>Dat maakt je administratie onduidelijk en kan problemen veroorzaken bij controles.</p>
        <h3>Hoe voorkom je deze fout?</h3>
        <p>Gebruik één vaste nummerreeks en controleer bij iedere nieuwe factuur welk nummer als laatste is gebruikt.</p>
        <p>Maak je regelmatig facturen? Dan is het verstandig om een overzicht bij te houden van alle gebruikte factuurnummers.</p>
        <p>
          Met de{' '}
          <Link href="/tools/factuurnummer-generator" className="text-warm-orange hover:underline">gratis factuurnummer-generator</Link>{' '}
          kun je eenvoudig een nummer opstellen.
        </p>

        <h2>2. Een verkeerd btw-tarief of btw-bedrag</h2>
        <p>Een andere veelgemaakte fout is het toepassen van een verkeerd btw-tarief.</p>
        <p>In Nederland zijn onder andere de volgende tarieven van toepassing:</p>
        <ul>
          <li>21%: het algemene btw-tarief.</li>
          <li>9%: voor bepaalde goederen en diensten.</li>
          <li>0%: voor specifieke situaties.</li>
        </ul>
        <p>Daarnaast bestaan btw-vrijstellingen en bijzondere regelingen, zoals de kleineondernemersregeling (KOR).</p>
        <p>Niet iedere ondernemer hoeft daarom automatisch 21% btw op een factuur te zetten.</p>
        <h3>Voorbeeld van een btw-fout</h3>
        <p>Stel dat je een dienst levert voor €500 exclusief btw.</p>
        <p>Bij 21% btw is de berekening:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Onderdeel</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Bedrag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Bedrag excl. btw</td>
                <td className="px-4 py-3 text-right">€500,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw 21%</td>
                <td className="px-4 py-3 text-right">€105,00</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal incl. btw</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€605,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Wanneer je per ongeluk €100 btw berekent, klopt het totaalbedrag niet.</p>
        <h3>Hoe voorkom je deze fout?</h3>
        <p>Controleer eerst welk btw-tarief bij je werkzaamheden hoort.</p>
        <p>Gebruik daarna een factuurtool die de btw automatisch berekent op basis van het geselecteerde tarief.</p>
        <p>Let op: een automatische berekening voorkomt rekenfouten, maar controleert niet automatisch of je het juiste btw-tarief hebt gekozen.</p>
        <p>
          <Link href="/gidsen/welke-btw-rekenen-zzper" className="text-warm-orange hover:underline">Lees ook welke btw je als zzp&apos;er moet rekenen</Link>.
        </p>

        <h2>3. Verplichte gegevens vergeten</h2>
        <p>Een factuur moet aan bepaalde wettelijke eisen voldoen.</p>
        <p>Toch vergeten ondernemers regelmatig belangrijke gegevens, zoals:</p>
        <ul>
          <li>De volledige bedrijfsnaam of het adres.</li>
          <li>Het btw-identificatienummer.</li>
          <li>Het KvK-nummer, indien van toepassing.</li>
          <li>De naam en het adres van de klant.</li>
          <li>Het factuurnummer.</li>
          <li>De factuurdatum.</li>
          <li>De leverdatum of datum van de dienst.</li>
          <li>De omschrijving en omvang van de levering.</li>
          <li>De vereiste btw-gegevens.</li>
        </ul>
        <p>Welke gegevens precies verplicht zijn, hangt ook af van het type factuur en de btw-situatie.</p>
        <h3>Hoe voorkom je deze fout?</h3>
        <p>Gebruik een vaste factuuropmaak met alle benodigde velden.</p>
        <p>Controleer je bedrijfsgegevens voordat je de eerste factuur verstuurt en pas ze aan wanneer er iets verandert.</p>
        <p>Met een gratis FactuurBaas-account kun je je bedrijfsgegevens bewaren, zodat je deze niet telkens opnieuw hoeft in te voeren.</p>
        <p>
          <Link href="/blogs/factuur-maken-zzp" className="text-warm-orange hover:underline">Bekijk hoe je een correcte zzp-factuur maakt</Link>.
        </p>

        <h2>4. Een onduidelijke omschrijving van werkzaamheden</h2>
        <p>Een klant moet kunnen begrijpen waarvoor hij betaalt.</p>
        <p>Een omschrijving zoals &apos;Werkzaamheden&apos; of &apos;Consultancy&apos; is vaak te algemeen.</p>
        <p>Dat kan leiden tot vragen zoals:</p>
        <ul>
          <li>Welke werkzaamheden zijn uitgevoerd?</li>
          <li>Hoeveel uren zijn er gewerkt?</li>
          <li>Welk tarief is afgesproken?</li>
          <li>Op welke periode heeft de factuur betrekking?</li>
        </ul>
        <h3>Voorbeeld</h3>
        <p><strong>Onduidelijk:</strong></p>
        <p>Consultancy – €600</p>
        <p><strong>Duidelijk:</strong></p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Omschrijving</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Aantal</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Tarief</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Totaal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Marketingadvies september 2026</td>
                <td className="px-4 py-3 text-right">6 uur</td>
                <td className="px-4 py-3 text-right">€75</td>
                <td className="px-4 py-3 text-right">€450</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Rapportage en aanbevelingen</td>
                <td className="px-4 py-3 text-right">2 uur</td>
                <td className="px-4 py-3 text-right">€75</td>
                <td className="px-4 py-3 text-right">€150</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Zo ziet je klant direct hoe het bedrag is opgebouwd.</p>
        <h3>Hoe voorkom je discussies over factuurgegevens?</h3>
        <p>Leg vooraf vast welke werkzaamheden je uitvoert en welk tarief daarvoor geldt.</p>
        <p>Gebruik vervolgens dezelfde omschrijvingen en afspraken op je factuur.</p>
        <p>Bij opdrachten op uurbasis helpt het om gewerkte uren gedurende de opdracht bij te houden in plaats van ze achteraf te reconstrueren.</p>
        <p>
          <Link href="/factuur-voorbeeld/uren" className="text-warm-orange hover:underline">Bekijk een voorbeeld van een urenfactuur</Link>.
        </p>

        <h2>5. Een verkeerde betalingstermijn of ontbrekende betaalgegevens</h2>
        <p>Je factuur kan inhoudelijk helemaal correct zijn, maar alsnog vertraging opleveren wanneer niet duidelijk is hoe of wanneer de klant moet betalen.</p>
        <p>Veel ondernemers vergeten bijvoorbeeld hun IBAN of vermelden een vervaldatum die niet overeenkomt met de afgesproken betalingstermijn.</p>
        <h3>Voorbeeld</h3>
        <p>Factuurdatum: 8 oktober 2026</p>
        <p>Betalingstermijn: 14 dagen</p>
        <p>Vervaldatum: 22 oktober 2026</p>
        <p>Een duidelijke betaalinstructie is:</p>
        <p><em>Gelieve het factuurbedrag uiterlijk 22 oktober 2026 over te maken onder vermelding van factuurnummer 2026-015.</em></p>
        <h3>Hoe voorkom je deze fout?</h3>
        <p>Controleer bij iedere factuur:</p>
        <ul>
          <li>Of je IBAN en tenaamstelling kloppen.</li>
          <li>Welke betalingstermijn is afgesproken.</li>
          <li>Of de vervaldatum correct is berekend.</li>
          <li>Of de klant het factuurnummer als betalingskenmerk kan gebruiken.</li>
        </ul>
        <p>Houd rekening met de toepasselijke wettelijke regels voor betalingstermijnen.</p>
        <p>
          Met de{' '}
          <Link href="/tools/betaaltermijn-calculator" className="text-warm-orange hover:underline">betaaltermijn-calculator</Link>{' '}
          kun je eenvoudig een vervaldatum berekenen.
        </p>

        <h2>6. Dubbele facturatie en dubbele invoer</h2>
        <p>Dubbele facturatie betekent dat dezelfde levering of dienst per ongeluk twee keer in rekening wordt gebracht.</p>
        <p>Dat kan bijvoorbeeld gebeuren wanneer:</p>
        <ul>
          <li>Je vergeet dat een opdracht al is gefactureerd.</li>
          <li>Je dezelfde uren in twee facturen verwerkt.</li>
          <li>Twee medewerkers onafhankelijk dezelfde factuur aanmaken.</li>
          <li>Je gegevens uit verschillende bestanden overneemt.</li>
          <li>Je een oude factuur kopieert zonder alle gegevens aan te passen.</li>
        </ul>
        <p>Dubbele facturatie kan leiden tot onterechte betalingsverzoeken en extra administratief werk.</p>
        <h3>Hoe voorkom je dubbele facturatie?</h3>
        <p>Houd per opdracht bij of deze al is gefactureerd.</p>
        <p>Gebruik bijvoorbeeld een eenvoudig overzicht:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[420px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Opdracht</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Bedrag</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Website onderhoud september</td>
                <td className="px-4 py-3 text-right">€250</td>
                <td className="px-4 py-3">Gefactureerd</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Logo ontwerp</td>
                <td className="px-4 py-3 text-right">€400</td>
                <td className="px-4 py-3">Nog te factureren</td>
              </tr>
              <tr>
                <td className="px-4 py-3">SEO-advies</td>
                <td className="px-4 py-3 text-right">€180</td>
                <td className="px-4 py-3">Gefactureerd</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Werk bij voorkeur vanuit één overzicht, zodat je niet meerdere losse lijsten hoeft bij te houden.</p>
        <p>Een uniek factuurnummer helpt bij het terugvinden van facturen, maar voorkomt op zichzelf niet dat je dezelfde werkzaamheden twee keer factureert.</p>

        <h2>7. Een verkeerde versie van de factuur versturen</h2>
        <p>Veel ondernemers maken hun facturen in Word of Excel.</p>
        <p>Dat kan prima werken, maar brengt een praktisch risico met zich mee: je kunt per ongeluk een oude of onvolledige versie versturen.</p>
        <p>Bijvoorbeeld:</p>
        <ul>
          <li>Je hebt het bedrag aangepast, maar de oude PDF verstuurd.</li>
          <li>De klantgegevens zijn nog van een vorige factuur.</li>
          <li>Je hebt een fout gecorrigeerd, maar niet het juiste bestand opgeslagen.</li>
          <li>Je hebt meerdere versies met bijna dezelfde bestandsnaam.</li>
        </ul>
        <h3>Is een PDF-factuur foutgevoelig?</h3>
        <p>Een PDF heeft als voordeel dat de opmaak meestal behouden blijft wanneer de ontvanger het document opent.</p>
        <p>Maar een PDF is niet automatisch foutloos of beveiligd tegen aanpassingen.</p>
        <p>Ook PDF-bestanden kunnen worden bewerkt.</p>
        <p>De belangrijkste bescherming tegen factuurfouten is daarom niet alleen het bestandsformaat, maar vooral <strong>de controle van de gegevens voordat je de factuur verstuurt</strong>.</p>
        <h3>Hoe voorkom je fouten met PDF-facturen?</h3>
        <p>Controleer de definitieve versie op:</p>
        <ul>
          <li>Factuurnummer.</li>
          <li>Klantgegevens.</li>
          <li>Omschrijving en aantallen.</li>
          <li>Btw en totaalbedrag.</li>
          <li>Betaalgegevens.</li>
          <li>Factuurdatum en vervaldatum.</li>
        </ul>
        <p>Download daarna de definitieve PDF en bewaar een kopie voor je administratie.</p>
        <p>
          Met{' '}
          <Link href="/create-invoice" className="text-warm-orange hover:underline">FactuurBaas</Link>{' '}
          kun je een factuur maken en als PDF downloaden zonder zelf een Word- of Excel-document op te maken.
        </p>

        <h2>Wat doe je als je een verkeerde factuur hebt verstuurd?</h2>
        <p>Ontdek je een fout nadat de factuur al is verstuurd?</p>
        <p>Pas dan niet zomaar de oorspronkelijke factuur aan zonder vast te leggen wat er is gewijzigd.</p>
        <p>Welke correctie nodig is, hangt af van de fout en of de factuur al is verwerkt of betaald.</p>
        <h3>Stap 1: Controleer de fout</h3>
        <p>Gaat het om een typefout, een verkeerd bedrag, een onjuist btw-tarief of een dubbele factuur?</p>
        <p>Bepaal eerst wat er precies moet worden gecorrigeerd.</p>
        <h3>Stap 2: Informeer de klant</h3>
        <p>Laat je klant weten dat er een fout in de factuur staat en hoe je deze gaat oplossen.</p>
        <p>Dat voorkomt dat de klant het verkeerde bedrag betaalt of twee verschillende versies verwerkt.</p>
        <h3>Stap 3: Maak indien nodig een correctie of creditfactuur</h3>
        <p>Bij een foutief gefactureerd bedrag kan een creditfactuur en eventueel een nieuwe, correcte factuur nodig zijn.</p>
        <p>Zorg dat de correctie duidelijk verwijst naar de oorspronkelijke factuur.</p>
        <h3>Stap 4: Bewaar de administratie</h3>
        <p>Bewaar de oorspronkelijke factuur en de bijbehorende correctie, zodat duidelijk blijft wat er is gebeurd.</p>
        <p>Controleer bij btw-fouten ook of een correctie in je btw-administratie of aangifte nodig is.</p>

        <h2>Factuurfouten voorkomen met een vaste checklist</h2>
        <p>Voordat je een factuur verstuurt, kun je deze checklist gebruiken.</p>
        <ul>
          <li>Mijn bedrijfsgegevens zijn correct.</li>
          <li>De klantgegevens zijn correct.</li>
          <li>Het factuurnummer is uniek.</li>
          <li>De factuurdatum en leverdatum kloppen.</li>
          <li>De werkzaamheden zijn duidelijk omschreven.</li>
          <li>De aantallen en tarieven zijn correct.</li>
          <li>Het juiste btw-tarief is toegepast.</li>
          <li>Het totaalbedrag klopt.</li>
          <li>Mijn betaalgegevens en vervaldatum zijn correct.</li>
          <li>De definitieve PDF is gecontroleerd.</li>
        </ul>
        <p>Met een vaste controle voorkom je veel fouten zonder dat je een uitgebreid boekhoudprogramma nodig hebt.</p>

        <h2>Factuur maken in Word, Excel of een online factuurtool?</h2>
        <p>Je kunt op verschillende manieren facturen maken.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[520px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Methode</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Voordeel</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Aandachtspunt</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium text-deep-blue">Word</td>
                <td className="px-4 py-3">Vrije opmaak</td>
                <td className="px-4 py-3">Veel handmatige invoer</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium text-deep-blue">Excel</td>
                <td className="px-4 py-3">Berekeningen met formules</td>
                <td className="px-4 py-3">Formule- en invoerfouten mogelijk</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-deep-blue">Online factuurtool</td>
                <td className="px-4 py-3">Vaste structuur en automatische berekeningen</td>
                <td className="px-4 py-3">Je moet de ingevulde gegevens blijven controleren</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Voor ondernemers die regelmatig facturen maken, kan een online factuurtool helpen om handmatige fouten te verminderen.</p>
        <p>FactuurBaas berekent bedragen en btw op basis van je invoer en laat je de factuur als PDF downloaden.</p>
        <p>Je hoeft daarvoor geen betaald abonnement af te sluiten.</p>

        <h2>Veelgestelde vragen over fouten op facturen</h2>
        <h3>Wat staat er meestal fout op facturen?</h3>
        <p>Veelvoorkomende fouten zijn verkeerde factuurnummers, onjuiste btw-bedragen, ontbrekende klantgegevens, onduidelijke omschrijvingen en verkeerde betalingstermijnen.</p>
        <h3>Hoe voorkom ik fouten bij het maken van facturen?</h3>
        <p>Gebruik een vaste factuuropmaak, controleer de verplichte gegevens, houd je factuurnummers bij en controleer de definitieve factuur voordat je deze verstuurt.</p>
        <h3>Hoe voorkom ik dubbele facturatie?</h3>
        <p>Houd bij welke opdrachten al zijn gefactureerd en gebruik één duidelijk overzicht. Controleer ook of dezelfde werkzaamheden niet op meerdere facturen voorkomen.</p>
        <h3>Zijn PDF-facturen veiliger dan Word-facturen?</h3>
        <p>PDF-bestanden behouden doorgaans beter hun opmaak, maar zijn niet automatisch beveiligd tegen bewerken. Een PDF kan dus nog steeds fouten bevatten of worden aangepast.</p>
        <h3>Mag ik een verkeerde factuur aanpassen?</h3>
        <p>Dat hangt af van de situatie. Als de factuur al is uitgereikt of verwerkt, kan een correctiedocument of creditfactuur nodig zijn. Bewaar altijd een duidelijk administratief spoor.</p>
        <h3>Hoe voorkom ik fouten bij het factureren van uren?</h3>
        <p>Registreer je uren tijdens de werkzaamheden, controleer het afgesproken uurtarief en vergelijk de urenregistratie met de factuur voordat je deze verstuurt.</p>
        <h3>Kan ik gratis facturen maken zonder Word of Excel?</h3>
        <p>Ja. Met FactuurBaas kun je online een factuur opstellen, bedragen laten berekenen en de factuur als PDF downloaden.</p>

        <h2>Maak een factuur met minder handmatig werk</h2>
        <p>De meeste factuurfouten ontstaan door verkeerd overgenomen gegevens, rekenfouten of onvoldoende controle.</p>
        <p>Met een vaste werkwijze en een duidelijke factuuropmaak kun je veel van deze problemen voorkomen.</p>
        <p>Wil je geen facturen meer handmatig opmaken in Word of Excel?</p>
        <p><strong>Met FactuurBaas maak je gratis een factuur, laat je de bedragen berekenen en download je direct een PDF.</strong></p>
        <CtaButton href="/create-invoice" label="Maak gratis een factuur" />
      </>
    )
  },
  {
    slug: 'factuur-templates-zzp',
    relatedSlugs: ['factuur-maken-zzp', 'factureren-zonder-account', 'factuur-pdf-downloaden', 'btw-factuur-zzp', 'factuur-fouten-voorkomen'],
    metaTitle: 'Factuur voorbeeld: gratis zzp template + voorbeeldfactuur',
    title: 'Factuur voorbeeld: gratis template voor zzp\'ers',
    excerpt:
      'Factuur voorbeeld en voorbeeldfactuur voor zzp\'ers: compleet voorbeeld met btw, blanco template, Word/Excel-vergelijking en branchevoorbeelden. Direct gratis factuur maken.',
    keywords:
      'factuur voorbeeld, voorbeeld factuur zzp, factuur template, template factuur, voorbeeld factuur, factuur voorbeeld zzp, factuur layout, factuur voorbeeld excel, factuur template word, voorbeeld blanco factuur, factuur voorbeeld pdf, sjabloon factuur',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Handige%20factuur%20templates%20voor%20zzp%20ers.png',
      alt: 'Factuur voorbeeld zzp: professionele template en voorbeeldfactuur voor zzp\'ers.',
    },
    datePublished: '2026-02-01',
    dateModified: '2026-08-28',
    faq: [
      {
        question: 'Waar vind ik een factuur voorbeeld voor zzp\'ers?',
        answer:
          'Op deze pagina staat een compleet voorbeeld met bedragen en btw. Wil je meteen een eigen factuur maken? Ga naar FactuurBaas, vul je gegevens in en download direct een PDF — gratis en zonder account.',
      },
      {
        question: 'Wat is het verschil tussen een factuurvoorbeeld en een template?',
        answer:
          'Een voorbeeldfactuur laat zien hoe een complete factuur eruitziet, inclusief ingevulde gegevens. Een template of sjabloon is een leeg format dat je zelf invult — bijvoorbeeld in Word, Excel of via een online factuurmaker.',
      },
      {
        question: 'Is een factuur voorbeeld in Excel of Word handig?',
        answer:
          'Het kan, vooral als je al met spreadsheets werkt. Let wel op: je moet btw en totalen zelf controleren. Een online tool berekent dat automatisch en bevat meestal alle verplichte velden.',
      },
      {
        question: 'Wat is een blanco factuur?',
        answer:
          'Een blanco factuur is een leeg sjabloon met vaste velden (bedrijfsgegevens, klant, omschrijving, bedragen) die je zelf invult. Met een online factuurmaker hoef je geen blanco Word- of Excel-bestand handmatig in te vullen.',
      },
      {
        question: 'Kan ik gratis een factuur maken met een template?',
        answer:
          'Ja. Met FactuurBaas kies je een layout, vult je gegevens in en download je direct een professionele PDF. Geen account nodig.',
      },
    ],
    content: (
      <>
        <p>
          Een goed <strong>factuurvoorbeeld</strong> helpt je om snel een professionele factuur te maken. Hieronder
          vind je een compleet <strong>voorbeeld van een zzp-factuur</strong>, inclusief btw, bedragen en de belangrijkste
          onderdelen. Je kunt het voorbeeld gebruiken als basis voor je eigen factuur of direct een{' '}
          <Link href="/create-invoice" className="text-warm-orange hover:underline">
            gratis factuur maken
          </Link>{' '}
          met FactuurBaas.
        </p>

        <CtaButton />

        <h2>Voorbeeld factuur zzp</h2>
        <p>
          Onderstaand <strong>factuur voorbeeld</strong> laat zien hoe een complete zzp-factuur eruit kan zien — met alle
          gebruikelijke onderdelen.
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-lg font-semibold text-deep-blue">Factuur 2026-001</p>
          </div>
          <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-2 font-medium text-deep-blue">Factuurdatum</td>
                <td className="px-4 py-2">28 augustus 2026</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-2 font-medium text-deep-blue">Vervaldatum</td>
                <td className="px-4 py-2">11 september 2026</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-2 font-medium text-deep-blue">Factuurnummer</td>
                <td className="px-4 py-2">2026-001</td>
              </tr>
            </tbody>
          </table>
          <div className="grid gap-4 border-b border-slate-100 px-4 py-4 sm:grid-cols-2">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Van</p>
              <p className="font-medium text-deep-blue">Jansen Webdesign</p>
              <p>Voorbeeldstraat 1</p>
              <p>1234 AB Amsterdam</p>
              <p>KvK: 12345678</p>
              <p>BTW: NL123456789B01</p>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Aan</p>
              <p className="font-medium text-deep-blue">Voorbeeld BV</p>
              <p>Klantstraat 10</p>
              <p>1000 AA Amsterdam</p>
            </div>
          </div>
          <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Omschrijving
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Aantal
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Prijs
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Totaal
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Website ontwerp</td>
                <td className="px-4 py-3 text-right">10 uur</td>
                <td className="px-4 py-3 text-right">€75,00</td>
                <td className="px-4 py-3 text-right">€750,00</td>
              </tr>
            </tbody>
          </table>
          <div className="space-y-1 px-4 py-4 text-sm text-slate-700 sm:text-base">
            <p className="flex justify-between">
              <span>Subtotaal</span>
              <span>€750,00</span>
            </p>
            <p className="flex justify-between">
              <span>BTW 21%</span>
              <span>€157,50</span>
            </p>
            <p className="flex justify-between font-semibold text-deep-blue">
              <span>Totaal</span>
              <span>€907,50</span>
            </p>
            <p className="pt-2 text-slate-600">Betalingstermijn: 14 dagen</p>
          </div>
        </div>
        <p>
          Dit <strong>voorbeeld factuur zzp</strong> bevat alle elementen die je klant en de Belastingdienst verwachten.
          Wil je zelf een factuur opstellen? Bekijk het{' '}
          <Link href="/blogs/factuur-maken-zzp" className="text-warm-orange hover:underline">
            stappenplan factuur maken zzp
          </Link>{' '}
          of gebruik het{' '}
          <Link href="/factuur-template/zzp" className="text-warm-orange hover:underline">
            zzp-factuur template
          </Link>
          .
        </p>

        <h2>Factuur voorbeelden voor verschillende branches</h2>
        <p>
          De opbouw van een factuur is voor elke zzp&apos;er hetzelfde — alleen de omschrijving en het tarief verschillen
          per branche. Enkele <strong>voorbeelden factuur zzp</strong>:
        </p>
        <ul>
          <li>
            <strong>Factuur voorbeeld zzp bouw:</strong> Metselwerk — 20 uur × €45 = €900. Meer voor aannemers en
            schilders:{' '}
            <Link href="/factuur-template/bouw" className="text-warm-orange hover:underline">
              bouwfactuur template
            </Link>
            .
          </li>
          <li>
            <strong>Factuur voorbeeld zzp beveiliging:</strong> Beveiligingswerkzaamheden — 16 uur × €35 = €560.
          </li>
          <li>
            <strong>Factuur voorbeeld zzp zorg:</strong> Zorgverlening — 8 uur × €55 = €440 (controleer altijd of
            btw-vrijstelling van toepassing is). Meer voor zorgverleners:{' '}
            <Link href="/factuur-voorbeeld/zorg" className="text-warm-orange hover:underline">
              factuur voorbeeld zzp zorg
            </Link>
            .
          </li>
          <li>
            <strong>Factuur voorbeeld koerier:</strong> Transport Amsterdam–Rotterdam — 1 rit × €85 = €85.
          </li>
          <li>
            <strong>Factuur voorbeeld webdesigner:</strong> Website ontwerp — 10 uur × €75 = €750 (zoals het voorbeeld
            hierboven).
          </li>
          <li>
            <strong>Factuur voorbeeld fotograaf:</strong> Bedrijfsreportage — 1 opdracht × €350 = €350.
          </li>
          <li>
            <strong>Factuur voorbeeld consultant:</strong> Adviesgesprek — 4 uur × €120 = €480. Handig als{' '}
            <Link href="/factuur-template/uren" className="text-warm-orange hover:underline">
              urenfactuur template
            </Link>
            .
          </li>
        </ul>
        <p>
          Voor een <strong>factuur zonder btw</strong> (bijv. KOR) zie het{' '}
          <Link href="/factuur-template/zonder-btw" className="text-warm-orange hover:underline">
            template factuur zonder btw
          </Link>
          .
        </p>

        <h2>Factuur template Word of Excel</h2>
        <p>
          Veel ondernemers zoeken een <strong>factuur template Word</strong>, <strong>factuur voorbeeld Excel</strong> of
          een kant-en-klaar <strong>sjabloon factuur</strong>. Dat kan — maar er zijn verschillen:
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[520px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Methode
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Geschikt voor
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Let op
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium text-deep-blue">Word</td>
                <td className="px-4 py-3">Eenvoudige facturen</td>
                <td className="px-4 py-3">Btw en bedragen zelf controleren</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium text-deep-blue">Excel</td>
                <td className="px-4 py-3">Berekeningen en hergebruik</td>
                <td className="px-4 py-3">Formules kunnen fouten bevatten</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium text-deep-blue">PDF template</td>
                <td className="px-4 py-3">Snel een vaste factuur</td>
                <td className="px-4 py-3">Minder flexibel</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-deep-blue">Online factuurmaker</td>
                <td className="px-4 py-3">Snel professionele facturen</td>
                <td className="px-4 py-3">Afhankelijk van de tool</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Wil je vooral snel een professionele factuur maken? Je kunt ook{' '}
          <Link href="/blogs/gratis-factuur-zzp" className="text-warm-orange hover:underline">
            gratis online ZZP-factuur maken
          </Link>{' '}
          met FactuurBaas en direct als{' '}
          <Link href="/blogs/factuur-pdf-downloaden" className="text-warm-orange hover:underline">
            PDF downloaden
          </Link>
          , zonder account. Meer opties vind je op de pagina{' '}
          <Link href="/factuur-template" className="text-warm-orange hover:underline">
            factuur template
          </Link>
          .
        </p>

        <h2>Blanco factuur: wat is het?</h2>
        <p>
          Een <strong>blanco factuur</strong> is een factuurtemplate waarin de vaste gegevens en velden al zijn opgenomen,
          maar die je zelf nog invult — denk aan een leeg Word- of Excel-bestand met kolommen voor omschrijving, aantal,
          prijs en totaal.
        </p>
        <p>
          Wil je geen blanco template handmatig invullen? Met de{' '}
          <Link href="/blogs/factureren-zonder-account" className="text-warm-orange hover:underline">
            gratis factuurmaker
          </Link>{' '}
          van FactuurBaas vul je je gegevens online in en download je de complete factuur als PDF.
        </p>

        <CtaButton />

        <h2>Wat moet er op een factuur staan?</h2>
        <p>Een complete factuur bevat onder andere:</p>
        <ul>
          <li>bedrijfsnaam en adres</li>
          <li>klantgegevens</li>
          <li>KvK-nummer</li>
          <li>btw-identificatienummer</li>
          <li>factuurnummer</li>
          <li>factuurdatum</li>
          <li>leveringsdatum, wanneer van toepassing</li>
          <li>omschrijving van producten of diensten</li>
          <li>bedrag exclusief btw</li>
          <li>btw-tarief en btw-bedrag</li>
          <li>totaalbedrag</li>
          <li>betaaltermijn en betaalgegevens</li>
        </ul>
        <p>
          Uitgebreide uitleg per onderdeel lees je in{' '}
          <Link href="/blogs/factuur-maken-zzp" className="text-warm-orange hover:underline">
            factuur maken zzp: stappenplan
          </Link>
          . Voor btw op je factuur:{' '}
          <Link href="/blogs/btw-factuur-zzp" className="text-warm-orange hover:underline">
            btw op je factuur als zzp&apos;er
          </Link>
          . Voorkom veelgemaakte fouten met{' '}
          <Link href="/blogs/factuur-fouten-voorkomen" className="text-warm-orange hover:underline">
            7 veelgemaakte fouten op facturen
          </Link>
          .
        </p>

        <h2>Waarom een goed factuurvoorbeeld of template helpt</h2>
        <ul>
          <li>
            <strong>Professionaliteit:</strong> een strakke <strong>factuur layout</strong> wekt vertrouwen bij klanten.
          </li>
          <li>
            <strong>Foutloos:</strong> een goed sjabloon zorgt dat verplichte velden (KvK, btw, factuurnummer) niet
            ontbreken.
          </li>
          <li>
            <strong>Tijdsbesparing:</strong> je hoeft de opbouw niet telkens opnieuw te bedenken.
          </li>
        </ul>

        <h2>Gratis factuur maken met FactuurBaas</h2>
        <p>Bij FactuurBaas kies je een professionele layout — geen Word of Excel nodig:</p>
        <ol>
          <li>
            Ga naar{' '}
            <Link href="/create-invoice" className="text-warm-orange hover:underline">
              Factuur maken
            </Link>
            .
          </li>
          <li>Vul je bedrijfsgegevens en die van je klant in.</li>
          <li>Voeg je diensten of producten toe.</li>
          <li>Kies een layout.</li>
          <li>Download je factuur direct als PDF.</li>
        </ol>
        <p>Gratis, zonder account. Alle verplichte velden zitten in de template; btw wordt automatisch berekend.</p>

        <CtaButton />

        <h2>Veelgestelde vragen</h2>
        <h3>Waar vind ik een factuur voorbeeld voor zzp&apos;ers?</h3>
        <p>
          Op deze pagina staat een compleet voorbeeld met bedragen en btw. Wil je meteen een eigen factuur maken? Ga naar
          FactuurBaas, vul je gegevens in en download direct een PDF.
        </p>
        <h3>Wat is het verschil tussen een factuurvoorbeeld en een template?</h3>
        <p>
          Een voorbeeldfactuur laat zien hoe een complete factuur eruitziet. Een template is een leeg format dat je zelf
          invult — in Word, Excel of via een online factuurmaker.
        </p>
        <h3>Is een factuur voorbeeld in Excel of Word handig?</h3>
        <p>
          Het kan, maar je moet btw en totalen zelf controleren. Een online tool berekent dat automatisch en bevat
          meestal alle verplichte velden.
        </p>
        <h3>Wat is een blanco factuur?</h3>
        <p>
          Een leeg sjabloon met vaste velden die je zelf invult. Met een online factuurmaker hoef je geen blanco
          Word- of Excel-bestand handmatig in te vullen.
        </p>
        <h3>Kan ik gratis een factuur maken met een template?</h3>
        <p>Ja. Met FactuurBaas kies je een layout, vult je gegevens in en download je direct een professionele PDF.</p>
      </>
    )
  },
  {
    slug: 'verschil-factuur-offerte',
    relatedSlugs: ['factuur-maken-zzp', 'sneller-betalen-factuur', 'factuur-fouten-voorkomen', 'factureren-zonder-account'],
    metaTitle: 'Verschil offerte en factuur: wat is het verschil?',
    title: 'Verschil tussen offerte en factuur',
    excerpt: 'Wat is het verschil tussen een offerte en factuur? Lees wanneer je een offerte of factuur gebruikt, of een offerte vrijblijvend is en wanneer je factureert.',
    keywords: 'verschil offerte en factuur, verschil tussen offerte en factuur, offerte en factuur, wat is een offerte, is een offerte vrijblijvend, offerte vs factuur, is een offerte hetzelfde als een factuur, mag een factuur afwijken van een offerte, hoeveel mag factuur afwijken van offerte, offerte of factuur, moet je een offerte betalen',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Wat%20is%20het%20verschil%20tussen%20een%20factuur%20en%20een%20offerte.png',
      alt: 'Verschil tussen offerte en factuur uitgelegd.',
    },
    datePublished: '2026-02-01',
    dateModified: '2026-10-13',
    faq: [
      { question: 'Wat is het verschil tussen offerte en factuur?', answer: 'Een offerte is een prijsvoorstel vóór je levert; een factuur is een betaalverzoek ná levering. De offerte legt prijs en voorwaarden vast, de factuur vraagt om betaling voor geleverd werk of producten.' },
      { question: 'Is een offerte vrijblijvend?', answer: 'Dat hangt af van de tekst en omstandigheden. Een offerte kan een bindend aanbod zijn zodra de klant akkoord geeft. Veel ondernemers vermelden expliciet dat een offerte vrijblijvend is, of zetten een geldigheidsduur op het document. Lees altijd de voorwaarden op de offerte zelf.' },
      { question: 'Is een offerte hetzelfde als een factuur?', answer: 'Nee. Een offerte is een voorstel vóór de opdracht; een factuur is een betaalverzoek na levering. Voor betaling heb je een factuur nodig, geen offerte.' },
      { question: 'Moet je een offerte betalen?', answer: 'Nee. Een offerte is geen betaalverzoek. Pas na akkoord, levering en het ontvangen van een factuur ben je verschuldigd te betalen volgens de afgesproken termijn.' },
      { question: 'Mag een factuur afwijken van een offerte?', answer: 'In principe sluit een factuur aan op de goedgekeurde offerte. Een hogere factuur kan als er meerwerk is afgesproken, als de offerte een schatting was (bijv. op urenbasis), of als je dat vooraf hebt vermeld. Zonder afspraak kan de klant een hogere factuur betwisten.' },
      { question: 'Hoeveel mag een factuur afwijken van een offerte?', answer: 'Er is geen vast percentage. De factuur hoort overeen te komen met wat is afgesproken in de goedgekeurde offerte. Afwijking is alleen redelijk bij expliciet afgesproken meerwerk, nacalculatie of als de offerte een indicatie was. Leg afwijkingen altijd uit op de factuur.' },
      { question: 'Is een offerte altijd vrijblijvend?', answer: 'Nee, niet altijd. Een offerte kan bindend zijn als de klant akkoord gaat, tenzij je duidelijk vermeldt dat deze vrijblijvend is of onder voorwaarden geldt. Formuleer daarom bewust wat er gebeurt na akkoord.' },
    ],
    content: (
        <>
            <p>Het <strong>verschil tussen offerte en factuur</strong> zit in het moment en het doel: een offerte is een prijsvoorstel <em>vóór</em> je levert, een factuur is een betaalverzoek <em>na</em> levering. Hieronder lees je wanneer je welke gebruikt, of een offerte vrijblijvend is, en wanneer een factuur mag afwijken van een offerte.</p>

            <h2>Verschil offerte en factuur — overzicht</h2>
            <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col" />
                    <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Offerte</th>
                    <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Factuur</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-medium text-deep-blue">Moment</td>
                    <td className="px-4 py-3">Voor de opdracht</td>
                    <td className="px-4 py-3">Na levering/werkzaamheden</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-medium text-deep-blue">Doel</td>
                    <td className="px-4 py-3">Prijsvoorstel doen</td>
                    <td className="px-4 py-3">Betaling vragen</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-medium text-deep-blue">Bedrag</td>
                    <td className="px-4 py-3">Voorgestelde prijs</td>
                    <td className="px-4 py-3">Te betalen bedrag</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-medium text-deep-blue">Akkoord nodig?</td>
                    <td className="px-4 py-3">Ja, om de opdracht te accepteren</td>
                    <td className="px-4 py-3">Nee, als betaling verschuldigd is</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-medium text-deep-blue">Betaling</td>
                    <td className="px-4 py-3">Niet bedoeld als betaalverzoek</td>
                    <td className="px-4 py-3">Ja</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-deep-blue">Geldigheidsduur</td>
                    <td className="px-4 py-3">Vaak wel</td>
                    <td className="px-4 py-3">Nee</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Wat is een offerte?</h2>
            <p>Een offerte is een schriftelijk prijsvoorstel voor diensten of producten die je nog gaat leveren. Je stuurt hem vóór je aan het werk gaat, zodat de klant weet wat het gaat kosten en wat je levert. Juridisch kan een offerte een aanbod zijn — pas als de klant akkoord gaat, ontstaat er een overeenkomst.</p>
            <p>In de praktijk wordt &quot;prijsopgave&quot; vaak hetzelfde bedoeld. Een offerte is meestal iets formeler en bevat vaker een geldigheidsduur en duidelijke voorwaarden. Met onze <Link href="/tools/offerte-maker" className="text-warm-orange hover:underline">gratis offerte maker</Link> maak je snel een professionele offerte en download je die als PDF.</p>

            <h2>Wat is een factuur?</h2>
            <p>Een factuur stuur je nadat je hebt geleverd: het is een officieel betaalverzoek voor uitgevoerd werk of geleverde producten. Op een factuur staan onder andere je bedrijfsgegevens, het factuurnummer, bedragen, btw en de betalingstermijn. Zie ook <Link href="/blogs/factuur-maken-zzp" className="text-warm-orange hover:underline">hoe je een factuur maakt</Link>.</p>

            <h2>Wanneer gebruik je een offerte?</h2>
            <ul>
                <li>Bij grotere of langere opdrachten waar prijs en omvang vooraf duidelijk moeten zijn.</li>
                <li>Als een klant om een prijsopgave vraagt.</li>
                <li>Om scope, planning en voorwaarden vast te leggen voordat je start.</li>
            </ul>

            <h2>Wanneer stuur je een factuur?</h2>
            <ul>
                <li>Na afloop van het werk of na levering van producten — om betaald te worden.</li>
                <li>Voor je btw-administratie en boekhouding.</li>
                <li>Wanneer de afgesproken betalingstermijn begint te lopen.</li>
            </ul>

            <h2>Is een offerte vrijblijvend?</h2>
            <p>Dat hangt af van de tekst op je offerte en de omstandigheden. Een offerte kan een bindend aanbod zijn: gaat de klant akkoord, dan kan daar een overeenkomst uit voortkomen. Veel ondernemers vermelden daarom expliciet dat een offerte vrijblijvend is, of koppelen er voorwaarden aan (bijv. &quot;Deze offerte is 30 dagen geldig&quot;).</p>
            <p><strong>Is een offerte altijd vrijblijvend?</strong> Nee. Formuleer bewust wat er gebeurt na akkoord. Zet een geldigheidsduur op je offerte en vermeld duidelijk of de prijs vaststaat of een indicatie is (bijv. bij urenregistratie of nacalculatie).</p>

            <h2>Is een offerte hetzelfde als een factuur?</h2>
            <p>Nee. Een offerte is geen factuur. Een offerte is een voorstel vóór de opdracht; een factuur is een betaalverzoek na levering. Je hoeft een offerte niet te betalen — pas de factuur vraagt om betaling binnen de afgesproken termijn.</p>

            <h2>Mag een factuur afwijken van een offerte?</h2>
            <p>In principe sluit een factuur aan op de goedgekeurde offerte. <strong>Factuur hoger dan offerte</strong> kan als er meerwerk is afgesproken, als de offerte een schatting was (bijv. op basis van uren), of als je vooraf hebt vermeld dat de definitieve factuur kan afwijken.</p>
            <p><strong>Hoeveel mag een factuur afwijken van een offerte?</strong> Er is geen vast percentage in de wet. Zonder afspraak kan een klant een hogere factuur betwisten. Leg afwijkingen daarom altijd uit op de factuur en verwijs naar de offerte (bijv. &quot;Volgens offerte 2026-A01, inclusief meerwerk punt 3&quot;).</p>

            <h2>Offerte en factuur in de praktijk</h2>
            <p>Typische flow:</p>
            <ol>
                <li>Je stuurt een offerte naar de klant.</li>
                <li>De klant gaat akkoord (schriftelijk of per e-mail).</li>
                <li>Je voert het werk uit of levert de producten.</li>
                <li>Je stuurt een factuur die verwijst naar de offerte.</li>
            </ol>
            <p>Een duidelijke offerte voorkomt misverstanden en maakt factureren achteraf eenvoudiger. Maak je offerte met de <Link href="/tools/offerte-maker" className="text-warm-orange hover:underline">gratis offerte maker</Link> en stuur daarna je factuur via <Link href="/create-invoice" className="text-warm-orange hover:underline">FactuurBaas</Link> — beide gratis, zonder account, direct als PDF.</p>
            <p>Wil je facturen én offertes in één administratie bijhouden? <Link href="/boekhoudprogramma-vergelijken" className="text-warm-orange hover:underline">Vergelijk boekhoudprogramma&apos;s voor facturen en offertes</Link>.</p>
            <OfferteFactuurCtas />

            <h2>Veelgestelde vragen</h2>
            <h3>Wat is het verschil tussen offerte en factuur?</h3>
            <p>Offerte = voorstel vóór levering. Factuur = betaalverzoek ná levering.</p>
            <h3>Is een offerte vrijblijvend?</h3>
            <p>Dat hangt af van je tekst en de omstandigheden. Veel ondernemers vermelden expliciet dat een offerte vrijblijvend is, of zetten een geldigheidsduur op het document.</p>
            <h3>Moet je een offerte betalen?</h3>
            <p>Nee. Pas na akkoord, levering en het ontvangen van een factuur betaal je volgens de termijn.</p>
            <h3>Mag de factuur afwijken van de offerte?</h3>
            <p>Alleen als dat is afgesproken, bij meerwerk, of als de offerte een indicatie was. Leg afwijkingen uit op de factuur.</p>
            <h3>Is een offerte hetzelfde als een factuur?</h3>
            <p>Nee. Een offerte is een voorstel; een factuur is een betaalverzoek na levering.</p>
        </>
    )
  },
  {
    slug: 'btw-factuur-zzp',
    relatedSlugs: ['factuur-maken-zzp', 'buitenlandse-klanten-factureren', 'gratis-factuur-zzp', 'factuur-fouten-voorkomen'],
    metaTitle: 'Btw op factuur als zzp\'er: uitleg + voorbeelden',
    title: 'Btw op factuur als zzp\'er: zo werkt het',
    breadcrumbLabel: 'Btw op factuur als zzp\'er',
    excerpt: 'Hoe vermeld je btw op een factuur? Bekijk voorbeelden met 21%, 9% en 0% btw, leer wanneer je zonder btw factureert en maak gratis een btw-factuur.',
    keywords: 'btw op factuur, btw factuur, factuur met btw, btw factuur maken, btw op factuur zzp, btw grondslag, factuur exclusief btw, wat is subtotaal factuur',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Btw%20op%20je%20factuur%20zo%20doe%20je%20het%20goed%20als%20zzp%20er.png',
      alt: 'Btw op factuur als zzp\'er: uitleg met voorbeelden voor 21%, 9% en zonder btw.',
    },
    datePublished: '2026-02-01',
    dateModified: '2026-10-08',
    faq: [
      {
        question: 'Hoe zet ik btw op een factuur?',
        answer: 'Vermeld het subtotaal exclusief btw, het toepasselijke btw-tarief, het btw-bedrag en het totaal inclusief btw. Bij KOR, vrijstelling of btw-verlegging vermeld je de juiste reden in plaats van een gewoon btw-bedrag.',
      },
      {
        question: 'Wat is het subtotaal op een factuur?',
        answer: 'Het subtotaal is meestal het bedrag exclusief btw: de prijs van je producten of diensten voordat de btw is opgeteld. Dat bedrag is ook de btw-grondslag.',
      },
      {
        question: 'Wat is de btw-grondslag?',
        answer: 'De btw-grondslag is het bedrag waarover je btw berekent. Op een gewone factuur is dat het bedrag exclusief btw.',
      },
      {
        question: 'Wat is het verschil tussen exclusief en inclusief btw?',
        answer: 'Exclusief btw is het bedrag zonder btw. Inclusief btw is het bedrag plus de btw: het totaal dat de klant betaalt.',
      },
      {
        question: 'Is 0% btw hetzelfde als btw verlegd?',
        answer: 'Nee. 0% btw is een btw-tarief. Btw-verlegging betekent dat de btwplicht bij de afnemer ligt. Op de factuur horen andere vermeldingen, zoals “Btw verlegd” of “Reverse charge”.',
      },
      {
        question: 'Moet ik zonder btw factureren als mijn klant btw-vrijgesteld is?',
        answer: 'Nee, niet automatisch. Of je btw in rekening brengt, hangt af van jouw levering en de toepasselijke btw-regels, niet alleen van de btw-status van je klant.',
      },
      {
        question: 'Kan ik meerdere btw-tarieven op één factuur zetten?',
        answer: 'Ja. Als je goederen of diensten met verschillende tarieven levert, vermeld je per regel het bedrag exclusief btw, het tarief en het btw-bedrag.',
      },
      {
        question: 'Wanneer factureer ik zonder btw?',
        answer: 'Bijvoorbeeld als je de KOR toepast, een btw-vrijgestelde prestatie verricht, of als btw-verlegging of een nultarief van toepassing is. Die situaties zijn niet hetzelfde en horen een passende vermelding op de factuur.',
      },
    ],
    content: (
      <>
        <p>Hoe zet je btw op een factuur? Als zzp&apos;er moet je weten welk btw-tarief van toepassing is, hoe je de btw berekent en wanneer je juist geen btw in rekening brengt.</p>
        <p>Voor de meeste ondernemers is dit eenvoudig: je vermeldt het bedrag exclusief btw, berekent de btw en toont het totaal inclusief btw. Maar bij de kleineondernemersregeling (KOR), btw-vrijgestelde diensten en buitenlandse klanten gelden andere regels.</p>
        <p>In deze gids lees je hoe je een correcte btw-factuur maakt, met voorbeelden voor 21%, 9%, verschillende btw-tarieven en facturen zonder btw.</p>
        <p>
          <strong>Direct een btw-factuur maken?</strong> Met{' '}
          <Link href="/create-invoice" className="text-warm-orange hover:underline">FactuurBaas</Link>{' '}
          kun je gratis een factuur maken, de btw laten berekenen en de factuur als PDF downloaden. Een account is niet nodig.
        </p>
        <CtaButton href="/create-invoice" label="Maak een btw-factuur" />

        <h2>Hoe werkt btw op een factuur?</h2>
        <p>Btw staat voor belasting over de toegevoegde waarde. Als je btw-belaste producten of diensten levert, bereken je doorgaans btw over het bedrag dat je aan je klant in rekening brengt.</p>
        <p>Op een normale btw-factuur zie je daarom drie bedragen:</p>
        <ul>
          <li><strong>Subtotaal exclusief btw:</strong> de prijs van je producten of diensten zonder btw.</li>
          <li><strong>Btw-bedrag:</strong> de berekende belasting op basis van het toepasselijke tarief.</li>
          <li><strong>Totaal inclusief btw:</strong> het bedrag dat je klant uiteindelijk betaalt.</li>
        </ul>

        <h3>Voorbeeld factuur met 21% btw</h3>
        <p>Je hebt als zzp&apos;er werkzaamheden uitgevoerd voor €500 exclusief btw.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Omschrijving</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Bedrag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Werkzaamheden excl. btw</td>
                <td className="px-4 py-3 text-right">€500,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw 21%</td>
                <td className="px-4 py-3 text-right">€105,00</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal incl. btw</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€605,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>De berekening is:</p>
        <p>€500 × 21% = €105 btw.</p>
        <p>€500 + €105 = €605 inclusief btw.</p>
        <p>Dit is de basis van een factuur met btw.</p>

        <h2>Wat moet er op een btw-factuur staan?</h2>
        <p>Een btw-factuur moet voldoen aan de factuureisen van de Belastingdienst.</p>
        <p>Voor een reguliere factuur vermeld je onder andere:</p>
        <ol>
          <li>Je volledige bedrijfsnaam en adres.</li>
          <li>De naam en het adres van je klant.</li>
          <li>Je btw-identificatienummer.</li>
          <li>Je KvK-nummer, als je bij de KvK bent ingeschreven.</li>
          <li>Een uniek, opeenvolgend factuurnummer.</li>
          <li>De factuurdatum.</li>
          <li>De datum waarop je de goederen of diensten hebt geleverd.</li>
          <li>Een duidelijke omschrijving en omvang van de levering.</li>
          <li>De bedragen exclusief btw.</li>
          <li>De toepasselijke btw-tarieven en btw-bedragen.</li>
        </ol>
        <p>Bij bijzondere situaties, zoals btw-verlegging of internationale leveringen, kunnen aanvullende vermeldingen verplicht zijn.</p>
        <p>Voor bepaalde kleine facturen en vrijgestelde prestaties gelden afwijkende regels.</p>
        <p>
          <Link href="/blogs/factuur-maken-zzp" className="text-warm-orange hover:underline">Bekijk ook het volledige stappenplan voor een zzp-factuur</Link>.
        </p>

        <h2>Welk btw-tarief gebruik je als zzp&apos;er?</h2>
        <p>In Nederland zijn er drie btw-tarieven: 21%, 9% en 0%.</p>
        <p>Daarnaast zijn bepaalde goederen en diensten vrijgesteld van btw.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Tarief</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Wanneer</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Op de factuur</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium text-deep-blue">21%</td>
                <td className="px-4 py-3">Het algemene tarief voor de meeste producten en diensten</td>
                <td className="px-4 py-3">Bedrag excl. btw, 21% btw en totaal incl. btw</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium text-deep-blue">9%</td>
                <td className="px-4 py-3">Het verlaagde tarief voor bepaalde goederen en diensten</td>
                <td className="px-4 py-3">Bedrag excl. btw, 9% btw en totaal incl. btw</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium text-deep-blue">0%</td>
                <td className="px-4 py-3">Specifieke situaties waarin het nultarief geldt</td>
                <td className="px-4 py-3">0% btw, met de vermelding die bij die situatie hoort</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-deep-blue">Vrijgesteld of verlegd</td>
                <td className="px-4 py-3">KOR, vrijgestelde prestaties of btw-verlegging</td>
                <td className="px-4 py-3">Geen gewoon btw-bedrag; wel de juiste reden of vermelding</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Welk tarief van toepassing is, hangt af van wat je levert, niet van het feit dat je zzp&apos;er bent.</p>
        <p>
          Meer over tarieven lees je in{' '}
          <Link href="/gidsen/welke-btw-rekenen-zzper" className="text-warm-orange hover:underline">welke btw je als zzp&apos;er moet rekenen</Link>
          {' '}en het{' '}
          <Link href="/gidsen/verschil-9-en-21-btw" className="text-warm-orange hover:underline">verschil tussen 9% en 21% btw</Link>.
        </p>

        <h2>Wat is het subtotaal en de btw-grondslag?</h2>
        <p>Het <strong>subtotaal</strong> op een factuur is meestal het bedrag exclusief btw: de prijs van je werk of producten voordat de btw is opgeteld.</p>
        <p>Dat bedrag is ook de <strong>btw-grondslag</strong>: het bedrag waarover je de btw berekent.</p>
        <p>Op een gewone factuur zie je dus:</p>
        <ul>
          <li>een factuur exclusief btw (subtotaal / grondslag);</li>
          <li>het btw-bedrag;</li>
          <li>het totaal inclusief btw.</li>
        </ul>
        <p>Met de{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">btw-calculator</Link>{' '}
          kun je een bedrag exclusief of inclusief btw omrekenen.
        </p>

        <h2>Voorbeeld factuur met 9% btw</h2>
        <p>Stel dat het verlaagde tarief van 9% van toepassing is op een levering van €200 exclusief btw.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Omschrijving</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Bedrag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Levering excl. btw</td>
                <td className="px-4 py-3 text-right">€200,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw 9%</td>
                <td className="px-4 py-3 text-right">€18,00</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal incl. btw</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€218,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>€200 × 9% = €18 btw. Het totaal inclusief btw is €218.</p>
        <p>Gebruik 9% alleen wanneer dat tarief voor jouw levering daadwerkelijk geldt.</p>

        <h2>Voorbeeld factuur met verschillende btw-tarieven</h2>
        <p>Lever je op één factuur goederen of diensten met verschillende tarieven? Vermeld dan per regel het tarief en het btw-bedrag.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[520px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Omschrijving</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Excl. btw</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Tarief</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Btw</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Website-onderhoud</td>
                <td className="px-4 py-3 text-right">€400,00</td>
                <td className="px-4 py-3 text-right">21%</td>
                <td className="px-4 py-3 text-right">€84,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Levering tegen 9% btw</td>
                <td className="px-4 py-3 text-right">€100,00</td>
                <td className="px-4 py-3 text-right">9%</td>
                <td className="px-4 py-3 text-right">€9,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium text-deep-blue">Subtotaal excl. btw</td>
                <td className="px-4 py-3 text-right font-medium text-deep-blue">€500,00</td>
                <td className="px-4 py-3" />
                <td className="px-4 py-3 text-right font-medium text-deep-blue">€93,00</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue" colSpan={3}>Totaal incl. btw</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€593,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Tel de btw-bedragen per tarief bij elkaar op. Vermeld niet één gemiddeld tarief over het hele factuurbedrag.</p>

        <h2>Factuur zonder btw: KOR, vrijstelling, 0% of verlegd</h2>
        <p>Geen btw op de factuur kan verschillende oorzaken hebben. Die oorzaken mag je niet door elkaar halen.</p>
        <ul>
          <li><strong>KOR:</strong> je neemt deel aan de kleineondernemersregeling en brengt geen btw in rekening.</li>
          <li><strong>Vrijstelling:</strong> je verricht een btw-vrijgestelde prestatie.</li>
          <li><strong>0% btw:</strong> er geldt een nultarief. Dat is een btw-tarief, geen vrijstelling.</li>
          <li><strong>Btw verlegd:</strong> de btwplicht ligt bij de afnemer. Dat is iets anders dan 0% btw.</li>
        </ul>
        <p>Zet daarom niet automatisch 0% btw op een factuur wanneer de KOR, een vrijstelling of btw-verlegging van toepassing is.</p>

        <h3>Voorbeeld: factuur bij de KOR</h3>
        <p>Als je de KOR toepast, breng je doorgaans geen btw in rekening. Het totaal is gelijk aan het bedrag van je werkzaamheden.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Omschrijving</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Bedrag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Werkzaamheden</td>
                <td className="px-4 py-3 text-right">€500,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw</td>
                <td className="px-4 py-3 text-right">Niet in rekening gebracht (KOR)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€500,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Vermeld op de factuur dat de KOR van toepassing is. Gebruik niet het tarief 0% als vervanging.</p>
        <p>
          Bekijk ook het{' '}
          <Link href="/factuur-template/zonder-btw" className="text-warm-orange hover:underline">voorbeeld van een factuur zonder btw</Link>
          {' '}of doe de{' '}
          <Link href="/tools/kor-calculator" className="text-warm-orange hover:underline">KOR-check</Link>.
        </p>

        <h3>Voorbeeld: factuur met btw verlegd</h3>
        <p>Bij btw-verlegging breng je zelf geen Nederlandse btw in rekening. De afnemer geeft de btw aan in zijn eigen aangifte, als de regels dat vereisen.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Omschrijving</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Bedrag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Werkzaamheden</td>
                <td className="px-4 py-3 text-right">€500,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw</td>
                <td className="px-4 py-3 text-right">Verlegd</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€500,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Op de factuur hoort doorgaans de vermelding &quot;Btw verlegd&quot; of &quot;Reverse charge&quot;, plus het btw-identificatienummer van de afnemer wanneer dat vereist is.</p>
        <p>Dat is niet hetzelfde als 0% btw. 0% is een tarief; verlegging is een andere btw-behandeling.</p>
        <p>
          Wanneer 0% wél het juiste tarief is, lees je dat in{' '}
          <Link href="/gidsen/wanneer-gebruik-je-0-btw" className="text-warm-orange hover:underline">wanneer je 0% btw gebruikt</Link>.
        </p>

        <h2>Factureren aan een btw-vrijgestelde klant</h2>
        <p>Als je klant zelf btw-vrijgesteld is, betekent dat niet automatisch dat jij zonder btw mag factureren.</p>
        <p>Of je btw in rekening brengt, hangt af van de aard van jouw levering of dienst en de btw-regels die daarvoor gelden. De btw-status van de klant is daarvoor niet genoeg.</p>
        <p>Lever je een btw-belaste dienst aan een vrijgestelde organisatie, dan reken je in beginsel gewoon het toepasselijke tarief.</p>

        <h2>Btw op facturen naar het buitenland</h2>
        <p>Niet iedere levering aan een klant in een ander EU-land valt onder 0% btw of btw-verlegging.</p>
        <p>Het maakt uit of je goederen of diensten levert, of de klant ondernemer of particulier is, en waar de prestatie voor de btw plaatsvindt.</p>
        <p>Voor een EU-ondernemer kan btw-verlegging gelden. Voor een particuliere afnemer of bepaalde goederen kunnen andere regels van toepassing zijn. Buiten de EU gelden opnieuw andere voorwaarden.</p>
        <p>Controleer daarom de situatie voordat je 0% of &quot;btw verlegd&quot; op de factuur zet.</p>
        <p>
          Een uitgebreidere uitleg staat in{' '}
          <Link href="/blogs/buitenlandse-klanten-factureren" className="text-warm-orange hover:underline">buitenlandse klanten factureren</Link>.
        </p>

        <h2>Zo maak je een btw-factuur</h2>
        <ol>
          <li>Bepaal welk btw-tarief of welke bijzondere regeling voor de levering geldt.</li>
          <li>Vul je bedrijfs- en klantgegevens in.</li>
          <li>Zet per regel het bedrag exclusief btw.</li>
          <li>Laat de btw per tarief berekenen, of vermeld KOR, vrijstelling of verlegging.</li>
          <li>Controleer subtotaal, btw en totaal.</li>
          <li>Download de factuur als PDF.</li>
        </ol>
        <p>Met FactuurBaas kies je het tarief per regel. De tool berekent de btw op basis van je invoer. Controleer zelf of het gekozen tarief klopt.</p>
        <CtaButton href="/create-invoice" label="Maak gratis een btw-factuur" />

        <h2>Veelgestelde vragen over btw op factuur</h2>
        <h3>Hoe zet ik btw op een factuur?</h3>
        <p>Vermeld het subtotaal exclusief btw, het toepasselijke btw-tarief, het btw-bedrag en het totaal inclusief btw. Bij KOR, vrijstelling of btw-verlegging vermeld je de juiste reden in plaats van een gewoon btw-bedrag.</p>
        <h3>Wat is het subtotaal op een factuur?</h3>
        <p>Het subtotaal is meestal het bedrag exclusief btw: de prijs van je producten of diensten voordat de btw is opgeteld. Dat bedrag is ook de btw-grondslag.</p>
        <h3>Wat is de btw-grondslag?</h3>
        <p>De btw-grondslag is het bedrag waarover je btw berekent. Op een gewone factuur is dat het bedrag exclusief btw.</p>
        <h3>Wat is het verschil tussen exclusief en inclusief btw?</h3>
        <p>Exclusief btw is het bedrag zonder btw. Inclusief btw is het bedrag plus de btw: het totaal dat de klant betaalt.</p>
        <h3>Is 0% btw hetzelfde als btw verlegd?</h3>
        <p>Nee. 0% btw is een btw-tarief. Btw-verlegging betekent dat de btwplicht bij de afnemer ligt. Op de factuur horen andere vermeldingen, zoals &quot;Btw verlegd&quot; of &quot;Reverse charge&quot;.</p>
        <h3>Moet ik zonder btw factureren als mijn klant btw-vrijgesteld is?</h3>
        <p>Nee, niet automatisch. Of je btw in rekening brengt, hangt af van jouw levering en de toepasselijke btw-regels, niet alleen van de btw-status van je klant.</p>
        <h3>Kan ik meerdere btw-tarieven op één factuur zetten?</h3>
        <p>Ja. Als je goederen of diensten met verschillende tarieven levert, vermeld je per regel het bedrag exclusief btw, het tarief en het btw-bedrag.</p>
        <h3>Wanneer factureer ik zonder btw?</h3>
        <p>Bijvoorbeeld als je de KOR toepast, een btw-vrijgestelde prestatie verricht, of als btw-verlegging of een nultarief van toepassing is. Die situaties zijn niet hetzelfde en horen een passende vermelding op de factuur.</p>

        <h2>Maak een correcte btw-factuur</h2>
        <p>Voor de meeste zzp&apos;ers is een btw-factuur: bedrag exclusief btw, het juiste tarief, het btw-bedrag en het totaal inclusief btw.</p>
        <p>Bij KOR, vrijstelling, 0% of verlegging is de vermelding op de factuur minstens zo belangrijk als de berekening zelf.</p>
        <p><strong>Met FactuurBaas maak je gratis een factuur, laat je de btw berekenen en download je direct een PDF.</strong></p>
        <CtaButton href="/create-invoice" label="Maak gratis een factuur" />
      </>
    )
  },
    {
    slug: 'buitenlandse-klanten-factureren',
    relatedSlugs: ['btw-factuur-zzp', 'factuur-maken-zzp', 'gratis-factuur-zzp', 'factureren-startende-zzper'],
    metaTitle: 'Factuur naar buitenland maken? Btw-regels + voorbeelden',
    title: 'Buitenlandse klanten factureren: btw-regels en voorbeelden',
    breadcrumbLabel: 'Buitenlandse klanten factureren',
    excerpt: 'Factuur naar het buitenland sturen? Lees wanneer je btw verlegt, 0% btw gebruikt of Nederlandse btw rekent. Met voorbeelden voor EU en buiten EU.',
    keywords: 'factuur naar buitenland, buitenlandse klanten factureren, btw verlegd buitenland, factuur zonder btw buitenland, btw buitenlandse klant, factuur buitenland voorbeeld',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Buitenlandse%20klanten%20factureren.png',
      alt: 'Buitenlandse klanten factureren: btw-regels en voorbeelden voor EU en buiten EU.',
    },
    datePublished: '2026-02-01',
    dateModified: '2026-10-08',
    faq: [
      {
        question: 'Moet ik btw rekenen aan een buitenlandse klant?',
        answer: 'Dat hangt af van het land van de klant, of het een ondernemer of particulier is, en of je goederen of diensten levert. Soms reken je Nederlandse btw, soms buitenlandse btw, soms geldt 0% of wordt de btw verlegd.',
      },
      {
        question: 'Mag ik een factuur zonder btw naar het buitenland sturen?',
        answer: 'Ja, als de btw-regels voor jouw transactie dat toestaan. Een buitenlandse klant is op zichzelf geen voldoende reden om zonder btw te factureren.',
      },
      {
        question: 'Wanneer moet ik btw verleggen naar een buitenlandse klant?',
        answer: 'Bij veel algemene zakelijke diensten aan ondernemers in andere EU-landen wordt de btw verlegd naar de afnemer. Er bestaan uitzonderingen.',
      },
      {
        question: 'Welke tekst gebruik ik bij btw verlegd buitenland?',
        answer: "Gebruik 'btw verlegd' of 'reverse charge' wanneer de verleggingsregeling daadwerkelijk van toepassing is.",
      },
      {
        question: 'Moet ik btw rekenen aan een klant in Amerika?',
        answer: 'Bij veel algemene diensten aan Amerikaanse ondernemingen is geen Nederlandse btw verschuldigd. Voor goederen, particuliere klanten en bijzondere diensten kunnen andere regels gelden.',
      },
      {
        question: 'Moet ik btw rekenen aan een klant in België?',
        answer: 'Dat hangt af van de situatie. Bij veel zakelijke diensten aan Belgische ondernemers wordt de btw verlegd. Bij leveringen aan particulieren of specifieke soorten diensten kan een andere behandeling gelden.',
      },
      {
        question: 'Mag ik factureren in dollars?',
        answer: 'Ja. Je kunt een prijs in dollars afspreken en een factuur in dollars opstellen. Houd rekening met de toepasselijke omrekeningsregels voor je administratie en belastingaangifte.',
      },
      {
        question: 'Wat is een opgaaf ICP?',
        answer: 'Een opgaaf ICP is een periodieke opgave van bepaalde goederenleveringen en diensten aan ondernemers in andere EU-landen.',
      },
      {
        question: 'Kan ik gratis een buitenlandse factuur maken?',
        answer: 'Ja. Met FactuurBaas kun je gratis een factuur opstellen en downloaden als PDF. Je moet zelf de juiste btw-behandeling en eventuele bijzondere factuurvermeldingen controleren.',
      },
    ],
    content: (
      <>
        <p>Wil je als zzp&apos;er een factuur sturen naar een buitenlandse klant? Dan krijg je mogelijk te maken met andere btw-regels dan bij een Nederlandse klant.</p>
        <p>Of je btw moet rekenen, hangt vooral af van drie vragen: <strong>is je klant gevestigd binnen of buiten de EU, is het een ondernemer of particulier, en lever je goederen of diensten?</strong></p>
        <p>Bij sommige buitenlandse facturen verleg je de btw. Bij andere geldt het 0%-tarief, Nederlandse btw of juist buitenlandse btw.</p>
        <p>In deze gids leggen we de belangrijkste regels uit, met voorbeelden voor buitenlandse klanten binnen en buiten de EU.</p>
        <p>
          Wil je direct een factuur maken? Met{' '}
          <Link href="/create-invoice" className="text-warm-orange hover:underline">FactuurBaas</Link>{' '}
          kun je gratis een factuur opstellen en als PDF downloaden, zonder account.
        </p>
        <CtaButton href="/create-invoice" label="Maak gratis een factuur" />

        <h2>Factuur naar het buitenland: wanneer reken je btw?</h2>
        <p>Een factuur naar een buitenlandse klant is niet automatisch een factuur zonder btw.</p>
        <p>De juiste btw-behandeling hangt af van je situatie.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[640px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Klant</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Wat lever je?</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Gebruikelijke btw-behandeling</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Ondernemer binnen EU</td>
                <td className="px-4 py-3">Diensten</td>
                <td className="px-4 py-3">Vaak btw verlegd</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Ondernemer binnen EU</td>
                <td className="px-4 py-3">Goederen die naar ander EU-land gaan</td>
                <td className="px-4 py-3">Vaak 0% btw</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Particulier binnen EU</td>
                <td className="px-4 py-3">Diensten</td>
                <td className="px-4 py-3">Afhankelijk van soort dienst en plaats van dienst</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Particulier binnen EU</td>
                <td className="px-4 py-3">Goederen</td>
                <td className="px-4 py-3">Nederlandse of buitenlandse btw, afhankelijk van regels</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Ondernemer buiten EU</td>
                <td className="px-4 py-3">Diensten</td>
                <td className="px-4 py-3">Vaak buiten Nederlandse btw-heffing</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Klant buiten EU</td>
                <td className="px-4 py-3">Goederen die worden geëxporteerd</td>
                <td className="px-4 py-3">Vaak 0% btw bij bewezen export</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Dit zijn hoofdregels, geen automatische uitkomsten. Voor bepaalde diensten, leveringen en bijzondere situaties gelden uitzonderingen.</p>

        <h2>1. Factuur naar een ondernemer binnen de EU</h2>
        <p>Werk je bijvoorbeeld als freelance marketeer, consultant of webdesigner voor een onderneming in België, Duitsland of Frankrijk?</p>
        <p>Bij veel zakelijke diensten geldt dat de dienst belast is in het land waar je klant is gevestigd.</p>
        <p>De btw wordt dan meestal verlegd naar de buitenlandse ondernemer.</p>
        <h3>Wat zet je op de factuur?</h3>
        <p>Bij een dienst waarop de EU-verleggingsregeling van toepassing is:</p>
        <ul>
          <li>Je brengt geen Nederlandse btw in rekening.</li>
          <li>Je vermeldt je eigen btw-identificatienummer.</li>
          <li>Je vermeldt het geldige btw-identificatienummer van je klant.</li>
          <li>Je zet de tekst <strong>&apos;btw verlegd&apos;</strong> op de factuur.</li>
          <li>Je verwerkt de dienst in je btw-aangifte en doorgaans in je opgaaf ICP.</li>
        </ul>
        <p>
          Controleer vooraf het btw-identificatienummer van je klant via het Europese{' '}
          <a href="https://ec.europa.eu/taxation_customs/vies/" className="text-warm-orange hover:underline" target="_blank" rel="noopener noreferrer">VIES-systeem</a>.
        </p>
        <h3>Voorbeeld factuur naar België</h3>
        <p>Je levert marketingdiensten aan een Belgische onderneming voor €1.000.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-lg font-semibold text-deep-blue">Factuur</p>
          </div>
          <div className="grid gap-4 border-b border-slate-100 px-4 py-4 sm:grid-cols-2">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Leverancier</p>
              <p className="font-medium text-deep-blue">Jansen Marketing</p>
              <p>Nederland</p>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Klant</p>
              <p className="font-medium text-deep-blue">Voorbeeld BV</p>
              <p>België</p>
              <p>Btw-id: BE0123456789 (fictief)</p>
            </div>
          </div>
          <p className="border-b border-slate-100 px-4 py-2 text-sm text-slate-600">Factuurnummer: 2026-025</p>
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Omschrijving</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Bedrag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Marketingadvies</td>
                <td className="px-4 py-3 text-right">€1.000,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw</td>
                <td className="px-4 py-3 text-right">Verlegd</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal te betalen</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€1.000,00</td>
              </tr>
            </tbody>
          </table>
          <p className="px-4 py-4 text-sm text-slate-600">Vermelding: btw verlegd / reverse charge</p>
        </div>
        <p>Dit voorbeeld laat de btw-behandeling zien. Op een daadwerkelijke factuur moeten ook de overige verplichte gegevens staan.</p>
        <p>Let op: bij bepaalde diensten, zoals werkzaamheden aan onroerend goed of toegang tot evenementen, kunnen andere regels gelden.</p>

        <h2>2. Factuur naar een particulier binnen de EU</h2>
        <p>Factureer je aan een particulier in Duitsland, België of een ander EU-land?</p>
        <p>Dan gelden niet automatisch dezelfde regels als voor zakelijke klanten.</p>
        <p>Bij veel algemene diensten aan particulieren is Nederlandse btw van toepassing, maar er bestaan belangrijke uitzonderingen.</p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>Digitale diensten.</li>
          <li>Diensten die verband houden met onroerend goed.</li>
          <li>Bepaalde evenementen en activiteiten.</li>
          <li>Personenvervoer.</li>
          <li>Restaurant- en cateringdiensten.</li>
        </ul>
        <p>Bij sommige diensten moet je btw berekenen in het land van de klant of de plaats waar de dienst wordt verricht.</p>
        <h3>Voorbeeld</h3>
        <p>Een Nederlandse consultant levert een algemene adviesdienst aan een particulier in België.</p>
        <p>Als de algemene hoofdregel voor diensten aan particulieren van toepassing is, berekent de consultant Nederlandse btw.</p>
        <p>Een Nederlandse ondernemer die een andere soort dienst levert, kan juist met Belgische btw-regels te maken krijgen.</p>
        <p><strong>Conclusie:</strong> controleer bij particuliere klanten altijd eerst waar de dienst voor de btw belast is.</p>

        <h2>3. Factuur naar een ondernemer buiten de EU</h2>
        <p>Lever je diensten aan een zakelijke klant in bijvoorbeeld de Verenigde Staten, het Verenigd Koninkrijk of Zwitserland?</p>
        <p>Bij veel algemene zakelijke diensten ligt de plaats van dienst in het land waar de afnemer is gevestigd.</p>
        <p>Daardoor is de dienst doorgaans niet belast met Nederlandse btw.</p>
        <h3>Voorbeeld factuur naar Amerika</h3>
        <p>Je maakt een website voor een Amerikaanse onderneming.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Omschrijving</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Bedrag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Websiteontwikkeling</td>
                <td className="px-4 py-3 text-right">€2.000,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Nederlandse btw</td>
                <td className="px-4 py-3 text-right">Niet van toepassing</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal te betalen</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€2.000,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Bij een algemene B2B-dienst die buiten de EU belast is, kun je bijvoorbeeld vermelden:</p>
        <p><em>Dienst belast buiten Nederland volgens de toepasselijke plaats-van-dienstregels.</em></p>
        <p>Dit is geen algemene verplichte standaardtekst voor iedere buitenlandse factuur.</p>
        <p>Het betekent ook niet dat je automatisch 0% btw toepast. De prestatie kan buiten de Nederlandse btw-heffing vallen.</p>
        <p>Voor bijzondere diensten kunnen afwijkende regels gelden.</p>

        <h2>4. Factuur naar een particulier buiten de EU</h2>
        <p>Ook bij particuliere klanten buiten de EU hangt de btw af van het soort dienst.</p>
        <p>Sommige diensten vallen onder de Nederlandse btw-regels, terwijl andere diensten buiten Nederland belast kunnen zijn.</p>
        <p>Bijvoorbeeld bepaalde adviesdiensten aan particuliere klanten buiten de EU kunnen onder specifieke uitzonderingen vallen.</p>
        <p>Daarom kun je niet stellen dat iedere factuur aan een klant in Amerika of Zwitserland automatisch zonder btw is.</p>
        <p>Controleer eerst de toepasselijke plaats-van-dienstregels.</p>

        <h2>5. Goederen leveren aan een ondernemer binnen de EU</h2>
        <p>Verkoop je fysieke producten aan een onderneming in een ander EU-land en worden die goederen daadwerkelijk naar dat land vervoerd?</p>
        <p>Dan kun je onder voorwaarden het 0%-tarief toepassen.</p>
        <p>Dit heet een <strong>intracommunautaire levering</strong>.</p>
        <p>Belangrijke voorwaarden zijn onder andere:</p>
        <ul>
          <li>De goederen worden naar een ander EU-land vervoerd.</li>
          <li>De afnemer voldoet aan de voorwaarden voor een intracommunautaire verwerving.</li>
          <li>Je beschikt over een geldig btw-identificatienummer van de afnemer.</li>
          <li>Je kunt aantonen dat de goederen naar het andere EU-land zijn vervoerd.</li>
          <li>Je voldoet aan de aangifte- en opgaafverplichtingen.</li>
        </ul>
        <h3>Voorbeeld</h3>
        <p>Je verkoopt goederen voor €1.500 aan een Duitse onderneming.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Omschrijving</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Bedrag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Goederen</td>
                <td className="px-4 py-3 text-right">€1.500,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw 0%</td>
                <td className="px-4 py-3 text-right">€0,00</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€1.500,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Op de factuur vermeld je de gegevens die bij een intracommunautaire levering vereist zijn, waaronder het btw-identificatienummer van de klant en een passende wettelijke verwijzing naar het 0%-tarief.</p>
        <p>Dit verschilt van de verleggingsregeling voor veel zakelijke diensten binnen de EU.</p>

        <h2>6. Goederen verkopen aan buitenlandse particulieren</h2>
        <p>Verkoop je producten aan particulieren in andere EU-landen, bijvoorbeeld via een webshop?</p>
        <p>Dan kun je te maken krijgen met de regels voor afstandsverkopen.</p>
        <p>Afhankelijk van je situatie en omzet kan Nederlandse btw of de btw van het land van de klant gelden.</p>
        <p>Voor bepaalde grensoverschrijdende verkopen bestaat een gezamenlijke EU-omzetdrempel van €10.000 per kalenderjaar. Hieraan zijn voorwaarden verbonden.</p>
        <p>Wanneer buitenlandse btw verschuldigd is, kun je die in veel gevallen via het éénloketsysteem (OSS) aangeven.</p>
        <p>Bij goederen die je exporteert naar landen buiten de EU, kan onder voorwaarden het 0%-tarief gelden. Je moet dan onder andere kunnen aantonen dat de goederen de EU hebben verlaten.</p>

        <h2>Btw verlegd buitenland: wat betekent het?</h2>
        <p>Bij btw-verlegging bereken je als leverancier niet zelf de btw aan je klant.</p>
        <p>De afnemer verwerkt de btw volgens de regels die op de transactie van toepassing zijn.</p>
        <p>Dit komt bijvoorbeeld veel voor bij algemene zakelijke diensten tussen ondernemers in verschillende EU-landen.</p>
        <h3>Welke tekst zet je op de factuur?</h3>
        <p>Bij een toepasselijke verleggingsregeling vermeld je:</p>
        <p><strong>Btw verlegd</strong></p>
        <p>Of, op een Engelstalige factuur:</p>
        <p><strong>Reverse charge</strong></p>
        <p>Daarnaast vermeld je de btw-identificatienummers en andere vereiste factuurgegevens.</p>
        <h3>Is btw verlegd hetzelfde als 0% btw?</h3>
        <p>Nee.</p>
        <p><strong>Btw verlegd</strong> betekent dat de btw-heffing bij de afnemer ligt.</p>
        <p><strong>0% btw</strong> betekent dat de levering onder een wettelijk nultarief valt.</p>
        <p>Ook een prestatie die buiten de Nederlandse btw-heffing valt, is niet automatisch een levering tegen 0% btw.</p>
        <p>Die verschillen zijn belangrijk voor je factuur en btw-aangifte.</p>
        <p>
          <Link href="/blogs/btw-factuur-zzp" className="text-warm-orange hover:underline">Lees meer over btw op facturen</Link>.
        </p>

        <h2>Factuur buitenland voorbeeld: drie situaties</h2>
        <p>Hieronder zie je de belangrijkste verschillen.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[560px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Situatie</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Factuurbedrag</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Btw-vermelding</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Marketingdienst aan Belgische ondernemer, verlegging van toepassing</td>
                <td className="px-4 py-3 text-right">€750</td>
                <td className="px-4 py-3">Btw verlegd</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Goederen naar Duitse ondernemer, voorwaarden 0%-tarief vervuld</td>
                <td className="px-4 py-3 text-right">€750</td>
                <td className="px-4 py-3">0% btw, intracommunautaire levering</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Algemene zakelijke dienst aan Amerikaanse onderneming, belast buiten Nederland</td>
                <td className="px-4 py-3 text-right">€750</td>
                <td className="px-4 py-3">Geen Nederlandse btw van toepassing</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Het te betalen bedrag is in deze voorbeelden gelijk, maar de fiscale behandeling verschilt.</p>
        <p>Daarom is het belangrijk dat je niet voor iedere buitenlandse klant automatisch dezelfde btw-instelling gebruikt.</p>

        <h2>Wat moet er op een buitenlandse factuur staan?</h2>
        <p>Een factuur naar het buitenland bevat veel van dezelfde gegevens als een Nederlandse factuur.</p>
        <p>Denk aan:</p>
        <ul>
          <li>Je bedrijfsnaam en adres.</li>
          <li>De naam en het adres van je klant.</li>
          <li>Je btw-identificatienummer, indien vereist.</li>
          <li>Het btw-identificatienummer van de klant, indien vereist.</li>
          <li>Een uniek factuurnummer.</li>
          <li>De factuurdatum.</li>
          <li>De datum van levering of dienstverlening.</li>
          <li>Een duidelijke omschrijving.</li>
          <li>De bedragen en toepasselijke btw-behandeling.</li>
          <li>Bijzondere verplichte vermeldingen, zoals &apos;btw verlegd&apos;.</li>
        </ul>
        <p>Bij grensoverschrijdende transacties kunnen aanvullende factuurregels gelden.</p>

        <h2>Factureren in dollars, ponden of andere valuta</h2>
        <p>Je mag een buitenlandse klant in een andere valuta factureren.</p>
        <p>Bijvoorbeeld:</p>
        <ul>
          <li>Amerikaanse dollars (USD).</li>
          <li>Britse ponden (GBP).</li>
          <li>Zwitserse franken (CHF).</li>
          <li>Tsjechische kronen (CZK).</li>
        </ul>
        <p>Spreek vooraf duidelijk af in welke valuta je klant moet betalen.</p>
        <h3>Voorbeeld factuur in dollars</h3>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Omschrijving</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Bedrag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Webdesign</td>
                <td className="px-4 py-3 text-right">$1.200,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Nederlandse btw</td>
                <td className="px-4 py-3 text-right">Niet van toepassing in dit voorbeeld</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">$1.200,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Voor je administratie en eventuele btw-aangifte kan het nodig zijn bedragen om te rekenen naar euro&apos;s.</p>
        <p>Welke wisselkoers en peildatum je gebruikt, hangt af van de toepasselijke regels. De factuurdatum is niet in alle gevallen automatisch de juiste peildatum.</p>
        <p>Bewaar daarom de gebruikte koers en de bijbehorende berekening.</p>

        <h2>Buitenlandse factuur en de opgaaf ICP</h2>
        <p>Lever je goederen of diensten aan ondernemers in andere EU-landen?</p>
        <p>Dan kun je verplicht zijn om naast je btw-aangifte een <strong>opgaaf intracommunautaire prestaties (ICP)</strong> in te dienen.</p>
        <p>Daarin rapporteer je bepaalde leveringen en diensten aan ondernemers in andere EU-landen.</p>
        <p>Dit geldt bijvoorbeeld voor veel intracommunautaire leveringen en diensten waarvoor de btw naar de buitenlandse afnemer is verlegd.</p>
        <p>Niet iedere buitenlandse factuur hoort in de opgaaf ICP.</p>
        <p>Diensten aan klanten buiten de EU vallen daar bijvoorbeeld niet onder.</p>
        <p>Controleer daarom welke transacties je moet opnemen.</p>

        <h2>Veelgemaakte fouten bij buitenlandse facturen</h2>
        <p><strong>1. Iedere buitenlandse factuur op 0% btw zetten</strong></p>
        <p>Niet iedere buitenlandse transactie valt onder het 0%-tarief.</p>
        <p><strong>2. Btw-verlegging verwarren met het nultarief</strong></p>
        <p>Dit zijn verschillende btw-behandelingen.</p>
        <p><strong>3. Het btw-identificatienummer niet controleren</strong></p>
        <p>Controleer bij zakelijke klanten binnen de EU het btw-identificatienummer en bewaar bewijs van de controle.</p>
        <p><strong>4. Geen onderscheid maken tussen goederen en diensten</strong></p>
        <p>Voor goederen en diensten gelden verschillende hoofdregels.</p>
        <p><strong>5. Geen onderscheid maken tussen bedrijven en particulieren</strong></p>
        <p>Voor particuliere klanten kunnen heel andere regels gelden.</p>
        <p><strong>6. De opgaaf ICP vergeten</strong></p>
        <p>Bepaalde EU-transacties moet je afzonderlijk rapporteren.</p>
        <p><strong>7. Een verkeerde wisselkoers gebruiken</strong></p>
        <p>Controleer welke omrekeningsregels voor jouw administratie en aangifte gelden.</p>

        <h2>Gratis factuur naar het buitenland maken</h2>
        <p>Wil je een factuur opstellen voor een buitenlandse klant?</p>
        <p>Met FactuurBaas kun je gratis een factuur maken en als PDF downloaden.</p>
        <p>Je kunt onder andere:</p>
        <ul>
          <li>Je eigen bedrijfsgegevens invullen.</li>
          <li>De gegevens van je buitenlandse klant toevoegen.</li>
          <li>Producten of diensten omschrijven.</li>
          <li>Bedragen en btw-percentages invoeren.</li>
          <li>Een factuur als PDF downloaden.</li>
        </ul>
        <p>Controleer zelf welke btw-regels voor jouw buitenlandse transactie gelden en zorg dat eventuele verplichte bijzondere vermeldingen correct op de factuur staan.</p>
        <CtaButton href="/create-invoice" label="Maak gratis een factuur" />

        <h2>Veelgestelde vragen over buitenlandse klanten factureren</h2>
        <h3>Moet ik btw rekenen aan een buitenlandse klant?</h3>
        <p>Dat hangt af van het land van de klant, of het een ondernemer of particulier is, en of je goederen of diensten levert. Soms reken je Nederlandse btw, soms buitenlandse btw, soms geldt 0% of wordt de btw verlegd.</p>
        <h3>Mag ik een factuur zonder btw naar het buitenland sturen?</h3>
        <p>Ja, als de btw-regels voor jouw transactie dat toestaan. Een buitenlandse klant is op zichzelf geen voldoende reden om zonder btw te factureren.</p>
        <h3>Wanneer moet ik btw verleggen naar een buitenlandse klant?</h3>
        <p>Bij veel algemene zakelijke diensten aan ondernemers in andere EU-landen wordt de btw verlegd naar de afnemer. Er bestaan uitzonderingen.</p>
        <h3>Welke tekst gebruik ik bij btw verlegd buitenland?</h3>
        <p>Gebruik &apos;btw verlegd&apos; of &apos;reverse charge&apos; wanneer de verleggingsregeling daadwerkelijk van toepassing is.</p>
        <h3>Moet ik btw rekenen aan een klant in Amerika?</h3>
        <p>Bij veel algemene diensten aan Amerikaanse ondernemingen is geen Nederlandse btw verschuldigd. Voor goederen, particuliere klanten en bijzondere diensten kunnen andere regels gelden.</p>
        <h3>Moet ik btw rekenen aan een klant in België?</h3>
        <p>Dat hangt af van de situatie. Bij veel zakelijke diensten aan Belgische ondernemers wordt de btw verlegd. Bij leveringen aan particulieren of specifieke soorten diensten kan een andere behandeling gelden.</p>
        <h3>Mag ik factureren in dollars?</h3>
        <p>Ja. Je kunt een prijs in dollars afspreken en een factuur in dollars opstellen. Houd rekening met de toepasselijke omrekeningsregels voor je administratie en belastingaangifte.</p>
        <h3>Wat is een opgaaf ICP?</h3>
        <p>Een opgaaf ICP is een periodieke opgave van bepaalde goederenleveringen en diensten aan ondernemers in andere EU-landen.</p>
        <h3>Kan ik gratis een buitenlandse factuur maken?</h3>
        <p>Ja. Met FactuurBaas kun je gratis een factuur opstellen en downloaden als PDF. Je moet zelf de juiste btw-behandeling en eventuele bijzondere factuurvermeldingen controleren.</p>

        <h2>Factuur naar het buitenland maken</h2>
        <p>Een buitenlandse factuur maken hoeft niet ingewikkeld te zijn, zolang je vooraf bepaalt welke btw-regels gelden.</p>
        <p>Controleer waar je klant is gevestigd, of het een ondernemer of particulier is en welke goederen of diensten je levert.</p>
        <p>Daarna kun je de juiste factuurgegevens en btw-behandeling verwerken.</p>
        <p><strong>Met FactuurBaas maak je gratis een factuur, zonder account of abonnement.</strong></p>
        <CtaButton href="/create-invoice" label="Maak gratis een factuur" />
      </>
    )
  },
  {
    slug: 'factureren-startende-zzper',
    relatedSlugs: ['factuur-maken-zzp', 'gratis-factuur-zzp', 'btw-factuur-zzp', 'sneller-betalen-factuur'],
    metaTitle: 'Eerste factuur als zzp\'er? Dit moet je regelen',
    title: 'Factureren als startende zzp\'er: je eerste factuur',
    breadcrumbLabel: 'Factureren als startende zzp\'er',
    excerpt: 'Begin je als zzp\'er? Ontdek wanneer je mag factureren, wat je nodig hebt, hoe btw werkt en welke betalingstermijn je kiest.',
    keywords: 'factureren als startende zzp\'er, eerste factuur zzp, zzp factureren, beginnen met factureren, betalingstermijn zzp',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Factureren%20als%20startende%20zzp%20er.png',
      alt: 'Factureren als startende zzp\'er: je eerste factuur.',
    },
    datePublished: '2026-02-01',
    dateModified: '2026-10-08',
    faq: [
      { question: 'Mag ik als startende zzp\'er direct factureren?', answer: 'Ja, zodra je daarvoor een geldige grondslag hebt en voldoet aan de regels die op jouw activiteiten van toepassing zijn. Controleer onder andere je inschrijfplicht en btw-status.' },
      { question: 'Moet ik een zakelijke bankrekening hebben?', answer: 'Bij een eenmanszaak bestaat geen algemene wettelijke verplichting om een aparte zakelijke bankrekening te openen. Een bank kan wel voorwaarden stellen aan het gebruik van een privérekening voor zakelijke activiteiten.' },
      { question: 'Hoeveel btw moet ik rekenen als startende zzp\'er?', answer: 'Dat hangt af van je werkzaamheden en btw-situatie. Het algemene tarief is 21%, maar er bestaan andere tarieven, vrijstellingen en regelingen zoals de KOR.' },
      { question: 'Wat is een goed factuurnummer voor mijn eerste factuur?', answer: 'Je kunt beginnen met bijvoorbeeld 2026-001. Zorg dat ieder factuurnummer uniek is en past binnen een opeenvolgende nummerreeks.' },
      { question: 'Welke betalingstermijn kan ik gebruiken?', answer: 'Veel ondernemers gebruiken 14 of 30 dagen. Controleer welke afspraken en wettelijke regels voor jouw situatie gelden.' },
      { question: 'Heb ik een boekhoudprogramma nodig?', answer: 'Nee. Je moet wel een correcte administratie bijhouden. Een betaald boekhoudprogramma is daarvoor niet automatisch noodzakelijk.' },
      { question: 'Kan ik mijn eerste factuur gratis maken?', answer: 'Ja. Met FactuurBaas kun je gratis een factuur opstellen en als PDF downloaden, zonder account.' },
    ],
    content: (
      <>
        <p>Je bent begonnen als zzp&apos;er en hebt je eerste opdracht uitgevoerd. Nu wil je een factuur sturen, maar wat moet je eigenlijk regelen voordat je kunt factureren?</p>
        <p>Heb je een KvK-nummer nodig? Moet je btw rekenen? Welke betalingstermijn gebruik je? En hoe houd je je facturen bij?</p>
        <p>In deze gids leggen we uit wat je als startende zzp&apos;er moet weten over factureren, van je eerste opdracht tot de betaling op je rekening.</p>
        <p>
          Wil je direct beginnen? Met{' '}
          <Link href="/create-invoice" className="text-warm-orange hover:underline">FactuurBaas</Link>{' '}
          maak je gratis een factuur als PDF, zonder account.
        </p>
        <CtaButton href="/create-invoice" label="Maak gratis je eerste factuur" />

        <h2>Wat heb je nodig om als zzp&apos;er te factureren?</h2>
        <p>Voordat je je eerste factuur verstuurt, is het verstandig om een aantal zaken te regelen.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[560px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Onderdeel</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Wat moet je weten?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">KvK-inschrijving</td>
                <td className="px-4 py-3">Verplicht als je onderneming aan de inschrijfcriteria voldoet</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw-identificatienummer</td>
                <td className="px-4 py-3">Nodig als je voor de btw geregistreerd bent en het op je factuur moet vermelden</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Bankrekening</td>
                <td className="px-4 py-3">Een aparte zakelijke rekening is bij een eenmanszaak niet algemeen wettelijk verplicht</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Factuurnummering</td>
                <td className="px-4 py-3">Gebruik een unieke, opeenvolgende nummerreeks</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw-tarief</td>
                <td className="px-4 py-3">Controleer welk tarief of welke regeling geldt</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Administratie</td>
                <td className="px-4 py-3">Bewaar je facturen en andere zakelijke gegevens</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Je hoeft niet meteen een duur boekhoudprogramma aan te schaffen. Voor een kleine onderneming met weinig facturen kan een eenvoudige administratie voldoende zijn, zolang deze aan de wettelijke eisen voldoet.</p>

        <h2>1. Moet je ingeschreven staan bij de KvK?</h2>
        <p>Veel zzp&apos;ers moeten zich inschrijven bij de Kamer van Koophandel voordat ze structureel als ondernemer aan de slag gaan.</p>
        <p>Of je inschrijfplichtig bent, hangt onder andere af van de aard en omvang van je activiteiten.</p>
        <p>Na inschrijving ontvang je een KvK-nummer. Als je voor de btw als ondernemer bent geregistreerd, krijg je daarnaast de relevante btw-gegevens van de Belastingdienst.</p>
        <h3>Moet je KvK-nummer op je factuur?</h3>
        <p>Als je bij de KvK bent ingeschreven, moet je je KvK-nummer in de daarvoor wettelijk voorgeschreven zakelijke communicatie vermelden, waaronder je facturen.</p>
        <p>Ook je btw-identificatienummer moet op een reguliere btw-factuur staan wanneer dat verplicht is.</p>
        <p>Er bestaan bijzondere situaties waarin iemand niet KvK-inschrijfplichtig is. Controleer daarom altijd welke regels op jouw activiteiten van toepassing zijn.</p>

        <h2>2. Wanneer mag je je eerste factuur versturen?</h2>
        <p>Je kunt je eerste factuur versturen zodra je daarvoor een geldige grondslag hebt, bijvoorbeeld nadat je een afgesproken dienst hebt geleverd.</p>
        <p>Het moment waarop je moet factureren hangt onder andere af van het soort klant, de prestatie en de toepasselijke btw-regels.</p>
        <p>Voor veel reguliere zakelijke transacties geldt dat de factuur uiterlijk op de vijftiende dag van de maand na de maand van levering of dienstverlening moet worden uitgereikt.</p>
        <p>Voorbeeld:</p>
        <p>Je voert op 10 oktober werkzaamheden uit voor een zakelijke klant. Bij toepassing van de reguliere factureringsregels moet je uiterlijk 15 november factureren.</p>
        <p>Je mag uiteraard eerder factureren, bijvoorbeeld direct na afronding van je werkzaamheden.</p>
        <p>Bij vooruitbetalingen en bijzondere transacties kunnen andere regels gelden.</p>

        <h2>3. Hoe maak je je eerste factuur?</h2>
        <p>Voor je eerste factuur heb je de gegevens van je eigen onderneming en die van je klant nodig.</p>
        <p>Daarnaast vermeld je onder andere:</p>
        <ul>
          <li>Een uniek factuurnummer.</li>
          <li>De factuurdatum.</li>
          <li>De leverdatum of periode van de werkzaamheden.</li>
          <li>Een duidelijke omschrijving van je producten of diensten.</li>
          <li>Het aantal uren of producten en het afgesproken tarief.</li>
          <li>De toepasselijke btw en het totaalbedrag.</li>
        </ul>
        <h3>Voorbeeld van een eerste factuur</h3>
        <p>Stel dat je als freelance webdesigner tien uur hebt gewerkt voor €50 per uur.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Omschrijving</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Bedrag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Webdesign: 10 uur × €50</td>
                <td className="px-4 py-3 text-right">€500,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw 21%</td>
                <td className="px-4 py-3 text-right">€105,00</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal te betalen</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€605,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Dit voorbeeld gaat ervan uit dat je werkzaamheden onder het algemene btw-tarief vallen.</p>
        <p>Op de daadwerkelijke factuur vermeld je ook je bedrijfsgegevens, klantgegevens, factuurnummer, datums en overige verplichte gegevens.</p>
        <p>
          Wil je precies weten hoe je een factuur opstelt?{' '}
          <Link href="/blogs/factuur-maken-zzp" className="text-warm-orange hover:underline">Bekijk het complete stappenplan voor een zzp-factuur</Link>.
        </p>
        <p>
          Meer over{' '}
          <Link href="/blogs/gratis-factuur-zzp" className="text-warm-orange hover:underline">gratis factuur maken als starter</Link>
          {' '}vind je in een aparte gids.
        </p>

        <h2>4. Moet je als startende zzp&apos;er btw rekenen?</h2>
        <p>Niet iedere zzp&apos;er brengt automatisch 21% btw in rekening.</p>
        <p>In Nederland bestaan verschillende btw-tarieven en regelingen.</p>
        <ul>
          <li><strong>21% btw:</strong> het algemene tarief voor veel goederen en diensten.</li>
          <li><strong>9% btw:</strong> voor bepaalde goederen en diensten.</li>
          <li><strong>0% btw:</strong> voor specifieke transacties.</li>
          <li><strong>Btw-vrijstelling:</strong> voor prestaties die onder een wettelijke vrijstelling vallen.</li>
          <li><strong>Kleineondernemersregeling (KOR):</strong> een regeling waarmee je onder voorwaarden geen btw in rekening brengt.</li>
        </ul>
        <h3>Kleineondernemersregeling voor starters</h3>
        <p>Als je aan de voorwaarden voldoet, kun je mogelijk deelnemen aan de KOR.</p>
        <p>Voor de Nederlandse KOR geldt een omzetgrens van €20.000 per kalenderjaar. Deelname vereist een geldige aanmelding en naleving van de voorwaarden.</p>
        <p>Bij toepassing van de KOR breng je voor de betreffende prestaties geen btw in rekening. Je kunt dan in beginsel ook geen btw op zakelijke kosten aftrekken die daarop betrekking hebben.</p>
        <p>
          <Link href="/blogs/btw-factuur-zzp" className="text-warm-orange hover:underline">Bekijk hoe btw op een factuur werkt</Link>.
        </p>

        <h2>5. Welke betalingstermijn kies je als zzp&apos;er?</h2>
        <p>Een duidelijke betalingstermijn voorkomt misverstanden.</p>
        <p>Veel zzp&apos;ers gebruiken een betalingstermijn van 14 of 30 dagen.</p>
        <p>Welke termijn van toepassing of toegestaan is, hangt af van de afspraken met je klant en de wettelijke regels.</p>
        <h3>Voorbeeld</h3>
        <p>Factuurdatum: 8 oktober 2026</p>
        <p>Afgesproken betalingstermijn: 14 dagen</p>
        <p>Vervaldatum: 22 oktober 2026</p>
        <p>Op je factuur kun je vermelden:</p>
        <p><em>Gelieve het factuurbedrag uiterlijk 22 oktober 2026 over te maken onder vermelding van het factuurnummer.</em></p>
        <h3>Is 14 dagen beter dan 30 dagen?</h3>
        <p>Een kortere betalingstermijn kan helpen om sneller betaald te worden, maar moet passen binnen de gemaakte afspraken en toepasselijke regels.</p>
        <p>Spreek de betalingstermijn daarom bij voorkeur al af voordat je de opdracht uitvoert.</p>
        <p>
          <Link href="/tools/betaaltermijn-calculator" className="text-warm-orange hover:underline">Bereken de vervaldatum met de betaaltermijn-calculator</Link>.
        </p>

        <h2>6. Hoe houd je als starter je facturen bij?</h2>
        <p>Ook als je maar een paar facturen per maand verstuurt, moet je een overzichtelijke administratie bijhouden.</p>
        <p>Begin bijvoorbeeld met een eenvoudig overzicht:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Factuurnummer</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Klant</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Bedrag</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">2026-001</td>
                <td className="px-4 py-3">Klant A</td>
                <td className="px-4 py-3 text-right">€605</td>
                <td className="px-4 py-3">Betaald</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">2026-002</td>
                <td className="px-4 py-3">Klant B</td>
                <td className="px-4 py-3 text-right">€363</td>
                <td className="px-4 py-3">Openstaand</td>
              </tr>
              <tr>
                <td className="px-4 py-3">2026-003</td>
                <td className="px-4 py-3">Klant C</td>
                <td className="px-4 py-3 text-right">€242</td>
                <td className="px-4 py-3">Openstaand</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Zo kun je controleren:</p>
        <ul>
          <li>Welke facturen je hebt verstuurd.</li>
          <li>Welke klanten al hebben betaald.</li>
          <li>Welke bedragen nog openstaan.</li>
          <li>Welke facturen je in je administratie moet verwerken.</li>
        </ul>
        <p>Bewaar ook je inkomende facturen, bonnetjes en andere zakelijke bewijsstukken.</p>
        <p>Voor de basisadministratie geldt doorgaans een fiscale bewaartermijn van zeven jaar. Voor bepaalde gegevens gelden langere termijnen.</p>

        <h2>7. Wat als je klant je eerste factuur niet betaalt?</h2>
        <p>Het kan gebeuren dat een klant niet op tijd betaalt.</p>
        <p>Controleer eerst of de afgesproken betalingstermijn is verstreken en of de factuurgegevens kloppen.</p>
        <p>Vervolgens kun je:</p>
        <ol>
          <li>Een vriendelijke betalingsherinnering sturen.</li>
          <li>Contact opnemen met de klant.</li>
          <li>Zo nodig een formele aanmaning versturen.</li>
          <li>Bij aanhoudende wanbetaling verdere stappen overwegen.</li>
        </ol>
        <p>Welke vervolgstappen en kosten zijn toegestaan, hangt onder andere af van het type klant en de wettelijke regels.</p>
        <p>Voor consumenten gelden bijvoorbeeld specifieke eisen voordat je incassokosten in rekening mag brengen.</p>
        <p>
          <Link href="/blogs/sneller-betalen-factuur" className="text-warm-orange hover:underline">Bekijk onze tips om facturen sneller betaald te krijgen</Link>.
        </p>

        <h2>8. Heb je als startende zzp&apos;er een boekhoudprogramma nodig?</h2>
        <p>Nee, een betaald boekhoudprogramma is niet verplicht.</p>
        <p>Je bent wel verplicht een administratie bij te houden die voldoet aan de toepasselijke regels.</p>
        <p>Wanneer je slechts enkele facturen per maand verstuurt, kan een gratis factuurmaker in combinatie met een eenvoudige administratie voldoende zijn.</p>
        <p>Naarmate je meer klanten, uitgaven en transacties krijgt, kan boekhoudsoftware handig worden.</p>
        <p>Met boekhoudsoftware kun je bijvoorbeeld zakelijke kosten verwerken, banktransacties koppelen en btw-overzichten bijhouden.</p>
        <p>Twijfel je wat bij jouw situatie past?</p>
        <p>
          <Link href="/tools/boekhoudprogramma-check" className="text-warm-orange hover:underline">Doe de gratis boekhoudprogramma-check</Link>.
        </p>

        <h2>Veelgemaakte fouten bij je eerste factuur</h2>
        <p>Startende zzp&apos;ers maken vaak dezelfde fouten.</p>
        <p><strong>Geen duidelijk factuurnummer gebruiken.</strong> Begin direct met een logische nummerreeks.</p>
        <p><strong>Het verkeerde btw-tarief kiezen.</strong> Controleer welke btw-regels voor jouw werkzaamheden gelden.</p>
        <p><strong>Een onduidelijke omschrijving gebruiken.</strong> Vermeld wat je hebt geleverd en tegen welk tarief.</p>
        <p><strong>Geen betalingstermijn afspreken.</strong> Maak vooraf duidelijk wanneer je betaald wilt worden.</p>
        <p><strong>Facturen niet bewaren.</strong> Zorg vanaf het begin voor een overzichtelijke administratie.</p>
        <p><strong>Zakelijke en privétransacties door elkaar laten lopen.</strong> Een aparte rekening kan je administratie overzichtelijker maken, ook wanneer deze niet verplicht is.</p>

        <h2>Veelgestelde vragen over factureren als startende zzp&apos;er</h2>
        <h3>Mag ik als startende zzp&apos;er direct factureren?</h3>
        <p>Ja, zodra je daarvoor een geldige grondslag hebt en voldoet aan de regels die op jouw activiteiten van toepassing zijn. Controleer onder andere je inschrijfplicht en btw-status.</p>
        <h3>Moet ik een zakelijke bankrekening hebben?</h3>
        <p>Bij een eenmanszaak bestaat geen algemene wettelijke verplichting om een aparte zakelijke bankrekening te openen. Een bank kan wel voorwaarden stellen aan het gebruik van een privérekening voor zakelijke activiteiten.</p>
        <h3>Hoeveel btw moet ik rekenen als startende zzp&apos;er?</h3>
        <p>Dat hangt af van je werkzaamheden en btw-situatie. Het algemene tarief is 21%, maar er bestaan andere tarieven, vrijstellingen en regelingen zoals de KOR.</p>
        <h3>Wat is een goed factuurnummer voor mijn eerste factuur?</h3>
        <p>Je kunt beginnen met bijvoorbeeld 2026-001. Zorg dat ieder factuurnummer uniek is en past binnen een opeenvolgende nummerreeks.</p>
        <h3>Welke betalingstermijn kan ik gebruiken?</h3>
        <p>Veel ondernemers gebruiken 14 of 30 dagen. Controleer welke afspraken en wettelijke regels voor jouw situatie gelden.</p>
        <h3>Heb ik een boekhoudprogramma nodig?</h3>
        <p>Nee. Je moet wel een correcte administratie bijhouden. Een betaald boekhoudprogramma is daarvoor niet automatisch noodzakelijk.</p>
        <h3>Kan ik mijn eerste factuur gratis maken?</h3>
        <p>Ja. Met FactuurBaas kun je gratis een factuur opstellen en als PDF downloaden, zonder account.</p>

        <h2>Klaar om je eerste factuur te versturen?</h2>
        <p>Je hoeft als startende zzp&apos;er geen ingewikkeld systeem op te zetten om je eerste factuur te maken.</p>
        <p>Zorg dat je bedrijfsgegevens kloppen, controleer de btw, gebruik een uniek factuurnummer en spreek een duidelijke betalingstermijn af.</p>
        <p><strong>Met FactuurBaas maak je gratis je eerste factuur als PDF, zonder account of abonnement.</strong></p>
        <CtaButton href="/create-invoice" label="Maak gratis je eerste factuur" />
      </>
    )
  },
    {
    slug: 'factuurbeheer-overzicht',
    relatedSlugs: ['sneller-betalen-factuur', 'factuur-fouten-voorkomen', 'factuur-maken-zzp', 'beste-boekhoudprogramma-zzp'],
    metaTitle: 'Factuurbeheer: digitaal overzicht en beste aanpak',
    title: 'Factuurbeheer: zo houd je digitaal overzicht',
    breadcrumbLabel: 'Factuurbeheer',
    excerpt: 'Wat is factuurbeheer? Leer hoe je inkomende en uitgaande facturen digitaal beheert, betalingen bijhoudt en passende factuurbeheersoftware kiest.',
    keywords: 'factuurbeheer, elektronisch factuurbeheer, digitaal factuurbeheer, online factuurbeheer, factuurbeheeroplossingen',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Slim%20factuurbeheer.png',
      alt: 'Factuurbeheer: zo houd je digitaal overzicht over je facturen.',
    },
    datePublished: '2026-02-01',
    dateModified: '2026-10-08',
    faq: [
      { question: 'Wat betekent factuurbeheer?', answer: 'Factuurbeheer is het organiseren, controleren en bijhouden van inkomende en uitgaande facturen, inclusief betalingen en openstaande bedragen.' },
      { question: 'Wat is digitaal factuurbeheer?', answer: 'Bij digitaal factuurbeheer bewaar en organiseer je facturen digitaal, bijvoorbeeld met PDF-bestanden, spreadsheets of software.' },
      { question: 'Wat is elektronisch factuurbeheer?', answer: 'Elektronisch factuurbeheer omvat het digitaal verwerken en uitwisselen van facturen, vaak met geautomatiseerde functies.' },
      { question: 'Wat is de beste factuurbeheeroplossing voor zzp\'ers?', answer: 'Dat hangt af van je situatie. Bij weinig facturen kan een spreadsheet voldoende zijn. Bij grotere aantallen kan software met betaalstatussen en bankkoppelingen tijd besparen.' },
      { question: 'Kan ik factuurbeheer in Excel doen?', answer: 'Ja. Met Excel kun je factuurnummers, klanten, bedragen, vervaldatums en betaalstatussen bijhouden. Je moet het overzicht wel zelf actueel houden.' },
      { question: 'Wat is het verschil tussen factuurbeheer en boekhouding?', answer: 'Factuurbeheer richt zich op het beheren van facturen en betalingen. Boekhouding omvat daarnaast de bredere financiële administratie, zoals kosten, opbrengsten, banktransacties en fiscale verwerking.' },
      { question: 'Is een PDF hetzelfde als een elektronische factuur?', answer: 'Een PDF is een digitaal document, maar niet automatisch een gestructureerde e-factuur. Gestructureerde e-facturen kunnen door geschikte systemen automatisch worden verwerkt.' },
      { question: 'Kan ik gratis facturen maken?', answer: 'Ja. Met FactuurBaas kun je gratis een factuur maken en als PDF downloaden, zonder account.' },
    ],
    content: (
      <>
        <p>Facturen versturen is één ding. Bijhouden welke facturen betaald zijn, welke nog openstaan en welke kosten je moet verwerken, is minstens zo belangrijk.</p>
        <p>Met goed <strong>factuurbeheer</strong> houd je overzicht over je inkomsten, uitgaven en openstaande betalingen. Dat kan met een eenvoudige spreadsheet, een online factuurtool of uitgebreide boekhoudsoftware.</p>
        <p>In deze gids ontdek je hoe digitaal en elektronisch factuurbeheer werkt, welke oplossingen er zijn en hoe je een overzichtelijke administratie opzet.</p>
        <p>
          Wil je eerst een factuur maken? Met{' '}
          <Link href="/create-invoice" className="text-warm-orange hover:underline">FactuurBaas</Link>{' '}
          maak je gratis een factuur als PDF, zonder account.
        </p>
        <CtaButton href="/create-invoice" label="Maak gratis een factuur" />

        <h2>Wat is factuurbeheer?</h2>
        <p>Factuurbeheer is het organiseren, controleren en bijhouden van inkomende en uitgaande facturen.</p>
        <p>Het gaat dus om meer dan alleen facturen maken.</p>
        <p>Goed factuurbeheer helpt je om:</p>
        <ul>
          <li>Facturen eenvoudig terug te vinden.</li>
          <li>Te zien welke klanten nog moeten betalen.</li>
          <li>Inkomende facturen op tijd te betalen.</li>
          <li>Dubbele betalingen en facturen te voorkomen.</li>
          <li>Je administratie voor te bereiden op de btw-aangifte.</li>
          <li>Beter inzicht te krijgen in je cashflow.</li>
        </ul>
        <h3>Inkomende en uitgaande facturen</h3>
        <p>Er zijn twee belangrijke onderdelen van factuurbeheer.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[560px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Onderdeel</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Betekenis</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Voorbeeld</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Uitgaande facturen</td>
                <td className="px-4 py-3">Facturen die jij naar klanten stuurt</td>
                <td className="px-4 py-3">€750 voor een uitgevoerde opdracht</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Inkomende facturen</td>
                <td className="px-4 py-3">Facturen die je van leveranciers ontvangt</td>
                <td className="px-4 py-3">€85 voor software of zakelijke diensten</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Bij uitgaande facturen wil je vooral weten of je klant al heeft betaald.</p>
        <p>Bij inkomende facturen wil je controleren of het bedrag klopt, wanneer je moet betalen en hoe je de kosten verwerkt.</p>

        <h2>Hoe werkt digitaal factuurbeheer?</h2>
        <p>Bij digitaal factuurbeheer sla je facturen digitaal op en houd je de bijbehorende gegevens overzichtelijk bij.</p>
        <p>Je hoeft daarvoor niet meteen uitgebreide software aan te schaffen.</p>
        <p>Een eenvoudige werkwijze bestaat uit vijf stappen.</p>
        <h3>Stap 1. Bewaar alle facturen op één plek</h3>
        <p>Maak een duidelijke mappenstructuur voor je administratie.</p>
        <p>Bijvoorbeeld:</p>
        <p><strong>Administratie 2026</strong></p>
        <ul>
          <li>Uitgaande facturen</li>
          <li>Inkomende facturen</li>
          <li>Creditfacturen</li>
          <li>Betaalbewijzen</li>
        </ul>
        <p>Je kunt daarnaast mappen per maand of kwartaal gebruiken.</p>
        <p>Gebruik herkenbare bestandsnamen, bijvoorbeeld:</p>
        <p><code>2026-018_Klantnaam_605-euro.pdf</code></p>
        <p>Zo kun je een factuur later gemakkelijk terugvinden.</p>
        <h3>Stap 2. Gebruik unieke factuurnummers</h3>
        <p>Iedere uitgaande factuur moet een uniek nummer hebben binnen een opeenvolgende nummerreeks.</p>
        <p>Bijvoorbeeld:</p>
        <p>2026-001<br />2026-002<br />2026-003</p>
        <p>Een consequente nummering helpt bij het terugvinden van facturen en het controleren van je administratie.</p>
        <h3>Stap 3. Registreer de betaalstatus</h3>
        <p>Houd bij welke facturen betaald zijn en welke nog openstaan.</p>
        <p>Dat kan met een eenvoudige spreadsheet.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[560px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Factuur</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Klant</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Bedrag</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Vervaldatum</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">2026-018</td>
                <td className="px-4 py-3">Klant A</td>
                <td className="px-4 py-3 text-right">€605</td>
                <td className="px-4 py-3">22 oktober</td>
                <td className="px-4 py-3">Betaald</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">2026-019</td>
                <td className="px-4 py-3">Klant B</td>
                <td className="px-4 py-3 text-right">€363</td>
                <td className="px-4 py-3">25 oktober</td>
                <td className="px-4 py-3">Openstaand</td>
              </tr>
              <tr>
                <td className="px-4 py-3">2026-020</td>
                <td className="px-4 py-3">Klant C</td>
                <td className="px-4 py-3 text-right">€847</td>
                <td className="px-4 py-3">30 oktober</td>
                <td className="px-4 py-3">Openstaand</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Je kunt eventueel een extra kolom toevoegen voor de betaaldatum of de datum waarop je een herinnering hebt gestuurd.</p>
        <h3>Stap 4. Controleer je banktransacties</h3>
        <p>Vergelijk ontvangen betalingen regelmatig met je openstaande facturen.</p>
        <p>Controleer:</p>
        <ul>
          <li>Of het juiste bedrag is ontvangen.</li>
          <li>Of de betaling bij de juiste factuur hoort.</li>
          <li>Of er gedeeltelijke betalingen zijn.</li>
          <li>Of een factuur mogelijk dubbel is betaald.</li>
        </ul>
        <p>Werk daarna de betaalstatus bij.</p>
        <h3>Stap 5. Controleer wekelijks openstaande facturen</h3>
        <p>Plan een vast moment om je facturen te controleren.</p>
        <p>Bekijk welke facturen binnenkort vervallen en welke al te laat zijn.</p>
        <p>Zo voorkom je dat openstaande bedragen onnodig lang blijven liggen.</p>
        <p>
          <Link href="/blogs/sneller-betalen-factuur" className="text-warm-orange hover:underline">Lees hoe je facturen sneller betaald krijgt</Link>.
        </p>

        <h2>Wat is elektronisch factuurbeheer?</h2>
        <p>Elektronisch factuurbeheer is het digitaal verwerken, uitwisselen en beheren van facturen.</p>
        <p>De term wordt vaak gebruikt voor systemen die facturen automatisch ontvangen, herkennen, controleren en verwerken.</p>
        <p>Denk aan software die:</p>
        <ul>
          <li>Factuurgegevens uit documenten haalt.</li>
          <li>Inkoopfacturen aan leveranciers koppelt.</li>
          <li>Facturen doorstuurt voor goedkeuring.</li>
          <li>Betalingen koppelt aan openstaande posten.</li>
          <li>Facturen archiveert.</li>
        </ul>
        <h3>Wat is het verschil tussen digitaal en elektronisch factuurbeheer?</h3>
        <p>De begrippen overlappen, maar er is een praktisch verschil.</p>
        <p><strong>Digitaal factuurbeheer</strong> betekent dat je facturen digitaal bewaart en organiseert.</p>
        <p><strong>Elektronisch factuurbeheer</strong> wordt vaak gebruikt voor verder geautomatiseerde verwerking en uitwisseling.</p>
        <p>Een PDF-factuur die je per e-mail ontvangt, is bijvoorbeeld een digitaal document.</p>
        <p>Een gestructureerde e-factuur in een formaat zoals UBL kan rechtstreeks door geschikte administratiesoftware worden verwerkt.</p>
        <p>Niet iedere PDF is dus automatisch een gestructureerde e-factuur.</p>

        <h2>Online factuurbeheer: welke mogelijkheden zijn er?</h2>
        <p>Er bestaan verschillende manieren om facturen online te beheren.</p>
        <p>De juiste oplossing hangt af van het aantal facturen, je budget en hoeveel automatisering je nodig hebt.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[640px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Oplossing</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Geschikt voor</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Mogelijkheden</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Spreadsheet + PDF-facturen</td>
                <td className="px-4 py-3">Starters met weinig facturen</td>
                <td className="px-4 py-3">Handmatig overzicht en opslag</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Online factuurtool</td>
                <td className="px-4 py-3">Ondernemers die eenvoudig facturen willen maken</td>
                <td className="px-4 py-3">Facturen opstellen en downloaden; beheerfuncties verschillen per aanbieder</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Factuurbeheersoftware</td>
                <td className="px-4 py-3">Ondernemers met veel facturen</td>
                <td className="px-4 py-3">Betaalstatussen, herinneringen en rapportages, afhankelijk van pakket</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Boekhoudsoftware</td>
                <td className="px-4 py-3">Ondernemers die ook hun administratie willen verwerken</td>
                <td className="px-4 py-3">Facturatie, kosten, banktransacties en boekhouding</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Gespecialiseerde inkoopfactuursoftware</td>
                <td className="px-4 py-3">Bedrijven met veel leveranciersfacturen</td>
                <td className="px-4 py-3">Herkenning, goedkeuring en automatische verwerking</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Je hoeft niet meteen de meest uitgebreide oplossing te kiezen.</p>
        <p>Voor een zzp&apos;er met vijf facturen per maand kan een eenvoudige aanpak voldoende zijn. Een bedrijf dat dagelijks tientallen facturen ontvangt, heeft waarschijnlijk meer behoefte aan automatisering.</p>

        <h2>Hoe kies je goede factuurbeheersoftware?</h2>
        <p>Let bij het vergelijken van factuurbeheeroplossingen op de functies die je daadwerkelijk gebruikt.</p>
        <h3>1. Overzicht van openstaande facturen</h3>
        <p>Kun je eenvoudig zien welke klanten nog moeten betalen?</p>
        <p>En kun je filteren op vervaldatum, klant of bedrag?</p>
        <h3>2. Automatische betalingsherinneringen</h3>
        <p>Sommige systemen kunnen herinneringen versturen wanneer een factuur niet op tijd wordt betaald.</p>
        <p>Controleer of je zelf de tekst en verzendmomenten kunt instellen.</p>
        <h3>3. Bankkoppeling</h3>
        <p>Met een bankkoppeling kunnen betalingen automatisch of gedeeltelijk automatisch aan facturen worden gekoppeld.</p>
        <p>Dit bespaart vooral tijd wanneer je veel transacties hebt.</p>
        <h3>4. Verwerking van inkomende facturen</h3>
        <p>Controleer of de software ook leveranciersfacturen ondersteunt.</p>
        <p>Niet iedere factuurtool biedt volledige inkoopfactuurverwerking.</p>
        <h3>5. Exportmogelijkheden</h3>
        <p>Kun je je facturen en administratieve gegevens exporteren?</p>
        <p>Dat is belangrijk als je later wilt overstappen naar een ander systeem of gegevens wilt delen met je boekhouder.</p>
        <h3>6. Kosten</h3>
        <p>Vergelijk niet alleen de maandprijs, maar ook eventuele beperkingen op het aantal facturen, gebruikers en koppelingen.</p>
        <p>Gratis software kan voor starters voldoende zijn, terwijl uitgebreidere functies vaak onderdeel zijn van betaalde pakketten.</p>

        <h2>Factuurbeheer in Excel of met software?</h2>
        <p>Voor kleine ondernemingen kan Excel een prima startpunt zijn.</p>
        <p>Je maakt een overzicht met factuurnummer, klant, bedrag, vervaldatum en betaalstatus.</p>
        <p>Het voordeel is dat je zelf bepaalt hoe het overzicht eruitziet.</p>
        <p>Het nadeel is dat je alle gegevens handmatig moet bijwerken.</p>
        <p>Naarmate je meer facturen verstuurt, wordt het belangrijker om fouten te voorkomen en minder tijd kwijt te zijn aan administratie.</p>
        <h3>Wanneer overstappen op software?</h3>
        <p>Overweeg uitgebreider factuurbeheer wanneer:</p>
        <ul>
          <li>Je regelmatig vergeet welke facturen openstaan.</li>
          <li>Je veel tijd kwijt bent aan het controleren van betalingen.</li>
          <li>Je meerdere mensen toegang wilt geven.</li>
          <li>Je veel leveranciersfacturen ontvangt.</li>
          <li>Je banktransacties automatisch wilt verwerken.</li>
          <li>Je administratie complexer wordt.</li>
        </ul>
        <p>
          <Link href="/blogs/beste-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">Bekijk ook onze gids over boekhoudprogramma&apos;s voor zzp&apos;ers</Link>.
        </p>

        <h2>Hoe digitaliseer je inkomende facturen?</h2>
        <p>Ontvang je nog papieren facturen of facturen verspreid over verschillende e-mailadressen?</p>
        <p>Dan kun je je inkoopfacturen stapsgewijs digitaliseren.</p>
        <p>Begin met één vast e-mailadres of een vaste map voor leveranciersfacturen.</p>
        <p>Sla binnengekomen facturen op met een herkenbare bestandsnaam.</p>
        <p>Controleer vervolgens de leverancier, het bedrag, de btw en de betaaldatum.</p>
        <p>Verwerk de factuur in je administratie en leg vast of deze al betaald is.</p>
        <p>Bij grotere aantallen kan software met factuurherkenning helpen om gegevens automatisch over te nemen.</p>
        <p>Controleer automatisch herkende gegevens wel voordat je ze verwerkt.</p>

        <h2>Hoe houd je overzicht over openstaande facturen?</h2>
        <p>Een goed overzicht laat je direct zien hoeveel geld je nog van klanten verwacht.</p>
        <p>Stel dat je drie openstaande facturen hebt:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Factuur</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Openstaand bedrag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">2026-021</td>
                <td className="px-4 py-3 text-right">€450</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">2026-022</td>
                <td className="px-4 py-3 text-right">€750</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">2026-023</td>
                <td className="px-4 py-3 text-right">€300</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal openstaand</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€1.500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Dat betekent niet dat je €1.500 direct beschikbaar hebt.</p>
        <p>Het geld moet immers nog worden betaald.</p>
        <p>Maak daarom onderscheid tussen:</p>
        <ul>
          <li><strong>Gefactureerd:</strong> bedragen die je aan klanten in rekening hebt gebracht.</li>
          <li><strong>Openstaand:</strong> bedragen die nog niet zijn ontvangen.</li>
          <li><strong>Ontvangen:</strong> bedragen die daadwerkelijk op je rekening zijn bijgeschreven.</li>
          <li><strong>Achterstallig:</strong> bedragen waarvan de vervaldatum is verstreken.</li>
        </ul>
        <p>Dat onderscheid helpt bij het plannen van je uitgaven.</p>

        <h2>Hoe lang moet je facturen bewaren?</h2>
        <p>Voor de meeste fiscale administratieve gegevens geldt in Nederland een bewaartermijn van zeven jaar.</p>
        <p>Voor bepaalde gegevens, zoals gegevens over onroerende zaken, gelden langere termijnen.</p>
        <p>Ook digitale facturen moeten gedurende de toepasselijke bewaartermijn beschikbaar en leesbaar blijven.</p>
        <p>Zorg daarom voor een betrouwbare opslaglocatie en maak regelmatig back-ups.</p>
        <p>Alleen een factuur downloaden is niet voldoende als je het bestand daarna kwijtraakt.</p>

        <h2>Veelgemaakte fouten bij factuurbeheer</h2>
        <p><strong>Facturen verspreid opslaan.</strong> Gebruik één vaste mappenstructuur of systeem.</p>
        <p><strong>Geen betaalstatus bijhouden.</strong> Registreer welke facturen betaald, openstaand of achterstallig zijn.</p>
        <p><strong>Dubbele facturen verwerken.</strong> Controleer factuurnummers en leveranciersgegevens.</p>
        <p><strong>Betalingen niet controleren.</strong> Vergelijk je administratie regelmatig met je banktransacties.</p>
        <p><strong>Geen back-ups maken.</strong> Zorg dat je bestanden niet verloren gaan bij een defect apparaat.</p>
        <p><strong>Te vroeg ingewikkelde software aanschaffen.</strong> Kies een oplossing die past bij je huidige administratie.</p>

        <h2>Gratis facturen maken met FactuurBaas</h2>
        <p>Goed factuurbeheer begint met duidelijke en correcte facturen.</p>
        <p>Met FactuurBaas kun je gratis een factuur opstellen en als PDF downloaden.</p>
        <p>Je kunt onder andere:</p>
        <ul>
          <li>Je bedrijfsgegevens en klantgegevens invullen.</li>
          <li>Producten en diensten toevoegen.</li>
          <li>Btw-bedragen laten berekenen.</li>
          <li>Een factuur als PDF downloaden.</li>
        </ul>
        <p>Een account is niet verplicht om een factuur te maken.</p>
        <p>Voor uitgebreid factuurbeheer, zoals automatische bankkoppelingen, leveranciersfactuurverwerking en betalingsherinneringen, kun je gespecialiseerde software overwegen.</p>
        <CtaButton href="/create-invoice" label="Maak gratis een factuur" />

        <h2>Veelgestelde vragen over factuurbeheer</h2>
        <h3>Wat betekent factuurbeheer?</h3>
        <p>Factuurbeheer is het organiseren, controleren en bijhouden van inkomende en uitgaande facturen, inclusief betalingen en openstaande bedragen.</p>
        <h3>Wat is digitaal factuurbeheer?</h3>
        <p>Bij digitaal factuurbeheer bewaar en organiseer je facturen digitaal, bijvoorbeeld met PDF-bestanden, spreadsheets of software.</p>
        <h3>Wat is elektronisch factuurbeheer?</h3>
        <p>Elektronisch factuurbeheer omvat het digitaal verwerken en uitwisselen van facturen, vaak met geautomatiseerde functies.</p>
        <h3>Wat is de beste factuurbeheeroplossing voor zzp&apos;ers?</h3>
        <p>Dat hangt af van je situatie. Bij weinig facturen kan een spreadsheet voldoende zijn. Bij grotere aantallen kan software met betaalstatussen en bankkoppelingen tijd besparen.</p>
        <h3>Kan ik factuurbeheer in Excel doen?</h3>
        <p>Ja. Met Excel kun je factuurnummers, klanten, bedragen, vervaldatums en betaalstatussen bijhouden. Je moet het overzicht wel zelf actueel houden.</p>
        <h3>Wat is het verschil tussen factuurbeheer en boekhouding?</h3>
        <p>Factuurbeheer richt zich op het beheren van facturen en betalingen. Boekhouding omvat daarnaast de bredere financiële administratie, zoals kosten, opbrengsten, banktransacties en fiscale verwerking.</p>
        <h3>Is een PDF hetzelfde als een elektronische factuur?</h3>
        <p>Een PDF is een digitaal document, maar niet automatisch een gestructureerde e-factuur. Gestructureerde e-facturen kunnen door geschikte systemen automatisch worden verwerkt.</p>
        <h3>Kan ik gratis facturen maken?</h3>
        <p>Ja. Met FactuurBaas kun je gratis een factuur maken en als PDF downloaden, zonder account.</p>

        <h2>Begin met overzichtelijk factuurbeheer</h2>
        <p>Je hoeft niet direct een uitgebreid systeem te gebruiken om grip te krijgen op je facturen.</p>
        <p>Begin met een duidelijke nummering, één opslaglocatie en een actueel overzicht van openstaande betalingen.</p>
        <p>Naarmate je onderneming groeit, kun je meer automatiseren of overstappen op software.</p>
        <p><strong>Met FactuurBaas maak je gratis een factuur als PDF, zonder account of abonnement.</strong></p>
        <CtaButton href="/create-invoice" label="Maak gratis een factuur" />
      </>
    )
  },
  {
    slug: 'sneller-betalen-factuur',
    relatedSlugs: ['factuur-maken-zzp', 'factuur-fouten-voorkomen', 'factuurbeheer-overzicht', 'gratis-factuur-zzp'],
    metaTitle: 'Factuur sneller betaald krijgen? 9 praktische tips',
    title: 'Factuur sneller betaald krijgen: 9 praktische tips',
    breadcrumbLabel: 'Factuur sneller betaald krijgen',
    excerpt: 'Wil je je factuur eerder betaald krijgen? Ontdek 9 praktische tips over betalingstermijnen, herinneringen, betaallinks en korting voor snelle betaling.',
    keywords: 'factuur sneller betaald krijgen, factuur eerder betaald krijgen, factuur snel betaald krijgen, facturen sneller betaald krijgen, betalingstermijn zzp',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/De%20beste%20manier%20om%20sneller%20betaald%20te%20krijgen%20als%20zzp%20er.png',
      alt: 'Factuur sneller betaald krijgen: 9 praktische tips voor zzp\'ers.',
    },
    datePublished: '2026-02-01',
    dateModified: '2026-10-08',
    faq: [
      { question: 'Hoe krijg ik mijn factuur sneller betaald?', answer: 'Verstuur je factuur direct, spreek vooraf een duidelijke betalingstermijn af, maak betalen eenvoudig en stuur tijdig een herinnering wanneer de vervaldatum is verstreken.' },
      { question: 'Kan ik als zzp\'er een betalingstermijn van 14 dagen gebruiken?', answer: 'Ja, in veel situaties kun je een termijn van 14 dagen afspreken. Zorg dat de klant vooraf akkoord gaat en houd rekening met de toepasselijke wettelijke regels.' },
      { question: 'Mag ik korting geven als een klant eerder betaalt?', answer: 'Ja. Je kunt betalingskorting afspreken. Let wel op de btw-verwerking en zorg dat de voorwaarden duidelijk zijn.' },
      { question: 'Kan ik een klant verplichten om direct te betalen?', answer: 'Dat hangt af van de overeenkomst en de toepasselijke wetgeving. Je kunt niet zonder meer achteraf een overeengekomen betalingstermijn wijzigen.' },
      { question: 'Wat doe ik als mijn factuur 30 dagen te laat is?', answer: 'Controleer eerst de afspraken en betalingen. Neem contact op met de klant en stuur zo nodig een herinnering of formele aanmaning. Welke vervolgstappen mogelijk zijn, hangt af van het soort klant en de situatie.' },
      { question: 'Is factoring geschikt voor zzp\'ers?', answer: 'Sommige factoringbedrijven werken met zzp\'ers. De mogelijkheden en kosten hangen onder andere af van de factuur, de klant en het financieringsmodel.' },
      { question: 'Kan ik een betaallink toevoegen aan mijn factuur?', answer: 'Ja, met een geschikte betaaldienst kun je een betaallink of QR-code aanbieden. Dit is geen standaard geïntegreerde functie van FactuurBaas.' },
      { question: 'Hoe kan ik gratis een factuur maken?', answer: 'Met FactuurBaas kun je online een factuur opstellen, de bedragen laten berekenen en de factuur als PDF downloaden zonder account.' },
    ],
    content: (
      <>
        <p>Je hebt je werk afgerond en de factuur verstuurd. Maar vervolgens moet je weken wachten voordat het geld op je rekening staat.</p>
        <p>Voor zzp&apos;ers en kleine ondernemers kan dat vervelend zijn. Je vaste kosten lopen door, terwijl klanten soms pas na 30 dagen of nog later betalen.</p>
        <p>Gelukkig kun je zelf veel doen om je <strong>factuur sneller betaald te krijgen</strong>. Van duidelijke betalingsafspraken tot herinneringen en korting voor vroege betaling.</p>
        <p>Hieronder vind je negen praktische tips, inclusief voorbeelden die je direct kunt gebruiken.</p>

        <h2>1. Verstuur je factuur direct na de werkzaamheden</h2>
        <p>Hoe langer je wacht met factureren, hoe later je doorgaans betaald krijgt.</p>
        <p>Stel dat je op 1 oktober een opdracht afrondt, maar pas op 15 oktober de factuur verstuurt met een betalingstermijn van 30 dagen.</p>
        <p>Dan verschuift de vervaldatum van 31 oktober naar 14 november.</p>
        <p>Je hebt zelf twee weken extra wachttijd gecreëerd.</p>
        <p><strong>Tip:</strong> maak er een gewoonte van om je factuur direct na afronding van een opdracht te versturen, tenzij je andere factureringsafspraken hebt gemaakt.</p>
        <p>
          Met{' '}
          <Link href="/create-invoice" className="text-warm-orange hover:underline">FactuurBaas</Link>{' '}
          kun je gratis een factuur maken en als PDF downloaden.
        </p>
        <CtaButton href="/create-invoice" label="Maak gratis een factuur" />

        <h2>2. Spreek vooraf een duidelijke betalingstermijn af</h2>
        <p>Veel zzp&apos;ers gebruiken een betalingstermijn van 14 of 30 dagen.</p>
        <p>Een kortere betalingstermijn kan je helpen om eerder betaald te krijgen, maar je kunt niet altijd eenzijdig een termijn opleggen.</p>
        <p>De afspraken met je klant en de wettelijke regels zijn bepalend.</p>
        <h3>Wat is de wettelijke betalingstermijn?</h3>
        <p>Bij zakelijke transacties geldt in Nederland doorgaans:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[560px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Situatie</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Hoofdregel</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Geen betalingstermijn afgesproken tussen bedrijven</td>
                <td className="px-4 py-3">30 dagen</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Betaling door grootbedrijf aan mkb of zzp&apos;er</td>
                <td className="px-4 py-3">Maximaal 30 dagen</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Betaling door overheid</td>
                <td className="px-4 py-3">In beginsel 30 dagen</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Overige zakelijke afspraken</td>
                <td className="px-4 py-3">Vaak maximaal 60 dagen, met beperkte uitzonderingen</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Particuliere klant</td>
                <td className="px-4 py-3">Geen algemene vaste wettelijke betalingstermijn; de termijn moet redelijk zijn</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Wil je een termijn van 14 dagen gebruiken? Spreek dit dan vooraf af, bijvoorbeeld in je offerte of overeenkomst.</p>
        <h3>Voorbeeld betalingstermijn</h3>
        <p>Factuurdatum: 8 oktober 2026</p>
        <p>Afgesproken betalingstermijn: 14 dagen</p>
        <p>Vervaldatum: 22 oktober 2026</p>
        <p>Vermeld op de factuur:</p>
        <p><em>Graag het factuurbedrag uiterlijk 22 oktober 2026 overmaken onder vermelding van het factuurnummer.</em></p>
        <p>
          <Link href="/tools/betaaltermijn-calculator" className="text-warm-orange hover:underline">Bereken je vervaldatum met de gratis betaaltermijn-calculator</Link>.
        </p>

        <h2>3. Maak betalen zo eenvoudig mogelijk</h2>
        <p>Hoe meer handelingen een klant moet uitvoeren, hoe groter de kans dat betaling wordt uitgesteld.</p>
        <p>Zorg daarom dat de betaalgegevens duidelijk zichtbaar zijn.</p>
        <p>Vermeld:</p>
        <ul>
          <li>Het totale factuurbedrag.</li>
          <li>Je IBAN.</li>
          <li>De tenaamstelling.</li>
          <li>Het factuurnummer.</li>
          <li>De uiterste betaaldatum.</li>
        </ul>
        <p>Je kunt daarnaast een betaallink of betaal-QR-code gebruiken via een geschikte betaaldienst.</p>
        <p>Zo hoeft je klant minder gegevens handmatig over te nemen.</p>
        <p>Let op: FactuurBaas biedt momenteel geen standaard geïntegreerde betaallink aan. Je kunt wel een PDF-factuur maken en die combineren met een afzonderlijk betaalverzoek.</p>

        <h2>4. Voorkom fouten en discussies over je factuur</h2>
        <p>Een klant die vragen heeft over een factuur, betaalt mogelijk pas nadat die vragen zijn opgelost.</p>
        <p>Controleer daarom vooraf:</p>
        <ul>
          <li>Zijn de klantgegevens correct?</li>
          <li>Komt het bedrag overeen met de offerte?</li>
          <li>Zijn de werkzaamheden duidelijk omschreven?</li>
          <li>Kloppen de uren en tarieven?</li>
          <li>Is het juiste btw-tarief gebruikt?</li>
          <li>Is de betalingstermijn duidelijk?</li>
        </ul>
        <p>Bij opdrachten op uurbasis is het verstandig om je urenregistratie bij te houden en eventueel vooraf te laten goedkeuren.</p>
        <p>Dat voorkomt discussies achteraf.</p>
        <p>
          <Link href="/blogs/factuur-fouten-voorkomen" className="text-warm-orange hover:underline">Bekijk de 7 veelgemaakte fouten op facturen</Link>.
        </p>

        <h2>5. Stuur een vriendelijke betalingsherinnering</h2>
        <p>Is de vervaldatum verstreken?</p>
        <p>Stuur dan tijdig een vriendelijke herinnering.</p>
        <p>Soms is een factuur simpelweg over het hoofd gezien of bij de verkeerde afdeling terechtgekomen.</p>
        <h3>Voorbeeld eerste betalingsherinnering</h3>
        <p><strong>Onderwerp: Herinnering factuur 2026-018</strong></p>
        <p>Beste [naam],</p>
        <p>Volgens mijn administratie staat factuur 2026-018 van €605 nog open. De vervaldatum was 22 oktober.</p>
        <p>Zou je kunnen controleren of de betaling al is ingepland?</p>
        <p>Alvast bedankt!</p>
        <p>Met vriendelijke groet,<br />[Je naam]</p>
        <p>Houd de eerste herinnering vriendelijk en feitelijk.</p>
        <p>Bij particuliere klanten gelden specifieke regels voordat je incassokosten in rekening mag brengen. Een gewone vriendelijke herinnering is niet automatisch een juridisch correcte veertiendagenbrief.</p>

        <h2>6. Bied korting voor snelle betaling</h2>
        <p>Een andere mogelijkheid is om klanten een kleine korting te geven wanneer ze eerder betalen.</p>
        <p>Dit wordt ook wel <strong>betalingskorting</strong> of <em>early payment discount</em> genoemd.</p>
        <p>Bijvoorbeeld:</p>
        <p>Je stuurt een factuur van €1.000 met een betalingstermijn van 30 dagen.</p>
        <p>Je spreekt vooraf af dat de klant 2% korting krijgt wanneer hij binnen zeven dagen betaalt.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[360px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Betaalmoment</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Bedrag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Binnen 7 dagen</td>
                <td className="px-4 py-3 text-right">€980</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Na 7 dagen, uiterlijk op vervaldatum</td>
                <td className="px-4 py-3 text-right">€1.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>De klant bespaart €20 en jij ontvangt het geld mogelijk eerder.</p>
        <h3>Is korting voor snelle betaling verstandig?</h3>
        <p>Dat hangt af van je winstmarge en hoeveel waarde je hecht aan eerdere betaling.</p>
        <p>Een korting van 2% lijkt klein, maar kan relatief duur zijn als je daarmee slechts enkele weken betalingstijd wint.</p>
        <p><strong>Belangrijk:</strong> betalingskorting kan gevolgen hebben voor de btw-berekening en factuurcorrecties. Leg de voorwaarden duidelijk vast en verwerk de korting correct in je administratie.</p>

        <h2>7. Vraag bij grote opdrachten een aanbetaling</h2>
        <p>Bij grotere projecten hoef je niet altijd te wachten totdat alle werkzaamheden zijn afgerond.</p>
        <p>Je kunt bijvoorbeeld vooraf een aanbetaling of een betaling per projectfase afspreken.</p>
        <p>Voorbeeld van een zakelijke opdracht van €3.000 exclusief btw:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[420px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Moment</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Deel</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Bedrag excl. btw</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Bij start</td>
                <td className="px-4 py-3 text-right">30%</td>
                <td className="px-4 py-3 text-right">€900</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Halverwege</td>
                <td className="px-4 py-3 text-right">40%</td>
                <td className="px-4 py-3 text-right">€1.200</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Bij oplevering</td>
                <td className="px-4 py-3 text-right">30%</td>
                <td className="px-4 py-3 text-right">€900</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Zo ontvang je gedurende het project al betalingen en hoef je niet het volledige bedrag voor te financieren.</p>
        <p>Leg de afspraken vooraf schriftelijk vast.</p>
        <p>Houd er rekening mee dat voor aanbetalingen btw- en factureringsregels kunnen gelden. Bij consumenten bestaan bovendien specifieke beperkingen voor verplichte vooruitbetaling in bepaalde situaties.</p>

        <h2>8. Houd openstaande facturen actief bij</h2>
        <p>Als je niet weet welke facturen nog openstaan, is het moeilijk om tijdig op te volgen.</p>
        <p>Gebruik daarom een eenvoudig overzicht.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Factuur</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Vervaldatum</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Bedrag</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">2026-018</td>
                <td className="px-4 py-3">22 oktober</td>
                <td className="px-4 py-3 text-right">€605</td>
                <td className="px-4 py-3">Openstaand</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">2026-019</td>
                <td className="px-4 py-3">28 oktober</td>
                <td className="px-4 py-3 text-right">€363</td>
                <td className="px-4 py-3">Betaald</td>
              </tr>
              <tr>
                <td className="px-4 py-3">2026-020</td>
                <td className="px-4 py-3">5 november</td>
                <td className="px-4 py-3 text-right">€847</td>
                <td className="px-4 py-3">Openstaand</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Controleer dit overzicht bijvoorbeeld iedere week.</p>
        <p>Zo zie je direct welke facturen binnenkort vervallen en welke klanten je moet benaderen.</p>
        <p>Bewaar ook je verzonden herinneringen en eventuele betalingsafspraken.</p>

        <h2>9. Onderzoek financiering als je niet kunt wachten</h2>
        <p>Soms heb je het geld eerder nodig dan je klant volgens de afgesproken termijn hoeft te betalen.</p>
        <p>Dan kun je onderzoeken of factuurfinanciering of factoring geschikt is.</p>
        <p>Bij factoring wordt een factuur of vordering onder bepaalde voorwaarden overgedragen aan een financieringspartij.</p>
        <p>Je ontvangt dan mogelijk eerder een groot deel van het bedrag.</p>
        <p>Daar staan kosten en voorwaarden tegenover.</p>
        <p>Let bijvoorbeeld op:</p>
        <ul>
          <li>Hoeveel je vooraf ontvangt.</li>
          <li>Welke vergoeding de financier rekent.</li>
          <li>Wie het risico draagt als de klant niet betaalt.</li>
          <li>Of de financier de klant rechtstreeks benadert.</li>
          <li>Of de financiering past bij jouw type klanten en facturen.</li>
        </ul>
        <p>Factuurfinanciering is niet voor iedere zzp&apos;er beschikbaar of financieel aantrekkelijk.</p>
        <p>Vergelijk de totale kosten altijd met het voordeel van eerder betaald worden.</p>

        <h2>Voorbeeld: van 30 dagen wachten naar eerder betaald krijgen</h2>
        <p>Stel dat je op 1 oktober een opdracht afrondt van €2.000.</p>
        <p>Zonder duidelijke afspraken stuur je de factuur pas op 10 oktober, met een betalingstermijn van 30 dagen.</p>
        <p>De vervaldatum wordt dan 9 november.</p>
        <p>Maar met een betere werkwijze kan het anders.</p>
        <p><strong>Voorbeeld van een snellere aanpak:</strong></p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Moment</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Actie</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Voor de opdracht</td>
                <td className="px-4 py-3">Spreek 14 dagen betalingstermijn af</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">1 oktober</td>
                <td className="px-4 py-3">Rond de werkzaamheden af</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">1 oktober</td>
                <td className="px-4 py-3">Verstuur direct de factuur</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">8 oktober</td>
                <td className="px-4 py-3">Controleer of de factuur goed is ontvangen</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">15 oktober</td>
                <td className="px-4 py-3">Vervaldatum bij een termijn van 14 dagen</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Na vervaldatum</td>
                <td className="px-4 py-3">Stuur zo nodig een herinnering</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Dit garandeert geen betaling binnen 14 dagen, maar voorkomt onnodige vertraging aan jouw kant.</p>

        <h2>Wat als je factuur niet betaald wordt?</h2>
        <p>Wanneer een klant ondanks herinneringen niet betaalt, kun je verdere stappen overwegen.</p>
        <p>Begin met persoonlijk contact. Vraag of de factuur correct is ontvangen en of er een reden is waarom de betaling uitblijft.</p>
        <p>Blijft betaling uit, dan kun je afhankelijk van de situatie een formele aanmaning sturen, wettelijke rente of incassokosten vorderen en eventueel een incassodienstverlener inschakelen.</p>
        <p>Bij consumenten moet je voordat je incassokosten rekent aan de wettelijke vereisten voor een kosteloze veertiendagenaanmaning voldoen.</p>
        <p>Bij zakelijke klanten gelden andere regels.</p>
        <p>Ga niet automatisch incassokosten rekenen zonder te controleren welke voorwaarden van toepassing zijn.</p>

        <h2>Veelgestelde vragen over facturen sneller betaald krijgen</h2>
        <h3>Hoe krijg ik mijn factuur sneller betaald?</h3>
        <p>Verstuur je factuur direct, spreek vooraf een duidelijke betalingstermijn af, maak betalen eenvoudig en stuur tijdig een herinnering wanneer de vervaldatum is verstreken.</p>
        <h3>Kan ik als zzp&apos;er een betalingstermijn van 14 dagen gebruiken?</h3>
        <p>Ja, in veel situaties kun je een termijn van 14 dagen afspreken. Zorg dat de klant vooraf akkoord gaat en houd rekening met de toepasselijke wettelijke regels.</p>
        <h3>Mag ik korting geven als een klant eerder betaalt?</h3>
        <p>Ja. Je kunt betalingskorting afspreken. Let wel op de btw-verwerking en zorg dat de voorwaarden duidelijk zijn.</p>
        <h3>Kan ik een klant verplichten om direct te betalen?</h3>
        <p>Dat hangt af van de overeenkomst en de toepasselijke wetgeving. Je kunt niet zonder meer achteraf een overeengekomen betalingstermijn wijzigen.</p>
        <h3>Wat doe ik als mijn factuur 30 dagen te laat is?</h3>
        <p>Controleer eerst de afspraken en betalingen. Neem contact op met de klant en stuur zo nodig een herinnering of formele aanmaning. Welke vervolgstappen mogelijk zijn, hangt af van het soort klant en de situatie.</p>
        <h3>Is factoring geschikt voor zzp&apos;ers?</h3>
        <p>Sommige factoringbedrijven werken met zzp&apos;ers. De mogelijkheden en kosten hangen onder andere af van de factuur, de klant en het financieringsmodel.</p>
        <h3>Kan ik een betaallink toevoegen aan mijn factuur?</h3>
        <p>Ja, met een geschikte betaaldienst kun je een betaallink of QR-code aanbieden. Dit is geen standaard geïntegreerde functie van FactuurBaas.</p>
        <h3>Hoe kan ik gratis een factuur maken?</h3>
        <p>Met FactuurBaas kun je online een factuur opstellen, de bedragen laten berekenen en de factuur als PDF downloaden zonder account.</p>

        <h2>Begin met een duidelijke factuur</h2>
        <p>Sneller betaald krijgen begint met goede afspraken, een correcte factuur en consequente opvolging.</p>
        <p>Je hebt niet altijd dure software of ingewikkelde betaaloplossingen nodig.</p>
        <p><strong>Met FactuurBaas maak je gratis een professionele factuur, inclusief duidelijke betaalgegevens en vervaldatum.</strong></p>
        <CtaButton href="/create-invoice" label="Maak gratis een factuur" />
      </>
    )
  },
    {
    slug: 'factuur-pdf-downloaden',
    relatedSlugs: ['factuur-maken-zzp', 'gratis-factuur-zzp', 'factuur-fouten-voorkomen', 'factuur-templates-zzp'],
    metaTitle: 'Factuur als PDF maken en downloaden | Gratis',
    title: 'Factuur als PDF maken en gratis downloaden',
    breadcrumbLabel: 'Factuur als PDF maken',
    excerpt: 'Gratis een factuur als PDF maken? Vul je gegevens in, bekijk het voorbeeld en download direct je factuur. Zonder account, ook op je telefoon.',
    keywords: 'factuur pdf, pdf factuur maken, factuur downloaden, factuur maken pdf, factuur printen, factuur voorbeeld pdf',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Hoe%20je%20eenvoudig%20een%20factuur%20PDF%20downloadt%20en%20verstuurt.png',
      alt: 'Factuur als PDF maken en gratis downloaden, zonder account.',
    },
    datePublished: '2026-02-01',
    dateModified: '2026-10-08',
    faq: [
      { question: 'Hoe kan ik gratis een factuur als PDF maken?', answer: 'Open FactuurBaas, vul de factuurgegevens in, controleer de bedragen en klik op Download PDF. Je hebt geen account nodig.' },
      { question: 'Kan ik een factuur downloaden zonder account?', answer: 'Ja. Met FactuurBaas kun je gratis een factuur maken en downloaden zonder registratie.' },
      { question: 'Kan ik een PDF-factuur aanpassen?', answer: 'Ja, PDF-bestanden kunnen met geschikte software worden bewerkt. Wanneer een factuur al is uitgereikt, moet je eventuele correcties wel op een administratief juiste manier verwerken.' },
      { question: 'Kan ik een factuur als PDF printen?', answer: 'Ja. Open de PDF en kies Afdrukken. Je kunt de factuur vervolgens op papier bewaren of versturen.' },
      { question: 'Kan ik een PDF-factuur via e-mail sturen?', answer: 'Ja. Download de PDF en voeg deze als bijlage toe aan een e-mail aan je klant.' },
      { question: 'Is een PDF-factuur hetzelfde als een e-factuur?', answer: 'Niet altijd. Een gewone PDF is een digitaal document, terwijl een gestructureerde e-factuur gegevens bevat die automatisch door boekhoudsystemen kunnen worden verwerkt.' },
      { question: 'Kan ik een factuur als PDF maken op mijn telefoon?', answer: 'Ja. FactuurBaas werkt via je mobiele browser, zodat je een factuur kunt invullen en downloaden.' },
      { question: 'Moet ik betalen om een factuur als PDF te downloaden?', answer: 'Nee. FactuurBaas biedt gratis PDF-downloads zonder verplicht account of abonnement.' },
    ],
    content: (
      <>
        <p>Wil je een factuur als PDF maken en direct downloaden? Dat kan eenvoudig online, zonder Word, Excel of een betaald factuurprogramma.</p>
        <p>Met FactuurBaas vul je je bedrijfsgegevens, klantgegevens en werkzaamheden in. De bedragen worden automatisch berekend en je kunt de factuur vervolgens als PDF downloaden.</p>
        <p><strong>Gratis, zonder account en geschikt voor zzp&apos;ers en kleine ondernemers.</strong></p>
        <CtaButton href="/create-invoice" label="Maak gratis een PDF-factuur" />

        <h2>Hoe maak je een factuur als PDF?</h2>
        <p>Een PDF-factuur maken bestaat uit vier eenvoudige stappen.</p>
        <h3>Stap 1: Vul je bedrijfsgegevens in</h3>
        <p>Begin met de gegevens van je onderneming:</p>
        <ul>
          <li>Bedrijfsnaam en adres.</li>
          <li>KvK-nummer, indien van toepassing.</li>
          <li>Btw-identificatienummer, indien vereist.</li>
          <li>Je betaalgegevens.</li>
        </ul>
        <p>Vul daarna de naam en het adres van je klant in.</p>
        <h3>Stap 2: Voeg je werkzaamheden of producten toe</h3>
        <p>Beschrijf wat je hebt geleverd en vermeld het aantal en de prijs.</p>
        <p>Bijvoorbeeld:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[520px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Omschrijving</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Aantal</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Tarief</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Bedrag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Website onderhoud</td>
                <td className="px-4 py-3 text-right">3 uur</td>
                <td className="px-4 py-3 text-right">€60</td>
                <td className="px-4 py-3 text-right">€180</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">SEO-advies</td>
                <td className="px-4 py-3 text-right">2 uur</td>
                <td className="px-4 py-3 text-right">€75</td>
                <td className="px-4 py-3 text-right">€150</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue" colSpan={3}>Subtotaal excl. btw</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€330</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Kies vervolgens het toepasselijke btw-tarief. FactuurBaas berekent de btw op basis van de ingevulde bedragen en tarieven.</p>
        <h3>Stap 3: Controleer je factuur</h3>
        <p>Bekijk de factuur voordat je deze downloadt.</p>
        <p>Controleer vooral:</p>
        <ul>
          <li>Factuurnummer en factuurdatum.</li>
          <li>Bedrijfsgegevens en klantgegevens.</li>
          <li>Omschrijving van de werkzaamheden.</li>
          <li>Btw-tarief en totaalbedrag.</li>
          <li>IBAN en betalingstermijn.</li>
        </ul>
        <p>Een PDF kan er professioneel uitzien en toch onjuiste gegevens bevatten. Controleer daarom altijd de inhoud.</p>
        <h3>Stap 4: Download de factuur als PDF</h3>
        <p>Zijn alle gegevens correct?</p>
        <p>Klik dan op <strong>Download PDF</strong>.</p>
        <p>Je browser downloadt het bestand, waarna je het kunt bewaren, printen of als bijlage naar je klant kunt sturen.</p>
        <p>Je hebt hiervoor geen account nodig.</p>
        <CtaButton href="/create-invoice" label="Download je gratis factuur als PDF" />

        <h2>Voorbeeld factuur PDF</h2>
        <p>Wil je eerst zien hoe een factuur eruitziet?</p>
        <p>Hieronder staat een vereenvoudigd voorbeeld van de bedragen op een PDF-factuur.</p>
        <p><strong>FACTUUR</strong></p>
        <p>
          Jansen Marketing<br />
          Voorbeeldstraat 12<br />
          1012 AB Amsterdam
        </p>
        <p>
          Aan: De Vries Webshops<br />
          Factuurnummer: 2026-018<br />
          Factuurdatum: 8 oktober 2026
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Omschrijving</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Bedrag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Website onderhoud</td>
                <td className="px-4 py-3 text-right">€180,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">SEO-advies</td>
                <td className="px-4 py-3 text-right">€150,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Subtotaal excl. btw</td>
                <td className="px-4 py-3 text-right">€330,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw 21%</td>
                <td className="px-4 py-3 text-right">€69,30</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal incl. btw</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€399,30</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Betalingstermijn: 14 dagen</p>
        <p>Dit is een vereenvoudigd voorbeeld. Een echte factuur moet alle toepasselijke verplichte gegevens bevatten, waaronder de leverdatum en relevante btw-gegevens.</p>
        <p>Met FactuurBaas kun je een volledige factuur opstellen en als PDF downloaden.</p>
        <p>
          <Link href="/factuur-voorbeeld/zzp" className="text-warm-orange hover:underline">Bekijk ook het complete factuurvoorbeeld</Link>.
        </p>

        <h2>Waarom een factuur als PDF versturen?</h2>
        <p>PDF is een veelgebruikt bestandsformaat voor facturen.</p>
        <p>Het heeft verschillende praktische voordelen.</p>
        <h3>De opmaak blijft behouden</h3>
        <p>Een PDF behoudt doorgaans dezelfde indeling op verschillende computers en telefoons.</p>
        <p>Dat is handig wanneer je wilt dat de ontvanger je factuur ziet zoals jij hem hebt opgesteld.</p>
        <h3>Eenvoudig als bijlage versturen</h3>
        <p>Je kunt een PDF toevoegen aan een e-mail of delen via een berichtendienst.</p>
        <p>De ontvanger heeft geen speciaal tekstverwerkingsprogramma nodig om het bestand te openen.</p>
        <h3>Geschikt om te printen</h3>
        <p>Een PDF is eenvoudig af te drukken op A4-formaat.</p>
        <h3>Gemakkelijk bewaren</h3>
        <p>Je kunt PDF-facturen opslaan in je administratie en terugvinden op basis van factuurnummer of klantnaam.</p>
        <p><strong>Let op:</strong> een PDF is niet automatisch beveiligd tegen wijzigingen. Ook PDF-bestanden kunnen worden bewerkt.</p>

        <h2>Factuur PDF of Word en Excel?</h2>
        <p>Je kunt een factuur maken in verschillende programma&apos;s.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[560px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Methode</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Voordeel</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Nadeel</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Word</td>
                <td className="px-4 py-3">Zelf de opmaak bepalen</td>
                <td className="px-4 py-3">Handmatig bedragen controleren</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Excel</td>
                <td className="px-4 py-3">Formules voor berekeningen</td>
                <td className="px-4 py-3">Formule- en invoerfouten mogelijk</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Online factuurmaker</td>
                <td className="px-4 py-3">Vaste structuur en berekeningen</td>
                <td className="px-4 py-3">Gegevens moeten correct worden ingevuld</td>
              </tr>
              <tr>
                <td className="px-4 py-3">PDF</td>
                <td className="px-4 py-3">Geschikt om te delen en bewaren</td>
                <td className="px-4 py-3">Minder handig om inhoud achteraf te wijzigen</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Word en Excel zijn hulpmiddelen om een factuur op te stellen. PDF is vooral een bestandsformaat waarin je de uiteindelijke factuur kunt bewaren en versturen.</p>
        <p>Met FactuurBaas maak je de factuur online en download je direct de PDF.</p>

        <h2>Factuur als PDF versturen per e-mail</h2>
        <p>Heb je je factuur gedownload? Dan kun je deze als bijlage naar je klant sturen.</p>
        <p>Gebruik een duidelijk onderwerp, bijvoorbeeld:</p>
        <p><strong>Factuur 2026-018 – Jansen Marketing</strong></p>
        <p>Je kunt de volgende e-mailtekst gebruiken:</p>
        <p><em>Beste [naam],</em></p>
        <p><em>Bijgevoegd vind je factuur 2026-018 voor de uitgevoerde werkzaamheden.</em></p>
        <p><em>Het totaalbedrag is €399,30 en de vervaldatum is 22 oktober 2026.</em></p>
        <p><em>Alvast bedankt voor de betaling.</em></p>
        <p><em>Met vriendelijke groet,</em></p>
        <p><em>[Je naam]</em></p>
        <p>Voeg de PDF toe als bijlage en controleer het e-mailadres voordat je de factuur verstuurt.</p>

        <h2>Factuur PDF printen</h2>
        <p>Wil je een factuur op papier bewaren of per post versturen?</p>
        <p>Dat kan eenvoudig.</p>
        <ol>
          <li>Open de gedownloade PDF.</li>
          <li>Kies <strong>Afdrukken</strong> of gebruik Ctrl+P op Windows of Cmd+P op Mac.</li>
          <li>Selecteer je printer.</li>
          <li>Controleer de papierinstellingen.</li>
          <li>Print de factuur.</li>
        </ol>
        <p>Bewaar daarnaast een digitale kopie voor je administratie.</p>

        <h2>Factuur als PDF maken op je telefoon</h2>
        <p>Je hebt niet per se een computer nodig om een factuur te maken.</p>
        <p>Met FactuurBaas kun je ook op je telefoon:</p>
        <ul>
          <li>De factuurmaker openen.</li>
          <li>Je gegevens invullen.</li>
          <li>Producten of werkzaamheden toevoegen.</li>
          <li>De bedragen controleren.</li>
          <li>Je factuur als PDF downloaden.</li>
        </ul>
        <p>Daarna kun je het bestand vanuit je telefoon delen of toevoegen aan een e-mail.</p>
        <p>FactuurBaas is ook als web-app aan je beginscherm toe te voegen.</p>

        <h2>Is een PDF-factuur rechtsgeldig?</h2>
        <p>Ja. Een factuur in PDF-formaat kan een geldige factuur zijn, zolang deze voldoet aan de toepasselijke wettelijke eisen.</p>
        <p>Het bestandsformaat alleen bepaalt niet of een factuur geldig is.</p>
        <p>Belangrijk zijn onder andere de vereiste factuurgegevens, de leesbaarheid en het waarborgen van de authenticiteit van de herkomst en de integriteit van de inhoud.</p>
        <p>Een gewone PDF-factuur is bovendien niet hetzelfde als een gestructureerde elektronische factuur, zoals een UBL- of Peppol-factuur.</p>
        <p>Voor sommige afnemers, waaronder bepaalde overheidsorganisaties, kunnen specifieke eisen aan elektronische facturatie gelden.</p>

        <h2>Veelgemaakte fouten bij PDF-facturen</h2>
        <p>Ook bij een PDF-factuur kunnen fouten ontstaan.</p>
        <p><strong>Een verkeerd factuurnummer gebruiken.</strong> Controleer dat ieder nummer uniek is.</p>
        <p><strong>Het verkeerde btw-tarief selecteren.</strong> Een automatische berekening helpt niet wanneer het gekozen tarief onjuist is.</p>
        <p><strong>De verkeerde klantgegevens invullen.</strong> Controleer de naam en het adres.</p>
        <p><strong>Een oude versie versturen.</strong> Download en verstuur altijd de definitieve versie.</p>
        <p><strong>De factuur niet bewaren.</strong> Zorg dat je een kopie beschikbaar houdt voor je administratie.</p>
        <p>
          <Link href="/blogs/factuur-fouten-voorkomen" className="text-warm-orange hover:underline">Bekijk de 7 veelgemaakte fouten op facturen</Link>.
        </p>

        <h2>Veelgestelde vragen over PDF-facturen</h2>
        <h3>Hoe kan ik gratis een factuur als PDF maken?</h3>
        <p>Open FactuurBaas, vul de factuurgegevens in, controleer de bedragen en klik op Download PDF. Je hebt geen account nodig.</p>
        <h3>Kan ik een factuur downloaden zonder account?</h3>
        <p>Ja. Met FactuurBaas kun je gratis een factuur maken en downloaden zonder registratie.</p>
        <h3>Kan ik een PDF-factuur aanpassen?</h3>
        <p>Ja, PDF-bestanden kunnen met geschikte software worden bewerkt. Wanneer een factuur al is uitgereikt, moet je eventuele correcties wel op een administratief juiste manier verwerken.</p>
        <h3>Kan ik een factuur als PDF printen?</h3>
        <p>Ja. Open de PDF en kies Afdrukken. Je kunt de factuur vervolgens op papier bewaren of versturen.</p>
        <h3>Kan ik een PDF-factuur via e-mail sturen?</h3>
        <p>Ja. Download de PDF en voeg deze als bijlage toe aan een e-mail aan je klant.</p>
        <h3>Is een PDF-factuur hetzelfde als een e-factuur?</h3>
        <p>Niet altijd. Een gewone PDF is een digitaal document, terwijl een gestructureerde e-factuur gegevens bevat die automatisch door boekhoudsystemen kunnen worden verwerkt.</p>
        <h3>Kan ik een factuur als PDF maken op mijn telefoon?</h3>
        <p>Ja. FactuurBaas werkt via je mobiele browser, zodat je een factuur kunt invullen en downloaden.</p>
        <h3>Moet ik betalen om een factuur als PDF te downloaden?</h3>
        <p>Nee. FactuurBaas biedt gratis PDF-downloads zonder verplicht account of abonnement.</p>

        <h2>Maak en download je gratis PDF-factuur</h2>
        <p>Je hoeft geen Word-template of Excel-bestand te gebruiken om een professionele factuur te maken.</p>
        <p>Met FactuurBaas vul je je gegevens in, laat je de bedragen berekenen en download je de factuur als PDF.</p>
        <p><strong>Gratis factuur maken. Direct PDF downloaden. Geen account nodig.</strong></p>
        <CtaButton href="/create-invoice" label="Maak gratis een PDF-factuur" />
      </>
    )
  },
  {
    slug: 'gratis-factuur-zzp',
    relatedSlugs: ['factuur-maken-zzp', 'factuur-templates-zzp', 'factureren-startende-zzper', 'factureren-zonder-account'],
    metaTitle: 'Gratis factuur maken ZZP – Online zonder account',
    title: 'Gratis factuur maken als zzp\'er',
    breadcrumbLabel: 'Gratis factuur maken ZZP',
    keywords: 'gratis factuur maken zzp, factuur maken zzp, gratis factuur maken als zzp, zzp factuur maken',
    excerpt: 'Maak gratis een factuur als zzp\'er. Zonder account, direct online en als PDF te downloaden. Inclusief factuurvoorbeeld en uitleg over verplichte gegevens.',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Gratis%20factuur%20maken%20Factuurbaas%20gratis%20online%20facturen%20maken.png',
      alt: 'Gratis factuur maken als zzp\'er: online zonder account, met voorbeeld en PDF-download.',
    },
    datePublished: '2026-02-01',
    dateModified: '2026-10-08',
    faq: [
      {
        question: 'Kan ik als zzp\'er gratis facturen maken?',
        answer: 'Ja. Je kunt zelf een factuur maken in Word of Excel of een gratis online factuurmaker gebruiken. Met FactuurBaas kun je zonder account een factuur opstellen en als PDF downloaden.',
      },
      {
        question: 'Heb ik een boekhoudprogramma nodig om te factureren?',
        answer: 'Nee. Een boekhoudprogramma is niet verplicht om een factuur te maken. Je moet wel zorgen dat je facturen aan de wettelijke eisen voldoen en dat je administratie correct wordt bijgehouden en bewaard.',
      },
      {
        question: 'Welk factuurnummer moet ik gebruiken?',
        answer: 'Gebruik een uniek, opeenvolgend nummer. Bijvoorbeeld 2026-001, 2026-002 en 2026-003. Een nummer mag binnen je nummerreeks niet dubbel voorkomen.',
      },
      {
        question: 'Welke betalingstermijn zet ik op mijn factuur?',
        answer: 'Je kunt bijvoorbeeld 14 of 30 dagen afspreken, rekening houdend met de wettelijke regels die voor jouw klant en situatie gelden. Vermeld de afgesproken termijn duidelijk op de factuur.',
      },
      {
        question: 'Kan ik een factuur maken zonder KVK-nummer?',
        answer: 'Dat hangt af van je situatie. Als je bij de KVK staat ingeschreven, moet je je KVK-nummer op de factuur vermelden.',
      },
    ],
    content: (
      <>
        <p>Als zzp&apos;er kun je gratis een professionele factuur maken, zonder boekhoudprogramma of betaald abonnement. Met FactuurBaas vul je je bedrijfsgegevens, klantgegevens en werkzaamheden in en download je de factuur als PDF. Een account is niet nodig.</p>

        <CtaButton href="/tools/factuur-maken" label="Maak gratis een factuur" />

        <h2>Hoe maak je gratis een factuur als zzp&apos;er?</h2>
        <p>Je hebt geen speciale software nodig om een factuur op te stellen. Zorg wel dat alle verplichte gegevens erop staan.</p>
        <ol>
          <li><strong>Vul je bedrijfsgegevens in.</strong> Vermeld je bedrijfsnaam, adres, KVK-nummer en btw-identificatienummer, voor zover van toepassing.</li>
          <li><strong>Voeg je klant toe.</strong> Vul de naam en het adres in van de persoon of het bedrijf waarvoor je hebt gewerkt.</li>
          <li><strong>Beschrijf je werkzaamheden.</strong> Vermeld welke diensten of producten je hebt geleverd, hoeveel en tegen welke prijs.</li>
          <li><strong>Controleer de btw.</strong> Gebruik het btw-tarief dat voor jouw levering geldt. Werk je onder de kleineondernemersregeling (KOR), dan breng je geen btw in rekening.</li>
          <li><strong>Controleer het factuurnummer en de datums.</strong> Gebruik een uniek, opeenvolgend factuurnummer en vermeld de factuurdatum en leveringsdatum.</li>
          <li><strong>Download je factuur.</strong> Controleer alle gegevens en sla de factuur op als PDF.</li>
        </ol>
        <p>Je kunt de PDF vervolgens naar je klant versturen.</p>

        <h2>Voorbeeld van een ZZP-factuur</h2>
        <p>Stel dat je als zelfstandig schilder 12 uur hebt gewerkt voor €45 per uur, exclusief btw.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Omschrijving</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Bedrag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Schilderwerk – 12 uur × €45</td>
                <td className="px-4 py-3 text-right">€540,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw 21%</td>
                <td className="px-4 py-3 text-right">€113,40</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal inclusief btw</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€653,40</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Dit voorbeeld gaat ervan uit dat het werk onder het btw-tarief van 21% valt. Voor andere werkzaamheden kan een ander tarief of een vrijstelling gelden.</p>
        <p>Op de daadwerkelijke factuur vermeld je ook de gegevens van jezelf en je klant, het factuurnummer, de relevante datums en de overige verplichte gegevens.</p>
        <p>
          Wil je zien hoe zo&apos;n document eruitziet? Bekijk dan het{' '}
          <Link href="/factuur-voorbeeld/zzp" className="text-warm-orange hover:underline">ZZP-factuurvoorbeeld</Link>.
        </p>

        <h2>Wat moet er verplicht op een ZZP-factuur staan?</h2>
        <p>Volgens de Belastingdienst bevat een gewone btw-factuur onder andere:</p>
        <ul>
          <li>Je volledige naam en adres en die van je klant.</li>
          <li>Je btw-identificatienummer en, als je bent ingeschreven, je KVK-nummer.</li>
          <li>Een uniek, opeenvolgend factuurnummer.</li>
          <li>De factuurdatum.</li>
          <li>De datum waarop de goederen of diensten zijn geleverd, of de datum van een vooruitbetaling.</li>
          <li>Een duidelijke omschrijving en omvang van de geleverde producten of diensten.</li>
          <li>De bedragen exclusief btw, het toepasselijke btw-tarief en het btw-bedrag.</li>
        </ul>
        <p>Voor bepaalde situaties, zoals kleine factuurbedragen, de KOR of buitenlandse klanten, kunnen afwijkende regels gelden.</p>
        <p>Je IBAN en betalingstermijn zijn niet algemeen verplicht volgens de btw-factuureisen. Het is wel verstandig ze te vermelden, zodat je klant weet hoeveel, wanneer en waar hij moet betalen.</p>
        <p>
          Bron:{' '}
          <a
            href="https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/administratie_bijhouden/facturen_maken/factuureisen/"
            className="text-warm-orange hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Belastingdienst – Factuureisen
          </a>
          .
        </p>

        <h2>Gratis factuur maken: online of met een template?</h2>
        <p>Je kunt een factuur op verschillende manieren maken.</p>
        <h3>Word of Excel</h3>
        <p>
          Met een{' '}
          <Link href="/factuur-template" className="text-warm-orange hover:underline">gratis factuurtemplate</Link>{' '}
          maak je zelf een document. Je bepaalt de opmaak, maar moet ook zelf zorgen voor de juiste berekeningen, nummering en gegevens.
        </p>
        <h3>Online factuurmaker</h3>
        <p>
          Met de{' '}
          <Link href="/tools/factuur-maken" className="text-warm-orange hover:underline">gratis factuurmaker van FactuurBaas</Link>{' '}
          vul je de gegevens in en maak je direct een PDF. Je hoeft geen account aan te maken.
        </p>
        <h3>Factureren met een account</h3>
        <p>Maak je regelmatig facturen? Dan kun je met een gratis FactuurBaas-account je facturen bewaren, klanten beheren en bijhouden welke facturen betaald of nog openstaand zijn.</p>
        <p>Je hoeft dus niet direct een uitgebreid boekhoudprogramma te gebruiken wanneer je alleen facturen wilt maken en overzicht wilt houden.</p>

        <h2>Factuur maken zonder btw</h2>
        <p>Niet iedere zzp&apos;er brengt btw in rekening. Dat kan bijvoorbeeld het geval zijn wanneer je deelneemt aan de kleineondernemersregeling (KOR) of wanneer je een btw-vrijgestelde prestatie verricht.</p>
        <p>De juiste vermelding op de factuur hangt af van de reden waarom je geen btw berekent. Gebruik daarom niet automatisch 0% btw wanneer een vrijstelling of de KOR van toepassing is.</p>
        <p>
          Bekijk ook het{' '}
          <Link href="/factuur-template/zonder-btw" className="text-warm-orange hover:underline">voorbeeld van een factuur zonder btw</Link>.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Kan ik als zzp&apos;er gratis facturen maken?</h3>
        <p>Ja. Je kunt zelf een factuur maken in Word of Excel of een gratis online factuurmaker gebruiken. Met FactuurBaas kun je zonder account een factuur opstellen en als PDF downloaden.</p>
        <h3>Heb ik een boekhoudprogramma nodig om te factureren?</h3>
        <p>Nee. Een boekhoudprogramma is niet verplicht om een factuur te maken. Je moet wel zorgen dat je facturen aan de wettelijke eisen voldoen en dat je administratie correct wordt bijgehouden en bewaard.</p>
        <h3>Welk factuurnummer moet ik gebruiken?</h3>
        <p>Gebruik een uniek, opeenvolgend nummer. Bijvoorbeeld 2026-001, 2026-002 en 2026-003. Een nummer mag binnen je nummerreeks niet dubbel voorkomen.</p>
        <h3>Welke betalingstermijn zet ik op mijn factuur?</h3>
        <p>Je kunt bijvoorbeeld 14 of 30 dagen afspreken, rekening houdend met de wettelijke regels die voor jouw klant en situatie gelden. Vermeld de afgesproken termijn duidelijk op de factuur.</p>
        <h3>Kan ik een factuur maken zonder KVK-nummer?</h3>
        <p>
          Dat hangt af van je situatie. Als je bij de KVK staat ingeschreven, moet je je KVK-nummer op de factuur vermelden. Bekijk de uitleg over{' '}
          <Link href="/factuur-maken/zonder-kvk" className="text-warm-orange hover:underline">factureren zonder KVK</Link>.
        </p>

        <h2>Direct een gratis ZZP-factuur maken</h2>
        <p>Vul je gegevens in, controleer de bedragen en download je factuur als PDF. Zonder account of abonnement.</p>
        <CtaButton href="/tools/factuur-maken" label="Maak gratis je factuur" />
      </>
    )
  },
  {
    slug: 'factureren-zonder-account',
    relatedSlugs: ['factuur-pdf-downloaden', 'factuurbeheer-overzicht', 'gratis-factuurtool-vs-boekhoudprogramma'],
    title: 'Gratis factuur maken online — zonder account en direct als PDF',
    excerpt: 'Een gratis factuur maken online zonder account. Vul je gegevens in en download direct een professionele PDF. Geen registratie, geen abonnement, geen ingewikkeld boekhoudprogramma.',
    keywords: 'factuur maken gratis, gratis factuur maken, gratis factuur maken online, online factuur maken, factuur maken online gratis, factuur maken zonder account, factureren zonder account, gratis factuur maken pdf, factuur maken zonder kvk, zelf factuur maken, hoe maak ik een factuur',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Factureren%20zonder%20account.png',
      alt: 'Gratis factuur maken online zonder account: direct als PDF downloaden.',
    },
    datePublished: '2026-02-01',
    dateModified: '2026-10-13',
    faq: [
      { question: 'Kan ik een factuur maken zonder account?', answer: 'Ja. Bij FactuurBaas maak je direct een professionele factuur zonder registratie of inloggen. Je vult je gegevens in op de pagina en downloadt de PDF. Geen e-mail, wachtwoord of account nodig.' },
      { question: 'Waar kan ik gratis een factuur maken online?', answer: 'Op FactuurBaas.nl kun je gratis online een factuur maken zonder account. Bezoek de factuurpagina, vul je gegevens in en download je factuur direct als PDF. Alles gebeurt in je browser; wij slaan niets op.' },
      { question: 'Is FactuurBaas gratis?', answer: 'Ja. Je kunt onbeperkt gratis facturen maken en als PDF downloaden — zonder account. Wil je bedrijfsgegevens, klanten of een factuuroverzicht bewaren? Dan kun je optioneel een gratis account aanmaken.' },
      { question: 'Hoe maak ik zelf een factuur?', answer: 'Je kunt zelf een factuur maken in Word, Excel of met een online factuurtool. Zorg dat alle verplichte gegevens op de factuur staan en dat bedragen en btw correct zijn berekend. Met FactuurBaas kun je gratis online een factuur maken en deze direct als PDF downloaden.' },
      { question: 'Kan ik factuur maken zonder KvK?', answer: 'Of je een factuur zonder KvK-nummer kunt sturen, hangt af van je situatie. Ben je ondernemer en ingeschreven bij de KvK, dan vermeld je de gegevens die op een zakelijke factuur verplicht zijn. Een KvK-nummer is niet in iedere situatie een verplicht onderdeel van een factuur. Heb je geen KvK-inschrijving? Zorg dat je situatie duidelijk is voordat je een factuur verstuurt.' },
      { question: 'Kan ik een factuur sturen zonder KvK-nummer?', answer: 'Dat hangt af van je situatie. Ben je ingeschreven als ondernemer, dan hoort je factuur de verplichte zakelijke gegevens te bevatten. Heb je geen KvK-inschrijving maar wil je wel een betaling in rekening brengen, dan kunnen andere regels gelden — bijvoorbeeld bij incidenteel werk. Controleer je situatie voordat je een factuur verstuurt.' },
      { question: 'Worden mijn gegevens opgeslagen als ik zonder account factureer?', answer: 'Nee. De gegevens die je invult worden alleen in je browser gebruikt om de PDF te maken. Wij slaan niets op. Bewaar zelf je gedownloade factuur-PDF voor je administratie.' },
    ],
    content: (
      <>
        <p>Een gratis factuur maken? Met FactuurBaas maak je online een professionele factuur zonder account. Vul je bedrijfsgegevens, klantgegevens, bedragen en btw in en download je factuur direct als PDF. Geen registratie, geen abonnement en geen ingewikkeld boekhoudprogramma.</p>
        <CtaButton />

        <h2>Gratis factuur maken online: zo werkt het</h2>
        <p>Veel tools vragen eerst om een account. Bij ons niet — online factureren gaat in drie stappen:</p>
        <ol>
          <li>Ga naar <Link href="/create-invoice" className="text-warm-orange hover:underline">de factuurpagina</Link>.</li>
          <li>Vul je gegevens, klant, bedragen en btw in.</li>
          <li>Download je factuur direct als PDF.</li>
        </ol>
        <p>Geen e-mailverificatie, geen inlog. Handig voor een eenmalige factuur of als je snel wilt factureren zonder account.</p>

        <h2>Zelf een factuur maken: wat moet erop staan?</h2>
        <p>Zelf een factuur maken hoeft niet ingewikkeld te zijn. Een factuur bevat onder andere je bedrijfsgegevens, de gegevens van je klant, een factuurnummer, factuurdatum, omschrijving van de geleverde producten of diensten, bedragen en btw.</p>
        <p>Werk je als zzp&apos;er? Dan is het belangrijk dat je factuur aan de wettelijke factuureisen voldoet. In onze <Link href="/blogs/factuur-maken-zzp" className="text-warm-orange hover:underline">uitleg over facturen maken als zzp&apos;er</Link> lees je stap voor stap wat erop moet staan.</p>
        <ul>
          <li>Je bedrijfsnaam en adres</li>
          <li>Je KvK-nummer</li>
          <li>Je btw-identificatienummer</li>
          <li>Gegevens van je klant</li>
          <li>Factuurnummer</li>
          <li>Factuurdatum</li>
          <li>Omschrijving van de producten of diensten</li>
          <li>Bedrag exclusief btw</li>
          <li>Btw-percentage en btw-bedrag</li>
          <li>Totaalbedrag inclusief btw</li>
          <li>Betaaltermijn en betaalgegevens</li>
        </ul>

        <h2>Factuur maken zonder KvK: kan dat?</h2>
        <p>Of je een factuur zonder KvK-nummer kunt sturen, hangt af van je situatie. Ben je ondernemer en ingeschreven bij de KvK, dan vermeld je de gegevens die op een zakelijke factuur verplicht zijn. Een KvK-nummer is niet in iedere situatie een verplicht onderdeel van een factuur.</p>
        <p>Heb je geen KvK-inschrijving maar wil je wel een betaling in rekening brengen? Dan kunnen andere regels gelden, bijvoorbeeld wanneer je incidenteel werkzaamheden uitvoert. Zorg daarom dat je situatie duidelijk is voordat je een factuur verstuurt.</p>

        <h2>Wat gebeurt er met mijn gegevens?</h2>
        <p>De gegevens die je invult worden alleen in jouw browser gebruikt om de factuur te genereren. Zodra je de pagina verlaat, zijn ze weg. Wij slaan niets op. Dat betekent privacy, maar ook: bewaar zelf je gedownloade PDF&apos;s voor je administratie.</p>

        <h2>Account of zonder account?</h2>
        <p>Beide kan. Gratis factureren zonder account blijft de snelste route: direct invullen en PDF downloaden. Wil je je bedrijfsgegevens opslaan, klanten beheren of een overzicht van facturen bijhouden? Maak dan gratis een account aan — volledig optioneel. Meer over opslaan en beheren lees je in <Link href="/blogs/factuurbeheer-overzicht" className="text-warm-orange hover:underline">factuurbeheer voor zzp&apos;ers</Link>.</p>
        <CtaButton />

        <h2>Wanneer heb je een boekhoudprogramma nodig?</h2>
        <p>Een gratis factuur maken kan prima zonder account. Maar wanneer je steeds meer facturen verstuurt, uitgaven wilt bijhouden of je btw-administratie wilt vereenvoudigen, kan boekhoudsoftware handig zijn. Bekijk onze <Link href="/boekhoudprogramma-vergelijken" className="text-warm-orange hover:underline">vergelijker voor boekhoudprogramma&apos;s</Link> om te ontdekken welke oplossing bij jouw onderneming past.</p>

        <h2>Veelgestelde vragen</h2>
        <h3>Kan ik een factuur maken zonder account?</h3>
        <p>Ja. Ga naar FactuurBaas, vul de velden in en download je PDF. Geen registratie of inlog nodig.</p>
        <h3>Is FactuurBaas gratis?</h3>
        <p>Ja. Je kunt onbeperkt gratis facturen maken en downloaden. Een account is optioneel en ook gratis.</p>
        <h3>Hoe maak ik zelf een factuur?</h3>
        <p>Je kunt zelf een factuur maken in Word, Excel of met een online factuurtool. Zorg dat alle verplichte gegevens op de factuur staan en dat bedragen en btw correct zijn berekend. Met FactuurBaas kun je gratis online een factuur maken en deze direct als PDF downloaden.</p>
        <h3>Kan ik factureren zonder KvK-nummer?</h3>
        <p>Dat hangt af van je situatie. Ben je ingeschreven als ondernemer, dan hoort je factuur de verplichte zakelijke gegevens te bevatten. Heb je geen KvK-inschrijving, controleer dan eerst welke regels voor jouw situatie gelden voordat je een factuur verstuurt.</p>
        <h3>Worden mijn gegevens opgeslagen?</h3>
        <p>Nee. Alles gebeurt in je browser; wij slaan geen gegevens op. Bewaar zelf je PDF.</p>
      </>
    )
  },
  {
    slug: 'beste-boekhoudprogramma-zzp',
    relatedSlugs: [
      'gratis-factuur-zzp',
      'factuur-maken-zzp',
      'factureren-startende-zzper',
      'wanneer-boekhoudsoftware-nodig-zzp',
      'boekhoudprogramma-eenmanszaak',
      'moneybird-vs-jortt',
      'moneybird-vs-eboekhouden',
      'jortt-vs-eboekhouden',
    ],
    metaTitle: "Beste boekhoudprogramma voor zzp'ers | Vergelijk 2026",
    title: "Beste boekhoudprogramma voor zzp'ers",
    excerpt:
      "Wat is het beste boekhoudprogramma voor zzp'ers? Vergelijk Moneybird, Jortt, e-Boekhouden.nl en andere opties op prijs, functies en gebruiksgemak.",
    keywords:
      "beste boekhoudprogramma zzp, boekhoudprogramma zzp, moneybird zzp, jortt zzp, e-boekhouden zzp, gratis boekhoudprogramma zzp, boekhoudprogramma vergelijken",
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/beste%20boekhoudprogramma%20zzp.png',
      alt: "Vergelijking van boekhoudprogramma's voor zzp'ers.",
    },
    datePublished: '2026-02-05',
    dateModified: '2026-09-05',
    faq: [
      {
        question: "Wat is het beste boekhoudprogramma voor een zzp'er?",
        answer:
          "Dat verschilt per ondernemer. Moneybird, Jortt en e-Boekhouden.nl zijn voorbeelden van online boekhoudprogramma's die je kunt vergelijken. Kijk vooral naar de functies, prijs en hoeveelheid administratie die je hebt.",
      },
      {
        question: "Is e-Boekhouden.nl geschikt voor zzp'ers?",
        answer:
          "Ja, e-Boekhouden.nl richt zich onder andere op zzp'ers en kleine ondernemers. Of het bij je past, hangt af van hoeveel administratie je hebt en welke functies je nodig hebt.",
      },
      {
        question: 'Wat is het verschil tussen FactuurBaas en een boekhoudprogramma?',
        answer:
          'FactuurBaas is gericht op het snel maken van facturen. Een boekhoudprogramma is bedoeld voor een bredere administratie, zoals het bijhouden van inkomsten en uitgaven en andere administratieve processen.',
      },
      {
        question: 'Welk boekhoudprogramma is het goedkoopste?',
        answer:
          'Dat hangt af van het actuele abonnement, de functies en eventuele limieten. Vergelijk daarom niet alleen de maandprijs, maar ook wat inbegrepen is.',
      },
      {
        question: "Heb ik als zzp'er een boekhoudprogramma nodig?",
        answer:
          'Niet iedere zzp’er heeft een uitgebreid boekhoudprogramma nodig. Bij een kleine en eenvoudige administratie kun je mogelijk met eenvoudige hulpmiddelen werken. Naarmate je meer facturen, inkomsten, uitgaven en administratieve handelingen hebt, kan boekhoudsoftware steeds interessanter worden.',
      },
      {
        question: "Is er een gratis boekhoudprogramma voor zzp'ers?",
        answer:
          'Er zijn gratis en deels gratis oplossingen, maar de beschikbare functies verschillen sterk. Als je alleen gratis een factuur wilt maken, kun je daarvoor FactuurBaas gebruiken zonder account of abonnement.',
      },
      {
        question: 'Wat is het verschil tussen een boekhoudprogramma en een factuurprogramma?',
        answer:
          'Een factuurprogramma is voornamelijk bedoeld voor het maken van facturen. Een boekhoudprogramma is breder en richt zich op de volledige administratie van je onderneming.',
      },
    ],
    content: (
      <>
        <p>
          Als zzp&apos;er wil je je administratie goed regelen, maar je wilt er waarschijnlijk ook niet meer tijd aan
          kwijt zijn dan nodig. Een boekhoudprogramma kan helpen om facturen, inkomsten, btw en je administratie
          overzichtelijk bij te houden.
        </p>

        <p>
          Maar wat is nu het <strong>beste boekhoudprogramma voor een zzp&apos;er</strong>?
        </p>
        <p>
          Dat hangt vooral af van wat je nodig hebt. Wie alleen af en toe een factuur maakt, heeft misschien helemaal
          geen uitgebreid boekhoudpakket nodig. Wie meerdere klanten heeft, veel facturen verstuurt en zijn
          administratie grotendeels wil automatiseren, heeft daar juist wel baat bij.
        </p>
        <p>In dit overzicht vergelijken we populaire opties voor zzp&apos;ers en leggen we uit waar je op moet letten.</p>
        <p>
          Twijfel je nog welk type oplossing bij jouw administratie past? Doe dan eerst de gratis{' '}
          <Link href="/tools/boekhoudprogramma-check" className="text-warm-orange hover:underline">
            boekhoudprogramma-check
          </Link>
          : in acht korte vragen zie je of een factuurtool, basissoftware, compleet boekhoudprogramma of software plus
          boekhouder waarschijnlijk het beste past. Wil je pakketten en prijzen naast elkaar zien? Gebruik de{' '}
          <Link href="/boekhoudprogramma-vergelijken" className="text-warm-orange hover:underline">
            boekhoudprogramma-vergelijker
          </Link>
          . Of lees hoe je{' '}
          <Link href="/gidsen/zelf-boekhouden-zzp" className="text-warm-orange hover:underline">
            zelf je boekhouding als zzp&apos;er kunt doen
          </Link>
          .
        </p>
        <BoekhoudCheckCta />

        <h2>Snel overzicht: welk boekhoudprogramma past bij jou?</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Wat wil je vooral doen?
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Wat past waarschijnlijk het beste?
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Af en toe gratis een factuur maken</td>
                <td className="px-4 py-3 font-medium">FactuurBaas</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Facturen maken en je administratie bijhouden</td>
                <td className="px-4 py-3 font-medium">Boekhoudprogramma</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Boekhouding en btw-administratie grotendeels online regelen</td>
                <td className="px-4 py-3 font-medium">Online boekhoudprogramma</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Veel administratieve handelingen automatiseren</td>
                <td className="px-4 py-3 font-medium">Uitgebreider boekhoudpakket</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Verschillende programma&apos;s vergelijken</td>
                <td className="px-4 py-3 font-medium">Bekijk de vergelijking hieronder</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Kort gezegd:</strong> heb je alleen een factuur nodig, dan hoef je niet automatisch een betaald
          boekhoudprogramma te nemen. Wil je je volledige administratie bijhouden, dan is een boekhoudprogramma vaak
          een stuk handiger.
        </p>

        <h2>Wat is het beste boekhoudprogramma voor een zzp&apos;er?</h2>
        <p>
          Er bestaat niet één boekhoudprogramma dat voor iedere zzp&apos;er het beste is. Je keuze hangt onder andere
          af van je aantal facturen, hoeveel administratie je zelf wilt doen en hoeveel automatisering je belangrijk
          vindt.
        </p>
        <p>
          Voor veel zzp&apos;ers zijn <strong>Moneybird</strong>, <strong>Jortt</strong> en{' '}
          <strong>e-Boekhouden.nl</strong> interessante opties om te bekijken. Daarnaast zijn er verschillende andere
          boekhoudprogramma&apos;s met ieder hun eigen functies en prijsmodel.
        </p>
        <p>Bij het vergelijken kun je onder andere letten op:</p>
        <ul>
          <li>facturen maken en versturen</li>
          <li>inkomsten en uitgaven bijhouden</li>
          <li>btw-administratie</li>
          <li>btw-aangifte</li>
          <li>banktransacties verwerken</li>
          <li>automatische verwerking van administratie</li>
          <li>offertes maken</li>
          <li>urenregistratie</li>
          <li>koppelingen met andere systemen</li>
          <li>mobiele app</li>
          <li>prijs per maand</li>
          <li>ondersteuning en helpdesk</li>
        </ul>
        <p>
          Niet iedere zzp&apos;er heeft al deze functies nodig. Daarom is{' '}
          <strong>
            het goedkoopste of meest uitgebreide programma niet automatisch het beste programma voor jou
          </strong>
          .
        </p>

        <h2>Boekhoudprogramma&apos;s voor zzp&apos;ers vergelijken</h2>
        <p>
          Er zijn verschillende boekhoudprogramma&apos;s voor zzp&apos;ers. Hieronder vind je een aantal bekende opties
          om met elkaar te vergelijken.
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Programma
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Geschikt voor
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Belangrijkste pluspunt
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium">Moneybird</td>
                <td className="px-4 py-3">Zzp&apos;ers en kleine ondernemers</td>
                <td className="px-4 py-3">Facturatie en administratie combineren</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium">Jortt</td>
                <td className="px-4 py-3">Zzp&apos;ers en ondernemers</td>
                <td className="px-4 py-3">Online boekhouden en automatisering</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium">e-Boekhouden.nl</td>
                <td className="px-4 py-3">Zzp&apos;ers en kleine bedrijven</td>
                <td className="px-4 py-3">Boekhouding en administratie online regelen</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">FactuurBaas</td>
                <td className="px-4 py-3">Zzp&apos;ers die vooral facturen maken</td>
                <td className="px-4 py-3">Gratis facturen maken zonder account</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Moneybird</h3>
        <p>
          <strong>Moneybird</strong> is een online boekhoudprogramma voor ondernemers en zzp&apos;ers. Het combineert
          facturatie met verschillende onderdelen van de administratie.
        </p>
        <p>
          Het programma kan interessant zijn als je naast facturen ook je administratie vanuit één online omgeving wilt
          bijhouden.
        </p>
        <p>
          <strong>Interessant voor:</strong> zzp&apos;ers die facturatie en boekhouding willen combineren.
        </p>
        <div className="my-8 text-center not-prose">
          <Button asChild variant="outline" className="font-bold py-3 px-6 rounded-lg text-lg">
            <a {...moneybirdLink}>Bekijk Moneybird →</a>
          </Button>
        </div>

        <h3>Jortt</h3>
        <p>
          <strong>Jortt</strong> is een online boekhoudprogramma voor ondernemers. Naast het bijhouden van de
          boekhouding richt het programma zich op het automatiseren van administratieve werkzaamheden.
        </p>
        <p>
          Het kan daardoor interessant zijn voor zzp&apos;ers die meer willen dan alleen facturen maken.
        </p>
        <p>
          <strong>Interessant voor:</strong> zzp&apos;ers die hun administratie online willen regelen en waarde hechten
          aan automatisering.
        </p>
        <div className="my-8 text-center not-prose">
          <Button asChild variant="outline" className="font-bold py-3 px-6 rounded-lg text-lg">
            <a href="https://www.jortt.nl/" target="_blank" rel="noopener noreferrer">
              Bekijk Jortt →
            </a>
          </Button>
        </div>

        <h3>e-Boekhouden.nl</h3>
        <p>
          <strong>e-Boekhouden.nl</strong> is een online boekhoudprogramma waarmee zzp&apos;ers en andere ondernemers
          hun administratie kunnen bijhouden.
        </p>
        <p>
          Het programma biedt verschillende mogelijkheden voor onder andere boekhouding en facturatie. Voor
          ondernemers die een uitgebreider systeem zoeken dan alleen een factuurmaker, is het daarom een optie om mee
          te nemen in je vergelijking.
        </p>
        <p>
          <strong>Interessant voor:</strong> zzp&apos;ers en kleine ondernemers die hun boekhouding online willen
          bijhouden.
        </p>
        <div className="my-8 text-center not-prose">
          <Button asChild variant="outline" className="font-bold py-3 px-6 rounded-lg text-lg">
            <Link href="/boekhoudprogramma-vergelijken">Vergelijk boekhoudprogramma&apos;s →</Link>
          </Button>
        </div>

        <h3>FactuurBaas</h3>
        <p>Niet iedere zzp&apos;er heeft direct een volledig boekhoudprogramma nodig.</p>
        <p>
          Wil je bijvoorbeeld alleen snel een professionele factuur maken? Dan kun je met{' '}
          <strong>FactuurBaas</strong> gratis een factuur maken zonder account of abonnement.
        </p>
        <p>Je maakt je factuur online en downloadt deze direct als PDF.</p>
        <p>
          <strong>FactuurBaas is vooral geschikt als je:</strong>
        </p>
        <ul>
          <li>af en toe een factuur maakt</li>
          <li>geen uitgebreide boekhouding nodig hebt</li>
          <li>snel een factuur als PDF wilt downloaden</li>
          <li>geen account wilt aanmaken</li>
          <li>geen abonnement wilt afsluiten</li>
        </ul>
        <p>
          Wil je ook je inkomsten, uitgaven, btw en volledige administratie vanuit één programma beheren? Dan is een
          uitgebreider boekhoudprogramma waarschijnlijk geschikter.
        </p>
        <CtaButton />

        <h2>Welk boekhoudprogramma past bij jou?</h2>
        <p>Er is geen boekhoudprogramma dat voor iedere zzp&apos;er automatisch de beste keuze is.</p>
        <p>
          <strong>Alleen facturen maken?</strong>
          <br />
          FactuurBaas kan voldoende zijn.
        </p>
        <p>
          <strong>Facturen én je administratie bijhouden?</strong>
          <br />
          Bekijk bijvoorbeeld Moneybird, Jortt en e-Boekhouden.nl.
        </p>
        <p>
          <strong>Meer administratie automatiseren?</strong>
          <br />
          Vergelijk vooral de automatiseringsmogelijkheden, koppelingen en manier waarop bank- en btw-gegevens worden
          verwerkt.
        </p>
        <p>
          <strong>Zo goedkoop mogelijk starten?</strong>
          <br />
          Vergelijk de actuele abonnementen en kijk welke functies je daadwerkelijk nodig hebt. Een gratis of goedkoop
          pakket is niet automatisch goedkoper als je daardoor veel handmatig werk moet doen.
        </p>

        <h2>Boekhoudprogramma vergelijken: waar moet je op letten?</h2>
        <p>Een boekhoudprogramma vergelijken gaat verder dan alleen kijken naar de prijs.</p>

        <h3>1. Wat kost het?</h3>
        <p>
          Bekijk niet alleen de prijs van het goedkoopste abonnement. Kijk ook welke functies bij die prijs inbegrepen
          zijn.
        </p>
        <p>
          Een goedkoop pakket kan aantrekkelijk zijn als je weinig nodig hebt. Een iets duurder pakket kan uiteindelijk
          interessanter zijn als het je veel handmatig werk bespaart.
        </p>
        <p>Let bijvoorbeeld op:</p>
        <ul>
          <li>maandprijs</li>
          <li>eventuele jaarprijs</li>
          <li>gratis proefperiode</li>
          <li>limieten op facturen of transacties</li>
          <li>kosten voor extra functies</li>
          <li>kosten voor aanvullende gebruikers</li>
        </ul>

        <h3>2. Kun je eenvoudig facturen maken?</h3>
        <p>
          Facturen maken is voor vrijwel iedere zzp&apos;er belangrijk. Kijk daarom hoe eenvoudig het programma werkt
          en welke mogelijkheden je hebt voor bijvoorbeeld factuurnummering, btw en klantgegevens.
        </p>
        <p>
          Als je uitsluitend facturen wilt maken, is een volledig boekhoudprogramma overigens niet altijd noodzakelijk.
        </p>

        <h3>3. Hoe werkt de btw-administratie?</h3>
        <p>Voor veel zzp&apos;ers is btw een belangrijk onderdeel van de administratie.</p>
        <p>
          Een goed boekhoudprogramma kan helpen om btw-bedragen overzichtelijk bij te houden en kan, afhankelijk van
          het programma en de inrichting, verschillende onderdelen van de btw-administratie ondersteunen.
        </p>
        <p>Controleer altijd welke btw-functionaliteit daadwerkelijk in het abonnement zit.</p>

        <h3>4. Hoeveel kan het programma automatiseren?</h3>
        <p>
          Automatisering kan vooral interessant worden wanneer je regelmatig facturen verstuurt en veel transacties
          verwerkt.
        </p>
        <p>
          Denk bijvoorbeeld aan het verwerken van banktransacties, terugkerende administratieve handelingen en het
          koppelen van verschillende onderdelen van je administratie.
        </p>
        <p>Hoe meer administratie je hebt, hoe groter het voordeel van automatisering kan worden.</p>

        <h3>5. Kun je offertes maken?</h3>
        <p>
          Als je naast facturen ook offertes maakt, kan het handig zijn wanneer facturatie en offertes binnen hetzelfde
          programma beschikbaar zijn.
        </p>
        <p>Dat voorkomt dat je voor iedere stap een ander systeem nodig hebt.</p>

        <h3>6. Werkt het goed op mobiel?</h3>
        <p>Als je regelmatig onderweg werkt, kan een goede mobiele website of app belangrijk zijn.</p>
        <p>
          Je wilt bijvoorbeeld een factuur kunnen bekijken, administratie kunnen controleren of een klant kunnen
          terugvinden zonder achter een desktop te zitten.
        </p>

        <h2>Gratis boekhoudprogramma voor zzp&apos;ers</h2>
        <p>
          De term <strong>gratis boekhoudprogramma</strong> kan verschillende dingen betekenen.
        </p>
        <p>
          Sommige programma&apos;s hebben een gratis pakket met beperkte functies. Andere bieden alleen tijdelijk een
          gratis proefperiode. Weer andere tools zijn volledig gratis, maar richten zich slechts op één onderdeel van
          je administratie.
        </p>
        <p>Daarom is het belangrijk om te bepalen wat je precies nodig hebt.</p>

        <h3>Alleen gratis een factuur maken?</h3>
        <p>Dan kan FactuurBaas voldoende zijn.</p>
        <p>
          Je kunt gratis een professionele factuur maken, zonder account en zonder abonnement, en deze direct als PDF
          downloaden.
        </p>

        <h3>Volledige boekhouding gratis regelen?</h3>
        <p>
          Dat is een andere vraag. Een volledige boekhouding bevat veel meer dan alleen het maken van een factuur.
          Denk aan inkomsten en uitgaven, btw-administratie, banktransacties en andere administratieve processen.
        </p>
        <p>Controleer daarom goed welke functies een gratis boekhoudprogramma daadwerkelijk biedt.</p>

        <h2>Boekhoudprogramma of factuurprogramma?</h2>
        <p>Deze twee worden vaak door elkaar gehaald, maar ze zijn niet hetzelfde.</p>
        <p>
          Een <strong>factuurprogramma</strong> richt zich voornamelijk op het maken en beheren van facturen.
        </p>
        <p>
          Een <strong>boekhoudprogramma</strong> gaat veel verder en is bedoeld om je administratie als geheel bij te
          houden.
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Functie
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Factuurprogramma
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Boekhoudprogramma
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Facturen maken</td>
                <td className="px-4 py-3">✓</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Professionele facturen</td>
                <td className="px-4 py-3">✓</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw op facturen</td>
                <td className="px-4 py-3">✓</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Inkomsten bijhouden</td>
                <td className="px-4 py-3">Beperkt</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Uitgaven bijhouden</td>
                <td className="px-4 py-3">Beperkt</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Volledige administratie</td>
                <td className="px-4 py-3">—</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Bankkoppeling</td>
                <td className="px-4 py-3">Niet altijd</td>
                <td className="px-4 py-3">Vaak</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Automatisering</td>
                <td className="px-4 py-3">Beperkt</td>
                <td className="px-4 py-3">Vaak uitgebreider</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw-administratie</td>
                <td className="px-4 py-3">Beperkt</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Offertes</td>
                <td className="px-4 py-3">Soms</td>
                <td className="px-4 py-3">Vaak</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Voor een zzp&apos;er die maar enkele facturen per maand maakt, kan een eenvoudige factuurtool dus voldoende
          zijn.
        </p>
        <p>Heb je een groeiende administratie, dan wordt een boekhoudprogramma steeds interessanter.</p>

        <h2>Wanneer heb je een boekhoudprogramma nodig als zzp&apos;er?</h2>
        <p>Dat hangt niet alleen af van je omzet.</p>
        <p>Een boekhoudprogramma kan vooral nuttig worden wanneer je:</p>
        <ul>
          <li>regelmatig facturen verstuurt</li>
          <li>meerdere inkomsten en uitgaven hebt</li>
          <li>veel zakelijke transacties hebt</li>
          <li>je administratie zelf wilt bijhouden</li>
          <li>minder handmatig werk wilt doen</li>
          <li>je administratie op één plek wilt hebben</li>
          <li>meer overzicht wilt over je bedrijf</li>
        </ul>
        <p>
          Een startende zzp&apos;er met een paar facturen per jaar kan prima met eenvoudige hulpmiddelen beginnen.
          Naarmate je administratie groter wordt, kan een boekhoudprogramma tijd besparen.
        </p>

        <h2>Boekhoudprogramma voor een startende zzp&apos;er</h2>
        <p>
          Als je net begint, hoef je niet meteen voor het meest uitgebreide boekhoudpakket te kiezen.
        </p>
        <p>Begin met de vraag:</p>
        <p>
          <strong>Wat moet ik daadwerkelijk bijhouden?</strong>
        </p>
        <p>
          Maak je slechts enkele facturen en heb je weinig transacties? Dan kan een eenvoudige factuurtool een logische
          start zijn.
        </p>
        <p>
          Heb je vanaf het begin meerdere klanten, zakelijke kosten en veel transacties? Dan kan het verstandiger zijn
          om direct een boekhoudprogramma te gebruiken.
        </p>
        <p>
          Kijk bij je keuze vooral naar gebruiksgemak. Een programma met tientallen functies waar je niets mee doet, is
          niet automatisch beter.
        </p>

        <h2>Wat is het beste boekhoudprogramma?</h2>
        <p>
          Voor een zzp&apos;er is het beste boekhoudprogramma uiteindelijk het programma dat past bij de omvang en
          manier van werken van je bedrijf.
        </p>
        <p>
          <strong>Wil je alleen snel een factuur maken?</strong>
          <br />
          Gebruik dan een eenvoudige factuurtool zoals FactuurBaas.
        </p>
        <p>
          <strong>Wil je facturen combineren met je administratie?</strong>
          <br />
          Vergelijk dan boekhoudprogramma&apos;s zoals Moneybird, Jortt en e-Boekhouden.nl met andere beschikbare
          opties.
        </p>
        <p>
          <strong>Wil je zoveel mogelijk administratief werk automatiseren?</strong>
          <br />
          Kijk dan vooral naar de automatiseringsmogelijkheden en integraties van de verschillende programma&apos;s.
        </p>
        <p>
          Vergelijk dus niet alleen op <strong>prijs</strong>, maar vooral op{' '}
          <strong>wat je daadwerkelijk nodig hebt</strong>.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Wat is het beste boekhoudprogramma voor een zzp&apos;er?</h3>
        <p>
          Dat verschilt per ondernemer. Moneybird, Jortt en e-Boekhouden.nl zijn voorbeelden van online
          boekhoudprogramma&apos;s die je kunt vergelijken. Kijk vooral naar de functies, prijs en hoeveelheid
          administratie die je hebt.
        </p>
        <h3>Is e-Boekhouden.nl geschikt voor zzp&apos;ers?</h3>
        <p>
          Ja, e-Boekhouden.nl richt zich onder andere op zzp&apos;ers en kleine ondernemers. Of het bij je past, hangt
          af van hoeveel administratie je hebt en welke functies je nodig hebt.
        </p>
        <h3>Wat is het verschil tussen FactuurBaas en een boekhoudprogramma?</h3>
        <p>
          FactuurBaas is gericht op het snel maken van facturen. Een boekhoudprogramma is bedoeld voor een bredere
          administratie, zoals het bijhouden van inkomsten en uitgaven en andere administratieve processen.
        </p>
        <h3>Welk boekhoudprogramma is het goedkoopste?</h3>
        <p>
          Dat hangt af van het actuele abonnement, de functies en eventuele limieten. Vergelijk daarom niet alleen de
          maandprijs, maar ook wat inbegrepen is.
        </p>
        <h3>Heb ik als zzp&apos;er een boekhoudprogramma nodig?</h3>
        <p>
          Niet iedere zzp&apos;er heeft een uitgebreid boekhoudprogramma nodig. Bij een kleine en eenvoudige
          administratie kun je mogelijk met eenvoudige hulpmiddelen werken. Naarmate je meer facturen, inkomsten,
          uitgaven en administratieve handelingen hebt, kan boekhoudsoftware steeds interessanter worden.
        </p>
        <h3>Is er een gratis boekhoudprogramma voor zzp&apos;ers?</h3>
        <p>
          Er zijn gratis en deels gratis oplossingen, maar de beschikbare functies verschillen sterk. Als je alleen
          gratis een factuur wilt maken, kun je daarvoor FactuurBaas gebruiken zonder account of abonnement.
        </p>
        <h3>Wat is het verschil tussen een boekhoudprogramma en een factuurprogramma?</h3>
        <p>
          Een factuurprogramma is voornamelijk bedoeld voor het maken van facturen. Een boekhoudprogramma is breder en
          richt zich op de volledige administratie van je onderneming.
        </p>

        <h2>Conclusie</h2>
        <p>
          Het <strong>beste boekhoudprogramma voor zzp&apos;ers bestaat niet voor iedereen</strong>.
        </p>
        <p>
          Maak je slechts af en toe een factuur? Dan heb je mogelijk genoeg aan een gratis factuurmaker zoals
          FactuurBaas.
        </p>
        <p>
          Wil je daarnaast je inkomsten, uitgaven, btw en andere administratie bijhouden? Dan is een
          boekhoudprogramma zoals Moneybird, Jortt, e-Boekhouden.nl of een andere oplossing waarschijnlijk
          interessanter.
        </p>
        <p>
          Kijk daarom eerst naar wat je nodig hebt en vergelijk daarna de programma&apos;s op{' '}
          <strong>prijs, functies, gebruiksgemak en automatisering</strong>.
        </p>
        <p>
          Weet je nog niet zeker welk type je nodig hebt? Doe de{' '}
          <Link href="/tools/boekhoudprogramma-check" className="text-warm-orange hover:underline">
            boekhoudprogramma-check
          </Link>{' '}
          en krijg direct een indicatie op basis van je facturen, kosten, transacties en voorkeuren.
        </p>
        <p>
          <strong>Alleen een factuur nodig?</strong> → Maak gratis een factuur met FactuurBaas.
        </p>
        <p>
          <strong>Volledige administratie nodig?</strong> → Vergelijk boekhoudprogramma&apos;s en kies de oplossing die
          bij jouw onderneming past.
        </p>
        <BoekhoudCheckCta />
        <CtaButton />

      </>
    )
  },
  {
    slug: 'boekhoudprogramma-eenmanszaak',
    relatedSlugs: [
      'beste-boekhoudprogramma-zzp',
      'wanneer-boekhoudsoftware-nodig-zzp',
      'gratis-factuurtool-vs-boekhoudprogramma',
      'factuur-maken-zzp',
    ],
    metaTitle: 'Boekhoudprogramma voor een eenmanszaak: wat heb je nodig?',
    title: 'Boekhoudprogramma voor een eenmanszaak: wat heb je nodig?',
    excerpt:
      'Welk boekhoudprogramma heb je nodig voor een eenmanszaak? Bekijk wat je moet bijhouden, wanneer gratis boekhouden genoeg is en wanneer software handig wordt.',
    keywords:
      'boekhoudprogramma eenmanszaak, gratis boekhoudprogramma eenmanszaak, boekhouding eenmanszaak, boekhoudpakket eenmanszaak',
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Blogs/Boekhoudprogramma%20voor%20een%20eenmanszaak.jpg',
      alt: 'Boekhoudprogramma voor een eenmanszaak: wat heb je nodig?',
    },
    datePublished: '2026-09-05',
    dateModified: '2026-09-05',
    faq: [
      {
        question: 'Heb ik voor een eenmanszaak een boekhoudprogramma nodig?',
        answer:
          'Nee. Je bent niet verplicht om een specifiek boekhoudprogramma te gebruiken. Je moet wel een goede administratie bijhouden. Of software handig is, hangt af van de omvang en complexiteit van je administratie.',
      },
      {
        question: 'Wat is het beste boekhoudprogramma voor een eenmanszaak?',
        answer:
          'Dat hangt af van je situatie. Een kleine eenmanszaak met weinig transacties heeft andere behoeften dan een onderneming met veel kosten en transacties.',
      },
      {
        question: 'Is er een gratis boekhoudprogramma voor een eenmanszaak?',
        answer:
          'Er bestaan gratis oplossingen en programma’s met gratis pakketten of periodes. Let wel op de beperkingen en het verschil tussen een gratis factuurprogramma en volledige boekhoudsoftware.',
      },
      {
        question: 'Kan ik mijn boekhouding van mijn eenmanszaak zelf doen?',
        answer:
          'Ja. Je kunt je administratie zelf bijhouden. Je moet er wel voor zorgen dat je administratie compleet en goed onderbouwd is.',
      },
      {
        question: 'Kan ik Excel gebruiken voor mijn eenmanszaak?',
        answer:
          'Voor een eenvoudige administratie kan een spreadsheet praktisch zijn. Naarmate je meer facturen, kosten en transacties krijgt, kan boekhoudsoftware handiger worden.',
      },
      {
        question: 'Is een factuurprogramma hetzelfde als een boekhoudprogramma?',
        answer:
          'Nee. Een factuurprogramma is vooral gericht op het maken van verkoopfacturen. Een boekhoudprogramma ondersteunt een bredere financiële administratie.',
      },
      {
        question: 'Wanneer moet ik overstappen naar boekhoudsoftware?',
        answer:
          'Er is geen vast moment. Een goed moment kan zijn wanneer je administratie veel tijd kost, je veel transacties hebt of je meer automatisering en financieel overzicht wilt.',
      },
    ],
    content: (
      <>
        <p>
          Heb je een eenmanszaak en vraag je je af welk boekhoudprogramma je nodig hebt? Dan is er geen
          standaardantwoord.
        </p>
        <p>
          Een eenmanszaak kan namelijk een heel eenvoudige administratie hebben, maar ook honderden transacties, veel
          zakelijke kosten en een uitgebreide btw-administratie.
        </p>
        <p>
          Voor de ene ondernemer is een eenvoudige factuurtool en eigen administratie voldoende. Een andere ondernemer
          heeft meer aan een boekhoudprogramma met automatische verwerking en een bankkoppeling.
        </p>
        <p>
          In dit artikel lees je wat je voor je <strong>boekhouding als eenmanszaak</strong> moet bijhouden, wanneer een
          boekhoudprogramma handig wordt en wanneer gratis boekhouden mogelijk voldoende is.
        </p>
        <p>Twijfel je welke oplossing bij jouw situatie past?</p>
        <BoekhoudCheckCta />

        <h2>Heb je als eenmanszaak een boekhoudprogramma nodig?</h2>
        <p>Nee, je bent niet verplicht om een specifiek boekhoudprogramma te gebruiken.</p>
        <p>
          Je moet wel een goede administratie bijhouden. Hoe je dat organiseert, bepaal je in principe zelf.
        </p>
        <p>
          Een kleine eenmanszaak met een paar klanten en weinig zakelijke kosten kan de administratie bijvoorbeeld
          eenvoudig houden. Je kunt inkomsten, kosten en andere belangrijke gegevens zelf bijhouden en je facturen met
          een aparte factuurtool maken.
        </p>
        <p>Wordt je administratie groter, dan kan boekhoudsoftware veel handmatig werk besparen.</p>
        <p>Het gaat daarom minder om de vraag:</p>
        <blockquote>
          <p>
            <strong>“Heb ik een eenmanszaak, dus welk programma moet ik nemen?”</strong>
          </p>
        </blockquote>
        <p>en meer om:</p>
        <blockquote>
          <p>
            <strong>“Hoe uitgebreid is mijn administratie en hoeveel wil ik zelf doen?”</strong>
          </p>
        </blockquote>

        <h2>Wat moet je bijhouden voor je eenmanszaak?</h2>
        <p>Je administratie kan onder andere bestaan uit:</p>
        <ul>
          <li>verkoopfacturen;</li>
          <li>inkoopfacturen;</li>
          <li>zakelijke bonnetjes;</li>
          <li>banktransacties;</li>
          <li>inkomsten en kosten;</li>
          <li>btw-gegevens;</li>
          <li>gegevens voor je inkomstenbelasting;</li>
          <li>contracten en andere zakelijke documenten;</li>
          <li>en eventueel een urenadministratie.</li>
        </ul>
        <p>Hoeveel werk dit oplevert, verschilt sterk per onderneming.</p>
        <p>
          Een freelance designer met vijf klanten en weinig kosten heeft bijvoorbeeld een andere administratie dan een
          aannemer met veel inkopen, zakelijke voertuigen en tientallen transacties per maand.
        </p>
        <p>
          Meer over wat je moet bijhouden lees je in onze gids{' '}
          <Link href="/gidsen/boekhouding-zzp" className="text-warm-orange hover:underline">
            boekhouding voor zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Wanneer is een eenvoudig systeem genoeg?</h2>
        <p>Een uitgebreid boekhoudpakket is niet automatisch nodig omdat je een eenmanszaak hebt.</p>
        <p>Een eenvoudige administratie kan prima werken als je bijvoorbeeld:</p>
        <ul>
          <li>weinig facturen verstuurt;</li>
          <li>weinig zakelijke kosten hebt;</li>
          <li>weinig banktransacties hebt;</li>
          <li>zelf je administratie wilt doen;</li>
          <li>en je administratie overzichtelijk kunt bijhouden.</li>
        </ul>
        <p>
          Je kunt je facturen bijvoorbeeld met een gratis factuurprogramma maken en je inkomsten en kosten daarnaast
          zelf bijhouden.
        </p>

        <h3>FactuurBaas voor je verkoopfacturen</h3>
        <p>
          Met{' '}
          <Link href="/create-invoice" className="text-warm-orange hover:underline">
            FactuurBaas
          </Link>{' '}
          kun je gratis een professionele factuur maken zonder account.
        </p>
        <p>
          Je vult je klant- en factuurgegevens in, maakt de factuur en downloadt deze als PDF. Je verstuurt de PDF
          vervolgens zelf naar je klant.
        </p>
        <p>
          Dat is vooral handig als je nog geen uitgebreide boekhouding nodig hebt, maar wel snel nette facturen wilt
          maken.
        </p>
        <CtaButton />

        <h2>Wanneer is een boekhoudprogramma voor je eenmanszaak handig?</h2>
        <p>Een boekhoudprogramma wordt interessanter zodra je administratie meer werk begint te worden.</p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>veel verkoopfacturen;</li>
          <li>veel zakelijke kosten;</li>
          <li>veel bonnetjes;</li>
          <li>veel banktransacties;</li>
          <li>meerdere zakelijke rekeningen;</li>
          <li>behoefte aan een bankkoppeling;</li>
          <li>automatisch verwerken van transacties;</li>
          <li>overzicht van omzet en kosten;</li>
          <li>of regelmatig btw- en financiële overzichten nodig hebben.</li>
        </ul>
        <p>Het grote voordeel van boekhoudsoftware is niet dat je een eenmanszaak hebt.</p>
        <p>
          Het voordeel is dat je <strong>minder handmatig hoeft te doen</strong>.
        </p>

        <h2>Welk boekhoudprogramma past bij een eenmanszaak?</h2>
        <p>Er bestaat niet één boekhoudprogramma dat voor iedere eenmanszaak het beste is.</p>
        <p>
          Een zzp&apos;er met een eenvoudige administratie kan iets heel anders nodig hebben dan een ondernemer met
          veel transacties.
        </p>
        <p>Je kunt grofweg naar deze situaties kijken:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[32rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Situatie
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Mogelijke oplossing
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Weinig facturen en kosten', 'Factuurtool + eigen administratie'],
                ['Regelmatige inkomsten en kosten', 'Eenvoudig boekhoudprogramma'],
                ['Veel transacties en administratie', 'Uitgebreider boekhoudprogramma'],
                ['Weinig tijd of complexe administratie', 'Boekhoudprogramma + boekhouder'],
              ].map(([situatie, oplossing]) => (
                <tr key={situatie} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">{situatie}</td>
                  <td className="px-4 py-3">{oplossing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>Ook binnen een eenmanszaak kan de behoefte dus behoorlijk verschillen.</p>

        <h2>Gratis boekhoudprogramma voor een eenmanszaak</h2>
        <p>
          Zoek je een <strong>gratis boekhoudprogramma voor je eenmanszaak</strong>, let dan goed op wat er
          daadwerkelijk gratis is.
        </p>
        <p>“Gratis” kan namelijk verschillende dingen betekenen.</p>
        <p>Een programma kan bijvoorbeeld:</p>
        <ul>
          <li>volledig gratis zijn;</li>
          <li>alleen een gratis factuurfunctie hebben;</li>
          <li>tijdelijk gratis zijn;</li>
          <li>een gratis pakket met beperkingen hebben;</li>
          <li>of alleen een gratis proefperiode aanbieden.</li>
        </ul>
        <p>Een gratis factuurtool is bovendien iets anders dan een volledig boekhoudprogramma.</p>
        <p>
          Met een factuurtool maak je vooral verkoopfacturen. Een boekhoudprogramma is gericht op een bredere
          administratie, zoals inkomsten, kosten, banktransacties en btw.
        </p>
        <p>Wil je weten wanneer een gratis oplossing voldoende kan zijn?</p>
        <p>
          <Link href="/gidsen/gratis-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
            Lees meer over gratis boekhoudprogramma&apos;s voor zzp&apos;ers →
          </Link>
        </p>

        <h2>Boekhouding voor een eenmanszaak: zelf doen of uitbesteden?</h2>
        <p>Ook bij een eenmanszaak kun je ervoor kiezen om je administratie zelf te doen.</p>
        <p>
          Dat is vaak interessant wanneer je administratie overzichtelijk is en je er regelmatig tijd voor wilt maken.
          Lees meer in{' '}
          <Link href="/gidsen/zelf-boekhouden-zzp" className="text-warm-orange hover:underline">
            zelf boekhouden als zzp&apos;er
          </Link>
          .
        </p>
        <p>Je kunt ook een boekhouder inschakelen.</p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>Zelf doen</strong>
          <br />→ facturen, kosten en administratie zelf bijhouden.
        </p>
        <p>
          <strong>Software gebruiken</strong>
          <br />→ zelf verantwoordelijk blijven, maar veel handelingen automatiseren.
        </p>
        <p>
          <strong>Boekhouder inschakelen</strong>
          <br />→ een groot deel van de administratie uitbesteden.
        </p>
        <p>
          <strong>Combinatie</strong>
          <br />→ dagelijkse administratie zelf doen en een boekhouder gebruiken voor controle of bepaalde aangiftes.
        </p>
        <p>Er is dus geen noodzaak om alles zelf te doen of juist alles uit te besteden.</p>

        <h2>Hoe kies je een boekhoudpakket voor je eenmanszaak?</h2>
        <p>Kijk niet alleen naar de prijs.</p>
        <p>Let vooral op wat je daadwerkelijk nodig hebt.</p>

        <h3>1. Hoeveel facturen verstuur je?</h3>
        <p>
          Een ondernemer met vijf facturen per maand heeft andere behoeften dan iemand met honderd facturen.
        </p>

        <h3>2. Hoeveel kosten heb je?</h3>
        <p>Veel zakelijke uitgaven betekenen ook meer administratie.</p>

        <h3>3. Hoeveel banktransacties heb je?</h3>
        <p>Bij veel transacties kan automatisering een groot verschil maken.</p>

        <h3>4. Wil je een bankkoppeling?</h3>
        <p>Een bankkoppeling kan helpen om transacties automatisch in je administratie te verwerken.</p>

        <h3>5. Hoeveel wil je zelf doen?</h3>
        <p>Vind je administratie prima om zelf te doen? Dan heb je mogelijk minder automatisering nodig.</p>
        <p>
          Wil je zo weinig mogelijk tijd aan administratie besteden? Dan kan uitgebreidere software interessanter zijn.
        </p>

        <h3>6. Heb je een boekhouder?</h3>
        <p>
          Als je al met een boekhouder werkt, kunnen de eisen aan je software anders zijn dan wanneer je alles zelf
          doet.
        </p>

        <h2>Wat kost een boekhoudprogramma voor een eenmanszaak?</h2>
        <p>De prijs varieert sterk.</p>
        <p>
          Er zijn eenvoudige oplossingen die weinig kosten en uitgebreidere pakketten die tientallen euro&apos;s per
          maand kosten.
        </p>
        <p>Je kunt daarom grofweg denken aan:</p>
        <ul>
          <li>
            <strong>€0:</strong> eigen administratie of bepaalde gratis tools;
          </li>
          <li>
            <strong>ongeveer €5–€10 per maand:</strong> eenvoudige boekhoudsoftware;
          </li>
          <li>
            <strong>ongeveer €10–€20 per maand:</strong> uitgebreidere pakketten;
          </li>
          <li>
            <strong>€20–€40+ per maand:</strong> uitgebreidere automatisering en functies;
          </li>
          <li>
            <strong>boekhouder:</strong> extra kosten afhankelijk van de werkzaamheden.
          </li>
        </ul>
        <p>De goedkoopste optie is niet automatisch de beste.</p>
        <p>
          Als een iets duurder programma je iedere maand meerdere uren administratie bespaart, kan dat uiteindelijk
          juist goedkoper zijn.
        </p>
        <p>
          <Link href="/gidsen/kosten-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
            Lees wat een boekhoudprogramma voor zzp&apos;ers kost →
          </Link>
        </p>

        <h2>Eenmanszaak of zzp&apos;er: is dat hetzelfde?</h2>
        <p>Niet helemaal.</p>
        <p>
          <strong>Eenmanszaak</strong> is een rechtsvorm. <strong>ZZP&apos;er</strong> is geen rechtsvorm, maar een
          manier waarop iemand zelfstandig werkt.
        </p>
        <p>
          Veel zzp&apos;ers hebben een eenmanszaak, maar niet iedere eenmanszaak hoeft op dezelfde manier te werken.
        </p>
        <p>
          Daarom is het logisch dat twee ondernemers met een eenmanszaak verschillende boekhoudprogramma&apos;s nodig
          kunnen hebben.
        </p>
        <p>De omvang en complexiteit van je administratie zijn belangrijker dan alleen de rechtsvorm.</p>

        <h2>Welk boekhoudprogramma heb ik nodig?</h2>
        <p>
          Als je vooral wilt weten welk programma bij jouw situatie past, kun je beter naar je eigen administratie
          kijken.
        </p>
        <p>Denk aan:</p>
        <ul>
          <li>hoeveel facturen je verstuurt;</li>
          <li>hoeveel zakelijke kosten je hebt;</li>
          <li>hoeveel transacties je verwerkt;</li>
          <li>of je btw rekent;</li>
          <li>hoeveel automatisering je wilt;</li>
          <li>en hoeveel van je administratie je zelf wilt doen.</li>
        </ul>
        <p>
          Daarom hebben we bij FactuurBaas een korte <strong>boekhoudprogramma-check</strong> gemaakt.
        </p>
        <p>
          Je krijgt op basis van je antwoorden een indicatie van welke oplossing waarschijnlijk bij jouw situatie past
          en waarom.
        </p>
        <BoekhoudCheckCta />

        <h2>Veelgestelde vragen</h2>
        <h3>Heb ik voor een eenmanszaak een boekhoudprogramma nodig?</h3>
        <p>
          Nee. Je bent niet verplicht om een specifiek boekhoudprogramma te gebruiken. Je moet wel een goede
          administratie bijhouden. Of software handig is, hangt af van de omvang en complexiteit van je administratie.
        </p>
        <h3>Wat is het beste boekhoudprogramma voor een eenmanszaak?</h3>
        <p>
          Dat hangt af van je situatie. Een kleine eenmanszaak met weinig transacties heeft andere behoeften dan een
          onderneming met veel kosten en transacties.
        </p>
        <p>
          <Link href="/blogs/beste-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
            Bekijk de beste boekhoudprogramma&apos;s voor zzp&apos;ers →
          </Link>
        </p>
        <h3>Is er een gratis boekhoudprogramma voor een eenmanszaak?</h3>
        <p>
          Er bestaan gratis oplossingen en programma&apos;s met gratis pakketten of periodes. Let wel op de
          beperkingen en het verschil tussen een gratis factuurprogramma en volledige boekhoudsoftware.
        </p>
        <h3>Kan ik mijn boekhouding van mijn eenmanszaak zelf doen?</h3>
        <p>
          Ja. Je kunt je administratie zelf bijhouden. Je moet er wel voor zorgen dat je administratie compleet en goed
          onderbouwd is.
        </p>
        <h3>Kan ik Excel gebruiken voor mijn eenmanszaak?</h3>
        <p>
          Voor een eenvoudige administratie kan een spreadsheet praktisch zijn. Naarmate je meer facturen, kosten en
          transacties krijgt, kan boekhoudsoftware handiger worden.
        </p>
        <h3>Is een factuurprogramma hetzelfde als een boekhoudprogramma?</h3>
        <p>
          Nee. Een factuurprogramma is vooral gericht op het maken van verkoopfacturen. Een boekhoudprogramma
          ondersteunt een bredere financiële administratie.
        </p>
        <h3>Wanneer moet ik overstappen naar boekhoudsoftware?</h3>
        <p>
          Er is geen vast moment. Een goed moment kan zijn wanneer je administratie veel tijd kost, je veel
          transacties hebt of je meer automatisering en financieel overzicht wilt.
        </p>
        <BoekhoudCheckCta />

        <h2>Conclusie</h2>
        <p>
          Een <strong>boekhoudprogramma voor een eenmanszaak</strong> hoeft niet ingewikkeld te zijn.
        </p>
        <p>
          Heb je weinig facturen, weinig kosten en een overzichtelijke administratie? Dan kan een eenvoudige oplossing
          voldoende zijn.
        </p>
        <p>
          Heb je veel transacties, zakelijke kosten of behoefte aan automatisering? Dan kan een boekhoudprogramma je
          veel handmatig werk besparen.
        </p>
        <p>
          De juiste keuze hangt dus niet alleen af van het feit dat je een eenmanszaak hebt, maar vooral van{' '}
          <strong>hoe je onderneming en administratie eruitzien</strong>.
        </p>
        <p>Wil je snel ontdekken welke oplossing waarschijnlijk bij jou past?</p>
        <BoekhoudCheckCta />
        <CtaButton />
      </>
    ),
  },
  {
    slug: 'moneybird-vs-jortt',
    relatedSlugs: [
      'beste-boekhoudprogramma-zzp',
      'boekhoudprogramma-eenmanszaak',
      'wanneer-boekhoudsoftware-nodig-zzp',
      'gratis-factuurtool-vs-boekhoudprogramma',
      'moneybird-vs-eboekhouden',
      'jortt-vs-eboekhouden',
    ],
    metaTitle: 'Moneybird vs Jortt: welk boekhoudprogramma past bij jou?',
    title: 'Moneybird vs Jortt: welk boekhoudprogramma past bij jou?',
    excerpt:
      'Moneybird of Jortt? Vergelijk prijs, gebruiksgemak, facturatie, automatisering, btw en boekhouding en ontdek welk programma bij jou past.',
    keywords:
      'moneybird vs jortt, moneybird of jortt, moneybird jortt vergelijken, jortt vs moneybird, moneybird jortt, verschil moneybird jortt',
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Blogs/Moneybird%20vs%20Jortt.jpg',
      alt: 'Moneybird vs Jortt: welk boekhoudprogramma past bij jou?',
    },
    datePublished: '2026-09-05',
    dateModified: '2026-09-05',
    faq: [
      {
        question: 'Wat is beter: Moneybird of Jortt?',
        answer:
          'Dat hangt af van wat je belangrijk vindt. Moneybird is vooral sterk in gebruiksgemak, overzicht en facturatie. Jortt onderscheidt zich vooral met vergaande automatisering.',
      },
      {
        question: 'Wat is goedkoper: Moneybird of Jortt?',
        answer:
          'Moneybird heeft momenteel een lager betaald instappakket van €15 per maand. Jortt heeft daarentegen een gratis Starter-pakket, maar daarin zit geen volledige boekhouding.',
      },
      {
        question: 'Is Jortt makkelijker dan Moneybird?',
        answer:
          'Niet per se. Moneybird legt sterk de nadruk op gebruiksgemak en overzicht. Jortt richt zich meer op automatisering. Welke interface je prettiger vindt, is persoonlijk.',
      },
      {
        question: 'Kan ik met beide programma’s facturen maken?',
        answer: 'Ja. Zowel Moneybird als Jortt bieden facturatie en offertes.',
      },
      {
        question: 'Kun je met Moneybird btw-aangifte doen?',
        answer: 'Ja. Moneybird ondersteunt elektronische btw-aangifte.',
      },
      {
        question: 'Kun je met Jortt btw-aangifte doen?',
        answer: 'Ja. Btw-aangifte is onderdeel van de betaalde boekhoudpakketten van Jortt.',
      },
      {
        question: 'Heeft Jortt een gratis versie?',
        answer:
          'Ja. Jortt Starter kost €0 per maand en blijft gratis. Het pakket is gericht op onder andere facturen, offertes, uren, projecten en e-facturatie. Volledige boekhouding zit er niet in.',
      },
      {
        question: 'Heeft Moneybird een gratis versie?',
        answer:
          'Moneybird heeft verschillende betaalde pakketten en een goedkoper Compact-pakket. Daarnaast kun je Moneybird 60 dagen gratis uitproberen.',
      },
      {
        question: "Welk programma is beter voor een zzp'er?",
        answer:
          'Dat hangt af van je administratie. Voor gebruiksgemak en facturatie is Moneybird interessant. Voor vergaande automatisering is Jortt interessant.',
      },
      {
        question: 'Welk boekhoudprogramma past bij mij?',
        answer:
          'Dat hangt af van je aantal facturen, zakelijke kosten, transacties en hoeveel administratie je zelf wilt doen.',
      },
    ],
    content: (
      <>
        <p>
          Twijfel je tussen <strong>Moneybird en Jortt</strong>? Beide zijn populaire online
          boekhoudprogramma&apos;s voor zzp&apos;ers en kleine ondernemers, maar ze leggen andere accenten.
        </p>
        <p>
          Moneybird is sterk in gebruiksgemak, facturatie en een overzichtelijke administratie. Jortt richt zich sterk
          op automatisering en probeert zoveel mogelijk van het boekhoudwerk automatisch voor je te verwerken.
        </p>
        <p>
          Welke het beste bij je past, hangt daarom vooral af van <strong>hoe je wilt boekhouden</strong>.
        </p>
        <p>
          In deze vergelijking bekijken we Moneybird en Jortt op prijs, gebruiksgemak, facturatie, boekhouding,
          automatisering, bankkoppelingen, btw en rapportages.
        </p>
        <p>
          <strong>Kort samengevat:</strong>
        </p>
        <ul>
          <li>
            <strong>Moneybird</strong> is interessant als je vooral een overzichtelijk en gebruiksvriendelijk
            boekhoudprogramma zoekt.
          </li>
          <li>
            <strong>Jortt</strong> is interessant als je zoveel mogelijk van je boekhouding wilt automatiseren.
          </li>
          <li>Beide zijn geschikt voor zzp&apos;ers die hun administratie grotendeels zelf willen doen.</li>
        </ul>

        <h2>Moneybird vs Jortt: snel vergelijken</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[40rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col" />
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Moneybird
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Jortt
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Vanafprijs betaald pakket', '€15 p/m', '€19,95 p/m'],
                ['Gratis optie', 'Ja, beperkt pakket', 'Ja, Jortt Starter'],
                ['Boekhouding in gratis pakket', 'Beperkt / afhankelijk van pakket', 'Nee'],
                ['Factureren', 'Ja', 'Ja'],
                ['Offertes', 'Ja', 'Ja'],
                ['Boekhouding', 'Ja', 'Ja'],
                ['Automatisering', 'Sterk', 'Zeer sterk'],
                ['Bankkoppeling', 'Ja', 'Ja'],
                ['Btw-aangifte', 'Ja', 'Ja'],
                ['Rapportages', 'Ja', 'Ja'],
                ['Sterkste punt', 'Gebruiksgemak & facturatie', 'Automatisering'],
                [
                  'Vooral interessant voor',
                  "ZZP'ers die overzicht willen",
                  "ZZP'ers die veel willen automatiseren",
                ],
              ].map(([label, moneybird, jortt]) => (
                <tr key={label} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">{label}</td>
                  <td className="px-4 py-3">{moneybird}</td>
                  <td className="px-4 py-3">{jortt}</td>
                </tr>
              ))}
              <tr>
                <td className="px-4 py-4" />
                <td className="px-4 py-4">
                  <a
                    {...moneybirdLink}
                    className="inline-flex rounded-full bg-warm-orange px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
                  >
                    Bekijk Moneybird
                  </a>
                </td>
                <td className="px-4 py-4">
                  <a
                    href={JORTT_URL}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex rounded-full bg-warm-orange px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
                  >
                    Bekijk Jortt
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Let op:</strong> prijzen en pakketvoorwaarden kunnen veranderen. Controleer daarom altijd de
          actuele prijs voordat je een abonnement afsluit.
        </p>

        <h2>Wat is het verschil tussen Moneybird en Jortt?</h2>
        <p>
          Het grootste verschil zit niet in de vraag of je met beide kunt factureren of boekhouden.
        </p>
        <p>Dat kunnen ze allebei.</p>
        <p>
          Het verschil zit vooral in <strong>hoeveel werk je zelf wilt doen</strong>.
        </p>
        <p>
          Moneybird geeft je een duidelijke administratie waarin je zelf veel controle houdt over je facturen, kosten
          en boekhouding.
        </p>
        <p>
          Jortt legt juist veel nadruk op automatische verwerking. De ingebouwde Boekhoudbot verwerkt veel
          administratieve handelingen op basis van je transacties en instellingen.
        </p>
        <p>Je kunt het daarom ongeveer zo zien:</p>
        <p>
          <strong>Moneybird:</strong>
        </p>
        <blockquote>
          <p>“Geef mij een overzichtelijke administratie waarmee ik zelf mijn boekhouding kan doen.”</p>
        </blockquote>
        <p>
          <strong>Jortt:</strong>
        </p>
        <blockquote>
          <p>“Laat het programma zoveel mogelijk van mijn boekhouding voor mij doen.”</p>
        </blockquote>
        <p>Dat verschil is belangrijker dan een paar euro prijsverschil per maand.</p>

        <h2>Moneybird</h2>
        <p>
          Moneybird is een online boekhoudprogramma dat zich sterk richt op gebruiksgemak en een overzichtelijke
          administratie.
        </p>
        <p>
          Het programma combineert onder andere facturatie, boekhouding, documenten en banktransacties.
        </p>
        <p>De huidige betaalde pakketten zijn:</p>
        <ul>
          <li>
            <strong>Start: €15 per maand</strong>
          </li>
          <li>
            <strong>Groei: €29 per maand</strong>
          </li>
          <li>
            <strong>Compleet: €41 per maand</strong>
          </li>
        </ul>
        <p>
          Er is daarnaast een Compact-pakket van €3 per maand voor kleine of inactieve administraties.
        </p>
        <p>
          Moneybird biedt een gratis proefperiode van 60 dagen waarin je het pakket kunt uitproberen.
        </p>

        <h3>Sterke punten van Moneybird</h3>
        <ul>
          <li>overzichtelijke interface;</li>
          <li>sterke facturatiemogelijkheden;</li>
          <li>offertes en facturen;</li>
          <li>documenten en bonnetjes verwerken;</li>
          <li>banktransacties verwerken;</li>
          <li>btw-aangifte;</li>
          <li>rapportages;</li>
          <li>koppelingen met andere systemen;</li>
          <li>mogelijkheid om meerdere gebruikers toe te voegen in uitgebreidere pakketten;</li>
          <li>geïntegreerde zakelijke betaalrekening als aanvullende dienst.</li>
        </ul>
        <p>
          Voor veel zzp&apos;ers is vooral de combinatie van <strong>factureren + boekhouden</strong> aantrekkelijk.
        </p>
        <MoneybirdCta />

        <h2>Jortt</h2>
        <p>Jortt richt zich sterk op automatische boekhouding.</p>
        <p>
          Het opvallendste onderdeel is de <strong>Boekhoudbot</strong>, die transacties automatisch probeert te
          verwerken en te categoriseren.
        </p>
        <p>De huidige pakketten zijn:</p>
        <ul>
          <li>
            <strong>Jortt Starter: €0 per maand</strong>
          </li>
          <li>
            <strong>Jortt ZZP: €19,95 per maand</strong>
          </li>
          <li>
            <strong>Jortt MKB: €24,95 per maand</strong>
          </li>
          <li>
            <strong>Jortt Plus: €34,95 per maand</strong>
          </li>
        </ul>
        <p>
          De gratis Starter-versie is vooral gericht op facturen, offertes, uren, projecten en e-facturatie. De
          volledige boekhouding begint bij Jortt ZZP.
        </p>
        <p>Jortt ZZP is specifiek gericht op eenmanszaken.</p>

        <h3>Sterke punten van Jortt</h3>
        <ul>
          <li>sterke automatisering;</li>
          <li>automatische verwerking van banktransacties;</li>
          <li>Boekhoudbot;</li>
          <li>facturen en offertes;</li>
          <li>btw-aangifte;</li>
          <li>financiële rapportages;</li>
          <li>jaarwerk;</li>
          <li>ondersteuning voor verschillende soorten ondernemingen in de uitgebreidere pakketten.</li>
        </ul>
        <p>
          Voor een ondernemer die zo weinig mogelijk handmatig wil boeken, kan Jortt daardoor aantrekkelijk zijn.
        </p>
        <JorttCta />

        <h2>Moneybird vs Jortt: prijs</h2>
        <p>
          Prijs is natuurlijk belangrijk, maar kijk vooral naar <strong>wat je voor die prijs krijgt</strong>.
        </p>

        <h3>Moneybird</h3>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[16rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Pakket
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Prijs per maand
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Compact', '€3'],
                ['Start', '€15'],
                ['Groei', '€29'],
                ['Compleet', '€41'],
              ].map(([pakket, prijs]) => (
                <tr key={pakket} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">{pakket}</td>
                  <td className="px-4 py-3 text-right">{prijs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Moneybird werkt met verschillende limieten voor onder andere transacties, bankrekeningen en gebruikers.
          Naarmate je administratie groter wordt, kun je naar een uitgebreider pakket overstappen.
        </p>

        <h3>Jortt</h3>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[16rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Pakket
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Prijs per maand
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Starter', '€0'],
                ['ZZP', '€19,95'],
                ['MKB', '€24,95'],
                ['Plus', '€34,95'],
              ].map(([pakket, prijs]) => (
                <tr key={pakket} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">{pakket}</td>
                  <td className="px-4 py-3 text-right">{prijs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>Jortt Starter blijft gratis, maar bevat geen volledige boekhouding.</p>
        <p>
          Voor een eenmanszaak die daadwerkelijk de boekhouding in Jortt wil doen, kom je dus uit bij{' '}
          <strong>Jortt ZZP</strong> of een uitgebreider pakket.
        </p>

        <h3>Wie is goedkoper?</h3>
        <p>Dat hangt af van het pakket dat je nodig hebt.</p>
        <p>
          Moneybird heeft een lagere betaalde instapprijs, terwijl Jortt een gratis pakket heeft voor ondernemers die
          vooral willen factureren en offreren.
        </p>
        <p>
          Als je volledige boekhouding wilt, moet je de pakketten inhoudelijk naast elkaar leggen in plaats van alleen
          naar de vanafprijs te kijken.
        </p>
        <p>
          Meer over prijzen lees je in{' '}
          <Link href="/gidsen/kosten-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
            wat kost een boekhoudprogramma voor zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Gebruiksgemak: Moneybird of Jortt?</h2>
        <p>Voor veel ondernemers is dit een van de belangrijkste verschillen.</p>

        <h3>Moneybird</h3>
        <p>
          Moneybird heeft een relatief overzichtelijke interface en is sterk gericht op een eenvoudige workflow.
        </p>
        <p>Je kunt bijvoorbeeld:</p>
        <p>
          <strong>offerte → factuur → betaling → administratie</strong>
        </p>
        <p>in één systeem volgen.</p>
        <p>
          Dat maakt Moneybird aantrekkelijk als je vooral een boekhoudprogramma wilt dat je snel begrijpt.
        </p>

        <h3>Jortt</h3>
        <p>
          Jortt heeft eveneens een gebruiksvriendelijke aanpak, maar het programma legt meer nadruk op automatisering.
        </p>
        <p>Je hoeft daardoor niet iedere administratieve handeling zelf uit te voeren.</p>
        <p>
          Daar staat tegenover dat je moet begrijpen hoe de automatische verwerking van je administratie werkt.
        </p>

        <h3>Winnaar gebruiksgemak: Moneybird</h3>
        <p>
          Als <strong>eenvoud en overzicht</strong> je belangrijkste criteria zijn, zou ik eerder naar Moneybird
          kijken.
        </p>
        <p>
          Als je bereid bent om iets meer aandacht te besteden aan de inrichting om daarna meer te automatiseren, is
          Jortt interessant.
        </p>

        <h2>Factureren: Moneybird vs Jortt</h2>
        <p>Beide programma&apos;s kunnen facturen en offertes maken.</p>
        <p>
          Dat betekent dat je bij beide niet alleen je boekhouding kunt doen, maar ook je facturatie vanuit hetzelfde
          systeem kunt regelen.
        </p>
        <p>
          Moneybird heeft hier een sterke positie, omdat facturatie een belangrijk onderdeel van het product is.
        </p>
        <p>
          Jortt combineert facturatie juist sterk met de automatische verwerking van de administratie.
        </p>

        <h3>Wie is beter voor factureren?</h3>
        <p>
          Voor iemand die vooral veel waarde hecht aan <strong>facturen, offertes en een eenvoudige workflow</strong>,
          zou ik Moneybird kiezen.
        </p>
        <p>
          Wil je vooral dat facturen vervolgens automatisch onderdeel worden van je boekhouding, dan is Jortt ook een
          sterke optie.
        </p>

        <h2>Boekhouding: Moneybird vs Jortt</h2>
        <p>Beide programma&apos;s ondersteunen een volledige zakelijke administratie.</p>
        <p>Het verschil zit vooral in de manier waarop je ermee werkt.</p>
        <p>Bij Moneybird houd je relatief veel directe controle over je administratie.</p>
        <p>Jortt probeert meer van het daadwerkelijke boekhoudwerk automatisch uit te voeren.</p>
        <p>
          Dat maakt Jortt vooral interessant voor ondernemers die niet iedere banktransactie handmatig willen
          verwerken.
        </p>

        <h3>Wie is beter voor boekhouden?</h3>
        <p>
          <strong>Moneybird</strong> als je graag zelf overzicht houdt.
        </p>
        <p>
          <strong>Jortt</strong> als je zoveel mogelijk automatisch wilt laten verwerken.
        </p>

        <h2>Automatisering</h2>
        <p>Hier zit waarschijnlijk het grootste verschil tussen de twee.</p>
        <p>
          Moneybird heeft verschillende vormen van automatisering, waaronder het verwerken van documenten en het
          automatisch verwerken van financiële gegevens in uitgebreidere pakketten.
        </p>
        <p>Jortt heeft automatisering juist als een belangrijk onderdeel van zijn productfilosofie.</p>
        <p>
          De Boekhoudbot probeert transacties automatisch te boeken op basis van je administratie.
        </p>
        <p>Daarom is Jortt vooral interessant voor ondernemers die zeggen:</p>
        <blockquote>
          <p>“Ik wil zo min mogelijk tijd aan mijn boekhouding besteden.”</p>
        </blockquote>
        <p>Moneybird is interessanter voor iemand die zegt:</p>
        <blockquote>
          <p>“Ik wil vooral dat mijn boekhouding duidelijk en eenvoudig blijft.”</p>
        </blockquote>

        <h3>Winnaar automatisering: Jortt</h3>
        <p>
          Als maximale automatisering je belangrijkste criterium is, heeft Jortt hier een duidelijk onderscheidend
          punt.
        </p>

        <h2>Bankkoppeling</h2>
        <p>Een goede bankkoppeling kan veel administratief werk besparen.</p>
        <p>
          Zowel Moneybird als Jortt kunnen banktransacties in je administratie verwerken.
        </p>
        <p>
          Bij Moneybird verschillen de mogelijkheden en limieten per pakket. Bij de uitgebreidere pakketten zijn
          externe bankkoppelingen inbegrepen.
        </p>
        <p>
          Jortt gebruikt bankkoppelingen als belangrijk onderdeel van de automatische boekhouding.
        </p>
        <p>
          Je banktransacties vormen bij Jortt namelijk een belangrijke input voor de automatische verwerking.
        </p>

        <h3>Waar moet je op letten?</h3>
        <p>Kijk niet alleen of een programma “een bankkoppeling” heeft.</p>
        <p>Controleer ook:</p>
        <ul>
          <li>hoeveel bankrekeningen je kunt koppelen;</li>
          <li>hoeveel transacties verwerkt kunnen worden;</li>
          <li>of de koppeling bij jouw bank werkt;</li>
          <li>en of er aanvullende kosten zijn.</li>
        </ul>

        <h2>Btw-aangifte</h2>
        <p>
          Zowel Moneybird als Jortt ondersteunen de btw-administratie en btw-aangifte.
        </p>
        <p>
          Dat betekent dat je btw-gegevens vanuit je administratie kunt gebruiken voor je aangifte.
        </p>
        <p>Bij Jortt is de btw-aangifte onderdeel van de betaalde boekhoudpakketten.</p>
        <p>Bij Moneybird is elektronische btw-aangifte beschikbaar vanaf het Start-pakket.</p>
        <p>
          Voor een normale Nederlandse zzp&apos;er zijn beide daardoor geschikt voor de btw-administratie.
        </p>

        <h2>Rapportages</h2>
        <p>Wil je weten hoe je onderneming ervoor staat, dan zijn rapportages belangrijk.</p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>omzet;</li>
          <li>kosten;</li>
          <li>winst;</li>
          <li>btw;</li>
          <li>balans;</li>
          <li>financiële ontwikkeling.</li>
        </ul>
        <p>Beide programma&apos;s bieden financiële rapportages.</p>
        <p>
          Het verschil zit vooral in de manier waarop de informatie wordt verwerkt en gepresenteerd.
        </p>
        <p>
          Voor een kleine eenmanszaak zullen de verschillen waarschijnlijk minder belangrijk zijn dan de verschillen
          in gebruiksgemak en automatisering.
        </p>
        <p>
          Voor een groeiende onderneming worden uitgebreidere rapportages en automatisering steeds interessanter.
        </p>

        <h2>Voor wie is Moneybird geschikt?</h2>
        <p>Moneybird is vooral interessant als je:</p>
        <ul>
          <li>zzp&apos;er of kleine ondernemer bent;</li>
          <li>een overzichtelijk programma wilt;</li>
          <li>veel waarde hecht aan facturatie;</li>
          <li>zelf controle wilt houden over je administratie;</li>
          <li>offertes en facturen vanuit één systeem wilt regelen;</li>
          <li>een gebruiksvriendelijke interface belangrijk vindt;</li>
          <li>en niet per se maximale automatisering nodig hebt.</li>
        </ul>
        <p>
          <strong>Kort gezegd:</strong>
        </p>
        <blockquote>
          <p>
            <strong>
              Moneybird is een sterke keuze als gebruiksgemak en overzicht voor jou belangrijker zijn dan maximale
              automatisering.
            </strong>
          </p>
        </blockquote>
        <MoneybirdCta />

        <h2>Voor wie is Jortt geschikt?</h2>
        <p>Jortt is vooral interessant als je:</p>
        <ul>
          <li>je boekhouding grotendeels zelf wilt doen;</li>
          <li>zo veel mogelijk wilt automatiseren;</li>
          <li>weinig handmatig boekwerk wilt;</li>
          <li>een eenmanszaak hebt;</li>
          <li>banktransacties automatisch wilt laten verwerken;</li>
          <li>en het prettig vindt als software een groter deel van je administratie overneemt.</li>
        </ul>
        <p>
          <strong>Kort gezegd:</strong>
        </p>
        <blockquote>
          <p>
            <strong>
              Jortt is een sterke keuze als je vooral zo weinig mogelijk handmatig boekhoudwerk wilt doen.
            </strong>
          </p>
        </blockquote>
        <JorttCta />

        <h2>Moneybird of Jortt: welke moet je kiezen?</h2>
        <p>Er is geen universele winnaar.</p>

        <h3>Kies eerder voor Moneybird als:</h3>
        <ul>
          <li>gebruiksgemak voorop staat</li>
          <li>je veel met facturen en offertes werkt</li>
          <li>je een overzichtelijke administratie wilt</li>
          <li>je graag zelf controle houdt</li>
          <li>je een eenvoudige workflow belangrijk vindt</li>
        </ul>

        <h3>Kies eerder voor Jortt als:</h3>
        <ul>
          <li>automatisering voorop staat</li>
          <li>je zo min mogelijk handmatig wilt boeken</li>
          <li>je banktransacties automatisch wilt laten verwerken</li>
          <li>je administratie zoveel mogelijk zelf wilt laten lopen</li>
          <li>je bereid bent iets meer met de inrichting van je boekhouding bezig te zijn</li>
        </ul>

        <h2>Moneybird vs Jortt voor starters</h2>
        <p>Ben je net begonnen als zzp&apos;er?</p>
        <p>Dan zou ik niet automatisch het meest uitgebreide pakket nemen.</p>
        <p>Kijk eerst naar:</p>
        <ul>
          <li>hoeveel facturen je verwacht;</li>
          <li>hoeveel zakelijke kosten je hebt;</li>
          <li>hoeveel transacties je hebt;</li>
          <li>of je een bankkoppeling nodig hebt;</li>
          <li>hoeveel tijd je aan administratie wilt besteden.</li>
        </ul>
        <p>
          Een startende zzp&apos;er met vijf klanten en weinig kosten heeft waarschijnlijk andere behoeften dan
          iemand die vanaf dag één tientallen transacties per week verwerkt.
        </p>
        <p>Wil je eerst bepalen of je überhaupt een boekhoudprogramma nodig hebt?</p>
        <BoekhoudCheckCta />

        <h2>Moneybird vs Jortt voor een eenmanszaak</h2>
        <p>Beide programma&apos;s zijn interessant voor een eenmanszaak.</p>
        <p>
          Jortt heeft hiervoor specifiek een ZZP-pakket dat gericht is op de eenmanszaak. Meer over boekhouden voor
          eenmanszaken lees je in{' '}
          <Link href="/blogs/boekhoudprogramma-eenmanszaak" className="text-warm-orange hover:underline">
            boekhoudprogramma voor een eenmanszaak
          </Link>
          .
        </p>
        <p>
          Bij Moneybird kun je afhankelijk van je behoeften uit verschillende pakketten kiezen.
        </p>
        <p>
          Voor een eenvoudige eenmanszaak is vooral de vraag hoeveel administratie je hebt en hoeveel daarvan je wilt
          automatiseren.
        </p>
        <p>
          <strong>Eenmanszaak + weinig administratie →</strong> kijk vooral naar eenvoud en prijs.
        </p>
        <p>
          <strong>Eenmanszaak + veel transacties →</strong> automatisering en bankkoppeling worden belangrijker.
        </p>
        <p>
          <strong>Eenmanszaak + veel facturen →</strong> kijk goed naar de facturatiemogelijkheden.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Wat is beter: Moneybird of Jortt?</h3>
        <p>
          Dat hangt af van wat je belangrijk vindt. Moneybird is vooral sterk in gebruiksgemak, overzicht en
          facturatie. Jortt onderscheidt zich vooral met vergaande automatisering.
        </p>
        <h3>Wat is goedkoper: Moneybird of Jortt?</h3>
        <p>
          Moneybird heeft momenteel een lager betaald instappakket van €15 per maand. Jortt heeft daarentegen een
          gratis Starter-pakket, maar daarin zit geen volledige boekhouding.
        </p>
        <h3>Is Jortt makkelijker dan Moneybird?</h3>
        <p>
          Niet per se. Moneybird legt sterk de nadruk op gebruiksgemak en overzicht. Jortt richt zich meer op
          automatisering. Welke interface je prettiger vindt, is persoonlijk.
        </p>
        <h3>Kan ik met beide programma&apos;s facturen maken?</h3>
        <p>Ja. Zowel Moneybird als Jortt bieden facturatie en offertes.</p>
        <h3>Kun je met Moneybird btw-aangifte doen?</h3>
        <p>Ja. Moneybird ondersteunt elektronische btw-aangifte.</p>
        <h3>Kun je met Jortt btw-aangifte doen?</h3>
        <p>Ja. Btw-aangifte is onderdeel van de betaalde boekhoudpakketten van Jortt.</p>
        <h3>Heeft Jortt een gratis versie?</h3>
        <p>
          Ja. Jortt Starter kost €0 per maand en blijft gratis. Het pakket is gericht op onder andere facturen,
          offertes, uren, projecten en e-facturatie. Volledige boekhouding zit er niet in.
        </p>
        <h3>Heeft Moneybird een gratis versie?</h3>
        <p>
          Moneybird heeft verschillende betaalde pakketten en een goedkoper Compact-pakket. Daarnaast kun je
          Moneybird 60 dagen gratis uitproberen.
        </p>
        <h3>Welk programma is beter voor een zzp&apos;er?</h3>
        <p>
          Dat hangt af van je administratie. Voor gebruiksgemak en facturatie is Moneybird interessant. Voor
          vergaande automatisering is Jortt interessant.
        </p>
        <h3>Welk boekhoudprogramma past bij mij?</h3>
        <p>
          Dat hangt af van je aantal facturen, zakelijke kosten, transacties en hoeveel administratie je zelf wilt
          doen.
        </p>
        <BoekhoudCheckCta />

        <h2>Conclusie: Moneybird of Jortt?</h2>
        <p>
          <strong>
            Moneybird en Jortt zijn allebei sterke boekhoudprogramma&apos;s, maar ze hebben een ander uitgangspunt.
          </strong>
        </p>
        <p>
          Moneybird is vooral aantrekkelijk als je een{' '}
          <strong>duidelijk, gebruiksvriendelijk boekhoudprogramma met sterke facturatie</strong> zoekt.
        </p>
        <p>
          Jortt is vooral interessant als je <strong>zoveel mogelijk van je boekhouding wilt automatiseren</strong>.
        </p>
        <p>Daarom zou ik niet vragen:</p>
        <blockquote>
          <p>“Welke is absoluut de beste?”</p>
        </blockquote>
        <p>Maar:</p>
        <blockquote>
          <p>
            <strong>“Welke manier van boekhouden past bij mij?”</strong>
          </p>
        </blockquote>
        <p>
          Wil je vooral zelf de controle houden en een eenvoudige administratie? Kijk dan naar{' '}
          <strong>Moneybird</strong>.
        </p>
        <p>
          Wil je vooral zo min mogelijk handmatig boekhouden? Kijk dan naar <strong>Jortt</strong>.
        </p>
        <MoneybirdJorttCtas />
        <p>Twijfel je nog?</p>
        <BoekhoudCheckCta />
        <p>
          Of bekijk onze bredere vergelijking:{' '}
          <Link href="/blogs/beste-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
            beste boekhoudprogramma&apos;s voor zzp&apos;ers
          </Link>
          . Of vergelijk Moneybird met e-Boekhouden.nl in{' '}
          <Link href="/blogs/moneybird-vs-eboekhouden" className="text-warm-orange hover:underline">
            Moneybird vs e-Boekhouden.nl
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    slug: 'moneybird-vs-eboekhouden',
    relatedSlugs: [
      'beste-boekhoudprogramma-zzp',
      'moneybird-vs-jortt',
      'boekhoudprogramma-eenmanszaak',
      'wanneer-boekhoudsoftware-nodig-zzp',
      'jortt-vs-eboekhouden',
    ],
    metaTitle: 'Moneybird vs e-Boekhouden.nl: welk boekhoudprogramma past bij jou?',
    title: 'Moneybird vs e-Boekhouden.nl: welk boekhoudprogramma past bij jou?',
    excerpt:
      'Moneybird of e-Boekhouden.nl? Vergelijk prijs, gebruiksgemak, facturatie, boekhouding, automatisering en btw en ontdek welk programma bij jou past.',
    keywords:
      'moneybird vs eboekhouden, moneybird of eboekhouden, moneybird eboekhouden vergelijken, eboekhouden vs moneybird, moneybird e-boekhouden, verschil moneybird eboekhouden',
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Blogs/Moneybird%20vs%20e-Boekhouden.nl.jpg',
      alt: 'Moneybird vs e-Boekhouden.nl: welk boekhoudprogramma past bij jou?',
    },
    datePublished: '2026-09-05',
    dateModified: '2026-09-05',
    faq: [
      {
        question: 'Wat is beter: Moneybird of e-Boekhouden.nl?',
        answer:
          'Dat hangt af van wat je belangrijk vindt. Moneybird is vooral sterk in gebruiksgemak en workflow. e-Boekhouden.nl onderscheidt zich vooral met prijs en uitgebreide boekhoudfunctionaliteit.',
      },
      {
        question: 'Wat is goedkoper: Moneybird of e-Boekhouden.nl?',
        answer:
          'e-Boekhouden.nl is momenteel goedkoper. Het huidige ZZP-tarief ligt onder de prijs van het instappakket van Moneybird. Daarnaast is er voor starters een aanbod waarbij de eerste 15 maanden gratis zijn.',
      },
      {
        question: 'Is Moneybird makkelijker dan e-Boekhouden.nl?',
        answer:
          'Moneybird legt sterk de nadruk op gebruiksgemak en overzicht. e-Boekhouden.nl heeft een bredere boekhoudomgeving. Welke je makkelijker vindt, blijft deels persoonlijk.',
      },
      {
        question: 'Kun je met Moneybird facturen maken?',
        answer: 'Ja. Facturatie is een belangrijk onderdeel van Moneybird.',
      },
      {
        question: 'Kun je met e-Boekhouden.nl facturen maken?',
        answer: 'Ja. e-Boekhouden.nl biedt naast boekhouding ook facturatie.',
      },
      {
        question: 'Kun je met Moneybird btw-aangifte doen?',
        answer: 'Ja. Moneybird ondersteunt de btw-administratie en elektronische btw-aangifte.',
      },
      {
        question: 'Kun je met e-Boekhouden.nl btw-aangifte doen?',
        answer: 'Ja. e-Boekhouden.nl ondersteunt de btw-administratie en btw-aangifte.',
      },
      {
        question: 'Is e-Boekhouden.nl gratis?',
        answer:
          'Voor starters is er momenteel een aanbod waarbij je de eerste 15 maanden gratis kunt gebruiken. Daarnaast heeft e-Boekhouden.nl betaalde pakketten. Controleer de actuele voorwaarden voordat je je aanmeldt.',
      },
      {
        question: 'Heeft Moneybird een gratis versie?',
        answer:
          'Moneybird heeft een gratis proefperiode van 60 dagen. Daarnaast zijn er verschillende betaalde pakketten.',
      },
      {
        question: "Welk programma is beter voor een zzp'er?",
        answer:
          'Voor gebruiksgemak en een overzichtelijke administratie is Moneybird interessant. Als prijs en brede boekhoudfunctionaliteit belangrijker zijn, is e-Boekhouden.nl interessant.',
      },
      {
        question: 'Welk programma past bij mijn eenmanszaak?',
        answer:
          'Dat hangt af van je aantal facturen, kosten, banktransacties en hoeveel administratie je zelf wilt doen.',
      },
    ],
    content: (
      <>
        <p>
          Twijfel je tussen <strong>Moneybird en e-Boekhouden.nl</strong>? Beide zijn online boekhoudprogramma&apos;s
          waarmee je als zzp&apos;er of kleine ondernemer je administratie kunt bijhouden, facturen kunt maken en je
          btw-administratie kunt regelen.
        </p>
        <p>Toch zijn er duidelijke verschillen.</p>
        <p>
          <strong>Moneybird</strong> richt zich sterk op gebruiksgemak, een moderne administratie en een prettige
          workflow voor factureren en boekhouden.
        </p>
        <p>
          <strong>e-Boekhouden.nl</strong> onderscheidt zich vooral met een brede boekhoudoplossing en een relatief
          lage prijs. Voor starters zijn er bovendien aantrekkelijke mogelijkheden om het programma tijdelijk gratis te
          gebruiken.
        </p>
        <p>Maar welke is beter voor jou?</p>
        <p>
          In deze vergelijking zetten we <strong>Moneybird en e-Boekhouden.nl</strong> naast elkaar op prijs,
          gebruiksgemak, facturatie, boekhouding, automatisering, bankkoppelingen, btw en rapportages.
        </p>
        <p>
          <strong>Kort gezegd:</strong>
        </p>
        <ul>
          <li>
            <strong>Moneybird</strong> is interessant als je vooral een gebruiksvriendelijk en overzichtelijk
            programma wilt.
          </li>
          <li>
            <strong>e-Boekhouden.nl</strong> is interessant als prijs en uitgebreide boekhoudfunctionaliteit zwaar
            meewegen.
          </li>
          <li>Voor een eenvoudige eenmanszaak kunnen beide geschikt zijn.</li>
        </ul>

        <h2>Moneybird vs e-Boekhouden.nl: snel vergelijken</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[40rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col" />
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Moneybird
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  e-Boekhouden.nl
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Betaalde instap', 'Vanaf €15 p/m', 'Vanaf €4,98 p/m voor het huidige ZZP-aanbod'],
                ['Startersaanbod', '60 dagen gratis proberen', 'Eerste 15 maanden gratis voor starters'],
                ['Facturen maken', '✓', '✓'],
                ['Offertes', '✓', '✓'],
                ['Boekhouding', '✓', '✓'],
                ['Bankkoppeling', '✓', '✓'],
                ['Btw-administratie', '✓', '✓'],
                ['Btw-aangifte', '✓', '✓'],
                ['Automatisering', 'Sterk', 'Sterk'],
                ['Rapportages', '✓', '✓'],
                ['Sterk punt', 'Gebruiksgemak & workflow', 'Prijs & boekhoudfunctionaliteit'],
                [
                  'Interessant voor',
                  "ZZP'ers & kleine bedrijven",
                  "ZZP'ers & ondernemers die veel waarde aan prijs hechten",
                ],
              ].map(([label, moneybird, eboekhouden]) => (
                <tr key={label} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">{label}</td>
                  <td className="px-4 py-3">{moneybird}</td>
                  <td className="px-4 py-3">{eboekhouden}</td>
                </tr>
              ))}
              <tr>
                <td className="px-4 py-4" colSpan={3}>
                  <a
                    {...moneybirdLink}
                    className="flex w-full items-center justify-center rounded-full bg-warm-orange px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-600"
                  >
                    Bekijk Moneybird
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Let op:</strong> prijzen, pakketinhoud en acties kunnen veranderen. Controleer daarom altijd de
          actuele voorwaarden voordat je een abonnement afsluit.
        </p>

        <h2>Wat is het verschil tussen Moneybird en e-Boekhouden.nl?</h2>
        <p>Beide programma&apos;s kunnen veel van dezelfde basiszaken.</p>
        <p>Je kunt met beide onder andere:</p>
        <ul>
          <li>je administratie bijhouden;</li>
          <li>facturen maken;</li>
          <li>kosten verwerken;</li>
          <li>banktransacties verwerken;</li>
          <li>btw bijhouden;</li>
          <li>financiële overzichten bekijken.</li>
        </ul>
        <p>
          Het verschil zit daarom vooral in <strong>de manier waarop je werkt en wat je belangrijk vindt</strong>.
        </p>
        <p>
          Moneybird legt veel nadruk op een overzichtelijke gebruikerservaring en een eenvoudige workflow.
        </p>
        <p>
          e-Boekhouden.nl richt zich sterk op een complete boekhoudomgeving tegen een relatief lage prijs.
        </p>
        <p>Je kunt het verschil daarom ongeveer zo samenvatten:</p>
        <blockquote>
          <p>
            <strong>Moneybird:</strong> gebruiksgemak en een moderne workflow.
          </p>
        </blockquote>
        <blockquote>
          <p>
            <strong>e-Boekhouden.nl:</strong> veel boekhoudfunctionaliteit voor relatief weinig geld.
          </p>
        </blockquote>

        <h2>Moneybird</h2>
        <p>
          Moneybird is een online boekhoudprogramma voor onder andere zzp&apos;ers, freelancers en kleine bedrijven.
        </p>
        <p>
          Het programma combineert facturatie met boekhouding, waardoor je niet met een apart factuurprogramma en
          boekhoudprogramma hoeft te werken.
        </p>
        <p>De huidige pakketten van Moneybird zijn:</p>
        <ul>
          <li>
            <strong>Compact: €3 per maand</strong>
          </li>
          <li>
            <strong>Start: €15 per maand</strong>
          </li>
          <li>
            <strong>Groei: €29 per maand</strong>
          </li>
          <li>
            <strong>Compleet: €41 per maand</strong>
          </li>
        </ul>
        <p>De mogelijkheden en limieten verschillen per pakket.</p>
        <p>
          Moneybird biedt daarnaast een <strong>gratis proefperiode van 60 dagen</strong>.
        </p>

        <h3>Sterke punten van Moneybird</h3>
        <p>Moneybird is vooral sterk in:</p>
        <ul>
          <li>gebruiksgemak;</li>
          <li>facturatie;</li>
          <li>offertes;</li>
          <li>documenten en bonnetjes;</li>
          <li>banktransacties;</li>
          <li>btw-administratie;</li>
          <li>financiële rapportages;</li>
          <li>koppelingen;</li>
          <li>en een overzichtelijke workflow.</li>
        </ul>
        <p>
          Voor een zzp&apos;er die zijn administratie zelf wil doen, kan dat een groot voordeel zijn.
        </p>
        <MoneybirdCta />

        <h2>e-Boekhouden.nl</h2>
        <p>
          e-Boekhouden.nl is een online boekhoudprogramma dat zich richt op administratie, boekhouding en facturatie.
        </p>
        <p>Het programma heeft verschillende pakketten.</p>
        <p>
          Op het moment van schrijven wordt voor het ZZP-pakket <strong>€4,98 per maand</strong> weergegeven, tegenover
          een regulier tarief van €9,95 per maand.
        </p>
        <p>
          Daarnaast is er een Standaard-pakket voor <strong>€7,25 per maand</strong> tegenover €14,50 regulier.
        </p>
        <p>
          Voor ondernemers die zowel onbeperkt boekhouden als factureren willen combineren, is er een pakket van{' '}
          <strong>€12 per maand</strong> tegenover €24 regulier.
        </p>
        <p>
          Voor starters biedt e-Boekhouden.nl bovendien een mogelijkheid om het programma de eerste{' '}
          <strong>15 maanden gratis</strong> te gebruiken.
        </p>
        <p>De exacte prijs en voorwaarden kunnen veranderen.</p>

        <h3>Sterke punten van e-Boekhouden.nl</h3>
        <p>e-Boekhouden.nl is vooral interessant als je:</p>
        <ul>
          <li>lage maandelijkse kosten belangrijk vindt;</li>
          <li>een uitgebreide boekhoudomgeving zoekt;</li>
          <li>naast boekhouden ook wilt factureren;</li>
          <li>je administratie zelf wilt doen;</li>
          <li>en niet per se voor een modernere interface wilt betalen.</li>
        </ul>
        <EBoekhoudenCta />

        <h2>Moneybird vs e-Boekhouden.nl: prijs</h2>
        <p>Dit is waarschijnlijk het duidelijkste verschil tussen de twee.</p>
        <p>Moneybird heeft een betaald instappakket van €15 per maand voor Start.</p>
        <p>
          e-Boekhouden.nl heeft momenteel een aanzienlijk lagere prijs voor het ZZP-pakket en biedt daarnaast voor
          starters de eerste 15 maanden gratis.
        </p>
        <p>
          Daarmee is e-Boekhouden.nl op het eerste gezicht de aantrekkelijkere optie als{' '}
          <strong>prijs je belangrijkste criterium is</strong>.
        </p>
        <p>Maar alleen naar de maandprijs kijken is niet genoeg.</p>
        <p>
          Stel dat je €10 per maand meer betaalt voor software die je veel makkelijker vindt werken. Als dat je iedere
          maand tijd bespaart, kan dat verschil het waard zijn.
        </p>

        <h3>Wat betaal je per jaar?</h3>
        <p>Als je puur naar de genoemde maandprijzen kijkt:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[32rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col" />
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Per maand
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Per jaar
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Moneybird Start', '€15', '€180'],
                ['e-Boekhouden.nl ZZP, huidig tarief', '€4,98', '€59,76'],
                ['e-Boekhouden.nl Standaard, huidig tarief', '€7,25', '€87'],
                ['e-Boekhouden.nl Standaard + Factureren, huidig tarief', '€12', '€144'],
              ].map(([label, maand, jaar]) => (
                <tr key={label} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">{label}</td>
                  <td className="px-4 py-3 text-right">{maand}</td>
                  <td className="px-4 py-3 text-right">{jaar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Dit zijn rekenkundige jaarbedragen op basis van de genoemde maandprijzen. Acties en voorwaarden kunnen
          wijzigen.
        </p>
        <p>
          <strong>Puur op prijs wint e-Boekhouden.nl duidelijk.</strong>
        </p>
        <p>Maar prijs is maar één onderdeel van de keuze.</p>
        <p>
          Meer over prijzen lees je in{' '}
          <Link href="/gidsen/kosten-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
            wat kost een boekhoudprogramma voor zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Gebruiksgemak: Moneybird of e-Boekhouden.nl?</h2>
        <p>Voor veel zzp&apos;ers is gebruiksgemak misschien wel belangrijker dan de prijs.</p>
        <p>Je gaat je boekhoudprogramma immers regelmatig gebruiken.</p>

        <h3>Moneybird</h3>
        <p>Moneybird staat sterk op het gebied van overzicht en gebruiksvriendelijkheid.</p>
        <p>
          De interface is gericht op ondernemers die niet iedere dag met boekhouden bezig willen zijn.
        </p>
        <p>Je kunt bijvoorbeeld je verkoopproces en administratie vanuit dezelfde omgeving beheren.</p>

        <h3>e-Boekhouden.nl</h3>
        <p>
          e-Boekhouden.nl biedt veel functionaliteit en heeft daardoor een bredere boekhoudomgeving.
        </p>
        <p>Dat kan juist een voordeel zijn als je veel mogelijkheden wilt.</p>
        <p>
          Voor iemand die alleen een eenvoudige administratie heeft, kan een uitgebreider systeem soms wat minder
          eenvoudig aanvoelen.
        </p>

        <h3>Wie wint op gebruiksgemak?</h3>
        <p>
          <strong>Moneybird</strong> zou ik kiezen als gebruiksgemak en een moderne gebruikerservaring voor jou zwaar
          wegen.
        </p>
        <p>
          <strong>e-Boekhouden.nl</strong> is interessanter als je vooral veel functionaliteit voor een lage prijs
          wilt.
        </p>

        <h2>Factureren: Moneybird vs e-Boekhouden.nl</h2>
        <p>Beide programma&apos;s kunnen facturen maken.</p>
        <p>
          Dat betekent dat je niet per se een apart factuurprogramma nodig hebt als je voor een van deze systemen
          kiest.
        </p>
        <p>Je kunt je facturen vervolgens direct onderdeel maken van je administratie.</p>

        <h3>Moneybird</h3>
        <p>Facturatie is een belangrijk onderdeel van Moneybird.</p>
        <p>Je kunt onder andere werken met:</p>
        <ul>
          <li>facturen;</li>
          <li>offertes;</li>
          <li>klanten;</li>
          <li>producten en diensten;</li>
          <li>betalingen;</li>
          <li>documenten.</li>
        </ul>
        <p>
          De workflow van offerte naar factuur en vervolgens naar betaling is daardoor overzichtelijk.
        </p>

        <h3>e-Boekhouden.nl</h3>
        <p>Ook e-Boekhouden.nl biedt facturatie naast de boekhouding.</p>
        <p>
          Dit is vooral interessant als je één systeem wilt gebruiken voor zowel je administratie als je
          verkoopfacturen.
        </p>

        <h3>Wie is beter voor factureren?</h3>
        <p>
          Hier zou ik <strong>Moneybird een lichte voorsprong</strong> geven als je vooral kijkt naar de
          gebruikerservaring en workflow.
        </p>
        <p>
          Maar als je vooral een goedkoop systeem zoekt waarin facturatie en boekhouding samenkomen, is
          e-Boekhouden.nl zeer interessant.
        </p>

        <h2>Boekhouding: Moneybird vs e-Boekhouden.nl</h2>
        <p>Voor de daadwerkelijke boekhouding zijn beide systemen geschikt.</p>
        <p>
          Je kunt onder andere inkomsten en kosten verwerken en je financiële administratie bijhouden.
        </p>
        <p>
          Het verschil zit meer in de manier waarop de programma&apos;s zijn opgebouwd en welke functies je belangrijk
          vindt.
        </p>

        <h3>Moneybird</h3>
        <p>
          Moneybird probeert boekhouden toegankelijk te maken voor ondernemers die niet van administratie houden.
        </p>
        <p>De kracht zit in de combinatie van:</p>
        <p>
          <strong>factureren + documenten + bank + boekhouding</strong>
        </p>
        <p>in één overzichtelijke omgeving.</p>

        <h3>e-Boekhouden.nl</h3>
        <p>e-Boekhouden.nl biedt juist een brede boekhoudomgeving.</p>
        <p>
          Dat maakt het interessant als je relatief veel functionaliteit wilt zonder een hoog maandbedrag te betalen.
        </p>

        <h3>Wie wint?</h3>
        <p>
          Voor <strong>eenvoud en workflow:</strong> Moneybird.
        </p>
        <p>
          Voor <strong>veel functionaliteit tegen lage kosten:</strong> e-Boekhouden.nl.
        </p>

        <h2>Automatisering</h2>
        <p>
          Automatisering kan een groot verschil maken in hoeveel tijd je iedere maand aan administratie kwijt bent.
        </p>
        <p>
          Beide programma&apos;s bieden mogelijkheden om administratieve processen te automatiseren.
        </p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>banktransacties;</li>
          <li>documenten;</li>
          <li>facturen;</li>
          <li>terugkerende handelingen;</li>
          <li>btw-verwerking.</li>
        </ul>
        <p>
          Moneybird heeft daarnaast functies voor automatische documentverwerking en automatisering van administratieve
          handelingen.
        </p>
        <p>
          e-Boekhouden.nl biedt eveneens verschillende mogelijkheden om je administratie efficiënter te verwerken.
        </p>
        <p>Hier zou ik niet simpelweg één winnaar aanwijzen.</p>
        <p>
          De vraag is vooral <strong>welke automatisering je daadwerkelijk gebruikt</strong>.
        </p>
        <p>Als je een keuze maakt, kijk dan bijvoorbeeld naar:</p>
        <ul>
          <li>hoe banktransacties worden verwerkt;</li>
          <li>hoeveel je automatisch kunt laten verwerken;</li>
          <li>hoeveel handmatige controles nodig zijn;</li>
          <li>en hoe goed het programma bij jouw manier van werken past.</li>
        </ul>

        <h2>Bankkoppeling</h2>
        <p>Een bankkoppeling kan een van de grootste tijdsbesparingen zijn bij je boekhouding.</p>
        <p>
          In plaats van iedere transactie handmatig over te nemen, kunnen banktransacties rechtstreeks in je
          administratie terechtkomen.
        </p>
        <p>Zowel Moneybird als e-Boekhouden.nl ondersteunen bankkoppelingen.</p>
        <p>
          Controleer bij je keuze wel of jouw bank wordt ondersteund en wat de mogelijkheden binnen het gekozen pakket
          zijn.
        </p>
        <p>
          Een bankkoppeling is vooral interessant als je iedere maand veel zakelijke betalingen en ontvangsten hebt.
        </p>

        <h2>Btw: Moneybird vs e-Boekhouden.nl</h2>
        <p>
          Voor de meeste Nederlandse zzp&apos;ers is btw een belangrijk onderdeel van de administratie.
        </p>
        <p>Zowel Moneybird als e-Boekhouden.nl ondersteunen de btw-administratie.</p>
        <p>
          Je kunt je omzet en kosten verwerken en de btw-gegevens vanuit je administratie gebruiken voor je aangifte.
        </p>
        <p>Welke btw-behandeling je moet toepassen, hangt uiteraard af van je situatie.</p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>21% btw;</li>
          <li>9% btw;</li>
          <li>0% btw;</li>
          <li>vrijgestelde omzet;</li>
          <li>buitenlandse klanten;</li>
          <li>of de kleineondernemersregeling.</li>
        </ul>
        <p>Een boekhoudprogramma helpt je met de administratie, maar vervangt geen fiscaal advies.</p>

        <h2>Rapportages</h2>
        <p>
          Een goed boekhoudprogramma moet je niet alleen helpen met invoeren, maar ook inzicht geven in je bedrijf.
        </p>
        <p>Denk aan:</p>
        <ul>
          <li>omzet;</li>
          <li>kosten;</li>
          <li>winst;</li>
          <li>btw;</li>
          <li>balans;</li>
          <li>openstaande facturen;</li>
          <li>financiële ontwikkeling.</li>
        </ul>
        <p>Zowel Moneybird als e-Boekhouden.nl bieden financiële overzichten en rapportages.</p>
        <p>
          Voor een kleine eenmanszaak zullen de verschillen hierin waarschijnlijk minder belangrijk zijn dan prijs en
          gebruiksgemak.
        </p>
        <p>
          Naarmate je onderneming groeit, kunnen uitgebreidere rapportages belangrijker worden.
        </p>

        <h2>Moneybird vs e-Boekhouden.nl voor zzp&apos;ers</h2>
        <p>Voor een gemiddelde zzp&apos;er zijn beide programma&apos;s interessante opties.</p>

        <h3>Moneybird past waarschijnlijk beter als je:</h3>
        <ul>
          <li>een overzichtelijk programma wilt;</li>
          <li>veel waarde hecht aan gebruiksgemak;</li>
          <li>facturen en boekhouding in één omgeving wilt;</li>
          <li>een moderne gebruikerservaring belangrijk vindt;</li>
          <li>weinig tijd aan administratie wilt besteden;</li>
          <li>en bereid bent daar wat meer voor te betalen.</li>
        </ul>
        <MoneybirdCta />

        <h3>e-Boekhouden.nl past waarschijnlijk beter als je:</h3>
        <ul>
          <li>de maandelijkse kosten laag wilt houden;</li>
          <li>veel boekhoudfunctionaliteit wilt;</li>
          <li>facturatie en boekhouding wilt combineren;</li>
          <li>zelf je administratie wilt doen;</li>
          <li>en prijs belangrijker vindt dan een zeer moderne interface.</li>
        </ul>
        <EBoekhoudenCta />

        <h2>Moneybird vs e-Boekhouden.nl voor een eenmanszaak</h2>
        <p>Beide programma&apos;s zijn geschikt voor een eenmanszaak.</p>
        <p>
          Maar ook hier geldt: <strong>een eenmanszaak is niet automatisch een eenvoudige administratie</strong>.
        </p>
        <p>
          Een freelancer met vijf klanten en weinig kosten heeft bijvoorbeeld veel minder administratie dan een
          ondernemer met tientallen klanten, veel inkopen en honderden banktransacties. Lees meer in{' '}
          <Link href="/blogs/boekhoudprogramma-eenmanszaak" className="text-warm-orange hover:underline">
            boekhoudprogramma voor een eenmanszaak
          </Link>
          .
        </p>

        <h3>Kleine administratie</h3>
        <p>Heb je weinig facturen en weinig kosten?</p>
        <p>Dan kan gebruiksgemak belangrijker zijn dan een enorme hoeveelheid functies.</p>

        <h3>Groeiende administratie</h3>
        <p>Krijg je steeds meer facturen en transacties?</p>
        <p>Dan worden automatisering, bankkoppelingen en rapportages belangrijker.</p>

        <h3>Prijsgevoelige ondernemer</h3>
        <p>Wil je vooral je maandelijkse kosten laag houden?</p>
        <p>Dan heeft e-Boekhouden.nl een duidelijk voordeel.</p>

        <h2>Moneybird vs e-Boekhouden.nl voor starters</h2>
        <p>Ben je net begonnen met je eenmanszaak?</p>
        <p>Dan hoef je niet meteen het duurste boekhoudpakket te nemen.</p>
        <p>Begin met de vraag:</p>
        <p>
          <strong>Hoeveel administratie verwacht ik?</strong>
        </p>
        <p>Denk aan:</p>
        <ul>
          <li>aantal klanten;</li>
          <li>aantal facturen;</li>
          <li>zakelijke kosten;</li>
          <li>banktransacties;</li>
          <li>btw;</li>
          <li>en hoeveel administratie je zelf wilt doen.</li>
        </ul>
        <p>
          Voor starters is e-Boekhouden.nl extra interessant vanwege het huidige aanbod waarbij starters de eerste 15
          maanden gratis kunnen gebruiken.
        </p>
        <p>Moneybird biedt daarentegen een gratis proefperiode van 60 dagen.</p>
        <p>
          Dat maakt beide interessant om eerst uit te proberen voordat je een definitieve keuze maakt.
        </p>

        <h2>Moneybird of e-Boekhouden.nl: welke is goedkoper?</h2>
        <p>
          Als je puur naar de huidige prijzen kijkt, is <strong>e-Boekhouden.nl goedkoper</strong>.
        </p>
        <p>
          Het ZZP-pakket wordt momenteel voor €4,98 per maand aangeboden, terwijl Moneybird Start €15 per maand kost.
        </p>
        <p>
          Ook de mogelijkheid om als starter de eerste 15 maanden gratis te gebruiken maakt e-Boekhouden.nl
          aantrekkelijk voor iemand die vooral op de kosten let.
        </p>
        <p>Maar kijk altijd naar de normale prijs, pakketlimieten en voorwaarden.</p>
        <p>
          Een tijdelijke actie kan je keuze voor een programma op de lange termijn niet bepalen.
        </p>

        <h2>Moneybird of e-Boekhouden.nl: welke is makkelijker?</h2>
        <p>
          Als gebruiksgemak je belangrijkste criterium is, zou ik eerder naar <strong>Moneybird</strong> kijken.
        </p>
        <p>
          Moneybird is sterk gericht op een overzichtelijke gebruikerservaring en een eenvoudige workflow.
        </p>
        <p>
          e-Boekhouden.nl biedt veel functionaliteit en is daardoor vooral aantrekkelijk voor ondernemers die meer
          waarde hechten aan mogelijkheden en prijs.
        </p>
        <p>Het is uiteindelijk persoonlijk welk programma je prettiger vindt.</p>

        <h2>Wat is de beste keuze voor jou?</h2>
        <p>
          Je kunt de keuze tussen Moneybird en e-Boekhouden.nl terugbrengen tot een paar vragen.
        </p>

        <h3>Kies Moneybird als je vooral denkt:</h3>
        <blockquote>
          <p>
            “Ik wil een gebruiksvriendelijk programma waarmee mijn facturen en boekhouding gewoon overzichtelijk bij
            elkaar staan.”
          </p>
        </blockquote>

        <h3>Kies e-Boekhouden.nl als je vooral denkt:</h3>
        <blockquote>
          <p>
            “Ik wil zoveel mogelijk boekhoudfunctionaliteit voor zo weinig mogelijk geld.”
          </p>
        </blockquote>
        <p>Dat zijn allebei logische keuzes.</p>
        <p>Er is dus niet één programma dat voor iedere ondernemer de winnaar is.</p>

        <h2>Moneybird vs e-Boekhouden.nl: onze conclusie</h2>
        <p>
          <strong>
            Moneybird en e-Boekhouden.nl zijn allebei goede opties, maar ze spreken deels een ander type gebruiker aan.
          </strong>
        </p>

        <h3>🟢 Moneybird</h3>
        <p>
          <strong>Beste als je waarde hecht aan:</strong>
        </p>
        <ul>
          <li>gebruiksgemak;</li>
          <li>overzicht;</li>
          <li>facturatie;</li>
          <li>een moderne workflow;</li>
          <li>en een prettige dagelijkse gebruikerservaring.</li>
        </ul>

        <h3>🔵 e-Boekhouden.nl</h3>
        <p>
          <strong>Beste als je waarde hecht aan:</strong>
        </p>
        <ul>
          <li>lage kosten;</li>
          <li>uitgebreide boekhoudfunctionaliteit;</li>
          <li>facturatie en boekhouding in één;</li>
          <li>en veel mogelijkheden voor relatief weinig geld.</li>
        </ul>
        <p>
          <strong>Als prijs het belangrijkste is, zou ik e-Boekhouden.nl kiezen.</strong>
        </p>
        <p>
          <strong>Als gebruiksgemak het belangrijkste is, zou ik Moneybird kiezen.</strong>
        </p>
        <MoneybirdEBoekhoudenCtas />
        <p>Twijfel je nog? Dan hoef je niet meteen voor een van de twee te kiezen.</p>
        <BoekhoudCheckCta />
        <p>
          De check helpt je bepalen welk type boekhoudoplossing bij jouw situatie past en waarom. Of vergelijk Moneybird
          met Jortt in{' '}
          <Link href="/blogs/moneybird-vs-jortt" className="text-warm-orange hover:underline">
            Moneybird vs Jortt
          </Link>
          .
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Wat is beter: Moneybird of e-Boekhouden.nl?</h3>
        <p>
          Dat hangt af van wat je belangrijk vindt. Moneybird is vooral sterk in gebruiksgemak en workflow.
          e-Boekhouden.nl onderscheidt zich vooral met prijs en uitgebreide boekhoudfunctionaliteit.
        </p>
        <h3>Wat is goedkoper: Moneybird of e-Boekhouden.nl?</h3>
        <p>
          e-Boekhouden.nl is momenteel goedkoper. Het huidige ZZP-tarief ligt onder de prijs van het instappakket van
          Moneybird. Daarnaast is er voor starters een aanbod waarbij de eerste 15 maanden gratis zijn.
        </p>
        <h3>Is Moneybird makkelijker dan e-Boekhouden.nl?</h3>
        <p>
          Moneybird legt sterk de nadruk op gebruiksgemak en overzicht. e-Boekhouden.nl heeft een bredere
          boekhoudomgeving. Welke je makkelijker vindt, blijft deels persoonlijk.
        </p>
        <h3>Kun je met Moneybird facturen maken?</h3>
        <p>Ja. Facturatie is een belangrijk onderdeel van Moneybird.</p>
        <h3>Kun je met e-Boekhouden.nl facturen maken?</h3>
        <p>Ja. e-Boekhouden.nl biedt naast boekhouding ook facturatie.</p>
        <h3>Kun je met Moneybird btw-aangifte doen?</h3>
        <p>Ja. Moneybird ondersteunt de btw-administratie en elektronische btw-aangifte.</p>
        <h3>Kun je met e-Boekhouden.nl btw-aangifte doen?</h3>
        <p>Ja. e-Boekhouden.nl ondersteunt de btw-administratie en btw-aangifte.</p>
        <h3>Is e-Boekhouden.nl gratis?</h3>
        <p>
          Voor starters is er momenteel een aanbod waarbij je de eerste 15 maanden gratis kunt gebruiken. Daarnaast
          heeft e-Boekhouden.nl betaalde pakketten. Controleer de actuele voorwaarden voordat je je aanmeldt.
        </p>
        <h3>Heeft Moneybird een gratis versie?</h3>
        <p>
          Moneybird heeft een gratis proefperiode van 60 dagen. Daarnaast zijn er verschillende betaalde pakketten.
        </p>
        <h3>Welk programma is beter voor een zzp&apos;er?</h3>
        <p>
          Voor gebruiksgemak en een overzichtelijke administratie is Moneybird interessant. Als prijs en brede
          boekhoudfunctionaliteit belangrijker zijn, is e-Boekhouden.nl interessant.
        </p>
        <h3>Welk programma past bij mijn eenmanszaak?</h3>
        <p>
          Dat hangt af van je aantal facturen, kosten, banktransacties en hoeveel administratie je zelf wilt doen.
        </p>
        <BoekhoudCheckCta />

        <h2>Veelgestelde keuze in één overzicht</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[32rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Als jij vooral...
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Dan zou ik kijken naar...
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Gebruiksgemak wilt', 'Moneybird'],
                ['Lage kosten wilt', 'e-Boekhouden.nl'],
                ['Veel wilt factureren', 'Moneybird'],
                ['Veel boekhoudfunctionaliteit wilt', 'e-Boekhouden.nl'],
                ['Een eenvoudige administratie hebt', 'Beide'],
                ['Net gestart bent', 'Beide'],
                ['Maximale prijs-kwaliteit zoekt', 'e-Boekhouden.nl'],
                ['Een prettige dagelijkse workflow belangrijk vindt', 'Moneybird'],
              ].map(([als, dan]) => (
                <tr key={als} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">{als}</td>
                  <td className="px-4 py-3">{dan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          <strong>Nog steeds twijfel?</strong>
        </p>
        <BoekhoudCheckCta />
        <p>
          Of bekijk onze bredere vergelijking:{' '}
          <Link href="/blogs/beste-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
            beste boekhoudprogramma&apos;s voor zzp&apos;ers
          </Link>
          . Of vergelijk Jortt met e-Boekhouden.nl in{' '}
          <Link href="/blogs/jortt-vs-eboekhouden" className="text-warm-orange hover:underline">
            Jortt vs e-Boekhouden.nl
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    slug: 'jortt-vs-eboekhouden',
    relatedSlugs: [
      'beste-boekhoudprogramma-zzp',
      'moneybird-vs-jortt',
      'moneybird-vs-eboekhouden',
      'boekhoudprogramma-eenmanszaak',
      'wanneer-boekhoudsoftware-nodig-zzp',
    ],
    metaTitle: 'Jortt vs e-Boekhouden.nl: welk boekhoudprogramma past bij jou?',
    title: 'Jortt vs e-Boekhouden.nl: welk boekhoudprogramma past bij jou?',
    excerpt:
      'Jortt of e-Boekhouden.nl? Vergelijk prijs, gebruiksgemak, automatisering, facturatie, bank, btw en boekhouding en ontdek welk programma bij jou past.',
    keywords:
      'jortt vs eboekhouden, jortt of eboekhouden, jortt eboekhouden vergelijken, eboekhouden vs jortt, jortt en eboekhouden vergelijken, verschil jortt eboekhouden',
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Blogs/Jortt%20vs%20e-Boekhouden.nl.jpg',
      alt: 'Jortt vs e-Boekhouden.nl: welk boekhoudprogramma past bij jou?',
    },
    datePublished: '2026-09-05',
    dateModified: '2026-09-05',
    faq: [
      {
        question: 'Wat is goedkoper: Jortt of e-Boekhouden.nl?',
        answer:
          'e-Boekhouden.nl is op basis van de reguliere tarieven goedkoper. Het ZZP-pakket kost €9,95 per maand tegenover €19,95 per maand voor Jortt ZZP. e-Boekhouden.nl toont momenteel bovendien een lager actueel maandtarief.',
      },
      {
        question: 'Wat is makkelijker: Jortt of e-Boekhouden.nl?',
        answer:
          'Dat hangt af van wat je onder makkelijk verstaat. Jortt legt meer nadruk op automatisering en het automatisch verwerken van je administratie. e-Boekhouden.nl biedt veel functies waarmee je zelf je administratie kunt beheren.',
      },
      {
        question: 'Welke heeft de beste automatisering?',
        answer:
          'Jortt. De Boekhoudbot is een belangrijk onderdeel van het programma en is specifiek gericht op het automatisch verwerken van de boekhouding.',
      },
      {
        question: "Kan ik met beide programma's facturen maken?",
        answer: 'Ja. Zowel Jortt als e-Boekhouden.nl bieden facturatie.',
      },
      {
        question: 'Is Jortt gratis?',
        answer:
          'Jortt heeft een gratis Starter-abonnement. Daarmee kun je onder andere facturen, offertes en uren maken, maar je krijgt niet de volledige boekhouding. Voor de boekhouding heb je een betaald abonnement nodig.',
      },
      {
        question: 'Is e-Boekhouden.nl gratis?',
        answer:
          'Voor startende ondernemers biedt e-Boekhouden.nl 15 maanden gratis gebruik. Daarnaast kun je het programma 14 dagen gratis uitproberen.',
      },
      {
        question: "Wat is beter voor een zzp'er?",
        answer:
          "Voor een zzp'er die vooral automatisering wil, is Jortt interessant. Voor een zzp'er die vooral een betaalbaar en uitgebreid boekhoudprogramma zoekt, is e-Boekhouden.nl interessant.",
      },
      {
        question: "Heb ik als zzp'er überhaupt een boekhoudprogramma nodig?",
        answer:
          'Niet per se. Als je administratie eenvoudig is, kun je deze ook zelf bijhouden. Een boekhoudprogramma wordt vooral interessant wanneer je meer transacties, kosten, facturen of administratieve handelingen krijgt.',
      },
      {
        question: 'Kan ik beginnen met een gratis factuurtool?',
        answer:
          'Ja. Als je alleen facturen wilt maken en je administratie eenvoudig is, kan een gratis factuurtool een praktische eerste stap zijn.',
      },
    ],
    content: (
      <>
        <p>
          Jortt en e-Boekhouden.nl zijn allebei populaire boekhoudprogramma&apos;s voor Nederlandse ondernemers, maar
          ze leggen verschillende accenten.
        </p>
        <p>
          <strong>Jortt richt zich sterk op automatisering.</strong> Met de Boekhoudbot probeert het programma zoveel
          mogelijk van je boekhouding automatisch te verwerken.
        </p>
        <p>
          <strong>
            e-Boekhouden.nl richt zich vooral op een uitgebreide administratie tegen een relatief lage prijs.
          </strong>{' '}
          Je krijgt veel functionaliteit zonder dat je meteen een duur abonnement nodig hebt.
        </p>
        <p>Maar welke past beter bij jou?</p>
        <p>
          In deze vergelijking bekijken we <strong>Jortt en e-Boekhouden.nl op prijs, gebruiksgemak, facturatie,
          boekhouding, automatisering, bank, btw en doelgroep.</strong>
        </p>
        <blockquote>
          <p>
            <strong>Kort samengevat:</strong> wil je vooral zo weinig mogelijk handmatig boekhouden, dan is Jortt
            interessant. Wil je vooral veel functionaliteit voor relatief weinig geld, dan is e-Boekhouden.nl
            interessant.
          </p>
        </blockquote>
        <p>
          Twijfel je nog of je überhaupt een boekhoudprogramma nodig hebt? Doe dan eerst de{' '}
          <Link href="/tools/boekhoudprogramma-check" className="text-warm-orange hover:underline">
            boekhoudprogramma-check
          </Link>
          .
        </p>

        <h2>Jortt vs e-Boekhouden.nl in het kort</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[40rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col" />
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Jortt
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  e-Boekhouden.nl
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Gratis optie', 'Ja, Jortt Starter', '15 maanden gratis voor starters'],
                ['Betaald vanaf', '€19,95 p/m voor Jortt ZZP', '€9,95 p/m regulier voor ZZP'],
                ['Facturatie', '✓', '✓'],
                ['Boekhouding', '✓', '✓'],
                ['Btw-aangifte', '✓', '✓'],
                ['Bankkoppeling', '✓', '✓'],
                ['Automatisering', 'Zeer sterk', 'Sterk'],
                ['Boekhoudbot', '✓', '—'],
                ['Boekingen', 'Afhankelijk van pakket', 'Max. 240 bij ZZP-pakket'],
                ['Sterkste punt', 'Automatisering', 'Prijs en functionaliteit'],
                [
                  'Interessant voor',
                  'Ondernemers die weinig handmatig willen doen',
                  'Prijsbewuste ondernemers',
                ],
              ].map(([label, jortt, eboekhouden]) => (
                <tr key={label} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">{label}</td>
                  <td className="px-4 py-3">{jortt}</td>
                  <td className="px-4 py-3">{eboekhouden}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>De belangrijkste vraag is daarom niet alleen <strong>welk programma beter is</strong>, maar vooral:</p>
        <p>
          <strong>
            Wil je vooral je boekhouding automatiseren, of wil je zoveel mogelijk functionaliteit voor een lage prijs?
          </strong>
        </p>

        <h2>Wat is Jortt?</h2>
        <p>Jortt is een online boekhoudprogramma dat sterk inzet op automatisering.</p>
        <p>
          Het belangrijkste onderdeel is de <strong>Boekhoudbot</strong>. Volgens Jortt kan deze een groot deel van de
          boekhouding automatisch verwerken op basis van vaste en eigen regels.
        </p>
        <p>
          Naast boekhouden kun je met Jortt onder andere facturen en offertes maken, uren registreren en e-facturen via
          Peppol verwerken.
        </p>
        <p>Jortt heeft verschillende abonnementen.</p>

        <h3>Jortt Starter</h3>
        <p>
          Jortt Starter is gratis en is vooral bedoeld voor ondernemers die willen factureren en offreren zonder
          volledige boekhouding.
        </p>
        <p>Je kunt onder andere:</p>
        <ul>
          <li>facturen maken</li>
          <li>offertes maken</li>
          <li>uren registreren</li>
          <li>projecten bijhouden</li>
          <li>Peppol-facturen versturen en ontvangen</li>
        </ul>
        <p>Boekhouding, een bankkoppeling en btw-aangifte zitten niet in de gratis versie.</p>

        <h3>Jortt ZZP</h3>
        <p>Jortt ZZP kost €19,95 per maand exclusief btw.</p>
        <p>
          Daarvoor krijg je onder andere de volledige boekhouding voor een eenmanszaak en de Boekhoudbot.
        </p>
        <p>
          Jortt richt zich hiermee duidelijk op ondernemers die zo min mogelijk tijd aan hun administratie willen
          besteden.
        </p>

        <h3>Jortt MKB en Plus</h3>
        <p>Voor ondernemers met uitgebreidere administraties zijn er Jortt MKB en Jortt Plus.</p>
        <p>
          Jortt MKB kost €24,95 per maand en Jortt Plus €34,95 per maand, exclusief btw.
        </p>
        <p>
          Welke functies je precies nodig hebt, hangt vooral af van je rechtsvorm, aantal transacties en gewenste
          automatisering.
        </p>
        <JorttCta />

        <h2>Wat is e-Boekhouden.nl?</h2>
        <p>
          e-Boekhouden.nl is een online boekhoudprogramma voor ondernemers, verenigingen en stichtingen.
        </p>
        <p>Het programma biedt onder andere:</p>
        <ul>
          <li>boekhouding</li>
          <li>facturatie</li>
          <li>relatiebeheer</li>
          <li>btw-administratie</li>
          <li>rapportages</li>
          <li>bonnen en facturen verwerken</li>
          <li>verschillende invoermogelijkheden voor je administratie</li>
        </ul>
        <p>Een belangrijk voordeel van e-Boekhouden.nl is de relatief lage prijs.</p>
        <p>
          Het ZZP-pakket heeft een reguliere prijs van €9,95 per maand en kent een maximum van 240 boekingen per
          boekjaar. Factureren is daarbij onbeperkt.
        </p>
        <p>
          Daarnaast zijn er uitgebreidere pakketten voor ondernemers die onbeperkt willen boekhouden.
        </p>
        <p>
          Voor startende ondernemers biedt e-Boekhouden.nl bovendien 15 maanden gratis gebruik.
        </p>
        <EBoekhoudenCta />

        <h2>Jortt vs e-Boekhouden.nl: prijs</h2>
        <p>Prijs is een van de grootste verschillen tussen beide programma&apos;s.</p>

        <h3>Jortt</h3>
        <p>Jortt heeft momenteel de volgende reguliere prijzen:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[16rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Pakket
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Prijs per maand
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Starter', '€0'],
                ['ZZP', '€19,95'],
                ['MKB', '€24,95'],
                ['Plus', '€34,95'],
              ].map(([pakket, prijs]) => (
                <tr key={pakket} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">{pakket}</td>
                  <td className="px-4 py-3 text-right">{prijs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>Alle bedragen zijn exclusief btw.</p>

        <h3>e-Boekhouden.nl</h3>
        <p>Bij e-Boekhouden.nl zijn de reguliere prijzen:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[20rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Pakket
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Reguliere prijs
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['ZZP', '€9,95 p/m'],
                ['Standaard', '€14,50 p/m'],
                ['Standaard + Factureren', '€24,00 p/m'],
              ].map(([pakket, prijs]) => (
                <tr key={pakket} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">{pakket}</td>
                  <td className="px-4 py-3 text-right">{prijs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Op dit moment toont e-Boekhouden.nl daarnaast lagere actuele maandprijzen van €4,98, €7,25 en €12,00 voor
          deze pakketten. Voor startende ondernemers is er een aanbod van 15 maanden gratis.
        </p>

        <h3>Welke is goedkoper?</h3>
        <p>
          <strong>
            e-Boekhouden.nl is duidelijk goedkoper als je alleen naar de reguliere maandprijs kijkt.
          </strong>
        </p>
        <p>
          Jortt ZZP kost €19,95 per maand, tegenover €9,95 voor het reguliere ZZP-pakket van e-Boekhouden.nl.
        </p>
        <p>Maar prijs alleen vertelt niet het hele verhaal.</p>
        <p>Je betaalt bij Jortt namelijk ook voor de nadruk op automatisering.</p>
        <p>
          Als je daardoor minder tijd kwijt bent aan je administratie, kan het prijsverschil voor sommige ondernemers
          de moeite waard zijn.
        </p>
        <p>
          Meer over prijzen lees je in{' '}
          <Link href="/gidsen/kosten-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
            wat kost een boekhoudprogramma voor zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Jortt vs e-Boekhouden.nl: gebruiksgemak</h2>
        <p>Gebruiksgemak is moeilijker objectief te vergelijken dan prijs.</p>
        <p>
          Het verschil zit vooral in de manier waarop beide programma&apos;s zijn ontworpen.
        </p>

        <h3>Jortt</h3>
        <p>Jortt probeert de ondernemer zo veel mogelijk werk uit handen te nemen.</p>
        <p>De Boekhoudbot is daarbij het belangrijkste voorbeeld.</p>
        <p>Het idee is simpel:</p>
        <p>
          <strong>
            niet zoveel mogelijk boekhoudhandelingen uitvoeren, maar zoveel mogelijk boekhoudhandelingen automatisch
            laten uitvoeren.
          </strong>
        </p>
        <p>Dat kan aantrekkelijk zijn als je weinig interesse hebt in boekhouden.</p>

        <h3>e-Boekhouden.nl</h3>
        <p>
          e-Boekhouden.nl biedt veel mogelijkheden voor ondernemers die hun administratie zelf willen beheren.
        </p>
        <p>
          Dat maakt het programma breed inzetbaar, maar betekent ook dat je als gebruiker meer keuzes en functies
          tegenkomt.
        </p>
        <p>
          Voor iemand die graag controle heeft over de administratie kan dat juist een voordeel zijn.
        </p>

        <h3>Winnaar op gebruiksgemak?</h3>
        <p>Er is geen universele winnaar.</p>
        <p>
          <strong>
            Jortt heeft een duidelijke voorsprong als je vooral zo weinig mogelijk handmatig werk wilt doen.
          </strong>
        </p>
        <p>
          <strong>
            e-Boekhouden.nl is interessant als je zelf je administratie wilt beheren en vooral veel functionaliteit
            zoekt voor een lage prijs.
          </strong>
        </p>

        <h2>Automatisering: Jortt vs e-Boekhouden.nl</h2>
        <p>Dit is waarschijnlijk het grootste inhoudelijke verschil tussen de twee.</p>

        <h3>Jortt: sterk gericht op automatisering</h3>
        <p>Jortt heeft de Boekhoudbot als centraal onderdeel van zijn product.</p>
        <p>
          De bot verwerkt transacties volgens boekhoudregels en kan daarbij ook eigen regels gebruiken.
        </p>
        <p>
          Jortt positioneert dit nadrukkelijk als alternatief voor veel handmatig boekhoudwerk.
        </p>
        <p>Voor een ondernemer die denkt:</p>
        <blockquote>
          <p>“Ik wil gewoon dat mijn administratie zo veel mogelijk vanzelf gaat.”</p>
        </blockquote>
        <p>is Jortt daarom interessant.</p>

        <h3>e-Boekhouden.nl: veel functionaliteit, maar een andere insteek</h3>
        <p>
          e-Boekhouden.nl biedt eveneens functies om administratie efficiënter te verwerken, zoals het scannen en
          herkennen van documenten.
        </p>
        <p>
          De focus ligt echter minder op één centrale automatische boekhoudbot.
        </p>
        <p>
          De software geeft je vooral veel mogelijkheden om je administratie zelf te verwerken en te beheren.
        </p>

        <h3>Winnaar automatisering: Jortt</h3>
        <p>
          Als automatisering voor jou het belangrijkste criterium is, heeft <strong>Jortt een duidelijk voordeel</strong>.
        </p>

        <h2>Facturen maken: Jortt vs e-Boekhouden.nl</h2>
        <p>Beide programma&apos;s ondersteunen facturatie.</p>
        <p>Met beide kun je dus meer doen dan alleen je boekhouding bijhouden.</p>
        <p>Bij Jortt zit facturatie al in de gratis Starter-versie.</p>
        <p>
          Met Jortt Starter kun je facturen en offertes maken zonder voor de volledige boekhouding te betalen.
        </p>
        <p>
          Ook e-Boekhouden.nl ondersteunt facturatie. Het ZZP-pakket biedt onbeperkt factureren en heeft daarnaast een
          maximum van 240 boekingen.
        </p>

        <h3>Alleen facturen nodig?</h3>
        <p>Dan hoef je misschien helemaal geen betaald boekhoudprogramma te nemen.</p>
        <p>Een gratis factuurtool kan dan voldoende zijn.</p>
        <p>
          Met{' '}
          <Link href="/create-invoice" className="text-warm-orange hover:underline">
            FactuurBaas maak je gratis een factuur zonder account
          </Link>
          .
        </p>
        <p>Je maakt de factuur, downloadt de PDF en kunt hem daarna zelf naar je klant sturen.</p>
        <p>Heb je daarnaast een volledige administratie nodig? Dan wordt een boekhoudprogramma interessanter.</p>
        <CtaButton />

        <h2>Btw-aangifte</h2>
        <p>Voor veel zzp&apos;ers is btw-administratie een belangrijk onderdeel van de keuze.</p>
        <p>Zowel Jortt als e-Boekhouden.nl ondersteunen de btw-administratie.</p>
        <p>
          Jortt biedt btw-aangifte binnen de betaalde boekhoudpakketten. e-Boekhouden.nl biedt eveneens ondersteuning
          voor de btw-administratie en btw-aangifte.
        </p>
        <p>
          Het verschil zit daarom minder in <strong>of</strong> je btw kunt verwerken en meer in hoe je de
          administratie wilt uitvoeren.
        </p>
        <p>Als je vooral zo veel mogelijk automatisch wilt laten verwerken, ligt Jortt voor de hand.</p>
        <p>
          Als je vooral een compleet en betaalbaar boekhoudpakket zoekt, is e-Boekhouden.nl interessant.
        </p>

        <h2>Bankkoppeling</h2>
        <p>Een bankkoppeling kan veel handmatig invoerwerk besparen.</p>
        <p>
          Bij Jortt is een bankkoppeling onderdeel van de betaalde boekhoudfunctionaliteit.
        </p>
        <p>
          Bij e-Boekhouden.nl kun je eveneens bankmutaties in de administratie verwerken en gebruikmaken van
          koppelingen.
        </p>
        <p>Voor de meeste ondernemers is dit geen doorslaggevend verschil.</p>
        <p>
          Het is vooral belangrijk om te kijken{' '}
          <strong>welke bank je gebruikt en welke koppeling bij het gekozen abonnement beschikbaar is</strong>.
        </p>

        <h2>Jortt vs e-Boekhouden.nl voor een eenmanszaak</h2>
        <p>Heb je een eenmanszaak?</p>
        <p>Dan zijn beide programma&apos;s geschikt.</p>
        <p>
          De keuze komt vooral neer op wat je belangrijk vindt. Meer over dit onderwerp lees je in{' '}
          <Link href="/blogs/boekhoudprogramma-eenmanszaak" className="text-warm-orange hover:underline">
            boekhoudprogramma voor een eenmanszaak
          </Link>
          .
        </p>

        <h3>Kies Jortt als je:</h3>
        <ul>
          <li>zo weinig mogelijk handmatig wilt boeken</li>
          <li>automatisering belangrijk vindt</li>
          <li>weinig interesse hebt in boekhouden</li>
          <li>bereid bent meer per maand te betalen</li>
          <li>facturatie en boekhouding in één moderne omgeving wilt combineren</li>
        </ul>

        <h3>Kies e-Boekhouden.nl als je:</h3>
        <ul>
          <li>de kosten laag wilt houden</li>
          <li>je administratie grotendeels zelf wilt doen</li>
          <li>veel functionaliteit wilt</li>
          <li>een uitgebreid boekhoudpakket zoekt</li>
          <li>prijs een belangrijk onderdeel van je beslissing vindt</li>
        </ul>

        <h2>Jortt vs e-Boekhouden.nl voor starters</h2>
        <p>Ben je net begonnen als zzp&apos;er?</p>
        <p>Dan is de situatie iets anders.</p>
        <p>Je hebt waarschijnlijk nog maar weinig facturen, kosten en transacties.</p>
        <p>Een uitgebreid boekhoudprogramma is dan niet automatisch nodig.</p>
        <p>
          Je kunt bijvoorbeeld beginnen met een gratis factuurtool en je administratie zelf bijhouden.
        </p>
        <p>Wil je direct met een boekhoudprogramma beginnen, dan hebben beide opties voordelen.</p>
        <p>
          <strong>Jortt Starter is gratis</strong> en biedt facturatie, offertes, uren en projecten, maar geen
          volledige boekhouding.
        </p>
        <p>
          <strong>e-Boekhouden.nl biedt starters 15 maanden gratis gebruik</strong> van het programma.
        </p>
        <p>
          Daarom is e-Boekhouden.nl voor een starter die meteen een volledige boekhouding wil waarschijnlijk
          interessanter vanuit kostenperspectief.
        </p>
        <p>
          Wil je eerst alleen factureren en je administratie simpel houden, dan kan Jortt Starter of een gratis
          factuurtool voldoende zijn.
        </p>

        <h2>Jortt vs e-Boekhouden.nl: wat is beter?</h2>
        <p>Dat hangt af van je prioriteiten.</p>

        <h3>Jortt is waarschijnlijk beter als...</h3>
        <p>
          Je vooral wilt dat je boekhouding <strong>zoveel mogelijk automatisch gebeurt</strong>.
        </p>
        <p>
          De hogere maandprijs is dan minder belangrijk dan de tijd die je ermee bespaart.
        </p>
        <p>
          Jortt is vooral interessant voor ondernemers die weinig zin hebben om iedere transactie zelf te verwerken.
        </p>
        <p>
          <strong>Sterkste punt: automatisering.</strong>
        </p>

        <h3>e-Boekhouden.nl is waarschijnlijk beter als...</h3>
        <p>
          Je vooral zoekt naar een <strong>betaalbaar en uitgebreid boekhoudprogramma</strong>.
        </p>
        <p>
          Je krijgt veel functionaliteit voor een relatief lage maandprijs en kunt je administratie zelf beheren.
        </p>
        <p>
          <strong>Sterkste punt: prijs en functionaliteit.</strong>
        </p>

        <h2>Wat als je nog helemaal geen boekhoudprogramma nodig hebt?</h2>
        <p>Dit is een vraag die vaak wordt overgeslagen bij vergelijkingen.</p>
        <p>
          Niet iedere zzp&apos;er heeft vanaf dag één betaalde boekhoudsoftware nodig.
        </p>
        <p>Als je bijvoorbeeld:</p>
        <ul>
          <li>weinig facturen verstuurt</li>
          <li>weinig zakelijke kosten hebt</li>
          <li>weinig banktransacties hebt</li>
          <li>je administratie zelf kunt bijhouden</li>
          <li>en geen behoefte hebt aan automatisering</li>
        </ul>
        <p>dan kan een eenvoudige administratie voldoende zijn.</p>
        <p>
          Je kunt bijvoorbeeld beginnen met een gratis factuurtool en je inkomsten en uitgaven zelf bijhouden.
        </p>
        <p>Wordt je administratie groter?</p>
        <p>Dan kun je later overstappen naar boekhoudsoftware.</p>
        <p>
          Dat voorkomt dat je vanaf het begin betaalt voor functies die je nog nauwelijks gebruikt.
        </p>
        <BoekhoudCheckCta />

        <h2>Jortt of e-Boekhouden.nl: onze conclusie</h2>
        <p>Er is geen winnaar voor iedere ondernemer.</p>
        <p>
          <strong>
            Jortt is de betere keuze als automatisering voor jou het belangrijkste is.
          </strong>
        </p>
        <p>
          De Boekhoudbot is het onderscheidende onderdeel en maakt Jortt vooral interessant voor ondernemers die zo
          weinig mogelijk handmatig boekhoudwerk willen doen.
        </p>
        <p>
          <strong>
            e-Boekhouden.nl is de betere keuze als prijs en uitgebreide functionaliteit belangrijker zijn.
          </strong>
        </p>
        <p>
          De reguliere prijs van het ZZP-pakket ligt aanzienlijk lager dan Jortt ZZP en je krijgt een breed pakket voor
          het bijhouden van je administratie.
        </p>

        <h3>In één zin:</h3>
        <p>
          <strong>Jortt = minder handmatig werk.</strong>
        </p>
        <p>
          <strong>e-Boekhouden.nl = veel functionaliteit voor relatief weinig geld.</strong>
        </p>
        <p>
          En als je eigenlijk alleen facturen hoeft te maken, heb je misschien helemaal geen betaald
          boekhoudprogramma nodig.
        </p>
        <JorttEBoekhoudenCtas />

        <h2>Veelgestelde vragen over Jortt en e-Boekhouden.nl</h2>
        <h3>Wat is goedkoper: Jortt of e-Boekhouden.nl?</h3>
        <p>
          e-Boekhouden.nl is op basis van de reguliere tarieven goedkoper. Het ZZP-pakket kost €9,95 per maand
          tegenover €19,95 per maand voor Jortt ZZP. e-Boekhouden.nl toont momenteel bovendien een lager actueel
          maandtarief.
        </p>
        <h3>Wat is makkelijker: Jortt of e-Boekhouden.nl?</h3>
        <p>
          Dat hangt af van wat je onder makkelijk verstaat. Jortt legt meer nadruk op automatisering en het
          automatisch verwerken van je administratie. e-Boekhouden.nl biedt veel functies waarmee je zelf je
          administratie kunt beheren.
        </p>
        <h3>Welke heeft de beste automatisering?</h3>
        <p>
          Jortt. De Boekhoudbot is een belangrijk onderdeel van het programma en is specifiek gericht op het
          automatisch verwerken van de boekhouding.
        </p>
        <h3>Kan ik met beide programma&apos;s facturen maken?</h3>
        <p>Ja. Zowel Jortt als e-Boekhouden.nl bieden facturatie.</p>
        <h3>Is Jortt gratis?</h3>
        <p>
          Jortt heeft een gratis Starter-abonnement. Daarmee kun je onder andere facturen, offertes en uren maken,
          maar je krijgt niet de volledige boekhouding. Voor de boekhouding heb je een betaald abonnement nodig.
        </p>
        <h3>Is e-Boekhouden.nl gratis?</h3>
        <p>
          Voor startende ondernemers biedt e-Boekhouden.nl 15 maanden gratis gebruik. Daarnaast kun je het programma
          14 dagen gratis uitproberen.
        </p>
        <h3>Wat is beter voor een zzp&apos;er?</h3>
        <p>
          Voor een zzp&apos;er die vooral automatisering wil, is Jortt interessant. Voor een zzp&apos;er die vooral
          een betaalbaar en uitgebreid boekhoudprogramma zoekt, is e-Boekhouden.nl interessant.
        </p>
        <h3>Heb ik als zzp&apos;er überhaupt een boekhoudprogramma nodig?</h3>
        <p>
          Niet per se. Als je administratie eenvoudig is, kun je deze ook zelf bijhouden. Een boekhoudprogramma wordt
          vooral interessant wanneer je meer transacties, kosten, facturen of administratieve handelingen krijgt.
        </p>
        <p>
          <Link href="/blogs/wanneer-boekhoudsoftware-nodig-zzp" className="text-warm-orange hover:underline">
            Lees wanneer je als zzp&apos;er een boekhoudprogramma nodig hebt →
          </Link>
        </p>
        <h3>Kan ik beginnen met een gratis factuurtool?</h3>
        <p>
          Ja. Als je alleen facturen wilt maken en je administratie eenvoudig is, kan een gratis factuurtool een
          praktische eerste stap zijn.
        </p>
        <CtaButton />

        <h2>Bekijk ook</h2>
        <ul>
          <li>
            <Link href="/blogs/beste-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
              Beste boekhoudprogramma voor zzp&apos;ers vergelijken
            </Link>
          </li>
          <li>
            <Link href="/blogs/moneybird-vs-jortt" className="text-warm-orange hover:underline">
              Moneybird vs Jortt
            </Link>
          </li>
          <li>
            <Link href="/blogs/moneybird-vs-eboekhouden" className="text-warm-orange hover:underline">
              Moneybird vs e-Boekhouden.nl
            </Link>
          </li>
          <li>
            <Link href="/gidsen/kosten-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
              Wat kost een boekhoudprogramma voor zzp&apos;ers?
            </Link>
          </li>
          <li>
            <Link href="/gidsen/gratis-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
              Gratis boekhoudprogramma voor zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/tools/boekhoudprogramma-check" className="text-warm-orange hover:underline">
              Doe de boekhoudprogramma-check
            </Link>
          </li>
        </ul>
        <BoekhoudCheckCta />
      </>
    ),
  },
  {
    slug: 'wanneer-boekhoudsoftware-nodig-zzp',
    relatedSlugs: [
      'beste-boekhoudprogramma-zzp',
      'gratis-factuurtool-vs-boekhoudprogramma',
      'factuur-maken-zzp',
      'gratis-factuur-zzp',
      'boekhoudprogramma-eenmanszaak',
    ],
    metaTitle: "Heb ik als zzp'er een boekhoudprogramma nodig?",
    title: "Heb ik als zzp'er een boekhoudprogramma nodig?",
    excerpt:
      "Heb je als zzp'er een boekhoudprogramma nodig? Lees wanneer boekhoudsoftware handig wordt, wanneer een factuurtool genoeg is en wanneer je kunt overstappen.",
    keywords:
      "boekhoudprogramma nodig zzp, wanneer boekhoudsoftware nodig zzp, zzp boekhouding, boekhoudsoftware zzp, zelf boekhouden zzp, factuurprogramma of boekhoudprogramma",
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Wanneer%20heb%20je%20boekhoudsoftware%20nodig%20als%20zzper.png',
      alt: "Heb ik als zzp'er een boekhoudprogramma nodig? Wanneer overstappen.",
    },
    datePublished: '2026-02-01',
    dateModified: '2026-09-05',
    faq: [
      {
        question: "Moet een zzp'er een boekhoudprogramma hebben?",
        answer:
          'Nee. Je bent niet verplicht om een specifiek boekhoudprogramma te gebruiken. Je moet wel een goede administratie bijhouden.',
      },
      {
        question: "Wanneer is een boekhoudprogramma handig voor een zzp'er?",
        answer:
          'Vooral wanneer je administratie groter wordt en je meerdere soorten gegevens moet verwerken, zoals verkoopfacturen, inkoopfacturen, bonnetjes, banktransacties en btw.',
      },
      {
        question: "Kan ik als zzp'er boekhouden zonder software?",
        answer:
          'Ja. Je kunt bijvoorbeeld met Excel of een andere administratie werken. Voor grotere administraties kan software wel veel tijd en handmatig werk besparen.',
      },
      {
        question: 'Is een factuurprogramma hetzelfde als een boekhoudprogramma?',
        answer:
          'Nee. Een factuurprogramma is vooral bedoeld om facturen te maken en te beheren. Een boekhoudprogramma richt zich op de bredere financiële administratie van je onderneming.',
      },
      {
        question: 'Wanneer moet ik overstappen naar een boekhoudprogramma?',
        answer:
          'Er is geen vast moment. Een goed moment is bijvoorbeeld wanneer je administratie veel tijd kost, je veel transacties hebt of je meer inzicht en automatisering wilt.',
      },
      {
        question: 'Kan ik eerst een factuurprogramma gebruiken en later boekhoudsoftware?',
        answer:
          'Ja. Je kunt prima beginnen met een eenvoudige factuurtool en later overstappen naar of aanvullen met boekhoudsoftware wanneer je administratie daarom vraagt.',
      },
    ],
    content: (
      <>
        <p>
          Heb je als zzp&apos;er een <strong>boekhoudprogramma nodig</strong>, of kun je je administratie ook zonder
          software bijhouden?
        </p>
        <p>
          Als je net begint met ondernemen, heb je misschien maar een paar facturen per maand en weinig kosten. Dan
          kan een eenvoudige factuurtool voldoende zijn. Naarmate je meer inkomsten, uitgaven en administratie krijgt,
          wordt boekhoudsoftware steeds interessanter.
        </p>
        <p>
          In dit artikel leggen we uit <strong>wanneer een boekhoudprogramma handig wordt</strong>, wat je zonder
          boekhoudsoftware kunt doen en wanneer het verstandig is om over te stappen.
        </p>
        <p>
          Twijfel je of jij er al één nodig hebt? Doe de gratis{' '}
          <Link href="/tools/boekhoudprogramma-check" className="text-warm-orange hover:underline">
            boekhoudprogramma-check
          </Link>{' '}
          en ontdek of een factuurtool, basissoftware, compleet boekhoudprogramma of een boekhouder naast software
          waarschijnlijk beter past. Wil je weten hoe je je administratie zelf kunt organiseren? Lees{' '}
          <Link href="/gidsen/zelf-boekhouden-zzp" className="text-warm-orange hover:underline">
            zelf boekhouden als zzp&apos;er
          </Link>
          .
        </p>
        <BoekhoudCheckCta />

        <h2>Heb je als zzp&apos;er verplicht een boekhoudprogramma nodig?</h2>
        <p>
          <strong>Nee.</strong> Als zzp&apos;er ben je niet verplicht om een specifiek boekhoudprogramma te gebruiken.
        </p>
        <p>
          Je moet wel een administratie bijhouden en je financiële gegevens kunnen onderbouwen. Hoe je die
          administratie organiseert, is niet hetzelfde als de keuze voor bepaalde software.
        </p>
        <p>Je kunt bijvoorbeeld werken met:</p>
        <ul>
          <li>een boekhoudprogramma;</li>
          <li>spreadsheets zoals Excel;</li>
          <li>een combinatie van verschillende tools;</li>
          <li>of een boekhouder die (een deel van) je administratie verzorgt.</li>
        </ul>
        <p>
          De vraag is daarom meestal niet <strong>“moet ik een boekhoudprogramma hebben?”</strong>, maar:
        </p>
        <blockquote>
          <strong>
            Wanneer bespaart boekhoudsoftware mij genoeg tijd en werk om het de moeite waard te maken?
          </strong>
        </blockquote>

        <h2>Wanneer is een boekhoudprogramma handig?</h2>
        <p>
          Een boekhoudprogramma wordt vooral interessant wanneer je administratie meer wordt dan alleen facturen
          maken.
        </p>
        <p>Denk bijvoorbeeld aan deze situaties:</p>
        <ul>
          <li>
            je hebt regelmatig <strong>inkoopfacturen en bonnetjes</strong>;
          </li>
          <li>je hebt veel zakelijke transacties;</li>
          <li>
            je wilt je <strong>bankrekening koppelen</strong>;
          </li>
          <li>je wilt automatisch inzicht in inkomsten en uitgaven;</li>
          <li>
            je wilt makkelijker je <strong>btw-administratie</strong> bijhouden;
          </li>
          <li>je wilt weten hoeveel winst je maakt;</li>
          <li>je wilt je administratie op één plek bewaren;</li>
          <li>je bent steeds meer tijd kwijt aan Excel of losse bestanden.</li>
        </ul>
        <p>
          Hoe meer van deze punten op jou van toepassing zijn, hoe groter de kans dat boekhoudsoftware handig wordt.
        </p>

        <h2>Wanneer heb je nog geen boekhoudprogramma nodig?</h2>
        <p>Als je net start als zzp&apos;er, kan je administratie heel overzichtelijk zijn.</p>
        <p>Stel dat je:</p>
        <ul>
          <li>één of enkele klanten hebt;</li>
          <li>weinig zakelijke kosten maakt;</li>
          <li>maar een paar facturen per maand verstuurt;</li>
          <li>geen personeel hebt;</li>
          <li>en je administratie zelf goed kunt bijhouden.</li>
        </ul>
        <p>Dan hoef je niet automatisch direct een uitgebreid boekhoudprogramma te nemen.</p>
        <p>
          Je kunt bijvoorbeeld beginnen met een eenvoudige factuurtool voor je verkoopfacturen en je overige
          administratie op een andere manier bijhouden.
        </p>
        <p>
          Met{' '}
          <Link href="/create-invoice" className="text-warm-orange hover:underline">
            FactuurBaas
          </Link>{' '}
          kun je gratis een professionele factuur maken zonder account. Je downloadt de factuur vervolgens als PDF en
          verstuurt deze zelf naar je klant.
        </p>
        <CtaButton />

        <h2>Wanneer wordt boekhoudsoftware wél interessant?</h2>
        <p>
          Er is geen vast aantal facturen waarbij je moet overstappen. Voor de ene zzp&apos;er is een
          boekhoudprogramma al snel handig, terwijl een ander met een kleine administratie prima zonder kan werken.
        </p>
        <p>Een paar praktische signalen:</p>

        <h3>1. Je krijgt steeds meer inkoopfacturen</h3>
        <p>
          Niet alleen je verkoopfacturen moeten worden bijgehouden. Ook zakelijke kosten, bonnetjes en inkoopfacturen
          horen bij je administratie.
        </p>
        <p>Als je die steeds handmatig moet verwerken, kan software veel overzicht geven.</p>

        <h3>2. Je hebt veel banktransacties</h3>
        <p>
          Als je tientallen of honderden zakelijke transacties per maand hebt, wordt handmatig bijhouden al snel
          onpraktisch.
        </p>
        <p>
          Met een boekhoudprogramma dat een bankkoppeling ondersteunt, kunnen transacties automatisch in je
          administratie terechtkomen.
        </p>

        <h3>3. Je wilt sneller btw-overzicht</h3>
        <p>
          Je administratie moet aansluiten op je btw-aangifte. Software kan helpen om inkomsten, kosten en btw
          overzichtelijk bij te houden.
        </p>
        <p>
          Dat betekent niet dat je verplicht een boekhoudprogramma moet gebruiken voor je btw-aangifte. Het voordeel
          zit vooral in het verminderen van handmatig werk en het overzicht.
        </p>

        <h3>4. Je wilt weten hoeveel je echt verdient</h3>
        <p>
          Een factuur laat zien hoeveel je aan klanten hebt gefactureerd. Dat is iets anders dan inzicht in je winst.
        </p>
        <p>
          Zodra je ook kosten en andere financiële gegevens gaat bijhouden, kan een boekhoudprogramma helpen om een
          beter beeld van je onderneming te krijgen.
        </p>

        <h3>5. Je administratie kost te veel tijd</h3>
        <p>Dit is misschien wel het belangrijkste signaal.</p>
        <p>Als je iedere maand veel tijd kwijt bent aan:</p>
        <ul>
          <li>facturen verwerken;</li>
          <li>bonnetjes bewaren;</li>
          <li>inkomsten en uitgaven bijhouden;</li>
          <li>btw berekenen;</li>
          <li>banktransacties controleren;</li>
          <li>en overzichten maken,</li>
        </ul>
        <p>
          dan kan de tijdsbesparing van boekhoudsoftware belangrijker worden dan de maandelijkse kosten.
        </p>

        <h2>Kun je als zzp&apos;er zonder boekhoudprogramma boekhouden?</h2>
        <p>
          <strong>Ja.</strong>
        </p>
        <p>Een boekhoudprogramma is een hulpmiddel, geen verplicht onderdeel van het ondernemerschap.</p>
        <p>
          Je kunt je administratie bijvoorbeeld met Excel of andere systemen bijhouden. Belangrijk is vooral dat je
          administratie volledig en controleerbaar is en dat je je gegevens bewaart volgens de geldende regels.
        </p>
        <p>Voor een kleine administratie kan dat prima werken.</p>
        <p>
          Het nadeel is dat je meer zelf moet doen. Naarmate je administratie groeit, kunnen fouten en dubbel werk
          daardoor sneller ontstaan.
        </p>

        <h2>Factuurprogramma of boekhoudprogramma?</h2>
        <p>
          Een <strong>factuurprogramma</strong> en een <strong>boekhoudprogramma</strong> hebben een ander doel.
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col" />
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Factuurprogramma
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Boekhoudprogramma
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Verkoopfacturen maken</td>
                <td className="px-4 py-3">✓</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Facturen bewaren</td>
                <td className="px-4 py-3">✓</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Inkoopfacturen verwerken</td>
                <td className="px-4 py-3">Beperkt/niet altijd</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Bank koppelen</td>
                <td className="px-4 py-3">Niet altijd</td>
                <td className="px-4 py-3">Vaak</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Inkomsten en uitgaven bijhouden</td>
                <td className="px-4 py-3">Beperkt</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw-overzicht</td>
                <td className="px-4 py-3">Afhankelijk van tool</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Winst en verlies</td>
                <td className="px-4 py-3">Meestal niet</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Uitgebreide administratie</td>
                <td className="px-4 py-3">Nee</td>
                <td className="px-4 py-3">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Een factuurprogramma kan dus voldoende zijn als je vooral snel en netjes facturen wilt maken.
        </p>
        <p>
          Een boekhoudprogramma wordt interessanter zodra je <strong>de rest van je administratie</strong> ook centraal
          wilt bijhouden.
        </p>
        <p>
          Wil je precies weten wat het verschil is en wanneer je welke oplossing nodig hebt? Bekijk dan ook onze
          vergelijking tussen een{' '}
          <Link href="/blogs/gratis-factuurtool-vs-boekhoudprogramma" className="text-warm-orange hover:underline">
            factuurprogramma en boekhoudprogramma
          </Link>
          .
        </p>

        <h2>Zelf boekhouden of een boekhouder inschakelen?</h2>
        <p>Een boekhoudprogramma betekent niet automatisch dat je alles zelf moet doen.</p>
        <p>Er zijn grofweg drie mogelijkheden:</p>

        <h3>Alles zelf doen</h3>
        <p>
          Je houdt zelf je administratie bij, doet je aangiftes en bewaakt je financiële administratie.
        </p>
        <p>
          Dit kan interessant zijn als je administratie eenvoudig is en je voldoende tijd en kennis hebt.
        </p>

        <h3>Software gebruiken en zelf de administratie doen</h3>
        <p>
          Je gebruikt boekhoudsoftware voor je dagelijkse administratie en houdt zelf controle over je cijfers.
        </p>
        <p>Een boekhouder kan eventueel meekijken of helpen met bepaalde aangiftes.</p>

        <h3>De administratie uitbesteden</h3>
        <p>Je laat een boekhouder een groot deel of de volledige administratie verzorgen.</p>
        <p>Dit kost meer geld, maar kan veel tijd besparen.</p>
        <p>
          Voor veel zzp&apos;ers is een combinatie interessant:{' '}
          <strong>
            zelf de dagelijkse administratie bijhouden en een boekhouder inschakelen voor controle of complexere
            fiscale zaken.
          </strong>
        </p>

        <h2>Wat kost een boekhoudprogramma voor zzp&apos;ers?</h2>
        <p>De prijs verschilt sterk per aanbieder en pakket.</p>
        <p>
          Er zijn eenvoudige pakketten voor een relatief laag maandbedrag en uitgebreidere boekhoudprogramma&apos;s
          die meer kosten.
        </p>
        <p>Let daarom niet alleen op de prijs. Kijk vooral naar wat je daadwerkelijk nodig hebt:</p>
        <ul>
          <li>facturen;</li>
          <li>inkoop;</li>
          <li>bankkoppeling;</li>
          <li>btw-administratie;</li>
          <li>rapportages;</li>
          <li>automatische verwerking;</li>
          <li>ondersteuning;</li>
          <li>en eventuele extra kosten.</li>
        </ul>
        <p>
          Als je nog maar weinig administratie hebt, kan een betaald boekhoudprogramma relatief weinig waarde
          toevoegen. Als je er iedere maand meerdere uren mee bespaart, kan de prijs juist makkelijk opwegen tegen de
          tijd die je bespaart.
        </p>

        <h2>Welk boekhoudprogramma past bij een zzp&apos;er?</h2>
        <p>
          Als je hebt besloten dat boekhoudsoftware voor jou interessant is, zijn er verschillende opties.
        </p>
        <p>Voor Nederlandse zzp&apos;ers kun je bijvoorbeeld kijken naar:</p>
        <ul>
          <li>
            <strong>Moneybird</strong>
          </li>
          <li>
            <strong>Jortt</strong>
          </li>
          <li>
            <strong>e-Boekhouden.nl</strong>
          </li>
        </ul>
        <p>
          De verschillen zitten onder andere in prijs, gebruiksgemak, automatisering, functies en de manier waarop je
          administratie wordt verwerkt.
        </p>
        <p>
          Wil je deze opties vergelijken? Bekijk dan onze uitgebreide gids:{' '}
          <Link href="/blogs/beste-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
            Beste boekhoudprogramma voor zzp&apos;ers: vergelijk de opties
          </Link>
          .
        </p>

        <h2>Wanneer zou ik overstappen?</h2>
        <p>Je hoeft niet per se vanaf dag één een uitgebreid boekhoudprogramma te gebruiken.</p>
        <p>Een praktische aanpak kan zijn:</p>
        <p>
          <strong>Start → eenvoudige administratie → groei → meer transacties → boekhoudsoftware</strong>
        </p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>Fase 1:</strong> je hebt een paar klanten en weinig kosten
          <br />→ eenvoudige factuurtool + eigen administratie
        </p>
        <p>
          <strong>Fase 2:</strong> je krijgt meer klanten en zakelijke kosten
          <br />→ kijk naar software voor je volledige administratie
        </p>
        <p>
          <strong>Fase 3:</strong> je hebt veel transacties en wilt automatiseren
          <br />→ boekhoudprogramma met bijvoorbeeld bankkoppeling en btw-overzicht
        </p>
        <p>
          <strong>Fase 4:</strong> je administratie wordt complex of kost te veel tijd
          <br />→ boekhoudsoftware combineren met een boekhouder of administratie uitbesteden
        </p>
        <p>
          Er is dus geen magisch moment waarop iedere zzp&apos;er een boekhoudprogramma moet aanschaffen.
        </p>

        <h2>Conclusie: heb ik een boekhoudprogramma nodig?</h2>
        <p>
          <strong>Nee, niet per se.</strong>
        </p>
        <p>
          Als zzp&apos;er kun je je administratie ook zonder boekhoudprogramma bijhouden. Zeker als je net begint en
          maar weinig facturen en kosten hebt, kan een eenvoudige oplossing voldoende zijn.
        </p>
        <p>
          Een <strong>boekhoudprogramma wordt vooral interessant zodra je administratie groeit</strong>. Denk aan
          meer inkoopfacturen, veel banktransacties, meer zakelijke kosten, behoefte aan btw-overzicht of de wens om
          sneller inzicht in je winst te krijgen.
        </p>
        <p>
          Begin daarom niet met meer software dan je nodig hebt. Maar wacht ook niet te lang als je administratie
          zoveel tijd kost dat automatisering zichzelf kan terugverdienen.
        </p>
        <p>
          Wil je vervolgens bepalen <strong>welk programma het beste bij jouw situatie past?</strong>
        </p>
        <p>
          Begin met de{' '}
          <Link href="/tools/boekhoudprogramma-check" className="text-warm-orange hover:underline">
            boekhoudprogramma-check
          </Link>
          : je krijgt in een paar vragen een indicatie van het type oplossing dat bij jouw administratie past.
          Daarna kun je concreet vergelijken in onze{' '}
          <Link href="/blogs/beste-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
            vergelijking van de beste boekhoudprogramma&apos;s voor zzp&apos;ers
          </Link>
          .
        </p>
        <BoekhoudCheckCta />
        <p>
          Liever alleen snel een factuur maken?{' '}
          <Link href="/create-invoice" className="text-warm-orange hover:underline">
            Maak gratis een factuur met FactuurBaas →
          </Link>
        </p>
        <CtaButton />

        <h2>Veelgestelde vragen</h2>
        <h3>Moet een zzp&apos;er een boekhoudprogramma hebben?</h3>
        <p>
          Nee. Je bent niet verplicht om een specifiek boekhoudprogramma te gebruiken. Je moet wel een goede
          administratie bijhouden.
        </p>
        <h3>Wanneer is een boekhoudprogramma handig voor een zzp&apos;er?</h3>
        <p>
          Vooral wanneer je administratie groter wordt en je meerdere soorten gegevens moet verwerken, zoals
          verkoopfacturen, inkoopfacturen, bonnetjes, banktransacties en btw.
        </p>
        <h3>Kan ik als zzp&apos;er boekhouden zonder software?</h3>
        <p>
          Ja. Je kunt bijvoorbeeld met Excel of een andere administratie werken. Voor grotere administraties kan
          software wel veel tijd en handmatig werk besparen.
        </p>
        <h3>Is een factuurprogramma hetzelfde als een boekhoudprogramma?</h3>
        <p>
          Nee. Een factuurprogramma is vooral bedoeld om facturen te maken en te beheren. Een boekhoudprogramma richt
          zich op de bredere financiële administratie van je onderneming.
        </p>
        <h3>Wanneer moet ik overstappen naar een boekhoudprogramma?</h3>
        <p>
          Er is geen vast moment. Een goed moment is bijvoorbeeld wanneer je administratie veel tijd kost, je veel
          transacties hebt of je meer inzicht en automatisering wilt.
        </p>
        <h3>Kan ik eerst een factuurprogramma gebruiken en later boekhoudsoftware?</h3>
        <p>
          Ja. Je kunt prima beginnen met een eenvoudige factuurtool en later overstappen naar of aanvullen met
          boekhoudsoftware wanneer je administratie daarom vraagt.
        </p>
      </>
    )
  },
  {
    slug: 'gratis-factuurtool-vs-boekhoudprogramma',
    relatedSlugs: [
      'factureren-zonder-account',
      'wanneer-boekhoudsoftware-nodig-zzp',
      'beste-boekhoudprogramma-zzp',
      'gratis-factuur-zzp',
      'factuur-maken-zzp',
    ],
    metaTitle: 'Factuurprogramma of boekhoudprogramma? Wat heb je nodig?',
    title: 'Factuurprogramma of boekhoudprogramma: wat heb je nodig?',
    excerpt:
      "Heb je als zzp'er genoeg aan een gratis factuurprogramma of heb je een boekhoudprogramma nodig? Vergelijk de verschillen, kosten en mogelijkheden.",
    keywords:
      "factuurprogramma of boekhoudprogramma, gratis factuurprogramma zzp, boekhoudprogramma zzp, factuurtool vs boekhoudsoftware, gratis facturen maken zzp",
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Gratis%20factuurtool%20vs%20boekhoudprogramma.png',
      alt: "Factuurprogramma of boekhoudprogramma: wat heb je nodig als zzp'er?",
    },
    datePublished: '2026-02-05',
    dateModified: '2026-09-05',
    faq: [
      {
        question: 'Wat is het verschil tussen een factuurprogramma en een boekhoudprogramma?',
        answer:
          'Een factuurprogramma richt zich voornamelijk op het maken van facturen. Een boekhoudprogramma biedt daarnaast functies voor een bredere administratie, zoals inkomsten, uitgaven, btw en andere administratieve processen.',
      },
      {
        question: "Heb ik als zzp'er een boekhoudprogramma nodig?",
        answer:
          'Niet alleen om facturen te maken. Als je administratie groter of complexer wordt, kan een boekhoudprogramma wel veel overzicht en tijdwinst opleveren.',
      },
      {
        question: 'Wat is een gratis factuurprogramma?',
        answer:
          'Een gratis factuurprogramma is software waarmee je zonder betaling facturen kunt maken. De functies verschillen per programma. Met FactuurBaas kun je gratis een professionele factuur maken zonder account of abonnement.',
      },
      {
        question: 'Is een gratis boekhoudprogramma echt gratis?',
        answer:
          "Dat verschilt per aanbieder. Sommige programma's hebben een gratis versie met beperkingen of een gratis proefperiode. Controleer daarom altijd welke functies daadwerkelijk gratis zijn.",
      },
      {
        question: "Kan ik als zzp'er gratis een factuur maken?",
        answer:
          'Ja. Dat kan bijvoorbeeld met een online factuurmaker, Word of Excel. Met FactuurBaas kun je direct gratis online een factuur maken en deze als PDF downloaden.',
      },
      {
        question: 'Kan ik een factuur maken zonder account?',
        answer:
          'Ja. Met FactuurBaas kun je zonder account een factuur maken en de PDF direct downloaden.',
      },
      {
        question: 'Is FactuurBaas een boekhoudprogramma?',
        answer:
          'Nee. FactuurBaas richt zich op het eenvoudig maken van facturen. Als je een volledige boekhouding wilt bijhouden, is een uitgebreider boekhoudprogramma waarschijnlijk geschikter.',
      },
    ],
    content: (
      <>
        <p>
          Als zzp&apos;er wil je je administratie goed regelen, maar je hebt niet altijd een uitgebreid
          boekhoudprogramma nodig.
        </p>
        <p>
          Misschien wil je gewoon snel een factuur maken en als PDF downloaden. Maar misschien wil je daarnaast ook
          je inkomsten en uitgaven bijhouden, je btw-administratie regelen en meer van je boekhouding
          automatiseren.
        </p>
        <p>
          <strong>Wat heb je dan nodig: een factuurprogramma of een boekhoudprogramma?</strong>
        </p>
        <p>
          In dit artikel leggen we het verschil uit en bekijken we wanneer een gratis factuurprogramma zoals
          FactuurBaas voldoende kan zijn en wanneer een uitgebreider boekhoudprogramma interessanter wordt.
        </p>
        <p>
          Nog niet zeker welke richting bij jou past? Doe de{' '}
          <Link href="/tools/boekhoudprogramma-check" className="text-warm-orange hover:underline">
            boekhoudprogramma-check
          </Link>{' '}
          en krijg direct een indicatie op basis van je situatie. Of lees eerst hoe je{' '}
          <Link href="/gidsen/zelf-boekhouden-zzp" className="text-warm-orange hover:underline">
            zelf je boekhouding als zzp&apos;er aanpakt
          </Link>
          .
        </p>
        <BoekhoudCheckCta />

        <h2>Factuurprogramma vs. boekhoudprogramma</h2>
        <p>Het belangrijkste verschil is eenvoudig:</p>
        <p>
          <strong>
            Een factuurprogramma is vooral bedoeld om facturen te maken. Een boekhoudprogramma is bedoeld om je
            bredere financiële administratie bij te houden.
          </strong>
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Functie
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Factuurprogramma
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Boekhoudprogramma
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Facturen maken</td>
                <td className="px-4 py-3">✓</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw op facturen berekenen</td>
                <td className="px-4 py-3">✓</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Facturen als PDF downloaden</td>
                <td className="px-4 py-3">✓</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Klantgegevens gebruiken</td>
                <td className="px-4 py-3">Vaak</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Inkomsten bijhouden</td>
                <td className="px-4 py-3">Beperkt</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Uitgaven bijhouden</td>
                <td className="px-4 py-3">Beperkt</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw-administratie</td>
                <td className="px-4 py-3">Beperkt</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Banktransacties verwerken</td>
                <td className="px-4 py-3">Meestal niet</td>
                <td className="px-4 py-3">Vaak</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Administratie automatiseren</td>
                <td className="px-4 py-3">Beperkt</td>
                <td className="px-4 py-3">Vaak</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Volledige boekhouding</td>
                <td className="px-4 py-3">—</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Offertes</td>
                <td className="px-4 py-3">Soms</td>
                <td className="px-4 py-3">Vaak</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          De precieze functies verschillen per programma. Een factuurprogramma kan bijvoorbeeld extra functies bieden,
          terwijl een boekhoudprogramma verschillende abonnementsniveaus kan hebben.
        </p>

        <h2>Wanneer heb je alleen een factuurprogramma nodig?</h2>
        <p>Een eenvoudig factuurprogramma kan voldoende zijn als je vooral facturen wilt maken.</p>
        <p>Bijvoorbeeld wanneer je:</p>
        <ul>
          <li>maar enkele facturen per maand maakt</li>
          <li>weinig zakelijke transacties hebt</li>
          <li>je administratie op een andere manier bijhoudt</li>
          <li>geen uitgebreide automatisering nodig hebt</li>
          <li>vooral snel een professionele factuur wilt maken</li>
          <li>geen betaald boekhoudpakket wilt gebruiken</li>
        </ul>
        <p>In dat geval kan een volledig boekhoudprogramma onnodig uitgebreid zijn.</p>
        <p>Je betaalt dan mogelijk voor functies die je nauwelijks gebruikt.</p>

        <h2>Wanneer is een boekhoudprogramma interessanter?</h2>
        <p>Een boekhoudprogramma wordt interessanter wanneer je meer wilt doen dan alleen facturen maken.</p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>inkomsten en uitgaven bijhouden</li>
          <li>zakelijke kosten verwerken</li>
          <li>banktransacties verwerken</li>
          <li>btw-administratie bijhouden</li>
          <li>je administratie automatiseren</li>
          <li>financiële overzichten bekijken</li>
          <li>meerdere administratieve processen vanuit één programma regelen</li>
        </ul>
        <p>
          Hoe groter je administratie wordt, hoe meer voordeel een uitgebreider boekhoudprogramma kan bieden.
        </p>

        <h2>Gratis factuurprogramma voor zzp&apos;ers</h2>
        <p>
          Wil je alleen een factuur maken? Dan hoef je daarvoor niet automatisch een betaald boekhoudprogramma te
          nemen.
        </p>
        <p>
          Met <strong>FactuurBaas</strong> kun je gratis online een professionele factuur maken. Je hebt daarvoor geen
          account of abonnement nodig.
        </p>
        <p>Je kunt:</p>
        <ul>
          <li>gratis een factuur maken</li>
          <li>bedrijfs- en klantgegevens invullen</li>
          <li>meerdere producten of diensten toevoegen</li>
          <li>btw automatisch laten berekenen</li>
          <li>verschillende btw-percentages gebruiken</li>
          <li>een professionele factuur opmaken</li>
          <li>de factuur direct als PDF downloaden</li>
        </ul>
        <p>Je maakt de factuur online en kunt de PDF daarna zelf naar je klant sturen.</p>
        <CtaButton />

        <h2>Factuurprogramma of boekhoudprogramma: wat is goedkoper?</h2>
        <p>Dat hangt af van wat je nodig hebt.</p>
        <p>
          Een gratis factuurprogramma kan de goedkoopste oplossing zijn als je alleen facturen wilt maken. Je hebt dan
          geen abonnement nodig voor een uitgebreide administratie die je misschien niet gebruikt.
        </p>
        <p>
          Een boekhoudprogramma kost vaak geld, maar daar krijg je ook meer functies voor terug.
        </p>
        <p>De belangrijkste vraag is daarom niet:</p>
        <p>
          <strong>“Wat is het goedkoopste programma?”</strong>
        </p>
        <p>Maar:</p>
        <p>
          <strong>“Welke functies heb ik daadwerkelijk nodig?”</strong>
        </p>
        <p>
          Als je drie facturen per maand maakt en weinig administratie hebt, kan een eenvoudige factuurtool logisch
          zijn.
        </p>
        <p>
          Heb je tientallen transacties, zakelijke kosten en veel administratief werk? Dan kan een boekhoudprogramma
          uiteindelijk juist voordeliger zijn omdat het tijd bespaart.
        </p>

        <h2>Gratis boekhoudprogramma of gratis factuurprogramma?</h2>
        <p>Deze termen worden vaak door elkaar gebruikt, maar er is een belangrijk verschil.</p>
        <p>
          Een <strong>gratis factuurprogramma</strong> kan zich volledig richten op het maken van facturen.
        </p>
        <p>
          Een <strong>gratis boekhoudprogramma</strong> suggereert dat je ook je bredere administratie gratis kunt
          beheren.
        </p>
        <p>
          Dat betekent niet automatisch dat een gratis boekhoudprogramma dezelfde functies heeft als een betaald
          pakket. Controleer daarom altijd wat daadwerkelijk inbegrepen is.
        </p>
        <p>
          Als je alleen een gratis factuur nodig hebt, is het niet nodig om een volledig boekhoudprogramma te zoeken.
        </p>

        <h2>Boekhoudprogramma&apos;s voor zzp&apos;ers</h2>
        <p>
          Heb je besloten dat je meer nodig hebt dan alleen een factuurprogramma? Dan kun je verschillende
          boekhoudprogramma&apos;s voor zzp&apos;ers vergelijken.
        </p>
        <p>Bekende opties zijn bijvoorbeeld:</p>
        <ul>
          <li>
            <strong>Moneybird</strong>
          </li>
          <li>
            <strong>Jortt</strong>
          </li>
          <li>
            <strong>e-Boekhouden.nl</strong>
          </li>
          <li>andere online boekhoudprogramma&apos;s</li>
        </ul>
        <p>De beste keuze hangt af van je administratie en de functies die je belangrijk vindt.</p>
        <p>Let bij het vergelijken bijvoorbeeld op:</p>
        <ul>
          <li>prijs</li>
          <li>facturatie</li>
          <li>btw-functionaliteit</li>
          <li>inkomsten en uitgaven</li>
          <li>bankkoppelingen</li>
          <li>automatisering</li>
          <li>offertes</li>
          <li>urenregistratie</li>
          <li>mobiele mogelijkheden</li>
          <li>ondersteuning</li>
        </ul>
        <p>
          Bekijk ook onze vergelijking van het{' '}
          <Link href="/blogs/beste-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
            beste boekhoudprogramma voor zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Factuurprogramma én boekhoudprogramma</h2>
        <p>Je hoeft niet altijd te kiezen tussen een factuurprogramma en een boekhoudprogramma.</p>
        <p>Sommige boekhoudprogramma&apos;s hebben namelijk ook uitgebreide facturatiefuncties.</p>
        <p>
          Dat kan handig zijn wanneer je je volledige administratie vanuit één systeem wilt regelen.
        </p>
        <p>De vraag is dan vooral of je die extra functies nodig hebt.</p>
        <p>
          <strong>Alleen facturen nodig?</strong>
          <br />
          Een eenvoudige factuurmaker kan voldoende zijn.
        </p>
        <p>
          <strong>Facturen én volledige administratie nodig?</strong>
          <br />
          Een boekhoudprogramma ligt meer voor de hand.
        </p>

        <h2>Kan ik gratis facturen maken zonder account?</h2>
        <p>Ja.</p>
        <p>
          Met FactuurBaas kun je direct een factuur maken zonder eerst een account aan te maken.
        </p>
        <p>
          Je vult je eigen gegevens en de gegevens van je klant in, voegt de producten of diensten toe en maakt de
          factuur. Daarna kun je de factuur direct als PDF downloaden.
        </p>
        <p>Dat is vooral handig wanneer je snel één factuur wilt maken.</p>
        <CtaButton />

        <h2>Factuur maken met Word of Excel</h2>
        <p>Een andere mogelijkheid is zelf een factuur maken met Word of Excel.</p>
        <p>Dat kan prima wanneer je maar af en toe factureert, maar je moet wel meer zelf controleren.</p>
        <p>Bijvoorbeeld:</p>
        <ul>
          <li>factuurnummering</li>
          <li>btw-berekeningen</li>
          <li>totalen</li>
          <li>juiste factuurgegevens</li>
          <li>PDF-export</li>
          <li>opmaak</li>
        </ul>
        <p>Met een online factuurprogramma zijn veel van deze stappen eenvoudiger.</p>
        <p>
          Bekijk eventueel onze{' '}
          <Link href="/factuur-template/excel" className="text-warm-orange hover:underline">
            Excel factuurtemplate
          </Link>{' '}
          of{' '}
          <Link href="/factuur-template/word" className="text-warm-orange hover:underline">
            Word factuurtemplate
          </Link>
          .
        </p>

        <h2>Wat is het beste voor een startende zzp&apos;er?</h2>
        <p>
          Als je net begint, hoef je niet automatisch met het meest uitgebreide boekhoudpakket te starten.
        </p>
        <p>Stel jezelf eerst drie vragen:</p>

        <h3>1. Hoeveel facturen ga ik maken?</h3>
        <p>
          Maak je maar een paar facturen per maand? Dan kan een eenvoudige factuurtool voldoende zijn.
        </p>

        <h3>2. Hoeveel administratie heb ik daarnaast?</h3>
        <p>
          Heb je veel zakelijke kosten, inkomsten en transacties? Dan wordt boekhoudsoftware interessanter.
        </p>

        <h3>3. Hoeveel wil ik automatiseren?</h3>
        <p>
          Wil je zoveel mogelijk administratieve handelingen uitbesteden aan software? Dan is een uitgebreider
          boekhoudprogramma waarschijnlijk geschikter.
        </p>

        <h2>Wanneer overstappen van een factuurprogramma naar boekhoudsoftware?</h2>
        <p>Je kunt prima eenvoudig beginnen en later overstappen.</p>
        <p>
          Een boekhoudprogramma kan interessanter worden wanneer je merkt dat je administratie steeds meer tijd kost.
        </p>
        <p>Bijvoorbeeld wanneer je:</p>
        <ul>
          <li>steeds meer facturen maakt</li>
          <li>meer zakelijke kosten krijgt</li>
          <li>veel transacties moet verwerken</li>
          <li>meer overzicht wilt</li>
          <li>minder handmatig werk wilt doen</li>
          <li>je administratie op één plek wilt beheren</li>
        </ul>
        <p>
          Je hoeft dus niet direct een uitgebreid boekhoudprogramma te nemen omdat je een bedrijf begint.
        </p>

        <h2>Wat is de beste keuze?</h2>
        <p>Er is geen universeel beste oplossing.</p>

        <h3>Kies een gratis factuurprogramma als je:</h3>
        <ul>
          <li>vooral facturen wilt maken</li>
          <li>weinig administratie hebt</li>
          <li>geen abonnement wilt</li>
          <li>snel een PDF-factuur wilt maken</li>
          <li>geen volledige boekhouding in hetzelfde programma nodig hebt</li>
        </ul>

        <h3>Kies een boekhoudprogramma als je:</h3>
        <ul>
          <li>je volledige administratie wilt bijhouden</li>
          <li>inkomsten en uitgaven wilt verwerken</li>
          <li>meer wilt automatiseren</li>
          <li>je btw-administratie wilt ondersteunen</li>
          <li>banktransacties wilt verwerken</li>
          <li>je administratie vanuit één programma wilt regelen</li>
        </ul>
        <p>
          Voor alleen facturen maken is <strong>FactuurBaas</strong> een eenvoudige gratis optie. Voor een volledige
          administratie kun je verschillende boekhoudprogramma&apos;s vergelijken, zoals Moneybird, Jortt en
          e-Boekhouden.nl.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Wat is het verschil tussen een factuurprogramma en een boekhoudprogramma?</h3>
        <p>
          Een factuurprogramma richt zich voornamelijk op het maken van facturen. Een boekhoudprogramma biedt
          daarnaast functies voor een bredere administratie, zoals inkomsten, uitgaven, btw en andere administratieve
          processen.
        </p>
        <h3>Heb ik als zzp&apos;er een boekhoudprogramma nodig?</h3>
        <p>
          Niet alleen om facturen te maken. Als je administratie groter of complexer wordt, kan een boekhoudprogramma
          wel veel overzicht en tijdwinst opleveren.
        </p>
        <h3>Wat is een gratis factuurprogramma?</h3>
        <p>
          Een gratis factuurprogramma is software waarmee je zonder betaling facturen kunt maken. De functies
          verschillen per programma. Met FactuurBaas kun je gratis een professionele factuur maken zonder account of
          abonnement.
        </p>
        <h3>Is een gratis boekhoudprogramma echt gratis?</h3>
        <p>
          Dat verschilt per aanbieder. Sommige programma&apos;s hebben een gratis versie met beperkingen of een gratis
          proefperiode. Controleer daarom altijd welke functies daadwerkelijk gratis zijn.
        </p>
        <h3>Kan ik als zzp&apos;er gratis een factuur maken?</h3>
        <p>
          Ja. Dat kan bijvoorbeeld met een online factuurmaker, Word of Excel. Met FactuurBaas kun je direct gratis
          online een factuur maken en deze als PDF downloaden.
        </p>
        <h3>Kan ik een factuur maken zonder account?</h3>
        <p>
          Ja. Met FactuurBaas kun je zonder account een factuur maken en de PDF direct downloaden.
        </p>
        <h3>Is FactuurBaas een boekhoudprogramma?</h3>
        <p>
          Nee. FactuurBaas richt zich op het eenvoudig maken van facturen. Als je een volledige boekhouding wilt
          bijhouden, is een uitgebreider boekhoudprogramma waarschijnlijk geschikter.
        </p>

        <h2>Factuurprogramma of boekhoudprogramma?</h2>
        <p>De keuze hangt uiteindelijk af van je administratie.</p>
        <p>
          <strong>Wil je alleen snel een factuur maken?</strong> Dan heb je waarschijnlijk geen uitgebreid
          boekhoudprogramma nodig.
        </p>
        <p>
          <strong>Wil je je volledige administratie beheren?</strong> Dan is boekhoudsoftware waarschijnlijk een
          betere keuze.
        </p>
        <p>
          FactuurBaas is er voor ondernemers die eenvoudig een factuur willen maken:{' '}
          <strong>gratis, zonder account en direct als PDF te downloaden.</strong>
        </p>
        <p>
          Twijfel je nog tussen een factuurtool en boekhoudsoftware? Doe dan de{' '}
          <Link href="/tools/boekhoudprogramma-check" className="text-warm-orange hover:underline">
            boekhoudprogramma-check
          </Link>{' '}
          voor een snelle indicatie.
        </p>
        <BoekhoudCheckCta />
        <CtaButton />
      </>
    )
  },
  {
    slug: 'zakelijke-rekening-zzp',
    relatedSlugs: ['factuurbeheer-overzicht', 'wanneer-boekhoudsoftware-nodig-zzp', 'sneller-betalen-factuur', 'factuur-maken-zzp'],
    metaTitle: 'Zakelijke rekening zzp: verplicht of niet?',
    title: 'Zakelijke rekening als zzp\'er: verplicht of niet?',
    breadcrumbLabel: 'Zakelijke rekening zzp',
    excerpt: 'Is een zakelijke rekening verplicht als zzp\'er? Lees wanneer je een zakelijke rekening nodig hebt, wat het kost en of je je privérekening mag gebruiken.',
    keywords: 'zakelijke rekening zzp, zakelijke rekening verplicht zzp, zakelijke rekening nodig als zzp, zzp rekening, zakelijke betaalrekening zzp',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/heb%20ik%20een%20zakelijke%20rekening%20nodig%20als%20zzper.png',
      alt: 'Zakelijke rekening als zzp\'er: verplicht of niet? Uitleg over wet, bankvoorwaarden en kosten.',
    },
    datePublished: '2026-02-06',
    dateModified: '2026-10-08',
    faq: [
      { question: 'Is een zakelijke rekening verplicht als zzp\'er?', answer: 'Nee. Voor een eenmanszaak is een zakelijke rekening niet wettelijk verplicht. Je bank kan zakelijk gebruik van een privérekening wel verbieden.' },
      { question: 'Moet ik als zzp\'er een aparte rekening hebben?', answer: 'Niet wettelijk, maar het is vaak verstandig. Je houdt zakelijke inkomsten en uitgaven overzichtelijker.' },
      { question: 'Mag ik mijn privérekening gebruiken voor mijn eenmanszaak?', answer: 'Dat kan wettelijk, maar alleen als de voorwaarden van je bank het toestaan.' },
      { question: 'Kan ik een tweede privérekening gebruiken voor zakelijke betalingen?', answer: 'Alleen als de bank zakelijk gebruik van die rekening toestaat. Een tweede privérekening is niet automatisch een toegestane zakelijke betaalrekening.' },
      { question: 'Is een zakelijke rekening verplicht voor de btw-aangifte?', answer: 'Nee. De Belastingdienst vereist een controleerbare administratie, maar schrijft voor een eenmanszaak geen zakelijke bankrekening voor.' },
      { question: 'Wat is de goedkoopste zakelijke rekening voor zzp\'ers?', answer: 'Dat hangt af van je betaalgedrag. Vergelijk zowel abonnementskosten als transactiekosten en eventuele extra diensten.' },
      { question: 'Kan ik zonder zakelijke rekening een factuur sturen?', answer: 'Ja. Je hebt geen zakelijke bankrekening nodig om een factuur op te stellen. Gebruik voor betalingen wel een rekening die je volgens de bankvoorwaarden zakelijk mag gebruiken.' },
      { question: 'Is een zakelijke rekening verplicht bij een bv?', answer: 'Een bv is een afzonderlijke rechtspersoon en heeft in de praktijk een eigen zakelijke rekening nodig om haar financiën gescheiden te beheren.' },
      { question: 'Kan ik later overstappen naar een zakelijke rekening?', answer: 'Ja. Je kunt later een zakelijke rekening openen en je klanten informeren over het nieuwe rekeningnummer. Werk ook je facturen en administratie bij.' },
    ],
    content: (
      <>
        <p>Ben je net begonnen als zzp&apos;er en vraag je je af of je een zakelijke rekening nodig hebt? Dan is het korte antwoord: <strong>nee, voor een eenmanszaak is een zakelijke bankrekening niet wettelijk verplicht.</strong></p>
        <p>Toch kiezen veel zzp&apos;ers voor een aparte zakelijke rekening. Daarmee houd je privé- en zakelijke betalingen gescheiden, wordt je administratie overzichtelijker en kun je gemakkelijker samenwerken met een boekhoudprogramma.</p>
        <p>Er is wel een belangrijk verschil tussen wat wettelijk mag en wat je bank toestaat. Hieronder leggen we uit hoe dat zit, welke kosten je kunt verwachten en wanneer een zakelijke rekening verstandig is.</p>

        <h2>Is een zakelijke rekening verplicht voor zzp&apos;ers?</h2>
        <p>Nee. Als je als zzp&apos;er een eenmanszaak hebt, verplicht de Nederlandse wet je niet om een zakelijke bankrekening te openen.</p>
        <p>Voor de Belastingdienst is vooral belangrijk dat je een controleerbare administratie bijhoudt en zakelijke en privétransacties kunt onderscheiden.</p>
        <p>De regels verschillen per rechtsvorm.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Rechtsvorm</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Zakelijke rekening verplicht?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Eenmanszaak / zzp</td>
                <td className="px-4 py-3">Nee, niet wettelijk</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Vof</td>
                <td className="px-4 py-3">Nee, niet algemeen wettelijk</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Maatschap</td>
                <td className="px-4 py-3">Nee, niet algemeen wettelijk</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Bv</td>
                <td className="px-4 py-3">In de praktijk nodig vanwege de afzonderlijke rechtspersoon</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p><strong>Let op:</strong> de meeste banken staan zakelijk gebruik van een gewone privérekening niet toe. Controleer daarom altijd de voorwaarden van je bank.</p>

        <h2>Mag je als zzp&apos;er je privérekening gebruiken?</h2>
        <p>Wettelijk gezien kan dat bij een eenmanszaak. Maar je bank kan het verbieden.</p>
        <p>Bij veel banken staat in de algemene voorwaarden dat een particuliere betaalrekening uitsluitend voor privégebruik bedoeld is.</p>
        <p>Gebruik je zo&apos;n rekening structureel voor zakelijke betalingen, dan kan de bank je vragen een zakelijke rekening te openen of maatregelen nemen op basis van de voorwaarden.</p>
        <h3>En een tweede privérekening?</h3>
        <p>Een extra privérekening openen om zakelijke betalingen apart te houden lijkt een goedkope oplossing.</p>
        <p>Maar ook voor een tweede privérekening gelden de voorwaarden van de bank.</p>
        <p>Een aparte rekening is dus niet automatisch geschikt voor zakelijk gebruik.</p>
        <p><strong>Praktisch advies:</strong> vraag je bank expliciet of je de rekening voor je eenmanszaak mag gebruiken.</p>

        <h2>Waarom kiezen veel zzp&apos;ers voor een zakelijke rekening?</h2>
        <p>Hoewel een zakelijke rekening niet wettelijk verplicht is, kan deze verschillende voordelen bieden.</p>
        <h3>1. Je houdt privé en zakelijk gescheiden</h3>
        <p>Stel dat je iedere maand twintig privébetalingen en tien zakelijke transacties hebt.</p>
        <p>Als alles via dezelfde rekening loopt, moet je bij het bijwerken van je administratie steeds bepalen welke transacties zakelijk zijn.</p>
        <p>Met een aparte zakelijke rekening wordt dat eenvoudiger.</p>
        <p>Je ziet sneller hoeveel klanten hebben betaald, welke zakelijke kosten je hebt gemaakt en hoeveel geld beschikbaar is.</p>
        <h3>2. Je administratie wordt overzichtelijker</h3>
        <p>Een zakelijke rekening maakt het gemakkelijker om banktransacties te vergelijken met facturen en bonnetjes.</p>
        <p>Dat is vooral handig bij de btw-aangifte en het opstellen van je jaarcijfers.</p>
        <p>Een zakelijke rekening vervangt je administratie overigens niet. Je moet facturen, bonnetjes en andere bewijsstukken nog steeds bewaren.</p>
        <h3>3. Je kunt boekhoudsoftware koppelen</h3>
        <p>Veel zakelijke bankrekeningen ondersteunen koppelingen met boekhoudsoftware.</p>
        <p>Daarmee kunnen banktransacties automatisch worden ingelezen en soms aan facturen worden gekoppeld.</p>
        <p>Welke koppelingen beschikbaar zijn, verschilt per bank en softwarepakket.</p>
        <h3>4. Je kunt betalingen op bedrijfsnaam ontvangen</h3>
        <p>Bij een zakelijke rekening kan de naam van je onderneming zichtbaar zijn voor klanten.</p>
        <p>Dat kan herkenbaarder zijn dan betalingen aan je persoonlijke naam.</p>
        <p>Welke naam wordt getoond, hangt af van de bank, de tenaamstelling en de gebruikte betaalmethode.</p>
        <h3>5. Je kunt zakelijke betaaldiensten gebruiken</h3>
        <p>Voor bepaalde betaaldiensten, webshops en zakelijke betaaloplossingen kan een zakelijke rekening vereist zijn.</p>
        <p>Controleer dit vooraf als je bijvoorbeeld online betalingen wilt accepteren.</p>

        <h2>Beschermt een zakelijke rekening je privévermogen?</h2>
        <p>Nee. Dit is een belangrijk misverstand.</p>
        <p>Bij een eenmanszaak ben je persoonlijk aansprakelijk voor de schulden van je onderneming.</p>
        <p>Het openen van een aparte zakelijke bankrekening verandert die aansprakelijkheid niet.</p>
        <p>Een zakelijke rekening scheidt je geldstromen administratief, maar zorgt niet voor een juridische scheiding tussen je privévermogen en je onderneming.</p>

        <h2>Wat kost een zakelijke rekening voor zzp&apos;ers?</h2>
        <p>De kosten verschillen per aanbieder en pakket.</p>
        <p>Sommige banken rekenen een vast maandbedrag, terwijl andere vooral kosten per transactie in rekening brengen.</p>
        <p>Let bij het vergelijken op:</p>
        <ul>
          <li>Maandelijkse abonnementskosten.</li>
          <li>Kosten per inkomende of uitgaande betaling.</li>
          <li>Kosten voor betaalpassen.</li>
          <li>Internationale betalingen en valutawissels.</li>
          <li>Boekhoudkoppelingen.</li>
          <li>Extra gebruikers of rekeningen.</li>
          <li>Eventuele introductiekortingen.</li>
        </ul>
        <h3>Rekenvoorbeeld</h3>
        <p>Stel dat een zakelijke rekening €8 per maand kost en je gemiddeld €0,15 per betaalde transactie betaalt.</p>
        <p>Bij twintig betaalde transacties per maand zijn de kosten:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Kostenpost</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Bedrag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Abonnement</td>
                <td className="px-4 py-3 text-right">€8,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">20 transacties × €0,15</td>
                <td className="px-4 py-3 text-right">€3,00</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal per maand</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€11,00</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal per jaar</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€132,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Dit is een fictief rekenvoorbeeld, geen actueel tarief van een specifieke bank.</p>
        <p>Vergelijk daarom de totale kosten op basis van je eigen betaalgedrag.</p>

        <h2>Welke zakelijke rekening past bij jouw situatie?</h2>
        <p>De beste zakelijke rekening hangt af van hoe je werkt.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[560px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Situatie</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Waarop letten?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Startende zzp&apos;er met weinig transacties</td>
                <td className="px-4 py-3">Lage vaste kosten</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Freelancer met veel klanten</td>
                <td className="px-4 py-3">Kosten per betaling en overzicht</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Ondernemer met boekhoudsoftware</td>
                <td className="px-4 py-3">Beschikbare bankkoppelingen</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Zzp&apos;er met buitenlandse klanten</td>
                <td className="px-4 py-3">IBAN, valuta en internationale kosten</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Webshop of online dienstverlener</td>
                <td className="px-4 py-3">Compatibiliteit met betaaldiensten</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Ondernemer met veel spaargeld voor belasting</td>
                <td className="px-4 py-3">Mogelijkheid om geld apart te reserveren</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Kies niet automatisch voor het goedkoopste abonnement.</p>
        <p>Een rekening met lage vaste kosten kan duurder uitvallen wanneer je veel transacties uitvoert.</p>

        <h2>Zakelijke rekening openen als zzp&apos;er: wat heb je nodig?</h2>
        <p>Bij het openen van een zakelijke rekening vraagt een bank meestal om gegevens waarmee zij je identiteit en onderneming kan controleren.</p>
        <p>Denk aan:</p>
        <ul>
          <li>Een geldig identiteitsbewijs.</li>
          <li>Je KvK-nummer.</li>
          <li>Gegevens over je onderneming en werkzaamheden.</li>
          <li>Informatie over eventuele internationale activiteiten.</li>
        </ul>
        <p>Welke gegevens precies nodig zijn, verschilt per bank.</p>
        <p>Bij veel aanbieders kun je de aanvraag online doen.</p>

        <h2>Kan ik factureren zonder zakelijke rekening?</h2>
        <p>Ja. Als zzp&apos;er met een eenmanszaak kun je facturen versturen zonder zakelijke rekening, mits je een betaalrekening gebruikt die je volgens de voorwaarden van je bank zakelijk mag gebruiken.</p>
        <p>Op je factuur vermeld je duidelijk hoe je klant kan betalen.</p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>Te betalen: €605,00</strong><br />
          <strong>IBAN:</strong> NL00 BANK 0123 4567 89<br />
          <strong>Ten name van:</strong> J. Jansen<br />
          <strong>Betalingskenmerk:</strong> 2026-018<br />
          <strong>Vervaldatum:</strong> 22 oktober 2026
        </p>
        <p>Het IBAN is in dit voorbeeld fictief.</p>
        <p>Zorg dat de rekeninggegevens kloppen en dat de klant weet aan wie hij betaalt.</p>
        <p>
          Met{' '}
          <Link href="/create-invoice" className="text-warm-orange hover:underline">FactuurBaas</Link>{' '}
          kun je gratis een factuur maken en als PDF downloaden, zonder account.
        </p>
        <CtaButton href="/create-invoice" label="Maak gratis een factuur" />

        <h2>Hoe houd je je administratie bij zonder zakelijke rekening?</h2>
        <p>Gebruik je een rekening waarop zowel privé- als zakelijke transacties staan?</p>
        <p>Dan moet je extra zorgvuldig administreren.</p>
        <h3>Stap 1: Bewaar je facturen</h3>
        <p>Bewaar alle uitgaande facturen en zakelijke inkoopfacturen.</p>
        <h3>Stap 2: Markeer zakelijke transacties</h3>
        <p>Zorg dat je kunt aantonen welke ontvangsten en uitgaven bij je onderneming horen.</p>
        <h3>Stap 3: Controleer betalingen</h3>
        <p>Vergelijk je banktransacties met je openstaande facturen.</p>
        <h3>Stap 4: Reserveer geld voor belastingen</h3>
        <p>Houd rekening met toekomstige btw- en inkomstenbelastingbetalingen.</p>
        <h3>Stap 5: Bewaar je administratie</h3>
        <p>Voor de meeste fiscale administratieve gegevens geldt een bewaartermijn van zeven jaar. Voor bepaalde gegevens gelden langere termijnen.</p>
        <p>
          <Link href="/blogs/factuurbeheer-overzicht" className="text-warm-orange hover:underline">Lees hoe je overzicht houdt met digitaal factuurbeheer</Link>.
        </p>

        <h2>Wanneer is een zakelijke rekening verstandig?</h2>
        <p>Een zakelijke rekening wordt aantrekkelijker wanneer je onderneming groeit.</p>
        <p>Bijvoorbeeld wanneer:</p>
        <ul>
          <li>Je regelmatig facturen verstuurt.</li>
          <li>Je veel zakelijke uitgaven hebt.</li>
          <li>Je betalingen automatisch wilt verwerken.</li>
          <li>Je internationale klanten hebt.</li>
          <li>Je zakelijke betaaldiensten gebruikt.</li>
          <li>Je niet langer privé- en zakelijke transacties wilt uitzoeken.</li>
        </ul>
        <p>Heb je slechts enkele zakelijke transacties per maand? Dan kun je eerst onderzoeken welke mogelijkheden je bank biedt.</p>
        <p>Zorg wel dat je vanaf het begin een correcte administratie bijhoudt.</p>

        <h2>Veelgestelde vragen over zakelijke rekeningen voor zzp&apos;ers</h2>
        <h3>Is een zakelijke rekening verplicht als zzp&apos;er?</h3>
        <p>Nee. Voor een eenmanszaak is een zakelijke rekening niet wettelijk verplicht. Je bank kan zakelijk gebruik van een privérekening wel verbieden.</p>
        <h3>Moet ik als zzp&apos;er een aparte rekening hebben?</h3>
        <p>Niet wettelijk, maar het is vaak verstandig. Je houdt zakelijke inkomsten en uitgaven overzichtelijker.</p>
        <h3>Mag ik mijn privérekening gebruiken voor mijn eenmanszaak?</h3>
        <p>Dat kan wettelijk, maar alleen als de voorwaarden van je bank het toestaan.</p>
        <h3>Kan ik een tweede privérekening gebruiken voor zakelijke betalingen?</h3>
        <p>Alleen als de bank zakelijk gebruik van die rekening toestaat. Een tweede privérekening is niet automatisch een toegestane zakelijke betaalrekening.</p>
        <h3>Is een zakelijke rekening verplicht voor de btw-aangifte?</h3>
        <p>Nee. De Belastingdienst vereist een controleerbare administratie, maar schrijft voor een eenmanszaak geen zakelijke bankrekening voor.</p>
        <h3>Wat is de goedkoopste zakelijke rekening voor zzp&apos;ers?</h3>
        <p>Dat hangt af van je betaalgedrag. Vergelijk zowel abonnementskosten als transactiekosten en eventuele extra diensten.</p>
        <h3>Kan ik zonder zakelijke rekening een factuur sturen?</h3>
        <p>Ja. Je hebt geen zakelijke bankrekening nodig om een factuur op te stellen. Gebruik voor betalingen wel een rekening die je volgens de bankvoorwaarden zakelijk mag gebruiken.</p>
        <h3>Is een zakelijke rekening verplicht bij een bv?</h3>
        <p>Een bv is een afzonderlijke rechtspersoon en heeft in de praktijk een eigen zakelijke rekening nodig om haar financiën gescheiden te beheren.</p>
        <h3>Kan ik later overstappen naar een zakelijke rekening?</h3>
        <p>Ja. Je kunt later een zakelijke rekening openen en je klanten informeren over het nieuwe rekeningnummer. Werk ook je facturen en administratie bij.</p>

        <h2>Conclusie: zakelijke rekening als zzp&apos;er, wel of niet?</h2>
        <p>Voor een eenmanszaak is een zakelijke rekening niet wettelijk verplicht.</p>
        <p>Toch is het voor veel zzp&apos;ers een verstandige keuze, vooral vanwege het administratieve overzicht en de voorwaarden die banken stellen aan privérekeningen.</p>
        <p>Begin met het vergelijken van de totale kosten en de functies die je nodig hebt.</p>
        <p>En of je nu een zakelijke rekening gebruikt of een toegestane privérekening: zorg dat je facturen duidelijk en correct zijn.</p>
        <p><strong>Met FactuurBaas maak je gratis een professionele factuur als PDF, zonder account.</strong></p>
        <CtaButton href="/create-invoice" label="Maak gratis een factuur" />
      </>
    )
  },
  {
    slug: 'revolut-business-zzp-voordelen-nadelen',
    relatedSlugs: ['zakelijke-rekening-zzp', 'factuurbeheer-overzicht', 'sneller-betalen-factuur', 'wanneer-boekhoudsoftware-nodig-zzp'],
    metaTitle: 'Revolut Business voor zzp\'ers: kosten & nadelen',
    title: 'Revolut Business voor zzp\'ers: kosten, voordelen en nadelen',
    breadcrumbLabel: 'Revolut Business zzp',
    excerpt: 'Is Revolut Business geschikt voor zzp\'ers? Bekijk de kosten, pakketten, voordelen, nadelen, boekhoudkoppelingen en alternatieven.',
    keywords: 'revolut zzp, revolut business kosten, revolut zakelijke rekening, revolut nadelen, revolut zzp rekening',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/voor%20en%20nad%20delen%20van%20revolut%20zakelijk.png',
      alt: 'Revolut Business voor zzp\'ers: kosten, voordelen en nadelen van de zakelijke rekening.',
    },
    datePublished: '2026-02-06',
    dateModified: '2026-10-08',
    faq: [
      { question: 'Is Revolut geschikt voor zzp\'ers?', answer: 'Ja, Revolut Business kan geschikt zijn voor Nederlandse zzp\'ers, vooral wanneer zij digitaal werken of internationale betalingen uitvoeren.' },
      { question: 'Wat kost Revolut Business?', answer: 'De gepubliceerde maandprijzen zijn €10 voor Basic, €35 voor Grow en €125 voor Scale. Enterprise heeft een prijs op aanvraag. Extra kosten kunnen van toepassing zijn.' },
      { question: 'Is Revolut Business gratis?', answer: 'Nee, het reguliere Basic-pakket is betaald. Tijdelijke acties of proefperiodes kunnen beschikbaar zijn.' },
      { question: 'Krijg je een Nederlandse IBAN bij Revolut Business?', answer: 'Revolut biedt Nederlandse zakelijke klanten een Nederlandse IBAN.' },
      { question: 'Krijg je rente bij Revolut Business?', answer: 'Revolut biedt een zakelijk spaarproduct met variabele rente. De hoogte hangt af van je abonnement en de actuele voorwaarden.' },
      { question: 'Heeft Revolut Business een boekhoudkoppeling?', answer: 'Ja, Revolut ondersteunt diverse boekhoudintegraties, waaronder Exact Online, SnelStart en Yuki.' },
      { question: 'Wat zijn de grootste nadelen van Revolut Business?', answer: 'De vaste abonnementskosten, mogelijke extra transactiekosten, het ontbreken van fysieke bankkantoren en het feit dat niet iedere ondernemer de internationale functies nodig heeft.' },
      { question: 'Kan ik Revolut Business gebruiken met FactuurBaas?', answer: 'Ja. Je kunt je Revolut-IBAN op een factuur zetten die je met FactuurBaas maakt. Er is geen directe bankkoppeling tussen beide diensten.' },
    ],
    content: (
      <>
        <p>Overweeg je Revolut Business als zakelijke rekening voor je eenmanszaak? Dan wil je waarschijnlijk weten wat het kost, of je een Nederlands IBAN krijgt en hoe geschikt Revolut is voor je dagelijkse administratie.</p>
        <p><strong>Revolut Business kan interessant zijn voor zzp&apos;ers die digitaal bankieren, internationale betalingen ontvangen of in meerdere valuta&apos;s werken.</strong> Maar het is niet automatisch de goedkoopste keuze.</p>
        <p>In dit artikel vergelijken we de pakketten, voordelen, nadelen en alternatieven van Revolut Business voor Nederlandse zzp&apos;ers.</p>
        <p><em>Laatst gecontroleerd: oktober 2026. Tarieven en voorwaarden kunnen veranderen.</em></p>

        <h2>Wat is Revolut Business?</h2>
        <p>Revolut Business is de zakelijke bankdienst van Revolut, waarmee ondernemers betalingen kunnen ontvangen en uitvoeren, betaalkaarten beheren en in meerdere valuta&apos;s werken.</p>
        <p>Voor Nederlandse ondernemers biedt Revolut onder andere:</p>
        <ul>
          <li>Een Nederlandse IBAN.</li>
          <li>Lokale en internationale overschrijvingen.</li>
          <li>Betalingen via iDEAL.</li>
          <li>Fysieke en virtuele betaalkaarten.</li>
          <li>Wisselen tussen verschillende valuta&apos;s.</li>
          <li>Integraties met boekhoudsoftware.</li>
          <li>Zakelijke spaarmogelijkheden.</li>
        </ul>
        <p>De beschikbaarheid van functies en limieten hangt af van het gekozen abonnement.</p>

        <h2>Wat kost Revolut Business in 2026?</h2>
        <p>Revolut biedt verschillende zakelijke pakketten.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Pakket</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Maandprijs</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Gericht op</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Basic</td>
                <td className="px-4 py-3 text-right">€10</td>
                <td className="px-4 py-3">Starters en kleinere ondernemingen</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Grow</td>
                <td className="px-4 py-3 text-right">€35</td>
                <td className="px-4 py-3">Ondernemers met meer betaalverkeer</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Scale</td>
                <td className="px-4 py-3 text-right">€125</td>
                <td className="px-4 py-3">Bedrijven met hogere volumes</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Enterprise</td>
                <td className="px-4 py-3 text-right">Op aanvraag</td>
                <td className="px-4 py-3">Grotere ondernemingen</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Dit zijn de gepubliceerde Nederlandse maandprijzen in oktober 2026.</p>
        <p>Naast abonnementskosten kunnen kosten gelden voor transacties, kaarten, internationale betalingen en valutawissels.</p>
        <h3>Wat krijg je bij Revolut Business Basic?</h3>
        <p>Het Basic-pakket biedt onder andere:</p>
        <ul>
          <li>10 kosteloze lokale overschrijvingen binnen de pakketvoorwaarden.</li>
          <li>Een valutawissellimiet van €1.000 tegen de interbancaire koers tijdens handelsuren.</li>
          <li>Zakelijke betaalkaarten.</li>
          <li>Toegang tot de Revolut Business-app.</li>
          <li>Mogelijkheden voor boekhoudintegraties.</li>
        </ul>
        <p>Boven de inbegrepen limieten kunnen extra kosten gelden.</p>
        <h3>Is Revolut Business gratis?</h3>
        <p>Nee. Het reguliere Basic-pakket kost €10 per maand.</p>
        <p>Revolut biedt soms tijdelijke proefperiodes of promoties aan. Controleer daarvoor de actuele actievoorwaarden.</p>

        <h2>Voordelen van Revolut Business voor zzp&apos;ers</h2>
        <h3>1. Nederlandse IBAN</h3>
        <p>Revolut biedt Nederlandse zakelijke klanten een Nederlandse IBAN.</p>
        <p>Dat maakt het praktisch voor ondernemers die vooral met Nederlandse klanten en leveranciers werken.</p>
        <h3>2. Internationale betalingen</h3>
        <p>Werk je met klanten buiten Nederland? Dan kan Revolut aantrekkelijk zijn.</p>
        <p>Je kunt verschillende valuta&apos;s gebruiken en internationaal betalen.</p>
        <p>Let wel op de wissellimieten, eventuele toeslagen en kosten voor internationale overboekingen.</p>
        <h3>3. Moderne app en virtuele kaarten</h3>
        <p>Je kunt betalingen en zakelijke uitgaven beheren via de app of webomgeving.</p>
        <p>Virtuele kaarten kunnen handig zijn voor bijvoorbeeld softwareabonnementen en online aankopen.</p>
        <h3>4. Boekhoudkoppelingen</h3>
        <p>Revolut ondersteunt integraties met onder andere Exact Online, SnelStart en Yuki.</p>
        <p>Dat kan helpen om banktransacties sneller in je administratie te verwerken.</p>
        <p>Controleer vooraf of jouw specifieke boekhoudpakket wordt ondersteund en welke functies beschikbaar zijn.</p>
        <h3>5. Zakelijke spaarmogelijkheden</h3>
        <p>Met Revolut Business Savings kun je onder voorwaarden rente ontvangen op zakelijk spaargeld.</p>
        <p>De rente is variabel en afhankelijk van je pakket.</p>
        <p>Dit kan bijvoorbeeld interessant zijn wanneer je geld apart houdt voor belastingen of toekomstige uitgaven.</p>
        <p>Let op het verschil tussen een gewone spaarrekening en een geldmarktfonds: bij een geldmarktfonds bestaat beleggingsrisico.</p>

        <h2>Nadelen van Revolut Business</h2>
        <h3>1. Geen gratis standaardabonnement</h3>
        <p>Voor zzp&apos;ers met slechts enkele transacties per maand kunnen de vaste kosten relatief zwaar wegen.</p>
        <p>Vergelijk daarom de totale jaarprijs met andere zakelijke rekeningen.</p>
        <h3>2. Extra kosten buiten je pakket</h3>
        <p>De inbegrepen transacties en valutawissels zijn beperkt.</p>
        <p>Als je regelmatig grote bedragen wisselt of veel internationale betalingen doet, kunnen extra kosten ontstaan.</p>
        <h3>3. Geen fysieke bankkantoren</h3>
        <p>Revolut is gericht op digitaal bankieren.</p>
        <p>Als je graag naar een lokaal bankfiliaal gaat, is dat een nadeel.</p>
        <h3>4. Niet iedere ondernemer heeft internationale functies nodig</h3>
        <p>Wanneer je uitsluitend Nederlandse klanten hebt en weinig transacties uitvoert, gebruik je mogelijk maar een klein deel van de functies.</p>
        <h3>5. Mogelijke controles en tijdelijke beperkingen</h3>
        <p>Net als andere financiële instellingen moet Revolut voldoen aan regels voor klantonderzoek en transactiemonitoring.</p>
        <p>Dat kan in bepaalde gevallen leiden tot aanvullende documentatieverzoeken of tijdelijke beperkingen.</p>
        <p>Dit is geen uniek risico van Revolut, maar wel iets om rekening mee te houden wanneer je volledig afhankelijk bent van één betaalrekening.</p>

        <h2>Revolut Business rente: krijg je rente op je saldo?</h2>
        <p>Revolut biedt zakelijke spaarmogelijkheden met variabele rente.</p>
        <p>De gepubliceerde tarieven hangen af van het abonnement.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[400px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Pakket</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Gepubliceerde variabele spaarrente</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Basic</td>
                <td className="px-4 py-3 text-right">1,25% per jaar</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Grow</td>
                <td className="px-4 py-3 text-right">1,40% per jaar</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Scale</td>
                <td className="px-4 py-3 text-right">1,75% per jaar</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Enterprise</td>
                <td className="px-4 py-3 text-right">2,25% per jaar</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Deze percentages zijn momentopnames en kunnen veranderen.</p>
        <p>De spaarrente geldt voor het daarvoor bestemde spaarproduct, niet automatisch voor ieder saldo op je gewone betaalrekening.</p>
        <p>Controleer ook de voorwaarden en toepasselijke depositobescherming.</p>

        <h2>Is Revolut Business veilig?</h2>
        <p>Revolut Bank UAB is een in Litouwen gevestigde bank met activiteiten in Nederland.</p>
        <p>Voor in aanmerking komende bankdeposito&apos;s geldt bescherming via het Litouwse depositogarantiestelsel, doorgaans tot €100.000 per deposant per bank.</p>
        <p>Controleer onder welke juridische entiteit jouw rekening valt en welke bescherming voor het specifieke product geldt.</p>
        <p>Beleggingsproducten, zoals geldmarktfondsen, vallen niet onder dezelfde depositogarantie als gewone bankdeposito&apos;s.</p>

        <h2>Revolut Business of bunq voor zzp&apos;ers?</h2>
        <p>Beide aanbieders richten zich op digitaal bankieren, maar hun pakketten en functies verschillen.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[560px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Onderwerp</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Revolut Business</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">bunq Business</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Zakelijke rekening</td>
                <td className="px-4 py-3">Ja</td>
                <td className="px-4 py-3">Ja</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Digitale app</td>
                <td className="px-4 py-3">Ja</td>
                <td className="px-4 py-3">Ja</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Internationale betalingen</td>
                <td className="px-4 py-3">Sterke focus</td>
                <td className="px-4 py-3">Beschikbaar</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Meerdere valuta&apos;s</td>
                <td className="px-4 py-3">Ja</td>
                <td className="px-4 py-3">Afhankelijk van functies en pakket</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Boekhoudkoppelingen</td>
                <td className="px-4 py-3">Beschikbaar</td>
                <td className="px-4 py-3">Beschikbaar</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Fysieke bankkantoren</td>
                <td className="px-4 py-3">Nee</td>
                <td className="px-4 py-3">Nee</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Kosten</td>
                <td className="px-4 py-3">Vanaf €10 per maand</td>
                <td className="px-4 py-3">Afhankelijk van actueel pakket</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Voor internationaal werk kan Revolut interessant zijn.</p>
        <p>Voor ondernemers die vooral Nederlandse betalingen uitvoeren, is het verstandig ook bunq en traditionele zakelijke banken te vergelijken.</p>
        <p>Vergelijk de actuele kosten voordat je een keuze maakt.</p>

        <h2>Wanneer is Revolut Business geschikt voor een zzp&apos;er?</h2>
        <p>Revolut Business kan goed passen wanneer je:</p>
        <ul>
          <li>Regelmatig internationale betalingen ontvangt.</li>
          <li>In meerdere valuta&apos;s werkt.</li>
          <li>Volledig digitaal wilt bankieren.</li>
          <li>Virtuele kaarten gebruikt.</li>
          <li>Je rekening wilt koppelen aan boekhoudsoftware.</li>
          <li>Een zakelijke spaarmogelijkheid zoekt.</li>
        </ul>
        <p>Een andere bank kan aantrekkelijker zijn wanneer je weinig transacties hebt, fysieke dienstverlening wilt of een specifieke Nederlandse bankdienst nodig hebt.</p>

        <h2>Revolut Business combineren met FactuurBaas</h2>
        <p>
          Ook met een Revolut Business-rekening moet je correcte facturen versturen.
        </p>
        <p>
          Met{' '}
          <Link href="/create-invoice" className="text-warm-orange hover:underline">FactuurBaas</Link>{' '}
          kun je gratis een factuur maken en als PDF downloaden.
        </p>
        <p>Vermeld daarop je zakelijke IBAN en de juiste tenaamstelling.</p>
        <p>Je kunt FactuurBaas gebruiken om facturen op te stellen, ongeacht bij welke bank je een rekening hebt.</p>
        <p>FactuurBaas biedt momenteel geen rechtstreekse Revolut-bankkoppeling of automatische betaalstatussynchronisatie.</p>

        <h2>Veelgestelde vragen over Revolut Business</h2>
        <h3>Is Revolut geschikt voor zzp&apos;ers?</h3>
        <p>Ja, Revolut Business kan geschikt zijn voor Nederlandse zzp&apos;ers, vooral wanneer zij digitaal werken of internationale betalingen uitvoeren.</p>
        <h3>Wat kost Revolut Business?</h3>
        <p>De gepubliceerde maandprijzen zijn €10 voor Basic, €35 voor Grow en €125 voor Scale. Enterprise heeft een prijs op aanvraag. Extra kosten kunnen van toepassing zijn.</p>
        <h3>Is Revolut Business gratis?</h3>
        <p>Nee, het reguliere Basic-pakket is betaald. Tijdelijke acties of proefperiodes kunnen beschikbaar zijn.</p>
        <h3>Krijg je een Nederlandse IBAN bij Revolut Business?</h3>
        <p>Revolut biedt Nederlandse zakelijke klanten een Nederlandse IBAN.</p>
        <h3>Krijg je rente bij Revolut Business?</h3>
        <p>Revolut biedt een zakelijk spaarproduct met variabele rente. De hoogte hangt af van je abonnement en de actuele voorwaarden.</p>
        <h3>Heeft Revolut Business een boekhoudkoppeling?</h3>
        <p>Ja, Revolut ondersteunt diverse boekhoudintegraties, waaronder Exact Online, SnelStart en Yuki.</p>
        <h3>Wat zijn de grootste nadelen van Revolut Business?</h3>
        <p>De vaste abonnementskosten, mogelijke extra transactiekosten, het ontbreken van fysieke bankkantoren en het feit dat niet iedere ondernemer de internationale functies nodig heeft.</p>
        <h3>Kan ik Revolut Business gebruiken met FactuurBaas?</h3>
        <p>Ja. Je kunt je Revolut-IBAN op een factuur zetten die je met FactuurBaas maakt. Er is geen directe bankkoppeling tussen beide diensten.</p>

        <h2>Conclusie: is Revolut Business een goede keuze?</h2>
        <p>Revolut Business is vooral interessant voor zzp&apos;ers die internationaal werken en waarde hechten aan digitaal bankieren, meerdere valuta&apos;s en moderne betaalfuncties.</p>
        <p>Voor een ondernemer met weinig Nederlandse transacties is het verstandig om de vaste kosten en inbegrepen functies goed te vergelijken.</p>
        <p>Bekijk de actuele pakketten op de officiële website van Revolut voordat je een rekening opent.</p>
        <p>En welke bank je ook kiest: met FactuurBaas maak je gratis professionele facturen, zonder account.</p>
        <CtaButton href="/create-invoice" label="Maak gratis een factuur" />
      </>
    )
  },
  {
    slug: 'btw-te-laat-betaald',
    relatedSlugs: ['btw-factuur-zzp', 'factuurbeheer-overzicht', 'zakelijke-rekening-zzp', 'hoeveel-geld-apart-belasting-zzper'],
    metaTitle: 'Btw te laat betaald? Boete en wat je nu moet doen',
    title: 'Btw te laat betaald? Dit zijn de gevolgen',
    breadcrumbLabel: 'Btw te laat betaald',
    excerpt: 'Btw te laat betaald of aangifte vergeten? Lees wat de gevolgen zijn, wanneer je een boete krijgt en welke stappen je nu kunt nemen.',
    keywords: 'btw te laat betaald, btw te laat betalen, boete btw te laat betaald, btw aangifte te laat, btw niet betaald',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/btw%20te%20laat%20betaald.png',
      alt: 'Btw te laat betaald? Dit zijn de gevolgen, boetes en stappen die je nu kunt nemen.',
    },
    datePublished: '2026-02-07',
    dateModified: '2026-10-08',
    faq: [
      { question: 'Wat gebeurt er als ik één dag te laat btw betaal?', answer: 'Je betaling is officieel te laat. Maar als je binnen de coulancetermijn van zeven kalenderdagen betaalt en je vorige aangifte op tijd en volledig hebt betaald, krijg je normaal gesproken geen betaalverzuimboete.' },
      { question: 'Hoeveel dagen mag je te laat zijn met btw betalen?', answer: 'Er geldt een coulancetermijn van zeven kalenderdagen voor de beoordeling van een mogelijke boete. Dit verandert de officiële betaaldatum niet.' },
      { question: 'Hoeveel is de boete voor te laat btw betalen?', answer: 'De standaard betaalverzuimboete is 3% van het niet of te laat betaalde bedrag, met een minimum van €50 en een maximum van €6.709.' },
      { question: 'Wat is de boete voor te laat btw-aangifte doen?', answer: 'De standaard aangifteverzuimboete bedraagt €82 als je aangifte niet binnen de wettelijke termijn en de daaropvolgende coulancetermijn binnenkomt.' },
      { question: 'Wat als ik mijn btw niet kan betalen?', answer: 'Dien je aangifte op tijd in en onderzoek zo snel mogelijk of je een betalingsregeling of uitstel van betaling kunt aanvragen.' },
      { question: 'Kan ik btw later alsnog betalen?', answer: 'Ja. Betaal de openstaande btw zo snel mogelijk met het juiste betalingskenmerk. Afhankelijk van je situatie kun je wel een boete of aanvullende kosten krijgen.' },
      { question: 'Moet ik btw-aangifte doen als ik niets heb verdiend?', answer: 'Als je verplicht bent btw-aangifte te doen, moet je doorgaans ook aangifte doen wanneer je geen omzet hebt gehad. Er zijn uitzonderingen, bijvoorbeeld voor bepaalde ondernemers die zijn vrijgesteld van periodieke btw-aangifte.' },
    ],
    content: (
      <>
        <p>Ben je vergeten je btw te betalen of heb je de uiterste betaaldatum gemist? Dan kun je een boete krijgen van de Belastingdienst.</p>
        <p><strong>Het goede nieuws: als je binnen zeven kalenderdagen na de deadline betaalt, krijg je onder bepaalde voorwaarden geen betaalverzuimboete.</strong></p>
        <p>Maar let op: de officiële betaaldatum blijft gelden. De coulancetermijn is geen extra betalingstermijn.</p>
        <p>Hieronder lees je welke boetes gelden in 2026, wat je direct moet doen en wat er gebeurt als je de btw helemaal niet kunt betalen.</p>

        <h2>Btw te laat betaald: wat moet je nu doen?</h2>
        <p>Heb je de betaaldatum gemist? Volg dan deze stappen.</p>
        <ol>
          <li><strong>Controleer de uiterste betaaldatum.</strong> Kijk in Mijn Belastingdienst Zakelijk.</li>
          <li><strong>Betaal de openstaande btw zo snel mogelijk.</strong> Gebruik het juiste betalingskenmerk.</li>
          <li><strong>Controleer of je btw-aangifte is ingediend.</strong> Te laat aangifte doen kan een afzonderlijke boete opleveren.</li>
          <li><strong>Bewaar je betaalbewijs.</strong> Controleer of de betaling correct is verwerkt.</li>
          <li><strong>Kun je niet betalen?</strong> Onderzoek direct of je voor uitstel of een betalingsregeling in aanmerking komt.</li>
        </ol>
        <p>Wacht niet totdat je een naheffingsaanslag ontvangt als je de verschuldigde btw al kunt betalen.</p>

        <h2>Wanneer moet je btw betalen?</h2>
        <p>De meeste zzp&apos;ers doen ieder kwartaal btw-aangifte.</p>
        <p>Voor Nederlandse ondernemers gelden in 2026 de volgende uiterste betaaldata:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[400px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Btw-tijdvak</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Uiterste betaaldatum</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">1e kwartaal 2026</td>
                <td className="px-4 py-3">30 april 2026</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">2e kwartaal 2026</td>
                <td className="px-4 py-3">31 juli 2026</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">3e kwartaal 2026</td>
                <td className="px-4 py-3">31 oktober 2026</td>
              </tr>
              <tr>
                <td className="px-4 py-3">4e kwartaal 2026</td>
                <td className="px-4 py-3">31 januari 2027</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>De betaling moet uiterlijk op deze datum bij de Belastingdienst zijn ontvangen.</p>
        <p>Houd rekening met de verwerkingstijd van je bank.</p>
        <p>Voor ondernemers die per maand of jaar aangifte doen, gelden andere data. Ook voor bepaalde buitenlandse ondernemers kunnen afwijkende termijnen gelden.</p>

        <h2>Krijg je een boete als je btw te laat betaalt?</h2>
        <p>Dat hangt af van hoe laat je betaalt en of je de vorige btw-aangifte op tijd en volledig hebt betaald.</p>
        <p>De Belastingdienst gebruikt een coulancetermijn van zeven kalenderdagen.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[560px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Situatie</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Gevolg</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Op tijd en volledig betaald</td>
                <td className="px-4 py-3">Geen betaalverzuimboete</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Binnen 7 dagen te laat, vorige keer op tijd en volledig betaald</td>
                <td className="px-4 py-3">Geen betaalverzuimboete, wel verzuimmededeling</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Binnen 7 dagen te laat, vorige keer ook te laat of onvolledig betaald</td>
                <td className="px-4 py-3">Normaal gesproken 3% boete</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Later dan 7 dagen betaald</td>
                <td className="px-4 py-3">Normaal gesproken 3% boete</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Niet of onvoldoende betaald</td>
                <td className="px-4 py-3">Naheffingsaanslag en doorgaans 3% betaalverzuimboete</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>De standaard betaalverzuimboete bedraagt 3% van het niet of te laat betaalde bedrag, met een minimum van €50 en een maximum van €6.709.</p>
        <p>Bij bijzondere omstandigheden kunnen andere boeteregels gelden.</p>

        <h2>Hoeveel boete krijg je als je btw te laat betaalt?</h2>
        <p>Hieronder staan voorbeelden van de standaard betaalverzuimboete van 3%.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Te laat betaald bedrag</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Boete</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['€500', '€50'],
                ['€1.000', '€50'],
                ['€2.000', '€60'],
                ['€5.000', '€150'],
                ['€10.000', '€300'],
              ].map(([bedrag, boete]) => (
                <tr key={bedrag} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-3">{bedrag}</td>
                  <td className="px-4 py-3 text-right">{boete}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>Bij €500 en €1.000 geldt het minimumbedrag van €50.</p>
        <p>Deze voorbeelden gaan ervan uit dat een betaalverzuimboete wordt opgelegd. Als je aan de voorwaarden voor coulance voldoet, kan de boete achterwege blijven.</p>

        <h2>Wat als je btw-aangifte ook te laat is?</h2>
        <p>Te laat aangifte doen en te laat betalen zijn twee verschillende overtredingen.</p>
        <h3>Boete voor te laat btw-aangifte doen</h3>
        <p>De standaardboete voor het niet of te laat indienen van een btw-aangifte bedraagt €82.</p>
        <p>Voor het indienen van de aangifte geldt een coulancetermijn van zeven kalenderdagen. Komt de aangifte binnen deze periode binnen, dan krijg je geen aangifteverzuimboete.</p>
        <h3>Boete voor te laat btw betalen</h3>
        <p>Bij een betalingsverzuim geldt doorgaans de boete van 3%, met een minimum van €50 en een maximum van €6.709.</p>
        <p>Je kunt dus zowel een aangifteverzuimboete als een betaalverzuimboete krijgen.</p>
        <p>Ook als je geen btw hoeft af te dragen, moet je aangifte doen wanneer je daartoe verplicht bent.</p>

        <h2>Wat gebeurt er als je helemaal geen btw betaalt?</h2>
        <p>Als je de verschuldigde btw niet betaalt, kan de Belastingdienst een naheffingsaanslag opleggen.</p>
        <p>Daarop staat het bedrag dat je nog moet betalen, eventueel aangevuld met een boete.</p>
        <p>Betaal je ook de naheffingsaanslag niet op tijd, dan kunnen verdere invorderingsmaatregelen en extra kosten volgen.</p>
        <p>Denk aan een aanmaning, invorderingsrente en uiteindelijk een dwangbevel.</p>
        <p>Het is daarom verstandig om zo snel mogelijk actie te ondernemen.</p>

        <h2>Wat als je de btw niet kunt betalen?</h2>
        <p>Heb je onvoldoende geld om de btw te betalen?</p>
        <p>Doe dan wel op tijd aangifte, ook als je de betaling niet direct kunt voldoen.</p>
        <p>Onderzoek vervolgens of je uitstel van betaling of een betalingsregeling kunt aanvragen.</p>
        <p>Voor ondernemers heeft de Belastingdienst een afzonderlijke procedure voor betalingsproblemen.</p>
        <p>Let op: een verzoek om uitstel betekent niet automatisch dat je uitstel hebt gekregen.</p>
        <p>Bij een bv of andere daarvoor kwalificerende rechtspersoon kan bovendien een afzonderlijke verplichting bestaan om betalingsonmacht tijdig te melden.</p>

        <h2>Btw te weinig betaald: moet je een suppletie indienen?</h2>
        <p>Heb je wel op tijd betaald, maar ontdek je later dat je btw-aangifte niet klopt?</p>
        <p>Dan gaat het om een correctie van je aangifte.</p>
        <h3>Correctie van maximaal €1.000</h3>
        <p>Een btw-correctie van maximaal €1.000 kun je doorgaans verwerken in je eerstvolgende reguliere btw-aangifte.</p>
        <h3>Correctie van meer dan €1.000</h3>
        <p>Bij een correctie van meer dan €1.000 moet je een suppletie btw indienen.</p>
        <p>Sinds 1 januari 2025 geldt dat je een ontdekte onjuistheid binnen acht weken moet corrigeren wanneer de suppletieplicht van toepassing is.</p>
        <p>Wacht niet totdat de Belastingdienst de fout zelf ontdekt.</p>
        <p>Bij correcties kunnen andere boete- en renteregels gelden dan bij het simpelweg te laat betalen van een correct aangegeven bedrag.</p>

        <h2>Hoe voorkom je dat je btw te laat betaalt?</h2>
        <h3>Zet btw apart</h3>
        <p>Houd de btw die je van klanten ontvangt afzonderlijk bij.</p>
        <p>Houd ook rekening met btw die je op zakelijke kosten mag aftrekken.</p>
        <h3>Plan de deadlines</h3>
        <p>Zet de uiterste aangifte- en betaaldata in je agenda.</p>
        <p>Plan je betaling enkele dagen vóór de deadline.</p>
        <h3>Controleer het betalingskenmerk</h3>
        <p>Gebruik het betalingskenmerk dat bij de betreffende aangifte hoort.</p>
        <p>Een onjuist betalingskenmerk kan problemen opleveren bij het verwerken van je betaling.</p>
        <h3>Houd je facturen en bonnetjes bij</h3>
        <p>Bewaar je uitgaande facturen en zakelijke inkoopfacturen overzichtelijk.</p>
        <p>Met FactuurBaas kun je gratis facturen maken en als PDF downloaden. Je btw-aangifte en betaling aan de Belastingdienst regel je afzonderlijk.</p>
        <h3>Gebruik de Btw-Alert app</h3>
        <p>De Belastingdienst biedt de Btw-Alert app waarmee je herinneringen voor aangifte en betaling kunt instellen.</p>

        <h2>Veelgestelde vragen</h2>
        <h3>Wat gebeurt er als ik één dag te laat btw betaal?</h3>
        <p>Je betaling is officieel te laat. Maar als je binnen de coulancetermijn van zeven kalenderdagen betaalt en je vorige aangifte op tijd en volledig hebt betaald, krijg je normaal gesproken geen betaalverzuimboete.</p>
        <h3>Hoeveel dagen mag je te laat zijn met btw betalen?</h3>
        <p>Er geldt een coulancetermijn van zeven kalenderdagen voor de beoordeling van een mogelijke boete. Dit verandert de officiële betaaldatum niet.</p>
        <h3>Hoeveel is de boete voor te laat btw betalen?</h3>
        <p>De standaard betaalverzuimboete is 3% van het niet of te laat betaalde bedrag, met een minimum van €50 en een maximum van €6.709.</p>
        <h3>Wat is de boete voor te laat btw-aangifte doen?</h3>
        <p>De standaard aangifteverzuimboete bedraagt €82 als je aangifte niet binnen de wettelijke termijn en de daaropvolgende coulancetermijn binnenkomt.</p>
        <h3>Wat als ik mijn btw niet kan betalen?</h3>
        <p>Dien je aangifte op tijd in en onderzoek zo snel mogelijk of je een betalingsregeling of uitstel van betaling kunt aanvragen.</p>
        <h3>Kan ik btw later alsnog betalen?</h3>
        <p>Ja. Betaal de openstaande btw zo snel mogelijk met het juiste betalingskenmerk. Afhankelijk van je situatie kun je wel een boete of aanvullende kosten krijgen.</p>
        <h3>Moet ik btw-aangifte doen als ik niets heb verdiend?</h3>
        <p>Als je verplicht bent btw-aangifte te doen, moet je doorgaans ook aangifte doen wanneer je geen omzet hebt gehad. Er zijn uitzonderingen, bijvoorbeeld voor bepaalde ondernemers die zijn vrijgesteld van periodieke btw-aangifte.</p>

        <h2>Conclusie: btw te laat betaald?</h2>
        <p>Heb je de btw-deadline gemist, controleer dan direct je aangifte en betaal het openstaande bedrag zo snel mogelijk.</p>
        <p>Binnen zeven kalenderdagen kan een betaalverzuimboete onder voorwaarden achterwege blijven. Daarna geldt doorgaans een boete van 3%, met een minimum van €50.</p>
        <p>Kun je niet betalen, wacht dan niet af maar onderzoek je mogelijkheden bij de Belastingdienst.</p>
        <p>Een overzichtelijke factuuradministratie helpt om toekomstige aangiften voor te bereiden.</p>
        <p>Met FactuurBaas kun je gratis professionele facturen maken en als PDF downloaden, zonder account.</p>
        <CtaButton href="/create-invoice" label="Maak gratis een factuur" />
      </>
    ),
  },
  {
    slug: 'hoeveel-geld-apart-belasting-zzper',
    relatedSlugs: ['btw-factuur-zzp', 'btw-te-laat-betaald', 'zakelijke-rekening-zzp', 'factureren-startende-zzper'],
    metaTitle: 'Hoeveel belasting apart zetten als zzp\'er? (2026)',
    title: 'Hoeveel belasting moet je apart zetten als zzp\'er?',
    breadcrumbLabel: 'Hoeveel belasting apart zetten',
    excerpt: 'Hoeveel geld moet je als zzp\'er apart zetten voor belasting? Bekijk voorbeelden voor btw, inkomstenbelasting en Zvw en bereken je maandelijkse reservering.',
    keywords: 'hoeveel belasting apart zetten zzp, hoeveel reserveren voor inkomstenbelasting zzp, hoeveel per maand apart zetten zzp, belasting reserveren zzp',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Hoeveel%20belasting%20moet%20een%20zzper%20betalen.png',
      alt: 'Hoeveel belasting moet je apart zetten als zzp\'er? Uitleg over btw, inkomstenbelasting en Zvw.',
    },
    datePublished: '2026-02-06',
    dateModified: '2026-10-08',
    faq: [
      { question: 'Hoeveel procent belasting moet ik apart zetten als zzp\'er?', answer: 'Een voorlopige reservering van 30% tot 40% van je verwachte winst voor inkomstenbelasting en Zvw kan een bruikbaar startpunt zijn. Houd de btw afzonderlijk bij en bereken je persoonlijke belastingpositie.' },
      { question: 'Hoeveel moet ik per maand apart zetten als zzp\'er?', answer: 'Dat hangt af van je winst. Bij €3.000 verwachte maandwinst betekent een reservering van 35% bijvoorbeeld €1.050 per maand, exclusief je btw-reservering.' },
      { question: 'Moet ik 21% van iedere betaling apart zetten voor btw?', answer: 'Nee. Bij een bedrag inclusief 21% btw is de btw-component 21/121 van het totaal. Bovendien kun je mogelijk voorbelasting aftrekken.' },
      { question: 'Betaal je als startende zzp\'er de eerste drie jaar geen belasting?', answer: 'Nee. Starters kunnen onder voorwaarden bepaalde aftrekposten toepassen, maar er bestaat geen algemene belastingvrijstelling voor de eerste drie jaar.' },
      { question: 'Betaal ik geen inkomstenbelasting tot €30.582 winst?', answer: 'Dat kun je niet algemeen stellen. De verschuldigde belasting hangt af van je inkomen, aftrekposten, heffingskortingen en persoonlijke situatie.' },
      { question: 'Moet ik belasting reserveren als ik gebruikmaak van de KOR?', answer: 'Bij de kleineondernemersregeling (KOR) breng je in beginsel geen btw in rekening op prestaties die onder de regeling vallen. Je kunt dan doorgaans ook geen btw op zakelijke kosten aftrekken. Je kunt nog steeds inkomstenbelasting en Zvw verschuldigd zijn.' },
      { question: 'Hoeveel geld mag ik op mijn zakelijke rekening hebben?', answer: 'Er is geen algemene maximale saldohoogte voor een eenmanszaak. Je banksaldo is niet hetzelfde als je belastbare winst.' },
    ],
    content: (
      <>
        <p>Als zzp&apos;er ontvang je betalingen van klanten, maar niet al dat geld is vrij te besteden. Je moet rekening houden met btw, inkomstenbelasting en de inkomensafhankelijke bijdrage Zorgverzekeringswet (Zvw).</p>
        <p><strong>Een praktische start is om de ontvangen btw apart te houden en daarnaast voorlopig 30% tot 40% van je winst te reserveren voor inkomstenbelasting en Zvw.</strong></p>
        <p>Dat is een voorzichtige vuistregel, geen vast belastingpercentage. Afhankelijk van je inkomen, aftrekposten en persoonlijke situatie kun je uiteindelijk minder of juist meer nodig hebben.</p>
        <p>Hieronder lees je hoe je de bedragen berekent en hoeveel je iedere maand kunt reserveren.</p>

        <h2>Hoeveel geld moet je als zzp&apos;er apart zetten?</h2>
        <p>Maak onderscheid tussen twee belastingpotjes.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Belasting</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Praktische reservering</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw</td>
                <td className="px-4 py-3">Houd de btw die je klanten in rekening brengt apart, rekening houdend met aftrekbare voorbelasting</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Inkomstenbelasting en Zvw</td>
                <td className="px-4 py-3">Begin bijvoorbeeld met 30–40% van je verwachte winst en pas dit aan op basis van een persoonlijke berekening</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p><strong>Belangrijk:</strong> bereken je inkomstenbelastingreservering over je verwachte winst, niet over je omzet inclusief btw.</p>
        <p>Je winst is in grote lijnen je omzet exclusief btw minus je zakelijke kosten, met eventuele fiscale correcties.</p>

        <h2>1. Hoeveel btw moet je apart zetten?</h2>
        <p>Stel dat je een factuur verstuurt van €1.000 exclusief 21% btw.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Onderdeel</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Bedrag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Omzet exclusief btw</td>
                <td className="px-4 py-3 text-right">€1.000</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw 21%</td>
                <td className="px-4 py-3 text-right">€210</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal factuur</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€1.210</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Wanneer je klant €1.210 betaalt, is €210 daarvan btw.</p>
        <p>Het is verstandig dat bedrag apart te houden totdat je weet hoeveel btw je daadwerkelijk moet afdragen.</p>
        <h3>Wat als je zakelijke kosten hebt?</h3>
        <p>Stel dat je in hetzelfde kwartaal €105 aan aftrekbare btw hebt betaald over zakelijke aankopen.</p>
        <p>Dan ziet de vereenvoudigde berekening er zo uit:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Onderdeel</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Bedrag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw op verkopen</td>
                <td className="px-4 py-3 text-right">€210</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Aftrekbare btw op inkopen</td>
                <td className="px-4 py-3 text-right">− €105</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Te betalen btw</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€105</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Je hoeft in dit voorbeeld uiteindelijk €105 af te dragen.</p>
        <p>Let op: de btw-aangifte wordt niet altijd gebaseerd op het moment waarop je klant betaalt. Bij het gebruikelijke factuurstelsel telt doorgaans het factuurtijdvak.</p>
        <h3>Hoe bereken je btw uit een bedrag inclusief btw?</h3>
        <p>Bij 21% btw gebruik je:</p>
        <p><strong>Btw = bedrag inclusief btw × 21 / 121</strong></p>
        <p>Bijvoorbeeld:</p>
        <p>€1.210 × 21 / 121 = €210 btw.</p>
        <p>Bij 9% btw gebruik je 9 / 109.</p>

        <h2>2. Hoeveel reserveren voor inkomstenbelasting als zzp&apos;er?</h2>
        <p>Naast btw betaal je als ondernemer mogelijk inkomstenbelasting over je winst.</p>
        <p>De hoogte hangt onder andere af van:</p>
        <ul>
          <li>Je jaarlijkse winst.</li>
          <li>Eventuele andere inkomsten.</li>
          <li>Je recht op ondernemersaftrek.</li>
          <li>De mkb-winstvrijstelling.</li>
          <li>Heffingskortingen.</li>
          <li>Je leeftijd en persoonlijke omstandigheden.</li>
        </ul>
        <p>Daarom bestaat er geen percentage dat voor iedere zzp&apos;er precies klopt.</p>
        <h3>Praktische vuistregel</h3>
        <p>Als voorlopig uitgangspunt kun je 30% tot 40% van je verwachte winst apart zetten voor inkomstenbelasting en Zvw samen.</p>
        <p>Bij een hogere winst of andere inkomsten kan een hogere reservering nodig zijn.</p>
        <p>Bij een lagere winst en toepasselijke aftrekposten kan je uiteindelijke belasting lager uitvallen.</p>
        <p>Gebruik een persoonlijke belastingberekening om de reservering te verfijnen.</p>

        <h2>3. Hoeveel belasting per maand apart zetten als zzp&apos;er?</h2>
        <p>Stel dat je gemiddeld €4.000 per maand omzet hebt, exclusief btw.</p>
        <p>Je zakelijke kosten bedragen €1.000 per maand, exclusief btw.</p>
        <p>Dan ziet een eenvoudige berekening er zo uit:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Onderdeel</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Per maand</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Omzet excl. btw</td>
                <td className="px-4 py-3 text-right">€4.000</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Zakelijke kosten excl. btw</td>
                <td className="px-4 py-3 text-right">− €1.000</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Verwachte winst</td>
                <td className="px-4 py-3 text-right">€3.000</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Reservering 30%</td>
                <td className="px-4 py-3 text-right">€900</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Reservering 35%</td>
                <td className="px-4 py-3 text-right">€1.050</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Reservering 40%</td>
                <td className="px-4 py-3 text-right">€1.200</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Bij een reservering van 35% zet je dus €1.050 per maand apart voor inkomstenbelasting en Zvw.</p>
        <p>De btw houd je afzonderlijk bij.</p>
        <p>Dit is een budgetvoorbeeld, geen berekening van je werkelijke belastingaanslag.</p>

        <h2>4. Hoeveel moet je reserveren bij verschillende winsten?</h2>
        <p>Onderstaande bedragen zijn gebaseerd op een voorlopige reservering van 35% van de winst.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Maandelijkse winst</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Reservering per maand</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['€1.500', '€525'],
                ['€2.000', '€700'],
                ['€3.000', '€1.050'],
                ['€4.000', '€1.400'],
                ['€5.000', '€1.750'],
                ['€6.000', '€2.100'],
              ].map(([winst, reservering]) => (
                <tr key={winst} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-3">{winst}</td>
                  <td className="px-4 py-3 text-right">{reservering}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>De percentages zijn bedoeld voor het plannen van je geld.</p>
        <p>Ze zeggen niet hoeveel inkomstenbelasting je daadwerkelijk verschuldigd bent.</p>

        <h2>5. Welke aftrekposten gelden voor zzp&apos;ers in 2026?</h2>
        <p>De inkomstenbelasting wordt niet uitsluitend bepaald door je winst.</p>
        <p>Voor ondernemers kunnen fiscale aftrekposten gelden.</p>
        <h3>Zelfstandigenaftrek 2026</h3>
        <p>De zelfstandigenaftrek bedraagt in 2026 €1.200.</p>
        <p>Je moet onder andere ondernemer zijn voor de inkomstenbelasting en voldoen aan het urencriterium.</p>
        <h3>Startersaftrek 2026</h3>
        <p>De startersaftrek bedraagt in 2026 €2.123.</p>
        <p>Deze is aanvullend op de zelfstandigenaftrek en geldt alleen wanneer je aan de voorwaarden voldoet.</p>
        <p>Je kunt de startersaftrek maximaal drie keer toepassen binnen de relevante periode van vijf jaar.</p>
        <p>Je hebt er dus niet automatisch gedurende je eerste drie ondernemingsjaren recht op.</p>
        <h3>Mkb-winstvrijstelling 2026</h3>
        <p>De mkb-winstvrijstelling bedraagt in 2026 12,7% van de winst na ondernemersaftrek.</p>
        <p>Hiervoor hoef je niet aan het urencriterium te voldoen, maar je moet wel ondernemer zijn voor de inkomstenbelasting.</p>
        <h3>Heffingskortingen</h3>
        <p>De algemene heffingskorting en arbeidskorting kunnen je verschuldigde inkomstenbelasting verlagen.</p>
        <p>De hoogte is afhankelijk van je persoonlijke situatie en inkomen.</p>
        <p><strong>Er bestaat geen algemene regel dat iedere zzp&apos;er tot €30.582 winst in 2026 geen inkomstenbelasting betaalt.</strong></p>

        <h2>6. Vergeet de Zvw-bijdrage niet</h2>
        <p>Naast inkomstenbelasting kun je als zzp&apos;er een inkomensafhankelijke bijdrage Zorgverzekeringswet verschuldigd zijn.</p>
        <p>Deze bijdrage staat los van je gewone zorgverzekeringspremie.</p>
        <p>De berekening is afhankelijk van je bijdrage-inkomen en het toepasselijke maximum.</p>
        <p>Daarom is het verstandig om de Zvw mee te nemen wanneer je berekent hoeveel geld je apart moet zetten.</p>
        <p>Ontvang je ook loon uit dienstverband? Dan kan dat invloed hebben op de uiteindelijke berekening.</p>

        <h2>7. Hoeveel geld mag je op je zakelijke rekening hebben?</h2>
        <p>Er bestaat geen algemene maximale hoeveelheid geld die je als eenmanszaak op je zakelijke rekening mag hebben.</p>
        <p>Je mag dus geld reserveren voor belastingen, toekomstige investeringen en onverwachte kosten.</p>
        <p><strong>Het saldo van je zakelijke rekening is niet hetzelfde als je belastbare winst.</strong></p>
        <p>Je betaalt als ondernemer inkomstenbelasting op basis van je fiscale resultaat en persoonlijke situatie, niet simpelweg over het bedrag dat op je zakelijke rekening staat.</p>
        <p>Voor ondernemersvermogen en privévermogen kunnen wel verschillende fiscale regels gelden.</p>
        <p>Het is daarom verstandig om zakelijke en privétransacties duidelijk te administreren.</p>

        <h2>8. Zo maak je een belastingpotje als zzp&apos;er</h2>
        <p>Een praktische aanpak bestaat uit vier stappen.</p>
        <h3>Stap 1: Maak twee reserveringen</h3>
        <p>Houd btw gescheiden van je reservering voor inkomstenbelasting en Zvw.</p>
        <h3>Stap 2: Reserveer zodra geld binnenkomt</h3>
        <p>Wacht niet tot het einde van het kwartaal of jaar.</p>
        <p>Maak bijvoorbeeld na iedere klantbetaling direct geld over naar je belastingpotjes.</p>
        <h3>Stap 3: Bereken ieder kwartaal opnieuw</h3>
        <p>Controleer of je werkelijke winst overeenkomt met je verwachting.</p>
        <p>Stijgt je winst? Dan moet je mogelijk meer reserveren.</p>
        <h3>Stap 4: Gebruik je voorlopige aanslag</h3>
        <p>Met een voorlopige aanslag inkomstenbelasting kun je gedurende het jaar alvast betalen.</p>
        <p>Dat kan helpen om een grote betaling achteraf te voorkomen.</p>
        <p>Een voorlopige aanslag is wel gebaseerd op een schatting. Controleer daarom of deze nog aansluit op je actuele inkomen.</p>

        <h2>9. Veelgemaakte fouten bij belasting reserveren</h2>
        <p><strong>Btw en winst door elkaar halen.</strong> De btw op je facturen is niet automatisch omzet die je vrij kunt besteden.</p>
        <p><strong>Reserveren over omzet in plaats van winst.</strong> Voor inkomstenbelasting is je fiscale winst een belangrijk uitgangspunt.</p>
        <p><strong>Aannemen dat starters geen belasting betalen.</strong> Ondernemersaftrek en heffingskortingen zijn afhankelijk van voorwaarden.</p>
        <p><strong>De Zvw-bijdrage vergeten.</strong> Deze kan bovenop je inkomstenbelasting komen.</p>
        <p><strong>Het hele banksaldo als beschikbaar geld zien.</strong> Een deel kan nodig zijn voor btw, belastingen en toekomstige kosten.</p>
        <p><strong>Nooit je reservering aanpassen.</strong> Controleer je schatting regelmatig.</p>

        <h2>Veelgestelde vragen</h2>
        <h3>Hoeveel procent belasting moet ik apart zetten als zzp&apos;er?</h3>
        <p>Een voorlopige reservering van 30% tot 40% van je verwachte winst voor inkomstenbelasting en Zvw kan een bruikbaar startpunt zijn. Houd de btw afzonderlijk bij en bereken je persoonlijke belastingpositie.</p>
        <h3>Hoeveel moet ik per maand apart zetten als zzp&apos;er?</h3>
        <p>Dat hangt af van je winst. Bij €3.000 verwachte maandwinst betekent een reservering van 35% bijvoorbeeld €1.050 per maand, exclusief je btw-reservering.</p>
        <h3>Moet ik 21% van iedere betaling apart zetten voor btw?</h3>
        <p>Nee. Bij een bedrag inclusief 21% btw is de btw-component 21/121 van het totaal. Bovendien kun je mogelijk voorbelasting aftrekken.</p>
        <h3>Betaal je als startende zzp&apos;er de eerste drie jaar geen belasting?</h3>
        <p>Nee. Starters kunnen onder voorwaarden bepaalde aftrekposten toepassen, maar er bestaat geen algemene belastingvrijstelling voor de eerste drie jaar.</p>
        <h3>Betaal ik geen inkomstenbelasting tot €30.582 winst?</h3>
        <p>Dat kun je niet algemeen stellen. De verschuldigde belasting hangt af van je inkomen, aftrekposten, heffingskortingen en persoonlijke situatie.</p>
        <h3>Moet ik belasting reserveren als ik gebruikmaak van de KOR?</h3>
        <p>Bij de kleineondernemersregeling (KOR) breng je in beginsel geen btw in rekening op prestaties die onder de regeling vallen. Je kunt dan doorgaans ook geen btw op zakelijke kosten aftrekken. Je kunt nog steeds inkomstenbelasting en Zvw verschuldigd zijn.</p>
        <h3>Hoeveel geld mag ik op mijn zakelijke rekening hebben?</h3>
        <p>Er is geen algemene maximale saldohoogte voor een eenmanszaak. Je banksaldo is niet hetzelfde als je belastbare winst.</p>

        <h2>Conclusie: hoeveel belasting apart zetten als zzp&apos;er?</h2>
        <p>Wil je voorkomen dat je onverwacht geld tekortkomt bij je belastingaangifte?</p>
        <p>Houd dan de btw afzonderlijk bij en reserveer daarnaast voorlopig een deel van je winst voor inkomstenbelasting en Zvw.</p>
        <p>Een startpunt van 30% tot 40% van de verwachte winst kan helpen, maar een persoonlijke berekening geeft meer zekerheid.</p>
        <p>Met FactuurBaas kun je gratis facturen maken en als PDF downloaden, zodat je je gefactureerde omzet overzichtelijk kunt vastleggen in je administratie.</p>
        <CtaButton href="/create-invoice" label="Maak gratis een factuur" />
      </>
    ),
  },
  {
    slug: 'boetes-fouten-facturen',
    relatedSlugs: ['factuur-fouten-voorkomen', 'factuur-maken-zzp', 'factureren-zonder-account', 'btw-factuur-zzp'],
    metaTitle: 'Foutieve factuur: gevolgen, boetes en hoe je fouten corrigeert',
    title: 'Fouten op facturen: gevolgen, boetes en hoe je ze voorkomt',
    excerpt:
      'Een foutieve factuur kan leiden tot correcties, problemen met btw of een boete. Bekijk de meest gemaakte fouten, gevolgen en hoe je een factuur corrigeert.',
    keywords: 'foutieve factuur, gevolgen foute facturen, wat zijn de gevolgen van foute facturen, wat staat er meestal fout op facturen, boete fout factuur, fouten in btw-aangifte, fouten op facturen',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/boete%20niet%20betalen%20van%20btw.png',
      alt: 'Fouten op facturen: gevolgen, boetes en hoe je ze voorkomt.',
    },
    datePublished: '2026-02-06',
    dateModified: '2026-08-28',
    faq: [
      { question: 'Wat zijn de gevolgen van een foutieve factuur?', answer: 'Een foutieve factuur moet meestal worden gecorrigeerd. Je klant kan de factuur terugsturen of de btw-aftrek aanpassen. Als de fout doorwerkt in je btw-aangifte, kan een suppletieaangifte nodig zijn. In sommige situaties kan de Belastingdienst een boete opleggen.' },
      { question: 'Wat staat er meestal fout op facturen?', answer: 'Veelvoorkomende fouten zijn een verkeerd btw-tarief of btw-bedrag, een ontbrekend of dubbel factuurnummer, een verkeerde factuurdatum, onjuiste klantgegevens of een verkeerd totaalbedrag.' },
      { question: 'Kan ik een boete voorkomen door mijn fout te corrigeren?', answer: 'Vaak wel. Corrigeer de factuur richting je klant en los de fout op in je administratie. Bij een fout in je btw-aangifte kun je in veel gevallen een suppletie indienen. Hoe sneller je handelt, hoe kleiner het risico op vervelende gevolgen.' },
      { question: 'Wat moet er verplicht op een factuur staan?', answer: 'Verplicht zijn onder meer: jouw bedrijfsgegevens, KVK- en btw-nummer, klantgegevens, uniek factuurnummer, factuurdatum, omschrijving, bedragen excl. en incl. btw, en het juiste btw-tarief.' },
      { question: 'Wat als de fout al in mijn btw-aangifte staat?', answer: 'Dan moet je de btw-aangifte corrigeren, bijvoorbeeld via een suppletieaangifte. Een fout op de factuur zelf lost dat niet automatisch op — beide kunnen apart gecorrigeerd moeten worden.' },
    ],
    content: (
      <>
        <p>
          Een fout op een factuur kan gevolgen hebben voor jou én je klant. Denk aan een verkeerde
          btw-berekening, ontbrekende gegevens, een fout factuurnummer of een onjuiste factuurdatum.
          In sommige situaties kan een fout leiden tot correcties, problemen met de btw-aftrek of een
          boete.
        </p>
        <p>
          In dit artikel lees je wat de gevolgen zijn van een <strong>foutieve factuur</strong>, welke
          fouten het vaakst voorkomen, wanneer een boete mogelijk is en hoe je een fout corrigeert.
        </p>

        <h2>Wat zijn de gevolgen van een foutieve factuur?</h2>
        <p>Een fout op een factuur is zelden alleen een administratief detail. Mogelijke gevolgen:</p>
        <ul>
          <li>
            <strong>Correctie nodig:</strong> je moet de factuur aanpassen of een nieuwe factuur of
            creditnota sturen.
          </li>
          <li>
            <strong>Klant stuurt factuur terug:</strong> bij een verkeerd bedrag of ontbrekende
            gegevens accepteert je klant de factuur soms niet.
          </li>
          <li>
            <strong>Problemen met btw-aftrek:</strong> je klant kan de factuur niet (volledig) verwerken
            in de administratie als btw of gegevens niet kloppen.
          </li>
          <li>
            <strong>Administratie corrigeren:</strong> je eigen boekhouding en btw-overzicht moeten
            kloppen met wat je hebt gefactureerd.
          </li>
          <li>
            <strong>Gevolgen voor btw-aangifte:</strong> een fout op de factuur kan doorwerken in je
            ingediende btw-aangifte.
          </li>
          <li>
            <strong>Mogelijke boete:</strong> in sommige situaties — vooral bij herhaalde of ernstige
            fouten — kan de Belastingdienst een boete opleggen.
          </li>
        </ul>
        <p>
          Voorkomen is eenvoudiger dan corrigeren. Zie{' '}
          <Link href="/blogs/factuur-maken-zzp" className="text-warm-orange hover:underline">
            wat er op een factuur moet staan
          </Link>{' '}
          en maak je factuur met{' '}
          <Link href="/create-invoice" className="text-warm-orange hover:underline">
            FactuurBaas
          </Link>{' '}
          om verplichte velden niet te vergeten.
        </p>

        <h2>Wat staat er meestal fout op facturen?</h2>
        <p>Deze fouten komen het vaakst voor — en zijn vaak eenvoudig te voorkomen:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[480px] text-sm text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Veelgemaakte fout
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Mogelijk gevolg
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Verkeerd btw-tarief', 'Btw moet worden gecorrigeerd'],
                ['Verkeerd btw-bedrag', 'Factuur corrigeren'],
                ['Ontbrekend factuurnummer', 'Administratieve fout'],
                ['Verkeerde factuurdatum', 'Correctie nodig'],
                ['Onjuiste klantgegevens', 'Factuur opnieuw opstellen'],
                ['Verkeerd totaalbedrag', 'Klant kan factuur weigeren'],
                ['Ontbrekend btw-nummer', 'Factuur voldoet mogelijk niet aan eisen'],
              ].map(([fout, gevolg]) => (
                <tr key={fout} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-3 font-medium text-deep-blue">{fout}</td>
                  <td className="px-4 py-3">{gevolg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Wil je weten hoe je deze fouten voorkomt? Lees{' '}
          <Link href="/blogs/factuur-fouten-voorkomen" className="text-warm-orange hover:underline">
            7 veelgemaakte fouten op facturen
          </Link>
          . Voor btw-berekeningen kun je de{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            BTW calculator
          </Link>{' '}
          gebruiken.
        </p>

        <h2>Wanneer kan een fout op een factuur leiden tot een boete?</h2>
        <p>
          Niet elke factuurfout leidt automatisch tot een boete. De Belastingdienst kijkt onder meer
          naar de ernst van de fout, of deze bewust of herhaaldelijk voorkomt, en of je de fout
          zelf corrigeert.
        </p>
        <p>Boetes of sancties kunnen spelen bij onder andere:</p>
        <ul>
          <li>
            <strong>Onjuiste of onvolledige factuur:</strong> verkeerde btw-vermelding, ontbrekende
            gegevens of een fout factuurnummer.
          </li>
          <li>
            <strong>Factuur niet of niet tijdig uitgereikt</strong> wanneer dat wel verplicht is.
          </li>
          <li>
            <strong>Fouten die doorwerken in je btw-aangifte</strong>, vooral als je niet tijdig
            corrigeert.
          </li>
          <li>
            <strong>Te late aangifte of betaling</strong> — los van de factuur zelf, maar wel
            relevant voor je administratie.
          </li>
        </ul>
        <p>
          De exacte hoogte van een boete hangt af van je situatie. Raadpleeg altijd de actuele regels
          op{' '}
          <a
            href="https://www.belastingdienst.nl"
            className="text-warm-orange hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Belastingdienst.nl
          </a>{' '}
          of vraag je boekhouder om advies.
        </p>

        <h3>De vergrijpboete: bij opzet of grove schuld</h3>
        <p>
          Als je opzettelijk een onjuiste of onvolledige aangifte doet, of als er sprake is van grove
          schuld, kan de Belastingdienst een <strong>vergrijpboete</strong> opleggen. Deze is doorgaans
          hoger dan een standaard verzuimboete. Je ontvangt eerst een schriftelijke mededeling en
          kunt bezwaar maken.
        </p>

        <h3>Verzuimboetes: te laat aangifte of betaling</h3>
        <p>
          Naast factuurfouten zijn er aparte verzuimboetes voor het niet of niet tijdig voldoen aan
          aangifte- of betaalverplichtingen — bijvoorbeeld een te late btw-aangifte. Meer hierover:{' '}
          <Link href="/blogs/btw-te-laat-betaald" className="text-warm-orange hover:underline">
            btw te laat betaald
          </Link>
          .
        </p>

        <CtaButton />

        <h2>Wat als de fout al in je btw-aangifte staat?</h2>
        <p>
          Een fout op je factuur en een fout in je btw-aangifte zijn niet hetzelfde — maar ze hangen
          vaak samen.
        </p>
        <ul>
          <li>
            <strong>Fout op de factuur:</strong> stuur een gecorrigeerde factuur of creditnota naar
            je klant.
          </li>
          <li>
            <strong>Fout in de btw-aangifte:</strong> corrigeer via een suppletieaangifte of in een
            volgende aangifte, afhankelijk van het bedrag en de situatie.
          </li>
        </ul>
        <p>
          Meer over btw op facturen:{' '}
          <Link href="/blogs/btw-factuur-zzp" className="text-warm-orange hover:underline">
            btw op je factuur
          </Link>
          .
        </p>

        <h2>Fout ontdekt? Corrigeer tijdig</h2>
        <p>Heb je een fout ontdekt op een factuur of in je administratie? Handel dan snel:</p>
        <ul>
          <li>
            <strong>Factuur aan klant corrigeren:</strong> stuur een gecorrigeerde factuur of
            creditnota. Zo voorkom je problemen met de btw-aftrek bij je klant.
          </li>
          <li>
            <strong>Btw-aangifte corrigeren:</strong> dien waar nodig een suppletie in. Hoe eerder
            je corrigeert, hoe kleiner het risico op een boete.
          </li>
          <li>
            <strong>Kleine bedragen:</strong> in sommige situaties mag je een kleine fout verwerken
            in de eerstvolgende reguliere btw-aangifte — check de actuele regels.
          </li>
        </ul>

        <h2>Verplichte vermeldingen op je factuur</h2>
        <p>Controleer altijd of je factuur aan de wettelijke eisen voldoet. Verplicht zijn onder meer:</p>
        <ul>
          <li>Uniek factuurnummer (opeenvolgend, niet dubbel gebruikt)</li>
          <li>Factuurdatum en datum van levering of uitvoering</li>
          <li>Jouw gegevens en die van je klant (naam, adres)</li>
          <li>KVK-nummer en btw-identificatienummer</li>
          <li>Omschrijving van de geleverde producten of diensten</li>
          <li>Bedragen excl. en incl. btw, met het juiste btw-tarief (21%, 9% of 0%)</li>
        </ul>
        <p>
          Meer tips:{' '}
          <Link href="/blogs/factuur-fouten-voorkomen" className="text-warm-orange hover:underline">
            veelgemaakte fouten op facturen voorkomen
          </Link>
          . Maak gratis een correcte factuur via{' '}
          <Link href="/blogs/factureren-zonder-account" className="text-warm-orange hover:underline">
            factureren zonder account
          </Link>
          .
        </p>

        <h2>Conclusie</h2>
        <p>
          Een foutieve factuur kan gevolgen hebben voor jou, je klant en je btw-administratie. Door
          te weten welke fouten het vaakst voorkomen, je facturen zorgvuldig op te stellen en fouten
          tijdig te corrigeren, houd je het risico op problemen en boetes beperkt.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Wat zijn de gevolgen van een foutieve factuur?</h3>
        <p>
          Meestal moet je corrigeren: factuur aanpassen, klant informeren, administratie en
          eventueel btw-aangifte bijwerken. In sommige gevallen kan een boete volgen.
        </p>
        <h3>Wat staat er meestal fout op facturen?</h3>
        <p>
          Verkeerd btw-tarief of bedrag, ontbrekend factuurnummer, verkeerde datum, onjuiste
          klantgegevens of een verkeerd totaal.
        </p>
        <h3>Kan ik een boete voorkomen?</h3>
        <p>
          Corrigeer fouten zo snel mogelijk — op de factuur én in je administratie. Bij twijfel
          vraag je boekhouder of raadpleeg je Belastingdienst.nl.
        </p>
        <h3>Wat moet er verplicht op een factuur?</h3>
        <p>
          Uniek factuurnummer, datum, jouw en klantgegevens (incl. KVK en btw-nummer), omschrijving,
          bedragen en het correcte btw-tarief.
        </p>
      </>
    ),
  },
  {
    slug: 'factuur-niet-betaald-wat-mag-je-doen',
    relatedSlugs: ['sneller-betalen-factuur', 'factuur-fouten-voorkomen', 'factuur-maken-zzp', 'factuurbeheer-overzicht'],
    metaTitle: 'Factuur niet betaald? Dit kun je doen (stappenplan)',
    title: 'Factuur niet betaald? Dit kun je doen',
    breadcrumbLabel: 'Factuur niet betaald',
    excerpt: 'Je factuur wordt niet betaald? Lees wanneer je een herinnering of aanmaning stuurt, welke incassokosten zijn toegestaan en hoe je je geld krijgt.',
    keywords: 'factuur niet betaald, factuur wordt niet betaald, factuur nog niet betaald, factuur niet betaald wat nu, zzp factuur niet betaald',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Mijn%20factuur%20wordt%20niet%20betaald.png',
      alt: 'Factuur niet betaald? Dit kun je doen: stappenplan voor herinnering, aanmaning en incasso.',
    },
    datePublished: '2026-02-06',
    dateModified: '2026-10-08',
    faq: [
      { question: 'Wat moet ik doen als mijn factuur niet betaald wordt?', answer: 'Controleer eerst de vervaldatum en factuurgegevens. Stuur daarna een vriendelijke herinnering en neem contact op met je klant. Blijft betaling uit, dan kun je een aanmaning en verdere incassostappen overwegen.' },
      { question: 'Mag ik meteen een incassobureau inschakelen?', answer: 'Je kunt een incassobureau inschakelen, maar dat betekent niet dat alle kosten direct op de klant mogen worden verhaald. Vooral bij consumenten moet je eerst aan specifieke wettelijke eisen voldoen.' },
      { question: 'Moet ik altijd eerst een herinnering sturen?', answer: 'Bij consumenten moet je voordat je incassokosten rekent een correcte kosteloze veertiendagenaanmaning sturen. Bij zakelijke klanten geldt die verplichting niet op dezelfde manier.' },
      { question: 'Mag ik een onbetaalde factuur verhogen?', answer: 'Je mag onder voorwaarden wettelijke rente en incassokosten vorderen. Je mag niet zomaar zelf een willekeurige toeslag bepalen.' },
      { question: 'Wat als een bedrijf mijn factuur niet betaalt?', answer: 'Controleer de gemaakte afspraken, stuur een herinnering of aanmaning en beoordeel of handelsrente en incassokosten verschuldigd zijn. Bij aanhoudende wanbetaling kun je professionele incassohulp overwegen.' },
      { question: 'Wat als mijn opdrachtgever mijn factuur betwist?', answer: 'Vraag waarom de factuur wordt betwist en controleer de overeenkomst, werkzaamheden en bewijsstukken. Een inhoudelijk geschil kan invloed hebben op de beste vervolgstappen.' },
      { question: 'Kan ik de btw van een onbetaalde factuur terugvragen?', answer: 'Bij toepassing van het factuurstelsel kun je onder voorwaarden btw terugvragen zodra de vordering oninbaar is. Daarvoor gelden specifieke regels en termijnen.' },
      { question: 'Hoe lang blijft een onbetaalde factuur geldig?', answer: 'Dat hangt af van de overeenkomst. Veel zakelijke vorderingen verjaren na vijf jaar, terwijl voor de koopprijs bij consumentenkoop vaak twee jaar geldt.' },
    ],
    content: (
      <>
        <p>Je hebt je werkzaamheden uitgevoerd, de factuur verstuurd en de betalingstermijn is voorbij. Maar het geld staat nog steeds niet op je rekening.</p>
        <p><strong>Wat kun je doen als je factuur niet betaald wordt?</strong></p>
        <p>Begin met controleren of de betaling daadwerkelijk te laat is. Stuur vervolgens een vriendelijke herinnering en neem contact op met je klant. Blijft betaling uit, dan kun je een formele aanmaning sturen en eventueel incassokosten of wettelijke rente in rekening brengen.</p>
        <p>Welke stappen je mag zetten, hangt onder andere af van de vraag of je klant een bedrijf of particulier is.</p>

        <h2>Factuur niet betaald: het stappenplan</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[420px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Stap</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Wat doe je?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">1</td>
                <td className="px-4 py-3">Controleer de betalingstermijn en factuur</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">2</td>
                <td className="px-4 py-3">Stuur een vriendelijke betalingsherinnering</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">3</td>
                <td className="px-4 py-3">Neem contact op met de klant</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">4</td>
                <td className="px-4 py-3">Stuur zo nodig een formele aanmaning</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">5</td>
                <td className="px-4 py-3">Beoordeel wettelijke rente en incassokosten</td>
              </tr>
              <tr>
                <td className="px-4 py-3">6</td>
                <td className="px-4 py-3">Overweeg een betalingsregeling of incassobureau</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Je hoeft niet meteen een incassobureau in te schakelen. Veel betalingsachterstanden zijn op te lossen door contact op te nemen met de klant.</p>

        <h2>1. Controleer of de factuur te laat is</h2>
        <p>Voordat je actie onderneemt, controleer je eerst de vervaldatum.</p>
        <p>Stel dat je een factuur op 1 oktober verstuurt met een afgesproken betalingstermijn van 14 dagen.</p>
        <p>Dan is de vervaldatum 15 oktober.</p>
        <p>Is er op 16 oktober nog niet betaald? Dan kun je de klant benaderen.</p>
        <p>Controleer ook of:</p>
        <ul>
          <li>Het factuurnummer klopt.</li>
          <li>De factuur naar het juiste e-mailadres is gestuurd.</li>
          <li>Het bedrag overeenkomt met de gemaakte afspraken.</li>
          <li>De klant de factuur heeft ontvangen.</li>
          <li>De betaling misschien al onderweg is.</li>
        </ul>
        <h3>Wat als er geen betalingstermijn is afgesproken?</h3>
        <p>Bij zakelijke transacties geldt doorgaans een wettelijke betalingstermijn van 30 dagen wanneer partijen geen betalingstermijn hebben afgesproken.</p>
        <p>Voor consumenten bestaat geen algemene vaste wettelijke betalingstermijn. De termijn moet redelijk zijn en bij voorkeur vooraf duidelijk zijn overeengekomen.</p>

        <h2>2. Stuur een vriendelijke betalingsherinnering</h2>
        <p>Een eerste betalingsherinnering hoeft niet ingewikkeld te zijn.</p>
        <p>Houd het bericht vriendelijk, duidelijk en kort.</p>
        <h3>Voorbeeld betalingsherinnering</h3>
        <p><strong>Onderwerp: Betalingsherinnering factuur 2026-018</strong></p>
        <p>Beste [naam],</p>
        <p>Volgens mijn administratie staat factuur 2026-018 van €605 nog open. De vervaldatum was 15 oktober.</p>
        <p>Zou je kunnen controleren of de betaling al is verwerkt?</p>
        <p>Mocht je inmiddels betaald hebben, dan kun je deze herinnering als niet verzonden beschouwen.</p>
        <p>Alvast bedankt!</p>
        <p>Met vriendelijke groet,<br />[Je naam]</p>
        <p>Voeg de oorspronkelijke factuur opnieuw toe, zodat je klant niet hoeft te zoeken.</p>

        <h2>3. Neem contact op met de klant</h2>
        <p>Reageert de klant niet op je herinnering?</p>
        <p>Dan kan persoonlijk contact helpen.</p>
        <p>Vraag bijvoorbeeld:</p>
        <ul>
          <li>Is de factuur goed ontvangen?</li>
          <li>Kloppen alle gegevens?</li>
          <li>Is er een probleem met de geleverde werkzaamheden?</li>
          <li>Wanneer kan de betaling worden verwacht?</li>
        </ul>
        <p>Probeer een concrete betaaldatum af te spreken.</p>
        <p>Bevestig die afspraak vervolgens per e-mail, zodat je later kunt terugvinden wat er is besproken.</p>

        <h2>4. Stuur een formele aanmaning</h2>
        <p>Blijft betaling uit? Dan kun je een formele aanmaning sturen.</p>
        <p>Een aanmaning is een duidelijk verzoek om een openstaande schuld alsnog te betalen.</p>
        <p>Hierbij is het belangrijk om onderscheid te maken tussen particuliere en zakelijke klanten.</p>
        <h3>Particuliere klant: verplichte veertiendagenbrief</h3>
        <p>Wil je incassokosten rekenen aan een consument?</p>
        <p>Dan moet je eerst een correcte, kosteloze veertiendagenaanmaning sturen.</p>
        <p>Daarin moet je de consument na ontvangst voldoende tijd geven om alsnog zonder incassokosten te betalen.</p>
        <p>Ook moet je duidelijk vermelden welke incassokosten verschuldigd worden wanneer de betaling uitblijft.</p>
        <p>Een gewone herinnering voldoet alleen als die aan alle wettelijke eisen voldoet.</p>
        <h3>Zakelijke klant: andere regels</h3>
        <p>Bij zakelijke klanten is een kosteloze veertiendagenbrief niet standaard verplicht voordat incassokosten verschuldigd kunnen worden.</p>
        <p>De wettelijke regels en eventuele contractuele afspraken bepalen wanneer rente en kosten kunnen worden gevorderd.</p>
        <p>Een duidelijke aanmaning is in de praktijk vaak wel verstandig.</p>
        <h3>Voorbeeld zakelijke aanmaning</h3>
        <p><strong>Onderwerp: Aanmaning openstaande factuur 2026-018</strong></p>
        <p>Beste [naam],</p>
        <p>Ondanks onze eerdere herinnering hebben wij nog geen betaling ontvangen voor factuur 2026-018 van €605, met vervaldatum 15 oktober.</p>
        <p>Wij verzoeken je het openstaande bedrag uiterlijk [datum] over te maken naar [IBAN], onder vermelding van het factuurnummer.</p>
        <p>Als betaling uitblijft, kunnen wij verdere incassomaatregelen overwegen en, voor zover wettelijk toegestaan, rente en kosten in rekening brengen.</p>
        <p>Met vriendelijke groet,<br />[Naam / bedrijfsnaam]</p>
        <p><strong>Let op:</strong> dit is een voorbeeld voor een zakelijke klant en geen juridisch gecontroleerde veertiendagenbrief voor consumenten.</p>

        <h2>5. Mag je rente en incassokosten rekenen?</h2>
        <p>Wanneer een klant te laat betaalt, kun je onder voorwaarden wettelijke rente en incassokosten vorderen.</p>
        <p>Maar je mag niet zomaar een willekeurig bedrag aan de factuur toevoegen.</p>
        <h3>Wettelijke rente</h3>
        <p>Er bestaan verschillende wettelijke rentetarieven.</p>
        <ul>
          <li><strong>Wettelijke handelsrente:</strong> voor daarvoor kwalificerende zakelijke handelstransacties.</li>
          <li><strong>Wettelijke rente voor niet-handelstransacties:</strong> onder andere voor veel vorderingen op consumenten.</li>
        </ul>
        <p>De percentages kunnen veranderen. Controleer daarom het actuele tarief voordat je rente berekent.</p>
        <h3>Incassokosten</h3>
        <p>Bij consumenten gelden wettelijke staffels en een minimum van €40, mits aan de voorwaarden is voldaan.</p>
        <p>Bij zakelijke klanten kunnen contractuele afspraken een rol spelen. Als daarvan niet geldig is afgeweken, gelden de toepasselijke wettelijke regels.</p>
        <h3>Voorbeeld</h3>
        <p>Een klant heeft een factuur van €1.000 niet betaald.</p>
        <p>Dat betekent niet dat je automatisch €100 aan administratiekosten mag toevoegen.</p>
        <p>Je moet eerst bepalen welke regels gelden, of de klant in verzuim is en welke rente en incassokosten daadwerkelijk zijn toegestaan.</p>

        <h2>6. Spreek eventueel een betalingsregeling af</h2>
        <p>Soms wil een klant wel betalen, maar lukt het niet om het hele bedrag ineens over te maken.</p>
        <p>Een betalingsregeling kan dan een praktische oplossing zijn.</p>
        <p>Bijvoorbeeld voor een openstaande factuur van €900:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Betaalmoment</th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">Bedrag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Eerste termijn</td>
                <td className="px-4 py-3 text-right">€300</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Tweede termijn</td>
                <td className="px-4 py-3 text-right">€300</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Derde termijn</td>
                <td className="px-4 py-3 text-right">€300</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-deep-blue">Totaal</td>
                <td className="px-4 py-3 text-right font-semibold text-deep-blue">€900</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Leg de regeling schriftelijk vast.</p>
        <p>Vermeld daarbij de betaaldata, bedragen en wat er gebeurt als een termijn niet wordt betaald.</p>
        <p>Een betalingsregeling hoeft niet altijd de beste oplossing te zijn. Bij twijfel over de betalingsbereidheid of financiële situatie van de klant kan professioneel advies verstandig zijn.</p>

        <h2>7. Wanneer schakel je een incassobureau in?</h2>
        <p>Als herinneringen, contact en aanmaningen niets opleveren, kun je professionele hulp inschakelen.</p>
        <p>Er zijn verschillende mogelijkheden.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[560px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Partij</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Wat kan deze doen?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Incassobureau</td>
                <td className="px-4 py-3">Probeert betaling te verkrijgen zonder gerechtelijke dwangmiddelen</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Gerechtsdeurwaarder</td>
                <td className="px-4 py-3">Kan onder meer dagvaardingen betekenen en onder voorwaarden beslag uitvoeren</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Incasso-advocaat</td>
                <td className="px-4 py-3">Kan juridisch adviseren, onderhandelen en procedures voeren</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Een incassobureau kan niet zelfstandig beslag leggen.</p>
        <p>Voor veel dwangmaatregelen is eerst een executoriale titel nodig, zoals een rechterlijk vonnis.</p>
        <p>Controleer bij het kiezen van een incassodienstverlener de registratie en voorwaarden.</p>

        <h2>8. Wat als de klant nog steeds niet betaalt?</h2>
        <p>Wanneer buitengerechtelijke incasso niet werkt, kun je onderzoeken of een gerechtelijke procedure zinvol is.</p>
        <p>Daarbij spelen verschillende vragen:</p>
        <ul>
          <li>Hoe hoog is de openstaande vordering?</li>
          <li>Is de vordering juridisch goed onderbouwd?</li>
          <li>Heb je bewijs van de overeenkomst en levering?</li>
          <li>Betwist de klant de factuur?</li>
          <li>Is de klant waarschijnlijk in staat om te betalen?</li>
          <li>Wegen de verwachte kosten op tegen het mogelijke resultaat?</li>
        </ul>
        <p>Bewaar daarom je offerte, overeenkomst, correspondentie, factuur en eventuele opleveringsbewijzen.</p>
        <p>Bij een grote of betwiste vordering is juridisch advies verstandig.</p>

        <h2>9. Kun je de btw terugvragen als een factuur niet betaald wordt?</h2>
        <p>In bepaalde gevallen wel.</p>
        <p>Als je het factuurstelsel toepast, heb je mogelijk al btw aangegeven en afgedragen over een factuur die je klant nooit betaalt.</p>
        <p>Je kunt die btw terugvragen zodra vaststaat dat de vordering geheel of gedeeltelijk oninbaar is.</p>
        <p>Een vordering wordt voor deze regeling in ieder geval uiterlijk één jaar na de overeengekomen uiterste betaaldatum als oninbaar beschouwd.</p>
        <p>Wordt de factuur later alsnog betaald, dan moet je de btw-verwerking opnieuw beoordelen.</p>
        <p>Bij het kasstelsel gelden andere regels.</p>
        <p>Controleer de voorwaarden bij de Belastingdienst.</p>

        <h2>10. Kan een onbetaalde factuur verjaren?</h2>
        <p>Ja. Je kunt niet onbeperkt wachten met het innen van een vordering.</p>
        <p>De verjaringstermijn hangt af van het soort overeenkomst.</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Situatie</th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Gebruikelijke verjaringstermijn</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Zakelijke vordering uit overeenkomst</td>
                <td className="px-4 py-3">Vaak 5 jaar</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Koopprijs bij consumentenkoop</td>
                <td className="px-4 py-3">2 jaar</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Diensten aan consumenten</td>
                <td className="px-4 py-3">Vaak 5 jaar</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>De precieze termijn en het beginmoment hangen af van de juridische grondslag.</p>
        <p>Onder voorwaarden kun je verjaring stuiten, bijvoorbeeld door een correcte schriftelijke aanmaning waarin je je recht op nakoming ondubbelzinnig voorbehoudt.</p>
        <p>Niet iedere informele herinnering is daarvoor automatisch voldoende.</p>
        <p>Wacht bij oudere vorderingen daarom niet tot het laatste moment.</p>

        <h2>Hoe voorkom je onbetaalde facturen?</h2>
        <p>Niet iedere wanbetaling is te voorkomen, maar je kunt het risico verkleinen.</p>
        <p><strong>Maak vooraf duidelijke afspraken.</strong> Leg de prijs, werkzaamheden en betalingstermijn schriftelijk vast.</p>
        <p><strong>Factureer op tijd.</strong> Wacht niet onnodig met het versturen van je factuur.</p>
        <p><strong>Gebruik correcte gegevens.</strong> Een foutieve factuur kan tot vertraging leiden.</p>
        <p><strong>Vraag bij grotere opdrachten een aanbetaling.</strong> Houd daarbij rekening met de toepasselijke wettelijke regels.</p>
        <p><strong>Controleer openstaande facturen regelmatig.</strong> Zo kun je snel reageren als een vervaldatum verstrijkt.</p>
        <p><strong>Werk met een overzichtelijke administratie.</strong> Bewaar facturen en correspondentie op één plek.</p>
        <p>
          <Link href="/blogs/sneller-betalen-factuur" className="text-warm-orange hover:underline">Lees ook: factuur sneller betaald krijgen</Link>.
        </p>

        <h2>Veelgestelde vragen over niet-betaalde facturen</h2>
        <h3>Wat moet ik doen als mijn factuur niet betaald wordt?</h3>
        <p>Controleer eerst de vervaldatum en factuurgegevens. Stuur daarna een vriendelijke herinnering en neem contact op met je klant. Blijft betaling uit, dan kun je een aanmaning en verdere incassostappen overwegen.</p>
        <h3>Mag ik meteen een incassobureau inschakelen?</h3>
        <p>Je kunt een incassobureau inschakelen, maar dat betekent niet dat alle kosten direct op de klant mogen worden verhaald. Vooral bij consumenten moet je eerst aan specifieke wettelijke eisen voldoen.</p>
        <h3>Moet ik altijd eerst een herinnering sturen?</h3>
        <p>Bij consumenten moet je voordat je incassokosten rekent een correcte kosteloze veertiendagenaanmaning sturen. Bij zakelijke klanten geldt die verplichting niet op dezelfde manier.</p>
        <h3>Mag ik een onbetaalde factuur verhogen?</h3>
        <p>Je mag onder voorwaarden wettelijke rente en incassokosten vorderen. Je mag niet zomaar zelf een willekeurige toeslag bepalen.</p>
        <h3>Wat als een bedrijf mijn factuur niet betaalt?</h3>
        <p>Controleer de gemaakte afspraken, stuur een herinnering of aanmaning en beoordeel of handelsrente en incassokosten verschuldigd zijn. Bij aanhoudende wanbetaling kun je professionele incassohulp overwegen.</p>
        <h3>Wat als mijn opdrachtgever mijn factuur betwist?</h3>
        <p>Vraag waarom de factuur wordt betwist en controleer de overeenkomst, werkzaamheden en bewijsstukken. Een inhoudelijk geschil kan invloed hebben op de beste vervolgstappen.</p>
        <h3>Kan ik de btw van een onbetaalde factuur terugvragen?</h3>
        <p>Bij toepassing van het factuurstelsel kun je onder voorwaarden btw terugvragen zodra de vordering oninbaar is. Daarvoor gelden specifieke regels en termijnen.</p>
        <h3>Hoe lang blijft een onbetaalde factuur geldig?</h3>
        <p>Dat hangt af van de overeenkomst. Veel zakelijke vorderingen verjaren na vijf jaar, terwijl voor de koopprijs bij consumentenkoop vaak twee jaar geldt.</p>

        <h2>Factuur niet betaald? Begin met een duidelijke volgende stap</h2>
        <p>Een onbetaalde factuur is vervelend, maar je hoeft niet meteen juridische maatregelen te nemen.</p>
        <p>Controleer de vervaldatum, stuur een herinnering en probeer een concrete betalingsafspraak te maken.</p>
        <p>Blijft betaling uit, dan kun je de vervolgstappen bepalen op basis van het type klant, de gemaakte afspraken en de wettelijke regels.</p>
        <p>Wil je toekomstige facturen duidelijk en overzichtelijk opstellen?</p>
        <p>Met FactuurBaas maak je gratis een factuur als PDF, zonder account.</p>
        <CtaButton href="/create-invoice" label="Maak gratis een factuur" />
      </>
    )
  },
  {
    slug: 'hypotheek-als-zzper-hoe-werkt-het',
    relatedSlugs: [
      'hoeveel-hypotheek-kan-ik-krijgen-als-zzper',
      'hypotheek-met-eenmanszaak',
      'hypotheek-voor-startende-zzpers',
      'hoe-lang-zzper-zijn-voor-hypotheek',
      'welk-inkomen-telt-voor-hypotheek-als-zzper',
      'winst-uit-onderneming-voor-hypotheek',
      'hypotheek-met-wisselend-inkomen-als-zzper',
      'jaarcijfers-nodig-voor-hypotheek-als-zzper',
      'hypotheek-zzp-zonder-3-jaar-cijfers',
      'hypotheek-berekenen-als-zzper',
      'hypotheekadviseur-voor-zzpers',
      'zakelijke-rekening-zzp',
      'hoeveel-geld-apart-belasting-zzper',
      'factureren-startende-zzper',
    ],
    title: "Hypotheek als zzp'er: hoe werkt het?",
    excerpt:
      "Een hypotheek als zzp'er aanvragen? Lees hoe je inkomen wordt vastgesteld, welke documenten nodig zijn en waar geldverstrekkers op letten.",
    keywords:
      "hypotheek als zzp'er, hypotheek zzp, hypotheek voor zzp'ers, hypotheek als zelfstandige, hypotheek aanvragen als zzp'er, hypotheek zzp'er, huis kopen als zzp'er, hypotheek berekenen zzp, inkomen hypotheek zzp, toetsinkomen zzp",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Hypotheek%20als%20zzper%20hoe%20werkt%20het.jpg',
      alt: "Hypotheek als zzp'er: hoe werkt het? Uitleg over inkomen, documenten en maximale hypotheek.",
    },
    datePublished: '2026-09-15',
    dateModified: '2026-09-15',
    faq: [
      {
        question: "Kan ik als zzp'er een hypotheek krijgen?",
        answer:
          'Ja. Ook zzp\'ers kunnen een hypotheek krijgen. De geldverstrekker beoordeelt daarbij onder andere het inkomen, de financiële verplichtingen en de waarde van de woning.',
      },
      {
        question: "Hoe lang moet ik zzp'er zijn voor een hypotheek?",
        answer:
          'Dat hangt af van de hypotheek en de geldverstrekker. Voor NHG geldt dat ondernemers die minimaal 12 maanden actief zijn gebruik kunnen maken van de Inkomensverklaring Ondernemer.',
      },
      {
        question: 'Moet ik drie jaar ondernemer zijn?',
        answer:
          'Nee, drie jaar ondernemerschap is geen algemene voorwaarde voor iedere hypotheek. Voor de NHG-Inkomensverklaring Ondernemer geldt minimaal 12 maanden ondernemerschap. De inkomensanalyse kijkt normaal gesproken naar maximaal drie jaar historie, of korter als de onderneming jonger is.',
      },
      {
        question: "Kan ik als startende zzp'er een hypotheek krijgen?",
        answer:
          'Dat kan, maar de mogelijkheden hangen onder andere af van hoe lang je onderneming bestaat en welke inkomensgegevens beschikbaar zijn. Bij NHG bestaat voor ondernemers vanaf 12 maanden ondernemerschap de route via de Inkomensverklaring Ondernemer.',
      },
      {
        question: 'Wat is een toetsinkomen?',
        answer:
          'Het toetsinkomen is het inkomen dat voor de hypotheekbeoordeling wordt gebruikt om te bepalen hoeveel je verantwoord kunt lenen. Bij ondernemers wordt dit vastgesteld volgens de toepasselijke inkomensmethodiek.',
      },
      {
        question: 'Telt mijn omzet mee voor mijn hypotheek?',
        answer:
          'Niet simpelweg als omzetbedrag. Bij een ondernemer wordt gekeken naar het inkomen dat volgens de geldende beoordelingsmethode voor de hypotheek kan worden meegenomen.',
      },
      {
        question: 'Kan ik met wisselende inkomsten een hypotheek krijgen?',
        answer:
          'Ja, wisselende inkomsten sluiten een hypotheek niet automatisch uit. De geldverstrekker beoordeelt de inkomenshistorie en bepaalt welk inkomen voor de hypotheek kan worden gebruikt.',
      },
      {
        question: 'Kan ik met een eenmanszaak een hypotheek krijgen?',
        answer:
          'Ja. Een eenmanszaak sluit een hypotheek niet uit. Voor NHG valt een zelfstandige ondernemer, bijvoorbeeld met een eenmanszaak, onder de route voor de Inkomensverklaring Ondernemer wanneer aan de voorwaarden wordt voldaan.',
      },
    ],
    content: (
      <>
        <p>
          Een <strong>hypotheek als zzp&apos;er</strong> aanvragen werkt anders dan wanneer je in
          loondienst bent. Een geldverstrekker kijkt niet alleen naar je huidige inkomen, maar moet
          bepalen welk inkomen uit je onderneming voor de hypotheek kan worden meegenomen.
        </p>
        <p>
          Dat betekent niet dat je als zzp&apos;er geen hypotheek kunt krijgen. Ook ondernemers
          kunnen een hypotheek afsluiten. Wel moet je kunnen aantonen wat je inkomen is en hoe de
          financiële situatie van je onderneming ervoor staat.
        </p>
        <p>
          In dit artikel lees je hoe een <strong>hypotheek voor zzp&apos;ers</strong> werkt, hoe je
          inkomen wordt vastgesteld, welke documenten je nodig hebt en welke factoren invloed hebben
          op hoeveel je kunt lenen.
        </p>
        <p>
          Wil je direct een eerste berekening maken? Gebruik dan onze{' '}
          <Link href="/tools/hypotheek-berekenen-zzp" className="text-warm-orange hover:underline">
            hypotheekcalculator voor zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Kun je als zzp&apos;er een hypotheek krijgen?</h2>
        <p>Ja. Als zzp&apos;er kun je gewoon een hypotheek aanvragen.</p>
        <p>
          Het belangrijkste verschil met iemand in loondienst is de manier waarop het inkomen wordt
          vastgesteld. Bij een werknemer kan bijvoorbeeld een werkgeversverklaring worden gebruikt.
          Bij een ondernemer moet de geldverstrekker het ondernemersinkomen beoordelen.
        </p>
        <p>
          Daarbij kan onder meer worden gekeken naar de financiële resultaten van je onderneming en
          de ontwikkeling van je inkomen.
        </p>
        <p>
          Voor een hypotheekaanvraag moet de geldverstrekker uiteindelijk beoordelen of de hypotheek
          verantwoord is. De maximale hypotheek wordt onder andere begrensd door je inkomen en de
          waarde van de woning. Ook andere financiële verplichtingen kunnen van invloed zijn.
        </p>

        <h2>Hoe werkt een hypotheek voor een zzp&apos;er?</h2>
        <p>In grote lijnen bestaat het proces uit een aantal stappen:</p>
        <ol>
          <li>Je bepaalt hoeveel je ongeveer wilt lenen.</li>
          <li>Je brengt je ondernemersinkomen en financiële situatie in kaart.</li>
          <li>
            De geldverstrekker of adviseur beoordeelt welk inkomen voor de hypotheek meetelt.
          </li>
          <li>Je levert de benodigde financiële documenten aan.</li>
          <li>De geldverstrekker berekent hoeveel je verantwoord kunt lenen.</li>
          <li>Daarna wordt de hypotheekaanvraag verder beoordeeld.</li>
        </ol>
        <p>
          Bij ondernemers is vooral de vaststelling van het <strong>toetsinkomen</strong> belangrijk.
        </p>
        <p>
          Het <strong>toetsinkomen</strong> is het inkomen waarmee de hypotheekverstrekker
          rekent bij het bepalen van je maximale hypotheek. Dit hoeft niet simpelweg hetzelfde
          bedrag te zijn als je omzet of de winst van het meest recente boekjaar.
        </p>

        <h2>Welk inkomen telt voor een hypotheek als zzp&apos;er?</h2>
        <p>
          Als zzp&apos;er heb je te maken met ondernemersinkomen. De manier waarop dit inkomen voor
          je hypotheek wordt vastgesteld, hangt onder andere af van je ondernemingsvorm, je historie
          en de regels die de geldverstrekker toepast.
        </p>
        <p>
          Bij NHG wordt voor ondernemers die minimaal 12 maanden actief zijn gewerkt met een{' '}
          <strong>Inkomensverklaring Ondernemer (IKV)</strong>. Een onafhankelijke rekenexpert
          analyseert daarbij de onderneming en stelt een toetsinkomen vast.
        </p>
        <p>
          Een Inkomensverklaring Ondernemer kijkt doorgaans naar de financiële gegevens van de
          afgelopen drie jaar, of naar een kortere periode wanneer de onderneming nog geen drie jaar
          bestaat.
        </p>
        <p>
          Daarom is het niet juist om simpelweg te zeggen dat je voor een hypotheek altijd drie
          volledige jaren ondernemer moet zijn.
        </p>

        <h2>Hoeveel hypotheek kan ik krijgen als zzp&apos;er?</h2>
        <p>Hoeveel je kunt lenen hangt niet alleen af van je inkomen.</p>
        <p>Bij de beoordeling spelen onder andere mee:</p>
        <ul>
          <li>je vastgestelde toetsinkomen;</li>
          <li>de hypotheekrente en rentevastperiode;</li>
          <li>andere financiële verplichtingen;</li>
          <li>de waarde van de woning;</li>
          <li>eventuele inkomsten van een partner;</li>
          <li>de geldende wettelijke en acceptatienormen.</li>
        </ul>
        <p>
          De maximale hypotheek ten opzichte van de waarde van een woning is in Nederland in
          beginsel 100%. Daarnaast gelden inkomensnormen voor de maximale hypotheek.
        </p>
        <p>
          Een studieschuld, persoonlijke lening of leaseverplichting kan bijvoorbeeld invloed hebben
          op je maximale hypotheek.
        </p>

        <h3>Hypotheek berekenen als zzp&apos;er</h3>
        <p>
          Wil je een eerste indicatie van wat je als zzp&apos;er zou kunnen lenen?
        </p>
        <HypotheekCta />
        <p>
          Onze calculator geeft een indicatie op basis van je inkomen, financiële verplichtingen en
          een gekozen rente. De daadwerkelijke maximale hypotheek kan anders uitvallen, omdat een
          geldverstrekker je volledige financiële situatie en de geldende acceptatievoorwaarden
          beoordeelt.
        </p>

        <h2>Moet je 3 jaar zzp&apos;er zijn voor een hypotheek?</h2>
        <p>Niet altijd.</p>
        <p>
          De vaak genoemde regel dat je eerst drie jaar ondernemer moet zijn, is te algemeen.
        </p>
        <p>
          Voor NHG geldt bijvoorbeeld dat een ondernemer die minimaal 12 maanden zelfstandig actief
          is gebruik kan maken van de Inkomensverklaring Ondernemer. De inkomensverklaring kan
          worden gebaseerd op een periode korter dan drie jaar wanneer de onderneming nog jonger is.
        </p>
        <p>
          Dat betekent niet automatisch dat iedere startende zzp&apos;er na 12 maanden dezelfde
          hypotheekmogelijkheden heeft. De geldverstrekker moet het inkomen en de financiële
          situatie nog steeds beoordelen.
        </p>
        <p>
          Heb je een onderneming die nog maar kort bestaat, dan is het daarom belangrijk om
          specifiek te kijken naar de voorwaarden die voor jouw situatie en hypotheekaanvraag
          gelden. Meer uitleg vind je ook op onze pagina over{' '}
          <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
            hypotheek zonder 3 jaar cijfers
          </Link>
          .
        </p>

        <h2>Hypotheek als startende zzp&apos;er</h2>
        <p>
          Als startende zzp&apos;er kan een hypotheekaanvraag lastiger zijn doordat je minder
          historische financiële gegevens hebt.
        </p>
        <p>Dat betekent echter niet automatisch dat een hypotheek onmogelijk is.</p>
        <p>
          Bij de beoordeling kan het verschil maken hoe lang je onderneming bestaat en welke
          inkomensgegevens beschikbaar zijn. Bij NHG wordt voor ondernemers die minimaal 12 maanden
          actief zijn de Inkomensverklaring Ondernemer gebruikt om het toetsinkomen vast te stellen.
          Bij een jongere onderneming wordt voor de analyse een kortere historie gebruikt.
        </p>
        <p>
          Heb je eerder in loondienst gewerkt en ben je daarna voor jezelf begonnen, dan kan ook je
          eerdere arbeids- en inkomenssituatie relevant zijn. De precieze manier waarop dit wordt
          meegenomen hangt af van de geldverstrekker en de geldende regels. Lees ook onze uitleg
          over{' '}
          <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
            hypotheek voor startende zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Hypotheek met een eenmanszaak</h2>
        <p>Een eenmanszaak is een veel voorkomende ondernemingsvorm onder zzp&apos;ers.</p>
        <p>
          Bij een hypotheekaanvraag wordt niet simpelweg gekeken naar je omzet. De financiële
          resultaten van de onderneming moeten worden beoordeeld om vast te stellen welk inkomen
          voor de hypotheek kan worden gebruikt.
        </p>
        <p>
          Voor NHG geldt dat een zelfstandige ondernemer, bijvoorbeeld iemand met een eenmanszaak,
          onder de voorwaarden voor de Inkomensverklaring Ondernemer kan vallen. De NHG-normen
          noemen minimaal 12 maanden actief zijn als ondernemer als voorwaarde voor het gebruik van
          de IKV.
        </p>

        <h2>Hypotheek met wisselend inkomen als zzp&apos;er</h2>
        <p>Een wisselend ondernemersinkomen hoeft niet automatisch een probleem te zijn.</p>
        <p>
          Juist daarom wordt bij ondernemers gekeken naar de financiële historie en ontwikkeling van
          de onderneming. De geldverstrekker moet bepalen welk inkomen voldoende betrouwbaar is om
          mee te nemen in de hypotheekberekening.
        </p>
        <p>
          Bij een stijgend of dalend inkomen kan de uitkomst daardoor anders zijn dan wanneer je
          alleen naar je meest recente jaar kijkt.
        </p>
        <p>
          Lees meer in{' '}
          <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
            Hypotheek met wisselend inkomen als zzp&apos;er
          </Link>
          .
        </p>

        <h2>Welke documenten heb je nodig?</h2>
        <p>
          Welke documenten je precies moet aanleveren verschilt per situatie en geldverstrekker.
        </p>
        <p>
          Bij een hypotheekaanvraag als ondernemer kunnen financiële documenten over je onderneming
          nodig zijn. Denk bijvoorbeeld aan jaarcijfers en belastinggegevens. Lees meer in{' '}
          <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
            Jaarcijfers nodig voor hypotheek als zzp&apos;er?
          </Link>
          .
        </p>
        <p>
          Bij een NHG-aanvraag waarbij de Inkomensverklaring Ondernemer wordt gebruikt, wordt de
          onderneming uitgebreid geanalyseerd. De inkomensverklaring wordt opgesteld nadat de
          benodigde stukken zijn ontvangen. NHG vermeldt dat de verklaring vervolgens zes maanden
          geldig is.
        </p>
        <p>
          Zorg er daarom voor dat je administratie en financiële gegevens op orde zijn voordat je
          een hypotheekaanvraag start. Goede facturatie helpt daarbij — zie ook{' '}
          <Link href="/blogs/factuur-maken-zzp" className="text-warm-orange hover:underline">
            hoe je een correcte factuur maakt als zzp&apos;er
          </Link>
          .
        </p>

        <h2>Hypotheek met NHG als zzp&apos;er</h2>
        <p>NHG staat voor Nationale Hypotheek Garantie.</p>
        <p>
          Voor ondernemers bestaat een specifieke route via de{' '}
          <strong>Inkomensverklaring Ondernemer</strong>. Deze verklaring wordt opgesteld door een
          daarvoor aangewezen rekenexpert en wordt gebruikt om het ondernemersinkomen voor de
          hypotheek vast te stellen.
        </p>
        <p>
          Voor NHG moet daarnaast aan de overige voorwaarden worden voldaan. Zo gelden er grenzen
          aan de waarde van de woning waarvoor NHG kan worden gebruikt. Deze grenzen kunnen jaarlijks
          veranderen.
        </p>
        <p>
          Controleer daarom altijd de{' '}
          <a
            href="https://www.nhg.nl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-orange hover:underline"
          >
            actuele NHG-voorwaarden
          </a>{' '}
          wanneer je daadwerkelijk een hypotheek gaat aanvragen.
        </p>

        <h2>Wat heeft je woning met je maximale hypotheek te maken?</h2>
        <p>Je maximale hypotheek wordt niet alleen bepaald door je inkomen.</p>
        <p>
          Ook de waarde van de woning speelt een rol. In Nederland kun je in het algemeen maximaal
          100% van de woningwaarde financieren. Er bestaan uitzonderingen, bijvoorbeeld voor
          bepaalde energiebesparende maatregelen.
        </p>
        <p>
          Je inkomen kan dus voldoende zijn om een bepaald bedrag te lenen, terwijl de waarde van de
          woning bepaalt hoeveel je voor die woning daadwerkelijk met een hypotheek kunt financieren.
        </p>

        <h2>Wat hebben andere schulden voor invloed?</h2>
        <p>Andere financiële verplichtingen kunnen je maximale hypotheek verlagen.</p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>een studieschuld;</li>
          <li>een persoonlijke lening;</li>
          <li>een leasecontract;</li>
          <li>andere kredietverplichtingen.</li>
        </ul>
        <p>
          Deze verplichtingen worden meegenomen bij de beoordeling van je financiële situatie.
          Rijksoverheid vermeldt dat dergelijke verplichtingen invloed kunnen hebben op het maximale
          hypotheekbedrag en dat je financiële verplichtingen bij een hypotheekaanvraag moet melden.
        </p>

        <h2>Kan een partnerinkomen meetellen?</h2>
        <p>
          Heb je een partner met een inkomen, dan kan het inkomen van je partner worden meegenomen
          bij de berekening van de leencapaciteit.
        </p>
        <p>
          Hoeveel van het inkomen meetelt, hangt af van de persoonlijke situatie en de geldende
          hypotheekregels. De AFM vermeldt dat bij een partner met inkomen beide inkomens voor een
          deel kunnen meetellen bij het bepalen van de leencapaciteit.
        </p>

        <h2>Waarom is een hypotheek als zzp&apos;er soms ingewikkelder?</h2>
        <p>Het verschil zit vooral in de inkomensbeoordeling.</p>
        <p>
          Een werknemer heeft doorgaans een werkgever die het inkomen bevestigt. Bij een ondernemer
          moet de geldverstrekker eerst bepalen welk deel van het ondernemersinkomen geschikt is om
          als toetsinkomen te gebruiken.
        </p>
        <p>Daarvoor moet de financiële situatie van de onderneming worden bekeken.</p>
        <p>
          Dat betekent dat twee zzp&apos;ers met dezelfde omzet niet automatisch dezelfde maximale
          hypotheek hebben. Hun winst, financiële historie, verplichtingen en verdere persoonlijke
          situatie kunnen verschillen.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Kan ik als zzp&apos;er een hypotheek krijgen?</h3>
        <p>
          Ja. Ook zzp&apos;ers kunnen een hypotheek krijgen. De geldverstrekker beoordeelt daarbij
          onder andere het inkomen, de financiële verplichtingen en de waarde van de woning.
        </p>
        <h3>Hoe lang moet ik zzp&apos;er zijn voor een hypotheek?</h3>
        <p>
          Dat hangt af van de hypotheek en de geldverstrekker. Voor NHG geldt dat ondernemers die
          minimaal 12 maanden actief zijn gebruik kunnen maken van de Inkomensverklaring Ondernemer.
        </p>
        <h3>Moet ik drie jaar ondernemer zijn?</h3>
        <p>
          Nee, drie jaar ondernemerschap is geen algemene voorwaarde voor iedere hypotheek. Voor de
          NHG-Inkomensverklaring Ondernemer geldt minimaal 12 maanden ondernemerschap. De
          inkomensanalyse kijkt normaal gesproken naar maximaal drie jaar historie, of korter als de
          onderneming jonger is.
        </p>
        <h3>Kan ik als startende zzp&apos;er een hypotheek krijgen?</h3>
        <p>
          Dat kan, maar de mogelijkheden hangen onder andere af van hoe lang je onderneming bestaat
          en welke inkomensgegevens beschikbaar zijn. Bij NHG bestaat voor ondernemers vanaf 12
          maanden ondernemerschap de route via de Inkomensverklaring Ondernemer.
        </p>
        <h3>Wat is een toetsinkomen?</h3>
        <p>
          Het toetsinkomen is het inkomen dat voor de hypotheekbeoordeling wordt gebruikt om te
          bepalen hoeveel je verantwoord kunt lenen. Bij ondernemers wordt dit vastgesteld volgens
          de toepasselijke inkomensmethodiek.
        </p>
        <h3>Telt mijn omzet mee voor mijn hypotheek?</h3>
        <p>
          Niet simpelweg als omzetbedrag. Bij een ondernemer wordt gekeken naar het inkomen dat
          volgens de geldende beoordelingsmethode voor de hypotheek kan worden meegenomen.
        </p>
        <h3>Kan ik met wisselende inkomsten een hypotheek krijgen?</h3>
        <p>
          Ja, wisselende inkomsten sluiten een hypotheek niet automatisch uit. De geldverstrekker
          beoordeelt de inkomenshistorie en bepaalt welk inkomen voor de hypotheek kan worden
          gebruikt.
        </p>
        <h3>Kan ik met een eenmanszaak een hypotheek krijgen?</h3>
        <p>
          Ja. Een eenmanszaak sluit een hypotheek niet uit. Voor NHG valt een zelfstandige
          ondernemer, bijvoorbeeld met een eenmanszaak, onder de route voor de Inkomensverklaring
          Ondernemer wanneer aan de voorwaarden wordt voldaan.
        </p>

        <h2>Hypotheek berekenen als zzp&apos;er</h2>
        <p>Wil je weten welke maximale hypotheek bij jouw inkomen zou kunnen passen?</p>
        <p>Gebruik onze gratis calculator voor een eerste indicatie.</p>
        <HypotheekCta label="Hypotheek berekenen als zzp'er →" />
        <HypotheekHubLink />
        <p>
          Houd er rekening mee dat een online berekening geen hypotheekadvies of offerte is. De
          uiteindelijke beoordeling wordt uitgevoerd door de geldverstrekker op basis van je
          volledige situatie, documenten en de actuele voorwaarden. Meer achtergrond lees je op{' '}
          <Link href="/tools/hypotheek-zzp" className="text-warm-orange hover:underline">
            hypotheek voor zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Meer over hypotheken voor zzp&apos;ers</h2>
        <p>Wil je verder lezen? Bekijk ook:</p>
        <ul>
          <li>
            <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
              Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
              Hypotheek voor startende zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
              Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
            </Link>
          </li>
          <li>
            <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Welk inkomen telt voor een hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
              Winst uit onderneming voor hypotheek
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
              Hypotheek met wisselend inkomen als zzp&apos;er
            </Link>
          </li>
          <li>
            <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Jaarcijfers nodig voor hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
              Hypotheek zonder 3 jaar cijfers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-eenmanszaak" className="text-warm-orange hover:underline">
              Hypotheek met een eenmanszaak
            </Link>
          </li>
          <li>
            <Link href="/tools/hypotheek-berekenen-zzp" className="text-warm-orange hover:underline">
              Hypotheek berekenen als zzp&apos;er
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: 'hoeveel-hypotheek-kan-ik-krijgen-als-zzper',
    relatedSlugs: [
      'hypotheek-als-zzper-hoe-werkt-het',
      'hypotheek-met-eenmanszaak',
      'hypotheek-voor-startende-zzpers',
      'hoe-lang-zzper-zijn-voor-hypotheek',
      'welk-inkomen-telt-voor-hypotheek-als-zzper',
      'winst-uit-onderneming-voor-hypotheek',
      'hypotheek-met-wisselend-inkomen-als-zzper',
      'jaarcijfers-nodig-voor-hypotheek-als-zzper',
      'hypotheek-zzp-zonder-3-jaar-cijfers',
      'hypotheek-berekenen-als-zzper',
      'hypotheekadviseur-voor-zzpers',
      'zakelijke-rekening-zzp',
      'hoeveel-geld-apart-belasting-zzper',
      'factureren-startende-zzper',
    ],
    title: "Hoeveel hypotheek kan ik krijgen als zzp'er?",
    excerpt:
      "Hoeveel hypotheek kun je krijgen als zzp'er? Lees hoe je maximale hypotheek wordt berekend, welk inkomen meetelt en welke verplichtingen invloed hebben.",
    keywords:
      "hoeveel hypotheek kan ik krijgen als zzp'er, hoeveel hypotheek zzp, maximale hypotheek zzp, hypotheek berekenen zzp, maximale hypotheek als zzp'er, hoeveel kan ik lenen als zzp'er, hypotheek zzp berekenen, toetsinkomen zzp, hypotheek op basis van winst, hypotheek op basis van inkomen zzp",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Hoeveel%20hypotheek%20kan%20ik%20krijgen%20als%20zzper.jpg',
      alt: "Hoeveel hypotheek kan ik krijgen als zzp'er? Uitleg over maximale hypotheek, toetsinkomen en berekening.",
    },
    datePublished: '2026-09-15',
    dateModified: '2026-09-15',
    faq: [
      {
        question: "Hoeveel hypotheek kan ik krijgen als zzp'er?",
        answer:
          'Dat hangt af van je toetsinkomen, de hypotheekrente, financiële verplichtingen, de woningwaarde, een eventueel partnerinkomen en de actuele hypotheeknormen. Er is daarom geen vast hypotheekbedrag voor iedere zzp\'er.',
      },
      {
        question: 'Hoeveel hypotheek krijg ik met €40.000 inkomen?',
        answer:
          'Dat is niet alleen afhankelijk van je inkomen. Ook de rente, financiële verplichtingen, woningwaarde en overige omstandigheden spelen een rol. Een actuele hypotheekberekening is nodig om een indicatie te krijgen.',
      },
      {
        question: 'Hoeveel hypotheek krijg ik met €50.000 inkomen?',
        answer:
          'Ook hiervoor bestaat geen vast bedrag. De maximale hypotheek wordt berekend op basis van het inkomen en de overige relevante gegevens van je huishouden.',
      },
      {
        question: 'Hoeveel hypotheek krijg ik met €60.000 inkomen?',
        answer:
          'Een inkomen van €60.000 leidt niet automatisch tot één bepaalde maximale hypotheek. De actuele hypotheeknormen en je persoonlijke financiële situatie bepalen de uitkomst.',
      },
      {
        question: 'Telt mijn omzet mee voor mijn hypotheek?',
        answer:
          'Niet rechtstreeks. Bij een ondernemer wordt gekeken naar het inkomen dat volgens de geldende beoordelingsmethode als toetsinkomen kan worden gebruikt.',
      },
      {
        question: 'Telt mijn winst mee voor mijn hypotheek?',
        answer:
          'De financiële resultaten van je onderneming zijn relevant voor het bepalen van je ondernemersinkomen. De winst van één jaar is echter niet automatisch gelijk aan het inkomen waarmee de hypotheek wordt berekend.',
      },
      {
        question: "Kan ik als startende zzp'er een hypotheek krijgen?",
        answer:
          'Dat kan. Voor NHG kunnen ondernemers die langer dan 12 maanden zelfstandig werken gebruikmaken van de Inkomensverklaring Ondernemer. De uiteindelijke hypotheekmogelijkheden hangen af van het vastgestelde inkomen en de overige financiële situatie.',
      },
      {
        question: 'Kan ik met een eenmanszaak een hypotheek krijgen?',
        answer:
          'Ja. Een eenmanszaak sluit een hypotheek niet uit. Het inkomen uit de onderneming moet wel volgens de geldende regels worden beoordeeld.',
      },
      {
        question: 'Kan ik een hypotheek krijgen als mijn inkomen wisselt?',
        answer:
          'Dat kan. Wisselende inkomsten sluiten een hypotheek niet automatisch uit. De geldverstrekker beoordeelt welke inkomensgegevens en historie voor de aanvraag kunnen worden gebruikt.',
      },
    ],
    content: (
      <>
        <p>
          Hoeveel hypotheek je als zzp&apos;er kunt krijgen, hangt vooral af van het inkomen dat
          voor de hypotheek wordt meegenomen. Dat inkomen wordt bij een ondernemer niet altijd op
          dezelfde manier vastgesteld als bij iemand in loondienst.
        </p>
        <p>
          Daarnaast spelen onder andere de hypotheekrente, je financiële verplichtingen, het
          inkomen van een eventuele partner en de waarde van de woning een rol.
        </p>
        <p>
          Er is daarom geen vast bedrag dat iedere zzp&apos;er met een bepaald inkomen kan lenen.
        </p>
        <p>
          Wil je direct een eerste indicatie berekenen? Gebruik dan onze{' '}
          <Link href="/tools/hypotheek-berekenen-zzp" className="text-warm-orange hover:underline">
            hypotheekcalculator voor zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Hoeveel hypotheek kan ik krijgen als zzp&apos;er?</h2>
        <p>
          Als zzp&apos;er kun je net als iemand in loondienst een hypotheek krijgen. De{' '}
          <strong>maximale hypotheek zzp</strong> wordt bepaald op basis van de geldende leennormen
          en jouw persoonlijke financiële situatie.
        </p>
        <p>
          Bij ondernemers is de eerste belangrijke stap het vaststellen van het{' '}
          <strong>toetsinkomen</strong>. Dat is het inkomen waarmee de hypotheekverstrekker rekent
          bij de beoordeling van je maximale hypotheek.
        </p>
        <p>
          Je omzet is daarbij niet hetzelfde als je toetsinkomen. Een ondernemer met €100.000 omzet
          kan bijvoorbeeld een heel andere financiële situatie hebben dan een ondernemer met
          dezelfde omzet maar veel hogere bedrijfskosten.
        </p>
        <p>
          Daarom wordt gekeken naar het inkomen dat volgens de geldende beoordelingsmethode voor de
          hypotheek kan worden meegenomen.
        </p>

        <h2>Waar hangt je maximale hypotheek als zzp&apos;er van af?</h2>
        <p>Je maximale hypotheek wordt onder andere beïnvloed door:</p>
        <ul>
          <li>je toetsinkomen;</li>
          <li>de hypotheekrente;</li>
          <li>de financiële verplichtingen die je al hebt;</li>
          <li>het inkomen van een eventuele partner;</li>
          <li>de waarde van de woning;</li>
          <li>de geldende wettelijke leennormen;</li>
          <li>eventuele extra leenruimte voor energiebesparende maatregelen.</li>
        </ul>
        <p>
          De hypotheeknormen worden jaarlijks vastgesteld. Voor 2026 zijn de leennormen opnieuw
          aangepast. Het precieze effect daarvan verschilt per huishouden en inkomen.
        </p>
        <p>
          Daarom kun je op basis van alleen je omzet of winst niet betrouwbaar bepalen hoeveel je
          maximaal kunt lenen.
        </p>

        <h2>Welk inkomen telt voor je hypotheek als zzp&apos;er?</h2>
        <p>
          Bij een ondernemer wordt eerst bepaald welk inkomen voor de hypotheek gebruikt mag worden.
        </p>
        <p>
          Voor NHG gebeurt dit bij een ondernemer die minimaal 12 maanden actief is via de{' '}
          <strong>Inkomensverklaring Ondernemer (IKV)</strong>. Een onafhankelijke rekenexpert
          analyseert de onderneming en stelt op basis daarvan een toetsinkomen vast.
        </p>
        <p>
          Bij de analyse wordt doorgaans gekeken naar de financiële gegevens van de onderneming. NHG
          geeft aan dat de analyse meestal betrekking heeft op de afgelopen drie jaar, of korter
          wanneer de onderneming nog geen drie jaar bestaat.
        </p>
        <p>
          Het is dus niet juist om simpelweg je omzet of de winst van één jaar als hypotheekinkomen
          te gebruiken. Lees ook{' '}
          <Link href="/blogs/hypotheek-als-zzper-hoe-werkt-het" className="text-warm-orange hover:underline">
            hoe een hypotheek als zzp&apos;er werkt
          </Link>
          .
        </p>

        <h2>Hoe wordt het toetsinkomen van een zzp&apos;er bepaald?</h2>
        <p>
          De precieze berekening hangt af van de situatie en de geldende inkomensmethodiek.
        </p>
        <p>
          Bij de NHG-systematiek wordt onder andere gekeken naar de ontwikkeling van het inkomen.
          NHG vermeldt bijvoorbeeld dat wanneer het inkomen in het laatste jaar lager is dan het
          gemiddelde inkomen, het laatste jaar als uitgangspunt kan gelden. Ook wordt gekeken naar
          het lopende boekjaar.
        </p>
        <p>
          Er kunnen daarnaast correcties worden toegepast. NHG noemt bijvoorbeeld correcties voor de
          auto van de zaak en aspecten zoals solvabiliteit en liquiditeit.
        </p>
        <p>
          Daarom kan het toetsinkomen lager of anders uitvallen dan het bedrag dat je zelf als
          &quot;mijn inkomen&quot; beschouwt.
        </p>

        <h2>Voorbeeld: omzet, winst en toetsinkomen</h2>
        <p>Stel dat je als zzp&apos;er €100.000 omzet per jaar hebt.</p>
        <p>
          Dat betekent niet dat je voor een hypotheek automatisch een inkomen van €100.000 hebt.
        </p>
        <p>
          Van je omzet betaal je bijvoorbeeld zakelijke kosten. Het bedrag dat na zakelijke kosten
          overblijft, is veel relevanter voor de beoordeling van je ondernemersinkomen.
        </p>
        <p>
          Ook daarna kan het inkomen dat uiteindelijk voor de hypotheek wordt gebruikt anders
          uitvallen door de toegepaste inkomensmethodiek en eventuele correcties.
        </p>
        <p>Daarom is de vraag:</p>
        <p>
          <strong>&quot;Hoeveel omzet heb je?&quot;</strong>
        </p>
        <p>minder relevant voor je maximale hypotheek dan:</p>
        <p>
          <strong>&quot;Welk toetsinkomen wordt voor jouw hypotheek vastgesteld?&quot;</strong>
        </p>

        <h2>Kun je met €50.000 inkomen een hypotheek krijgen?</h2>
        <p>
          Dat kan, maar er is niet één vast hypotheekbedrag dat bij €50.000 inkomen hoort.
        </p>
        <p>De maximale hypotheek hangt ook af van bijvoorbeeld:</p>
        <ul>
          <li>de hypotheekrente;</li>
          <li>je leeftijd en persoonlijke situatie;</li>
          <li>eventuele financiële verplichtingen;</li>
          <li>het inkomen van je partner;</li>
          <li>de woningwaarde;</li>
          <li>de actuele hypotheeknormen.</li>
        </ul>
        <p>Een berekening met alleen een inkomensbedrag is daarom altijd een indicatie.</p>

        <h2>Kun je met €60.000 inkomen een hypotheek krijgen?</h2>
        <p>
          Ook bij een toetsinkomen van €60.000 kun je niet zonder meer één maximale hypotheek
          noemen.
        </p>
        <p>
          De hypotheekrente en andere financiële omstandigheden hebben invloed op de maximale
          leencapaciteit. De wettelijke leennormen worden bovendien jaarlijks aangepast.
        </p>
        <p>
          Gebruik daarom een actuele hypotheekberekening in plaats van een vaste vuistregel.
        </p>

        <h3>Hypotheek berekenen als zzp&apos;er</h3>
        <p>
          Wil je weten wat jouw inkomen ongeveer betekent voor je maximale hypotheek?
        </p>
        <HypotheekCta />
        <p>
          Onze calculator geeft een eerste indicatie op basis van je inkomen, maandelijkse
          verplichtingen en een gekozen rente.
        </p>
        <p>
          De uitkomst is geen hypotheekadvies en geen aanbod van een geldverstrekker.
        </p>

        <h2>Heeft je winst invloed op je maximale hypotheek?</h2>
        <p>Ja. Je ondernemersinkomen is belangrijk voor de hypotheekbeoordeling.</p>
        <p>Maar je kunt niet simpelweg zeggen:</p>
        <p>
          <strong>winst × een vaste factor = maximale hypotheek.</strong>
        </p>
        <p>
          De hypotheek wordt beoordeeld aan de hand van de geldende inkomens- en leennormen. Bij
          ondernemers moet bovendien eerst worden bepaald welk inkomen als toetsinkomen wordt
          gebruikt.
        </p>
        <p>
          Een hogere structurele winst kan dus leiden tot een hoger toetsinkomen, maar de maximale
          hypotheek volgt niet rechtstreeks uit één winstbedrag.
        </p>

        <h2>Hoeveel hypotheek kan ik krijgen met een eenmanszaak?</h2>
        <p>Een eenmanszaak sluit een hypotheek niet uit.</p>
        <p>
          Als ondernemer met een eenmanszaak wordt je ondernemersinkomen beoordeeld. Voor NHG geldt
          dat een zelfstandige ondernemer die minimaal 12 maanden actief is gebruikmaakt van de
          Inkomensverklaring Ondernemer voor het vaststellen van het toetsinkomen.
        </p>
        <p>De financiële historie van de onderneming speelt daarbij een belangrijke rol.</p>

        <h2>Hoeveel hypotheek kan ik krijgen als startende zzp&apos;er?</h2>
        <p>
          Als startende zzp&apos;er heb je mogelijk minder financiële historie dan een ondernemer
          die al meerdere jaren actief is.
        </p>
        <p>Dat betekent niet automatisch dat je geen hypotheek kunt krijgen.</p>
        <p>
          Voor NHG kunnen ondernemers die langer dan 12 maanden zelfstandig werken gebruikmaken van
          de Inkomensverklaring Ondernemer. Wanneer de onderneming jonger is dan drie jaar, kan de
          inkomensanalyse betrekking hebben op een kortere periode.
        </p>
        <p>
          Of je daadwerkelijk een bepaald bedrag kunt lenen, hangt vervolgens af van het
          vastgestelde toetsinkomen en je verdere financiële situatie. Meer over starters lees je
          op{' '}
          <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
            hypotheek voor startende zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Heeft een studieschuld invloed op je maximale hypotheek?</h2>
        <p>
          Ja, financiële verplichtingen kunnen invloed hebben op hoeveel je kunt lenen.
        </p>
        <p>
          Een studieschuld is daarom relevant bij een hypotheekaanvraag. Ook andere leningen en
          financiële verplichtingen kunnen worden meegenomen in de beoordeling.
        </p>
        <p>Hetzelfde geldt bijvoorbeeld voor bepaalde lease- of kredietverplichtingen.</p>
        <p>
          Geef bestaande financiële verplichtingen daarom altijd correct door bij een
          hypotheekaanvraag.
        </p>

        <h2>Telt het inkomen van mijn partner mee?</h2>
        <p>
          Heb je een partner met inkomen, dan kan dat inkomen onderdeel zijn van de
          hypotheekberekening.
        </p>
        <p>
          De precieze manier waarop het inkomen wordt meegenomen hangt af van de persoonlijke
          situatie en de geldende hypotheekregels.
        </p>
        <p>
          Bij een hypotheek voor een zzp&apos;er betekent dit dat je maximale hypotheek niet alleen
          afhankelijk hoeft te zijn van je eigen ondernemersinkomen.
        </p>

        <h2>Hoeveel hypotheek kan ik krijgen ten opzichte van de woningwaarde?</h2>
        <p>Naast je inkomen speelt ook de waarde van de woning een rol.</p>
        <p>
          In Nederland mag je in beginsel maximaal 100% van de woningwaarde financieren met een
          hypotheek. Voor bepaalde energiebesparende maatregelen gelden uitzonderingen op deze
          hoofdregel.
        </p>
        <p>
          Je inkomen bepaalt dus hoeveel hypotheek je op basis van de leennormen kunt dragen, terwijl
          de woningwaarde bepaalt hoeveel je voor de woning met een hypotheek kunt financieren.
        </p>

        <h2>Wat is de maximale hypotheek met NHG?</h2>
        <p>
          De NHG-grens voor 2026 is €470.000. Wanneer energiebesparende voorzieningen worden
          meegefinancierd, geldt een hogere grens van €498.200.
        </p>
        <p>
          Dit betekent niet dat iedere zzp&apos;er met een inkomen dat voldoende lijkt automatisch
          €470.000 kan lenen.
        </p>
        <p>
          De NHG-grens is een bovengrens voor het bedrag waarvoor NHG kan worden gebruikt. Je
          persoonlijke maximale hypotheek kan aanzienlijk lager liggen op basis van je inkomen en
          financiële situatie.
        </p>

        <h2>Waarom kun je als zzp&apos;er niet zomaar je maximale hypotheek berekenen?</h2>
        <p>
          Bij iemand in loondienst kan een hypotheekverstrekker vaak uitgaan van een relatief
          eenvoudig vast te stellen inkomen.
        </p>
        <p>Bij een ondernemer is de situatie complexer.</p>
        <p>Je inkomen kan bijvoorbeeld:</p>
        <ul>
          <li>per jaar verschillen;</li>
          <li>afhankelijk zijn van de winst van de onderneming;</li>
          <li>sterk veranderen door zakelijke kosten;</li>
          <li>beïnvloed worden door de ontwikkeling van de onderneming;</li>
          <li>gecombineerd worden met inkomen uit loondienst.</li>
        </ul>
        <p>Daarom wordt bij een ondernemer eerst het relevante toetsinkomen vastgesteld.</p>

        <h2>Welke documenten heb je nodig?</h2>
        <p>
          Welke documenten nodig zijn, verschilt per hypotheekaanvraag en geldverstrekker.
        </p>
        <p>
          Bij een ondernemersaanvraag kunnen financiële gegevens van je onderneming nodig zijn om
          het inkomen te kunnen beoordelen.
        </p>
        <p>
          Bij NHG wordt hiervoor bij ondernemers die minimaal 12 maanden actief zijn de
          Inkomensverklaring Ondernemer gebruikt. Deze verklaring wordt opgesteld door een
          geselecteerde rekenexpert en is volgens NHG zes maanden geldig.
        </p>
        <p>
          Het is daarom verstandig om je administratie en financiële gegevens goed op orde te hebben
          voordat je een hypotheek aanvraagt.
        </p>

        <h2>Hypotheek berekenen als zzp&apos;er</h2>
        <p>
          Wil je niet alleen weten hoe het werkt, maar direct een eerste berekening maken?
        </p>
        <p>
          Gebruik dan onze gratis{' '}
          <Link href="/tools/hypotheek-berekenen-zzp" className="text-warm-orange hover:underline">
            hypotheekcalculator voor zzp&apos;ers
          </Link>
          .
        </p>
        <p>
          Je vult je relevante inkomen, maandelijkse verplichtingen en een indicatieve rente in. De
          calculator geeft vervolgens een eerste indicatie van je maximale hypotheek.
        </p>
        <HypotheekCta label="Bereken je maximale hypotheek als zzp'er →" />
        <p>
          <strong>Let op:</strong> de berekening is vereenvoudigd en indicatief. De daadwerkelijke
          maximale hypotheek wordt bepaald door de geldverstrekker op basis van je volledige
          financiële situatie, de actuele leennormen en de geldende acceptatievoorwaarden.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Hoeveel hypotheek kan ik krijgen als zzp&apos;er?</h3>
        <p>
          Dat hangt af van je toetsinkomen, de hypotheekrente, financiële verplichtingen, de
          woningwaarde, een eventueel partnerinkomen en de actuele hypotheeknormen. Er is daarom
          geen vast hypotheekbedrag voor iedere zzp&apos;er.
        </p>
        <h3>Hoeveel hypotheek krijg ik met €40.000 inkomen?</h3>
        <p>
          Dat is niet alleen afhankelijk van je inkomen. Ook de rente, financiële verplichtingen,
          woningwaarde en overige omstandigheden spelen een rol. Een actuele hypotheekberekening is
          nodig om een indicatie te krijgen.
        </p>
        <h3>Hoeveel hypotheek krijg ik met €50.000 inkomen?</h3>
        <p>
          Ook hiervoor bestaat geen vast bedrag. De maximale hypotheek wordt berekend op basis van
          het inkomen en de overige relevante gegevens van je huishouden.
        </p>
        <h3>Hoeveel hypotheek krijg ik met €60.000 inkomen?</h3>
        <p>
          Een inkomen van €60.000 leidt niet automatisch tot één bepaalde maximale hypotheek. De
          actuele hypotheeknormen en je persoonlijke financiële situatie bepalen de uitkomst.
        </p>
        <h3>Telt mijn omzet mee voor mijn hypotheek?</h3>
        <p>
          Niet rechtstreeks. Bij een ondernemer wordt gekeken naar het inkomen dat volgens de
          geldende beoordelingsmethode als toetsinkomen kan worden gebruikt.
        </p>
        <h3>Telt mijn winst mee voor mijn hypotheek?</h3>
        <p>
          De financiële resultaten van je onderneming zijn relevant voor het bepalen van je
          ondernemersinkomen. De winst van één jaar is echter niet automatisch gelijk aan het
          inkomen waarmee de hypotheek wordt berekend.
        </p>
        <h3>Kan ik als startende zzp&apos;er een hypotheek krijgen?</h3>
        <p>
          Dat kan. Voor NHG kunnen ondernemers die langer dan 12 maanden zelfstandig werken
          gebruikmaken van de Inkomensverklaring Ondernemer. De uiteindelijke hypotheekmogelijkheden
          hangen af van het vastgestelde inkomen en de overige financiële situatie.
        </p>
        <h3>Kan ik met een eenmanszaak een hypotheek krijgen?</h3>
        <p>
          Ja. Een eenmanszaak sluit een hypotheek niet uit. Het inkomen uit de onderneming moet wel
          volgens de geldende regels worden beoordeeld.
        </p>
        <h3>Kan ik een hypotheek krijgen als mijn inkomen wisselt?</h3>
        <p>
          Dat kan. Wisselende inkomsten sluiten een hypotheek niet automatisch uit. De
          geldverstrekker beoordeelt welke inkomensgegevens en historie voor de aanvraag kunnen
          worden gebruikt.
        </p>

        <h2>Meer over een hypotheek als zzp&apos;er</h2>
        <p>Wil je meer weten over het aanvragen van een hypotheek als ondernemer? Bekijk ook:</p>
        <HypotheekHubLink />
        <ul>
          <li>
            <Link href="/blogs/hypotheek-als-zzper-hoe-werkt-het" className="text-warm-orange hover:underline">
              Hypotheek als zzp&apos;er: hoe werkt het?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
              Hypotheek voor startende zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
              Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
            </Link>
          </li>
          <li>
            <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Welk inkomen telt voor een hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
              Winst uit onderneming voor hypotheek
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
              Hypotheek met wisselend inkomen als zzp&apos;er
            </Link>
          </li>
          <li>
            <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Jaarcijfers nodig voor hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
              Hypotheek zonder 3 jaar cijfers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-eenmanszaak" className="text-warm-orange hover:underline">
              Hypotheek met een eenmanszaak
            </Link>
          </li>
        </ul>
        <p>
          Of bereken direct je{' '}
          <Link href="/tools/hypotheek-berekenen-zzp" className="text-warm-orange hover:underline">
            maximale hypotheek als zzp&apos;er
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    slug: 'hypotheek-met-eenmanszaak',
    relatedSlugs: [
      'hypotheek-als-zzper-hoe-werkt-het',
      'hoeveel-hypotheek-kan-ik-krijgen-als-zzper',
      'hypotheek-voor-startende-zzpers',
      'hoe-lang-zzper-zijn-voor-hypotheek',
      'welk-inkomen-telt-voor-hypotheek-als-zzper',
      'winst-uit-onderneming-voor-hypotheek',
      'hypotheek-met-wisselend-inkomen-als-zzper',
      'jaarcijfers-nodig-voor-hypotheek-als-zzper',
      'hypotheek-zzp-zonder-3-jaar-cijfers',
      'hypotheek-berekenen-als-zzper',
      'hypotheekadviseur-voor-zzpers',
      'zakelijke-rekening-zzp',
      'hoeveel-geld-apart-belasting-zzper',
    ],
    title: 'Hypotheek met een eenmanszaak',
    metaTitle: 'Hypotheek met een eenmanszaak: zo werkt het',
    excerpt:
      'Een hypotheek met een eenmanszaak aanvragen? Lees hoe je ondernemersinkomen wordt vastgesteld, welke documenten nodig zijn en hoe NHG werkt.',
    keywords:
      "hypotheek met een eenmanszaak, hypotheek eenmanszaak, hypotheek als ondernemer, hypotheek als zzp'er eenmanszaak, hypotheek aanvragen eenmanszaak, huis kopen met een eenmanszaak, inkomen eenmanszaak hypotheek, winst eenmanszaak hypotheek, hypotheek eenmanszaak 3 jaar, hypotheek eenmanszaak zonder 3 jaar",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Hypotheek%20met%20een%20eenmanszaak.jpg',
      alt: 'Hypotheek met een eenmanszaak: zo werkt het voor ondernemers en zzp\'ers.',
    },
    datePublished: '2026-09-15',
    dateModified: '2026-09-15',
    faq: [
      {
        question: 'Kan ik met een eenmanszaak een hypotheek krijgen?',
        answer:
          'Ja. Een eenmanszaak sluit een hypotheek niet uit. Je ondernemersinkomen moet wel volgens de geldende hypotheekregels worden vastgesteld.',
      },
      {
        question: 'Hoeveel jaar moet een eenmanszaak bestaan voor een hypotheek?',
        answer:
          'Voor de NHG-Inkomensverklaring Ondernemer moet je minimaal 12 maanden actief zijn als ondernemer.',
      },
      {
        question: 'Kan ik met een eenmanszaak een hypotheek krijgen zonder drie jaar cijfers?',
        answer:
          'Dat kan binnen de NHG-route voor ondernemers. Wanneer je onderneming nog geen drie jaar bestaat, kan de inkomensanalyse over een kortere periode worden uitgevoerd.',
      },
      {
        question: 'Telt mijn winst als inkomen voor mijn hypotheek?',
        answer:
          'De winst van je onderneming is relevant voor het bepalen van je ondernemersinkomen, maar de winst van één jaar is niet automatisch gelijk aan je toetsinkomen.',
      },
      {
        question: 'Telt mijn omzet mee voor mijn hypotheek?',
        answer:
          'Niet rechtstreeks. Omzet is niet hetzelfde als ondernemersinkomen. De financiële resultaten van je onderneming worden gebruikt om het relevante inkomen vast te stellen.',
      },
      {
        question: 'Kan ik met een eenmanszaak NHG krijgen?',
        answer:
          'Ja. Een eenmanszaak valt onder de ondernemingsvormen waarvoor binnen de NHG-regels een Inkomensverklaring Ondernemer kan worden gebruikt wanneer aan de voorwaarden wordt voldaan.',
      },
      {
        question: 'Kan ik als startende ondernemer een hypotheek krijgen?',
        answer:
          'Dat kan afhankelijk zijn van je situatie. Voor de NHG-Inkomensverklaring Ondernemer geldt minimaal 12 maanden ondernemerschap.',
      },
      {
        question: 'Is een hypotheek met een eenmanszaak moeilijker dan met loondienst?',
        answer:
          'De inkomensbeoordeling is anders omdat je inkomen uit een onderneming moet worden vastgesteld. Dat betekent niet automatisch dat een hypotheek moeilijker of onmogelijk is.',
      },
    ],
    content: (
      <>
        <p>
          Een <strong>hypotheek met een eenmanszaak</strong> aanvragen werkt anders dan met een vast
          inkomen uit loondienst. Als ondernemer moet eerst worden vastgesteld welk inkomen uit je
          onderneming voor de hypotheek kan worden gebruikt.
        </p>
        <p>
          Een eenmanszaak vormt op zichzelf geen belemmering om een hypotheek te krijgen. Ook als je
          als zzp&apos;er onderneemt via een eenmanszaak kun je een hypotheek aanvragen. Wel moet je
          je inkomen en de financiële situatie van je onderneming kunnen onderbouwen.
        </p>
        <p>
          In dit artikel lees je hoe een hypotheek met een eenmanszaak werkt, hoe het
          ondernemersinkomen wordt vastgesteld, hoeveel jaar je ondernemer moet zijn en welke
          documenten je nodig hebt.
        </p>
        <p>
          Wil je eerst een indicatie van je maximale hypotheek? Gebruik dan onze{' '}
          <Link href="/tools/hypotheek-berekenen-zzp" className="text-warm-orange hover:underline">
            hypotheekcalculator voor zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Kun je met een eenmanszaak een hypotheek krijgen?</h2>
        <p>Ja. Je kunt als eigenaar van een eenmanszaak een hypotheek aanvragen.</p>
        <p>
          Voor de hypotheekaanvraag wordt gekeken naar je inkomen als ondernemer. Daarbij is je
          omzet niet hetzelfde als je inkomen en wordt niet automatisch alleen naar je meest recente
          winst gekeken.
        </p>
        <p>
          De geldverstrekker moet bepalen welk inkomen voldoende onderbouwd en volgens de geldende
          regels geschikt is om als toetsinkomen te gebruiken.
        </p>
        <p>
          Voor hypotheken met NHG bestaat hiervoor de <strong>Inkomensverklaring Ondernemer</strong>.
          NHG noemt een eenmanszaak expliciet als voorbeeld van een zelfstandige onderneming waarvoor
          deze inkomensmethodiek wordt gebruikt.
        </p>

        <h2>Hoe werkt een hypotheek met een eenmanszaak?</h2>
        <p>
          Bij een hypotheekaanvraag met een eenmanszaak moet eerst je ondernemersinkomen worden
          vastgesteld.
        </p>
        <p>Daarna wordt, net als bij andere hypotheekaanvragen, gekeken naar onder andere:</p>
        <ul>
          <li>je toetsinkomen;</li>
          <li>de hypotheekrente;</li>
          <li>bestaande financiële verplichtingen;</li>
          <li>de waarde van de woning;</li>
          <li>het inkomen van een eventuele partner;</li>
          <li>de geldende hypotheeknormen.</li>
        </ul>
        <p>
          Rijksoverheid vermeldt dat de maximale hypotheek onder andere afhankelijk is van je
          inkomen en de waarde van de woning. Ook rente en andere financiële verplichtingen, zoals
          een studieschuld, persoonlijke lening of leasecontract, spelen een rol.
        </p>
        <p>De ondernemingsvorm is dus maar één onderdeel van de hypotheekaanvraag.</p>

        <h2>Hoe wordt het inkomen van een eenmanszaak bepaald?</h2>
        <p>
          Bij een eenmanszaak wordt gekeken naar de financiële resultaten van de onderneming en naar
          de ontwikkeling van het inkomen.
        </p>
        <p>
          Voor NHG wordt bij een ondernemer die minimaal 12 maanden actief is de{' '}
          <strong>Inkomensverklaring Ondernemer (IKV)</strong> gebruikt om het toetsinkomen vast te
          stellen.
        </p>
        <p>
          De Inkomensverklaring is een analyse van de onderneming. NHG geeft aan dat daarbij meestal
          naar de afgelopen drie jaar wordt gekeken, of naar een kortere periode wanneer de
          onderneming nog geen drie jaar bestaat.
        </p>
        <p>Je kunt daarom niet simpelweg je omzet invullen als hypotheekinkomen.</p>

        <h3>Omzet is niet hetzelfde als inkomen</h3>
        <p>Stel dat je een eenmanszaak hebt met €100.000 omzet.</p>
        <p>Dat betekent niet dat je voor je hypotheek een inkomen van €100.000 hebt.</p>
        <p>
          Van je omzet gaan bijvoorbeeld zakelijke kosten af. De financiële resultaten van de
          onderneming vormen vervolgens de basis voor het bepalen van het ondernemersinkomen volgens
          de relevante beoordelingsmethode.
        </p>
        <p>Ook kunnen correcties worden toegepast.</p>
        <p>
          Bij de NHG-systematiek wordt bijvoorbeeld rekening gehouden met factoren zoals de auto van
          de zaak en de financiële positie van de onderneming.
        </p>

        <h2>Moet je 3 jaar een eenmanszaak hebben?</h2>
        <p>Nee, drie jaar ondernemerschap is geen algemene voorwaarde.</p>
        <p>
          Voor NHG geldt dat een ondernemer die minimaal 12 maanden actief is de Inkomensverklaring
          Ondernemer kan gebruiken. Een eenmanszaak valt daar expliciet onder.
        </p>
        <p>
          De inkomensanalyse kan vervolgens betrekking hebben op drie jaar of korter wanneer de
          onderneming jonger is.
        </p>
        <p>
          Dat betekent dus niet dat je automatisch na 12 maanden een hypotheek van een bepaald
          bedrag kunt krijgen. Je inkomen en de rest van je financiële situatie moeten nog steeds
          voldoende zijn voor de hypotheek.
        </p>

        <h2>Hypotheek met een eenmanszaak zonder 3 jaar cijfers</h2>
        <p>Heb je nog geen drie volledige jaren aan cijfers?</p>
        <p>Dan betekent dat niet automatisch dat een hypotheek onmogelijk is.</p>
        <p>
          Binnen de NHG-route voor ondernemers kan de inkomensanalyse worden uitgevoerd over een
          kortere periode wanneer de onderneming nog geen drie jaar bestaat.
        </p>
        <p>
          Wel moet er voldoende informatie beschikbaar zijn om je inkomen en de financiële situatie
          van je onderneming te kunnen beoordelen.
        </p>
        <p>
          Als je onderneming bijvoorbeeld pas anderhalf jaar bestaat, zal de beoordeling daarom
          anders verlopen dan bij een onderneming die al tien jaar bestaat. Meer hierover op{' '}
          <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
            hypotheek zonder 3 jaar cijfers
          </Link>
          .
        </p>

        <h2>Hoe lang moet je een eenmanszaak hebben?</h2>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer moet je minimaal 12 maanden zelfstandig actief
          zijn.
        </p>
        <p>
          NHG omschrijft dit als minimaal 12 maanden een beroep of bedrijf uitoefenen. Een
          eenmanszaak valt onder deze categorie.
        </p>
        <p>
          De periode wordt daarbij niet simpelweg als drie kalenderjaren gezien. Het gaat om de duur
          van het ondernemerschap.
        </p>
        <p>
          Heb je je eenmanszaak bijvoorbeeld in juni 2025 ingeschreven, dan bereik je in juni 2026
          twaalf maanden ondernemerschap.
        </p>
        <p>
          Of je vervolgens daadwerkelijk een hypotheek kunt krijgen, hangt af van het vastgestelde
          toetsinkomen en je verdere financiële situatie.
        </p>

        <h2>Wat is een Inkomensverklaring Ondernemer?</h2>
        <p>
          De Inkomensverklaring Ondernemer is een verklaring waarmee het inkomen van een ondernemer
          voor een hypotheek met NHG wordt vastgesteld.
        </p>
        <p>
          Een geselecteerde rekenexpert analyseert de onderneming en stelt op basis daarvan het
          toetsinkomen vast.
        </p>
        <p>
          NHG vermeldt dat de verklaring kan worden aangevraagd via een hypotheekadviseur,
          geldverstrekker of een van de aangewezen rekenexperts. Na ontvangst van alle benodigde
          stukken wordt de verklaring volgens NHG binnen vijf werkdagen opgesteld. De verklaring is
          vervolgens zes maanden geldig.
        </p>
        <p>
          De Inkomensverklaring is dus geen simpel document waarop je zelf je gewenste inkomen
          invult. Het is een analyse van je onderneming.
        </p>

        <h2>Welke cijfers van je eenmanszaak zijn belangrijk?</h2>
        <p>
          Bij het beoordelen van ondernemersinkomen wordt gekeken naar de financiële ontwikkeling
          van de onderneming.
        </p>
        <p>Daarbij kunnen onder andere de volgende gegevens relevant zijn:</p>
        <ul>
          <li>omzet;</li>
          <li>fiscale winst;</li>
          <li>ontwikkeling van de winst;</li>
          <li>het lopende boekjaar;</li>
          <li>financiële positie van de onderneming;</li>
          <li>eventuele correctieposten.</li>
        </ul>
        <p>
          NHG geeft aan dat bij de inkomensbepaling onder andere wordt gekeken naar de historische
          inkomensontwikkeling en het lopende boekjaar. Wanneer het inkomen in het laatste jaar
          lager is dan het gemiddelde, kan het lagere laatste jaar als uitgangspunt gelden. Het
          actuele inkomen moet bovendien voldoende in lijn zijn met het gemiddelde.
        </p>
        <p>
          Dit is een belangrijke reden waarom alleen je beste jaarresultaat geen betrouwbare
          indicatie geeft van je maximale hypotheek.
        </p>

        <h2>Telt de winst van mijn eenmanszaak mee voor mijn hypotheek?</h2>
        <p>
          De winst uit je onderneming is relevant voor het bepalen van je ondernemersinkomen.
        </p>
        <p>
          Maar de winst van één jaar is niet automatisch hetzelfde als het toetsinkomen voor je
          hypotheek.
        </p>
        <p>
          Bij de NHG-methodiek voor een IB-ondernemer wordt de fiscale winst over de afgelopen drie
          jaar als basis gebruikt, waarbij het laatste jaar als maximum kan gelden. Daarnaast wordt
          naar het lopende boekjaar en andere relevante factoren gekeken.
        </p>
        <p>
          De exacte beoordeling hangt af van de toepasselijke normen en je persoonlijke situatie.
        </p>

        <h2>Telt mijn omzet van de eenmanszaak mee?</h2>
        <p>Je omzet is niet hetzelfde als je inkomen.</p>
        <p>
          Een hoge omzet kan samengaan met hoge zakelijke kosten en daardoor met een veel lagere
          winst. Voor de hypotheekbeoordeling is daarom vooral het inkomen uit de onderneming
          relevant, niet alleen het bedrag dat je aan klanten factureert.
        </p>
        <p>
          Als je bijvoorbeeld €120.000 omzet hebt maar €70.000 zakelijke kosten, zegt €120.000 omzet
          op zichzelf weinig over hoeveel hypotheek je kunt krijgen.
        </p>

        <h2>Hypotheek met een eenmanszaak en wisselende winst</h2>
        <p>Een wisselende winst sluit een hypotheek niet automatisch uit.</p>
        <p>
          Wel kan de ontwikkeling van je inkomen invloed hebben op het bedrag dat als toetsinkomen
          wordt vastgesteld.
        </p>
        <p>
          Bij NHG wordt onder andere gekeken naar de historische resultaten en het lopende boekjaar.
          Wanneer het inkomen in het laatste jaar lager is dan het gemiddelde, wordt volgens de
          NHG-systematiek het laatste jaar als uitgangspunt genomen.
        </p>
        <p>
          Een sterke daling van je winst kan daardoor gevolgen hebben voor je hypotheekmogelijkheden.
        </p>

        <h2>Wat als mijn winst juist stijgt?</h2>
        <p>
          Een stijgende winst betekent niet automatisch dat je maximale hypotheek direct gebaseerd
          wordt op je hoogste recente winst.
        </p>
        <p>
          De inkomensbeoordeling kijkt naar de financiële ontwikkeling van de onderneming en naar de
          bestendigheid van het inkomen.
        </p>
        <p>
          Bij NHG moet het actuele inkomen volgens de gepubliceerde criteria bovendien minstens in
          lijn zijn met het gemiddelde.
        </p>
        <p>
          Daarom is het verstandig om voor een hypotheekaanvraag uit te gaan van het inkomen dat
          volgens de geldende methodiek wordt vastgesteld, en niet van een eigen berekening op basis
          van één goed jaar.
        </p>

        <h2>Welke documenten heb je nodig voor een hypotheek met een eenmanszaak?</h2>
        <p>
          Welke documenten nodig zijn, hangt af van de hypotheekverstrekker en de gekozen route.
        </p>
        <p>
          Bij een hypotheek met NHG wordt voor het ondernemersinkomen de Inkomensverklaring
          Ondernemer gebruikt wanneer je als ondernemer minimaal 12 maanden actief bent.
        </p>
        <p>
          Voor het opstellen van deze verklaring zijn financiële gegevens van je onderneming nodig.
        </p>
        <p>
          Zorg daarom dat je administratie, belastinggegevens en financiële cijfers goed op orde
          zijn voordat je een hypotheekaanvraag start.
        </p>
        <p>
          Een hypotheekadviseur kan aangeven welke documenten in jouw specifieke situatie nodig
          zijn.
        </p>

        <h2>Kan ik met een eenmanszaak een hypotheek met NHG krijgen?</h2>
        <p>Ja, dat kan.</p>
        <p>
          Voor 2026 geldt bij NHG een maximale kostengrens van €470.000. Voor woningen waarbij
          energiebesparende voorzieningen worden meegefinancierd, geldt een grens van €498.200.
        </p>
        <p>
          Daarnaast moet je uiteraard aan de overige voorwaarden van NHG voldoen.
        </p>
        <p>
          De NHG-grens betekent bovendien niet dat je automatisch €470.000 kunt lenen. Je
          persoonlijke maximale hypotheek kan lager zijn op basis van je inkomen en financiële
          verplichtingen.
        </p>

        <h2>Hoeveel hypotheek kan ik krijgen met een eenmanszaak?</h2>
        <p>Er is geen vast bedrag dat bij iedere eenmanszaak hoort.</p>
        <p>De maximale hypotheek wordt onder andere bepaald door:</p>
        <ul>
          <li>je vastgestelde toetsinkomen;</li>
          <li>de hypotheekrente;</li>
          <li>bestaande financiële verplichtingen;</li>
          <li>het inkomen van je partner;</li>
          <li>de waarde van de woning;</li>
          <li>de actuele hypotheeknormen.</li>
        </ul>
        <p>
          Rijksoverheid geeft aan dat je in beginsel maximaal 100% van de waarde van de woning met
          een hypotheek kunt financieren. Daarnaast gelden inkomensnormen voor de maximale
          hypotheek.
        </p>
        <p>Wil je een eerste indicatie?</p>
        <HypotheekCta />
        <p>
          Meer over bedragen lees je in{' '}
          <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
            Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
          </Link>
          .
        </p>

        <h2>Eenmanszaak naast loondienst</h2>
        <p>
          Heb je naast je eenmanszaak ook inkomen uit loondienst? Dan kan het zijn dat beide
          inkomens worden beoordeeld.
        </p>
        <p>
          De manier waarop het inkomen uit loondienst en het inkomen uit je onderneming worden
          meegenomen, hangt af van je situatie en de toepasselijke hypotheekregels.
        </p>
        <p>NHG heeft hiervoor specifieke regels binnen de Inkomensverklaring Ondernemer.</p>
        <p>Geef daarom beide inkomsten door wanneer je een hypotheek aanvraagt.</p>

        <h2>Eenmanszaak starten en daarna een huis kopen</h2>
        <p>
          Ben je recent gestart met een eenmanszaak en wil je daarna een woning kopen?
        </p>
        <p>Dan is vooral de duur van je ondernemerschap relevant.</p>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer geldt minimaal 12 maanden ondernemerschap. De
          financiële analyse kan vervolgens over een kortere periode plaatsvinden als je onderneming
          nog geen drie jaar bestaat.
        </p>
        <p>
          Een recente start betekent dus niet automatisch dat een hypotheek uitgesloten is, maar je
          hebt wel minder financiële historie om je ondernemersinkomen mee te onderbouwen. Lees ook{' '}
          <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
            hypotheek voor startende zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Waar moet je als eigenaar van een eenmanszaak op letten?</h2>
        <p>
          Een hypotheekaanvraag als ondernemer begint niet bij het maximale bedrag dat je denkt te
          kunnen lenen.
        </p>
        <p>Begin met het in kaart brengen van:</p>
        <ol>
          <li>je financiële resultaten;</li>
          <li>de ontwikkeling van je inkomen;</li>
          <li>je huidige financiële verplichtingen;</li>
          <li>de waarde van de woning die je wilt kopen;</li>
          <li>de hypotheekrente;</li>
          <li>de voorwaarden van de geldverstrekker.</li>
        </ol>
        <p>Daarmee krijg je een realistischer beeld van je mogelijkheden.</p>

        <h2>Hypotheek berekenen met een eenmanszaak</h2>
        <p>Wil je weten hoeveel hypotheek je ongeveer kunt krijgen?</p>
        <p>
          Gebruik de{' '}
          <Link href="/tools/hypotheek-berekenen-zzp" className="text-warm-orange hover:underline">
            hypotheekcalculator voor zzp&apos;ers
          </Link>{' '}
          voor een eerste indicatie.
        </p>
        <p>
          Vul het inkomen in dat voor je hypotheekberekening relevant is en houd rekening met
          eventuele maandelijkse financiële verplichtingen.
        </p>
        <HypotheekCta label="Bereken je maximale hypotheek als zzp'er →" />
        <p>
          De uitkomst van een online calculator is slechts een indicatie. De daadwerkelijke maximale
          hypotheek wordt vastgesteld door de geldverstrekker op basis van je volledige situatie,
          documenten en de actuele acceptatievoorwaarden.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Kan ik met een eenmanszaak een hypotheek krijgen?</h3>
        <p>
          Ja. Een eenmanszaak sluit een hypotheek niet uit. Je ondernemersinkomen moet wel volgens de
          geldende hypotheekregels worden vastgesteld.
        </p>
        <h3>Hoeveel jaar moet een eenmanszaak bestaan voor een hypotheek?</h3>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer moet je minimaal 12 maanden actief zijn als
          ondernemer.
        </p>
        <h3>Kan ik met een eenmanszaak een hypotheek krijgen zonder drie jaar cijfers?</h3>
        <p>
          Dat kan binnen de NHG-route voor ondernemers. Wanneer je onderneming nog geen drie jaar
          bestaat, kan de inkomensanalyse over een kortere periode worden uitgevoerd.
        </p>
        <h3>Telt mijn winst als inkomen voor mijn hypotheek?</h3>
        <p>
          De winst van je onderneming is relevant voor het bepalen van je ondernemersinkomen, maar
          de winst van één jaar is niet automatisch gelijk aan je toetsinkomen.
        </p>
        <h3>Telt mijn omzet mee voor mijn hypotheek?</h3>
        <p>
          Niet rechtstreeks. Omzet is niet hetzelfde als ondernemersinkomen. De financiële resultaten
          van je onderneming worden gebruikt om het relevante inkomen vast te stellen.
        </p>
        <h3>Kan ik met een eenmanszaak NHG krijgen?</h3>
        <p>
          Ja. Een eenmanszaak valt onder de ondernemingsvormen waarvoor binnen de NHG-regels een
          Inkomensverklaring Ondernemer kan worden gebruikt wanneer aan de voorwaarden wordt
          voldaan.
        </p>
        <h3>Kan ik als startende ondernemer een hypotheek krijgen?</h3>
        <p>
          Dat kan afhankelijk zijn van je situatie. Voor de NHG-Inkomensverklaring Ondernemer geldt
          minimaal 12 maanden ondernemerschap.
        </p>
        <h3>Is een hypotheek met een eenmanszaak moeilijker dan met loondienst?</h3>
        <p>
          De inkomensbeoordeling is anders omdat je inkomen uit een onderneming moet worden
          vastgesteld. Dat betekent niet automatisch dat een hypotheek moeilijker of onmogelijk is.
        </p>

        <h2>Meer over hypotheken voor zzp&apos;ers</h2>
        <p>Wil je meer weten over een hypotheek als ondernemer? Bekijk ook:</p>
        <HypotheekHubLink />
        <ul>
          <li>
            <Link href="/blogs/hypotheek-als-zzper-hoe-werkt-het" className="text-warm-orange hover:underline">
              Hypotheek als zzp&apos;er: hoe werkt het?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
              Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
              Hypotheek voor startende zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
              Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
            </Link>
          </li>
          <li>
            <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Welk inkomen telt voor een hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
              Winst uit onderneming voor hypotheek
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
              Hypotheek met wisselend inkomen als zzp&apos;er
            </Link>
          </li>
          <li>
            <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Jaarcijfers nodig voor hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
              Hypotheek zonder 3 jaar cijfers
            </Link>
          </li>
        </ul>
        <p>
          Of maak direct een{' '}
          <Link href="/tools/hypotheek-berekenen-zzp" className="text-warm-orange hover:underline">
            eerste berekening van je maximale hypotheek als zzp&apos;er
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    slug: 'hypotheek-voor-startende-zzpers',
    relatedSlugs: [
      'hypotheek-als-zzper-hoe-werkt-het',
      'hoeveel-hypotheek-kan-ik-krijgen-als-zzper',
      'hypotheek-met-eenmanszaak',
      'hoe-lang-zzper-zijn-voor-hypotheek',
      'welk-inkomen-telt-voor-hypotheek-als-zzper',
      'winst-uit-onderneming-voor-hypotheek',
      'hypotheek-met-wisselend-inkomen-als-zzper',
      'jaarcijfers-nodig-voor-hypotheek-als-zzper',
      'hypotheek-zzp-zonder-3-jaar-cijfers',
      'hypotheek-berekenen-als-zzper',
      'hypotheekadviseur-voor-zzpers',
      'factureren-startende-zzper',
      'zakelijke-rekening-zzp',
    ],
    title: "Hypotheek voor startende zzp'ers",
    metaTitle: "Hypotheek voor startende zzp'ers: wat kan er?",
    excerpt:
      "Net gestart als zzp'er en een huis kopen? Lees wanneer je als starter een hypotheek kunt krijgen, hoe je inkomen wordt beoordeeld en welke cijfers nodig zijn.",
    keywords:
      "hypotheek voor startende zzp'ers, hypotheek startende zzp'er, hypotheek starter zzp, hypotheek als startende zzp'er, hypotheek zzp starter, hypotheek na 1 jaar zzp, hypotheek zonder 3 jaar zzp, hypotheek zzp zonder 3 jaar cijfers, huis kopen als startende zzp'er, hypotheek aanvragen als startende zzp'er",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Hypotheek%20voor%20startende%20zzpers.jpg',
      alt: "Hypotheek voor startende zzp'ers: wat kan er bij een recente start als ondernemer?",
    },
    datePublished: '2026-09-15',
    dateModified: '2026-09-15',
    faq: [
      {
        question: "Kan ik als startende zzp'er een hypotheek krijgen?",
        answer:
          'Ja. Dat kan onder voorwaarden. Voor NHG geldt voor de Inkomensverklaring Ondernemer minimaal 12 maanden ondernemerschap.',
      },
      {
        question: "Hoe lang moet ik zzp'er zijn voor een hypotheek?",
        answer:
          'Er is geen algemene eis van drie jaar. Voor de NHG-Inkomensverklaring Ondernemer geldt minimaal 12 maanden ondernemerschap.',
      },
      {
        question: 'Kan ik na 1 jaar zzp een hypotheek krijgen?',
        answer:
          'Dat kan. Na minimaal 12 maanden ondernemerschap kun je binnen de NHG-regels gebruikmaken van de Inkomensverklaring Ondernemer, mits je aan de overige voorwaarden voldoet.',
      },
      {
        question: 'Kan ik een hypotheek krijgen zonder drie jaar cijfers?',
        answer:
          'Dat kan. Bij een onderneming die korter dan drie jaar bestaat, kan de inkomensanalyse worden gebaseerd op de kortere beschikbare periode.',
      },
      {
        question: 'Kan ik als starter een hypotheek met NHG krijgen?',
        answer:
          'Ja, als je aan de NHG-voorwaarden voldoet. Voor ondernemers geldt onder andere de minimale periode van 12 maanden ondernemerschap voor de Inkomensverklaring Ondernemer.',
      },
      {
        question: 'Telt mijn omzet mee voor mijn hypotheek?',
        answer:
          'Niet rechtstreeks. Bij een ondernemer moet eerst worden bepaald welk inkomen volgens de toepasselijke methode als toetsinkomen kan worden gebruikt.',
      },
      {
        question: "Telt mijn winst als zzp'er mee voor mijn hypotheek?",
        answer:
          'De fiscale winst is relevant voor de inkomensbeoordeling van een ondernemer. De winst van één jaar is echter niet automatisch gelijk aan het toetsinkomen.',
      },
      {
        question:
          "Kan ik als startende zzp'er een hypotheek krijgen als mijn eerste jaar nog niet voorbij is?",
        answer:
          'Voor de NHG-Inkomensverklaring Ondernemer geldt minimaal 12 maanden ondernemerschap. Ben je korter dan 12 maanden ondernemer, dan kun je deze specifieke NHG-route dus nog niet gebruiken. Andere hypotheekmogelijkheden kunnen afhankelijk zijn van de geldverstrekker en je persoonlijke situatie.',
      },
      {
        question: 'Heeft een studieschuld invloed op mijn hypotheek als starter?',
        answer: 'Ja. Een studieschuld kan je maximale hypotheek verlagen.',
      },
    ],
    content: (
      <>
        <p>
          Ben je net gestart als zzp&apos;er en wil je een huis kopen? Dan vraag je je waarschijnlijk
          af of je al een hypotheek kunt krijgen.
        </p>
        <p>
          Een startende zzp&apos;er heeft meestal minder financiële historie dan iemand die al
          jarenlang ondernemer is. Toch betekent een recente start niet automatisch dat je geen
          hypotheek kunt krijgen.
        </p>
        <p>
          Voor een hypotheek moet vooral duidelijk worden welk inkomen uit je onderneming voor de
          hypotheek kan worden meegenomen. Daarnaast wordt gekeken naar onder andere je financiële
          verplichtingen, de waarde van de woning, de hypotheekrente en het inkomen van een
          eventuele partner.
        </p>
        <p>
          Voor hypotheken met NHG bestaat voor ondernemers de{' '}
          <strong>Inkomensverklaring Ondernemer (IKV)</strong>. Voor deze route moet je minimaal 12
          maanden zelfstandig actief zijn.
        </p>
        <p>
          Wil je alvast een eerste indicatie berekenen? Gebruik dan onze{' '}
          <Link href="/tools/hypotheek-berekenen-zzp" className="text-warm-orange hover:underline">
            hypotheekcalculator voor zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Kun je als startende zzp&apos;er een hypotheek krijgen?</h2>
        <p>Ja, dat kan.</p>
        <p>
          Hoe kort je onderneming bestaat, heeft wel invloed op de manier waarop je inkomen kan
          worden beoordeeld. Een startende ondernemer heeft immers minder historische cijfers dan
          iemand die al meerdere jaren een onderneming heeft.
        </p>
        <p>
          Voor NHG geldt dat een ondernemer die minimaal 12 maanden een beroep of bedrijf uitoefent
          gebruikmaakt van de Inkomensverklaring Ondernemer om het toetsinkomen vast te stellen. Een
          zelfstandige met bijvoorbeeld een eenmanszaak valt hieronder.
        </p>
        <p>
          Daarmee is <strong>drie jaar ondernemer zijn geen algemene voorwaarde</strong> voor een
          hypotheek.
        </p>
        <p>
          Wel moet je inkomen voldoende kunnen worden onderbouwd en moet je uiteraard ook aan de
          overige voorwaarden voor de hypotheek voldoen.
        </p>

        <h2>Hoe lang moet je zzp&apos;er zijn voor een hypotheek?</h2>
        <p>
          Er bestaat geen algemene regel dat je drie jaar zzp&apos;er moet zijn voordat je een
          hypotheek kunt krijgen.
        </p>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer geldt een minimale periode van{' '}
          <strong>12 maanden ondernemerschap</strong>. NHG kijkt daarbij naar de periode waarin je
          daadwerkelijk als ondernemer actief bent; het gaat niet simpelweg om drie volledige
          kalenderjaren.
        </p>
        <p>
          Ben je bijvoorbeeld in september 2025 gestart, dan bereik je in september 2026 twaalf
          maanden ondernemerschap.
        </p>
        <p>
          Vanaf dat moment kun je binnen de NHG-regels gebruikmaken van de Inkomensverklaring
          Ondernemer, mits je aan de overige voorwaarden voldoet.
        </p>
        <p>
          Dat betekent niet dat je na twaalf maanden automatisch een hypotheek kunt krijgen. Het
          vastgestelde toetsinkomen en je volledige financiële situatie bepalen hoeveel je uiteindelijk
          kunt lenen.
        </p>

        <h2>Kun je na 1 jaar zzp een hypotheek krijgen?</h2>
        <p>Dat kan.</p>
        <p>
          Voor NHG is minimaal 12 maanden ondernemerschap voldoende om gebruik te kunnen maken van
          de Inkomensverklaring Ondernemer.
        </p>
        <p>
          Bij een onderneming die nog geen drie jaar bestaat, kan de inkomensanalyse betrekking
          hebben op een kortere periode. Je hoeft dus niet per definitie drie volledige jaren aan
          ondernemerscijfers te hebben voordat je binnen deze route kunt worden beoordeeld.
        </p>
        <p>
          De beoordeling blijft wel afhankelijk van de financiële informatie die beschikbaar is en
          van de ontwikkeling van je onderneming.
        </p>

        <h2>Kun je een hypotheek krijgen zonder 3 jaar cijfers?</h2>
        <p>Ja, dat kan onder voorwaarden.</p>
        <p>
          De gedachte dat je als zzp&apos;er altijd drie volledige jaren cijfers nodig hebt, is te
          algemeen.
        </p>
        <p>
          Bij NHG kan een ondernemer vanaf minimaal 12 maanden ondernemerschap gebruikmaken van de
          Inkomensverklaring Ondernemer. Wanneer de onderneming nog geen drie jaar bestaat, wordt de
          beschikbare periode gebruikt voor de beoordeling.
        </p>
        <p>Je hoeft dus niet automatisch te wachten tot je drie jaar ondernemer bent.</p>
        <p>
          Wel geldt dat een kortere historie minder financiële informatie geeft over de ontwikkeling
          van je onderneming. Het inkomen moet daarom op basis van de beschikbare gegevens kunnen
          worden vastgesteld. Lees ook{' '}
          <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
            hypotheek zonder 3 jaar cijfers
          </Link>
          .
        </p>

        <h2>Hoe wordt het inkomen van een startende zzp&apos;er bepaald?</h2>
        <p>Dit is een van de belangrijkste onderdelen van de hypotheekaanvraag.</p>
        <p>Een hypotheekverstrekker kijkt niet simpelweg naar je omzet.</p>
        <p>
          Bij een ondernemer wordt gekeken naar het inkomen dat volgens de toepasselijke
          beoordelingsmethode als toetsinkomen kan worden gebruikt.
        </p>
        <p>
          Binnen de NHG-Inkomensverklaring Ondernemer wordt bij een IB-ondernemer onder andere
          gekeken naar de fiscale winst. Het toetskader gebruikt als basis het gemiddelde van de
          fiscale winst over de afgelopen drie jaar, met het laatste jaar als maximum. Wanneer een
          onderneming jonger is dan drie jaar, is uiteraard niet voor alle jaren informatie
          beschikbaar.
        </p>
        <p>
          Daarnaast wordt gekeken naar de ontwikkeling van de onderneming en het lopende boekjaar.
        </p>
        <p>
          Daarom is het niet verstandig om voor je hypotheek zelf simpelweg je huidige maandelijkse
          omzet of winst te vermenigvuldigen met een bepaald bedrag. Meer over inkomen lees je in{' '}
          <Link href="/blogs/hypotheek-als-zzper-hoe-werkt-het" className="text-warm-orange hover:underline">
            Hypotheek als zzp&apos;er: hoe werkt het?
          </Link>
          .
        </p>

        <h2>Wat als ik pas kort zzp&apos;er ben?</h2>
        <p>
          Hoe korter je onderneming bestaat, hoe minder historische informatie beschikbaar is.
        </p>
        <p>
          Ben je bijvoorbeeld 14 maanden geleden gestart, dan heb je niet dezelfde hoeveelheid
          historische bedrijfsgegevens als iemand die al vijf jaar ondernemer is.
        </p>
        <p>
          Dat betekent niet automatisch dat je geen hypotheek kunt krijgen. Binnen de NHG-route kan
          een ondernemer vanaf minimaal 12 maanden worden beoordeeld via de Inkomensverklaring
          Ondernemer.
        </p>
        <p>
          De beschikbare financiële gegevens worden dan gebruikt om het ondernemersinkomen vast te
          stellen.
        </p>

        <h2>Wat als mijn eerste jaar als zzp&apos;er goed is?</h2>
        <p>
          Een goed eerste jaar kan uiteraard relevant zijn voor je inkomensbeoordeling.
        </p>
        <p>
          Maar je kunt niet automatisch zeggen dat je volledige winst uit dat ene jaar als
          hypotheekinkomen wordt gebruikt.
        </p>
        <p>
          De inkomensbeoordeling heeft een vaste methodiek. Bij NHG wordt onder andere gekeken naar
          de fiscale winst, de beschikbare historie en het lopende boekjaar.
        </p>
        <p>
          Een hoge winst in een korte periode is daarom niet hetzelfde als een structureel
          toetsinkomen.
        </p>

        <h2>Wat als mijn inkomen als zzp&apos;er stijgt?</h2>
        <p>
          Een stijgend inkomen kan relevant zijn, maar ook hierbij wordt niet alleen naar je beste
          maand of beste jaar gekeken.
        </p>
        <p>
          De hypotheekverstrekker moet beoordelen welk inkomen voldoende bestendig is om als
          uitgangspunt voor de hypotheek te gebruiken.
        </p>
        <p>
          Voor NHG wordt bij de Inkomensverklaring Ondernemer onder andere gekeken naar de
          historische resultaten en het lopende boekjaar.
        </p>
        <p>
          Daarom is het belangrijk om bij een hypotheekaanvraag actuele financiële cijfers
          beschikbaar te hebben.
        </p>

        <h2>Wat als mijn inkomen als starter daalt?</h2>
        <p>Een dalend inkomen kan gevolgen hebben voor je hypotheekmogelijkheden.</p>
        <p>
          Wanneer je onderneming nog jong is, kan een verandering in je resultaten relatief belangrijk
          zijn omdat er minder historische informatie beschikbaar is.
        </p>
        <p>
          De geldverstrekker moet immers beoordelen welk inkomen op langere termijn verantwoord kan
          worden meegenomen.
        </p>
        <p>
          Een sterke daling van je bedrijfsresultaat kan daarom betekenen dat het inkomen waarmee
          wordt gerekend lager uitvalt dan je eerder had verwacht.
        </p>

        <h2>Kan ik als startende zzp&apos;er een hypotheek met NHG krijgen?</h2>
        <p>Ja, dat kan onder de voorwaarden van NHG.</p>
        <p>
          Voor 2026 is de NHG-grens €470.000. Voor woningen waarbij aanvullende energiebesparende
          voorzieningen worden meegefinancierd, ligt de grens op €498.200.
        </p>
        <p>
          Voor ondernemers geldt daarnaast de specifieke route via de Inkomensverklaring Ondernemer.
          Je moet daarvoor minimaal 12 maanden actief zijn als ondernemer.
        </p>
        <p>
          De NHG-grens betekent overigens niet dat je als starter automatisch dit bedrag kunt lenen.
          Je eigen maximale hypotheek kan veel lager liggen op basis van je toetsinkomen en
          financiële verplichtingen.
        </p>

        <h2>Welke documenten heb je nodig als startende zzp&apos;er?</h2>
        <p>
          Welke documenten nodig zijn, hangt af van je hypotheekaanvraag en geldverstrekker.
        </p>
        <p>
          Bij een NHG-aanvraag wordt het ondernemersinkomen via de Inkomensverklaring Ondernemer
          vastgesteld wanneer je aan de voorwaarden voldoet.
        </p>
        <p>
          Daarvoor moeten financiële gegevens van je onderneming beschikbaar zijn. De rekenexpert
          gebruikt deze informatie om je inkomen en de financiële situatie van je onderneming te
          analyseren.
        </p>
        <p>
          Zorg daarom dat je administratie goed is bijgehouden en dat je financiële cijfers
          beschikbaar zijn voordat je een hypotheekaanvraag start.
        </p>

        <h2>
          Kan ik als starter een hypotheek krijgen als mijn onderneming nog geen 3 jaar bestaat?
        </h2>
        <p>Ja.</p>
        <p>
          Een onderneming hoeft voor de NHG-Inkomensverklaring Ondernemer niet drie jaar te bestaan.
          De minimale duur is 12 maanden.
        </p>
        <p>
          Bestaat de onderneming korter dan drie jaar, dan kan de inkomensanalyse worden uitgevoerd
          op basis van de kortere beschikbare historie.
        </p>
        <p>
          De vraag is vervolgens niet alleen hoe lang je ondernemer bent, maar ook welk toetsinkomen
          uit de beschikbare informatie kan worden vastgesteld.
        </p>

        <h2>Kan ik als startende zzp&apos;er een hypotheek krijgen met een laag inkomen?</h2>
        <p>Een laag inkomen kan de maximale hypotheek beperken.</p>
        <p>
          De maximale hypotheek wordt onder andere bepaald door je inkomen, de rente en andere
          financiële verplichtingen. De wettelijke leennormen worden ieder jaar vastgesteld.
        </p>
        <p>
          Als startende ondernemer heb je daarnaast mogelijk minder financiële ruimte om een hoog
          toetsinkomen aan te tonen.
        </p>
        <p>
          Een lage winst betekent daarom doorgaans dat je minder kunt lenen dan wanneer je een hoger
          toetsinkomen hebt.
        </p>

        <h2>Heb je als startende zzp&apos;er een studieschuld?</h2>
        <p>Een studieschuld kan invloed hebben op je maximale hypotheek.</p>
        <p>
          Rijksoverheid geeft aan dat een studieschuld ervoor zorgt dat je minder kunt lenen. Bij de
          beoordeling wordt onder andere gekeken naar het bedrag dat je maandelijks aan DUO betaalt.
        </p>
        <p>
          Hetzelfde principe geldt voor andere financiële verplichtingen, zoals bepaalde leningen of
          leasecontracten.
        </p>
        <p>Geef deze verplichtingen altijd volledig op bij je hypotheekaanvraag.</p>

        <h2>Heb je als starter een partner met inkomen?</h2>
        <p>
          Heb je een partner die in loondienst werkt of ook ondernemer is, dan kan het inkomen van
          je partner onderdeel zijn van de hypotheekberekening.
        </p>
        <p>
          De precieze manier waarop het inkomen wordt meegenomen hangt af van de situatie en de
          geldende hypotheekregels.
        </p>
        <p>
          Je maximale hypotheek hoeft dus niet uitsluitend afhankelijk te zijn van het inkomen uit
          je jonge onderneming.
        </p>

        <h2>Hoeveel kan een startende zzp&apos;er lenen?</h2>
        <p>Er bestaat geen vast hypotheekbedrag voor startende zzp&apos;ers.</p>
        <p>De maximale hypotheek hangt onder andere af van:</p>
        <ul>
          <li>het vastgestelde toetsinkomen;</li>
          <li>de hypotheekrente;</li>
          <li>financiële verplichtingen;</li>
          <li>het inkomen van een eventuele partner;</li>
          <li>de waarde van de woning;</li>
          <li>de actuele wettelijke leennormen.</li>
        </ul>
        <p>
          Rijksoverheid vermeldt dat je in beginsel maximaal 100% van de waarde van de woning kunt
          lenen. Daarnaast gelden inkomensnormen voor de maximale hypotheek.
        </p>
        <p>Wil je een eerste indicatie?</p>
        <HypotheekCta />
        <p>
          Meer over bedragen lees je in{' '}
          <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
            Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
          </Link>
          .
        </p>

        <h2>Is een hypotheek als startende zzp&apos;er moeilijker?</h2>
        <p>
          Een hypotheekaanvraag als startende ondernemer vraagt om een andere inkomensbeoordeling
          dan een hypotheekaanvraag van iemand met een stabiel inkomen uit loondienst.
        </p>
        <p>
          Dat komt vooral doordat je onderneming nog weinig historische financiële gegevens heeft.
        </p>
        <p>Dat betekent echter niet automatisch dat een starter geen hypotheek kan krijgen.</p>
        <p>
          Voor NHG bestaat vanaf 12 maanden ondernemerschap een specifieke route via de
          Inkomensverklaring Ondernemer.
        </p>
        <p>
          De daadwerkelijke mogelijkheden hangen vervolgens af van het vastgestelde toetsinkomen en
          je volledige financiële situatie.
        </p>

        <h2>Wanneer kun je het beste een hypotheek aanvragen als startende zzp&apos;er?</h2>
        <p>
          Als je net bent gestart, kan het verstandig zijn om eerst inzicht te krijgen in je
          financiële situatie voordat je een woning gaat zoeken.
        </p>
        <p>Breng bijvoorbeeld in kaart:</p>
        <ol>
          <li>hoelang je al ondernemer bent;</li>
          <li>wat je financiële resultaten zijn;</li>
          <li>welk inkomen waarschijnlijk relevant is voor de hypotheek;</li>
          <li>welke financiële verplichtingen je hebt;</li>
          <li>hoeveel eigen geld je beschikbaar hebt;</li>
          <li>wat voor woning je zoekt.</li>
        </ol>
        <p>
          Na minimaal 12 maanden ondernemerschap kan binnen de NHG-regels de Inkomensverklaring
          Ondernemer worden gebruikt wanneer aan de voorwaarden wordt voldaan.
        </p>

        <h2>Hypotheek berekenen als startende zzp&apos;er</h2>
        <p>
          Wil je weten wat je huidige inkomen ongeveer betekent voor je maximale hypotheek?
        </p>
        <p>
          Gebruik onze{' '}
          <Link href="/tools/hypotheek-berekenen-zzp" className="text-warm-orange hover:underline">
            hypotheekcalculator voor zzp&apos;ers
          </Link>
          .
        </p>
        <HypotheekCta label="Bereken je maximale hypotheek als zzp'er →" />
        <p>
          De calculator geeft een eerste indicatie op basis van je inkomen, maandelijkse
          verplichtingen en een gekozen rente.
        </p>
        <p>
          De uitkomst is geen hypotheekadvies of offerte. De daadwerkelijke maximale hypotheek wordt
          bepaald door de geldverstrekker op basis van je volledige situatie, documenten en actuele
          acceptatievoorwaarden.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Kan ik als startende zzp&apos;er een hypotheek krijgen?</h3>
        <p>
          Ja. Dat kan onder voorwaarden. Voor NHG geldt voor de Inkomensverklaring Ondernemer
          minimaal 12 maanden ondernemerschap.
        </p>
        <h3>Hoe lang moet ik zzp&apos;er zijn voor een hypotheek?</h3>
        <p>
          Er is geen algemene eis van drie jaar. Voor de NHG-Inkomensverklaring Ondernemer geldt
          minimaal 12 maanden ondernemerschap.
        </p>
        <h3>Kan ik na 1 jaar zzp een hypotheek krijgen?</h3>
        <p>
          Dat kan. Na minimaal 12 maanden ondernemerschap kun je binnen de NHG-regels gebruikmaken
          van de Inkomensverklaring Ondernemer, mits je aan de overige voorwaarden voldoet.
        </p>
        <h3>Kan ik een hypotheek krijgen zonder drie jaar cijfers?</h3>
        <p>
          Dat kan. Bij een onderneming die korter dan drie jaar bestaat, kan de inkomensanalyse
          worden gebaseerd op de kortere beschikbare periode.
        </p>
        <h3>Kan ik als starter een hypotheek met NHG krijgen?</h3>
        <p>
          Ja, als je aan de NHG-voorwaarden voldoet. Voor ondernemers geldt onder andere de minimale
          periode van 12 maanden ondernemerschap voor de Inkomensverklaring Ondernemer.
        </p>
        <h3>Telt mijn omzet mee voor mijn hypotheek?</h3>
        <p>
          Niet rechtstreeks. Bij een ondernemer moet eerst worden bepaald welk inkomen volgens de
          toepasselijke methode als toetsinkomen kan worden gebruikt.
        </p>
        <h3>Telt mijn winst als zzp&apos;er mee voor mijn hypotheek?</h3>
        <p>
          De fiscale winst is relevant voor de inkomensbeoordeling van een ondernemer. De winst van
          één jaar is echter niet automatisch gelijk aan het toetsinkomen.
        </p>
        <h3>
          Kan ik als startende zzp&apos;er een hypotheek krijgen als mijn eerste jaar nog niet
          voorbij is?
        </h3>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer geldt minimaal 12 maanden ondernemerschap. Ben je
          korter dan 12 maanden ondernemer, dan kun je deze specifieke NHG-route dus nog niet
          gebruiken. Andere hypotheekmogelijkheden kunnen afhankelijk zijn van de geldverstrekker en
          je persoonlijke situatie.
        </p>
        <h3>Heeft een studieschuld invloed op mijn hypotheek als starter?</h3>
        <p>Ja. Een studieschuld kan je maximale hypotheek verlagen.</p>

        <h2>Meer over hypotheken voor zzp&apos;ers</h2>
        <p>Lees ook:</p>
        <HypotheekHubLink />
        <ul>
          <li>
            <Link href="/blogs/hypotheek-als-zzper-hoe-werkt-het" className="text-warm-orange hover:underline">
              Hypotheek als zzp&apos;er: hoe werkt het?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
              Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-eenmanszaak" className="text-warm-orange hover:underline">
              Hypotheek met een eenmanszaak
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
              Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
            </Link>
          </li>
          <li>
            <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Welk inkomen telt voor een hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
              Winst uit onderneming voor hypotheek
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
              Hypotheek met wisselend inkomen als zzp&apos;er
            </Link>
          </li>
          <li>
            <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Jaarcijfers nodig voor hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
              Hypotheek zonder 3 jaar cijfers
            </Link>
          </li>
        </ul>
        <p>
          Of bereken direct een{' '}
          <Link href="/tools/hypotheek-berekenen-zzp" className="text-warm-orange hover:underline">
            eerste indicatie van je maximale hypotheek als zzp&apos;er
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    slug: 'hoe-lang-zzper-zijn-voor-hypotheek',
    relatedSlugs: [
      'hypotheek-voor-startende-zzpers',
      'hypotheek-als-zzper-hoe-werkt-het',
      'hoeveel-hypotheek-kan-ik-krijgen-als-zzper',
      'hypotheek-met-eenmanszaak',
      'welk-inkomen-telt-voor-hypotheek-als-zzper',
      'winst-uit-onderneming-voor-hypotheek',
      'hypotheek-met-wisselend-inkomen-als-zzper',
      'jaarcijfers-nodig-voor-hypotheek-als-zzper',
      'hypotheek-zzp-zonder-3-jaar-cijfers',
      'hypotheek-berekenen-als-zzper',
      'hypotheekadviseur-voor-zzpers',
      'factureren-startende-zzper',
    ],
    title: "Hoe lang moet je zzp'er zijn voor een hypotheek?",
    excerpt:
      "Hoe lang moet je zzp'er zijn voor een hypotheek? Lees wanneer je als zzp'er een hypotheek kunt aanvragen en hoe je inkomen wordt beoordeeld.",
    keywords:
      "hoe lang zzp'er voor hypotheek, hoe lang moet je zzp'er zijn voor een hypotheek, hypotheek na 1 jaar zzp, hypotheek als zzp'er na 1 jaar, hypotheek zzp zonder 3 jaar, hypotheek zonder 3 jaar zzp, hoeveel jaar zzp voor hypotheek, hypotheek startende zzp'er, hypotheek zzp 2 jaar, hypotheek zzp 3 jaar",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Hoe%20lang%20moet%20je%20zzper%20zijn%20voor%20een%20hypotheek.jpg',
      alt: "Hoe lang moet je zzp'er zijn voor een hypotheek? Uitleg over 12 maanden NHG en 3 jaar cijfers.",
    },
    datePublished: '2026-09-16',
    dateModified: '2026-09-16',
    faq: [
      {
        question: 'Kun je na 1 jaar zzp een hypotheek krijgen?',
        answer:
          'Dat kan mogelijk. Voor NHG kan een ondernemer die minimaal 12 maanden actief is gebruikmaken van de Inkomensverklaring Ondernemer. Andere voorwaarden voor de hypotheek blijven van toepassing.',
      },
      {
        question: "Moet je 3 jaar zzp'er zijn voor een hypotheek?",
        answer:
          'Nee. Drie jaar ondernemerschap is geen algemene minimumvoorwaarde. Voor de NHG-route met een Inkomensverklaring Ondernemer geldt minimaal 12 maanden ondernemerschap.',
      },
      {
        question: "Kun je een hypotheek krijgen als je minder dan 3 jaar zzp'er bent?",
        answer:
          'Dat kan mogelijk. Bij NHG kan de Inkomensverklaring Ondernemer vanaf minimaal 12 maanden ondernemerschap worden gebruikt. De beschikbare financiële historie is dan wel korter.',
      },
      {
        question: 'Is 1 jaar zzp genoeg voor een hypotheek?',
        answer:
          'Een jaar ondernemerschap kan voldoende zijn om voor de NHG-Inkomensverklaring Ondernemer in aanmerking te komen, maar het betekent niet automatisch dat je een hypotheek krijgt of een bepaald bedrag kunt lenen.',
      },
      {
        question: "Hoeveel jaar cijfers heb je nodig als zzp'er?",
        answer:
          'Dat hangt af van de hypotheek en de gebruikte inkomensbeoordeling. Bij NHG wordt voor ondernemers gewerkt met de Inkomensverklaring Ondernemer. Voor een ondernemer met een kortere historie wordt de beschikbare periode gebruikt.',
      },
      {
        question: "Kun je als startende zzp'er een huis kopen?",
        answer:
          'Dat kan mogelijk. Hoe lang je onderneming bestaat is één van de factoren. Ook je inkomen, financiële verplichtingen, eventuele partnerinkomsten en de waarde van de woning spelen een rol.',
      },
    ],
    content: (
      <>
        <p>
          Hoe lang moet je zzp&apos;er zijn voordat je een hypotheek kunt krijgen? Veel mensen denken
          dat je minimaal drie jaar als zelfstandige moet werken voordat je een huis kunt kopen. Dat
          is niet als algemene regel juist.
        </p>
        <p>
          Voor ondernemers die een hypotheek met Nationale Hypotheek Garantie (NHG) willen aanvragen,
          geldt in 2026 dat je minimaal 12 maanden als ondernemer actief moet zijn om gebruik te
          kunnen maken van de Inkomensverklaring Ondernemer. Daarmee kan je ondernemersinkomen worden
          vastgesteld voor de hypotheekaanvraag.
        </p>
        <p>
          Dat betekent niet dat je na precies 12 maanden automatisch een hypotheek krijgt. Je
          inkomen, financiële verplichtingen, de waarde van de woning en de voorwaarden van de
          geldverstrekker spelen ook een rol.
        </p>

        <h2>Hoe lang moet je zzp&apos;er zijn voor een hypotheek?</h2>
        <p>
          Er bestaat geen algemene regel dat je drie jaar zzp&apos;er moet zijn voordat je een
          hypotheek kunt aanvragen.
        </p>
        <p>
          Voor een hypotheek met NHG kan een ondernemer die <strong>minimaal 12 maanden</strong>{' '}
          actief is gebruikmaken van de Inkomensverklaring Ondernemer. Dit geldt bijvoorbeeld voor
          een ondernemer met een eenmanszaak.
        </p>
        <p>
          De periode wordt daarbij in maanden bekeken en niet alleen aan de hand van volledige
          kalenderjaren.
        </p>
        <p>Ben je bijvoorbeeld:</p>
        <ul>
          <li>
            1 jaar en 2 maanden zzp&apos;er? Dan voldoe je aan de minimale periode van 12 maanden
            voor deze NHG-route.
          </li>
          <li>2 jaar zzp&apos;er? Dan kan deze route ook mogelijk zijn.</li>
          <li>
            3 jaar of langer zzp&apos;er? Dan heb je een langere ondernemershistorie, maar drie jaar
            ondernemerschap is niet als algemene minimumvoorwaarde vereist.
          </li>
        </ul>
        <p>
          Of je daadwerkelijk een hypotheek kunt krijgen, hangt vervolgens af van je toetsinkomen en
          je volledige financiële situatie.
        </p>

        <h2>Kun je na 1 jaar zzp al een hypotheek krijgen?</h2>
        <p>Ja, dat kan mogelijk zijn.</p>
        <p>
          Voor NHG geldt dat een ondernemer die minimaal 12 maanden een beroep of bedrijf uitoefent
          gebruik kan maken van de Inkomensverklaring Ondernemer om het toetsinkomen vast te stellen.
        </p>
        <p>
          Dat is vooral relevant voor startende zzp&apos;ers die nog geen drie volledige boekjaren
          hebben.
        </p>
        <p>
          Een jaar zzp&apos;er zijn betekent echter niet automatisch dat je een hypotheek kunt
          krijgen. De inkomensverklaring bepaalt welk inkomen voor de hypotheektoets kan worden
          gebruikt. Daarnaast wordt gekeken naar bijvoorbeeld schulden, andere financiële
          verplichtingen en de waarde van de woning.
        </p>

        <h2>Moet je 3 jaar zzp&apos;er zijn?</h2>
        <p>Nee, drie jaar zzp&apos;er zijn is geen algemene voorwaarde voor een hypotheek.</p>
        <p>
          De verwarring ontstaat waarschijnlijk doordat de beoordeling van ondernemersinkomen
          rekening kan houden met meerdere jaren aan financiële gegevens.
        </p>
        <p>
          Binnen het NHG-toetskader wordt bij IB-ondernemers bijvoorbeeld gekeken naar de fiscale
          winst over de afgelopen drie jaren, waarbij het laatste jaar als maximum geldt. Heb je nog
          geen drie jaar aan cijfers, dan is de beschikbare historie korter.
        </p>
        <p>
          Daarom zijn <strong>drie jaar ondernemer zijn</strong> en{' '}
          <strong>drie jaar financiële gegevens hebben</strong> twee verschillende dingen.
        </p>

        <h2>Hypotheek met minder dan 3 jaar cijfers</h2>
        <p>
          Ben je korter dan drie jaar ondernemer? Dan betekent dat niet automatisch dat een
          hypotheek uitgesloten is.
        </p>
        <p>
          Bij de NHG-route voor ondernemers wordt juist rekening gehouden met de duur van het
          ondernemerschap. De Inkomensverklaring Ondernemer kan vanaf minimaal 12 maanden
          ondernemerschap worden gebruikt.
        </p>
        <p>
          Hoe korter je onderneming bestaat, hoe minder historische informatie beschikbaar is. Dat
          kan invloed hebben op de manier waarop je inkomen wordt vastgesteld.
        </p>
        <p>
          Een korte ondernemershistorie betekent daarom niet automatisch &quot;geen hypotheek&quot;,
          maar je aanvraag kan wel anders worden beoordeeld dan die van een ondernemer met een
          langere historie. Meer hierover op{' '}
          <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
            hypotheek zonder 3 jaar cijfers
          </Link>
          .
        </p>

        <h2>Hypotheek na 1, 2 of 3 jaar zzp</h2>
        <h3>1 jaar zzp</h3>
        <p>
          Na minimaal 12 maanden ondernemerschap kan de NHG-route met een Inkomensverklaring
          Ondernemer beschikbaar zijn.
        </p>
        <p>
          Je hebt dan nog maar een beperkte ondernemershistorie. De hoogte en stabiliteit van je
          inkomen zijn daarom belangrijk bij de beoordeling.
        </p>
        <h3>2 jaar zzp</h3>
        <p>
          Na twee jaar heb je meer financiële historie opgebouwd. Toch blijft de beoordeling
          afhankelijk van je daadwerkelijke bedrijfsresultaten en de manier waarop het toetsinkomen
          wordt vastgesteld.
        </p>
        <h3>3 jaar zzp</h3>
        <p>
          Na drie jaar is er meer historische informatie beschikbaar. Binnen het NHG-toetskader kan
          bij de beoordeling van het ondernemersinkomen worden gekeken naar de fiscale winst over de
          afgelopen drie jaren, waarbij het laatste jaar als maximum geldt.
        </p>
        <p>
          Maar ook met drie jaar cijfers krijg je niet automatisch een hypotheek. Je maximale
          hypotheek hangt onder andere af van je inkomen, rente en financiële verplichtingen.
        </p>

        <h2>Waar kijkt de hypotheekverstrekker naar?</h2>
        <p>
          Hoe lang je al zzp&apos;er bent is maar één onderdeel van de beoordeling.
        </p>
        <p>Voor je maximale hypotheek zijn onder andere van belang:</p>
        <ul>
          <li>je toetsinkomen;</li>
          <li>de financiële resultaten van je onderneming;</li>
          <li>eventuele schulden en andere verplichtingen;</li>
          <li>het inkomen van een eventuele partner;</li>
          <li>de rente en rentevaste periode;</li>
          <li>de waarde van de woning.</li>
        </ul>
        <p>
          De overheid geeft aan dat de maximale hypotheek onder meer afhankelijk is van het inkomen
          en de waarde van de woning. Ook financiële verplichtingen zoals een persoonlijke lening,
          leasecontract of studieschuld kunnen de maximale hypotheek beïnvloeden.
        </p>

        <h2>Wat als je inkomen sterk is gestegen?</h2>
        <p>
          Een stijgend inkomen kan relevant zijn bij de beoordeling van je ondernemersinkomen.
        </p>
        <p>
          Het is daarom niet alleen belangrijk hoeveel jaar je onderneming bestaat, maar ook hoe je
          bedrijf zich financieel ontwikkelt.
        </p>
        <p>
          Een ondernemer die pas twee jaar bezig is maar een duidelijke financiële historie heeft,
          wordt niet simpelweg op dezelfde manier beoordeeld als iemand die al tien jaar ondernemer
          is.
        </p>
        <p>
          De precieze berekening van het toetsinkomen hangt af van het toepasselijke toetskader en
          de geldverstrekker.
        </p>

        <h2>Kun je als startende zzp&apos;er een hypotheek krijgen?</h2>
        <p>Ja, dat kan mogelijk zijn.</p>
        <p>
          Een startende ondernemer hoeft dus niet per definitie drie jaar te wachten. Voor NHG kan
          de Inkomensverklaring Ondernemer worden gebruikt wanneer je minimaal 12 maanden actief
          bent als ondernemer.
        </p>
        <p>
          Daarbij blijft je financiële situatie bepalend. De 12-maandenregel geeft toegang tot deze
          beoordelingsroute, maar is geen garantie dat je een bepaald hypotheekbedrag kunt lenen.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
            Hypotheek voor startende zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Geldt de 12-maandenregel bij iedere hypotheek?</h2>
        <p>Niet automatisch.</p>
        <p>
          De regel van minimaal 12 maanden die hierboven wordt beschreven, komt uit het NHG-toetskader
          voor de Inkomensverklaring Ondernemer.
        </p>
        <p>
          Heb je een hypotheek zonder NHG, dan kunnen geldverstrekkers hun eigen acceptatiebeleid en
          voorwaarden hanteren.
        </p>
        <p>Daarom moet je onderscheid maken tussen:</p>
        <ul>
          <li>
            <strong>NHG:</strong> specifieke regels voor het vaststellen van ondernemersinkomen;
          </li>
          <li>
            <strong>hypotheek zonder NHG:</strong> voorwaarden kunnen per geldverstrekker
            verschillen.
          </li>
        </ul>

        <h2>Hoeveel hypotheek kun je krijgen als je 1 jaar zzp&apos;er bent?</h2>
        <p>
          Dat is niet uitsluitend op basis van je aantal maanden als zzp&apos;er te bepalen.
        </p>
        <p>
          Je hypotheek wordt niet simpelweg berekend als bijvoorbeeld &quot;één keer je
          jaarwinst&quot;. Er wordt gekeken naar het inkomen dat voor de hypotheektoets wordt
          vastgesteld en naar andere factoren binnen de leennormen.
        </p>
        <p>
          Ook de woningwaarde speelt een rol. In het algemeen kun je maximaal 100% van de waarde van
          de woning financieren.
        </p>
        <p>Wil je zelf een eerste indicatie berekenen?</p>
        <HypotheekCta />
        <p>
          Meer over bedragen lees je in{' '}
          <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
            Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
          </Link>
          .
        </p>

        <h2>Welke documenten heb je nodig?</h2>
        <p>
          Voor een hypotheek als ondernemer kunnen financiële en bedrijfsgegevens nodig zijn om je
          inkomen vast te stellen.
        </p>
        <p>
          Welke documenten precies nodig zijn, hangt af van de gekozen hypotheek, de geldverstrekker
          en de gebruikte inkomensbeoordeling.
        </p>
        <p>
          Bij een NHG-aanvraag met een Inkomensverklaring Ondernemer wordt deze verklaring gebruikt
          om het ondernemersinkomen vast te stellen. De verklaring wordt opgesteld door een
          geselecteerde rekenexpert en is zes maanden geldig.
        </p>

        <h2>NHG voor zzp&apos;ers in 2026</h2>
        <p>
          In 2026 ligt de NHG-grens op €470.000. Voor een woning waarbij energiebesparende
          maatregelen worden meegefinancierd, ligt de grens op €498.200.
        </p>
        <p>
          De NHG-grens zegt overigens niets over hoeveel jij persoonlijk kunt lenen. Je maximale
          hypotheek wordt ook bepaald door je inkomen, verplichtingen en de waarde van de woning.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Kun je na 1 jaar zzp een hypotheek krijgen?</h3>
        <p>
          Dat kan mogelijk. Voor NHG kan een ondernemer die minimaal 12 maanden actief is
          gebruikmaken van de Inkomensverklaring Ondernemer. Andere voorwaarden voor de hypotheek
          blijven van toepassing.
        </p>
        <h3>Moet je 3 jaar zzp&apos;er zijn voor een hypotheek?</h3>
        <p>
          Nee. Drie jaar ondernemerschap is geen algemene minimumvoorwaarde. Voor de NHG-route met
          een Inkomensverklaring Ondernemer geldt minimaal 12 maanden ondernemerschap.
        </p>
        <h3>Kun je een hypotheek krijgen als je minder dan 3 jaar zzp&apos;er bent?</h3>
        <p>
          Dat kan mogelijk. Bij NHG kan de Inkomensverklaring Ondernemer vanaf minimaal 12 maanden
          ondernemerschap worden gebruikt. De beschikbare financiële historie is dan wel korter.
        </p>
        <h3>Is 1 jaar zzp genoeg voor een hypotheek?</h3>
        <p>
          Een jaar ondernemerschap kan voldoende zijn om voor de NHG-Inkomensverklaring Ondernemer in
          aanmerking te komen, maar het betekent niet automatisch dat je een hypotheek krijgt of een
          bepaald bedrag kunt lenen.
        </p>
        <h3>Hoeveel jaar cijfers heb je nodig als zzp&apos;er?</h3>
        <p>
          Dat hangt af van de hypotheek en de gebruikte inkomensbeoordeling. Bij NHG wordt voor
          ondernemers gewerkt met de Inkomensverklaring Ondernemer. Voor een ondernemer met een
          kortere historie wordt de beschikbare periode gebruikt.
        </p>
        <h3>Kun je als startende zzp&apos;er een huis kopen?</h3>
        <p>
          Dat kan mogelijk. Hoe lang je onderneming bestaat is één van de factoren. Ook je inkomen,
          financiële verplichtingen, eventuele partnerinkomsten en de waarde van de woning spelen
          een rol.
        </p>

        <h2>Bereken je maximale hypotheek als zzp&apos;er</h2>
        <p>
          Ben je al minimaal een jaar zzp&apos;er of heb je een kortere ondernemershistorie? Dan kun
          je eerst bekijken wat je op basis van je inkomen ongeveer zou kunnen lenen.
        </p>
        <HypotheekCta label="Bereken je hypotheek als zzp'er →" />
        <HypotheekHubLink />
        <p>Bekijk daarnaast:</p>
        <ul>
          <li>
            <Link href="/tools/hypotheek-zzp" className="text-warm-orange hover:underline">
              Hypotheek voor zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
              Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
              Hypotheek voor startende zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-eenmanszaak" className="text-warm-orange hover:underline">
              Hypotheek met een eenmanszaak
            </Link>
          </li>
          <li>
            <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
              Winst uit onderneming voor hypotheek
            </Link>
          </li>
          <li>
            <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Welk inkomen telt voor een hypotheek als zzp&apos;er?
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: 'welk-inkomen-telt-voor-hypotheek-als-zzper',
    relatedSlugs: [
      'hoe-lang-zzper-zijn-voor-hypotheek',
      'hypotheek-als-zzper-hoe-werkt-het',
      'hoeveel-hypotheek-kan-ik-krijgen-als-zzper',
      'hypotheek-met-eenmanszaak',
      'hypotheek-voor-startende-zzpers',
      'winst-uit-onderneming-voor-hypotheek',
      'hypotheek-met-wisselend-inkomen-als-zzper',
      'jaarcijfers-nodig-voor-hypotheek-als-zzper',
      'hypotheek-zzp-zonder-3-jaar-cijfers',
      'hypotheek-berekenen-als-zzper',
      'hypotheekadviseur-voor-zzpers',
    ],
    title: "Welk inkomen telt voor een hypotheek als zzp'er?",
    excerpt:
      "Welk inkomen telt voor je hypotheek als zzp'er? Lees hoe je toetsinkomen wordt vastgesteld en hoe winst, eerdere jaren en je actuele inkomen meetellen.",
    keywords:
      "welk inkomen telt voor hypotheek zzp, welk inkomen telt voor hypotheek als zzp'er, inkomen hypotheek zzp, toetsinkomen zzp, inkomen zzp hypotheek, winst zzp hypotheek, winst uit onderneming hypotheek, inkomen eenmanszaak hypotheek, hoeveel inkomen hypotheek zzp, hypotheek op basis van winst, ondernemersinkomen hypotheek",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Welk%20inkomen%20telt%20voor%20een%20hypotheek%20als%20zzp.jpg',
      alt: "Welk inkomen telt voor een hypotheek als zzp'er? Uitleg over toetsinkomen, winst en omzet.",
    },
    datePublished: '2026-09-16',
    dateModified: '2026-09-16',
    faq: [
      {
        question: 'Is mijn omzet mijn hypotheekinkomen?',
        answer:
          'Nee. Omzet is het bedrag dat je onderneming ontvangt voordat zakelijke kosten ervan worden afgetrokken. Voor een hypotheek is het ondernemersinkomen/toetsinkomen relevant.',
      },
      {
        question: 'Is mijn winst mijn hypotheekinkomen?',
        answer:
          'Je winst vormt een belangrijk onderdeel van de beoordeling, maar winst is niet automatisch hetzelfde als het uiteindelijke toetsinkomen.',
      },
      {
        question: 'Wordt gekeken naar mijn laatste jaar?',
        answer:
          'Ja, het laatste boekjaar is belangrijk. Binnen het NHG-toetskader kan het laatste jaar als uitgangspunt gelden wanneer het inkomen lager is dan het gemiddelde. Ook het lopende boekjaar wordt beoordeeld.',
      },
      {
        question: 'Worden drie jaren meegenomen?',
        answer:
          'Bij de NHG-Inkomensverklaring Ondernemer wordt meestal naar de afgelopen drie jaar gekeken, of korter als je onderneming jonger is.',
      },
      {
        question: 'Kan ik een hypotheek krijgen met één jaar ondernemerschap?',
        answer:
          'Dat kan mogelijk. Voor NHG kan de Inkomensverklaring Ondernemer worden gebruikt wanneer je minimaal 12 maanden actief bent als ondernemer. Dit betekent niet dat je automatisch een hypotheek krijgt; je volledige financiële situatie wordt beoordeeld.',
      },
      {
        question: 'Telt mijn partnerinkomen mee?',
        answer: 'Dat kan, afhankelijk van de situatie en de geldende hypotheekregels.',
      },
      {
        question: 'Telt een studieschuld mee?',
        answer:
          'Ja. Een studieschuld kan je maximale hypotheek verlagen. De manier waarop hiermee wordt gerekend hangt af van de geldende regels.',
      },
    ],
    content: (
      <>
        <p>
          Als zzp&apos;er werkt je hypotheekberekening anders dan wanneer je in loondienst bent. Je
          hebt geen vast salaris dat eenvoudig van een loonstrook kan worden overgenomen. Voor een
          hypotheek moet daarom eerst worden bepaald welk{' '}
          <strong>ondernemersinkomen als toetsinkomen</strong> mag worden gebruikt.
        </p>
        <p>
          Daarbij wordt onder andere gekeken naar de financiële resultaten van je onderneming, je
          ondernemershistorie en je actuele inkomen.
        </p>
        <p>
          Voor een hypotheek met NHG kan het ondernemersinkomen worden vastgesteld met een{' '}
          <strong>Inkomensverklaring Ondernemer</strong>. Daarbij wordt meestal gekeken naar de
          afgelopen drie jaar, of naar een kortere periode als je onderneming nog geen drie jaar
          bestaat. Op basis daarvan wordt het toetsinkomen vastgesteld.
        </p>

        <h2>Welk inkomen telt voor een hypotheek als zzp&apos;er?</h2>
        <p>Voor een hypotheek telt niet simpelweg je omzet als inkomen.</p>
        <p>
          Bij een ondernemer wordt gekeken naar het inkomen dat uit de onderneming beschikbaar is en
          volgens de geldende regels als <strong>toetsinkomen</strong> kan worden meegenomen.
        </p>
        <p>
          Bij de NHG-Inkomensverklaring Ondernemer wordt de financiële situatie van de onderneming
          uitgebreid geanalyseerd. Daarbij wordt onder andere gekeken naar de resultaten van eerdere
          boekjaren en het lopende boekjaar.
        </p>
        <p>Daarom zijn deze begrippen belangrijk:</p>
        <ul>
          <li>omzet;</li>
          <li>zakelijke kosten;</li>
          <li>winst;</li>
          <li>ondernemersinkomen;</li>
          <li>toetsinkomen.</li>
        </ul>
        <p>
          Je omzet is dus niet hetzelfde als het inkomen waarmee je hypotheek wordt berekend.
        </p>

        <h2>Telt je omzet mee voor je hypotheek?</h2>
        <p>Niet rechtstreeks.</p>
        <p>
          Stel dat je als zzp&apos;er €100.000 omzet per jaar hebt. Dat betekent niet automatisch
          dat €100.000 als inkomen voor je hypotheek wordt gezien.
        </p>
        <p>
          Van je omzet betaal je bijvoorbeeld zakelijke kosten. Het financiële resultaat van je
          onderneming is daarom veel relevanter voor de beoordeling dan alleen je omzet.
        </p>
        <p>Een eenvoudige voorstelling is:</p>
        <p>
          <strong>Omzet − zakelijke kosten = resultaat/winst</strong>
        </p>
        <p>
          Maar ook je winst is niet automatisch één-op-één gelijk aan het uiteindelijke toetsinkomen.
          Bij de inkomensbeoordeling kunnen verschillende correcties en voorwaarden worden
          toegepast.
        </p>

        <h2>Telt je winst als inkomen voor je hypotheek?</h2>
        <p>
          Je winst uit onderneming vormt een belangrijk onderdeel van de beoordeling van je
          ondernemersinkomen.
        </p>
        <p>
          Bij de NHG-Inkomensverklaring Ondernemer wordt onder andere gekeken naar de fiscale winst.
          Het toetskader houdt rekening met meerdere jaren en met het actuele resultaat.
        </p>
        <p>
          Bij een IB-ondernemer wordt bijvoorbeeld gekeken naar de fiscale winst over de beschikbare
          jaren. Heb je drie jaar cijfers, dan wordt de historische ontwikkeling meegenomen. Heb je
          een jongere onderneming, dan wordt gekeken naar de kortere beschikbare historie.
        </p>
        <p>Daarom kun je niet simpelweg zeggen:</p>
        <blockquote>
          <p>&quot;Mijn winst is €60.000, dus mijn hypotheekinkomen is €60.000.&quot;</p>
        </blockquote>
        <p>
          Het exacte toetsinkomen moet volgens het toepasselijke toetskader worden vastgesteld.
        </p>

        <h2>Wat is toetsinkomen?</h2>
        <p>
          Het <strong>toetsinkomen</strong> is het inkomen dat voor de hypotheekberekening wordt
          gebruikt.
        </p>
        <p>
          Voor iemand in loondienst is dat vaak relatief eenvoudig vast te stellen aan de hand van
          salarisgegevens. Voor een ondernemer is een uitgebreidere inkomensbeoordeling nodig.
        </p>
        <p>
          Bij NHG kan daarvoor de Inkomensverklaring Ondernemer worden gebruikt. Een onafhankelijke
          rekenexpert analyseert de onderneming en stelt vervolgens het toetsinkomen vast.
        </p>
        <p>
          Het toetsinkomen is vervolgens één van de belangrijkste gegevens bij het bepalen van je
          maximale hypotheek.
        </p>

        <h2>Hoe wordt het inkomen van een zzp&apos;er berekend?</h2>
        <p>
          Bij een NHG-aanvraag met een Inkomensverklaring Ondernemer wordt gekeken naar de
          financiële historie van de onderneming.
        </p>
        <p>De analyse gaat meestal over:</p>
        <ol>
          <li>de resultaten van eerdere boekjaren;</li>
          <li>het meest recente boekjaar;</li>
          <li>het lopende boekjaar;</li>
          <li>de ontwikkeling van het inkomen;</li>
          <li>bepaalde correctieposten;</li>
          <li>de financiële positie van de onderneming.</li>
        </ol>
        <p>De exacte berekening volgt het actuele NHG-toetskader.</p>
        <p>Het gaat dus niet alleen om één bedrag dat je zelf opgeeft.</p>

        <h2>Tellen meerdere jaren inkomen mee?</h2>
        <p>Ja.</p>
        <p>
          Bij de NHG-Inkomensverklaring Ondernemer wordt meestal gekeken naar de afgelopen drie jaar.
          Bestaat je onderneming korter dan drie jaar, dan wordt gekeken naar de kortere beschikbare
          periode.
        </p>
        <p>Dat betekent dat je ondernemershistorie belangrijk is.</p>
        <p>Een voorbeeld:</p>
        <ul>
          <li>jaar 1: €35.000 winst</li>
          <li>jaar 2: €45.000 winst</li>
          <li>jaar 3: €55.000 winst</li>
        </ul>
        <p>
          Deze ontwikkeling geeft andere informatie dan wanneer je resultaten bijvoorbeeld €55.000,
          €45.000 en €35.000 zijn.
        </p>
        <p>De ontwikkeling van je onderneming wordt daarom meegenomen in de beoordeling.</p>

        <h2>Telt het laatste jaar het zwaarst?</h2>
        <p>Het laatste jaar is belangrijk.</p>
        <p>
          Binnen het NHG-toetskader geldt onder meer dat wanneer het inkomen in het laatste jaar
          lager is dan het gemiddelde inkomen, het laatste jaar als uitgangspunt kan gelden. Ook
          wordt gekeken naar het lopende boekjaar. Het actuele inkomen moet daarbij minimaal in lijn
          zijn met het gemiddelde.
        </p>
        <p>
          Daarmee wordt voorkomen dat een tijdelijk hoger inkomen uit eerdere jaren automatisch
          leidt tot een te hoog toetsinkomen wanneer je inkomen inmiddels duidelijk is gedaald.
        </p>

        <h2>Wat als je inkomen stijgt?</h2>
        <p>
          Een stijgend inkomen kan een positieve ontwikkeling van je onderneming laten zien, maar
          het betekent niet automatisch dat je volledige actuele winst als toetsinkomen wordt
          gebruikt.
        </p>
        <p>
          Bij de beoordeling wordt gekeken naar de beschikbare financiële gegevens en de
          ontwikkeling van de onderneming. Ook het lopende boekjaar kan daarbij worden betrokken.
        </p>
        <p>Heb je bijvoorbeeld:</p>
        <ul>
          <li>jaar 1: €30.000 winst;</li>
          <li>jaar 2: €40.000 winst;</li>
          <li>jaar 3: €55.000 winst;</li>
        </ul>
        <p>dan is het relevant dat je onderneming duidelijk groeit.</p>
        <p>
          Het uiteindelijke toetsinkomen wordt echter volgens het geldende toetskader vastgesteld.
        </p>

        <h2>Wat als je inkomen daalt?</h2>
        <p>Een dalend inkomen kan juist gevolgen hebben voor het toetsinkomen.</p>
        <p>
          Als je laatste boekjaar duidelijk minder goed was dan eerdere jaren, wordt niet automatisch
          uitgegaan van het hogere historische gemiddelde. Binnen het NHG-toetskader geldt dat bij
          een lager inkomen in het laatste jaar het laatste jaar als uitgangspunt kan gelden. Ook
          moet het lopende boekjaar worden beoordeeld.
        </p>
        <p>Dat is belangrijk als je onderneming sterk wisselende resultaten heeft.</p>

        <h2>Telt het lopende jaar mee?</h2>
        <p>Ja.</p>
        <p>
          De hypotheekbeoordeling kijkt niet uitsluitend naar oude jaarcijfers. Bij de
          NHG-Inkomensverklaring Ondernemer wordt ook gekeken naar het lopende boekjaar.
        </p>
        <p>
          Dit is vooral relevant wanneer je huidige situatie sterk afwijkt van eerdere jaren.
        </p>
        <p>Een onderneming kan bijvoorbeeld:</p>
        <ul>
          <li>sterk gegroeid zijn;</li>
          <li>juist minder omzet hebben;</li>
          <li>hogere kosten hebben gekregen;</li>
          <li>een grote opdrachtgever zijn kwijtgeraakt;</li>
          <li>of structureel meer winst maken.</li>
        </ul>
        <p>
          De actuele situatie kan daardoor relevant zijn voor het vaststellen van het toetsinkomen.
        </p>

        <h2>Telt je salaris uit loondienst ook mee?</h2>
        <p>Dat kan.</p>
        <p>
          Sommige ondernemers combineren hun onderneming met een baan in loondienst. In dat geval
          kunnen inkomsten uit loondienst en ondernemerschap naast elkaar worden beoordeeld.
        </p>
        <p>
          NHG geeft bijvoorbeeld aan dat een combinatie van inkomsten uit dienstbetrekking en
          zelfstandig ondernemerschap mogelijk is binnen de inkomensbeoordeling.
        </p>
        <p>
          Of en hoe het salaris wordt meegenomen, hangt af van de situatie en de geldende
          voorwaarden.
        </p>

        <h2>Telt inkomen van je partner mee?</h2>
        <p>
          Als je samen een hypotheek aanvraagt, kan het inkomen van je partner onderdeel zijn van de
          hypotheekberekening.
        </p>
        <p>
          Het inkomen van de ondernemer wordt dan afzonderlijk vastgesteld en gecombineerd met het
          inkomen dat volgens de geldende regels van de partner mag worden meegenomen.
        </p>
        <p>
          De maximale hypotheek wordt uiteindelijk niet alleen bepaald door het ondernemersinkomen.
          Ook andere financiële verplichtingen en de waarde van de woning spelen een rol.
        </p>

        <h2>Tellen zakelijke kosten mee?</h2>
        <p>Zakelijke kosten hebben indirect invloed op je hypotheekinkomen.</p>
        <p>
          Hogere zakelijke kosten verlagen doorgaans het resultaat van je onderneming. Omdat de
          financiële resultaten van de onderneming onderdeel zijn van de inkomensbeoordeling, kunnen
          zakelijke kosten daarmee indirect invloed hebben op het toetsinkomen.
        </p>
        <p>
          Je hoeft zakelijke kosten dus niet als een aparte maandelijkse hypotheeklast op te geven.
          Het effect zit in de financiële resultaten van de onderneming.
        </p>

        <h2>Wat als je weinig winst maakt maar veel omzet?</h2>
        <p>
          Veel omzet betekent niet automatisch dat je een hoog hypotheekinkomen hebt.
        </p>
        <p>Een ondernemer met:</p>
        <p>
          <strong>€150.000 omzet en €100.000 kosten</strong>
        </p>
        <p>heeft financieel een heel andere onderneming dan iemand met:</p>
        <p>
          <strong>€80.000 omzet en €20.000 kosten.</strong>
        </p>
        <p>
          Alleen naar omzet kijken zou daarom een vertekend beeld geven.
        </p>
        <p>
          Voor de hypotheek is vooral relevant welk inkomen volgens de inkomensbeoordeling uit de
          onderneming voortkomt.
        </p>

        <h2>Welk inkomen telt als je minder dan 3 jaar zzp&apos;er bent?</h2>
        <p>
          Als je onderneming nog geen drie jaar bestaat, betekent dat niet automatisch dat je geen
          hypotheek kunt krijgen.
        </p>
        <p>
          Bij NHG kan een ondernemer die minimaal 12 maanden actief is gebruikmaken van de
          Inkomensverklaring Ondernemer. Bij een jongere onderneming wordt de beschikbare periode
          beoordeeld in plaats van automatisch drie volledige jaren te verlangen.
        </p>
        <p>Je hebt dan simpelweg minder historische cijfers beschikbaar.</p>
        <p>
          Dat maakt de ontwikkeling van je onderneming en je actuele financiële situatie extra
          relevant.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
            Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
          </Link>
        </p>

        <h2>Welk inkomen telt bij een eenmanszaak?</h2>
        <p>
          Heb je een eenmanszaak, dan wordt je ondernemersinkomen beoordeeld op basis van de
          financiële gegevens van je onderneming.
        </p>
        <p>Je omzet is daarbij niet hetzelfde als je hypotheekinkomen.</p>
        <p>
          Bij een NHG-aanvraag wordt via de Inkomensverklaring Ondernemer het toetsinkomen
          vastgesteld op basis van het geldende toetskader.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-met-eenmanszaak" className="text-warm-orange hover:underline">
            Hypotheek met een eenmanszaak: zo werkt het
          </Link>
        </p>

        <h2>Heeft een hoge winst altijd een hogere hypotheek tot gevolg?</h2>
        <p>Niet automatisch.</p>
        <p>
          Een hoger toetsinkomen kan in principe meer ruimte geven binnen de hypotheeknormen, maar
          je maximale hypotheek wordt ook door andere factoren bepaald.
        </p>
        <p>Denk aan:</p>
        <ul>
          <li>rente;</li>
          <li>andere leningen;</li>
          <li>studieschuld;</li>
          <li>leaseverplichtingen;</li>
          <li>partnerinkomen;</li>
          <li>de waarde van de woning;</li>
          <li>de geldende leennormen.</li>
        </ul>
        <p>
          De overheid geeft aan dat de maximale hypotheek onder andere afhankelijk is van inkomen,
          schulden en leningen.
        </p>
        <p>
          Je kunt daarom niet alleen op basis van je winst bepalen hoeveel je kunt lenen. Lees ook{' '}
          <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
            Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
          </Link>
          .
        </p>

        <h2>Welk bedrag moet je invullen bij een hypotheekcalculator?</h2>
        <p>Gebruik niet zomaar je omzet als inkomen.</p>
        <p>
          Bij een calculator voor zzp&apos;ers is het belangrijk om te weten welk inkomen als{' '}
          <strong>toetsinkomen</strong> wordt gebruikt. Als je al een Inkomensverklaring Ondernemer
          hebt, is het vastgestelde toetsinkomen het meest relevante bedrag voor de
          hypotheekberekening.
        </p>
        <p>
          Heb je die verklaring nog niet, dan kan een eenvoudige calculator alleen een indicatie
          geven.
        </p>
        <HypotheekCta />

        <h2>Veelgestelde vragen</h2>
        <h3>Is mijn omzet mijn hypotheekinkomen?</h3>
        <p>
          Nee. Omzet is het bedrag dat je onderneming ontvangt voordat zakelijke kosten ervan worden
          afgetrokken. Voor een hypotheek is het ondernemersinkomen/toetsinkomen relevant.
        </p>
        <h3>Is mijn winst mijn hypotheekinkomen?</h3>
        <p>
          Je winst vormt een belangrijk onderdeel van de beoordeling, maar winst is niet automatisch
          hetzelfde als het uiteindelijke toetsinkomen.
        </p>
        <h3>Wordt gekeken naar mijn laatste jaar?</h3>
        <p>
          Ja, het laatste boekjaar is belangrijk. Binnen het NHG-toetskader kan het laatste jaar als
          uitgangspunt gelden wanneer het inkomen lager is dan het gemiddelde. Ook het lopende
          boekjaar wordt beoordeeld.
        </p>
        <h3>Worden drie jaren meegenomen?</h3>
        <p>
          Bij de NHG-Inkomensverklaring Ondernemer wordt meestal naar de afgelopen drie jaar gekeken,
          of korter als je onderneming jonger is.
        </p>
        <h3>Kan ik een hypotheek krijgen met één jaar ondernemerschap?</h3>
        <p>
          Dat kan mogelijk. Voor NHG kan de Inkomensverklaring Ondernemer worden gebruikt wanneer je
          minimaal 12 maanden actief bent als ondernemer. Dit betekent niet dat je automatisch een
          hypotheek krijgt; je volledige financiële situatie wordt beoordeeld.
        </p>
        <h3>Telt mijn partnerinkomen mee?</h3>
        <p>Dat kan, afhankelijk van de situatie en de geldende hypotheekregels.</p>
        <h3>Telt een studieschuld mee?</h3>
        <p>
          Ja. Een studieschuld kan je maximale hypotheek verlagen. De manier waarop hiermee wordt
          gerekend hangt af van de geldende regels.
        </p>

        <h2>Bereken je hypotheek als zzp&apos;er</h2>
        <p>
          Het belangrijkste bedrag voor je hypotheek is uiteindelijk niet simpelweg je omzet of één
          jaar winst, maar het <strong>toetsinkomen dat volgens de geldende regels voor jouw
          situatie wordt vastgesteld</strong>.
        </p>
        <p>
          Heb je al een vastgesteld toetsinkomen? Dan kun je daarmee een eerste indicatie van je
          maximale hypotheek berekenen.
        </p>
        <p>
          Wil je weten hoe dat inkomen vervolgens wordt gebruikt om je maximale hypotheek te
          berekenen? Lees{' '}
          <Link href="/blogs/hypotheek-berekenen-als-zzper" className="text-warm-orange hover:underline">
            Hypotheek berekenen als zzp&apos;er
          </Link>
          .
        </p>
        <HypotheekCta label="Hypotheek berekenen als zzp'er →" />
        <HypotheekHubLink />
        <p>Meer over hypotheken als zzp&apos;er:</p>
        <ul>
          <li>
            <Link href="/tools/hypotheek-zzp" className="text-warm-orange hover:underline">
              Hypotheek voor zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
              Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
              Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-eenmanszaak" className="text-warm-orange hover:underline">
              Hypotheek met een eenmanszaak
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
              Hypotheek voor startende zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
              Winst uit onderneming voor hypotheek
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
              Hypotheek met wisselend inkomen als zzp&apos;er
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: 'winst-uit-onderneming-voor-hypotheek',
    relatedSlugs: [
      'welk-inkomen-telt-voor-hypotheek-als-zzper',
      'hoeveel-hypotheek-kan-ik-krijgen-als-zzper',
      'hoe-lang-zzper-zijn-voor-hypotheek',
      'hypotheek-met-eenmanszaak',
      'hypotheek-voor-startende-zzpers',
      'hypotheek-met-wisselend-inkomen-als-zzper',
      'jaarcijfers-nodig-voor-hypotheek-als-zzper',
      'hypotheek-zzp-zonder-3-jaar-cijfers',
      'hypotheek-berekenen-als-zzper',
      'hypotheekadviseur-voor-zzpers',
    ],
    title: 'Winst uit onderneming voor hypotheek',
    metaTitle: 'Winst uit onderneming voor hypotheek: hoe telt het mee?',
    excerpt:
      "Hoe telt winst uit onderneming mee voor je hypotheek als zzp'er? Lees hoe je winst wordt beoordeeld en hoe deze wordt gebruikt voor het toetsinkomen.",
    keywords:
      'winst uit onderneming hypotheek, winst onderneming hypotheek, winst uit onderneming hypotheek zzp, winst zzp hypotheek, winst eenmanszaak hypotheek, hypotheek op basis van winst, hoeveel winst voor hypotheek zzp, fiscale winst hypotheek, winst uit onderneming als inkomen hypotheek, ondernemersinkomen hypotheek',
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Winst%20uit%20onderneming%20voor%20hypotheek.jpg',
      alt: 'Winst uit onderneming voor hypotheek: hoe telt het mee als zzp\'er?',
    },
    datePublished: '2026-09-16',
    dateModified: '2026-09-16',
    faq: [
      {
        question: 'Is mijn winst hetzelfde als mijn hypotheekinkomen?',
        answer:
          'Nee. Je winst is een belangrijke basis voor de inkomensbeoordeling, maar het uiteindelijke toetsinkomen wordt volgens het geldende toetskader vastgesteld.',
      },
      {
        question: 'Telt mijn omzet als inkomen voor een hypotheek?',
        answer:
          'Niet rechtstreeks. Voor de beoordeling is het resultaat van de onderneming belangrijker dan alleen de omzet.',
      },
      {
        question: 'Wordt gekeken naar mijn winst van één jaar?',
        answer:
          'Niet uitsluitend. Bij de NHG-Inkomensverklaring Ondernemer wordt meestal naar de afgelopen drie jaar gekeken, of korter als de onderneming jonger is.',
      },
      {
        question: 'Moet ik drie jaar winst hebben voordat ik een hypotheek kan krijgen?',
        answer:
          'Nee. Voor de NHG-Inkomensverklaring Ondernemer geldt minimaal 12 maanden ondernemerschap. Heb je een kortere historie dan drie jaar, dan wordt de beschikbare periode beoordeeld.',
      },
      {
        question: 'Wat als mijn winst stijgt?',
        answer:
          'Een stijgende winst kan onderdeel zijn van de beoordeling van de ontwikkeling van je onderneming. Het uiteindelijke toetsinkomen wordt volgens het geldende toetskader vastgesteld.',
      },
      {
        question: 'Wat als mijn winst daalt?',
        answer:
          'Een dalende winst kan invloed hebben op het toetsinkomen. De actuele financiële situatie van je onderneming is relevant voor de beoordeling.',
      },
      {
        question: 'Kan ik met €50.000 winst een hypotheek krijgen?',
        answer:
          'Dat kan mogelijk, maar je maximale hypotheek kan niet alleen op basis van €50.000 winst worden bepaald. Ook rente, financiële verplichtingen, partnerinkomen en de woningwaarde spelen een rol.',
      },
      {
        question: 'Welke winst telt bij een eenmanszaak?',
        answer:
          'Bij een IB-ondernemer vormt de fiscale winst een belangrijke basis voor de inkomensbeoordeling. Het uiteindelijke toetsinkomen wordt vervolgens volgens het geldende toetskader vastgesteld.',
      },
    ],
    content: (
      <>
        <p>
          Als zzp&apos;er of ondernemer heb je geen vast salaris zoals iemand in loondienst. Voor je
          hypotheek moet daarom eerst worden vastgesteld welk inkomen uit je onderneming als{' '}
          <strong>toetsinkomen</strong> mag worden gebruikt.
        </p>
        <p>Daarbij speelt je winst uit onderneming een belangrijke rol.</p>
        <p>
          Maar je kunt niet simpelweg zeggen: &quot;Ik maak €60.000 winst, dus mijn hypotheekinkomen
          is €60.000.&quot; De hypotheekverstrekker kijkt naar je financiële historie, de
          ontwikkeling van je onderneming en de regels die gelden voor het vaststellen van het
          ondernemersinkomen.
        </p>
        <p>
          Bij een hypotheek met NHG wordt hiervoor bij ondernemers de{' '}
          <strong>Inkomensverklaring Ondernemer</strong> gebruikt. Deze verklaring is een
          uitgebreide analyse van de onderneming. Meestal wordt gekeken naar de afgelopen drie jaar,
          of naar een kortere periode als de onderneming jonger is. Op basis daarvan wordt het
          toetsinkomen vastgesteld.
        </p>

        <h2>Wat is winst uit onderneming?</h2>
        <p>
          Winst uit onderneming is kort gezegd het resultaat van je onderneming nadat de zakelijke
          kosten van de opbrengsten zijn afgetrokken.
        </p>
        <p>Een eenvoudige voorstelling is:</p>
        <p>
          <strong>Omzet − zakelijke kosten = winst</strong>
        </p>
        <p>
          Stel dat je als zzp&apos;er €100.000 omzet en €30.000 zakelijke kosten hebt. Dan bedraagt
          het resultaat vóór verdere fiscale verwerking €70.000.
        </p>
        <p>
          Voor een hypotheek is die €100.000 omzet dus niet het bedrag dat als inkomen wordt gezien.
        </p>
        <p>
          De financiële resultaten van je onderneming zijn belangrijker dan alleen je omzet.
        </p>

        <h2>Telt winst uit onderneming mee voor een hypotheek?</h2>
        <p>
          Ja. De winst uit onderneming vormt een belangrijke basis voor het vaststellen van het
          ondernemersinkomen.
        </p>
        <p>
          Voor een IB-ondernemer, zoals een zzp&apos;er met een eenmanszaak, wordt binnen het
          NHG-toetskader onder meer gekeken naar de fiscale winst. De inkomensverklaring analyseert
          daarbij de financiële situatie van de onderneming over meerdere jaren.
        </p>
        <p>
          Je winst is echter niet automatisch gelijk aan het uiteindelijke toetsinkomen.
        </p>
        <p>
          Er kunnen binnen de inkomensbeoordeling bijvoorbeeld correcties worden toegepast. Ook wordt
          gekeken naar de ontwikkeling van je onderneming en naar de beschikbare financiële gegevens.
        </p>
        <p>Daarom is het belangrijk om onderscheid te maken tussen:</p>
        <ul>
          <li>
            <strong>omzet:</strong> wat je onderneming ontvangt;
          </li>
          <li>
            <strong>kosten:</strong> wat je zakelijk uitgeeft;
          </li>
          <li>
            <strong>winst:</strong> het resultaat van je onderneming;
          </li>
          <li>
            <strong>toetsinkomen:</strong> het inkomen dat uiteindelijk voor de hypotheektoets wordt
            vastgesteld.
          </li>
        </ul>

        <h2>Is je winst hetzelfde als je toetsinkomen?</h2>
        <p>Nee, niet per definitie.</p>
        <p>
          Je winst is een belangrijke input voor de inkomensbeoordeling, maar het toetsinkomen wordt
          volgens het geldende toetskader vastgesteld.
        </p>
        <p>
          Bij NHG gebeurt dit voor ondernemers via de Inkomensverklaring Ondernemer. De rekenexpert
          analyseert de onderneming en stelt op basis daarvan het toetsinkomen vast.
        </p>
        <p>
          Je kunt dus niet altijd je laatste aangifte inkomstenbelasting pakken en dat bedrag
          rechtstreeks in een hypotheekberekening zetten. Lees ook{' '}
          <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
            Welk inkomen telt voor een hypotheek als zzp&apos;er?
          </Link>
          .
        </p>

        <h2>Naar welke winst wordt gekeken?</h2>
        <p>
          Bij de NHG-Inkomensverklaring Ondernemer wordt niet alleen naar één jaar gekeken.
        </p>
        <p>
          De analyse gaat meestal over de afgelopen drie jaar. Bestaat je onderneming korter dan
          drie jaar, dan wordt gekeken naar de kortere beschikbare periode.
        </p>
        <p>
          Voor een IB-ondernemer vormt de fiscale winst daarbij een belangrijke basis.
        </p>
        <p>Bijvoorbeeld:</p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[240px] border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b border-slate-200 py-2 pr-4 font-semibold">Jaar</th>
                <th className="border-b border-slate-200 py-2 text-right font-semibold">Winst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 1</td>
                <td className="border-b border-slate-100 py-2 text-right">€35.000</td>
              </tr>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 2</td>
                <td className="border-b border-slate-100 py-2 text-right">€45.000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Jaar 3</td>
                <td className="py-2 text-right">€55.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Deze ontwikkeling vertelt iets anders dan wanneer je winst bijvoorbeeld €55.000, €45.000
          en €35.000 bedraagt.
        </p>
        <p>Daarom wordt niet uitsluitend naar het hoogste bedrag gekeken.</p>

        <h2>Tellen drie jaar winst mee voor je hypotheek?</h2>
        <p>
          Bij de NHG-Inkomensverklaring Ondernemer wordt in principe naar de afgelopen drie jaar
          gekeken, of korter wanneer de onderneming nog geen drie jaar bestaat.
        </p>
        <p>
          Dat betekent niet dat je drie volledige jaren ondernemer moet zijn voordat je een
          hypotheek kunt krijgen.
        </p>
        <p>
          Voor NHG kan de Inkomensverklaring Ondernemer worden gebruikt wanneer je minimaal 12
          maanden een beroep of bedrijf uitoefent.
        </p>
        <p>
          Heb je bijvoorbeeld pas twee jaar een onderneming, dan wordt je beschikbare financiële
          historie gebruikt.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
            Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
          </Link>
        </p>

        <h2>Wat als je winst ieder jaar stijgt?</h2>
        <p>Een stijgende winst laat zien dat je onderneming zich financieel ontwikkelt.</p>
        <p>Bijvoorbeeld:</p>
        <ul>
          <li>jaar 1: €30.000;</li>
          <li>jaar 2: €42.000;</li>
          <li>jaar 3: €55.000.</li>
        </ul>
        <p>
          De inkomensbeoordeling kijkt naar de ontwikkeling van de onderneming en niet alleen naar
          één los jaar.
        </p>
        <p>
          Dat betekent niet dat je automatisch met €55.000 als toetsinkomen wordt gerekend. Het
          uiteindelijke toetsinkomen wordt volgens het toepasselijke toetskader vastgesteld.
        </p>
        <p>De actuele situatie van de onderneming is daarbij eveneens relevant.</p>

        <h2>Wat als je winst daalt?</h2>
        <p>Een dalende winst kan juist gevolgen hebben voor het toetsinkomen.</p>
        <p>Bijvoorbeeld:</p>
        <ul>
          <li>jaar 1: €55.000;</li>
          <li>jaar 2: €60.000;</li>
          <li>jaar 3: €40.000.</li>
        </ul>
        <p>
          Een hypotheekverstrekker kan niet zonder meer uitgaan van de hoogste winst uit het verleden
          als je huidige inkomen structureel lager ligt.
        </p>
        <p>
          Binnen de NHG-beoordeling wordt daarom gekeken naar de ontwikkeling van de onderneming en
          de actuele financiële situatie.
        </p>
        <p>
          Dit voorkomt dat een tijdelijk hoog inkomen uit het verleden automatisch als bestendig
          inkomen wordt gebruikt.
        </p>

        <h2>Telt de winst van het lopende jaar mee?</h2>
        <p>Ook het lopende boekjaar kan relevant zijn.</p>
        <p>
          De inkomensverklaring kijkt niet uitsluitend naar afgesloten boekjaren. De beoordeling kan
          ook gebruikmaken van actuele financiële gegevens van het lopende boekjaar.
        </p>
        <p>
          Dat is vooral belangrijk wanneer je onderneming sterk is veranderd.
        </p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>een sterke omzetgroei;</li>
          <li>een forse omzetdaling;</li>
          <li>hogere bedrijfskosten;</li>
          <li>het verliezen van een belangrijke opdrachtgever;</li>
          <li>een structurele stijging van de winst.</li>
        </ul>
        <p>
          De actuele ontwikkeling kan daardoor van invloed zijn op het uiteindelijke toetsinkomen.
        </p>

        <h2>Telt omzet mee voor je hypotheek?</h2>
        <p>Omzet is niet hetzelfde als inkomen.</p>
        <p>Stel:</p>
        <p>
          <strong>Ondernemer A</strong>
        </p>
        <ul>
          <li>omzet: €150.000</li>
          <li>kosten: €100.000</li>
          <li>resultaat: €50.000</li>
        </ul>
        <p>
          <strong>Ondernemer B</strong>
        </p>
        <ul>
          <li>omzet: €80.000</li>
          <li>kosten: €20.000</li>
          <li>resultaat: €60.000</li>
        </ul>
        <p>
          Ondanks de hogere omzet heeft ondernemer A in dit voorbeeld een lager resultaat.
        </p>
        <p>
          Daarom is het voor een hypotheek niet zinvol om alleen naar omzet te kijken.
        </p>
        <p>
          De financiële resultaten van de onderneming zijn de basis voor de verdere
          inkomensbeoordeling.
        </p>

        <h2>Welke kosten verlagen je winst?</h2>
        <p>Zakelijke kosten kunnen je winst verlagen.</p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>kantoor- en werkruimte;</li>
          <li>zakelijke software;</li>
          <li>apparatuur;</li>
          <li>vervoer;</li>
          <li>verzekeringen;</li>
          <li>marketing;</li>
          <li>opleidingen;</li>
          <li>telefoon en internet;</li>
          <li>ingehuurde diensten.</li>
        </ul>
        <p>
          Welke kosten fiscaal als zakelijke kosten worden geaccepteerd, is een fiscale kwestie.
          Voor de hypotheekbeoordeling wordt vervolgens uitgegaan van de financiële gegevens volgens
          het toepasselijke toetskader.
        </p>
        <p>
          Je moet daarom niet proberen je hypotheekinkomen simpelweg te verhogen door zakelijke
          kosten buiten beschouwing te laten.
        </p>

        <h2>Hoeveel winst heb je nodig voor een hypotheek?</h2>
        <p>
          Er bestaat geen universeel bedrag aan winst waarbij je als zzp&apos;er automatisch wel of
          geen hypotheek kunt krijgen.
        </p>
        <p>
          Of je een bepaalde hypotheek kunt krijgen hangt onder andere af van:
        </p>
        <ul>
          <li>je toetsinkomen;</li>
          <li>de hypotheekrente;</li>
          <li>je financiële verplichtingen;</li>
          <li>eventuele schulden;</li>
          <li>het inkomen van je partner;</li>
          <li>de waarde van de woning;</li>
          <li>de geldende leennormen.</li>
        </ul>
        <p>
          Een ondernemer met €50.000 toetsinkomen kan dus in een andere situatie een andere maximale
          hypotheek hebben dan een andere ondernemer met hetzelfde inkomen.
        </p>
        <p>
          Daarom is alleen vragen &quot;hoeveel winst heb ik nodig?&quot; onvoldoende.
        </p>
        <p>De belangrijkere vraag is:</p>
        <p>
          <strong>
            Welk toetsinkomen wordt voor mijn situatie vastgesteld en hoeveel hypotheek past
            daarbij?
          </strong>
        </p>

        <h2>Hoeveel hypotheek kun je krijgen met €50.000 winst?</h2>
        <p>
          Je kunt niet uitsluitend op basis van €50.000 winst bepalen hoeveel je kunt lenen.
        </p>
        <p>
          Als €50.000 daadwerkelijk het voor de hypotheek relevante toetsinkomen is, vormt dat een
          belangrijk uitgangspunt. Vervolgens wordt gekeken naar de overige financiële
          omstandigheden en de geldende hypotheeknormen.
        </p>
        <p>
          Heb je bijvoorbeeld een studieschuld, leaseverplichting of andere lening, dan kan dat je
          maximale hypotheek verlagen.
        </p>
        <p>Ook de waarde van de woning speelt een rol.</p>
        <p>
          Daarom geeft een hypotheekcalculator alleen een indicatie zolang je definitieve
          toetsinkomen nog niet is vastgesteld.
        </p>
        <HypotheekCta />
        <p>
          Meer over bedragen lees je in{' '}
          <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
            Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
          </Link>
          .
        </p>

        <h2>Winst uit een eenmanszaak voor hypotheek</h2>
        <p>
          Heb je een eenmanszaak, dan val je voor de NHG-inkomensbeoordeling als zelfstandige onder
          de categorie IB-ondernemer.
        </p>
        <p>
          Bij deze beoordeling speelt de fiscale winst een belangrijke rol. De Inkomensverklaring
          Ondernemer analyseert vervolgens de onderneming en stelt het toetsinkomen vast.
        </p>
        <p>
          Je omzet uit de eenmanszaak is dus niet hetzelfde als je hypotheekinkomen.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-met-eenmanszaak" className="text-warm-orange hover:underline">
            Hypotheek met een eenmanszaak: zo werkt het
          </Link>
        </p>

        <h2>Winst uit een VOF voor hypotheek</h2>
        <p>
          Ook bij een VOF kan het ondernemersinkomen worden beoordeeld via de Inkomensverklaring
          Ondernemer.
        </p>
        <p>
          Bij een IB-ondernemer wordt onder meer gekeken naar de fiscale winst. De precieze
          beoordeling hangt af van de structuur van de onderneming en de beschikbare financiële
          gegevens.
        </p>
        <p>
          Bij meerdere vennoten moet daarom niet alleen naar de totale winst van de VOF worden
          gekeken. Relevant is het inkomen dat aan de betreffende ondernemer toekomt.
        </p>

        <h2>Winst uit een BV voor hypotheek</h2>
        <p>Een BV wordt anders behandeld dan een eenmanszaak.</p>
        <p>
          Bij een BV is het onderscheid tussen bijvoorbeeld salaris uit dienstbetrekking, dividend
          en het belang in de onderneming relevant.
        </p>
        <p>
          Het ondernemersinkomen wordt daarom niet op dezelfde manier vastgesteld als bij een
          IB-ondernemer met een eenmanszaak.
        </p>
        <p>
          Heb je een BV en wil je weten welk inkomen voor jouw hypotheek kan worden gebruikt, dan
          moet je naar de specifieke inkomensbeoordeling voor jouw situatie kijken.
        </p>

        <h2>Kan een hoge winst zorgen voor een hogere hypotheek?</h2>
        <p>
          Een hoger toetsinkomen kan leiden tot meer leencapaciteit, maar winst alleen bepaalt je
          maximale hypotheek niet.
        </p>
        <p>Ook andere factoren spelen mee.</p>
        <p>Denk aan:</p>
        <ul>
          <li>rente;</li>
          <li>andere financiële verplichtingen;</li>
          <li>studieschuld;</li>
          <li>partnerinkomen;</li>
          <li>woningwaarde;</li>
          <li>hypotheekduur;</li>
          <li>geldende wettelijke en bancaire normen.</li>
        </ul>
        <p>
          Je maximale hypotheek is daarom niet simpelweg een percentage van je winst.
        </p>

        <h2>Wat als je net gestart bent en nog weinig winst hebt?</h2>
        <p>
          Een startende zzp&apos;er heeft vaak nog weinig historische cijfers.
        </p>
        <p>Dat betekent niet automatisch dat een hypotheek onmogelijk is.</p>
        <p>
          Voor NHG kan een ondernemer die minimaal 12 maanden actief is gebruikmaken van de
          Inkomensverklaring Ondernemer. Als de onderneming jonger is dan drie jaar, wordt de
          beschikbare financiële historie gebruikt.
        </p>
        <p>
          De beperkte historie kan wel betekenen dat je financiële ontwikkeling extra belangrijk is.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
            Hypotheek voor startende zzp&apos;ers
          </Link>
        </p>

        <h2>Wat heb je nodig om je winst aan te tonen?</h2>
        <p>
          Voor een hypotheekaanvraag als ondernemer zijn financiële gegevens nodig om het
          ondernemersinkomen vast te stellen.
        </p>
        <p>
          Bij een NHG-aanvraag met een Inkomensverklaring Ondernemer wordt de verklaring opgesteld
          door een geselecteerde rekenexpert. Voor het NHG-hypotheekdossier is deze verklaring het
          relevante document voor het ondernemersinkomen.
        </p>
        <p>
          Welke documenten daarnaast nodig zijn, hangt af van je situatie en de hypotheekaanvraag.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Is mijn winst hetzelfde als mijn hypotheekinkomen?</h3>
        <p>
          Nee. Je winst is een belangrijke basis voor de inkomensbeoordeling, maar het uiteindelijke
          toetsinkomen wordt volgens het geldende toetskader vastgesteld.
        </p>
        <h3>Telt mijn omzet als inkomen voor een hypotheek?</h3>
        <p>
          Niet rechtstreeks. Voor de beoordeling is het resultaat van de onderneming belangrijker
          dan alleen de omzet.
        </p>
        <h3>Wordt gekeken naar mijn winst van één jaar?</h3>
        <p>
          Niet uitsluitend. Bij de NHG-Inkomensverklaring Ondernemer wordt meestal naar de afgelopen
          drie jaar gekeken, of korter als de onderneming jonger is.
        </p>
        <h3>Moet ik drie jaar winst hebben voordat ik een hypotheek kan krijgen?</h3>
        <p>
          Nee. Voor de NHG-Inkomensverklaring Ondernemer geldt minimaal 12 maanden ondernemerschap.
          Heb je een kortere historie dan drie jaar, dan wordt de beschikbare periode beoordeeld.
        </p>
        <h3>Wat als mijn winst stijgt?</h3>
        <p>
          Een stijgende winst kan onderdeel zijn van de beoordeling van de ontwikkeling van je
          onderneming. Het uiteindelijke toetsinkomen wordt volgens het geldende toetskader
          vastgesteld.
        </p>
        <h3>Wat als mijn winst daalt?</h3>
        <p>
          Een dalende winst kan invloed hebben op het toetsinkomen. De actuele financiële situatie
          van je onderneming is relevant voor de beoordeling.
        </p>
        <h3>Kan ik met €50.000 winst een hypotheek krijgen?</h3>
        <p>
          Dat kan mogelijk, maar je maximale hypotheek kan niet alleen op basis van €50.000 winst
          worden bepaald. Ook rente, financiële verplichtingen, partnerinkomen en de woningwaarde
          spelen een rol.
        </p>
        <h3>Welke winst telt bij een eenmanszaak?</h3>
        <p>
          Bij een IB-ondernemer vormt de fiscale winst een belangrijke basis voor de
          inkomensbeoordeling. Het uiteindelijke toetsinkomen wordt vervolgens volgens het geldende
          toetskader vastgesteld.
        </p>

        <h2>Bereken je hypotheek als zzp&apos;er</h2>
        <p>
          Winst uit onderneming is een belangrijk onderdeel van je hypotheekaanvraag, maar je winst
          is niet automatisch gelijk aan het bedrag waarmee je hypotheek wordt berekend.
        </p>
        <p>
          Het belangrijkste bedrag is uiteindelijk het <strong>toetsinkomen</strong> dat volgens de
          geldende regels voor jouw situatie wordt vastgesteld.
        </p>
        <p>
          Heb je een indicatie van je toetsinkomen? Dan kun je daarmee een eerste berekening maken
          van je maximale hypotheek.
        </p>
        <p>
          Wil je weten hoe dat inkomen vervolgens wordt gebruikt om je maximale hypotheek te
          berekenen? Lees{' '}
          <Link href="/blogs/hypotheek-berekenen-als-zzper" className="text-warm-orange hover:underline">
            Hypotheek berekenen als zzp&apos;er
          </Link>
          .
        </p>
        <HypotheekCta label="Hypotheek berekenen als zzp'er →" />
        <HypotheekHubLink />
        <p>Meer lezen:</p>
        <ul>
          <li>
            <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Welk inkomen telt voor een hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
              Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
              Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-eenmanszaak" className="text-warm-orange hover:underline">
              Hypotheek met een eenmanszaak
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
              Hypotheek voor startende zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
              Hypotheek met wisselend inkomen als zzp&apos;er
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: 'hypotheek-met-wisselend-inkomen-als-zzper',
    relatedSlugs: [
      'welk-inkomen-telt-voor-hypotheek-als-zzper',
      'winst-uit-onderneming-voor-hypotheek',
      'hoe-lang-zzper-zijn-voor-hypotheek',
      'hypotheek-voor-startende-zzpers',
      'hoeveel-hypotheek-kan-ik-krijgen-als-zzper',
      'jaarcijfers-nodig-voor-hypotheek-als-zzper',
      'hypotheek-zzp-zonder-3-jaar-cijfers',
      'hypotheek-berekenen-als-zzper',
      'hypotheekadviseur-voor-zzpers',
    ],
    title: "Hypotheek met wisselend inkomen als zzp'er",
    excerpt:
      "Heb je als zzp'er een wisselend inkomen? Lees hoe je gemiddelde winst, een goed of slecht jaar en je actuele inkomen meetellen voor je hypotheek.",
    keywords:
      "hypotheek wisselend inkomen zzp, hypotheek met wisselend inkomen als zzp'er, wisselend inkomen zzp hypotheek, hypotheek zzp wisselende inkomsten, hypotheek met wisselende inkomsten, inkomen wisselt zzp hypotheek, onregelmatig inkomen zzp hypotheek, fluctuerend inkomen zzp hypotheek, wisselende winst hypotheek, gemiddelde winst hypotheek zzp, hypotheek op basis van gemiddelde winst",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Hypotheek%20met%20wisselend%20inkomen%20als%20zzper.jpg',
      alt: "Hypotheek met wisselend inkomen als zzp'er: hoe gemiddelde winst en actueel inkomen meetellen.",
    },
    datePublished: '2026-09-18',
    dateModified: '2026-09-18',
    faq: [
      {
        question: "Kun je een hypotheek krijgen met een wisselend inkomen als zzp'er?",
        answer:
          'Ja, dat kan. Een wisselend inkomen sluit een hypotheek niet automatisch uit. Bij NHG wordt het ondernemersinkomen beoordeeld via de Inkomensverklaring Ondernemer.',
      },
      {
        question: 'Wordt het gemiddelde van mijn inkomen gebruikt?',
        answer:
          'Bij NHG is het gemiddelde inkomen over de laatste drie kalenderjaren het uitgangspunt. Er gelden daarnaast regels voor het laatste jaar en het lopende boekjaar.',
      },
      {
        question: 'Wat als mijn laatste jaar slechter was?',
        answer:
          'Als je laatste jaar lager is dan het gemiddelde, kan het inkomen van het laatste jaar als uitgangspunt gelden voor het toetsinkomen.',
      },
      {
        question: 'Wat als mijn laatste jaar veel beter was?',
        answer:
          'Een beter laatste jaar betekent niet automatisch dat je volledige winst van dat jaar als toetsinkomen wordt gebruikt. De inkomensbeoordeling kijkt ook naar de eerdere jaren en het lopende boekjaar.',
      },
      {
        question: 'Telt het lopende jaar mee?',
        answer:
          'Ja. Het actuele inkomen wordt binnen de NHG-beoordeling gecontroleerd en moet minstens in lijn zijn met het gemiddelde.',
      },
      {
        question: "Kan ik als startende zzp'er met wisselende inkomsten een hypotheek krijgen?",
        answer:
          'Dat kan mogelijk. Voor NHG kan de Inkomensverklaring Ondernemer worden gebruikt vanaf minimaal 12 maanden ondernemerschap. Bij een jongere onderneming wordt de beschikbare financiële historie beoordeeld.',
      },
      {
        question: 'Wordt naar omzet of winst gekeken?',
        answer:
          'Voor een IB-ondernemer vormt de fiscale winst een belangrijke basis voor de inkomensbeoordeling. Omzet en winst zijn dus niet hetzelfde voor een hypotheek.',
      },
      {
        question: 'Kan ik met een wisselend inkomen een hypotheek zonder NHG krijgen?',
        answer:
          'Dat kan mogelijk, maar de voorwaarden kunnen per geldverstrekker verschillen. De NHG-regels voor de Inkomensverklaring Ondernemer gelden niet automatisch voor iedere hypotheek zonder NHG.',
      },
    ],
    content: (
      <>
        <p>
          Als zzp&apos;er kan je inkomen van jaar tot jaar behoorlijk verschillen. Het ene jaar maak
          je bijvoorbeeld €70.000 winst en het volgende jaar €45.000. Of je hebt een paar sterke
          maanden gevolgd door een periode met weinig opdrachten.
        </p>
        <p>
          Een wisselend inkomen betekent niet automatisch dat je geen hypotheek kunt krijgen.
        </p>
        <p>
          Voor een hypotheek moet eerst worden vastgesteld welk <strong>toetsinkomen</strong> voor
          jouw situatie geldt. Bij een hypotheek met NHG wordt het ondernemersinkomen vastgesteld
          met een Inkomensverklaring Ondernemer. Daarbij wordt doorgaans gekeken naar de financiële
          resultaten van de afgelopen drie jaar, of naar een kortere periode als je onderneming
          jonger is.
        </p>
        <p>
          Een wisselend inkomen kan wel invloed hebben op het bedrag waarmee uiteindelijk wordt
          gerekend.
        </p>

        <h2>Kun je een hypotheek krijgen met een wisselend inkomen?</h2>
        <p>Ja, een wisselend inkomen sluit een hypotheek niet automatisch uit.</p>
        <p>
          Als ondernemer wordt juist gekeken naar je financiële historie en de ontwikkeling van je
          inkomen. Bij NHG wordt het ondernemersinkomen vastgesteld op basis van de
          Inkomensverklaring Ondernemer.
        </p>
        <p>Daarbij wordt niet simpelweg alleen je beste jaar gebruikt.</p>
        <p>Dat is belangrijk als je bijvoorbeeld:</p>
        <ul>
          <li>het ene jaar €40.000 winst maakt;</li>
          <li>het volgende jaar €65.000;</li>
          <li>en daarna €50.000.</li>
        </ul>
        <p>
          Je inkomen is dan wisselend, maar er is wel een financiële historie waaruit een
          toetsinkomen kan worden vastgesteld.
        </p>

        <h2>Hoe wordt een wisselend inkomen berekend?</h2>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer geldt als uitgangspunt het{' '}
          <strong>gemiddelde inkomen over de laatste drie kalenderjaren</strong>.
        </p>
        <p>
          Voor een IB-ondernemer vormt de fiscale winst daarbij de basis. Het laatste jaar vormt
          daarbij een maximum: een hoger gemiddelde kan niet zomaar leiden tot een toetsinkomen dat
          hoger ligt dan de winst van het laatste jaar.
        </p>
        <p>Daarnaast wordt gekeken naar het lopende boekjaar.</p>
        <p>Het gaat dus niet alleen om:</p>
        <blockquote>
          <p>&quot;Wat was mijn beste jaar?&quot;</p>
        </blockquote>
        <p>
          maar om de ontwikkeling van je inkomen over meerdere jaren en je actuele situatie. Lees ook{' '}
          <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
            Welk inkomen telt voor een hypotheek als zzp&apos;er?
          </Link>{' '}
          en{' '}
          <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
            Winst uit onderneming voor hypotheek
          </Link>
          .
        </p>

        <h2>Voorbeeld: inkomen stijgt en daalt</h2>
        <p>Stel dat je als zzp&apos;er de volgende winsten hebt:</p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[240px] border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b border-slate-200 py-2 pr-4 font-semibold">Jaar</th>
                <th className="border-b border-slate-200 py-2 text-right font-semibold">Winst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 1</td>
                <td className="border-b border-slate-100 py-2 text-right">€40.000</td>
              </tr>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 2</td>
                <td className="border-b border-slate-100 py-2 text-right">€65.000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Jaar 3</td>
                <td className="py-2 text-right">€50.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Het gemiddelde van deze drie jaren is €51.667.</p>
        <p>Het laatste jaar bedraagt €50.000.</p>
        <p>
          Omdat het laatste jaar lager is dan het gemiddelde, is het laatste jaar relevant voor het
          bepalen van het toetsinkomen. Binnen het NHG-toetskader geldt bij een lager inkomen in het
          laatste jaar het laatste jaar als uitgangspunt.
        </p>
        <p>
          Dit laat zien waarom je niet automatisch met het gemiddelde van je drie beste jaren kunt
          rekenen.
        </p>

        <h2>Wat als je laatste jaar veel slechter was?</h2>
        <p>Dit is één van de belangrijkste situaties bij een wisselend inkomen.</p>
        <p>Stel:</p>
        <ul>
          <li>jaar 1: €45.000;</li>
          <li>jaar 2: €70.000;</li>
          <li>jaar 3: €40.000.</li>
        </ul>
        <p>
          Je gemiddelde over drie jaar is €51.667, maar je laatste volledige jaar ligt daar duidelijk
          onder.
        </p>
        <p>
          Binnen de NHG-systematiek geldt dan niet zomaar het hogere gemiddelde als toetsinkomen. Het
          lagere inkomen van het laatste jaar kan het uitgangspunt worden.
        </p>
        <p>
          Dat kan dus betekenen dat een tijdelijk goed jaar niet volledig kan worden gebruikt om je
          maximale hypotheek te verhogen.
        </p>

        <h2>Wat als je inkomen juist stijgt?</h2>
        <p>Een stijgend inkomen kan een ander beeld geven.</p>
        <p>Stel:</p>
        <ul>
          <li>jaar 1: €35.000;</li>
          <li>jaar 2: €45.000;</li>
          <li>jaar 3: €60.000.</li>
        </ul>
        <p>Je laatste jaar is dan hoger dan het gemiddelde van de drie jaren.</p>
        <p>
          Dat betekent niet automatisch dat je volledige €60.000 als toetsinkomen wordt gebruikt. De
          inkomensbeoordeling volgt het geldende toetskader en kijkt ook naar het lopende boekjaar.
        </p>
        <p>
          Het is dus belangrijk om onderscheid te maken tussen je{' '}
          <strong>winst in een bepaald jaar</strong> en je uiteindelijke{' '}
          <strong>toetsinkomen</strong>.
        </p>

        <h2>Telt het lopende jaar mee?</h2>
        <p>Ja.</p>
        <p>
          Bij de beoordeling van ondernemersinkomen wordt ook gekeken naar het lopende boekjaar. Het
          actuele inkomen moet volgens de NHG-criteria minstens in lijn zijn met het gemiddelde
          inkomen waarop de berekening is gebaseerd.
        </p>
        <p>
          Dit is vooral belangrijk wanneer je onderneming inmiddels sterk is veranderd.
        </p>
        <p>
          Stel dat je de afgelopen drie jaar gemiddeld €50.000 verdiende, maar je onderneming dit
          jaar veel minder goed draait.
        </p>
        <p>Dan kan niet zonder meer worden uitgegaan van €50.000 als stabiel inkomen.</p>
        <p>
          Andersom kan een sterk lopend jaar relevant zijn wanneer je onderneming duidelijk groeit.
        </p>

        <h2>Wat als je inkomen sterk fluctueert?</h2>
        <p>Een sterke fluctuatie kan de beoordeling ingewikkelder maken.</p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>€30.000 winst in jaar 1;</li>
          <li>€80.000 in jaar 2;</li>
          <li>€35.000 in jaar 3.</li>
        </ul>
        <p>
          Het gemiddelde geeft in dit voorbeeld een vertekend beeld als je alleen naar dat gemiddelde
          zou kijken. Daarom wordt ook gekeken naar het laatste jaar en het lopende boekjaar.
        </p>
        <p>
          De inkomensbeoordeling probeert uiteindelijk een beeld te geven van het inkomen dat
          duurzaam beschikbaar is voor de hypotheeklasten.
        </p>

        <h2>Wat als je één slecht jaar hebt?</h2>
        <p>
          Een enkel slecht jaar betekent niet automatisch dat je geen hypotheek kunt krijgen.
        </p>
        <p>
          De gevolgen hangen af van de oorzaak en van je overige financiële resultaten.
        </p>
        <p>
          Een tijdelijke terugval kan bijvoorbeeld anders worden beoordeeld dan een structurele
          daling van je bedrijfsresultaat.
        </p>
        <p>
          Voor NHG geldt bovendien dat een ondernemer maximaal één kalenderjaar geen inkomen mag
          hebben gehad. Het gemiddelde wordt in dat geval nog steeds over drie jaar berekend.
        </p>
        <p>
          Heb je meerdere jaren met zeer lage of negatieve resultaten, dan kan dat uiteraard een
          veel grotere invloed hebben op de inkomensbeoordeling.
        </p>

        <h2>Wat als je één uitzonderlijk goed jaar hebt?</h2>
        <p>
          Een uitzonderlijk goed jaar betekent niet automatisch dat je hypotheek op dat volledige
          inkomen wordt gebaseerd.
        </p>
        <p>
          Bij NHG is het gemiddelde van de laatste drie kalenderjaren het uitgangspunt, met het
          laatste jaar als maximum. Ook het lopende boekjaar wordt gecontroleerd.
        </p>
        <p>
          Dat voorkomt dat één uitzonderlijk goed jaar automatisch wordt behandeld alsof dat je
          structurele inkomen is.
        </p>

        <h2>Hoeveel hypotheek kun je krijgen met wisselend inkomen?</h2>
        <p>Dat is niet alleen afhankelijk van je gemiddelde winst.</p>
        <p>
          Nadat je toetsinkomen is vastgesteld, spelen ook andere factoren een rol, zoals:
        </p>
        <ul>
          <li>hypotheekrente;</li>
          <li>andere leningen;</li>
          <li>studieschuld;</li>
          <li>leaseverplichtingen;</li>
          <li>inkomen van je partner;</li>
          <li>waarde van de woning;</li>
          <li>de geldende leennormen.</li>
        </ul>
        <p>
          De overheid geeft aan dat de maximale hypotheek onder andere afhankelijk is van het
          inkomen en de waarde van de woning. Ook financiële verplichtingen zoals een lening,
          leasecontract of studieschuld kunnen de maximale hypotheek beïnvloeden.
        </p>
        <p>Daarom kun je niet zeggen:</p>
        <blockquote>
          <p>&quot;Mijn gemiddelde winst is €50.000, dus ik kan €X lenen.&quot;</p>
        </blockquote>
        <p>
          Het gemiddelde of vastgestelde toetsinkomen is slechts één onderdeel van de berekening.
          Meer over bedragen lees je in{' '}
          <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
            Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
          </Link>
          .
        </p>

        <h2>Wisselende omzet is niet hetzelfde als wisselende winst</h2>
        <p>
          Voor een hypotheek is het belangrijk om omzet en winst uit elkaar te houden.
        </p>
        <p>Stel dat je omzet sterk wisselt:</p>
        <ul>
          <li>jaar 1: €100.000;</li>
          <li>jaar 2: €150.000;</li>
          <li>jaar 3: €110.000.</li>
        </ul>
        <p>Dat zegt op zichzelf nog niet genoeg.</p>
        <p>
          Als je kosten in die jaren ook sterk verschillen, kan je winst veel stabieler of juist
          veel wisselender zijn.
        </p>
        <p>
          Voor de inkomensbeoordeling van een IB-ondernemer vormt de fiscale winst een belangrijke
          basis.
        </p>
        <p>
          Het gaat dus niet alleen om hoeveel je factureert, maar vooral om wat er financieel uit je
          onderneming komt.
        </p>

        <h2>Wat als je inkomsten per maand sterk verschillen?</h2>
        <p>Als zzp&apos;er kunnen je inkomsten per maand behoorlijk fluctueren.</p>
        <p>Bijvoorbeeld:</p>
        <ul>
          <li>januari: €3.000;</li>
          <li>februari: €8.000;</li>
          <li>maart: €2.000;</li>
          <li>april: €10.000.</li>
        </ul>
        <p>
          Voor een hypotheek wordt je inkomen niet simpelweg bepaald door naar één maand te kijken.
        </p>
        <p>
          Bij ondernemers wordt gekeken naar de financiële resultaten over een langere periode.
          Daardoor zijn maandelijkse schommelingen op zichzelf minder belangrijk dan de structurele
          ontwikkeling van je onderneming.
        </p>
        <p>
          Een onderneming met sterk wisselende maandinkomsten kan dus alsnog een redelijk stabiel
          jaarlijks inkomen hebben.
        </p>

        <h2>Wat als je inkomen afhankelijk is van een paar grote klanten?</h2>
        <p>
          Een onderneming kan een hoog inkomen hebben terwijl een groot deel van de omzet afkomstig
          is van één of enkele opdrachtgevers.
        </p>
        <p>
          Dat is iets anders dan een inkomen dat simpelweg ieder jaar stabiel is.
        </p>
        <p>
          Bij de inkomensbeoordeling wordt gekeken naar de onderneming en de beschikbare financiële
          gegevens. De Inkomensverklaring Ondernemer is een uitgebreide analyse van de onderneming.
        </p>
        <p>
          Als je inkomen sterk afhankelijk is van een specifieke opdrachtgever, kan de actuele
          situatie van je onderneming daarom relevant zijn.
        </p>

        <h2>Wisselend inkomen als startende zzp&apos;er</h2>
        <p>
          Voor een startende zzp&apos;er is er vaak nog weinig historische informatie beschikbaar.
        </p>
        <p>Dat betekent niet automatisch dat een hypotheek onmogelijk is.</p>
        <p>
          Voor NHG kan een ondernemer die minimaal 12 maanden actief is gebruikmaken van de
          Inkomensverklaring Ondernemer. Bestaat de onderneming korter dan drie jaar, dan wordt de
          beschikbare financiële historie gebruikt.
        </p>
        <p>
          Hoe korter je onderneming bestaat, hoe minder jaren beschikbaar zijn om je inkomen te
          beoordelen.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
            Hypotheek voor startende zzp&apos;ers
          </Link>
        </p>

        <h2>Wisselend inkomen en een hypotheek zonder NHG</h2>
        <p>
          De regels hierboven over de Inkomensverklaring Ondernemer hebben specifiek betrekking op de
          NHG-route.
        </p>
        <p>Zonder NHG kunnen geldverstrekkers hun eigen acceptatiebeleid hanteren.</p>
        <p>
          Daarom kun je de NHG-regels niet automatisch als universele regel voor iedere hypotheek
          gebruiken.
        </p>
        <p>
          Als je geen NHG-hypotheek aanvraagt, is het belangrijk om te controleren hoe de betreffende
          geldverstrekker ondernemersinkomen met wisselende resultaten beoordeelt.
        </p>

        <h2>Wat als je naast je onderneming in loondienst werkt?</h2>
        <p>
          Sommige ondernemers combineren hun onderneming met een baan in loondienst.
        </p>
        <p>
          Binnen de NHG-Inkomensverklaring Ondernemer kan een combinatie van inkomen uit
          dienstbetrekking en zelfstandig ondernemerschap mogelijk zijn. De precieze beoordeling
          hangt af van de situatie en het geldende toetskader.
        </p>
        <p>
          Je moet daarom niet automatisch alleen naar je winst uit onderneming kijken als je
          daarnaast salaris ontvangt.
        </p>

        <h2>Kun je je hypotheek berekenen met je gemiddelde winst?</h2>
        <p>
          Voor een eerste indicatie kan een gemiddelde winst een nuttig uitgangspunt zijn.
        </p>
        <p>
          Maar voor een daadwerkelijke hypotheekaanvraag is het belangrijker om te weten welk{' '}
          <strong>toetsinkomen</strong> volgens de geldende regels wordt vastgesteld.
        </p>
        <p>
          Heb je al een Inkomensverklaring Ondernemer? Dan is het daarin vastgestelde inkomen veel
          relevanter dan zelf een gemiddelde van je winst berekenen.
        </p>
        <HypotheekCta />

        <h2>Voorbeeld: drie jaar wisselende winst</h2>
        <p>Stel dat je winst als volgt is:</p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[240px] border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b border-slate-200 py-2 pr-4 font-semibold">Jaar</th>
                <th className="border-b border-slate-200 py-2 text-right font-semibold">Winst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 1</td>
                <td className="border-b border-slate-100 py-2 text-right">€35.000</td>
              </tr>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 2</td>
                <td className="border-b border-slate-100 py-2 text-right">€60.000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Jaar 3</td>
                <td className="py-2 text-right">€45.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Het gemiddelde bedraagt €46.667.</p>
        <p>Het laatste jaar is echter €45.000.</p>
        <p>
          Binnen de NHG-systematiek is het lagere inkomen van het laatste jaar dan relevant voor de
          vaststelling van het toetsinkomen. Daarnaast moet het lopende boekjaar worden beoordeeld.
        </p>
        <p>
          Dit voorbeeld laat zien waarom je niet simpelweg kunt uitgaan van het gemiddelde van je
          drie jaren.
        </p>

        <h2>Wat gebeurt er als het lopende jaar veel lager is?</h2>
        <p>Ook het lopende jaar kan een belangrijke rol spelen.</p>
        <p>
          De NHG-regels vereisen dat het actuele inkomen minstens in lijn is met het gemiddelde.
          Wanneer de actuele ontwikkeling daar duidelijk onder ligt, kan dat gevolgen hebben voor
          het toetsinkomen.
        </p>
        <p>
          Daarom kan een ondernemer met goede historische cijfers toch een lager toetsinkomen krijgen
          wanneer het bedrijf inmiddels structureel minder goed presteert.
        </p>

        <h2>Wat gebeurt er als het lopende jaar juist hoger is?</h2>
        <p>
          Een sterk lopend jaar betekent niet automatisch dat je toetsinkomen direct wordt verhoogd
          naar het nieuwe niveau.
        </p>
        <p>
          De beoordeling kijkt naar de beschikbare historie én de actuele ontwikkeling.
        </p>
        <p>
          Binnen het NHG-toetskader zijn er specifieke regels voor het vergelijken van het lopende
          boekjaar met de historische resultaten.
        </p>
        <p>
          Daarom is het verstandig om bij sterk groeiende inkomsten niet zelf te veronderstellen
          welk bedrag de geldverstrekker uiteindelijk zal gebruiken.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Kun je een hypotheek krijgen met een wisselend inkomen als zzp&apos;er?</h3>
        <p>
          Ja, dat kan. Een wisselend inkomen sluit een hypotheek niet automatisch uit. Bij NHG wordt
          het ondernemersinkomen beoordeeld via de Inkomensverklaring Ondernemer.
        </p>
        <h3>Wordt het gemiddelde van mijn inkomen gebruikt?</h3>
        <p>
          Bij NHG is het gemiddelde inkomen over de laatste drie kalenderjaren het uitgangspunt. Er
          gelden daarnaast regels voor het laatste jaar en het lopende boekjaar.
        </p>
        <h3>Wat als mijn laatste jaar slechter was?</h3>
        <p>
          Als je laatste jaar lager is dan het gemiddelde, kan het inkomen van het laatste jaar als
          uitgangspunt gelden voor het toetsinkomen.
        </p>
        <h3>Wat als mijn laatste jaar veel beter was?</h3>
        <p>
          Een beter laatste jaar betekent niet automatisch dat je volledige winst van dat jaar als
          toetsinkomen wordt gebruikt. De inkomensbeoordeling kijkt ook naar de eerdere jaren en het
          lopende boekjaar.
        </p>
        <h3>Telt het lopende jaar mee?</h3>
        <p>
          Ja. Het actuele inkomen wordt binnen de NHG-beoordeling gecontroleerd en moet minstens in
          lijn zijn met het gemiddelde.
        </p>
        <h3>Kan ik als startende zzp&apos;er met wisselende inkomsten een hypotheek krijgen?</h3>
        <p>
          Dat kan mogelijk. Voor NHG kan de Inkomensverklaring Ondernemer worden gebruikt vanaf
          minimaal 12 maanden ondernemerschap. Bij een jongere onderneming wordt de beschikbare
          financiële historie beoordeeld.
        </p>
        <h3>Wordt naar omzet of winst gekeken?</h3>
        <p>
          Voor een IB-ondernemer vormt de fiscale winst een belangrijke basis voor de
          inkomensbeoordeling. Omzet en winst zijn dus niet hetzelfde voor een hypotheek.
        </p>
        <h3>Kan ik met een wisselend inkomen een hypotheek zonder NHG krijgen?</h3>
        <p>
          Dat kan mogelijk, maar de voorwaarden kunnen per geldverstrekker verschillen. De
          NHG-regels voor de Inkomensverklaring Ondernemer gelden niet automatisch voor iedere
          hypotheek zonder NHG.
        </p>

        <h2>Bereken je hypotheek als zzp&apos;er</h2>
        <p>
          Een wisselend inkomen betekent niet automatisch dat je geen hypotheek kunt krijgen. Het
          belangrijkste is welk <strong>toetsinkomen</strong> uiteindelijk voor jouw situatie wordt
          vastgesteld.
        </p>
        <p>
          Heb je wisselende winsten, kijk dan niet alleen naar je beste jaar of naar één maand. De
          financiële historie en je actuele ontwikkeling zijn belangrijk bij de
          inkomensbeoordeling.
        </p>
        <p>
          Lees ook{' '}
          <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
            Winst uit onderneming voor hypotheek
          </Link>
          ,{' '}
          <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
            Welk inkomen telt voor een hypotheek als zzp&apos;er?
          </Link>{' '}
          en{' '}
          <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
            Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
          </Link>
          .
        </p>
        <p>Wil je een eerste indicatie van je maximale hypotheek?</p>
        <HypotheekCta label="Hypotheek berekenen als zzp'er →" />
        <HypotheekHubLink />
        <p>Meer lezen over hypotheken als zzp&apos;er:</p>
        <ul>
          <li>
            <Link href="/tools/hypotheek-zzp" className="text-warm-orange hover:underline">
              Hypotheek voor zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Welk inkomen telt voor een hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
              Winst uit onderneming voor hypotheek
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
              Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
              Hypotheek voor startende zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Jaarcijfers nodig voor hypotheek als zzp&apos;er?
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: 'jaarcijfers-nodig-voor-hypotheek-als-zzper',
    relatedSlugs: [
      'hypotheek-met-wisselend-inkomen-als-zzper',
      'welk-inkomen-telt-voor-hypotheek-als-zzper',
      'winst-uit-onderneming-voor-hypotheek',
      'hoe-lang-zzper-zijn-voor-hypotheek',
      'hypotheek-voor-startende-zzpers',
      'hypotheek-zzp-zonder-3-jaar-cijfers',
      'hypotheek-berekenen-als-zzper',
      'hypotheekadviseur-voor-zzpers',
    ],
    title: "Jaarcijfers nodig voor hypotheek als zzp'er?",
    excerpt:
      "Welke jaarcijfers heb je nodig voor een hypotheek als zzp'er? Lees hoeveel jaar financiële gegevens nodig zijn en welke cijfers meetellen.",
    keywords:
      "jaarcijfers hypotheek zzp, jaarcijfers nodig voor hypotheek zzp, hypotheek jaarcijfers zzp'er, jaarcijfers hypotheek als zzp'er, hoeveel jaarcijfers hypotheek zzp, jaarcijfers nodig hypotheek zzp, jaarrekening hypotheek zzp, financiële cijfers hypotheek zzp, jaarcijfers aanleveren hypotheek zzp, hypotheek aanvragen zonder jaarcijfers, jaarcijfers startende zzp'er hypotheek, voorlopige jaarcijfers hypotheek, jaarcijfers ondernemer hypotheek",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/jaarcijfers%20hypotheek%20zzp.jpg',
      alt: "Jaarcijfers nodig voor hypotheek als zzp'er? Welke financiële gegevens meetellen.",
    },
    datePublished: '2026-09-18',
    dateModified: '2026-09-18',
    faq: [
      {
        question: "Heb ik als zzp'er jaarcijfers nodig voor een hypotheek?",
        answer:
          'Vaak wel. Bij een hypotheek met NHG worden de financiële resultaten van je onderneming gebruikt om het ondernemersinkomen vast te stellen.',
      },
      {
        question: 'Hoeveel jaarcijfers heb ik nodig?',
        answer:
          'Bij NHG wordt doorgaans naar de laatste drie kalenderjaren gekeken. Bestaat je onderneming korter, dan wordt de beschikbare historie gebruikt.',
      },
      {
        question: 'Kan ik met één jaar aan jaarcijfers een hypotheek krijgen?',
        answer:
          'Dat kan mogelijk. Voor de NHG-Inkomensverklaring Ondernemer moet je minimaal 12 maanden actief zijn als ondernemer.',
      },
      {
        question: 'Tellen voorlopige jaarcijfers mee?',
        answer:
          'Dat kan afhankelijk zijn van het moment van de aanvraag. Vanaf 1 mei van het lopende boekjaar zijn voor de NHG-Inkomensverklaring de definitieve jaarcijfers van het vorige boekjaar verplicht.',
      },
      {
        question: 'Heb ik ook cijfers van het lopende jaar nodig?',
        answer:
          'Dat kan. De NHG-systematiek kijkt naar het lopende boekjaar om te controleren of je actuele inkomen in lijn is met de historische resultaten.',
      },
      {
        question: 'Kan ik mijn aangifte inkomstenbelasting gebruiken in plaats van jaarcijfers?',
        answer:
          'Dat hangt af van de gebruikte hypotheekmethode en geldverstrekker. Voor een NHG-Inkomensverklaring Ondernemer worden meerdere financiële gegevens van de onderneming gebruikt.',
      },
      {
        question: 'Wat als mijn onderneming nog geen drie jaar bestaat?',
        answer:
          'Je hoeft voor de NHG-Inkomensverklaring Ondernemer niet eerst drie jaar ondernemer te zijn. Vanaf minimaal 12 maanden ondernemerschap kan de verklaring worden aangevraagd.',
      },
      {
        question: 'Wat als mijn winst sterk wisselt?',
        answer:
          'Een wisselende winst sluit een hypotheek niet automatisch uit. De historische resultaten, het laatste boekjaar en het lopende boekjaar kunnen allemaal relevant zijn voor de inkomensbeoordeling.',
      },
      {
        question: 'Kan ik alvast mijn maximale hypotheek berekenen zonder jaarcijfers?',
        answer:
          'Ja, voor een eerste indicatie kun je een berekening maken. Voor een definitieve hypotheekaanvraag moet echter worden vastgesteld welk toetsinkomen voor jouw situatie geldt.',
      },
    ],
    content: (
      <>
        <p>
          Als zzp&apos;er heb je voor een hypotheek vaak financiële gegevens van je onderneming
          nodig. De geldverstrekker wil namelijk kunnen beoordelen welk inkomen uit je onderneming
          kan worden meegenomen voor de hypotheek.
        </p>
        <p>
          Bij een hypotheek met NHG wordt het ondernemersinkomen vastgesteld met een{' '}
          <strong>Inkomensverklaring Ondernemer</strong>. Daarbij wordt meestal gekeken naar de
          financiële resultaten van de afgelopen drie jaar, of naar een kortere periode als je
          onderneming nog geen drie jaar bestaat.
        </p>
        <p>
          Welke documenten je precies nodig hebt, hangt af van hoe lang je onderneming bestaat, je
          ondernemingsvorm en het moment waarop je de hypotheek aanvraagt.
        </p>

        <h2>Heb je jaarcijfers nodig voor een hypotheek als zzp&apos;er?</h2>
        <p>
          Ja, in veel gevallen zijn jaarcijfers onderdeel van de documenten die nodig zijn om je
          ondernemersinkomen vast te stellen.
        </p>
        <p>
          Voor een hypotheek met NHG wordt vanaf 1 mei van het lopende boekjaar het definitieve
          resultaat van het vorige boekjaar meegenomen in de verplichte documentatie. Bij een
          aanvraag later in het jaar kunnen daarnaast tussentijdse cijfers en aangiften
          omzetbelasting nodig zijn om de ontwikkeling van het lopende boekjaar te beoordelen.
        </p>
        <p>Het gaat dus niet alleen om je aangifte inkomstenbelasting.</p>
        <p>De beoordeling kan bijvoorbeeld betrekking hebben op:</p>
        <ul>
          <li>jaarcijfers van je onderneming;</li>
          <li>fiscale winst;</li>
          <li>tussentijdse cijfers;</li>
          <li>aangiften omzetbelasting;</li>
          <li>informatie over het lopende boekjaar;</li>
          <li>gegevens over de financiële positie van je onderneming.</li>
        </ul>
        <p>
          Welke stukken precies moeten worden aangeleverd, wordt bepaald binnen het geldende
          toetskader.
        </p>

        <h2>Welke jaarcijfers heb je nodig voor een hypotheek?</h2>
        <p>
          Bij een IB-ondernemer, zoals een eenmanszaak, vormt de fiscale winst een belangrijke basis
          voor de inkomensbeoordeling.
        </p>
        <p>
          Binnen de NHG-Inkomensverklaring Ondernemer is het uitgangspunt het gemiddelde inkomen over
          de laatste drie kalenderjaren. Voor een IB-ondernemer gaat het om het gemiddelde van de
          fiscale winst, waarbij het laatste jaar als maximum geldt.
        </p>
        <p>Stel dat je winst was:</p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[240px] border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b border-slate-200 py-2 pr-4 font-semibold">Jaar</th>
                <th className="border-b border-slate-200 py-2 text-right font-semibold">Winst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 1</td>
                <td className="border-b border-slate-100 py-2 text-right">€40.000</td>
              </tr>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 2</td>
                <td className="border-b border-slate-100 py-2 text-right">€55.000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Jaar 3</td>
                <td className="py-2 text-right">€50.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Het gemiddelde bedraagt €48.333.</p>
        <p>
          Omdat het laatste jaar €50.000 bedraagt, ligt het gemiddelde onder het resultaat van het
          laatste jaar. Binnen het NHG-toetskader vormt het gemiddelde dan de basis, rekening houdend
          met de overige voorwaarden en controles.
        </p>
        <p>
          Het is daarom belangrijk om niet alleen je meest recente jaarcijfers te bekijken. Lees ook{' '}
          <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
            Winst uit onderneming voor hypotheek
          </Link>
          .
        </p>

        <h2>Hoeveel jaarcijfers heb je nodig?</h2>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer wordt meestal gekeken naar de laatste drie
          kalenderjaren.
        </p>
        <p>
          Bestaat je onderneming nog geen drie jaar, dan wordt gekeken naar de beschikbare periode.
          Een ondernemer moet voor deze route minimaal 12 maanden actief zijn.
        </p>
        <p>Dat betekent bijvoorbeeld:</p>
        <ul>
          <li>
            <strong>1 jaar ondernemer:</strong> je beschikbare financiële historie wordt beoordeeld;
          </li>
          <li>
            <strong>2 jaar ondernemer:</strong> de beschikbare twee jaren worden beoordeeld;
          </li>
          <li>
            <strong>3 jaar of langer ondernemer:</strong> de laatste drie kalenderjaren vormen
            doorgaans de basis.
          </li>
        </ul>
        <p>
          Een startende zzp&apos;er hoeft voor een NHG-hypotheek dus niet eerst drie volledige jaren
          ondernemer te zijn.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
            Hypotheek voor startende zzp&apos;ers
          </Link>
        </p>

        <h2>Zijn alleen jaarcijfers voldoende?</h2>
        <p>Niet altijd.</p>
        <p>
          De jaarcijfers geven vooral inzicht in de afgelopen boekjaren. Voor de hypotheekbeoordeling
          kan ook naar het <strong>lopende boekjaar</strong> worden gekeken.
        </p>
        <p>
          Dat is belangrijk wanneer je onderneming inmiddels duidelijk beter of slechter presteert.
        </p>
        <p>
          Bij de NHG-Inkomensverklaring Ondernemer moet het actuele inkomen minstens in lijn zijn met
          het gemiddelde inkomen waarop de berekening is gebaseerd. Als de tussentijdse cijfers een
          lager resultaat laten zien, kan het inkomen naar beneden worden bijgesteld. Een hoger
          resultaat in het lopende jaar leidt daarentegen niet automatisch tot een hoger
          toetsinkomen.
        </p>
        <p>
          Je hypotheek wordt dus niet simpelweg berekend door drie oude jaarcijfers bij elkaar op te
          tellen.
        </p>

        <h2>Welke documenten heb je als zzp&apos;er nodig?</h2>
        <p>
          De precieze documentenlijst kan verschillen afhankelijk van de situatie.
        </p>
        <p>
          Voor een NHG-Inkomensverklaring wordt onder andere gekeken naar de financiële gegevens van
          de onderneming. Vanaf 1 mei van het lopende boekjaar zijn de definitieve jaarcijfers van
          het vorige boekjaar verplicht. Vanaf 1 augustus zijn bijvoorbeeld tussentijdse cijfers tot
          en met het tweede kwartaal en de bijbehorende aangiften omzetbelasting nodig. Vanaf 1
          november verschuift dit naar de cijfers tot en met het derde kwartaal.
        </p>
        <p>Een vereenvoudigd overzicht:</p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[320px] border-collapse text-left text-sm">
            <thead>
              <tr>
                <th className="border-b border-slate-200 py-2 pr-4 font-semibold">
                  Moment van aanvraag
                </th>
                <th className="border-b border-slate-200 py-2 font-semibold">
                  Belangrijke financiële informatie
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4 align-top">Vanaf 1 mei</td>
                <td className="border-b border-slate-100 py-2">
                  Definitieve jaarcijfers vorige boekjaar
                </td>
              </tr>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4 align-top">Vanaf 1 augustus</td>
                <td className="border-b border-slate-100 py-2">
                  Tussentijdse cijfers t/m Q2 + btw-aangiften t/m Q2
                </td>
              </tr>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4 align-top">Vanaf 1 november</td>
                <td className="border-b border-slate-100 py-2">
                  Tussentijdse cijfers t/m Q3 + btw-aangiften t/m Q3
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 align-top">Vanaf 1 februari</td>
                <td className="py-2">Tussentijdse cijfers t/m Q4 + btw-aangiften t/m Q4</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          De exacte documentenlijst van de Inkomensverklaring Ondernemer bepaalt welke stukken in
          jouw situatie moeten worden aangeleverd.
        </p>

        <h2>Wat als je jaarcijfers nog niet definitief zijn?</h2>
        <p>Dat hoeft niet automatisch een probleem te zijn.</p>
        <p>
          Wanneer het vorige boekjaar nog niet definitief is afgesloten, kunnen afhankelijk van het
          moment van aanvragen tussentijdse cijfers en andere financiële gegevens worden gebruikt.
        </p>
        <p>
          Vanaf 1 mei van het lopende boekjaar moeten voor de NHG-Inkomensverklaring de definitieve
          jaarcijfers van het vorige boekjaar worden aangeleverd.
        </p>
        <p>
          Als je bijvoorbeeld in 2026 een hypotheek aanvraagt, kan het dus relevant zijn of je
          cijfers over 2025 al definitief beschikbaar zijn.
        </p>

        <h2>Wat als je boekhouder de jaarcijfers nog niet heeft gemaakt?</h2>
        <p>
          Dan is het verstandig om eerst te controleren welke documenten de hypotheekverstrekker of
          rekenexpert nodig heeft.
        </p>
        <p>
          Voor NHG is de Inkomensverklaring Ondernemer een uitgebreide analyse van je onderneming. Je
          vraagt deze aan via een hypotheekadviseur, geldverstrekker of een door NHG aangewezen
          rekenexpert. De verklaring wordt opgesteld op basis van de benodigde financiële
          documenten.
        </p>
        <p>
          Het is daarom niet verstandig om zelf alvast een willekeurig gemiddelde van je winst te
          gebruiken als officieel toetsinkomen.
        </p>

        <h2>Kun je een hypotheek krijgen met maar één jaar aan jaarcijfers?</h2>
        <p>Dat kan mogelijk.</p>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer moet je minimaal 12 maanden actief zijn. Je hoeft
          dus niet per se drie volledige jaren aan jaarcijfers te hebben.
        </p>
        <p>
          Als je onderneming korter dan drie jaar bestaat, wordt de beschikbare financiële historie
          gebruikt.
        </p>
        <p>
          Hoe korter je onderneming bestaat, hoe minder historische informatie beschikbaar is om je
          inkomen te beoordelen.
        </p>
        <p>
          Dat betekent ook dat een startende zzp&apos;er niet automatisch op dezelfde manier wordt
          beoordeeld als iemand die al tien jaar ondernemer is. Lees ook{' '}
          <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
            Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
          </Link>
          .
        </p>

        <h2>Wat als je één jaar geen inkomen had?</h2>
        <p>
          Binnen de NHG-systematiek mag een ondernemer maximaal één kalenderjaar geen inkomen hebben
          gehad.
        </p>
        <p>Het gemiddelde wordt in dat geval nog steeds over drie jaar berekend.</p>
        <p>Een jaar zonder inkomen kan dus wel gevolgen hebben voor de berekening.</p>
        <p>
          Heb je meerdere jaren zonder inkomen of met zeer lage resultaten, dan kan dat uiteraard
          een grotere invloed hebben op het toetsinkomen.
        </p>

        <h2>Wat als je winst sterk wisselt?</h2>
        <p>Wisselende winst betekent niet automatisch dat je geen hypotheek kunt krijgen.</p>
        <p>Bijvoorbeeld:</p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[240px] border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b border-slate-200 py-2 pr-4 font-semibold">Jaar</th>
                <th className="border-b border-slate-200 py-2 text-right font-semibold">Winst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 1</td>
                <td className="border-b border-slate-100 py-2 text-right">€35.000</td>
              </tr>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 2</td>
                <td className="border-b border-slate-100 py-2 text-right">€75.000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Jaar 3</td>
                <td className="py-2 text-right">€45.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Het gemiddelde bedraagt €51.667.</p>
        <p>
          Maar je hypotheekbeoordeling kijkt niet alleen naar dit gemiddelde. Binnen de
          NHG-systematiek geldt het laatste jaar als maximum en wordt ook naar het lopende boekjaar
          gekeken.
        </p>
        <p>
          Een uitzonderlijk goed jaar zorgt daarom niet automatisch voor een evenredig hoger
          toetsinkomen.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
            Hypotheek met wisselend inkomen als zzp&apos;er
          </Link>
        </p>

        <h2>Is een aangifte inkomstenbelasting hetzelfde als jaarcijfers?</h2>
        <p>Nee.</p>
        <p>
          Je aangifte inkomstenbelasting en de jaarcijfers van je onderneming zijn verschillende
          documenten.
        </p>
        <p>
          De aangifte inkomstenbelasting bevat je fiscale gegevens als persoon. De jaarcijfers geven
          inzicht in de financiële resultaten van je onderneming.
        </p>
        <p>
          Voor een hypotheek kunnen beide soorten informatie relevant zijn, afhankelijk van de
          gebruikte beoordelingsmethode en de geldverstrekker.
        </p>
        <p>
          Bij de NHG-Inkomensverklaring Ondernemer wordt de onderneming uitgebreid geanalyseerd om
          het toetsinkomen vast te stellen.
        </p>

        <h2>Kan ik mijn hypotheek berekenen zonder definitieve jaarcijfers?</h2>
        <p>Voor een eerste indicatie kan dat.</p>
        <p>
          Je kunt bijvoorbeeld je recente winst en de resultaten van eerdere jaren gebruiken om een
          inschatting te maken.
        </p>
        <p>
          Maar een hypotheekcalculator kan daarmee nog niet automatisch bepalen welk officiële
          toetsinkomen een geldverstrekker zal gebruiken.
        </p>
        <p>
          Dat komt doordat de uiteindelijke beoordeling ook rekening kan houden met:
        </p>
        <ul>
          <li>de ontwikkeling van je winst;</li>
          <li>het laatste volledige boekjaar;</li>
          <li>het lopende boekjaar;</li>
          <li>correctieposten;</li>
          <li>de financiële positie van je onderneming;</li>
          <li>andere inkomsten;</li>
          <li>eventuele financiële verplichtingen.</li>
        </ul>
        <p>
          Voor NHG wordt het uiteindelijke ondernemersinkomen vastgesteld via de Inkomensverklaring
          Ondernemer.
        </p>
        <HypotheekCta />

        <h2>Wat als je jaarcijfers sterk zijn verbeterd?</h2>
        <p>
          Een verbetering van je bedrijfsresultaat is relevante informatie, maar betekent niet
          automatisch dat je volledige nieuwe winst als toetsinkomen wordt gebruikt.
        </p>
        <p>
          De NHG-systematiek kijkt naar de historische resultaten en het actuele inkomen. Wanneer
          het lopende jaar beter is dan de historische jaren, wordt het inkomen binnen het
          standaardtoetskader niet simpelweg onbeperkt naar boven aangepast.
        </p>
        <p>
          Dat voorkomt dat een korte periode met uitzonderlijk hoge inkomsten direct wordt behandeld
          als structureel inkomen.
        </p>

        <h2>Wat als je jaarcijfers juist slechter worden?</h2>
        <p>Een dalend resultaat kan wel gevolgen hebben voor je toetsinkomen.</p>
        <p>
          Als de tussentijdse cijfers van het lopende boekjaar duidelijk lager liggen dan het
          historische gemiddelde, kan aanleiding bestaan om het inkomen naar beneden bij te stellen.
        </p>
        <p>
          Daarom kan het verstandig zijn om niet te wachten tot het moment van de hypotheekaanvraag
          als je onderneming inmiddels sterk is veranderd.
        </p>
        <p>Je actuele financiële situatie kan onderdeel zijn van de beoordeling.</p>

        <h2>Heb je voor een hypotheek zonder NHG ook jaarcijfers nodig?</h2>
        <p>Dat kan, maar de voorwaarden verschillen per geldverstrekker.</p>
        <p>
          De NHG-Inkomensverklaring Ondernemer is specifiek onderdeel van de NHG-systematiek. Zonder
          NHG kan een geldverstrekker een eigen methode gebruiken om het ondernemersinkomen vast te
          stellen.
        </p>
        <p>
          Daarom kun je de NHG-documentenlijst niet automatisch gebruiken als universele checklist
          voor iedere hypotheek.
        </p>
        <p>
          Controleer bij een hypotheek zonder NHG welke financiële documenten de betreffende
          geldverstrekker verlangt.
        </p>

        <h2>Wat kost een Inkomensverklaring Ondernemer?</h2>
        <p>
          De Inkomensverklaring Ondernemer wordt opgesteld door een rekenexpert en is onderdeel van
          het aanvraagproces voor een NHG-hypotheek voor ondernemers.
        </p>
        <p>
          NHG geeft aan dat de verklaring via een adviseur, geldverstrekker of één van de aangewezen
          rekenexperts kan worden aangevraagd. De opdrachtgever betaalt de verklaring.
        </p>
        <p>
          De kosten staan los van de vraag welk toetsinkomen uiteindelijk uit de analyse komt.
        </p>

        <h2>Hoe lang is de Inkomensverklaring geldig?</h2>
        <p>
          Een Inkomensverklaring Ondernemer is vanaf de dagtekening <strong>zes maanden geldig</strong>
          . Binnen die periode moet het bindend aanbod worden gedaan.
        </p>
        <p>
          Het kan daarom relevant zijn om het aanvragen van de verklaring af te stemmen op je
          daadwerkelijke hypotheekaanvraag.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Heb ik als zzp&apos;er jaarcijfers nodig voor een hypotheek?</h3>
        <p>
          Vaak wel. Bij een hypotheek met NHG worden de financiële resultaten van je onderneming
          gebruikt om het ondernemersinkomen vast te stellen.
        </p>
        <h3>Hoeveel jaarcijfers heb ik nodig?</h3>
        <p>
          Bij NHG wordt doorgaans naar de laatste drie kalenderjaren gekeken. Bestaat je
          onderneming korter, dan wordt de beschikbare historie gebruikt.
        </p>
        <h3>Kan ik met één jaar aan jaarcijfers een hypotheek krijgen?</h3>
        <p>
          Dat kan mogelijk. Voor de NHG-Inkomensverklaring Ondernemer moet je minimaal 12 maanden
          actief zijn als ondernemer.
        </p>
        <h3>Tellen voorlopige jaarcijfers mee?</h3>
        <p>
          Dat kan afhankelijk zijn van het moment van de aanvraag. Vanaf 1 mei van het lopende
          boekjaar zijn voor de NHG-Inkomensverklaring de definitieve jaarcijfers van het vorige
          boekjaar verplicht.
        </p>
        <h3>Heb ik ook cijfers van het lopende jaar nodig?</h3>
        <p>
          Dat kan. De NHG-systematiek kijkt naar het lopende boekjaar om te controleren of je
          actuele inkomen in lijn is met de historische resultaten.
        </p>
        <h3>Kan ik mijn aangifte inkomstenbelasting gebruiken in plaats van jaarcijfers?</h3>
        <p>
          Dat hangt af van de gebruikte hypotheekmethode en geldverstrekker. Voor een
          NHG-Inkomensverklaring Ondernemer worden meerdere financiële gegevens van de onderneming
          gebruikt.
        </p>
        <h3>Wat als mijn onderneming nog geen drie jaar bestaat?</h3>
        <p>
          Je hoeft voor de NHG-Inkomensverklaring Ondernemer niet eerst drie jaar ondernemer te zijn.
          Vanaf minimaal 12 maanden ondernemerschap kan de verklaring worden aangevraagd.
        </p>
        <h3>Wat als mijn winst sterk wisselt?</h3>
        <p>
          Een wisselende winst sluit een hypotheek niet automatisch uit. De historische resultaten,
          het laatste boekjaar en het lopende boekjaar kunnen allemaal relevant zijn voor de
          inkomensbeoordeling.
        </p>
        <h3>Kan ik alvast mijn maximale hypotheek berekenen zonder jaarcijfers?</h3>
        <p>
          Ja, voor een eerste indicatie kun je een berekening maken. Voor een definitieve
          hypotheekaanvraag moet echter worden vastgesteld welk toetsinkomen voor jouw situatie
          geldt.
        </p>

        <h2>Bereid je jaarcijfers voor op je hypotheek</h2>
        <p>
          Als zzp&apos;er zijn je jaarcijfers een belangrijk onderdeel van de financiële beoordeling
          voor een hypotheek. Kijk daarom niet alleen naar je omzet of naar het bedrag dat je in één
          goed jaar hebt verdiend.
        </p>
        <p>Zorg dat je inzicht hebt in:</p>
        <ul>
          <li>je winst van de afgelopen jaren;</li>
          <li>je definitieve jaarcijfers;</li>
          <li>je actuele resultaat;</li>
          <li>je cijfers van het lopende boekjaar;</li>
          <li>je btw-aangiften;</li>
          <li>eventuele andere inkomsten.</li>
        </ul>
        <p>
          Bij een NHG-hypotheek wordt vervolgens via de{' '}
          <strong>Inkomensverklaring Ondernemer</strong> vastgesteld welk toetsinkomen voor je
          hypotheek kan worden gebruikt.
        </p>
        <p>
          Heb je nog geen drie volledige jaren als zzp&apos;er? Lees ook{' '}
          <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
            Hypotheek zzp zonder 3 jaar cijfers
          </Link>{' '}
          en{' '}
          <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
            Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
          </Link>
          .
        </p>
        <p>Wil je eerst weten wat je ongeveer kunt lenen?</p>
        <HypotheekCta label="Hypotheek berekenen als zzp'er →" />
        <HypotheekHubLink />
        <p>Meer lezen over hypotheken als zzp&apos;er:</p>
        <ul>
          <li>
            <Link href="/tools/hypotheek-zzp" className="text-warm-orange hover:underline">
              Hypotheek voor zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Welk inkomen telt voor een hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
              Winst uit onderneming voor hypotheek
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
              Hypotheek met wisselend inkomen als zzp&apos;er
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
              Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
              Hypotheek voor startende zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
              Hypotheek als zzp&apos;er zonder 3 jaar cijfers
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: 'hypotheek-zzp-zonder-3-jaar-cijfers',
    relatedSlugs: [
      'jaarcijfers-nodig-voor-hypotheek-als-zzper',
      'hoe-lang-zzper-zijn-voor-hypotheek',
      'hypotheek-voor-startende-zzpers',
      'welk-inkomen-telt-voor-hypotheek-als-zzper',
      'hypotheek-met-wisselend-inkomen-als-zzper',
      'hypotheek-berekenen-als-zzper',
      'hypotheekadviseur-voor-zzpers',
    ],
    title: "Hypotheek als zzp'er zonder 3 jaar cijfers",
    excerpt:
      "Kun je als zzp'er een hypotheek krijgen zonder 3 jaar cijfers? Lees wat mogelijk is met 1 of 2 jaar cijfers en hoe je inkomen wordt beoordeeld.",
    keywords:
      "hypotheek zzp zonder 3 jaar cijfers, hypotheek zonder 3 jaar cijfers zzp, hypotheek als zzp'er zonder 3 jaar cijfers, hypotheek zzp minder dan 3 jaar, hypotheek zzp 1 jaar cijfers, hypotheek zzp 2 jaar cijfers, hypotheek voor startende zzp'er, hypotheek als starter zzp, hypotheek aanvragen zonder 3 jaar jaarcijfers, hypotheek zonder drie jaar jaarcijfers, hypotheek ondernemer korter dan 3 jaar, hypotheek zzp korter dan 3 jaar, hypotheek met 1 jaar cijfers zzp",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Hypotheek%20zzp%20zonder%203%20jaar%20cijfers.jpg',
      alt: "Hypotheek als zzp'er zonder 3 jaar cijfers: wat kan met 1 of 2 jaar cijfers?",
    },
    datePublished: '2026-09-18',
    dateModified: '2026-09-18',
    faq: [
      {
        question: "Kan ik als zzp'er een hypotheek krijgen zonder 3 jaar cijfers?",
        answer:
          'Ja, dat kan mogelijk. Voor NHG kan vanaf minimaal 12 maanden ondernemerschap een Inkomensverklaring Ondernemer worden gebruikt. Als je onderneming korter dan drie jaar bestaat, wordt de beschikbare financiële historie beoordeeld.',
      },
      {
        question: "Hoeveel jaar moet ik zzp'er zijn voor een hypotheek?",
        answer:
          "Je hoeft niet automatisch drie jaar zzp'er te zijn. Voor de NHG-Inkomensverklaring Ondernemer geldt een minimale periode van 12 maanden ondernemerschap.",
      },
      {
        question: 'Kan ik met 1 jaar cijfers een hypotheek krijgen?',
        answer:
          'Dat kan mogelijk. Bij minimaal 12 maanden ondernemerschap kan de Inkomensverklaring Ondernemer worden gebruikt. Je beschikbare financiële gegevens worden vervolgens beoordeeld.',
      },
      {
        question: 'Kan ik met 2 jaar cijfers een hypotheek krijgen?',
        answer:
          'Dat kan mogelijk. Als je onderneming nog geen drie jaar bestaat, kan de beschikbare financiële historie worden gebruikt voor de inkomensbeoordeling.',
      },
      {
        question: 'Waarom denken veel mensen dat je 3 jaar cijfers nodig hebt?',
        answer:
          'Bij een gevestigde ondernemer wordt binnen de NHG-systematiek doorgaans gekeken naar de resultaten van de laatste drie kalenderjaren. Daardoor wordt soms gedacht dat je ook verplicht drie jaar ondernemer moet zijn. Voor de Inkomensverklaring Ondernemer geldt echter een minimale ondernemingsduur van 12 maanden.',
      },
      {
        question: "Kan ik als startende zzp'er een hypotheek met NHG krijgen?",
        answer:
          'Dat kan mogelijk. Voor de NHG-Inkomensverklaring Ondernemer moet je minimaal 12 maanden actief zijn als ondernemer.',
      },
      {
        question: 'Wat als ik nog geen definitieve jaarcijfers heb?',
        answer:
          'Welke documenten nodig zijn, hangt af van het moment van aanvragen. Naast jaarcijfers kunnen ook tussentijdse cijfers en btw-aangiften relevant zijn.',
      },
      {
        question: 'Wordt mijn winst van één jaar volledig meegenomen?',
        answer:
          'Niet automatisch. Het toetsinkomen wordt vastgesteld volgens het geldende toetskader. Bij een korte ondernemershistorie is er minder financiële historie beschikbaar om het inkomen te beoordelen.',
      },
      {
        question: 'Kan ik zonder 3 jaar cijfers een hypotheek zonder NHG krijgen?',
        answer:
          'Dat kan mogelijk, maar de voorwaarden verschillen per geldverstrekker. Zonder NHG gelden niet automatisch dezelfde regels als bij de NHG-Inkomensverklaring Ondernemer.',
      },
      {
        question: "Is een hypotheek moeilijker als je minder dan 3 jaar zzp'er bent?",
        answer:
          'Een korte ondernemershistorie betekent dat er minder financiële informatie beschikbaar is. Hoe dat precies wordt beoordeeld, hangt af van de hypotheekroute en geldverstrekker.',
      },
    ],
    content: (
      <>
        <p>
          Ben je pas kort geleden begonnen als zzp&apos;er en heb je nog geen drie volledige jaren
          aan jaarcijfers? Dan betekent dat niet automatisch dat je geen hypotheek kunt krijgen.
        </p>
        <p>
          Voor ondernemers wordt gekeken naar de financiële resultaten van de onderneming en naar
          de ontwikkeling van het inkomen. Bij een hypotheek met NHG kan een{' '}
          <strong>Inkomensverklaring Ondernemer</strong> worden gebruikt om het toetsinkomen vast te
          stellen.
        </p>
        <p>Daarvoor hoef je niet altijd drie volledige jaren ondernemer te zijn.</p>
        <p>
          Als je onderneming minimaal 12 maanden bestaat, kan de Inkomensverklaring Ondernemer
          mogelijk worden gebruikt. Bij een onderneming die korter dan drie jaar bestaat, wordt de
          beschikbare financiële historie gebruikt.
        </p>
        <p>
          Het ontbreken van drie volledige jaarcijfers betekent dus niet automatisch dat een
          hypotheek onmogelijk is.
        </p>

        <h2>Kun je als zzp&apos;er een hypotheek krijgen zonder 3 jaar cijfers?</h2>
        <p>Ja, dat kan mogelijk.</p>
        <p>
          De gedachte dat je als zzp&apos;er altijd eerst drie jaar ondernemer moet zijn voordat je
          een hypotheek kunt krijgen, klopt niet als algemene regel.
        </p>
        <p>
          Voor NHG kan een ondernemer vanaf minimaal 12 maanden ondernemerschap gebruikmaken van de
          Inkomensverklaring Ondernemer. Bestaat je onderneming korter dan drie jaar, dan wordt
          gekeken naar de beschikbare financiële historie.
        </p>
        <p>
          Je hoeft dus niet eerst drie volledige jaren te hebben voordat je überhaupt voor een
          hypotheek in aanmerking kunt komen.
        </p>
        <p>
          Wel kan een kortere ondernemershistorie invloed hebben op de manier waarop je inkomen
          wordt vastgesteld.
        </p>

        <h2>Hoeveel jaar moet je zzp&apos;er zijn voor een hypotheek?</h2>
        <p>Er is geen algemene regel dat je precies drie jaar zzp&apos;er moet zijn.</p>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer geldt een minimale periode van{' '}
          <strong>12 maanden ondernemerschap</strong>.
        </p>
        <p>Daarbij wordt onderscheid gemaakt tussen ondernemers met:</p>
        <ul>
          <li>ongeveer 1 jaar ondernemerschap;</li>
          <li>2 jaar ondernemerschap;</li>
          <li>3 jaar of langer ondernemerschap.</li>
        </ul>
        <p>
          Hoe langer je onderneming bestaat, hoe meer financiële historie beschikbaar is om je
          inkomen te beoordelen.
        </p>
        <p>
          Dat betekent echter niet dat iemand met één jaar cijfers automatisch geen hypotheek kan
          krijgen.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
            Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
          </Link>
        </p>

        <h2>Hypotheek als zzp&apos;er met 1 jaar cijfers</h2>
        <p>
          Ben je ongeveer één jaar ondernemer? Dan is je situatie anders dan die van een zzp&apos;er
          die al meerdere jaren een onderneming heeft.
        </p>
        <p>Er zijn simpelweg minder financiële gegevens beschikbaar.</p>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer kan vanaf minimaal 12 maanden ondernemerschap een
          inkomensverklaring worden aangevraagd. De beschikbare financiële historie wordt vervolgens
          gebruikt om je ondernemersinkomen te beoordelen.
        </p>
        <p>
          Bij één jaar ondernemerschap kan het daarom extra belangrijk zijn dat je financiële
          administratie goed op orde is.
        </p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>je financiële resultaten;</li>
          <li>je aangifte inkomstenbelasting;</li>
          <li>je omzet;</li>
          <li>je kosten;</li>
          <li>je actuele cijfers;</li>
          <li>je btw-aangiften;</li>
          <li>de ontwikkeling van je onderneming.</li>
        </ul>
        <p>
          Welke documenten precies nodig zijn, hangt af van je situatie en het moment van de
          aanvraag.
        </p>

        <h2>Hypotheek als zzp&apos;er met 2 jaar cijfers</h2>
        <p>
          Heb je inmiddels twee jaar cijfers beschikbaar, dan is er meer historische informatie over
          je onderneming.
        </p>
        <p>Dat kan helpen bij het beoordelen van de ontwikkeling van je inkomen.</p>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer wordt bij een onderneming die korter dan drie
          jaar bestaat gekeken naar de beschikbare periode.
        </p>
        <p>Je hebt dus niet per se drie volledige jaren nodig.</p>
        <p>
          Wel blijft het belangrijk dat de financiële resultaten voldoende inzicht geven in je
          onderneming en dat ook de actuele ontwikkeling kan worden beoordeeld.
        </p>

        <h2>Waarom wordt vaak gesproken over 3 jaar?</h2>
        <p>
          De periode van drie jaar komt vooral terug omdat bij een gevestigde ondernemer de
          financiële resultaten van de laatste drie kalenderjaren een belangrijke basis vormen voor
          de inkomensbeoordeling.
        </p>
        <p>
          Bij NHG wordt het gemiddelde inkomen over de laatste drie kalenderjaren als uitgangspunt
          genomen. Het laatste jaar vormt daarbij een maximum.
        </p>
        <p>
          Heb je nog geen drie volledige jaren als ondernemer, dan kan die volledige historie
          uiteraard niet worden gebruikt.
        </p>
        <p>Daarom wordt bij een jongere onderneming gekeken naar de beschikbare gegevens.</p>
        <p>De regel is dus niet:</p>
        <blockquote>
          <p>&quot;Je moet drie jaar zzp&apos;er zijn.&quot;</p>
        </blockquote>
        <p>Maar eerder:</p>
        <blockquote>
          <p>
            &quot;Hoeveel financiële historie is beschikbaar om je ondernemersinkomen te
            beoordelen?&quot;
          </p>
        </blockquote>

        <h2>Voorbeeld: één jaar ondernemer</h2>
        <p>Stel dat je op 1 januari 2025 bent gestart als zzp&apos;er.</p>
        <p>In 2025 maakte je:</p>
        <p>
          <strong>€45.000 winst.</strong>
        </p>
        <p>In 2026 wil je een hypotheek aanvragen.</p>
        <p>Je hebt dan nog geen drie volledige kalenderjaren als ondernemer.</p>
        <p>Dat betekent niet automatisch dat je moet wachten tot 2028.</p>
        <p>
          Voor NHG kan vanaf minimaal 12 maanden ondernemerschap een Inkomensverklaring Ondernemer
          worden gebruikt. De beschikbare financiële informatie over je onderneming wordt daarbij
          beoordeeld.
        </p>
        <p>
          Je situatie wordt dus anders beoordeeld dan die van een ondernemer met drie volledige
          jaren aan resultaten, maar een hypotheek is niet per definitie uitgesloten.
        </p>

        <h2>Voorbeeld: twee jaar ondernemer</h2>
        <p>Stel:</p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[240px] border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b border-slate-200 py-2 pr-4 font-semibold">Jaar</th>
                <th className="border-b border-slate-200 py-2 text-right font-semibold">Winst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 1</td>
                <td className="border-b border-slate-100 py-2 text-right">€35.000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Jaar 2</td>
                <td className="py-2 text-right">€50.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Je bent inmiddels twee jaar ondernemer en hebt twee volledige jaren aan resultaten.
        </p>
        <p>Je hebt nog geen drie jaar cijfers.</p>
        <p>
          Toch kan je beschikbare financiële historie worden gebruikt voor de beoordeling van je
          ondernemersinkomen.
        </p>
        <p>
          Daarbij wordt niet alleen gekeken naar de hoogte van de winst. Ook de ontwikkeling van de
          onderneming en het actuele inkomen kunnen relevant zijn.
        </p>

        <h2>Wat als je onderneming minder dan 12 maanden bestaat?</h2>
        <p>Hier ligt een belangrijk verschil.</p>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer moet je minimaal 12 maanden actief zijn als
          ondernemer.
        </p>
        <p>
          Ben je pas enkele maanden geleden gestart, dan kun je dus niet simpelweg dezelfde route
          gebruiken als een ondernemer die al minimaal een jaar actief is.
        </p>
        <p>
          Dat betekent niet noodzakelijk dat iedere hypotheek zonder meer onmogelijk is.
          Geldverstrekkers kunnen verschillende acceptatiecriteria hanteren, vooral buiten NHG.
        </p>
        <p>
          Maar je kunt de NHG-regels voor een ondernemer vanaf 12 maanden niet zomaar toepassen op
          iemand die pas enkele maanden actief is.
        </p>

        <h2>Tellen voorlopige cijfers mee?</h2>
        <p>Dat kan.</p>
        <p>
          Welke cijfers nodig zijn, hangt onder andere af van het moment waarop je de hypotheek
          aanvraagt.
        </p>
        <p>
          Bij een NHG-Inkomensverklaring Ondernemer wordt niet alleen naar afgesloten boekjaren
          gekeken. Ook het lopende boekjaar kan worden gecontroleerd.
        </p>
        <p>
          Vanaf 1 mei van het lopende boekjaar zijn de definitieve jaarcijfers van het vorige
          boekjaar onderdeel van de verplichte documentatie.
        </p>
        <p>
          Later in het jaar kunnen ook tussentijdse cijfers en btw-aangiften nodig zijn.
        </p>
        <p>
          Dit is vooral relevant voor startende ondernemers, omdat hun financiële historie vaak nog
          beperkt is. Lees ook{' '}
          <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
            Jaarcijfers nodig voor hypotheek als zzp&apos;er?
          </Link>
          .
        </p>

        <h2>Wat als je nog geen definitieve jaarrekening hebt?</h2>
        <p>
          Ook hier moet je onderscheid maken tussen een onderneming die nog maar kort bestaat en een
          onderneming waarvan het laatste boekjaar simpelweg nog niet definitief is afgesloten.
        </p>
        <p>
          Als je bijvoorbeeld in 2025 bent gestart en in 2026 een hypotheek aanvraagt, kunnen de
          financiële resultaten over 2025 relevant zijn.
        </p>
        <p>
          Zijn de definitieve jaarcijfers inmiddels beschikbaar, dan kunnen deze onderdeel zijn van
          de documentatie.
        </p>
        <p>
          Daarnaast kan informatie over 2026 nodig zijn om te beoordelen hoe je onderneming momenteel
          presteert.
        </p>
        <p>Je moet daarom niet alleen kijken naar de vraag:</p>
        <blockquote>
          <p>&quot;Heb ik drie jaarcijfers?&quot;</p>
        </blockquote>
        <p>maar vooral:</p>
        <blockquote>
          <p>
            &quot;Welke financiële informatie is op het moment van mijn hypotheekaanvraag
            beschikbaar?&quot;
          </p>
        </blockquote>

        <h2>Hoe wordt je inkomen berekend als je geen 3 jaar cijfers hebt?</h2>
        <p>
          Bij een jongere onderneming kan niet worden uitgegaan van drie volledige kalenderjaren als
          die simpelweg niet bestaan.
        </p>
        <p>De beschikbare financiële historie wordt gebruikt.</p>
        <p>Het uiteindelijke toetsinkomen is daardoor niet noodzakelijk gelijk aan:</p>
        <p>
          <strong>je winst van het laatste jaar.</strong>
        </p>
        <p>
          De inkomensbeoordeling kijkt naar het geldende toetskader en de beschikbare financiële
          informatie.
        </p>
        <p>Bij NHG wordt dit vastgesteld via de Inkomensverklaring Ondernemer.</p>
        <p>Daarbij wordt onder andere gekeken naar:</p>
        <ul>
          <li>de fiscale winst;</li>
          <li>de beschikbare historische resultaten;</li>
          <li>het laatste boekjaar;</li>
          <li>het lopende boekjaar;</li>
          <li>de financiële ontwikkeling van de onderneming;</li>
          <li>de financiële positie van de onderneming.</li>
        </ul>

        <h2>Kun je met één goed jaar direct een hoge hypotheek krijgen?</h2>
        <p>Niet automatisch.</p>
        <p>
          Als je pas één jaar ondernemer bent en in dat jaar bijvoorbeeld €80.000 winst hebt
          gemaakt, betekent dat niet automatisch dat een geldverstrekker simpelweg €80.000 als
          duurzaam toetsinkomen gebruikt.
        </p>
        <p>Er is immers nog weinig historische informatie beschikbaar.</p>
        <p>
          Bij de beoordeling wordt gekeken naar het geldende toetskader en de ontwikkeling van de
          onderneming.
        </p>
        <p>
          Een hoog inkomen in een korte periode is daarom niet hetzelfde als een langdurig stabiel
          ondernemersinkomen.
        </p>

        <h2>Wat als je inkomen snel stijgt?</h2>
        <p>
          Een sterk groeiende onderneming kan een ander beeld geven dan een onderneming waarvan het
          inkomen stabiel blijft.
        </p>
        <p>Stel:</p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[240px] border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b border-slate-200 py-2 pr-4 font-semibold">Jaar</th>
                <th className="border-b border-slate-200 py-2 text-right font-semibold">Winst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 1</td>
                <td className="border-b border-slate-100 py-2 text-right">€25.000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Jaar 2</td>
                <td className="py-2 text-right">€50.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Je inkomen is duidelijk gestegen.</p>
        <p>
          Dat is relevante informatie, maar je kunt niet automatisch aannemen dat je hypotheek wordt
          gebaseerd op €50.000.
        </p>
        <p>De uiteindelijke inkomensvaststelling volgt het geldende toetskader.</p>
        <p>
          Ook het lopende boekjaar kan worden bekeken om te beoordelen of de ontwikkeling van je
          onderneming aansluit bij de historische resultaten.
        </p>

        <h2>Wat als je inkomen juist daalt?</h2>
        <p>Hetzelfde geldt in de andere richting.</p>
        <p>Stel:</p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[240px] border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b border-slate-200 py-2 pr-4 font-semibold">Jaar</th>
                <th className="border-b border-slate-200 py-2 text-right font-semibold">Winst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 1</td>
                <td className="border-b border-slate-100 py-2 text-right">€60.000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Jaar 2</td>
                <td className="py-2 text-right">€35.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Je gemiddelde of eerdere winst vertelt dan niet het volledige verhaal.</p>
        <p>
          Een dalend inkomen kan invloed hebben op het inkomen dat voor de hypotheek wordt
          gebruikt.
        </p>
        <p>
          Daarom zijn actuele cijfers belangrijk wanneer je onderneming inmiddels duidelijk anders
          presteert dan in eerdere jaren.
        </p>

        <h2>Zijn jaarcijfers verplicht voor iedere zzp&apos;er?</h2>
        <p>Niet iedere hypotheekaanvraag gebruikt exact dezelfde documenten.</p>
        <p>
          Geldverstrekkers hebben hun eigen acceptatiebeleid en buiten NHG kunnen andere methodes
          worden gebruikt.
        </p>
        <p>
          Toch zijn financiële gegevens van je onderneming bij een hypotheekaanvraag als zzp&apos;er
          belangrijk. De geldverstrekker moet immers kunnen beoordelen welk inkomen uit je
          onderneming kan worden meegenomen.
        </p>
        <p>Dat kunnen bijvoorbeeld zijn:</p>
        <ul>
          <li>jaarcijfers;</li>
          <li>aangiften inkomstenbelasting;</li>
          <li>tussentijdse cijfers;</li>
          <li>btw-aangiften;</li>
          <li>bankgegevens;</li>
          <li>andere financiële documenten.</li>
        </ul>
        <p>
          Welke stukken daadwerkelijk nodig zijn, hangt af van de geldverstrekker en jouw situatie.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
            Jaarcijfers nodig voor hypotheek als zzp&apos;er?
          </Link>
        </p>

        <h2>Hypotheek zonder 3 jaar cijfers met NHG</h2>
        <p>
          De NHG-route is voor ondernemers interessant omdat hiervoor een specifieke methode bestaat
          om het ondernemersinkomen vast te stellen.
        </p>
        <p>
          De <strong>Inkomensverklaring Ondernemer</strong> kan vanaf minimaal 12 maanden
          ondernemerschap worden gebruikt.
        </p>
        <p>
          Heb je nog geen drie jaar cijfers, dan wordt de beschikbare financiële historie beoordeeld.
        </p>
        <p>
          Daarmee is de situatie voor een startende zzp&apos;er duidelijk anders dan de vaak
          gehoorde regel dat je eerst drie jaar ondernemer moet zijn.
        </p>
        <p>NHG stelt wel voorwaarden aan de onderneming en de inkomensbeoordeling.</p>

        <h2>Hypotheek zonder 3 jaar cijfers zonder NHG</h2>
        <p>Zonder NHG kunnen andere regels gelden.</p>
        <p>
          Een geldverstrekker kan bijvoorbeeld eigen criteria hanteren voor ondernemers die één of
          twee jaar actief zijn.
        </p>
        <p>
          Daarom is het niet verstandig om de NHG-regels als algemene regel voor iedere hypotheek te
          gebruiken.
        </p>
        <p>
          Als je geen NHG gebruikt, moet je specifiek kijken naar het acceptatiebeleid van de
          geldverstrekker.
        </p>
        <p>
          Dat kan betekenen dat de ene geldverstrekker anders omgaat met een korte
          ondernemershistorie dan de andere.
        </p>

        <h2>Kan een startende zzp&apos;er een hypotheek krijgen?</h2>
        <p>Ja, dat kan mogelijk.</p>
        <p>
          Een startende zzp&apos;er heeft alleen minder historische financiële gegevens dan een
          ondernemer die al meerdere jaren actief is.
        </p>
        <p>
          Voor NHG kan vanaf minimaal 12 maanden ondernemerschap een Inkomensverklaring Ondernemer
          worden gebruikt.
        </p>
        <p>
          Of je daadwerkelijk een hypotheek kunt krijgen en hoeveel je kunt lenen, hangt vervolgens
          ook af van andere factoren.
        </p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>je vastgestelde toetsinkomen;</li>
          <li>hypotheekrente;</li>
          <li>andere leningen;</li>
          <li>studieschuld;</li>
          <li>leaseverplichtingen;</li>
          <li>inkomen van je partner;</li>
          <li>waarde van de woning;</li>
          <li>de geldende leennormen.</li>
        </ul>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
            Hypotheek voor startende zzp&apos;ers
          </Link>
        </p>

        <h2>Heeft een eenmanszaak een andere beoordeling dan een bv?</h2>
        <p>
          Ja, de manier waarop ondernemersinkomen wordt vastgesteld kan verschillen per
          ondernemingsvorm.
        </p>
        <p>
          Bij een eenmanszaak of vof wordt onder andere gekeken naar de fiscale winst van de
          onderneming.
        </p>
        <p>
          Bij een bv ligt de situatie anders. Daar kan bijvoorbeeld onderscheid worden gemaakt tussen
          salaris uit de bv en het resultaat van de onderneming.
        </p>
        <p>
          Daarom kun je de regels voor een eenmanszaak niet automatisch toepassen op een
          directeur-grootaandeelhouder van een bv.
        </p>

        <h2>Kun je zonder jaarrekening een hypotheek krijgen?</h2>
        <p>
          Een hypotheek zonder een formele jaarrekening is niet hetzelfde als een hypotheek zonder
          financiële gegevens.
        </p>
        <p>
          Bij sommige ondernemers is een uitgebreide jaarrekening bijvoorbeeld niet op dezelfde
          manier beschikbaar als bij een bv.
        </p>
        <p>
          De geldverstrekker zal echter nog steeds financiële informatie nodig hebben om het
          ondernemersinkomen te kunnen beoordelen.
        </p>
        <p>
          Welke documenten daarvoor worden gebruikt, hangt af van de ondernemingsvorm en de gekozen
          hypotheekroute.
        </p>

        <h2>Hoeveel hypotheek kun je krijgen zonder 3 jaar cijfers?</h2>
        <p>
          Er is geen vast bedrag dat geldt voor iedere zzp&apos;er zonder drie jaar cijfers.
        </p>
        <p>
          De maximale hypotheek wordt niet alleen bepaald door het aantal jaren dat je ondernemer
          bent.
        </p>
        <p>
          Nadat je toetsinkomen is vastgesteld, spelen ook andere factoren een rol.
        </p>
        <p>Bijvoorbeeld:</p>
        <ul>
          <li>je inkomen;</li>
          <li>het inkomen van je partner;</li>
          <li>hypotheekrente;</li>
          <li>andere financiële verplichtingen;</li>
          <li>studieschuld;</li>
          <li>lease;</li>
          <li>de waarde van de woning;</li>
          <li>de geldende leennormen.</li>
        </ul>
        <p>Daarom kun je niet zeggen:</p>
        <blockquote>
          <p>&quot;Ik ben twee jaar zzp&apos;er, dus ik kan maximaal €X lenen.&quot;</p>
        </blockquote>
        <p>Je toetsinkomen moet eerst worden vastgesteld.</p>

        <h2>Kun je alvast je maximale hypotheek berekenen?</h2>
        <p>Ja, voor een eerste indicatie kan dat.</p>
        <p>
          Als je nog geen drie jaar cijfers hebt, kun je bijvoorbeeld je beschikbare winst en andere
          inkomsten gebruiken om een indicatie te krijgen.
        </p>
        <p>
          Maar een online berekening is geen vervanging voor een officiële inkomensbeoordeling.
        </p>
        <p>
          Voor een NHG-hypotheek kan de Inkomensverklaring Ondernemer uiteindelijk bepalen welk
          ondernemersinkomen voor de hypotheek wordt gebruikt.
        </p>
        <HypotheekCta />

        <h2>Veelgestelde vragen</h2>
        <h3>Kan ik als zzp&apos;er een hypotheek krijgen zonder 3 jaar cijfers?</h3>
        <p>
          Ja, dat kan mogelijk. Voor NHG kan vanaf minimaal 12 maanden ondernemerschap een
          Inkomensverklaring Ondernemer worden gebruikt. Als je onderneming korter dan drie jaar
          bestaat, wordt de beschikbare financiële historie beoordeeld.
        </p>
        <h3>Hoeveel jaar moet ik zzp&apos;er zijn voor een hypotheek?</h3>
        <p>
          Je hoeft niet automatisch drie jaar zzp&apos;er te zijn. Voor de NHG-Inkomensverklaring
          Ondernemer geldt een minimale periode van 12 maanden ondernemerschap.
        </p>
        <h3>Kan ik met 1 jaar cijfers een hypotheek krijgen?</h3>
        <p>
          Dat kan mogelijk. Bij minimaal 12 maanden ondernemerschap kan de Inkomensverklaring
          Ondernemer worden gebruikt. Je beschikbare financiële gegevens worden vervolgens
          beoordeeld.
        </p>
        <h3>Kan ik met 2 jaar cijfers een hypotheek krijgen?</h3>
        <p>
          Dat kan mogelijk. Als je onderneming nog geen drie jaar bestaat, kan de beschikbare
          financiële historie worden gebruikt voor de inkomensbeoordeling.
        </p>
        <h3>Waarom denken veel mensen dat je 3 jaar cijfers nodig hebt?</h3>
        <p>
          Bij een gevestigde ondernemer wordt binnen de NHG-systematiek doorgaans gekeken naar de
          resultaten van de laatste drie kalenderjaren. Daardoor wordt soms gedacht dat je ook
          verplicht drie jaar ondernemer moet zijn. Voor de Inkomensverklaring Ondernemer geldt
          echter een minimale ondernemingsduur van 12 maanden.
        </p>
        <h3>Kan ik als startende zzp&apos;er een hypotheek met NHG krijgen?</h3>
        <p>
          Dat kan mogelijk. Voor de NHG-Inkomensverklaring Ondernemer moet je minimaal 12 maanden
          actief zijn als ondernemer.
        </p>
        <h3>Wat als ik nog geen definitieve jaarcijfers heb?</h3>
        <p>
          Welke documenten nodig zijn, hangt af van het moment van aanvragen. Naast jaarcijfers
          kunnen ook tussentijdse cijfers en btw-aangiften relevant zijn.
        </p>
        <h3>Wordt mijn winst van één jaar volledig meegenomen?</h3>
        <p>
          Niet automatisch. Het toetsinkomen wordt vastgesteld volgens het geldende toetskader. Bij
          een korte ondernemershistorie is er minder financiële historie beschikbaar om het inkomen
          te beoordelen.
        </p>
        <h3>Kan ik zonder 3 jaar cijfers een hypotheek zonder NHG krijgen?</h3>
        <p>
          Dat kan mogelijk, maar de voorwaarden verschillen per geldverstrekker. Zonder NHG gelden
          niet automatisch dezelfde regels als bij de NHG-Inkomensverklaring Ondernemer.
        </p>
        <h3>Is een hypotheek moeilijker als je minder dan 3 jaar zzp&apos;er bent?</h3>
        <p>
          Een korte ondernemershistorie betekent dat er minder financiële informatie beschikbaar is.
          Hoe dat precies wordt beoordeeld, hangt af van de hypotheekroute en geldverstrekker.
        </p>

        <h2>Hypotheek als zzp&apos;er zonder 3 jaar cijfers</h2>
        <p>
          Je hoeft als zzp&apos;er niet automatisch drie volledige jaren ondernemer te zijn voordat
          je een hypotheek kunt aanvragen.
        </p>
        <p>
          Voor NHG kan vanaf <strong>12 maanden ondernemerschap</strong> een Inkomensverklaring
          Ondernemer worden gebruikt. Heb je nog geen drie jaar cijfers, dan wordt gekeken naar de
          financiële informatie die wél beschikbaar is.
        </p>
        <p>
          Het belangrijkste is daarom niet alleen hoeveel jaar je ondernemer bent, maar welk{' '}
          <strong>toetsinkomen</strong> op basis van je financiële situatie kan worden vastgesteld.
        </p>
        <p>
          Heb je één of twee jaar cijfers? Dan kan het dus zeker de moeite waard zijn om je
          mogelijkheden te laten berekenen.
        </p>
        <p>
          Heb je nog geen drie volledige jaren als zzp&apos;er? Lees ook{' '}
          <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
            Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
          </Link>{' '}
          en{' '}
          <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
            Jaarcijfers nodig voor een hypotheek als zzp&apos;er?
          </Link>
          .
        </p>
        <HypotheekCta label="Hypotheek berekenen als zzp'er →" />
        <HypotheekHubLink />
        <p>Meer lezen over hypotheken als zzp&apos;er:</p>
        <ul>
          <li>
            <Link href="/tools/hypotheek-zzp" className="text-warm-orange hover:underline">
              Hypotheek voor zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Welk inkomen telt voor een hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
              Winst uit onderneming voor hypotheek
            </Link>
          </li>
          <li>
            <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Jaarcijfers nodig voor hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
              Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
              Hypotheek voor startende zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
              Hypotheek met wisselend inkomen als zzp&apos;er
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-berekenen-als-zzper" className="text-warm-orange hover:underline">
              Hypotheek berekenen als zzp&apos;er
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: 'hypotheek-berekenen-als-zzper',
    relatedSlugs: [
      'hoeveel-hypotheek-kan-ik-krijgen-als-zzper',
      'welk-inkomen-telt-voor-hypotheek-als-zzper',
      'winst-uit-onderneming-voor-hypotheek',
      'hypotheek-zzp-zonder-3-jaar-cijfers',
      'hypotheek-met-wisselend-inkomen-als-zzper',
      'hypotheekadviseur-voor-zzpers',
    ],
    title: "Hypotheek berekenen als zzp'er",
    metaTitle: "Hypotheek berekenen als zzp'er | Maximale hypotheek",
    excerpt:
      "Hoeveel hypotheek kun je krijgen als zzp'er? Bereken je maximale hypotheek en ontdek hoe winst, toetsinkomen, schulden en partnerinkomen meetellen.",
    keywords:
      "hypotheek berekenen als zzp'er, hypotheek berekenen zzp, hypotheek zzp berekenen, maximale hypotheek zzp, maximale hypotheek berekenen zzp, hoeveel hypotheek kan ik krijgen als zzp'er, hoeveel kan ik lenen als zzp'er, hypotheekcalculator zzp, hypotheek berekenen ondernemer, hypotheek berekenen eenmanszaak, hypotheek op basis van winst zzp, toetsinkomen zzp hypotheek, inkomen zzp hypotheek berekenen, hypotheek zzp inkomen berekenen",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Hypotheek%20berekenen%20als%20zzper.jpg',
      alt: "Hypotheek berekenen als zzp'er: maximale hypotheek op basis van toetsinkomen en winst.",
    },
    datePublished: '2026-09-18',
    dateModified: '2026-09-18',
    faq: [
      {
        question: "Hoe bereken ik mijn maximale hypotheek als zzp'er?",
        answer:
          'Eerst moet je toetsinkomen worden vastgesteld. Daarna wordt met je inkomen, financiële verplichtingen, eventuele partnerinkomen, hypotheekrente en andere gegevens je maximale hypotheek berekend.',
      },
      {
        question: 'Kan ik mijn hypotheek berekenen op basis van mijn winst?',
        answer:
          'Voor een eerste indicatie kan dat. Je winst is echter niet automatisch hetzelfde als je officiële toetsinkomen.',
      },
      {
        question: 'Wordt mijn omzet gebruikt voor mijn hypotheek?',
        answer:
          'Niet rechtstreeks. Voor een IB-ondernemer vormt de fiscale winst een belangrijke basis voor de inkomensbeoordeling.',
      },
      {
        question: 'Hoeveel hypotheek kan ik krijgen met €50.000 winst?',
        answer:
          'Dat is afhankelijk van je uiteindelijke toetsinkomen en andere factoren zoals rente, schulden, lease, partnerinkomen en de woningwaarde.',
      },
      {
        question: 'Hoeveel jaar cijfers heb ik nodig?',
        answer:
          'Je hebt niet automatisch drie volledige jaren nodig. Voor de NHG-Inkomensverklaring Ondernemer geldt een minimale periode van 12 maanden ondernemerschap.',
      },
      {
        question: "Kan ik als startende zzp'er een hypotheek krijgen?",
        answer:
          'Dat kan mogelijk. Vanaf minimaal 12 maanden ondernemerschap kan binnen de NHG-route een Inkomensverklaring Ondernemer worden gebruikt.',
      },
      {
        question: 'Telt mijn partnerinkomen mee?',
        answer:
          'Dat kan. De manier waarop het inkomen van je partner wordt meegenomen hangt af van het type inkomen en de geldende hypotheekregels.',
      },
      {
        question: 'Verlagen schulden mijn maximale hypotheek?',
        answer:
          'Ja. Bestaande financiële verplichtingen zoals leningen, studieschuld en lease kunnen invloed hebben op je maximale hypotheek.',
      },
      {
        question: "Kan ik zonder NHG een hypotheek als zzp'er krijgen?",
        answer:
          'Dat kan mogelijk. Zonder NHG kunnen geldverstrekkers hun eigen voorwaarden hanteren voor het beoordelen van ondernemersinkomen.',
      },
      {
        question: "Is een hypotheekcalculator voor zzp'ers betrouwbaar?",
        answer:
          'Een calculator kan een goede eerste indicatie geven, maar het resultaat is niet automatisch het definitieve hypotheekbedrag. De uiteindelijke berekening hangt af van het toetsinkomen en de volledige financiële situatie.',
      },
    ],
    content: (
      <>
        <p>
          Wil je als zzp&apos;er een huis kopen? Dan wil je waarschijnlijk eerst weten hoeveel
          hypotheek je ongeveer kunt krijgen.
        </p>
        <p>Dat werkt voor een ondernemer net iets anders dan voor iemand in loondienst.</p>
        <p>
          Bij een werknemer kan het salaris op de loonstrook een belangrijk uitgangspunt zijn. Als
          zzp&apos;er wordt gekeken naar het inkomen uit je onderneming en naar de financiële
          ontwikkeling daarvan.
        </p>
        <p>Daarbij is je omzet niet hetzelfde als je inkomen.</p>
        <p>
          Voor een hypotheek is vooral belangrijk welk <strong>toetsinkomen</strong> uiteindelijk
          voor jouw situatie wordt vastgesteld.
        </p>
        <p>Je kunt daarom niet simpelweg zeggen:</p>
        <blockquote>
          <p>
            &quot;Ik heb €80.000 omzet, dus ik kan €80.000 als inkomen gebruiken.&quot;
          </p>
        </blockquote>
        <p>
          De hypotheekverstrekker kijkt naar de financiële resultaten van je onderneming en naar het
          geldende toetskader.
        </p>

        <h2>Hoe bereken je een hypotheek als zzp&apos;er?</h2>
        <p>De berekening bestaat grofweg uit twee stappen.</p>
        <p>
          Eerst wordt vastgesteld welk inkomen van jou als ondernemer voor de hypotheek kan worden
          gebruikt.
        </p>
        <p>
          Daarna wordt met dat inkomen gekeken hoeveel hypotheek je binnen de geldende leennormen
          kunt krijgen.
        </p>
        <p>
          Bij een hypotheek met NHG kan het ondernemersinkomen worden vastgesteld met een{' '}
          <strong>Inkomensverklaring Ondernemer</strong>.
        </p>
        <p>Daarbij wordt onder andere gekeken naar:</p>
        <ul>
          <li>je financiële resultaten;</li>
          <li>je winst uit onderneming;</li>
          <li>je historische inkomen;</li>
          <li>je laatste boekjaar;</li>
          <li>je lopende boekjaar;</li>
          <li>de financiële positie van je onderneming.</li>
        </ul>
        <p>
          Heb je meerdere jaren als ondernemer, dan wordt je inkomen anders beoordeeld dan wanneer
          je net bent gestart.
        </p>

        <h2>Welke winst telt voor je hypotheek?</h2>
        <p>
          Voor een IB-ondernemer, zoals iemand met een eenmanszaak, vormt de fiscale winst een
          belangrijke basis voor de inkomensbeoordeling.
        </p>
        <p>Je omzet is dus niet hetzelfde als je hypotheekinkomen.</p>
        <p>Stel:</p>
        <ul>
          <li>omzet: €100.000;</li>
          <li>zakelijke kosten: €30.000;</li>
          <li>fiscale winst: €70.000.</li>
        </ul>
        <p>
          Dan betekent dit niet automatisch dat €70.000 ook precies je toetsinkomen voor de
          hypotheek is.
        </p>
        <p>
          Er kunnen binnen de inkomensbeoordeling nog andere correcties en regels gelden.
        </p>
        <p>
          Het uiteindelijke toetsinkomen moet daarom worden vastgesteld volgens de methode die voor
          jouw hypotheek van toepassing is.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
            Winst uit onderneming voor hypotheek
          </Link>
        </p>

        <h2>Hoeveel hypotheek kan ik krijgen als zzp&apos;er?</h2>
        <p>
          Er is geen vast bedrag dat iedere zzp&apos;er met een bepaald inkomen kan lenen.
        </p>
        <p>De maximale hypotheek hangt onder andere af van:</p>
        <ul>
          <li>je toetsinkomen;</li>
          <li>de hypotheekrente;</li>
          <li>je leeftijd en situatie;</li>
          <li>andere financiële verplichtingen;</li>
          <li>studieschuld;</li>
          <li>persoonlijke leningen;</li>
          <li>leaseverplichtingen;</li>
          <li>het inkomen van je partner;</li>
          <li>de waarde van de woning;</li>
          <li>de geldende leennormen.</li>
        </ul>
        <p>
          Daarom is een inkomen van €50.000 niet automatisch gelijk aan één vast maximaal
          hypotheekbedrag.
        </p>
        <p>
          Dezelfde ondernemer kan onder verschillende omstandigheden een andere maximale hypotheek
          hebben. Meer details lees je in{' '}
          <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
            Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
          </Link>
          .
        </p>

        <h2>Hypotheek berekenen op basis van gemiddelde winst</h2>
        <p>
          Als je meerdere jaren ondernemer bent, kan het gemiddelde van je winst een nuttige eerste
          indicatie geven.
        </p>
        <p>Bijvoorbeeld:</p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[240px] border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b border-slate-200 py-2 pr-4 font-semibold">Jaar</th>
                <th className="border-b border-slate-200 py-2 text-right font-semibold">Winst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 1</td>
                <td className="border-b border-slate-100 py-2 text-right">€40.000</td>
              </tr>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 2</td>
                <td className="border-b border-slate-100 py-2 text-right">€50.000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Jaar 3</td>
                <td className="py-2 text-right">€60.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Het gemiddelde is €50.000.</p>
        <p>
          Maar je kunt niet automatisch aannemen dat je officiële toetsinkomen daarom €50.000 is.
        </p>
        <p>
          Bij de NHG-Inkomensverklaring Ondernemer wordt het ondernemersinkomen volgens het
          geldende toetskader vastgesteld. Bij een IB-ondernemer is het gemiddelde inkomen over de
          laatste drie kalenderjaren een belangrijk uitgangspunt, waarbij het laatste jaar als
          maximum geldt.
        </p>
        <p>Ook de ontwikkeling in het lopende boekjaar kan worden meegenomen.</p>

        <h2>Wat als je inkomen wisselt?</h2>
        <p>Een wisselend inkomen sluit een hypotheek niet automatisch uit.</p>
        <p>Stel:</p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[240px] border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b border-slate-200 py-2 pr-4 font-semibold">Jaar</th>
                <th className="border-b border-slate-200 py-2 text-right font-semibold">Winst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 1</td>
                <td className="border-b border-slate-100 py-2 text-right">€35.000</td>
              </tr>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 2</td>
                <td className="border-b border-slate-100 py-2 text-right">€70.000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Jaar 3</td>
                <td className="py-2 text-right">€45.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Je gemiddelde winst is €50.000.</p>
        <p>
          Toch kun je niet simpelweg zeggen dat je hypotheek op €50.000 inkomen wordt gebaseerd.
        </p>
        <p>Er wordt ook gekeken naar het laatste jaar en het lopende boekjaar.</p>
        <p>
          Een tijdelijk uitzonderlijk goed jaar wordt dus niet automatisch behandeld alsof dit je
          structurele inkomen is.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
            Hypotheek met wisselend inkomen als zzp&apos;er
          </Link>
        </p>

        <h2>Wat als je inkomen stijgt?</h2>
        <p>Een groeiend inkomen kan relevant zijn voor je hypotheekaanvraag.</p>
        <p>Stel:</p>
        <ul>
          <li>jaar 1: €30.000;</li>
          <li>jaar 2: €45.000;</li>
          <li>jaar 3: €60.000.</li>
        </ul>
        <p>Je onderneming groeit duidelijk.</p>
        <p>
          Toch betekent dit niet automatisch dat je volledige winst van €60.000 als toetsinkomen
          wordt gebruikt.
        </p>
        <p>
          De inkomensbeoordeling kijkt naar je historische resultaten én je actuele situatie.
        </p>
        <p>
          Het verschil tussen je <strong>werkelijke winst</strong> en je{' '}
          <strong>toetsinkomen</strong> is daarom belangrijk.
        </p>

        <h2>Wat als je inkomen daalt?</h2>
        <p>Een dalend inkomen kan juist gevolgen hebben voor je hypotheekberekening.</p>
        <p>Stel:</p>
        <ul>
          <li>jaar 1: €60.000;</li>
          <li>jaar 2: €55.000;</li>
          <li>jaar 3: €35.000.</li>
        </ul>
        <p>Het gemiddelde over deze drie jaren is €50.000.</p>
        <p>Maar je laatste jaar ligt daar duidelijk onder.</p>
        <p>
          Binnen de NHG-systematiek kan het lagere inkomen van het laatste jaar dan bepalend zijn
          voor het toetsinkomen.
        </p>
        <p>Ook het lopende boekjaar wordt bekeken.</p>
        <p>
          Een hypotheekberekening op basis van alleen het gemiddelde kan in zo&apos;n situatie dus
          een te hoog bedrag opleveren.
        </p>

        <h2>Hoeveel jaar moet je zzp&apos;er zijn voor een hypotheek?</h2>
        <p>Je hoeft niet automatisch drie jaar ondernemer te zijn.</p>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer geldt een minimale periode van{' '}
          <strong>12 maanden ondernemerschap</strong>.
        </p>
        <p>
          Heb je minder dan drie jaar cijfers, dan wordt de beschikbare financiële historie
          beoordeeld.
        </p>
        <p>
          Je kunt dus mogelijk ook als relatief startende zzp&apos;er een hypotheek krijgen.
        </p>
        <p>
          Hoe langer je onderneming bestaat, hoe meer financiële historie beschikbaar is.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
            Hypotheek zzp zonder 3 jaar cijfers
          </Link>
        </p>

        <h2>Hypotheek berekenen als startende zzp&apos;er</h2>
        <p>
          Ben je net gestart als ondernemer, dan is het lastiger om je toekomstige inkomen
          uitsluitend op basis van historische cijfers te beoordelen.
        </p>
        <p>Je hebt immers nog maar weinig financiële historie.</p>
        <p>
          Voor NHG kan vanaf minimaal 12 maanden ondernemerschap een Inkomensverklaring Ondernemer
          worden gebruikt.
        </p>
        <p>
          Heb je bijvoorbeeld één jaar cijfers, dan wordt die beschikbare informatie gebruikt binnen
          het geldende toetskader.
        </p>
        <p>
          Dat betekent niet dat je automatisch dezelfde leencapaciteit hebt als een ondernemer met
          tien jaar stabiele resultaten.
        </p>
        <p>Maar drie volledige jaren zijn niet per definitie vereist.</p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
            Hypotheek voor startende zzp&apos;ers
          </Link>
        </p>

        <h2>Welke documenten heb je nodig om je hypotheek te berekenen?</h2>
        <p>
          Voor een eerste berekening kun je vaak beginnen met je eigen financiële gegevens.
        </p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>winst van de afgelopen jaren;</li>
          <li>actuele winst;</li>
          <li>omzet;</li>
          <li>zakelijke kosten;</li>
          <li>inkomen uit loondienst;</li>
          <li>inkomen van je partner;</li>
          <li>bestaande leningen;</li>
          <li>studieschuld;</li>
          <li>leaseverplichtingen.</li>
        </ul>
        <p>
          Voor een daadwerkelijke hypotheekaanvraag kunnen meer documenten nodig zijn.
        </p>
        <p>
          Bij de NHG-Inkomensverklaring Ondernemer worden de financiële gegevens van de onderneming
          onderzocht en kan bijvoorbeeld worden gevraagd naar jaarcijfers, tussentijdse cijfers en
          btw-aangiften.
        </p>
        <p>
          Welke documenten precies nodig zijn, hangt af van de situatie en het moment van aanvragen.
          Lees ook{' '}
          <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
            Jaarcijfers nodig voor hypotheek als zzp&apos;er?
          </Link>
          .
        </p>

        <h2>Telt omzet mee voor je hypotheek?</h2>
        <p>Omzet en inkomen zijn twee verschillende dingen.</p>
        <p>Stel dat je als zzp&apos;er €150.000 omzet draait.</p>
        <p>
          Als je vervolgens €80.000 zakelijke kosten hebt, blijft er €70.000 winst over.
        </p>
        <p>
          Je kunt daarom niet automatisch je omzet als persoonlijk inkomen gebruiken voor een
          hypotheek.
        </p>
        <p>
          Voor een IB-ondernemer vormt de fiscale winst een belangrijke basis voor de
          inkomensbeoordeling.
        </p>
        <p>
          Het is dus vooral belangrijk om te weten wat je onderneming daadwerkelijk oplevert.
        </p>

        <h2>Telt inkomen uit loondienst ook mee?</h2>
        <p>
          Sommige zzp&apos;ers combineren hun onderneming met een baan in loondienst.
        </p>
        <p>
          Dan kan naast het ondernemersinkomen ook het inkomen uit dienstbetrekking relevant zijn.
        </p>
        <p>
          Hoe dit precies wordt meegenomen, hangt af van de hypotheekregels en je persoonlijke
          situatie.
        </p>
        <p>
          Je moet daarom niet automatisch alleen naar je winst uit onderneming kijken wanneer je
          daarnaast salaris ontvangt.
        </p>

        <h2>Wat als je partner ook inkomen heeft?</h2>
        <p>
          Heb je een partner met inkomen, dan kan dat inkomen onderdeel zijn van de
          hypotheekberekening.
        </p>
        <p>
          De precieze manier waarop het inkomen van je partner wordt meegenomen, hangt af van het
          type inkomen en de geldende leennormen.
        </p>
        <p>
          Bij een gezamenlijke hypotheek wordt daarom niet alleen gekeken naar jouw inkomen als
          zzp&apos;er.
        </p>
        <p>
          Een berekening op basis van alleen jouw winst kan daardoor een ander resultaat geven dan
          een gezamenlijke berekening.
        </p>

        <h2>Welke schulden verlagen je maximale hypotheek?</h2>
        <p>
          Bij het berekenen van je maximale hypotheek wordt niet alleen naar inkomen gekeken.
        </p>
        <p>
          Bestaande financiële verplichtingen kunnen je leencapaciteit verminderen.
        </p>
        <p>Denk aan:</p>
        <ul>
          <li>persoonlijke leningen;</li>
          <li>doorlopende kredieten;</li>
          <li>private lease;</li>
          <li>studieschuld;</li>
          <li>andere financiële verplichtingen.</li>
        </ul>
        <p>
          Daarom kan iemand met een hoger inkomen toch minder kunnen lenen dan iemand met een lager
          inkomen en weinig verplichtingen.
        </p>
        <p>
          Voor een betrouwbare berekening moet je deze verplichtingen dus meenemen.
        </p>

        <h2>Hoeveel hypotheek bij €40.000 winst?</h2>
        <p>
          Een winst van €40.000 geeft op zichzelf onvoldoende informatie om je maximale hypotheek te
          bepalen.
        </p>
        <p>Eerst moet duidelijk zijn welk toetsinkomen wordt vastgesteld.</p>
        <p>
          Daarna zijn onder andere de hypotheekrente, financiële verplichtingen, partnerinkomen en
          woningwaarde relevant.
        </p>
        <p>Je kunt daarom beter spreken over:</p>
        <blockquote>
          <p>&quot;Wat is mijn toetsinkomen?&quot;</p>
        </blockquote>
        <p>dan alleen:</p>
        <blockquote>
          <p>&quot;Hoeveel winst maak ik?&quot;</p>
        </blockquote>
        <p>
          Het toetsinkomen vormt vervolgens één van de belangrijkste uitgangspunten voor de
          hypotheekberekening.
        </p>

        <h2>Hoeveel hypotheek bij €50.000 winst?</h2>
        <p>Ook bij €50.000 winst is er geen universeel hypotheekbedrag.</p>
        <p>
          Als je €50.000 fiscale winst hebt, betekent dit niet automatisch dat je precies hetzelfde
          bedrag als toetsinkomen krijgt.
        </p>
        <p>
          Bij meerdere jaren winst wordt gekeken naar de historische resultaten en de ontwikkeling
          van je onderneming.
        </p>
        <p>
          Vervolgens wordt je maximale hypotheek berekend op basis van de geldende leennormen.
        </p>

        <h2>Hoeveel hypotheek bij €75.000 winst?</h2>
        <p>Hetzelfde geldt voor een winst van €75.000.</p>
        <p>
          Een hoge winst kan uiteraard leiden tot een hoger toetsinkomen, maar de uiteindelijke
          maximale hypotheek wordt niet uitsluitend bepaald door je winst.
        </p>
        <p>
          Andere verplichtingen en de actuele hypotheekrente spelen bijvoorbeeld ook een rol.
        </p>
        <p>
          Bovendien moet eerst worden vastgesteld welk deel van je winst als toetsinkomen wordt
          meegenomen.
        </p>

        <h2>Kun je als zzp&apos;er 100% van je inkomen lenen?</h2>
        <p>
          Nee, je maximale hypotheek wordt niet simpelweg bepaald door een percentage van je
          inkomen.
        </p>
        <p>
          De leennormen bepalen hoeveel je maximaal mag lenen op basis van je inkomen en andere
          omstandigheden.
        </p>
        <p>Daarnaast geldt de woningwaarde als belangrijke grens.</p>
        <p>
          In veel gevallen kun je niet meer lenen dan het percentage van de woningwaarde dat volgens
          de regels is toegestaan, behoudens specifieke uitzonderingen.
        </p>
        <p>Je inkomen bepaalt dus niet alleen hoeveel je kunt lenen.</p>

        <h2>Hypotheek berekenen met NHG</h2>
        <p>Met NHG kan een specifieke route voor ondernemers worden gebruikt.</p>
        <p>
          De <strong>Inkomensverklaring Ondernemer</strong> wordt opgesteld op basis van financiële
          gegevens van je onderneming.
        </p>
        <p>
          De verklaring bepaalt welk ondernemersinkomen voor de hypotheek kan worden gebruikt.
        </p>
        <p>
          Daarna wordt met dat inkomen de maximale hypotheek berekend volgens de geldende normen.
        </p>
        <p>
          Dit betekent dat je eigen berekening van je gemiddelde winst vooral een{' '}
          <strong>indicatie</strong> is.
        </p>
        <p>De officiële inkomensvaststelling kan daarvan afwijken.</p>

        <h2>Hypotheek berekenen zonder NHG</h2>
        <p>Niet iedere hypotheek heeft NHG.</p>
        <p>
          Zonder NHG kunnen geldverstrekkers hun eigen acceptatiebeleid voor ondernemers hanteren.
        </p>
        <p>
          Daarom kunnen de eisen voor een zzp&apos;er per geldverstrekker verschillen.
        </p>
        <p>
          Een berekening die volgens een NHG-methode wordt gemaakt, kun je dus niet automatisch
          gebruiken als definitieve berekening voor iedere hypotheek zonder NHG.
        </p>

        <h2>Wat is mijn toetsinkomen?</h2>
        <p>
          Je toetsinkomen is het inkomen dat de geldverstrekker gebruikt bij het bepalen van je
          maximale hypotheek.
        </p>
        <p>Voor een ondernemer is dat niet noodzakelijk gelijk aan:</p>
        <ul>
          <li>je omzet;</li>
          <li>je nettowinst op je bankrekening;</li>
          <li>je winst van één goed jaar;</li>
          <li>je gemiddelde maandinkomen.</li>
        </ul>
        <p>
          Het toetsinkomen wordt vastgesteld volgens de methode die voor jouw hypotheek geldt.
        </p>
        <p>Bij NHG kan daarvoor de Inkomensverklaring Ondernemer worden gebruikt.</p>
        <p>
          Het verschil tussen je daadwerkelijke bedrijfsresultaat en het toetsinkomen is daarom
          belangrijk bij het berekenen van je hypotheek. Lees ook{' '}
          <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
            Welk inkomen telt voor een hypotheek als zzp&apos;er?
          </Link>
          .
        </p>

        <h2>Voorbeeld van een hypotheekberekening voor een zzp&apos;er</h2>
        <p>Stel dat je al drie jaar ondernemer bent:</p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[240px] border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b border-slate-200 py-2 pr-4 font-semibold">Jaar</th>
                <th className="border-b border-slate-200 py-2 text-right font-semibold">Winst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 1</td>
                <td className="border-b border-slate-100 py-2 text-right">€45.000</td>
              </tr>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 2</td>
                <td className="border-b border-slate-100 py-2 text-right">€55.000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Jaar 3</td>
                <td className="py-2 text-right">€50.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Je gemiddelde winst bedraagt €50.000.</p>
        <p>
          Voor een eerste indicatie kun je dus uitgaan van ongeveer €50.000.
        </p>
        <p>
          Maar voor de daadwerkelijke hypotheekaanvraag moet worden vastgesteld welk toetsinkomen
          geldt.
        </p>
        <p>Stel daarnaast dat je:</p>
        <ul>
          <li>geen andere leningen hebt;</li>
          <li>geen leaseverplichtingen hebt;</li>
          <li>een partner met inkomen hebt.</li>
        </ul>
        <p>
          Dan kan je maximale hypotheek anders uitvallen dan wanneer je dezelfde €50.000 winst hebt
          maar ook een persoonlijke lening en studieschuld.
        </p>
        <p>
          Daarom is het toetsinkomen slechts één onderdeel van de berekening.
        </p>

        <h2>Waarom kan mijn hypotheekberekening verschillen van de berekening van een adviseur?</h2>
        <p>Een online calculator gebruikt vaak een beperkt aantal gegevens.</p>
        <p>
          Een hypotheekadviseur of geldverstrekker kan over meer informatie beschikken, zoals:
        </p>
        <ul>
          <li>definitieve jaarcijfers;</li>
          <li>tussentijdse cijfers;</li>
          <li>fiscale gegevens;</li>
          <li>correcties;</li>
          <li>schulden;</li>
          <li>partnerinkomen;</li>
          <li>specifieke acceptatieregels.</li>
        </ul>
        <p>
          Daardoor kan een eerste online indicatie verschillen van de uiteindelijke
          hypotheekberekening.
        </p>
        <p>
          Een calculator is daarom vooral geschikt om vooraf een idee te krijgen van je
          mogelijkheden.
        </p>

        <h2>Kun je je maximale hypotheek als zzp&apos;er online berekenen?</h2>
        <p>Ja.</p>
        <p>
          Voor een eerste indicatie kun je je financiële gegevens invullen in een
          hypotheekcalculator.
        </p>
        <p>
          Voor ondernemers is het daarbij belangrijk om niet alleen naar omzet te kijken.
        </p>
        <p>Gebruik bij voorkeur je beschikbare winstgegevens en houd rekening met:</p>
        <ul>
          <li>meerdere jaren aan resultaten;</li>
          <li>je actuele inkomen;</li>
          <li>bestaande verplichtingen;</li>
          <li>inkomen van je partner;</li>
          <li>de waarde van de woning.</li>
        </ul>
        <HypotheekCta />

        <h2>Veelgestelde vragen</h2>
        <h3>Hoe bereken ik mijn maximale hypotheek als zzp&apos;er?</h3>
        <p>
          Eerst moet je toetsinkomen worden vastgesteld. Daarna wordt met je inkomen, financiële
          verplichtingen, eventuele partnerinkomen, hypotheekrente en andere gegevens je maximale
          hypotheek berekend.
        </p>
        <h3>Kan ik mijn hypotheek berekenen op basis van mijn winst?</h3>
        <p>
          Voor een eerste indicatie kan dat. Je winst is echter niet automatisch hetzelfde als je
          officiële toetsinkomen.
        </p>
        <h3>Wordt mijn omzet gebruikt voor mijn hypotheek?</h3>
        <p>
          Niet rechtstreeks. Voor een IB-ondernemer vormt de fiscale winst een belangrijke basis
          voor de inkomensbeoordeling.
        </p>
        <h3>Hoeveel hypotheek kan ik krijgen met €50.000 winst?</h3>
        <p>
          Dat is afhankelijk van je uiteindelijke toetsinkomen en andere factoren zoals rente,
          schulden, lease, partnerinkomen en de woningwaarde.
        </p>
        <h3>Hoeveel jaar cijfers heb ik nodig?</h3>
        <p>
          Je hebt niet automatisch drie volledige jaren nodig. Voor de NHG-Inkomensverklaring
          Ondernemer geldt een minimale periode van 12 maanden ondernemerschap.
        </p>
        <h3>Kan ik als startende zzp&apos;er een hypotheek krijgen?</h3>
        <p>
          Dat kan mogelijk. Vanaf minimaal 12 maanden ondernemerschap kan binnen de NHG-route een
          Inkomensverklaring Ondernemer worden gebruikt.
        </p>
        <h3>Telt mijn partnerinkomen mee?</h3>
        <p>
          Dat kan. De manier waarop het inkomen van je partner wordt meegenomen hangt af van het
          type inkomen en de geldende hypotheekregels.
        </p>
        <h3>Verlagen schulden mijn maximale hypotheek?</h3>
        <p>
          Ja. Bestaande financiële verplichtingen zoals leningen, studieschuld en lease kunnen
          invloed hebben op je maximale hypotheek.
        </p>
        <h3>Kan ik zonder NHG een hypotheek als zzp&apos;er krijgen?</h3>
        <p>
          Dat kan mogelijk. Zonder NHG kunnen geldverstrekkers hun eigen voorwaarden hanteren voor
          het beoordelen van ondernemersinkomen.
        </p>
        <h3>Is een hypotheekcalculator voor zzp&apos;ers betrouwbaar?</h3>
        <p>
          Een calculator kan een goede eerste indicatie geven, maar het resultaat is niet
          automatisch het definitieve hypotheekbedrag. De uiteindelijke berekening hangt af van het
          toetsinkomen en de volledige financiële situatie.
        </p>

        <h2>Bereken je maximale hypotheek als zzp&apos;er</h2>
        <p>
          Als zzp&apos;er begint een hypotheekberekening bij je <strong>toetsinkomen</strong>.
        </p>
        <p>
          Kijk daarom niet alleen naar je omzet of naar je winst van het afgelopen jaar. Je
          historische resultaten, actuele inkomen en persoonlijke financiële verplichtingen kunnen
          allemaal een rol spelen.
        </p>
        <p>
          Heb je meerdere jaren cijfers, dan kan je gemiddelde winst een nuttig startpunt zijn. Ben
          je pas één of twee jaar ondernemer, dan wordt gekeken naar de beschikbare financiële
          historie.
        </p>
        <p>Wil je weten wat je ongeveer kunt lenen?</p>
        <HypotheekCta label="Bereken je maximale hypotheek als zzp'er →" />
        <HypotheekHubLink />
        <p>Meer lezen over hypotheken als zzp&apos;er:</p>
        <ul>
          <li>
            <Link href="/tools/hypotheek-zzp" className="text-warm-orange hover:underline">
              Hypotheek voor zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Welk inkomen telt voor een hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
              Winst uit onderneming voor hypotheek
            </Link>
          </li>
          <li>
            <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Jaarcijfers nodig voor hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
              Hypotheek zzp zonder 3 jaar cijfers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
              Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
              Hypotheek voor startende zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
              Hypotheek met wisselend inkomen als zzp&apos;er
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheekadviseur-voor-zzpers" className="text-warm-orange hover:underline">
              Hypotheekadviseur voor zzp&apos;ers
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: 'hypotheekadviseur-voor-zzpers',
    relatedSlugs: [
      'hypotheek-berekenen-als-zzper',
      'welk-inkomen-telt-voor-hypotheek-als-zzper',
      'hypotheek-zzp-zonder-3-jaar-cijfers',
      'hypotheek-voor-startende-zzpers',
      'hypotheek-met-wisselend-inkomen-als-zzper',
    ],
    title: "Hypotheekadviseur voor zzp'ers",
    metaTitle: "Hypotheekadviseur voor zzp'ers | Hypotheekadvies",
    excerpt:
      "Op zoek naar een hypotheekadviseur voor zzp'ers? Lees waar je op moet letten bij hypotheekadvies voor ondernemers en maak kennis met Haruna.",
    keywords:
      "hypotheekadviseur voor zzp'ers, hypotheekadviseur zzp, hypotheekadvies zzp, hypotheekadvies voor zzp'ers, hypotheekadviseur voor zelfstandigen, hypotheekadviseur ondernemer, hypotheekadviseur eenmanszaak, hypotheekadviseur startende zzp'er, onafhankelijke hypotheekadviseur zzp, hypotheek aanvragen zzp adviseur, hypotheekadvies voor ondernemers, zzp hypotheek advies, hypotheek met zzp inkomen, hypotheekadviseur zzp online, hypotheekadviseur zzp Nederland, Haruna hypotheekadviseur, Haruna hypotheekadvies",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Hypotheekadviseur%20voor%20zzper.jpg',
      alt: "Hypotheekadviseur voor zzp'ers: hypotheekadvies voor ondernemers via Haruna.",
    },
    datePublished: '2026-09-18',
    dateModified: '2026-09-18',
    faq: [
      {
        question: "Wat doet een hypotheekadviseur voor zzp'ers?",
        answer:
          'Een hypotheekadviseur helpt bij het beoordelen van je financiële situatie, het vaststellen van je hypotheekmogelijkheden en het vergelijken van passende hypotheekoplossingen.',
      },
      {
        question: "Heb ik als zzp'er een hypotheekadviseur nodig?",
        answer:
          'Niet per se. Je kunt zelf een eerste berekening maken. Bij een complexere ondernemerssituatie kan professioneel advies wel helpen om je inkomen en mogelijkheden goed in kaart te brengen.',
      },
      {
        question: "Kan ik als startende zzp'er een hypotheek krijgen?",
        answer:
          'Dat kan mogelijk. Voor de NHG-Inkomensverklaring Ondernemer geldt een minimale periode van 12 maanden ondernemerschap.',
      },
      {
        question: 'Kan ik een hypotheek krijgen zonder 3 jaar cijfers?',
        answer:
          'Dat kan mogelijk. Je hoeft voor de NHG-Inkomensverklaring Ondernemer niet automatisch drie volledige jaren ondernemer te zijn.',
      },
      {
        question: "Wat kost hypotheekadvies voor zzp'ers?",
        answer:
          'De kosten verschillen per adviseur en situatie. Haruna geeft aan dat de kosten afhankelijk zijn van de situatie en het type dienstverlening.',
      },
      {
        question: 'Kan ik online hypotheekadvies krijgen?',
        answer: 'Ja. Haruna biedt hypotheekadvies via videobellen en werkt online.',
      },
      {
        question: 'Is Haruna onafhankelijk?',
        answer:
          'Haruna positioneert zich als onafhankelijk hypotheekadviseur en geeft aan hypotheken van vrijwel alle geldverstrekkers in Nederland te vergelijken.',
      },
      {
        question: 'Kan ik eerst vrijblijvend kennismaken?',
        answer: 'Ja. Haruna vermeldt dat het kennismakingsgesprek vrijblijvend is.',
      },
      {
        question: 'Kan ik eerst zelf mijn hypotheek berekenen?',
        answer:
          'Ja. Je kunt eerst een indicatie van je maximale hypotheek berekenen voordat je een adviseur inschakelt.',
      },
    ],
    content: (
      <>
        <p>
          Een hypotheek aanvragen als zzp&apos;er kan net wat ingewikkelder zijn dan wanneer je in
          loondienst bent.
        </p>
        <p>
          Je inkomen komt immers niet iedere maand uit een vast salaris. De geldverstrekker moet
          eerst bepalen welk inkomen uit je onderneming voor de hypotheek kan worden gebruikt.
        </p>
        <p>
          Daarbij kunnen je winst van de afgelopen jaren, je actuele inkomen, de ontwikkeling van je
          onderneming en andere financiële gegevens een rol spelen.
        </p>
        <p>
          Een <strong>hypotheekadviseur voor zzp&apos;ers</strong> kan helpen om deze gegevens vooraf
          in kaart te brengen en te bepalen welke hypotheekmogelijkheden bij jouw situatie passen.
        </p>
        <p>
          Voor FactuurBaas werken we hiervoor samen met <strong>Haruna B.V.</strong>, een
          onafhankelijke hypotheek- en financieel adviseur. Haruna werkt online via videobellen en
          adviseert zowel particulieren als ondernemers.
        </p>

        <h2>Waarom is hypotheekadvies voor zzp&apos;ers anders?</h2>
        <p>
          Bij iemand in loondienst kan een geldverstrekker vaak relatief eenvoudig naar het inkomen
          op de loonstrook en de arbeidsovereenkomst kijken.
        </p>
        <p>Als zzp&apos;er werkt dat anders.</p>
        <p>Je inkomen kan bijvoorbeeld zijn:</p>
        <ul>
          <li>€35.000 winst in het ene jaar;</li>
          <li>€55.000 in het volgende jaar;</li>
          <li>€45.000 daarna.</li>
        </ul>
        <p>
          Of je bent pas één of twee jaar ondernemer en hebt nog maar beperkte financiële historie.
        </p>
        <p>
          De hypotheekadviseur moet daarom eerst bepalen welk inkomen voor de hypotheek kan worden
          gebruikt.
        </p>
        <p>
          Dat wordt ook wel het <strong>toetsinkomen</strong> genoemd.
        </p>

        <h2>Wat doet een hypotheekadviseur voor een zzp&apos;er?</h2>
        <p>Een hypotheekadviseur kijkt niet alleen naar hoeveel geld je momenteel verdient.</p>
        <p>Bij een ondernemer kan onder andere worden gekeken naar:</p>
        <ul>
          <li>je winst uit onderneming;</li>
          <li>je jaarcijfers;</li>
          <li>je aangiften inkomstenbelasting;</li>
          <li>je actuele resultaten;</li>
          <li>het lopende boekjaar;</li>
          <li>je ondernemingsvorm;</li>
          <li>eventuele andere inkomsten;</li>
          <li>bestaande financiële verplichtingen;</li>
          <li>het inkomen van je partner.</li>
        </ul>
        <p>
          Daarna wordt gekeken naar de hypotheekmogelijkheden die bij jouw situatie passen.
        </p>
        <p>
          Bij NHG kan voor ondernemers een <strong>Inkomensverklaring Ondernemer</strong> worden
          gebruikt om het ondernemersinkomen vast te stellen.
        </p>

        <h2>Heb je als zzp&apos;er een hypotheekadviseur nodig?</h2>
        <p>Niet iedere zzp&apos;er heeft dezelfde behoefte aan advies.</p>
        <p>Voor een eenvoudige situatie kun je zelf al een eerste berekening maken.</p>
        <p>Maar zodra je bijvoorbeeld:</p>
        <ul>
          <li>pas kort ondernemer bent;</li>
          <li>wisselende winsten hebt;</li>
          <li>meerdere ondernemingen hebt;</li>
          <li>inkomen uit loondienst combineert met ondernemerschap;</li>
          <li>een bv hebt;</li>
          <li>een studieschuld hebt;</li>
          <li>andere leningen hebt;</li>
          <li>een partner met inkomen hebt;</li>
        </ul>
        <p>
          kan het lastiger worden om zelf te bepalen welk inkomen voor de hypotheek wordt gebruikt.
        </p>
        <p>
          Een hypotheekadviseur kan je financiële situatie in dat geval vooraf beoordelen en
          aangeven welke informatie en documenten nodig zijn.
        </p>

        <h2>Hypotheekadviseur voor startende zzp&apos;ers</h2>
        <p>Ben je pas begonnen als zzp&apos;er?</p>
        <p>
          Dan heb je waarschijnlijk nog geen drie volledige jaren aan jaarcijfers.
        </p>
        <p>Dat betekent niet automatisch dat een hypotheek onmogelijk is.</p>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer geldt een minimale periode van 12 maanden
          ondernemerschap. Als je onderneming korter dan drie jaar bestaat, wordt de beschikbare
          financiële historie gebruikt.
        </p>
        <p>
          Een hypotheekadviseur kan daarom juist bij een startende ondernemer helpen om eerst te
          bepalen welke route mogelijk is.
        </p>
        <p>Lees ook:</p>
        <ul>
          <li>
            <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
              Hypotheek zzp zonder 3 jaar cijfers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
              Hypotheek voor startende zzp&apos;ers
            </Link>
          </li>
        </ul>

        <h2>Hypotheekadviseur bij wisselende inkomsten</h2>
        <p>Niet iedere zzp&apos;er verdient ieder jaar hetzelfde.</p>
        <p>
          Je kunt bijvoorbeeld een paar grote opdrachten hebben gehad waardoor je winst in één jaar
          veel hoger was.
        </p>
        <p>Of je onderneming kan juist tijdelijk minder goed hebben gedraaid.</p>
        <p>
          Bij een hypotheek wordt daarom niet automatisch alleen gekeken naar je beste jaar.
        </p>
        <p>
          De inkomensbeoordeling kijkt naar de financiële historie en de actuele ontwikkeling van je
          onderneming.
        </p>
        <p>
          Een hypotheekadviseur kan helpen om vooraf inzicht te krijgen in hoe jouw inkomen
          waarschijnlijk moet worden beoordeeld.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
            Hypotheek met wisselend inkomen als zzp&apos;er
          </Link>
        </p>

        <h2>Hypotheekadviseur voor een eenmanszaak</h2>
        <p>Veel zzp&apos;ers werken vanuit een eenmanszaak.</p>
        <p>
          Bij een eenmanszaak vormt de fiscale winst een belangrijke basis voor de beoordeling van
          het ondernemersinkomen.
        </p>
        <p>
          Maar fiscale winst is niet automatisch hetzelfde als het uiteindelijke toetsinkomen.
        </p>
        <p>
          De hypotheekadviseur kijkt daarom naar de financiële gegevens van de onderneming en de
          regels die gelden voor de gekozen hypotheek.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
            Winst uit onderneming voor hypotheek
          </Link>
        </p>

        <h2>Welke documenten heeft een hypotheekadviseur nodig?</h2>
        <p>
          Een hypotheekadviseur zal je meestal vragen om financiële informatie over je onderneming
          en persoonlijke situatie.
        </p>
        <p>Welke documenten precies nodig zijn, hangt af van je situatie.</p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>jaarcijfers;</li>
          <li>aangiften inkomstenbelasting;</li>
          <li>tussentijdse cijfers;</li>
          <li>btw-aangiften;</li>
          <li>identiteitsgegevens;</li>
          <li>gegevens over bestaande hypotheken;</li>
          <li>informatie over leningen;</li>
          <li>studieschuld;</li>
          <li>gegevens van je partner.</li>
        </ul>
        <p>
          Bij een NHG-Inkomensverklaring Ondernemer is een specifieke documentenlijst van toepassing.
        </p>
        <p>
          Daarom is het verstandig om je financiële administratie goed op orde te hebben voordat je
          een hypotheek aanvraagt.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
            Jaarcijfers nodig voor hypotheek als zzp&apos;er?
          </Link>
        </p>

        <h2>Wat kost een hypotheekadviseur voor zzp&apos;ers?</h2>
        <p>
          De kosten van hypotheekadvies verschillen per adviseur en per situatie.
        </p>
        <p>
          Een zzp&apos;er kan bijvoorbeeld een complexere inkomenssituatie hebben dan iemand in
          loondienst. Daardoor kan de hoeveelheid werk verschillen.
        </p>
        <p>
          Haruna geeft op zijn website aan dat de kosten afhankelijk zijn van de situatie en het
          type dienstverlening. In een vrijblijvend kennismakingsgesprek worden de situatie en de
          bijbehorende kosten besproken.
        </p>
        <p>Het is daarom verstandig om vooraf te vragen:</p>
        <ul>
          <li>wat het advies kost;</li>
          <li>welke werkzaamheden daarbij horen;</li>
          <li>of het regelen van de hypotheek inbegrepen is;</li>
          <li>wanneer je betaalt;</li>
          <li>welke kosten eventueel apart worden berekend.</li>
        </ul>

        <h2>Onafhankelijke hypotheekadviseur voor zzp&apos;ers</h2>
        <p>
          Een onafhankelijk adviseur kan verschillende geldverstrekkers met elkaar vergelijken.
        </p>
        <p>
          Haruna geeft aan hypotheken van vrijwel alle geldverstrekkers in Nederland te vergelijken
          en positioneert zich als onafhankelijk hypotheekadviseur.
        </p>
        <p>
          Dat kan relevant zijn voor zzp&apos;ers, omdat acceptatiecriteria voor ondernemers per
          geldverstrekker kunnen verschillen.
        </p>
        <p>Het is daarom niet altijd voldoende om alleen naar één bank te kijken.</p>

        <h2>Waarom samenwerken met Haruna?</h2>
        <p>
          Voor de hypotheekcontent van FactuurBaas werken we samen met <strong>Haruna B.V.</strong>
        </p>
        <p>
          Haruna is een hypotheek- en pensioenadvieskantoor dat online werkt via videobellen. Het
          kantoor staat onder leiding van hypotheek- en pensioenadviseur Harm Jan Schouwstra en
          vermeldt meer dan 30 jaar ervaring. Haruna is daarnaast SEH Erkend Financieel Adviseur en
          staat geregistreerd als vergunninghouder bij de AFM.
        </p>
        <p>
          De samenwerking betekent dat je via FactuurBaas niet alleen informatie over hypotheken als
          zzp&apos;er kunt lezen, maar ook kunt worden doorverwezen naar een adviseur wanneer je
          jouw eigen situatie wilt bespreken.
        </p>

        <h2>Hypotheekadvies voor zzp&apos;ers bij Haruna</h2>
        <p>Haruna biedt hypotheekadvies online via videobellen.</p>
        <p>
          Je kunt eerst je situatie in kaart brengen voordat je besluit of je verder wilt met een
          adviseur.
        </p>
        <p>
          Haruna biedt hiervoor een <strong>gratis situatiecheck</strong>. Daarbij kun je onder
          andere een PDF ontvangen met een indicatie van je maximale hypotheek, een
          documentchecklist en vragen die je met een adviseur kunt bespreken. De situatiecheck is
          volgens Haruna geen bindend hypotheekadvies.
        </p>
        <p>
          Dit kan vooral handig zijn als je eerst wilt weten welke informatie je nodig hebt voordat
          je een volledige hypotheekaanvraag start.
        </p>

        <h2>Hypotheek berekenen als zzp&apos;er</h2>
        <p>
          Voordat je met een hypotheekadviseur praat, kun je natuurlijk zelf een eerste berekening
          maken.
        </p>
        <p>Daarbij is het belangrijk om niet alleen naar je omzet te kijken.</p>
        <p>Voor een eerste indicatie kun je bijvoorbeeld kijken naar:</p>
        <ul>
          <li>je winst van de afgelopen jaren;</li>
          <li>je actuele winst;</li>
          <li>inkomen van je partner;</li>
          <li>bestaande leningen;</li>
          <li>studieschuld;</li>
          <li>leaseverplichtingen;</li>
          <li>de gewenste woningwaarde.</li>
        </ul>
        <p>Maar een online berekening blijft een indicatie.</p>
        <p>
          De uiteindelijke hypotheek wordt gebaseerd op het toetsinkomen en de geldende leennormen.
        </p>
        <HypotheekCta />
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-berekenen-als-zzper" className="text-warm-orange hover:underline">
            Hypotheek berekenen als zzp&apos;er
          </Link>
        </p>

        <h2>Wat bespreek je met een hypotheekadviseur?</h2>
        <p>
          Een eerste gesprek met een hypotheekadviseur kan bijvoorbeeld gaan over:
        </p>
        <h3>Je ondernemerssituatie</h3>
        <p>Hoe lang ben je ondernemer?</p>
        <p>Heb je een eenmanszaak, vof of bv?</p>
        <p>Zijn je inkomsten stabiel of wisselend?</p>
        <h3>Je inkomen</h3>
        <p>Hoeveel winst maak je?</p>
        <p>Wat waren je resultaten van de afgelopen jaren?</p>
        <p>Hoe ziet het lopende boekjaar eruit?</p>
        <h3>Je woning</h3>
        <p>Welke woning wil je kopen?</p>
        <p>Wat is de verwachte aankoopprijs?</p>
        <p>Hoeveel eigen geld heb je beschikbaar?</p>
        <h3>Je financiële verplichtingen</h3>
        <p>Heb je een studieschuld?</p>
        <p>Heb je leningen of lease?</p>
        <p>Heb je al een hypotheek?</p>
        <h3>Je toekomst</h3>
        <p>Verwacht je dat je inkomen verandert?</p>
        <p>Wil je je onderneming uitbreiden?</p>
        <p>
          Zijn er andere veranderingen die invloed kunnen hebben op je financiële situatie?
        </p>
        <p>
          Deze informatie helpt om je hypotheekmogelijkheden beter in kaart te brengen.
        </p>

        <h2>Kan een hypotheekadviseur helpen als je nog geen 3 jaar cijfers hebt?</h2>
        <p>
          Ja, dat is juist een situatie waarin vooraf advies nuttig kan zijn.
        </p>
        <p>
          Als je nog geen drie volledige jaren ondernemer bent, moet eerst worden gekeken welke
          financiële historie beschikbaar is en welke hypotheekroute bij je situatie past.
        </p>
        <p>
          Voor NHG kan vanaf 12 maanden ondernemerschap een Inkomensverklaring Ondernemer worden
          gebruikt.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
            Hypotheek zzp zonder 3 jaar cijfers
          </Link>
        </p>

        <h2>Kan een hypotheekadviseur helpen bij een wisselend inkomen?</h2>
        <p>Ja.</p>
        <p>Een wisselend inkomen hoeft een hypotheek niet automatisch uit te sluiten.</p>
        <p>
          Wel is het belangrijk om te begrijpen welk inkomen uiteindelijk als toetsinkomen wordt
          gebruikt.
        </p>
        <p>
          Een adviseur kan je financiële resultaten vooraf bekijken en aangeven welke informatie
          nodig is voor de inkomensbeoordeling.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
            Hypotheek met wisselend inkomen als zzp&apos;er
          </Link>
        </p>

        <h2>Hypotheekadviseur voor zzp&apos;ers online</h2>
        <p>Je hoeft niet per se naar een kantoor om hypotheekadvies te krijgen.</p>
        <p>
          Haruna werkt online via videobellen en geeft aan dat gesprekken ook buiten reguliere
          kantoortijden mogelijk zijn.
        </p>
        <p>
          Dat kan praktisch zijn als je als zzp&apos;er weinig tijd hebt of niet in de buurt van een
          hypotheekadviseur woont.
        </p>
        <p>
          De documenten en financiële gegevens kunnen vervolgens digitaal worden aangeleverd.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Wat doet een hypotheekadviseur voor zzp&apos;ers?</h3>
        <p>
          Een hypotheekadviseur helpt bij het beoordelen van je financiële situatie, het vaststellen
          van je hypotheekmogelijkheden en het vergelijken van passende hypotheekoplossingen.
        </p>
        <h3>Heb ik als zzp&apos;er een hypotheekadviseur nodig?</h3>
        <p>
          Niet per se. Je kunt zelf een eerste berekening maken. Bij een complexere
          ondernemerssituatie kan professioneel advies wel helpen om je inkomen en mogelijkheden
          goed in kaart te brengen.
        </p>
        <h3>Kan ik als startende zzp&apos;er een hypotheek krijgen?</h3>
        <p>
          Dat kan mogelijk. Voor de NHG-Inkomensverklaring Ondernemer geldt een minimale periode van
          12 maanden ondernemerschap.
        </p>
        <h3>Kan ik een hypotheek krijgen zonder 3 jaar cijfers?</h3>
        <p>
          Dat kan mogelijk. Je hoeft voor de NHG-Inkomensverklaring Ondernemer niet automatisch drie
          volledige jaren ondernemer te zijn.
        </p>
        <h3>Wat kost hypotheekadvies voor zzp&apos;ers?</h3>
        <p>
          De kosten verschillen per adviseur en situatie. Haruna geeft aan dat de kosten afhankelijk
          zijn van de situatie en het type dienstverlening.
        </p>
        <h3>Kan ik online hypotheekadvies krijgen?</h3>
        <p>Ja. Haruna biedt hypotheekadvies via videobellen en werkt online.</p>
        <h3>Is Haruna onafhankelijk?</h3>
        <p>
          Haruna positioneert zich als onafhankelijk hypotheekadviseur en geeft aan hypotheken van
          vrijwel alle geldverstrekkers in Nederland te vergelijken.
        </p>
        <h3>Kan ik eerst vrijblijvend kennismaken?</h3>
        <p>Ja. Haruna vermeldt dat het kennismakingsgesprek vrijblijvend is.</p>
        <h3>Kan ik eerst zelf mijn hypotheek berekenen?</h3>
        <p>
          Ja. Je kunt eerst een indicatie van je maximale hypotheek berekenen voordat je een
          adviseur inschakelt.
        </p>
        <HypotheekCta />

        <h2>Hypotheekadvies voor zzp&apos;ers via Haruna</h2>
        <p>
          Als zzp&apos;er is het belangrijkste verschil met iemand in loondienst dat je
          hypotheekinkomen niet simpelweg van één loonstrook kan worden afgelezen.
        </p>
        <p>
          Je financiële historie, winst, actuele resultaten en persoonlijke financiële situatie
          moeten worden beoordeeld voordat duidelijk is welk toetsinkomen kan worden gebruikt.
        </p>
        <p>
          Daarom kan het handig zijn om je situatie eerst met een hypotheekadviseur te bespreken.
        </p>
        <p>
          Voor FactuurBaas werken we hiervoor samen met <strong>Haruna B.V.</strong> Haruna biedt
          onafhankelijk hypotheekadvies online via videobellen en heeft een gratis situatiecheck
          waarmee je je financiële situatie eerst kunt voorbereiden.
        </p>
        <p>
          <strong>Contact met Haruna</strong>
        </p>
        <ul>
          <li>
            <strong>Website:</strong>{' '}
            <a
              href="https://www.haruna.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-orange hover:underline"
            >
              Haruna.nl
            </a>
          </li>
          <li>
            <strong>E-mail:</strong>{' '}
            <a href="mailto:contact@haruna.nl" className="text-warm-orange hover:underline">
              contact@haruna.nl
            </a>
          </li>
          <li>
            <strong>Telefoon:</strong>{' '}
            <a href="tel:+31786849331" className="text-warm-orange hover:underline">
              078 684 93 31
            </a>
          </li>
        </ul>
        <p>Wil je eerst zelf berekenen wat je ongeveer kunt lenen?</p>
        <HypotheekCta label="Bereken je maximale hypotheek als zzp'er →" />
        <HypotheekHubLink />
        <p>Meer lezen over hypotheken als zzp&apos;er:</p>
        <ul>
          <li>
            <Link href="/tools/hypotheek-zzp" className="text-warm-orange hover:underline">
              Hypotheek voor zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-berekenen-als-zzper" className="text-warm-orange hover:underline">
              Hypotheek berekenen als zzp&apos;er
            </Link>
          </li>
          <li>
            <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Welk inkomen telt voor een hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
              Winst uit onderneming voor hypotheek
            </Link>
          </li>
          <li>
            <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Jaarcijfers nodig voor hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
              Hypotheek zzp zonder 3 jaar cijfers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
              Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
              Hypotheek voor startende zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
              Hypotheek met wisselend inkomen als zzp&apos;er
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  ...aovArticles,
  ...uitgavenArticles,
  ...zakelijkeKostenArticles,
  ...zakelijkeLeaseArticles,
  ...zakelijkInternetTelefonieArticles,
  ...facturenVerwerkenArticles,
  gratisFactuurAppArticle,
].sort((a, b) => {
  const specialSlugs = ['gratis-factuur-zzp', 'factuur-maken-zzp'];
  const aIsSpecial = specialSlugs.includes(a.slug);
  const bIsSpecial = specialSlugs.includes(b.slug);

  if (aIsSpecial && !bIsSpecial) return -1;
  if (!aIsSpecial && bIsSpecial) return 1;
  if (aIsSpecial && bIsSpecial) {
    return specialSlugs.indexOf(a.slug) - specialSlugs.indexOf(b.slug);
  }

  // Fallback to alphabetical sort for other articles if needed
  return a.title.localeCompare(b.title);
});

export const publishedArticles = articles.filter((article) => !article.draft);