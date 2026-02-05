import React from 'react';

const InvoiceFormSection = ({ title, children, className = "" }) => (
  <div className={`mb-10 ${className} bg-white p-6 rounded-lg shadow-sm border border-gray-100`}>
    <h2 className="text-xl font-heading font-semibold mb-6 text-deep-blue pb-3 border-b border-gray-200">{title}</h2>
    <div className="space-y-6">{children}</div>
  </div>
);

export default InvoiceFormSection;