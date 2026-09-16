/**
 * Indicative max-mortgage estimate for zzp'ers.
 * Not advice — simplified woonquote + annuity model for a first indication.
 */

export function parseAmount(value) {
  if (value == null || value === '') return null;
  const cleaned = String(value)
    .replace(/\s/g, '')
    .replace(/\./g, '')
    .replace(',', '.')
    .replace(/[^\d.-]/g, '');
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}

export function formatEuro(amount) {
  if (amount == null || !Number.isFinite(amount)) return '—';
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(Math.round(amount));
}

/** Rough woonquote by annual toetsinkomen (indicative). */
function getWoonquote(annualIncome) {
  if (annualIncome < 30000) return 0.22;
  if (annualIncome < 45000) return 0.25;
  if (annualIncome < 70000) return 0.28;
  if (annualIncome < 100000) return 0.3;
  return 0.32;
}

/**
 * Present value of an annuity (max loan from monthly payment capacity).
 */
function annuityLoan(monthlyPayment, annualRatePercent, years = 30) {
  if (monthlyPayment <= 0) return 0;
  const r = annualRatePercent / 100 / 12;
  const n = years * 12;
  if (r === 0) return monthlyPayment * n;
  return monthlyPayment * ((1 - Math.pow(1 + r, -n)) / r);
}

/**
 * @param {{ toetsinkomen: number|null, maandelijkseVerplichtingen?: number|null, rentePercent?: number|null }} input
 */
export function calculateMaxHypotheek({
  toetsinkomen,
  maandelijkseVerplichtingen = 0,
  rentePercent = 4,
}) {
  if (toetsinkomen == null || toetsinkomen <= 0) return null;

  const income = toetsinkomen;
  const debts = Math.max(0, maandelijkseVerplichtingen || 0);
  const rate = rentePercent == null || rentePercent <= 0 ? 4 : rentePercent;

  const woonquote = getWoonquote(income);
  const maxMonthlyGross = (income / 12) * woonquote;
  const availableMonthly = Math.max(0, maxMonthlyGross - debts);
  const maxHypotheek = annuityLoan(availableMonthly, rate, 30);

  return {
    toetsinkomen: income,
    maandelijkseVerplichtingen: debts,
    rentePercent: rate,
    woonquote,
    maxMaandlast: availableMonthly,
    maxHypotheek,
  };
}
