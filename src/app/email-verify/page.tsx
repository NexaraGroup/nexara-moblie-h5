'use client';

import { useEffect, useRef } from 'react';
import Button from '@/components/button';
import VerifyCodeInput from '@/components/verify-code-input';
import Big from 'big.js';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useImmer } from 'use-immer';

const PageEmailVerify = () => {
	const t = useTranslations('page-email-verify');
	const searchParams = useSearchParams();
	const email = searchParams.get('email') || '';
	const title = searchParams.get('title') || 'dt1';
	const [countdown, setCountdown] = useImmer<number>(() => {
		const savedTime = localStorage.getItem('countdown');
		const endTime = localStorage.getItem('countdownEndTime');
		if (savedTime && endTime) {
			const remainingTime = Math.floor((parseInt(endTime) - Date.now()) / 1000);
			return Math.max(0, remainingTime);
		}
		return 0;
	});
	const [receiving, setReceiving] = useImmer<boolean>(countdown > 0);
	const rafRef = useRef<number>();
	const lastTimeRef = useRef<number>(0);

	useEffect(() => {
		const animate = (timestamp: number) => {
			if (!lastTimeRef.current) {
				lastTimeRef.current = timestamp;
			}

			const deltaTime = timestamp - lastTimeRef.current;

			if (deltaTime >= 1000) {
				// 每秒更新一次
				lastTimeRef.current = timestamp;

				if (countdown > 0) {
					setCountdown((prev) => {
						const newCountdown = new Big(prev).minus(1).toNumber();
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

			if (countdown > 0) {
				rafRef.current = requestAnimationFrame(animate);
			}
		};

		if (countdown > 0) {
			rafRef.current = requestAnimationFrame(animate);
		}

		return () => {
			if (rafRef.current) {
				cancelAnimationFrame(rafRef.current);
			}
		};
	}, [countdown]);

	const startCountdown = () => {
		const startTime = Date.now();
		const endTime = startTime + 60 * 1000;
		localStorage.setItem('countdown', startTime.toString());
		localStorage.setItem('countdownEndTime', endTime.toString());
		setCountdown(60);
		setReceiving(true);
	};

	const handleSendCode = async () => {
		// api
		startCountdown();
	};

	// 页面加载时自动发送验证码
	useEffect(() => {
		if (!receiving) {
			handleSendCode();
		}
	}, []);

	return (
		<>
			<h2
				className="text-[28px] font-bold
			text-fz-c1 dark:text-fz-c1"
			>
				{t(title)}
			</h2>
			<p
				className="text-sm mt-[6px]
			 text-fz-c2 dark:text-fz-c2"
			>
				{t.rich('t2', {
					Email: () => (
						<span className="text-fz-c1 dark:text-fz-c1 font-bold">{email}</span>
					),
				})}
			</p>

			<VerifyCodeInput className="mt-[60px]" onSend={() => Promise.resolve(false)} />

			<p
				className="text-sm mt-[30px] text-center
			text-fz-c2 dark:text-fz-c2"
			>
				{t('t3')}
			</p>

			<Button
				type="link"
				size="large"
				className="block mx-auto mt-[12px]"
				fontBold
				disabled={receiving}
				onClick={handleSendCode}
			>
				{receiving ? `${countdown}s` : t('b1')}
			</Button>
		</>
	);
};

export default PageEmailVerify;