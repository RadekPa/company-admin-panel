import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../lib/auth'
import fs from 'fs'
import path from 'path'

// Ścieżka do katalogu z tłumaczeniami
const MESSAGES_DIR = path.join(process.cwd(), 'messages')

// GET - pobierz listę dostępnych języków
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user || (session.user as any).role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Odczytaj wszystkie pliki .json z katalogu messages
    const files = fs.readdirSync(MESSAGES_DIR)
    const languages = files
      .filter(file => file.endsWith('.json'))
      .map(file => {
        const code = file.replace('.json', '')
        const content = JSON.parse(fs.readFileSync(path.join(MESSAGES_DIR, file), 'utf-8'))
        return {
          code,
          name: getLanguageName(code),
          keysCount: countKeys(content)
        }
      })

    return NextResponse.json({ languages })
  } catch (error) {
    console.error('Error loading languages:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST - dodaj nowy język
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user || (session.user as any).role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { code, name } = await req.json()

    if (!code || !name) {
      return NextResponse.json({ error: 'Code and name are required' }, { status: 400 })
    }

    // Sprawdź czy język już istnieje
    const filePath = path.join(MESSAGES_DIR, `${code}.json`)
    if (fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Language already exists' }, { status: 400 })
    }

    // Skopiuj strukturę z pl.json jako szablon
    const plContent = JSON.parse(fs.readFileSync(path.join(MESSAGES_DIR, 'pl.json'), 'utf-8'))
    
    // Utwórz nowy plik z pustymi wartościami
    const newContent = createEmptyTranslations(plContent)
    fs.writeFileSync(filePath, JSON.stringify(newContent, null, 2), 'utf-8')

    return NextResponse.json({ success: true, code })
  } catch (error) {
    console.error('Error adding language:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// DELETE - usuń język
export async function DELETE(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user || (session.user as any).role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(req.url)
    const code = searchParams.get('code')

    if (!code) {
      return NextResponse.json({ error: 'Language code is required' }, { status: 400 })
    }

    // Nie pozwól usunąć pl i en
    if (code === 'pl' || code === 'en') {
      return NextResponse.json({ error: 'Cannot delete default languages' }, { status: 400 })
    }

    const filePath = path.join(MESSAGES_DIR, `${code}.json`)
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Language not found' }, { status: 404 })
    }

    fs.unlinkSync(filePath)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting language:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// Pomocnicze funkcje
function getLanguageName(code: string): string {
  const names: Record<string, string> = {
    'pl': 'Polski',
    'en': 'English',
    'de': 'Deutsch',
    'fr': 'Français',
    'es': 'Español',
    'it': 'Italiano',
    'ru': 'Русский',
    'uk': 'Українська'
  }
  return names[code] || code.toUpperCase()
}

function countKeys(obj: any, count = 0): number {
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      count = countKeys(obj[key], count)
    } else {
      count++
    }
  }
  return count
}

function createEmptyTranslations(obj: any): any {
  if (typeof obj !== 'object' || obj === null) {
    return ''
  }
  
  const result: any = {}
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      result[key] = createEmptyTranslations(obj[key])
    } else {
      result[key] = ''
    }
  }
  return result
}
