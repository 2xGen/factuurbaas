import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { seoLandingLinks } from '@/lib/invoiceLandingData';
import { ArrowRight } from 'lucide-react';

const slugData = Object.fromEntries(
  seoLandingLinks
    .filter((l) => l.href.startsWith('/factuur-maken/'))
    .map((l) => {
      const slug = l.href.replace('/factuur-maken/', '');
      return [
        slug,
        {
          title: l.label,
          description: `Leer hoe je ${l.label.toLowerCase()} met FactuurBaas. Gratis, zonder account, direct PDF.`,
        },
      ];
    })
);

slugData.zzp = {
  title: 'Factuur maken ZZP',
  description:
    "Maak als zzp'er snel een professionele factuur. Geen account nodig, direct downloaden als PDF.",
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = slugData[slug];
  if (!data) return {};

  return {
    title: `${data.title} – Gratis Online | FactuurBaas`,
    description: data.description,
    alternates: { canonical: `https://factuurbaas.nl/factuur-maken/${slug}` },
  };
}

export default async function FactuurMakenSlugPage({ params }) {
  const { slug } = await params;
  const data = slugData[slug];
  if (!data) notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-deep-blue via-sky-700 to-indigo-600 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl font-heading font-bold">{data.title}</h1>
          <p className="mt-4 text-blue-100 text-lg">{data.description}</p>
          <Button asChild size="lg" variant="secondary" className="mt-8 rounded-xl">
            <Link href="/create-invoice">
              Maak gratis factuur
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
