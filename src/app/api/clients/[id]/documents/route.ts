import { prisma } from '../../../../../lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const clientId = Number(params.id)
  const docs = await prisma.document.findMany({ where: { clientId }, orderBy: { id: 'asc' } })
  return NextResponse.json(docs)
}

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const clientId = Number(params.id)
  const body = await req.json()
  const doc = await prisma.document.create({ data: { clientId, title: body.title, description: body.description || null, status: body.status || 'DRAFT' } })
  return NextResponse.json(doc, { status: 201 })
}
