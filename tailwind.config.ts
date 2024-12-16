import type { Config } from 'tailwindcss';
import remToPx from 'tailwindcss-rem-to-px';
import type { PluginAPI } from 'tailwindcss/types/config.d';

/**
 * @description
 * 1. 0 为反色，1 为 最深色，数值越大越浅
 * 2. 只区分 bd、bg、fz
 */
const themeConfig = {
	'fz-c0': '#ffffff',
	'fz-c1': '#1A1C1E',
	'fz-c2': '#808289',

	'bg-c0': '#fff',
	'bg-c1': '#121826',
	'bg-c2': '#DBDBDB',
	'bg-c3': '#F2F2F2',

	'bd-c0': '#ffffff',
	'bd-c1': '#0F0D23',
	'bd-c2': 'rgba(15, 13, 35, .2)',

	// 暗色主题
	'dark-fz-c0': '#ffffff',
	'dark-fz-c1': '#1A1C1E',
	'dark-fz-c2': '#808289',

	'dark-bg-c0': '#fff',
	'dark-bg-c1': '#121826',
	'dark-bg-c2': '#F2F2F2',
	'dark-bg-c3': '#F2F2F2',

	'dark-bd-c0': '#ffffff',
	'dark-bd-c1': '#0F0D23',
	'dark-bd-c2': 'rgba(15, 13, 35, .2)',
} as const;

const config: Config = {
	// 给所有class添加#app命名空间
	important: '#app',

	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: themeConfig,
		fontFamily: {
			popPins: ['var(--font-pop-pins)'],
			appFont: ['var(--font-pop-pins)', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
		},
	},
	extend: {
		textColor: ['dark'],
		backgroundColor: ['dark'],
		borderColor: ['dark'],
	},
	plugins: [
		remToPx({ baseFontSize: 16 }),
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
