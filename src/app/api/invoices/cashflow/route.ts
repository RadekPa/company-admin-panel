import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

// GET /api/invoices/cashflow?from=2025-12-01&to=2025-12-31
export async function GET(req: Request) {
  const url = new URL(req.url)
  const from = url.searchParams.get('from')
  const to = url.searchParams.get('to')

  // Build where clause
  const where: any = {}
  if (from || to) {
    where.paymentDate = {}
    if (from) where.paymentDate.gte = new Date(from)
    if (to) where.paymentDate.lte = new Date(to)
  }

  // Aggregate by date and status
  const raw = await (prisma as any).invoice.findMany({
    where,
    select: {
      paymentDate: true,
      gross: true,
      status: true,
    },
  })

  // Group by date (yyyy-mm-dd)
  const map: Record<string, { issued: number; planned: number }> = {}
  for (const r of raw) {
    if (!r.paymentDate) continue
    const day = new Date(r.paymentDate).toISOString().slice(0, 10)
    if (!map[day]) map[day] = { issued: 0, planned: 0 }
    if (r.status === 'planned') map[day].planned += Number(r.gross ?? 0)
    else map[day].issued += Number(r.gross ?? 0)
  }

  // Convert to sorted array and compute cumulative
  const days = Object.keys(map).sort()
  const data = [] as Array<{ date: string; issued: number; planned: number; total: number; cumulative: number }>
  let cumulative = 0
  for (const d of days) {
    const issued = map[d].issued
    const planned = map[d].planned
    const total = issued + planned
    // Include planned invoices in cumulative cashflow as requested
    cumulative += total
    data.push({ date: d, issued, planned, total, cumulative })
  }

  return NextResponse.json({ data })
}
