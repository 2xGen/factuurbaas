import React from 'react';

const TextareaField = ({ label, name, value, onChange }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <textarea
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      rows="3"
      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-orange focus:border-transparent transition-shadow shadow-sm"
    />
  </div>
);

export default TextareaField;