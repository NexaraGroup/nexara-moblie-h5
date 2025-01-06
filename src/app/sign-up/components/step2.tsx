'use client';

import { useEffect } from 'react';
import { PageEmailVerifyType } from '@/global.enum';
import Button from '@/components/button';
import Checkbox from '@/components/checkbox';
import Form from '@/components/form';
import Input from '@/components/input';
import Selector from '@/components/selector';
import TextArea from '@/components/textarea';
import { COMMON_FIELD_MAX_LENGTH } from '@/config/base';
import { useRouter } from 'next/navigation';
import { Language, UserType } from '@/global.enum';
import useRequireRuleTs from '@/utils/useRequireRuleTs';
import { useTranslations } from 'next-intl';
import { useImmer } from 'use-immer';
import SelectLanguagePopUp from '../components/select-language-pop-up';
import { languageOptions } from '../const';
import type { CorporateForm, IndividualForm } from '../index.d';
import styles from '../index.module.scss';

interface Props {
	userType: UserType | undefined;
	invitationCode?: string;
	email?: string;
}

export default (props: Props) => {
	const t = useTranslations('page-sign-up');
	const tc = useTranslations();
	const requireRuleTs = useRequireRuleTs({ tsKey: 'page-sign-up' });
	const [form] = Form.useForm<(IndividualForm | CorporateForm) & { userType: UserType }>();
	const [loading, setLoading] = useImmer(false);
	const [languagePopupVisible, setLanguagePopupVisible] = useImmer(false);
	const router = useRouter();

	const handleOpenAgreement = (type: 'term' | 'privacy') => {
		if (loading) return;
		const env = process.env.DEPLOY_ENV;
		const termMap = {
			'prod': 'https://frontend-static-assets.hkbitex.com.hk/nexara/docs/Nexara_Custody_Online%20Application_Terms%20and%20Conditions.pdf',
			'uat': 'https://frontend-static-assets.894569.com/nexara/docs/Nexara_Custody_Online%20Application_Terms%20and%20Conditions.pdf',
		};
		const privacyMap = {
			'prod': 'https://uat-nexaradoc.s3.ap-east-1.amazonaws.com/uat-website-policy/Nexara_Privacy_Policy_Website.pdf',
			'uat': 'https://nexaradoc.s3.ap-east-1.amazonaws.com/Policy/Nexara_Privacy_Policy_Website.pdf',
		};
		const url =
			type === 'term'
				? (termMap[env as keyof typeof termMap] ?? termMap['prod'])
				: (privacyMap[env as keyof typeof privacyMap] ?? privacyMap['prod']);

		window.open(url, '_blank');
	};

	const handleSubmit = async () => {
		await form.validateFields();
		setLoading(true);
		const values = form.getFieldsValue();
		delete values.agreement;
		values.userType = props.userType!;
		router.replace(`/email-verify?type=${PageEmailVerifyType.Register}&invitationCode=${values.invitationCode}&email=${values.email}&formData=${encodeURIComponent(JSON.stringify(values))}`);
	};

	useEffect(() => {
		if (props.invitationCode && form)
			form.setFieldValue('invitationCode', props.invitationCode);

		if (props.email && form) form.setFieldValue('email', props.email);
	}, [form, props.invitationCode, props.email]);

	return (
		<>
			{props.userType === UserType.Individual ? (
				<Form form={form} disabled={loading}>
					<Form.Item
						label={t('t3')}
						name="invitationCode"
						disabled={!!props.invitationCode}
						required
						rules={requireRuleTs('t3')}
					>
						<Input maxLength={8} />
					</Form.Item>

					<Form.Item label={t('t4')} name="name" required rules={requireRuleTs('t4')}>
						<Input maxLength={COMMON_FIELD_MAX_LENGTH} />
					</Form.Item>

					<Form.Item
						label={t('t5')}
						name="country"
						required
						rules={requireRuleTs('t5')}
					>
						<Input maxLength={COMMON_FIELD_MAX_LENGTH} />
					</Form.Item>

					<Form.Item
						label={t('t6')}
						name="email"
						required
						rules={[
							...requireRuleTs('t6'),
							{
								type: 'email',
								message: tc('invalidEmail'),
							},
						]}
					>
						<Input maxLength={COMMON_FIELD_MAX_LENGTH} />
					</Form.Item>

					<Form.Item
						label={t('t7')}
						name="language"
						required
						initialValue={Language['en-US']}
					>
						<Selector<Language>
							onClick={() => setLanguagePopupVisible(true)}
							options={languageOptions}

						/>
					</Form.Item>

					<Form.Item
						name="agreement"
						className={styles.agreementWrapper}
						rules={[
							{
								message: t('e1'),
								validator: (_, value) =>
									value ? Promise.resolve() : Promise.reject(t('e1')),
							},
						]}
					>
						<Checkbox >
							{t.rich('f3', {
								Link: (chunks) => (
									<a
										className="cursor-pointer underline
									text-fz-c1 dark:text-fz-c1"
										onClick={() => handleOpenAgreement('term')}
									>
										{chunks}
									</a>
								),
								Link2: (chunks) => (
									<a
										className="cursor-pointer underline
									text-fz-c1 dark:text-fz-c1"
										onClick={() => handleOpenAgreement('privacy')}
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
							shape="rounded"
							fontBold
							size="large"
							loading={loading}
							onClick={handleSubmit}
						>
							{t('b3')}
						</Button>
					</Form.Item>
				</Form>
			) : (
				<Form form={form} disabled={loading}>
					<Form.Item
						label={t('t3')}
						name="invitationCode"
						disabled={!!props.invitationCode}
						required
						rules={requireRuleTs('t3')}
					>
						<Input maxLength={8}  />
					</Form.Item>

					<Form.Item
						label={t('t8')}
						name="name"
						required
						rules={requireRuleTs('t8')}
					>
						<Input maxLength={COMMON_FIELD_MAX_LENGTH}  />
					</Form.Item>

					<Form.Item
						label={t('t9')}
						name="country"
						required
						rules={requireRuleTs('t9')}
					>
						<Input maxLength={COMMON_FIELD_MAX_LENGTH}  />
					</Form.Item>

					<Form.Item label={t('t10')} name="businessNature">
						<Input maxLength={COMMON_FIELD_MAX_LENGTH}  />
					</Form.Item>

					<Form.Item
						label={t('t6')}
						name="email"
						required
						rules={[
							...requireRuleTs('t6'),
							{
								type: 'email',
								message: tc('invalidEmail'),
							},
						]}
					>
						<Input maxLength={COMMON_FIELD_MAX_LENGTH}  />
					</Form.Item>

					<Form.Item label={t('t11')} name="intentionOfService">
						<TextArea maxLength={COMMON_FIELD_MAX_LENGTH} rows={5}  />
					</Form.Item>

					<Form.Item
						label={t('t7')}
						name="language"
						required
						initialValue={Language['en-US']}
					>
						<Selector<Language>
							onClick={() => setLanguagePopupVisible(true)}
							options={languageOptions}

						/>
					</Form.Item>

					<Form.Item
						name="agreement"
						className={styles.agreementWrapper}
						rules={[
							{
								message: t('e1'),
								validator: (_, value) =>
									value ? Promise.resolve() : Promise.reject(t('e1')),
							},
						]}
					>
						<Checkbox >
							{t.rich('f3', {
								Link: (chunks) => (
									<a
										className="cursor-pointer underline
									text-fz-c1 dark:text-fz-c1"
										onClick={() => handleOpenAgreement('term')}
									>
										{chunks}
									</a>
								),
								Link2: (chunks) => (
									<a
										className="cursor-pointer underline
									text-fz-c1 dark:text-fz-c1"
										onClick={() => handleOpenAgreement('privacy')}
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
							shape="rounded"
							fontBold
							size="large"
							onClick={handleSubmit}
							loading={loading}
						>
							{t('b3')}
						</Button>
					</Form.Item>
				</Form>
			)}

			<SelectLanguagePopUp
				form={form}
				visible={languagePopupVisible}
				onClose={() => setLanguagePopupVisible(false)}
			/>
		</>
	);
};
