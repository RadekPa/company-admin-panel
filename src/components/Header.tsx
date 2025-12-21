
'use client'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { Menu } from 'lucide-react'

type Props = { collapsed?: boolean; onToggleSidebar?: () => void }

export function Header({ collapsed = false, onToggleSidebar }: Props) {
  const onLogout = () => {
    signOut({ redirect: true, callbackUrl: '/login' })
  }

  return (
    <header className="flex items-center justify-between bg-white dark:bg-gray-900 border-b dark:border-gray-700 px-4 h-16">
      <div className="flex items-center gap-3">
        <button onClick={onToggleSidebar} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
          <Menu className="w-5 h-5" />
        </button>
        <Link href="/dashboard" className="text-lg font-semibold text-gray-700 dark:text-gray-200">Panel administracyjny</Link>
      </div>

      <div className="flex items-center gap-3">
        <Link href="/clients" className="text-sm text-gray-600 dark:text-gray-300">Klienci</Link>
        <button onClick={onLogout} className="text-sm bg-red-500 text-white px-3 py-1 rounded-md">Wyloguj</button>
      </div>
    </header>
  )
}
