import React from 'react';

const InputField = ({ label, name, type = 'text', value, onChange, readOnly = false }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-orange focus:border-transparent transition-shadow shadow-sm ${readOnly ? 'bg-gray-100 cursor-not-allowed' : ''}`}
    />
  </div>
);

export default InputField;