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
import { FeatureSection, MoneyCards, ToolboxList } from './components/FeatureSection'
import { PhoneMockup } from './components/PhoneMockup'
import { BuiltWithTradies } from './components/BuiltWithTradies'
import { WaitlistForm } from './components/WaitlistForm'
import { Footer } from './components/Footer'
import { SuggestToolModal } from './components/SuggestToolModal'
import { SuggestToolProvider, useSuggestTool } from './context/SuggestToolContext'
import { PageSection } from './components/PageSection'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function NudgeSection() {
  return (
    <PageSection id="nudge">
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
        <NudgeDemo />
      </motion.div>
    </PageSection>
  )
}

function SnapMockup() {
  return (
    <div className="mx-auto flex w-full min-w-0 max-w-[390px] flex-col items-center justify-center rounded-[32px] border border-[var(--color-border)] bg-[var(--color-surface)] aspect-[390/520] p-8">
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
          datum.ai is coming to iPhone and Android. Join the waitlist and get the first 3
          months free. All we ask is honest feedback.
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
          Free for 3 months for waitlist members. No spam. No credit card. Just a heads up
          when we launch.
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
            From quick calculations to photo reports and compliance tools, the Toolbox
            covers the tasks that come up on site every day. Something missing?{' '}
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
    <PageSection id="money" className="bg-[var(--color-surface)]">
      <div className="flex flex-col items-center text-center">
        <SectionLabel centered>MONEY</SectionLabel>
        <h2 className="text-display mt-6 max-w-full text-white">
          Quotes. Invoices. Cashflow.
        </h2>
        <p className="text-body mt-4 max-w-[580px] text-[var(--color-text-muted)]">
          Describe the scope and Nudge writes the quote. Convert it to an invoice when the
          job&apos;s done. Track outstanding, overdue, and paid, all from your phone.
        </p>
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

export default function App() {
  const [suggestModalOpen, setSuggestModalOpen] = useState(false)

  return (
    <SuggestToolProvider openSuggestModal={() => setSuggestModalOpen(true)}>
      <div className="w-full overflow-x-hidden">
        <Nav />
        <main className="w-full min-w-0 overflow-x-hidden">
          <Hero />
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
            body={`Create a job, add your client, and datum.ai builds a living timeline as work progresses. Notes, photos, quotes and invoices, all in one place. Nudge polishes your client updates. Share reports, quotes and invoices with one tap. Add your crew and keep everyone across the job.`}
            features={[
              'Living timeline: notes, photos, quotes, invoices',
              'Nudge writes and polishes your client updates',
              'Share reports and documents with one tap',
              'Add your crew and keep everyone in the loop',
            ]}
            imagePosition="right"
            mockupLabel="Job detail screen coming soon"
          />
          <MoneySection />
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
