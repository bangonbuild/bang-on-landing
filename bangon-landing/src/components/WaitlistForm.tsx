import { useState, type FormEvent } from 'react'

interface WaitlistFormProps {
  variant?: 'hero' | 'cta'
  className?: string
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function WaitlistForm({ variant = 'hero', className = '' }: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
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
      <p className={`font-body text-[15px] text-[var(--color-success)] ${className}`}>
        You&apos;re on the list. We&apos;ll be in touch.
      </p>
    )
  }

  const isHero = variant === 'hero'

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full min-w-0 max-w-[520px] flex-col gap-2 sm:flex-row sm:items-stretch ${isHero ? '' : 'mx-auto'} ${className}`}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
          if (status === 'error') setStatus('idle')
        }}
        placeholder="Your email address"
        disabled={status === 'loading'}
        className="min-h-12 w-full min-w-0 flex-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 font-body text-base text-white placeholder:text-[var(--color-text-dim)] outline-none focus:border-[var(--color-border-2)] disabled:opacity-60"
        aria-label="Email address"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="min-h-12 w-full shrink-0 rounded-xl bg-white px-4 font-display text-[15px] font-medium text-black transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
      >
        {status === 'loading' ? 'Joining...' : 'Join the waitlist →'}
      </button>
      {status === 'error' && errorMsg && (
        <p className="w-full font-body text-sm text-[var(--color-danger)]">{errorMsg}</p>
      )}
    </form>
  )
}
