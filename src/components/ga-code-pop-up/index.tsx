'use client';

import Button from '@/components/button';
import Popup from '@/components/pop-up';
import VerifyCodeInput from '@/components/verify-code-input';
export default (props: {
	visible: boolean;
	title?: string;
	description?: string;
	onClose: () => void;
	onOk: (code: string) => Promise<boolean>;
}) => {
	return (
		<Popup
			title={props.title}
			visible={props.visible}
			onClose={() => props.onClose()}
			maskClosable={false}
		>
			<p className="text-fz-c2 dark:text-fz-c2-dark text-sm">{props.description}</p>
			<VerifyCodeInput className="my-[18px]" onSubmit={props.onOk} />

			<Button
				type="link"
				// loading={msgLoading}
				className="block mx-auto"
				fontBold
				// disabled={receiving}
				// onClick={handleSendCode}
			>
				{/* {receiving ? `${countdown}s` : t('b1')} */}
				Resend
			</Button>
		</Popup>
	);
};
