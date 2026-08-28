import { formatMoney } from '@/lib/invoiceConfig';
import { logToolUsage, TOOL_LOG_TABLES } from '@/lib/toolUsageLog';

export function calculateQuoteBreakdown(quote) {
  const items = quote?.items || [];
  const subtotal = items.reduce((sum, item) => {
    const qty = parseFloat(item.quantity) || 0;
    const price = parseFloat(item.price) || 0;
    return sum + qty * price;
  }, 0);
  const rate = (parseFloat(quote?.taxRate) || 0) / 100;
  const taxAmount = subtotal * rate;
  const grandTotal = subtotal + taxAmount;
  return { subtotal, taxAmount, grandTotal };
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
