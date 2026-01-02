
'use client'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { Menu, User } from 'lucide-react'

type Props = { collapsed?: boolean; onToggleSidebar?: () => void }

const ROLE_LABELS: Record<string, string> = {
  'ADMIN': 'Administrator',
  'ADVANCED': 'Zaawansowany',
  'USER': 'Użytkownik'
}

export function Header({ collapsed = false, onToggleSidebar }: Props) {
  const { data: session } = useSession()
  const user = (session as any)?.user
  const userName = user?.name || user?.email || 'Użytkownik'
  const userRole = user?.role || 'USER'
  const roleLabel = ROLE_LABELS[userRole] || userRole

  const onLogout = () => {
    signOut({ redirect: true, callbackUrl: '/login' })
  }

  return (
    <header className="navbar flex items-center justify-between px-4 h-16 sticky top-0 z-40">
      <div className="flex items-center gap-3">
        <button 
          onClick={onToggleSidebar} 
          className="p-2 rounded hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </button>
        <Link href="/dashboard" className="brand text-xl">AdminPanel</Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded hover:bg-gray-50 transition-colors cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <User className="w-4 h-4 text-gray-600" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-800">{userName}</span>
            <span className="text-xs text-gray-500">{roleLabel}</span>
          </div>
        </div>
        <button 
          onClick={onLogout} 
          className="btn btn-danger text-sm px-4 py-2"
        >
          Wyloguj
        </button>
      </div>
    </header>
  )
}
