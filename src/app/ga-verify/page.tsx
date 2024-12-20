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
			const redirect = searchParams.get('redirect')!;
			const emailVerifyCode = searchParams.get('emailVerifyCode')!;
			const [err, res] = await to(
				Login.verifyGaFaUsingPost({
					email,
					faCode: emailVerifyCode,
					gaCode: code,
				}),
			);
			if (err || !isSuccess(res)) return false;
			router.replace(
				'/set-password?gaCode=' + res.content + '&email=' + email + '&redirect=' + redirect,
			);
			return true;
		} else if (type === '1') {
			// TODO, api
			// const redirect = searchParams.get('redirect')!;
			// window.location.replace(redirect); // 清理路由
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
