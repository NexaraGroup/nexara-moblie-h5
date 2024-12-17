import { getRequestConfig } from 'next-intl/server';
import { getLocaleCookie } from './session';

export default getRequestConfig(async () => {
	const locale = await getLocaleCookie();
	const commonMessages = (await import(`../../locales/${locale}/common.json`)).default;
	const loginPageMessage = (await import(`../../locales/${locale}/page-login.json`)).default;
	const emailVerifyPageMessage = (await import(`../../locales/${locale}/page-email-verify.json`))
		.default;
	const gaVerifyPageMessage = (await import(`../../locales/${locale}/page-ga-verify.json`))
		.default;
	const signUpPageMessage = (await import(`../../locales/${locale}/page-sign-up.json`)).default;
	const forgotPasswordPageMessage = (
		await import(`../../locales/${locale}/page-forgot-password.json`)
	).default;
	const setPasswordPageMessage = (await import(`../../locales/${locale}/page-set-password.json`))
		.default;

	return {
		locale,
		messages: {
			...commonMessages,
			'page-login': {
				...loginPageMessage,
			},
			'page-email-verify': {
				...emailVerifyPageMessage,
			},
			'page-ga-verify': {
				...gaVerifyPageMessage,
			},
			'page-sign-up': {
				...signUpPageMessage,
			},
			'page-forgot-password': {
				...forgotPasswordPageMessage,
			},
			'page-set-password': {
				...setPasswordPageMessage,
			},
		},
	};
});
