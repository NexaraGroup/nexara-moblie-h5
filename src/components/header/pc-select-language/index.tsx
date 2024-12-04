'use client';

/**
 * @file
 * 这里用到了 useTransition 将语言切换的更新滞后
 */
import { useTransition } from 'react';
import languageFrameIcon from '@/assets/images/components/header/language-frame.png';
import Image from '@/components/image/';
import { setLocaleCookie } from '@/i18n/session';
import { ConfigProvider, Dropdown } from 'antd';

export default () => {
	const [_, startTransition] = useTransition();

	const switchLanguage = (newLocale: 'en' | 'zh-Hant' | 'zh') => {
		startTransition(() => {
			setLocaleCookie(newLocale);
		});
	};

	return (
		<div className="relative">
			<ConfigProvider
				theme={{
					components: {
						Dropdown: {
							colorBgElevated: 'rgb(32, 31, 33)',
							colorText: 'rgba(255, 255, 255, 0.88)',
							controlItemBgHover: 'rgb(255, 255, 255, 0.3)',
						},
					},
				}}
			>
				<Dropdown
					menu={{
						items: [
							{ label: 'English', key: 'en' },
							{ label: '繁体中文', key: 'zh-Hant' },
							{ label: '简体中文', key: 'zh' },
						],
						onClick: ({ key }) => switchLanguage(key as 'en' | 'zh-Hant' | 'zh'),
					}}
				>
					<div>
						<Image source={languageFrameIcon} />
					</div>
				</Dropdown>
			</ConfigProvider>
		</div>
	);
};
