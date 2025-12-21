import { prisma } from '../../../../lib/prisma'
import { NextResponse } from 'next/server'

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const body = await req.json()
  const doc = await prisma.document.update({ where: { id }, data: { title: body.title, description: body.description || null, status: body.status } })
  return NextResponse.json(doc)
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  await prisma.document.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
