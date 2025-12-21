import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const page = Number(url.searchParams.get('page') || '1')
  const pageSize = Number(url.searchParams.get('pageSize') || '50')
  const skip = (page - 1) * pageSize

  const status = (url.searchParams.get('status') || '').toLowerCase() // 'issued'|'planned'
  const clientId = url.searchParams.get('clientId')
  const dateFrom = url.searchParams.get('dateFrom')
  const dateTo = url.searchParams.get('dateTo')
  const sort = url.searchParams.get('sort') || 'issueDate' // issueDate|paymentDate|gross|net
  const order = (url.searchParams.get('order') || 'desc').toLowerCase() === 'asc' ? 'asc' : 'desc'

  const where: any = {}
  if (status === 'issued' || status === 'planned') where.status = status
  if (clientId) where.clientId = Number(clientId)
  if (dateFrom || dateTo) where.issueDate = {}
  if (dateFrom) where.issueDate.gte = new Date(dateFrom)
  if (dateTo) where.issueDate.lte = new Date(dateTo)

  const orderBy: any = {}
  if (['issueDate','paymentDate','gross','net'].includes(sort)) orderBy[sort] = order
  else orderBy['issueDate'] = 'desc'

  const p = prisma as any
  const [total, data]: [number, any[]] = await Promise.all([
    p.invoice.count({ where }),
    p.invoice.findMany({
      where,
      take: pageSize,
      skip,
      orderBy,
      include: { client: { select: { id: true, name: true } } }
    })
  ])

  const items = data.map(d => ({
    id: d.id,
    clientId: d.clientId,
    clientName: d.client?.name ?? null,
    issueDate: d.issueDate.toISOString(),
    paymentDate: d.paymentDate.toISOString(),
    title: d.title,
    net: d.net,
    vatPerc: d.vatPerc,
    vat: d.vat,
    gross: d.gross,
    status: d.status
  }))

  const meta = { page, pageSize, total, pages: Math.max(1, Math.ceil(total / pageSize)) }
  return NextResponse.json({ data: items, meta })
}
