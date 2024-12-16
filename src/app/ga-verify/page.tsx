'use client';

import VerifyCodeInput from '@/components/verify-code-input';
import { useTranslations } from 'next-intl';

const PageLoginEmailVerify = () => {
	const t = useTranslations('page-ga-verify');

	return (
		<>
			<h2
				className="text-[28px] font-bold
			text-fz-c1 dark:text-fz-c1"
			>
				{t('t1')}
			</h2>
			<p
				className="text-sm mt-[6px]
			 text-fz-c2 dark:text-fz-c2"
			>
				{t('t2')}
			</p>

			<VerifyCodeInput className="mt-[60px]" onSend={() => Promise.resolve(false)} />
		</>
	);
};

export default PageLoginEmailVerify;
