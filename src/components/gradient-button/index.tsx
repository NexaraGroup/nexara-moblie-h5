import type React from 'react';
import { useMemo } from 'react';
import styles from './index.module.scss';

type Props = {
	width?: number;
	height?: number;
	fontSize?: number | string;
	fontWeight?: 'normal' | 'bold';
	className?: string;
	onClick?: () => void;
};

export default (props: React.PropsWithChildren<Props>) => {
	const style = useMemo(() => {
		const result: React.CSSProperties = {};
		(['width', 'height', 'fontSize', 'fontWeight'] as const).forEach((key) => {
			if (!props[key]) return;
			result[key] = props[key];
		});
		return result;
	}, [props]);

	return (
		<button
			style={style}
			className={`${styles.button} ${props.className ?? ''}`}
			onClick={() => props.onClick?.()}
		>
			{props.children}
		</button>
	);
};
