import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'default' }

export function Button({ variant = 'default', className = '', ...props }: Props) {
  const base = 'inline-flex items-center gap-2 px-4 py-2 rounded-md border'
  const styles = variant === 'primary' ? 'bg-primary-600 text-white border-primary-600 hover:bg-primary-700' : 'bg-white hover:bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-700'
  return <button {...props} className={`${base} ${styles} ${className}`} />
}
