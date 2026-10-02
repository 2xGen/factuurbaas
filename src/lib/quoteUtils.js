import { formatMoney, getEffectiveTaxRate, resolveLineTax } from '@/lib/invoiceConfig';
import { logToolUsage, TOOL_LOG_TABLES } from '@/lib/toolUsageLog';

function quoteAsTaxContext(quote) {
  const tax =
    quote?.tax != null && quote.tax !== ''
      ? String(quote.tax)
      : String(quote?.taxRate ?? 21);
  return {
    tax,
    customTaxRate: quote?.customTaxRate,
  };
}

function addTaxBucket(buckets, lineTax, taxAmount) {
  const key =
    lineTax.tax === 'custom' ? `custom:${lineTax.customTaxRate}` : lineTax.tax;
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

/** Same calculation model as invoices: per-line BTW + optional hours + taxIncluded. */
export function calculateQuoteBreakdown(quote) {
  if (!quote) {
    return { subtotal: 0, taxAmount: 0, grandTotal: 0, taxLines: [] };
  }

  const taxContext = quoteAsTaxContext(quote);
  const overallTaxRate = getEffectiveTaxRate(taxContext);
  let subtotalPreTax = 0;
  let totalTaxAmount = 0;
  const taxBuckets = {};

  const hoursWorked = quote.hoursWorked || [];
  const items = quote.items || [];

  if (hoursWorked.length > 0) {
    const totalHours = hoursWorked.reduce((sum, day) => sum + parseFloat(day.hours || 0), 0);
    const hourlyRate = parseFloat(quote.amount) || 0;
    const baseSubtotal = totalHours * hourlyRate;
    const lineTax = resolveLineTax(null, taxContext);
    let hoursPreTax = 0;
    let hoursTax = 0;

    if (quote.taxIncluded) {
      hoursPreTax = overallTaxRate > 0 ? baseSubtotal / (1 + overallTaxRate) : baseSubtotal;
      hoursTax = baseSubtotal - hoursPreTax;
    } else {
      hoursPreTax = baseSubtotal;
      hoursTax = hoursPreTax * overallTaxRate;
    }
    subtotalPreTax += hoursPreTax;
    totalTaxAmount += hoursTax;
    addTaxBucket(taxBuckets, lineTax, hoursTax);
  }

  items.forEach((item) => {
    const itemPrice = parseFloat(item.price) || 0;
    const itemQuantity = parseFloat(item.quantity) || 0;
    const itemBasePrice = itemPrice * itemQuantity;
    const lineTax = resolveLineTax(item, taxContext);
    let linePreTax = 0;
    let lineTaxAmount = 0;

    if (quote.taxIncluded) {
      linePreTax = lineTax.rate > 0 ? itemBasePrice / (1 + lineTax.rate) : itemBasePrice;
      lineTaxAmount = itemBasePrice - linePreTax;
    } else {
      linePreTax = itemBasePrice;
      lineTaxAmount = itemBasePrice * lineTax.rate;
    }

    subtotalPreTax += linePreTax;
    totalTaxAmount += lineTaxAmount;
    addTaxBucket(taxBuckets, lineTax, lineTaxAmount);
  });

  const taxLines = Object.values(taxBuckets).sort((a, b) => a.rate - b.rate);
  const grandTotal = subtotalPreTax + totalTaxAmount;
  return {
    subtotal: subtotalPreTax,
    taxAmount: totalTaxAmount,
    grandTotal,
    taxLines,
  };
}

export function formatQuoteMoney(amount) {
  return formatMoney(amount, 'EUR');
}

export async function exportQuotePdf(previewRef, fileName) {
  const { default: html2canvas } = await import('html2canvas');
  const { jsPDF } = await import('jspdf');

  const input = previewRef.current;
  if (!input) return false;

  const canvas = await html2canvas(input, {
    scale: 2,
    useCORS: true,
    logging: false,
    backgroundColor: '#ffffff',
  });

  const imgData = canvas.toDataURL('image/jpeg', 0.82);
  const pdf = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4', compress: true });
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
  const imgAspectRatio = canvas.width / canvas.height;
  let finalWidth = pdfWidth;
  let finalHeight = pdfWidth / imgAspectRatio;
  if (finalHeight > pdfHeight) {
    finalHeight = pdfHeight;
    finalWidth = pdfHeight * imgAspectRatio;
  }
  pdf.addImage(imgData, 'JPEG', 0, 0, finalWidth, finalHeight, undefined, 'MEDIUM');
  pdf.save(fileName);
  await logToolUsage(TOOL_LOG_TABLES.offertes);
  return true;
}
