import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const parts = url.pathname.split('/')
    const idStr = parts[parts.length - 1]
    const id = Number(idStr)
    if (!id) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

    const invoice = await (prisma as any).invoice.findUnique({ where: { id }, include: { client: true } })
    if (!invoice) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    // Synthesize items if the model doesn't store them separately
    const items = [
      {
        description: invoice.title,
        qty: 1,
        unitNet: invoice.net,
        vatPerc: invoice.vatPerc,
        vat: invoice.vat,
        totalGross: invoice.gross,
      },
    ]

    return NextResponse.json({
      invoice: {
        id: invoice.id,
        client: invoice.client,
        title: invoice.title,
        issueDate: invoice.issueDate.toISOString(),
        paymentDate: invoice.paymentDate.toISOString(),
        net: invoice.net,
        vatPerc: invoice.vatPerc,
        vat: invoice.vat,
        gross: invoice.gross,
        status: invoice.status,
        items,
      },
    })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}

export async function PATCH(req: Request) {
  try {
    const url = new URL(req.url)
    const parts = url.pathname.split('/')
    const idStr = parts[parts.length - 1]
    const id = Number(idStr)
    if (!id) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

    const body = await req.json()
    const status = body.status === 'planned' ? 'planned' : body.status === 'issued' ? 'issued' : null
    if (!status) return NextResponse.json({ error: 'Invalid status' }, { status: 400 })

    const p = prisma as any
    const updated = await p.invoice.update({ where: { id }, data: { status } })
    return NextResponse.json({ id: updated.id, status: updated.status })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 })
  }
}
