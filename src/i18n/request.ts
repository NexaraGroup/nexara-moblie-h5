import { getRequestConfig } from 'next-intl/server';
import { getLocaleCookie } from './session';

export default getRequestConfig(async () => {
	const locale = await getLocaleCookie();
	const commonMessages = (await import(`../../locales/${locale}/common.json`)).default;
	const loginPageMessage = (await import(`../../locales/${locale}/page-login.json`)).default;
	const loginEmailVerifyPageMessage = (
		await import(`../../locales/${locale}/page-login-email-verify.json`)
	).default;

	return {
		locale,
		messages: {
			...commonMessages,
			'page-login': {
				...loginPageMessage,
			},
			'page-login-email-verify': {
				...loginEmailVerifyPageMessage,
			},
		},
	};
});
