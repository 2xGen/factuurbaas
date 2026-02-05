import React from 'react';
import FormInput from "@/components/invoice/formElements/FormInput";
import FormTextarea from "@/components/invoice/formElements/FormTextarea";
// Checkbox and Label removed

const ReceiverDetailsForm = ({ 
  receiverName, 
  email, 
  address, 
  onInputChange, 
  // saveContactChecked, setSaveContactChecked, userLoggedIn removed
}) => {
  return (
    <div className="space-y-4">
      <FormInput label="Naam ontvanger" name="receiverName" value={receiverName} onChange={onInputChange} placeholder="Naam van de klant" />
      <FormInput label="Email ontvanger" name="email" value={email} onChange={onInputChange} type="email" placeholder="Email van de klant" />
      <FormTextarea label="Adres ontvanger" name="address" value={address} onChange={onInputChange} placeholder="Straatnaam en nummer&#10;Postcode en Plaats&#10;Land" rows="3" />
      
      {/* Save contact checkbox removed */}
    </div>
  );
};

export default ReceiverDetailsForm;