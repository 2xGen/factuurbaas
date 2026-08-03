import React, { Suspense } from 'react';
import { articles } from '@/lib/blogData';
import { getGuideListItems } from '@/lib/guideData';
import { guideHubFaqs } from '@/lib/guideHub';
import BlogListClient from './BlogListClient';
import { siteOpenGraphImages, SITE_OG_IMAGE } from '@/lib/siteOg';

const guideListItems = getGuideListItems();

export const metadata = {
  title: 'Factuur tips zzp’ers: factuur maken, btw & betaaltermijn | FactuurBaas',
  description:
    'Ontdek artikelen voor zzp’ers over factuur maken, btw op je factuur, betaaltermijn en factuurbeheer. Inclusief praktische stappenplannen voor sneller betaling en minder fouten.',
  keywords: 'factuur maken, gratis online facturen maken, zzp tips, ondernemerstips, facturatie software, administratie, blog',
  openGraph: {
    title: 'Factuur tips zzp’ers: factuur maken, btw & betaaltermijn | FactuurBaas',
    description:
      'Ontdek artikelen voor zzp’ers over factuur maken, btw op je factuur, betaaltermijn en factuurbeheer. Inclusief praktische stappenplannen voor sneller betaling en minder fouten.',
    url: 'https://factuurbaas.nl/blogs',
    type: 'website',
    siteName: 'FactuurBaas',
    images: siteOpenGraphImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Factuur tips zzp’ers: factuur maken, btw & betaaltermijn | FactuurBaas',
    description:
      'Ontdek artikelen voor zzp’ers over factuur maken, btw op je factuur, betaaltermijn en factuurbeheer. Inclusief praktische stappenplannen voor sneller betaling en minder fouten.',
    images: [SITE_OG_IMAGE],
  },
  alternates: { canonical: 'https://factuurbaas.nl/blogs' },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'FactuurBaas Blog - Tips voor Facturatie en Ondernemen',
  description: 'Artikelen en gidsen om je te helpen met facturatie, administratie en de groei van je bedrijf.',
  url: 'https://factuurbaas.nl/blogs',
  numberOfItems: articles.length + guideListItems.length,
  itemListElement: [
    ...articles.map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://factuurbaas.nl/blogs/${article.slug}`,
      name: article.title,
    })),
    ...guideListItems.map((guide, index) => ({
      '@type': 'ListItem',
      position: articles.length + index + 1,
      url: `https://factuurbaas.nl/gidsen/${guide.slug}`,
      name: guide.title,
    })),
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: guideHubFaqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
};

export default function BlogsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Suspense fallback={<div className="bg-slate-50 py-24 min-h-[40rem] flex items-center justify-center"><div className="animate-pulse text-slate-400">Laden...</div></div>}>
        <BlogListClient articles={articles} guides={guideListItems} />
      </Suspense>
    </>
  );
}
