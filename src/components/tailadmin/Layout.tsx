"use client"
import React, { useState } from 'react'
import { SessionProvider } from 'next-auth/react'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar'

type Props = { children: React.ReactNode }

export default function Layout({ children }: Props) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <SessionProvider>
        <div className="flex h-screen overflow-hidden">
          <aside className={`bg-white dark:bg-gray-900 border-r dark:border-gray-700 transition-all duration-200 ${collapsed ? 'w-16' : 'w-64'}`}>
            <Sidebar collapsed={collapsed} />
          </aside>

          <div className="flex-1 flex flex-col">
            <Header onToggleSidebar={() => setCollapsed(prev=>!prev)} collapsed={collapsed} />
            <main className="flex-1 overflow-auto p-6">
              <div className="max-w-7xl mx-auto">
                {children}
              </div>
            </main>
            <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-700 p-3 text-sm text-gray-500">
              © {new Date().getFullYear()} Admin Panel
            </footer>
          </div>
        </div>
      </SessionProvider>
    </div>
  )
}
