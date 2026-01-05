# Zarządzanie Słownikiem Języków

## Opis funkcjonalności

System zarządzania słownikiem języków umożliwia administratorom zarządzanie tłumaczeniami aplikacji bez konieczności edycji plików źródłowych.

## Lokalizacja

Dostęp do panelu zarządzania językami znajduje się w menu bocznym w sekcji **Administracja** → **Słownik języków** (`/languages`).

## Uprawnienia

Dostęp do zarządzania słownikiem mają tylko użytkownicy z rolą **ADMIN**.

## Funkcjonalności

### 1. Lista języków
- Wyświetla wszystkie dostępne języki z ich kodami i liczbą kluczy tłumaczeń
- Języki domyślne (PL, EN) są oznaczone i nie mogą być usunięte

### 2. Dodawanie nowego języka
- Kliknij przycisk "Dodaj język"
- Wprowadź 2-literowy kod języka (np. `de`, `fr`, `es`)
- Wprowadź nazwę języka (np. `Deutsch`, `Français`, `Español`)
- Nowy język zostanie utworzony z pustymi wartościami tłumaczeń (zachowana zostanie struktura kluczy)

### 3. Edycja tłumaczeń
- Wybierz język z listy po lewej stronie
- Wszystkie klucze tłumaczeń zostaną wyświetlone w formie zagnieżdżonych sekcji
- Możesz wyszukiwać klucze używając pola wyszukiwania
- Edytuj wartości tłumaczeń bezpośrednio w polach tekstowych
- Kliknij "Zapisz tłumaczenia" aby zapisać zmiany

### 4. Wyszukiwanie kluczy
- Użyj pola wyszukiwania u góry panelu edycji
- Wyszukiwanie filtruje klucze na podstawie pełnej ścieżki (np. `navigation.dashboard`)

### 5. Usuwanie języka
- Kliknij przycisk "Usuń" przy wybranym języku (dostępne tylko dla języków niebędących domyślnymi)
- Potwierdź usunięcie w oknie dialogowym
- Plik tłumaczeń zostanie usunięty z systemu

## Struktura plików

Wszystkie tłumaczenia są przechowywane w katalogu `messages/` w formacie JSON:

```
messages/
├── pl.json     # Polski (domyślny, nie można usunąć)
├── en.json     # Angielski (domyślny, nie można usunąć)
├── de.json     # Niemiecki (opcjonalny)
└── fr.json     # Francuski (opcjonalny)
```

## Struktura tłumaczeń

Tłumaczenia są zorganizowane w zagnieżdżoną strukturę JSON:

```json
{
  "common": {
    "save": "Zapisz",
    "cancel": "Anuluj"
  },
  "navigation": {
    "dashboard": "Panel główny",
    "clients": "Klienci"
  }
}
```

## API Endpoints

### GET `/api/languages`
Pobiera listę wszystkich dostępnych języków.

**Wymagania:** Użytkownik musi być ADMIN

**Odpowiedź:**
```json
{
  "languages": [
    {
      "code": "pl",
      "name": "Polski",
      "keysCount": 150
    }
  ]
}
```

### POST `/api/languages`
Dodaje nowy język.

**Wymagania:** Użytkownik musi być ADMIN

**Body:**
```json
{
  "code": "de",
  "name": "Deutsch"
}
```

### DELETE `/api/languages?code={code}`
Usuwa język.

**Wymagania:** 
- Użytkownik musi być ADMIN
- Nie można usunąć języków `pl` i `en`

### GET `/api/languages/{code}`
Pobiera wszystkie tłumaczenia dla danego języka.

**Wymagania:** Użytkownik musi być ADMIN

**Odpowiedź:**
```json
{
  "translations": {
    "common": {
      "save": "Zapisz"
    }
  }
}
```

### PUT `/api/languages/{code}`
Zapisuje tłumaczenia dla danego języka.

**Wymagania:** Użytkownik musi być ADMIN

**Body:**
```json
{
  "translations": {
    "common": {
      "save": "Speichern"
    }
  }
}
```

## Bezpieczeństwo

- Wszystkie operacje wymagają autoryzacji (role ADMIN)
- Języki domyślne (pl, en) są chronione przed usunięciem
- Pliki JSON są walidowane przed zapisem
- Operacje na plikach są zabezpieczone przed atakami path traversal

## Przydatne informacje

- Zmiany w tłumaczeniach są natychmiast widoczne po przeładowaniu strony
- System automatycznie wykrywa nowe pliki języków
- Możesz edytować wiele kluczy naraz - wszystkie zmiany są zapisywane razem
- Przy dodawaniu nowego języka struktura kluczy jest kopiowana z języka polskiego

## Rozwiązywanie problemów

### Nie widzę zmian po zapisaniu
- Upewnij się, że kliknąłeś "Zapisz tłumaczenia"
- Odśwież stronę (Ctrl+R / Cmd+R)
- Sprawdź konsolę przeglądarki pod kątem błędów

### Nie mogę usunąć języka
- Języki `pl` i `en` są chronione i nie można ich usunąć
- Upewnij się, że masz rolę ADMIN

### Błąd podczas dodawania języka
- Sprawdź, czy kod języka składa się dokładnie z 2 liter
- Upewnij się, że język o takim kodzie nie istnieje już w systemie
- Kod języka musi być unikalny
