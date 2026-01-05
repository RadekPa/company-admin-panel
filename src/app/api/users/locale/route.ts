import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../lib/auth'
import { prisma } from '../../../../lib/prisma'
import { locales } from '../../../../i18n/request'

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { locale } = await req.json()

    // Walidacja locale
    if (!locales.includes(locale as any)) {
      return NextResponse.json({ error: 'Invalid locale' }, { status: 400 })
    }

    // Aktualizacja locale użytkownika w bazie
    await prisma.user.update({
      where: { email: session.user.email },
      data: { locale }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating locale:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
