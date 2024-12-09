'use client';

import Button from '@/components/button';
import { Popup as AntdPopup, SafeArea } from 'antd-mobile';
import { Props } from './index.d';
import styles from './index.module.scss';

export default function Popup(props: React.PropsWithChildren<Props>) {
	return (
		<AntdPopup
			className={`${styles.wrapper}`}
			visible={props.visible}
			onMaskClick={props.onClose}
		>
			<i onClick={props.onClose} />
			<h2>{props.title}</h2>
			{props.children}
			{props.okText && (
				<Button
					onClick={() => props.onOk?.()}
					shape="rounded"
					size="large"
					block
					fontBold
					wrapperClassName="mt-[16px]"
				>
					{props.okText}
				</Button>
			)}
			<SafeArea position="bottom" />
		</AntdPopup>
	);
}
