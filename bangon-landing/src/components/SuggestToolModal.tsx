import { useEffect, useState, type FormEvent } from 'react'
import { CheckCircle, X } from 'lucide-react'

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
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

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
    // TODO: wire to Airtable / Typeform for real submissions
    setSuccess(true)
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-[480px] rounded-2xl border border-[var(--color-border-2)] bg-[var(--color-surface)] p-8"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="suggest-tool-title"
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
            <CheckCircle className="h-8 w-8 text-[var(--color-success)]" strokeWidth={1.5} />
            <p className="mt-4 font-display text-lg font-bold text-white">
              Thanks. We&apos;ll add it to the backlog.
            </p>
            <p className="mt-2 font-body text-sm text-[var(--color-text-muted)]">
              We review every suggestion and the best ones ship.
            </p>
          </div>
        ) : (
          <>
            <h2
              id="suggest-tool-title"
              className="font-display text-[22px] font-bold text-white"
            >
              Suggest a tool
            </h2>
            <p className="mb-3 mt-2 font-body text-sm text-[var(--color-text-muted)]">
              We&apos;re building datum.ai with tradies. Tell us what you need.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <textarea
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                placeholder="What tool would help you most on site?"
                rows={4}
                className="min-h-[100px] w-full resize-y rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 font-body text-sm text-white placeholder:text-[var(--color-text-dim)] outline-none focus:border-[var(--color-border-2)]"
              />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="h-12 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 font-body text-sm text-white placeholder:text-[var(--color-text-dim)] outline-none focus:border-[var(--color-border-2)]"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="h-12 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 font-body text-sm text-white placeholder:text-[var(--color-text-dim)] outline-none focus:border-[var(--color-border-2)]"
              />
              <label className="flex cursor-pointer items-center justify-between gap-4">
                <span className="font-body text-sm text-[var(--color-text-muted)]">
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
                <p className="font-body text-sm text-[var(--color-danger)]">{error}</p>
              )}
              <button
                type="submit"
                className="h-12 w-full rounded-xl bg-white font-body text-[15px] font-medium text-black transition-opacity hover:opacity-90"
              >
                Send suggestion
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
