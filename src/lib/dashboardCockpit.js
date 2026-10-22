import { differenceInDays, startOfDay } from 'date-fns';
import { parseDateSafe } from '@/lib/invoiceUtils';
import { KOR_REVENUE_LIMIT } from '@/lib/korCalculator';

const PROFILE_FIELDS = [
  { key: 'name', label: 'Bedrijfsnaam' },
  { key: 'address', label: 'Adres' },
  { key: 'kvk', label: 'KvK' },
  { key: 'btw', label: 'BTW-nummer' },
  { key: 'iban', label: 'IBAN' },
  { key: 'logo', label: 'Logo' },
];

function toDate(value) {
  if (!value) return null;
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? null : value;
  }
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d;
}

function invoiceDate(invoice) {
  return toDate(invoice.invoiceDate) || toDate(invoice.created_at) || null;
}

export function getTimeOfDayGreeting(now = new Date()) {
  const hour = now.getHours();
  if (hour < 12) return 'Goedemorgen';
  if (hour < 18) return 'Goedemiddag';
  return 'Goedenavond';
}

export function getDisplayFirstName(user, profile) {
  const raw =
    profile?.full_name ||
    user?.user_metadata?.full_name ||
    user?.user_metadata?.name ||
    user?.email?.split('@')[0] ||
    '';
  const first = String(raw).trim().split(/\s+/)[0];
  return first || 'baas';
}

export function clientLabel(invoice) {
  return (
    invoice?.receiverName ||
    invoice?.receiverDetails?.companyName ||
    invoice?.receiverDetails?.contactPerson ||
    invoice?.invoiceName ||
    `Factuur #${invoice?.invoice_number || String(invoice?.id || '').slice(0, 8)}`
  );
}

