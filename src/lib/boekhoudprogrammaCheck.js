/** @typedef {'factuurtool' | 'basis' | 'compleet' | 'boekhouder'} ResultId */

export const QUESTIONS = [
  {
    id: 'invoices',
    number: 1,
    title: 'Hoeveel verkoopfacturen stuur je ongeveer per maand?',
    options: [
      { value: 0, label: 'A', text: '1–5 facturen' },
      { value: 1, label: 'B', text: '6–20 facturen' },
      { value: 2, label: 'C', text: '21–50 facturen' },
      { value: 3, label: 'D', text: 'Meer dan 50 facturen' },
    ],
  },
  {
    id: 'expenses',
    number: 2,
    title: 'Hoeveel zakelijke kosten heb je ongeveer?',
    hint: 'Denk aan software, telefoon, materiaal, kantoor, reiskosten en andere zakelijke uitgaven.',
    options: [
      { value: 0, label: 'A', text: 'Bijna geen' },
      { value: 1, label: 'B', text: 'Een paar per maand' },
      { value: 2, label: 'C', text: 'Regelmatig' },
      { value: 3, label: 'D', text: 'Veel verschillende kosten en bonnetjes' },
    ],
  },
  {
    id: 'transactions',
    number: 3,
    title: 'Hoeveel zakelijke banktransacties heb je ongeveer per maand?',
    hint: 'Denk aan betalingen van klanten, abonnementen, inkopen, bankkosten en andere zakelijke transacties.',
    options: [
      { value: 0, label: 'A', text: 'Minder dan 10' },
      { value: 1, label: 'B', text: '10–50' },
      { value: 2, label: 'C', text: '51–150' },
      { value: 3, label: 'D', text: 'Meer dan 150' },
    ],
  },
  {
    id: 'preference',
    number: 4,
    title: 'Hoe wil je je administratie bijhouden?',
    options: [
      { value: 0, label: 'A', text: 'Ik vind het prima om dit zelf eenvoudig bij te houden.' },
      { value: 1, label: 'B', text: 'Ik wil het zelf doen, maar wel met wat hulp van software.' },
      { value: 2, label: 'C', text: 'Ik wil zoveel mogelijk automatiseren.' },
      { value: 3, label: 'D', text: 'Ik wil zo min mogelijk met mijn administratie bezig zijn.' },
    ],
  },
  {
    id: 'bank',
    number: 5,
    title: 'Wil je je zakelijke bankrekening kunnen koppelen?',
    options: [
      { value: 0, label: 'A', text: 'Nee, dat vind ik niet nodig.' },
      { value: 1, label: 'B', text: 'Misschien, als het veel tijd scheelt.' },
      { value: 2, label: 'C', text: 'Ja, dat lijkt me handig.' },
      { value: 3, label: 'D', text: 'Ja, ik wil zoveel mogelijk automatisch laten verwerken.' },
    ],
  },
  {
    id: 'btw',
    number: 6,
    title: 'Hoe wil je omgaan met je btw-administratie?',
    options: [
      { value: 0, label: 'A', text: 'Ik houd dit zelf eenvoudig bij.' },
      { value: 1, label: 'B', text: 'Ik wil vooral een duidelijk overzicht.' },
      { value: 2, label: 'C', text: 'Ik wil mijn btw-administratie in mijn boekhoudprogramma bijhouden.' },
      { value: 3, label: 'D', text: 'Ik wil zoveel mogelijk automatiseren en controleren.' },
    ],
  },
  {
    id: 'knowledge',
    number: 7,
    title: 'Hoeveel verstand heb je van boekhouden?',
    options: [
      { value: 0, label: 'A', text: 'Ik weet prima hoe ik mijn administratie moet bijhouden.' },
      { value: 1, label: 'B', text: 'Ik weet de basis, maar niet alles.' },
      { value: 2, label: 'C', text: 'Ik vind boekhouden best lastig.' },
      { value: 3, label: 'D', text: 'Ik wil dit liever aan iemand anders overlaten.' },
    ],
  },
  {
    id: 'time',
    number: 8,
    title: 'Hoeveel tijd wil je ongeveer per maand aan je administratie besteden?',
    options: [
      { value: 0, label: 'A', text: 'Dat vind ik niet erg.' },
      { value: 1, label: 'B', text: 'Een paar uur is prima.' },
      { value: 2, label: 'C', text: 'Zo weinig mogelijk.' },
      { value: 3, label: 'D', text: 'Bij voorkeur bijna geen tijd.' },
    ],
  },
];

