import { motion } from 'framer-motion'
import { SectionLabel } from '../components/SectionLabel'
import { FeatureList } from '../components/FeatureList'
import { PhoneMockup } from '../components/PhoneMockup'
import { fadeUp, fadeUpTransition, viewportOnce } from '../motion'

interface ToolkitSectionProps {
  onSuggestTool: () => void
}

const features = [
  'Measure, calculate & identify',
  'Photo reports',
  'SWMS & defects',
  'Building codes',
  'Suggest a tool',
]

export function ToolkitSection({ onSuggestTool }: ToolkitSectionProps) {
  return (
    <section id="toolkit" className="section-padding">
      <div className="site-container">
        <div className="grid min-w-0 grid-cols-1 items-center gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ staggerChildren: 0.08 }}
            className="order-1 flex flex-col items-start lg:order-none"
          >
            <motion.div variants={fadeUp} transition={fadeUpTransition}>
              <SectionLabel>TOOLKIT</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              transition={fadeUpTransition}
              className="text-display mt-6 text-white"
            >
              Built for the job site.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={fadeUpTransition}
              className="text-body mt-6 text-[var(--color-text-muted)]"
            >
              A growing toolkit to help you work faster, document better and stay moving. And if
              something&apos;s missing, suggest it.
            </motion.p>
            <motion.div variants={fadeUp} transition={fadeUpTransition} className="mt-8">
              <FeatureList items={features} onItemClick={onSuggestTool} />
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={fadeUpTransition}
            variants={fadeUp}
            className="order-2 lg:order-none"
          >
            <PhoneMockup label="Toolkit screen coming soon" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
