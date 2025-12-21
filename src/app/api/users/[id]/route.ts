import { prisma } from '../../../../lib/prisma'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../lib/auth'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const user = await prisma.user.findUnique({ where: { id } })
  if (!user) return NextResponse.json(null)
  const { passwordHash, ...rest } = user as any
  return NextResponse.json(rest)
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  // only ADMIN can update
  const session = await getServerSession(authOptions)
  if (!session || (session as any).user?.role !== 'ADMIN') return NextResponse.json({ error: 'forbidden' }, { status: 403 })

  const id = Number(params.id)
  const body = await req.json()
  const data: any = { name: body.name || null, role: body.role || 'USER', permissions: body.permissions ?? undefined }
  if (body.password) {
    data.passwordHash = await bcrypt.hash(body.password, 10)
  }
  const user = await prisma.user.update({ where: { id }, data: data as any })
  const { passwordHash, ...rest } = user as any
  return NextResponse.json(rest)
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  // only ADMIN can delete
  const session = await getServerSession(authOptions)
  if (!session || (session as any).user?.role !== 'ADMIN') return NextResponse.json({ error: 'forbidden' }, { status: 403 })

  const id = Number(params.id)
  await prisma.user.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
