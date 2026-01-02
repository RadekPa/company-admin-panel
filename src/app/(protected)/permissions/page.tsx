"use client"
import { useEffect, useState } from 'react'
import { Card } from '../../../components/ui/Card'
import { Button } from '../../../components/ui/Button'

type Permission = {
  id: number
  module: string
  userAccess: boolean
  advancedAccess: boolean
  adminAccess: boolean
}

const MODULES = [
  { key: 'dashboard', label: 'Dashboard' },
  { key: 'clients', label: 'Klienci' },
  { key: 'documents', label: 'Dokumenty' },
  { key: 'invoices', label: 'Faktury' },
  { key: 'cashflow', label: 'Cashflow' },
  { key: 'administration', label: 'Administracja' },
]

export default function PermissionsPage(){
  const [permissions, setPermissions] = useState<Record<string, Permission>>({})
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => { loadPermissions() }, [])

  const loadPermissions = async () => {
    setLoading(true)
    const res = await fetch('/api/permissions')
    if (!res.ok) { 
      setPermissions({})
      setLoading(false)
      return 
    }
    const json = await res.json()
    const permissionsMap: Record<string, Permission> = {}
    
    // Map permissions by module
    if (Array.isArray(json.data)) {
      json.data.forEach((p: Permission) => {
        permissionsMap[p.module] = p
      })
    }
    
    // Initialize missing modules with default values
    MODULES.forEach(mod => {
      if (!permissionsMap[mod.key]) {
        permissionsMap[mod.key] = {
          id: 0,
          module: mod.key,
          userAccess: false,
          advancedAccess: false,
          adminAccess: true,
        }
      }
    })
    
    setPermissions(permissionsMap)
    setLoading(false)
  }

  const toggleAccess = (moduleKey: string, role: 'userAccess' | 'advancedAccess' | 'adminAccess') => {
    setPermissions(prev => ({
      ...prev,
      [moduleKey]: {
        ...prev[moduleKey],
        [role]: !prev[moduleKey]?.[role]
      }
    }))
  }

  const save = async () => {
    setLoading(true)
    setMessage(null)
    
    try {
      // Save each module's permissions
      for (const mod of MODULES) {
        const perm = permissions[mod.key]
        if (perm) {
          const res = await fetch('/api/permissions', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              module: mod.key,
              userAccess: perm.userAccess,
              advancedAccess: perm.advancedAccess,
              adminAccess: perm.adminAccess,
            })
          })
          
          if (!res.ok) {
            setMessage('Błąd podczas zapisywania')
            setLoading(false)
            return
          }
        }
      }
      
      setMessage('Zapisano')
      await loadPermissions()
    } catch (error) {
      setMessage('Błąd podczas zapisywania')
    }
    
    setLoading(false)
  }

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-semibold">Macierz uprawnień</h1>
            <p className="text-sm text-gray-600 mt-1">
              Zaznacz checkboxy aby określić, które role mają dostęp do poszczególnych modułów
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Button variant="primary" onClick={save} disabled={loading}>
              {loading ? 'Zapis...' : 'Zapisz uprawnienia'}
            </Button>
            {message && (
              <div className={`text-sm ${message.includes('Błąd') ? 'text-red-600' : 'text-green-600'}`}>
                {message}
              </div>
            )}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto border">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="text-left p-3 border-b font-semibold">Moduł</th>
                <th className="text-center p-3 border-b font-semibold">USER</th>
                <th className="text-center p-3 border-b font-semibold">ADVANCED</th>
                <th className="text-center p-3 border-b font-semibold">ADMIN</th>
              </tr>
            </thead>
            <tbody>
              {MODULES.map(mod => {
                const perm = permissions[mod.key]
                return (
                  <tr key={mod.key} className="border-b hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="p-3 font-medium">{mod.label}</td>
                    <td className="p-3 text-center">
                      <input
                        type="checkbox"
                        checked={perm?.userAccess ?? false}
                        onChange={() => toggleAccess(mod.key, 'userAccess')}
                        className="w-5 h-5 cursor-pointer"
                      />
                    </td>
                    <td className="p-3 text-center">
                      <input
                        type="checkbox"
                        checked={perm?.advancedAccess ?? false}
                        onChange={() => toggleAccess(mod.key, 'advancedAccess')}
                        className="w-5 h-5 cursor-pointer"
                      />
                    </td>
                    <td className="p-3 text-center">
                      <input
                        type="checkbox"
                        checked={perm?.adminAccess ?? true}
                        onChange={() => toggleAccess(mod.key, 'adminAccess')}
                        className="w-5 h-5 cursor-pointer"
                      />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          <p><strong>USER</strong> - podstawowy dostęp (zazwyczaj tylko odczyt)</p>
          <p><strong>ADVANCED</strong> - rozszerzony dostęp (może edytować, ale nie zarządzać)</p>
          <p><strong>ADMIN</strong> - pełny dostęp (może wszystko)</p>
        </div>
      </Card>
    </div>
  )
}
