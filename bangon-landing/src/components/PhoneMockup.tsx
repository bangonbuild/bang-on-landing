import { Smartphone } from 'lucide-react'

interface PhoneMockupProps {
  label?: string
  className?: string
}

export function PhoneMockup({
  label = 'App screenshot coming soon',
  className = '',
}: PhoneMockupProps) {
  return (
    <div className={`mx-auto w-full max-w-[260px] ${className}`}>
      {/* TODO: replace with real screenshot */}
      <div
        className="flex h-[500px] w-full flex-col items-center justify-center rounded-[36px] border-2 border-[var(--color-border-2)] bg-[var(--color-surface)]"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.03)' }}
      >
        <Smartphone className="h-10 w-10 text-[var(--color-text-dim)]" strokeWidth={1.25} />
        <p className="text-small mt-4 text-center text-[var(--color-text-dim)]">{label}</p>
      </div>
    </div>
  )
}
