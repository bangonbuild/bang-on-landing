import { motion } from 'framer-motion'
import { PhoneMockup } from '../components/PhoneMockup'
import { WaitlistForm } from '../components/WaitlistForm'
import { fadeUp, fadeUpTransition } from '../motion'

export function Hero() {
  return (
    <section className="section-padding flex min-h-screen items-center pt-[72px]">
      <div className="site-container w-full">
        <div className="grid min-w-0 grid-cols-1 items-center gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.08 }}
            className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-left"
          >
            <motion.div
              variants={fadeUp}
              transition={fadeUpTransition}
              className="flex flex-col gap-2"
            >
              <h1 className="text-hero text-white">datum.ai</h1>
              <p className="text-hero text-[var(--color-text-muted)]">
                The operating system for the built environment.
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={fadeUpTransition}
              className="mt-6 max-w-[520px] font-[family-name:var(--font-body)] text-[17px] leading-6 text-[var(--color-text-muted)]"
            >
              From first measure to final payment, datum keeps your work, team, clients and
              business connected.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={fadeUpTransition}
              className="mt-8 w-full max-w-[520px]"
            >
              <WaitlistForm variant="inline" />
              <p className="text-small mt-3 text-[var(--color-text-muted)]">
                Free for your first 3 months. No credit card needed.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={fadeUpTransition}
              className="mt-10 w-full lg:hidden"
            >
              <PhoneMockup />
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            transition={fadeUpTransition}
            variants={fadeUp}
            className="hidden justify-center lg:flex"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
