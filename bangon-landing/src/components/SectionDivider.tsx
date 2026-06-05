export function SectionDivider({ className = '' }: { className?: string }) {
  return <hr className={`section-divider ${className}`.trim()} aria-hidden />
}
