 'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Card } from '../../../../components/ui/Card'
import { Button } from '../../../../components/ui/Button'
import { Input, Select } from '../../../../components/ui/Input'
import { Table, Th, Td } from '../../../../components/ui/Table'
import { Pagination } from '../../../../components/ui/Pagination'
import { ClientUpdateSchema } from '../../../../validation/client'
import { DocumentCreateSchema } from '../../../../validation/document'

type Client = { id: number; name: string; email?: string | null; phone?: string | null }

type Document = { id: number; title: string; description?: string | null; status: 'DRAFT' | 'SIGNED'; createdAt: string }

type Meta = { page: number; pageSize: number; total: number; pages: number }

type ListResponse<T> = { data: T[]; meta: Meta }

export default function ClientDetailPage() {
  const params = useParams()
  const id = Number(params.id)
  const [client, setClient] = useState<Client | null>(null)

  const [docs, setDocs] = useState<Document[]>([])
  const [meta, setMeta] = useState<Meta>({ page: 1, pageSize: 10, total: 0, pages: 1 })
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState<''|'DRAFT'|'SIGNED'>('')
  const [sortBy, setSortBy] = useState<'id'|'title'|'status'|'createdAt'>('createdAt')
  const [sortOrder, setSortOrder] = useState<'asc'|'desc'>('desc')
  const [pageSize, setPageSize] = useState(10)

  const [formClientErrors, setFormClientErrors] = useState<string[]>([])
  const [formDocErrors, setFormDocErrors] = useState<string[]>([])
  const [formDoc, setFormDoc] = useState({ title: '', description: '', status: 'DRAFT' as 'DRAFT'|'SIGNED' })
  // invoices
  const [invoicesType, setInvoicesType] = useState<'issued'|'planned'>('issued')
  const [invoices, setInvoices] = useState<any[]>([])
  const loadInvoices = async (type: 'issued'|'planned' = invoicesType) => {
    const res = await fetch(`/api/clients/${id}/invoices?type=${type}`)
    if (!res.ok) { setInvoices([]); return }
    const json = await res.json()
    setInvoices(Array.isArray(json?.data) ? json.data : (json?.data ?? []))
  }

  const loadClient = async () => {
    const resClient = await fetch(`/api/clients/${id}`)
    const c = await resClient.json()
    setClient(c)
  }

  const loadDocs = async (page = meta.page) => {
    setLoading(true)
    const qs = new URLSearchParams({
      search,
      status,
      page: String(page),
      pageSize: String(pageSize),
      sortBy,
      sortOrder
    })
    const resDocs = await fetch(`/api/clients/${id}/documents?${qs.toString()}`)
    const d = await resDocs.json()
    console.debug('[ClientDocs] fetch response:', { type: Array.isArray(d) ? 'array' : typeof d, d })
    if (Array.isArray(d)) {
      setDocs(d)
      const total = d.length
      setMeta({ page, pageSize, total, pages: Math.max(1, Math.ceil(total / pageSize)) })
    } else {
      const arr = Array.isArray(d?.data) ? d.data : []
      setDocs(arr)
      const metaFromServer = d?.meta
      const total = metaFromServer?.total ?? arr.length
      const pages = metaFromServer?.pages ?? Math.max(1, Math.ceil(total / pageSize))
      setMeta(metaFromServer ?? { page, pageSize, total, pages })
    }
    setLoading(false)
  }

  useEffect(() => { if (id) { loadClient(); loadDocs(1) } }, [id])
  useEffect(()=>{ if (id) loadInvoices(invoicesType) }, [id, invoicesType])
  useEffect(() => { loadDocs(1) }, [search, status, sortBy, sortOrder, pageSize])

  const addDoc = async () => {
    const parsed = DocumentCreateSchema.safeParse(formDoc)
    if (!parsed.success) {
      setFormDocErrors(parsed.error.errors.map(e=>e.message))
      return
    }
    setFormDocErrors([])
    await fetch(`/api/clients/${id}/documents`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(parsed.data) })
    setFormDoc({ title: '', description: '', status: 'DRAFT' })
    await loadDocs(1)
  }

  const removeDoc = async (docId: number) => {
    await fetch(`/api/documents/${docId}`, { method: 'DELETE' })
    await loadDocs(meta.page)
  }

  const updateClient = async () => {
    if (!client) return
    const parsed = ClientUpdateSchema.safeParse({ name: client.name, email: client.email ?? '', phone: client.phone ?? '' })
    if (!parsed.success) {
      setFormClientErrors(parsed.error.errors.map(e=>e.message))
      return
    }
    setFormClientErrors([])
    await fetch(`/api/clients/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(parsed.data) })
    await loadClient()
  }

  const toggleSort = (col: typeof sortBy) => {
    if (sortBy !== col) { setSortBy(col); setSortOrder('asc') } else { setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc') }
  }

  if (!client) return <p>Ładowanie...</p>

  return (
    <div className="space-y-6">
      <Card className="space-y-3">
        <h1 className="text-xl font-semibold">Klient: {client.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="label">Nazwa</label>
            <Input value={client.name} onChange={e=>setClient({ ...client, name: e.target.value })} />
          </div>
          <div>
            <label className="label">Email</label>
            <Input value={client.email ?? ''} onChange={e=>setClient({ ...client, email: e.target.value })} />
          </div>
          <div>
            <label className="label">Telefon</label>
            <Input value={client.phone ?? ''} onChange={e=>setClient({ ...client, phone: e.target.value })} />
          </div>
        </div>
        {formClientErrors.length>0 && (
          <ul className="mt-2 list-disc list-inside text-sm text-red-600">
            {formClientErrors.map((e,i)=>(<li key={i}>{e}</li>))}
          </ul>
        )}
        <Button variant="primary" onClick={updateClient}>Zapisz</Button>
      </Card>

      <Card className="space-y-4">
        <h2 className="text-lg font-semibold">Dokumenty klienta</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="label">Szukaj</label>
            <Input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Tytuł/Opis" />
          </div>
          <div>
            <label className="label">Status</label>
            <Select value={status} onChange={e=>setStatus(e.target.value as any)}>
              <option value="">Wszystkie</option>
              <option value="DRAFT">DRAFT</option>
              <option value="SIGNED">SIGNED</option>
            </Select>
          </div>
          <div>
            <label className="label">Sortuj wg</label>
            <Select value={sortBy} onChange={e=>setSortBy(e.target.value as any)}>
              <option value="createdAt">Utworzono</option>
              <option value="title">Tytuł</option>
              <option value="status">Status</option>
              <option value="id">ID</option>
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
            <label className="label">Tytuł</label>
            <Input value={formDoc.title} onChange={e=>setFormDoc(prev=>({ ...prev, title: e.target.value }))} />
          </div>
          <div>
            <label className="label">Opis</label>
            <Input value={formDoc.description} onChange={e=>setFormDoc(prev=>({ ...prev, description: e.target.value }))} />
          </div>
          <div>
            <label className="label">Status</label>
            <Select value={formDoc.status} onChange={e=>setFormDoc(prev=>({ ...prev, status: e.target.value as any }))}>
              <option value="DRAFT">DRAFT</option>
              <option value="SIGNED">SIGNED</option>
            </Select>
          </div>
        </div>
        {formDocErrors.length>0 && (
          <ul className="mt-2 list-disc list-inside text-sm text-red-600">
            {formDocErrors.map((e,i)=>(<li key={i}>{e}</li>))}
          </ul>
        )}
        <Button variant="primary" onClick={addDoc}>Dodaj dokument</Button>

        <div className="mt-4 space-y-3">
          {loading ? (
            <p>Ładowanie...</p>
          ) : (
            <>
              <Table>
                <thead>
                  <tr>
                    <Th onClick={()=>toggleSort('id')} active={sortBy==='id'} order={sortOrder}>ID</Th>
                    <Th onClick={()=>toggleSort('title')} active={sortBy==='title'} order={sortOrder}>Tytuł</Th>
                    <Th onClick={()=>toggleSort('status')} active={sortBy==='status'} order={sortOrder}>Status</Th>
                    <Th onClick={()=>toggleSort('createdAt')} active={sortBy==='createdAt'} order={sortOrder}>Data</Th>
                    <th className="px-4 py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {(Array.isArray(docs) ? docs : []).map(doc => (
                    <tr key={doc.id}>
                      <Td>{doc.id}</Td>
                      <Td>{doc.title}</Td>
                      <Td>{doc.status}</Td>
                      <Td>{new Intl.DateTimeFormat('pl-PL', { timeZone: 'UTC', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(doc.createdAt))}</Td>
                      <Td>
                        <Button onClick={()=>removeDoc(doc.id)}>Usuń</Button>
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Pagination page={meta.page} pages={meta.pages} onPage={(p)=>loadDocs(p)} />
            </>
          )}
        </div>
      </Card>

      <Card className="space-y-4">
        <h2 className="text-lg font-semibold">Faktury</h2>
        <div className="flex gap-2">
          <button className={`px-3 py-1 rounded ${invoicesType==='issued'?'accent':''}`} onClick={()=>setInvoicesType('issued')}>Wystawione</button>
          <button className={`px-3 py-1 rounded ${invoicesType==='planned'?'accent':''}`} onClick={()=>setInvoicesType('planned')}>Planowane</button>
        </div>
        <div className="mt-3">
          <Table>
            <thead>
              <tr>
                <Th>ID</Th>
                <Th>Data wystawienia</Th>
                <Th>Data zapłaty</Th>
                <Th>Tytuł</Th>
                <Th>Netto</Th>
                <Th>VAT</Th>
                <Th>Brutto</Th>
              </tr>
            </thead>
            <tbody>
              {invoices.map(inv => (
                <tr key={inv.id}>
                  <Td><Link href={`/invoices/${inv.id}`}>{inv.id}</Link></Td>
                  <Td>{new Intl.DateTimeFormat('pl-PL').format(new Date(inv.issueDate))}</Td>
                  <Td>{new Intl.DateTimeFormat('pl-PL').format(new Date(inv.paymentDate))}</Td>
                  <Td><Link href={`/invoices/${inv.id}`}>{inv.title}</Link></Td>
                  <Td>{inv.net.toFixed(2)}</Td>
                  <Td>{inv.vatPerc}% ({inv.vat.toFixed(2)})</Td>
                  <Td>{inv.gross.toFixed(2)}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
    </div>
  )
}
