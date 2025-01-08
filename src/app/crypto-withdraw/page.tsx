'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const PageCryptoWithdraw = () => {
	const router = useRouter();

	useEffect(() => {
		router.replace('/crypto-withdraw/select-coin');
	}, []);

	return null;
};

export default PageCryptoWithdraw;
