import { createContext, useContext, type ReactNode } from 'react'

interface SuggestToolContextValue {
  openSuggestModal: () => void
}

const SuggestToolContext = createContext<SuggestToolContextValue | null>(null)

export function SuggestToolProvider({
  openSuggestModal,
  children,
}: {
  openSuggestModal: () => void
  children: ReactNode
}) {
  return (
    <SuggestToolContext.Provider value={{ openSuggestModal }}>
      {children}
    </SuggestToolContext.Provider>
  )
}

export function useSuggestTool() {
  const ctx = useContext(SuggestToolContext)
  if (!ctx) {
    throw new Error('useSuggestTool must be used within SuggestToolProvider')
  }
  return ctx
}
