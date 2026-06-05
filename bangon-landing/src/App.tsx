import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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
  MoneyIntegrationsNote,
  ToolboxList,
} from './components/FeatureSection'
import { PhoneMockup } from './components/PhoneMockup'
import { BuiltWithTradies } from './components/BuiltWithTradies'
import { WaitlistForm } from './components/WaitlistForm'
import { Footer } from './components/Footer'
import { SuggestToolModal } from './components/SuggestToolModal'
import { SuggestToolProvider, useSuggestTool } from './context/SuggestToolContext'
import { PageSection } from './components/PageSection'
import { SectionDivider } from './components/SectionDivider'
import { Loader } from './components/Loader'
import { PricingModal } from './components/PricingModal'
import { NudgeModal } from './components/NudgeModal'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function NudgeSection() {
  const [nudgeOpen, setNudgeOpen] = useState(false)

  return (
    <>
      <PageSection id="nudge">
        <div className="flex flex-col items-center text-center sm:hidden">
          <SectionLabel centered>ASK NUDGE</SectionLabel>
          <h2 className="text-display mt-6 text-white">Give Nudge a crack.</h2>
          <button
            type="button"
            onClick={() => setNudgeOpen(true)}
            className="btn-primary mt-8 w-full max-w-[400px]"
          >
            Try Nudge →
          </button>
        </div>

        <div className="hidden sm:block">
          <div className="flex flex-col items-center text-center">
            <SectionLabel centered>ASK NUDGE</SectionLabel>
            <p className="text-body mt-6 max-w-[600px] text-[var(--color-text-muted)]">
              Nudge powers datum.ai and knows Australian building standards, timber framing,
              concrete, plumbing, NCC compliance, and more. Whatever the trade, whatever the
              problem, ask Nudge and get a straight answer. Chat through text or voice.
            </p>
          </div>
          <motion.div
            className="mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            variants={fadeUp}
          >
            <NudgeDemo layout="embedded" />
          </motion.div>
        </div>
      </PageSection>
      <NudgeModal open={nudgeOpen} onClose={() => setNudgeOpen(false)} />
    </>
  )
}

function SnapMockup() {
  return (
    <div className="mx-auto flex aspect-[390/520] w-full min-w-0 max-w-[390px] flex-col items-center justify-center rounded-[32px] border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
      <ScanLine className="h-12 w-12 text-[var(--color-text-dim)]" strokeWidth={1.25} />
      <p className="text-body mt-4 text-[var(--color-text-dim)]">App screenshot coming soon</p>
    </div>
  )
}

function FinalCta() {
  return (
    <PageSection id="early-access" className="flex min-h-screen flex-col justify-center">
      <motion.div
        className="mx-auto flex w-full min-w-0 max-w-[640px] flex-col items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut' }}>
          <SectionLabel centered>GET EARLY ACCESS</SectionLabel>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-display mt-6 text-white"
        >
          Be first on site.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-body mt-4 max-w-[480px] text-[var(--color-text-muted)]"
        >
          datum.ai is coming to iPhone and Android. Join the waitlist, get the first 3 months
          free, and help shape what we build next.
        </motion.p>
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-10 w-full min-w-0"
        >
          <WaitlistForm variant="cta" />
        </motion.div>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-body mt-4 text-[var(--color-text-dim)]"
        >
          Free for your first 3 months. Pricing confirmed before you&apos;re charged — ever.
          No spam. No credit card.
        </motion.p>
      </motion.div>
    </PageSection>
  )
}

function ToolboxSection() {
  const { openSuggestModal } = useSuggestTool()

  return (
    <PageSection id="toolbox">
      <div className="grid min-w-0 grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <PhoneMockup label="Toolbox screen coming soon" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          variants={fadeUp}
          className="flex min-w-0 flex-col items-start gap-6"
        >
          <SectionLabel>TOOLBOX</SectionLabel>
          <h2 className="text-display text-white">The tools you reach for every day.</h2>
          <p className="text-body text-[var(--color-text-muted)]">
            Measure, calculate, report, and comply. The Toolbox covers what comes up on site
            every day — not a hundred features you&apos;ll never use. Something missing?{' '}
            <button
              type="button"
              onClick={openSuggestModal}
              className="min-h-[44px] cursor-pointer text-white underline-offset-2 hover:underline"
            >
              Suggest it
            </button>
            .
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
    </PageSection>
  )
}

function MoneySection() {
  return (
    <PageSection id="money">
      <div className="flex flex-col items-center text-center">
        <SectionLabel centered>MONEY</SectionLabel>
        <h2 className="text-display mt-6 max-w-full text-white">
          Quotes. Invoices. Cashflow.
        </h2>
        <p className="text-body mt-4 max-w-[580px] text-[var(--color-text-muted)]">
          Describe the scope and Nudge writes the quote. Convert it to an invoice when the
          job&apos;s done. Track outstanding, overdue, and paid, all from your phone.
        </p>
        <MoneyIntegrationsNote />
      </div>
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
    </PageSection>
  )
}

function LandingPage() {
  const [pricingOpen, setPricingOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 600)
    return () => window.clearTimeout(t)
  }, [])

  const scrollToWaitlist = () => {
    document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <div className="w-full overflow-x-hidden">
        <Nav onPricingClick={() => setPricingOpen(true)} />
        <main className="w-full min-w-0 overflow-x-hidden">
          <Hero />
          <SectionDivider className="max-sm:hidden" />
          <FeatureCallouts />
          <SectionDivider />
          <NudgeSection />
          <SectionDivider />
          <FeatureSection
            id="snap"
            label="SNAP"
            headline="Point. Snap. Done."
            body="Point your camera at any site problem. Nudge reads it and tells you what you need to know before it becomes a bigger issue."
            features={[
              'Identify materials and components',
              'Spot compliance issues on the spot',
              'Scan plans and get plain-language answers',
            ]}
            imagePosition="left"
            mockupLabel="SNAP screen coming soon"
          >
            <SnapMockup />
          </FeatureSection>
          <SectionDivider />
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
            body="Create a job, add your client, and build a living timeline as work progresses. Nudge polishes your updates. Documents shared with one tap."
            features={[
              'Timeline — notes, photos, quotes, invoices',
              'Nudge polishes your client updates',
              'Add your crew, keep everyone across the job',
            ]}
            imagePosition="right"
            mockupLabel="Job detail screen coming soon"
          />
          <SectionDivider />
          <MoneySection />
          <SectionDivider />
          <ToolboxSection />
          <SectionDivider />
          <BuiltWithTradies />
          <SectionDivider />
          <FinalCta />
        </main>
        <Footer />
        <PricingModal
          open={pricingOpen}
          onClose={() => setPricingOpen(false)}
          onJoinWaitlist={scrollToWaitlist}
        />
      </div>
    </>
  )
}

export default function App() {
  const [suggestModalOpen, setSuggestModalOpen] = useState(false)

  return (
    <SuggestToolProvider openSuggestModal={() => setSuggestModalOpen(true)}>
      <LandingPage />
      <SuggestToolModal open={suggestModalOpen} onClose={() => setSuggestModalOpen(false)} />
    </SuggestToolProvider>
  )
}
