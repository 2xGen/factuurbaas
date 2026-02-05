import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormDatePicker = ({ label, selected, onChange, minDate, dateFormat = "dd/MM/yyyy", className = "" }) => (
   <div>
    {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
    <DatePicker
      selected={selected}
      onChange={onChange}
      className={`mt-1 block w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2.5 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-150 ease-in-out shadow-sm hover:border-gray-400 ${className}`}
      dateFormat={dateFormat}
      minDate={minDate}
      popperPlacement="bottom-start"
    />
  </div>
);

export default FormDatePicker;