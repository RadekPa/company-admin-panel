# API Pobierania Danych Firm

System wykorzystuje publiczne API do automatycznego pobierania danych firm na podstawie NIP lub KRS.

## Zaimplementowane API

### Biała Lista VAT (Ministerstwo Finansów)
- **URL**: `https://wl-api.mf.gov.pl/api/search/nip/{nip}?date={date}`
- **Parametr**: `nip` - numer NIP firmy (10 cyfr)
- **Zakres**: Wszystkie podmioty zarejestrowane w rejestrze VAT (JDG i spółki)
- **Wymagane klucze**: Brak (API publiczne)
- **Dane zwracane**: 
  - Nazwa firmy/osoby
  - Adres siedziby
  - NIP, REGON, KRS
  - Status VAT (czynny/nieczynny)
  - Numery kont bankowych
  - Daty rejestracji
- **Zalety**: 
  - Nie wymaga rejestracji
  - Obsługuje wszystkie typy działalności
  - Zawiera informacje o statusie VAT
  - Weryfikacja kont bankowych

## Jak używać

1. W formularzu dodawania klienta wprowadź NIP firmy
2. Kliknij przycisk "Pobierz dane"
3. System automatycznie wypełni pola formularza danymi z rejestru

## Rozszerzenia dla firm innych niż JDG

Dla pełnej obsługi wszystkich typów firm (Sp. z o.o., S.A., itp.) można zintegrować:

### 1. API GUS REGON
- **Dokumentacja**: https://api.stat.gov.pl/Home/RegonApi
- **Wymaga**: Klucz API (darmowy po rejestracji)
- **Zakres**: Wszystkie firmy w REGON
- **Instrukcja**:
  1. Zarejestruj się na https://api.stat.gov.pl/
  2. Otrzymasz klucz API
  3. Dodaj klucz do `.env`: `REGON_API_KEY=twoj_klucz`
  4. Zaktualizuj `/api/company-lookup/route.ts`

### 2. API KRS (Krajowy Rejestr Sądowy)
- **Opcje**:
  - https://api-krs.ms.gov.pl/ (oficjalne API Ministerstwa Sprawiedliwości)
  - https://rejestr.io/ (API komercyjne, prostsze w użyciu)

## Przykład integracji GUS REGON

```typescript
// W /api/company-lookup/route.ts
const regonApiKey = process.env.REGON_API_KEY

const response = await fetch('https://wyszukiwarkaregon.stat.gov.pl/wsBIR/UslugaBIRzewnPubl.svc', {
  method: 'POST',
  headers: {
    'Content-Type': 'text/xml',
    'SOAPAction': 'http://CIS/BIR/PUBL/2014/07/IUslugaBIRzewnPubl/Zaloguj',
  },
  body: `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
      <soap:Body>
        <Zaloguj xmlns="http://CIS/BIR/PUBL/2014/07">
          <pKluczUzytkownika>${regonApiKey}</pKluczUzytkownika>
        </Zaloguj>
      </soap:Body>
    </soap:Envelope>`
})
```

## Testowanie

Przykładowe NIP-y firm JDG do testowania:
- `7811857095` - przykładowa JDG
- `5252539408` - przykładowa JDG

**Uwaga**: API CEIDG wymaga prawdziwego, zarejestrowanego NIP-u.
