import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Loader2, Send } from 'lucide-react'

const API_URL = 'https://bang-on-v3.vercel.app/api/ai'

type Message = {
  id: string
  role: 'nudge' | 'user'
  content: string
}

const SEED_MESSAGES: Message[] = [
  {
    id: 'seed-1',
    role: 'nudge',
    content: "G'day. What's the job?",
  },
  {
    id: 'seed-2',
    role: 'user',
    content: 'Can I notch the middle of a floor joist?',
  },
  {
    id: 'seed-3',
    role: 'nudge',
    content:
      "Nah, don't do it. The middle third is the high-stress zone. Notching there can cause failure under load. Stay in the outer quarters, and keep the depth under one-sixth of the joist depth. Check AS 1684.2 for your specific member size.",
  },
]

const SUGGESTED_PROMPTS = [
  "What's the minimum bearing for a triple LVL beam?",
  'How much concrete for a 6×9 slab at 100mm deep?',
  'What are the bracing requirements for a single storey timber frame?',
]

const MAX_VISIBLE = 6

export function NudgeDemo() {
  const [messages, setMessages] = useState<Message[]>(SEED_MESSAGES)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const visibleMessages = messages.slice(-MAX_VISIBLE)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, loading])

  const sendMessage = async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || loading) return

    const userMsg: Message = { id: `u-${Date.now()}`, role: 'user', content: trimmed }
    const nextMessages = [...messages, userMsg]
    setMessages(nextMessages)
    setInput('')
    setError(null)
    setLoading(true)

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: trimmed }),
      })
      const data = await res.json()
      if (!res.ok || data.error) {
        throw new Error(data.error || 'Request failed')
      }
      setMessages((prev) => [
        ...prev,
        { id: `n-${Date.now()}`, role: 'nudge', content: data.text as string },
      ])
    } catch {
      setError('Nudge is taking a breather. Try again in a sec.')
      setMessages((prev) => prev.filter((m) => m.id !== userMsg.id))
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    void sendMessage(input)
  }

  return (
    <div className="mx-auto w-full min-w-0 max-w-[380px]">
      <div className="overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="border-b border-[var(--color-border)] px-4 py-3">
          <p className="font-display text-xs font-bold text-white">datum.ai</p>
          <p className="font-body text-sm text-[var(--color-text-muted)]">Ask Nudge</p>
        </div>

        <div
          ref={scrollRef}
          className="flex max-h-[320px] min-h-[280px] flex-col gap-3 overflow-y-auto px-4 py-4"
        >
          {visibleMessages.map((msg) => (
            <div
              key={msg.id}
              className={`max-w-[90%] rounded-xl px-3 py-2 font-body text-[13px] leading-relaxed ${
                msg.role === 'user'
                  ? 'ml-auto bg-[var(--color-surface-2)] text-white'
                  : 'mr-auto bg-[var(--color-bg)] text-[var(--color-text-muted)]'
              }`}
            >
              {msg.role === 'nudge' && (
                <span className="mb-0.5 block font-display text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-dim)]">
                  Nudge
                </span>
              )}
              {msg.content}
            </div>
          ))}
          {loading && (
            <div className="mr-auto flex items-center gap-2 rounded-xl bg-[var(--color-bg)] px-3 py-2 text-[var(--color-text-muted)]">
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
              <span className="font-body text-[13px]">Nudge is thinking...</span>
            </div>
          )}
        </div>

        {error && (
          <p className="px-4 pb-2 font-body text-xs text-[var(--color-text-muted)]">{error}</p>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 border-t border-[var(--color-border)] p-3"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Nudge anything..."
            disabled={loading}
            className="h-10 flex-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 font-body text-sm text-white placeholder:text-[var(--color-text-dim)] outline-none focus:border-[var(--color-border-2)]"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black disabled:opacity-40"
            aria-label="Send message"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        {SUGGESTED_PROMPTS.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => {
              setInput(prompt)
              void sendMessage(prompt)
            }}
            disabled={loading}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-2 text-left font-body text-[13px] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-border-2)] disabled:opacity-50"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  )
}
