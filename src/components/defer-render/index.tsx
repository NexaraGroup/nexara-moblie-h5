'use client';

import { useEffect, useState } from 'react';
import type { Locale } from '@/i18n/config';
import { ConfigProvider } from 'antd-mobile';
import enUS from 'antd-mobile/es/locales/en-US';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import zhHK from 'antd-mobile/es/locales/zh-HK';

export default function RenderWrapper(props: React.PropsWithChildren<{ locale: Locale }>) {
	const [loaded, setLoaded] = useState(false);
	const localMap = new Map<Locale, typeof enUS | typeof zhCN | typeof zhHK>([
		['en-US', enUS],
		['zh-CN', zhCN],
		['zh-HK', zhHK],
	]);

	useEffect(() => {
		import('amfe-flexible').finally(() => {
			setLoaded(true);
		});
	}, []);

	return (
		<>
			{loaded ? (
				<ConfigProvider locale={localMap.get(props.locale)}>
					{props.children}
				</ConfigProvider>
			) : null}
		</>
	);
}
