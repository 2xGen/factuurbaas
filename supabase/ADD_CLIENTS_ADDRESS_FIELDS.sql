-- =============================================================================
-- Split clients.address into street / postal_code / city / country
-- Run after ADD_CLIENTS.sql (safe if already applied)
-- =============================================================================

alter table public.clients add column if not exists street text;
alter table public.clients add column if not exists postal_code text;
alter table public.clients add column if not exists city text;
alter table public.clients add column if not exists country text;

-- Move legacy free-text address into street when structured fields are empty
update public.clients
set street = address
where coalesce(nullif(trim(address), ''), null) is not null
  and coalesce(nullif(trim(street), ''), null) is null
  and coalesce(nullif(trim(postal_code), ''), null) is null
  and coalesce(nullif(trim(city), ''), null) is null
  and coalesce(nullif(trim(country), ''), null) is null;
