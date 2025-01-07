'use client';

import { Login, User } from '@/api';
import { PageFeedbackType } from '@/global.enum';
import Button from '@/components/button';
import Form from '@/components/form';
import Input from '@/components/input';
import { isSuccess } from '@/utils/api';
import useRequireRuleTs from '@/utils/useRequireRuleTs';
import { to } from '@atom8/await-to-js';
import CryptoJS from 'crypto-js';
import sha256 from 'crypto-js/sha256';
import { useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { useImmer } from 'use-immer';
import { generateRulesData } from './const';

const PageSetPassword = () => {
	const t = useTranslations('page-set-password');
	const router = useRouter();
	const searchParams = useSearchParams();
	const type = searchParams.get('type');
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
		const fn = type === '1' ? User.setPasswordUsingPost : Login.resetPasswordUsingPost;
		const p: Partial<Parameters<typeof Login.resetPasswordUsingPost>[0]> = {
			password: sha256(values.password).toString(CryptoJS.enc.Hex),
		}
		if (type !== '1') {
			p.email = searchParams.get('email')!;
			p.faCode = searchParams.get('gaCode')!;
		}
		setLoading(true);
		const [err, res] = await to(
			fn(p),
		);
		if (err || !isSuccess(res)) return;
		setLoading(false);
		router.replace(`/feedback?type=${PageFeedbackType.SetPassword}`);
	};

	const handlePasswordBlur = () => {
		if (!confirmPassword) return;
		form.validateFields(['confirmPassword']);
	};

	return (
		<>
			{type === '1' ? (
				<div className="flex justify-between gap-[18px]">
					{Array.from({ length: 3 }).map((_, index) => (
						<i
							key={index}
							className={`flex-1 h-[4px] rounded-full transition-all duration-300 ease-in-out
							bg-bg-c1 dark:bg-bg-c1-dark`}
						/>
					))}
				</div>
			) : null}

			<h2
				className={`${type === '1' ? 'text-[24px] mt-[12px]' : 'text-[28px]'} font-bold
			text-fz-c1 dark:text-fz-c1`}
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
					<Input
						onEnterPress={handleSubmit}
						maxLength={32}
						type="password"
						disabled={loading}
					/>
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
