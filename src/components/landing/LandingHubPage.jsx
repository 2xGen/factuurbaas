import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, FileType } from 'lucide-react';
import InvoiceHubThumbnail from '@/components/landing/InvoiceHubThumbnail';

const tagIcons = {
  Formaat: FileType,
  Populair: FileText,
  Bouw: FileText,
  Uren: FileText,
  Diensten: FileText,
  Freelance: FileText,
  KOR: FileText,
  Horeca: FileText,
  Marketing: FileText,
};

function HubLinkCard({ link, footerLabel, showPreview, previewBadge }) {
  const TagIcon = tagIcons[link.tag] || FileText;
  const actionLabel = link.footerLabel || footerLabel;
  const isSoon = link.comingSoon;

  const cardClassName =
    'group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 sm:p-6 ' +
    (isSoon
      ? 'opacity-80'
      : 'hover:-translate-y-0.5 hover:border-warm-orange/30 hover:shadow-md');

  const inner = (
    <>
      {showPreview && (link.example || link.format) && (
        <InvoiceHubThumbnail
          example={link.example}
          format={link.format}
          badge={previewBadge}
          docType={link.docType}
        />
      )}

      <div className="mb-3 flex items-start justify-between gap-3">
        {link.tag ? (
          <span
            className={
              isSoon
                ? 'inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500'
                : 'inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-green-700'
            }
          >
            <TagIcon className="h-3.5 w-3.5" />
            {link.tag}
          </span>
        ) : (
          <span />
        )}
        {!isSoon && (
          <ArrowRight className="h-4 w-4 flex-shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-warm-orange" />
        )}
      </div>

      <h3
        className={
          isSoon
            ? 'text-lg font-bold text-slate-700'
            : 'text-lg font-bold text-deep-blue transition-colors group-hover:text-warm-orange'
        }
      >
        {link.label}
      </h3>

      {link.description && (
        <p className="mt-2 flex-grow text-sm leading-relaxed text-slate-600">{link.description}</p>
      )}

      <span
        className={
          isSoon
            ? 'mt-4 text-sm font-medium text-slate-400'
            : 'mt-4 text-sm font-semibold text-deep-blue group-hover:text-warm-orange'
        }
      >
        {actionLabel}
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
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-deep-blue via-sky-700 to-indigo-600 text-white py-12 sm:py-16">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="font-heading text-3xl font-bold tracking-tight md:text-5xl">{title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
            {description}
          </p>
          {descriptionExtra && (
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-blue-100/90 sm:text-base">
              {descriptionExtra}
            </p>
          )}
          {showHeroCta && (
            <div className="mt-10 flex justify-center">
              <Button
                asChild
                size="xl"
                variant="secondary"
                className="h-auto min-h-14 gap-2 px-8 py-4 text-base font-semibold sm:text-lg"
              >
                <Link href={ctaHref}>
                  {ctaLabel}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {groups.length > 0 && (
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6">
            <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-deep-blue sm:text-3xl">
                {linksTitle}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
                {linksDescription}
              </p>
            </div>

            <div className="space-y-12">
              {groups.map((group) => (
                <div key={group.title || 'default'}>
                  {group.title && (
                    <h3 className="mb-5 font-heading text-lg font-semibold text-deep-blue sm:text-xl">
                      {group.title}
                    </h3>
                  )}
                  <div
                    className={
                      group.links.length === 2
                        ? 'mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 sm:gap-5'
                        : 'grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3'
                    }
                  >
                    {group.links.map((link) => (
                      <HubLinkCard
                        key={link.href || link.label}
                        link={link}
                        footerLabel={linkFooterLabel}
                        showPreview={showPreview}
                        previewBadge={previewBadge}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {relatedLinks?.length > 0 && (
              <div className="mx-auto mt-12 max-w-2xl text-center sm:mt-14">
                <h2 className="font-heading text-lg font-bold text-deep-blue sm:text-xl">
                  {relatedLinksTitle}
                </h2>
                <div className="mt-5 flex flex-wrap justify-center gap-2.5">
                  {relatedLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-warm-orange/40 hover:text-warm-orange"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {showFooterCtas && (
              <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:mt-14 sm:flex-row">
                <Button asChild size="lg" className="h-12 rounded-xl px-8">
                  <Link href={footerPrimaryHref}>
                    {footerPrimaryLabel}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 rounded-xl px-8">
                  <Link href="/blogs">Bekijk gidsen</Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
