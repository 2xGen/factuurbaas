import { differenceInDays, startOfDay } from 'date-fns';
import { parseDateSafe } from '@/lib/invoiceUtils';

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

/** Omzet excl. btw for the current calendar month. */
export function getRevenueThisMonth(invoices = [], now = new Date()) {
  const year = now.getFullYear();
  const month = now.getMonth();
  return invoices.reduce((sum, inv) => {
    const date = invoiceDate(inv);
    if (!date || date.getFullYear() !== year || date.getMonth() !== month) return sum;
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

/**
 * Split real problems (Actie nodig) from one onboarding nudge (Volgende stap).
 * Hours nudge only when the user already uses hours (open unbilled hours).
 */
export function buildDashboardSignals({
  overdue = [],
  openHours = 0,
  clientCount = 0,
  invoiceCount = 0,
  expenseCount = 0,
  quoteCount = 0,
  acceptedQuotes = [],
  expiredQuotes = [],
  conceptQuotes = [],
  profileCompletion,
}) {
  const actions = [];
  const conceptQuoteCount = conceptQuotes.length;

  for (const row of overdue.slice(0, 3)) {
    const daysLabel = `${row.daysLate} ${row.daysLate === 1 ? 'dag' : 'dagen'} te laat`;
    actions.push({
      id: `overdue-${row.invoice.id}`,
      type: 'overdue',
      tone: 'urgent',
      title:
        overdue.length === 1
          ? `1 factuur is ${daysLabel}`
          : `${row.client} · ${formatEuro(row.amount)}`,
      detail:
        overdue.length === 1
          ? `${row.client} · ${formatEuro(row.amount)}`
          : daysLabel,
      invoice: row.invoice,
      daysLate: row.daysLate,
      amount: row.amount,
    });
  }

  if (openHours > 0) {
    actions.push({
      id: 'open-hours',
      type: 'open-hours',
      tone: 'info',
      title: `${formatHours(openHours)} nog niet gefactureerd`,
      detail: 'Zet openstaande uren om naar een factuur.',
      href: '/uren',
      cta: 'Maak factuur van uren',
    });
  }

  if (acceptedQuotes.length > 0) {
    const first = acceptedQuotes[0];
    const label =
      acceptedQuotes.length === 1
        ? first.clientName
          ? `${first.clientName} heeft geaccepteerd`
          : `Offerte ${first.quoteNumber || ''} is geaccepteerd`.trim()
        : `${acceptedQuotes.length} geaccepteerde offertes`;
    actions.push({
      id: 'accepted-quotes',
      type: 'accepted-quotes',
      tone: 'info',
      title: label,
      detail:
        acceptedQuotes.length === 1
          ? 'Zet om naar een factuur om te kunnen factureren.'
          : 'Zet ze om naar facturen wanneer je klaar bent.',
      href:
        acceptedQuotes.length === 1 && first.id
          ? `/tools/offerte-maker/maken?id=${first.id}`
          : '/offertes',
      cta: acceptedQuotes.length === 1 ? 'Omzetten naar factuur' : 'Bekijk offertes',
    });
  }

  if (conceptQuoteCount > 0) {
    const first = conceptQuotes[0];
    actions.push({
      id: 'concept-quotes',
      type: 'concept-quotes',
      tone: 'info',
      title:
        conceptQuoteCount === 1
          ? first.clientName
            ? `Offerte voor ${first.clientName} staat nog als concept`
            : `Offerte ${first.quoteNumber || ''} staat nog als concept`.trim()
          : `${conceptQuoteCount} offertes staan nog als concept`,
      detail: 'Zet de status op Verstuurd of Geaccepteerd, of werk de offerte af.',
      href:
        conceptQuoteCount === 1 && first.id
          ? `/tools/offerte-maker/maken?id=${first.id}`
          : '/offertes?status=concept',
      cta: conceptQuoteCount === 1 ? 'Bewerken' : 'Bekijk concepten',
      quote: conceptQuoteCount === 1 ? first : null,
    });
  }

  if (expiredQuotes.length > 0 && actions.length < 5) {
    const first = expiredQuotes[0];
    actions.push({
      id: 'expired-quotes',
      type: 'expired-quotes',
      tone: 'info',
      title:
        expiredQuotes.length === 1
          ? `Offerte ${first.quote.quoteNumber || ''} is verlopen`.trim()
          : `${expiredQuotes.length} offertes zijn verlopen`,
      detail: 'Verleng de geldigheid of stuur een nieuwe versie.',
      href:
        expiredQuotes.length === 1 && first.quote.id
          ? `/tools/offerte-maker/maken?id=${first.quote.id}`
          : '/offertes',
      cta: 'Bekijk offerte',
    });
  }

  let nextStep = null;

  if (invoiceCount === 0) {
    nextStep = {
      id: 'no-invoices',
      title: 'Maak je eerste factuur',
      detail: 'Opslaan terwijl je bent ingelogd — dan verschijnen omzet, btw en openstaand hier.',
      href: '/create-invoice',
      cta: 'Factuur maken',
    };
  } else if (expenseCount === 0) {
    nextStep = {
      id: 'no-expenses',
      title: 'Voeg je eerste uitgave toe',
      detail: 'Dan zie je ook je resultaat en btw te reserveren.',
      href: '/uitgaven',
      cta: 'Uitgave toevoegen',
    };
  } else if (clientCount === 0) {
    nextStep = {
      id: 'no-clients',
      title: 'Factureer sneller met je eerste klant',
      detail: 'Sla een klant op — volgende keer vul je gegevens met één klik in.',
      href: '/klanten',
      cta: 'Klant toevoegen',
    };
  } else if (quoteCount === 0) {
    nextStep = {
      id: 'no-quotes',
      title: 'Bewaar je volgende offerte',
      detail: 'Sla offertes op, volg de status en zet ze met één klik om naar een factuur.',
      href: '/tools/offerte-maker/maken',
      cta: 'Offerte maken',
    };
  } else if (profileCompletion && !profileCompletion.isComplete) {
    nextStep = {
      id: 'profile',
      title: 'Maak je volgende factuur sneller',
      detail: `Vul je bedrijfsgegevens één keer in. ${profileCompletion.filled} van ${profileCompletion.total} gegevens ingevuld.`,
      href: '/profile',
      cta: 'Profiel aanvullen',
    };
  }

  return { actions, nextStep };
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
