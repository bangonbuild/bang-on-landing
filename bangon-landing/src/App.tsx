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
import { Footer } from './components/Footer'
import { SuggestToolModal } from './components/SuggestToolModal'
import { SuggestToolProvider, useSuggestTool } from './context/SuggestToolContext'
import { PageSection } from './components/PageSection'
import { SectionDivider } from './components/SectionDivider'
import { Loader } from './components/Loader'
import { PricingModal } from './components/PricingModal'
import { WaitlistModal } from './components/WaitlistModal'
import { NudgeDrawer } from './components/NudgeDrawer'
import { NudgeFab } from './components/NudgeFab'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const MOBILE_NUDGE_COPY =
  'Nudge powers datum.ai. He knows Australian building standards, NCC compliance, and every trade on site. And he\u2019s getting smarter every day — trained on real tradie feedback.'

function NudgeSection() {
  return (
    <PageSection id="nudge">
      <div className="flex flex-col items-center text-center sm:hidden">
        <SectionLabel centered>ASK NUDGE</SectionLabel>
        <h2 className="text-display mt-6 text-white">Give Nudge a crack.</h2>
        <p className="nudge-mobile-copy mb-4 mt-4 max-w-[600px] text-[var(--color-text-muted)]">
          {MOBILE_NUDGE_COPY}
        </p>
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
  )
}

function SnapMockup() {
  return (
    <div className="mx-auto flex aspect-[390/520] w-full min-w-0 max-w-[390px] flex-col items-center justify-center rounded-[32px] border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
      <ScanLine className="h-12 w-12 text-[var(--color-text-dim)]" strokeWidth={1.25} />
      <span className="coming-soon-badge mt-4">Coming soon</span>
    </div>
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
          <p className="text-body leading-[1.65] text-[var(--color-text-muted)]">
            Measure, calculate, report, and comply. The Toolbox covers what comes up on site
            every day — not a hundred features you&apos;ll never use. Something missing?{' '}
            <button type="button" onClick={openSuggestModal} className="toolbox-suggest-link">
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
                  'Describe the high-risk work, Nudge drafts your Safe Work Method Statement.',
                comingSoon: true,
              },
              {
                icon: ClipboardList,
                name: 'Defect report',
                description:
                  'Document and photograph defects on site. Exportable report.',
                comingSoon: true,
              },
              {
                icon: BookOpen,
                name: 'Building codes',
                description:
                  'State-by-state building code library. Plain language, fast lookup.',
                comingSoon: true,
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
  const [waitlistOpen, setWaitlistOpen] = useState(false)
  const [nudgeDrawerOpen, setNudgeDrawerOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 600)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <Nav
        onPricingClick={() => setPricingOpen(true)}
        onWaitlistClick={() => setWaitlistOpen(true)}
      />
      <div className="w-full overflow-x-hidden">
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
            body="Point your camera at anything on site. Nudge reads it and tells you what you need to know — on the spot."
            features={[
              'Identify materials and components',
              'Read plans and get plain-language answers',
              'Get NCC-aware advice in seconds',
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
            body="Create a job, add your client, and build a living timeline as work progresses. Keep your client across every step — notes, photos, quotes and invoices, all in one place."
            features={[
              'Living timeline — notes, photos, quotes, invoices',
              'Keep clients updated with one tap',
              'Add your crew and keep everyone in the loop',
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
        </main>
        <Footer />
        <NudgeFab
          open={nudgeDrawerOpen}
          onToggle={() => setNudgeDrawerOpen((v) => !v)}
        />
        <NudgeDrawer open={nudgeDrawerOpen} onClose={() => setNudgeDrawerOpen(false)} />
        <PricingModal
          open={pricingOpen}
          onClose={() => setPricingOpen(false)}
          onJoinWaitlist={() => setWaitlistOpen(true)}
        />
        <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
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
