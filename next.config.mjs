/** @type {import('next').NextConfig} */

import fs from 'fs';
import dotenv from 'dotenv';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const baseEnv = fs.readFileSync(`.env`);
const baseEnvConfig = dotenv.parse(baseEnv);
const env = fs.readFileSync(`.env.${process.env.mode}`);
const envConfig = dotenv.parse(env);
dotenv.config({
	path: ['.env', `./.env.${process.env.mode}`],
	override: true,
});

/** @type {import('next').NextConfig} */
const output = process.env.docker ? { output: 'standalone' } : {};
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	experimental: {
		middleware: true,
	},
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
	eslint: {
		// ignoreDuringBuilds: true,
	},
	env: {
		...baseEnvConfig,
		...envConfig,
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
