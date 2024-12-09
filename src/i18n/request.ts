import { getRequestConfig } from 'next-intl/server';
import { getLocaleCookie } from './session';

export default getRequestConfig(async () => {
	const locale = await getLocaleCookie();
	const commonMessages = (await import(`../../locales/${locale}/common.json`)).default;
	const loginPageMessage = (await import(`../../locales/${locale}/loginPage.json`)).default;

	return {
		locale,
		messages: {
			...commonMessages,
			loginPage: {
				...loginPageMessage,
			},
		},
	};
});
