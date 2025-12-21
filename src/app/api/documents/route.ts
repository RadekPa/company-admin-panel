import { prisma } from '../../../lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const page = Number(url.searchParams.get('page') || '1')
  const pageSize = Number(url.searchParams.get('pageSize') || '20')
  const skip = (page - 1) * pageSize

  const [total, data] = await Promise.all([
    prisma.document.count(),
    prisma.document.findMany({ skip, take: pageSize, orderBy: { id: 'desc' } })
  ])

  const meta = { page, pageSize, total, pages: Math.max(1, Math.ceil(total / pageSize)) }
  return NextResponse.json({ data, meta })
}
