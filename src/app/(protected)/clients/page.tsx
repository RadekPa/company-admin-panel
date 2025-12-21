'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Card } from '../../../components/ui/Card'
import { Button } from '../../../components/ui/Button'
import { Input, Select } from '../../../components/ui/Input'
import { Table, Th, Td } from '../../../components/ui/Table'
import { Pagination } from '../../../components/ui/Pagination'
import { ClientCreateSchema } from '../../../validation/client'

type Client = { id: number; name: string; email?: string | null; phone?: string | null; createdAt: string }

type Meta = { page: number; pageSize: number; total: number; pages: number }

type ListResponse<T> = { data: T[]; meta: Meta }

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([])
  const [meta, setMeta] = useState<Meta>({ page: 1, pageSize: 10, total: 0, pages: 1 })
  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState<'id'|'name'|'email'|'phone'|'createdAt'>('id')
  const [sortOrder, setSortOrder] = useState<'asc'|'desc'>('asc')
  const [pageSize, setPageSize] = useState(10)

  const [formErrors, setFormErrors] = useState<string[]>([])
  const [form, setForm] = useState({ name: '', email: '', phone: '' })

  const load = async (page = meta.page) => {
    setLoading(true)
    const qs = new URLSearchParams({
      search,
      page: String(page),
      pageSize: String(pageSize),
      sortBy,
      sortOrder
    })
    const res = await fetch(`/api/clients?${qs.toString()}`)
    if (!res.ok) {
      setClients([])
      setMeta({ page, pageSize, total: 0, pages: 1 })
      setLoading(false)
      return
    }
  const data = await res.json()
  console.debug('[Clients] fetch response:', { type: Array.isArray(data) ? 'array' : typeof data, data })
    // Obsłuż kilka możliwych formatów odpowiedzi:
    // 1) [{...}, {...}]  -> bezpośrednia tablica
    // 2) { data: [...], meta: {...} }
    if (Array.isArray(data)) {
      setClients(data)
      const total = data.length
      setMeta({ page, pageSize, total, pages: Math.max(1, Math.ceil(total / pageSize)) })
    } else {
      const arr = Array.isArray(data?.data) ? data.data : []
      setClients(arr)
      const metaFromServer = data?.meta
      const total = metaFromServer?.total ?? arr.length
      const pages = metaFromServer?.pages ?? Math.max(1, Math.ceil(total / pageSize))
      setMeta(metaFromServer ?? { page, pageSize, total, pages })
    }
    setLoading(false)
  }

  useEffect(() => { load(1) }, [search, sortBy, sortOrder, pageSize])

  const addClient = async () => {
    const parsed = ClientCreateSchema.safeParse(form)
    if (!parsed.success) {
      setFormErrors(parsed.error.errors.map(e=>e.message))
      return
    }
    setFormErrors([])
    await fetch('/api/clients', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(parsed.data) })
    setForm({ name: '', email: '', phone: '' })
    await load(1)
  }

  const removeClient = async (id: number) => {
    await fetch(`/api/clients/${id}`, { method: 'DELETE' })
    await load(meta.page)
  }

  const toggleSort = (col: typeof sortBy) => {
    if (sortBy !== col) { setSortBy(col); setSortOrder('asc') } else { setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc') }
  }

  return (
    <div className="space-y-6">
      <Card>
        <h1 className="text-xl font-semibold mb-4">Lista Klientów</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
          <div>
            <label className="label">Szukaj</label>
            <Input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Nazwa/Email/Telefon" />
          </div>
          <div>
            <label className="label">Sortuj wg</label>
            <Select value={sortBy} onChange={e=>setSortBy(e.target.value as any)}>
              <option value="id">ID</option>
              <option value="name">Nazwa</option>
              <option value="email">Email</option>
              <option value="phone">Telefon</option>
              <option value="createdAt">Utworzono</option>
            </Select>
          </div>
          <div>
            <label className="label">Kierunek</label>
            <Select value={sortOrder} onChange={e=>setSortOrder(e.target.value as any)}>
              <option value="asc">Rosnąco</option>
              <option value="desc">Malejąco</option>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="label">Nazwa</label>
            <Input value={form.name} onChange={e=>setForm(prev=>({ ...prev, name: e.target.value }))} />
          </div>
          <div>
            <label className="label">Email</label>
            <Input value={form.email} onChange={e=>setForm(prev=>({ ...prev, email: e.target.value }))} />
          </div>
          <div>
            <label className="label">Telefon</label>
            <Input value={form.phone} onChange={e=>setForm(prev=>({ ...prev, phone: e.target.value }))} />
          </div>
        </div>
        {formErrors.length>0 && (
          <ul className="mt-2 list-disc list-inside text-sm text-red-600">
            {formErrors.map((e,i)=>(<li key={i}>{e}</li>))}
          </ul>
        )}
        <div className="mt-4 flex items-center gap-3">
          <Button variant="primary" onClick={addClient}>Dodaj klienta</Button>
          <label className="label">Rozmiar strony</label>
          <Select value={String(pageSize)} onChange={e=>setPageSize(Number(e.target.value))}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </Select>
        </div>
      </Card>

      <Card>
        {loading ? (
          <p>Ładowanie...</p>
        ) : (
          <div className="space-y-3">
            <Table>
              <thead>
                <tr>
                  <Th onClick={()=>toggleSort('id')} active={sortBy==='id'} order={sortOrder}>ID</Th>
                  <Th onClick={()=>toggleSort('name')} active={sortBy==='name'} order={sortOrder}>Nazwa</Th>
                  <Th onClick={()=>toggleSort('email')} active={sortBy==='email'} order={sortOrder}>Email</Th>
                  <Th onClick={()=>toggleSort('phone')} active={sortBy==='phone'} order={sortOrder}>Telefon</Th>
                  <Th onClick={()=>toggleSort('createdAt')} active={sortBy==='createdAt'} order={sortOrder}>Utworzono</Th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {(Array.isArray(clients) ? clients : []).map(c => (
                  <tr key={c.id}>
                    <Td>{c.id}</Td>
                    <Td>
                      <Link className="text-primary-600 hover:underline" href={`/clients/${c.id}`}>{c.name}</Link>
                    </Td>
                    <Td>{c.email ?? '-'}</Td>
                    <Td>{c.phone ?? '-'}</Td>
                    <Td>{new Intl.DateTimeFormat('pl-PL', { timeZone: 'UTC', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(c.createdAt))}</Td>
                    <Td>
                      <Button onClick={()=>removeClient(c.id)}>Usuń</Button>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Pagination page={meta.page} pages={meta.pages} onPage={(p)=>load(p)} />
          </div>
        )}
      </Card>
    </div>
  )
}
