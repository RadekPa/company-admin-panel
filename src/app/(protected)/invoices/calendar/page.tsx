"use client"
import { useEffect, useState } from 'react'
import { Card } from '../../../../components/ui/card'
import { Table, Th, Td } from '../../../../components/ui/Table'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts'
import { Button } from '../../../../components/ui/button'
import { Input } from '../../../../components/ui/input'

type Row = { date: string; issued: number; planned: number; adjustment: number; adjustmentIds: number[]; total: number; cumulative: number }
type ViewMode = 'year' | 'month' | 'custom'
type Adjustment = { id: number; date: string; amount: number; description?: string | null }

function formatCurrency(n: number){
  return n.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export default function CalendarPage(){
  const [data, setData] = useState<Row[]>([])
  const [adjustments, setAdjustments] = useState<Adjustment[]>([])
  const [view, setView] = useState<ViewMode>('year')
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [from, setFrom] = useState(() => {
    const d = new Date()
    d.setFullYear(d.getFullYear(), 0, 1)
    return d.toISOString().slice(0,10)
  })
  const [to, setTo] = useState(() => {
    const d = new Date()
    d.setFullYear(d.getFullYear(), 11, 31)
    return d.toISOString().slice(0,10)
  })
  const [loading, setLoading] = useState(false)
  const [showAddAdjustment, setShowAddAdjustment] = useState(false)
  const [editingAdjustment, setEditingAdjustment] = useState<Adjustment | null>(null)
  const [adjustmentForm, setAdjustmentForm] = useState({ date: '', amount: '', description: '' })
  const today = new Date().toISOString().slice(0,10)

  const updateView = (newView: ViewMode) => {
    setView(newView)
    const now = new Date()
    if (newView === 'year') {
      setFrom(`${selectedYear}-01-01`)
      setTo(`${selectedYear}-12-31`)
    } else if (newView === 'month') {
      setFrom(new Date(now.getFullYear(), now.getMonth(), 1).toISOString().slice(0,10))
      setTo(new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().slice(0,10))
    }
  }

  const changeYear = (year: number) => {
    setSelectedYear(year)
    if (view === 'year') {
      setFrom(`${year}-01-01`)
      setTo(`${year}-12-31`)
    }
  }

  const load = async () => {
    setLoading(true)
    const res = await fetch(`/api/invoices/cashflow?mode=${view}&from=${from}&to=${to}`)
    if (!res.ok) { setData([]); setAdjustments([]); setLoading(false); return }
    const json = await res.json()
    setData(json.data ?? [])
    setAdjustments(json.adjustments ?? [])
    setLoading(false)
  }

  const addAdjustment = async () => {
    if (!adjustmentForm.date || !adjustmentForm.amount) return
    const res = await fetch('/api/balance-adjustments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        date: adjustmentForm.date,
        amount: parseFloat(adjustmentForm.amount),
        description: adjustmentForm.description || null,
      }),
    })
    if (!res.ok) { alert('Błąd'); return }
    setShowAddAdjustment(false)
    setAdjustmentForm({ date: '', amount: '', description: '' })
    await load()
  }

  const updateAdjustment = async () => {
    if (!editingAdjustment || !adjustmentForm.date || !adjustmentForm.amount) return
    const res = await fetch(`/api/balance-adjustments/${editingAdjustment.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        date: adjustmentForm.date,
        amount: parseFloat(adjustmentForm.amount),
        description: adjustmentForm.description || null,
      }),
    })
    if (!res.ok) { alert('Błąd'); return }
    setEditingAdjustment(null)
    setAdjustmentForm({ date: '', amount: '', description: '' })
    await load()
  }

  const deleteAdjustment = async (id: number) => {
    if (!confirm('Czy na pewno chcesz usunąć korektę stanu konta?')) return
    const res = await fetch(`/api/balance-adjustments/${id}`, { method: 'DELETE' })
    if (!res.ok) { alert('Błąd'); return }
    await load()
  }

  const openEditAdjustment = (adj: Adjustment) => {
    setEditingAdjustment(adj)
    setAdjustmentForm({
      date: adj.date.slice(0, 10),
      amount: String(adj.amount),
      description: adj.description || '',
    })
  }

  useEffect(()=>{ load() }, [view, from, to, selectedYear])

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">Cashflow</h1>
              <p className="text-sm text-muted-foreground mt-1">Wystawione vs planowane przychody</p>
            </div>
            <Button variant="primary" onClick={() => { setShowAddAdjustment(true); setAdjustmentForm({ date: today, amount: '', description: '' }); }}>
              Dodaj korektę stanu
            </Button>
          </div>
          
          <div className="space-y-4">

            {/* View mode selector */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-sm font-medium text-muted-foreground">Widok:</span>
              <div className="flex gap-2">
                <Button variant={view === 'year' ? 'primary' : 'outline'} onClick={() => updateView('year')} className="text-sm">
                  Rok
                </Button>
                <Button variant={view === 'month' ? 'primary' : 'outline'} onClick={() => updateView('month')} className="text-sm">
                  Miesiąc
                </Button>
                <Button variant={view === 'custom' ? 'primary' : 'outline'} onClick={() => updateView('custom')} className="text-sm">
                  Zadane daty
                </Button>
              </div>
            </div>

            {/* Year selector (shown only in year mode) */}
            {view === 'year' && (
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-muted-foreground">Rok:</span>
                <div className="flex items-center gap-2">
                  <Button variant="outline" onClick={() => changeYear(selectedYear - 1)} className="text-sm px-2">
                    ‹
                  </Button>
                  <span className="text-sm font-semibold px-4 py-2 rounded border border-gray-200 dark:border-gray-700 min-w-16 text-center">{selectedYear}</span>
                  <Button variant="outline" onClick={() => changeYear(selectedYear + 1)} className="text-sm px-2">
                    ›
                  </Button>
                </div>
              </div>
            )}

            {/* Custom date inputs (shown only in custom mode) */}
            {view === 'custom' && (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-muted-foreground">Od</label>
                  <input className="flex h-9 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" type="date" value={from} onChange={(e)=>setFrom(e.target.value)} />
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-muted-foreground">Do</label>
                  <input className="flex h-9 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" type="date" value={to} onChange={(e)=>setTo(e.target.value)} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
              <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tickFormatter={(d: string) => {
                  const date = new Date(d)
                  return view === 'year' 
                    ? new Intl.DateTimeFormat('pl-PL', { month: 'short' }).format(date)
                    : new Intl.DateTimeFormat('pl-PL', { month: 'short', day: 'numeric' }).format(date)
                }} 
              />
              <YAxis />
              <Tooltip formatter={(value: number | string) => formatCurrency(Number(value))} labelFormatter={(label: string) => new Intl.DateTimeFormat('pl-PL').format(new Date(label))} />
              <Legend />
              <Line type="monotone" dataKey="issued" stroke="#1f7aef" dot={view !== 'year'} name="Wystawione" strokeWidth={2} />
              <Line type="monotone" dataKey="planned" stroke="#f59e0b" dot={view !== 'year'} name="Planowane" strokeWidth={2} />
              <Line type="monotone" dataKey="adjustment" stroke="#8b5cf6" dot={view !== 'year'} name="Korekta stanu" strokeWidth={2} />
              <Line type="monotone" dataKey="cumulative" stroke="#10b981" dot={view !== 'year'} name="Skumulowane" strokeWidth={2} />
                {view !== 'custom' && <ReferenceLine x={today} stroke="#ef4444" strokeDasharray="5 5" label={{ value: 'Dzisiaj', position: 'top', fill: '#ef4444', fontSize: 12 }} />}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
          {loading ? (
            <p className="p-6 text-center text-muted-foreground">Ładowanie...</p>
          ) : (
            <Table>
            <thead>
              <tr>
                <Th>Data</Th>
                <Th className="text-right">Wystawione</Th>
                <Th className="text-right">Planowane</Th>
                <Th className="text-right">Korekta stanu</Th>
                <Th className="text-right">Suma</Th>
                <Th className="text-right">Skumulowane</Th>
                <Th> </Th>
              </tr>
            </thead>
            <tbody>
              {data.map(r=> (
                <tr key={r.date}>
                  <Td>{new Intl.DateTimeFormat('pl-PL').format(new Date(r.date))}</Td>
                  <Td className="text-right">{formatCurrency(r.issued)}</Td>
                  <Td className="text-right">{formatCurrency(r.planned)}</Td>
                  <Td className={`text-right ${r.adjustment !== 0 ? 'text-purple-600' : ''}`}>
                    {formatCurrency(r.adjustment)}
                  </Td>
                  <Td className="text-right">{formatCurrency(r.total)}</Td>
                  <Td className="text-right">{formatCurrency(r.cumulative)}</Td>
                  <Td>
                    {r.adjustmentIds.length > 0 && (
                      <Button
                        onClick={() => {
                          const adj = adjustments.find(a => r.adjustmentIds.includes(a.id))
                          if (adj) openEditAdjustment(adj)
                        }}
                        className="text-sm"
                      >
                        Edytuj korektę
                      </Button>
                    )}
                  </Td>
                </tr>
              ))}
              </tbody>
            </Table>
          )}
        </div>
      </Card>

      {/* Add adjustment modal */}
      {showAddAdjustment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow w-full max-w-lg">
            <h3 className="text-lg font-semibold mb-4">Dodaj korektę stanu konta</h3>
            <div className="grid grid-cols-1 gap-3">
              <div>
                <label className="label">Data</label>
                <Input type="date" value={adjustmentForm.date} onChange={e => setAdjustmentForm(prev => ({ ...prev, date: e.target.value }))} />
              </div>
              <div>
                <label className="label">Kwota (dodatnia lub ujemna)</label>
                <Input
                  type="number"
                  step="0.01"
                  value={adjustmentForm.amount}
                  onChange={e => setAdjustmentForm(prev => ({ ...prev, amount: e.target.value }))}
                  placeholder="np. 1000 lub -500"
                />
              </div>
              <div>
                <label className="label">Opis (opcjonalny)</label>
                <Input
                  value={adjustmentForm.description}
                  onChange={e => setAdjustmentForm(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="np. Korekta początkowa"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <Button onClick={() => { setShowAddAdjustment(false); setAdjustmentForm({ date: '', amount: '', description: '' }); }}>
                Anuluj
              </Button>
              <Button variant="primary" onClick={addAdjustment}>
                Dodaj
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Edit adjustment modal */}
      {editingAdjustment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow w-full max-w-lg">
            <h3 className="text-lg font-semibold mb-4">Edytuj korektę stanu konta</h3>
            <div className="grid grid-cols-1 gap-3">
              <div>
                <label className="label">Data</label>
                <Input type="date" value={adjustmentForm.date} onChange={e => setAdjustmentForm(prev => ({ ...prev, date: e.target.value }))} />
              </div>
              <div>
                <label className="label">Kwota (dodatnia lub ujemna)</label>
                <Input
                  type="number"
                  step="0.01"
                  value={adjustmentForm.amount}
                  onChange={e => setAdjustmentForm(prev => ({ ...prev, amount: e.target.value }))}
                  placeholder="np. 1000 lub -500"
                />
              </div>
              <div>
                <label className="label">Opis (opcjonalny)</label>
                <Input
                  value={adjustmentForm.description}
                  onChange={e => setAdjustmentForm(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="np. Korekta początkowa"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <Button onClick={() => deleteAdjustment(editingAdjustment.id)} className="text-red-600">
                Usuń
              </Button>
              <div className="flex gap-2">
                <Button onClick={() => { setEditingAdjustment(null); setAdjustmentForm({ date: '', amount: '', description: '' }); }}>
                  Anuluj
                </Button>
                <Button variant="primary" onClick={updateAdjustment}>
                  Zapisz
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
