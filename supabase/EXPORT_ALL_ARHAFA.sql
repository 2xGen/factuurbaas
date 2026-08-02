-- =============================================================================
-- OLD project (ARHAFA) — export EVERYTHING into ONE pasteable import script
--
-- How to use:
-- 1. Open OLD project (ARHAFA) → SQL Editor
-- 2. Run this ENTIRE file
-- 3. In results: open the single cell "import_script"
-- 4. Click the cell → Copy (or Download as CSV and open the cell text)
-- 5. Open NEW project (FactuurBaas.nl) → SQL Editor
-- 6. Paste ONLY the text that starts with "insert into" or "-- FactuurBaas"
--    (do NOT paste table borders or "| import_script |")
-- 7. Run
--
-- Requires NEW project already ran FULL_BOOTSTRAP.sql
-- Skips: profiles, invoices, auth.users, missing tables
-- =============================================================================

select concat_ws(
  E'\n',
  '-- FactuurBaas import from ARHAFA',
  '-- Generated for new project mtadtabmwahpxmpquovg',
  '',

  -- Emails
  (
    select coalesce(string_agg(format(
      'insert into public.factuurbaas_emails (id, email, created_at, discount_percent, discount_cycle, discount_valid_for_life) values (%L::uuid, %L, %L::timestamptz, %L::numeric, %L, %L::boolean) on conflict (email) do nothing;',
      id, email, created_at, discount_percent, discount_cycle, discount_valid_for_life
    ), E'\n' order by created_at), '-- no factuurbaas_emails rows')
    from public.factuurbaas_emails
  ),
  '',

  -- Invoice creation log
  (
    select coalesce(string_agg(format(
      'insert into public.invoice_creations_log (id, created_at) values (%L::uuid, %L::timestamptz) on conflict (id) do nothing;',
      id, created_at
    ), E'\n' order by created_at), '-- no invoice_creations_log rows')
    from public.invoice_creations_log
  ),
  '',

  -- Offertes
  (
    select coalesce(string_agg(format(
      'insert into public.factuurbaas_offertes_created (id, created_at) values (%L::uuid, %L::timestamptz) on conflict (id) do nothing;',
      id, created_at
    ), E'\n' order by created_at), '-- no offertes rows')
    from public.factuurbaas_offertes_created
  ),
  '',

  -- BTW
  (
    select coalesce(string_agg(format(
      'insert into public.factuurbaas_btw_berekeningen (id, created_at) values (%L::uuid, %L::timestamptz) on conflict (id) do nothing;',
      id, created_at
    ), E'\n' order by created_at), '-- no btw rows')
    from public.factuurbaas_btw_berekeningen
  ),
  '',

  -- Uurtarief
  (
    select coalesce(string_agg(format(
      'insert into public.factuurbaas_uurtarief_calculator (id, created_at) values (%L::uuid, %L::timestamptz) on conflict (id) do nothing;',
      id, created_at
    ), E'\n' order by created_at), '-- no uurtarief rows')
    from public.factuurbaas_uurtarief_calculator
  ),
  '',

  -- Uurtarief naar inkomen
  (
    select coalesce(string_agg(format(
      'insert into public.factuurbaas_uurtarief_naar_inkomen (id, created_at) values (%L::uuid, %L::timestamptz) on conflict (id) do nothing;',
      id, created_at
    ), E'\n' order by created_at), '-- no uurtarief_naar_inkomen rows')
    from public.factuurbaas_uurtarief_naar_inkomen
  ),
  '',

  -- Factuurnummer
  (
    select coalesce(string_agg(format(
      'insert into public.factuurbaas_factuurnummer_generator (id, created_at) values (%L::uuid, %L::timestamptz) on conflict (id) do nothing;',
      id, created_at
    ), E'\n' order by created_at), '-- no factuurnummer rows')
    from public.factuurbaas_factuurnummer_generator
  ),
  '',

  -- Marge
  (
    select coalesce(string_agg(format(
      'insert into public.factuurbaas_marge_calculator (id, created_at) values (%L::uuid, %L::timestamptz) on conflict (id) do nothing;',
      id, created_at
    ), E'\n' order by created_at), '-- no marge rows')
    from public.factuurbaas_marge_calculator
  ),
  '',

  -- Betaaltermijn
  (
    select coalesce(string_agg(format(
      'insert into public.factuurbaas_betaaltermijn_calculator (id, created_at) values (%L::uuid, %L::timestamptz) on conflict (id) do nothing;',
      id, created_at
    ), E'\n' order by created_at), '-- no betaaltermijn rows')
    from public.factuurbaas_betaaltermijn_calculator
  ),
  '',

  -- KOR
  (
    select coalesce(string_agg(format(
      'insert into public.factuurbaas_kor_calculator (id, created_at) values (%L::uuid, %L::timestamptz) on conflict (id) do nothing;',
      id, created_at
    ), E'\n' order by created_at), '-- no kor rows')
    from public.factuurbaas_kor_calculator
  )
) as import_script;
