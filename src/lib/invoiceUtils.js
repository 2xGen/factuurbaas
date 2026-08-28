import { differenceInDays, parseISO, isValid, toDate, addDays } from 'date-fns';
import { getEffectiveTaxRate, resolveLineTax } from '@/lib/invoiceConfig';

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
  if (invoice.status === 'paid') return { text: 'Betaald', color: 'bg-green-500', days: null };

  const dueDateParsed = parseDateSafe(invoice.dueDate);
  if (!dueDateParsed) return { text: 'Ongeldige datum', color: 'bg-gray-500', days: null };

  const daysUntilDue = differenceInDays(dueDateParsed, new Date());

  if (daysUntilDue < 0) return { text: `Verlopen (${Math.abs(daysUntilDue)}d)`, color: 'bg-red-500', days: daysUntilDue };
  if (daysUntilDue <= 7) return { text: `Vervalt over ${daysUntilDue}d`, color: 'bg-yellow-500', days: daysUntilDue };
  return { text: 'Openstaand', color: 'bg-blue-500', days: daysUntilDue };
};

function getExtraCostsTotal(invoice) {
  const costs = invoice.extraCosts || {};
  return (
    (parseFloat(costs.travel) || 0) +
    (parseFloat(costs.shipping) || 0) +
    (parseFloat(costs.material) || 0)
  );
}

function addTaxBucket(buckets, lineTax, taxAmount) {
  const key =
    lineTax.tax === 'custom'
      ? `custom:${lineTax.customTaxRate}`
      : lineTax.tax;
  if (!buckets[key]) {
    buckets[key] = {
      key,
      tax: lineTax.tax,
      customTaxRate: lineTax.customTaxRate,
      rate: lineTax.rate,
      label: lineTax.label,
      amount: 0,
    };
  }
  buckets[key].amount += taxAmount;
}

export const calculateInvoiceBreakdown = (invoice) => {
  if (!invoice) {
    return { subtotal: 0, taxAmount: 0, extraCostsTotal: 0, grandTotal: 0, taxLines: [] };
  }

  let subtotalPreTax = 0;
  let totalTaxAmount = 0;
  const overallTaxRate = getEffectiveTaxRate(invoice);
  const extraCostsTotal = getExtraCostsTotal(invoice);
  const taxBuckets = {};

  if (invoice.workType === 'hourly') {
    const totalHours = (invoice.hoursWorked || []).reduce(
      (sum, day) => sum + parseFloat(day.hours || 0),
      0
    );
    const hourlyRate = parseFloat(invoice.amount) || 0;
    const baseSubtotal = totalHours * hourlyRate;
    const lineTax = resolveLineTax(null, invoice);

    if (invoice.taxIncluded) {
      subtotalPreTax = overallTaxRate > 0 ? baseSubtotal / (1 + overallTaxRate) : baseSubtotal;
      totalTaxAmount = baseSubtotal - subtotalPreTax;
    } else {
      subtotalPreTax = baseSubtotal;
      totalTaxAmount = subtotalPreTax * overallTaxRate;
    }
    addTaxBucket(taxBuckets, lineTax, totalTaxAmount);
  } else {
    (invoice.items || []).forEach((item) => {
      const itemPrice = parseFloat(item.price) || 0;
      const itemQuantity = parseInt(item.quantity, 10) || 1;
      const itemBasePrice = itemPrice * itemQuantity;
      const lineTax = resolveLineTax(item, invoice);
      let linePreTax = 0;
      let lineTaxAmount = 0;

      if (invoice.taxIncluded) {
        linePreTax =
          lineTax.rate > 0 ? itemBasePrice / (1 + lineTax.rate) : itemBasePrice;
        lineTaxAmount = itemBasePrice - linePreTax;
      } else {
        linePreTax = itemBasePrice;
        lineTaxAmount = itemBasePrice * lineTax.rate;
      }

      subtotalPreTax += linePreTax;
      totalTaxAmount += lineTaxAmount;
      addTaxBucket(taxBuckets, lineTax, lineTaxAmount);
    });
  }

  const extraLineTax = resolveLineTax(null, invoice);
  if (extraCostsTotal > 0) {
    if (!invoice.taxIncluded) {
      subtotalPreTax += extraCostsTotal;
      const extraTax = extraCostsTotal * overallTaxRate;
      totalTaxAmount += extraTax;
      addTaxBucket(taxBuckets, extraLineTax, extraTax);
    } else if (overallTaxRate > 0) {
      const extraPreTax = extraCostsTotal / (1 + overallTaxRate);
      const extraTax = extraCostsTotal - extraPreTax;
      subtotalPreTax += extraPreTax;
      totalTaxAmount += extraTax;
      addTaxBucket(taxBuckets, extraLineTax, extraTax);
    } else {
      subtotalPreTax += extraCostsTotal;
      addTaxBucket(taxBuckets, extraLineTax, 0);
    }
  }

  const taxLines = Object.values(taxBuckets).sort((a, b) => a.rate - b.rate);
  const grandTotal = subtotalPreTax + totalTaxAmount;
  return {
    subtotal: subtotalPreTax,
    taxAmount: totalTaxAmount,
    extraCostsTotal,
    grandTotal,
    taxLines,
  };
};

export const calculateInvoiceTotal = (invoice) => {
  const { grandTotal } = calculateInvoiceBreakdown(invoice);
  return grandTotal;
};

export function calculateDueDate(invoiceDate, paymentTermDays) {
  if (!invoiceDate || paymentTermDays === 'custom') return null;
  const days = parseInt(paymentTermDays, 10);
  if (!days) return null;
  return addDays(new Date(invoiceDate), days);
}

export function getPaymentTermsText(paymentTermDays, pdfLanguage = 'nl') {
  if (paymentTermDays === 'custom') return '';
  const days = parseInt(paymentTermDays, 10);
  if (!days) return '';
  return pdfLanguage === 'en'
    ? `Payment within ${days} days.`
    : `Betaling binnen ${days} dagen.`;
}
