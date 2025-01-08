'use client';

import { useEffect, useMemo } from 'react';
import { Custody } from '@/api';
import Button from '@/components/button';
import Form from '@/components/form';
import Input from '@/components/input';
import Select from '@/components/selector';
import { isSuccess } from '@/utils/api';
import useRequireRuleTs from '@/utils/useRequireRuleTs';
import { to } from '@atom8/await-to-js';
import { isNil } from 'lodash';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useImmer } from 'use-immer';
import { BlockChainItem } from '../index.d';
import SelectNetworkPopUp from './components/select-network-pop-up';
import { FormType } from './index.d';

enum PolicyType {
	MinWithdraw = 10,
	MaxWithdraw = 11,
}

const PageCryptoWithdrawWithdraw = () => {
	const t = useTranslations('page-crypto-withdraw');
	const requireRuleTs = useRequireRuleTs({ tsKey: 'page-crypto-withdraw' });
	const [selectNetworkVisible, setSelectNetworkVisible] = useImmer(false);
	const searchParams = useSearchParams();
	const [available, setAvailable] = useImmer<number | '-'>('-');
	const [policy, setPolicy] = useImmer<Record<PolicyType, string | number>>({
		[PolicyType.MinWithdraw]: '-',
		[PolicyType.MaxWithdraw]: '-',
	});
	const [blockChainList, setBlockChainList] = useImmer<G.Opts<number>[]>([]);
	const [form] = Form.useForm<FormType>();

	const handleWithdraw = async () => {
		await form.validateFields();
	};

	useEffect(() => {
		if (!searchParams || !form) return;
		try {
			const _blockChainList: BlockChainItem[] = JSON.parse(
				searchParams.get('blockChainList') ?? '[]',
			);
			const v: G.Opts<number>[] = _blockChainList.map((item) => ({
				label: item.blockChainName,
				value: item.blockChainId,
			}));
			setBlockChainList(v);
		} catch {}

		form.setFieldValue('blockchainId', Number(searchParams.get('blockChainId')));

		(async () => {
			const [_, res] = await to(
				Custody.getTokenPolicyUsingPost({
					tokenId: Number(searchParams.get('blockChainId')),
				}),
			);
			if (isSuccess(res)) {
				const configArr = res?.content ?? [];
				const minWithdraw = configArr.find(
					(item) => item.policyType === PolicyType.MinWithdraw,
				);
				const maxWithdraw = configArr.find(
					(item) => item.policyType === PolicyType.MaxWithdraw,
				);
				setPolicy({
					[PolicyType.MinWithdraw]: minWithdraw?.amount ?? '-',
					[PolicyType.MaxWithdraw]: maxWithdraw?.amount ?? '-',
				});
			}
		})();
	}, [searchParams, form]);

	const extremalValue = useMemo(() => {
		const minWithdraw = policy[PolicyType.MinWithdraw];
		const maxWithdraw = policy[PolicyType.MaxWithdraw];
		const _available = available === '-' ? 0 : available;

		let min = minWithdraw === '-' ? 0 : Number(minWithdraw);
		if (min > _available) min = _available;

		let max = maxWithdraw === '-' ? 0 : Number(maxWithdraw);
		if (_available < max) max = _available;

		return {
			min,
			max,
		};
	}, [policy, available]);

	return (
		<>
			<SelectNetworkPopUp
				options={blockChainList}
				form={form}
				visible={selectNetworkVisible}
				onClose={() => setSelectNetworkVisible(false)}
			/>
			<Form className="mt-[18px]" form={form}>
				<Form.Item label={t('t2')} name="blockchainId" required rules={requireRuleTs('t2')}>
					<Select<number>
						options={blockChainList}
						onClick={() => setSelectNetworkVisible(true)}
					/>
				</Form.Item>

				<Form.Item label={t('t4')} name="toAddress" required rules={requireRuleTs('t4')}>
					<Input />
				</Form.Item>

				<Form.Item
					label={t('t3')}
					name="amount"
					required
					rules={[
						{
							validator: (_, value) => {
								if (isNil(value)) {
									// return Promise.reject(new Error(t('t3')));
								}
								if (Number(value) <= 0) {
									// return Promise.reject(new Error(t('t3')));
								}
								return Promise.resolve();
							},
						},
					]}
				>
					<Input
						type="number"
						placeholder={`${extremalValue.min} ~ ${extremalValue.max}`}
						min={extremalValue.min}
						max={extremalValue.max}
						addonAfter={
							<Button
								type="text"
								fontBold
								className="py-[3px]"
								onClick={() => form.setFieldValue('amount', extremalValue.max)}
							>
								{t('t5')}
							</Button>
						}
					/>
				</Form.Item>
				<div
					className="text-sm text-right
					text-fz-c2 dark:text-fz-c2"
				>
					{t('t7')}:
					<span
						className="font-bold ml-[6px]
						text-fz-c1 dark:text-fz-c1"
					>
						{available}
					</span>
					<span
						className="font-bold ml-[3px]
						text-fz-c1 dark:text-fz-c1"
					>
						{searchParams.get('tokenName')}
					</span>
				</div>
			</Form>

			<div>
				<p className="text-center text-fz-c2 dark:text-dark-fz-c2">
					{t('t9')}{' '}
					<span className="text-fz-c1 dark:text-dark-fz-c1 font-bold ml-[3px]">1%</span>
				</p>
				<Button block fontBold className="mt-3" shape="rounded" onClick={handleWithdraw}>
					{t('t8')}
				</Button>
			</div>
		</>
	);
};

export default PageCryptoWithdrawWithdraw;
