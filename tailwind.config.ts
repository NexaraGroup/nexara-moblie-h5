import type { Config } from 'tailwindcss';
import remToPx from 'tailwindcss-rem-to-px';
import type { PluginAPI } from 'tailwindcss/types/config.d';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			'fz-c0': '#ffffff',
			'fz-c1': '#1A1C1E',
			'fz-c2': '#808289',
			'bd-c1': '#0F0D23',
			'bg-c1': '#121826',
			'bg-c2': '#F2F2F2',
			'c1': '#121826',
		},
		fontFamily: {
			ptSans: ['var(--font-pt-sans)'],
			appFont: ['var(--font-pt-sans)', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
		},
	},
	plugins: [
		remToPx({ baseFontSize: 14 }),
		({ addUtilities }: PluginAPI) => {
			addUtilities({
				'.flex-center': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				},
				'.grid-center': {
					display: 'grid',
					alignItems: 'center',
					justifyContent: 'center',
				},
				'.rounded-max': {
					'border-radius': '9999px',
				},
				/**
				 * inset: 0; 这个也可以，兼容性一般，可能要借助 postcss
				 * 暂时，还是用 position-full
				 */
				'.position-full': {
					top: '0',
					left: '0',
					right: '0',
					bottom: '0',
				},
				'.mask-bg': {
					backgroundColor: 'rgba(0, 0, 0, 0.8)',
				},
				'.z-mask': {
					zIndex: '1000',
				},
				// antd-mobile 是 1000，但是 5000 问哦不大
				'.z-overlay-content': {
					zIndex: '5000',
				},
			});
		},
	],
};
export default config;
