import { Smartphone } from 'lucide-react'

interface PhoneMockupProps {
  label?: string
}

export function PhoneMockup({ label = 'App screenshot coming soon' }: PhoneMockupProps) {
  return (
    <div className="mx-auto w-full min-w-0 max-w-[390px]">
      <div
        className="relative flex aspect-[390/700] w-full flex-col items-center justify-center rounded-[40px] border-2 border-[var(--color-border)] bg-[var(--color-surface)] p-8"
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.03)',
        }}
      >
        <div className="absolute inset-4 rounded-[32px] border border-[var(--color-border)] pointer-events-none" />
        <Smartphone className="relative z-10 h-12 w-12 text-[var(--color-text-dim)]" strokeWidth={1.25} />
        <p className="text-body relative z-10 mt-4 text-center text-[var(--color-text-dim)]">
          {label}
        </p>
      </div>
    </div>
  )
}
