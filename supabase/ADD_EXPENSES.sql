-- =============================================================================
-- FactuurBaas — expenses (uitgaven)
-- Run in Supabase → SQL Editor
-- =============================================================================

create table if not exists public.expenses (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  expense_date date not null default (timezone('europe/amsterdam', now()))::date,
  description text not null,
  supplier text,
  category text not null default 'overig',
  amount_excl numeric(12, 2) not null check (amount_excl >= 0),
  vat_rate numeric(5, 2) not null default 21 check (vat_rate >= 0 and vat_rate <= 100),
  vat_amount numeric(12, 2) not null default 0 check (vat_amount >= 0),
  amount_incl numeric(12, 2) not null default 0 check (amount_incl >= 0),
  notes text,
  custom_label text,
  is_recurring boolean not null default false,
  interval_days integer check (interval_days is null or interval_days >= 1),
  recur_until date,
  recurrence_group_id uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists expenses_user_date_idx
  on public.expenses (user_id, expense_date desc);

create index if not exists expenses_user_category_idx
  on public.expenses (user_id, category);

create index if not exists expenses_user_recurrence_idx
  on public.expenses (user_id, recurrence_group_id)
  where recurrence_group_id is not null;

alter table public.expenses enable row level security;

drop policy if exists "expenses_select_own" on public.expenses;
create policy "expenses_select_own"
  on public.expenses for select to authenticated
  using (user_id = auth.uid());

drop policy if exists "expenses_insert_own" on public.expenses;
create policy "expenses_insert_own"
  on public.expenses for insert to authenticated
  with check (user_id = auth.uid());

drop policy if exists "expenses_update_own" on public.expenses;
create policy "expenses_update_own"
  on public.expenses for update to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

drop policy if exists "expenses_delete_own" on public.expenses;
create policy "expenses_delete_own"
  on public.expenses for delete to authenticated
  using (user_id = auth.uid());
