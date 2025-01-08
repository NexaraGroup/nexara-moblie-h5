'use client';

import { QRCodeSVG } from 'qrcode.react';
import { useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Custody } from '@/api';
import Button from '@/components/button';
import Form from '@/components/form';
import Input from '@/components/input';
import { isSuccess } from '@/utils/api';
import { to } from '@atom8/await-to-js';
import { Toast } from 'antd-mobile';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useImmer } from 'use-immer';

enum PolicyType {
	MinDeposit = 21,
	DepositConfirms = 22,
	WithdrawConfirms = 13,
}

const PageCryptoDepositDeposit = () => {
	const t = useTranslations('page-crypto-deposit');
	const searchParams = useSearchParams();
	const [address, setAddress] = useImmer<string>('');
	const [policy, setPolicy] = useImmer<Record<PolicyType, string | number>>({
		[PolicyType.MinDeposit]: '-',
		[PolicyType.DepositConfirms]: '-',
		[PolicyType.WithdrawConfirms]: '-',
	});

	useEffect(() => {
		(async () => {
			if (!searchParams) return;
			const [_, res] = await to(
				Custody.generateDepositAddressUsingPost({
					blockchainId: Number(searchParams.get('blockChainId')),
				}),
			);
			if (isSuccess(res)) {
				const { address } = res?.content ?? {};
				setAddress(address ?? '');
			}

			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const [configError, configRes] = await to(
				Custody.getTokenPolicyUsingPost({
					tokenId: Number(searchParams.get('blockChainId')),
				}),
			);
			if (isSuccess(configRes)) {
				const configArr = configRes?.content ?? [];
				const minDeposit = configArr.find(
					(item) => item.policyType === PolicyType.MinDeposit,
				);
				const depositConfirms = configArr.find(
					(item) => item.policyType === PolicyType.DepositConfirms,
				);
				const withdrawConfirms = configArr.find(
					(item) => item.policyType === PolicyType.WithdrawConfirms,
				);
				setPolicy({
					[PolicyType.MinDeposit]: minDeposit?.amount ?? '-',
					[PolicyType.DepositConfirms]: depositConfirms?.amount ?? '-',
					[PolicyType.WithdrawConfirms]: withdrawConfirms?.amount ?? '-',
				});
			}
		})();
	}, [searchParams]);

	return (
		<>
			<h3 className="text-fz-c2 dark:text-fz-c2 text-xs text-center">{t('t6')}</h3>
			<h2 className="mt-[12px] font-bold text-center">
				{searchParams.get('blockChainName')}
			</h2>

			<div
				className="w-[200px] h-[200px] flex-center rounded-lg mx-auto p-3 mt-[18px]
			bg-bg-c1 dark:bg-bg-c1-dark"
			>
				<QRCodeSVG
					value={address}
					bgColor="#ffffff"
					width="90%"
					height="90%"
					className=" border-[10px]
					border-bd-c0 dark:border-border-c0-dark"
				/>
			</div>

			<Form className="mt-[18px]">
				<Form.Item label={t('t4')}>
					<Input
						value={address}
						disabled={!address}
						addonAfter={
							<CopyToClipboard
								text={address}
								onCopy={() => Toast.show({ content: t('m1') })}
							>
								<Button
									type="text"
									fontBold
									className="py-[3px]"
									disabled={!address}
								>
									{t('t5')}
								</Button>
							</CopyToClipboard>
						}
					/>
				</Form.Item>
			</Form>

			<ul className="mt-[18px] flex flex-col gap-[16px]">
				<li className="flex justify-between text-sm">
					<p className="text-fz-c2 dark:text-fz-c2">{t('t9')}</p>
					<p className="font-bold text-fz-c1 dark:text-fz-c1">
						{policy[PolicyType.DepositConfirms]}
					</p>
				</li>

				<li className="flex justify-between text-sm">
					<p className="text-fz-c2 dark:text-fz-c2">{t('t10')}</p>
					<p className="font-bold text-fz-c1 dark:text-fz-c1">
						{policy[PolicyType.WithdrawConfirms]}
					</p>
				</li>

				<li className="flex justify-between text-sm">
					<p className="text-fz-c2 dark:text-fz-c2">{t('t3')}</p>
					<p className="font-bold text-fz-c1 dark:text-fz-c1">
						{policy[PolicyType.MinDeposit]} {searchParams.get('tokenName')}
					</p>
				</li>
			</ul>

			<p className="mt-[30px] text-fz-c2 dark:text-fz-c2 text-xs">{t('t7')}</p>
			<p className="mt-[18px] text-fz-c2 dark:text-fz-c2 text-xs">{t('t8')}</p>
		</>
	);
};

export default PageCryptoDepositDeposit;
