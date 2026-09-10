-- =============================================================================
-- FactuurBaas — Referral link visit counter (secondary metric)
-- Run in: Supabase → SQL Editor
-- Requires: ADD_REFERRAL_AND_BAAS_STATUS.sql already applied
-- =============================================================================

alter table public.profiles
  add column if not exists referral_visit_count integer not null default 0;

-- Public-safe: count a click on someone's Baas-link (?ref=CODE).
-- Does not count self-visits. Returns the new total (or current if skipped).
create or replace function public.record_referral_visit(p_code text)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  referrer_id uuid;
  normalized text;
  new_total integer;
begin
  normalized := upper(trim(coalesce(p_code, '')));
  if normalized = '' then
    return 0;
  end if;

  select id, referral_visit_count
    into referrer_id, new_total
  from public.profiles
  where referral_code = normalized
  limit 1;

  if referrer_id is null then
    return 0;
  end if;

  -- Don't count the owner clicking their own link
  if auth.uid() is not null and auth.uid() = referrer_id then
    return coalesce(new_total, 0);
  end if;

  update public.profiles
  set referral_visit_count = coalesce(referral_visit_count, 0) + 1,
      updated_at = now()
  where id = referrer_id
  returning referral_visit_count into new_total;

  return coalesce(new_total, 0);
end;
$$;

create or replace function public.get_my_referral_visit_count()
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  total integer;
begin
  if auth.uid() is null then
    return 0;
  end if;

  select coalesce(referral_visit_count, 0)::integer into total
  from public.profiles
  where id = auth.uid();

  return coalesce(total, 0);
end;
$$;

grant execute on function public.record_referral_visit(text) to anon, authenticated;
grant execute on function public.get_my_referral_visit_count() to authenticated;
