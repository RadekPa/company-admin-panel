import React from 'react'

export function HeroCards({ items }: { items: { title: string; value: string | number; hint?: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((it, idx) => (
        <div key={idx} className="card">
          <h2 className="text-sm text-gray-500 dark:text-gray-400">{it.title}</h2>
          <p className="text-3xl font-semibold mt-2">{it.value}</p>
          {it.hint && <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{it.hint}</p>}
        </div>
      ))}
    </div>
  )
}
