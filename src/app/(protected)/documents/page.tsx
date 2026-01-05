"use client"
import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Table, Th, Td } from '../../../components/ui/Table'

type Document = { id: number; title: string; description?: string | null; status?: string }

export default function DocumentsPage(){
  const [docs, setDocs] = useState<Document[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(()=>{ load() }, [])

  const load = async ()=>{
    setLoading(true)
    setError(null)
    try{
      const res = await fetch('/api/documents?page=1&pageSize=100')
      if (!res.ok) throw new Error('Brak endpointu lub błąd serwera')
      const json = await res.json()
      const list = Array.isArray(json?.data) ? json.data : (json?.data ?? json ?? [])
      setDocs(list)
    }catch(e:any){
      setError(e.message || 'Błąd')
      setDocs([])
    }finally{ setLoading(false) }
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-6">Dokumenty</h1>
        {loading ? <p className="text-center text-muted-foreground py-8">Ładowanie...</p> : (
          error ? <p className="text-red-600 text-center py-4">{error}</p> : (
            <Table>
              <thead>
                <tr>
                  <Th>ID</Th>
                  <Th>Tytuł</Th>
                  <Th>Status</Th>
                </tr>
              </thead>
              <tbody>
                {docs.map(d=> (
                  <tr key={d.id}>
                    <Td>{d.id}</Td>
                    <Td>{d.title}</Td>
                    <Td>{d.status ?? '-'}</Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )
        )}
      </Card>
    </div>
  )
}
