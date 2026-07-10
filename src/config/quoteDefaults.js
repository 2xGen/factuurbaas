import { addDays } from 'date-fns';

export const defaultQuote = {
  companyDetails: {
    name: '',
    street: '',
    postalCode: '',
    city: '',
    email: '',
    kvk: '',
    btw: '',
    iban: '',
  },
  logo: null,
  layout: 'plain',
  rememberCompanyDetails: false,
  quoteNumber: 'OFF-2026-001',
  quoteDate: new Date(),
  validUntil: addDays(new Date(), 14),
  clientDetails: {
    companyName: '',
    contactPerson: '',
    email: '',
    address: '',
  },
  items: [{ id: 1, description: '', quantity: 1, price: 0 }],
  taxRate: 21,
  options: {
    showValidity: true,
    showTerms: true,
    showSignature: false,
    showPaymentTerms: true,
  },
  terms: 'Deze offerte is 14 dagen geldig. Betaling binnen 14 dagen na akkoord.',
  notes: '',
};
