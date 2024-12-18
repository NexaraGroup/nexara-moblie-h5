'use client';

import { useEffect } from 'react';
import Button from '@/components/button';
import Form from '@/components/form';
import { PagesForgotPasswordIconBackground } from '@/components/images/PagesForgotPasswordIcon';
import Input from '@/components/input';
import { COMMON_FIELD_MAX_LENGTH } from '@/config/base';
import useRequireRuleTs from '@/utils/useRequireRuleTs';
import { useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { useImmer } from 'use-immer';

const PageForgotPassword = () => {
	const t = useTranslations('page-forgot-password');
	const searchParams = useSearchParams();
	const tc = useTranslations();
	const router = useRouter();
	const [loading, setLoading] = useImmer<boolean>(false);
	const [form] = Form.useForm<{ email: string }>();
	const requireRuleTs = useRequireRuleTs({ tsKey: 'page-forgot-password' });

	const handleSubmit = async () => {
		await form.validateFields();
		setLoading(true);
		// api
		setLoading(false);
		const email = form.getFieldValue('email');
		router.push(`/email-verify?email=${email}&type=2`);
	};

	useEffect(() => {
		const emailFromQuery = searchParams.get('email');
		if (emailFromQuery && form) form.setFieldValue('email', emailFromQuery);
	}, [searchParams, form]);

	return (
		<div
			className={`flex flex-col justify-between h-[calc(100vh-48px-env(safe-area-inset-top)-env(safe-area-inset-bottom))]`}
		>
			<div>
				<PagesForgotPasswordIconBackground
					alt="forgot-password"
					className="w-[172px] h-[197px] mx-auto mt-[30px]"
					noSize
				/>
				<h2
					className="text-center font-bold mt-[30px] text-[28px]
				text-fz-c1 dark:text-fz-c1-dark"
				>
					{t('t1')}
				</h2>
				<p
					className="text-center mt-[10px] text-sm
					text-fz-c2 dark:text-fz-c2-dark"
				>
					{t('t2')}
				</p>

				<Form form={form} className="mt-[30px]">
					<Form.Item
						label={t('t3')}
						name="email"
						rules={[
							...requireRuleTs('t3'),
							{ type: 'email', message: tc('invalidEmail') },
						]}
					>
						<Input
							maxLength={COMMON_FIELD_MAX_LENGTH}
							onEnterPress={handleSubmit}
							disabled={loading}
						/>
					</Form.Item>
				</Form>
			</div>

			<Button size="large" fontBold shape="rounded" onClick={handleSubmit} loading={loading}>
				{t('b1')}
			</Button>
		</div>
	);
};
export default PageForgotPassword;
