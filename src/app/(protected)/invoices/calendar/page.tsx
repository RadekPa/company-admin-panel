"use client"
import { useEffect, useState } from 'react'
import { Card } from '../../../../components/ui/Card'
import { Table, Th, Td } from '../../../../components/ui/Table'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

type Row = { date: string; issued: number; planned: number; total: number; cumulative: number }

function formatCurrency(n: number){
  return n.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export default function CalendarPage(){
  const [data, setData] = useState<Row[]>([])
  const [from, setFrom] = useState(() => {
    const d = new Date(); d.setDate(d.getDate() - 30); return d.toISOString().slice(0,10)
  })
  const [to, setTo] = useState(() => new Date().toISOString().slice(0,10))
  const [loading, setLoading] = useState(false)

  const load = async () => {
    setLoading(true)
    const res = await fetch(`/api/invoices/cashflow?from=${from}&to=${to}`)
    if (!res.ok) { setData([]); setLoading(false); return }
    const json = await res.json()
    setData(json.data ?? [])
    setLoading(false)
  }

  useEffect(()=>{ load() }, [from, to])

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-semibold">Faktury - kalendarz (cashflow)</h1>
            <p className="text-sm text-gray-400">Widok dzienny: wystawione vs planowane</p>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-400">Od</label>
            <input className="border px-2 py-1 rounded" type="date" value={from} onChange={(e)=>setFrom(e.target.value)} />
            <label className="text-sm text-gray-400">Do</label>
            <input className="border px-2 py-1 rounded" type="date" value={to} onChange={(e)=>setTo(e.target.value)} />
            <button className="ml-2 btn" onClick={()=>load()}>Odśwież</button>
          </div>
        </div>

        {/* Chart */}
        <div style={{ width: '100%', height: 300 }} className="mb-6">
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tickFormatter={(d: string) => new Intl.DateTimeFormat('pl-PL', { month: 'short', day: 'numeric' }).format(new Date(d))} />
              <YAxis />
              <Tooltip formatter={(value: number | string) => formatCurrency(Number(value))} labelFormatter={(label: string) => new Intl.DateTimeFormat('pl-PL').format(new Date(label))} />
              <Legend />
              <Line type="monotone" dataKey="issued" stroke="#1f7aef" dot={false} name="Wystawione" />
              <Line type="monotone" dataKey="planned" stroke="#f59e0b" dot={false} name="Planowane" />
              <Line type="monotone" dataKey="cumulative" stroke="#10b981" dot={false} name="Skumulowane" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {loading ? <p>Ładowanie...</p> : (
          <Table>
            <thead>
              <tr>
                <Th>Data</Th>
                <Th className="text-right">Wystawione</Th>
                <Th className="text-right">Planowane</Th>
                <Th className="text-right">Suma</Th>
                <Th className="text-right">Skumulowane</Th>
              </tr>
            </thead>
            <tbody>
              {data.map(r=> (
                <tr key={r.date}>
                  <Td>{new Intl.DateTimeFormat('pl-PL').format(new Date(r.date))}</Td>
                  <Td className="text-right">{formatCurrency(r.issued)}</Td>
                  <Td className="text-right">{formatCurrency(r.planned)}</Td>
                  <Td className="text-right">{formatCurrency(r.total)}</Td>
                  <Td className="text-right">{formatCurrency(r.cumulative)}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Card>
    </div>
  )
}
