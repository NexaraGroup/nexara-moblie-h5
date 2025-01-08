'use client';

import { useEffect } from 'react';
import { Custody } from '@/api';
import { isSuccess } from '@/utils/api';
import { to } from '@atom8/await-to-js';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useImmer } from 'use-immer';
import { BlockChainItem } from '../index.d';

type TokenItem = {
	tokenId: number;
	tokenName: string;
	icon: string;
	tradingName: string;
	network: BlockChainItem[];
};

const PageCryptoWithdrawSelectCoin = () => {
	const router = useRouter();
	const t = useTranslations('page-crypto-withdraw');
	const [tokenList, setTokenList] = useImmer<TokenItem[]>([]);

	const handleSelectToken = (index: number) => {
		const item = tokenList[index];
		const tokenId = item.tokenId;
		const tokenName = item.tokenName;
		const blockChainList = item.network;
		router.push(
			`/crypto-withdraw/select-network?tokenId=${tokenId}&tokenName=${tokenName}&blockChainList=${JSON.stringify(blockChainList)}`,
		);
	};

	useEffect(() => {
		(async () => {
			const [_, res] = await to(Custody.getTokenListUsingPost({}));
			if (!isSuccess(res)) return;
			const allTokens: TokenItem[] = (res?.content ?? []).map((item) => {
				return {
					tokenId: item.tokenId!,
					tokenName: item.name!,
					icon: item.icon!,
					tradingName: item.tradingName!,
					network: [
						{
							blockChainName: item.blockChainName!,
							blockChainId: item.blockChainId!,
							icon: item.icon!,
						},
					],
				};
			});
			const showTokens: TokenItem[] = [];
			allTokens.forEach((token) => {
				const target = showTokens.find((item) => item.tokenName === token.tokenName);
				if (target) {
					target.network.push(token.network[0]);
				} else {
					showTokens.push(token);
				}
			});
			setTokenList(showTokens);
		})();
	}, []);

	return (
		<>
			<h3
				className="mt-[6px] text-xs text-fz-c2
						dark:text-fz-c2"
			>
				{t('t1')}
			</h3>
			<ul className="mt-[18px] flex flex-col gap-[16px]">
				{tokenList.map((item, index) => (
					<li
						className="flex gap-[12px] p-[9px_6px] items-center
						active:bg-bg-c3 dark:active:bg-bg-c3"
						key={item.tokenId}
						onClick={() => handleSelectToken(index)}
					>
						<img
							className="w-[32px] h-[32px] rounded-full"
							src={item.icon}
							alt={item.tokenName}
						/>
						<div>
							<h2 className="text-sm">{item.tokenName}</h2>
							<p
								className="text-xs text-fz-c2
								dark:text-fz-c2"
							>
								{item.tradingName}
							</p>
						</div>
					</li>
				))}
			</ul>
		</>
	);
};

export default PageCryptoWithdrawSelectCoin;
