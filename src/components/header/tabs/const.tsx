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
	'/trust': 'trust',
	'/contact-us': 'contact-us',
} as const;
