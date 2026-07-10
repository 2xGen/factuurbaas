const COMPANY_KEY = 'factuurbaas_company_details';
const REMEMBER_KEY = 'factuurbaas_remember_company';

export function loadRememberPreference() {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(REMEMBER_KEY) === 'true';
}

export function saveRememberPreference(remember) {
  if (typeof window === 'undefined') return;
  if (remember) {
    localStorage.setItem(REMEMBER_KEY, 'true');
  } else {
    localStorage.removeItem(REMEMBER_KEY);
    localStorage.removeItem(COMPANY_KEY);
  }
}

export function loadSavedCompanyDetails() {
  if (typeof window === 'undefined') return null;
  if (localStorage.getItem(REMEMBER_KEY) !== 'true') return null;
  try {
    const raw = localStorage.getItem(COMPANY_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveCompanyDetails(companyDetails, logo) {
  if (typeof window === 'undefined') return;
  if (localStorage.getItem(REMEMBER_KEY) !== 'true') return;
  const payload = { companyDetails, logo: logo || null };
  localStorage.setItem(COMPANY_KEY, JSON.stringify(payload));
}
