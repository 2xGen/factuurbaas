import { supabase } from '@/lib/customSupabaseClient';
import { computeVatBreakdown } from '@/lib/expensePersistence';

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export const PAYMENT_METHODS = ['Pin', 'Contant', 'Overboeking'];

/** Inkomsten = verkopen zonder factuur. Nooit een factuurbetaling hier registreren. */

function todayIsoDate() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function isPersistedIncomeId(id) {
  return typeof id === 'string' && UUID_RE.test(id);
}

export function emptyIncome() {
  return {
    incomeDate: todayIsoDate(),
    description: '',
    amountExcl: '',
    vatRate: 21,
    paymentMethod: '',
    notes: '',
  };
}

export function rowToIncome(row) {
  if (!row) return null;
  return {
    id: row.id,
    incomeDate: row.income_date,
    description: row.description || '',
    amountExcl: Number(row.amount_excl) || 0,
    vatRate: Number(row.vat_rate) || 0,
    vatAmount: Number(row.vat_amount) || 0,
    amountIncl: Number(row.amount_incl) || 0,
    paymentMethod: row.payment_method || '',
    notes: row.notes || '',
    created_at: row.created_at,
    updated_at: row.updated_at,
    user_id: row.user_id,
  };
}

export function incomeToRow(income, userId) {
  const breakdown = computeVatBreakdown(income.amountExcl, income.vatRate);
  return {
    user_id: userId,
    income_date: income.incomeDate || todayIsoDate(),
    description: String(income.description || '').trim(),
    amount_excl: breakdown.amountExcl,
    vat_rate: breakdown.vatRate,
    vat_amount: breakdown.vatAmount,
    amount_incl: breakdown.amountIncl,
    payment_method: String(income.paymentMethod || '').trim() || null,
    notes: String(income.notes || '').trim() || null,
    updated_at: new Date().toISOString(),
  };
}

export async function fetchUserIncomes(client = supabase, userId) {
  const { data, error } = await client
    .from('incomes')
    .select('*')
    .eq('user_id', userId)
    .order('income_date', { ascending: false })
    .order('created_at', { ascending: false });

  if (error) throw error;
  return (data || []).map(rowToIncome);
}

export async function upsertIncome(client = supabase, userId, income) {
  const description = String(income.description || '').trim();
  if (!description) throw new Error('Vul een omschrijving in.');

  const amount = Number(income.amountExcl);
  if (!Number.isFinite(amount) || amount < 0) {
    throw new Error('Vul een geldig bedrag in (excl. btw).');
  }

  const payload = incomeToRow(income, userId);

  if (isPersistedIncomeId(income?.id)) {
    const { data, error } = await client
      .from('incomes')
      .update(payload)
      .eq('id', income.id)
      .eq('user_id', userId)
      .select('*')
      .single();
    if (error) throw error;
    return rowToIncome(data);
  }

  const { data, error } = await client.from('incomes').insert(payload).select('*').single();
  if (error) throw error;
  return rowToIncome(data);
}

export async function deleteIncome(client = supabase, userId, incomeId) {
  const { error } = await client.from('incomes').delete().eq('id', incomeId).eq('user_id', userId);
  if (error) throw error;
}

export function sumIncomesForMonth(incomes = [], now = new Date()) {
  const year = now.getFullYear();
  const month = now.getMonth();
  let amountExcl = 0;
  let vatAmount = 0;
  let count = 0;

  for (const item of incomes) {
    if (!item?.incomeDate) continue;
    const d = new Date(item.incomeDate);
    if (Number.isNaN(d.getTime())) continue;
    if (d.getFullYear() !== year || d.getMonth() !== month) continue;
    amountExcl += Number(item.amountExcl) || 0;
    vatAmount += Number(item.vatAmount) || 0;
    count += 1;
  }

  return {
    amountExcl: Math.round(amountExcl * 100) / 100,
    vatAmount: Math.round(vatAmount * 100) / 100,
    count,
  };
}

export function sumIncomesForYear(incomes = [], now = new Date()) {
  const year = now.getFullYear();
  let amountExcl = 0;

  for (const item of incomes) {
    if (!item?.incomeDate) continue;
    const d = new Date(item.incomeDate);
    if (Number.isNaN(d.getTime()) || d.getFullYear() !== year) continue;
    amountExcl += Number(item.amountExcl) || 0;
  }

  return Math.round(amountExcl * 100) / 100;
}

export async function saveYearlyGoal(client = supabase, userId, amount, year = new Date().getFullYear()) {
  const value = Number(amount);
  const payload = {
    yearly_goal: Number.isFinite(value) && value > 0 ? Math.round(value * 100) / 100 : null,
    yearly_goal_year: year,
    updated_at: new Date().toISOString(),
  };
  const { error } = await client.from('profiles').update(payload).eq('id', userId);
  if (error) throw error;
  return payload;
}
