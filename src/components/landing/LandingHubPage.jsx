import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import InvoiceHubThumbnail from '@/components/landing/InvoiceHubThumbnail';
import { LandingSection, SectionHeader } from '@/components/landing/LandingSection';
import { Reveal } from '@/components/landing/page/motion';
import { ArrowIcon, PageHeader, btn } from '@/components/site/editorial';

function accentLastWord(text) {
  if (typeof text !== 'string') return text;
  const index = text.lastIndexOf(' ');
  if (index === -1) return text;
  return (
    <>
      {text.slice(0, index + 1)}
      <em>{text.slice(index + 1)}</em>
    </>
  );
}

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-4 focus-visible:ring-offset-paper-50';

function HubLinkCard({ link, footerLabel, showPreview, previewBadge, index }) {
  const actionLabel = link.footerLabel || footerLabel;
  const isSoon = link.comingSoon;
  const hasPreview = showPreview && (link.example || link.format);

  const cardClassName = cn(
    'group flex h-full flex-col rounded-2xl transition-all duration-300',
    focusRing,
    !hasPreview && 'border border-ink/[0.08] bg-white p-6 shadow-paper sm:p-7',
    !hasPreview && !isSoon && 'hover:-translate-y-1 hover:border-ink/20',
    isSoon && 'opacity-60'
  );

  const inner = (
    <>
      {hasPreview && (
        <InvoiceHubThumbnail
          example={link.example}
          format={link.format}
          badge={previewBadge}
          docType={link.docType}
        />
      )}

      <div className={cn('flex items-start justify-between gap-3', hasPreview && 'mt-5')}>
        {link.tag ? (
          <span
            className={cn(
              'font-mono text-[10.5px] uppercase tracking-[0.14em]',
              isSoon ? 'text-ink-400' : 'text-ember'
            )}
          >
            {link.tag}
          </span>
        ) : (
          <span />
        )}
        {!hasPreview && (
          <span className="font-display text-lg italic leading-none text-ink-400" aria-hidden>
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
      </div>

      <h3
        className={cn(
          'mt-2.5 font-display text-[1.4rem] font-normal leading-[1.18] tracking-[-0.02em]',
          isSoon ? 'text-ink-500' : 'text-ink'
        )}
      >
        <span
          className={cn(
            !isSoon &&
              'bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]'
          )}
        >
          {link.label}
        </span>
      </h3>

      {link.description && (
        <p className="mt-3 flex-grow text-[15px] leading-relaxed text-ink-500">{link.description}</p>
      )}

      <span
        className={cn(
          'mt-5 inline-flex items-center gap-1.5 text-sm font-medium',
          isSoon ? 'text-ink-400' : 'text-ink'
        )}
      >
        {actionLabel}
        {!isSoon && (
          <ArrowRight
            className="h-3.5 w-3.5 text-ember transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        )}
      </span>
    </>
  );

  if (isSoon) {
    return <div className={cardClassName}>{inner}</div>;
  }

  return (
    <Link href={link.href} className={cardClassName}>
      {inner}
    </Link>
  );
}

function gridClassName(count, showPreview) {
  const gap = showPreview ? 'gap-x-8 gap-y-14' : 'gap-5';
  if (count === 2) return cn('grid sm:grid-cols-2', gap, showPreview ? 'max-w-4xl' : 'max-w-3xl');
  if (count === 4) return cn('grid sm:grid-cols-2 lg:grid-cols-4', gap);
  return cn('grid sm:grid-cols-2 lg:grid-cols-3', gap);
}

export default function LandingHubPage({
  title,
  description,
  descriptionExtra,
  links,
  linkGroups,
  linksTitle = 'Gerelateerde pagina\'s',
  linksDescription = 'Kies een pagina die past bij wat je zoekt.',
  ctaHref = '/create-invoice',
  ctaLabel = 'Maak gratis factuur',
  showHeroCta = true,
  linkFooterLabel = 'Bekijk template',
  showPreview = false,
  previewBadge = 'Voorbeeld',
  relatedLinks,
  relatedLinksTitle = 'Gerelateerd',
  showFooterCtas = true,
  footerPrimaryHref = '/create-invoice',
  footerPrimaryLabel = 'Maak gratis factuur',
}) {
  const groups = linkGroups?.length
    ? linkGroups
    : links?.length
      ? [{ title: null, links }]
      : [];

  return (
    <div className="min-h-screen bg-paper-50 text-ink">
      <PageHeader
        title={accentLastWord(title)}
        containerClassName="pb-14 sm:pb-16 lg:pb-20"
        lead={
          <>
            <p>{description}</p>
            {descriptionExtra && <p className="text-base text-ink-400 sm:text-lg">{descriptionExtra}</p>}
          </>
        }
      >
        {showHeroCta && (
          <Link href={ctaHref} className={btn.primary}>
            {ctaLabel}
            <ArrowIcon />
          </Link>
        )}
      </PageHeader>

      {groups.length > 0 && (
        <LandingSection className="border-t border-ink/[0.06]">
          {linksTitle ? (
            <SectionHeader align="left" title={linksTitle} description={linksDescription} />
          ) : null}

          <div className="space-y-16 sm:space-y-20">
            {groups.map((group, groupIndex) => (
              <div key={group.title || 'default'}>
                {group.title && (
                  <div className="mb-8 flex items-baseline gap-4 border-b border-ink/10 pb-4">
                    <span className="font-display text-xl italic text-ember" aria-hidden>
                      {String(groupIndex + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink sm:text-[1.75rem]">
                      {group.title}
                    </h3>
                  </div>
                )}
                <div className={gridClassName(group.links.length, showPreview)}>
                  {group.links.map((link, index) => (
                    <Reveal key={link.href || link.label} delay={Math.min(index, 6) * 0.05} className="h-full">
                      <HubLinkCard
                        link={link}
                        index={index}
                        footerLabel={linkFooterLabel}
                        showPreview={showPreview}
                        previewBadge={previewBadge}
                      />
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {relatedLinks?.length > 0 && (
            <div className="mt-20 grid gap-6 border-t border-ink/10 pt-10 sm:mt-24 md:grid-cols-[14rem_1fr] md:gap-10">
              <h2 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
                {relatedLinksTitle}
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'group inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm text-ink-700 transition-colors hover:border-ink/30 hover:text-ink',
                      focusRing
                    )}
                  >
                    {link.label}
                    <ArrowRight
                      className="h-3.5 w-3.5 text-ember transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {showFooterCtas && (
            <div className="mt-16 flex flex-col gap-3 border-t border-ink/10 pt-10 sm:flex-row">
              <Link href={footerPrimaryHref} className={btn.primary}>
                {footerPrimaryLabel}
                <ArrowIcon />
              </Link>
              <Link href="/blogs" className={btn.secondary}>
                Bekijk gidsen
              </Link>
            </div>
          )}
        </LandingSection>
      )}
    </div>
  );
}
