import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Ask Nudge', href: '#nudge' },
  { label: 'Snap', href: '#snap' },
  { label: 'Jobs', href: '#jobs' },
  { label: 'Money', href: '#money' },
  { label: 'Toolbox', href: '#toolbox' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToWaitlist = () => {
    document.getElementById('waitlist-hero')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 z-50 w-full h-16 bg-[var(--color-bg)] transition-[border-color] ${
        scrolled ? 'border-b border-[var(--color-border)]' : 'border-b border-transparent'
      }`}
    >
      <div className="relative mx-auto flex h-full max-w-[1100px] items-center justify-between px-6 md:px-12">
        <a href="#" className="font-display text-lg font-bold text-white">
          datum.ai
        </a>

        <div className="absolute left-1/2 hidden max-w-[50%] -translate-x-1/2 items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={scrollToWaitlist}
          className="h-8 rounded-lg bg-white px-4 font-display text-[13px] font-medium text-black transition-opacity hover:opacity-90"
        >
          Join waitlist
        </button>
      </div>
    </nav>
  )
}
