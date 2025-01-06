'use client';

import { Login } from '@/api';
import VerifyCodeInput from '@/components/verify-code-input';
import { isSuccess } from '@/utils/api';
import { to } from '@atom8/await-to-js';
import { useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';

const PageGaVerify = () => {
	const t = useTranslations('page-ga-verify');
	const searchParams = useSearchParams();
	const type = searchParams.get('type');
	const router = useRouter();

	const handleSubmit = async (code: string) => {
		if (type === '2') {
			const email = searchParams.get('email')!;
			const faCode = searchParams.get('faCode')!;
			const [_, res] = await to(Login.verifyGaFaUsingPost({
				email: email!,
				faCode: faCode,
				gaCode: code,
			}));
			if (!isSuccess(res)) return false;
			router.replace('/set-password?gaCode=' + (res?.content ?? '') + '&email=' + email);
			return true;
		} else if (type === '1') {
			router.replace('/home'); // 登录同一去首页，不做其他逻辑
			return true;
		}
		return true;
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
