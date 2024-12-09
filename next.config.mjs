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

	webpack(config) {
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

		config.module.rules.push(
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
				use: [
					{
						loader: '@svgr/webpack',
						// https://react-svgr.com/docs/options/#svgo
						options: {
							svgoConfig: {
								// https://svgo.dev/docs/plugins/convertShapeToPath/
								plugins: [
									{
										name: 'convertShapeToPath',
										params: {
											convertArcs: false,
											floatPrecision: null,
										},
									},
								],
							},
						},
					},
				],
			},
		);

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i;

		return config;
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
