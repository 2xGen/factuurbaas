/**
 * AOV coverage calculator for zzp'ers.
 * Does NOT estimate premiums — only coverage needs and waiting-period bridge amounts.
 */

export const DESIRED_INCOME_PRESETS = [1500, 2000, 2500, 3000, 4000];
export const OTHER_INCOME_PRESETS = [0, 500, 1000];
export const WAITING_PERIOD_MONTHS = [1, 3, 6, 12, 24];
export const END_AGES = [60, 65, 67, 70];

export const PREMIUM_FACTORS = [
  'Leeftijd',
  'Beroep',
  'Verzekerd bedrag',
  'Wachttijd',
  'Eindleeftijd',
  'Gezondheid',
  'Polisvoorwaarden',
];

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

export function formatWaitingPeriod(months) {
  if (months === 1) return '1 maand';
  return `${months} maanden`;
}

/**
 * @param {{
 *   desiredMonthlyIncome: number|null,
 *   otherMonthlyIncome: number|null,
 *   waitingMonths: number,
 *   currentAge: number|null,
 *   endAge: number,
 * }} input
 */
export function calculateAovProfile({
  desiredMonthlyIncome,
  otherMonthlyIncome = 0,
  waitingMonths = 6,
  currentAge = null,
  endAge = 67,
}) {
  if (desiredMonthlyIncome == null || !Number.isFinite(desiredMonthlyIncome) || desiredMonthlyIncome < 0) {
    return null;
  }

  const other = Math.max(0, Number.isFinite(otherMonthlyIncome) ? otherMonthlyIncome : 0);
  const requiredMonthly = Math.max(0, desiredMonthlyIncome - other);
  const requiredAnnual = requiredMonthly * 12;
  const waitingBridge = requiredMonthly * waitingMonths;

  const waitingComparison = WAITING_PERIOD_MONTHS.map((months) => ({
    months,
    label: formatWaitingPeriod(months),
    uncovered: requiredMonthly * months,
  }));

  const yearsUntilEnd =
    currentAge != null && Number.isFinite(currentAge) && currentAge > 0 && endAge > currentAge
      ? endAge - currentAge
      : null;

  return {
    desiredMonthlyIncome,
    otherMonthlyIncome: other,
    requiredMonthly,
    requiredAnnual,
    waitingMonths,
    waitingBridge,
    waitingComparison,
    currentAge: currentAge != null && Number.isFinite(currentAge) ? currentAge : null,
    endAge,
    yearsUntilEnd,
  };
}
