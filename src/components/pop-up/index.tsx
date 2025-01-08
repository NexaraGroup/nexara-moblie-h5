'use client';

import Button from '@/components/button';
import { Popup as AntdPopup, SafeArea } from 'antd-mobile';
import { Props } from './index.d';
import styles from './index.module.scss';

export default function Popup(props: React.PropsWithChildren<Props>) {
	const handleMaskClick = () => {
		if (props.maskClosable !== false) {
			props.onClose?.();
		}
	};

	return (
		<AntdPopup
			className={`${styles.wrapper}`}
			visible={props.visible}
			onMaskClick={handleMaskClick}
		>
			<i className={styles.toolbar} onClick={props.onClose} />
			<h2 className={styles.title}>{props.title}</h2>
			<div className={styles.content}>{props.children}</div>
			{props.okText && (
				<Button
					onClick={() => props.onOk?.()}
					shape="rounded"
					size="large"
					block
					fontBold
					className="mt-[16px]"
				>
					{props.okText}
				</Button>
			)}
			<SafeArea position="bottom" />
		</AntdPopup>
	);
}
