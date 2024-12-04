/**
 * @file
 * 川哥需求：每次进入页面时，页面滚动到顶部
 */
'use client';

import { useEffect } from 'react';

export default ({ children }: { children: React.ReactNode }) => {
	useEffect(() => {
		if (!location.host.includes('localhost')) {
			window.history.scrollRestoration = 'manual';
		}
	}, []);
	return <>{children}</>;
};
