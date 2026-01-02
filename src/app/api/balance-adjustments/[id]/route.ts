import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../lib/auth'

// PUT /api/balance-adjustments/[id]
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const id = parseInt(params.id)
  const body = await req.json()
  const { date, amount, description } = body

  if (!date || amount === undefined || amount === null) {
    return NextResponse.json({ error: 'Date and amount are required' }, { status: 400 })
  }

  const adjustment = await prisma.balanceAdjustment.update({
    where: { id },
    data: {
      date: new Date(date),
      amount: Number(amount),
      description: description || null,
    },
  })

  return NextResponse.json({ data: adjustment })
}

// DELETE /api/balance-adjustments/[id]
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const id = parseInt(params.id)

  await prisma.balanceAdjustment.delete({
    where: { id },
  })

  return NextResponse.json({ success: true })
}
