'use client';

import { useImmer } from 'use-immer';
import Step1 from './components/step1';
import Step2 from './components/step2';

const PageGaVerify = () => {
	const [step, setStep] = useImmer<1 | 2>(1);

	return (
		<>
			<div className="flex justify-between gap-[18px]">
				{Array.from({ length: 3 }).map((_, index) => (
					<i
						key={index}
						className={`flex-1 h-[4px] rounded-full transition-all duration-300 ease-in-out
							${index + 1 <= step ? 'bg-bg-c1 dark:bg-bg-c1-dark' : 'bg-bg-c3 dark:bg-bg-c3-dark'}`}
					/>
				))}
			</div>
			{step === 1 && <Step1 onNext={() => setStep(2)} />}
			{step === 2 && <Step2 />}
		</>
	);
};

export default PageGaVerify;
