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
    a: 'Tel het aantal dagen van de betalingstermijn op bij de factuurdatum. Bij een factuur van 10 juli met 14 dagen betalingstermijn is de vervaldatum 24 juli.',
  },
  {
    q: 'Welke betalingstermijn is gebruikelijk voor zzp\'ers?',
    a: '14 dagen is het meest gangbaar in Nederland. Sommige ondernemers kiezen 7 dagen (sneller betaald) of 30 dagen (grote opdrachtgevers).',
  },
  {
    q: 'Wat is het verschil tussen factuurdatum en vervaldatum?',
    a: 'De factuurdatum is de dag waarop je de factuur verstuurt. De vervaldatum is de uiterste betaaldatum — de laatste dag waarop je klant moet betalen.',
  },
  {
    q: 'Moet de vervaldatum op mijn factuur staan?',
    a: 'Ja. Op een correcte factuur vermeld je de betalingstermijn of een concrete vervaldatum, zodat je klant weet wanneer betaald moet zijn.',
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
