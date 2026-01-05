'use client'
import { useTransition } from 'react'
import { Globe } from 'lucide-react'
import { useLocale } from 'next-intl'

const languages = [
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'en', name: 'English', flag: '🇬🇧' }
]

export function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition()
  const currentLocale = useLocale()

  const changeLanguage = async (locale: string) => {
    startTransition(async () => {
      // Ustaw cookie z językiem
      document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`
      
      // Zapisz w profilu użytkownika jeśli jest zalogowany
      try {
        await fetch('/api/users/locale', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ locale })
        })
      } catch (error) {
        // Cichy błąd - cookie jest już ustawione
      }
      
      // Odśwież stronę aby zastosować nowy język
      window.location.reload()
    })
  }

  return (
    <div className="relative group">
      <button 
        className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 transition-colors"
        disabled={isPending}
      >
        <Globe className="w-4 h-4 text-gray-600" />
        <span className="text-sm font-medium">
          {languages.find(lang => lang.code === currentLocale)?.flag}
        </span>
      </button>
      
      {/* Dropdown menu */}
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            disabled={isPending}
            className={`w-full text-left px-4 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg flex items-center gap-2 ${
              currentLocale === lang.code ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
            }`}
          >
            <span>{lang.flag}</span>
            <span className="text-sm">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
