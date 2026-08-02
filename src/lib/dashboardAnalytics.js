/**
 * Aggregate invoice amounts for dashboard charts.
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

/** Last N months: gestuurd / openstaand / betaald (incl. btw). */
export function buildMonthlyCashflow(invoices, months = 6) {
  const now = new Date();
  const buckets = [];

  for (let i = months - 1; i >= 0; i -= 1) {
    const year = now.getFullYear();
    const month = now.getMonth() - i;
    const d = new Date(year, month, 1);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    buckets.push({
      key,
      label: `${MONTH_SHORT[d.getMonth()]} '${String(d.getFullYear()).slice(2)}`,
      gestuurd: 0,
      openstaand: 0,
      betaald: 0,
    });
  }

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

/** Last N calendar quarters: btw totaal / open / betaald. */
export function buildQuarterlyBtw(invoices, quarters = 4) {
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
      btwTotaal: 0,
      btwOpen: 0,
      btwBetaald: 0,
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

    const btw = Number(inv.total_btw) || 0;
    bucket.btwTotaal += btw;
    if (inv.status === 'paid') bucket.btwBetaald += btw;
    else bucket.btwOpen += btw;
  }

  return buckets.map(({ key, ...rest }) => ({
    ...rest,
    btwTotaal: Math.round(rest.btwTotaal * 100) / 100,
    btwOpen: Math.round(rest.btwOpen * 100) / 100,
    btwBetaald: Math.round(rest.btwBetaald * 100) / 100,
  }));
}
