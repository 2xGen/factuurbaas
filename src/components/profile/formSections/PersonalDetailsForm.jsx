import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const PersonalDetailsForm = ({ name, email, onInputChange, disabled }) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name" className="text-gray-700">Volledige Naam</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Jouw volledige naam"
          value={name}
          onChange={onInputChange}
          disabled={disabled}
          className="mt-1 text-gray-900 bg-white placeholder:text-gray-400"
        />
      </div>
      <div>
        <Label htmlFor="email" className="text-gray-700">E-mailadres (niet wijzigbaar)</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="jouw@email.com"
          value={email}
          readOnly
          disabled={disabled}
          className="mt-1 bg-gray-100 cursor-not-allowed text-gray-700 placeholder:text-gray-400"
        />
      </div>
    </div>
  );
};

export default PersonalDetailsForm;