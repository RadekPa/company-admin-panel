"use client"
import { useEffect, useState } from 'react'
import { Card } from '../../../components/ui/Card'
import { Button } from '../../../components/ui/Button'
import { Select } from '../../../components/ui/Input'
import { UserCreateSchema } from '../../../validation/user'

type User = { id: number; name?: string | null; email: string; role: 'ADMIN' | 'USER'; permissions?: Record<string,string> }

const MODULES = ['clients','documents','users','dashboard']

export default function PermissionsPage(){
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null)
  const [perms, setPerms] = useState<Record<string,string>>({})
  const [message, setMessage] = useState<string | null>(null)

  useEffect(()=>{ loadUsers() }, [])

  const loadUsers = async ()=>{
    setLoading(true)
    const res = await fetch('/api/users?page=1&pageSize=200')
    if (!res.ok) { setUsers([]); setLoading(false); return }
    const json = await res.json()
    const list = Array.isArray(json?.data) ? json.data : (json?.data ?? [])
    setUsers(list)
    setLoading(false)
  }

  const onSelectUser = (id?: number)=>{
    const u = users.find(x=>x.id===id)
    setSelectedUserId(id??null)
    setPerms(u?.permissions || {})
    setMessage(null)
  }

  const setModulePerm = (mod: string, value: string)=>{
    setPerms(prev => ({ ...prev, [mod]: value }))
  }

  const save = async ()=>{
    if (!selectedUserId) return setMessage('Wybierz użytkownika')
    const u = users.find(x=>x.id===selectedUserId)
    setLoading(true)
    // If user role is ADMIN, we do not store module-specific permissions (they're implied by role)
    const body = u?.role === 'ADMIN' ? { permissions: null } : { permissions: perms }
    const res = await fetch(`/api/users/${selectedUserId}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    if (!res.ok) { setMessage('Błąd lub brak uprawnień'); setLoading(false); return }
    setMessage('Zapisano')
    setLoading(false)
    await loadUsers()
  }

  return (
    <div className="space-y-6">
      <Card>
        <h1 className="text-xl font-semibold mb-4">Macierz uprawnień</h1>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-600">Ustaw uprawnienia per moduł. Wybierz użytkownika na liście użytkowników w sekcji Użytkownicy by przenieść się do tej strony z query ?userId=ID.</div>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <Button variant="primary" onClick={save} disabled={!selectedUserId || loading}>{loading? 'Zapis...' : 'Zapisz uprawnienia'}</Button>
              {message && <div className="text-sm text-green-600">{message}</div>}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="text-left p-2">Moduł</th>
                <th className="text-left p-2">Uprawnienie</th>
              </tr>
            </thead>
            <tbody>
              {MODULES.map(mod => (
                <tr key={mod} className="border-t">
                  <td className="p-2 capitalize">{mod}</td>
                  <td className="p-2">
                    {/* If selected user is ADMIN, module-level controls are disabled because role defines permissions */}
                    <Select value={perms[mod] || 'USER'} onChange={e=>setModulePerm(mod, e.target.value)} disabled={users.find(x=>x.id===selectedUserId)?.role === 'ADMIN'}>
                      <option value="USER">USER</option>
                      <option value="ADMIN">ADMIN</option>
                    </Select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
