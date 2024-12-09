'use client';

import { useMemo } from 'react';
import { ComponentsInputEyeSvg } from '@/components/images/ComponentsInputEye';
import { ComponentsInputEyeCloseSvg } from '@/components/images/ComponentsInputEyeClose';
import { Input as AntdInput } from 'antd-mobile';
import { useImmer } from 'use-immer';
import { Props } from '.';
import styles from './index.module.scss';

const AddonAfterCp = (props: React.PropsWithChildren) => {
	return <div className="flex-none">{props.children}</div>;
};

const PasswordAddonAfter = (props: { onChange: (value: boolean) => void }) => {
	const [isShow, setIsShow] = useImmer(false);

	const handleVisibleChange = (value: boolean) => {
		setIsShow(value);
		props.onChange?.(value);
	};

	return isShow ? (
		<AddonAfterCp>
			<ComponentsInputEyeCloseSvg
				className="w-[24px] h-[24px] fill-fz-c1 dark:fill-fz-c1-dark"
				onClick={() => handleVisibleChange(false)}
			/>
		</AddonAfterCp>
	) : (
		<AddonAfterCp>
			<ComponentsInputEyeSvg
				fill="none"
				className="w-[24px] h-[24px] stroke-fz-c1 dark:stroke-fz-c1-dark"
				onClick={() => handleVisibleChange(true)}
			/>
		</AddonAfterCp>
	);
};

export default function Button(props: React.PropsWithChildren<Props>) {
	const [type, setType] = useImmer(props.type);
	const [focus, setFocus] = useImmer(false);
	const addonAfter = useMemo(() => {
		if (props.type === 'password') {
			return <PasswordAddonAfter onChange={(v) => setType(v ? 'text' : 'password')} />;
		}
		if (props.addonAfter) {
			return <AddonAfterCp>{props.addonAfter}</AddonAfterCp>;
		}
		return null;
	}, [props.type, props.addonAfter]);

	return (
		<div className={`${props.wrapperClassName} ${styles.wrapper} ${focus ? styles.focus : ''}`}>
			<AntdInput
				type={type}
				disabled={props.disabled}
				value={props.value}
				onChange={props.onChange}
				maxLength={props.maxLength}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
			/>
			{addonAfter}
		</div>
	);
}
