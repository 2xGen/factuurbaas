import React from "react";
import { format } from "date-fns";
import { nl } from "date-fns/locale";
import { calculateInvoiceBreakdown } from "@/lib/invoiceUtils";

const layoutStyles = {
  plain: {
    bg: "bg-white", text: "text-gray-800", primary: "text-blue-600", secondary: "text-gray-600",
    headerBg: "bg-gray-100", tableHeaderBg: "bg-gray-50", borderColor: "border-gray-200",
    fontFamily: "font-sans", padding: "p-6 md:p-8"
  },
  modern: {
    bg: "bg-gradient-to-br from-slate-900 to-slate-800", text: "text-gray-100", primary: "text-sky-400", secondary: "text-gray-300",
    headerBg: "bg-slate-700/50", tableHeaderBg: "bg-slate-700", borderColor: "border-slate-600",
    fontFamily: "font-mono", padding: "p-6 md:p-8"
  },
  classic: {
    bg: "bg-gradient-to-br from-stone-100 to-stone-200", text: "text-gray-900", primary: "text-stone-700", secondary: "text-gray-700",
    headerBg: "bg-stone-200/50", tableHeaderBg: "bg-stone-100", borderColor: "border-stone-400",
    fontFamily: "font-serif", padding: "p-6 md:p-8"
  },
  creative: {
    bg: "bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500", text: "text-white", primary: "text-yellow-300", secondary: "text-pink-100",
    headerBg: "bg-white/10", tableHeaderBg: "bg-white/20", borderColor: "border-white/30",
    fontFamily: "font-['Comic_Sans_MS',_cursive]", padding: "p-6 md:p-8"
  },
  minimalist: {
    bg: "bg-white", text: "text-gray-700", primary: "text-black", secondary: "text-gray-500",
    headerBg: "bg-white", tableHeaderBg: "bg-white", borderColor: "border-gray-100",
    fontFamily: "font-['Helvetica_Neue',_Helvetica,_Arial,_sans-serif]", padding: "p-6 md:p-8"
  },
  corporate: {
    bg: "bg-blue-50", text: "text-gray-800", primary: "text-blue-800", secondary: "text-gray-600",
    headerBg: "bg-blue-100", tableHeaderBg: "bg-blue-200", borderColor: "border-blue-300",
    fontFamily: "font-['Arial',_sans-serif]", padding: "p-6 md:p-8"
  }
};


