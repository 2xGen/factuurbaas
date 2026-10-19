import Link from 'next/link';
import { ArrowIcon, btn } from '@/components/site/editorial';

const HREF = '/boekhouder-vinden';

export function BookkeeperGuideCta({ title, body, label = 'Vind een boekhouder' }) {
  return (
    <aside className="not-prose my-10 rounded-2xl border border-ember/30 bg-ember-50 p-6 shadow-[0_1px_2px_rgba(6,26,48,0.04),0_16px_40px_-24px_rgba(210,96,26,0.55)] sm:p-8">
      <p className="font-display text-[1.65rem] font-normal leading-[1.15] tracking-[-0.02em] text-ink">{title}</p>
      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-500">{body}</p>
      <Link href={HREF} className={`${btn.primary} mt-5`}>
        {label}
        <ArrowIcon />
      </Link>
    </aside>
  );
}

export function BookkeeperGuideCtaCompact() {
  return (
    <p className="not-prose mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-ink/10 pt-8 text-[15px] text-ink-500">
      Hulp nodig bij je boekhouding?
      <Link href={HREF} className={btn.link}>
        Vind een boekhouder
        <ArrowIcon />
      </Link>
    </p>
  );
}
