/** Central pricing for the bookkeeper cost calculator. Update rates here only. */

export const SALARY_ADMIN_PER_EMPLOYEE = 17;

export const LEGAL_FORMS = [
  {
    id: 'eenmanszaak',
    label: 'Eenmanszaak / zzp',
    min: 100,
    max: 150,
    leadRechtsvorm: 'eenmanszaak',
    leadBusinessType: 'eenmanszaak-vof-stichting',
  },
  {
    id: 'vof',
    label: 'VOF',
    min: 150,
    max: 250,
    leadRechtsvorm: 'vof',
    leadBusinessType: 'eenmanszaak-vof-stichting',
  },
  {
    id: 'bv-werkmaatschappij',
    label: 'BV – werkmaatschappij',
    min: 250,
    max: null,
    leadRechtsvorm: 'bv',
    leadBusinessType: 'bv',
  },
  {
    id: 'bv-holding',
    label: 'BV – holding',
    min: 100,
    max: null,
    leadRechtsvorm: 'holding',
    leadBusinessType: 'bv',
  },
  {
    id: 'holding-werkmaatschappij',
    label: 'Holding + werkmaatschappij',
    min: 350,
    max: null,
    leadRechtsvorm: 'bv',
    leadBusinessType: 'bv',
  },
];

export const TRANSACTION_OPTIONS = [
  { id: 'lt25', label: 'Minder dan 25' },
  { id: '25-100', label: '25 – 100' },
  { id: '100-250', label: '100 – 250' },
  { id: 'gt250', label: 'Meer dan 250' },
  { id: 'unknown', label: 'Weet ik niet' },
];

export const SITUATION_OPTIONS = [
  { id: 'starting', label: 'Ik start een onderneming' },
  { id: 'self', label: 'Ik doe mijn boekhouding zelf' },
  { id: 'has-bookkeeper', label: 'Ik heb al een boekhouder' },
];

/** Map URL ?rechtsvorm= values onto the lead form businessType ids. */
export const RECHTSVORM_TO_BUSINESS_TYPE = {
  eenmanszaak: 'eenmanszaak-vof-stichting',
  zzp: 'eenmanszaak-vof-stichting',
  vof: 'eenmanszaak-vof-stichting',
  stichting: 'eenmanszaak-vof-stichting',
  mkb: 'eenmanszaak-vof-stichting',
  bv: 'bv',
  holding: 'bv',
};

/** Map URL ?vorm= / shorthand values onto calculator LEGAL_FORMS ids. */
export const VORM_TO_LEGAL_FORM = {
  eenmanszaak: 'eenmanszaak',
  zzp: 'eenmanszaak',
  vof: 'vof',
  bv: 'bv-werkmaatschappij',
  'bv-werkmaatschappij': 'bv-werkmaatschappij',
  werkmaatschappij: 'bv-werkmaatschappij',
  holding: 'bv-holding',
  'bv-holding': 'bv-holding',
  'holding-werkmaatschappij': 'holding-werkmaatschappij',
};

export function resolveLegalFormId(value) {
  const key = String(value || '')
    .trim()
    .toLowerCase();
  if (!key) return null;
  if (LEGAL_FORMS.some((item) => item.id === key)) return key;
  return VORM_TO_LEGAL_FORM[key] || null;
}

export const SESSION_KEY = 'fb_boekhouder_calculator';

export function getLegalForm(id) {
  return LEGAL_FORMS.find((item) => item.id === id) || LEGAL_FORMS[0];
}

