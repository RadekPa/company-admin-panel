'use client'

import { useState, useEffect, ChangeEvent, MouseEvent } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Modal } from '../../../components/ui/Modal'

interface Language {
  code: string
  name: string
  keysCount: number
}

interface TranslationSection {
  [key: string]: string | TranslationSection
}

export default function LanguagesPage() {
  const t = useTranslations('languages')
  const [languages, setLanguages] = useState<Language[]>([])
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)
  const [translations, setTranslations] = useState<TranslationSection>({})
  const [searchTerm, setSearchTerm] = useState('')
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [newLanguageCode, setNewLanguageCode] = useState('')
  const [newLanguageName, setNewLanguageName] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  useEffect(() => {
    loadLanguages()
  }, [])

  const loadLanguages = async () => {
    try {
      const response = await fetch('/api/languages')
      const data = await response.json()
      if (data.languages) {
        setLanguages(data.languages)
      }
    } catch (error) {
      console.error('Error loading languages:', error)
      showMessage('error', 'Błąd wczytywania języków')
    }
  }

  const loadTranslations = async (code: string) => {
    try {
      const response = await fetch(`/api/languages/${code}`)
      const data = await response.json()
      if (data.translations) {
        setTranslations(data.translations)
        setSelectedLanguage(code)
      }
    } catch (error) {
      console.error('Error loading translations:', error)
      showMessage('error', 'Błąd wczytywania tłumaczeń')
    }
  }

  const saveTranslations = async () => {
    if (!selectedLanguage) return

    setIsSaving(true)
    try {
      const response = await fetch(`/api/languages/${selectedLanguage}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ translations })
      })

      if (response.ok) {
        showMessage('success', t('translationsSaved'))
        // Przeładuj tłumaczenia aby zobaczyć zaktualizowaną wersję
        await loadTranslations(selectedLanguage)
        // Przeładuj listę języków aby zaktualizować liczbę kluczy
        await loadLanguages()
      } else {
        showMessage('error', 'Błąd zapisu tłumaczeń')
      }
    } catch (error) {
      console.error('Error saving translations:', error)
      showMessage('error', 'Błąd zapisu tłumaczeń')
    } finally {
      setIsSaving(false)
    }
  }

  const addLanguage = async () => {
    if (!newLanguageCode || !newLanguageName) return

    try {
      const response = await fetch('/api/languages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: newLanguageCode, name: newLanguageName })
      })

      if (response.ok) {
        showMessage('success', t('languageAdded'))
        setIsAddModalOpen(false)
        setNewLanguageCode('')
        setNewLanguageName('')
        loadLanguages()
      } else {
        const data = await response.json()
        showMessage('error', data.error || 'Błąd dodawania języka')
      }
    } catch (error) {
      console.error('Error adding language:', error)
      showMessage('error', 'Błąd dodawania języka')
    }
  }

  const deleteLanguage = async (code: string) => {
    try {
      const response = await fetch(`/api/languages?code=${code}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        showMessage('success', t('languageDeleted'))
        setDeleteConfirm(null)
        if (selectedLanguage === code) {
          setSelectedLanguage(null)
          setTranslations({})
        }
        loadLanguages()
      } else {
        const data = await response.json()
        showMessage('error', data.error || 'Błąd usuwania języka')
      }
    } catch (error) {
      console.error('Error deleting language:', error)
      showMessage('error', 'Błąd usuwania języka')
    }
  }

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text })
    setTimeout(() => setMessage(null), 3000)
  }

  const updateTranslation = (path: string[], value: string) => {
    setTranslations(prev => {
      const newTranslations = JSON.parse(JSON.stringify(prev))
      let current = newTranslations
      
      for (let i = 0; i < path.length - 1; i++) {
        if (!current[path[i]]) {
          current[path[i]] = {}
        }
        current = current[path[i]]
      }
      
      current[path[path.length - 1]] = value
      return newTranslations
    })
  }

  const hasMatchingChild = (obj: TranslationSection, path: string[], term: string): boolean => {
    for (const key in obj) {
      const currentPath = [...path, key]
      const fullPath = currentPath.join('.')
      
      // Szukaj w kluczu
      if (fullPath.toLowerCase().includes(term.toLowerCase())) {
        return true
      }
      
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        if (hasMatchingChild(obj[key] as TranslationSection, currentPath, term)) {
          return true
        }
      } else {
        // Szukaj w wartości (tłumaczeniu)
        const value = String(obj[key] || '')
        if (value.toLowerCase().includes(term.toLowerCase())) {
          return true
        }
      }
    }
    return false
  }

  const renderTranslationInputs = (obj: TranslationSection, path: string[] = []): JSX.Element[] => {
    const elements: JSX.Element[] = []
    
    for (const key in obj) {
      const currentPath = [...path, key]
      const fullPath = currentPath.join('.')
      
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        // Jeśli wyszukiwanie jest aktywne, sprawdź czy ta sekcja lub jej dzieci zawierają szukany tekst
        if (searchTerm && !hasMatchingChild(obj[key] as TranslationSection, currentPath, searchTerm)) {
          continue
        }
        
        const childElements = renderTranslationInputs(obj[key] as TranslationSection, currentPath)
        
        // Renderuj sekcję tylko jeśli ma dzieci do wyświetlenia
        if (childElements.length > 0) {
          elements.push(
            <div key={fullPath} className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">
                {currentPath.join(' → ')}
              </h3>
              <div className="ml-4 space-y-3">
                {childElements}
              </div>
            </div>
          )
        }
      } else {
        // Dla liści (wartości tekstowych) sprawdź czy pasują do wyszukiwania (klucz lub wartość)
        if (searchTerm) {
          const value = String(obj[key] || '')
          const matchesKey = fullPath.toLowerCase().includes(searchTerm.toLowerCase())
          const matchesValue = value.toLowerCase().includes(searchTerm.toLowerCase())
          
          if (!matchesKey && !matchesValue) {
            continue
          }
        }
        
        elements.push(
          <div key={fullPath} className="mb-3">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {fullPath}
            </label>
            <Input
              value={obj[key] as string}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateTranslation(currentPath, e.target.value)}
              placeholder={t('translationValue')}
              className="w-full"
            />
          </div>
        )
      }
    }
    
    return elements
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{t('title')}</h1>
          <Button onClick={() => setIsAddModalOpen(true)}>
            {t('addLanguage')}
          </Button>
        </div>
      </Card>

      {message && (
        <div className={`p-4 rounded-lg ${
          message.type === 'success' 
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
        }`}>
          {message.text}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lista języków */}
        <Card className="lg:col-span-1 p-6">
          <h2 className="text-xl font-semibold mb-4">{t('availableLanguages')}</h2>
          <div className="space-y-2">
            {languages.map(lang => (
              <div 
                key={lang.code}
                className={`p-3 rounded cursor-pointer transition-colors ${
                  selectedLanguage === lang.code
                    ? 'bg-blue-100 dark:bg-blue-900 border-2 border-blue-500'
                    : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => loadTranslations(lang.code)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">{lang.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {lang.code} • {lang.keysCount} {t('key', { count: lang.keysCount })}
                    </div>
                  </div>
                  {lang.code !== 'pl' && lang.code !== 'en' && (
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={(e: MouseEvent<HTMLButtonElement>) => {
                        e.stopPropagation()
                        setDeleteConfirm(lang.code)
                      }}
                    >
                      {t('delete')}
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Panel edycji tłumaczeń */}
        <Card className="lg:col-span-2 p-6">
          {selectedLanguage ? (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">
                  {t('editTranslations')}: {languages.find(l => l.code === selectedLanguage)?.name}
                </h2>
                <Button 
                  onClick={saveTranslations}
                  disabled={isSaving}
                >
                  {isSaving ? 'Zapisywanie...' : t('saveTranslations')}
                </Button>
              </div>

              <div className="mb-4">
                <Input
                  value={searchTerm}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                  placeholder={t('searchKeys')}
                  className="w-full"
                />
              </div>

              <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
                {renderTranslationInputs(translations)}
              </div>
            </>
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-400 py-12">
              Wybierz język z listy, aby edytować tłumaczenia
            </div>
          )}
        </Card>
      </div>

      {/* Modal dodawania języka */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title={t('addLanguage')}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              {t('languageCode')}
            </label>
            <Input
              value={newLanguageCode}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setNewLanguageCode(e.target.value.toLowerCase())}
              placeholder="np. de, fr, es"
              maxLength={2}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              {t('languageName')}
            </label>
            <Input
              value={newLanguageName}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setNewLanguageName(e.target.value)}
              placeholder="np. Deutsch, Français, Español"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="secondary" onClick={() => setIsAddModalOpen(false)}>
              Anuluj
            </Button>
            <Button onClick={addLanguage}>
              {t('add')}
            </Button>
          </div>
        </div>
      </Modal>

      {/* Modal potwierdzenia usunięcia */}
      <Modal
        isOpen={deleteConfirm !== null}
        onClose={() => setDeleteConfirm(null)}
        title={t('confirmDelete')}
      >
        <div className="space-y-4">
          <p>
            Czy na pewno chcesz usunąć język <strong>{languages.find(l => l.code === deleteConfirm)?.name}</strong>?
            Ta operacja jest nieodwracalna.
          </p>
          <div className="flex justify-end space-x-2">
            <Button variant="secondary" onClick={() => setDeleteConfirm(null)}>
              Anuluj
            </Button>
            <Button variant="destructive" onClick={() => deleteConfirm && deleteLanguage(deleteConfirm)}>
              {t('delete')}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
