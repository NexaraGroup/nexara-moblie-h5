'use client';

import Button from '@/components/button';
import Checkbox from '@/components/checkbox';
import Form from '@/components/form';
import Input from '@/components/input';
import { useTranslations } from 'next-intl';
import type { FormType } from './index.d';
import styles from './index.module.scss';

const PageLogin = () => {
	const t = useTranslations('page-login');
	const [form] = Form.useForm<FormType>();

	const handleSubmit = async () => {
		await form.validateFields();
		const values = form.getFieldsValue();
		console.log(values);
	};

	const handleOpenAgreement = (e: React.MouseEvent<HTMLAnchorElement>) => {
		window.open('https://www.baidu.com', '_blank');
		e.preventDefault();
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
						validateTrigger="onBlur"
						label={t('f1')}
						name="email"
						rules={[
							{
								required: true,
								message: t('f1_e1'),
							},
							{
								type: 'email',
								message: t('f1_e2'),
							},
						]}
					>
						<Input maxLength={50} />
					</Form.Item>

					<Form.Item
						label={t('f2')}
						validateTrigger="onBlur"
						name="password"
						rules={[
							{
								required: true,
								message: t('f2_e1'),
							},
						]}
					>
						<Input type="password" maxLength={50} />
					</Form.Item>

					<Form.Item
						name="agreement"
						className={styles.agreementWrapper}
						rules={[
							{
								message: t('f3_e1'),
								validator: (_, value) =>
									value ? Promise.resolve() : Promise.reject(t('f3_e1')),
							},
						]}
					>
						<Checkbox>
							{t.rich('f3', {
								Link: (chunks) => (
									<a
										className="cursor-pointer underline
									text-fz-c1 dark:text-fz-c1"
										onClick={handleOpenAgreement}
									>
										{chunks}
									</a>
								),
							})}
						</Checkbox>
					</Form.Item>

					<Form.Item>
						<Button
							block
							size="large"
							fontBold
							shape="rounded"
							onClick={() => handleSubmit()}
						>
							{t('f4')}
						</Button>
					</Form.Item>

					<Form.Item noStyle>
						<Button size="small" type="text" className="mx-auto block">
							{t('f5')}
						</Button>
					</Form.Item>
				</Form>
			</div>

			<div className="flex-center">
				<p className="text-fz-c2 dark:text-fz-c2 text-xs">{t('t3')}</p>
				<Button size="small" type="text" fontBold>
					{t('t4')}
				</Button>
			</div>
		</div>
	);
};
export default PageLogin;
