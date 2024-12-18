'use client';

import VerifyCodeInput from '@/components/verify-code-input';
import { useTranslations } from 'next-intl';

const PageGaVerify = () => {
	const t = useTranslations('page-ga-verify');

	const handleSubmit = async (code: string) => {
		// api
		if (false) {
			return false;
		}
		return true;
		// TODO，需要前一页，指明跳转路径和参数
	};

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

			<VerifyCodeInput className="mt-[60px]" onSubmit={handleSubmit} />
		</>
	);
};

export default PageGaVerify;
