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

	const handleSelectedUserType = (type: UserType) => {
		setStep(2);
		setUserType(type!);
	};

	useEffect(() => {
		const codeInQuery = searchParams.get('invitationCode') || undefined;
		const codeInSession = sessionStorage.getItem('invitationCode');
		if (!codeInQuery && !codeInSession) return;
		setInvitationCode((codeInQuery || codeInSession)!);
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
			{step === 2 && <Step2 userType={userType} invitationCode={invitationCode} />}
		</>
	);
};

export default PageSignUp;
