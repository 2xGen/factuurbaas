-- FactuurBaas accounts: profiles + saved invoices with strict RLS.
-- Run once in Supabase SQL Editor. Requires Auth enabled (Google OAuth separately in dashboard).
--
-- Security: every policy scopes to auth.uid(). Anon has ZERO access to invoice/profile content.
-- service_role bypasses RLS — never expose that key in the browser.

-- ─── Profiles ─────────────────────────────────────────────────────────────────

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  company_name text,
  company_address text,
  company_kvk text,
  company_btw text,
  company_iban text,
  logo_url text,
  converted_from_guest boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles
  add column if not exists converted_from_guest boolean not null default false;

alter table public.profiles enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
  on public.profiles for select
  to authenticated
  using (id = auth.uid());

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
  on public.profiles for insert
  to authenticated
  with check (id = auth.uid());

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
  on public.profiles for update
  to authenticated
  using (id = auth.uid())
  with check (id = auth.uid());

drop policy if exists "profiles_delete_own" on public.profiles;
create policy "profiles_delete_own"
  on public.profiles for delete
  to authenticated
  using (id = auth.uid());

-- Auto-create profile on signup (Google OAuth / any auth.users insert)
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', split_part(new.email, '@', 1))
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ─── Invoices ─────────────────────────────────────────────────────────────────

create table if not exists public.invoices (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  invoice_number text,
  invoice_name text,
  invoice_date timestamptz,
  due_date timestamptz,
  payment_term_days text,
  status text not null default 'concept'
    check (status in ('concept', 'pending', 'paid')),
  company_details jsonb not null default '{}'::jsonb,
  receiver_details jsonb not null default '{}'::jsonb,
  items jsonb not null default '[]'::jsonb,
  hours_worked jsonb not null default '[]'::jsonb,
  work_type text default 'fixed',
  amount numeric default 0,
  description text,
  currency text default 'EUR',
  tax text default '21',
  custom_tax_rate numeric,
  tax_included boolean default false,
  extra_costs jsonb not null default '{}'::jsonb,
  notes text,
  terms text,
  layout text default 'plain',
  pdf_language text default 'nl',
  logo text,
  activity_log jsonb not null default '[]'::jsonb,
  total_excl numeric not null default 0,
  total_btw numeric not null default 0,
  total_incl numeric not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists invoices_user_created_idx
  on public.invoices (user_id, created_at desc);

create index if not exists invoices_user_status_idx
  on public.invoices (user_id, status);

alter table public.invoices enable row level security;

drop policy if exists "invoices_select_own" on public.invoices;
create policy "invoices_select_own"
  on public.invoices for select
  to authenticated
  using (user_id = auth.uid());

drop policy if exists "invoices_insert_own" on public.invoices;
create policy "invoices_insert_own"
  on public.invoices for insert
  to authenticated
  with check (user_id = auth.uid());

drop policy if exists "invoices_update_own" on public.invoices;
create policy "invoices_update_own"
  on public.invoices for update
  to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

drop policy if exists "invoices_delete_own" on public.invoices;
create policy "invoices_delete_own"
  on public.invoices for delete
  to authenticated
  using (user_id = auth.uid());

-- ─── Private logo storage (path: {user_id}/...) ───────────────────────────────

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'user-logos',
  'user-logos',
  false,
  2097152,
  array['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "user_logos_select_own" on storage.objects;
create policy "user_logos_select_own"
  on storage.objects for select
  to authenticated
  using (
    bucket_id = 'user-logos'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists "user_logos_insert_own" on storage.objects;
create policy "user_logos_insert_own"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'user-logos'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists "user_logos_update_own" on storage.objects;
create policy "user_logos_update_own"
  on storage.objects for update
  to authenticated
  using (
    bucket_id = 'user-logos'
    and (storage.foldername(name))[1] = auth.uid()::text
  )
  with check (
    bucket_id = 'user-logos'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists "user_logos_delete_own" on storage.objects;
create policy "user_logos_delete_own"
  on storage.objects for delete
  to authenticated
  using (
    bucket_id = 'user-logos'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

-- ─── Account self-deletion (AVG) ──────────────────────────────────────────────
-- Deletes auth user; cascades to profiles + invoices via FK.

create or replace function public.delete_own_account()
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
begin
  if uid is null then
    raise exception 'Not authenticated';
  end if;

  delete from storage.objects
  where bucket_id = 'user-logos'
    and (storage.foldername(name))[1] = uid::text;

  delete from auth.users where id = uid;
end;
$$;

revoke all on function public.delete_own_account() from public;
grant execute on function public.delete_own_account() to authenticated;
