'use client';

import { useEffect, useState } from 'react';
import { I18N_COOKIE_NAME } from '@/config/base';
import useGlobalStore from '@/store/global';
// import { message } from 'antd';
import Big from 'big.js';
// import { useTranslations } from 'next-intl';
import style from './index.module.scss';

type ScaleType = 'in' | 'out';

export default (props: { className?: string }) => {
	// const t = useTranslations('components.scaler');
	const { setPageZoom } = useGlobalStore();
	const [currentZoomText, setCurrentZoomText] = useState('');
	const [showZoomText, setShowZoomText] = useState(false);
	const [fadeOut, setFadeOut] = useState(false);
	const [fadeTimer, setFadeTimer] = useState<NodeJS.Timeout>();
	const [hideTimer, setHideTimer] = useState<NodeJS.Timeout>();

	const getStoredZoom = (): Big => {
		const stored = localStorage.getItem(I18N_COOKIE_NAME);
		let storedZoom = 1;
		try {
			const storedData = stored ? JSON.parse(stored) : null;
			storedZoom = storedData?.state?.pageZoom;
		} catch {}
		return stored ? new Big(storedZoom) : new Big(1);
	};

	const setZoom = (zoom: Big, isInitial = false) => {
		const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
		if (isMobile) {
			return;
		}

		document.documentElement.style.zoom = zoom.toString();

		setPageZoom(zoom.toNumber());
		setCurrentZoomText(`${zoom.times(100).round(0)}%`);

		const zoomDiff = zoom.minus(1);
		if (zoomDiff.gt(0.15) || zoomDiff.lt(-0.15)) {
			// message.warning(t('t1'));
		}
		if (isInitial) return;

		if (fadeTimer) clearTimeout(fadeTimer);
		if (hideTimer) clearTimeout(hideTimer);
		setFadeOut(false);
		setShowZoomText(true);
		const newFadeTimer = setTimeout(() => {
			setFadeOut(true);
		}, 2700);
		const newHideTimer = setTimeout(() => {
			setShowZoomText(false);
		}, 3000);
		setFadeTimer(newFadeTimer);
		setHideTimer(newHideTimer);
	};

	const handleZoom = (type: ScaleType) => {
		const currentZoom = getStoredZoom();
		const step = new Big('0.05');
		const newZoom = type === 'in' ? currentZoom.plus(step) : currentZoom.minus(step);
		if ((type === 'in' && newZoom.gt(1.3)) || (type === 'out' && newZoom.lt(0.7))) {
			// message.warning(t('t2'));
			return;
		}
		setZoom(newZoom);
	};

	useEffect(() => {
		const currentZoom = getStoredZoom();
		setZoom(currentZoom, true);

		return () => {
			if (fadeTimer) clearTimeout(fadeTimer);
			if (hideTimer) clearTimeout(hideTimer);
		};
	}, []);

	return (
		<div
			className={`fixed right-[2%] top-[15%] flex-col flex-center gap-y-[12px] ${props.className} z-50`}
		>
			<div
				className={`flex flex-col border rounded-max`}
				style={{
					borderColor: 'rgba(255, 255, 255, 0.30)',
					backgroundColor: 'rgba(255, 255, 255, 0.1)',
				}}
			>
				<div className={style.iconBig} onClick={() => handleZoom('in')} />
				<div
					className="h-[1px] w-[70%] mx-auto"
					style={{ backgroundColor: 'rgba(255, 255, 255, 0.30)' }}
				/>
				<div className={style.iconSmall} onClick={() => handleZoom('out')} />
			</div>
			{showZoomText && (
				<p
					className={`text-[16px] font-bold text-white transition-opacity duration-300 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
				>
					{currentZoomText}
				</p>
			)}
		</div>
	);
};
