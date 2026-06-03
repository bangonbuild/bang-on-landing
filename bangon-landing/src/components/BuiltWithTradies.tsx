import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Pencil, Users } from 'lucide-react'
import { SectionLabel } from './SectionLabel'
import { SuggestToolModal } from './SuggestToolModal'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const cards = [
  {
    icon: Users,
    title: 'Started with tradies',
    body: 'We spent weeks on site, talking to builders, carpenters, concretors, and site supervisors. We asked what slowed them down. We watched how they worked. We took notes.',
  },
  {
    icon: Pencil,
    title: 'Designed for site conditions',
    body: 'Every screen was designed for a phone in bright sunlight, with dirty hands, one bar of signal. Fast, clear, and minimal. No forms. No faff. No learning curve.',
  },
  {
    icon: CheckCircle,
    title: 'Tested in the real world',
    body: "Before launch, datum.ai was tested across residential builds, commercial fit-outs, and concrete pours. If it didn't work on site, it didn't ship.",
  },
]

export function BuiltWithTradies() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="bg-[var(--color-surface)] px-6 py-[60px] md:px-12 md:py-[120px]">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          className="flex flex-col items-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <SectionLabel>HOW WE BUILT IT</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-6 font-display text-[36px] font-bold text-white md:text-[48px]"
          >
            Made on site. Tested on site.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-4 max-w-[600px] font-body text-base text-[var(--color-text-muted)]"
          >
            Every feature started with a real problem, raised by real tradies, tested in
            real conditions.
          </motion.p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
              variants={fadeUp}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-7"
            >
              <card.icon className="h-6 w-6 text-white" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-base font-bold text-white">
                {card.title}
              </h3>
              <p className="mt-3 font-body text-[15px] leading-relaxed text-[var(--color-text-muted)]">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          variants={fadeUp}
          className="mx-auto mt-12 max-w-[700px] text-center font-body text-base leading-7 text-[var(--color-text-muted)]"
        >
          datum.ai will keep evolving. Every update is shaped by feedback from tradies on
          the tools: what&apos;s working, what&apos;s missing, and what would make the
          biggest difference on site. If you&apos;ve got an idea, we want to hear it.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          variants={fadeUp}
          className="mt-6 flex justify-center"
        >
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="h-12 rounded-xl border border-[var(--color-border-2)] bg-[var(--color-surface-2)] px-6 font-body text-[15px] font-medium text-white transition-colors hover:border-[var(--color-text-muted)]"
          >
            Suggest a tool
          </button>
        </motion.div>

        <motion.blockquote
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          variants={fadeUp}
          className="mx-auto mt-16 max-w-[700px] text-center"
        >
          <p className="font-display text-xl leading-relaxed text-white md:text-2xl">
            &ldquo;I&apos;ve tried most tradie apps out there. This is the first one that
            actually thinks like a tradie.&rdquo;
          </p>
          <footer className="mt-4 font-body text-sm text-[var(--color-text-muted)]">
            Greg, site supervisor, residential construction
          </footer>
        </motion.blockquote>
      </div>

      <SuggestToolModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
