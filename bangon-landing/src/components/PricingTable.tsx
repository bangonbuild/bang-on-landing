const rows: { feature: string; solo: boolean; crew: boolean; plus: boolean }[] = [
  { feature: 'Nudge AI assistant', solo: true, crew: true, plus: true },
  { feature: 'AI toolbox', solo: true, crew: true, plus: true },
  { feature: 'Cashflow management', solo: true, crew: true, plus: true },
  { feature: 'Bookkeeping integrations', solo: true, crew: true, plus: true },
  { feature: 'Client notifications', solo: true, crew: true, plus: true },
  { feature: 'Link to other tradies', solo: true, crew: true, plus: true },
  { feature: 'Jobs (up to 5 active)', solo: true, crew: true, plus: true },
  { feature: 'Jobs (unlimited)', solo: false, crew: true, plus: true },
  { feature: 'Manage crew (up to 5)', solo: false, crew: true, plus: true },
  { feature: 'Manage crew (unlimited)', solo: false, crew: false, plus: true },
  { feature: 'Crew dashboard lite', solo: false, crew: true, plus: true },
  { feature: 'Crew dashboard plus', solo: false, crew: false, plus: true },
  { feature: 'Priority support', solo: false, crew: false, plus: true },
]

function Cell({ value }: { value: boolean }) {
  return (
    <td className={value ? 'check' : 'dash'}>{value ? '✓' : '—'}</td>
  )
}

export function PricingTable() {
  return (
    <div className="pricing-table-wrap">
      <table className="pricing-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Solo</th>
            <th>Crew</th>
            <th>Plus</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.feature}>
              <td className="feature-name">{row.feature}</td>
              <Cell value={row.solo} />
              <Cell value={row.crew} />
              <Cell value={row.plus} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
