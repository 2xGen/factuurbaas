import { supabase } from '@/lib/customSupabaseClient';
import { saveYearlyGoal } from '@/lib/incomePersistence';

const SELECT_FULL =
  'hourly_rate, hours_per_week, weeks_per_year, desired_net_monthly, default_payment_term_days, yearly_goal, yearly_goal_year';
const SELECT_SAFE = 'yearly_goal, yearly_goal_year';

export function emptyBusinessSettings() {
  return {
    hourlyRate: null,
    hoursPerWeek: null,
    weeksPerYear: 46,
    desiredNetMonthly: null,
    defaultPaymentTermDays: 14,
    yearlyGoal: null,
    yearlyGoalYear: null,
  };
}

function mapRow(row) {
  const base = emptyBusinessSettings();
  if (!row) return base;
  return {
    hourlyRate: row.hourly_rate == null ? null : Number(row.hourly_rate),
    hoursPerWeek: row.hours_per_week == null ? null : Number(row.hours_per_week),
    weeksPerYear: row.weeks_per_year == null ? 46 : Number(row.weeks_per_year),
    desiredNetMonthly: row.desired_net_monthly == null ? null : Number(row.desired_net_monthly),
    defaultPaymentTermDays:
      row.default_payment_term_days == null ? 14 : Number(row.default_payment_term_days),
    yearlyGoal: row.yearly_goal == null ? null : Number(row.yearly_goal),
    yearlyGoalYear: row.yearly_goal_year == null ? null : Number(row.yearly_goal_year),
  };
}

function isMissingColumn(error) {
  const msg = `${error?.message || ''} ${error?.details || ''} ${error?.hint || ''}`;
  return /hourly_rate|hours_per_week|weeks_per_year|desired_net_monthly|default_payment_term_days/i.test(
    msg
  );
}

export async function fetchBusinessSettings(client = supabase, userId) {
  const { data, error } = await client
    .from('profiles')
    .select(SELECT_FULL)
    .eq('id', userId)
    .maybeSingle();

  if (!error) return mapRow(data);

  if (isMissingColumn(error)) {
    const fallback = await client
      .from('profiles')
      .select(SELECT_SAFE)
      .eq('id', userId)
      .maybeSingle();
    if (fallback.error) throw fallback.error;
    return mapRow(fallback.data);
  }

  throw error;
}

function roundMoney(n) {
  const v = Number(n);
  if (!Number.isFinite(v)) return null;
  return Math.round(v * 100) / 100;
}

export async function patchBusinessSettings(client = supabase, userId, patch = {}) {
  const payload = { updated_at: new Date().toISOString() };

  if ('hourlyRate' in patch) payload.hourly_rate = roundMoney(patch.hourlyRate);
  if ('hoursPerWeek' in patch) payload.hours_per_week = roundMoney(patch.hoursPerWeek);
  if ('weeksPerYear' in patch) payload.weeks_per_year = roundMoney(patch.weeksPerYear);
  if ('desiredNetMonthly' in patch) payload.desired_net_monthly = roundMoney(patch.desiredNetMonthly);
  if ('defaultPaymentTermDays' in patch) {
    const days = Number(patch.defaultPaymentTermDays);
    payload.default_payment_term_days = Number.isFinite(days) && days > 0 ? Math.round(days) : null;
  }

  const { error } = await client.from('profiles').update(payload).eq('id', userId);
  if (error) throw error;
  return payload;
}

export async function saveHourlyRate(client = supabase, userId, hourlyRate, extras = {}) {
  return patchBusinessSettings(client, userId, { hourlyRate, ...extras });
}

export async function savePaymentTermDefault(client = supabase, userId, days) {
  return patchBusinessSettings(client, userId, { defaultPaymentTermDays: days });
}

export async function saveRevenueGoalFromTool(client = supabase, userId, amount, year) {
  return saveYearlyGoal(client, userId, amount, year);
}

export function potentialAnnualRevenue({ hourlyRate, hoursPerWeek, weeksPerYear = 46 }) {
  const rate = Number(hourlyRate);
  const hours = Number(hoursPerWeek);
  const weeks = Number(weeksPerYear) || 46;
  if (!Number.isFinite(rate) || !Number.isFinite(hours) || rate <= 0 || hours <= 0) return null;
  return Math.round(rate * hours * weeks * 100) / 100;
}
