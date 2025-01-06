'use client';

import { useEffect } from 'react';
import { UserType } from '@/global.enum';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useImmer } from 'use-immer';
import Step1 from './components/step1';
import Step2 from './components/step2';

const PageSignUp = () => {
	const t = useTranslations('page-sign-up');
	const searchParams = useSearchParams();
	const [step, setStep] = useImmer<1 | 2>(1);
	const [userType, setUserType] = useImmer<UserType | undefined>(undefined);
	const [invitationCode, setInvitationCode] = useImmer<string | undefined>(undefined);
	const [email, setEmail] = useImmer<string | undefined>(undefined);

	const handleSelectedUserType = (type: UserType) => {
		setStep(2);
		setUserType(type);
	};

	useEffect(() => {
		/**
		 * 1. 在 query 获取的邀请码优先级更高
		 * 2. session 中获取的场景是，初次进入后，路由到别处去然后再回来的场景
		 * 3. 邀请码场景目前只有注册页，所以 session 的初始化需要在这里做
		 */
		const codeInQuery = searchParams.get('invitationCode') || undefined;
		const codeInSession = sessionStorage.getItem('invitationCode') || undefined;

		const emailInQuery = searchParams.get('email') || undefined;
		emailInQuery && setEmail(emailInQuery);

		if (codeInQuery && !codeInSession) sessionStorage.setItem('invitationCode', codeInQuery);
		if (!codeInQuery && !codeInSession) return;
		setInvitationCode((codeInQuery || codeInSession));
	}, [searchParams]);

	return (
		<>
			{step === 1 && (
				<div>
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
				</div>
			)}

			{step === 1 && <Step1 onChange={handleSelectedUserType} />}
			{step === 2 && <Step2 userType={userType} invitationCode={invitationCode} email={email} />}
		</>
	);
};

export default PageSignUp;
