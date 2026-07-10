import { cn } from '@/lib/utils';

export function LandingSection({ children, className, bg = 'white' }) {
  return (
    <section
      className={cn(
        'py-16 sm:py-20 lg:py-24',
        bg === 'white' && 'bg-white',
        bg === 'muted' && 'bg-slate-50',
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
        'mb-10 sm:mb-12 lg:mb-14',
        align === 'center' && 'mx-auto max-w-2xl text-center',
        align === 'left' && 'max-w-2xl',
        action && 'flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:max-w-none',
        className
      )}
    >
      <div className={align === 'center' ? 'mx-auto max-w-2xl' : ''}>
        {eyebrow && (
          <p className="text-warm-orange font-semibold uppercase tracking-[0.14em] text-xs sm:text-sm mb-3">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl sm:text-3xl lg:text-[2.125rem] font-heading font-bold text-deep-blue tracking-tight leading-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
