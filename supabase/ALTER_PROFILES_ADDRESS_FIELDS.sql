-- Run on NEW FactuurBaas project (mtadtabmwahpxmpquovg)
-- Adds structured address fields to profiles for 1:1 invoice import.

alter table public.profiles
  add column if not exists company_street text,
  add column if not exists company_postal_code text,
  add column if not exists company_city text,
  add column if not exists company_country text default 'Nederland';

-- Best-effort backfill from free-text company_address (line1 / "1234 AB City" / country)
update public.profiles
set
  company_street = coalesce(
    company_street,
    nullif(trim(split_part(company_address, E'\n', 1)), '')
  ),
  company_postal_code = coalesce(
    company_postal_code,
    nullif(
      trim(
        (regexp_match(trim(split_part(company_address, E'\n', 2)), '^(\d{4}\s?[A-Za-z]{2})\b'))[1]
      ),
      ''
    )
  ),
  company_city = coalesce(
    company_city,
    nullif(
      trim(
        regexp_replace(
          trim(split_part(company_address, E'\n', 2)),
          '^\d{4}\s?[A-Za-z]{2}\s*',
          ''
        )
      ),
      ''
    )
  ),
  company_country = coalesce(
    nullif(company_country, ''),
    nullif(trim(split_part(company_address, E'\n', 3)), ''),
    'Nederland'
  )
where company_address is not null
  and trim(company_address) <> '';
