import Link from 'next/link';
import { ArrowRight, FileCode, FileDown } from 'lucide-react';

const files = [
  { icon: FileDown, label: 'PDF', name: 'factuur-2026-001.pdf' },
  { icon: FileCode, label: 'UBL/XML', name: 'factuur-2026-001.xml' },
];

export default function EFactuurHomeSection() {
  return (
    <section className="bg-paper px-4 pb-14 text-ink sm:px-6 sm:pb-16" aria-labelledby="ubl-home-heading">
      <div className="container mx-auto">
        <div className="grid items-center gap-10 overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white px-6 py-10 shadow-paper sm:px-10 sm:py-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-14 lg:py-14">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">Elektronisch factureren</p>
            <h2
              id="ubl-home-heading"
              className="mt-4 max-w-[14ch] font-display text-[2.15rem] font-normal leading-[1.04] tracking-[-0.03em] sm:text-[2.75rem]"
            >
              Ook gratis een UBL-factuur maken
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
              Maak je factuur niet alleen als PDF, maar ook als gestructureerd UBL/XML-bestand. Handig wanneer je klant
              facturen automatisch verwerkt in boekhoudsoftware.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="/ubl-factuur-maken"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-[15px] font-medium text-white transition-colors hover:bg-ink-950"
              >
                Gratis UBL factuur maken
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/blogs/wat-is-een-ubl-factuur"
                className="text-sm font-medium text-ink-700 underline decoration-ink/20 underline-offset-[6px] transition-colors hover:text-ink hover:decoration-ember"
              >
                Wat is een UBL-factuur?
              </Link>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-400">
              UBL downloaden is niet hetzelfde als versturen via Peppol.
            </p>
          </div>

          <div className="rounded-2xl border border-ink/[0.06] bg-paper p-4 sm:p-5" aria-hidden>
            <ul className="space-y-3">
              {files.map(({ icon: Icon, label, name }) => (
                <li key={name} className="flex items-center gap-3 rounded-xl border border-ink/[0.06] bg-white px-3.5 py-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ember-50 text-ember">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-ink">{label}</span>
                    <span className="block truncate font-mono text-[11px] text-ink-400">{name}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
