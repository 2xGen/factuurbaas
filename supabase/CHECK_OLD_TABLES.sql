-- =============================================================================
-- FactuurBaas — check which tables exist on the OLD project
-- Run in OLD project SQL Editor. You should see a results TABLE (not empty).
-- =============================================================================

select
  t.table_name,
  case
    when to_regclass('public.' || t.table_name) is null then 'MISSING'
    else 'OK'
  end as status,
  case
    when to_regclass('public.' || t.table_name) is null then null
    else (
      select c.reltuples::bigint
      from pg_class c
      join pg_namespace n on n.oid = c.relnamespace
      where n.nspname = 'public' and c.relname = t.table_name
    )
  end as approx_rows
from (
  values
    ('factuurbaas_emails'),
    ('managed_blog_links'),
    ('blog_post_listings'),
    ('invoice_creations_log'),
    ('factuurbaas_invoices_created'),
    ('page_views'),
    ('factuurbaas_offertes_created'),
    ('factuurbaas_btw_berekeningen'),
    ('factuurbaas_uurtarief_calculator'),
    ('factuurbaas_uurtarief_naar_inkomen'),
    ('factuurbaas_factuurnummer_generator'),
    ('factuurbaas_marge_calculator'),
    ('factuurbaas_betaaltermijn_calculator'),
    ('factuurbaas_kor_calculator'),
    ('invoices'),
    ('profiles')
) as t(table_name)
order by status desc, table_name;
