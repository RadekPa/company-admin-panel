"use client"
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Table, Th, Td } from '../../../components/ui/Table'
import { Pagination } from '../../../components/ui/Pagination'
import { Modal } from '../../../components/ui/Modal'
import { Button } from '@/components/ui/button'
type Invoice = { id:number; clientId:number; clientName:string; issueDate:string; paymentDate:string; title:string; net:number; vatPerc:number; vat:number; gross:number; status:string }

type Client = { id:number; name:string }

export default function InvoicesPage(){
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [meta, setMeta] = useState({ page:1, pageSize:50, total:0, pages:1 })
  const [loading, setLoading] = useState(false)
  const [clients, setClients] = useState<Client[]>([])
  const [showForm, setShowForm] = useState(false)

  const [form, setForm] = useState({ clientId: '', title: '', issueDate: '', paymentDate: '', net: '', vatPerc: '', status: 'issued' })

  const load = async (page = 1)=>{
    setLoading(true)
    const res = await fetch(`/api/invoices?page=${page}&pageSize=${meta.pageSize}`)
    if (!res.ok) { setInvoices([]); setLoading(false); return }
    const json = await res.json()
    setInvoices(json?.data ?? [])
    setMeta(json?.meta ?? { page, pageSize: meta.pageSize, total: 0, pages: 1 })
    setLoading(false)
  }

  useEffect(()=>{ load(1); fetchClients() }, [])

  const fetchClients = async ()=>{
    const res = await fetch('/api/clients')
    if (!res.ok) return
    const json = await res.json()
    // API może zwrócić { data: [...] } lub bezpośrednio tablicę
    setClients(Array.isArray(json) ? json : (json?.data ?? []))
  }

  const handleCreate = async (e: any)=>{
    e.preventDefault()
    const payload = {
      clientId: Number(form.clientId),
      title: form.title,
      issueDate: form.issueDate || new Date().toISOString(),
      paymentDate: form.paymentDate || form.issueDate || new Date().toISOString(),
      net: Number(form.net) || 0,
      vatPerc: Number(form.vatPerc) || 0,
      status: form.status
    }
    const res = await fetch('/api/invoices', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    if (res.ok) {
      setShowForm(false)
      setForm({ clientId: '', title: '', issueDate: '', paymentDate: '', net: '', vatPerc: '', status: 'issued' })
      load(1)
    } else {
      alert('Błąd tworzenia faktury')
    }
  }

  const updateStatus = async (id:number, status:string)=>{
    const res = await fetch(`/api/invoices/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status }) })
    if (res.ok) {
      setInvoices(prev => prev.map(inv => inv.id === id ? { ...inv, status } : inv))
    } else {
      alert('Błąd aktualizacji statusu')
    }
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Faktury - lista</h1>
          <Button variant="primary" onClick={()=>setShowForm(true)}>Nowa faktura</Button>
        </div>

        <Modal isOpen={showForm} onClose={() => setShowForm(false)} title="Dodaj nową fakturę">
          <form onSubmit={handleCreate} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Klient</label>
              <select 
                value={form.clientId} 
                onChange={e=>setForm({...form, clientId: e.target.value})} 
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Wybierz klienta</option>
                {(Array.isArray(clients) ? clients : []).map(c=> <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Tytuł</label>
              <input 
                placeholder="Tytuł faktury" 
                value={form.title} 
                onChange={e=>setForm({...form, title: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Data wystawienia</label>
                <input 
                  type="date" 
                  value={form.issueDate} 
                  onChange={e=>setForm({...form, issueDate: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Data zapłaty</label>
                <input 
                  type="date" 
                  value={form.paymentDate} 
                  onChange={e=>setForm({...form, paymentDate: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Netto</label>
                <input 
                  placeholder="0.00" 
                  type="number" 
                  step="0.01" 
                  value={form.net} 
                  onChange={e=>setForm({...form, net: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">VAT %</label>
                <input 
                  placeholder="0.00" 
                  type="number" 
                  step="0.01" 
                  value={form.vatPerc} 
                  onChange={e=>setForm({...form, vatPerc: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
              <select 
                value={form.status} 
                onChange={e=>setForm({...form, status: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-primary-500"
              >
                <option value="issued">Wystawiona</option>
                <option value="planned">Planowana</option>
              </select>
            </div>

            <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
              <Button variant="primary" type="submit" className="flex-1">Utwórz fakturę</Button>
              <Button type="button" onClick={() => setShowForm(false)} className="flex-1">Anuluj</Button>
            </div>
          </form>
        </Modal>

        {loading ? <p className="text-center text-muted-foreground py-8">Ładowanie...</p> : (
          <div className="mt-6">
            <Table>
              <thead>
                <tr>
                  <Th>ID</Th>
                  <Th>Klient</Th>
                  <Th>Typ</Th>
                  <Th>Tytuł</Th>
                  <Th>Data wystawienia</Th>
                  <Th>Data zapłaty</Th>
                  <Th className="text-right">Brutto</Th>
                </tr>
              </thead>
              <tbody>
                {invoices.map(i=> (
                  <tr key={i.id}>
                    <Td><Link href={`/invoices/${i.id}`}>{i.id}</Link></Td>
                    <Td>{i.clientName}</Td>
                    <Td>
                      <select value={i.status} onChange={e=>updateStatus(i.id, e.target.value)}>
                        <option value="issued">Wystawiona</option>
                        <option value="planned">Planowana</option>
                      </select>
                    </Td>
                    <Td><Link href={`/invoices/${i.id}`}>{i.title}</Link></Td>
                    <Td>{new Intl.DateTimeFormat('pl-PL').format(new Date(i.issueDate))}</Td>
                    <Td>{new Intl.DateTimeFormat('pl-PL').format(new Date(i.paymentDate))}</Td>
                    <Td className="text-right">{i.gross.toFixed(2)}</Td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="mt-6">
              <Pagination page={meta.page} pages={meta.pages} onPage={(p)=>load(p)} />
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
