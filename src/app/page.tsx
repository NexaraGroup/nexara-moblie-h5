'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function IndexPage() {
	const router = useRouter();

	useEffect(() => {
		// 这里，其实可以通过中间件来实现，不过这里就简单处理了
		router.replace('/home');
	}, [router]);

	return null;
}
