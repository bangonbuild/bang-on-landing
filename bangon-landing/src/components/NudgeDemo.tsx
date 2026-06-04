import { useEffect, useRef, useState, type FormEvent } from 'react'
import { ArrowUp, Loader2 } from 'lucide-react'

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
    setMessages((prev) => [...prev, userMsg])
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
    <div className="mx-auto w-full min-w-0 max-w-[560px]">
      <div
        ref={scrollRef}
        className="mb-6 flex max-h-[360px] min-h-[200px] flex-col gap-4 overflow-y-auto"
      >
        {visibleMessages.map((msg) =>
          msg.role === 'user' ? (
            <div
              key={msg.id}
              className="text-body ml-auto max-w-[85%] rounded-xl bg-[var(--color-surface-2)] px-4 py-3 text-white"
            >
              {msg.content}
            </div>
          ) : (
            <div
              key={msg.id}
              className="text-body mr-auto max-w-[90%] border-l-2 border-[var(--color-border)] py-1 pl-4 text-white"
            >
              {msg.content}
            </div>
          ),
        )}
        {loading && (
          <div className="text-body mr-auto flex items-center gap-2 border-l-2 border-[var(--color-border)] py-1 pl-4 text-[var(--color-text-muted)]">
            <Loader2 className="h-4 w-4 animate-spin" />
            Nudge is thinking...
          </div>
        )}
      </div>

      {error && (
        <p className="text-body mb-3 text-[var(--color-text-muted)]">{error}</p>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex w-full min-w-0 items-center gap-3 rounded-[24px] border border-[var(--color-border-2)] bg-[var(--color-surface-2)] px-4 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Nudge..."
          disabled={loading}
          className="text-body min-h-[44px] min-w-0 flex-1 border-0 bg-transparent text-white outline-none placeholder:text-[var(--color-text-dim)]"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="flex h-11 w-11 min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-full bg-white text-black disabled:opacity-40"
          aria-label="Send message"
        >
          <ArrowUp className="h-4 w-4" strokeWidth={2} />
        </button>
      </form>

      <div className="mt-4 flex w-full min-w-0 flex-col gap-2">
        {SUGGESTED_PROMPTS.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => void sendMessage(prompt)}
            disabled={loading}
            className="text-body min-h-[44px] rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-3 text-left text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-border-2)] disabled:opacity-50"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  )
}
