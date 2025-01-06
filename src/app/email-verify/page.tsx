'use client';

import { Login } from '@/api';
import Cookies from 'js-cookie';
import { TOKEN_KEY } from '@/config/base';
import store2 from 'store2';
import { PageEmailVerifyType, PageFeedbackType } from '@/global.enum';
import Button from '@/components/button';
import VerifyCodeInput from '@/components/verify-code-input';
import { isSuccess } from '@/utils/api';
import useAutoSendCode from '@/utils/useAutoSendCode';
import { to } from '@atom8/await-to-js';
import { useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { useImmer } from 'use-immer';
import { useRef } from 'react';

const titleMap = {
	[PageEmailVerifyType.Login]: 'dt1',
	[PageEmailVerifyType.ForgotPassword]: 'dt2',
	[PageEmailVerifyType.Register]: 'dt3',
} as const;

const PageEmailVerify = () => {
	const t = useTranslations('page-email-verify');
	const searchParams = useSearchParams();
	const loginFirstSended = useRef(false);
	const email = searchParams.get('email');
	const password = searchParams.get('password');
	const formData = searchParams.get('formData');
	const type = searchParams.get('type') as PageEmailVerifyType;
	const invitationCode = searchParams.get('invitationCode');
	const title = titleMap[type];
	const router = useRouter();
	const [msgLoading, setMsgLoading] = useImmer<boolean>(false);

	const handleSendCode = async () => {
		if (!loginFirstSended.current && type === PageEmailVerifyType.Login) {
			loginFirstSended.current = true;
			return true;
		}

		setMsgLoading(true);
		const apiMap = {
			[PageEmailVerifyType.Login]: Login.sendFaCodeByLoginUsingPost,
			[PageEmailVerifyType.ForgotPassword]: Login.sendFaByEmailUsingPost,
			[PageEmailVerifyType.Register]: Login.sendFaCodeByInvitationUsingPost,
		};

		const api = apiMap[type];

		const paramsMap = {
			[PageEmailVerifyType.Login]: {
				email: email!,
				password: password!,
			},
			[PageEmailVerifyType.ForgotPassword]: {
				email: email!,
			},
			[PageEmailVerifyType.Register]: {
				email: email!,
				invitationCode: invitationCode ?? undefined,
			},
		};

		const params = paramsMap[type];

		const [_, res] = await to(
			api(params),
		);
		setMsgLoading(false);
		if (!isSuccess(res)) {
			return false;
		}
		return true;
	};

	const { clearCountdown, countdown, receiving } = useAutoSendCode({
		sendCodeAction: handleSendCode,
		initWhenCountAction: () => {
			if (type === PageEmailVerifyType.Login) {
				loginFirstSended.current = true;
			}
		},
	});

	const handleSubmit = async (msgCode: string) => {
		if (type === PageEmailVerifyType.Login) {
			const [_, res] = await to(Login.loginByFaCodeUsingPost({
				email: email!,
				faCode: msgCode,
			}));
			if (!isSuccess(res)) return false;
			const _res = res?.content ?? {};
			store2.set('loginInfo', {
				email,
				name: _res.name,
				language: ((_res?.extInfoList) as Record<string, string>)?.language,
				hasGaKey: _res.hasGaKey,
			});
			// 设置 jwtToken
			store2.set(TOKEN_KEY, _res.jwtToken ?? '');
			Cookies.set(TOKEN_KEY, _res.jwtToken ?? '');
			clearCountdown();
			// TODO 设置语言
			if (_res.hasGaKey) {
				router.replace(`/ga-verify?email=${email}&faCode=${msgCode}&type=1`);
			} else {
				router.replace(`/bind-ga`);
			}
			return true;
		}
		if (type === PageEmailVerifyType.ForgotPassword) {
			clearCountdown();
			router.replace(`/ga-verify?email=${email}&faCode=${msgCode}&type=2`);
			return true;
		}
		if (type === PageEmailVerifyType.Register) {
			const _formData = JSON.parse(decodeURIComponent(formData || '{}'));
			const [_, res] = await to(Login.registerUsingPost({
				..._formData,
				faCode: msgCode,
			}));
			if (!isSuccess(res)) return false;
			clearCountdown();
			router.replace('/feedback?type=' + PageFeedbackType.Register);
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
