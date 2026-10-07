import { cn } from '@/lib/utils';

export function LandingSection({ children, className, bg = 'white' }) {
  return (
    <section
      className={cn(
        'py-20 text-ink sm:py-24 lg:py-28',
        bg === 'white' && 'bg-paper-50',
        bg === 'muted' && 'border-y border-ink/[0.06] bg-paper',
        bg === 'dark' && 'bg-ink-950 text-white',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  action,
}) {
  return (
    <div
      className={cn(
        'mb-12 sm:mb-14 lg:mb-16',
        align === 'center' && 'mx-auto max-w-2xl text-center',
        align === 'left' && 'max-w-2xl',
        action && 'flex flex-col gap-6 md:max-w-none md:flex-row md:items-end md:justify-between',
        className
      )}
    >
      <div className={align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'}>
        {eyebrow && (
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ember">{eyebrow}</p>
        )}
        <h2 className="font-display text-[2rem] font-normal leading-[1.06] tracking-[-0.03em] text-ink sm:text-[2.6rem] lg:text-5xl [&_em]:text-ink-700">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-ink-500 sm:mt-5 sm:text-lg">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}
