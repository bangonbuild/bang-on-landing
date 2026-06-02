import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
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
          Bang On.
          <br />
          <span className="text-[var(--color-text-muted)]">
            The smartest tool
            <br />
            on site.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-6 max-w-[520px] font-body text-lg text-[var(--color-text-muted)]"
        >
          Built for builders, carpenters, and site supervisors. AI on tap — for quotes,
          jobs, site reads, and everything in between.
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

      <a
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-text-dim)] animate-bounce-subtle"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6" strokeWidth={1.5} />
      </a>
    </section>
  )
}