const InvoicePreview = React.forwardRef(({ invoice }, ref) => {
  const { subtotal, taxAmount, grandTotal } = calculateInvoiceBreakdown(invoice);
  const currentLayout = layoutStyles[invoice.layout] || layoutStyles.plain;
  const overallTaxRate = (parseFloat(invoice.tax) || 0) / 100;
  
  const getItemDisplayPriceAndTotal = (item) => {
    const itemPrice = parseFloat(item.price) || 0;
    const itemQuantity = parseInt(item.quantity) || 1;
    let displayPrice = itemPrice; 
    let lineTotal = 0;

    if (invoice.taxIncluded) { 
      lineTotal = displayPrice * itemQuantity;
    } else { 
      lineTotal = (displayPrice * (1 + overallTaxRate)) * itemQuantity;
    }
    return { displayPrice, lineTotal };
  };

  const getHourlyDisplayRateAndTotal = (log) => {
    const hourlyRate = parseFloat(invoice.amount) || 0; 
    const hours = parseFloat(log.hours) || 0;
    let displayRate = hourlyRate;
    let lineTotal = 0;

    if(invoice.taxIncluded) { 
        lineTotal = displayRate * hours;
    } else { 
        lineTotal = (displayRate * (1 + overallTaxRate)) * hours;
    }
    return { displayRate, lineTotal };
  };


  return (
    <div 
      ref={ref} 
      className={`${currentLayout.bg} ${currentLayout.fontFamily} ${currentLayout.padding} shadow-lg relative w-[210mm] h-[297mm] mx-auto my-4 md:my-0 box-border flex flex-col`} 
      style={currentLayout.extraStyle ? {backgroundImage: currentLayout.extraStyle.includes('linear-gradient') ? currentLayout.extraStyle.split(': ')[1].slice(0,-1) : 'none'} : {}}
    >
      <div style={currentLayout.contentStyle ? Object.fromEntries(currentLayout.contentStyle.split(';').filter(s => s).map(s => s.split(':'))) : {}} className="flex-grow flex flex-col">

      <div className={`flex flex-col md:flex-row justify-between items-start mb-4 md:mb-6 pb-3 ${currentLayout.borderColor} border-b`}>
        <div className="mb-3 md:mb-0">
          {invoice.logo && (
            <img
              src={invoice.logo}
              alt="Bedrijfslogo"
              className="h-10 md:h-14 max-w-[100px] md:max-w-[130px] object-contain mb-1 md:mb-2 rounded"
            />
          )}
          <h1 className={`text-lg md:text-xl font-bold ${currentLayout.primary}`}>{invoice.companyDetails?.name || "Uw Bedrijf"}</h1>
          <p className={`${currentLayout.secondary} whitespace-pre-line text-[10px] md:text-xs`}>{invoice.companyDetails?.address}</p>
          <p className={`${currentLayout.secondary} text-[10px] md:text-xs`}>KvK: {invoice.companyDetails?.kvk}</p>
          <p className={`${currentLayout.secondary} text-[10px] md:text-xs`}>BTW: {invoice.companyDetails?.btw}</p>
        </div>
        <div className="text-left md:text-right w-full md:w-auto">
          <h2 className={`text-xl md:text-2xl font-bold ${currentLayout.primary} mb-0.5 md:mb-1`}>{invoice.invoiceName || "FACTUUR"}</h2>
          <p className={`${currentLayout.secondary} text-[10px] md:text-xs`}>Datum: {invoice.invoiceDate ? format(new Date(invoice.invoiceDate), "d MMMM yyyy", { locale: nl }) : '-'}</p>
          <p className={`${currentLayout.secondary} text-[10px] md:text-xs`}>Factuurnummer: {invoice.id || "concept"}</p>
          <p className={`${currentLayout.secondary} font-semibold mt-0.5 md:mt-1 text-[10px] md:text-xs`}>
            Vervaldatum: {invoice.dueDate ? format(new Date(invoice.dueDate), "d MMMM yyyy", { locale: nl }) : '-'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-4 md:mb-6">
        <div>
          <h3 className={`font-semibold mb-0.5 md:mb-1 ${currentLayout.text} text-xs md:text-sm`}>Factuur aan:</h3>
          <p className={`font-medium ${currentLayout.text} text-xs md:text-sm`}>{invoice.receiverName}</p>
          <p className={`${currentLayout.secondary} text-[10px] md:text-xs`}>{invoice.email}</p>
          <p className={`${currentLayout.secondary} whitespace-pre-line text-[10px] md:text-xs`}>{invoice.address}</p>
        </div>
      </div>

      <div className="mb-4 md:mb-6 overflow-x-auto flex-grow">
        <table className="w-full text-[10px] md:text-xs">
          <thead className={`${currentLayout.tableHeaderBg}`}>
            <tr className={`${currentLayout.borderColor} border-b`}>
              <th className={`text-left py-1.5 px-1.5 md:px-2 font-semibold ${currentLayout.text}`}>Omschrijving</th>
              {invoice.workType === "hourly" ? (
                <>
                  <th className={`text-left py-1.5 px-1.5 md:px-2 font-semibold ${currentLayout.text} hidden sm:table-cell`}>Taak</th>
                  <th className={`text-right py-1.5 px-1.5 md:px-2 font-semibold ${currentLayout.text}`}>Datum</th>
                  <th className={`text-right py-1.5 px-1.5 md:px-2 font-semibold ${currentLayout.text}`}>Uren</th>
                  <th className={`text-right py-1.5 px-1.5 md:px-2 font-semibold ${currentLayout.text}`}>Uurtarief (${invoice.taxIncluded ? 'incl.' : 'excl.'} BTW)</th>
                </>
              ) : (
                <>
                  <th className={`text-left py-1.5 px-1.5 md:px-2 font-semibold ${currentLayout.text} hidden sm:table-cell`}>Specificatie</th>
                  <th className={`text-right py-1.5 px-1.5 md:px-2 font-semibold ${currentLayout.text}`}>Aantal</th>
                  <th className={`text-right py-1.5 px-1.5 md:px-2 font-semibold ${currentLayout.text}`}>Prijs/st. (${invoice.taxIncluded ? 'incl.' : 'excl.'} BTW)</th>
                </>
              )}
              <th className={`text-right py-1.5 px-1.5 md:px-2 font-semibold ${currentLayout.text}`}>Totaal (incl. BTW)</th>
            </tr>
          </thead>
          <tbody>
            {invoice.workType === "hourly" ? (
              (invoice.hoursWorked || []).map((log, index) => {
                const { displayRate, lineTotal } = getHourlyDisplayRateAndTotal(log);
                return (
                  <tr key={index} className={`${currentLayout.borderColor} border-b`}>
                    <td className={`py-1.5 px-1.5 md:px-2 ${currentLayout.secondary}`}>{log.taskDescription || invoice.description || '-'}</td>
                    <td className={`py-1.5 px-1.5 md:px-2 ${currentLayout.secondary} hidden sm:table-cell`}>{log.taskDescription || '-'}</td>
                    <td className={`text-right py-1.5 px-1.5 md:px-2 ${currentLayout.secondary}`}>
                      {log.date ? format(new Date(log.date), "d MMM yy", { locale: nl }) : '-'}
                    </td>
                    <td className={`text-right py-1.5 px-1.5 md:px-2 ${currentLayout.secondary}`}>{log.hours || 0}</td>
                    <td className={`text-right py-1.5 px-1.5 md:px-2 ${currentLayout.secondary}`}>€{displayRate.toFixed(2)}</td>
                    <td className={`text-right py-1.5 px-1.5 md:px-2 ${currentLayout.secondary}`}>€{lineTotal.toFixed(2)}</td>
                  </tr>
                );
              })
            ) : ( 
              (invoice.items || []).map((item, index) => {
                const { displayPrice, lineTotal } = getItemDisplayPriceAndTotal(item);
                return (
                <tr key={index} className={`${currentLayout.borderColor} border-b`}>
                  <td className={`py-1.5 px-1.5 md:px-2 ${currentLayout.secondary}`}>{item.itemName || invoice.description || '-'}</td>
                  <td className={`py-1.5 px-1.5 md:px-2 ${currentLayout.secondary} hidden sm:table-cell`}>{item.itemDescription || '-'}</td>
                  <td className={`text-right py-1.5 px-1.5 md:px-2 ${currentLayout.secondary}`}>{item.quantity || 1}</td>
                  <td className={`text-right py-1.5 px-1.5 md:px-2 ${currentLayout.secondary}`}>€{displayPrice.toFixed(2)}</td>
                  <td className={`text-right py-1.5 px-1.5 md:px-2 ${currentLayout.secondary}`}>€{lineTotal.toFixed(2)}</td>
                </tr>
                );
              })
            )}
             {invoice.workType === "hourly" && (!invoice.hoursWorked || invoice.hoursWorked.length === 0) && (
                <tr><td colSpan={invoice.workType === "hourly" ? 6 : 5} className={`py-1.5 px-1.5 md:px-2 text-center ${currentLayout.secondary}`}>Geen uren ingevoerd.</td></tr>
            )}
            {invoice.workType === "fixed" && (!invoice.items || invoice.items.length === 0) && (
                 <tr><td colSpan={invoice.workType === "hourly" ? 6 : 5} className={`py-1.5 px-1.5 md:px-2 text-center ${currentLayout.secondary}`}>Geen items ingevoerd.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mb-4 md:mb-6 mt-auto">
        <div className="w-full sm:w-56 text-[10px] md:text-xs">
          <div className={`flex justify-between mb-0.5 ${currentLayout.secondary}`}>
            <span>Subtotaal (excl. BTW)</span>
            <span>€{subtotal.toFixed(2)}</span>
          </div>
          <div className={`flex justify-between mb-0.5 ${currentLayout.secondary}`}>
            <span>BTW ({invoice.tax}%)</span>
            <span>€{taxAmount.toFixed(2)}</span>
          </div>
          <div className={`flex justify-between font-bold text-xs md:text-sm ${currentLayout.borderColor} border-t pt-1 mt-0.5 ${currentLayout.text}`}>
            <span>Totaal (incl. BTW)</span>
            <span>€{grandTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className={`${currentLayout.borderColor} border-t pt-3 md:pt-4 text-[10px] md:text-xs`}>
        <h3 className={`font-semibold mb-0.5 md:mb-1 ${currentLayout.text}`}>Betalingsgegevens</h3>
        <p className={`${currentLayout.secondary}`}>IBAN: {invoice.companyDetails?.iban}</p>
        <p className={`${currentLayout.secondary} mt-0.5 md:mt-1`}>
          Gelieve het volledige bedrag over te maken voor{" "}
          {invoice.dueDate ? format(new Date(invoice.dueDate), "d MMMM yyyy", { locale: nl }) : '-'}
        </p>
         <p className={`${currentLayout.secondary} mt-1 md:mt-2 text-[9px] md:text-[10px]`}>
          Bedankt voor uw medewerking!
        </p>
      </div>
      </div>
    </div>
  );
});

export default InvoicePreview;