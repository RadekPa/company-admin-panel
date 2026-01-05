import { prisma } from '../../../lib/prisma'
import { NextResponse } from 'next/server'
import { Prisma } from '@prisma/client'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const search = searchParams.get('search') || ''
  const page = parseInt(searchParams.get('page') || '1')
  const pageSize = parseInt(searchParams.get('pageSize') || '10')
  const sortBy = searchParams.get('sortBy') || 'id'
  const sortOrder = searchParams.get('sortOrder') || 'asc'

  // Build where clause for search
  const where: Prisma.ClientWhereInput = search ? {
    OR: [
      { name: { contains: search, mode: 'insensitive' } },
      { email: { contains: search, mode: 'insensitive' } },
      { phone: { contains: search, mode: 'insensitive' } },
      { nip: { contains: search, mode: 'insensitive' } },
    ]
  } : {}

  // Build orderBy - validate sortBy field
  const validSortFields = ['id', 'name', 'email', 'phone', 'createdAt']
  const orderByField = validSortFields.includes(sortBy) ? sortBy : 'id'
  const orderBy = { [orderByField]: sortOrder === 'desc' ? 'desc' : 'asc' } as Prisma.ClientOrderByWithRelationInput

  // Get total count for pagination
  const total = await prisma.client.count({ where })

  // Get paginated results
  const clients = await prisma.client.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  })

  return NextResponse.json({
    data: clients,
    meta: {
      page,
      pageSize,
      total,
      pages: Math.ceil(total / pageSize),
    }
  })
}

export async function POST(req: Request) {
  const body = await req.json()
  const client = await prisma.client.create({ 
    data: { 
      name: body.name,
      email: body.email || null,
      phone: body.phone || null,
      address: body.address || null,
      city: body.city || null,
      postalCode: body.postalCode || null,
      country: body.country || null,
      nip: body.nip || null,
      regon: body.regon || null,
      legalForm: body.legalForm || null,
      bankAccount: body.bankAccount || null,
      notes: body.notes || null,
    } 
  })
  return NextResponse.json(client, { status: 201 })
}
