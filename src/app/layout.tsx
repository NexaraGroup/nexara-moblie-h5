import RenderWrapper from '@/components/render-wrapper';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.scss';
import './theme.scss';
import type { Locale } from '@/i18n/config';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

const popPins = localFont({
	src: '../assets/fonts/Poppins/Poppins-Regular.ttf',
	variable: '--font-pop-pins',
});

export const metadata: Metadata = {
	title: 'NEXARA',
	description: 'NEXARA',
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	minimumScale: 1,
	userScalable: false,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const locale: Locale = (await getLocale()) as Locale;
	const messages = await getMessages();

	return (
		<html lang={locale}>
			<body className={`${popPins.variable} antialiased`} id="app">
				<NextIntlClientProvider messages={messages}>
					<RenderWrapper locale={locale}>
						<main className="flex-grow overflow-auto">{children}</main>
					</RenderWrapper>
				</NextIntlClientProvider>
			</body>
			<GoogleAnalytics gaId="G-1EEGSFQR9V" />
		</html>
	);
}
