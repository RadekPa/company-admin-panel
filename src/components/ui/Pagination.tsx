import React from 'react'
import { Button } from './Button'

export function Pagination({ page, pages, onPage }: { page: number; pages: number; onPage: (p:number)=>void }) {
  const prev = () => onPage(Math.max(1, page-1))
  const next = () => onPage(Math.min(pages, page+1))
  return (
    <div className="flex items-center gap-2">
      <Button onClick={prev} disabled={page<=1}>Poprzednia</Button>
      <span className="text-sm text-gray-600 dark:text-gray-300">Strona {page} z {pages}</span>
      <Button onClick={next} disabled={page>=pages}>Następna</Button>
    </div>
  )
}
