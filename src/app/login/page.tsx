'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

export default function LoginPage() {
  const t = useTranslations()
  const [email, setEmail] = useState('admin@example.com')
  const [password, setPassword] = useState('admin123')
  const [error, setError] = useState('')
  const router = useRouter()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const res = await signIn('credentials', { email, password, redirect: false })
    if (res?.ok) {
      try {
        // odśwież dane SSR i sesję
        await router.refresh()
      } catch (e) {}
      // użyj replace aby nie zostawiać starej strony w historii
      router.replace('/dashboard')
    } else {
      setError(t('auth.invalidCredentials'))
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="card w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">{t('auth.login')}</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="label">{t('auth.email')}</label>
            <input className="input" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div>
            <label className="label">{t('auth.password')}</label>
            <input className="input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button type="submit" className="btn btn-primary w-full">{t('auth.login')}</button>
        </form>
      </div>
    </div>
  )
}
