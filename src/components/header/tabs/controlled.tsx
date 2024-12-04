'use client';

import React, { useEffect, useRef } from 'react';
import { basePxToRem } from '@/config/base';
import useGlobal from '@/store/global';
import Big from 'big.js';
import throttle from 'lodash.throttle';
import { useImmer } from 'use-immer';
import { TabOption, TabsProps } from './index.d';
import styles from './index.module.scss';

function Tabs({ options, value, onChange }: TabsProps<readonly TabOption[]>) {
	const [activeTabIndex, setActiveTabIndex] = useImmer(0);
	const { pageZoom } = useGlobal();
	const tabsRef = useRef<(HTMLAnchorElement | null)[]>([]);
	const rootFontSize = useRef(basePxToRem);
	const [rerender, setRerender] = useImmer(0);
	const underlineRef = useRef<HTMLDivElement>(null);
	const [inited, setInited] = useImmer(false);

	const handleAnimateUnderline = (callback: () => void) => {
		/**
		 * 2 个动画帧
		 * 第一个 调用确保我们等待下一个动画帧
		 * 第二个 实际回调函数推迟到再下一个帧，确保所有的 DOM 更新和布局计算都已经完成
		 */
		requestAnimationFrame(() => {
			requestAnimationFrame(callback);
		});
	};

	const handleTabClick = (index: number) => {
		setActiveTabIndex(index);
		onChange(options[index].value);
	};

	useEffect(() => {
		const activeIndex = options.findIndex((option) => option.value === value);
		setActiveTabIndex(activeIndex);
	}, [value, options]);

	useEffect(() => {
		const handleResize = throttle(() => {
			const newRootFontSize = parseFloat(
				window.getComputedStyle(document.documentElement).fontSize,
			);
			if (newRootFontSize !== rootFontSize.current) {
				rootFontSize.current = newRootFontSize;
				setRerender((v) => v + 1);
			}
		}, 200);

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			handleResize.cancel();
		};
	}, []);

	useEffect(() => {
		handleAnimateUnderline(() => {
			if (underlineRef.current && tabsRef.current[activeTabIndex]) {
				const activeTab = tabsRef.current[activeTabIndex];
				const tabRect = activeTab.getBoundingClientRect();
				const containerRect = activeTab.parentElement!.getBoundingClientRect();
				// 获取根元素的字体大小
				const rootFontSize = parseFloat(
					window.getComputedStyle(document.documentElement).fontSize,
				);
				const zoomInverse = new Big(1).div(pageZoom).toFixed(2);
				const underlineWidth = rootFontSize * 1.35;

				const leftPosition =
					(tabRect.left - containerRect.left + (tabRect.width - underlineWidth) / 2) *
					Number(zoomInverse);
				underlineRef.current.style.transform = `translateX(${leftPosition}px)`;
				underlineRef.current.style.width = `${underlineWidth}px`;
				setInited(true);
			}
		});
	}, [activeTabIndex, options, rerender, pageZoom]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.itemWrapper}>
				{options.map((option, index) => (
					<a
						key={option.value}
						ref={(el) => {
							if (el) tabsRef.current[index] = el;
						}}
						className={`${styles.tab} ${index === activeTabIndex ? styles.active : ''}`}
						onClick={() => handleTabClick(index)}
					>
						{option.label}
					</a>
				))}
			</div>
			<div
				ref={underlineRef}
				className={`${styles.underline} ${inited ? styles.underlineTransition : ''}`}
			/>
		</div>
	);
}

// TODO，进一步看看这个文件的类型，以及这个断言
export default Tabs as <T extends readonly TabOption[]>(props: TabsProps<T>) => React.ReactElement;
