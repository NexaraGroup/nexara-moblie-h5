import { useEffect, useTransition } from 'react';
import { setLocaleCookie } from '@/i18n/session';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useImmer } from 'use-immer';
import { languageMap, options as optionsSource, pathMap } from './const';

type Path = keyof typeof pathMap;

export default (props: { visible: boolean; onClose: () => void }) => {
	const t = useTranslations('components.header');
	const [_, startTransition] = useTransition();
	const pathname: Path = usePathname() as Path;
	const [active, setActive] = useImmer<undefined | (typeof pathMap)[Path]>(undefined);
	const router = useRouter();
	const locale = useLocale();

	const handleRoute = (value: (typeof pathMap)[Path]) => {
		setActive(value);
		router.push('/' + value);
		props.onClose();
	};

	const handleLanguage = (newLocale: 'en' | 'zh-Hant' | 'zh') => {
		startTransition(() => {
			setLocaleCookie(newLocale);
		});
		props.onClose();
	};

	useEffect(() => {
		setActive(pathMap[pathname]);
	}, [pathname]);

	return (
		<div
			className={`${props.visible ? 'visible opacity-100' : 'invisible opacity-0'} transition-all duration-300`}
		>
			<i
				className="fixed position-full mask-bg-color z-mask"
				onClick={() => props.onClose()}
			/>
			<ul
				className={`fixed left-[50%] right-0 bottom-0 top-[4.5rem] bg-bg-secondary z-overlay-content px-6 transition-transform duration-300 ${props.visible ? 'translate-x-0' : 'translate-x-full'}`}
			>
				{optionsSource.map((option) => (
					<li
						key={option.value}
						className={`py-3 my-3 ${active === option.value ? 'font-bold' : 'text-fz-secondary'}`}
						onClick={() => handleRoute(option.value)}
					>
						{t(option.label)}
					</li>
				))}
				<li className="border-t border-bd-muted" />
				{Object.entries(languageMap).map(([key, label]) => (
					<li
						key={key}
						className={`py-3 my-3 ${locale === key ? 'font-bold text-fz-primary' : 'text-fz-secondary'}`}
						onClick={() => handleLanguage(key as 'en' | 'zh-Hant' | 'zh')}
					>
						{label}
					</li>
				))}
			</ul>
		</div>
	);
};
