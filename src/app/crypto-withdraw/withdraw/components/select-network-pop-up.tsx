'use client';

import Form from '@/components/form';
import Popup from '@/components/pop-up';
import { useTranslations } from 'next-intl';
import { FormType } from '../index.d';

export default (props: {
	options: G.Opts<number>[];
	form: ReturnType<typeof Form.useForm<FormType>>[0];
	visible: boolean;
	onClose: () => void;
}) => {
	const t = useTranslations('page-crypto-withdraw');
	const handleSelect = (v: number) => {
		props.form.setFieldValue('blockchainId', v);
		props.onClose();
	};

	return (
		<Popup title={t('t10')} visible={props.visible} onClose={() => props.onClose()}>
			{props.options.map((option) => (
				<p
					key={option.value}
					className="mt-1 py-3 active-bg"
					onClick={() => handleSelect(option.value)}
				>
					{option.label}
				</p>
			))}
		</Popup>
	);
};
