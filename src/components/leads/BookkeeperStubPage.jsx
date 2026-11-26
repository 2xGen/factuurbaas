import Link from 'next/link';
import { Search } from 'lucide-react';
import BookkeeperClusterLinks from '@/components/leads/BookkeeperClusterLinks';
import { ArrowIcon, PageHeader, TrustList, btn } from '@/components/site/editorial';
import { siteOpenGraphImages, SITE_OG_IMAGE } from '@/lib/siteOg';

export function bookkeeperStubMetadata({ title, description, path, keywords }) {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: `https://factuurbaas.nl${path}` },
    openGraph: {
      title,
      description,
      url: `https://factuurbaas.nl${path}`,
      siteName: 'FactuurBaas',
      type: 'website',
      images: siteOpenGraphImages,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [SITE_OG_IMAGE],
    },
  };
}

export default function BookkeeperStubPage({
  path,
  breadcrumb,
  title,
  lead,
  ctaLabel = 'Vind een boekhouder',
}) {
  return (
    <div className="min-h-screen bg-paper-50 text-ink">
      <PageHeader
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Boekhouden', href: '/boekhouden' },
          { name: breadcrumb },
        ]}
        eyebrow="Boekhouder"
        eyebrowIcon={Search}
        title={title}
        size="lg"
        align="start"
        lead={<p>{lead}</p>}
      >
        <TrustList items={['Gratis en vrijblijvend aanvragen', 'Voor zzp, VOF, BV en MKB', 'Geen verplichting']} />
        <Link href="/boekhouder-vinden" className={`${btn.primary} mt-8`}>
          {ctaLabel}
          <ArrowIcon />
        </Link>
      </PageHeader>

      <section className="border-t border-ink/[0.06] py-14 sm:py-16">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-[15px] leading-relaxed text-ink-500">
            Deze pagina bouwen we verder uit met gerichte SEO-content. Je kunt nu al gratis en vrijblijvend hulp
            aanvragen bij het vinden van een passende boekhouder via{' '}
            <Link href="/boekhouder-vinden" className="underline decoration-ink/20 underline-offset-4 hover:decoration-ember">
              Boekhouder vinden
            </Link>
            . Bekijk ook{' '}
            <Link href="/boekhouder-kosten" className="underline decoration-ink/20 underline-offset-4 hover:decoration-ember">
              wat een boekhouder kost
            </Link>
            .
          </p>
        </div>
      </section>

      <BookkeeperClusterLinks currentHref={path} />
    </div>
  );
}
