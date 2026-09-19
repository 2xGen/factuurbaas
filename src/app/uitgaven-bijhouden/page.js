import UitgavenBijhoudenPage from '@/components/landing/UitgavenBijhoudenPage';
import { siteOpenGraphImages, SITE_OG_IMAGE } from '@/lib/siteOg';

const title = "Zakelijke uitgaven bijhouden als zzp'er | Gratis | FactuurBaas";
const description =
  "Houd zakelijke uitgaven bij als zzp'er. Registreer kosten, btw en terugkerende lasten en zie je resultaat naast je facturen. Gratis met FactuurBaas.";

export const metadata = {
  title,
  description,
  keywords:
    'uitgaven bijhouden, zakelijke uitgaven bijhouden, kosten bijhouden zzp, zakelijke kosten bijhouden, uitgaven bijhouden zzp, zakelijke kosten zzp, btw op uitgaven',
  alternates: { canonical: 'https://factuurbaas.nl/uitgaven-bijhouden' },
  openGraph: {
    title,
    description,
    url: 'https://factuurbaas.nl/uitgaven-bijhouden',
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

export default function UitgavenBijhoudenRoute() {
  return <UitgavenBijhoudenPage />;
}
