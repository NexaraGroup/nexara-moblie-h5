'use client';

import { useEffect, useRef } from 'react';
import { NO_AUTH_ROUTES } from '@/config/base';
import type { Locale } from '@/i18n/config';
import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider, SafeArea } from 'antd-mobile';
import enUS from 'antd-mobile/es/locales/en-US';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import zhHK from 'antd-mobile/es/locales/zh-HK';
import { ThemeProvider } from 'next-themes';
import { usePathname, useRouter } from 'next/navigation';
import { useImmer } from 'use-immer';

const px2rem = px2remTransformer({
	rootValue: Number(process.env.PX_TO_REM_ROOT_VALUE_WITH_DESIGN_WIDTH),
});

const localMap = new Map<Locale, typeof enUS | typeof zhCN | typeof zhHK>([
	['en-US', enUS],
	['zh-CN', zhCN],
	['zh-HK', zhHK],
]);

export default function RenderWrapper(props: React.PropsWithChildren<{ locale: Locale }>) {
	const [uiDepLoaded, setUiDepLoaded] = useImmer(false);
	const [authCheckLoaded, setAuthCheckLoaded] = useImmer(false);
	const pathname = usePathname();
	const router = useRouter();
	const didRenderCheck = useRef(false);

	useEffect(() => {
		if (didRenderCheck.current) return;
		didRenderCheck.current = true;

		if (NO_AUTH_ROUTES.includes(pathname)) {
			setAuthCheckLoaded(true);
		} else {
			// api 检查 token
			// 如果鉴定不成功，则统一取登录页面
			if (false) {
				const fullPath = window.location.href.split(window.location.origin)[1];
				const redirect = encodeURIComponent(fullPath);
				router.replace(`/sign-up?redirect=${redirect}`);
				setAuthCheckLoaded(true);
				return;
			}
			// 如果成功了，但是检测出来，没绑定 ga，则去绑定 ga 页面
			if (true) {
				const fullPath = window.location.href.split(window.location.origin)[1];
				const redirect = encodeURIComponent(fullPath);
				router.replace(`/bind-ga?redirect=${redirect}`);
				setAuthCheckLoaded(true);
				return;
			}
			setAuthCheckLoaded(true);
		}

		// @ts-ignore
		import('@/utils/amfe-flexible-custom.js').finally(() => {
			setUiDepLoaded(true); // 即使路由跳转，这个也不会受到影响
		});
	}, [pathname]);

	return (
		<>
			{uiDepLoaded && authCheckLoaded ? (
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
