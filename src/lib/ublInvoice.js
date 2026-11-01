import { resolveLineTax, INVOICE_LABELS } from '@/lib/invoiceConfig';

const COUNTRY_CODES = {
  nederland: 'NL',
  netherlands: 'NL',
  holland: 'NL',
  nl: 'NL',
  belgie: 'BE',
  belgië: 'BE',
  belgium: 'BE',
  be: 'BE',
  duitsland: 'DE',
  germany: 'DE',
  de: 'DE',
  frankrijk: 'FR',
  france: 'FR',
  fr: 'FR',
  spanje: 'ES',
  spain: 'ES',
  italie: 'IT',
  italië: 'IT',
  italy: 'IT',
  oostenrijk: 'AT',
  austria: 'AT',
  luxemburg: 'LU',
  luxembourg: 'LU',
  polen: 'PL',
  poland: 'PL',
};

function round2(value) {
  return Math.round((Number(value) || 0) * 100) / 100;
}

function money(value) {
  return round2(value).toFixed(2);
}

function escapeXml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatIsoDate(value) {
  if (!value) return null;
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function countryCode(name) {
  const key = String(name || '').trim().toLowerCase();
  if (!key || key === 'nederland') return 'NL';
  return COUNTRY_CODES[key] || null;
}

function compactId(value) {
  return String(value || '').replace(/\s+/g, '').toUpperCase();
}

function taxCategory(lineTax) {
  if (lineTax.tax === 'exempt') {
    return { id: 'E', percent: 0, reason: 'Vrijgesteld' };
  }
  if (lineTax.tax === 'reverse') {
    return { id: 'AE', percent: 0, reason: 'BTW verlegd' };
  }
  if (!lineTax.rate) {
    return { id: 'Z', percent: 0 };
  }
  return { id: 'S', percent: round2(lineTax.rate * 100) };
}

function lineAmounts(quantity, unitPrice, rate, taxIncluded) {
  const qty = Number(quantity) || 0;
  const entered = Number(unitPrice) || 0;
  if (taxIncluded) {
    const gross = round2(qty * entered);
    const lineNet = rate > 0 ? round2(gross / (1 + rate)) : gross;
    return {
      lineNet,
      taxAmount: round2(gross - lineNet),
      unitExcl: qty ? lineNet / qty : 0,
    };
  }
  const lineNet = round2(qty * entered);
  return {
    lineNet,
    taxAmount: round2(lineNet * rate),
    unitExcl: entered,
  };
}

function collectLines(invoice) {
  const labels = INVOICE_LABELS[invoice.pdfLanguage || 'nl'] || INVOICE_LABELS.nl;
  const lines = [];
  const taxIncluded = Boolean(invoice.taxIncluded);

  (invoice.hoursWorked || []).forEach((log) => {
    const hours = parseFloat(log.hours) || 0;
    const name = String(log.taskDescription || '').trim();
    if (!hours) return;
    const lineTax = resolveLineTax(null, invoice);
    const amounts = lineAmounts(hours || 0, invoice.amount, lineTax.rate, taxIncluded);
    lines.push({
      name: name || labels.hours,
      quantity: hours || 0,
      unitCode: 'HUR',
      ...amounts,
      category: taxCategory(lineTax),
    });
  });

  (invoice.items || []).forEach((item) => {
    const name = String(item.itemName || '').trim();
    const description = String(item.itemDescription || '').trim();
    const quantity = parseInt(item.quantity, 10) || 1;
    const price = parseFloat(item.price) || 0;
    if (!name && !description && !price) return;
    const lineTax = resolveLineTax(item, invoice);
    const amounts = lineAmounts(quantity, price, lineTax.rate, taxIncluded);
    lines.push({
      name: name || description || 'Factuurregel',
      description: name && description ? description : '',
      quantity,
      unitCode: 'C62',
      ...amounts,
      category: taxCategory(lineTax),
    });
  });

  const extra = invoice.extraCosts || {};
  const extraTax = resolveLineTax(null, invoice);
  [
    ['travel', labels.travelCosts],
    ['shipping', labels.shippingCosts],
    ['material', labels.materialCosts],
  ].forEach(([key, label]) => {
    const amount = parseFloat(extra[key]) || 0;
    if (!amount) return;
    const amounts = lineAmounts(1, amount, extraTax.rate, taxIncluded);
    lines.push({
      name: label,
      quantity: 1,
      unitCode: 'C62',
      ...amounts,
      category: taxCategory(extraTax),
    });
  });

  if (!lines.length) {
    const lineTax = resolveLineTax(null, invoice);
    lines.push({
      name: 'Factuur',
      quantity: 1,
      unitCode: 'C62',
      lineNet: 0,
      taxAmount: 0,
      unitExcl: 0,
      category: taxCategory(lineTax),
    });
  }

  return lines;
}

function partyXml(details, { fallbackName, isSupplier }) {
  const name = String(details?.name || details?.companyName || fallbackName || '').trim();
  const kvk = compactId(details?.kvk);
  const btw = compactId(details?.btw);
  const street = String(details?.street || '').trim();
  const city = String(details?.city || '').trim();
  const postal = String(details?.postalCode || '').trim();
  const country = countryCode(details?.country);
  const email = String(details?.email || '').trim();
  const phone = String(details?.phone || '').trim();
  const contact = String(details?.contactPerson || '').trim();

  const parts = ['<cac:Party>'];
  if (isSupplier && kvk) {
    parts.push(`<cac:PartyIdentification><cbc:ID schemeID="0106">${escapeXml(kvk)}</cbc:ID></cac:PartyIdentification>`);
  } else if (!isSupplier && kvk) {
    parts.push(`<cac:PartyIdentification><cbc:ID>${escapeXml(kvk)}</cbc:ID></cac:PartyIdentification>`);
  }
  if (name) {
    parts.push(`<cac:PartyName><cbc:Name>${escapeXml(name)}</cbc:Name></cac:PartyName>`);
  }
  if (street || city || postal || country) {
    parts.push('<cac:PostalAddress>');
    if (street) parts.push(`<cbc:StreetName>${escapeXml(street)}</cbc:StreetName>`);
    if (city) parts.push(`<cbc:CityName>${escapeXml(city)}</cbc:CityName>`);
    if (postal) parts.push(`<cbc:PostalZone>${escapeXml(postal)}</cbc:PostalZone>`);
    if (country) {
      parts.push(`<cac:Country><cbc:IdentificationCode>${country}</cbc:IdentificationCode></cac:Country>`);
    }
    parts.push('</cac:PostalAddress>');
  }
  if (btw) {
    parts.push(
      `<cac:PartyTaxScheme><cbc:CompanyID>${escapeXml(btw)}</cbc:CompanyID><cac:TaxScheme><cbc:ID>VAT</cbc:ID></cac:TaxScheme></cac:PartyTaxScheme>`
    );
  }
  if (contact || email || phone) {
    parts.push('<cac:Contact>');
    if (contact) parts.push(`<cbc:Name>${escapeXml(contact)}</cbc:Name>`);
    if (phone) parts.push(`<cbc:Telephone>${escapeXml(phone)}</cbc:Telephone>`);
    if (email) parts.push(`<cbc:ElectronicMail>${escapeXml(email)}</cbc:ElectronicMail>`);
    parts.push('</cac:Contact>');
  }
  parts.push('</cac:Party>');
  return parts.join('');
}

function taxCategoryXml(category, tagName = 'TaxCategory') {
  const reason = category.reason
    ? `<cbc:TaxExemptionReason>${escapeXml(category.reason)}</cbc:TaxExemptionReason>`
    : '';
  return `<cac:${tagName}><cbc:ID>${category.id}</cbc:ID><cbc:Percent>${money(category.percent)}</cbc:Percent>${reason}<cac:TaxScheme><cbc:ID>VAT</cbc:ID></cac:TaxScheme></cac:${tagName}>`;
}

export function getUblInvoiceWarnings(invoice) {
  const company = invoice?.companyDetails || {};
  if (!String(company.btw || '').trim() && !String(company.kvk || '').trim()) {
    return [
      'Zonder btw-nummer of KvK-nummer kan boekhoudsoftware dit bestand minder goed verwerken.',
    ];
  }
  return [];
}

export function buildUblInvoiceXml(invoice) {
  const currency = invoice.currency || 'EUR';
  const lines = collectLines(invoice);
  const taxGroups = new Map();
  let netCents = 0;
  let taxCents = 0;

  lines.forEach((line) => {
    const key = `${line.category.id}:${line.category.percent}`;
    const group = taxGroups.get(key) || { category: line.category, taxableCents: 0, taxCents: 0 };
    const lineNetCents = Math.round(line.lineNet * 100);
    const lineTaxCents = Math.round(line.taxAmount * 100);
    group.taxableCents += lineNetCents;
    group.taxCents += lineTaxCents;
    taxGroups.set(key, group);
    netCents += lineNetCents;
    taxCents += lineTaxCents;
  });

  const issueDate = formatIsoDate(invoice.invoiceDate) || formatIsoDate(new Date());
  const dueDate = formatIsoDate(invoice.dueDate);
  const invoiceId = String(invoice.invoice_number || invoice.id || 'concept').trim();
  const notes = [invoice.notes, invoice.terms].map((part) => String(part || '').trim()).filter(Boolean);
  const iban = compactId(invoice.companyDetails?.iban);

  const taxSubtotals = [...taxGroups.values()]
    .map(
      (group) =>
        `<cac:TaxSubtotal><cbc:TaxableAmount currencyID="${currency}">${money(group.taxableCents / 100)}</cbc:TaxableAmount><cbc:TaxAmount currencyID="${currency}">${money(group.taxCents / 100)}</cbc:TaxAmount>${taxCategoryXml(group.category)}</cac:TaxSubtotal>`
    )
    .join('');

  const invoiceLines = lines
    .map((line, index) => {
      const description = line.description
        ? `<cbc:Description>${escapeXml(line.description)}</cbc:Description>`
        : '';
      return `<cac:InvoiceLine><cbc:ID>${index + 1}</cbc:ID><cbc:InvoicedQuantity unitCode="${line.unitCode}">${line.quantity}</cbc:InvoicedQuantity><cbc:LineExtensionAmount currencyID="${currency}">${money(line.lineNet)}</cbc:LineExtensionAmount><cac:Item>${description}<cbc:Name>${escapeXml(line.name)}</cbc:Name>${taxCategoryXml(line.category, 'ClassifiedTaxCategory')}</cac:Item><cac:Price><cbc:PriceAmount currencyID="${currency}">${line.unitExcl.toFixed(4)}</cbc:PriceAmount></cac:Price></cac:InvoiceLine>`;
    })
    .join('');

  const supplier = partyXml(invoice.companyDetails, { fallbackName: 'Leverancier', isSupplier: true });
  const customer = partyXml(
    {
      ...invoice.receiverDetails,
      name: invoice.receiverDetails?.companyName || invoice.receiverName,
      email: invoice.receiverDetails?.email || invoice.email,
    },
    { fallbackName: 'Klant', isSupplier: false }
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
<Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2">
<cbc:UBLVersionID>2.1</cbc:UBLVersionID>
<cbc:CustomizationID>urn:cen.eu:en16931:2017</cbc:CustomizationID>
<cbc:ID>${escapeXml(invoiceId)}</cbc:ID>
<cbc:IssueDate>${issueDate}</cbc:IssueDate>
${dueDate ? `<cbc:DueDate>${dueDate}</cbc:DueDate>` : ''}
<cbc:InvoiceTypeCode>380</cbc:InvoiceTypeCode>
${notes.map((note) => `<cbc:Note>${escapeXml(note)}</cbc:Note>`).join('')}
<cbc:DocumentCurrencyCode>${escapeXml(currency)}</cbc:DocumentCurrencyCode>
<cac:AccountingSupplierParty>${supplier}</cac:AccountingSupplierParty>
<cac:AccountingCustomerParty>${customer}</cac:AccountingCustomerParty>
${
  iban
    ? `<cac:PaymentMeans><cbc:PaymentMeansCode>30</cbc:PaymentMeansCode><cac:PayeeFinancialAccount><cbc:ID>${escapeXml(iban)}</cbc:ID></cac:PayeeFinancialAccount></cac:PaymentMeans>`
    : ''
}
${invoice.terms ? `<cac:PaymentTerms><cbc:Note>${escapeXml(invoice.terms)}</cbc:Note></cac:PaymentTerms>` : ''}
<cac:TaxTotal><cbc:TaxAmount currencyID="${currency}">${money(taxCents / 100)}</cbc:TaxAmount>${taxSubtotals}</cac:TaxTotal>
<cac:LegalMonetaryTotal>
<cbc:LineExtensionAmount currencyID="${currency}">${money(netCents / 100)}</cbc:LineExtensionAmount>
<cbc:TaxExclusiveAmount currencyID="${currency}">${money(netCents / 100)}</cbc:TaxExclusiveAmount>
<cbc:TaxInclusiveAmount currencyID="${currency}">${money((netCents + taxCents) / 100)}</cbc:TaxInclusiveAmount>
<cbc:PayableAmount currencyID="${currency}">${money((netCents + taxCents) / 100)}</cbc:PayableAmount>
</cac:LegalMonetaryTotal>
${invoiceLines}
</Invoice>
`;
}

export function downloadUblInvoice(invoice) {
  const xml = buildUblInvoiceXml(invoice);
  const invoiceId = String(invoice?.invoice_number || invoice?.id || 'concept').replace(/[^\w.-]+/g, '-');
  const blob = new Blob([xml], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `Factuur-${invoiceId}.xml`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
