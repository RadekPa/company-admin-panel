import { prisma } from '../../../lib/prisma'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../lib/auth'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const search = url.searchParams.get('search') || ''
  const page = Number(url.searchParams.get('page') || '1')
  const pageSize = Number(url.searchParams.get('pageSize') || '10')
  const sortBy = url.searchParams.get('sortBy') || 'id'
  const sortOrder = (url.searchParams.get('sortOrder') || 'asc') as 'asc'|'desc'

  const where = search ? { OR: [{ email: { contains: search } }, { name: { contains: search } }] } : {}
  const total = await prisma.user.count({ where })
  const users = await prisma.user.findMany({ where, orderBy: { [sortBy]: sortOrder }, skip: (page-1)*pageSize, take: pageSize })
  const safe = users.map((u: any) => {
    const { passwordHash, ...rest } = u
    return rest
  })
  return NextResponse.json({ data: safe, meta: { page, pageSize, total, pages: Math.max(1, Math.ceil(total/pageSize)) } })
}

export async function POST(req: Request) {
  // only ADMIN can create users
  const session = await getServerSession(authOptions)
  if (!session || (session as any).user?.role !== 'ADMIN') return NextResponse.json({ error: 'forbidden' }, { status: 403 })

  try {
    const body = await req.json()
    if (!body.email || !body.password) return NextResponse.json({ error: 'email and password required' }, { status: 400 })
    const exists = await prisma.user.findUnique({ where: { email: body.email } })
    if (exists) return NextResponse.json({ error: 'email already exists' }, { status: 400 })
    const hash = await bcrypt.hash(body.password, 10)
  const user = await prisma.user.create({ data: { name: body.name || null, email: body.email, passwordHash: hash, role: body.role || 'USER', permissions: body.permissions ?? {} } as any })
    const { passwordHash, ...safe } = user as any
    return NextResponse.json(safe, { status: 201 })
  } catch (e) {
    return NextResponse.json({ error: 'invalid request' }, { status: 400 })
  }
}
