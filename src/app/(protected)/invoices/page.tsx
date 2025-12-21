"use client"
import { useEffect, useState } from 'react'
import { Card } from '../../../components/ui/Card'
import { Table, Th, Td } from '../../../components/ui/Table'
import { Pagination } from '../../../components/ui/Pagination'

type Invoice = { id:number; clientId:number; clientName:string; issueDate:string; paymentDate:string; title:string; net:number; vatPerc:number; vat:number; gross:number; status:string }

export default function InvoicesPage(){
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [meta, setMeta] = useState({ page:1, pageSize:50, total:0, pages:1 })
  const [loading, setLoading] = useState(false)

  const load = async (page = 1)=>{
    setLoading(true)
    const res = await fetch(`/api/invoices?page=${page}&pageSize=${meta.pageSize}`)
    if (!res.ok) { setInvoices([]); setLoading(false); return }
    const json = await res.json()
    setInvoices(json?.data ?? [])
    setMeta(json?.meta ?? { page, pageSize: meta.pageSize, total: 0, pages: 1 })
    setLoading(false)
  }

  useEffect(()=>{ load(1) }, [])

  return (
    <div className="space-y-6">
      <Card>
        <h1 className="text-xl font-semibold mb-4">Faktury - lista</h1>
        {loading ? <p>Ładowanie...</p> : (
          <>
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
                    <Td>{i.id}</Td>
                    <Td>{i.clientName}</Td>
                    <Td>{i.status === 'planned' ? 'Planowana' : 'Wystawiona'}</Td>
                    <Td>{i.title}</Td>
                    <Td>{new Intl.DateTimeFormat('pl-PL').format(new Date(i.issueDate))}</Td>
                    <Td>{new Intl.DateTimeFormat('pl-PL').format(new Date(i.paymentDate))}</Td>
                    <Td className="text-right">{i.gross.toFixed(2)}</Td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="mt-4">
              <Pagination page={meta.page} pages={meta.pages} onPage={(p)=>load(p)} />
            </div>
          </>
        )}
      </Card>
    </div>
  )
}
