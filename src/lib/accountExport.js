const OPTIONAL_TABLE_RE =
  /does not exist|schema cache|Could not find the table|relation .* does not exist/i;

function isOptionalTableError(error) {
  return OPTIONAL_TABLE_RE.test(error?.message || '');
}

async function selectOwned(client, table, userId) {
  const { data, error } = await client.from(table).select('*').eq('user_id', userId);
  if (error) {
    if (isOptionalTableError(error)) return [];
    throw error;
  }
  return data || [];
}

/**
 * Full account dump for AVG portability (JSON).
 * Missing tables (migration not applied yet) are exported as [].
 */
export async function buildAccountExportPayload(client, user) {
  if (!user?.id) throw new Error('Niet ingelogd');

  const userId = user.id;
  const [profileRes, invoices, quotes, clients, expenses, incomes, timeEntries] = await Promise.all([
    client.from('profiles').select('*').eq('id', userId).maybeSingle(),
    selectOwned(client, 'invoices', userId),
    selectOwned(client, 'quotes', userId),
    selectOwned(client, 'clients', userId),
    selectOwned(client, 'expenses', userId),
    selectOwned(client, 'incomes', userId),
    selectOwned(client, 'time_entries', userId),
  ]);

  if (profileRes.error && !isOptionalTableError(profileRes.error)) {
    throw profileRes.error;
  }

  return {
    exportedAt: new Date().toISOString(),
    source: 'factuurbaas.nl',
    account: {
      id: user.id,
      email: user.email || null,
    },
    profile: profileRes.data || null,
    invoices,
    quotes,
    clients,
    expenses,
    incomes,
    time_entries: timeEntries,
  };
}

export function downloadAccountExportJson(payload) {
  const stamp = new Date().toISOString().slice(0, 10);
  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: 'application/json;charset=utf-8',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `factuurbaas-account-${stamp}.json`;
  a.click();
  URL.revokeObjectURL(url);
}
