'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getHypotheekHubSections, HYPOTHEEK_HUB_IMAGE } from '@/lib/hypotheekHub';

const CALCULATOR_HREF = '/tools/hypotheek-berekenen-zzp';

function CalculatorCta({
  label = "Bereken je maximale hypotheek als zzp'er →",
  className = 'my-8',
}) {
  return (
    <div className={`not-prose text-center ${className}`}>
      <Button asChild size="lg" className="rounded-xl bg-warm-orange hover:bg-orange-600">
        <Link href={CALCULATOR_HREF}>
          {label}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}

function GuideList({ articles }) {
  return (
    <ul className="mt-4 space-y-2">
      {articles.map((article) => (
        <li key={article.slug}>
          <Link
            href={`/blogs/${article.slug}`}
            className="group inline-flex items-start gap-2 font-medium text-deep-blue hover:text-warm-orange"
          >
            <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-warm-orange opacity-70 transition group-hover:translate-x-0.5" />
            <span>{article.title}</span>
          </Link>
          {article.excerpt && (
            <p className="ml-6 mt-0.5 text-sm leading-relaxed text-slate-600">{article.excerpt}</p>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function HypotheekHubContent() {
  const sections = getHypotheekHubSections();

  return (
    <div className="bg-white">
      <div className="relative h-64 w-full md:h-96">
        <img
          src={HYPOTHEEK_HUB_IMAGE.url}
          alt={HYPOTHEEK_HUB_IMAGE.alt}
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white container mx-auto">
          <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Hypotheek als zzp&apos;er
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-white/90 sm:text-base">
            Hoe werkt een hypotheek als ondernemer? Overzicht van inkomen, cijfers, berekenen en
            advies.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-warm-orange">
                FactuurBaas
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/blogs?pillar=hypotheek" className="hover:text-warm-orange">
                Hypotheek
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="font-medium text-slate-800">Hypotheek als zzp&apos;er</li>
          </ol>
        </nav>

        <article className="prose prose-lg max-w-none text-slate-700 lg:prose-xl">
          <p>
            Een <strong>hypotheek als zzp&apos;er</strong> werkt anders dan wanneer je in loondienst
            bent. Je inkomen komt niet van een vaste loonstrook, maar uit je onderneming. De
            geldverstrekker moet daarom eerst bepalen welk inkomen als{' '}
            <strong>toetsinkomen</strong> mag worden gebruikt.
          </p>
          <p>
            Dat betekent niet dat je als ondernemer geen hypotheek kunt krijgen. Wel moet je
            financiële historie, winst, actuele resultaten en eventuele verplichtingen worden
            beoordeeld. Bij een hypotheek met NHG gebeurt dat vaak via een{' '}
            <strong>Inkomensverklaring Ondernemer</strong>.
          </p>
          <p>
            Op deze pagina vind je het overzicht. De aparte gidsen beantwoorden de specifieke
            vragen — van winst en wisselend inkomen tot jaarcijfers, starters en hypotheekadvies.
          </p>
          <p>
            Wil je direct een eerste indicatie?{' '}
            <Link href={CALCULATOR_HREF}>Bereken je maximale hypotheek als zzp&apos;er</Link>.
          </p>

          <CalculatorCta />

          <h2>Kun je een hypotheek krijgen als zzp&apos;er?</h2>
          <p>Ja. Ook zelfstandigen kunnen een hypotheek aanvragen.</p>
          <p>
            Het verschil zit vooral in de inkomensbeoordeling. Bij een werknemer kijkt de
            geldverstrekker vaak naar salarisgegevens. Bij een zzp&apos;er wordt gekeken naar de
            financiële resultaten van de onderneming en de ontwikkeling daarvan.
          </p>
          <p>
            Lees de basisuitleg in{' '}
            <Link href="/blogs/hypotheek-als-zzper-hoe-werkt-het">
              Hypotheek als zzp&apos;er: hoe werkt het?
            </Link>
            .
          </p>

          <h2>Hoe beoordelen geldverstrekkers je inkomen?</h2>
          <p>
            Je omzet is niet hetzelfde als je hypotheekinkomen. Voor een IB-ondernemer, zoals
            iemand met een eenmanszaak, vormt de fiscale winst een belangrijke basis. Het
            uiteindelijke toetsinkomen wordt volgens het geldende toetskader vastgesteld.
          </p>
          <p>
            Daarbij kunnen meerdere jaren, het laatste boekjaar en het lopende boekjaar relevant
            zijn. Lees verder in{' '}
            <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper">
              Welk inkomen telt voor een hypotheek als zzp&apos;er?
            </Link>{' '}
            en{' '}
            <Link href="/blogs/winst-uit-onderneming-voor-hypotheek">
              Winst uit onderneming voor hypotheek
            </Link>
            .
          </p>

          <h2>Hoeveel jaar cijfers heb je nodig?</h2>
          <p>
            Vaak wordt gedacht dat je als zzp&apos;er altijd drie volledige jaren cijfers nodig
            hebt. Dat klopt niet als algemene regel.
          </p>
          <p>
            Voor de NHG-Inkomensverklaring Ondernemer geldt een minimale periode van{' '}
            <strong>12 maanden ondernemerschap</strong>. Bestaat je onderneming korter dan drie
            jaar, dan wordt de beschikbare financiële historie gebruikt.
          </p>
          <p>
            Meer hierover in{' '}
            <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers">
              Hypotheek zzp zonder 3 jaar cijfers
            </Link>
            ,{' '}
            <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper">
              Jaarcijfers nodig voor hypotheek als zzp&apos;er?
            </Link>{' '}
            en{' '}
            <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek">
              Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
            </Link>
            .
          </p>

          <h2>Wat als je inkomen wisselt?</h2>
          <p>
            Een wisselend inkomen sluit een hypotheek niet automatisch uit. Wel wordt niet
            uitsluitend naar je beste jaar gekeken. De beoordeling kijkt naar historie, het laatste
            jaar en vaak ook het lopende boekjaar.
          </p>
          <p>
            Lees{' '}
            <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper">
              Hypotheek met wisselend inkomen als zzp&apos;er
            </Link>
            .
          </p>

          <h2>Hoe wordt je maximale hypotheek berekend?</h2>
          <p>
            Eerst wordt het toetsinkomen vastgesteld. Daarna spelen rente, schulden, lease,
            studieschuld, partnerinkomen, woningwaarde en de geldende leennormen mee.
          </p>
          <p>
            Daarom is alleen je winst onvoldoende om te bepalen hoeveel je kunt lenen. Maak eerst
            een indicatie met onze calculator, of lees{' '}
            <Link href="/blogs/hypotheek-berekenen-als-zzper">
              Hypotheek berekenen als zzp&apos;er
            </Link>{' '}
            en{' '}
            <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper">
              Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
            </Link>
            .
          </p>

          <CalculatorCta />

          <h2>Startende zzp&apos;ers en eenmanszaken</h2>
          <p>
            Ben je pas gestart, dan is er minder historische informatie beschikbaar. Dat maakt een
            hypotheek niet per definitie onmogelijk, maar wel anders dan bij een gevestigde
            ondernemer.
          </p>
          <p>
            Lees{' '}
            <Link href="/blogs/hypotheek-voor-startende-zzpers">
              Hypotheek voor startende zzp&apos;ers
            </Link>{' '}
            en{' '}
            <Link href="/blogs/hypotheek-met-eenmanszaak">Hypotheek met een eenmanszaak</Link>.
          </p>
          <p>
            Ook als starter kun je alvast een{' '}
            <Link href={CALCULATOR_HREF}>eerste hypotheekberekening</Link> maken op basis van je
            huidige inkomen.
          </p>

          <h2>Wanneer heb je een hypotheekadviseur nodig?</h2>
          <p>
            Voor een eenvoudige situatie kun je zelf al een eerste berekening maken. Bij
            wisselende inkomsten, een korte historie, een bv, meerdere inkomstenbronnen of
            complexe verplichtingen helpt professioneel advies om je mogelijkheden helder te krijgen.
          </p>
          <p>
            FactuurBaas werkt hiervoor samen met Haruna. Lees meer in{' '}
            <Link href="/blogs/hypotheekadviseur-voor-zzpers">
              Hypotheekadviseur voor zzp&apos;ers
            </Link>
            .
          </p>
        </article>

        <section className="mt-14" aria-labelledby="hub-topics">
          <h2 id="hub-topics" className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
            Hypotheek als zzp&apos;er: alle onderwerpen
          </h2>
          <p className="mt-3 text-slate-600">
            Kies het onderwerp dat bij jouw vraag past. Elke gids gaat dieper in op één onderdeel.
          </p>

          <div className="mt-8 space-y-10">
            {sections.map((section) => (
              <div key={section.id}>
                <h3 className="font-heading text-lg font-semibold text-deep-blue">{section.title}</h3>
                <GuideList articles={section.articles} />
              </div>
            ))}
          </div>

          <CalculatorCta className="mt-10" label="Of bereken eerst je maximale hypotheek →" />
        </section>

        <section className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="font-heading text-xl font-bold text-deep-blue sm:text-2xl">
            Hulp nodig bij je hypotheek als zzp&apos;er?
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            De regels voor ondernemers kunnen per situatie en geldverstrekker verschillen. Wil je
            jouw situatie laten beoordelen? FactuurBaas werkt hiervoor samen met Haruna, een
            onafhankelijk hypotheekadvieskantoor dat ook ondernemers begeleidt.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" className="rounded-xl">
              <Link href="/blogs/hypotheekadviseur-voor-zzpers">
                Bekijk hypotheekadvies voor zzp&apos;ers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl">
              <Link href={CALCULATOR_HREF}>
                Bereken eerst zelf je hypotheek
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <p className="mt-10 text-sm text-slate-500">
          Of ga eerst naar de{' '}
          <Link href="/tools/hypotheek-zzp" className="text-warm-orange hover:underline">
            hypotheek-uitleg voor zzp&apos;ers
          </Link>{' '}
          of{' '}
          <Link href={CALCULATOR_HREF} className="text-warm-orange hover:underline">
            bereken je maximale hypotheek
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
