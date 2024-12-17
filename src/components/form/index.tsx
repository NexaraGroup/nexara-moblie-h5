import { useMemo } from 'react';
import { Form as FormAntd, type FormProps } from 'antd-mobile';
import omit from 'lodash/omit';
import styles from './index.module.scss';

const Form = (props: FormProps) => {
	const _props = useMemo(() => {
		return omit(props, ['className']);
	}, [props]);

	return (
		<div className={`${styles.wrapper} ${props.className ?? ''}`}>
			<FormAntd {..._props} />
		</div>
	);
};

Form.Item = FormAntd.Item;

Form.useForm = FormAntd.useForm;

Form.useWatch = FormAntd.useWatch;

export default Form;
