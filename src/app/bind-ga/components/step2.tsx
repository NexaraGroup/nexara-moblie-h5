'use client';

import Button from '@/components/button';
import { User } from '@/api';
import { isSuccess } from '@/utils/api';
import { to } from '@atom8/await-to-js';
import { Toast } from 'antd-mobile';
import Form from '@/components/form';
import Input from '@/components/input';
import useRequireRuleTs from '@/utils/useRequireRuleTs';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useImmer } from 'use-immer';

export default () => {
	const t = useTranslations('page-bind-ga');
	const requireRuleTs = useRequireRuleTs({ tsKey: 'page-bind-ga' });
	const router = useRouter();
	const [form] = Form.useForm<{ gaCode: string }>();
	const [loading, setLoading] = useImmer<boolean>(false);

	const handleVerify = async () => {
		await form.validateFields();
		setLoading(true);
		const [_, res] = await to(
			User.saveGaCodeUsingPost({
				gaCode: form.getFieldValue('gaCode'),
			}),
		);
		if (!isSuccess(res)) return;
		setLoading(false);
		router.replace(`/set-password?type=1`);
	};

	const handlePaste = async () => {
		try {
			const text = await navigator.clipboard.readText();
			form.setFieldValue('gaCode', text);
		} catch {
			Toast.show({
				content: t('m2'),
			});
		}
	};

	return (
		<>
			<h2
				className="text-[24px] font-bold mt-[12px]
			text-fz-c1 dark:text-fz-c1"
			>
				{t('t4')}
			</h2>
			<p
				className="text-sm mt-[6px]
			text-fz-c2 dark:text-fz-c2"
			>
				{t('t5')}
			</p>
			<Form form={form} className="mt-[30px]">
				<Form.Item label={t('t6')} name="gaCode" required rules={requireRuleTs('t6')}>
					<Input
						maxLength={6}
						disabled={loading}
						addonAfter={
							<Button
								className="py-[3px]"
								type="text"
								fontBold
								loading={loading}
								onClick={handlePaste}
							>
								{t('b3')}
							</Button>
						}
					/>
				</Form.Item>

				<Form.Item>
					<Button
						type="primary"
						shape="rounded"
						size="large"
						block
						fontBold
						loading={loading}
						onClick={handleVerify}
					>
						{t('b5')}
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};
