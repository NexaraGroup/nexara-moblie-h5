'use client';

import { useEffect, useRef } from 'react';
import Button from '@/components/button';
import VerifyCodeInput from '@/components/verify-code-input';
import Big from 'big.js';
import { useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { useImmer } from 'use-immer';

const titleMap = {
	'1': 'dt1',
	'2': 'dt2',
} as const;

const PageEmailVerify = () => {
	const t = useTranslations('page-email-verify');
	const searchParams = useSearchParams();
	const email = searchParams.get('email');
	const type = searchParams.get('type') || '1';
	const title = titleMap[type as keyof typeof titleMap] || 'dt1';
	const router = useRouter();
	const [loading, setLoading] = useImmer<boolean>(false);
	const [countdown, setCountdown] = useImmer<number | undefined>(undefined);
	const [receiving, setReceiving] = useImmer<boolean>(false);
	const rafRef = useRef<number>();
	const lastTimeRef = useRef<number>(0);

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

	const handleSubmit = async (msgCode: string) => {
		setLoading(true);
		// api
		setLoading(false);

		if (false) {
			return false;
		}
		// 清楚计时器状态
		setCountdown(undefined);
		setReceiving(false);
		localStorage.removeItem('countdown');
		localStorage.removeItem('countdownEndTime');
		if (type === '1') {
			// 登录
			// 去验证 ga
		} else if (type === '2') {
			// 忘记密码，去设置密码
			router.push(`/set-password?email=${email}`);
		}
		return true;
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

			<VerifyCodeInput className="mt-[60px]" onSubmit={handleSubmit} />

			<p
				className="text-sm mt-[30px] text-center
			text-fz-c2 dark:text-fz-c2"
			>
				{t('t3')}
			</p>

			<Button
				type="link"
				size="large"
				loading={loading}
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
