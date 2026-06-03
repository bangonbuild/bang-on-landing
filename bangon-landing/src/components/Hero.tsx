import { motion } from 'framer-motion'
import { SectionLabel } from './SectionLabel'
import { WaitlistForm } from './WaitlistForm'
import { HeroPhoneMockup, HeroMobileMockup } from './HeroPhoneMockup'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-16 pb-24 md:px-12 noise-bg">
      <div className="mx-auto grid w-full min-w-0 max-w-[1100px] grid-cols-1 items-center gap-12 lg:grid-cols-[55%_45%]">
        <motion.div
          className="flex w-full min-w-0 flex-col items-start text-left lg:items-start lg:text-left"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-fit"
          >
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
            className="mt-2 max-w-full font-display text-[clamp(1.375rem,5.5vw,2.5rem)] font-bold leading-tight text-[var(--color-text-muted)] sm:whitespace-nowrap"
          >
            The smartest tool on{'\u00A0'}site.
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
            className="mt-10 w-full min-w-0 max-w-[520px]"
          >
            <WaitlistForm variant="hero" className="mx-0 max-w-none" />
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full min-w-0"
          >
            <HeroMobileMockup />
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden min-w-0 justify-center lg:flex"
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
