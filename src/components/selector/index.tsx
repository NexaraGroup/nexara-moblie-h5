'use client';

import { useEffect, useMemo } from 'react';
import { Input as AntdInput } from 'antd-mobile';
import { RightOutline } from 'antd-mobile-icons';
import isNil from 'lodash/isNil';
import { Props } from './index.d';
import styles from './index.module.scss';

const AddonAfterCp = (props: React.PropsWithChildren) => {
	return <div className="flex-none flex-center">{props.children}</div>;
};

export default function Selector<T = string>(props: React.PropsWithChildren<Props<T>>) {
	useEffect(() => {
		props.onChange?.(props.value as T);
	}, [props.value]);

	const showValue = useMemo(() => {
		if (isNil(props.value)) return '';
		if (props.options) {
			const option = props.options.find((item) => item.value === props.value);
			if (option) {
				return option.label;
			}
			return '';
		}
		return '';
	}, [props.value, props.options]);

	const handleClick = () => {
		if (props.disabled) return;
		props.onClick?.();
	};

	return (
		<div
			className={`${styles.wrapper} ${props.className ?? ''} relative ${
				props.disabled ? 'opacity-50' : ''
			}`}
		>
			<i
				className="absolute position-full bg-transparent cursor-pointer"
				onClick={handleClick}
			/>
			<AntdInput value={showValue} />
			{<AddonAfterCp>{<RightOutline />}</AddonAfterCp>}
		</div>
	);
}