/** Relative importance of each factor in the combined score. */
export const WEIGHTS = {
  invoices: 1,
  expenses: 1.5,
  transactions: 2,
  preference: 1.25,
  bank: 1.25,
  btw: 1,
  knowledge: 1.5,
  time: 1.5,
};

export const RESULTS = {
  factuurtool: {
    id: 'factuurtool',
    rank: 1,
    emoji: '🟢',
    accent: 'green',
    title: 'Een eenvoudige factuurtool is waarschijnlijk genoeg',
    shortLabel: 'Factuurtool',
    fitsWhen: [
      'je maar weinig facturen verstuurt;',
      'je weinig zakelijke kosten hebt;',
      'je weinig banktransacties hebt;',
      'je administratie overzichtelijk is;',
      'je prima zelf je administratie kunt bijhouden;',
      'en je geen behoefte hebt aan uitgebreide automatisering.',
    ],
    body: [
      'Je hoeft dan niet automatisch een uitgebreid boekhoudprogramma te nemen.',
      'Als je vooral een professionele factuur wilt maken en je administratie verder eenvoudig is, kan een gratis factuurtool voldoende zijn.',
    ],
    why: [
      'Je administratie lijkt op basis van je antwoorden relatief eenvoudig. Een uitgebreid boekhoudprogramma kan dan meer functies bieden dan je daadwerkelijk gebruikt.',
      'Je kunt altijd later overstappen wanneer je aantal klanten, kosten of transacties groeit.',
    ],
    changeWhen: [
      'veel meer zakelijke kosten krijgt;',
      'steeds meer bonnetjes en inkoopfacturen moet verwerken;',
      'veel banktransacties krijgt;',
      'automatisch wilt werken;',
      'of meer inzicht wilt in je financiële situatie.',
    ],
    primaryCta: { href: '/create-invoice', label: 'Maak gratis een factuur →' },
    primaryNote:
      'Met FactuurBaas kun je gratis een professionele factuur maken zonder account. Je downloadt de factuur als PDF en verstuurt deze zelf naar je klant.',
  },
  basis: {
    id: 'basis',
    rank: 2,
    emoji: '🟡',
    accent: 'amber',
    title: 'Een eenvoudig boekhoudprogramma kan goed passen',
    shortLabel: 'Basis-boekhoudprogramma',
    fitsWhen: [
      'je regelmatig facturen verstuurt;',
      'je ook zakelijke kosten hebt;',
      'je meer administratie krijgt dan je gemakkelijk zelf kunt bijhouden;',
      'je wel zelf je boekhouding wilt doen;',
      'maar je handmatig werk wilt verminderen.',
    ],
    body: [
      'Je hoeft waarschijnlijk nog geen ingewikkelde totaaloplossing te gebruiken.',
      'Een eenvoudig boekhoudprogramma waarmee je bijvoorbeeld facturen, kosten, btw en je administratie op één plek kunt bijhouden kan dan voldoende zijn.',
    ],
    why: [
      'Je administratie is groot genoeg om meer structuur te gebruiken, maar uit je antwoorden blijkt niet dat je meteen een zeer uitgebreide oplossing nodig hebt.',
      'Het belangrijkste voordeel is dat je minder losse bestanden, spreadsheets en handmatige overzichten nodig hebt.',
    ],
    lookFor: [
      'verkoopfacturen;',
      'inkoopfacturen;',
      'btw-overzicht;',
      'klant- en leveranciersgegevens;',
      'eenvoudige financiële overzichten;',
      'eventueel een bankkoppeling.',
    ],
    upgradeWhen:
      'Als je aantal transacties sterk groeit, veel automatisering wilt of uitgebreidere financiële rapportages nodig hebt, kan een uitgebreider boekhoudprogramma interessanter worden.',
    primaryCta: {
      href: '/blogs/beste-boekhoudprogramma-zzp',
      label: "Bekijk de beste boekhoudprogramma's voor zzp'ers →",
    },
  },
  compleet: {
    id: 'compleet',
    rank: 3,
    emoji: '🟠',
    accent: 'orange',
    title: 'Een compleet boekhoudprogramma is waarschijnlijk interessant',
    shortLabel: 'Compleet boekhoudprogramma',
    fitsWhen: [
      'je regelmatig of veel facturen verstuurt;',
      'je veel zakelijke kosten hebt;',
      'je veel banktransacties hebt;',
      'je je administratie zoveel mogelijk wilt automatiseren;',
      'je een bankkoppeling wilt;',
      'je btw-administratie in software wilt bijhouden;',
      'of je inzicht wilt in omzet, kosten en resultaat.',
    ],
    body: [],
    why: [
      'Je administratie heeft waarschijnlijk genoeg omvang om handmatig bijhouden onnodig veel tijd te laten kosten.',
      'In jouw situatie kunnen functies zoals een bankkoppeling, automatische verwerking en financiële overzichten een duidelijk voordeel opleveren.',
      'Het gaat dus niet alleen om het maken van facturen. Je wilt waarschijnlijk je hele financiële administratie beter organiseren.',
    ],
    lookFor: [
      'bankkoppeling;',
      'verwerking van inkomsten en uitgaven;',
      'btw-administratie;',
      'verkoop- en inkoopfacturen;',
      'automatische verwerking;',
      'financiële rapportages;',
      'gebruiksgemak;',
      'prijs.',
    ],
    note: "Er is niet één boekhoudprogramma dat voor iedere zzp'er het beste is.",
    primaryCta: {
      href: '/blogs/beste-boekhoudprogramma-zzp',
      label: 'Vergelijk Moneybird, Jortt en e-Boekhouden.nl →',
    },
  },
  boekhouder: {
    id: 'boekhouder',
    rank: 4,
    emoji: '🔴',
    accent: 'red',
    title: 'Boekhoudsoftware combineren met een boekhouder kan verstandig zijn',
    shortLabel: 'Software + boekhouder',
    fitsWhen: [
      'je weinig tijd aan administratie wilt besteden;',
      'je boekhouden lastig vindt;',
      'je administratie omvangrijk is;',
      'je veel verschillende soorten transacties hebt;',
      'je situatie relatief complex is;',
      'of je liever hebt dat iemand je administratie controleert of verzorgt.',
    ],
    body: [
      'Software kan ook in deze situatie nuttig zijn. Het zorgt voor structuur en kan het uitwisselen van gegevens met een boekhouder makkelijker maken.',
      'Je hoeft dus niet te kiezen tussen software óf een boekhouder.',
    ],
    comboLine: 'Boekhoudsoftware → dagelijkse administratie → boekhouder voor controle en fiscale zaken',
    why: [
      'Uit je antwoorden blijkt dat het waarschijnlijk niet alleen om software gaat. Je wilt vooral voorkomen dat je veel tijd en energie aan je administratie kwijt bent.',
      'Een boekhouder kan dan meer waarde toevoegen dan alleen een uitgebreider softwarepakket.',
    ],
    selfDoWhen:
      'Als je administratie eenvoudiger wordt, je meer kennis opbouwt of je voldoende tijd hebt om de boekhouding zelf te doen, kun je altijd meer zelf gaan beheren.',
    primaryCta: {
      href: '/blogs/beste-boekhoudprogramma-zzp',
      label: "Vergelijk boekhoudprogramma's voor zzp'ers →",
    },
  },
};

