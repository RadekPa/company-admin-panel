import { prisma } from '../../../../lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const author = await prisma.author.findUnique({ 
    where: { id },
    include: {
      client: {
        select: {
          id: true,
          name: true,
        }
      }
    }
  })
  return NextResponse.json(author)
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const body = await req.json()
  
  // Sprawdź czy clientId jest już używane przez inną osobę
  if (body.clientId) {
    const existingAuthor = await prisma.author.findFirst({
      where: {
        clientId: body.clientId,
        NOT: { id }
      }
    })
    if (existingAuthor) {
      return NextResponse.json(
        { error: 'Ta osoba jest już przypisana do innego klienta' },
        { status: 400 }
      )
    }
  }
  
  const author = await prisma.author.update({ 
    where: { id }, 
    data: { 
      firstName: body.firstName,
      middleName: body.middleName || null,
      lastName: body.lastName,
      description: body.description || null,
      workEmail: body.workEmail || null,
      personalEmail: body.personalEmail || null,
      clientId: body.clientId || null,
    },
    include: {
      client: {
        select: {
          id: true,
          name: true,
        }
      }
    }
  })
  return NextResponse.json(author)
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  await prisma.author.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
