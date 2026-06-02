import { motion } from 'framer-motion'
import { CheckCircle, Pencil, Users } from 'lucide-react'
import { SectionLabel } from './SectionLabel'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const cards = [
  {
    icon: Users,
    title: 'Started with tradies',
    body: 'We spent weeks on site — talking to builders, carpenters, concretors, and site supervisors. We asked what slowed them down. We watched how they worked. We took notes.',
  },
  {
    icon: Pencil,
    title: 'Designed for dirty hands',
    body: 'Every screen was designed for a 5-inch phone screen, in bright sunlight, with one hand. Fast, clear, and minimal. No forms. No faff. No learning curve.',
  },
  {
    icon: CheckCircle,
    title: 'Tested in the real world',
    body: "Before launch, Bang On was tested across residential builds, commercial fit-outs, and concrete pours. If it didn't work on site, it didn't ship.",
  },
]

export function BuiltWithTradies() {
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
            Bang On wasn&apos;t built in an office. Every feature started with a real
            problem, raised by real tradies, tested in real conditions.
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

        <motion.blockquote
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          variants={fadeUp}
          className="mx-auto mt-16 max-w-[700px] text-center"
        >
          <p className="font-display text-xl leading-relaxed text-white md:text-2xl">
            &ldquo;I&apos;ve tried every tradie app out there. This is the first one that
            actually thinks like a tradie.&rdquo;
          </p>
          <footer className="mt-4 font-body text-sm text-[var(--color-text-muted)]">
            — Site supervisor, residential construction
          </footer>
        </motion.blockquote>
      </div>
    </section>
  )
}
