export type Locale = (typeof locales)[number];

export const locales = ['en', 'zh-Hant', 'zh'] as const;
export const defaultLocale: Locale = 'en';
