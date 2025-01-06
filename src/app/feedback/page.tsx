'use client';

import Lottie from 'lottie-react';
import animationJson from '@/assets/lottie/success.json';
import Button from '@/components/button';
import { useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { PageFeedbackType } from '@/global.enum';

const PageFeedback = () => {
	const t = useTranslations('page-feedback');
	const router = useRouter();
	const searchParams = useSearchParams();
	const type = searchParams.get('type');

	const handleContinue = () => {
		if (type === PageFeedbackType.Register) router.replace('/login');
		if (type === PageFeedbackType.GaBind) router.replace('/set-password');
		if (type === PageFeedbackType.SetPassword) router.replace('/login');
	};

	return (
		<>
			<div className="mx-auto w-[210px] h-[210px]">
				<Lottie animationData={animationJson} loop={false} />
			</div>

			<h2
				className="text-center text-[28px] font-bold mt-[30px] mb-[9px]
			text-fz-c1 dark:text-fz-c1-dark"
			>
				{t('t' + type)}
			</h2>
			<p
				className="text-center text-sm
			text-fz-c2 dark:text-fz-c2-dark"
			>
				{t('d' + type)}
			</p>

			<Button
				className="mt-[120px]"
				block
				fontBold
				shape="rounded"
				size="large"
				onClick={handleContinue}
			>
				{t('b1')}
			</Button>
		</>
	);
};

export default PageFeedback;
