'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Calculator } from 'lucide-react';
import { EASE_OUT, Reveal } from '@/components/landing/page/motion';
import { getHypotheekHubSections, HYPOTHEEK_HUB_IMAGE } from '@/lib/hypotheekHub';

const CALCULATOR_HREF = '/tools/hypotheek-berekenen-zzp';

function CalculatorCta({
  label = "Bereken je maximale hypotheek als zzp'er",
  className = 'my-10',
}) {
  return (
    <div className={`not-prose ${className}`}>
      <Link
        href={CALCULATOR_HREF}
        className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[15px] font-medium text-white shadow-[0_1px_2px_rgba(6,26,48,0.2),0_8px_20px_-8px_rgba(6,26,48,0.5)] transition-colors hover:bg-ink-950"
      >
        <Calculator className="h-4 w-4 text-ember-100" aria-hidden />
        {label.replace(/\s*→$/, '')}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}

function GuideList({ articles }) {
  return (
    <ul className="border-t border-ink/10">
      {articles.map((article) => (
        <li key={article.slug} className="border-b border-ink/10">
          <Link href={`/blogs/${article.slug}`} className="group flex items-start justify-between gap-6 py-5">
            <span>
              <span className="font-display text-xl leading-snug text-ink transition-colors group-hover:text-ink-700">
                {article.title}
              </span>
              {article.excerpt && (
                <span className="mt-1.5 block text-sm leading-relaxed text-ink-500">{article.excerpt}</span>
              )}
            </span>
            <ArrowRight className="mt-1.5 h-4 w-4 shrink-0 text-ember transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function HypotheekHubContent() {
  const sections = getHypotheekHubSections();
  const reduce = useReducedMotion();

  return (
    <div className="bg-paper-50 text-ink">
      <header className="grain relative isolate overflow-hidden bg-paper">
        <div className="bg-ledger mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div
          className="pointer-events-none absolute -right-40 -top-48 -z-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(210,96,26,0.12),transparent_65%)]"
          aria-hidden
        />
        <div className="container mx-auto max-w-4xl px-4 pb-36 pt-12 sm:px-6 sm:pb-48 sm:pt-16 lg:pt-20">
          <nav aria-label="Breadcrumb" className="motion-safe:animate-rise">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
              <li>
                <Link href="/" className="transition-colors hover:text-ink">
                  FactuurBaas
                </Link>
              </li>
              <li aria-hidden className="text-ink/20">/</li>
              <li>
                <Link href="/blogs?pillar=hypotheek" className="transition-colors hover:text-ink">
                  Hypotheek
                </Link>
              </li>
              <li aria-hidden className="text-ink/20">/</li>
              <li className="text-ink-500" aria-current="page">Hypotheek als zzp&apos;er</li>
            </ol>
          </nav>

          <p
            className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-ember motion-safe:animate-rise"
            style={{ animationDelay: '60ms' }}
          >
            Overzicht · {sections.reduce((n, s) => n + s.articles.length, 0)} gidsen
          </p>
          <h1
            className="mt-4 font-display text-[2.6rem] font-normal leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[4.4rem] motion-safe:animate-rise"
            style={{ animationDelay: '120ms' }}
          >
            Hypotheek als <em className="text-ink-700">zzp&apos;er</em>
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl motion-safe:animate-rise"
            style={{ animationDelay: '180ms' }}
          >
            Hoe werkt een hypotheek als ondernemer? Overzicht van inkomen, cijfers, berekenen en
            advies.
          </p>
        </div>
      </header>

      <div className="container mx-auto -mt-28 max-w-6xl px-4 sm:-mt-40 sm:px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: EASE_OUT }}
          className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] bg-paper-200 shadow-paper ring-1 ring-ink/5 sm:aspect-[2/1] sm:rounded-[1.75rem]"
        >
          <img
            src={HYPOTHEEK_HUB_IMAGE.url}
            alt={HYPOTHEEK_HUB_IMAGE.alt}
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
        </motion.div>
      </div>

      <div className="container mx-auto max-w-[42rem] px-4 pb-24 pt-14 sm:px-6 sm:pt-20 lg:px-0">
        <article className="article-body prose prose-lg max-w-none prose-p:leading-[1.75] prose-h2:text-[1.85rem] sm:prose-h2:text-[2.15rem]">
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

      </div>

      <section className="border-t border-ink/10 bg-paper" aria-labelledby="hub-topics">
        <div className="container mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-28">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">Alle onderwerpen</p>
            <h2
              id="hub-topics"
              className="mt-4 font-display text-[2.2rem] font-normal leading-[1.05] tracking-[-0.03em] sm:text-5xl"
            >
              Hypotheek als <em className="text-ink-700">zzp&apos;er</em>: alle onderwerpen
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-500">
              Kies het onderwerp dat bij jouw vraag past. Elke gids gaat dieper in op één onderdeel.
            </p>
            <CalculatorCta className="mt-8" label="Of bereken eerst je maximale hypotheek" />
          </Reveal>

          <div className="space-y-14">
            {sections.map((section, index) => (
              <Reveal key={section.id} delay={0.05}>
                <h3 className="mb-2 flex items-baseline gap-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">
                  <span className="font-display text-2xl normal-case italic tracking-normal text-ember">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {section.title}
                </h3>
                <GuideList articles={section.articles} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-3 pb-3 sm:px-6 sm:pb-6">
        <Reveal
          y={24}
          className="grain-light relative isolate mx-auto max-w-[88rem] overflow-hidden rounded-[1.75rem] bg-ink-950 px-6 py-16 text-white sm:rounded-[2.25rem] sm:px-12 sm:py-20"
        >
          <div className="bg-ledger-dark mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
          <div
            className="pointer-events-none absolute -bottom-40 right-0 -z-10 h-[26rem] w-[46rem] rounded-full bg-[radial-gradient(ellipse,rgba(210,96,26,0.26),transparent_62%)]"
            aria-hidden
          />
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h2 className="max-w-[18ch] font-display text-[2.2rem] font-normal leading-[1.04] tracking-[-0.03em] sm:text-5xl">
                Hulp nodig bij je hypotheek <em className="text-ember-100">als zzp&apos;er?</em>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65">
                De regels voor ondernemers kunnen per situatie en geldverstrekker verschillen. Wil je
                jouw situatie laten beoordelen? FactuurBaas werkt hiervoor samen met Haruna, een
                onafhankelijk hypotheekadvieskantoor dat ook ondernemers begeleidt.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <Link
                href="/blogs/hypotheekadviseur-voor-zzpers"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-[15px] font-medium text-ink transition-colors hover:bg-paper-100"
              >
                Bekijk hypotheekadvies voor zzp&apos;ers
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href={CALCULATOR_HREF}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-[15px] font-medium text-white transition-colors hover:border-white/50"
              >
                Bereken eerst zelf je hypotheek
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
          <p className="mx-auto mt-12 max-w-5xl border-t border-white/10 pt-6 text-sm text-white/50">
            Of ga eerst naar de{' '}
            <Link
              href="/tools/hypotheek-zzp"
              className="text-white underline decoration-white/30 underline-offset-[5px] hover:decoration-white"
            >
              hypotheek-uitleg voor zzp&apos;ers
            </Link>{' '}
            of{' '}
            <Link
              href={CALCULATOR_HREF}
              className="text-white underline decoration-white/30 underline-offset-[5px] hover:decoration-white"
            >
              bereken je maximale hypotheek
            </Link>
            .
          </p>
        </Reveal>
      </section>
    </div>
  );
}
