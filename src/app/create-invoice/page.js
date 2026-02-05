import CreateInvoicePage from '@/views/InvoiceDetailsPage';

export const metadata = {
  title: 'Gratis Factuur Maken – Direct Online, Geen Account | FactuurBaas',
  description: 'Maak nu een gratis factuur: vul in, download PDF. Geen account of registratie. Binnen 1 minuut klaar. Ideaal voor zzp\'ers en kleine ondernemers.',
  keywords: 'gratis factuur maken, online factuur maken, factuur maken zzp, factuur zonder account, factuur maken gratis, direct factureren',
  alternates: { canonical: 'https://factuurbaas.nl/create-invoice' },
};

export default function CreateInvoiceRoute() {
  return <CreateInvoicePage />;
}
