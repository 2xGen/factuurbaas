import React from 'react';

const FormTextarea = ({ label, name, value, onChange, placeholder, rows = 2, disabled = false, className = "" }) => (
  <div>
    {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      className={`mt-1 block w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2.5 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-150 ease-in-out shadow-sm hover:border-gray-400 ${className}`}
    />
  </div>
);

export default FormTextarea;