'use client';

import { useEffect } from 'react';
import { Login } from '@/api/';
import Button from '@/components/button';
import Form from '@/components/form';
import Input from '@/components/input';
import { COMMON_FIELD_MAX_LENGTH } from '@/config/base';
import { isSuccess } from '@/utils/api';
import useRequireRuleTs from '@/utils/useRequireRuleTs';
import { to } from '@atom8/await-to-js';
import CryptoJS from 'crypto-js';
import sha256 from 'crypto-js/sha256';
import { useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { useImmer } from 'use-immer';
import type { FormType } from './index.d';

const PageLogin = () => {
	const t = useTranslations('page-login');
	const tc = useTranslations();
	const searchParams = useSearchParams();
	const [form] = Form.useForm<FormType>();
	const requireRuleTs = useRequireRuleTs({ tsKey: 'page-login' });
	const router = useRouter();
	const [loading, setLoading] = useImmer(false);

	const handleSubmit = async () => {
		await form.validateFields();
		const values = form.getFieldsValue();
		setLoading(true);
		console.log(values);
		const [err, res] = await to(
			Login.sendFaCodeByLoginUsingPost({
				email: values.email,
				password: sha256(values.password).toString(CryptoJS.enc.Hex),
			}),
		);
		if (err || !isSuccess(res)) {
			setLoading(false);
			return;
		}
		console.log(res, err);
		// debugger;
		//   if (!isSuccess(res)) {
		// 	messageError(error);
		// 	return;
		//   }
		//   message.success('Success');

		// setTimeout(() => {
		// 	router.push('/home');
		// }, 3000);
	};

	useEffect(() => {
		const email = searchParams.get('email');
		if (email && form) form.setFieldValue('email', email);
	}, [searchParams, form]);

	const handleRouteToForgotPassword = () => {
		const email = form.getFieldValue('email');
		const queryString = email ? `?email=${email}` : '';
		router.push(`/forgot-password${queryString}`);
	};

	const handleRouteToSignUp = () => {
		const email = form.getFieldValue('email');
		const queryString = email ? `?email=${email}` : '';
		router.push(`/sign-up${queryString}`);
	};

	return (
		<div
			className={`flex flex-col justify-between h-[calc(100vh-48px-env(safe-area-inset-top)-env(safe-area-inset-bottom))]`}
		>
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

				<Form className="mt-[30px]" form={form}>
					<Form.Item
						label={t('f1')}
						name="email"
						rules={[
							...requireRuleTs('f1'),
							{
								type: 'email',
								message: tc('invalidEmail'),
							},
						]}
					>
						<Input maxLength={COMMON_FIELD_MAX_LENGTH} disabled={loading} />
					</Form.Item>

					<Form.Item label={t('f2')} name="password" rules={requireRuleTs('f2')}>
						<Input
							type="password"
							maxLength={COMMON_FIELD_MAX_LENGTH}
							disabled={loading}
							onEnterPress={() => handleSubmit()}
						/>
					</Form.Item>

					<Form.Item>
						<Button
							loading={loading}
							block
							size="large"
							fontBold
							shape="rounded"
							onClick={() => handleSubmit()}
						>
							{t('f4')}
						</Button>
					</Form.Item>

					<Form.Item>
						<Button
							size="small"
							loading={loading}
							type="text"
							className="mx-auto block"
							onClick={handleRouteToForgotPassword}
						>
							{t('f5')}
						</Button>
					</Form.Item>
				</Form>
			</div>

			<div className="flex-center">
				<p
					className="text-xs
				text-fz-c2 dark:text-fz-c2"
				>
					{t('t3')}
				</p>
				<Button
					size="small"
					type="text"
					fontBold
					onClick={handleRouteToSignUp}
					loading={loading}
				>
					{t('t4')}
				</Button>
			</div>
		</div>
	);
};
export default PageLogin;
