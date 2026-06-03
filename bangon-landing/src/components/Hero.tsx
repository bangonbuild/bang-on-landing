import { motion } from 'framer-motion'
import { SectionLabel } from './SectionLabel'
import { WaitlistForm } from './WaitlistForm'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-16 pb-24 md:px-12 noise-bg">
      <motion.div
        className="mx-auto flex w-full max-w-[800px] flex-col items-center text-center"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut' }}>
          <SectionLabel>AI-POWERED TRADIE TOOLS</SectionLabel>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-8 font-display text-[48px] font-bold leading-[1.05] tracking-tight text-white md:text-[80px]"
        >
          datum.ai
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-2 font-display text-[28px] font-bold leading-tight text-[var(--color-text-muted)] md:text-[40px]"
        >
          The smartest tool on site.
        </motion.p>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-6 max-w-[520px] font-body text-lg text-[var(--color-text-muted)]"
        >
          Built for tradies, with tradies. Job management, AI tools, cashflow and your crew
          — all in one place.
        </motion.p>

        <motion.div
          id="waitlist-hero"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-10 flex w-full justify-center"
        >
          <WaitlistForm variant="hero" />
        </motion.div>
      </motion.div>
    </section>
  )
}
