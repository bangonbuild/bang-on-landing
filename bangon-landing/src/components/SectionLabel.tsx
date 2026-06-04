interface SectionLabelProps {
  children: string
  className?: string
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex w-fit max-w-full self-start rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-1.5 text-body font-normal uppercase tracking-[0.15em] text-[var(--color-text-muted)] ${className}`}
    >
      {children}
    </span>
  )
}
