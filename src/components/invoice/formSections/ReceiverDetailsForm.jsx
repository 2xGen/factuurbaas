import React from 'react';
import FormInput from '@/components/invoice/formElements/FormInput';
import FormTextarea from '@/components/invoice/formElements/FormTextarea';
import MeerOpties from '@/components/invoice/formElements/MeerOpties';

const ReceiverDetailsForm = ({ receiverDetails, onInputChange }) => {
  const handleChange = (e) => {
    onInputChange({
      target: {
        name: e.target.name,
        value: e.target.value,
        dataset: { section: 'receiverDetails' },
      },
    });
  };

  const r = receiverDetails || {};
  const hasAdvancedFields = Boolean(r.phone || r.kvk || r.btw);

  return (
    <div className="space-y-4">
      <FormInput
        label="Bedrijfsnaam"
        name="companyName"
        value={r.companyName || ''}
        onChange={handleChange}
        placeholder="Naam van het bedrijf"
      />
      <FormInput
        label="Contactpersoon"
        name="contactPerson"
        value={r.contactPerson || ''}
        onChange={handleChange}
        placeholder="Naam contactpersoon"
      />
      <FormInput
        label="Email"
        name="email"
        value={r.email || ''}
        onChange={handleChange}
        type="email"
        placeholder="email@klant.nl"
      />
      <FormTextarea
        label="Adres"
        name="address"
        value={r.address || ''}
        onChange={handleChange}
        placeholder="Straatnaam en nummer&#10;Postcode en Plaats&#10;Land"
        rows="3"
      />

      <MeerOpties defaultOpen={hasAdvancedFields}>
        <FormInput
          label="Telefoon (optioneel)"
          name="phone"
          value={r.phone || ''}
          onChange={handleChange}
          type="tel"
          placeholder="+31 6 12345678"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput
            label="KvK (optioneel)"
            name="kvk"
            value={r.kvk || ''}
            onChange={handleChange}
            placeholder="KVK-nummer klant"
          />
          <FormInput
            label="BTW-nummer (optioneel)"
            name="btw"
            value={r.btw || ''}
            onChange={handleChange}
            placeholder="BTW-nummer klant"
          />
        </div>
      </MeerOpties>
    </div>
  );
};

export default ReceiverDetailsForm;
