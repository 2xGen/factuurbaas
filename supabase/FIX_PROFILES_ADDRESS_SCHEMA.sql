-- Run on FactuurBaas.nl project (mtadtabmwahpxmpquovg)
-- 1) Add columns (safe to re-run)
-- 2) Reload PostgREST schema cache

alter table public.profiles add column if not exists company_street text;
alter table public.profiles add column if not exists company_postal_code text;
alter table public.profiles add column if not exists company_city text;
alter table public.profiles add column if not exists company_country text;

-- Optional default for country on existing nulls
update public.profiles
set company_country = 'Nederland'
where company_country is null or company_country = '';

-- Prove columns exist
select column_name, data_type
from information_schema.columns
where table_schema = 'public'
  and table_name = 'profiles'
  and column_name in (
    'company_street',
    'company_postal_code',
    'company_city',
    'company_country',
    'company_address'
  )
order by column_name;

-- Force API schema cache refresh (fixes "could not find ... in the schema cache")
notify pgrst, 'reload schema';
