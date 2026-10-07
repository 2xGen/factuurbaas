-- =============================================================================
-- FactuurBaas — stable business facts that tools can save into
-- Run in Supabase → SQL Editor
-- =============================================================================

alter table public.profiles
  add column if not exists hourly_rate numeric(12, 2);

alter table public.profiles
  add column if not exists hours_per_week numeric(6, 2);

alter table public.profiles
  add column if not exists weeks_per_year numeric(5, 2);

alter table public.profiles
  add column if not exists desired_net_monthly numeric(12, 2);

alter table public.profiles
  add column if not exists default_payment_term_days integer;

comment on column public.profiles.hourly_rate is
  'Standaard uurtarief excl. btw. Gezet vanuit de uurtarief-calculator of profiel.';
comment on column public.profiles.hours_per_week is
  'Factureerbare of werkuren per week.';
comment on column public.profiles.weeks_per_year is
  'Werkweken per jaar. Standaard 46.';
comment on column public.profiles.desired_net_monthly is
  'Gewenst netto inkomen per maand. Optioneel.';
comment on column public.profiles.default_payment_term_days is
  'Standaard betaaltermijn in dagen voor nieuwe facturen.';
