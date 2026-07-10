import { supabase } from '@/lib/supabaseClient';

export const TOOL_LOG_TABLES = {
  offertes: 'factuurbaas_offertes_created',
  btw: 'factuurbaas_btw_berekeningen',
  uurtarief: 'factuurbaas_uurtarief_calculator',
  uurtariefNaarInkomen: 'factuurbaas_uurtarief_naar_inkomen',
  factuurnummer: 'factuurbaas_factuurnummer_generator',
  marge: 'factuurbaas_marge_calculator',
  betaaltermijn: 'factuurbaas_betaaltermijn_calculator',
  kor: 'factuurbaas_kor_calculator',
};

// Invoices: insert into base table, read via view in admin dashboard.
export const INVOICE_LOG_INSERT_TABLE = 'invoice_creations_log';
export const INVOICE_LOG_READ_TABLE = 'factuurbaas_invoices_created';

export const TOOL_USAGE_ADMIN_SECTIONS = [
  {
    title: 'Offerte Creaties',
    description: 'Statistieken en logboek van gedownloade offertes.',
    table: TOOL_LOG_TABLES.offertes,
    statsRpc: 'get_offerte_creation_stats',
    emptyMessage: 'Nog geen offertes aangemaakt.',
  },
  {
    title: 'BTW Berekeningen',
    description: 'Statistieken van uitgevoerde btw-berekeningen.',
    table: TOOL_LOG_TABLES.btw,
    statsRpc: 'get_btw_berekening_stats',
    emptyMessage: 'Nog geen btw-berekeningen geregistreerd.',
  },
  {
    title: 'Uurtarief Calculator',
    description: 'Statistieken van uurtarief-berekeningen.',
    table: TOOL_LOG_TABLES.uurtarief,
    statsRpc: 'get_uurtarief_calculator_stats',
    emptyMessage: 'Nog geen uurtarief-berekeningen geregistreerd.',
  },
  {
    title: 'Uurtarief naar Inkomen',
    description: 'Statistieken van omzet-berekeningen op basis van uurtarief.',
    table: TOOL_LOG_TABLES.uurtariefNaarInkomen,
    statsRpc: 'get_uurtarief_naar_inkomen_stats',
    emptyMessage: 'Nog geen berekeningen geregistreerd.',
  },
  {
    title: 'Factuurnummer Generator',
    description: 'Statistieken van gegenereerde factuurnummers.',
    table: TOOL_LOG_TABLES.factuurnummer,
    statsRpc: 'get_factuurnummer_generator_stats',
    emptyMessage: 'Nog geen factuurnummers gegenereerd.',
  },
  {
    title: 'Marge Calculator',
    description: 'Statistieken van marge-berekeningen.',
    table: TOOL_LOG_TABLES.marge,
    statsRpc: 'get_marge_calculator_stats',
    emptyMessage: 'Nog geen marge-berekeningen geregistreerd.',
  },
  {
    title: 'Betaaltermijn Calculator',
    description: 'Statistieken van vervaldatum-berekeningen.',
    table: TOOL_LOG_TABLES.betaaltermijn,
    statsRpc: 'get_betaaltermijn_calculator_stats',
    emptyMessage: 'Nog geen betaaltermijn-berekeningen geregistreerd.',
  },
  {
    title: 'KOR Calculator',
    description: 'Statistieken van KOR-checks.',
    table: TOOL_LOG_TABLES.kor,
    statsRpc: 'get_kor_calculator_stats',
    emptyMessage: 'Nog geen KOR-berekeningen geregistreerd.',
  },
];

export async function logToolUsage(table) {
  try {
    const { error } = await supabase.from(table).insert([{}]);
    if (error) {
      console.error(`Error logging to ${table}:`, error);
    }
  } catch (error) {
    console.error(`Supabase client error logging to ${table}:`, error);
  }
}
