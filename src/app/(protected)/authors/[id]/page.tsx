'use client'
import { useEffect, useState, useRef } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Modal } from '../../../../components/ui/Modal'
import { AuthorUpdateSchema } from '../../../../validation/author'
import Image from 'next/image'

type Author = { 
  id: number
  firstName: string
  middleName?: string | null
  lastName: string
  description?: string | null
  workEmail?: string | null
  personalEmail?: string | null
  photos?: string[]
  client?: {
    id: number
    name: string
  } | null
  createdAt: string
  updatedAt: string
}

export default function AuthorDetailPage() {
  const params = useParams()
  const id = Number(params.id)
  const t = useTranslations('authors')
  const tCommon = useTranslations('common')
  const [author, setAuthor] = useState<Author | null>(null)
  const [editMode, setEditMode] = useState(false)
  const [formErrors, setFormErrors] = useState<string[]>([])
  const [uploading, setUploading] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const loadAuthor = async () => {
    const res = await fetch(`/api/authors/${id}`)
    const a = await res.json()
    setAuthor(a)
  }

  useEffect(() => { if (id) loadAuthor() }, [id])

  const updateAuthor = async () => {
    if (!author) return
    const parsed = AuthorUpdateSchema.safeParse({ 
      firstName: author.firstName,
      middleName: author.middleName ?? '',
      lastName: author.lastName,
      description: author.description ?? '',
      workEmail: author.workEmail ?? '',
      personalEmail: author.personalEmail ?? '',
    })
    if (!parsed.success) {
      setFormErrors(parsed.error.errors.map(e=>e.message))
      return
    }
    setFormErrors([])
    await fetch(`/api/authors/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(parsed.data) })
    await loadAuthor()
    setEditMode(false)
  }

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    try {
      const formData = new FormData()
      formData.append('photo', file)

      const res = await fetch(`/api/authors/${id}/photos`, {
        method: 'POST',
        body: formData
      })

      if (res.ok) {
        await loadAuthor()
      } else {
        alert('Błąd podczas przesyłania zdjęcia')
      }
    } catch (error) {
      console.error('Upload error:', error)
      alert('Błąd podczas przesyłania zdjęcia')
    } finally {
      setUploading(false)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  const deletePhoto = async (photoUrl: string) => {
    try {
      const res = await fetch(`/api/authors/${id}/photos?url=${encodeURIComponent(photoUrl)}`, {
        method: 'DELETE'
      })

      if (res.ok) {
        await loadAuthor()
        setDeleteConfirm(null)
      } else {
        alert('Błąd podczas usuwania zdjęcia')
      }
    } catch (error) {
      console.error('Delete error:', error)
      alert('Błąd podczas usuwania zdjęcia')
    }
  }

  if (!author) return <p className="text-center text-muted-foreground py-8">{tCommon('loading')}</p>

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">{t('authorDetails')}</h1>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={() => window.history.back()}>
              {tCommon('back')}
            </Button>
            {!editMode ? (
              <Button variant="primary" onClick={() => setEditMode(true)}>
                {tCommon('edit')}
              </Button>
            ) : (
              <>
                <Button variant="secondary" onClick={() => { setEditMode(false); loadAuthor() }}>
                  {tCommon('cancel')}
                </Button>
                <Button variant="primary" onClick={updateAuthor}>
                  {tCommon('save')}
                </Button>
              </>
            )}
          </div>
        </div>

        {formErrors.length > 0 && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 rounded">
            <ul className="list-disc list-inside text-sm text-red-600 dark:text-red-400">
              {formErrors.map((e, i) => (<li key={i}>{e}</li>))}
            </ul>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Dane osobowe
            </h3>
            <div>
              <label className="label text-xs text-gray-500">{t('firstName')}</label>
              {editMode ? (
                <Input value={author.firstName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAuthor({ ...author, firstName: e.target.value })} />
              ) : (
                <p className="text-base font-medium">{author.firstName}</p>
              )}
            </div>
            <div>
              <label className="label text-xs text-gray-500">{t('middleName')}</label>
              {editMode ? (
                <Input value={author.middleName ?? ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAuthor({ ...author, middleName: e.target.value })} />
              ) : (
                <p className="text-base">{author.middleName || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs text-gray-500">{t('lastName')}</label>
              {editMode ? (
                <Input value={author.lastName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAuthor({ ...author, lastName: e.target.value })} />
              ) : (
                <p className="text-base font-medium">{author.lastName}</p>
              )}
            </div>
            <div>
              <label className="label text-xs text-gray-500">{t('workEmail')}</label>
              {editMode ? (
                <Input type="email" value={author.workEmail ?? ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAuthor({ ...author, workEmail: e.target.value })} />
              ) : (
                <p className="text-base">{author.workEmail || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs text-gray-500">{t('personalEmail')}</label>
              {editMode ? (
                <Input type="email" value={author.personalEmail ?? ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAuthor({ ...author, personalEmail: e.target.value })} />
              ) : (
                <p className="text-base">{author.personalEmail || '-'}</p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Informacje dodatkowe
            </h3>
            <div>
              <label className="label text-xs text-gray-500">Klient</label>
              {author.client ? (
                <Link 
                  href={`/clients/${author.client.id}`}
                  className="text-base text-primary-600 hover:underline font-medium"
                >
                  {author.client.name}
                </Link>
              ) : (
                <p className="text-base text-muted-foreground">Nie przypisano do klienta</p>
              )}
            </div>
            <div>
              <label className="label text-xs text-gray-500">{t('description')}</label>
              {editMode ? (
                <textarea 
                  className="input w-full min-h-[120px]" 
                  value={author.description ?? ''} 
                  onChange={e => setAuthor({ ...author, description: e.target.value })}
                />
              ) : (
                <p className="text-base whitespace-pre-wrap">{author.description || '-'}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 grid grid-cols-2 gap-4 text-sm text-gray-500">
          <div>
            <span className="font-medium">{tCommon('createdAt')}:</span> {new Intl.DateTimeFormat('pl-PL', { 
              year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' 
            }).format(new Date(author.createdAt))}
          </div>
          <div>
            <span className="font-medium">{tCommon('updatedAt')}:</span> {new Intl.DateTimeFormat('pl-PL', { 
              year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' 
            }).format(new Date(author.updatedAt))}
          </div>
        </div>
      </Card>

      {/* Galeria zdjęć */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">{t('photoGallery')}</h2>
          <div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            <Button 
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              variant="primary"
            >
              {uploading ? t('uploading') : t('addPhoto')}
            </Button>
          </div>
        </div>

        {author.photos && author.photos.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {author.photos.map((photoUrl, index) => (
              <div key={index} className="relative group">
                <div 
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
                  onClick={() => setSelectedImage(photoUrl)}
                >
                  <Image
                    src={photoUrl}
                    alt={`${author.firstName} ${author.lastName} - ${t('photoPreview')} ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg"
                  onClick={() => setDeleteConfirm(photoUrl)}
                >
                  {tCommon('delete')}
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground bg-gray-50 dark:bg-gray-900 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700">
            <p className="text-lg">{t('noPhotos')}</p>
            <p className="text-sm mt-2 text-gray-500">{t('addFirstPhoto') || 'Dodaj pierwsze zdjęcie klikając przycisk powyżej'}</p>
          </div>
        )}
      </Card>

      {/* Modal podglądu zdjęcia */}
      <Modal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        title={t('photoPreview')}
      >
        {selectedImage && (
          <div className="relative w-full bg-gray-100 dark:bg-gray-900 rounded-lg" style={{ height: '70vh' }}>
            <Image
              src={selectedImage}
              alt={t('photoPreview')}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        )}
      </Modal>

      {/* Modal potwierdzenia usunięcia */}
      <Modal
        isOpen={deleteConfirm !== null}
        onClose={() => setDeleteConfirm(null)}
        title={tCommon('confirm')}
      >
        <div className="space-y-6">
          <p className="text-base">{t('confirmDeletePhoto')}</p>
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            <Button variant="secondary" onClick={() => setDeleteConfirm(null)}>
              {tCommon('cancel')}
            </Button>
            <Button variant="destructive" onClick={() => deleteConfirm && deletePhoto(deleteConfirm)}>
              {tCommon('delete')}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
