import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

// GET /api/invoices/cashflow?mode=year|month|custom&from=2025-12-01&to=2025-12-31
export async function GET(req: Request) {
  const url = new URL(req.url)
  const mode = url.searchParams.get('mode') || 'year'
  const customFrom = url.searchParams.get('from')
  const customTo = url.searchParams.get('to')

  let from: Date, to: Date
  const today = new Date()

  if (mode === 'year' && customFrom && customTo) {
    // Use provided dates for year mode (allows year selection)
    from = new Date(customFrom)
    to = new Date(customTo)
  } else if (mode === 'year') {
    from = new Date(today.getFullYear(), 0, 1)
    to = new Date(today.getFullYear(), 11, 31)
  } else if (mode === 'month') {
    from = new Date(today.getFullYear(), today.getMonth(), 1)
    to = new Date(today.getFullYear(), today.getMonth() + 1, 0)
  } else {
    from = customFrom ? new Date(customFrom) : new Date(today.getFullYear(), 0, 1)
    to = customTo ? new Date(customTo) : today
  }

  // Build where clause
  const where: any = {}
  where.paymentDate = {}
  where.paymentDate.gte = from
  where.paymentDate.lte = to

  // Aggregate by date and status
  const raw = await prisma.invoice.findMany({
    where,
    select: {
      paymentDate: true,
      gross: true,
      status: true,
    },
  })

  // For year mode, calculate starting cumulative from previous year
  let startingCumulative = 0
  if (mode === 'year') {
    const selectedYear = from.getFullYear()
    const previousInvoices = await prisma.invoice.findMany({
      where: {
        paymentDate: {
          lt: new Date(`${selectedYear}-01-01`), // Strictly before the selected year
        },
      },
      select: {
        gross: true,
        status: true,
      },
    })
    
    for (const inv of previousInvoices) {
      // Include all invoices (both issued and planned) in the cumulative
      startingCumulative += Number(inv.gross ?? 0)
    }
    
    // Add balance adjustments before the selected year
    const previousAdjustments = await prisma.balanceAdjustment.findMany({
      where: {
        date: {
          lt: new Date(`${selectedYear}-01-01`),
        },
      },
      select: {
        amount: true,
      },
    })
    
    for (const adj of previousAdjustments) {
      startingCumulative += Number(adj.amount ?? 0)
    }
  }

  // Fetch balance adjustments in the selected period
  const adjustments = await prisma.balanceAdjustment.findMany({
    where: {
      date: {
        gte: from,
        lte: to,
      },
    },
    select: {
      id: true,
      date: true,
      amount: true,
      description: true,
    },
  })

  // Group by date - by month for year mode, by day otherwise
  const map: Record<string, { issued: number; planned: number; adjustment: number; adjustmentIds: number[] }> = {}
  
  // For year mode, pre-fill all 12 months with zeros for the selected year
  if (mode === 'year') {
    const year = from.getFullYear()
    for (let month = 0; month < 12; month++) {
      const key = `${year}-${String(month + 1).padStart(2, '0')}-01`
      map[key] = { issued: 0, planned: 0, adjustment: 0, adjustmentIds: [] }
    }
  }
  
  // Add adjustments to map
  for (const adj of adjustments) {
    if (!adj.date) continue
    
    const dateStr = adj.date instanceof Date 
      ? adj.date.toISOString().slice(0, 10)
      : new Date(adj.date).toISOString().slice(0, 10)
    
    if (mode === 'year') {
      const year = from.getFullYear()
      const dateYear = parseInt(dateStr.slice(0, 4))
      if (dateYear !== year) continue
      
      const month = dateStr.slice(5, 7)
      const key = `${year}-${month}-01`
      if (!map[key]) map[key] = { issued: 0, planned: 0, adjustment: 0, adjustmentIds: [] }
      map[key].adjustment += Number(adj.amount ?? 0)
      map[key].adjustmentIds.push(adj.id)
    } else {
      const key = dateStr
      if (!map[key]) map[key] = { issued: 0, planned: 0, adjustment: 0, adjustmentIds: [] }
      map[key].adjustment += Number(adj.amount ?? 0)
      map[key].adjustmentIds.push(adj.id)
    }
  }
  
  for (const r of raw) {
    if (!r.paymentDate) continue
    
    // Parse date safely - get YYYY-MM-DD string directly to avoid timezone issues
    const dateStr = r.paymentDate instanceof Date 
      ? r.paymentDate.toISOString().slice(0, 10)
      : new Date(r.paymentDate).toISOString().slice(0, 10)
    
    if (mode === 'year') {
      // In year mode, only include data from the selected year
      const year = from.getFullYear()
      const dateYear = parseInt(dateStr.slice(0, 4))
      if (dateYear !== year) continue
      
      const month = dateStr.slice(5, 7)
      const key = `${year}-${month}-01`
      if (!map[key]) map[key] = { issued: 0, planned: 0, adjustment: 0, adjustmentIds: [] }
      if (r.status === 'planned') map[key].planned += Number(r.gross ?? 0)
      else map[key].issued += Number(r.gross ?? 0)
    } else {
      // Day mode for month or custom views
      const key = dateStr
      if (!map[key]) map[key] = { issued: 0, planned: 0, adjustment: 0, adjustmentIds: [] }
      if (r.status === 'planned') map[key].planned += Number(r.gross ?? 0)
      else map[key].issued += Number(r.gross ?? 0)
    }
  }

  // Convert to sorted array and compute cumulative
  const keys = Object.keys(map).sort()
  const data = [] as Array<{ date: string; issued: number; planned: number; adjustment: number; adjustmentIds: number[]; total: number; cumulative: number }>
  let cumulative = startingCumulative
  for (const d of keys) {
    const issued = map[d].issued
    const planned = map[d].planned
    const adjustment = map[d].adjustment
    const total = issued + planned + adjustment
    // Include planned invoices and adjustments in cumulative cashflow
    cumulative += total
    data.push({ date: d, issued, planned, adjustment, adjustmentIds: map[d].adjustmentIds, total, cumulative })
  }

  // Also return all adjustments for the period for detailed display
  return NextResponse.json({ data, adjustments })
}
