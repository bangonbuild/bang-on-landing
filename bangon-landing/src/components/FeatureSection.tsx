import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Plug, type LucideIcon } from 'lucide-react'
import { PageSection } from './PageSection'
import { SectionLabel } from './SectionLabel'
import { PhoneMockup } from './PhoneMockup'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

interface FeatureSectionProps {
  id?: string
  label: string
  headline: ReactNode
  body: string
  features?: string[]
  imagePosition?: 'left' | 'right'
  mockupLabel?: string
  centred?: boolean
  children?: ReactNode
  className?: string
}

export function FeatureSection({
  id,
  label,
  headline,
  body,
  features,
  imagePosition = 'right',
  mockupLabel,
  centred = false,
  children,
  className = '',
}: FeatureSectionProps) {
  const textBlock = (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      variants={fadeUp}
      className={`flex flex-col gap-6 ${centred ? 'items-center text-center' : 'items-start'}`}
    >
      <SectionLabel>{label}</SectionLabel>
      <h2 className="text-display text-white">{headline}</h2>
      <p className="text-body whitespace-pre-line text-[var(--color-text-muted)]">{body}</p>
      {features && (
        <ul className={`flex flex-col gap-3 ${centred ? 'items-center' : ''}`}>
          {features.map((f) => (
            <li key={f} className="text-body text-[var(--color-text-muted)]">
              <span className="text-white">→ </span>
              {f.replace(/^→\s*/, '')}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  )

  const visualBlock = children ?? (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      variants={fadeUp}
    >
      <PhoneMockup label={mockupLabel} />
    </motion.div>
  )

  if (centred) {
    return (
      <PageSection id={id} className={className}>
        {textBlock}
      </PageSection>
    )
  }

  return (
    <PageSection id={id} className={className}>
      <div className="grid min-w-0 grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {imagePosition === 'left' ? (
          <>
            {visualBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {visualBlock}
          </>
        )}
      </div>
    </PageSection>
  )
}

interface ToolItem {
  icon: LucideIcon
  name: string
  description: string
}

export function ToolboxList({ items }: { items: ToolItem[] }) {
  return (
    <ul className="flex flex-col gap-5">
      {items.map(({ icon: Icon, name, description }) => (
        <li key={name} className="flex gap-3">
          <Icon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[var(--color-text-muted)]" />
          <div>
            <p className="text-body font-semibold text-white">{name}</p>
            <p className="text-body text-[var(--color-text-muted)]">{description}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

interface MoneyCard {
  icon: LucideIcon
  title: string
  body: string
}

export function MoneyCards({ cards }: { cards: MoneyCard[] }) {
  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {cards.map(({ icon: Icon, title, body }) => (
          <motion.div
            key={title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            variants={fadeUp}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6"
          >
            <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
            <h3 className="text-heading mt-4 text-white">{title}</h3>
            <p className="text-body mt-2 text-[var(--color-text-muted)]">{body}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export function MoneyIntegrationsNote() {
  return (
    <p className="text-body mt-4 flex items-center justify-center gap-2 text-[13px] text-[var(--color-text-muted)]">
      <Plug className="h-3.5 w-3.5 shrink-0 text-[var(--color-text-dim)]" strokeWidth={1.5} />
      Xero and MYOB integrations coming soon.
    </p>
  )
}
