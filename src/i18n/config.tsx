export type Locale = 'zh-CN' | 'zh-HK' | 'en-US';

export const locales = ['en-US', 'zh-CN', 'zh-HK'] as const;
export const defaultLocale: Locale = 'en-US';
