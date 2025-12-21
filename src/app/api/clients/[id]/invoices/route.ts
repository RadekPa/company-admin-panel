import { NextResponse } from 'next/server'
import { prisma } from '../../../../../lib/prisma'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const url = new URL(req.url)
  const type = url.searchParams.get('type') || 'issued' // 'issued' or 'planned'

  const p = prisma as any
  const where: any = { clientId: id }
  if (type === 'issued') where.status = 'issued'
  if (type === 'planned') where.status = 'planned'

  const data = await p.invoice.findMany({ where, orderBy: { issueDate: 'desc' } })
  const items = (data as any[]).map(d => ({
    id: d.id,
    issueDate: d.issueDate.toISOString(),
    paymentDate: d.paymentDate.toISOString(),
    title: d.title,
    net: d.net,
    vatPerc: d.vatPerc,
    vat: d.vat,
    gross: d.gross,
    status: d.status
  }))

  return NextResponse.json({ data: items })
}
