import { motion } from 'framer-motion'
import { SectionLabel } from '../components/SectionLabel'
import { FeatureList } from '../components/FeatureList'
import { PhoneMockup } from '../components/PhoneMockup'
import { fadeUp, fadeUpTransition, viewportOnce } from '../motion'

const features = [
  'AI-generated quotes',
  'Invoices in one tap',
  'Payment tracking',
  'Bookkeeping integration',
]

export function MoneySection() {
  return (
    <section id="money" className="section-padding">
      <div className="site-container">
        <div className="grid min-w-0 grid-cols-1 items-center gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ staggerChildren: 0.08 }}
            className="order-1 flex flex-col items-start lg:order-none"
          >
            <motion.div variants={fadeUp} transition={fadeUpTransition}>
              <SectionLabel>MONEY</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              transition={fadeUpTransition}
              className="text-display mt-6 text-white"
            >
              Quotes. Invoices. Cashflow.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={fadeUpTransition}
              className="text-body mt-6 text-[var(--color-text-muted)]"
            >
              Create quotes in seconds, convert them to invoices, and stay on top of what&apos;s
              paid, overdue and outstanding. Xero and MYOB integrations coming soon.
            </motion.p>
            <motion.div variants={fadeUp} transition={fadeUpTransition} className="mt-8">
              <FeatureList items={features} />
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={fadeUpTransition}
            variants={fadeUp}
            className="order-2 lg:order-none"
          >
            <PhoneMockup label="Money screen coming soon" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
