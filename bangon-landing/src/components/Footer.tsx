function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-10">
      <div className="site-container flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-[family-name:var(--font-display)] text-[16px] font-semibold text-white">
            datum.ai
          </p>
          <p className="text-small mt-1 text-[var(--color-text-muted)]">
            The operating system for the built environment.
          </p>
        </div>

        <nav className="text-small flex flex-wrap items-center gap-6 text-[var(--color-text-dim)] md:justify-center">
          <a href="#" className="min-h-[44px] transition-colors hover:text-[var(--color-text-muted)]">
            Privacy
          </a>
          <a href="#" className="min-h-[44px] transition-colors hover:text-[var(--color-text-muted)]">
            Terms
          </a>
          <a href="#" className="min-h-[44px] transition-colors hover:text-[var(--color-text-muted)]">
            Contact
          </a>
          <a
            href="#"
            className="inline-flex min-h-[44px] items-center transition-colors hover:text-white"
            aria-label="Instagram"
          >
            {/* TODO: add Instagram handle */}
            <InstagramIcon />
          </a>
        </nav>

        <p className="text-small text-[var(--color-text-muted)] md:text-right">
          © 2026 datum.ai. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
