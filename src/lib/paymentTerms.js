import { differenceInDays, startOfDay } from 'date-fns';
import { parseDateSafe } from '@/lib/invoiceUtils';

function norm(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');
}

function toDay(value) {
  if (!value) return null;
  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}/.test(value.trim())) {
    const [y, m, d] = value.trim().slice(0, 10).split('-').map(Number);
    return startOfDay(new Date(y, m - 1, d));
  }
  const parsed = parseDateSafe(value);
  return parsed ? startOfDay(parsed) : null;
}

function invoiceEmail(invoice) {
  return norm(invoice?.receiverDetails?.email || invoice?.email);
}

function invoiceCompany(invoice) {
  return norm(invoice?.receiverDetails?.companyName || invoice?.receiverName);
}

export function invoiceMatchesClient(invoice, client) {
  if (!invoice || !client) return false;

  const invEmail = invoiceEmail(invoice);
  const cliEmail = norm(client.email);
  if (invEmail && cliEmail && invEmail === cliEmail) return true;

  const invCompany = invoiceCompany(invoice);
  const cliCompany = norm(client.companyName);
  if (invCompany && cliCompany && invCompany === cliCompany) return true;

  const invContact = norm(invoice.receiverDetails?.contactPerson || invoice.receiverName);
  const cliContact = norm(client.contactPerson);
  if (!cliCompany && invContact && cliContact && invContact === cliContact) return true;

  return false;
}

export function paymentDaysForInvoice(invoice) {
  if (invoice?.status !== 'paid') return null;
  const invoiceDay = toDay(invoice.invoiceDate);
  const paidDay = toDay(invoice.paidDate);
  if (!invoiceDay || !paidDay) return null;
  const days = differenceInDays(paidDay, invoiceDay);
  return Number.isFinite(days) ? days : null;
}

function averageFromDays(samples) {
  if (!samples.length) return null;
  const averageDays = Math.round(samples.reduce((sum, d) => sum + d, 0) / samples.length);
  return { averageDays, count: samples.length };
}

export function getClientPaymentStats(invoices = [], client) {
  const samples = invoices
    .filter((inv) => invoiceMatchesClient(inv, client))
    .map(paymentDaysForInvoice)
    .filter((d) => d !== null && d >= 0);
  return averageFromDays(samples);
}

export function getPeerPaymentStats(invoices = [], invoice) {
  if (!invoice) return null;
  const email = invoiceEmail(invoice);
  const company = invoiceCompany(invoice);
  const samples = invoices
    .filter((inv) => inv.id !== invoice.id && inv.status === 'paid')
    .filter((inv) => {
      const e = invoiceEmail(inv);
      if (email && e && email === e) return true;
      const n = invoiceCompany(inv);
      return Boolean(company && n && company === n);
    })
    .map(paymentDaysForInvoice)
    .filter((d) => d !== null && d >= 0);
  return averageFromDays(samples);
}

export function formatAveragePaymentDays(stats) {
  if (!stats) return null;
  const days = stats.averageDays === 1 ? '1 dag' : `${stats.averageDays} dagen`;
  return `Gem. ${days}`;
}
