'use client';

import Button from '@/components/button';
import Form from '@/components/form';
import Input from '@/components/input';
import useAutoSendCode from '@/utils/useAutoSendCode';
import useRequireRuleTs from '@/utils/useRequireRuleTs';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import store from 'store2';
import { useImmer } from 'use-immer';

export default () => {
	const t = useTranslations('page-bind-ga');
	const { countdown, receiving, clearCountdown } = useAutoSendCode({
		sendCodeAction: () => Promise.resolve(true),
	});
	const requireRuleTs = useRequireRuleTs({ tsKey: 'page-bind-ga' });
	const router = useRouter();
	const [form] = Form.useForm<{ gaCode: string; emailCode: string }>();
	const [loading, setLoading] = useImmer<boolean>(false);

	const handleVerify = async () => {
		await form.validateFields();
		clearCountdown();
		setLoading(true);
		// api
		setLoading(false);
		router.replace(`/set-password?type=1&email=${store.get('email')}`);
	};

	const handlePaste = async () => {
		const text = await navigator.clipboard.readText();
		form.setFieldValue('gaCode', text);
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

				<Form.Item
					label={t('t7', { email: store.get('email') })}
					name="emailCode"
					required
					rules={requireRuleTs('e1')}
				>
					<Input
						disabled={loading}
						maxLength={6}
						addonAfter={
							<Button loading={loading} className="py-[3px]" type="text" fontBold>
								{receiving ? `${countdown}s` : t('b4')}
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
