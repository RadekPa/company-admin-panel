import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../lib/auth'
import fs from 'fs'
import path from 'path'

const MESSAGES_DIR = path.join(process.cwd(), 'messages')

// GET - pobierz tłumaczenia dla konkretnego języka
export async function GET(
  req: NextRequest,
  { params }: { params: { code: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user || (session.user as any).role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const code = params.code
    const filePath = path.join(MESSAGES_DIR, `${code}.json`)

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Language not found' }, { status: 404 })
    }

    const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

    return NextResponse.json({ translations: content })
  } catch (error) {
    console.error('Error loading translations:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// PUT - zapisz tłumaczenia dla konkretnego języka
export async function PUT(
  req: NextRequest,
  { params }: { params: { code: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user || (session.user as any).role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const code = params.code
    const { translations } = await req.json()

    if (!translations) {
      return NextResponse.json({ error: 'Translations are required' }, { status: 400 })
    }

    const filePath = path.join(MESSAGES_DIR, `${code}.json`)

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Language not found' }, { status: 404 })
    }

    // Zapisz z ładnym formatowaniem
    fs.writeFileSync(filePath, JSON.stringify(translations, null, 2), 'utf-8')

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving translations:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
