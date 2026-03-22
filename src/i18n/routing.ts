import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'pl'],
  defaultLocale: 'en',
  localePrefix: 'as-needed', // EN = no prefix, PL = /pl/
  localeDetection: false, // Don't auto-detect from browser language
});
