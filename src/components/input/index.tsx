'use client';

import { useMemo, useRef } from 'react';
import { ComponentsInputEyeSvg } from '@/components/images/ComponentsInputEye';
import { ComponentsInputEyeCloseSvg } from '@/components/images/ComponentsInputEyeClose';
import { Input as AntdInput, type InputRef } from 'antd-mobile';
import { useImmer } from 'use-immer';
import { Props } from './index.d';
import styles from './index.module.scss';

const AddonAfterCp = (props: React.PropsWithChildren) => {
	return <div className="flex-none flex-center">{props.children}</div>;
};

const PasswordAddonAfter = (props: { onChange: (value: boolean) => void; disabled?: boolean }) => {
	const [isShow, setIsShow] = useImmer(false);

	const handleVisibleChange = (value: boolean) => {
		if (props.disabled) return;
		setIsShow(value);
		props.onChange?.(value);
	};

	return isShow ? (
		<AddonAfterCp>
			<ComponentsInputEyeCloseSvg
				className={`w-[24px] h-[24px] fill-fz-c1 dark:fill-fz-c1 ${props.disabled ? 'opacity-50' : ''}`}
				onClick={() => handleVisibleChange(false)}
			/>
		</AddonAfterCp>
	) : (
		<AddonAfterCp>
			<ComponentsInputEyeSvg
				fill="none"
				className={`w-[24px] h-[24px] stroke-fz-c1 dark:stroke-fz-c1 ${props.disabled ? 'opacity-50' : ''}`}
				onClick={() => handleVisibleChange(true)}
			/>
		</AddonAfterCp>
	);
};

export default function Input(props: React.PropsWithChildren<Props>) {
	const [type, setType] = useImmer(props.type);
	const [focus, setFocus] = useImmer(false);
	const inputRef = useRef<InputRef>(null);
	const addonAfter = useMemo(() => {
		if (props.type === 'password') {
			return (
				<PasswordAddonAfter
					onChange={(v) => setType(v ? 'text' : 'password')}
					disabled={props.disabled}
				/>
			);
		}
		if (props.addonAfter) {
			return <AddonAfterCp>{props.addonAfter}</AddonAfterCp>;
		}
		return null;
	}, [props.type, props.addonAfter, props.disabled]);

	const handleBlur = () => {
		setFocus(false);
		props.onBlur?.();
	};

	const handleEnterPress = () => {
		inputRef.current?.blur();
		props.onEnterPress?.();
	};

	return (
		<div className={`${styles.wrapper} ${props.className} ${focus ? styles.focus : ''}`}>
			<AntdInput
				ref={inputRef}
				onEnterPress={handleEnterPress}
				placeholder={props.placeholder}
				type={type}
				autoComplete="current-password"
				disabled={props.disabled}
				value={props.value}
				onChange={props.onChange}
				maxLength={props.maxLength}
				onFocus={() => setFocus(true)}
				onBlur={handleBlur}
				min={props.min}
				max={props.max}
			/>
			{addonAfter}
		</div>
	);
}
