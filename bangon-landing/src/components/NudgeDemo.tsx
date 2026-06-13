import { useEffect, useRef, useState, type FormEvent } from 'react'
import { ArrowUp } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

const API_URL = 'https://datum-app.vercel.app/api/ai'

type Message = {
  id: string
  role: 'nudge' | 'user'
  content: string
  streaming?: boolean
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
    content: 'Screw length for fixing corro to timber purlins?',
  },
  {
    id: 'seed-3',
    role: 'nudge',
    content:
      'For corrugated iron to timber purlins, use **Class 3 hex head screws** — 65mm is standard for most profiles. Make sure you\'re going through the crest of the corrugation, not the valley. Use neoprene washers to seal the penetration. If you\'re in a coastal area, step up to Class 4.',
  },
]

const SUGGESTED_PROMPTS = [
  'Which codes are you across?',
  "When's the best time for smoko?",
  "What's the minimum bearer size for a deck?",
]

const MAX_VISIBLE = 12

interface NudgeDemoProps {
  layout?: 'embedded' | 'modal'
}

function toApiMessages(messages: Message[]) {
  return messages
    .filter((m) => !m.streaming && m.content.trim())
    .map((m) => ({
      role: m.role === 'user' ? ('user' as const) : ('assistant' as const),
      content: m.content,
    }))
}

export function NudgeDemo({ layout = 'embedded' }: NudgeDemoProps) {
  const [messages, setMessages] = useState<Message[]>(SEED_MESSAGES)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isModal = layout === 'modal'

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

    const assistantId = `n-${Date.now()}`
    setMessages((prev) => [
      ...prev,
      { id: assistantId, role: 'nudge', content: '', streaming: true },
    ])

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: toApiMessages(nextMessages),
          stream: true,
        }),
      })

      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => ({}))
        throw new Error((data as { error?: string }).error || 'Request failed')
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let streamedText = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value)
        const lines = chunk.split('\n').filter((l) => l.startsWith('data: '))
        for (const line of lines) {
          const data = line.slice(6)
          if (data === '[DONE]') break
          try {
            const parsed = JSON.parse(data) as {
              choices?: { delta?: { content?: string } }[]
            }
            const token = parsed.choices?.[0]?.delta?.content ?? ''
            if (token) {
              streamedText += token
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId ? { ...m, content: streamedText } : m,
                ),
              )
            }
          } catch {
            /* skip malformed chunks */
          }
        }
      }

      setMessages((prev) =>
        prev.map((m) => (m.id === assistantId ? { ...m, streaming: false } : m)),
      )
    } catch {
      setError('Nudge is taking a breather. Try again in a sec.')
      setMessages((prev) =>
        prev.filter((m) => m.id !== userMsg.id && m.id !== assistantId),
      )
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    void sendMessage(input)
  }

  const chatArea = (
    <div
      ref={scrollRef}
      className={
        isModal
          ? 'flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto pb-4'
          : 'mb-6 flex max-h-[360px] min-h-[200px] flex-col gap-4 overflow-y-auto'
      }
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
            {msg.content ? (
              <div className="nudge-markdown">
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            ) : msg.streaming ? (
              <span className="text-[var(--color-text-muted)]">…</span>
            ) : null}
          </div>
        ),
      )}
    </div>
  )

  const inputBar = (
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
  )

  const suggestions = (
    <div className="mt-4 flex w-full min-w-0 flex-col gap-2">
      {SUGGESTED_PROMPTS.map((prompt) => (
        <button
          key={prompt}
          type="button"
          onClick={() => setInput(prompt)}
          disabled={loading}
          className="text-body min-h-[44px] rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-3 text-left text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-border-2)] disabled:opacity-50"
        >
          {prompt}
        </button>
      ))}
    </div>
  )

  if (isModal) {
    return (
      <div className="flex h-full min-h-0 flex-col">
        {chatArea}
        {error && (
          <p className="text-body mb-3 text-[var(--color-text-muted)]">{error}</p>
        )}
        <div className="shrink-0">{inputBar}</div>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full min-w-0 max-w-[560px]">
      {chatArea}
      {error && <p className="text-body mb-3 text-[var(--color-text-muted)]">{error}</p>}
      {inputBar}
      {suggestions}
    </div>
  )
}
