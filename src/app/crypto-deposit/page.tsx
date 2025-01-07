'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const PageCryptoDeposit = () => {
	const router = useRouter();

	useEffect(() => {
		router.replace('/crypto-deposit/select-coin');
	}, []);

	return null;
};

export default PageCryptoDeposit;
