'use client';

import Button from '@/components/button';
import { UserType } from '@/global.enum';
import { RightOutline } from 'antd-mobile-icons';
import { useTranslations } from 'next-intl';

export default (props: { onChange: (type: UserType) => void }) => {
	const t = useTranslations('page-sign-up');

	return (
		<>
			<Button
				block
				shape="rounded"
				className="mt-[30px]
			bg-bg-c3 dark:bg-bg-c3"
				onClick={() => props.onChange(UserType.Individual)}
			>
				<div
					className="flex justify-between items-center py-[3px] px-[12px]
				text-fz-c1 dark:text-fz-c1"
				>
					<span className="text-left">{t('b1')}</span>
					<RightOutline />
				</div>
			</Button>

			<Button
				block
				shape="rounded"
				className="mt-[30px]
			bg-bg-c3 dark:bg-bg-c3"
				onClick={() => props.onChange(UserType.Corporate)}
			>
				<div
					className="flex justify-between items-center py-[3px] px-[12px]
				text-fz-c1 dark:text-fz-c1"
				>
					<span className="text-left">{t('b2')}</span>
					<RightOutline />
				</div>
			</Button>
		</>
	);
};
