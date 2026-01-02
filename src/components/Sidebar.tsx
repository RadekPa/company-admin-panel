"use client"
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { Menu, Home, Users, FileText, Settings, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { hasModuleAccess, type RolePermissionsMap, type ModuleKey } from '../lib/permissions'

type Props = { collapsed?: boolean }

export function Sidebar({ collapsed = false }: Props) {
  const { data: session } = useSession()
  const role = (session as any)?.user?.role as 'USER' | 'ADVANCED' | 'ADMIN' | undefined
  const pathname = usePathname() || ''
  const [open, setOpen] = useState<{ [k: string]: boolean }>({ clients: false, admin: false })
  const [permissions, setPermissions] = useState<RolePermissionsMap | null>(null)
  const [loading, setLoading] = useState(true)

  const toggle = (key: string) => setOpen(prev => ({ ...prev, [key]: !prev[key] }))

  useEffect(() => {
    const loadPermissions = async () => {
      try {
        const res = await fetch('/api/permissions')
        if (!res.ok) {
          setLoading(false)
          return
        }
        const json = await res.json()
        const permMap: RolePermissionsMap = {
          dashboard: { userAccess: false, advancedAccess: false, adminAccess: true },
          clients: { userAccess: false, advancedAccess: false, adminAccess: true },
          documents: { userAccess: false, advancedAccess: false, adminAccess: true },
          invoices: { userAccess: false, advancedAccess: false, adminAccess: true },
          cashflow: { userAccess: false, advancedAccess: false, adminAccess: true },
          administration: { userAccess: false, advancedAccess: false, adminAccess: true },
        }
        
        if (Array.isArray(json.data)) {
          json.data.forEach((p: any) => {
            if (p.module in permMap) {
              permMap[p.module as ModuleKey] = {
                userAccess: p.userAccess,
                advancedAccess: p.advancedAccess,
                adminAccess: p.adminAccess,
              }
            }
          })
        }
        
        setPermissions(permMap)
      } catch (error) {
        console.error('Failed to load permissions:', error)
      } finally {
        setLoading(false)
      }
    }
    
    loadPermissions()
  }, [])

  const canAccess = (moduleKey: ModuleKey) => {
    if (!role || !permissions) return false
    return hasModuleAccess(moduleKey, role, permissions)
  }

  if (loading) {
    return (
      <div className={`h-full flex flex-col sidebar ${collapsed ? 'items-center' : ''}`}>
        <div className={`p-4 border-b w-full ${collapsed ? 'text-center' : ''}`}>
          <h1 className={`text-lg font-semibold ${collapsed ? 'hidden' : ''} brand`}>Admin Panel</h1>
        </div>
        <div className="p-4 text-sm text-gray-400">Ładowanie...</div>
      </div>
    )
  }

  return (
    <div className={`h-full flex flex-col sidebar ${collapsed ? 'items-center' : ''}`}>
      <div className={`p-4 border-b border-gray-700 w-full ${collapsed ? 'text-center' : ''}`}>
        <h1 className={`brand ${collapsed ? 'hidden' : ''}`}>AdminLTE 3</h1>
        {collapsed && <div className="py-2"><Menu className="w-6 h-6 text-white" /></div>}
      </div>

      <nav className={`flex-1 overflow-y-auto py-4 ${collapsed ? 'px-2' : 'px-0'}`}>
        {/* Dashboard */}
        {canAccess('dashboard') && (
          <Link href="/dashboard" className={`w-full flex items-center gap-3 px-4 py-3 ${pathname === '/dashboard' || pathname === '/' ? 'active' : ''}`}>
            <Home className="w-5 h-5" /> {!collapsed && <span className="text-sm">Dashboard</span>}
          </Link>
        )}

        {/* Clients */}
        {canAccess('clients') && (
          <Link href="/clients" className={`w-full flex items-center gap-3 px-4 py-3 ${pathname.startsWith('/clients') ? 'active' : ''}`}>
            <Users className="w-5 h-5" /> {!collapsed && <span className="text-sm">Klienci</span>}
          </Link>
        )}

        {/* Documents */}
        {canAccess('documents') && (
          <Link href="/documents" className={`w-full flex items-center gap-3 px-4 py-3 ${pathname.startsWith('/documents') ? 'active' : ''}`}>
            <FileText className="w-5 h-5" /> {!collapsed && <span className="text-sm">Dokumenty</span>}
          </Link>
        )}

        {/* Invoices */}
        {canAccess('invoices') && (
          <Link href="/invoices" className={`w-full flex items-center gap-3 px-4 py-3 ${pathname.startsWith('/invoices') && !pathname.startsWith('/invoices/calendar') ? 'active' : ''}`}>
            <FileText className="w-5 h-5" /> {!collapsed && <span className="text-sm">Faktury</span>}
          </Link>
        )}

        {/* Cashflow */}
        {canAccess('cashflow') && (
          <Link href="/invoices/calendar" className={`w-full flex items-center gap-3 px-4 py-3 ${pathname.startsWith('/invoices/calendar') ? 'active' : ''}`}>
            <FileText className="w-5 h-5" /> {!collapsed && <span className="text-sm">Cashflow</span>}
          </Link>
        )}

        {/* Admin group */}
        {canAccess('administration') && (
          <div>
            <button 
              onClick={()=>toggle('admin')} 
              className={`w-full flex items-center justify-between px-4 py-3 ${pathname.startsWith('/users') || pathname.startsWith('/permissions') ? 'active' : ''} ${collapsed ? 'justify-center' : ''}`}
            >
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5" />
                {!collapsed && <span className="text-sm">Administracja</span>}
              </div>
              {!collapsed && <ChevronDown className={`w-4 h-4 transition-transform ${open.admin ? 'rotate-180' : ''}`} />}
            </button>
            {!collapsed && (
              <div className={`overflow-hidden transition-all duration-200 ${open.admin ? 'max-h-40' : 'max-h-0'}`}>
                <Link 
                  href="/users" 
                  className={`submenu-item flex items-center gap-3 pl-12 pr-4 py-2 text-sm ${pathname.startsWith('/users') ? 'active' : ''}`}
                >
                  <span>•</span>
                  <span>Użytkownicy</span>
                </Link>
                <Link 
                  href="/permissions" 
                  className={`submenu-item flex items-center gap-3 pl-12 pr-4 py-2 text-sm ${pathname.startsWith('/permissions') ? 'active' : ''}`}
                >
                  <span>•</span>
                  <span>Uprawnienia</span>
                </Link>
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  )
}
