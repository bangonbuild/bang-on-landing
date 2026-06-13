import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { SectionDivider } from './components/SectionDivider'
import { Loader } from './components/Loader'
import { PricingModal } from './components/PricingModal'
import { WaitlistModal } from './components/WaitlistModal'
import { SuggestToolModal } from './components/SuggestToolModal'
import { NudgeDrawer } from './components/NudgeDrawer'
import { NudgeFab } from './components/NudgeFab'
import { Hero } from './sections/Hero'
import { NudgeSection } from './sections/NudgeSection'
import { ToolkitSection } from './sections/ToolkitSection'
import { JobsSection } from './sections/JobsSection'
import { MoneySection } from './sections/MoneySection'
import { CrewSection } from './sections/CrewSection'
import { PricingSection } from './sections/PricingSection'
import { BuiltToEvolve } from './sections/BuiltToEvolve'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [pricingOpen, setPricingOpen] = useState(false)
  const [waitlistOpen, setWaitlistOpen] = useState(false)
  const [waitlistNote, setWaitlistNote] = useState<string | undefined>()
  const [suggestOpen, setSuggestOpen] = useState(false)
  const [nudgeDrawerOpen, setNudgeDrawerOpen] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 700)
    return () => window.clearTimeout(t)
  }, [])

  const openWaitlist = (planNote?: string) => {
    setWaitlistNote(planNote)
    setWaitlistOpen(true)
  }

  const closeWaitlist = () => {
    setWaitlistOpen(false)
    setWaitlistNote(undefined)
  }

  const openNudge = () => {
    setNudgeDrawerOpen(true)
  }

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <Nav
        onPricingClick={() => setPricingOpen(true)}
        onWaitlistClick={() => openWaitlist()}
      />
      <div className="w-full overflow-x-hidden">
        <main className="w-full min-w-0 overflow-x-hidden">
          <Hero />
          <SectionDivider />
          <NudgeSection onTryNudge={openNudge} />
          <SectionDivider />
          <ToolkitSection onSuggestTool={() => setSuggestOpen(true)} />
          <SectionDivider />
          <JobsSection />
          <SectionDivider />
          <MoneySection />
          <SectionDivider />
          <CrewSection />
          <SectionDivider />
          <PricingSection onJoinWaitlist={openWaitlist} />
          <SectionDivider />
          <BuiltToEvolve onSuggestTool={() => setSuggestOpen(true)} />
        </main>
        <Footer />
      </div>

      <NudgeFab
        open={nudgeDrawerOpen}
        onToggle={() => setNudgeDrawerOpen((v) => !v)}
      />
      <NudgeDrawer open={nudgeDrawerOpen} onClose={() => setNudgeDrawerOpen(false)} />

      <PricingModal
        open={pricingOpen}
        onClose={() => setPricingOpen(false)}
        onJoinWaitlist={() => openWaitlist()}
      />
      <WaitlistModal open={waitlistOpen} onClose={closeWaitlist} planNote={waitlistNote} />
      <SuggestToolModal open={suggestOpen} onClose={() => setSuggestOpen(false)} />
    </>
  )
}
