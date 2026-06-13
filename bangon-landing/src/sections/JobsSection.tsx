import { motion } from 'framer-motion'
import { SectionLabel } from '../components/SectionLabel'
import { FeatureList } from '../components/FeatureList'
import { PhoneMockup } from '../components/PhoneMockup'
import { fadeUp, fadeUpTransition, viewportOnce } from '../motion'

const features = [
  'Timeline with photos & notes',
  'Client updates with one tap',
  'Crew collaboration',
  'Documents & history',
]

export function JobsSection() {
  return (
    <section id="jobs" className="section-padding">
      <div className="site-container">
        <div className="grid min-w-0 grid-cols-1 items-center gap-12 lg:grid-cols-[45%_55%] lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={fadeUpTransition}
            variants={fadeUp}
            className="order-2 lg:order-none"
          >
            <PhoneMockup label="Jobs screen coming soon" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ staggerChildren: 0.08 }}
            className="order-1 flex flex-col items-start lg:order-none"
          >
            <motion.div variants={fadeUp} transition={fadeUpTransition}>
              <SectionLabel>JOBS</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              transition={fadeUpTransition}
              className="text-display mt-6 text-white"
            >
              Every job.
              <br />
              In one place.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={fadeUpTransition}
              className="text-body mt-6 text-[var(--color-text-muted)]"
            >
              Keep your projects moving with a living timeline of notes, photos, quotes and
              invoices. Keep clients in the loop and your crew across every job.
            </motion.p>
            <motion.div variants={fadeUp} transition={fadeUpTransition} className="mt-8">
              <FeatureList items={features} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
