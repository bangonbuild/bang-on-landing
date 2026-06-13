import { motion } from 'framer-motion'
import { SectionLabel } from '../components/SectionLabel'
import { FeatureList } from '../components/FeatureList'
import { NudgeDemo } from '../components/NudgeDemo'
import { fadeUp, fadeUpTransition, viewportOnce } from '../motion'

interface NudgeSectionProps {
  onTryNudge: () => void
}

const features = [
  'Draft quotes and invoices in seconds',
  'Turn site photos into client-ready reports',
  'Understand building codes in plain English',
  'Create SWMS and defect reports',
  "And there's plenty more to come",
]

export function NudgeSection({ onTryNudge }: NudgeSectionProps) {
  return (
    <section id="nudge" className="section-padding">
      <div className="site-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ staggerChildren: 0.08 }}
          className="flex flex-col items-start text-left"
        >
          <motion.div variants={fadeUp} transition={fadeUpTransition}>
            <SectionLabel>MEET NUDGE</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={fadeUpTransition}
            className="text-display mt-6 text-white"
          >
            Your AI co-worker.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={fadeUpTransition}
            className="mt-6 max-w-[600px] font-[family-name:var(--font-body)] text-[16px] leading-7 text-[var(--color-text-muted)]"
          >
            Built into every part of datum, Nudge helps you work faster, stay organised and
            deliver a more professional experience for your clients. Always there when you need
            a hand. Chat through text, voice or photos.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={fadeUpTransition}
            className="mt-8 w-full max-w-[480px]"
          >
            <FeatureList items={features} />
          </motion.div>

          <motion.div variants={fadeUp} transition={fadeUpTransition} className="mt-8 sm:hidden">
            <button type="button" onClick={onTryNudge} className="btn-primary">
              Try Nudge →
            </button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={fadeUpTransition}
            className="mt-12 hidden w-full sm:block"
          >
            <NudgeDemo layout="embedded" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
