'use client';

import banner from '@/assets/images/pages/index/banner.png';
import custodyBg from '@/assets/images/pages/index/custody-bg.png';
import custodyMobileBg from '@/assets/images/pages/index/custody-mobile-bg.png';
import missionBg from '@/assets/images/pages/index/mission-bg.png';
import GradientButton from '@/components/gradient-button';
import GradientCard from '@/components/gradient-card/';
import Image from '@/components/image';
import { basePxToRem } from '@/config/base';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import bannerBtnBg from '../../assets/images/pages/index/banner-btn-bg.png';
import banner from '../../assets/images/pages/index/banner.png';
import cardBg from '../../assets/images/pages/index/card-bg.png';
import custodyBg from '../../assets/images/pages/index/custody-bg.png';
import missionBg from '../../assets/images/pages/index/mission-bg.png';
import Image from '../../components/image/';
import { cardDefine } from './const';

const PageHome = () => {
	const t = useTranslations('homePage');
	const router = useRouter();

	return (
		<div
			className="w-[90rem] mx-auto
		lt-sm:p-3 lt-sm:w-full"
		>
			<div
				className="mt-28 grid grid-cols-[47%_53%]
			lt-sm:grid-cols-none lt-sm:gap-y-6 lt-sm:mt-6"
			>
				<div className="flex flex-col justify-between">
					<div
						className="pl-32 pr-12 pt-24 box-border
						lt-sm:p-0"
					>
						<h1
							className="text-5xl font-bold
						lt-sm:text-3xl"
						>
							{t('t1')}
						</h1>
						<h5
							className="text-lg mt-12 text-fz-secondary
						lt-sm:mt-3
						"
						>
							{t('t2')}
						</h5>
						<GradientButton
							className="mt-12
							lt-sm:mt-3"
							fontSize={18 / basePxToRem + 'rem'}
							onClick={() => router.push('/contact-us')}
						>
							{t('t3')}
						</GradientButton>
					</div>
					<div
						className="pl-32 pr-12 box-border py-9 bg-bg-theme1
					lt-sm:hidden"
					>
						<p className="text-fz-secondary text-sm">{t('t4')}</p>
					</div>
				</div>
				<Image source={banner} width={'100%'} />
			</div>

			<div
				className="py-4 px-6 bg-bg-theme1 mt-6
			sm:hidden"
			>
				<h2 className="text-lg">Nexara</h2>
				<p className="text-fz-secondary mt-1 text-sm">{t('t4')}</p>
			</div>

			<div
				className="mt-72 grid-center grid-cols-[auto_auto] gap-x-24
			lt-sm:mt-32 lt-sm:grid-cols-none lt-sm:gap-y-12"
			>
				<Image
					source={missionBg}
					width={'25rem'}
					// TODO 为什么不能居中，要单独设置
					className="lt-sm:max-w-[50%] lt-sm:justify-self-center"
				/>

				<div
					className="w-[30em]
				lt-sm:w-full"
				>
					<h3
						className="text-3xl font-bold
					lt-sm:text-center"
					>
						{t('t5')}
					</h3>
					<p className="text-fz-secondary mt-6 text-lg">{t('t6')}</p>
					<p className="text-fz-secondary mt-3 text-lg">{t('t7')}</p>
				</div>
			</div>

			<div
				className="mt-72
			lt-sm:mt-40"
			>
				<h2
					className="text-5xl text-center font-bold mb-12
				lt-sm:text-3xl lt-sm:mb-9"
				>
					{t('c1')}
				</h2>
				<ul
					className="grid grid-cols-3 gap-12 auto-rows-fr
					lt-sm:grid-cols-1 lt-sm:gap-9"
				>
					{cardDefine.map((item) => (
						<li key={item.icon.src}>
							<GradientCard className="h-full">
								<Image
									source={item.icon}
									height={'3.5rem'}
									width={'3.5rem'}
									className="lt-sm:max-w-12 border rounded-lg border-bd-secondary"
								/>
								<h3
									className="text-2xl px-3 font-bold mb-3 mt-3
								lt-sm:text-xl"
								>
									{t(item.title)}
								</h3>
								<div
									className="text-fz-secondary px-3
								lt-sm:text-sm"
								>
									{t.rich(item.description, {
										Wrapper: (chunks) => <div>{chunks}</div>,
										T1: (chunks) => (
											<span
												className="text-lg text-fz-primary font-bold
											lt-sm:text-base"
											>
												{chunks}
											</span>
										),
										Block: (chunks) => <p>{chunks}</p>,
									})}
								</div>
							</GradientCard>
						</li>
					))}
				</ul>
			</div>

			<div
				className="mt-72 mb-60
			lt-sm:mt-40 lt-sm:mb-40"
			>
				<h2
					className="text-5xl text-center font-bold mb-12
				lt-sm:mb-9 lt-sm:text-3xl
				"
				>
					{t('t13')}
				</h2>
				<div
					className="box-border relative pl-[46rem] overflow-hidden
					lt-sm:hidden"
					style={{ height: custodyBg.height / 2 / basePxToRem + 'rem' }}
				>
					<figure className="absolute position-full z-[-1]">
						<Image source={custodyBg} />
					</figure>
					<h3 className="text-3xl font-bold mt-44 mb-9">{t('t8')}</h3>
					<h4 className="text-xl mb-3 text-fz-secondary">• {t('t9')}</h4>
					<h4 className="text-xl mb-3 text-fz-secondary">• {t('t10')}</h4>
					<h4 className="text-xl mb-3 text-fz-secondary">• {t('t11')}</h4>
					<h4 className="text-xl mb-3 text-fz-secondary">• {t('t12')}</h4>
				</div>

				<div className="flex-col justify-center sm:hidden">
					<Image source={custodyMobileBg} />
					<h3 className="text-xl mt-6 font-bold">{t('t8')}</h3>
					<h4 className="text my-3 text-fz-secondary">• {t('t9')}</h4>
					<h4 className="text my-3 text-fz-secondary">• {t('t10')}</h4>
					<h4 className="text my-3 text-fz-secondary">• {t('t11')}</h4>
					<h4 className="text my-3 text-fz-secondary">• {t('t12')}</h4>
				</div>
			</div>
		</div>
	);
};
export default PageHome;
