export const CURRENCIES = [
  { code: 'EUR', label: 'EUR (€)', symbol: '€', locale: 'nl-NL' },
  { code: 'USD', label: 'USD ($)', symbol: '$', locale: 'en-US' },
  { code: 'GBP', label: 'GBP (£)', symbol: '£', locale: 'en-GB' },
  { code: 'CZK', label: 'CZK (Kč)', symbol: 'Kč', locale: 'cs-CZ' },
  { code: 'CHF', label: 'CHF', symbol: 'CHF', locale: 'de-CH' },
  { code: 'SEK', label: 'SEK (kr)', symbol: 'kr', locale: 'sv-SE' },
  { code: 'PLN', label: 'PLN (zł)', symbol: 'zł', locale: 'pl-PL' },
];

export const TAX_OPTIONS = [
  { value: '21', label: '21% (Standaard tarief)' },
  { value: '9', label: '9% (Laag tarief)' },
  { value: '0', label: '0%' },
  { value: 'exempt', label: 'Vrijgesteld' },
  { value: 'reverse', label: 'Verlegd (BTW verlegd)' },
  { value: 'custom', label: 'Eigen percentage' },
];

export const PAYMENT_TERM_OPTIONS = [
  { value: '7', label: '7 dagen' },
  { value: '14', label: '14 dagen' },
  { value: '30', label: '30 dagen' },
  { value: 'custom', label: 'Eigen datum' },
];

export const PDF_LANGUAGES = [
  { value: 'nl', label: 'Nederlands' },
  { value: 'en', label: 'English' },
];

export const INVOICE_LABELS = {
  nl: {
    invoice: 'FACTUUR',
    date: 'Datum',
    invoiceNumber: 'Factuurnummer',
    dueDate: 'Vervaldatum',
    billTo: 'Factuur aan',
    description: 'Omschrijving',
    specification: 'Specificatie',
    quantity: 'Aantal',
    pricePerUnit: 'Prijs/st.',
    pricePerHour: 'Uurtarief',
    task: 'Taak',
    hours: 'Uren',
    totalInclVat: 'Totaal (incl. BTW)',
    total: 'Totaal',
    subtotalExclVat: 'Subtotaal (excl. BTW)',
    subtotal: 'Subtotaal',
    vat: 'BTW',
    paymentDetails: 'Betalingsgegevens',
    paymentDue: 'Gelieve het volledige bedrag over te maken voor',
    thanks: 'Bedankt voor uw medewerking!',
    noItems: 'Geen items ingevoerd.',
    noHours: 'Geen uren ingevoerd.',
    inclVat: 'incl.',
    exclVat: 'excl.',
    vatExempt: 'Btw vrijgesteld op grond van artikel 25 Wet OB',
    vatReverse: 'BTW verlegd — btw naar afnemer',
    travelCosts: 'Voorrijkosten',
    shippingCosts: 'Verzendkosten',
    materialCosts: 'Materiaalkosten',
    extraCosts: 'Extra kosten',
    notes: 'Notities',
    terms: 'Betaalvoorwaarden',
    contactPerson: 't.a.v.',
    phone: 'Tel.',
    kvk: 'KvK',
    btw: 'BTW',
    iban: 'IBAN',
    email: 'E-mail',
    paymentWithin: (days) => `Betaling binnen ${days} dagen.`,
  },
  en: {
    invoice: 'INVOICE',
    date: 'Date',
    invoiceNumber: 'Invoice number',
    dueDate: 'Due date',
    billTo: 'Bill to',
    description: 'Description',
    specification: 'Specification',
    quantity: 'Qty',
    pricePerUnit: 'Unit price',
    pricePerHour: 'Hourly rate',
    task: 'Task',
    hours: 'Hours',
    totalInclVat: 'Total (incl. VAT)',
    total: 'Total',
    subtotalExclVat: 'Subtotal (excl. VAT)',
    subtotal: 'Subtotal',
    vat: 'VAT',
    paymentDetails: 'Payment details',
    paymentDue: 'Please transfer the full amount by',
    thanks: 'Thank you for your business!',
    noItems: 'No items entered.',
    noHours: 'No hours entered.',
    inclVat: 'incl.',
    exclVat: 'excl.',
    vatExempt: 'VAT exempt under applicable tax law',
    vatReverse: 'VAT reverse charge — VAT payable by recipient',
    travelCosts: 'Travel costs',
    shippingCosts: 'Shipping costs',
    materialCosts: 'Material costs',
    extraCosts: 'Additional costs',
    notes: 'Notes',
    terms: 'Payment terms',
    contactPerson: 'Attn.',
    phone: 'Tel.',
    kvk: 'CoC',
    btw: 'VAT ID',
    iban: 'IBAN',
    email: 'Email',
    paymentWithin: (days) => `Payment within ${days} days.`,
  },
};

export function getCurrencyConfig(code) {
  return CURRENCIES.find((c) => c.code === code) || CURRENCIES[0];
}

export function formatMoney(amount, currencyCode = 'EUR') {
  const value = parseFloat(amount) || 0;
  try {
    return new Intl.NumberFormat(getCurrencyConfig(currencyCode).locale, {
      style: 'currency',
      currency: currencyCode,
    }).format(value);
  } catch {
    return `${getCurrencyConfig(currencyCode).symbol}${value.toFixed(2)}`;
  }
}

export function getEffectiveTaxRate(invoice) {
  if (!invoice) return 0;
  if (invoice.tax === 'exempt' || invoice.tax === 'reverse') return 0;
  if (invoice.tax === 'custom') return (parseFloat(invoice.customTaxRate) || 0) / 100;
  return (parseFloat(invoice.tax) || 0) / 100;
}

export function getTaxDisplayLabel(invoice, labels) {
  if (invoice.tax === 'exempt') return labels.vatExempt;
  if (invoice.tax === 'reverse') return labels.vatReverse;
  if (invoice.tax === 'custom') return `${labels.vat} (${invoice.customTaxRate || 0}%)`;
  return `${labels.vat} (${invoice.tax}%)`;
}

export function formatCompanyAddress(companyDetails = {}) {
  if (companyDetails.address) return companyDetails.address;
  const lines = [
    companyDetails.street,
    [companyDetails.postalCode, companyDetails.city].filter(Boolean).join(' '),
    companyDetails.country,
  ].filter(Boolean);
  return lines.join('\n');
}
