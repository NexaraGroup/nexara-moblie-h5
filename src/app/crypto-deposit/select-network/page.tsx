'use client';

import { useEffect } from 'react';
import { ExclamationCircleOutline } from 'antd-mobile-icons';
import { useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { useImmer } from 'use-immer';

type BlockChainItem = {
	blockChainName: string;
	icon: string;
	blockChainId: number;
};

const PageCryptoDepositSelectNetwork = () => {
	const t = useTranslations('page-crypto-deposit');
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
		const blockChainName = item.blockChainName;
		const tokenId = searchParams.get('tokenId');
		const tokenName = searchParams.get('tokenName');
		router.replace(
			`/crypto-deposit/deposit?blockChainId=${blockChainId}&tokenId=${tokenId}&tokenName=${tokenName}&blockChainName=${blockChainName}`,
		);
	};

	return (
		<>
			<div
				className="flex p-[6px_12px] gap-[12px] text-sm items-center
			text-fz-c0 dark:text-fz-c0 bg-bg-c1 dark:bg-bg-c1"
			>
				<ExclamationCircleOutline className="text-[30px]" />
				<p>{t('t2')}</p>
			</div>

			<ul className="mt-[18px] flex flex-col gap-[16px]">
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

export default PageCryptoDepositSelectNetwork;
