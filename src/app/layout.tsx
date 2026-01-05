
// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Layout from '../components/tailadmin/Layout'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getLocale } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Aplikacja',
  description: 'Panel administracyjny aplikacji',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* Ustaw motyw (dark/light) przed hydratacją – spójność SSR/CSR */}
  {/* AdminLTE and FontAwesome CDN removed — using local lucide-react icons and Tailwind for styling */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  try {
    var t = localStorage.getItem('theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (t === 'dark' || (!t && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
            `.trim(),
          }}
        />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Layout>{children}</Layout>
        </NextIntlClientProvider>
  {/* No external AdminLTE script — UI is implemented using Tailwind + lucide-react */}
      </body>
    </html>
  )
}
