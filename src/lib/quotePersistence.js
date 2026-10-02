import {
  isDataUrl,
  isStoragePath,
  normalizeLogoRef,
  resolveLogoForDisplay,
  uploadLogoDataUrl,
} from '@/lib/logoStorage';
import { calculateQuoteBreakdown } from '@/lib/quoteUtils';

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function isPersistedQuoteId(id) {
  return typeof id === 'string' && UUID_RE.test(id);
}

export const QUOTE_STATUS_LABELS = {
  concept: 'Concept',
  sent: 'Verstuurd',
  accepted: 'Geaccepteerd',
  rejected: 'Afgewezen',
  converted: 'Omgezet',
};

function toIso(value) {
  if (!value) return null;
  if (value instanceof Date) return value.toISOString();
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
}

function toDate(value) {
  if (!value) return new Date();
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? new Date() : d;
}

/** Normalize client address: prefer structured fields; keep flat address for UI. */
export function normalizeClientDetails(client = {}) {
  const street = client.street || '';
  const postalCode = client.postalCode || '';
  const city = client.city || '';
  const country = client.country || '';
  const hasStructured = Boolean(street || postalCode || city || country);

  let address = client.address || '';
  if (hasStructured && !address) {
    address = [street, [postalCode, city].filter(Boolean).join(' '), country]
      .filter(Boolean)
      .join('\n');
  }

  let nextStreet = street;
  let nextPostal = postalCode;
  let nextCity = city;
  if (!hasStructured && address) {
    const lines = String(address)
      .split(/\n/)
      .map((l) => l.trim())
      .filter(Boolean);
    if (lines[0] && !nextStreet) nextStreet = lines[0];
    if (lines[1]) {
      const match = lines[1].match(/^(\d{4}\s*[A-Za-z]{2})\s+(.*)$/);
      if (match) {
        if (!nextPostal) nextPostal = match[1].replace(/\s+/, ' ').trim();
        if (!nextCity) nextCity = match[2].trim();
      } else if (!nextCity) {
        nextCity = lines[1];
      }
    }
  }

  return {
    companyName: client.companyName || '',
    contactPerson: client.contactPerson || '',
    email: client.email || '',
    address,
    street: nextStreet,
    postalCode: nextPostal,
    city: nextCity,
    country,
  };
}

function logoForDb(logo) {
  if (!logo || typeof logo !== 'string') return null;
  if (isDataUrl(logo)) return null;
  const path = normalizeLogoRef(logo);
  return isStoragePath(path) ? path : null;
}

