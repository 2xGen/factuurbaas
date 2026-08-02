import React from 'react';
import FormInput from '@/components/invoice/formElements/FormInput';
import MeerOpties from '@/components/invoice/formElements/MeerOpties';
import ClientPicker from '@/components/invoice/ClientPicker';

const ReceiverDetailsForm = ({ receiverDetails, onInputChange, isLoggedIn, onApplyReceiver }) => {
  const handleChange = (e) => {
    onInputChange({
      target: {
        name: e.target.name,
        value: e.target.value,
        dataset: { section: 'receiverDetails' },
      },
    });
  };

const applyClient = (details) => {
    if (onApplyReceiver) {
      onApplyReceiver(details);
      return;
    }
    Object.entries(details).forEach(([name, value]) => {
      onInputChange({
        target: {
          name,
          value: value || '',
          dataset: { section: 'receiverDetails' },
        },
      });
    });
  };

  const r = receiverDetails || {};
  const hasAdvancedFields = Boolean(r.phone || r.kvk || r.btw);

  return (
    <div className="space-y-4">
      {isLoggedIn && (
        <ClientPicker receiverDetails={receiverDetails} onApply={applyClient} />
      )}

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
      <FormInput
        label="Straatnaam en nummer"
        name="street"
        value={r.street || ''}
        onChange={handleChange}
        placeholder="Bijv. Hoofdstraat 12"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormInput
          label="Postcode"
          name="postalCode"
          value={r.postalCode || ''}
          onChange={handleChange}
          placeholder="1234 AB"
        />
        <FormInput
          label="Plaats"
          name="city"
          value={r.city || ''}
          onChange={handleChange}
          placeholder="Amsterdam"
        />
      </div>
      <FormInput
        label="Land"
        name="country"
        value={r.country || ''}
        onChange={handleChange}
        placeholder="Nederland"
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
