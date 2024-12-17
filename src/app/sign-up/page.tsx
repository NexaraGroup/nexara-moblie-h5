'use client';

import { UserType } from '@/global.enum';
import { useTranslations } from 'next-intl';
import { useImmer } from 'use-immer';
import Step1 from './components/step1';
import Step2 from './components/step2';

const PageSignUp = () => {
	const t = useTranslations('page-sign-up');
	const [step, setStep] = useImmer<1 | 2 | 3>(1);
	const [userType, setUserType] = useImmer<UserType | undefined>(undefined);

	const handleSelectedUserType = (step: 2, type: UserType) => {
		setStep(step);
		setUserType(type!);
	};

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

			{step === 1 && <Step1 onChange={(type) => handleSelectedUserType(2, type)} />}
			{step === 2 && <Step2 userType={userType} onOk={() => setStep(3)} />}
		</>
	);
};

export default PageSignUp;
