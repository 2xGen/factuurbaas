'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { track } from '@vercel/analytics';
import { ArrowLeft, Check } from 'lucide-react';
import { ArrowIcon, btn } from '@/components/site/editorial';
import { BUSINESS_TYPES, validateBoekhouderLead } from '@/lib/boekhouderLead';

const inputClass =
  'mt-1.5 w-full rounded-xl border border-ink/15 bg-paper-50 px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-ink-400 focus:border-ink focus:bg-white focus:ring-2 focus:ring-ember/40';

const empty = {
  businessType: '',
  name: '',
  companyName: '',
  city: '',
  email: '',
  phone: '',
  kvkConfirmed: false,
  consent: false,
  website: '',
};

function readUtm(searchParams) {
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  const utm = {};
  for (const key of keys) {
    const value = searchParams.get(key);
    if (value) utm[key] = value;
  }
  return utm;
}

export default function BookkeeperLeadForm({
  source = '/boekhouder-vinden',
  sourceType = 'seo',
  id = 'boekhouder-formulier',
}) {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(0);
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const ignoreSubmit = useRef(false);

  const sourcePage = source.startsWith('/') ? source : `/${source}`;

  function setField(key, value) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined, form: undefined }));
  }

  function validateCurrentStep() {
    const result = validateBoekhouderLead({
      ...values,
      kvkConfirmed: step < 2 ? true : values.kvkConfirmed,
      consent: step < 2 ? true : values.consent,
      sourcePage,
      sourceType,
    });
    const next = {};
    if (step === 0 && result.errors.businessType) next.businessType = result.errors.businessType;
    if (step === 1) {
      for (const key of ['companyName', 'city']) {
        if (result.errors[key]) next[key] = result.errors[key];
      }
    }
    if (step === 2) {
      for (const key of ['name', 'email', 'phone', 'kvkConfirmed', 'consent']) {
        if (result.errors[key]) next[key] = result.errors[key];
      }
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function nextStep() {
    if (!validateCurrentStep()) return;
    const reached = Math.min(step + 1, 2);
    track('boekhouder_form_step', { step: String(reached + 1), sourceType });
    ignoreSubmit.current = true;
    setErrors({});
    setStep(reached);
    queueMicrotask(() => {
      ignoreSubmit.current = false;
    });
  }

  async function submit(event) {
    event.preventDefault();
    if (ignoreSubmit.current) {
      ignoreSubmit.current = false;
      return;
    }
    if (submitting || done) return;
    if (step < 2) {
      nextStep();
      return;
    }
    if (!validateCurrentStep()) return;

    setSubmitting(true);
    setErrors({});
    try {
      const response = await fetch('/api/leads/boekhouder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          sourcePage,
          sourceType,
          utm: readUtm(searchParams),
        }),
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) {
        const fields = body.fields || {};
        setErrors({
          form: body.error || 'Versturen lukt nu niet. Probeer het opnieuw of mail mail@factuurbaas.nl.',
          ...fields,
        });
        if (fields.businessType) setStep(0);
        else if (fields.companyName || fields.city) setStep(1);
        else if (fields.name || fields.email || fields.phone) setStep(2);
        return;
      }
      track('boekhouder_form_success', { sourceType });
      setDone(true);
    } catch {
      setErrors({ form: 'Versturen lukt nu niet. Controleer je verbinding en probeer het opnieuw.' });
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div id={id} className="scroll-mt-28 rounded-2xl border border-ink/[0.08] bg-white px-6 py-10 text-center shadow-paper sm:px-8">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-ember/10 text-ember">
          <Check className="h-6 w-6" aria-hidden />
        </span>
        <h2 className="mt-5 font-display text-3xl font-normal tracking-[-0.02em] text-ink">
          Aanvraag ontvangen
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-500">
          WRKD B.V. kan contact met je opnemen over je aanvraag. Een bevestiging staat in je inbox.
          De aanvraag is gratis en vrijblijvend. Je beslist zelf of je met een boekhouder samenwerkt.
        </p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={submit}
      className="scroll-mt-28 rounded-2xl border border-ink/[0.08] bg-white p-5 shadow-paper sm:p-6"
      noValidate
    >
      <div className="flex items-baseline justify-between gap-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">
          Stap {step + 1} van 3
        </p>
        <p className="text-sm tabular-nums text-ink-400">{Math.round(((step + 1) / 3) * 100)}%</p>
      </div>
      <div className="mt-3 flex gap-1.5" aria-hidden>
        {[0, 1, 2].map((index) => (
          <span key={index} className={`h-1 flex-1 rounded-full ${index <= step ? 'bg-ember' : 'bg-ink/10'}`} />
        ))}
      </div>
      <h2 className="mt-4 font-display text-[1.45rem] font-normal leading-tight tracking-[-0.02em] text-ink">
        {step === 0 && 'Wat is je bedrijfsvorm?'}
        {step === 1 && 'Bedrijfsgegevens'}
        {step === 2 && 'Contactgegevens'}
      </h2>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
        {step === 0 && 'Zo kunnen we je aanvraag goed verwerken.'}
        {step === 1 && 'De naam en plaats van je onderneming.'}
        {step === 2 && 'Zo kunnen we je bereiken over je aanvraag.'}
      </p>

      <div className="mt-4 space-y-4">
        {step === 0 && (
          <fieldset>
            <legend className="sr-only">Bedrijfsvorm</legend>
            <div className="grid gap-2">
              {BUSINESS_TYPES.map((item) => {
                const selected = values.businessType === item.id;
                return (
                  <label
                    key={item.id}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-2.5 text-[15px] transition-colors ${
                      selected ? 'border-ink bg-paper-50 text-ink' : 'border-ink/10 text-ink-700 hover:border-ink/30'
                    }`}
                  >
                    <input
                      type="radio"
                      name="businessType"
                      value={item.id}
                      checked={selected}
                      onChange={() => setField('businessType', item.id)}
                      className="h-4 w-4 accent-ink"
                    />
                    {item.label}
                  </label>
                );
              })}
            </div>
            {errors.businessType && <FieldError>{errors.businessType}</FieldError>}
          </fieldset>
        )}

        {step === 1 && (
          <>
            <TextField label="Bedrijfsnaam" name="companyName" autoComplete="organization" value={values.companyName} error={errors.companyName} onChange={(value) => setField('companyName', value)} />
            <TextField label="Plaats" name="city" autoComplete="address-level2" value={values.city} error={errors.city} onChange={(value) => setField('city', value)} />
          </>
        )}

        {step === 2 && (
          <>
            <TextField label="Naam" name="name" autoComplete="name" value={values.name} error={errors.name} onChange={(value) => setField('name', value)} />
            <TextField label="Telefoonnummer" name="phone" type="tel" autoComplete="tel" value={values.phone} error={errors.phone} onChange={(value) => setField('phone', value)} />
            <TextField label="E-mailadres" name="email" type="email" autoComplete="email" value={values.email} error={errors.email} onChange={(value) => setField('email', value)} />
            <CheckField checked={values.kvkConfirmed} error={errors.kvkConfirmed} onChange={(checked) => setField('kvkConfirmed', checked)}>
              Ik bevestig dat mijn onderneming bij de Kamer van Koophandel staat ingeschreven.
            </CheckField>
            <CheckField
              quiet
              checked={values.consent}
              error={errors.consent}
              onChange={(checked) => setField('consent', checked)}
            >
              Ik geef toestemming om mijn gegevens te delen met WRKD B.V., zodat ik benaderd kan
              worden over mijn aanvraag. Bekijk het{' '}
              <Link
                href="/privacybeleid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-700 underline decoration-ink/25 underline-offset-4 hover:decoration-ember"
              >
                privacybeleid
              </Link>
              .
            </CheckField>
          </>
        )}
      </div>

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label>
          Website
          <input
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(event) => setField('website', event.target.value)}
          />
        </label>
      </div>

      {errors.form && <p className="mt-4 text-sm text-ember">{errors.form}</p>}

      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => {
              setErrors({});
              setStep((current) => current - 1);
            }}
            className="inline-flex items-center justify-center gap-2 text-sm font-medium text-ink-500 hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Vorige
          </button>
        ) : (
          <span className="hidden sm:block" />
        )}
        <button
          type="button"
          disabled={submitting}
          onClick={step < 2 ? nextStep : submit}
          className={`${btn.primary} w-full sm:w-auto`}
        >
          {submitting ? 'Bezig met versturen…' : step < 2 ? 'Volgende stap' : 'Vind mijn boekhouder'}
          <ArrowIcon />
        </button>
      </div>
    </form>
  );
}

function TextField({ label, error, onChange, ...props }) {
  return (
    <label className="block text-sm font-medium text-ink">
      {label}
      <input
        className={inputClass}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        required
        {...props}
      />
      {error && <FieldError>{error}</FieldError>}
    </label>
  );
}

function CheckField({ checked, onChange, error, quiet = false, children }) {
  return (
    <div>
      <label
        className={`flex items-start gap-3 leading-relaxed ${
          quiet ? 'text-[13px] text-ink-500' : 'text-sm text-ink-500'
        }`}
      >
        <input
          type="checkbox"
          className={`mt-0.5 shrink-0 accent-ink ${quiet ? 'h-3.5 w-3.5' : 'h-4 w-4'}`}
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
        />
        <span>{children}</span>
      </label>
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
}

function FieldError({ children }) {
  return <span className="mt-1.5 block text-sm font-normal text-ember">{children}</span>;
}
