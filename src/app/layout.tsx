import Footer from '@/components/footer/';
import Header from '@/components/header/';
import Scaler from '@/components/scaler/';
import ScrollTopWrapper from '@/components/scroll-top-wrapper/';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
// import { headers } from 'next/headers';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

const ptSansFont = localFont({
	src: '../assets/fonts/PT_Sans/PTSans-Regular.ttf',
	variable: '--font-pt-sans',
	// weight: '100 900', // 字重，一般不要设置，即使是普通的字，也会根据设置，系统去补全
});

export const metadata: Metadata = {
	title: 'NEXARA',
	description: 'NEXARA',
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const locale = await getLocale();
	const messages = await getMessages();
	// const headersList = headers(); // 保留一下，服务测获取头部信息
	// const userAgent = headersList.get('user-agent');

	return (
		<html lang={locale}>
			<body className={`bg-bg-primary ${ptSansFont.variable} antialiased text-fz-primary`}>
				<div className="min-h-[100vh] flex flex-col">
					<NextIntlClientProvider messages={messages}>
						<Scaler className="lt-sm:hidden" />
						<ScrollTopWrapper>
							<Header />
							<main className="flex-grow overflow-auto">{children}</main>
							<Footer />
						</ScrollTopWrapper>
					</NextIntlClientProvider>
				</div>
			</body>
			<GoogleAnalytics gaId="G-1EEGSFQR9V" />
		</html>
	);
}
