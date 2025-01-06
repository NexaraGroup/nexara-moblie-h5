'use client';

import { useEffect, useRef } from 'react';
import Big from 'big.js';
import { useImmer } from 'use-immer';

export default (props: { sendCodeAction: () => Promise<boolean>, initWhenCountAction?: () => void }) => {
	const [countdown, setCountdown] = useImmer<number | undefined>(undefined);
	const [receiving, setReceiving] = useImmer<boolean>(false);
	const rafRef = useRef<number>();
	const lastTimeRef = useRef<number>(0);

	const handleSendCode = async () => {
		const result = await props.sendCodeAction();
		if (!result) return;
		startCountdown();
	};

	const startCountdown = () => {
		const startTime = Date.now();
		const endTime = startTime + 60 * 1000;
		localStorage.setItem('countdown', startTime.toString());
		localStorage.setItem('countdownEndTime', endTime.toString());
		setCountdown(60);
		setReceiving(true);
	};

	const clearCountdown = () => {
		setCountdown(undefined);
		setReceiving(false);
		localStorage.removeItem('countdown');
		localStorage.removeItem('countdownEndTime');
		if (rafRef.current) {
			cancelAnimationFrame(rafRef.current);
		}
	};

	// 页面加载时自动发送验证码
	useEffect(() => {
		const savedTime = localStorage.getItem('countdown');
		const endTime = localStorage.getItem('countdownEndTime');
		if (savedTime && endTime) {
			const remainingTime = Math.floor((parseInt(endTime) - Date.now()) / 1000);
			const _t = Math.max(0, remainingTime);
			setCountdown(_t);
			if (_t > 0) {
				setReceiving(true);
				props.initWhenCountAction?.();
			} else {
				localStorage.removeItem('countdown');
				localStorage.removeItem('countdownEndTime');
				handleSendCode();
			}
		} else {
			handleSendCode();
		}
	}, []);

	// 基于 countdown 的倒计时，这个要放在第一个 useEffect 上面
	useEffect(() => {
		const animate = (timestamp: number) => {
			if (!lastTimeRef.current) {
				lastTimeRef.current = timestamp;
			}

			const deltaTime = timestamp - lastTimeRef.current;

			if (deltaTime >= 1000) {
				// 每秒更新一次
				lastTimeRef.current = timestamp;

				if (countdown ?? 0 > 0) {
					setCountdown((prev) => {
						const newCountdown = new Big(prev ?? 0).minus(1).toNumber();
						if (newCountdown <= 0) {
							setReceiving(false);
							localStorage.removeItem('countdown');
							localStorage.removeItem('countdownEndTime');
							return 0;
						}
						return newCountdown;
					});
				}
			}

			if (countdown ?? 0 > 0) {
				rafRef.current = requestAnimationFrame(animate);
			}
		};

		if (countdown ?? 0 > 0) {
			rafRef.current = requestAnimationFrame(animate);
		}

		return () => {
			if (rafRef.current) {
				cancelAnimationFrame(rafRef.current);
			}
		};
	}, [countdown]);

	return {
		countdown,
		receiving,
		clearCountdown,
	};
};
