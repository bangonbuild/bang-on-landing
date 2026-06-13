import { motion } from 'framer-motion'
import { SectionLabel } from '../components/SectionLabel'
import { fadeUp, fadeUpTransition, viewportOnce } from '../motion'

interface BuiltToEvolveProps {
  onSuggestTool: () => void
}

export function BuiltToEvolve({ onSuggestTool }: BuiltToEvolveProps) {
  return (
    <section className="section-padding">
      <div className="site-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ staggerChildren: 0.08 }}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUp} transition={fadeUpTransition}>
            <SectionLabel>BUILT TO EVOLVE</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={fadeUpTransition}
            className="text-display mt-6 text-white"
          >
            Shaped by the industry.
            <br />
            Built to last.
          </motion.h2>

          <motion.div
            variants={fadeUp}
            transition={fadeUpTransition}
            className="mt-6 max-w-[640px] font-[family-name:var(--font-body)] text-[16px] leading-7 text-[var(--color-text-muted)]"
          >
            <p>
              datum has been shaped by tradies, builders, architects and construction
              professionals from day one. Every feature is built to solve real problems, tested in
              the real world and refined through feedback.
            </p>
            <p className="mt-4">
              We&apos;re just getting started. As the industry evolves, so will datum. Every
              conversation, suggestion and idea helps shape what comes next.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} transition={fadeUpTransition} className="mt-8">
            <button type="button" onClick={onSuggestTool} className="btn-ghost">
              Suggest a tool →
            </button>
          </motion.div>

          <motion.blockquote
            variants={fadeUp}
            transition={fadeUpTransition}
            className="mt-16 max-w-[640px]"
          >
            <p className="font-[family-name:var(--font-display)] text-[20px] italic leading-relaxed text-white">
              &ldquo;I&apos;ve tried most tradie apps out there. This is the first one that
              actually thinks like a tradie.&rdquo;
            </p>
            <footer className="text-body mt-4 text-[var(--color-text-muted)]">
              — Greg, site supervisor, residential construction
            </footer>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  )
}
