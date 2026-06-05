import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { NudgeDemo } from './NudgeDemo'

interface NudgeModalProps {
  open: boolean
  onClose: () => void
}

export function NudgeModal({ open, onClose }: NudgeModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-labelledby="nudge-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex flex-col bg-[var(--color-bg)]"
        >
          <header className="flex shrink-0 items-center justify-between px-4 pb-2 pt-4">
            <h2 id="nudge-modal-title" className="text-[20px] font-semibold text-white">
              Ask Nudge
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center"
              aria-label="Close"
            >
              <X className="h-5 w-5 text-[var(--color-text-muted)]" strokeWidth={1.5} />
            </button>
          </header>
          <div className="min-h-0 flex-1 px-4 pb-4">
            <NudgeDemo layout="modal" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
