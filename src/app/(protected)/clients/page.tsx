'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, Th, Td } from '../../../components/ui/Table'
import { Pagination } from '../../../components/ui/Pagination'
import { ClientCreateSchema, ClientUpdateSchema } from '../../../validation/client'
import { useTranslations } from 'next-intl'

type Client = { 
  id: number; 
  name: string; 
  email?: string | null; 
  phone?: string | null; 
  address?: string | null;
  city?: string | null;
  postalCode?: string | null;
  country?: string | null;
  nip?: string | null;
  regon?: string | null;
  legalForm?: string | null;
  bankAccount?: string | null;
  notes?: string | null;
  createdAt: string;
}

type Meta = { page: number; pageSize: number; total: number; pages: number }

type ListResponse<T> = { data: T[]; meta: Meta }

export default function ClientsPage() {
  const t = useTranslations()
  const [clients, setClients] = useState<Client[]>([])
  const [meta, setMeta] = useState<Meta>({ page: 1, pageSize: 10, total: 0, pages: 1 })
  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState<'id'|'name'|'email'|'phone'|'createdAt'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('clients_sortBy') as any) || 'id'
    }
    return 'id'
  })
  const [sortOrder, setSortOrder] = useState<'asc'|'desc'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('clients_sortOrder') as any) || 'asc'
    }
    return 'asc'
  })
  const [pageSize, setPageSize] = useState(() => {
    if (typeof window !== 'undefined') {
      return Number(localStorage.getItem('clients_pageSize')) || 10
    }
    return 10
  })

  const [showAddModal, setShowAddModal] = useState(false)
  const [editingClient, setEditingClient] = useState<Client | null>(null)
  const [formErrors, setFormErrors] = useState<string[]>([])
  const [lookupLoading, setLookupLoading] = useState(false)
  const [lookupMessage, setLookupMessage] = useState<string | null>(null)
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    address: '', 
    city: '', 
    postalCode: '', 
    country: 'Polska',
    nip: '', 
    regon: '', 
    legalForm: '', 
    bankAccount: '', 
    notes: '' 
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

  // Zapisz ustawienia sortowania i rozmiaru strony do localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('clients_sortBy', sortBy)
      localStorage.setItem('clients_sortOrder', sortOrder)
      localStorage.setItem('clients_pageSize', String(pageSize))
    }
  }, [sortBy, sortOrder, pageSize])

  const addClient = async () => {
    const parsed = ClientCreateSchema.safeParse(form)
    if (!parsed.success) {
      setFormErrors(parsed.error.errors.map(e=>e.message))
      return
    }
    setFormErrors([])
    await fetch('/api/clients', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(parsed.data) })
    setForm({ name: '', email: '', phone: '', address: '', city: '', postalCode: '', country: 'Polska', nip: '', regon: '', legalForm: '', bankAccount: '', notes: '' })
    setShowAddModal(false)
    await load(1)
  }

  const updateClient = async () => {
    if (!editingClient) return
    const parsed = ClientUpdateSchema.safeParse(form)
    if (!parsed.success) {
      setFormErrors(parsed.error.errors.map(e=>e.message))
      return
    }
    setFormErrors([])
    await fetch(`/api/clients/${editingClient.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(parsed.data) })
    setEditingClient(null)
    setForm({ name: '', email: '', phone: '', address: '', city: '', postalCode: '', country: 'Polska', nip: '', regon: '', legalForm: '', bankAccount: '', notes: '' })
    await load(meta.page)
  }

  const openEditClient = (c: Client) => {
    setEditingClient(c)
    setForm({
      name: c.name,
      email: c.email || '',
      phone: c.phone || '',
      address: c.address || '',
      city: c.city || '',
      postalCode: c.postalCode || '',
      country: c.country || 'Polska',
      nip: c.nip || '',
      regon: c.regon || '',
      legalForm: c.legalForm || '',
      bankAccount: c.bankAccount || '',
      notes: c.notes || '',
    })
    setFormErrors([])
  }

  const fetchCompanyData = async () => {
    if (!form.nip && !form.regon) {
      setLookupMessage('Wprowadź NIP aby pobrać dane')
      return
    }
    
    setLookupLoading(true)
    setLookupMessage(null)
    setFormErrors([])
    
    try {
      const param = form.nip ? `nip=${form.nip}` : `krs=${form.regon}`
      const res = await fetch(`/api/company-lookup?${param}`)
      const data = await res.json()
      
      if (data.success && data.data) {
        // Auto-fill form with fetched data
        setForm(prev => ({
          ...prev,
          name: data.data.name || prev.name,
          address: data.data.address || prev.address,
          city: data.data.city || prev.city,
          postalCode: data.data.postalCode || prev.postalCode,
          nip: data.data.nip || prev.nip,
          regon: data.data.regon || prev.regon,
          legalForm: data.data.legalForm || prev.legalForm,
        }))
        setLookupMessage('Dane pobrane pomyślnie')
      } else {
        setLookupMessage(data.error || 'Nie znaleziono firmy')
        if (data.hint) {
          setFormErrors([data.hint])
        }
      }
    } catch (error) {
      setLookupMessage('Błąd podczas pobierania danych')
    } finally {
      setLookupLoading(false)
    }
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
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">{t('clients.title')}</h1>
          <Button variant="primary" onClick={() => { 
            setShowAddModal(true); 
            setFormErrors([]); 
            setLookupMessage(null);
            setForm({ name: '', email: '', phone: '', address: '', city: '', postalCode: '', country: 'Polska', nip: '', regon: '', legalForm: '', bankAccount: '', notes: '' }); 
          }}>
            {t('clients.createClient')}
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="label">{t('common.search')}</label>
            <Input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Nazwa/Email/Telefon/NIP" />
          </div>
          <div>
            <label className="label">{t('common.sortBy')}</label>
            <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" value={sortBy} onChange={e=>setSortBy(e.target.value as any)}>
              <option value="id">ID</option>
              <option value="name">Nazwa</option>
              <option value="email">Email</option>
              <option value="phone">Telefon</option>
              <option value="createdAt">Utworzono</option>
            </select>
          </div>
          <div>
            <label className="label">{t('clients.sortDirection')}</label>
            <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" value={sortOrder} onChange={e=>setSortOrder(e.target.value as any)}>
              <option value="asc">{t('clients.ascending')}</option>
              <option value="desc">{t('clients.descending')}</option>
            </select>
          </div>
          <div>
            <label className="label">{t('common.pageSize')}</label>
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
          <p className="text-center text-muted-foreground py-8">{t('common.loading')}</p>
        ) : (
          <div className="space-y-4">
            <Table>
              <thead>
                <tr>
                  <Th onClick={()=>toggleSort('id')} active={sortBy==='id'} order={sortOrder}>ID</Th>
                  <Th onClick={()=>toggleSort('name')} active={sortBy==='name'} order={sortOrder}>{t('common.name')}</Th>
                  <Th onClick={()=>toggleSort('email')} active={sortBy==='email'} order={sortOrder}>{t('common.email')}</Th>
                  <Th onClick={()=>toggleSort('phone')} active={sortBy==='phone'} order={sortOrder}>{t('common.phone')}</Th>
                  <Th>{t('clients.nip')}</Th>
                  <Th>{t('clients.city')}</Th>
                  <Th onClick={()=>toggleSort('createdAt')} active={sortBy==='createdAt'} order={sortOrder}>{t('clients.created')}</Th>
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
                    <Td>{c.nip ?? '-'}</Td>
                    <Td>{c.city ?? '-'}</Td>
                    <Td>{new Intl.DateTimeFormat('pl-PL', { timeZone: 'UTC', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(c.createdAt))}</Td>
                    <Td>
                      <div className="flex gap-2">
                        <Button onClick={()=>openEditClient(c)}>{t('common.edit')}</Button>
                        <Button onClick={()=>removeClient(c.id)}>{t('common.delete')}</Button>
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

      {/* Add client modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow w-full max-w-2xl my-8 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">{t('clients.createClient')}</h3>
            
            {/* Company lookup section */}
            <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-blue-900 dark:text-blue-100">
                  Autouzupełnianie danych z rejestru
                </div>
                <Button 
                  onClick={fetchCompanyData} 
                  disabled={lookupLoading || (!form.nip && !form.regon)}
                  className="text-sm"
                >
                  {lookupLoading ? 'Pobieranie...' : 'Pobierz dane'}
                </Button>
              </div>
              <div className="text-xs text-blue-700 dark:text-blue-300">
                Wprowadź NIP i kliknij "Pobierz dane" aby automatycznie wypełnić formularz danymi z CEIDG
              </div>
              {lookupMessage && (
                <div className={`text-xs mt-2 ${lookupMessage.includes('Błąd') || lookupMessage.includes('Nie') ? 'text-red-600' : 'text-green-600'}`}>
                  {lookupMessage}
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="label">Nazwa *</label>
                <Input value={form.name} onChange={e=>setForm(prev=>({ ...prev, name: e.target.value }))} />
              </div>
              <div>
                <label className="label">Forma prawna</label>
                <Input value={form.legalForm} onChange={e=>setForm(prev=>({ ...prev, legalForm: e.target.value }))} placeholder="np. Sp. z o.o., S.A., JDG" />
              </div>
              <div>
                <label className="label">Email</label>
                <Input value={form.email} onChange={e=>setForm(prev=>({ ...prev, email: e.target.value }))} />
              </div>
              <div>
                <label className="label">Telefon</label>
                <Input value={form.phone} onChange={e=>setForm(prev=>({ ...prev, phone: e.target.value }))} />
              </div>
              <div>
                <label className="label">NIP</label>
                <Input value={form.nip} onChange={e=>setForm(prev=>({ ...prev, nip: e.target.value }))} />
              </div>
              <div>
                <label className="label">REGON</label>
                <Input value={form.regon} onChange={e=>setForm(prev=>({ ...prev, regon: e.target.value }))} />
              </div>
              <div className="md:col-span-2">
                <label className="label">Adres</label>
                <Input value={form.address} onChange={e=>setForm(prev=>({ ...prev, address: e.target.value }))} />
              </div>
              <div>
                <label className="label">Miasto</label>
                <Input value={form.city} onChange={e=>setForm(prev=>({ ...prev, city: e.target.value }))} />
              </div>
              <div>
                <label className="label">Kod pocztowy</label>
                <Input value={form.postalCode} onChange={e=>setForm(prev=>({ ...prev, postalCode: e.target.value }))} placeholder="00-000" />
              </div>
              <div>
                <label className="label">Kraj</label>
                <Input value={form.country} onChange={e=>setForm(prev=>({ ...prev, country: e.target.value }))} />
              </div>
              <div>
                <label className="label">Numer konta</label>
                <Input value={form.bankAccount} onChange={e=>setForm(prev=>({ ...prev, bankAccount: e.target.value }))} />
              </div>
              <div className="md:col-span-2">
                <label className="label">Notatki</label>
                <Input value={form.notes} onChange={e=>setForm(prev=>({ ...prev, notes: e.target.value }))} />
              </div>
            </div>
            {formErrors.length > 0 && (
              <ul className="mt-2 list-disc list-inside text-sm text-red-600">
                {formErrors.map((e, i) => (<li key={i}>{e}</li>))}
              </ul>
            )}
            <div className="mt-4 flex justify-end gap-2">
              <Button onClick={() => { setShowAddModal(false); setFormErrors([]); setLookupMessage(null); }}>{t('common.cancel')}</Button>
              <Button variant="primary" onClick={addClient}>{t('common.add')}</Button>
            </div>
          </div>
        </div>
      )}

      {/* Edit client modal */}
      {editingClient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow w-full max-w-2xl my-8 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">{t('clients.editClient')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="label">Nazwa *</label>
                <Input value={form.name} onChange={e=>setForm(prev=>({ ...prev, name: e.target.value }))} />
              </div>
              <div>
                <label className="label">Forma prawna</label>
                <Input value={form.legalForm} onChange={e=>setForm(prev=>({ ...prev, legalForm: e.target.value }))} placeholder="np. Sp. z o.o., S.A., JDG" />
              </div>
              <div>
                <label className="label">Email</label>
                <Input value={form.email} onChange={e=>setForm(prev=>({ ...prev, email: e.target.value }))} />
              </div>
              <div>
                <label className="label">Telefon</label>
                <Input value={form.phone} onChange={e=>setForm(prev=>({ ...prev, phone: e.target.value }))} />
              </div>
              <div>
                <label className="label">NIP</label>
                <Input value={form.nip} onChange={e=>setForm(prev=>({ ...prev, nip: e.target.value }))} />
              </div>
              <div>
                <label className="label">REGON</label>
                <Input value={form.regon} onChange={e=>setForm(prev=>({ ...prev, regon: e.target.value }))} />
              </div>
              <div className="md:col-span-2">
                <label className="label">Adres</label>
                <Input value={form.address} onChange={e=>setForm(prev=>({ ...prev, address: e.target.value }))} />
              </div>
              <div>
                <label className="label">Miasto</label>
                <Input value={form.city} onChange={e=>setForm(prev=>({ ...prev, city: e.target.value }))} />
              </div>
              <div>
                <label className="label">Kod pocztowy</label>
                <Input value={form.postalCode} onChange={e=>setForm(prev=>({ ...prev, postalCode: e.target.value }))} placeholder="00-000" />
              </div>
              <div>
                <label className="label">Kraj</label>
                <Input value={form.country} onChange={e=>setForm(prev=>({ ...prev, country: e.target.value }))} />
              </div>
              <div>
                <label className="label">Numer konta</label>
                <Input value={form.bankAccount} onChange={e=>setForm(prev=>({ ...prev, bankAccount: e.target.value }))} />
              </div>
              <div className="md:col-span-2">
                <label className="label">Notatki</label>
                <Input value={form.notes} onChange={e=>setForm(prev=>({ ...prev, notes: e.target.value }))} />
              </div>
            </div>
            {formErrors.length > 0 && (
              <ul className="mt-2 list-disc list-inside text-sm text-red-600">
                {formErrors.map((e, i) => (<li key={i}>{e}</li>))}
              </ul>
            )}
            <div className="mt-4 flex justify-end gap-2">
              <Button onClick={() => { setEditingClient(null); setFormErrors([]); }}>{t('common.cancel')}</Button>
              <Button variant="primary" onClick={updateClient}>{t('common.save')}</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
