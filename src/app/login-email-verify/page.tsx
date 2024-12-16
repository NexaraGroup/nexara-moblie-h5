'use client';

import Button from '@/components/button';
import Form from '@/components/form';
import Input from '@/components/input';
import { Checkbox } from 'antd-mobile';
import { useTranslations } from 'next-intl';
import type { FormType } from './index.d';

const PageLoginEmailVerify = () => {
	const t = useTranslations('page-login-email-verify');
	const [form] = Form.useForm<FormType>();

	const handleSubmit = async () => {
		await form.validateFields();
		const values = form.getFieldsValue();
		console.log(values);
	};
	return '123';
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
				{t.rich('t2', {
					Email: () => (
						<span className="text-fz-c1 dark:text-fz-c1 font-bold">test@test.com</span>
					),
				})}
			</p>

			<div></div>

			<p className="text-sm text-fz-c2 dark:text-fz-c2 mt-[30px] text-center">{t('t3')}</p>

			<Button type="link" size="large" className="block mx-auto p-0 mt-[12px]" fontBold>
				{t('b1')}
			</Button>
		</>
	);
};
export default PageLoginEmailVerify;
