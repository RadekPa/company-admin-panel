'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, Th, Td } from '../../../components/ui/Table'
import { Pagination } from '../../../components/ui/Pagination'
import { AuthorCreateSchema, AuthorUpdateSchema } from '../../../validation/author'

type Author = { 
  id: number
  firstName: string
  middleName?: string | null
  lastName: string
  description?: string | null
  workEmail?: string | null
  personalEmail?: string | null
  client?: {
    id: number
    name: string
  } | null
  createdAt: string
  updatedAt: string
}

type Meta = { page: number; pageSize: number; total: number; pages: number }

export default function AuthorsPage() {
  const [authors, setAuthors] = useState<Author[]>([])
  const [meta, setMeta] = useState<Meta>({ page: 1, pageSize: 10, total: 0, pages: 1 })
  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState<'id'|'firstName'|'lastName'|'createdAt'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('authors_sortBy') as any) || 'id'
    }
    return 'id'
  })
  const [sortOrder, setSortOrder] = useState<'asc'|'desc'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('authors_sortOrder') as any) || 'asc'
    }
    return 'asc'
  })
  const [pageSize, setPageSize] = useState(() => {
    if (typeof window !== 'undefined') {
      return Number(localStorage.getItem('authors_pageSize')) || 10
    }
    return 10
  })

  const [showAddModal, setShowAddModal] = useState(false)
  const [editingAuthor, setEditingAuthor] = useState<Author | null>(null)
  const [formErrors, setFormErrors] = useState<string[]>([])
  const [form, setForm] = useState({ 
    firstName: '', 
    middleName: '', 
    lastName: '', 
    description: '',
    workEmail: '',
    personalEmail: ''
  })

  const load = async (page = meta.page) => {
    setLoading(true)
    const qs = new URLSearchParams({
      search,
      page: String(page),
      pageSize: String(pageSize),
      sortBy,
      sortOrder
    })
    const res = await fetch(`/api/authors?${qs.toString()}`)
    if (!res.ok) {
      setAuthors([])
      setMeta({ page, pageSize, total: 0, pages: 1 })
      setLoading(false)
      return
    }
    const data = await res.json()
    if (Array.isArray(data)) {
      setAuthors(data)
      const total = data.length
      setMeta({ page, pageSize, total, pages: Math.max(1, Math.ceil(total / pageSize)) })
    } else {
      const arr = Array.isArray(data?.data) ? data.data : []
      setAuthors(arr)
      const metaFromServer = data?.meta
      const total = metaFromServer?.total ?? arr.length
      const pages = metaFromServer?.pages ?? Math.max(1, Math.ceil(total / pageSize))
      setMeta(metaFromServer ?? { page, pageSize, total, pages })
    }
    setLoading(false)
  }

  useEffect(() => { load(1) }, [search, sortBy, sortOrder, pageSize])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('authors_sortBy', sortBy)
      localStorage.setItem('authors_sortOrder', sortOrder)
      localStorage.setItem('authors_pageSize', String(pageSize))
    }
  }, [sortBy, sortOrder, pageSize])

  const addAuthor = async () => {
    const parsed = AuthorCreateSchema.safeParse(form)
    if (!parsed.success) {
      setFormErrors(parsed.error.errors.map(e=>e.message))
      return
    }
    setFormErrors([])
    try {
      const res = await fetch('/api/authors', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(parsed.data) 
      })
      if (!res.ok) {
        const error = await res.json()
        setFormErrors([error.message || 'Błąd podczas dodawania autora'])
        return
      }
      setForm({ firstName: '', middleName: '', lastName: '', description: '', workEmail: '', personalEmail: '' })
      setShowAddModal(false)
      await load(1)
    } catch (error) {
      setFormErrors(['Błąd połączenia z serwerem'])
    }
  }

  const updateAuthor = async () => {
    if (!editingAuthor) return
    const parsed = AuthorUpdateSchema.safeParse(form)
    if (!parsed.success) {
      setFormErrors(parsed.error.errors.map(e=>e.message))
      return
    }
    setFormErrors([])
    try {
      const res = await fetch(`/api/authors/${editingAuthor.id}`, { 
        method: 'PUT', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(parsed.data) 
      })
      if (!res.ok) {
        const error = await res.json()
        setFormErrors([error.message || 'Błąd podczas aktualizacji autora'])
        return
      }
      setEditingAuthor(null)
      setForm({ firstName: '', middleName: '', lastName: '', description: '', workEmail: '', personalEmail: '' })
      await load(meta.page)
    } catch (error) {
      setFormErrors(['Błąd połączenia z serwerem'])
    }
  }

  const openEditAuthor = (a: Author) => {
    setEditingAuthor(a)
    setForm({
      firstName: a.firstName,
      middleName: a.middleName || '',
      lastName: a.lastName,
      description: a.description || '',
      workEmail: a.workEmail || '',
      personalEmail: a.personalEmail || '',
    })
    setFormErrors([])
  }

  const removeAuthor = async (id: number) => {
    await fetch(`/api/authors/${id}`, { method: 'DELETE' })
    await load(meta.page)
  }

  const toggleSort = (col: typeof sortBy) => {
    if (sortBy !== col) { setSortBy(col); setSortOrder('asc') } else { setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc') }
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Lista Osób</h1>
          <Button variant="primary" onClick={() => { 
            setShowAddModal(true); 
            setFormErrors([]); 
            setForm({ firstName: '', middleName: '', lastName: '', description: '', workEmail: '', personalEmail: '' }); 
          }}>
            Dodaj osobę
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="label">Szukaj</label>
            <Input value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setSearch(e.target.value)} placeholder="Imię/Nazwisko" />
          </div>
          <div>
            <label className="label">Sortuj wg</label>
            <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" value={sortBy} onChange={e=>setSortBy(e.target.value as any)}>
              <option value="id">ID</option>
              <option value="firstName">Imię</option>
              <option value="lastName">Nazwisko</option>
              <option value="createdAt">Utworzono</option>
            </select>
          </div>
          <div>
            <label className="label">Kierunek</label>
            <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" value={sortOrder} onChange={e=>setSortOrder(e.target.value as any)}>
              <option value="asc">Rosnąco</option>
              <option value="desc">Malejąco</option>
            </select>
          </div>
          <div>
            <label className="label">Rozmiar strony</label>
            <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" value={String(pageSize)} onChange={e=>setPageSize(Number(e.target.value))}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        {loading ? (
          <p className="text-center text-muted-foreground py-8">Ładowanie...</p>
        ) : (
          <div className="space-y-4">
            <Table>
              <thead>
                <tr>
                  <Th onClick={()=>toggleSort('id')} active={sortBy==='id'} order={sortOrder}>ID</Th>
                  <Th onClick={()=>toggleSort('firstName')} active={sortBy==='firstName'} order={sortOrder}>Imię</Th>
                  <Th>Drugie imię</Th>
                  <Th onClick={()=>toggleSort('lastName')} active={sortBy==='lastName'} order={sortOrder}>Nazwisko</Th>
                  <Th>Klient</Th>
                  <Th onClick={()=>toggleSort('createdAt')} active={sortBy==='createdAt'} order={sortOrder}>Utworzono</Th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {(Array.isArray(authors) ? authors : []).map(a => (
                  <tr key={a.id}>
                    <Td>{a.id}</Td>
                    <Td>
                      <Link className="text-primary-600 hover:underline" href={`/authors/${a.id}`}>{a.firstName}</Link>
                    </Td>
                    <Td>{a.middleName ?? '-'}</Td>
                    <Td>{a.lastName}</Td>
                    <Td>
                      {a.client ? (
                        <Link className="text-primary-600 hover:underline" href={`/clients/${a.client.id}`}>
                          {a.client.name}
                        </Link>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </Td>
                    <Td>{new Intl.DateTimeFormat('pl-PL', { timeZone: 'UTC', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(a.createdAt))}</Td>
                    <Td>
                      <div className="flex gap-2">
                        <Button onClick={()=>openEditAuthor(a)}>Edytuj</Button>
                        <Button onClick={()=>removeAuthor(a.id)}>Usuń</Button>
                      </div>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Pagination page={meta.page} pages={meta.pages} onPage={(p)=>load(p)} />
          </div>
        )}
      </Card>

      {/* Add author modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow w-full max-w-2xl my-8 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">Dodaj osobę</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="label">Imię *</label>
                <Input value={form.firstName} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, firstName: e.target.value }))} />
              </div>
              <div>
                <label className="label">Drugie imię</label>
                <Input value={form.middleName} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, middleName: e.target.value }))} />
              </div>
              <div>
                <label className="label">Nazwisko *</label>
                <Input value={form.lastName} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, lastName: e.target.value }))} />
              </div>
              <div>
                <label className="label">Email służbowy</label>
                <Input type="email" value={form.workEmail} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, workEmail: e.target.value }))} />
              </div>
              <div>
                <label className="label">Email prywatny</label>
                <Input type="email" value={form.personalEmail} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, personalEmail: e.target.value }))} />
              </div>
              <div className="md:col-span-2">
                <label className="label">Opis</label>
                <textarea 
                  className="input w-full min-h-[80px]" 
                  value={form.description} 
                  onChange={e=>setForm(prev=>({ ...prev, description: e.target.value }))}
                />
              </div>
            </div>
            {formErrors.length > 0 && (
              <ul className="mt-2 list-disc list-inside text-sm text-red-600">
                {formErrors.map((e, i) => (<li key={i}>{e}</li>))}
              </ul>
            )}
            <div className="mt-4 flex justify-end gap-2">
              <Button onClick={() => { setShowAddModal(false); setFormErrors([]); }}>Anuluj</Button>
              <Button variant="primary" onClick={addAuthor}>Dodaj</Button>
            </div>
          </div>
        </div>
      )}

      {/* Edit author modal */}
      {editingAuthor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow w-full max-w-2xl my-8 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">Edytuj osobę</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="label">Imię *</label>
                <Input value={form.firstName} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, firstName: e.target.value }))} />
              </div>
              <div>
                <label className="label">Drugie imię</label>
                <Input value={form.middleName} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, middleName: e.target.value }))} />
              </div>
              <div>
                <label className="label">Nazwisko *</label>
                <Input value={form.lastName} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, lastName: e.target.value }))} />
              </div>
              <div>
                <label className="label">Email służbowy</label>
                <Input type="email" value={form.workEmail} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, workEmail: e.target.value }))} />
              </div>
              <div>
                <label className="label">Email prywatny</label>
                <Input type="email" value={form.personalEmail} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setForm(prev=>({ ...prev, personalEmail: e.target.value }))} />
              </div>
              <div className="md:col-span-2">
                <label className="label">Opis</label>
                <textarea 
                  className="input w-full min-h-[80px]" 
                  value={form.description} 
                  onChange={e=>setForm(prev=>({ ...prev, description: e.target.value }))}
                />
              </div>
            </div>
            {formErrors.length > 0 && (
              <ul className="mt-2 list-disc list-inside text-sm text-red-600">
                {formErrors.map((e, i) => (<li key={i}>{e}</li>))}
              </ul>
            )}
            <div className="mt-4 flex justify-end gap-2">
              <Button onClick={() => { setEditingAuthor(null); setFormErrors([]); }}>Anuluj</Button>
              <Button variant="primary" onClick={updateAuthor}>Zapisz</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
