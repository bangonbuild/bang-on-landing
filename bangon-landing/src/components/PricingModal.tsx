import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

interface PricingModalProps {
  open: boolean
  onClose: () => void
  onJoinWaitlist: () => void
}

export function PricingModal({ open, onClose, onJoinWaitlist }: PricingModalProps) {
  const handleJoin = () => {
    onClose()
    onJoinWaitlist()
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close pricing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-[rgba(0,0,0,0.75)]"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-labelledby="pricing-title"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-1/2 z-[91] w-[calc(100%-32px)] max-w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <h2 id="pricing-title" className="text-heading text-white">
                Pricing
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 shrink-0 items-center justify-center"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-[var(--color-text-muted)]" strokeWidth={1.5} />
              </button>
            </div>
            <p className="text-body whitespace-pre-line leading-6 text-[var(--color-text-muted)]">
              {`datum.ai is free for your first 3 months — no credit card, no catch. All we ask is honest feedback that helps us build a better product.

After 3 months, we'll have pricing sorted. You'll hear from us before anything changes.`}
            </p>
            <button type="button" onClick={handleJoin} className="btn-primary mt-8 w-full">
              Join the waitlist →
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
