import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Ask Nudge', href: '#nudge' },
  { label: 'Snap', href: '#snap' },
  { label: 'Jobs', href: '#jobs' },
  { label: 'Money', href: '#money' },
  { label: 'Toolbox', href: '#toolbox' },
]

export function Nav() {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToWaitlist = () => {
    document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`z-50 w-full transition-all duration-300 ${
          sticky ? 'fixed top-0 left-0 right-0' : 'relative'
        }`}
      >
        <nav
          className={`flex h-[72px] w-full items-center border-b transition-all duration-300 ${
            sticky
              ? 'border-[var(--color-border)] bg-[rgba(32,33,36,0.85)] backdrop-blur-[12px]'
              : 'border-transparent bg-[var(--color-bg)]'
          }`}
        >
          <div className="site-container flex h-full w-full items-center justify-between gap-4">
            <a href="#" className="text-body shrink-0 font-semibold text-white">
              datum.ai
            </a>

            <div className="hidden min-w-0 flex-1 items-center justify-center gap-2 lg:flex">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="nav-pill">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-2 md:gap-3">
              <span className="nav-action hidden sm:inline-flex" role="presentation">
                Pricing
              </span>
              <button type="button" onClick={scrollToWaitlist} className="nav-action">
                Join waitlist
              </button>
            </div>
          </div>
        </nav>
      </header>
      {sticky && <div className="h-[72px] shrink-0" aria-hidden />}
    </>
  )
}
