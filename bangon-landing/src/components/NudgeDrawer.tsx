import { AnimatePresence, motion } from 'framer-motion'
import { ModalPortal } from './ModalPortal'
import { NudgeDemo } from './NudgeDemo'

interface NudgeDrawerProps {
  open: boolean
  onClose: () => void
}

export function NudgeDrawer({ open, onClose }: NudgeDrawerProps) {
  if (!open) return null

  return (
    <ModalPortal>
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close Nudge"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-[rgba(0,0,0,0.6)]"
              onClick={onClose}
            />
            <motion.div
              role="dialog"
              aria-label="Ask Nudge"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
              className="fixed bottom-0 left-0 right-0 z-[101] flex h-[88vh] flex-col overflow-hidden rounded-t-[20px] bg-[var(--color-bg)]"
            >
              <div className="flex shrink-0 justify-center pt-3">
                <div className="h-1 w-10 rounded-full bg-[var(--color-border-2)]" />
              </div>
              <div className="min-h-0 flex-1 px-4 pb-4">
                <NudgeDemo layout="modal" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </ModalPortal>
  )
}
