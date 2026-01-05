import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export const locales = ['en', 'pl'] as const;
export const defaultLocale = 'pl' as const;

export type Locale = (typeof locales)[number];

export default getRequestConfig(async () => {
  let locale: Locale = defaultLocale;

  try {
    // Pobierz locale z cookie
    const cookieStore = await cookies();
    const localeCookie = cookieStore.get('NEXT_LOCALE')?.value;
    if (localeCookie && locales.includes(localeCookie as Locale)) {
      locale = localeCookie as Locale;
    }
  } catch (error) {
    console.error('Error loading locale:', error);
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
