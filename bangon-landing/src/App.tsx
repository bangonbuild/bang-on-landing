import { motion } from 'framer-motion'
import {
  Banknote,
  FileText,
  Image as ImageIcon,
  ReceiptText,
  Ruler,
  ScanLine,
} from 'lucide-react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { StatsBar } from './components/StatsBar'
import { SectionLabel } from './components/SectionLabel'
import { NudgeDemo } from './components/NudgeDemo'
import {
  FeatureSection,
  MoneyCards,
  ToolboxList,
} from './components/FeatureSection'
import { PhoneMockup } from './components/PhoneMockup'
import { BuiltWithTradies } from './components/BuiltWithTradies'
import { WaitlistForm } from './components/WaitlistForm'
import { Footer } from './components/Footer'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const painPoints = [
  'Quotes take hours to write up',
  'Job notes live in text threads',
  "Can't remember what AS 1684 says",
  'Site photos are scattered everywhere',
  'Invoices get sent late — or not at all',
]

function ProblemSection() {
  return (
    <section className="px-6 py-[60px] md:px-12 md:py-[120px]">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          variants={fadeUp}
          className="flex flex-col gap-6"
        >
          <SectionLabel>THE PROBLEM</SectionLabel>
          <h2 className="font-display text-[32px] font-bold leading-tight text-white md:text-[40px]">
            Tradies are running multi-hundred-thousand dollar jobs with a notepad and a
            phone call.
          </h2>
          <p className="font-body text-base leading-6 text-[var(--color-text-muted)]">
            There&apos;s no shortage of tradie apps. But most are built by software people
            who&apos;ve never set foot on a slab. They&apos;re clunky, slow, and designed
            for an office, not a worksite.
            <br />
            <br />
            Bang On is different. Built from the ground up with tradies. Fast enough to use
            with dirty hands. Smart enough to actually help.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          variants={fadeUp}
          className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8"
        >
          <ul className="flex flex-col gap-4">
            {painPoints.map((point) => (
              <li
                key={point}
                className="flex gap-3 font-body text-[15px] text-[var(--color-text-muted)]"
              >
                <span className="shrink-0 text-[var(--color-danger)]">✗</span>
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

function NudgeSection() {
  return (
    <section className="px-6 py-[60px] md:px-12 md:py-[120px]">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          className="flex flex-col items-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <SectionLabel>ASK NUDGE</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-6 font-display text-[36px] font-bold text-white md:text-[48px]"
          >
            Ask anything. Get an answer in seconds.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-4 max-w-[560px] font-body text-base text-[var(--color-text-muted)]"
          >
            Nudge knows the NCC, AS 1684, timber framing, concrete, roofing, and everything
            in between. Try it.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          variants={fadeUp}
        >
          <NudgeDemo />
        </motion.div>
      </div>
    </section>
  )
}

function SnapMockup() {
  return (
    <div className="mx-auto flex w-full max-w-[390px] flex-col items-center justify-center rounded-[32px] border border-[var(--color-border)] bg-[var(--color-surface)] aspect-[390/520] p-8">
      <ScanLine className="h-12 w-12 text-[var(--color-text-dim)]" strokeWidth={1.25} />
      <p className="mt-4 font-body text-xs text-[var(--color-text-dim)]">
        App screenshot coming soon
      </p>
    </div>
  )
}

function FinalCta() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 py-[60px] md:px-12 md:py-[120px]">
      <motion.div
        className="mx-auto flex max-w-[640px] flex-col items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut' }}>
          <SectionLabel>GET EARLY ACCESS</SectionLabel>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-6 font-display text-[40px] font-bold text-white md:text-[56px]"
        >
          Be first on site.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-4 max-w-[480px] font-body text-base text-[var(--color-text-muted)]"
        >
          Bang On is coming to iPhone and Android. Join the waitlist and be first to know
          when we launch.
        </motion.p>
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-10 w-full"
        >
          <WaitlistForm variant="cta" />
        </motion.div>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-4 font-body text-[13px] text-[var(--color-text-dim)]"
        >
          No spam. No sales calls. Just a heads up when we&apos;re ready.
        </motion.p>
      </motion.div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div id="stats">
          <StatsBar />
        </div>
        <ProblemSection />
        <NudgeSection />
        <FeatureSection
          label="SNAP"
          headline="Point. Snap. Done."
          body="Take a photo of anything on site — a connection detail, a crack, a plan, a material. Bang On reads it and tells you exactly what you need to know.

Identify issues before they become problems. Get NCC-aware advice in seconds. No more calling the engineer for something you could've solved on the spot."
          features={[
            'Identify materials and components',
            'Spot compliance issues instantly',
            'Scan plans and get plain-language explanations',
          ]}
          imagePosition="left"
          mockupLabel="SNAP screen coming soon"
        >
          <SnapMockup />
        </FeatureSection>
        <FeatureSection
          label="JOBS"
          headline="Every job. In one place."
          body="Create a job, add your client details, and Bang On builds a living timeline as the work progresses. Notes, photos, quotes, client updates — all in one place, in the order they happened.

Ask Nudge about the job specifically. It knows the client, the address, the status, and the history. Like having a site manager in your pocket."
          features={[
            'Job timeline with notes, photos, and documents',
            'AI that knows your job context',
            'Client details and contact history',
          ]}
          imagePosition="right"
          mockupLabel="Job detail screen coming soon"
        />
        <section className="bg-[var(--color-surface)] px-6 py-[60px] md:px-12 md:py-[120px]">
          <div className="mx-auto max-w-[1100px]">
            <motion.div
              className="flex flex-col items-center text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ staggerChildren: 0.1 }}
            >
              <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <SectionLabel>MONEY</SectionLabel>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="mt-6 font-display text-[36px] font-bold text-white md:text-[48px]"
              >
                Quotes in seconds. Invoices on the spot.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="mt-4 max-w-[560px] font-body text-base text-[var(--color-text-muted)]"
              >
                Describe the scope of work and Bang On writes the quote. Line items, GST,
                totals — done. Convert it to an invoice when the job&apos;s complete. Track
                what&apos;s outstanding, what&apos;s overdue, and what&apos;s been paid.
              </motion.p>
            </motion.div>
            <MoneyCards
              cards={[
                {
                  icon: ReceiptText,
                  title: 'Quotes',
                  body: 'Describe the job. Nudge writes the quote.',
                },
                {
                  icon: FileText,
                  title: 'Invoices',
                  body: 'Convert any quote to an invoice in one tap.',
                },
                {
                  icon: Banknote,
                  title: 'Money dashboard',
                  body: 'Outstanding, overdue, paid. At a glance.',
                },
              ]}
            />
          </div>
        </section>
        <section className="px-6 py-[60px] md:px-12 md:py-[120px]">
          <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <PhoneMockup label="Toolbox screen coming soon" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              variants={fadeUp}
              className="flex flex-col gap-6"
            >
              <SectionLabel>TOOLBOX</SectionLabel>
              <h2 className="font-display text-[32px] font-bold text-white md:text-[40px]">
                The tools you reach for every day.
              </h2>
              <p className="font-body text-base text-[var(--color-text-muted)]">
                Measure, calculate, estimate, report. Bang On&apos;s toolbox has the things
                you actually need on site — not a hundred features you&apos;ll never use.
              </p>
              <ToolboxList
                items={[
                  {
                    icon: Ruler,
                    name: 'Measure & calculate',
                    description: 'Concrete, timber, roof pitch — offline.',
                  },
                  {
                    icon: ReceiptText,
                    name: 'Quick quote',
                    description: 'A quote without opening a job.',
                  },
                  {
                    icon: ImageIcon,
                    name: 'Photo report',
                    description: 'Select photos, Nudge writes the report.',
                  },
                  {
                    icon: FileText,
                    name: 'Invoice',
                    description: 'Bill your client on the spot.',
                  },
                ]}
              />
            </motion.div>
          </div>
        </section>
        <BuiltWithTradies />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
