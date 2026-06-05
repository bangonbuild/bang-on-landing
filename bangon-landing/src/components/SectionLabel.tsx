interface SectionLabelProps {
  children: string
  className?: string
  centered?: boolean
}

export function SectionLabel({ children, className = '', centered = false }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex w-fit max-w-full rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-1.5 text-body font-normal uppercase tracking-[0.15em] text-[var(--color-text-muted)] ${centered ? 'mx-auto' : 'self-start'} ${className}`}
    >
      {children}
    </span>
  )
}
