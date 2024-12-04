/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const output = process.env.docker ? { output: 'standalone' } : {};
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		unoptimized: true,
		remotePatterns: [
			// {
			// 	protocol: 'https',
			// 	hostname: 'website.894523.com',
			// 	port: '',
			// },
			// {
			// 	protocol: 'https',
			// 	hostname: 'website.nx.external.traefik',
			// 	port: '',
			// },
			// {
			// 	protocol: 'https',
			// 	hostname: 'www.nexaracapital.com',
			// 	port: '',
			// },
		],
	},
	env: {
		DEPLOY_ENV: process.env.DEPLOY_ENV,
	},
	eslint: {
		// ignoreDuringBuilds: true,
	},
	experimental: {
		serverActions: {
			// allowedForwardedHosts: [
			// 	'website.nx.external.traefik',
			// 	'website.894523.com',
			// 	'www.nexaracapital.com',
			// ],
			// allowedOrigins: [
			// 	'website.nx.external.traefik',
			// 	'website.894523.com',
			// 	'www.nexaracapital.com',
			// ],
		},
	},
	typescript: {
		// ignoreBuildErrors: true,
	},
	...output,
};

export default withNextIntl(nextConfig);
