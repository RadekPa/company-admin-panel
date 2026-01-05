import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../../lib/auth'
import { prisma } from '../../../../../lib/prisma'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await req.formData()
    const file = formData.get('photo') as File
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Sprawdź czy to obraz
    if (!file.type.startsWith('image/')) {
      return NextResponse.json({ error: 'File must be an image' }, { status: 400 })
    }

    const authorId = parseInt(params.id)
    const author = await prisma.author.findUnique({
      where: { id: authorId }
    })

    if (!author) {
      return NextResponse.json({ error: 'Author not found' }, { status: 404 })
    }

    // Utwórz nazwę pliku
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const ext = file.name.split('.').pop()
    const filename = `author-${authorId}-${Date.now()}.${ext}`
    
    // Ścieżka do zapisu
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'authors')
    await mkdir(uploadDir, { recursive: true })
    const filepath = path.join(uploadDir, filename)
    
    await writeFile(filepath, buffer)

    // Dodaj do listy zdjęć w bazie
    const currentPhotos = ((author as any).photos as string[]) || []
    const photoUrl = `/uploads/authors/${filename}`
    const updatedPhotos = [...currentPhotos, photoUrl]

    await prisma.author.update({
      where: { id: authorId },
      data: { photos: updatedPhotos } as any
    })

    return NextResponse.json({ 
      success: true, 
      photoUrl,
      photos: updatedPhotos 
    })
  } catch (error) {
    console.error('Error uploading photo:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(req.url)
    const photoUrl = searchParams.get('url')

    if (!photoUrl) {
      return NextResponse.json({ error: 'Photo URL required' }, { status: 400 })
    }

    const authorId = parseInt(params.id)
    const author = await prisma.author.findUnique({
      where: { id: authorId }
    })

    if (!author) {
      return NextResponse.json({ error: 'Author not found' }, { status: 404 })
    }

    // Usuń z listy zdjęć
    const currentPhotos = ((author as any).photos as string[]) || []
    const updatedPhotos = currentPhotos.filter(url => url !== photoUrl)

    await prisma.author.update({
      where: { id: authorId },
      data: { photos: updatedPhotos } as any
    })

    // Usuń plik z dysku
    try {
      const fs = require('fs')
      const filepath = path.join(process.cwd(), 'public', photoUrl)
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath)
      }
    } catch (err) {
      console.error('Error deleting file:', err)
    }

    return NextResponse.json({ 
      success: true,
      photos: updatedPhotos 
    })
  } catch (error) {
    console.error('Error deleting photo:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
