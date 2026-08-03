import React from 'react';
import FormInput from '@/components/invoice/formElements/FormInput';
import FormDatePicker from '@/components/invoice/formElements/FormDatePicker';
import FormSelect from '@/components/invoice/formElements/FormSelect';
import MeerOpties from '@/components/invoice/formElements/MeerOpties';
import { CURRENCIES, PDF_LANGUAGES, PAYMENT_TERM_OPTIONS } from '@/lib/invoiceConfig';

const InvoiceMetaForm = ({
  invoiceName,
  invoiceNumber,
  invoiceDate,
  dueDate,
  paymentTermDays,
  currency,
  pdfLanguage,
  showFactuurBaasBranding,
  onInputChange,
  onDateChange,
  onPaymentTermChange,
}) => {
  const hasAdvancedOptions = currency !== 'EUR' || pdfLanguage !== 'nl';

  return (
    <div className="space-y-6">
      <FormInput
        label="Factuurnaam (optioneel)"
        name="invoiceName"
        value={invoiceName || ''}
        onChange={onInputChange}
        placeholder="Bijv. Project X, Maandelijkse retainer"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Factuurnummer"
          name="invoice_number"
          value={invoiceNumber || ''}
          onChange={onInputChange}
          placeholder="Bijv. 2024-001"
        />
        <FormDatePicker
          label="Factuurdatum"
          selected={invoiceDate}
          onChange={(date) => onDateChange('invoiceDate', date)}
        />
      </div>

      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">Betaaltermijn</p>
        <div className="flex flex-wrap gap-3">
          {PAYMENT_TERM_OPTIONS.map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
              <input
                type="radio"
                name="paymentTermDays"
                value={opt.value}
                checked={paymentTermDays === opt.value}
                onChange={() => onPaymentTermChange(opt.value)}
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      {paymentTermDays === 'custom' ? (
        <FormDatePicker
          label="Vervaldatum"
          selected={dueDate}
          onChange={(date) => onDateChange('dueDate', date)}
        />
      ) : (
        <p className="text-sm text-slate-500">
          Vervaldatum:{' '}
          <span className="font-medium text-slate-700">
            {dueDate ? new Date(dueDate).toLocaleDateString('nl-NL') : '—'}
          </span>
          <span className="text-slate-400"> (automatisch berekend)</span>
        </p>
      )}

      <MeerOpties defaultOpen={hasAdvancedOptions}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormSelect
            label="Valuta"
            name="currency"
            value={currency || 'EUR'}
            onChange={onInputChange}
            options={CURRENCIES.map((c) => ({ value: c.code, label: c.label }))}
          />
          <FormSelect
            label="PDF-taal"
            name="pdfLanguage"
            value={pdfLanguage || 'nl'}
            onChange={onInputChange}
            options={PDF_LANGUAGES}
          />
        </div>
      </MeerOpties>

      <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-3">
        <input
          type="checkbox"
          name="showFactuurBaasBranding"
          checked={showFactuurBaasBranding !== false}
          onChange={onInputChange}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <span className="text-sm leading-relaxed text-slate-700">
          Toon <span className="font-medium">“Gratis gemaakt met FactuurBaas.nl”</span> onderaan de PDF
          <span className="mt-0.5 block text-xs text-slate-500">
            Helpt ons groeien, zodat we meer gratis features kunnen maken. Je kunt dit uitzetten.
          </span>
        </span>
      </label>
    </div>
  );
};

export default InvoiceMetaForm;
