import { motion } from 'framer-motion'
import {
  Banknote,
  Briefcase,
  MessageCircle,
  ScanLine,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { SectionLabel } from './SectionLabel'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

interface CalloutCard {
  icon: LucideIcon
  title: string
  description: string
}

const cards: CalloutCard[] = [
  {
    icon: MessageCircle,
    title: 'Ask Nudge',
    description:
      'AI that knows the trade. Ask anything: NCC, AS standards, site problems, calculations. Get a straight answer in seconds.',
  },
  {
    icon: ScanLine,
    title: 'Snap',
    description:
      'Point your camera at any site problem. Nudge reads it and tells you what you need to know, before it becomes a bigger issue.',
  },
  {
    icon: Briefcase,
    title: 'Jobs',
    description:
      'Create a job, add your client, and build a living timeline as work progresses. Notes, photos, quotes and invoices, all in one place.',
  },
  {
    icon: Banknote,
    title: 'Money',
    description:
      "Generate quotes and invoices in seconds. Track what's outstanding, what's overdue, and what's been paid, all from your phone.",
  },
  {
    icon: Users,
    title: 'Crew',
    description:
      'Add your crew and link subbies to the same job. Shared updates and team presence, built for how tradies work.',
  },
]

function CalloutCardItem({ icon: Icon, title, description }: CalloutCard) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
      <h3 className="mt-4 font-display text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 min-h-[60px] font-body text-sm leading-5 text-[var(--color-text-muted)]">
        {description}
      </p>
    </div>
  )
}

export function FeatureCallouts() {
  return (
    <section className="px-6 py-[60px] md:px-12 md:py-[120px]">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          className="flex flex-col items-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <SectionLabel>WHAT&apos;S INSIDE</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-6 font-display text-[36px] font-bold text-white md:text-[48px]"
          >
            Everything a tradie needs. Nothing they don&apos;t.
          </motion.h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.slice(0, 3).map((card, i) => (
            <motion.div
              key={card.title}
              className="h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
              variants={fadeUp}
            >
              <CalloutCardItem {...card} />
            </motion.div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 md:mx-auto md:max-w-[66.666%] md:grid-cols-2">
          {cards.slice(3).map((card, i) => (
            <motion.div
              key={card.title}
              className="h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: (i + 3) * 0.1 }}
              variants={fadeUp}
            >
              <CalloutCardItem {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
