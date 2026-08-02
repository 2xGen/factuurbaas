-- =============================================================================
-- OLD project: build ONE pasteable import script (copy the single result cell)
-- Run each query separately. Result = one long text. Paste that into NEW project.
-- =============================================================================

-- 1) Emails → copy the one cell from "script"
select coalesce(string_agg(stmt, E'\n'), '-- no emails') as script
from (
  select format(
    'insert into public.factuurbaas_emails (id, email, created_at, discount_percent, discount_cycle, discount_valid_for_life) values (%L::uuid, %L, %L::timestamptz, %L::numeric, %L, %L::boolean) on conflict (email) do nothing;',
    id, email, created_at, discount_percent, discount_cycle, discount_valid_for_life
  ) as stmt
  from public.factuurbaas_emails
  order by created_at
) s;

-- 2) Invoice creations log
select coalesce(string_agg(stmt, E'\n'), '-- no invoice log rows') as script
from (
  select format(
    'insert into public.invoice_creations_log (id, created_at) values (%L::uuid, %L::timestamptz) on conflict (id) do nothing;',
    id, created_at
  ) as stmt
  from public.invoice_creations_log
  order by created_at
) s;

-- 3) Offertes
select coalesce(string_agg(stmt, E'\n'), '-- no offertes') as script
from (
  select format(
    'insert into public.factuurbaas_offertes_created (id, created_at) values (%L::uuid, %L::timestamptz) on conflict (id) do nothing;',
    id, created_at
  ) as stmt
  from public.factuurbaas_offertes_created
  order by created_at
) s;

-- 4) BTW
select coalesce(string_agg(stmt, E'\n'), '-- no btw rows') as script
from (
  select format(
    'insert into public.factuurbaas_btw_berekeningen (id, created_at) values (%L::uuid, %L::timestamptz) on conflict (id) do nothing;',
    id, created_at
  ) as stmt
  from public.factuurbaas_btw_berekeningen
  order by created_at
) s;
