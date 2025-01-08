'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { useImmer } from 'use-immer';
import { BlockChainItem } from '../index.d';

const PageCryptoWithdrawSelectNetwork = () => {
	const t = useTranslations('page-crypto-withdraw');
	const [blockChainList, setBlockChainList] = useImmer<BlockChainItem[]>([]);
	const searchParams = useSearchParams();
	const router = useRouter();

	useEffect(() => {
		if (!searchParams) return;
		let _blockChainList: string | BlockChainItem[] = searchParams.get('blockChainList') ?? '[]';
		_blockChainList = JSON.parse(_blockChainList);
		setBlockChainList(_blockChainList as BlockChainItem[]);
	}, [searchParams]);

	const handleSelectBlockChain = (index: number) => {
		const item = blockChainList[index];
		const blockChainId = item.blockChainId;
		const tokenId = searchParams.get('tokenId');
		const tokenName = searchParams.get('tokenName');
		const _blockChainList = JSON.stringify(blockChainList);
		router.replace(
			`/crypto-withdraw/withdraw?blockChainId=${blockChainId}&tokenId=${tokenId}&tokenName=${tokenName}&blockChainList=${_blockChainList}`,
		);
	};

	return (
		<>
			<ul className="mt-[6px] flex flex-col gap-[16px]">
				{blockChainList.map((item, index) => (
					<li
						className="flex gap-[12px] p-[9px_6px] items-center
						active:bg-bg-c3 dark:active:bg-bg-c3"
						key={item.blockChainId}
						onClick={() => handleSelectBlockChain(index)}
					>
						<img
							className="w-[32px] h-[32px] rounded-full"
							src={item.icon}
							alt={item.blockChainName}
						/>
						<div>
							<h2 className="text-sm">{item.blockChainName}</h2>
							<p
								className="text-xs
								text-fz-c2 dark:text-fz-c2"
							>
								{item.blockChainName}
							</p>
						</div>
					</li>
				))}
			</ul>
		</>
	);
};

export default PageCryptoWithdrawSelectNetwork;
