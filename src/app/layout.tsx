
// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Layout from '../components/tailadmin/Layout'

export const metadata: Metadata = {
  title: 'Admin Panel (TailAdmin v2)',
  description: 'Panel administracyjny z ładnym layoutem, dark mode i mobile drawer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning>
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
        <Layout>{children}</Layout>
  {/* No external AdminLTE script — UI is implemented using Tailwind + lucide-react */}
      </body>
    </html>
  )
}