/** Map DB row → form quote. */
export function rowToQuote(row) {
  if (!row) return null;
  const clientDetails = normalizeClientDetails(row.client_details || {});
  return {
    id: row.id,
    quoteNumber: row.quote_number || '',
    quoteDate: toDate(row.quote_date),
    validUntil: toDate(row.valid_until),
    status: row.status || 'concept',
    companyDetails: row.company_details || {},
    clientDetails,
    clientName: clientDetails.companyName || clientDetails.contactPerson || '',
    items: row.items || [],
    hoursWorked: (row.hours_worked || []).map((log) => ({
      ...log,
      date: log.date ? toDate(log.date) : null,
    })),
    amount: Number(row.amount) || 0,
    taxRate: Number(row.tax_rate) || 21,
    tax: row.tax || String(row.tax_rate ?? 21),
    customTaxRate: row.custom_tax_rate ?? 21,
    taxIncluded: Boolean(row.tax_included),
    options: row.options || {},
    notes: row.notes || '',
    terms: row.terms || '',
    layout: row.layout || 'plain',
    pdfLanguage: row.pdf_language || 'nl',
    logo: row.logo || null,
    activity_log: row.activity_log || [],
    activityLog: row.activity_log || [],
    total_excl: Number(row.total_excl) || 0,
    total_btw: Number(row.total_btw) || 0,
    total_incl: Number(row.total_incl) || 0,
    convertedInvoiceId: row.converted_invoice_id || null,
    user_id: row.user_id,
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

async function withResolvedLogo(supabase, quote) {
  if (!quote) return null;
  const display = await resolveLogoForDisplay(supabase, quote.logo);
  return { ...quote, logo: display || null };
}

/** Map form quote → DB payload. */
export function quoteToRow(quote, userId, { includeId = true } = {}) {
  const breakdown = calculateQuoteBreakdown(quote);
  const clientDetails = normalizeClientDetails(quote.clientDetails || {});
  const row = {
    user_id: userId,
    quote_number: quote.quoteNumber || null,
    quote_date: toIso(quote.quoteDate),
    valid_until: toIso(quote.validUntil),
    status: quote.status || 'concept',
    company_details: quote.companyDetails || {},
    client_details: clientDetails,
    items: quote.items || [],
    hours_worked: (quote.hoursWorked || []).map((log) => ({
      ...log,
      date: toIso(log.date),
    })),
    amount: Number(quote.amount) || 0,
    options: quote.options || {},
    tax_rate: Number(quote.taxRate) || 21,
    tax: quote.tax || String(quote.taxRate ?? 21),
    custom_tax_rate: quote.customTaxRate ?? null,
    tax_included: Boolean(quote.taxIncluded),
    notes: quote.notes || null,
    terms: quote.terms || null,
    layout: quote.layout || 'plain',
    pdf_language: quote.pdfLanguage || 'nl',
    logo: logoForDb(quote.logo),
    activity_log: quote.activity_log || quote.activityLog || [],
    total_excl: breakdown.subtotal,
    total_btw: breakdown.taxAmount,
    total_incl: breakdown.grandTotal,
    converted_invoice_id: quote.convertedInvoiceId || null,
    updated_at: new Date().toISOString(),
  };

  if (includeId && isPersistedQuoteId(quote.id)) {
    row.id = quote.id;
  }

  return row;
}

export async function fetchUserQuotes(supabase, userId) {
  const { data, error } = await supabase
    .from('quotes')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  const quotes = (data || []).map(rowToQuote);
  return Promise.all(quotes.map((q) => withResolvedLogo(supabase, q)));
}

export async function fetchQuoteById(supabase, userId, quoteId) {
  const { data, error } = await supabase
    .from('quotes')
    .select('*')
    .eq('id', quoteId)
    .eq('user_id', userId)
    .maybeSingle();

  if (error) throw error;
  return withResolvedLogo(supabase, rowToQuote(data));
}

export async function upsertQuote(supabase, userId, quote, activityDescription) {
  const withLog = {
    ...quote,
    activity_log: [...(quote.activity_log || quote.activityLog || [])],
  };
  if (activityDescription) {
    withLog.activity_log.push({
      date: new Date().toISOString(),
      description: activityDescription,
      user: userId,
    });
  }

  let logo = withLog.logo;
  if (typeof logo === 'string' && isDataUrl(logo)) {
    try {
      logo = await uploadLogoDataUrl(supabase, userId, logo, 'quote-logo');
    } catch {
      logo = null;
    }
  } else {
    logo = logoForDb(logo);
  }

  const isUpdate = isPersistedQuoteId(quote.id);
  const row = quoteToRow({ ...withLog, logo }, userId, { includeId: isUpdate });

  if (isUpdate) {
    const { data, error } = await supabase
      .from('quotes')
      .update(row)
      .eq('id', quote.id)
      .eq('user_id', userId)
      .select('*')
      .single();
    if (error) throw error;
    return withResolvedLogo(supabase, rowToQuote(data));
  }

  const { data, error } = await supabase.from('quotes').insert(row).select('*').single();
  if (error) throw error;
  return withResolvedLogo(supabase, rowToQuote(data));
}

export async function deleteQuote(supabase, userId, quoteId) {
  const { error } = await supabase
    .from('quotes')
    .delete()
    .eq('id', quoteId)
    .eq('user_id', userId);
  if (error) throw error;
}

/** Slim fetch for dashboard signals (no logo resolve). */
export async function fetchQuoteDashboardRows(supabase, userId) {
  const { data, error } = await supabase
    .from('quotes')
    .select('id, quote_number, status, valid_until, client_details, total_incl')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return (data || []).map((row) => ({
    id: row.id,
    quoteNumber: row.quote_number || '',
    status: row.status || 'concept',
    validUntil: row.valid_until ? new Date(row.valid_until) : null,
    clientName:
      row.client_details?.companyName ||
      row.client_details?.contactPerson ||
      '',
    totalIncl: Number(row.total_incl) || 0,
  }));
}

/** Slim status update for dashboard / list actions. */
export async function updateQuoteStatus(supabase, userId, quoteId, status) {
  if (!isPersistedQuoteId(quoteId) || !status) return;
  const { error } = await supabase
    .from('quotes')
    .update({
      status,
      updated_at: new Date().toISOString(),
    })
    .eq('id', quoteId)
    .eq('user_id', userId);
  if (error) throw error;
}

/** Mark quote as converted after invoice save. */
export async function markQuoteConverted(supabase, userId, quoteId, invoiceId) {
  if (!isPersistedQuoteId(quoteId) || !invoiceId) return;
  const { error } = await supabase
    .from('quotes')
    .update({
      status: 'converted',
      converted_invoice_id: invoiceId,
      updated_at: new Date().toISOString(),
    })
    .eq('id', quoteId)
    .eq('user_id', userId);
  if (error) throw error;
}

export function quotesToExportJson(quotes) {
  return JSON.stringify(quotes, null, 2);
}

export function quotesToExportCsv(quotes) {
  const headers = [
    'id',
    'quote_number',
    'status',
    'quote_date',
    'valid_until',
    'client',
    'total_excl',
    'total_btw',
    'total_incl',
  ];
  const lines = [headers.join(',')];
  for (const q of quotes) {
    const client =
      q.clientDetails?.companyName || q.clientName || q.clientDetails?.contactPerson || '';
    const cells = [
      q.id,
      q.quoteNumber,
      q.status,
      toIso(q.quoteDate),
      toIso(q.validUntil),
      client,
      q.total_excl ?? '',
      q.total_btw ?? '',
      q.total_incl ?? '',
    ].map((v) => `"${String(v ?? '').replace(/"/g, '""')}"`);
    lines.push(cells.join(','));
  }
  return lines.join('\n');
}
