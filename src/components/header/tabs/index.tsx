/**
 * @file
 * 封装了路由的逻辑的业务组件
 */
'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useImmer } from 'use-immer';
import { options as optionsSource, pathMap } from './const';
import Tabs from './controlled';

type Path = keyof typeof pathMap;

export default (props: { className?: string }) => {
	const router = useRouter();
	const pathname: Path = usePathname() as Path;
	const [value, setValue] = useImmer<(typeof pathMap)[Path]>('home');
	const [options, setOptions] = useImmer(optionsSource);
	const t = useTranslations('components.header');

	const handleChange = (value: (typeof pathMap)[Path]) => {
		setValue(value);
		router.push('/' + value);
	};

	useEffect(() => {
		setOptions((v) => {
			v.forEach((item, index) => {
				item.label = t(optionsSource[index].label) as (typeof options)[number]['label'];
			});
		});
	}, [t]);

	useEffect(() => {
		setValue(pathMap[pathname]);
	}, [pathname]);

	return (
		<div className={props.className ?? ''}>
			<Tabs options={options} value={value} onChange={handleChange} />
		</div>
	);
};
