'use client';

import { QRCodeSVG } from 'qrcode.react';
import { to } from '@atom8/await-to-js';
import { isSuccess } from '@/utils/api';
import { User } from '@/api/';
import { useEffect, useMemo } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import Button from '@/components/button';
import Input from '@/components/input';
import { Toast } from 'antd-mobile';
import { useTranslations } from 'next-intl';
import store2 from 'store2';
import { useImmer } from 'use-immer';

export default (props: { onNext: () => void }) => {
	const t = useTranslations('page-bind-ga');
	const [gaKey, setGaKey] = useImmer('');
	const qrCode = useMemo(() => {
		const loginInfo = store2.get('loginInfo') ?? {};
		return `otpauth://totp/User:${loginInfo.email}?issuer=NEXARA&secret=${gaKey}`;
	}, [gaKey]);

	useEffect(() => {
		(async () => {
			const [_, res] = await to(
				User.getGaSecretKeyUsingPost({}),
			);
			if (!isSuccess(res)) return;
			setGaKey(res?.content?.encryptGaKey ?? '');
		})()
	}, []);

	return (
		<>
			<h2
				className="text-[24px] font-bold mt-[12px]
			text-fz-c1 dark:text-fz-c1"
			>
				{t('t1')}
			</h2>
			<p
				className="text-sm mt-[6px]
			text-fz-c2 dark:text-fz-c2"
			>
				{t('t2')}
			</p>
			<p
				className="text-sm mt-[6px]
			text-fz-c2 dark:text-fz-c2"
			>
				{t('t3')}
			</p>

			<div
				className="w-[200px] h-[200px] flex-center rounded-lg mx-auto p-3 mt-[30px]
			bg-bg-c1 dark:bg-bg-c1-dark"
			>
				<QRCodeSVG
					value={qrCode}
					bgColor="#ffffff"
					width="90%"
					height="90%"
					className=" border-[10px]
					border-bd-c0 dark:border-border-c0-dark"
				/>
			</div>

			<Input
				className="mt-[12px]"
				value={gaKey}
				addonAfter={
					<CopyToClipboard text={gaKey} onCopy={() => Toast.show({ content: t('m1') })}>
						<Button type="text" fontBold className="py-[3px]" disabled={!gaKey}>
							{t('b1')}
						</Button>
					</CopyToClipboard>
				}
			/>

			<Button
				block
				size="large"
				shape="rounded"
				fontBold
				className="mt-[30px]"
				onClick={props.onNext}
			>
				{t('b2')}
			</Button>
		</>
	);
};
