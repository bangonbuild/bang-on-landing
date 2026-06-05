import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  Banknote,
  Briefcase,
  MessageCircle,
  ScanLine,
  Users,
} from 'lucide-react'
import { PageSection } from './PageSection'
import { SectionLabel } from './SectionLabel'

interface CalloutCard {
  icon: LucideIcon
  title: string
  description: string
  animation: 'pulse' | 'scan' | 'rotate' | 'bounce' | 'scale'
}

const cards: CalloutCard[] = [
  {
    icon: MessageCircle,
    title: 'Ask Nudge',
    description:
      'AI that knows the trade. Ask anything: NCC, AS standards, site problems, calculations. Get a straight answer in seconds.',
    animation: 'pulse',
  },
  {
    icon: ScanLine,
    title: 'Snap',
    description:
      'Point your camera at any site problem. Nudge reads it and tells you what you need to know, before it becomes a bigger issue.',
    animation: 'scan',
  },
  {
    icon: Briefcase,
    title: 'Jobs',
    description:
      'Create a job, add your client, and build a living timeline as work progresses. Notes, photos, quotes and invoices, all in one place.',
    animation: 'rotate',
  },
  {
    icon: Banknote,
    title: 'Money',
    description:
      "Generate quotes and invoices in seconds. Track what's outstanding, what's overdue, and what's been paid, all from your phone.",
    animation: 'bounce',
  },
  {
    icon: Users,
    title: 'Crew',
    description:
      'Add your crew and link subbies to the same job. Shared updates and team presence, built for how tradies work.',
    animation: 'scale',
  },
]

function iconHoverProps(animation: CalloutCard['animation']) {
  switch (animation) {
    case 'pulse':
      return {
        whileHover: { scale: [1, 1.15, 1] },
        whileTap: { scale: [1, 1.15, 1] },
        transition: { duration: 0.4 },
      }
    case 'scan':
      return {
        whileHover: { x: [-4, 4, 0] },
        whileTap: { x: [-4, 4, 0] },
        transition: { duration: 0.5 },
      }
    case 'rotate':
      return {
        whileHover: { rotate: [-3, 3, 0] },
        whileTap: { rotate: [-3, 3, 0] },
        transition: { duration: 0.4 },
      }
    case 'bounce':
      return {
        whileHover: { y: [0, -6, 0] },
        whileTap: { y: [0, -6, 0] },
        transition: { duration: 0.4 },
      }
    case 'scale':
      return {
        whileHover: { scale: [1, 1.1, 1] },
        whileTap: { scale: [1, 1.1, 1] },
        transition: { duration: 0.4 },
      }
  }
}

function CalloutCardItem({ icon: Icon, title, description, animation, index }: CalloutCard & { index: number }) {
  const iconMotion = iconHoverProps(animation)

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
      className="h-full"
    >
      <motion.div
        className="flex h-full flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors duration-200 hover:border-[var(--color-border-2)] hover:bg-[var(--color-surface-2)]"
        whileHover={{ y: -2 }}
      >
        <motion.div {...iconMotion} className="w-fit">
          <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
        </motion.div>
        <h3 className="text-heading mt-4 text-white">{title}</h3>
        <p className="text-body mt-2 min-h-[60px] text-[var(--color-text-muted)]">{description}</p>
      </motion.div>
    </motion.div>
  )
}

export function FeatureCallouts() {
  return (
    <PageSection className="whats-inside-section">
      <div className="flex flex-col items-center text-center">
        <SectionLabel centered>WHAT&apos;S INSIDE</SectionLabel>
        <h2 className="text-display mt-6 text-white">
          Everything a tradie needs. Nothing they don&apos;t.
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {cards.slice(0, 3).map((card, i) => (
          <CalloutCardItem key={card.title} {...card} index={i} />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 md:mx-auto md:max-w-[66.666%] md:grid-cols-2">
        {cards.slice(3).map((card, i) => (
          <CalloutCardItem key={card.title} {...card} index={i + 3} />
        ))}
      </div>
    </PageSection>
  )
}
