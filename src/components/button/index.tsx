'use client';

import { useCallback, useMemo } from 'react';
import { Button as AntdButton } from 'antd-mobile';
import { Props } from './index.d';
import styles from './index.module.scss';

export default function Button(props: React.PropsWithChildren<Props>) {
	/**
	 * 因为 props onClick 不可控，可能里面会用到 props 里的依赖，eslint 采用保守做法，把整个 props 作为依赖
	 * 实际上，这里不需要 useCallback，不过还是留着吧
	 */
	const onClick = useCallback(() => {
		props.onClick();
	}, [props]);

	const fill = useMemo(() => {
		if (props.type === 'text' || props.type === 'link') {
			return 'none';
		} else if (props.type === 'dashed') {
			return 'outline';
		}
		return 'solid';
	}, [props.type]);

	const dashClass = useMemo(() => {
		if (props.type === 'dashed') {
			return styles.dashedWrapper;
		}
		return '';
	}, [props.type]);

	const textClass = useMemo(() => {
		if (props.type === 'text' || props.type === 'link') {
			return styles.textWrapper;
		}
		return '';
	}, [props.type]);

	return (
		<div
			className={`${styles.wrapper} ${dashClass} ${textClass} ${props.wrapperClassName ?? ''}`}
		>
			<AntdButton
				style={{
					textDecoration: props.type === 'link' ? 'underline' : 'none',
					fontWeight: props.fontBold ? 'bold' : 'normal',
					...props.style,
				}}
				className={props.className}
				block={props.block ?? false}
				shape={props.shape ?? 'default'}
				disabled={props.disabled}
				loading={props.loading}
				onClick={onClick}
				size={props.size ?? 'middle'}
				fill={fill}
			>
				{props.children}
			</AntdButton>
		</div>
	);
}
