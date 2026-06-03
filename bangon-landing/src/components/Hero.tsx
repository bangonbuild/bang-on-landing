import { motion } from 'framer-motion'
import { SectionLabel } from './SectionLabel'
import { WaitlistForm } from './WaitlistForm'
import { HeroPhoneMockup } from './HeroPhoneMockup'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pt-16 pb-24 md:px-12 noise-bg">
      <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 items-center gap-12 lg:grid-cols-[55%_45%]">
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
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
            Built for tradies, with tradies. Job management, AI tools, cashflow and your crew,
            all in one place.
          </motion.p>

          <motion.div
            id="waitlist-hero"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-10 flex w-full max-w-[520px] justify-center lg:justify-start"
          >
            <WaitlistForm variant="hero" />
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden justify-center lg:flex"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <HeroPhoneMockup />
        </motion.div>
      </div>
    </section>
  )
}
