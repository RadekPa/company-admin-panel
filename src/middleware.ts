import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Middleware dla i18n nie jest wymagany, ponieważ używamy cookie
  // które jest odczytywane w i18n/request.ts
  return NextResponse.next();
}

export const config = {
  // Matcher ignorujący _next i pliki statyczne
  matcher: ['/((?!_next|api/auth|.*\\..*).*)']
};
