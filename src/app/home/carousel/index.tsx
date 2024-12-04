/**
 * @file
 * 废弃，不用了
 * 但是可以保留，以后参考
 *
 * "react-slick": "^0.30.2",
 * "slick-carousel": "^1.8.1",
 * "@types/react-slick": "^0.23.13",
 */
'use client';

// import React, { useRef } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import arrowIcon from '@/assets/images/pages/index/arrow.svg';
// import banner1 from '@/assets/images/pages/index/banner1.png';
// import banner2 from '@/assets/images/pages/index/banner2.png';
// import banner3 from '@/assets/images/pages/index/banner3.png';
// import banner4 from '@/assets/images/pages/index/banner4.png';
// import { useTranslations } from 'next-intl';
// import Image from 'next/image';

// function Carousel() {
// 	const t = useTranslations('homePage');
// 	const tc = useTranslations('common');

// 	const sliderRef = useRef<Slider | null>(null);
// 	const textSliderRef = useRef<Slider | null>(null);
// 	const next = () => {
// 		sliderRef.current?.slickNext();
// 		textSliderRef.current?.slickNext();
// 	};
// 	const previous = () => {
// 		sliderRef.current?.slickPrev();
// 		textSliderRef.current?.slickPrev();
// 	};
// 	const settings = {
// 		infinite: true,
// 		speed: 500,
// 		arrows: false,
// 		autoplay: true,
// 		autoplaySpeed: 3600,
// 	};
// 	return (
// 		<div className="mt-28 flex justify-center">
// 			<div className="w-[750px] flex flex-col justify-between">
// 				<div className="pl-36 pr-14 pt-24">
// 					<Slider
// 						ref={(slider) => {
// 							textSliderRef.current = slider;
// 						}}
// 						// fade={true}
// 						{...settings}
// 					>
// 						<div key={1}>
// 							<h1 className="text-5xl font-bold">
// 								{t(
// 									'Asia’s First Professional private banking service for crypto wealthy individuals',
// 								)}
// 							</h1>
// 							<h5 className="text-lg mt-12 text-fz-secondary">
// 								{t(
// 									'Nexara provides the Next Era of wealth management for you and your family',
// 								)}
// 								{tc('periodSymbol')}
// 								{t('You deserve excellent service for your hard-earned crypto')}
// 							</h5>
// 						</div>

// 						<div key={2}>
// 							<h1 className="text-5xl font-bold">
// 								{t(
// 									'Alternative portfolio advisory services for traditional institutions and family offices',
// 								)}
// 							</h1>
// 							<h5 className="text-lg mt-12 text-fz-secondary">
// 								{t(
// 									'Nexara experts assist you in navigating both crypto and TradFi markets',
// 								)}
// 							</h5>
// 						</div>

// 						<div key={3}>
// 							<h1 className="text-5xl font-bold">
// 								{t(
// 									'Nexara pays up to *6% interests instantly on your funds parked into your account',
// 								)}
// 							</h1>
// 							<h5 className="text-lg mt-12 text-fz-secondary">
// 								{t('Be proactive to manage your idle funds')}
// 							</h5>
// 						</div>

// 						<div key={4}>
// 							<h1 className="text-5xl font-bold">
// 								{t(
// 									'Nexara bridges fast-growing startups with investors via blockchain technology',
// 								)}
// 							</h1>
// 							<h5 className="text-lg mt-12 text-fz-secondary">
// 								{t(
// 									'Nexara provides the Next Era of wealth management for you and your family',
// 								)}
// 								{tc('periodSymbol')}
// 								{t('You deserve excellent service for your hard-earned crypto')}
// 							</h5>
// 						</div>
// 					</Slider>
// 				</div>
// 				<div className="h-40 pl-36 pr-14 box-border py-8 bg-[#18222a]">
// 					<h2 className="text-2xl">Nexara</h2>
// 					<p className="text-fz-secondary mt-3">
// 						{t(
// 							'Nexara is a licensed platform providing alternative asset and crypto asset management services',
// 						)}
// 					</p>
// 				</div>
// 			</div>

// 			<div className="w-[850px] h-[780px] relative">
// 				<Slider
// 					ref={(slider) => {
// 						sliderRef.current = slider;
// 					}}
// 					{...settings}
// 				>
// 					<div key={1}>
// 						<Image src={banner1.src} alt="nexara" width={850} height={780} />
// 					</div>
// 					<div key={2}>
// 						<Image src={banner2.src} alt="nexara" width={850} height={780} />
// 					</div>
// 					<div key={3}>
// 						<Image src={banner3.src} alt="nexara" width={850} height={780} />
// 					</div>
// 					<div key={4}>
// 						<Image src={banner4.src} alt="nexara" width={850} height={780} />
// 					</div>
// 				</Slider>
// 				<div style={{ textAlign: 'center' }}>
// 					<a
// 						className="w-20 h-20 bg-black flex-center block absolute left-0 bottom-20 cursor-pointer hover:opacity-85"
// 						onClick={previous}
// 					>
// 						<Image src={arrowIcon.src} alt="arrow" width={20} height={20} />
// 					</a>
// 					<a
// 						className="w-20 h-20 bg-black flex-center block absolute left-0 bottom-0 rotate-180 cursor-pointer hover:opacity-85"
// 						onClick={next}
// 					>
// 						<Image src={arrowIcon.src} alt="arrow" width={20} height={20} />
// 					</a>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default Carousel;
