interface SectionDividerProps {
  className?: string
}

export function SectionDivider({ className = '' }: SectionDividerProps) {
  return (
    <div className={`site-container ${className}`}>
      <hr className="m-0 border-0 border-t border-[var(--color-border)]" />
    </div>
  )
}
