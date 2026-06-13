interface FeatureListProps {
  items: string[]
  className?: string
  onItemClick?: (item: string) => void
}

export function FeatureList({ items, className = '', onItemClick }: FeatureListProps) {
  return (
    <ul className={`flex flex-col gap-3 ${className}`}>
      {items.map((item) => {
        const isSuggest = item === 'Suggest a tool'
        return (
          <li key={item} className="font-[family-name:var(--font-body)] text-[15px] text-white">
            <span className="text-[var(--color-text-muted)]">→ </span>
            {isSuggest && onItemClick ? (
              <button type="button" onClick={() => onItemClick(item)} className="suggest-link">
                {item}
              </button>
            ) : (
              item
            )}
          </li>
        )
      })}
    </ul>
  )
}
