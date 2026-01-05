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
  const where: Prisma.AuthorWhereInput = search ? {
    OR: [
      { firstName: { contains: search, mode: 'insensitive' } },
      { middleName: { contains: search, mode: 'insensitive' } },
      { lastName: { contains: search, mode: 'insensitive' } },
      { description: { contains: search, mode: 'insensitive' } },
      { workEmail: { contains: search, mode: 'insensitive' } },
      { personalEmail: { contains: search, mode: 'insensitive' } },
    ]
  } : {}

  // Build orderBy - validate sortBy field
  const validSortFields = ['id', 'firstName', 'lastName', 'createdAt']
  const orderByField = validSortFields.includes(sortBy) ? sortBy : 'id'
  const orderBy = { [orderByField]: sortOrder === 'desc' ? 'desc' : 'asc' } as Prisma.AuthorOrderByWithRelationInput

  // Get total count for pagination
  const total = await prisma.author.count({ where })

  // Get paginated results
  const authors = await prisma.author.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
    include: {
      client: {
        select: {
          id: true,
          name: true,
        }
      }
    }
  } as any)

  return NextResponse.json({
    data: authors,
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
  const author = await prisma.author.create({ 
    data: { 
      firstName: body.firstName,
      middleName: body.middleName || null,
      lastName: body.lastName,
      description: body.description || null,
      workEmail: body.workEmail || null,
      personalEmail: body.personalEmail || null,
    } 
  })
  return NextResponse.json(author, { status: 201 })
}
