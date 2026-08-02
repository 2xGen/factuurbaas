-- =============================================================================
-- FactuurBaas — EXPORT only tables that exist on YOUR old project
-- Run ONE query block at a time in the OLD project.
-- Copy the insert_sql column → paste into the NEW project → Run.
--
-- New project must already have FULL_BOOTSTRAP.sql applied.
-- =============================================================================

-- ─── 1) Emails ────────────────────────────────────────────────────────────────
-- Run this block alone:

select format(
  $sql$
insert into public.factuurbaas_emails (id, email, created_at, discount_percent, discount_cycle, discount_valid_for_life)
values (%L::uuid, %L, %L::timestamptz, %L::numeric, %L, %L::boolean)
on conflict (email) do nothing;$sql$,
  id,
  email,
  created_at,
  discount_percent,
  discount_cycle,
  discount_valid_for_life
) as insert_sql
from public.factuurbaas_emails
order by created_at;


-- ─── 2) Invoice creation log (~942 rows) ──────────────────────────────────────
-- Run this block alone (comment out / don't run #1 in the same query):

select format(
  $sql$
insert into public.invoice_creations_log (id, created_at)
values (%L::uuid, %L::timestamptz)
on conflict (id) do nothing;$sql$,
  id,
  created_at
) as insert_sql
from public.invoice_creations_log
order by created_at;


-- ─── 3) Tool logs (optional) — run each block alone if you want the stats ─────

select format(
  $sql$insert into public.factuurbaas_offertes_created (id, created_at) values (%L::uuid, %L::timestamptz) on conflict (id) do nothing;$sql$,
  id, created_at
) as insert_sql from public.factuurbaas_offertes_created order by created_at;

-- select format(
--   $sql$insert into public.factuurbaas_btw_berekeningen (id, created_at) values (%L::uuid, %L::timestamptz) on conflict (id) do nothing;$sql$,
--   id, created_at
-- ) as insert_sql from public.factuurbaas_btw_berekeningen order by created_at;

-- select format(
--   $sql$insert into public.factuurbaas_uurtarief_calculator (id, created_at) values (%L::uuid, %L::timestamptz) on conflict (id) do nothing;$sql$,
--   id, created_at
-- ) as insert_sql from public.factuurbaas_uurtarief_calculator order by created_at;

-- select format(
--   $sql$insert into public.factuurbaas_uurtarief_naar_inkomen (id, created_at) values (%L::uuid, %L::timestamptz) on conflict (id) do nothing;$sql$,
--   id, created_at
-- ) as insert_sql from public.factuurbaas_uurtarief_naar_inkomen order by created_at;

-- select format(
--   $sql$insert into public.factuurbaas_factuurnummer_generator (id, created_at) values (%L::uuid, %L::timestamptz) on conflict (id) do nothing;$sql$,
--   id, created_at
-- ) as insert_sql from public.factuurbaas_factuurnummer_generator order by created_at;

-- select format(
--   $sql$insert into public.factuurbaas_marge_calculator (id, created_at) values (%L::uuid, %L::timestamptz) on conflict (id) do nothing;$sql$,
--   id, created_at
-- ) as insert_sql from public.factuurbaas_marge_calculator order by created_at;

-- select format(
--   $sql$insert into public.factuurbaas_betaaltermijn_calculator (id, created_at) values (%L::uuid, %L::timestamptz) on conflict (id) do nothing;$sql$,
--   id, created_at
-- ) as insert_sql from public.factuurbaas_betaaltermijn_calculator order by created_at;

-- select format(
--   $sql$insert into public.factuurbaas_kor_calculator (id, created_at) values (%L::uuid, %L::timestamptz) on conflict (id) do nothing;$sql$,
--   id, created_at
-- ) as insert_sql from public.factuurbaas_kor_calculator order by created_at;
