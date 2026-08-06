/** Soft onboarding options — branche + factureerstijl + partnership. */

export const INDUSTRY_OPTIONS = [
  { value: 'bouw', label: 'Bouw' },
  { value: 'installatie', label: 'Installatie / techniek' },
  { value: 'schoonmaak', label: 'Schoonmaak' },
  { value: 'zorg', label: 'Zorg' },
  { value: 'it', label: 'IT / development' },
  { value: 'design', label: 'Design / marketing' },
  { value: 'coaching', label: 'Coaching / consultancy' },
  { value: 'horeca', label: 'Horeca' },
  { value: 'transport', label: 'Transport / logistiek' },
  { value: 'retail', label: 'Retail / webshop' },
  { value: 'administratie', label: 'Administratie / finance' },
  { value: 'fotografie', label: 'Fotografie / video' },
  { value: 'anders', label: 'Anders' },
];

export const BILLING_STYLE_OPTIONS = [
  { value: 'hourly', label: 'Vooral op uren' },
  { value: 'fixed', label: 'Vooral vaste prijs' },
  { value: 'mix', label: 'Mix van beide' },
];

export const PARTNERSHIP_OPTIONS = [
  { value: 'yes', label: 'Ja, jullie mogen me benaderen' },
  { value: 'later', label: 'Misschien later' },
  { value: 'no', label: 'Nee, liever niet' },
];

export function emptyOnboardingForm() {
  return {
    industry: '',
    industryOther: '',
    billingStyle: '',
    partnershipOpen: '',
  };
}

export function profileToOnboardingForm(profile) {
  return {
    industry: profile?.industry || '',
    industryOther: profile?.industry_other || '',
    billingStyle: profile?.billing_style || '',
    partnershipOpen: profile?.partnership_open || '',
  };
}

export function onboardingFormToDbFields(form) {
  const industry = form.industry || null;
  return {
    industry,
    industry_other:
      industry === 'anders' ? form.industryOther?.trim() || null : null,
    billing_style: form.billingStyle || null,
    partnership_open: form.partnershipOpen || null,
  };
}

export function industryLabel(value, other = '') {
  if (!value) return '';
  if (value === 'anders') return other?.trim() || 'Anders';
  return INDUSTRY_OPTIONS.find((o) => o.value === value)?.label || value;
}
