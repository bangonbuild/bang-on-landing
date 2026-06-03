export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between md:px-12">
        <div>
          <p className="font-display text-base font-bold text-white">datum.ai</p>
          <p className="mt-1 font-body text-[13px] text-[var(--color-text-muted)]">
            Built for the job.
          </p>
        </div>
        <nav className="flex flex-wrap gap-6 font-body text-[13px] text-[var(--color-text-dim)] md:justify-center">
          <a href="#" className="transition-colors hover:text-[var(--color-text-muted)]">
            Privacy
          </a>
          <a href="#" className="transition-colors hover:text-[var(--color-text-muted)]">
            Terms
          </a>
          {/* TODO: wire to support email */}
          <a href="#" className="transition-colors hover:text-[var(--color-text-muted)]">
            Contact
          </a>
        </nav>
        <p className="font-body text-[13px] text-[var(--color-text-muted)] md:text-right">
          © 2026 datum.ai. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