/** Unpaid invoices past due date, most overdue first. */
export function getOverdueInvoices(invoices = [], now = new Date()) {
  const today = startOfDay(now);
  return invoices
    .filter((inv) => inv.status !== 'paid')
    .map((inv) => {
      const due = parseDateSafe(inv.dueDate);
      if (!due) return null;
      const daysLate = differenceInDays(today, startOfDay(due));
      if (daysLate <= 0) return null;
      return {
        invoice: inv,
        daysLate,
        amount: Number(inv.total_incl) || 0,
        client: clientLabel(inv),
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.daysLate - a.daysLate);
}

/**
 * "Verdiend" in FactuurBaas = omzet op factuurdatum, excl. btw (accrual).
 *
 * Telt mee:
 * - facturen met invoiceDate in de periode (total_excl), óók als ze nog openstaan
 * - losse verkopen (incomes.amount_excl) met incomeDate in de periode
 *
 * Telt niet mee:
 * - een factuur later op betaald zetten (dat is cash / openstaand)
 * - een bankbetaling voor een factuur die al bestaat — Inkomsten is alleen
 *   verkoop zonder factuur, nooit een tweede keer dezelfde €1.000
 *
 * Openstaand = nog niet betaalde facturen (total_incl), ook van eerdere maanden.
 * Jaardoel gebruikt dezelfde definitie over het kalenderjaar.
 */
export function getRevenueThisMonth(invoices = [], now = new Date()) {
  const year = now.getFullYear();
  const month = now.getMonth();
  return invoices.reduce((sum, inv) => {
    const date = invoiceDate(inv);
    if (!date || date.getFullYear() !== year || date.getMonth() !== month) return sum;
    return sum + (Number(inv.total_excl) || 0);
  }, 0);
}

/** Zelfde definitie als verdiend, over het kalenderjaar. */
export function getRevenueThisYear(invoices = [], now = new Date()) {
  const year = now.getFullYear();
  return invoices.reduce((sum, inv) => {
    const date = invoiceDate(inv);
    if (!date || date.getFullYear() !== year) return sum;
    return sum + (Number(inv.total_excl) || 0);
  }, 0);
}

/** Verkoop-btw for the current calendar month. */
export function getSalesBtwThisMonth(invoices = [], now = new Date()) {
  const year = now.getFullYear();
  const month = now.getMonth();
  return invoices.reduce((sum, inv) => {
    const date = invoiceDate(inv);
    if (!date || date.getFullYear() !== year || date.getMonth() !== month) return sum;
    return sum + (Number(inv.total_btw) || 0);
  }, 0);
}

/** Omzet − uitgaven; BTW te reserveren = verkoop-btw − aftrekbare btw. */
export function getMonthBusinessResult({
  revenueExcl = 0,
  expensesExcl = 0,
  salesBtw = 0,
  deductibleBtw = 0,
}) {
  const resultaat = Math.round((revenueExcl - expensesExcl) * 100) / 100;
  const btwTeReserveren = Math.round((salesBtw - deductibleBtw) * 100) / 100;
  return { resultaat, btwTeReserveren };
}

/**
 * Profile completion for invoice-useful company fields.
 * Returns filled/total + missing labels for value-framed prompts.
 */
export function getProfileCompletion(profile) {
  const hasAddress = Boolean(
    profile?.company_address ||
      (profile?.company_street && profile?.company_city) ||
      (profile?.company_postal_code && profile?.company_city)
  );

  const checks = {
    name: Boolean(profile?.company_name?.trim()),
    address: hasAddress,
    kvk: Boolean(profile?.company_kvk?.trim()),
    btw: Boolean(profile?.company_btw?.trim()),
    iban: Boolean(profile?.company_iban?.trim()),
    logo: Boolean(profile?.logo_url),
  };

  const filled = PROFILE_FIELDS.filter((f) => checks[f.key]).length;
  const total = PROFILE_FIELDS.length;
  const missing = PROFILE_FIELDS.filter((f) => !checks[f.key]).map((f) => f.label);
  const percent = Math.round((filled / total) * 100);

  return {
    filled,
    total,
    percent,
    missing,
    isComplete: filled === total,
    checks,
  };
}

/** Accepted quotes waiting to be converted to an invoice. */
export function getAcceptedQuotesWaiting(quotes = []) {
  return quotes.filter((q) => q.status === 'accepted');
}

/** Sent (or concept) quotes whose validity date has passed. */
export function getExpiredValidityQuotes(quotes = [], now = new Date()) {
  const today = startOfDay(now);
  return quotes
    .filter((q) => q.status === 'sent' || q.status === 'concept')
    .map((q) => {
      const validUntil = toDate(q.validUntil);
      if (!validUntil) return null;
      const daysExpired = differenceInDays(today, startOfDay(validUntil));
      if (daysExpired <= 0) return null;
      return { quote: q, daysExpired };
    })
    .filter(Boolean)
    .sort((a, b) => b.daysExpired - a.daysExpired);
}

export function getConceptQuotes(quotes = []) {
  return quotes.filter((q) => q.status === 'concept');
}

export function countConceptQuotes(quotes = []) {
  return getConceptQuotes(quotes).length;
}

/** Sent/concept quotes that expire within the next `withinDays` days (not yet expired). */
export function getQuotesExpiringSoon(quotes = [], now = new Date(), withinDays = 7) {
  const today = startOfDay(now);
  return quotes
    .filter((q) => q.status === 'sent' || q.status === 'concept')
    .map((q) => {
      const validUntil = toDate(q.validUntil);
      if (!validUntil) return null;
      const daysUntil = differenceInDays(startOfDay(validUntil), today);
      if (daysUntil < 1 || daysUntil > withinDays) return null;
      return { quote: q, daysUntil };
    })
    .filter(Boolean)
    .sort((a, b) => a.daysUntil - b.daysUntil);
}

/**
 * Dutch quarterly VAT return window: last two weeks of Mar/Jun/Sep/Dec,
 * and the following aangifte month (Apr/Jul/Oct/Jan).
 */
export function isVatReturnApproaching(now = new Date()) {
  const month = now.getMonth();
  const day = now.getDate();
  if ([2, 5, 8, 11].includes(month) && day >= 18) return true;
  if ([3, 6, 9, 0].includes(month)) return true;
  return false;
}

function quoteHref(quote) {
  return quote?.id ? `/tools/offerte-maker/maken?id=${quote.id}` : '/offertes';
}

function quoteLabel(quote) {
  if (quote?.clientName) return quote.clientName;
  if (quote?.quoteNumber) return `Offerte ${quote.quoteNumber}`;
  return 'Offerte';
}

/**
 * Actie nodig = business workflow (te laat → herinnering → betaald, offerte, btw).
 * Onboarding = "Maak FactuurBaas compleet" and disappears when done.
 */
export function buildDashboardSignals({
  overdue = [],
  openHours = 0,
  invoiceCount = 0,
  quoteCount = 0,
  acceptedQuotes = [],
  expiredQuotes = [],
  expiringQuotes = [],
  profileCompletion,
  outstandingInvoicesCount = 0,
  btwTeReserveren = 0,
  vatReturnApproaching = false,
  ytdRevenue = 0,
}) {
  const actions = [];
  const listedOverdue = overdue.slice(0, 3);

  for (const row of listedOverdue) {
    const daysLabel = `${row.daysLate} ${row.daysLate === 1 ? 'dag' : 'dagen'} te laat`;
    actions.push({
      id: `overdue-${row.invoice.id}`,
      type: 'overdue',
      tone: 'urgent',
      title: `${row.client} · ${formatEuro(row.amount)} · ${daysLabel}`,
      invoice: row.invoice,
      daysLate: row.daysLate,
      amount: row.amount,
    });
  }

  const unpaidNotListed = Math.max(0, outstandingInvoicesCount - listedOverdue.length);
  if (unpaidNotListed > 0) {
    const n = unpaidNotListed;
    actions.push({
      id: 'open-invoices',
      type: 'open-invoices',
      tone: 'info',
      title: n === 1 ? '1 factuur nog niet betaald' : `${n} facturen nog niet betaald`,
      href: '/facturen',
      cta: 'Bekijk',
    });
  }

  for (const row of expiringQuotes.slice(0, 2)) {
    const q = row.quote;
    actions.push({
      id: `expiring-quote-${q.id || row.daysUntil}`,
      type: 'expiring-quote',
      tone: 'info',
      title:
        row.daysUntil === 1
          ? `${quoteLabel(q)} verloopt morgen`
          : `${quoteLabel(q)} verloopt over ${row.daysUntil} dagen`,
      href: quoteHref(q),
      cta: 'Bekijk offerte',
    });
  }

  if (expiredQuotes.length > 0) {
    const first = expiredQuotes[0];
    actions.push({
      id: 'expired-quotes',
      type: 'expired-quotes',
      tone: 'info',
      title:
        expiredQuotes.length === 1
          ? `${quoteLabel(first.quote)} is verlopen`
          : `${expiredQuotes.length} offertes zijn verlopen`,
      href: expiredQuotes.length === 1 ? quoteHref(first.quote) : '/offertes',
      cta: 'Bekijk offerte',
    });
  }

  if (ytdRevenue > KOR_REVENUE_LIMIT) {
    actions.push({
      id: 'kor-over',
      type: 'kor',
      tone: 'urgent',
      title: `KOR-grens overschreden · ${formatEuro(ytdRevenue)} omzet`,
      href: '/tools/kor-calculator/berekenen',
      cta: 'Bekijk KOR',
    });
  } else if (ytdRevenue >= KOR_REVENUE_LIMIT * 0.85) {
    const remaining = Math.max(0, KOR_REVENUE_LIMIT - ytdRevenue);
    actions.push({
      id: 'kor-near',
      type: 'kor',
      tone: 'info',
      title: `KOR: nog ${formatEuro(remaining)} onder de grens`,
      href: '/tools/kor-calculator/berekenen',
      cta: 'Bekijk',
    });
  }

  if (vatReturnApproaching && btwTeReserveren > 0) {
    actions.push({
      id: 'vat-reserve',
      type: 'vat-reserve',
      tone: 'info',
      title: 'BTW-aangifte nadert',
      detail: `${formatEuro(btwTeReserveren)} geschatte btw`,
      href: '/uitgaven',
      cta: 'Bekijk',
    });
  }

  if (acceptedQuotes.length > 0) {
    const first = acceptedQuotes[0];
    actions.push({
      id: 'accepted-quotes',
      type: 'accepted-quotes',
      tone: 'info',
      title:
        acceptedQuotes.length === 1
          ? `${quoteLabel(first)} heeft geaccepteerd`
          : `${acceptedQuotes.length} geaccepteerde offertes`,
      href: acceptedQuotes.length === 1 ? quoteHref(first) : '/offertes',
      cta: acceptedQuotes.length === 1 ? 'Maak factuur' : 'Bekijk',
    });
  }

  if (openHours > 0) {
    actions.push({
      id: 'open-hours',
      type: 'open-hours',
      tone: 'info',
      title: `${formatHours(openHours)} nog niet gefactureerd`,
      href: '/uren',
      cta: 'Maak factuur',
    });
  }

  const onboarding = [];

  if (profileCompletion && !profileCompletion.isComplete) {
    onboarding.push({
      id: 'profile',
      title: 'Vul je bedrijfsgegevens aan',
      detail: `${profileCompletion.filled} van ${profileCompletion.total} ingevuld`,
      href: '/profile',
      cta: 'Aanvullen',
    });
  }

  if (quoteCount === 0) {
    onboarding.push({
      id: 'no-quotes',
      title: 'Maak je eerste offerte',
      href: '/tools/offerte-maker/maken',
      cta: 'Offerte maken',
    });
  }

  if (invoiceCount === 0) {
    onboarding.push({
      id: 'no-invoices',
      title: 'Maak je eerste factuur',
      href: '/create-invoice',
      cta: 'Factuur maken',
    });
  }

  const limitedOnboarding = onboarding.slice(0, 2);

  return {
    actions: actions.slice(0, 6),
    onboarding: limitedOnboarding,
    nextStep: limitedOnboarding[0] || null,
    nextSteps: limitedOnboarding,
  };
}

/** @deprecated use buildDashboardSignals */
export function buildAttentionItems(args) {
  const { actions, nextStep } = buildDashboardSignals(args);
  return [...actions, ...(nextStep ? [{ ...nextStep, type: 'prompt', tone: 'nudge' }] : [])].slice(
    0,
    4
  );
}

export function formatEuro(n) {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
  }).format(n || 0);
}

export function formatHours(n) {
  return `${Number(n || 0).toLocaleString('nl-NL', { maximumFractionDigits: 1 })} uur`;
}
