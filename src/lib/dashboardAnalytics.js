/**
 * Aggregate invoice + expense amounts for dashboard charts.
 */

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

function expenseDate(expense) {
  return toDate(expense.expenseDate) || toDate(expense.created_at) || null;
}

const MONTH_SHORT = [
  'jan',
  'feb',
  'mrt',
  'apr',
  'mei',
  'jun',
  'jul',
  'aug',
  'sep',
  'okt',
  'nov',
  'dec',
];

function lastNMonthBuckets(months) {
  const now = new Date();
  const buckets = [];
  for (let i = months - 1; i >= 0; i -= 1) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    buckets.push({
      key,
      label: `${MONTH_SHORT[d.getMonth()]} '${String(d.getFullYear()).slice(2)}`,
    });
  }
  return buckets;
}

/** @deprecated Prefer buildMonthlyOmzetUitgaven */
export function buildMonthlyCashflow(invoices, months = 6) {
  const buckets = lastNMonthBuckets(months).map((b) => ({
    ...b,
    gestuurd: 0,
    openstaand: 0,
    betaald: 0,
  }));
  const byKey = Object.fromEntries(buckets.map((b) => [b.key, b]));

  for (const inv of invoices) {
    const date = invoiceDate(inv);
    if (!date) continue;
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    const bucket = byKey[key];
    if (!bucket) continue;
    const total = Number(inv.total_incl) || 0;
    bucket.gestuurd += total;
    if (inv.status === 'paid') bucket.betaald += total;
    else bucket.openstaand += total;
  }

  return buckets.map(({ key, ...rest }) => ({
    ...rest,
    gestuurd: Math.round(rest.gestuurd * 100) / 100,
    openstaand: Math.round(rest.openstaand * 100) / 100,
    betaald: Math.round(rest.betaald * 100) / 100,
  }));
}

/** Last N months: omzet (excl.) vs uitgaven (excl.) + resultaat. */
export function buildMonthlyOmzetUitgaven(invoices = [], expenses = [], months = 6) {
  const buckets = lastNMonthBuckets(months).map((b) => ({
    ...b,
    omzet: 0,
    uitgaven: 0,
  }));
  const byKey = Object.fromEntries(buckets.map((b) => [b.key, b]));

  for (const inv of invoices) {
    const date = invoiceDate(inv);
    if (!date) continue;
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    const bucket = byKey[key];
    if (!bucket) continue;
    bucket.omzet += Number(inv.total_excl) || 0;
  }

  for (const exp of expenses) {
    const date = expenseDate(exp);
    if (!date) continue;
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    const bucket = byKey[key];
    if (!bucket) continue;
    bucket.uitgaven += Number(exp.amountExcl) || 0;
  }

  return buckets.map(({ key, ...rest }) => {
    const omzet = Math.round(rest.omzet * 100) / 100;
    const uitgaven = Math.round(rest.uitgaven * 100) / 100;
    return {
      ...rest,
      omzet,
      uitgaven,
      resultaat: Math.round((omzet - uitgaven) * 100) / 100,
    };
  });
}

/** Last N quarters: verkoop-btw, aftrekbare btw, te reserveren. */
export function buildQuarterlyBtwPosition(invoices = [], expenses = [], quarters = 4) {
  const now = new Date();
  const buckets = [];
  const seen = new Set();

  for (let i = 0; buckets.length < quarters; i += 1) {
    const d = new Date(now.getFullYear(), now.getMonth() - i * 3, 1);
    const q = Math.floor(d.getMonth() / 3) + 1;
    const year = d.getFullYear();
    const key = `${year}-Q${q}`;
    if (seen.has(key)) continue;
    seen.add(key);
    buckets.unshift({
      key,
      label: `Q${q} ${year}`,
      btwOmzet: 0,
      btwUitgaven: 0,
    });
  }

  const byKey = Object.fromEntries(buckets.map((b) => [b.key, b]));

  for (const inv of invoices) {
    const date = invoiceDate(inv);
    if (!date) continue;
    const q = Math.floor(date.getMonth() / 3) + 1;
    const key = `${date.getFullYear()}-Q${q}`;
    const bucket = byKey[key];
    if (!bucket) continue;
    bucket.btwOmzet += Number(inv.total_btw) || 0;
  }

  for (const exp of expenses) {
    const date = expenseDate(exp);
    if (!date) continue;
    const q = Math.floor(date.getMonth() / 3) + 1;
    const key = `${date.getFullYear()}-Q${q}`;
    const bucket = byKey[key];
    if (!bucket) continue;
    bucket.btwUitgaven += Number(exp.vatAmount) || 0;
  }

  return buckets.map(({ key, ...rest }) => {
    const btwOmzet = Math.round(rest.btwOmzet * 100) / 100;
    const btwUitgaven = Math.round(rest.btwUitgaven * 100) / 100;
    return {
      ...rest,
      btwOmzet,
      btwUitgaven,
      btwTeReserveren: Math.round((btwOmzet - btwUitgaven) * 100) / 100,
    };
  });
}

/** @deprecated Prefer buildQuarterlyBtwPosition */
export function buildQuarterlyBtw(invoices, quarters = 4) {
  return buildQuarterlyBtwPosition(invoices, [], quarters).map((b) => ({
    key: undefined,
    label: b.label,
    btwTotaal: b.btwOmzet,
    btwOpen: 0,
    btwBetaald: 0,
  }));
}
