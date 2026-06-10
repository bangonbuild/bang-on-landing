import { MessageCircle, X } from 'lucide-react'

interface NudgeFabProps {
  open: boolean
  onToggle: () => void
}

export function NudgeFab({ open, onToggle }: NudgeFabProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={open ? 'Close Nudge' : 'Ask Nudge'}
      className={`nudge-fab-mobile fixed bottom-5 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-white sm:hidden ${
        open ? 'z-[110]' : 'z-[60]'
      }`}
    >
      {open ? (
        <X size={24} strokeWidth={1.5} className="text-black" />
      ) : (
        <MessageCircle size={24} strokeWidth={1.5} className="text-black" />
      )}
    </button>
  )
}
