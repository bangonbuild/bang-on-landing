import { motion } from 'framer-motion'
import { CheckCircle, Pencil, Users } from 'lucide-react'
import { PageSection } from './PageSection'
import { SectionLabel } from './SectionLabel'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const cards = [
  {
    icon: Users,
    title: 'Started with tradies',
    body: 'We spent time on site talking to builders, carpenters, concretors and site supervisors. We asked what slowed them down. We took notes.',
  },
  {
    icon: Pencil,
    title: 'Designed for site conditions',
    body: 'Every screen was designed for a phone in bright sunlight, with dirty hands, one bar of signal. Fast, clear, minimal. No faff.',
  },
  {
    icon: CheckCircle,
    title: 'Tested in the real world',
    body: "Before launch, datum.ai was tested across residential builds, commercial fit-outs and roofing jobs. If it didn't work on site, it didn't ship.",
  },
]

export function BuiltWithTradies() {
  return (
    <PageSection className="bg-[var(--color-surface)]">
      <div className="flex flex-col items-center text-center">
        <SectionLabel centered>HOW WE BUILT IT</SectionLabel>
        <h2 className="text-display mt-6 text-white">Made on site. Tested on site.</h2>
        <p className="text-body mt-4 max-w-[600px] text-[var(--color-text-muted)]">
          Every feature started with a real problem, raised by real tradies, tested in real
          conditions.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
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
            <h3 className="text-heading mt-4 text-white">{card.title}</h3>
            <p className="text-body mt-3 text-[var(--color-text-muted)]">{card.body}</p>
          </motion.div>
        ))}
      </div>

      <motion.blockquote
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        variants={fadeUp}
        className="mx-auto mt-12 max-w-[700px] text-center md:mt-16"
      >
        <p className="text-heading text-white">
          &ldquo;I&apos;ve tried most tradie apps out there. This is the first one that
          actually thinks like a tradie.&rdquo;
        </p>
        <footer className="text-body mt-4 text-[var(--color-text-muted)]">
          Greg, site supervisor, residential construction
        </footer>
      </motion.blockquote>
    </PageSection>
  )
}
