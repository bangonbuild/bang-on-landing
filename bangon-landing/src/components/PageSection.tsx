import type { ReactNode } from 'react'

interface PageSectionProps {
  id?: string
  children: ReactNode
  className?: string
  containerClassName?: string
}

export function SiteContainer({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`site-container ${className}`.trim()}>{children}</div>
}

export function PageSection({
  id,
  children,
  className = '',
  containerClassName = '',
}: PageSectionProps) {
  return (
    <section id={id} className={`section-padding overflow-hidden ${className}`.trim()}>
      <SiteContainer className={containerClassName}>{children}</SiteContainer>
    </section>
  )
}
