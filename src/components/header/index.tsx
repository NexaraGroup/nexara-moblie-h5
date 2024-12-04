'use client';

import menuIcon from '@/assets/images/components/header/menu-icon.png';
import GradientButton from '@/components/gradient-button/';
import Logo from '@/components/logo/index';
import useGlobalStore from '@/store/global';
import { useTranslations } from 'next-intl';
import NextImage from 'next/image';
import { useRouter } from 'next/navigation';
import MobileMenu from './mobile-menu/';
import PcSelectLanguage from './pc-select-language/';
import Tabs from './tabs/';

export default () => {
	const router = useRouter();
	const t = useTranslations('components.header');
	const { mobileMenuVisible, setMobileMenuVisible } = useGlobalStore();

	const handleSignIn = () => {
		window.open(
			process.env.DEPLOY_ENV === 'uat'
				? 'https://custody-uat.894523.com/log-in'
				: 'https://custody.nexaracapital.com/log-in',
		);
	};

	return (
		<>
			<div
				className="flex justify-between items-center gap-x-3 bg-bg-primary py-6 px-9 border-b border-bd-muted
				lt-sm:px-3 lt-sm:py-3 lt-sm:sticky lt-sm:top-0 lt-sm:z-overlay-content lt-sm:box-border lt-sm:h-[4.5rem] lt-sm:bg-bg-secondary"
			>
				<Logo className="cursor-pointer" onClick={() => router.push('/')} />
				<Tabs className="lt-sm:hidden" />
				<div
					className="flex items-center gap-x-6
				lt-sm:hidden"
				>
					<PcSelectLanguage />
					<a
						className="underline font-bold hover:opacity-75"
						href={
							process.env.DEPLOY_ENV === 'uat'
								? 'https://custody-uat.894523.com/log-in?invitationCode=ae3SZOABzM'
								: 'https://custody.nexaracapital.com/log-in'
						}
						target="_blank"
					>
						{t('t1')}
					</a>
					<GradientButton fontWeight="bold" onClick={() => handleSignIn()}>
						{t('t2')}
					</GradientButton>
				</div>
				<NextImage
					className="sm:hidden"
					src={menuIcon.src}
					width={menuIcon.width / 2}
					height={menuIcon.height / 2}
					alt="nexara"
					onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
				/>
			</div>
			<MobileMenu visible={mobileMenuVisible} onClose={() => setMobileMenuVisible(false)} />
		</>
	);
};
