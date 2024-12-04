export const options = [
	{ label: 'Home', value: 'home' },
	{ label: 'Investment', value: 'investment' },
	{ label: 'Custodian', value: 'custodian' },
	{ label: 'OTC', value: 'otc' },
	{ label: 'Trust', value: 'trust' },
	{ label: 'Contact Us', value: 'contact-us' },
] as const;

export const pathMap = {
	'/home': 'home',
	'/investment': 'investment',
	'/custodian': 'custodian',
	'/otc': 'otc',
	'/contact-us': 'contact-us',
	'/trust': 'trust',
} as const;

export const languageMap = {
	en: 'English',
	'zh-Hant': '繁體中文',
	zh: '简体中文',
} as const;
