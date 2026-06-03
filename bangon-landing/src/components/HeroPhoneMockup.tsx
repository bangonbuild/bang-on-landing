import { Smartphone } from 'lucide-react'

export function HeroPhoneMockup() {
  return (
    <div
      className="relative flex h-[580px] w-[300px] flex-col items-center justify-center rounded-[40px] border-2 border-[var(--color-border-2)] bg-[var(--color-surface)]"
      style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)' }}
    >
      {/* TODO: replace with real app screenshot or screen recording */}
      <Smartphone className="h-12 w-12 text-[var(--color-text-dim)]" strokeWidth={1.25} />
      <p className="mt-4 font-body text-xs text-[var(--color-text-dim)]">
        App screenshot coming soon
      </p>
    </div>
  )
}
