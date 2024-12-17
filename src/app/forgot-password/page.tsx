'use client';

import Button from '@/components/button';
import Form from '@/components/form';
import { PagesForgotPasswordIconBackground } from '@/components/images/PagesForgotPasswordIcon';
import Input from '@/components/input';
import { COMMON_FIELD_MAX_LENGTH } from '@/config/base';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

const PageForgotPassword = () => {
	const t = useTranslations('page-forgot-password');
	const router = useRouter();
	const [form] = Form.useForm<{ email: string }>();

	const handleSubmit = async () => {
		await form.validateFields();
		const values = form.getFieldsValue();
		router.push(`/email-verify?email=${values.email}&title=dt2`);
	};

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
							{ required: true, message: t('e1') },
							{ type: 'email', message: t('e2') },
						]}
					>
						<Input maxLength={COMMON_FIELD_MAX_LENGTH} />
					</Form.Item>
				</Form>
			</div>

			<Button size="large" fontBold shape="rounded" onClick={handleSubmit}>
				{t('b1')}
			</Button>
		</div>
	);
};
export default PageForgotPassword;
