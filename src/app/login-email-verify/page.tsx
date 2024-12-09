'use client';

import Button from '@/components/button';
import Form from '@/components/form';
import Input from '@/components/input';
import { Checkbox } from 'antd-mobile';
import { useTranslations } from 'next-intl';
import type { FormType } from '.';

const PageLogin = () => {
	const t = useTranslations('loginPage');
	const [form] = Form.useForm<FormType>();

	const handleSubmit = async () => {
		await form.validateFields();
		const values = form.getFieldsValue();
		console.log(values);
	};

	return (
		<div className={`flex flex-col justify-between h-[calc(100vh-48px)]`}>
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
						validateTrigger="onChange"
						name="agreement"
						rules={[
							{
								required: true,
								message: t('f2_e1'),
							},
						]}
					>
						<Checkbox
							value="banana"
							icon={(checked) =>
								checked ? (
									<i
										className="rounded-[4px] border w-[20px] h-[20px] block
									border-bd-c2 dark:border-bd-c2"
									/>
								) : (
									<div
										className="rounded-[4px] border w-[20px] h-[20px] block flex-center
									border-bd-c2 dark:border-bd-c2"
									></div>
								)
							}
						>
							自定义图标
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
						<Button size="small" type="text" block>
							{t('f5')}
						</Button>
					</Form.Item>
				</Form>
			</div>

			<div className="flex-center">
				<p className="text-fz-c2 dark:text-fz-c2 text-xs">{t('t3')}</p>
				<Button size="small" type="text" block fontBold>
					{t('t4')}
				</Button>
			</div>
		</div>
	);
};
export default PageLogin;
