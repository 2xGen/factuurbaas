'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { seoLandingLinks } from '@/lib/invoiceLandingData';
import { LandingSection } from '@/components/landing/LandingSection';
import { ArrowRight, CheckCircle } from 'lucide-react';

const benefits = [
  'Gratis factuur maken',
  'Factuur direct als PDF downloaden',
  'Professionele templates',
  'Btw automatisch berekend',
  'Geen account nodig',
];

export default function SeoLandingSection() {
  return (
    <LandingSection bg="white">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-heading font-bold tracking-tight text-deep-blue sm:text-3xl">
            Gratis factuur maken voor zzp&apos;ers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            FactuurBaas is gemaakt voor zzp&apos;ers en kleine ondernemers die snel een professionele
            factuur willen maken. Vul je bedrijfsgegevens, klantgegevens en werkzaamheden in,
            controleer de btw en download je factuur direct als PDF.
          </p>
          <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
            Geen account nodig. Geen abonnement. Geen ingewikkelde boekhouding.
          </p>

          <ul className="mt-6 space-y-2.5">
            {benefits.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-slate-700">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-warm-orange" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
            {seoLandingLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-warm-orange/40 hover:text-warm-orange"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Button asChild size="lg" className="h-12 rounded-xl px-8">
              <Link href="/create-invoice">
                Maak gratis factuur
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mt-12 border-t border-slate-200 pt-10 sm:mt-14 sm:pt-12"
        >
          <h2 className="text-2xl font-heading font-bold tracking-tight text-deep-blue sm:text-3xl">
            Online factuur maken
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Met FactuurBaas maak je online een professionele factuur. Je hoeft geen Word- of
            Excel-template te downloaden: vul je gegevens in, voeg je diensten of producten toe en
            download je factuur direct als PDF.
          </p>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Wil je liever eerst een{' '}
            <Link href="/blogs/factuur-templates-zzp" className="font-medium text-warm-orange hover:underline">
              factuur voorbeeld
            </Link>{' '}
            bekijken of{' '}
            <Link href="/blogs/factureren-zonder-account" className="font-medium text-warm-orange hover:underline">
              gratis factureren zonder account
            </Link>
            ? Dat kan ook — daarna start je direct in de factuurmaker.
          </p>
        </motion.div>
      </div>
    </LandingSection>
  );
}
