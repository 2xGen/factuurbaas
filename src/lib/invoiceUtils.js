import { differenceInDays, parseISO, isValid, toDate } from "date-fns";

export const ensureDateString = (dateInput) => {
  if (typeof dateInput === 'string') return dateInput;
  if (dateInput instanceof Date && isValid(dateInput)) return dateInput.toISOString();
  return new Date().toISOString(); 
};

export const parseDateSafe = (dateInput) => {
  const dateString = ensureDateString(dateInput);
  let parsedDate = parseISO(dateString);
  if (!isValid(parsedDate)) {
    parsedDate = toDate(dateString); 
  }
  return isValid(parsedDate) ? parsedDate : null;
};

export const getStatusInfo = (invoice) => {
  if (invoice.status === "paid") return { text: "Betaald", color: "bg-green-500", days: null };
  
  const dueDateParsed = parseDateSafe(invoice.dueDate);
  if (!dueDateParsed) return { text: "Ongeldige datum", color: "bg-gray-500", days: null };

  const daysUntilDue = differenceInDays(dueDateParsed, new Date());

  if (daysUntilDue < 0) return { text: `Verlopen (${Math.abs(daysUntilDue)}d)`, color: "bg-red-500", days: daysUntilDue };
  if (daysUntilDue <= 7) return { text: `Vervalt over ${daysUntilDue}d`, color: "bg-yellow-500", days: daysUntilDue };
  return { text: "Openstaand", color: "bg-blue-500", days: daysUntilDue };
};

export const calculateInvoiceBreakdown = (invoice) => {
  if (!invoice) return { subtotal: 0, taxAmount: 0, grandTotal: 0 };

  let subtotalPreTax = 0;
  let totalTaxAmount = 0;
  const overallTaxRate = (parseFloat(invoice.tax) || 0) / 100;

  if (invoice.workType === "hourly") {
    const totalHours = (invoice.hoursWorked || []).reduce((sum, day) => sum + parseFloat(day.hours || 0), 0);
    const hourlyRate = parseFloat(invoice.amount) || 0;
    const baseSubtotal = totalHours * hourlyRate;

    if (invoice.taxIncluded) {
      subtotalPreTax = baseSubtotal / (1 + overallTaxRate);
      totalTaxAmount = baseSubtotal - subtotalPreTax;
    } else {
      subtotalPreTax = baseSubtotal;
      totalTaxAmount = subtotalPreTax * overallTaxRate;
    }
  } else { // fixed
    (invoice.items || []).forEach(item => {
      const itemPrice = parseFloat(item.price) || 0;
      const itemQuantity = parseInt(item.quantity) || 1;
      const itemBasePrice = itemPrice * itemQuantity;

      if (invoice.taxIncluded) { 
        const itemPricePreTax = itemBasePrice / (1 + overallTaxRate);
        totalTaxAmount += itemBasePrice - itemPricePreTax;
        subtotalPreTax += itemPricePreTax;
      } else { 
        subtotalPreTax += itemBasePrice;
        totalTaxAmount += itemBasePrice * overallTaxRate;
      }
    });
  }
  
  const grandTotal = subtotalPreTax + totalTaxAmount;
  return { subtotal: subtotalPreTax, taxAmount: totalTaxAmount, grandTotal };
};


export const calculateInvoiceTotal = (invoice) => {
  const { grandTotal } = calculateInvoiceBreakdown(invoice);
  return grandTotal;
};