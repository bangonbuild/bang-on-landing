import { motion } from 'framer-motion'

export function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-[var(--color-bg)]"
    >
      <h1 className="font-[family-name:var(--font-display)] text-[28px] font-semibold text-white">
        datum.ai
      </h1>
      <p className="text-small mt-2 text-[var(--color-text-muted)]">
        The operating system for the built environment.
      </p>
    </motion.div>
  )
}
