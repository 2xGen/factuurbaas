-- =============================================================================
-- FactuurBaas — Referral codes + Baas-status tracking
-- Run in: Supabase → SQL Editor
-- =============================================================================

alter table public.profiles
  add column if not exists referral_code text;

alter table public.profiles
  add column if not exists referred_by uuid references public.profiles (id) on delete set null;

create unique index if not exists profiles_referral_code_uidx
  on public.profiles (referral_code)
  where referral_code is not null;

create index if not exists profiles_referred_by_idx
  on public.profiles (referred_by)
  where referred_by is not null;

-- Prevent self-referrals at DB level
alter table public.profiles
  drop constraint if exists profiles_referred_by_not_self;

alter table public.profiles
  add constraint profiles_referred_by_not_self
  check (referred_by is null or referred_by <> id);

create or replace function public.generate_referral_code()
returns text
language plpgsql
as $$
declare
  alphabet constant text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  result text := '';
  i int;
begin
  for i in 1..8 loop
    result := result || substr(alphabet, 1 + floor(random() * length(alphabet))::int, 1);
  end loop;
  return result;
end;
$$;

create or replace function public.assign_referral_code(p_user_id uuid)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  existing text;
  candidate text;
  attempts int := 0;
begin
  select referral_code into existing
  from public.profiles
  where id = p_user_id;

  if existing is not null then
    return existing;
  end if;

  loop
    candidate := public.generate_referral_code();
    begin
      update public.profiles
      set referral_code = candidate,
          updated_at = now()
      where id = p_user_id
        and referral_code is null
      returning referral_code into existing;

      if existing is not null then
        return existing;
      end if;

      -- Row may already have a code from a concurrent writer
      select referral_code into existing
      from public.profiles
      where id = p_user_id;

      if existing is not null then
        return existing;
      end if;
    exception
      when unique_violation then
        null;
    end;

    attempts := attempts + 1;
    if attempts > 20 then
      raise exception 'Could not assign referral code';
    end if;
  end loop;
end;
$$;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  candidate text;
  attempts int := 0;
begin
  loop
    candidate := public.generate_referral_code();
    begin
      insert into public.profiles (id, full_name, referral_code)
      values (
        new.id,
        coalesce(
          new.raw_user_meta_data->>'full_name',
          new.raw_user_meta_data->>'name',
          split_part(new.email, '@', 1)
        ),
        candidate
      )
      on conflict (id) do nothing;
      exit;
    exception
      when unique_violation then
        attempts := attempts + 1;
        if attempts > 20 then
          insert into public.profiles (id, full_name)
          values (
            new.id,
            coalesce(
              new.raw_user_meta_data->>'full_name',
              new.raw_user_meta_data->>'name',
              split_part(new.email, '@', 1)
            )
          )
          on conflict (id) do nothing;
          exit;
        end if;
    end;
  end loop;

  return new;
end;
$$;

-- Ensure the current user has a referral code (for existing accounts)
create or replace function public.ensure_my_referral_code()
returns text
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then
    raise exception 'Not authenticated';
  end if;
  return public.assign_referral_code(auth.uid());
end;
$$;

-- Apply a referral code once for the current user
create or replace function public.apply_referral_code(p_code text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  my_id uuid := auth.uid();
  referrer_id uuid;
  current_referred uuid;
  normalized text;
begin
  if my_id is null then
    return jsonb_build_object('ok', false, 'reason', 'not_authenticated');
  end if;

  normalized := upper(trim(coalesce(p_code, '')));
  if normalized = '' then
    return jsonb_build_object('ok', false, 'reason', 'empty');
  end if;

  select id into referrer_id
  from public.profiles
  where referral_code = normalized
  limit 1;

  if referrer_id is null then
    return jsonb_build_object('ok', false, 'reason', 'invalid');
  end if;

  if referrer_id = my_id then
    return jsonb_build_object('ok', false, 'reason', 'self');
  end if;

  select referred_by into current_referred
  from public.profiles
  where id = my_id;

  if current_referred is not null then
    return jsonb_build_object('ok', false, 'reason', 'already_set');
  end if;

  update public.profiles
  set referred_by = referrer_id,
      updated_at = now()
  where id = my_id
    and referred_by is null;

  if not found then
    return jsonb_build_object('ok', false, 'reason', 'profile_missing');
  end if;

  return jsonb_build_object('ok', true, 'referrer_id', referrer_id);
end;
$$;

create or replace function public.count_my_referrals()
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

  select count(*)::integer into total
  from public.profiles
  where referred_by = auth.uid();

  return coalesce(total, 0);
end;
$$;

grant execute on function public.ensure_my_referral_code() to authenticated;
grant execute on function public.apply_referral_code(text) to authenticated;
grant execute on function public.count_my_referrals() to authenticated;

-- Backfill referral codes for existing profiles
do $$
declare
  r record;
begin
  for r in
    select id from public.profiles where referral_code is null
  loop
    perform public.assign_referral_code(r.id);
  end loop;
end;
$$;
