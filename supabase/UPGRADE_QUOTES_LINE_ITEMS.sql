-- Upgrade existing public.quotes for per-line BTW + hours (run in Supabase SQL Editor).
-- Needed if you created quotes before product/uren support was added.
-- Safe to run multiple times.

alter table public.quotes add column if not exists tax text default '21';
alter table public.quotes add column if not exists custom_tax_rate numeric;
alter table public.quotes add column if not exists hours_worked jsonb default '[]'::jsonb;
alter table public.quotes add column if not exists amount numeric default 0;

update public.quotes set hours_worked = '[]'::jsonb where hours_worked is null;
update public.quotes set amount = 0 where amount is null;
update public.quotes set tax = coalesce(tax, '21') where tax is null;
