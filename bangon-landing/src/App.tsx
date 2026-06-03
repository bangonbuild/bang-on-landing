import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Banknote,
  BookOpen,
  ClipboardList,
  FileText,
  Image as ImageIcon,
  ReceiptText,
  Ruler,
  ScanLine,
  Shield,
} from 'lucide-react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { FeatureCallouts } from './components/FeatureCallouts'
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
import { SuggestToolModal } from './components/SuggestToolModal'
import { SuggestToolProvider, useSuggestTool } from './context/SuggestToolContext'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const painPoints = [
  'No single place to manage jobs end to end',
  'Quotes and invoices take too long',
  "AI tools that don't know the trade",
  'Site photos scattered across text threads',
  'Client updates that take forever to write',
  'Apps built for offices, not worksites',
]

function ProblemSection() {
  return (
    <section className="overflow-hidden px-6 py-[60px] md:px-12 md:py-[120px]">
      <div className="mx-auto grid min-w-0 max-w-[1100px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          variants={fadeUp}
          className="flex min-w-0 flex-col items-start gap-6"
        >
          <SectionLabel>THE PROBLEM</SectionLabel>
          <h2 className="font-display text-[32px] font-bold leading-tight text-white md:text-[40px]">
            Tradies deserve better tools.
          </h2>
          <p className="whitespace-pre-line font-body text-base leading-7 text-[var(--color-text-muted)]">
            {`Running a building job means managing clients, crew, subcontractors, cashflow, compliance, and a hundred moving parts, all at once, often from a muddy worksite with one bar of signal.

The apps built to help? Clunky. Desktop-first. Designed by people who've never set foot on a slab. They solve one problem and ignore the rest.

datum.ai is different. One app that connects the job, the cash, the crew, and the site. AI that actually understands the trade. Built for the conditions tradies work in every day.`}
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
    <section id="nudge" className="px-6 py-[60px] md:px-12 md:py-[120px]">
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
            Site knowledge. On demand.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-4 max-w-[600px] font-body text-base text-[var(--color-text-muted)]"
          >
            Nudge knows Australian building standards, timber framing, concrete, roofing,
            NCC compliance, and more. Whatever the trade, whatever the problem, ask Nudge
            and get a straight answer.
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
          datum.ai is coming to iPhone and Android. Join the waitlist and be first to know
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

function ToolboxSection() {
  const { openSuggestModal } = useSuggestTool()

  return (
    <section
      id="toolbox"
      className="px-6 py-[60px] md:px-12 md:py-[120px]"
    >
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <PhoneMockup label="Toolbox screen coming soon" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          variants={fadeUp}
          className="flex flex-col items-start gap-6"
        >
          <SectionLabel>TOOLBOX</SectionLabel>
          <h2 className="font-display text-[32px] font-bold text-white md:text-[40px]">
            The tools you reach for every day.
          </h2>
          <p className="font-body text-base text-[var(--color-text-muted)]">
            From quick calculations to photo reports and compliance tools, the Toolbox is
            built around the tasks that come up on site every day. Got something missing?{' '}
            <button
              type="button"
              onClick={openSuggestModal}
              className="cursor-pointer text-white underline-offset-2 hover:underline"
            >
              Suggest it
            </button>
            . The best ideas come from the trade.
          </p>
          <ToolboxList
            items={[
              {
                icon: Ruler,
                name: 'Measure & calculate',
                description:
                  'Concrete, timber, roof pitch. Works offline, no signal needed.',
              },
              {
                icon: ImageIcon,
                name: 'Photo report',
                description:
                  'Select site photos, Nudge writes the progress report. Client-ready in seconds.',
              },
              {
                icon: Shield,
                name: 'SWMS generator',
                description:
                  'Describe the high-risk work, Nudge drafts your Safe Work Method Statement. Coming soon.',
              },
              {
                icon: ClipboardList,
                name: 'Defect report',
                description:
                  'Document and photograph defects on site. Exportable report. Coming soon.',
              },
              {
                icon: BookOpen,
                name: 'Building codes',
                description:
                  'State-by-state building code library. Plain language, fast lookup. Coming soon.',
              },
            ]}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default function App() {
  const [suggestModalOpen, setSuggestModalOpen] = useState(false)

  return (
    <SuggestToolProvider openSuggestModal={() => setSuggestModalOpen(true)}>
      <div className="w-full overflow-x-hidden">
      <Nav />
      <main className="w-full min-w-0 overflow-x-hidden">
        <Hero />
        <ProblemSection />
        <FeatureCallouts />
        <NudgeSection />
        <FeatureSection
          id="snap"
          label="SNAP"
          headline="Point. Snap. Done."
          body="Take a photo of anything on site: a connection detail, a crack, a plan, a material. datum.ai reads it and tells you exactly what you need to know.

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
          id="jobs"
          label="JOBS"
          headline={
            <>
              Every job.
              <br />
              In one place.
            </>
          }
          body={`Create a job, add your client, and datum.ai builds a living timeline as the work progresses. Notes, photos, quotes, invoices, and site reports, all in one place, in the order they happened.

Ask Nudge about the job specifically. It knows the client, the address, the status, and what's happened on site. Need to update your client? Nudge writes it. Need to send a site report, quote, or invoice? One tap.

Add your crew to the job and keep everyone across what's happening: subbies, foremen, and site supervisors all on the same page.`}
          bodyClassName="leading-7"
          features={[
            'Living job timeline: notes, photos, quotes, invoices',
            'Nudge polishes your client updates automatically',
            'Share reports, quotes and invoices with one tap',
            'Add your crew and keep everyone across the job',
          ]}
          imagePosition="right"
          mockupLabel="Job detail screen coming soon"
        />
        <section
          id="money"
          className="bg-[var(--color-surface)] px-6 py-[60px] md:px-12 md:py-[120px]"
        >
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
                className="mt-6 max-w-full font-display text-[36px] font-bold leading-tight text-white md:text-[48px]"
              >
                Quotes. Invoices. Cashflow.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="mt-4 max-w-[580px] font-body text-base text-[var(--color-text-muted)]"
              >
                Describe the scope and Nudge writes the quote. Convert it to an invoice when
                the job&apos;s done. Track what&apos;s outstanding, chase what&apos;s overdue,
                and know exactly where you stand, all from your phone.
              </motion.p>
            </motion.div>
            <MoneyCards
              cards={[
                {
                  icon: Banknote,
                  title: 'Money dashboard',
                  body: 'Outstanding, overdue, paid this month. Your cashflow at a glance, no spreadsheet needed.',
                },
                {
                  icon: ReceiptText,
                  title: 'Quotes',
                  body: 'Describe the job. Nudge writes the quote. Line items, GST, totals, done in seconds.',
                },
                {
                  icon: FileText,
                  title: 'Invoices',
                  body: "Convert any quote to an invoice in one tap. Send payment reminders to clients when they're overdue.",
                },
              ]}
            />
          </div>
        </section>
        <ToolboxSection />
        <BuiltWithTradies />
        <FinalCta />
      </main>
      <Footer />
      <SuggestToolModal
        open={suggestModalOpen}
        onClose={() => setSuggestModalOpen(false)}
      />
      </div>
    </SuggestToolProvider>
  )
}
