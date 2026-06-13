interface SectionLabelProps {
  children: string
  className?: string
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`mb-4 inline-flex w-fit max-w-full rounded-full border border-[var(--color-border-2)] bg-[var(--color-surface-2)] px-3 py-1.5 font-[family-name:var(--font-display)] text-[11px] font-normal uppercase tracking-[0.1em] text-[var(--color-text-muted)] ${className}`}
    >
      {children}
    </span>
  )
}
