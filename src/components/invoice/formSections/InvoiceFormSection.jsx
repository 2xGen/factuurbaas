import React from 'react';

const InvoiceFormSection = ({ title, step, children, className = '', description }) => (
  <div className={`mb-8 rounded-xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6 ${className}`}>
    <div className="mb-5 border-b border-gray-100 pb-3">
      {step != null && (
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Stap {step}
        </p>
      )}
      <h2 className="font-heading text-xl font-semibold text-deep-blue">{title}</h2>
      {description ? <p className="mt-1 text-sm text-slate-500">{description}</p> : null}
    </div>
    <div className="space-y-5">{children}</div>
  </div>
);

export default InvoiceFormSection;
