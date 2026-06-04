import { SiteContainer } from './PageSection'

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <SiteContainer className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-body font-semibold text-white">datum.ai</p>
          <p className="text-body mt-1 text-[var(--color-text-muted)]">Built for the job.</p>
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