export const BOEKHOUD_CHECK_FAQS = [
  {
    q: "Moet ik als zzp'er een boekhoudprogramma hebben?",
    a: 'Nee. Je bent niet verplicht om een specifiek boekhoudprogramma te gebruiken. Je moet wel een goede administratie bijhouden.',
  },
  {
    q: 'Vanaf hoeveel facturen heb ik een boekhoudprogramma nodig?',
    a: 'Er bestaat geen vast aantal. Het aantal facturen is maar één factor. Je zakelijke kosten, banktransacties, gewenste automatisering en hoeveelheid administratie zijn minstens zo belangrijk.',
  },
  {
    q: "Kan ik als zzp'er boekhouden zonder software?",
    a: 'Ja. Je kunt je administratie bijvoorbeeld zelf bijhouden met Excel of een ander systeem. Naarmate je administratie groeit, kan software wel veel tijd besparen.',
  },
  {
    q: 'Wat is beter: een factuurprogramma of boekhoudprogramma?',
    a: 'Dat hangt af van wat je nodig hebt. Wil je vooral facturen maken en heb je een kleine administratie? Dan kan een factuurprogramma voldoende zijn. Wil je ook kosten, banktransacties, btw en financiële overzichten bijhouden? Dan is een boekhoudprogramma waarschijnlijk geschikter.',
  },
  {
    q: "Wat is het beste boekhoudprogramma voor een zzp'er?",
    a: 'Dat verschilt per ondernemer. Belangrijke verschillen zijn onder andere prijs, gebruiksgemak, automatisering, bankkoppeling en functies.',
  },
  {
    q: 'Kan ik mijn boekhouding zelf doen?',
    a: "Ja. Veel zzp'ers doen hun administratie zelf. Een boekhoudprogramma kan daarbij helpen. Je kunt ook een boekhouder inschakelen voor controle of bepaalde fiscale werkzaamheden.",
  },
  {
    q: 'Is een gratis boekhoudprogramma voldoende?',
    a: 'Dat hangt af van je administratie. Voor een eenvoudige administratie kan een gratis of goedkope oplossing interessant zijn. Kijk vooral welke functies je daadwerkelijk nodig hebt en welke beperkingen een gratis pakket heeft.',
  },
];

