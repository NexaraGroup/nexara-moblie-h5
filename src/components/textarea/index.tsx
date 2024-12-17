'use client';

import { TextArea as AntdTextArea } from 'antd-mobile';
import { useImmer } from 'use-immer';
import { Props } from './index.d';
import styles from './index.module.scss';

export default function TextArea(props: React.PropsWithChildren<Props>) {
	const [focus, setFocus] = useImmer(false);

	const handleBlur = () => {
		setFocus(false);
		props.onBlur?.();
	};

	return (
		<AntdTextArea
			className={`${styles.wrapper} ${props.className} ${focus ? styles.focus : ''}`}
			disabled={props.disabled}
			value={props.value}
			onChange={props.onChange}
			maxLength={props.maxLength}
			onBlur={props.onBlur}
			onFocus={handleBlur}
			rows={props.rows}
		/>
	);
}
