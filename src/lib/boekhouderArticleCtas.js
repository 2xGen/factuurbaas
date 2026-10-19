import React from 'react';
import { BookkeeperGuideCta, BookkeeperGuideCtaCompact } from '@/components/leads/BookkeeperGuideCta';

/** Inserts a mid-article CTA and a short closing CTA. Run on the server, before the client article view. */
export function withBookkeeperCtas(content, slug) {
  const cta = boekhouderArticleCtas[slug];
  if (!cta || !React.isValidElement(content)) return content;

  const children = React.Children.toArray(content.props.children);
  const h2Indexes = children.reduce((indexes, child, index) => {
    if (React.isValidElement(child) && child.type === 'h2') indexes.push(index);
    return indexes;
  }, []);

  let insertAt = children.length;
  if (h2Indexes.length >= 2) {
    insertAt = cta.placement === 'early' ? h2Indexes[1] : h2Indexes[Math.floor(h2Indexes.length / 2)];
  } else if (h2Indexes.length === 1) {
    insertAt = h2Indexes[0] + 1;
  }

  const next = [...children];
  next.splice(
    insertAt,
    0,
    <BookkeeperGuideCta key="boekhouder-cta" title={cta.title} body={cta.body} label={cta.label} />
  );
  next.push(<BookkeeperGuideCtaCompact key="boekhouder-cta-einde" />);
  return React.cloneElement(content, {}, next);
}

/** Contextual bookkeeper CTAs for the existing boekhouden pillar. */
export const boekhouderArticleCtas = {
  'beste-boekhoudprogramma-zzp': {
    placement: 'early',
    title: 'Toch liever je boekhouding uitbesteden?',
    body: 'Een boekhoudprogramma helpt als je zelf wilt boeken. Wil je de administratie liever laten doen? Doe gratis en vrijblijvend een aanvraag.',
    label: 'Vind een boekhouder',
  },
  'boekhoudprogramma-eenmanszaak': {
    placement: 'mid',
    title: 'Hulp nodig bij de administratie van je eenmanszaak?',
    body: 'Een boekhouder kan je helpen om facturen, btw en je administratie bij te houden. Ontdek welke ondersteuning bij jouw onderneming past.',
    label: 'Vind een boekhouder',
  },
  'gratis-factuurtool-vs-boekhoudprogramma': {
    placement: 'mid',
    title: 'Zelf je facturen bijhouden of liever hulp?',
    body: 'Met FactuurBaas houd je eenvoudig je facturen bij. Wil je ook ondersteuning bij je volledige boekhouding? Vind een boekhouder die bij je past.',
    label: 'Vind boekhoudkundige hulp',
  },
  'wanneer-boekhoudsoftware-nodig-zzp': {
    placement: 'mid',
    title: 'Groeit je administratie je boven het hoofd?',
    body: 'Als je steeds meer moet bijhouden, kan uitbesteden je tijd besparen. Vind een boekhouder die bij jouw onderneming past.',
    label: 'Bekijk je mogelijkheden',
  },
  'jortt-vs-eboekhouden': {
    placement: 'early',
    title: 'Toch liever je boekhouding uitbesteden?',
    body: 'Software vergelijken is handig als je zelf boekt. Bespaar tijd op je administratie en besteed je boekhouding uit aan een professional. Doe gratis en vrijblijvend een aanvraag.',
    label: 'Vind een boekhouder',
  },
  'moneybird-vs-eboekhouden': {
    placement: 'early',
    title: 'Toch liever je boekhouding uitbesteden?',
    body: 'Software vergelijken is handig als je zelf boekt. Bespaar tijd op je administratie en besteed je boekhouding uit aan een professional. Doe gratis en vrijblijvend een aanvraag.',
    label: 'Vind een boekhouder',
  },
  'moneybird-vs-jortt': {
    placement: 'early',
    title: 'Toch liever je boekhouding uitbesteden?',
    body: 'Software vergelijken is handig als je zelf boekt. Bespaar tijd op je administratie en besteed je boekhouding uit aan een professional. Doe gratis en vrijblijvend een aanvraag.',
    label: 'Vind een boekhouder',
  },
  'zelf-boekhouden-zzp': {
    placement: 'mid',
    title: 'Toch liever je boekhouding uitbesteden?',
    body: 'Bespaar tijd op je administratie en besteed je boekhouding uit aan een professional. Doe gratis en vrijblijvend een aanvraag.',
    label: 'Vind een boekhouder',
  },
  'boekhouding-zzp': {
    placement: 'mid',
    title: 'Zeker weten dat je administratie op orde is?',
    body: 'Een boekhouder kan je helpen bij het organiseren van je administratie en het naleven van de fiscale bewaarplichten.',
    label: 'Vind een boekhouder',
  },
  'kosten-boekhoudprogramma-zzp': {
    placement: 'early',
    title: 'Wil je je administratie laten verzorgen?',
    body: 'Een boekhoudprogramma is één manier om je cijfers bij te houden. Uitbesteden kan passen als je de administratie niet zelf wilt doen. Een aanvraag via FactuurBaas is gratis en vrijblijvend.',
    label: 'Vind een boekhouder',
  },
  'gratis-boekhoudprogramma-zzp': {
    placement: 'early',
    title: 'Minder tijd kwijt aan je boekhouding?',
    body: 'Gratis software helpt, maar je kunt je administratie ook laten verzorgen. Ontdek welke boekhoudkundige ondersteuning bij jouw bedrijf past.',
    label: 'Vind een boekhouder',
  },
};
