import { Language } from '@/global.enum';

export type Locale = keyof typeof Language;

export const locales = ['en-US', 'zh-CN', 'zh-HK'] as const;
export const defaultLocale: Locale = 'en-US';
