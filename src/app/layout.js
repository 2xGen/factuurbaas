import '@/app/globals.css';
import { Providers } from './providers';
import ClientLayout from './ClientLayout';

export const metadata = {
  title: 'FactuurBaas | Gratis Factuur Maken voor ZZP',
  description: 'Gratis factuur maken als zzp. Binnen 1 minuut een professionele factuur. Geen account nodig.',
  metadataBase: new URL('https://factuurbaas.nl'),
  openGraph: {
    title: 'FactuurBaas | Eenvoudig Factureren',
    url: 'https://factuurbaas.nl',
    siteName: 'FactuurBaas',
    type: 'website',
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
        </Providers>
      </body>
    </html>
  );
}
