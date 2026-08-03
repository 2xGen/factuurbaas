import '@/app/globals.css';
import { Providers } from './providers';
import ClientLayout from './ClientLayout';
import { Analytics } from '@vercel/analytics/next';
import { siteOpenGraphImages, SITE_OG_IMAGE } from '@/lib/siteOg';

export const metadata = {
  title: 'Gratis Factuur Maken – Geen Account | FactuurBaas',
  description:
    "Maak gratis professionele facturen in 2 minuten. Geen account nodig. Direct PDF downloaden voor zzp'ers en kleine ondernemers.",
  metadataBase: new URL('https://factuurbaas.nl'),
  openGraph: {
    title: 'FactuurBaas | Eenvoudig Factureren',
    description:
      'Maak gratis professionele facturen in 2 minuten. Geen account nodig. Direct PDF downloaden.',
    url: 'https://factuurbaas.nl',
    siteName: 'FactuurBaas',
    type: 'website',
    locale: 'nl_NL',
    images: siteOpenGraphImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FactuurBaas | Eenvoudig Factureren',
    description:
      'Maak gratis professionele facturen in 2 minuten. Geen account nodig. Direct PDF downloaden.',
    images: [SITE_OG_IMAGE],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        <link rel="icon" type="image/svg+xml" href="/crown-favicon.svg" />
        <meta name="google-site-verification" content="fSZ1o8tGJa7pjbJW1I2MsHR4xBnmfMu57OzH8rmO3Lo" />
      </head>
      <body>
        <Providers>
          <ClientLayout>
            {children}
          </ClientLayout>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
