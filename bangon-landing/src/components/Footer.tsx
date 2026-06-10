import { SiteContainer } from './PageSection'

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
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <SiteContainer className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-body font-semibold text-white">datum.ai</p>
          <p className="text-body mt-1 text-[var(--color-text-muted)]">Built for the job.</p>
          <a
            href="#"
            className="mt-4 inline-flex min-h-[44px] items-center text-[var(--color-text-muted)] transition-colors hover:text-white"
            aria-label="Instagram"
          >
            {/* TODO: add Instagram handle */}
            <InstagramIcon />
          </a>
        </div>
        <nav className="text-body flex flex-wrap gap-6 text-[var(--color-text-dim)] md:justify-center">
          <a href="#" className="min-h-[44px] transition-colors hover:text-[var(--color-text-muted)]">
            Privacy
          </a>
          <a href="#" className="min-h-[44px] transition-colors hover:text-[var(--color-text-muted)]">
            Terms
          </a>
          <a href="#" className="min-h-[44px] transition-colors hover:text-[var(--color-text-muted)]">
            Contact
          </a>
        </nav>
        <p className="text-body text-[var(--color-text-muted)] md:text-right">
          © 2026 datum.ai. All rights reserved.
        </p>
      </SiteContainer>
    </footer>
  )
}
