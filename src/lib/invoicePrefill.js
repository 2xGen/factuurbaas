const PREFILL_KEY = 'factuurbaas_invoice_prefill';

export function saveInvoicePrefill({ amountExcl, taxRate, itemName = 'Dienst / product' }) {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(
    PREFILL_KEY,
    JSON.stringify({
      amountExcl,
      taxRate,
      itemName,
      source: 'btw-calculator',
    })
  );
}

export function consumeInvoicePrefill() {
  if (typeof window === 'undefined') return null;
  const raw = sessionStorage.getItem(PREFILL_KEY);
  if (!raw) return null;
  sessionStorage.removeItem(PREFILL_KEY);
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function taxRateToInvoiceField(rate) {
  if (rate === 21) return '21';
  if (rate === 9) return '9';
  if (rate === 0) return '0';
  return 'custom';
}

const QUOTE_PREFILL_KEY = 'factuurbaas_quote_prefill';

import { paymentTermValueFromDays } from '@/lib/betaaltermijnCalculator';

export function saveBetaaltermijnPrefill({ invoiceDate, paymentTermDays, dueDate }) {
  if (typeof window === 'undefined') return;
  const days = parseInt(String(paymentTermDays), 10);
  sessionStorage.setItem(
    PREFILL_KEY,
    JSON.stringify({
      source: 'betaaltermijn-calculator',
      invoiceDate,
      paymentTermDays: paymentTermValueFromDays(days),
      dueDate,
      customDays: days,
    })
  );
}

export function saveFactuurnummerPrefill({ invoiceNumber }) {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(
    PREFILL_KEY,
    JSON.stringify({
      source: 'factuurnummer-generator',
      invoiceNumber,
    })
  );
}

export function saveUurtariefInvoicePrefill({ hourlyRate }) {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(
    PREFILL_KEY,
    JSON.stringify({
      source: 'uurtarief-calculator',
      hourlyRate,
    })
  );
}

export function saveUurtariefQuotePrefill({ hourlyRate }) {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(
    QUOTE_PREFILL_KEY,
    JSON.stringify({
      source: 'uurtarief-calculator',
      hourlyRate,
    })
  );
}

export function consumeQuotePrefill() {
  if (typeof window === 'undefined') return null;
  const raw = sessionStorage.getItem(QUOTE_PREFILL_KEY);
  if (!raw) return null;
  sessionStorage.removeItem(QUOTE_PREFILL_KEY);
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveQuoteToInvoicePrefill(quote) {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(
    PREFILL_KEY,
    JSON.stringify({
      source: 'offerte-maker',
      companyDetails: quote.companyDetails,
      logo: quote.logo,
      clientDetails: quote.clientDetails,
      items: quote.items,
      taxRate: quote.taxRate,
      layout: quote.layout,
      notes: quote.notes,
      terms: quote.terms,
    })
  );
}

const PENDING_HOURS_ENTRY_IDS_KEY = 'factuurbaas_uren_pending_entry_ids';

/** Prefill create-invoice from selected time entries (uren → factuur). */
export function saveHoursToInvoicePrefill({ hoursWorked, hourlyRate, entryIds = [] }) {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(
    PREFILL_KEY,
    JSON.stringify({
      source: 'uren',
      hoursWorked,
      hourlyRate,
      entryIds,
    })
  );
  if (entryIds.length) {
    sessionStorage.setItem(PENDING_HOURS_ENTRY_IDS_KEY, JSON.stringify(entryIds));
  }
}

/** Entry IDs waiting to be marked "op factuur" after a successful invoice save. */
export function consumePendingHoursEntryIds() {
  if (typeof window === 'undefined') return [];
  const raw = sessionStorage.getItem(PENDING_HOURS_ENTRY_IDS_KEY);
  sessionStorage.removeItem(PENDING_HOURS_ENTRY_IDS_KEY);
  if (!raw) return [];
  try {
    const ids = JSON.parse(raw);
    return Array.isArray(ids) ? ids : [];
  } catch {
    return [];
  }
}
