import '@/app/globals.css';
import { Providers } from './providers';
import ClientLayout from './ClientLayout';
import { Analytics } from '@vercel/analytics/next';
import { siteOpenGraphImages, SITE_OG_IMAGE } from '@/lib/siteOg';

export const viewport = {
  themeColor: '#0A2A4D',
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Gratis Factuur Maken – Geen Account | FactuurBaas',
  description:
    "Maak gratis professionele facturen in 2 minuten. Geen account nodig. Direct PDF downloaden voor zzp'ers en kleine ondernemers.",
  metadataBase: new URL('https://factuurbaas.nl'),
  applicationName: 'FactuurBaas',
  appleWebApp: {
    capable: true,
    title: 'FactuurBaas',
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/crown-favicon.svg', type: 'image/svg+xml' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
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
  other: {
    'mobile-web-app-capable': 'yes',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        <meta name="google-site-verification" content="fSZ1o8tGJa7pjbJW1I2MsHR4xBnmfMu57OzH8rmO3Lo" />
        <meta name="impact-site-verification" value="e72d300b-d7ad-48db-ba1f-dd5a6a7d196f" />
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
