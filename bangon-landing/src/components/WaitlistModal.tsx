import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { ModalPortal } from './ModalPortal'
import { WaitlistForm } from './WaitlistForm'

interface WaitlistModalProps {
  open: boolean
  onClose: () => void
}

export function WaitlistModal({ open, onClose }: WaitlistModalProps) {
  if (!open) return null

  return (
    <ModalPortal>
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close waitlist"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="modal-overlay"
              onClick={onClose}
            />
            <div className="modal-shell">
              <motion.div
                role="dialog"
                aria-labelledby="waitlist-title"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="modal-card"
              >
              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-[var(--color-text-muted)]" strokeWidth={1.5} />
              </button>
              <h2 id="waitlist-title" className="text-heading pr-10 text-white">
                Be first on site.
              </h2>
              <p className="text-body mt-4 text-[var(--color-text-muted)]">
                datum.ai is coming to iPhone and Android. Join the waitlist, get the first 3
                months free, and help shape what we build next.
              </p>
              <div className="mt-8">
                <WaitlistForm
                  variant="modal"
                  className="mx-0 max-w-none"
                  onSuccess={onClose}
                  autoCloseMs={2500}
                />
              </div>
              <p className="text-body mt-4 text-center text-[13px] text-[var(--color-text-muted)]">
                Free for your first 3 months. No spam. No credit card.
              </p>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </ModalPortal>
  )
}
