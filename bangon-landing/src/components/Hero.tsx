import { motion } from 'framer-motion'
import { WaitlistForm } from './WaitlistForm'
import { HeroPhoneMockup, HeroMobileMockup } from './HeroPhoneMockup'
import { SiteContainer } from './PageSection'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pb-12 pt-6 noise-bg md:pb-20">
      <SiteContainer>
        <div className="grid w-full min-w-0 grid-cols-1 items-center gap-10 lg:grid-cols-[55%_45%]">
          <motion.div
            className="flex w-full min-w-0 flex-col items-start text-left"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-display max-w-full"
            >
              <span className="text-white">datum.ai</span>
              <span className="text-[var(--color-text-muted)]">, the smartest tool on site.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-body mt-6 max-w-[480px] text-[var(--color-text-muted)]"
            >
              Built for tradies, with tradies. Job management, AI toolbox, cashflow and your
              crew, all in one place.
            </motion.p>

            <motion.div
              id="waitlist-hero"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mt-10 w-full min-w-0 max-w-[480px]"
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
      </SiteContainer>
    </section>
  )
}
