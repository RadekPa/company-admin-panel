import { NextResponse } from 'next/server'

// GET /api/company-lookup?nip=1234567890
// GET /api/company-lookup?krs=0000123456
export async function GET(req: Request) {
  const url = new URL(req.url)
  const nip = url.searchParams.get('nip')
  const krs = url.searchParams.get('krs')

  if (!nip && !krs) {
    return NextResponse.json({ error: 'Wymagany parametr nip lub krs' }, { status: 400 })
  }

  try {
    if (nip) {
      // Clean NIP (remove spaces, dashes)
      const cleanNip = nip.replace(/[\s-]/g, '')
      
      // Validate NIP format (10 digits)
      if (!/^\d{10}$/.test(cleanNip)) {
        return NextResponse.json({
          success: false,
          error: 'Nieprawidłowy format NIP. NIP powinien składać się z 10 cyfr.'
        }, { status: 400 })
      }
      
      // Using Ministry of Finance White List API (Biała lista VAT)
      // This API is more reliable and doesn't require authentication
      const today = new Date().toISOString().split('T')[0]
      const mfUrl = `https://wl-api.mf.gov.pl/api/search/nip/${cleanNip}?date=${today}`
      
      try {
        const response = await fetch(mfUrl, {
          headers: {
            'Accept': 'application/json',
          },
        })
        
        if (response.ok) {
          const data = await response.json()
          
          if (data && data.result && data.result.subject) {
            const subject = data.result.subject
            
            // Parse address (format: "ULICA NUMER, KOD MIASTO")
            let address = ''
            let city = ''
            let postalCode = ''
            
            if (subject.residenceAddress) {
              const addressParts = subject.residenceAddress.split(', ')
              if (addressParts.length === 2) {
                address = addressParts[0]
                const cityParts = addressParts[1].split(' ')
                if (cityParts.length >= 2) {
                  postalCode = cityParts[0]
                  city = cityParts.slice(1).join(' ')
                }
              } else {
                address = subject.residenceAddress
              }
            }
            
            return NextResponse.json({
              success: true,
              data: {
                name: subject.name || '',
                address: address,
                city: city,
                postalCode: postalCode,
                nip: subject.nip || cleanNip,
                regon: subject.regon || '',
                krs: subject.krs || '',
                legalForm: subject.krs ? 'Spółka' : 'JDG',
                statusVat: subject.statusVat || '',
                accountNumbers: subject.accountNumbers || [],
              }
            })
          }
        }
        
        if (response.status === 404) {
          return NextResponse.json({
            success: false,
            error: 'Nie znaleziono firmy o podanym NIP w rejestrze VAT.'
          }, { status: 404 })
        }
      } catch (mfError) {
        console.error('Ministry of Finance API error:', mfError)
        return NextResponse.json({
          success: false,
          error: 'Błąd podczas pobierania danych z rejestru VAT.'
        }, { status: 500 })
      }
      
      return NextResponse.json({
        success: false,
        error: 'Nie udało się pobrać danych firmy.'
      }, { status: 404 })
    }
    
    if (krs) {
      // KRS API integration would go here
      // For now, return not implemented
      return NextResponse.json({
        success: false,
        error: 'Wyszukiwanie po KRS nie jest jeszcze zaimplementowane',
        hint: 'Możesz zintegrować API rejestr.io lub ems.ms.gov.pl'
      }, { status: 501 })
    }
    
  } catch (error) {
    console.error('Company lookup error:', error)
    return NextResponse.json({
      success: false,
      error: 'Błąd podczas pobierania danych firmy'
    }, { status: 500 })
  }
  
  return NextResponse.json({ success: false, error: 'Nieznany błąd' }, { status: 500 })
}
