import React from 'react'
import { Button } from './button'
import { useTranslations } from 'next-intl'

export function Pagination({ page, pages, onPage }: { page: number; pages: number; onPage: (p:number)=>void }) {
  const t = useTranslations('common')
  const prev = () => onPage(Math.max(1, page-1))
  const next = () => onPage(Math.min(pages, page+1))
  return (
    <div className="flex items-center gap-2">
      <Button onClick={prev} disabled={page<=1}>{t('previous')}</Button>
      <span className="text-sm text-gray-600 dark:text-gray-300">{t('page')} {page} {t('of')} {pages}</span>
      <Button onClick={next} disabled={page>=pages}>{t('next')}</Button>
    </div>
  )
}
