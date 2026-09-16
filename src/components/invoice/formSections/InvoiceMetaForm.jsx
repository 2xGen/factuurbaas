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
  onInputChange,
  onDateChange,
  onPaymentTermChange,
}) => {
  const hasAdvancedOptions =
    Boolean(invoiceName) || currency !== 'EUR' || pdfLanguage !== 'nl';

  return (
    <div className="space-y-5">
      <div>
        <FormInput
          label="Factuurnummer"
          name="invoice_number"
          value={invoiceNumber || ''}
          onChange={onInputChange}
          placeholder="2026-001"
        />
        <p className="mt-1.5 text-xs text-slate-500">
          Automatisch ingevuld · aanpassen kan altijd
        </p>
      </div>

      <FormDatePicker
        label="Factuurdatum"
        selected={invoiceDate}
        onChange={(date) => onDateChange('invoiceDate', date)}
      />

      <FormSelect
        label="Betaaltermijn"
        name="paymentTermDays"
        value={paymentTermDays || '14'}
        onChange={(e) => onPaymentTermChange(e.target.value)}
        options={PAYMENT_TERM_OPTIONS}
      />

      {paymentTermDays === 'custom' ? (
        <FormDatePicker
          label="Vervaldatum"
          selected={dueDate}
          onChange={(date) => onDateChange('dueDate', date)}
        />
      ) : (
        <p className="text-sm text-slate-500">
          Vervaldatum:{' '}
          <span className="font-medium text-slate-800">
            {dueDate ? new Date(dueDate).toLocaleDateString('nl-NL') : '—'}
          </span>
        </p>
      )}

      <MeerOpties defaultOpen={hasAdvancedOptions} label="Meer opties">
        <FormInput
          label="Factuurnaam"
          name="invoiceName"
          value={invoiceName || ''}
          onChange={onInputChange}
          placeholder='Bijv. "Website ontwerp"'
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
    </div>
  );
};

export default InvoiceMetaForm;
