import { addDays, format, isValid, parseISO } from 'date-fns';
import { nl } from 'date-fns/locale';

export const PAYMENT_TERM_PRESETS = [
  { value: 7, label: '7 dagen' },
  { value: 14, label: '14 dagen' },
  { value: 30, label: '30 dagen' },
];

export const BETAALTERMIJN_FAQS = [
  {
    q: 'Hoe bereken ik de vervaldatum van een factuur?',
    a: 'Tel de afgesproken betalingstermijn op bij de factuurdatum. Bij een factuurdatum van 10 juli en een betalingstermijn van 14 dagen is de vervaldatum 24 juli. Je kunt dit ook automatisch berekenen met onze betaaltermijn calculator.',
  },
  {
    q: 'Wat is de vervaldatum van een factuur?',
    a: 'De vervaldatum is de datum waarop een factuur uiterlijk betaald moet zijn volgens de afgesproken betalingstermijn.',
  },
  {
    q: 'Wat betekent vervaldatum?',
    a: 'De vervaldatum is de uiterste datum waarop een betaling moet zijn voldaan.',
  },
  {
    q: 'Wat is het verschil tussen betalingstermijn en vervaldatum?',
    a: 'De betalingstermijn is het aantal dagen dat een klant krijgt om te betalen. De vervaldatum is de concrete datum waarop die termijn eindigt.',
  },
  {
    q: 'Welke betalingstermijn is gebruikelijk voor zzp\'ers?',
    a: 'Veel zzp\'ers gebruiken een betalingstermijn van 14 of 30 dagen. De juiste termijn hangt af van de afspraken met je klant en de omstandigheden van de opdracht.',
  },
  {
    q: 'Wanneer moet een klant betalen?',
    a: 'Een klant moet betalen binnen de afgesproken betalingstermijn. De concrete uiterste betaaldatum kun je berekenen vanaf de factuurdatum.',
  },
  {
    q: 'Kan ik de vervaldatum op mijn factuur zetten?',
    a: 'Ja. Je kunt naast de betalingstermijn ook de concrete vervaldatum op je factuur vermelden. Dat maakt voor je klant direct duidelijk wanneer de betaling uiterlijk wordt verwacht.',
  },
];

export function parsePaymentDays(value) {
  if (value === '' || value === null || value === undefined) return null;
  const num = parseInt(String(value).replace(/\D/g, ''), 10);
  return Number.isFinite(num) && num > 0 ? num : null;
}

export function parseInvoiceDate(value) {
  if (!value) return null;
  const parsed = value instanceof Date ? value : parseISO(String(value));
  return isValid(parsed) ? parsed : null;
}

export function calculateDueDateFromTerm(invoiceDate, paymentDays) {
  const start = parseInvoiceDate(invoiceDate);
  const days = parsePaymentDays(paymentDays);
  if (!start || days === null) return null;
  return addDays(start, days);
}

export function formatDutchDate(date) {
  if (!date || !isValid(date)) return '';
  return format(date, 'd MMMM yyyy', { locale: nl });
}

export function paymentTermValueFromDays(days) {
  if (days === 7 || days === 14 || days === 30) return String(days);
  return 'custom';
}

export function getBetaaltermijnFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: BETAALTERMIJN_FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
