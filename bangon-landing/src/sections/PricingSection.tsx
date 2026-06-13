import { motion } from 'framer-motion'
import { SectionLabel } from '../components/SectionLabel'
import { PricingTable } from '../components/PricingTable'
import { fadeUp, fadeUpTransition, viewportOnce } from '../motion'

interface TierCard {
  name: string
  price: string
  subtitle: string
  description: string
  cta: string
  planNote?: string
  highlighted?: boolean
}

interface PricingSectionProps {
  onJoinWaitlist: (planNote?: string) => void
}

const tiers: TierCard[] = [
  {
    name: 'Solo',
    price: '$10/mo',
    subtitle: 'For sole traders and independent professionals.',
    description:
      'Everything you need to stay organised, save time and keep clients in the loop.',
    cta: 'Join waitlist',
  },
  {
    name: 'Crew',
    price: '$40/mo',
    subtitle: 'For growing teams.',
    description:
      'Everything in Solo, plus shared jobs, team collaboration and real-time updates to keep everyone aligned.',
    cta: 'Notify me',
    planNote: 'Interested in Crew plan',
    highlighted: true,
  },
  {
    name: 'Plus',
    price: 'Contact',
    subtitle: 'For established businesses managing larger teams and more complex projects.',
    description:
      'Everything in Crew, plus advanced tools, business insights and greater control as your business grows.',
    cta: 'Contact us',
    planNote: 'Interested in Plus plan',
  },
]

export function PricingSection({ onJoinWaitlist }: PricingSectionProps) {
  return (
    <section id="pricing" className="section-padding">
      <div className="site-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ staggerChildren: 0.08 }}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUp} transition={fadeUpTransition}>
            <SectionLabel>PRICING</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            transition={fadeUpTransition}
            className="text-display mt-6 text-white"
          >
            Simple, honest pricing.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={fadeUpTransition}
            className="mt-4 font-[family-name:var(--font-body)] text-[16px] text-[var(--color-text-muted)]"
          >
            Start free. Grow as you need.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={fadeUpTransition}
            className="mt-12 grid w-full grid-cols-1 gap-4 md:grid-cols-3"
          >
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col rounded-2xl border p-7 text-left ${
                  tier.highlighted
                    ? 'border-[var(--color-border-2)] bg-[var(--color-surface)]'
                    : 'border-[var(--color-border)] bg-[var(--color-surface)]'
                }`}
              >
                <h3 className="font-[family-name:var(--font-display)] text-[20px] font-semibold text-white">
                  {tier.name}
                </h3>
                <p className="mt-2 font-[family-name:var(--font-display)] text-[28px] text-white">
                  {tier.price}
                </p>
                <p className="text-body mt-4 text-[var(--color-text-muted)]">{tier.subtitle}</p>
                <p className="text-body mt-2 flex-1 text-[var(--color-text-muted)]">
                  {tier.description}
                </p>
                <button
                  type="button"
                  onClick={() => onJoinWaitlist(tier.planNote)}
                  className={`mt-6 w-full ${tier.highlighted ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={fadeUpTransition}
            className="mt-12 w-full"
          >
            <PricingTable />
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={fadeUpTransition}
            className="text-small mt-4 max-w-[560px] text-[var(--color-text-muted)]"
          >
            Solo users can link with other Solo users at no extra cost. Crew is for businesses
            managing their team under one account.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
