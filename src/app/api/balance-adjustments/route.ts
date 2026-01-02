import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../lib/auth'

// GET /api/balance-adjustments
export async function GET(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const adjustments = await prisma.balanceAdjustment.findMany({
    orderBy: { date: 'asc' },
  })

  return NextResponse.json({ data: adjustments })
}

// POST /api/balance-adjustments
export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const { date, amount, description } = body

  if (!date || amount === undefined || amount === null) {
    return NextResponse.json({ error: 'Date and amount are required' }, { status: 400 })
  }

  const adjustment = await prisma.balanceAdjustment.create({
    data: {
      date: new Date(date),
      amount: Number(amount),
      description: description || null,
    },
  })

  return NextResponse.json({ data: adjustment })
}
