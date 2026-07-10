export const MARGE_FAQS = [
  {
    q: 'Hoe bereken ik mijn winstmarge?',
    a: 'Winst = verkoopprijs − inkoopprijs. Marge % = (winst ÷ verkoopprijs) × 100. Vul beide bedragen in onze calculator in voor een direct resultaat.',
  },
  {
    q: 'Wat is een goede marge?',
    a: 'Dat verschilt per branche. Retail ligt vaak tussen 20% en 50%, horeca lager, dienstverlening en consultancy vaak hoger. Vergelijk met concurrenten in jouw markt.',
  },
  {
    q: 'Is marge hetzelfde als winst?',
    a: 'Nee. Winst is het bedrag in euro\'s dat je overhoudt. Marge is het percentage van je verkoopprijs — handig om prijzen te vergelijken.',
  },
  {
    q: 'Wat is het verschil tussen marge en opslag?',
    a: 'Marge wordt berekend over de verkoopprijs: (verkoop − inkoop) ÷ verkoop. Opslag wordt berekend over de inkoopprijs: (verkoop − inkoop) ÷ inkoop. Onze calculator toont de winstmarge op verkoopprijs.',
  },
  {
    q: 'Moet ik btw meerekenen in mijn marge?',
    a: 'Voor een eerlijke vergelijking reken je marge meestal op bedragen exclusief btw. Btw reken je apart door aan je klant en boek je via je btw-aangifte.',
  },
];

export const MARGE_EXAMPLES = [
  ['€20', '€50', '€30', '60%'],
  ['€40', '€80', '€40', '50%'],
  ['€100', '€150', '€50', '33,3%'],
  ['€250', '€500', '€250', '50%'],
];

export function parseAmount(value) {
  if (value === '' || value === null || value === undefined) return null;
  const normalized = String(value).replace(',', '.').trim();
  const num = parseFloat(normalized);
  return Number.isFinite(num) && num >= 0 ? num : null;
}

export function formatEuro(amount) {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
}

export function formatPercent(value) {
  return new Intl.NumberFormat('nl-NL', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
}

export const MARGE_MODES = [
  {
    value: 'both-prices',
    label: 'Inkoop + verkoop',
    hint: 'Bereken winst en marge %',
  },
  {
    value: 'from-purchase',
    label: 'Inkoop + marge %',
    hint: 'Bereken je verkoopprijs',
  },
  {
    value: 'from-sale',
    label: 'Verkoop + marge %',
    hint: 'Bereken je inkoopprijs',
  },
];

export function calculateMargin({ purchasePrice, salePrice }) {
  const purchase = parseAmount(purchasePrice);
  const sale = parseAmount(salePrice);

  if (purchase === null || sale === null || sale <= 0) return null;

  const profit = sale - purchase;
  const marginPercent = sale > 0 ? (profit / sale) * 100 : 0;

  return {
    mode: 'both-prices',
    purchasePrice: purchase,
    salePrice: sale,
    profit,
    marginPercent,
    formulaDetail: `${formatEuro(sale)} − ${formatEuro(purchase)}`,
  };
}

export function salePriceFromMargin(purchase, marginPercent) {
  if (marginPercent >= 100) return null;
  return purchase / (1 - marginPercent / 100);
}

export function purchasePriceFromMargin(sale, marginPercent) {
  if (marginPercent < 0 || marginPercent > 100) return null;
  return sale * (1 - marginPercent / 100);
}

export function calculateMarginFromMode({ mode, purchasePrice, salePrice, marginPercent }) {
  const margin = parseAmount(marginPercent);

  if (mode === 'both-prices') {
    return calculateMargin({ purchasePrice, salePrice });
  }

  if (mode === 'from-purchase') {
    const purchase = parseAmount(purchasePrice);
    if (purchase === null || margin === null || margin < 0 || margin >= 100) return null;
    const sale = salePriceFromMargin(purchase, margin);
    if (sale === null || sale <= 0) return null;
    const profit = sale - purchase;
    return {
      mode,
      purchasePrice: purchase,
      salePrice: sale,
      profit,
      marginPercent: margin,
      formulaDetail: `${formatEuro(purchase)} ÷ (1 − ${formatPercent(margin)}%)`,
    };
  }

  if (mode === 'from-sale') {
    const sale = parseAmount(salePrice);
    if (sale === null || sale <= 0 || margin === null || margin < 0 || margin > 100) return null;
    const purchase = purchasePriceFromMargin(sale, margin);
    if (purchase === null || purchase < 0) return null;
    const profit = sale - purchase;
    return {
      mode,
      purchasePrice: purchase,
      salePrice: sale,
      profit,
      marginPercent: margin,
      formulaDetail: `${formatEuro(sale)} × (1 − ${formatPercent(margin)}%)`,
    };
  }

  return null;
}

export function getMargeFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: MARGE_FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
