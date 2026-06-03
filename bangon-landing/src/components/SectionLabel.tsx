interface SectionLabelProps {
  children: string
  className?: string
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex w-fit max-w-full self-start rounded-full border px-3 py-1 font-display text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)] border-[var(--color-border)] bg-[var(--color-surface-2)] ${className}`}
    >
      {children}
    </span>
  )
}
