import { motion } from 'framer-motion'

export function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-[var(--color-bg)]"
    >
      <h1 className="font-display text-[28px] font-bold text-white">datum.ai</h1>
      <p className="font-display mt-2 text-[13px] text-[var(--color-text-muted)]">
        Built for the job.
      </p>
    </motion.div>
  )
}
