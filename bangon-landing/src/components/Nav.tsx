import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Nudge', href: '#nudge' },
  { label: 'Toolkit', href: '#toolkit' },
  { label: 'Jobs', href: '#jobs' },
  { label: 'Money', href: '#money' },
  { label: 'Crew', href: '#crew' },
]

interface NavProps {
  onPricingClick: () => void
  onWaitlistClick: () => void
}

export function Nav({ onPricingClick, onWaitlistClick }: NavProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="site-nav w-full">
      <nav
        className={`nav-bar flex h-[72px] w-full items-center border-b ${
          scrolled ? 'nav-bar-scrolled' : 'nav-bar-top'
        }`}
      >
        <div className="site-container flex h-full w-full items-center justify-between gap-4">
          <a
            href="#"
            className="shrink-0 font-[family-name:var(--font-display)] text-[18px] font-semibold text-white"
          >
            datum.ai
          </a>

          <div className="hidden min-w-0 flex-1 items-center justify-center gap-2 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-pill">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={onPricingClick}
              className="btn-secondary hidden sm:inline-flex"
            >
              Pricing
            </button>
            <button type="button" onClick={onWaitlistClick} className="btn-primary">
              Join waitlist
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
