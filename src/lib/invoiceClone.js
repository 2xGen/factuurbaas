import { addDays } from 'date-fns';
import { calculateDueDate } from '@/lib/invoiceUtils';

/**
 * Suggest next invoice number by incrementing the last digit run.
 * e.g. 2026-001 → 2026-002, INV-42 → INV-43
 */
export function suggestNextInvoiceNumber(current) {
  if (!current || typeof current !== 'string') return '';
  const match = current.trim().match(/^(.*?)(\d+)(\D*)$/);
  if (!match) return '';
  const [, prefix, digits, suffix] = match;
  const next = String(Number(digits) + 1).padStart(digits.length, '0');
  return `${prefix}${next}${suffix}`;
}

/**
 * Clone a saved invoice into a new draft for "opnieuw factureren".
 * Non-UUID id → upsertInvoice will INSERT on save.
 */
export function cloneInvoiceAsNewDraft(source) {
  if (!source) return null;

  const today = new Date();
  const paymentTermDays = source.paymentTermDays || '14';
  const dueDate =
    calculateDueDate(today, paymentTermDays) || addDays(today, 14);

  const baseId = Date.now();

  return {
    ...source,
    id: `INV-${String(baseId).slice(-6)}`,
    invoice_number: suggestNextInvoiceNumber(source.invoice_number),
    invoiceDate: today,
    dueDate,
    paymentTermDays,
    status: 'concept',
    activity_log: [],
    activityLog: [],
    created_at: undefined,
    updated_at: undefined,
    user_id: undefined,
    total_excl: source.total_excl,
    total_btw: source.total_btw,
    total_incl: source.total_incl,
    items: (source.items || []).map((item, index) => ({
      ...item,
      id: baseId + index,
    })),
    hoursWorked: (source.hoursWorked || []).map((log, index) => ({
      ...log,
      id: baseId + 1000 + index,
      date: log.date ? new Date(log.date) : new Date(),
      hours: log.hours,
      taskDescription: log.taskDescription || '',
    })),
  };
}
