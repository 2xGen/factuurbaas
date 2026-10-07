import { getRevenueThisYear } from '@/lib/dashboardCockpit';
import { fetchUserIncomes, sumIncomesForYear } from '@/lib/incomePersistence';

/** Omzet dit kalenderjaar: facturen (excl. btw, op factuurdatum) + losse inkomsten. */
export async function fetchRegisteredYearRevenue(client, userId, now = new Date()) {
  const [invRes, incomes] = await Promise.all([
    client.from('invoices').select('invoice_date, total_excl').eq('user_id', userId),
    fetchUserIncomes(client, userId).catch(() => []),
  ]);

  if (invRes.error) throw invRes.error;

  const invoices = (invRes.data || []).map((row) => ({
    invoiceDate: row.invoice_date,
    total_excl: row.total_excl,
  }));

  return getRevenueThisYear(invoices, now) + sumIncomesForYear(incomes, now);
}
