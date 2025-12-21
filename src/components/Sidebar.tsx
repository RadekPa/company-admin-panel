"use client"
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { Menu, Home, Users, FileText, Settings, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

type Props = { collapsed?: boolean }

export function Sidebar({ collapsed = false }: Props) {
  const { data: session } = useSession()
  const role = (session as any)?.user?.role
  const pathname = usePathname() || ''
  const [open, setOpen] = useState<{ [k: string]: boolean }>({ clients: false, admin: false })

  const toggle = (key: string) => setOpen(prev => ({ ...prev, [key]: !prev[key] }))

  return (
    <div className={`h-full flex flex-col sidebar ${collapsed ? 'items-center' : ''}`}>
      <div className={`p-4 border-b w-full ${collapsed ? 'text-center' : ''}`}>
        <h1 className={`text-lg font-semibold ${collapsed ? 'hidden' : ''} brand`}>Admin Panel</h1>
        <p className={`text-sm ${collapsed ? 'hidden' : 'text-gray-300'}`}>Panel</p>
        {collapsed && <div className="py-2"><Menu className="w-6 h-6 text-white" /></div>}
      </div>

      <nav className={`p-2 w-full ${collapsed ? 'text-center' : ''}`}>
        {/* Dashboard */}
        <div>
          <Link href="/dashboard" className={`w-full flex items-center gap-3 px-3 py-2 rounded-md block ${pathname === '/dashboard' || pathname === '/' ? 'active' : 'hover:bg-white/5'}`}>
            <Home className="w-4 h-4" /> {!collapsed && <span>Dashboard</span>}
          </Link>
        </div>
        {/* Clients group */}
        <div className="mt-2">
          <button onClick={()=>toggle('clients')} className={`w-full flex items-center gap-3 px-3 py-2 rounded-md ${pathname.startsWith('/clients') || pathname.startsWith('/documents') || pathname.startsWith('/invoices') ? 'active' : 'hover:bg-white/5'} ${collapsed ? 'justify-center' : ''}`}>
            <Users className="w-4 h-4" /> {!collapsed && <span>Klienci</span>}
            {!collapsed && <span className="ml-auto text-xs px-2 py-0.5 bg-white/5 rounded text-gray-300">2</span>}
            {!collapsed && <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${open.clients ? 'rotate-180' : ''}`} />}
          </button>
          {!collapsed && (
            <div className={`mt-1 pl-6 overflow-hidden transition-all duration-200 ${open.clients ? 'max-h-40' : 'max-h-0'}`}>
              <Link href="/clients" className={`block px-3 py-2 rounded-md ${pathname.startsWith('/clients') && !pathname.startsWith('/clients/') ? 'active' : 'hover:bg-white/5'}`}>Lista klientów</Link>
              <Link href="/documents" className={`block px-3 py-2 rounded-md ${pathname.startsWith('/documents') ? 'active' : 'hover:bg-white/5'}`}>Dokumenty</Link>
              <Link href="/invoices" className={`block px-3 py-2 rounded-md ${pathname.startsWith('/invoices') && !pathname.startsWith('/invoices/calendar') ? 'active' : 'hover:bg-white/5'}`}>Faktury - lista</Link>
              <Link href="/invoices/calendar" className={`block px-3 py-2 rounded-md ${pathname.startsWith('/invoices/calendar') ? 'active' : 'hover:bg-white/5'}`}>Cashflow</Link>
            </div>
          )}
        </div>

        {/* Admin group */}
        {role === 'ADMIN' && (
          <div className="mt-2">
            <button onClick={()=>toggle('admin')} className={`w-full flex items-center gap-3 px-3 py-2 rounded-md ${pathname.startsWith('/users') || pathname.startsWith('/permissions') ? 'active' : 'hover:bg-white/5'} ${collapsed ? 'justify-center' : ''}`}>
              <Settings className="w-4 h-4" /> {!collapsed && <span>Administracja</span>}
              {!collapsed && <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${open.admin ? 'rotate-180' : ''}`} />}
            </button>
            {!collapsed && (
              <div className={`mt-1 pl-6 overflow-hidden transition-all duration-200 ${open.admin ? 'max-h-40' : 'max-h-0'}`}>
                <Link href="/users" className={`block px-3 py-2 rounded-md ${pathname.startsWith('/users') ? 'active' : 'hover:bg-white/5'}`}>Użytkownicy</Link>
                <Link href="/permissions" className={`block px-3 py-2 rounded-md ${pathname.startsWith('/permissions') ? 'active' : 'hover:bg-white/5'}`}>Uprawnienia</Link>
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  )
}
