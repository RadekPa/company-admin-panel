# Postęp Tłumaczenia Aplikacji

## ✅ Ukończone

### Komponenty Globalne
- ✅ **Header.tsx** - w pełni przetłumaczony
- ✅ **Sidebar.tsx** - w pełni przetłumaczony
- ✅ **LanguageSwitcher.tsx** - komponent przełącznika języka
- ✅ **Pagination.tsx** - w pełni przetłumaczony

### Strony
- ✅ **login/page.tsx** - w pełni przetłumaczona
- ✅ **dashboard/page.tsx** - w pełni przetłumaczona  
- ⚠️ **clients/page.tsx** - częściowo przetłumaczona (główne elementy UI)
  - ✅ Tytuł strony
  - ✅ Przyciski akcji (Dodaj, Edytuj, Usuń, Zapisz, Anuluj)
  - ✅ Nagłówki tabeli
  - ✅ Opcje sortowania
  - ✅ Tytuły modali
  - ⚠️ Etykiety formularzy - częściowo (trzeba dokończyć wszystkie pola)

### Słowniki
- ✅ **messages/pl.json** - rozszerzony o nowe klucze
- ✅ **messages/en.json** - rozszerzony o nowe klucze

## 🔄 Do Ukończenia

### Strony wymagające tłumaczenia:
1. **authors/page.tsx** - aut orzy
2. **users/page.tsx** - użytkownicy
3. **documents/page.tsx** - dokumenty
4. **invoices/page.tsx** - faktury
5. **permissions/page.tsx** - uprawnienia
6. **authors/[id]/page.tsx** - szczegóły autora
7. **clients/[id]/page.tsx** - szczegóły klienta
8. **invoices/calendar/page.tsx** - kalendarz cashflow

## 📝 Instrukcja Dokończenia Tłumaczenia

### Krok 1: Dodaj import do strony

```typescript
import { useTranslations } from 'next-intl'
```

### Krok 2: Dodaj hook w komponencie

```typescript
export default function MyPage() {
  const t = useTranslations()
  // ... reszta kodu
}
```

### Krok 3: Zamień hardcoded teksty

**Przed:**
```tsx
<h1>Lista Użytkowników</h1>
<Button>Dodaj użytkownika</Button>
<label>Imię i nazwisko</label>
```

**Po:**
```tsx
<h1>{t('users.title')}</h1>
<Button>{t('users.createUser')}</Button>
<label>{t('users.name')}</label>
```

### Krok 4: Dodaj klucze do słowników

**messages/pl.json:**
```json
"users": {
  "title": "Lista Użytkowników",
  "createUser": "Dodaj użytkownika",
  "name": "Imię i nazwisko"
}
```

**messages/en.json:**
```json
"users": {
  "title": "User List",
  "createUser": "Add User",
  "name": "Name"
}
```

## 🎯 Wzorce Tłumaczenia

### Typowe Elementy UI

| Polski | Klucz | Angielski |
|--------|-------|-----------|
| Dodaj | common.add | Add |
| Edytuj | common.edit | Edit |
| Usuń | common.delete | Delete |
| Zapisz | common.save | Save |
| Anuluj | common.cancel | Cancel |
| Szukaj | common.search | Search |
| Ładowanie... | common.loading | Loading... |
| Strona X z Y | common.page X common.of Y | Page X of Y |

### Przyciski Akcji

```tsx
// Przed
<Button>Dodaj klienta</Button>
<Button>Edytuj</Button>
<Button>Usuń</Button>

// Po
<Button>{t('clients.createClient')}</Button>
<Button>{t('common.edit')}</Button>
<Button>{t('common.delete')}</Button>
```

### Nagłówki Tabel

```tsx
// Przed
<Th>Nazwa</Th>
<Th>Email</Th>
<Th>Telefon</Th>

// Po
<Th>{t('common.name')}</Th>
<Th>{t('common.email')}</Th>
<Th>{t('common.phone')}</Th>
```

### Tytuły Modali

```tsx
// Przed
<h3>Dodaj użytkownika</h3>
<h3>Edytuj użytkownika</h3>

// Po
<h3>{t('users.createUser')}</h3>
<h3>{t('users.editUser')}</h3>
```

## 🔍 Znajdowanie Tekstów do Tłumaczenia

Użyj grep aby znaleźć hardcoded polskie teksty:

```bash
grep -r "Dodaj\|Edytuj\|Usuń\|Zapisz" src/app/(protected) --include="*.tsx"
grep -r ">.*[ĄĆĘŁŃÓŚŹŻ]" src/app/(protected) --include="*.tsx"
```

## 📊 Priorytet Tłumaczeń

1. **Wysoki priorytet** (widoczne dla użytkownika):
   - Tytuły stron
   - Przyciski akcji
   - Nagłówki tabel
   - Tytuły modali
   - Komunikaty błędów

2. **Średni priorytet**:
   - Etykiety formularzy
   - Placeholdery
   - Tooltips
   - Opcje select

3. **Niski priorytet**:
   - Komentarze w kodzie
   - Console.log
   - Komunikaty developerskie

## 🚀 Szybkie Tłumaczenie Całej Strony

### Przykład: users/page.tsx

1. Dodaj import i hook
2. Znajdź wszystkie teksty:
   ```bash
   grep -n "\"[A-ZŁĆĘŃÓŚŹŻ]" src/app/(protected)/users/page.tsx
   ```
3. Dla każdego tekstu:
   - Dodaj klucz do słowników
   - Zamień tekst na `{t('klucz')}`

4. Uruchom aplikację i sprawdź czy wszystko działa

## ✨ Wskazówki

1. **Używaj istniejących kluczy**: Sprawdź messages/pl.json przed dodawaniem nowych
2. **Zachowaj spójność**: Używaj tych samych kluczy dla tych samych tekstów
3. **Testuj na bieżąco**: Przełączaj język i sprawdzaj czy wszystko się wyświetla
4. **Dokumentuj zmiany**: Aktualizuj ten plik gdy kończysz kolejne strony

## 📦 Dostępne Klucze w Słownikach

### common
- appName, welcome, loading, error, success
- cancel, save, delete, edit, create, add
- search, filter, actions, status, date
- name, email, phone, address, city, postalCode, country
- description, notes, createdAt, updatedAt
- yes, no, back, next, previous, close, confirm
- page, of, sortBy, pageSize, saving, title

### Moduły (clients, documents, invoices, users, authors, permissions)
- title, createX, editX, deleteX
- name, email, phone, address, etc.
- XCreated, XUpdated, XDeleted

## 🎉 Po Ukończeniu

1. Przetestuj aplikację w obu językach
2. Sprawdź wszystkie formularze
3. Zweryfikuj komunikaty błędów
4. Przetestuj na różnych rozdzielczościach ekranu
5. Zaktualizuj dokumentację I18N_DOCUMENTATION.md
