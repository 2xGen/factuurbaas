import React from 'react';
import { format } from 'date-fns';
import { nl, enGB } from 'date-fns/locale';
import { calculateInvoiceBreakdown } from '@/lib/invoiceUtils';
import { formatMoney, getEffectiveTaxRate, getTaxDisplayLabel, resolveLineTax, INVOICE_LABELS, formatCompanyAddress, formatReceiverAddress } from '@/lib/invoiceConfig';
import PdfBrandingFooter from '@/components/shared/PdfBrandingFooter';

const layoutStyles = {
  plain: {
    bg: 'bg-white', text: 'text-gray-800', primary: 'text-blue-600', secondary: 'text-gray-600',
    headerBg: 'bg-gray-100', tableHeaderBg: 'bg-gray-50', borderColor: 'border-gray-200',
    fontFamily: 'font-sans', padding: 'p-6 md:p-8',
  },
  modern: {
    bg: 'bg-gradient-to-br from-slate-900 to-slate-800', text: 'text-gray-100', primary: 'text-sky-400', secondary: 'text-gray-300',
    headerBg: 'bg-slate-700/50', tableHeaderBg: 'bg-slate-700', borderColor: 'border-slate-600',
    fontFamily: 'font-mono', padding: 'p-6 md:p-8',
  },
  classic: {
    bg: 'bg-gradient-to-br from-stone-100 to-stone-200', text: 'text-gray-900', primary: 'text-stone-700', secondary: 'text-gray-700',
    headerBg: 'bg-stone-200/50', tableHeaderBg: 'bg-stone-100', borderColor: 'border-stone-400',
    fontFamily: 'font-serif', padding: 'p-6 md:p-8',
  },
  creative: {
    bg: 'bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500', text: 'text-white', primary: 'text-yellow-300', secondary: 'text-pink-100',
    headerBg: 'bg-white/10', tableHeaderBg: 'bg-white/20', borderColor: 'border-white/30',
    fontFamily: "font-['Comic_Sans_MS',_cursive]", padding: 'p-6 md:p-8',
  },
  minimalist: {
    bg: 'bg-white', text: 'text-gray-700', primary: 'text-black', secondary: 'text-gray-500',
    headerBg: 'bg-white', tableHeaderBg: 'bg-white', borderColor: 'border-gray-100',
    fontFamily: "font-['Helvetica_Neue',_Helvetica,_Arial,_sans-serif]", padding: 'p-6 md:p-8',
  },
  corporate: {
    bg: 'bg-blue-50', text: 'text-gray-800', primary: 'text-blue-800', secondary: 'text-gray-600',
    headerBg: 'bg-blue-100', tableHeaderBg: 'bg-blue-200', borderColor: 'border-blue-300',
    fontFamily: "font-['Arial',_sans-serif]", padding: 'p-6 md:p-8',
  },
};

