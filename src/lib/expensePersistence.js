import { supabase } from '@/lib/customSupabaseClient';

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const MAX_RECURRING_OCCURRENCES = 36;
/** When no end date is set, plan this many days ahead from the start. */
export const DEFAULT_RECUR_HORIZON_DAYS = 365;

export const EXPENSE_CATEGORIES = [
  { id: 'software', label: 'Software & abonnementen' },
  { id: 'kantoor', label: 'Kantoor & materiaal' },
  { id: 'reiskosten', label: 'Reiskosten' },
  { id: 'telefoon', label: 'Telefoon & internet' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'verzekering', label: 'Verzekeringen' },
  { id: 'advies', label: 'Advies & administratie' },
  { id: 'huisvesting', label: 'Huisvesting' },
  { id: 'opleiding', label: 'Opleiding' },
  { id: 'overig', label: 'Overig' },
];

export const VAT_RATES = [
  { value: 21, label: '21%' },
  { value: 9, label: '9%' },
  { value: 0, label: '0%' },
];

export const INTERVAL_PRESETS = [
  { days: 7, label: 'Wekelijks' },
  { days: 14, label: 'Om de 2 weken' },
  { days: 30, label: 'Maandelijks (~30d)' },
  { days: 90, label: 'Per kwartaal (~90d)' },
  { days: 365, label: 'Jaarlijks' },
];

export function isPersistedExpenseId(id) {
  return typeof id === 'string' && UUID_RE.test(id);
}

