import { useTranslations } from 'next-intl';

export const generateRulesData = (t: ReturnType<typeof useTranslations>) => [
	{
		text: t('r1'),
		validator: (value: string) => value?.length >= 8 && value?.length <= 32,
	},
	{
		text: t('r2'),
		validator: (value: string) => /[a-z]+/g.test(value),
	},
	{
		text: t('r3'),
		validator: (value: string) => /[A-Z]+/g.test(value),
	},
	{
		text: t('r4'),
		validator: (value: string) => /[0-9]+/g.test(value),
	},
	{
		text: t('r5'),
		validator: (value: string) => /[!”+,-/;:[\]\\~@#$%^&*()^{}’]+/g.test(value),
	},
	{
		text: t('r6'),
		validator: (value: string) => /[!”+,-/;:[\]\\~@#$%^&*()^{}’]+/g.test(value),
	},
	{
		text: t('r7'),
		validator: (value: string) => /^(?!.*([0-9])\1{4,})/.test(value),
	},
];
