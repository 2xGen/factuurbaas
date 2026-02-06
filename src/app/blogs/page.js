import React, { Suspense } from 'react';
import { articles } from '@/lib/blogData';
import BlogListClient from './BlogListClient';

export const metadata = {
  title: 'Blogs - Tips voor Facturatie en Ondernemen | FactuurBaas',
  description: 'Ontdek onze artikelen vol tips over factuur maken, gratis online facturen maken, en efficiënt ondernemen. Verbeter je administratie met de inzichten van FactuurBaas.',
  keywords: 'factuur maken, gratis online facturen maken, zzp tips, ondernemerstips, facturatie software, administratie, blog',
  openGraph: {
    title: 'Blogs - Tips voor Facturatie en Ondernemen | FactuurBaas',
    description: 'Artikelen en gidsen om je te helpen met facturatie, administratie en de groei van je bedrijf.',
    url: 'https://factuurbaas.nl/blogs',
    type: 'website',
    siteName: 'FactuurBaas',
    images: articles.length > 0 ? [{ url: articles[0].image.url, width: 1200, height: 630, alt: articles[0].image.alt }] : [],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blogs - Tips voor Facturatie en Ondernemen | FactuurBaas',
    description: 'Artikelen en gidsen om je te helpen met facturatie, administratie en de groei van je bedrijf.',
  },
  alternates: { canonical: 'https://factuurbaas.nl/blogs' },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'FactuurBaas Blog - Tips voor Facturatie en Ondernemen',
  description: 'Artikelen en gidsen om je te helpen met facturatie, administratie en de groei van je bedrijf.',
  url: 'https://factuurbaas.nl/blogs',
  numberOfItems: articles.length,
  itemListElement: articles.map((article, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `https://factuurbaas.nl/blogs/${article.slug}`,
    name: article.title,
  })),
};

export default function BlogsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Suspense fallback={<div className="bg-slate-50 py-24 min-h-[40rem] flex items-center justify-center"><div className="animate-pulse text-slate-400">Laden...</div></div>}>
        <BlogListClient articles={articles} />
      </Suspense>
    </>
  );
}