/**
 * @param {Record<string, number>} answers values 0–3 per question id
 * @returns {{ resultId: ResultId, score: number, complexity: number, reasons: string[] }}
 */
export function evaluateBoekhoudCheck(answers) {
  const ids = QUESTIONS.map((q) => q.id);
  for (const id of ids) {
    const v = answers[id];
    if (typeof v !== 'number' || v < 0 || v > 3) {
      throw new Error(`Missing or invalid answer for ${id}`);
    }
  }

  let score = 0;
  for (const id of ids) {
    score += answers[id] * WEIGHTS[id];
  }

  const complexity =
    answers.invoices * WEIGHTS.invoices +
    answers.expenses * WEIGHTS.expenses +
    answers.transactions * WEIGHTS.transactions;

  const automationWant =
    answers.preference * WEIGHTS.preference +
    answers.bank * WEIGHTS.bank +
    answers.btw * WEIGHTS.btw;

  const assistanceNeed =
    answers.knowledge * WEIGHTS.knowledge + answers.time * WEIGHTS.time;

  // Score only maps to software tiers. "Boekhouder" is reserved for
  // knowledge / time / outsourcing overrides below — not raw volume alone.
  /** @type {ResultId} */
  let resultId = 'factuurtool';
  if (score > 15) resultId = 'compleet';
  else if (score > 7) resultId = 'basis';

  const reasons = [];

  const rankOf = (id) => RESULTS[id].rank;
  const raiseTo = (id, reason) => {
    if (rankOf(id) > rankOf(resultId)) {
      resultId = id;
      if (reason) reasons.push(reason);
    }
  };

  // Volume overrides: many transactions/expenses must not land on “factuurtool genoeg”
  if (answers.transactions >= 3) {
    raiseTo('basis', 'Veel banktransacties vragen meer dan alleen een factuurtool.');
    if (answers.expenses >= 1 || automationWant >= 4 || answers.preference >= 2) {
      raiseTo(
        'compleet',
        'Veel transacties gecombineerd met kosten of automatiseringswens wijzen op een completer programma.'
      );
    }
  }

  if (answers.transactions >= 2 && answers.expenses >= 2) {
    raiseTo('basis', 'Regelmatige transacties én kosten vragen om meer structuur.');
  }

  if (answers.transactions >= 2 && answers.expenses >= 3) {
    raiseTo('compleet', 'Veel kosten én banktransacties maken een completer programma logisch.');
  }

  if (answers.invoices >= 3) {
    raiseTo('basis', 'Een hoog factuurvolume past vaak beter bij een boekhoudprogramma.');
  }

  if (complexity >= 8 && automationWant >= 5) {
    raiseTo('compleet', 'Hoge administratielast plus automatiseringswens past bij een compleet pakket.');
  }

  if (answers.bank >= 3 && complexity >= 4) {
    raiseTo('compleet', 'Sterke voorkeur voor automatische bankverwerking bij merkbare administratie.');
  }

  // Outsourcing preference: software + bookkeeper when confidence/time is low
  if (answers.knowledge >= 3 || answers.time >= 3) {
    if (complexity >= 3 || score >= 10 || assistanceNeed >= 7.5) {
      raiseTo(
        'boekhouder',
        'Beperkte boekhoudkennis of weinig beschikbare tijd maakt een boekhouder naast software interessant.'
      );
    }
  }

  if (answers.knowledge >= 2 && answers.time >= 3 && complexity >= 4) {
    raiseTo('boekhouder', 'Weinige tijd én lastige boekhouding bij een grotere administratie.');
  }

  if (answers.knowledge >= 3 && answers.time >= 2) {
    raiseTo('boekhouder', 'Je wilt boekhouden liever uitbesteden.');
  }

  if (answers.preference >= 3 && (complexity >= 5 || assistanceNeed >= 6)) {
    raiseTo(
      'boekhouder',
      'Je wilt zo min mogelijk met administratie bezig zijn bij een niet-triviale situatie.'
    );
  }

  return {
    resultId,
    score: Math.round(score * 10) / 10,
    complexity: Math.round(complexity * 10) / 10,
    reasons,
  };
}

export function getBoekhoudCheckFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: BOEKHOUD_CHECK_FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
