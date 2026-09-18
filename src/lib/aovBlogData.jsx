import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const AOV_IMAGE = {
  url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/opengraph%20factuurbaas.png',
  alt: "AOV voor zzp'ers — arbeidsongeschiktheidsverzekering",
};

const AovCta = ({ label = "Bereken je benodigde AOV-dekking →" }) => (
  <div className="my-8 text-center">
    <Button asChild className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
      <Link href="/tools/aov-berekenen-zzp">{label}</Link>
    </Button>
  </div>
);

const relatedAov = [
  'wat-kost-een-aov-voor-zzpers',
  'aov-voor-startende-zzpers',
  'aov-verplicht-voor-zzpers',
  'aov-vergelijken',
];

/** AOV cluster articles linked from /tools/aov-zzp */
export const aovArticles = [
  {
    slug: 'wat-kost-een-aov-voor-zzpers',
    relatedSlugs: relatedAov.filter((s) => s !== 'wat-kost-een-aov-voor-zzpers'),
    title: "Wat kost een AOV voor zzp'ers?",
    excerpt:
      "Wat kost een AOV als zzp'er? Lees welke factoren de premie beïnvloeden — zonder een universele premie te beloven.",
    keywords:
      "wat kost een aov zzp, aov kosten zzp, aov premie zzp, arbeidsongeschiktheidsverzekering kosten, aov prijs zzp",
    image: {
      ...AOV_IMAGE,
      alt: "Wat kost een AOV voor zzp'ers? Factoren die de premie beïnvloeden.",
    },
    datePublished: '2026-09-18',
    dateModified: '2026-09-18',
    faq: [
      {
        question: "Hoeveel kost een AOV voor zzp'ers?",
        answer:
          'Er is geen vaste prijs. De premie hangt onder andere af van leeftijd, beroep, verzekerd bedrag, wachttijd, eindleeftijd en gezondheid.',
      },
      {
        question: 'Kan ik de premie online exact berekenen?',
        answer:
          'Een universele online premie is meestal niet betrouwbaar. Offertes van verzekeraars of adviseurs geven een realistisch beeld voor jouw situatie.',
      },
    ],
    content: (
      <>
        <p>
          De vraag <strong>wat kost een AOV voor zzp&apos;ers?</strong> heeft geen vast antwoord.
          De premie verschilt per persoon, beroep, dekking en verzekeraar.
        </p>
        <p>
          FactuurBaas berekent daarom bewust geen AOV-premie. Wel kun je begrijpen welke keuzes de
          kosten vaak beïnvloeden — en eerst bepalen hoeveel inkomen je wilt beschermen.
        </p>

        <h2>Welke factoren beïnvloeden de AOV-premie?</h2>
        <ul>
          <li>Je leeftijd</li>
          <li>Je beroep en het beroepsrisico</li>
          <li>Het verzekerde maandbedrag</li>
          <li>De wachttijd / eigenrisicoperiode</li>
          <li>De eindleeftijd</li>
          <li>Gezondheid en medische beoordeling</li>
          <li>De voorwaarden van de polis</li>
        </ul>
        <p>
          Een langere wachttijd of een lager verzekerd bedrag kan de premie lager maken, maar
          betekent ook meer eigen risico of minder uitkering.
        </p>

        <h2>Eerst je dekking, dan de premie</h2>
        <p>
          Voordat je premies vergelijkt, helpt het om te weten hoeveel maandinkomen je wilt
          beschermen en hoeveel buffer je nodig hebt tijdens de wachttijd.
        </p>
        <AovCta />
        <p>
          Daarna kun je offertes beter vergelijken op voorwaarden én prijs. Lees ook{' '}
          <Link href="/blogs/aov-vergelijken" className="text-warm-orange hover:underline">
            AOV vergelijken
          </Link>{' '}
          en de uitleg op{' '}
          <Link href="/tools/aov-zzp" className="text-warm-orange hover:underline">
            AOV voor zzp&apos;ers
          </Link>
          .
        </p>
        <p className="text-sm text-slate-500">
          Dit artikel is algemene informatie en geen verzekeringsadvies.
        </p>
      </>
    ),
  },
  {
    slug: 'aov-voor-startende-zzpers',
    relatedSlugs: relatedAov.filter((s) => s !== 'aov-voor-startende-zzpers'),
    title: "AOV voor startende zzp'ers",
    excerpt:
      "Net gestart als zzp'er? Lees waar je op let bij een AOV: buffer, wachttijd en hoeveel inkomen je wilt beschermen.",
    keywords:
      "aov startende zzp, aov starter zzp, aov begin zzp, arbeidsongeschiktheidsverzekering starter, aov voor startende zzp'ers",
    image: {
      ...AOV_IMAGE,
      alt: "AOV voor startende zzp'ers: waar let je op?",
    },
    datePublished: '2026-09-18',
    dateModified: '2026-09-18',
    faq: [
      {
        question: "Heb ik als startende zzp'er direct een AOV nodig?",
        answer:
          'Niet automatisch. Of een AOV past hangt af van je buffer, risico’s en persoonlijke voorkeuren. Een starter heeft soms minder spaarbuffer, waardoor de wachttijd extra belangrijk is.',
      },
    ],
    content: (
      <>
        <p>
          Als <strong>startende zzp&apos;er</strong> heb je vaak nog weinig financiële buffer
          opgebouwd. Tegelijk kan je inkomen in de eerste jaren sterk wisselen.
        </p>
        <p>
          Een AOV kan dan extra aandacht verdienen — maar starten betekent niet automatisch dat je
          direct een bepaalde verzekering moet afsluiten.
        </p>

        <h2>Waar let je als starter op?</h2>
        <ul>
          <li>Hoeveel inkomen wil je bij ziekte kunnen blijven besteden?</li>
          <li>Hoeveel maanden kun je zelf overbruggen (wachttijd)?</li>
          <li>Heb je partnerinkomen of spaargeld als tijdelijke buffer?</li>
          <li>Past een lagere dekking of langere wachttijd bij je budget?</li>
        </ul>
        <p>
          Gebruik de calculator om je behoefte en wachttijd-buffer inzichtelijk te maken — zonder
          een premie te schatten.
        </p>
        <AovCta />
        <p>
          Meer achtergrond op{' '}
          <Link href="/tools/aov-zzp" className="text-warm-orange hover:underline">
            AOV voor zzp&apos;ers
          </Link>
          . Over verplichting:{' '}
          <Link href="/blogs/aov-verplicht-voor-zzpers" className="text-warm-orange hover:underline">
            Is een AOV verplicht voor zzp&apos;ers?
          </Link>
        </p>
        <p className="text-sm text-slate-500">
          Dit artikel is algemene informatie en geen verzekeringsadvies.
        </p>
      </>
    ),
  },
  {
    slug: 'aov-verplicht-voor-zzpers',
    relatedSlugs: relatedAov.filter((s) => s !== 'aov-verplicht-voor-zzpers'),
    title: "Is een AOV verplicht voor zzp'ers?",
    excerpt:
      "Is een AOV verplicht voor zzp'ers? Lees hoe je huidige regels, vangnetten en toekomstige plannen uit elkaar houdt.",
    keywords:
      "aov verplicht zzp, is aov verplicht, verplichte aov zzp, arbeidsongeschiktheidsverzekering verplicht, aov verplicht zelfstandigen",
    image: {
      ...AOV_IMAGE,
      alt: "Is een AOV verplicht voor zzp'ers?",
    },
    datePublished: '2026-09-18',
    dateModified: '2026-09-18',
    faq: [
      {
        question: "Is een AOV verplicht voor zzp'ers?",
        answer:
          'Of en wanneer een AOV verplicht is, hangt af van de actuele wet- en regelgeving. Controleer altijd de huidige regels voordat je een beslissing neemt.',
      },
    ],
    content: (
      <>
        <p>
          Veel zzp&apos;ers vragen zich af: <strong>is een AOV verplicht?</strong> De regels en
          plannen rond arbeidsongeschiktheidsverzekeringen voor zelfstandigen kunnen veranderen.
        </p>
        <p>
          Houd daarom onderscheid tussen:
        </p>
        <ul>
          <li>wat op dit moment wettelijk verplicht is;</li>
          <li>bestaande vangnetten of vrijwillige regelingen;</li>
          <li>eventuele toekomstige wetgeving die nog kan wijzigen.</li>
        </ul>
        <p>
          Deze pagina geeft geen juridisch advies over de actuele stand van de wet. Controleer
          officiële bronnen of een adviseur voor de meest recente verplichtingen.
        </p>

        <h2>Ook zonder verplichting is dekking relevant</h2>
        <p>
          Of een AOV verplicht is of niet: als zzp&apos;er heb je geen werkgever die loon
          doorbetaalt. Daarom is het nuttig om te weten hoeveel inkomen je wilt beschermen en welke
          wachttijd je financieel aankunt.
        </p>
        <AovCta />
        <p>
          Lees ook{' '}
          <Link href="/tools/aov-zzp" className="text-warm-orange hover:underline">
            AOV voor zzp&apos;ers
          </Link>{' '}
          en{' '}
          <Link href="/blogs/wat-kost-een-aov-voor-zzpers" className="text-warm-orange hover:underline">
            Wat kost een AOV voor zzp&apos;ers?
          </Link>
          .
        </p>
        <p className="text-sm text-slate-500">
          Dit artikel is algemene informatie en geen juridisch of verzekeringsadvies.
        </p>
      </>
    ),
  },
  {
    slug: 'aov-vergelijken',
    relatedSlugs: relatedAov.filter((s) => s !== 'aov-vergelijken'),
    title: "AOV vergelijken voor zzp'ers",
    excerpt:
      "AOV vergelijken als zzp'er? Kijk verder dan de premie: dekking, wachttijd, eindleeftijd en polisvoorwaarden.",
    keywords:
      "aov vergelijken, aov vergelijken zzp, beste aov zzp, aov verzekering vergelijken, arbeidsongeschiktheidsverzekering vergelijken",
    image: {
      ...AOV_IMAGE,
      alt: "AOV vergelijken voor zzp'ers: meer dan alleen de premie.",
    },
    datePublished: '2026-09-18',
    dateModified: '2026-09-18',
    faq: [
      {
        question: 'Waar let je op bij het vergelijken van een AOV?',
        answer:
          'Niet alleen op de premie. Kijk ook naar verzekerd bedrag, wachttijd, eindleeftijd, definitie van arbeidsongeschiktheid, uitsluitingen en voorwaarden bij gedeeltelijke arbeidsongeschiktheid.',
      },
    ],
    content: (
      <>
        <p>
          Als je AOV&apos;s voor zzp&apos;ers wilt <strong>vergelijken</strong>, kijk dan niet alleen
          naar de premie. Een goedkopere verzekering is niet automatisch dezelfde dekking.
        </p>

        <h2>Vergelijkpunten</h2>
        <ul>
          <li>Het verzekerde maandbedrag</li>
          <li>De wachttijd</li>
          <li>De eindleeftijd</li>
          <li>Voorwaarden voor een uitkering</li>
          <li>De definitie van arbeidsongeschiktheid</li>
          <li>Uitsluitingen</li>
          <li>Indexatie en eventuele verhogingen</li>
          <li>Voorwaarden bij gedeeltelijke arbeidsongeschiktheid</li>
        </ul>
        <p>
          Eerst je eigen uitgangspunten scherp krijgen maakt vergelijken makkelijker: hoeveel
          dekking wil je, en welke wachttijd kun je overbruggen?
        </p>
        <AovCta label="Bereken eerst je dekking en wachttijd →" />
        <p>
          Meer uitleg op{' '}
          <Link href="/tools/aov-zzp" className="text-warm-orange hover:underline">
            AOV voor zzp&apos;ers
          </Link>
          . Over kosten:{' '}
          <Link href="/blogs/wat-kost-een-aov-voor-zzpers" className="text-warm-orange hover:underline">
            Wat kost een AOV voor zzp&apos;ers?
          </Link>
        </p>
        <p className="text-sm text-slate-500">
          Dit artikel is algemene informatie en geen verzekeringsadvies.
        </p>
      </>
    ),
  },
];
