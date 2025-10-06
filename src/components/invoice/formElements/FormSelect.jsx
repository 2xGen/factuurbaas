import React from 'react';

const FormSelect = ({ label, name, value, onChange, options, className = "", selectClassName = "", disabled = false }) => (
  <div className={`w-full ${className}`}>
    {label && <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`mt-1 block w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2.5 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-150 ease-in-out shadow-sm hover:border-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed ${selectClassName}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default FormSelect;