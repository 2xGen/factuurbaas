import { supabase } from '@/lib/customSupabaseClient';
import { formatReceiverAddress } from '@/lib/invoiceConfig';

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function isPersistedClientId(id) {
  return typeof id === 'string' && UUID_RE.test(id);
}

export function clientDisplayName(client) {
  if (!client) return 'Naamloze klant';
  return (
    client.companyName?.trim() ||
    client.contactPerson?.trim() ||
    client.email?.trim() ||
    'Naamloze klant'
  );
}

export function rowToClient(row) {
  if (!row) return null;
  const street = row.street || '';
  const postalCode = row.postal_code || '';
  const city = row.city || '';
  const country = row.country || '';
  const legacyAddress = row.address || '';
  return {
    id: row.id,
    companyName: row.company_name || '',
    contactPerson: row.contact_person || '',
    email: row.email || '',
    phone: row.phone || '',
    street: street || (!postalCode && !city && !country ? legacyAddress : street),
    postalCode,
    city,
    country,
    kvk: row.kvk || '',
    btw: row.btw || '',
    notes: row.notes || '',
    user_id: row.user_id,
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

export function clientToRow(client, userId, { includeId = true } = {}) {
  const street = client.street?.trim() || null;
  const postalCode = client.postalCode?.trim() || null;
  const city = client.city?.trim() || null;
  const country = client.country?.trim() || null;
  const row = {
    user_id: userId,
    company_name: client.companyName?.trim() || null,
    contact_person: client.contactPerson?.trim() || null,
    email: client.email?.trim() || null,
    phone: client.phone?.trim() || null,
    street,
    postal_code: postalCode,
    city,
    country,
    // Keep legacy address in sync for older reads / exports
    address:
      formatReceiverAddress({
        street: street || '',
        postalCode: postalCode || '',
        city: city || '',
        country: country || '',
      }) || null,
    kvk: client.kvk?.trim() || null,
    btw: client.btw?.trim() || null,
    notes: client.notes?.trim() || null,
    updated_at: new Date().toISOString(),
  };
  if (includeId && isPersistedClientId(client.id)) {
    row.id = client.id;
  }
  return row;
}

export function clientToReceiverDetails(client) {
  if (!client) return {};
  return {
    companyName: client.companyName || '',
    contactPerson: client.contactPerson || '',
    email: client.email || '',
    phone: client.phone || '',
    street: client.street || '',
    postalCode: client.postalCode || '',
    city: client.city || '',
    country: client.country || '',
    address: '',
    kvk: client.kvk || '',
    btw: client.btw || '',
  };
}

export function receiverDetailsToClient(details, extras = {}) {
  const hasStructured = Boolean(
    details?.street || details?.postalCode || details?.city || details?.country
  );
  return {
    companyName: details?.companyName || '',
    contactPerson: details?.contactPerson || '',
    email: details?.email || '',
    phone: details?.phone || '',
    street: details?.street || (!hasStructured ? details?.address || '' : ''),
    postalCode: details?.postalCode || '',
    city: details?.city || '',
    country: details?.country || '',
    kvk: details?.kvk || '',
    btw: details?.btw || '',
    notes: extras.notes || '',
  };
}

export function emptyClient() {
  return {
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    street: '',
    postalCode: '',
    city: '',
    country: 'Nederland',
    kvk: '',
    btw: '',
    notes: '',
  };
}

export async function fetchUserClients(client = supabase, userId) {
  const { data, error } = await client
    .from('clients')
    .select('*')
    .eq('user_id', userId)
    .order('company_name', { ascending: true, nullsFirst: false })
    .order('contact_person', { ascending: true, nullsFirst: false });

  if (error) throw error;
  return (data || []).map(rowToClient);
}

export async function fetchClientById(client = supabase, userId, clientId) {
  if (!isPersistedClientId(clientId)) return null;
  const { data, error } = await client
    .from('clients')
    .select('*')
    .eq('user_id', userId)
    .eq('id', clientId)
    .maybeSingle();

  if (error) throw error;
  return rowToClient(data);
}

export async function upsertClient(client = supabase, userId, clientData) {
  const isUpdate = isPersistedClientId(clientData?.id);
  const payload = clientToRow(clientData, userId, { includeId: false });

  if (isUpdate) {
    const { data, error } = await client
      .from('clients')
      .update(payload)
      .eq('id', clientData.id)
      .eq('user_id', userId)
      .select('*')
      .single();
    if (error) throw error;
    return rowToClient(data);
  }

  const { data, error } = await client.from('clients').insert(payload).select('*').single();
  if (error) throw error;
  return rowToClient(data);
}

export async function deleteClient(client = supabase, userId, clientId) {
  const { error } = await client.from('clients').delete().eq('user_id', userId).eq('id', clientId);
  if (error) throw error;
}
