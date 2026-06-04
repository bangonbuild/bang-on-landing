import { Smartphone } from 'lucide-react'

export function HeroPhoneMockup() {
  return (
    <div
      className="relative mt-12 hidden h-[500px] w-[260px] max-w-full flex-col items-center justify-center rounded-[40px] border-2 border-[var(--color-border-2)] bg-[var(--color-surface)] lg:flex"
      style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)' }}
    >
      {/* TODO: replace with real app screenshot or screen recording */}
      <Smartphone className="h-10 w-10 text-[var(--color-text-dim)]" strokeWidth={1.25} />
      <p className="mt-4 text-body text-[var(--color-text-dim)]">App screenshot coming soon</p>
    </div>
  )
}

export function HeroMobileMockup() {
  return (
    <div
      className="relative mx-auto mt-6 flex h-[420px] w-full max-w-[260px] flex-col items-center justify-center rounded-[32px] border-2 border-[var(--color-border-2)] bg-[var(--color-surface)] lg:hidden"
      style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)' }}
    >
      {/* TODO: replace with real app screenshot */}
      <Smartphone className="h-10 w-10 text-[var(--color-text-dim)]" strokeWidth={1.25} />
      <p className="mt-4 text-body text-[var(--color-text-dim)]">App screenshot coming soon</p>
    </div>
  )
}
