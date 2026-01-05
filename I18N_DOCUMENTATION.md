# Wielojęzyczność (i18n) w Aplikacji

## Przegląd

Aplikacja obsługuje teraz wielojęzyczność przy użyciu biblioteki `next-intl`. Dostępne języki:
- **Polski (pl)** - domyślny
- **Angielski (en)**

## Struktura Plików

```
messages/
  ├── pl.json         # Słownik tłumaczeń polski
  └── en.json         # Słownik tłumaczeń angielski

src/
  ├── i18n/
  │   └── request.ts  # Konfiguracja next-intl
  ├── middleware.ts   # Middleware obsługujący locale
  └── components/
      └── LanguageSwitcher.tsx  # Komponent przełącznika języka
```

## Jak Działa

### 1. Przełączanie Języka

Użytkownik może zmienić język przez przełącznik w prawym górnym rogu aplikacji (ikona globusa 🌍):
- Zmiana języka zapisuje preferencję w cookie `NEXT_LOCALE`
- Preferencja jest automatycznie zapisywana w profilu użytkownika w bazie danych
- Po zmianie języka strona się odświeża, aby zastosować nowe tłumaczenia

### 2. Ładowanie Języka

Aplikacja ładuje język w następującej kolejności:
1. **Z profilu użytkownika** - jeśli użytkownik jest zalogowany
2. **Z cookie** - jeśli nie ma zalogowanego użytkownika
3. **Domyślny (pl)** - jako fallback

### 3. Zapisywanie Preferencji

Endpoint API: `POST /api/users/locale`

```typescript
// Przykład użycia
await fetch('/api/users/locale', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ locale: 'en' })
})
```

## Używanie Tłumaczeń w Kodzie

### W Komponentach Client-Side

```tsx
'use client'
import { useTranslations } from 'next-intl'

export function MyComponent() {
  const t = useTranslations()
  
  return (
    <div>
      <h1>{t('common.welcome')}</h1>
      <button>{t('common.save')}</button>
    </div>
  )
}
```

### W Komponentach Server-Side

```tsx
import { getTranslations } from 'next-intl/server'

export default async function MyPage() {
  const t = await getTranslations()
  
  return (
    <div>
      <h1>{t('dashboard.title')}</h1>
    </div>
  )
}
```

### Namespace (Przestrzenie Nazw)

Tłumaczenia są zorganizowane w przestrzenie nazw:

```tsx
// Użycie konkretnego namespace
const t = useTranslations('clients')
t('title')  // -> "Klienci" (pl) lub "Clients" (en)

// Użycie bez namespace (root)
const t = useTranslations()
t('clients.title')  // -> to samo co powyżej
```

## Dodawanie Nowych Tłumaczeń

### 1. Dodaj klucz do słowników

**messages/pl.json:**
```json
{
  "myFeature": {
    "title": "Moja Funkcja",
    "description": "Opis mojej funkcji"
  }
}
```

**messages/en.json:**
```json
{
  "myFeature": {
    "title": "My Feature",
    "description": "Description of my feature"
  }
}
```

### 2. Użyj w komponencie

```tsx
const t = useTranslations('myFeature')
return <h1>{t('title')}</h1>
```

## Dostępne Przestrzenie Nazw

- `common` - Wspólne elementy (przyciski, etykiety)
- `auth` - Logowanie i autoryzacja
- `navigation` - Menu i nawigacja
- `dashboard` - Panel główny
- `clients` - Klienci
- `documents` - Dokumenty
- `invoices` - Faktury
- `users` - Użytkownicy
- `permissions` - Uprawnienia
- `authors` - Autorzy
- `header` - Nagłówek aplikacji
- `roles` - Role użytkowników
- `documentStatus` - Statusy dokumentów

## Dodawanie Nowego Języka

1. Utwórz nowy plik w `messages/` (np. `messages/de.json`)
2. Dodaj kod języka do `src/i18n/request.ts`:

```typescript
export const locales = ['en', 'pl', 'de'] as const;
```

3. Zaktualizuj komponent `LanguageSwitcher.tsx`:

```typescript
const languages = [
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
]
```

## Troubleshooting

### Brak tłumaczenia

Jeśli widzisz komunikat błędu o brakującym kluczu:
1. Sprawdź czy klucz istnieje w obu plikach (pl.json i en.json)
2. Zrestartuj serwer deweloperski (`npm run dev`)

### Język się nie zmienia

1. Wyczyść cookie przeglądarki
2. Sprawdź czy użytkownik ma pole `locale` w bazie danych
3. Sprawdź console deweloperski w przeglądarce pod kątem błędów

## Migracja Bazy Danych

Pole `locale` zostało dodane do tabeli `User`:

```sql
ALTER TABLE "User" ADD COLUMN "locale" TEXT NOT NULL DEFAULT 'pl';
```

Migracja została automatycznie wykonana przez Prisma.

## Wsparcie Techniczne

W razie problemów sprawdź:
- Logi serwera
- Console przeglądarki
- Struktura plików w `messages/`
- Konfiguracja w `src/i18n/request.ts`
