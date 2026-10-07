-- =============================================================================
-- FactuurBaas — paid_date on invoices (when the customer actually paid)
-- Run in Supabase → SQL Editor
-- Used for gemiddelde betaaltermijn per klant.
-- =============================================================================

alter table public.invoices
  add column if not exists paid_date date;

comment on column public.invoices.paid_date is
  'Datum waarop de factuur is betaald. Alleen gezet bij status paid. Basis voor gemiddelde betaaltermijn.';
