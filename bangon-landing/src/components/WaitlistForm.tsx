import { useEffect, useState, type FormEvent } from 'react'

interface WaitlistFormProps {
  variant?: 'hero' | 'cta' | 'modal'
  className?: string
  onSuccess?: () => void
  autoCloseMs?: number
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function WaitlistForm({
  variant = 'hero',
  className = '',
  onSuccess,
  autoCloseMs,
}: WaitlistFormProps) {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (status !== 'success' || !autoCloseMs || !onSuccess) return
    const t = window.setTimeout(onSuccess, autoCloseMs)
    return () => window.clearTimeout(t)
  }, [status, autoCloseMs, onSuccess])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!firstName.trim()) {
      setStatus('error')
      setErrorMsg('Enter your first name.')
      return
    }
    if (!emailRegex.test(email.trim())) {
      setStatus('error')
      setErrorMsg('Enter a valid email address.')
      return
    }
    setStatus('loading')
    setErrorMsg('')
    // TODO: POST to /api/waitlist or Mailchimp API
    window.setTimeout(() => {
      setStatus('success')
    }, 800)
  }

  if (status === 'success') {
    return (
      <p className={`text-body text-center text-[var(--color-success)] ${className}`}>
        You&apos;re on the list. We&apos;ll be in touch.
      </p>
    )
  }

  if (variant === 'modal') {
    return (
      <form onSubmit={handleSubmit} className={`flex w-full min-w-0 flex-col gap-2 ${className}`}>
        <div className="flex w-full min-w-0 flex-col gap-2 sm:flex-row sm:items-stretch">
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value)
              if (status === 'error') setStatus('idle')
            }}
            placeholder="First name"
            disabled={status === 'loading'}
            className="waitlist-input"
            aria-label="First name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (status === 'error') setStatus('idle')
            }}
            placeholder="Email address"
            disabled={status === 'loading'}
            className="waitlist-input"
            aria-label="Email address"
          />
        </div>
        <button type="submit" disabled={status === 'loading'} className="btn-primary w-full">
          {status === 'loading' ? 'Joining...' : 'Join the waitlist →'}
        </button>
        {status === 'error' && errorMsg && (
          <p className="text-body w-full text-[var(--color-danger)]">{errorMsg}</p>
        )}
      </form>
    )
  }

  const isStacked = variant === 'hero'

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full min-w-0 flex-col gap-2 ${isStacked ? '' : 'mx-auto'} sm:flex-row sm:items-stretch ${className}`}
    >
      <input
        type="text"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value)
          if (status === 'error') setStatus('idle')
        }}
        placeholder="First name"
        disabled={status === 'loading'}
        className="waitlist-input"
        aria-label="First name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
          if (status === 'error') setStatus('idle')
        }}
        placeholder="Email address"
        disabled={status === 'loading'}
        className="waitlist-input"
        aria-label="Email address"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full shrink-0 sm:w-auto"
      >
        {status === 'loading' ? 'Joining...' : 'Join the waitlist →'}
      </button>
      {status === 'error' && errorMsg && (
        <p className="text-body w-full text-[var(--color-danger)]">{errorMsg}</p>
      )}
    </form>
  )
}
