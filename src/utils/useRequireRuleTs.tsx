import { useCallback } from 'react';
import { Language } from '@/global.enum';
import { useLocale, useTranslations } from 'next-intl';

export default (props: { tsKey: string }) => {
	const t = useTranslations(props.tsKey);
	const tc = useTranslations();
	const locale: keyof typeof Language = useLocale() as keyof typeof Language;

	const handleRequireRuleTs = useCallback(
		(field: string) => {
			return [
				{
					required: true,
					message: `${tc('formRequireRulePrefix')} ${locale === 'en-US' ? ' ' : ''} ${t(field)}`,
				},
			];
		},
		[t, tc],
	);

	return handleRequireRuleTs;
};
