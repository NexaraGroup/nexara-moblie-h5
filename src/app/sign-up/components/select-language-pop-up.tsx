'use client';

import Form from '@/components/form';
import Popup from '@/components/pop-up';
import { Language } from '@/global.enum';
import { useTranslations } from 'next-intl';
import { languageOptions } from '../const';
import type { CorporateForm, IndividualForm } from '../index.d';

export default (props: {
	form: ReturnType<typeof Form.useForm<IndividualForm | CorporateForm>>[0];
	visible: boolean;
	onClose: () => void;
}) => {
	const t = useTranslations('page-sign-up');
	const handleSelectLanguage = (language: Language) => {
		props.form.setFieldValue('language', language);
		props.onClose();
	};

	return (
		<Popup title={t('t14')} visible={props.visible} onClose={() => props.onClose()}>
			{languageOptions.map((option) => (
				<p
					key={option.value}
					className="mt-6"
					onClick={() => handleSelectLanguage(option.value)}
				>
					{option.label}
				</p>
			))}
		</Popup>
	);
};
