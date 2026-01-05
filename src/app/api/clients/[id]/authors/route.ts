import { prisma } from '../../../../../lib/prisma'
import { NextResponse } from 'next/server'

// GET /api/clients/:id/authors - pobierz osoby przypisane do klienta
export async function GET(_: Request, { params }: { params: { id: string } }) {
  const clientId = Number(params.id)
  
  const authors = await prisma.author.findMany({
    where: { clientId } as any,
    orderBy: { lastName: 'asc' },
    select: {
      id: true,
      firstName: true,
      middleName: true,
      lastName: true,
      workEmail: true,
      personalEmail: true,
      description: true,
    }
  })
  
  return NextResponse.json({ data: authors })
}

// POST /api/clients/:id/authors - przypisz osobę do klienta
export async function POST(req: Request, { params }: { params: { id: string } }) {
  const clientId = Number(params.id)
  const { authorId } = await req.json()
  
  if (!authorId) {
    return NextResponse.json({ error: 'authorId jest wymagane' }, { status: 400 })
  }
  
  // Sprawdź czy osoba już jest przypisana do innego klienta
  const existingAuthor = await prisma.author.findUnique({
    where: { id: authorId }
  }) as any
  
  if (!existingAuthor) {
    return NextResponse.json({ error: 'Osoba nie istnieje' }, { status: 404 })
  }
  
  if (existingAuthor.clientId && existingAuthor.clientId !== clientId) {
    return NextResponse.json(
      { error: 'Ta osoba jest już przypisana do innego klienta' },
      { status: 400 }
    )
  }
  
  // Przypisz osobę do klienta
  const author = await (prisma.author.update as any)({
    where: { id: authorId },
    data: { clientId },
    include: {
      client: {
        select: {
          id: true,
          name: true,
        }
      }
    }
  })
  
  return NextResponse.json({ data: author })
}

// DELETE /api/clients/:id/authors/:authorId - usuń przypisanie osoby z klienta
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const clientId = Number(params.id)
  const { searchParams } = new URL(req.url)
  const authorId = Number(searchParams.get('authorId'))
  
  if (!authorId) {
    return NextResponse.json({ error: 'authorId jest wymagane' }, { status: 400 })
  }
  
  // Usuń przypisanie (ustaw clientId na null)
  const author = await prisma.author.update({
    where: { id: authorId },
    data: { clientId: null } as any
  })
  
  return NextResponse.json({ data: author })
}