const InvoicePreview = React.forwardRef(({ invoice }, ref) => {
  const { subtotal, taxAmount, grandTotal, taxLines = [] } = calculateInvoiceBreakdown(invoice);
  const currentLayout = layoutStyles[invoice.layout] || layoutStyles.plain;
  const overallTaxRate = getEffectiveTaxRate(invoice);
  const lang = invoice.pdfLanguage || 'nl';
  const labels = INVOICE_LABELS[lang] || INVOICE_LABELS.nl;
  const dateLocale = lang === 'en' ? enGB : nl;
  const currency = invoice.currency || 'EUR';
  const receiver = invoice.receiverDetails || {
    companyName: invoice.receiverName || '',
    contactPerson: '',
    email: invoice.email || '',
    phone: '',
    street: '',
    postalCode: '',
    city: '',
    country: '',
    address: invoice.address || '',
    kvk: '',
    btw: '',
  };
  const receiverAddress = formatReceiverAddress(receiver);
  const extra = invoice.extraCosts || {};
  const vatLabel = invoice.tax === 'exempt' || invoice.tax === 'reverse';
  const showPerLineVat =
    invoice.workType === 'fixed' && !vatLabel && taxLines.length > 1;

  const fmt = (amount) => formatMoney(amount, currency);

  const getItemDisplayPriceAndTotal = (item) => {
    const itemPrice = parseFloat(item.price) || 0;
    const itemQuantity = parseInt(item.quantity, 10) || 1;
    const displayPrice = itemPrice;
    const { rate } = resolveLineTax(item, invoice);
    const lineTotal = invoice.taxIncluded
      ? displayPrice * itemQuantity
      : displayPrice * (1 + rate) * itemQuantity;
    return { displayPrice, lineTotal, vatPctLabel: resolveLineTax(item, invoice).label };
  };

  const getHourlyDisplayRateAndTotal = (log) => {
    const hourlyRate = parseFloat(invoice.amount) || 0;
    const hours = parseFloat(log.hours) || 0;
    const lineTotal = invoice.taxIncluded
      ? hourlyRate * hours
      : hourlyRate * (1 + overallTaxRate) * hours;
    return { displayRate: hourlyRate, lineTotal };
  };

  const extraRows = [
    { key: 'travel', label: labels.travelCosts, value: parseFloat(extra.travel) || 0 },
    { key: 'shipping', label: labels.shippingCosts, value: parseFloat(extra.shipping) || 0 },
    { key: 'material', label: labels.materialCosts, value: parseFloat(extra.material) || 0 },
  ].filter((row) => row.value > 0);

  return (
    <div
      ref={ref}
      className={`${currentLayout.bg} ${currentLayout.fontFamily} ${currentLayout.padding} shadow-lg relative w-[210mm] h-[297mm] mx-auto my-4 md:my-0 box-border flex flex-col`}
    >
      <div className="flex-grow flex flex-col">
        <div className={`flex flex-col md:flex-row justify-between items-start mb-4 md:mb-6 pb-3 ${currentLayout.borderColor} border-b`}>
          <div className="mb-3 md:mb-0">
            {invoice.logo && (
              <img
                src={invoice.logo}
                alt="Logo"
                className="h-10 md:h-14 max-w-[100px] md:max-w-[130px] object-contain mb-1 md:mb-2 rounded"
              />
            )}
            <h1 className={`text-lg md:text-xl font-bold ${currentLayout.primary}`}>
              {invoice.companyDetails?.name || 'Uw Bedrijf'}
            </h1>
            <p className={`${currentLayout.secondary} whitespace-pre-line text-[10px] md:text-xs`}>
              {formatCompanyAddress(invoice.companyDetails)}
            </p>
            {invoice.companyDetails?.kvk && (
              <p className={`${currentLayout.secondary} text-[10px] md:text-xs`}>
                {labels.kvk}: {invoice.companyDetails.kvk}
              </p>
            )}
            {invoice.companyDetails?.btw && (
              <p className={`${currentLayout.secondary} text-[10px] md:text-xs`}>
                {labels.btw}: {invoice.companyDetails.btw}
              </p>
            )}
            {invoice.companyDetails?.email && (
              <p className={`${currentLayout.secondary} text-[10px] md:text-xs`}>
                {labels.email}: {invoice.companyDetails.email}
              </p>
            )}
          </div>
          <div className="text-left md:text-right w-full md:w-auto">
            <h2 className={`text-xl md:text-2xl font-bold ${currentLayout.primary} mb-0.5 md:mb-1`}>
              {invoice.invoiceName || labels.invoice}
            </h2>
            <p className={`${currentLayout.secondary} text-[10px] md:text-xs`}>
              {labels.date}: {invoice.invoiceDate ? format(new Date(invoice.invoiceDate), 'd MMMM yyyy', { locale: dateLocale }) : '-'}
            </p>
            <p className={`${currentLayout.secondary} text-[10px] md:text-xs`}>
              {labels.invoiceNumber}: {invoice.invoice_number || invoice.id || 'concept'}
            </p>
            <p className={`${currentLayout.secondary} font-semibold mt-0.5 md:mt-1 text-[10px] md:text-xs`}>
              {labels.dueDate}: {invoice.dueDate ? format(new Date(invoice.dueDate), 'd MMMM yyyy', { locale: dateLocale }) : '-'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-4 md:mb-6">
          <div>
            <h3 className={`font-semibold mb-0.5 md:mb-1 ${currentLayout.text} text-xs md:text-sm`}>
              {labels.billTo}:
            </h3>
            {receiver.companyName && (
              <p className={`font-medium ${currentLayout.text} text-xs md:text-sm`}>{receiver.companyName}</p>
            )}
            {receiver.contactPerson && (
              <p className={`${currentLayout.secondary} text-[10px] md:text-xs`}>
                {labels.contactPerson} {receiver.contactPerson}
              </p>
            )}
            {receiver.email && (
              <p className={`${currentLayout.secondary} text-[10px] md:text-xs`}>{receiver.email}</p>
            )}
            {receiver.phone && (
              <p className={`${currentLayout.secondary} text-[10px] md:text-xs`}>
                {labels.phone} {receiver.phone}
              </p>
            )}
            {receiverAddress && (
              <p className={`${currentLayout.secondary} whitespace-pre-line text-[10px] md:text-xs`}>{receiverAddress}</p>
            )}
            {receiver.kvk && (
              <p className={`${currentLayout.secondary} text-[10px] md:text-xs`}>{labels.kvk}: {receiver.kvk}</p>
            )}
            {receiver.btw && (
              <p className={`${currentLayout.secondary} text-[10px] md:text-xs`}>{labels.btw}: {receiver.btw}</p>
            )}
          </div>
        </div>

        <div className="mb-4 md:mb-6 overflow-x-auto flex-grow">
          <table className="w-full text-[10px] md:text-xs">
            <thead className={currentLayout.tableHeaderBg}>
              <tr className={`${currentLayout.borderColor} border-b`}>
                <th className={`text-left py-1.5 px-1.5 md:px-2 font-semibold ${currentLayout.text}`}>{labels.description}</th>
                {invoice.workType === 'hourly' ? (
                  <>
                    <th className={`text-right py-1.5 px-1.5 md:px-2 font-semibold ${currentLayout.text}`}>{labels.hours}</th>
                    <th className={`text-right py-1.5 px-1.5 md:px-2 font-semibold ${currentLayout.text}`}>
                      {labels.pricePerHour} ({invoice.taxIncluded ? labels.inclVat : labels.exclVat} {labels.vat})
                    </th>
                  </>
                ) : (
                  <>
                    <th className={`text-right py-1.5 px-1.5 md:px-2 font-semibold ${currentLayout.text}`}>{labels.quantity}</th>
                    <th className={`text-right py-1.5 px-1.5 md:px-2 font-semibold ${currentLayout.text}`}>
                      {labels.pricePerUnit} ({invoice.taxIncluded ? labels.inclVat : labels.exclVat} {labels.vat})
                    </th>
                    {showPerLineVat && (
                      <th className={`text-right py-1.5 px-1.5 md:px-2 font-semibold ${currentLayout.text}`}>
                        {labels.vat}
                      </th>
                    )}
                  </>
                )}
                <th className={`text-right py-1.5 px-1.5 md:px-2 font-semibold ${currentLayout.text}`}>{labels.totalInclVat}</th>
              </tr>
            </thead>
            <tbody>
              {invoice.workType === 'hourly'
                ? (invoice.hoursWorked || []).map((log, index) => {
                    const { displayRate, lineTotal } = getHourlyDisplayRateAndTotal(log);
                    return (
                      <tr key={index} className={`${currentLayout.borderColor} border-b`}>
                        <td className={`py-1.5 px-1.5 md:px-2 ${currentLayout.secondary}`}>
                          {log.taskDescription || '-'}
                          {log.date && (
                            <span className="block text-[9px] opacity-75">
                              {format(new Date(log.date), 'd MMM yy', { locale: dateLocale })}
                            </span>
                          )}
                        </td>
                        <td className={`text-right py-1.5 px-1.5 md:px-2 ${currentLayout.secondary}`}>{log.hours || 0}</td>
                        <td className={`text-right py-1.5 px-1.5 md:px-2 ${currentLayout.secondary}`}>{fmt(displayRate)}</td>
                        <td className={`text-right py-1.5 px-1.5 md:px-2 ${currentLayout.secondary}`}>{fmt(lineTotal)}</td>
                      </tr>
                    );
                  })
                : (invoice.items || []).map((item, index) => {
                    const { displayPrice, lineTotal, vatPctLabel } = getItemDisplayPriceAndTotal(item);
                    return (
                      <tr key={index} className={`${currentLayout.borderColor} border-b`}>
                        <td className={`py-1.5 px-1.5 md:px-2 ${currentLayout.secondary}`}>
                          {item.itemName || '-'}
                          {item.itemDescription && (
                            <span className="block text-[9px] opacity-75">{item.itemDescription}</span>
                          )}
                        </td>
                        <td className={`text-right py-1.5 px-1.5 md:px-2 ${currentLayout.secondary}`}>{item.quantity || 1}</td>
                        <td className={`text-right py-1.5 px-1.5 md:px-2 ${currentLayout.secondary}`}>{fmt(displayPrice)}</td>
                        {showPerLineVat && (
                          <td className={`text-right py-1.5 px-1.5 md:px-2 ${currentLayout.secondary}`}>
                            {vatPctLabel}
                          </td>
                        )}
                        <td className={`text-right py-1.5 px-1.5 md:px-2 ${currentLayout.secondary}`}>{fmt(lineTotal)}</td>
                      </tr>
                    );
                  })}
              {extraRows.map((row) => (
                <tr key={row.key} className={`${currentLayout.borderColor} border-b`}>
                  <td
                    className={`py-1.5 px-1.5 md:px-2 ${currentLayout.secondary}`}
                    colSpan={invoice.workType === 'hourly' ? 3 : showPerLineVat ? 4 : 3}
                  >
                    {row.label}
                  </td>
                  <td className={`text-right py-1.5 px-1.5 md:px-2 ${currentLayout.secondary}`}>{fmt(row.value)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mb-4 md:mb-6 mt-auto">
          <div className="w-full sm:w-56 text-[10px] md:text-xs">
            <div className={`flex justify-between mb-0.5 ${currentLayout.secondary}`}>
              <span>{labels.subtotalExclVat}</span>
              <span>{fmt(subtotal)}</span>
            </div>
            {vatLabel ? (
              <div className={`mb-0.5 text-[9px] md:text-[10px] ${currentLayout.secondary}`}>
                {getTaxDisplayLabel(invoice, labels)}
              </div>
            ) : taxLines.length > 0 ? (
              taxLines.map((line) => (
                <div
                  key={line.key}
                  className={`flex justify-between mb-0.5 ${currentLayout.secondary}`}
                >
                  <span>
                    {labels.vat} ({line.label})
                  </span>
                  <span>{fmt(line.amount)}</span>
                </div>
              ))
            ) : (
              <div className={`flex justify-between mb-0.5 ${currentLayout.secondary}`}>
                <span>{getTaxDisplayLabel(invoice, labels)}</span>
                <span>{fmt(taxAmount)}</span>
              </div>
            )}
            <div className={`flex justify-between font-bold text-xs md:text-sm ${currentLayout.borderColor} border-t pt-1 mt-0.5 ${currentLayout.text}`}>
              <span>{labels.total}</span>
              <span>{fmt(grandTotal)}</span>
            </div>
          </div>
        </div>

        {(invoice.notes || invoice.terms) && (
          <div className={`mb-3 text-[10px] md:text-xs ${currentLayout.secondary}`}>
            {invoice.notes && (
              <p><span className="font-semibold">{labels.notes}:</span> {invoice.notes}</p>
            )}
            {invoice.terms && (
              <p className="mt-1"><span className="font-semibold">{labels.terms}:</span> {invoice.terms}</p>
            )}
          </div>
        )}

        <div className={`${currentLayout.borderColor} border-t pt-3 md:pt-4 text-[10px] md:text-xs`}>
          <h3 className={`font-semibold mb-0.5 md:mb-1 ${currentLayout.text}`}>{labels.paymentDetails}</h3>
          <p className={currentLayout.secondary}>
            {labels.iban}: {invoice.companyDetails?.iban}
          </p>
          <p className={`${currentLayout.secondary} mt-0.5 md:mt-1`}>
            {labels.paymentDue}{' '}
            {invoice.dueDate ? format(new Date(invoice.dueDate), 'd MMMM yyyy', { locale: dateLocale }) : '-'}
          </p>
          <p className={`${currentLayout.secondary} mt-1 md:mt-2 text-[9px] md:text-[10px]`}>{labels.thanks}</p>
        </div>

        <PdfBrandingFooter
          showBranding={invoice.showFactuurBaasBranding !== false}
          language={lang}
          className={currentLayout.secondary}
        />
      </div>
    </div>
  );
});

export default InvoicePreview;
