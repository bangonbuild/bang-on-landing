const stats = [
  { value: 'Built with tradies', label: 'Co-created on site' },
  { value: '5 AI tools', label: 'Ready to use today' },
  { value: 'Free to try', label: 'No credit card needed' },
]

export function StatsBar() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 divide-y divide-[var(--color-border-2)] md:grid-cols-3 md:divide-x md:divide-y-0">
        {stats.map((stat) => (
          <div
            key={stat.value}
            className="flex flex-col items-center justify-center px-6 py-12 text-center"
          >
            <p className="font-display text-[28px] font-bold text-white">{stat.value}</p>
            <p className="mt-1 font-body text-[13px] text-[var(--color-text-muted)]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
