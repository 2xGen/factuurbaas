import { supabase } from '@/lib/customSupabaseClient';

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function isPersistedTimeEntryId(id) {
  return typeof id === 'string' && UUID_RE.test(id);
}

function todayIsoDate() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function emptyTimeEntry() {
  return {
    entryDate: todayIsoDate(),
    hours: '',
    description: '',
    clientId: '',
    hourlyRate: '',
  };
}

export function rowToTimeEntry(row) {
  if (!row) return null;
  return {
    id: row.id,
    clientId: row.client_id || null,
    entryDate: row.entry_date,
    hours: Number(row.hours) || 0,
    description: row.description || '',
    hourlyRate: row.hourly_rate != null ? Number(row.hourly_rate) : null,
    invoicedAt: row.invoiced_at || null,
    created_at: row.created_at,
    updated_at: row.updated_at,
    user_id: row.user_id,
  };
}

export function timeEntryToRow(entry, userId) {
  const hours = Number(entry.hours);
  const rate =
    entry.hourlyRate === '' || entry.hourlyRate == null
      ? null
      : Number(entry.hourlyRate);

  return {
    user_id: userId,
    client_id: entry.clientId && UUID_RE.test(entry.clientId) ? entry.clientId : null,
    entry_date: entry.entryDate || todayIsoDate(),
    hours,
    description: entry.description?.trim() || null,
    hourly_rate: Number.isFinite(rate) ? rate : null,
    updated_at: new Date().toISOString(),
  };
}

export async function fetchUserTimeEntries(client = supabase, userId, { includeInvoiced = true } = {}) {
  let query = client
    .from('time_entries')
    .select('*')
    .eq('user_id', userId)
    .order('entry_date', { ascending: false })
    .order('created_at', { ascending: false });

  if (!includeInvoiced) {
    query = query.is('invoiced_at', null);
  }

  const { data, error } = await query;
  if (error) throw error;
  return (data || []).map(rowToTimeEntry);
}

export async function upsertTimeEntry(client = supabase, userId, entry) {
  const hours = Number(entry.hours);
  if (!Number.isFinite(hours) || hours <= 0) {
    throw new Error('Vul een geldig aantal uren in (groter dan 0).');
  }

  const payload = timeEntryToRow(entry, userId);
  const isUpdate = isPersistedTimeEntryId(entry?.id);

  if (isUpdate) {
    const { data, error } = await client
      .from('time_entries')
      .update(payload)
      .eq('id', entry.id)
      .eq('user_id', userId)
      .select('*')
      .single();
    if (error) throw error;
    return rowToTimeEntry(data);
  }

  const { data, error } = await client.from('time_entries').insert(payload).select('*').single();
  if (error) throw error;
  return rowToTimeEntry(data);
}

/** Insert multiple new time entries in one request. */
export async function insertTimeEntries(client = supabase, userId, entries) {
  const list = (entries || []).filter((e) => Number(e.hours) > 0);
  if (!list.length) {
    throw new Error('Voeg minstens één dag met uren toe.');
  }

  const payloads = list.map((entry) => timeEntryToRow(entry, userId));
  const { data, error } = await client.from('time_entries').insert(payloads).select('*');
  if (error) throw error;
  return (data || []).map(rowToTimeEntry);
}

export async function deleteTimeEntry(client = supabase, userId, entryId) {
  const { error } = await client
    .from('time_entries')
    .delete()
    .eq('user_id', userId)
    .eq('id', entryId);
  if (error) throw error;
}

export async function deleteTimeEntries(client = supabase, userId, entryIds) {
  const ids = (entryIds || []).filter(isPersistedTimeEntryId);
  if (!ids.length) return;

  const { error } = await client
    .from('time_entries')
    .delete()
    .eq('user_id', userId)
    .in('id', ids);
  if (error) throw error;
}

function monthDateBounds(reference = new Date()) {
  const y = reference.getFullYear();
  const m = reference.getMonth();
  const start = new Date(y, m, 1);
  const end = new Date(y, m + 1, 0);
  return {
    start: toIsoDateLocal(start),
    end: toIsoDateLocal(end),
  };
}

function toIsoDateLocal(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

/** Sum hours logged in the current calendar month. */
export async function fetchHoursThisMonth(client = supabase, userId) {
  const { start, end } = monthDateBounds();
  const { data, error } = await client
    .from('time_entries')
    .select('hours, invoiced_at')
    .eq('user_id', userId)
    .gte('entry_date', start)
    .lte('entry_date', end);

  if (error) throw error;

  let totalHours = 0;
  let openHours = 0;
  for (const row of data || []) {
    const h = Number(row.hours) || 0;
    totalHours += h;
    if (!row.invoiced_at) openHours += h;
  }

  return {
    totalHours,
    openHours,
    monthLabel: new Date().toLocaleDateString('nl-NL', { month: 'long', year: 'numeric' }),
  };
}

export async function markTimeEntriesInvoiced(client = supabase, userId, entryIds) {
  const ids = (entryIds || []).filter(isPersistedTimeEntryId);
  if (!ids.length) return;

  const { error } = await client
    .from('time_entries')
    .update({ invoiced_at: new Date().toISOString(), updated_at: new Date().toISOString() })
    .eq('user_id', userId)
    .in('id', ids);
  if (error) throw error;
}

export async function unmarkTimeEntriesInvoiced(client = supabase, userId, entryIds) {
  const ids = (entryIds || []).filter(isPersistedTimeEntryId);
  if (!ids.length) return;

  const { error } = await client
    .from('time_entries')
    .update({ invoiced_at: null, updated_at: new Date().toISOString() })
    .eq('user_id', userId)
    .in('id', ids);
  if (error) throw error;
}

/** Pick a single hourly rate from selected entries (first non-null), or null. */
export function resolveHourlyRate(entries, fallback = null) {
  for (const entry of entries || []) {
    if (entry.hourlyRate != null && Number.isFinite(Number(entry.hourlyRate))) {
      return Number(entry.hourlyRate);
    }
  }
  if (fallback != null && Number.isFinite(Number(fallback))) return Number(fallback);
  return null;
}

export function entriesToHoursWorked(entries) {
  return (entries || []).map((entry, index) => ({
    id: Date.now() + index,
    date: entry.entryDate ? new Date(`${entry.entryDate}T12:00:00`) : new Date(),
    hours: Number(entry.hours) || 0,
    taskDescription: entry.description || '',
  }));
}