export function formatEuro(amount) {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatMonthlyRange(min, max) {
  if (max == null) return `Vanaf ${formatEuro(min)}`;
  if (min === max) return formatEuro(min);
  return `${formatEuro(min)} – ${formatEuro(max)}`;
}

export function formatYearlyRange(min, max) {
  if (max == null) return `Vanaf ${formatEuro(min * 12)}`;
  if (min === max) return formatEuro(min * 12);
  return `${formatEuro(min * 12)} – ${formatEuro(max * 12)}`;
}

/**
 * @param {{
 *   legalFormId: string,
 *   transactionId?: string,
 *   wantsSalaryAdmin?: boolean,
 *   employeeCount?: number,
 *   hoursPerMonth?: number,
 *   hourlyRate?: number,
 *   currentMonthlyCost?: number,
 * }} input
 */
export function calculateBookkeeperCosts(input) {
  const form = getLegalForm(input.legalFormId);
  const employees = Math.max(0, Number(input.employeeCount) || 0);
  const salaryMonthly =
    input.wantsSalaryAdmin && employees > 0 ? employees * SALARY_ADMIN_PER_EMPLOYEE : 0;

  const bookkeepingMin = form.min;
  const bookkeepingMax = form.max;
  const totalMin = bookkeepingMin + salaryMonthly;
  const totalMax = bookkeepingMax == null ? null : bookkeepingMax + salaryMonthly;

  const hours = Math.max(0, Number(input.hoursPerMonth) || 0);
  const rate = Math.max(0, Number(input.hourlyRate) || 0);
  const timeValueMonthly = hours * rate;
  const timeValueYearly = timeValueMonthly * 12;

  const currentMonthly = Math.max(0, Number(input.currentMonthlyCost) || 0);

  return {
    form,
    bookkeepingMin,
    bookkeepingMax,
    salaryMonthly,
    totalMin,
    totalMax,
    monthlyLabel: formatMonthlyRange(totalMin, totalMax),
    yearlyLabel: formatYearlyRange(totalMin, totalMax),
    timeValueMonthly,
    timeValueYearly,
    currentYearly: currentMonthly * 12,
    transactionId: input.transactionId || 'unknown',
    transactionNote: transactionNote(input.transactionId),
  };
}

function transactionNote(id) {
  switch (id) {
    case 'lt25':
      return 'Met minder dan 25 financiële transacties per maand blijft de administratie vaak overzichtelijk. Controleer of het maandtarief grenzen stelt aan het aantal transacties.';
    case '25-100':
      return 'Bij 25 tot 100 transacties per maand past een doorlopende samenwerking vaak goed. Vraag of alle periodieke aangiften zijn inbegrepen.';
    case '100-250':
      return 'Met 100 tot 250 transacties per maand kan de administratie meer tijd vragen. Vraag of het tarief nog geldt bij dit volume.';
    case 'gt250':
      return 'Meer dan 250 transacties per maand vraagt vaak om een maatwerkprijs. Gebruik de indicatie als startpunt en vraag een offerte op maat.';
    default:
      return 'Het aantal financiële transacties beïnvloedt vaak de uiteindelijke prijs. De calculator gebruikt dit nu vooral voor aanvullende uitleg.';
  }
}

/**
 * Simple “is a bookkeeper worth it” comparison for the ZZP landing page.
 * @param {{ hourlyRate?: number, hoursPerMonth?: number, monthlyBookkeeperCost?: number }} input
 */
export function calculateBookkeeperWorthIt(input) {
  const hourlyRate = Math.max(0, Number(input.hourlyRate) || 0);
  const hoursPerMonth = Math.max(0, Number(input.hoursPerMonth) || 0);
  const monthlyBookkeeperCost = Math.max(0, Number(input.monthlyBookkeeperCost) || 0);

  const timeValueMonthly = hoursPerMonth * hourlyRate;
  const timeValueYearly = timeValueMonthly * 12;
  const bookkeeperYearly = monthlyBookkeeperCost * 12;
  const potentialDifference = timeValueYearly - bookkeeperYearly;
  const hoursNeededMonthly =
    hourlyRate > 0 ? monthlyBookkeeperCost / hourlyRate : null;

  return {
    hourlyRate,
    hoursPerMonth,
    monthlyBookkeeperCost,
    timeValueMonthly,
    timeValueYearly,
    bookkeeperYearly,
    potentialDifference,
    hoursNeededMonthly,
  };
}

/**
 * Time-value comparison for /boekhouder-kosten.
 * Accounts for partial time saved and the share of freed hours that can actually be billed.
 * @param {{
 *   hoursPerMonth?: number,
 *   hourlyRate?: number,
 *   savePercent?: number,
 *   billablePercent?: number,
 *   monthlyBookkeeperCost?: number,
 * }} input
 */
export function calculateBookkeeperTimeValue(input) {
  const hoursPerMonth = Math.max(0, Number(input.hoursPerMonth) || 0);
  const hourlyRate = Math.max(0, Number(input.hourlyRate) || 0);
  const savePercent = Math.min(100, Math.max(0, Number(input.savePercent) || 0));
  const billablePercent = Math.min(100, Math.max(0, Number(input.billablePercent) || 0));
  const monthlyBookkeeperCost = Math.max(0, Number(input.monthlyBookkeeperCost) || 0);

  const freedHoursMonthly = hoursPerMonth * (savePercent / 100);
  const freedHoursYearly = freedHoursMonthly * 12;
  const billableHoursYearly = freedHoursYearly * (billablePercent / 100);
  const potentialExtraRevenue = billableHoursYearly * hourlyRate;
  const bookkeeperYearly = monthlyBookkeeperCost * 12;
  const potentialDifference = potentialExtraRevenue - bookkeeperYearly;

  return {
    hoursPerMonth,
    hourlyRate,
    savePercent,
    billablePercent,
    monthlyBookkeeperCost,
    freedHoursMonthly,
    freedHoursYearly,
    billableHoursYearly,
    potentialExtraRevenue,
    bookkeeperYearly,
    potentialDifference,
  };
}

export function formatHoursNl(hours) {
  if (hours == null || !Number.isFinite(hours)) return '—';
  const rounded = Math.round(hours * 100) / 100;
  const whole = Math.floor(rounded);
  const minutes = Math.round((rounded - whole) * 60);
  if (minutes === 0) return `${whole} uur`;
  if (whole === 0) return `${minutes} minuten`;
  return `${whole} uur en ${minutes} minuten`;
}

export function buildLeadHref({ legalFormId, source = 'kosten-calculator' } = {}) {
  const form = getLegalForm(legalFormId);
  const params = new URLSearchParams({
    rechtsvorm: form.leadRechtsvorm,
    bron: source,
  });
  return `/boekhouder-vinden?${params.toString()}`;
}

export function saveCalculatorSession(state) {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(state));
  } catch {
    /* ignore quota / private mode */
  }
}

export function readCalculatorSession() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
