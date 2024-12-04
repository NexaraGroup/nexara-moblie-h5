import atIcon from '@/assets/images/components/footer/at.png';
import locationIcon from '@/assets/images/components/footer/location.png';
import phoneIcon from '@/assets/images/components/footer/phone.png';
import websiteIcon from '@/assets/images/components/footer/website.png';
import Logo from '@/components/logo/index';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import atIcon from '../../assets/images/components/footer/at.png';
import locationIcon from '../../assets/images/components/footer/location.png';
import phoneIcon from '../../assets/images/components/footer/phone.png';
import websiteIcon from '../../assets/images/components/footer/website.png';
import Logo from '../../components/logo/index';

const iconRate = 2 * 1.25;

export default () => {
	const t = useTranslations('components.footer');

	return (
		<>
			<div
				className="flex justify-between border-y border-bd-muted p-9
			lt-sm:flex-col-reverse lt-sm:py-0 lt-sm:border-none lt-sm:px-3"
			>
				<div
					className="flex flex-col justify-between
					lt-sm:items-center"
				>
					<Logo />

					<p
						className="text-fz-secondary
					lt-sm:hidden"
					>
						{t.rich('t1', {
							Link: (chunks) => (
								<a
									className="text-fz-primary cursor-pointer"
									href="mailto:cs@nexaracapital.com"
								>
									{chunks}
								</a>
							),
						})}
					</p>
				</div>
				<ul
					className="flex flex-col gap-y-3
					lt-sm:mb-12"
				>
					<li className="flex items-center gap-x-3">
						<Image
							src={phoneIcon.src}
							alt="phoneIcon"
							width={phoneIcon.width / iconRate}
							height={phoneIcon.height / iconRate}
						/>
						<p>+852 2456 1001</p>
					</li>
					<li className="flex items-center gap-x-3">
						<Image
							src={atIcon}
							alt="at"
							width={atIcon.width / iconRate}
							height={atIcon.height / iconRate}
						/>
						<a className="text-fz-primary" href="mailto:cs@nexaracapital.com">
							cs@nexaracapital.com
						</a>
					</li>
					<li className="flex items-center gap-x-3">
						<Image
							src={websiteIcon.src}
							alt="websiteIcon"
							width={websiteIcon.width / iconRate}
							height={websiteIcon.height / iconRate}
						/>
						<a
							href="https://www.nexaracapital.com"
							target="_blank"
							className="hover:underline"
						>
							www.nexaracapital.com
						</a>
					</li>
					<li className="flex items-center gap-x-3">
						<Image
							src={locationIcon.src}
							alt="locationIcon"
							width={locationIcon.width / iconRate}
							height={locationIcon.height / iconRate}
						/>
						<p>{t('t2')}</p>
					</li>
				</ul>
			</div>
			<div
				className="flex justify-between items-baseline px-9 py-3
			lt-sm:flex-col-reverse lt-sm:items-center"
			>
				<p
					className="text-fz-secondary
				lt-sm:mt-3"
				>
					© 2024 Nexara Capital. {t('t3')}
				</p>

				<div
					className="flex items-baseline gap-x-12
				lt-sm:text-fz-muted lt-sm:items-stretch"
				>
					<a
						className="hover:underline"
						href={
							process.env.DEPLOY_ENV === 'uat'
								? 'https://uat-nexaradoc.s3.ap-east-1.amazonaws.com/uat-website-disclaimer/Nexara_Content_Disclaimer_Website.pdf'
								: 'https://nexaradoc.s3.ap-east-1.amazonaws.com/Disclaimer/Nexara_Content_Disclaimer_Website.pdf'
						}
						target="_blank"
					>
						{t('t4')}
					</a>
					<i className="sm:hidden bg-bd-muted w-[1px]" />
					<a
						className="hover:underline"
						href={
							process.env.DEPLOY_ENV === 'uat'
								? 'https://uat-nexaradoc.s3.ap-east-1.amazonaws.com/uat-website-policy/Nexara_Privacy_Policy_Website.pdf'
								: 'https://nexaradoc.s3.ap-east-1.amazonaws.com/Policy/Nexara_Privacy_Policy_Website.pdf'
						}
						target="_blank"
					>
						{t('t5')}
					</a>
				</div>
			</div>
		</>
	);
};
