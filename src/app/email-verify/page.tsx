'use client';

import { Login } from '@/api';
import Button from '@/components/button';
import VerifyCodeInput from '@/components/verify-code-input';
import { isSuccess } from '@/utils/api';
import useAutoSendCode from '@/utils/useAutoSendCode';
import { to } from '@atom8/await-to-js';
import { useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { useImmer } from 'use-immer';

const titleMap = {
	'1': 'dt1',
	'2': 'dt2',
} as const;

const PageEmailVerify = () => {
	const t = useTranslations('page-email-verify');
	const searchParams = useSearchParams();
	const email = searchParams.get('email')!;
	const type = searchParams.get('type') || '1';
	const title = titleMap[type as keyof typeof titleMap] || 'dt1';
	const router = useRouter();
	const [loading, setLoading] = useImmer<boolean>(false);
	const [msgLoading, setMsgLoading] = useImmer<boolean>(false);

	const handleSendCode = async () => {
		setMsgLoading(true);
		const [err, res] = await to(
			Login.sendFaByEmailUsingPost({
				email,
			}),
		);
		setMsgLoading(false);
		if (err || !isSuccess(res)) {
			return false;
		}
		return true;
	};

	const { clearCountdown, countdown, receiving } = useAutoSendCode({
		sendCodeAction: handleSendCode,
	});

	const handleSubmit = async (msgCode: string) => {
		if (type === '2') {
			router.replace(`/ga-verify?email=${email}&emailVerifyCode=${msgCode}&type=2`);
			clearCountdown();
			return true;
		}
		return true;
		// setLoading(true);
		// const [err, res] = await to(
		// 	Login.verifyGaFaUsingPost({
		// 		email,
		// 		faCode: msgCode,
		// 		gaCode,
		// 	}),
		// );
		// setLoading(false);
		// // api
		// setLoading(false);
		// if (false) {
		// 	return false;
		// }
		// // 清楚计时器状态
		// clearCountdown();
		// if (type === '1') {
		// 	// 登录
		// 	// 去验证 ga
		// } else if (type === '2') {
		// 	// 忘记密码，去设置密码
		// 	router.push(`/set-password?email=${email}`);
		// }
		// return true;
	};

	return (
		<>
			<h2
				className="text-[28px] font-bold
			text-fz-c1 dark:text-fz-c1"
			>
				{t(title)}
			</h2>
			<p
				className="text-sm mt-[6px]
			 text-fz-c2 dark:text-fz-c2"
			>
				{t.rich('t2', {
					Email: () => (
						<span className="text-fz-c1 dark:text-fz-c1 font-bold">{email}</span>
					),
				})}
			</p>

			<VerifyCodeInput className="mt-[60px]" onSubmit={handleSubmit} />

			<p
				className="text-sm mt-[30px] text-center
			text-fz-c2 dark:text-fz-c2"
			>
				{t('t3')}
			</p>

			<Button
				type="link"
				size="large"
				loading={msgLoading}
				className="block mx-auto mt-[12px]"
				fontBold
				disabled={receiving}
				onClick={handleSendCode}
			>
				{receiving ? `${countdown}s` : t('b1')}
			</Button>
		</>
	);
};

export default PageEmailVerify;