function todayIsoDate() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function addDaysIso(isoDate, days) {
  const [y, m, d] = String(isoDate).split('-').map(Number);
  const date = new Date(y, m - 1, d);
  date.setDate(date.getDate() + days);
  const yy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yy}-${mm}-${dd}`;
}

/** Explicit until date, or start + 12 months when left empty. */
export function resolveRecurUntil(startIso, untilIso) {
  if (untilIso) return untilIso;
  if (!startIso) return todayIsoDate();
  return addDaysIso(startIso, DEFAULT_RECUR_HORIZON_DAYS);
}

export function emptyExpense() {
  return {
    expenseDate: todayIsoDate(),
    description: '',
    supplier: '',
    category: 'software',
    amountExcl: '',
    vatRate: 21,
    notes: '',
    isRecurring: false,
    intervalDays: 30,
    recurUntil: '',
  };
}

export function categoryLabel(id) {
  return EXPENSE_CATEGORIES.find((c) => c.id === id)?.label || id || 'Overig';
}

export function computeVatBreakdown(amountExcl, vatRate) {
  const excl = Math.round((Number(amountExcl) || 0) * 100) / 100;
  const rate = Number(vatRate);
  const safeRate = Number.isFinite(rate) ? rate : 21;
  const vat = Math.round(excl * (safeRate / 100) * 100) / 100;
  const incl = Math.round((excl + vat) * 100) / 100;
  return { amountExcl: excl, vatRate: safeRate, vatAmount: vat, amountIncl: incl };
}

/** Dates from start through until (inclusive), every intervalDays. Empty until → 12 months. */
export function buildRecurringDates(startIso, intervalDays, untilIso, max = MAX_RECURRING_OCCURRENCES) {
  const interval = Math.max(1, Math.floor(Number(intervalDays) || 1));
  if (!startIso) return [];
  const until = resolveRecurUntil(startIso, untilIso);

  const dates = [startIso];
  let cursor = startIso;
  while (dates.length < max) {
    cursor = addDaysIso(cursor, interval);
    if (cursor > until) break;
    dates.push(cursor);
  }
  return dates;
}

export function previewRecurringCount(startIso, intervalDays, untilIso) {
  return buildRecurringDates(startIso, intervalDays, untilIso).length;
}

export function rowToExpense(row) {
  if (!row) return null;
  return {
    id: row.id,
    expenseDate: row.expense_date,
    description: row.description || '',
    supplier: row.supplier || '',
    category: row.category || 'overig',
    amountExcl: Number(row.amount_excl) || 0,
    vatRate: Number(row.vat_rate) || 0,
    vatAmount: Number(row.vat_amount) || 0,
    amountIncl: Number(row.amount_incl) || 0,
    notes: row.notes || '',
    isRecurring: Boolean(row.is_recurring),
    intervalDays: row.interval_days != null ? Number(row.interval_days) : null,
    recurUntil: row.recur_until || '',
    recurrenceGroupId: row.recurrence_group_id || null,
    created_at: row.created_at,
    updated_at: row.updated_at,
    user_id: row.user_id,
  };
}

export function expenseToRow(expense, userId, { expenseDate, recurrenceGroupId } = {}) {
  const breakdown = computeVatBreakdown(expense.amountExcl, expense.vatRate);
  const isRecurring = Boolean(expense.isRecurring);
  const intervalDays = isRecurring ? Math.max(1, Math.floor(Number(expense.intervalDays) || 30)) : null;

  return {
    user_id: userId,
    expense_date: expenseDate || expense.expenseDate || todayIsoDate(),
    description: String(expense.description || '').trim(),
    supplier: String(expense.supplier || '').trim() || null,
    category: expense.category || 'overig',
    amount_excl: breakdown.amountExcl,
    vat_rate: breakdown.vatRate,
    vat_amount: breakdown.vatAmount,
    amount_incl: breakdown.amountIncl,
    notes: String(expense.notes || '').trim() || null,
    is_recurring: isRecurring,
    interval_days: intervalDays,
    recur_until: isRecurring
      ? resolveRecurUntil(expense.expenseDate, expense.recurUntil || null)
      : null,
    recurrence_group_id: recurrenceGroupId || expense.recurrenceGroupId || null,
    updated_at: new Date().toISOString(),
  };
}

export async function fetchUserExpenses(client = supabase, userId) {
  const { data, error } = await client
    .from('expenses')
    .select('*')
    .eq('user_id', userId)
    .order('expense_date', { ascending: false })
    .order('created_at', { ascending: false });

  if (error) throw error;
  return (data || []).map(rowToExpense);
}

/**
 * Create or update an expense.
 * New recurring expenses expand into multiple rows (same recurrence_group_id).
 * Returns { expenses, primary } — primary is the first/updated row.
 */
export async function upsertExpense(client = supabase, userId, expense) {
  const description = String(expense.description || '').trim();
  if (!description) throw new Error('Vul een omschrijving in.');

  const amount = Number(expense.amountExcl);
  if (!Number.isFinite(amount) || amount < 0) {
    throw new Error('Vul een geldig bedrag in (excl. btw).');
  }

  const isUpdate = isPersistedExpenseId(expense?.id);

  if (isUpdate) {
    const payload = expenseToRow(expense, userId, {
      expenseDate: expense.expenseDate,
      recurrenceGroupId: expense.recurrenceGroupId || null,
    });
    // Editing one occurrence: don't expand series; keep recurrence metadata if already set
    const { data, error } = await client
      .from('expenses')
      .update(payload)
      .eq('id', expense.id)
      .eq('user_id', userId)
      .select('*')
      .single();
    if (error) throw error;
    const saved = rowToExpense(data);
    return { expenses: [saved], primary: saved };
  }

  if (expense.isRecurring) {
    const interval = Math.max(1, Math.floor(Number(expense.intervalDays) || 30));
    const until = resolveRecurUntil(expense.expenseDate, expense.recurUntil || null);
    if (expense.recurUntil && expense.recurUntil < expense.expenseDate) {
      throw new Error('Einddatum moet op of na de startdatum liggen.');
    }

    const dates = buildRecurringDates(expense.expenseDate, interval, until);
    if (!dates.length) throw new Error('Geen herhalingen gevonden voor dit bereik.');

    const groupId = crypto.randomUUID();
    const payloads = dates.map((date) =>
      expenseToRow(expense, userId, { expenseDate: date, recurrenceGroupId: groupId })
    );

    const { data, error } = await client.from('expenses').insert(payloads).select('*');
    if (error) throw error;
    const expenses = (data || []).map(rowToExpense);
    return { expenses, primary: expenses[0] };
  }

  const payload = expenseToRow(expense, userId);
  const { data, error } = await client.from('expenses').insert(payload).select('*').single();
  if (error) throw error;
  const saved = rowToExpense(data);
  return { expenses: [saved], primary: saved };
}

export async function deleteExpense(client = supabase, userId, expenseId) {
  const { error } = await client
    .from('expenses')
    .delete()
    .eq('id', expenseId)
    .eq('user_id', userId);
  if (error) throw error;
}

export async function deleteExpenseSeries(client = supabase, userId, recurrenceGroupId) {
  if (!recurrenceGroupId) throw new Error('Geen reeks geselecteerd.');
  const { error } = await client
    .from('expenses')
    .delete()
    .eq('user_id', userId)
    .eq('recurrence_group_id', recurrenceGroupId);
  if (error) throw error;
}

/** Sums for a calendar month (excl. btw + aftrekbare btw). */
export function sumExpensesForMonth(expenses = [], now = new Date()) {
  const year = now.getFullYear();
  const month = now.getMonth();
  let amountExcl = 0;
  let vatAmount = 0;
  let count = 0;

  for (const exp of expenses) {
    if (!exp?.expenseDate) continue;
    const d = new Date(exp.expenseDate);
    if (Number.isNaN(d.getTime())) continue;
    if (d.getFullYear() !== year || d.getMonth() !== month) continue;
    amountExcl += Number(exp.amountExcl) || 0;
    vatAmount += Number(exp.vatAmount) || 0;
    count += 1;
  }

  return {
    amountExcl: Math.round(amountExcl * 100) / 100,
    vatAmount: Math.round(vatAmount * 100) / 100,
    count,
  };
}

/**
 * Estimate monthly fixed business costs from recurring expense series.
 * Uses one row per recurrence group (or per recurring id).
 */
export function estimateMonthlyFixedCosts(expenses = []) {
  const seen = new Set();
  let monthly = 0;
  let seriesCount = 0;

  for (const exp of expenses) {
    if (!exp?.isRecurring) continue;
    const interval = Number(exp.intervalDays);
    if (!Number.isFinite(interval) || interval < 1) continue;

    const key = exp.recurrenceGroupId || exp.id;
    if (!key || seen.has(key)) continue;
    seen.add(key);

    monthly += (Number(exp.amountExcl) || 0) * (30 / interval);
    seriesCount += 1;
  }

  return {
    monthly: Math.round(monthly * 100) / 100,
    seriesCount,
  };
}
