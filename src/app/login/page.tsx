'use client';

import Button from '@/components/button';
import Input from '@/components/input';
import { Form } from 'antd-mobile';
import { useTranslations } from 'next-intl';
import styles from './index.module.scss';

const PageLogin = () => {
	const t = useTranslations();
	const [form] = Form.useForm();

	const handleSubmit = async () => {
		await form.validateFields();
		const values = form.getFieldsValue();
		console.log(values);
	};

	return (
		<div className={`${styles.wrapper} flex flex-col justify-between h-[calc(100vh-48px)]`}>
			<div>
				<h2
					className="text-[28px] font-bold
			text-fz-c1 dark:text-fz-c1"
				>
					{t('loginPage.t1')}
				</h2>
				<p
					className="text-sm
			 text-fz-c2 dark:text-fz-c2"
				>
					{t('loginPage.t2')}
				</p>

				<Form className="mt-[30px]" form={form}>
					<Form.Item
						validateTrigger="onBlur"
						label={t('loginPage.f1')}
						name="email"
						rules={[
							{
								required: true,
								message: t('loginPage.f1_e1'),
							},
							{
								type: 'email',
								message: t('loginPage.f1_e2'),
							},
						]}
					>
						<Input maxLength={50} />
					</Form.Item>

					<Form.Item
						label={t('loginPage.f2')}
						validateTrigger="onBlur"
						name="password"
						rules={[
							{
								required: true,
								message: t('loginPage.f2_e1'),
							},
						]}
					>
						<Input type="password" maxLength={50} />
					</Form.Item>

					<Form.Item>
						<Button
							block
							size="large"
							fontBold
							shape="rounded"
							onClick={() => handleSubmit()}
						>
							{t('loginPage.f4')}
						</Button>
					</Form.Item>

					<Form.Item noStyle>
						<Button size="small" type="text" block>
							{t('loginPage.f5')}
						</Button>
					</Form.Item>
				</Form>
			</div>

			<div className="flex-center">
				<p className="text-fz-c2 dark:text-fz-c2 text-xs">{t('loginPage.t3')}</p>
				<Button size="small" type="text" block fontBold>
					{t('loginPage.t4')}
				</Button>
			</div>
		</div>
	);
};
export default PageLogin;
