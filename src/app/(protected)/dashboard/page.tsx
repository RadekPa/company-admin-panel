import { prisma } from '../../../lib/prisma'
import { HeroCards } from '../../../components/dashboard/HeroCards'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const t = await getTranslations()
  
  const [clients, documents] = await Promise.all([
    prisma.client.count(),
    prisma.document.count()
  ])
  const recentDocs = await prisma.document.findMany({ orderBy: { createdAt: 'desc' }, take: 5, include: { client: true } })

  return (
    <div className="space-y-6">
      <HeroCards items={[
        { title: t('dashboard.clients'), value: clients },
        { title: t('dashboard.documents'), value: documents },
        { title: t('dashboard.status'), value: t('dashboard.online'), hint: t('common.welcome') }
      ]} />

      <div className="card p-6">
        <h3 className="text-xl font-semibold mb-6">{t('dashboard.recentDocuments')}</h3>
        <table className="table">
          <thead>
            <tr>
              <th>{t('documents.documentTitle')}</th>
              <th>{t('documents.client')}</th>
              <th>{t('common.status')}</th>
              <th>{t('common.date')}</th>
            </tr>
          </thead>
          <tbody>
            {recentDocs.map(doc => (
              <tr key={doc.id}>
                <td>{doc.title}</td>
                <td>{doc.client.name}</td>
                <td>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${doc.status === 'SIGNED' ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800' : 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800'}`}>{t(`documentStatus.${doc.status}`)}</span>
                </td>
                <td>{new Intl.DateTimeFormat('pl-PL', { timeZone: 'UTC', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(doc.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
