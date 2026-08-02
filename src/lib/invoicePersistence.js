import {
  isDataUrl,
  isStoragePath,
  normalizeLogoRef,
  resolveLogoForDisplay,
  uploadLogoDataUrl,
} from '@/lib/logoStorage';
import { calculateInvoiceBreakdown } from '@/lib/invoiceUtils';

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function isPersistedInvoiceId(id) {
  return typeof id === 'string' && UUID_RE.test(id);
}

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

function normalizeReceiverDetails(receiver = {}) {
  const hasStructured = Boolean(
    receiver.street || receiver.postalCode || receiver.city || receiver.country
  );
  if (hasStructured) {
    return {
      ...receiver,
      street: receiver.street || '',
      postalCode: receiver.postalCode || '',
      city: receiver.city || '',
      country: receiver.country || '',
    };
  }
  if (receiver.address) {
    return {
      ...receiver,
      street: receiver.address,
      postalCode: receiver.postalCode || '',
      city: receiver.city || '',
      country: receiver.country || '',
    };
  }
  return {
    ...receiver,
    street: receiver.street || '',
    postalCode: receiver.postalCode || '',
    city: receiver.city || '',
    country: receiver.country || '',
  };
}

/** Map DB row → form invoice (camelCase). */
export function rowToInvoice(row) {
  if (!row) return null;
  const receiver = normalizeReceiverDetails(row.receiver_details || {});
  return {
    id: row.id,
    invoiceName: row.invoice_name || '',
    invoice_number: row.invoice_number || '',
    invoiceDate: toDate(row.invoice_date),
    dueDate: toDate(row.due_date),
    paymentTermDays: row.payment_term_days || '14',
    status: row.status || 'concept',
    companyDetails: row.company_details || {},
    receiverDetails: receiver,
    receiverName: receiver.companyName || receiver.contactPerson || '',
    items: row.items || [],
    hoursWorked: row.hours_worked || [],
    workType: row.work_type || 'fixed',
    amount: row.amount ?? 0,
    description: row.description || '',
    currency: row.currency || 'EUR',
    tax: row.tax || '21',
    customTaxRate: row.custom_tax_rate ?? 21,
    taxIncluded: Boolean(row.tax_included),
    extraCosts: row.extra_costs || { travel: 0, shipping: 0, material: 0 },
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
    user_id: row.user_id,
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

async function withResolvedLogo(supabase, invoice) {
  if (!invoice) return null;
  const display = await resolveLogoForDisplay(supabase, invoice.logo);
  return { ...invoice, logo: display || null };
}

function logoForDb(logo) {
  if (!logo || typeof logo !== 'string') return null;
  if (isDataUrl(logo)) return null;
  const path = normalizeLogoRef(logo);
  return isStoragePath(path) ? path : null;
}

/** Map form invoice → DB payload. Logo = storage path only. */
export function invoiceToRow(invoice, userId, { includeId = true } = {}) {
  const breakdown = calculateInvoiceBreakdown(invoice);
  const row = {
    user_id: userId,
    invoice_number: invoice.invoice_number || null,
    invoice_name: invoice.invoiceName || null,
    invoice_date: toIso(invoice.invoiceDate),
    due_date: toIso(invoice.dueDate),
    payment_term_days: invoice.paymentTermDays || null,
    status: invoice.status || 'concept',
    company_details: invoice.companyDetails || {},
    receiver_details: invoice.receiverDetails || {},
    items: invoice.items || [],
    hours_worked: invoice.hoursWorked || [],
    work_type: invoice.workType || 'fixed',
    amount: Number(invoice.amount) || 0,
    description: invoice.description || null,
    currency: invoice.currency || 'EUR',
    tax: invoice.tax || '21',
    custom_tax_rate: invoice.customTaxRate ?? null,
    tax_included: Boolean(invoice.taxIncluded),
    extra_costs: invoice.extraCosts || {},
    notes: invoice.notes || null,
    terms: invoice.terms || null,
    layout: invoice.layout || 'plain',
    pdf_language: invoice.pdfLanguage || 'nl',
    logo: logoForDb(invoice.logo),
    activity_log: invoice.activity_log || [],
    total_excl: breakdown.subtotal,
    total_btw: breakdown.taxAmount,
    total_incl: breakdown.grandTotal,
    updated_at: new Date().toISOString(),
  };

  if (includeId && isPersistedInvoiceId(invoice.id)) {
    row.id = invoice.id;
  }

  return row;
}

export async function fetchUserInvoices(supabase, userId) {
  const { data, error } = await supabase
    .from('invoices')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  const invoices = (data || []).map(rowToInvoice);
  return Promise.all(invoices.map((inv) => withResolvedLogo(supabase, inv)));
}

export async function fetchInvoiceById(supabase, userId, invoiceId) {
  const { data, error } = await supabase
    .from('invoices')
    .select('*')
    .eq('id', invoiceId)
    .eq('user_id', userId)
    .maybeSingle();

  if (error) throw error;
  return withResolvedLogo(supabase, rowToInvoice(data));
}

export async function upsertInvoice(supabase, userId, invoice, activityDescription) {
  const withLog = {
    ...invoice,
    activity_log: [...(invoice.activity_log || invoice.activityLog || [])],
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
      logo = await uploadLogoDataUrl(supabase, userId, logo, 'invoice-logo');
    } catch {
      logo = null;
    }
  } else {
    logo = logoForDb(logo);
  }

  const isUpdate = isPersistedInvoiceId(invoice.id);
  const row = invoiceToRow({ ...withLog, logo }, userId, { includeId: isUpdate });

  if (isUpdate) {
    const { data, error } = await supabase
      .from('invoices')
      .update(row)
      .eq('id', invoice.id)
      .eq('user_id', userId)
      .select('*')
      .single();
    if (error) throw error;
    return withResolvedLogo(supabase, rowToInvoice(data));
  }

  const { data, error } = await supabase.from('invoices').insert(row).select('*').single();
  if (error) throw error;
  return withResolvedLogo(supabase, rowToInvoice(data));
}

export async function deleteInvoice(supabase, userId, invoiceId) {
  const { error } = await supabase
    .from('invoices')
    .delete()
    .eq('id', invoiceId)
    .eq('user_id', userId);
  if (error) throw error;
}

export function invoicesToExportJson(invoices) {
  return JSON.stringify(invoices, null, 2);
}

export function invoicesToExportCsv(invoices) {
  const headers = [
    'id',
    'invoice_number',
    'invoice_name',
    'status',
    'invoice_date',
    'due_date',
    'receiver',
    'total_excl',
    'total_btw',
    'total_incl',
  ];
  const lines = [headers.join(',')];
  for (const inv of invoices) {
    const receiver =
      inv.receiverDetails?.companyName || inv.receiverName || inv.receiverDetails?.contactPerson || '';
    const cells = [
      inv.id,
      inv.invoice_number,
      inv.invoiceName,
      inv.status,
      toIso(inv.invoiceDate),
      toIso(inv.dueDate),
      receiver,
      inv.total_excl ?? '',
      inv.total_btw ?? '',
      inv.total_incl ?? '',
    ].map((v) => `"${String(v ?? '').replace(/"/g, '""')}"`);
    lines.push(cells.join(','));
  }
  return lines.join('\n');
}
