"use client"
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { 
  LayoutDashboard, 
  Database, 
  FileText, 
  Receipt, 
  Users as UsersIcon, 
  Shield, 
  Languages,
  ChevronDown,
  UserCircle,
  Building2,
  TrendingUp,
  Menu
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { hasModuleAccess, type RolePermissionsMap, type ModuleKey } from '../lib/permissions'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

type Props = { collapsed?: boolean }

export function Sidebar({ collapsed = false }: Props) {
  const t = useTranslations()
  const { data: session } = useSession()
  const role = (session as any)?.user?.role as 'USER' | 'ADVANCED' | 'ADMIN' | undefined
  const pathname = usePathname() || ''
  const [open, setOpen] = useState<{ [k: string]: boolean }>({ data: false, admin: false })
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
          authors: { userAccess: false, advancedAccess: false, adminAccess: true },
          clients: { userAccess: false, advancedAccess: false, adminAccess: true },
          documents: { userAccess: false, advancedAccess: false, adminAccess: true },
          invoices: { userAccess: false, advancedAccess: false, adminAccess: true },
          cashflow: { userAccess: false, advancedAccess: false, adminAccess: true },
          users: { userAccess: false, advancedAccess: false, adminAccess: true },
          permissions: { userAccess: false, advancedAccess: false, adminAccess: true },
          languages: { userAccess: false, advancedAccess: false, adminAccess: true },
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
      <div className="h-full flex flex-col bg-card border-r">
        <div className="p-6 border-b">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">O P I S</span>
          </div>
        </div>
        <div className="p-4 text-sm text-muted-foreground">{t('common.loading')}</div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col bg-card border-r">
      {/* Logo/Brand */}
      <div className="p-6 border-b">
        <div className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">O P I S</span>
        </div>
      </div>

      <ScrollArea className="flex-1 py-4">
        <nav className="space-y-1 px-3">
          {/* Dashboard */}
          {canAccess('dashboard') && (
            <Link 
              href="/dashboard" 
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                pathname === '/dashboard' || pathname === '/' 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>{t('navigation.dashboard')}</span>
            </Link>
          )}

          {/* Data group */}
          {(canAccess('authors') || canAccess('clients')) && (
            <div className="space-y-1">
              <button 
                onClick={() => toggle('data')} 
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  (pathname.startsWith('/clients') || pathname.startsWith('/authors'))
                    ? "bg-accent text-accent-foreground" 
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <div className="flex items-center gap-3">
                  <Database className="h-4 w-4" />
                  <span>{t('navigation.clients')}</span>
                </div>
                <ChevronDown className={cn("h-4 w-4 transition-transform", open.data && "rotate-180")} />
              </button>
              <div className={cn(
                "overflow-hidden transition-all duration-200 space-y-1",
                open.data ? "max-h-40 mt-1" : "max-h-0"
              )}>
                {canAccess('authors') && (
                  <Link 
                    href="/authors" 
                    className={cn(
                      "flex items-center gap-3 pl-10 pr-3 py-2 rounded-md text-sm transition-colors",
                      pathname.startsWith('/authors')
                        ? "bg-primary/10 text-primary font-medium" 
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <UserCircle className="h-3.5 w-3.5" />
                    <span>{t('navigation.authors')}</span>
                  </Link>
                )}
                {canAccess('clients') && (
                  <Link 
                    href="/clients" 
                    className={cn(
                      "flex items-center gap-3 pl-10 pr-3 py-2 rounded-md text-sm transition-colors",
                      pathname.startsWith('/clients')
                        ? "bg-primary/10 text-primary font-medium" 
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <Building2 className="h-3.5 w-3.5" />
                    <span>{t('clients.title')}</span>
                  </Link>
                )}
              </div>
            </div>
          )}

          {/* Documents */}
          {canAccess('documents') && (
            <Link 
              href="/documents" 
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                pathname.startsWith('/documents')
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <FileText className="h-4 w-4" />
              <span>{t('navigation.documents')}</span>
            </Link>
          )}

          {/* Invoices */}
          {canAccess('invoices') && (
            <Link 
              href="/invoices" 
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                pathname.startsWith('/invoices') && !pathname.startsWith('/invoices/calendar')
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Receipt className="h-4 w-4" />
              <span>{t('navigation.invoices')}</span>
            </Link>
          )}

          {/* Cashflow */}
          {canAccess('cashflow') && (
            <Link 
              href="/invoices/calendar" 
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                pathname.startsWith('/invoices/calendar')
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <TrendingUp className="h-4 w-4" />
              <span>Cashflow</span>
            </Link>
          )}

          <Separator className="my-2" />

          {/* Admin group */}
          {(canAccess('users') || canAccess('permissions') || canAccess('languages')) && (
            <div className="space-y-1">
              <button 
                onClick={() => toggle('admin')} 
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  (pathname.startsWith('/users') || pathname.startsWith('/permissions') || pathname.startsWith('/languages'))
                    ? "bg-accent text-accent-foreground" 
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <div className="flex items-center gap-3">
                  <Shield className="h-4 w-4" />
                  <span>{t('navigation.administration')}</span>
                </div>
                <ChevronDown className={cn("h-4 w-4 transition-transform", open.admin && "rotate-180")} />
              </button>
              <div className={cn(
                "overflow-hidden transition-all duration-200 space-y-1",
                open.admin ? "max-h-40 mt-1" : "max-h-0"
              )}>
                {canAccess('users') && (
                  <Link 
                    href="/users" 
                    className={cn(
                      "flex items-center gap-3 pl-10 pr-3 py-2 rounded-md text-sm transition-colors",
                      pathname.startsWith('/users')
                        ? "bg-primary/10 text-primary font-medium" 
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <UsersIcon className="h-3.5 w-3.5" />
                    <span>{t('navigation.users')}</span>
                  </Link>
                )}
                {canAccess('permissions') && (
                  <Link 
                    href="/permissions" 
                    className={cn(
                      "flex items-center gap-3 pl-10 pr-3 py-2 rounded-md text-sm transition-colors",
                      pathname.startsWith('/permissions')
                        ? "bg-primary/10 text-primary font-medium" 
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <Shield className="h-3.5 w-3.5" />
                    <span>{t('permissions.title')}</span>
                  </Link>
                )}
                {canAccess('languages') && (
                  <Link 
                    href="/languages" 
                    className={cn(
                      "flex items-center gap-3 pl-10 pr-3 py-2 rounded-md text-sm transition-colors",
                      pathname.startsWith('/languages')
                        ? "bg-primary/10 text-primary font-medium" 
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <Languages className="h-3.5 w-3.5" />
                    <span>{t('navigation.languages')}</span>
                  </Link>
                )}
              </div>
            </div>
          )}
        </nav>
      </ScrollArea>
    </div>
  )
}
