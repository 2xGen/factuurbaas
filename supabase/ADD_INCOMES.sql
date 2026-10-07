-- =============================================================================
-- FactuurBaas — incomes (inkomsten / verkopen zonder factuur) + jaardoel
-- Run in Supabase → SQL Editor
-- =============================================================================

create table if not exists public.incomes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  income_date date not null default (timezone('europe/amsterdam', now()))::date,
  description text not null,
  amount_excl numeric(12, 2) not null check (amount_excl >= 0),
  vat_rate numeric(5, 2) not null default 21 check (vat_rate >= 0 and vat_rate <= 100),
  vat_amount numeric(12, 2) not null default 0 check (vat_amount >= 0),
  amount_incl numeric(12, 2) not null default 0 check (amount_incl >= 0),
  payment_method text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists incomes_user_date_idx
  on public.incomes (user_id, income_date desc);

alter table public.incomes enable row level security;

drop policy if exists "incomes_select_own" on public.incomes;
create policy "incomes_select_own"
  on public.incomes for select to authenticated
  using (user_id = auth.uid());

drop policy if exists "incomes_insert_own" on public.incomes;
create policy "incomes_insert_own"
  on public.incomes for insert to authenticated
  with check (user_id = auth.uid());

drop policy if exists "incomes_update_own" on public.incomes;
create policy "incomes_update_own"
  on public.incomes for update to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

drop policy if exists "incomes_delete_own" on public.incomes;
create policy "incomes_delete_own"
  on public.incomes for delete to authenticated
  using (user_id = auth.uid());

alter table public.profiles
  add column if not exists yearly_goal numeric(12, 2);

alter table public.profiles
  add column if not exists yearly_goal_year integer;

comment on column public.profiles.yearly_goal is
  'Jaardoel omzet excl. btw. Optioneel.';
comment on column public.profiles.yearly_goal_year is
  'Kalenderjaar waar yearly_goal bij hoort.';
