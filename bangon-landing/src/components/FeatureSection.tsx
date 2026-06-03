import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { SectionLabel } from './SectionLabel'
import { PhoneMockup } from './PhoneMockup'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

interface FeatureSectionProps {
  id?: string
  label: string
  headline: string
  body: string
  features?: string[]
  imagePosition?: 'left' | 'right'
  mockupLabel?: string
  centred?: boolean
  bodyClassName?: string
  children?: ReactNode
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
  bodyClassName = 'leading-relaxed',
  children,
}: FeatureSectionProps) {
  const textBlock = (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      variants={fadeUp}
      className={`flex flex-col gap-6 ${centred ? 'items-center text-center' : ''}`}
    >
      <SectionLabel>{label}</SectionLabel>
      <h2 className="font-display text-[32px] font-bold leading-tight text-white md:text-[40px]">
        {headline}
      </h2>
      <p
        className={`whitespace-pre-line font-body text-base text-[var(--color-text-muted)] ${bodyClassName}`}
      >
        {body}
      </p>
      {features && (
        <ul className={`flex flex-col gap-3 ${centred ? 'items-center' : ''}`}>
          {features.map((f) => (
            <li key={f} className="font-body text-[15px] text-[var(--color-text-muted)]">
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
      <section id={id} className="px-6 py-[60px] md:px-12 md:py-[120px]">
        <div className="mx-auto max-w-[1100px]">{textBlock}</div>
      </section>
    )
  }

  return (
    <section id={id} className="px-6 py-[60px] md:px-12 md:py-[120px]">
      <div
        className={`mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
          imagePosition === 'left' ? '' : ''
        }`}
      >
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
    </section>
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
            <p className="font-body text-[15px] font-medium text-white">{name}</p>
            <p className="font-body text-[13px] text-[var(--color-text-muted)]">{description}</p>
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
    <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
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
          <h3 className="mt-4 font-display text-base font-bold text-white">{title}</h3>
          <p className="mt-2 font-body text-sm text-[var(--color-text-muted)]">{body}</p>
        </motion.div>
      ))}
    </div>
  )
}
