import React from 'react';
import FormInput from '@/components/invoice/formElements/FormInput';
import FormDatePicker from '@/components/invoice/formElements/FormDatePicker';

const InvoiceMetaForm = ({ invoiceName, invoiceNumber, invoiceDate, dueDate, onInputChange, onDateChange }) => {
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
      <FormDatePicker
        label="Vervaldatum"
        selected={dueDate}
        onChange={(date) => onDateChange('dueDate', date)}
      />
    </div>
  );
};

export default InvoiceMetaForm;