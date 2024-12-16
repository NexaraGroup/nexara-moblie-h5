'use client';

import { useEffect } from 'react';
import type { Locale } from '@/i18n/config';
import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider, SafeArea } from 'antd-mobile';
import enUS from 'antd-mobile/es/locales/en-US';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import zhHK from 'antd-mobile/es/locales/zh-HK';
import { ThemeProvider } from 'next-themes';
import { useImmer } from 'use-immer';

const px2rem = px2remTransformer({
	rootValue: Number(process.env.PX_TO_REM_ROOT_VALUE_WITH_DESIGN_WIDTH),
});

export default function RenderWrapper(props: React.PropsWithChildren<{ locale: Locale }>) {
	const [loaded, setLoaded] = useImmer(false);
	const localMap = new Map<Locale, typeof enUS | typeof zhCN | typeof zhHK>([
		['en-US', enUS],
		['zh-CN', zhCN],
		['zh-HK', zhHK],
	]);

	useEffect(() => {
		// @ts-ignore
		import('@/utils/amfe-flexible-custom.js').finally(() => {
			setLoaded(true);
		});
	}, []);

	return (
		<>
			{loaded ? (
				<StyleProvider transformers={[px2rem]}>
					<ThemeProvider defaultTheme="light">
						<ConfigProvider locale={localMap.get(props.locale)}>
							<SafeArea position="top" />
							<div className="p-[24px]">{props.children}</div>
							<SafeArea position="bottom" />
						</ConfigProvider>
					</ThemeProvider>
				</StyleProvider>
			) : null}
		</>
	);
}
