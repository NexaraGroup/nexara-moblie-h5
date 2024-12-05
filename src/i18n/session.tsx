'use server';

/**
 * @file
 * 通过 cookie 读写 locale 缓存
 * 这里的 cookie 是 request headers 中的 cookie
 *
 * 上文中，观察到，使用了 'use server' 申明，原因是这个设计本来就是在服务端被使用的
 * 然后为什么要显示的申明呢：
 * 1. next 静态分析的限制，防止你出错，属于预防形式的
 * 2. 明确开发意图，这个是服务端使用的模块代码
 */
import { I18N_COOKIE_NAME } from '@/config/base';
import { defaultLocale, Locale } from '@/i18n/config';
import { cookies } from 'next/headers';

export const getLocaleCookie: () => Promise<Locale> = async () => {
	return (cookies().get(I18N_COOKIE_NAME)?.value as Locale) ?? defaultLocale;
};

export const setLocaleCookie: (locale: Locale) => Promise<void> = async (locale) => {
	cookies().set(I18N_COOKIE_NAME, locale);
};
