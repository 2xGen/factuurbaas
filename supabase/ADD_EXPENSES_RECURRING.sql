-- =============================================================================
-- FactuurBaas — expenses: recurring + custom label
-- Run AFTER or AFTER ADD_EXPENSES.sql (safe if columns already exist)
-- =============================================================================

alter table public.expenses
  add column if not exists custom_label text;

alter table public.expenses
  add column if not exists is_recurring boolean not null default false;

alter table public.expenses
  add column if not exists interval_days integer
  check (interval_days is null or interval_days >= 1);

alter table public.expenses
  add column if not exists recur_until date;

alter table public.expenses
  add column if not exists recurrence_group_id uuid;

create index if not exists expenses_user_recurrence_idx
  on public.expenses (user_id, recurrence_group_id)
  where recurrence_group_id is not null;
