"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'

type Item = { description: string; qty: number; unitNet: number; vatPerc: number; vat: number; totalGross: number }

export default function InvoiceShow({ params }: { params: { id: string } }){
  const id = params.id
  const [invoice, setInvoice] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(()=>{
    const load = async ()=>{
      setLoading(true)
      const res = await fetch(`/api/invoices/${id}`)
      if (!res.ok) { setInvoice(null); setLoading(false); return }
      const json = await res.json()
      setInvoice(json.invoice)
      setLoading(false)
    }
    load()
  }, [id])

  if (loading) return <p>Ładowanie...</p>
  if (!invoice) return <Card><p>Nie znaleziono faktury</p></Card>

  const items: Item[] = invoice.items
  const sumNet = items.reduce((s,i)=>s + i.unitNet * i.qty, 0)
  const sumVat = items.reduce((s,i)=>s + i.vat, 0)
  const sumGross = items.reduce((s,i)=>s + i.totalGross, 0)

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-semibold">Faktura #{invoice.id}</h2>
            <p className="text-sm text-gray-500">{invoice.title}</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Data wystawienia: {new Intl.DateTimeFormat('pl-PL').format(new Date(invoice.issueDate))}</div>
            <div className="text-sm text-gray-400">Data zapłaty: {new Intl.DateTimeFormat('pl-PL').format(new Date(invoice.paymentDate))}</div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Klient</h3>
            <div>{invoice.client?.name}</div>
            <div className="text-sm text-gray-500">{invoice.client?.email}</div>
          </div>
          <div>
            <h3 className="font-semibold">Podsumowanie</h3>
            <div>Netto: {sumNet.toFixed(2)}</div>
            <div>VAT: {sumVat.toFixed(2)}</div>
            <div className="font-semibold">Brutto: {sumGross.toFixed(2)}</div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">Pozycje</h3>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left">Opis</th>
                <th className="text-right">Ilość</th>
                <th className="text-right">Cena netto</th>
                <th className="text-right">VAT</th>
                <th className="text-right">Brutto</th>
              </tr>
            </thead>
            <tbody>
              {items.map((it, idx)=> (
                <tr key={idx}>
                  <td>{it.description}</td>
                  <td className="text-right">{it.qty}</td>
                  <td className="text-right">{it.unitNet.toFixed(2)}</td>
                  <td className="text-right">{it.vat.toFixed(2)}</td>
                  <td className="text-right">{it.totalGross.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
