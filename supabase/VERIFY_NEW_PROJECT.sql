-- =============================================================================
-- NEW project: verify data is present (run after import)
-- =============================================================================

select 'factuurbaas_emails' as table_name, count(*)::bigint as rows from public.factuurbaas_emails
union all select 'invoice_creations_log', count(*) from public.invoice_creations_log
union all select 'factuurbaas_offertes_created', count(*) from public.factuurbaas_offertes_created
union all select 'factuurbaas_btw_berekeningen', count(*) from public.factuurbaas_btw_berekeningen
union all select 'profiles', count(*) from public.profiles
union all select 'invoices', count(*) from public.invoices
order by table_name;
