import { useEffect, useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle, X } from 'lucide-react'
import { ModalPortal } from './ModalPortal'

interface SuggestToolModalProps {
  open: boolean
  onClose: () => void
}

export function SuggestToolModal({ open, onClose }: SuggestToolModalProps) {
  const [suggestion, setSuggestion] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [newsletter, setNewsletter] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!success) return
    const t = window.setTimeout(() => {
      onClose()
      window.setTimeout(() => {
        setSuccess(false)
        setSuggestion('')
        setName('')
        setEmail('')
        setNewsletter(false)
        setError('')
      }, 300)
    }, 2500)
    return () => window.clearTimeout(t)
  }, [success, onClose])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!suggestion.trim() || !email.trim()) {
      setError('Please add your suggestion and email.')
      return
    }
    setError('')
    // TODO: wire to Airtable / Typeform
    setSuccess(true)
  }

  if (!open) return null

  return (
    <ModalPortal>
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="modal-overlay"
              onClick={onClose}
            />
            <div className="modal-shell">
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="suggest-tool-title"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="modal-card max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute right-4 top-4 text-[var(--color-text-muted)] transition-colors hover:text-white"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>

                {success ? (
                  <div className="flex flex-col items-center py-4 text-center">
                    <CheckCircle
                      className="h-8 w-8 text-[var(--color-success)]"
                      strokeWidth={1.5}
                    />
                    <p className="text-heading mt-4 text-white">
                      Thanks — we&apos;ll add it to the backlog.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 id="suggest-tool-title" className="text-heading pr-8 text-white">
                      Suggest a tool
                    </h2>
                    <p className="text-body mb-3 mt-2 text-[var(--color-text-muted)]">
                      We&apos;re building datum with the industry. Tell us what you need.
                    </p>

                    <form onSubmit={handleSubmit} className="flex w-full min-w-0 flex-col gap-4">
                      <textarea
                        value={suggestion}
                        onChange={(e) => setSuggestion(e.target.value)}
                        placeholder="What tool would help you most?"
                        rows={4}
                        className="min-h-[100px] w-full min-w-0 resize-y rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-white outline-none placeholder:text-[var(--color-text-dim)] focus:border-[var(--color-border-2)]"
                      />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="h-12 w-full min-w-0 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 text-sm text-white outline-none placeholder:text-[var(--color-text-dim)] focus:border-[var(--color-border-2)]"
                      />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        className="h-12 w-full min-w-0 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 text-sm text-white outline-none placeholder:text-[var(--color-text-dim)] focus:border-[var(--color-border-2)]"
                      />
                      <label className="flex min-w-0 cursor-pointer items-center justify-between gap-4">
                        <span className="text-sm text-[var(--color-text-muted)]">
                          Keep me updated on new tools
                        </span>
                        <button
                          type="button"
                          role="switch"
                          aria-checked={newsletter}
                          onClick={() => setNewsletter((v) => !v)}
                          className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
                            newsletter ? 'bg-white' : 'bg-[var(--color-border-2)]'
                          }`}
                        >
                          <span
                            className={`absolute top-0.5 h-6 w-6 rounded-full bg-black transition-transform ${
                              newsletter ? 'left-[22px]' : 'left-0.5'
                            }`}
                          />
                        </button>
                      </label>
                      {error && (
                        <p className="text-sm text-[var(--color-danger)]">{error}</p>
                      )}
                      <button type="submit" className="btn-primary w-full">
                        Send suggestion
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </ModalPortal>
  )
}
