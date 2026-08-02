-- Harden stored logos: replace long-lived signed URLs with storage paths only.
-- Also clear duplicate company_address when structured address fields exist.
-- Run in Supabase SQL editor.

-- Profiles: extract path from signed URL pattern
update public.profiles
set logo_url = substring(
  logo_url
  from '/object/sign/user-logos/([^?]+)'
)
where logo_url like '%/object/sign/user-logos/%';

update public.profiles
set logo_url = substring(
  logo_url
  from '/object/public/user-logos/([^?]+)'
)
where logo_url like '%/object/public/user-logos/%';

-- Invoices: same for logo column
update public.invoices
set logo = substring(
  logo
  from '/object/sign/user-logos/([^?]+)'
)
where logo like '%/object/sign/user-logos/%';

update public.invoices
set logo = substring(
  logo
  from '/object/public/user-logos/([^?]+)'
)
where logo like '%/object/public/user-logos/%';

-- Drop redundant free-text address when structured fields are present
update public.profiles
set company_address = null
where company_address is not null
  and (
    coalesce(company_street, '') <> ''
    or coalesce(company_city, '') <> ''
    or coalesce(company_postal_code, '') <> ''
  );

notify pgrst, 'reload schema';
