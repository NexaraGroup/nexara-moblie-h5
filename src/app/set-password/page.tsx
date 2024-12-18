'use client';

import Button from '@/components/button';
import Form from '@/components/form';
import Input from '@/components/input';
import useRequireRuleTs from '@/utils/useRequireRuleTs';
import { useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { useImmer } from 'use-immer';
import { generateRulesData } from './const';

const PageSetPassword = () => {
	const t = useTranslations('page-set-password');
	const router = useRouter();
	const searchParams = useSearchParams();
	const email = searchParams.get('email');
	const [form] = Form.useForm<{ password: string; confirmPassword?: string }>();
	const requireRuleTs = useRequireRuleTs({ tsKey: 'page-set-password' });
	const password = Form.useWatch('password', form);
	const confirmPassword = Form.useWatch('confirmPassword', form);
	const rulesData = generateRulesData(t);
	const [loading, setLoading] = useImmer<boolean>(false);

	const handleSubmit = async () => {
		await form.validateFields();
		const values = form.getFieldsValue();
		delete values.confirmPassword;
		setLoading(true);
		// api
		setLoading(false);
		// TODO，去密码设置成功页面
		// router.replace(`/login?email=${email}`);
	};

	const handlePasswordBlur = () => {
		if (!confirmPassword) return;
		form.validateFields(['confirmPassword']);
	};

	return (
		<>
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

			<Form form={form} className="mt-[30px]">
				<Form.Item
					label={t('t5')}
					name="password"
					required
					rules={[
						{
							validator: async (_, value) => {
								for (const rule of rulesData) {
									if (!rule.validator(value)) {
										throw new Error(rule.text);
									}
								}
								return Promise.resolve();
							},
						},
					]}
				>
					<Input
						maxLength={32}
						type="password"
						onBlur={handlePasswordBlur}
						disabled={loading}
					/>
				</Form.Item>

				<Form.Item
					label={t('t6')}
					name="confirmPassword"
					required
					rules={[
						{
							validator: async (_, value) => {
								if (!value) {
									throw new Error(requireRuleTs('t6')[0].message);
								}
								if (value !== password) {
									throw new Error(t('r8'));
								}
								return Promise.resolve();
							},
						},
					]}
				>
					<Input maxLength={32} type="password" disabled={loading} />
				</Form.Item>
			</Form>

			<Button
				className="mt-[12px]"
				size="large"
				fontBold
				loading={loading}
				shape="rounded"
				block
				onClick={handleSubmit}
			>
				{t('b1')}
			</Button>
		</>
	);
};
export default PageSetPassword;
