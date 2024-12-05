import type { Config } from 'tailwindcss';
import remToPx from 'tailwindcss-rem-to-px';
// import plugin from 'tailwindcss/plugin';
import type { PluginAPI } from 'tailwindcss/types/config.d';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		// extend: {
		// 	screens: {
		// 		'lt-sm': { 'max': '900px' },
		// 		'sm': '900px',
		// 	},
		// 	colors: {
		// 		'bg-primary': '#020103',
		// 		'bg-secondary': '#201f21',
		// 		'bg-muted': '#161616',
		// 		'bg-theme1': '#18222a',
		// 		'fz-primary': '#ffffff',
		// 		'fz-secondary': 'rgba(255, 255, 255, 0.65)',
		// 		'fz-muted': 'rgba(255, 255, 255, 0.3)',
		// 		'bd-primary': '#ffffff',
		// 		'bd-secondary': '#505050',
		// 		'bd-muted': '#2e2e2e',
		// 	},
		fontFamily: {
			ptSans: ['var(--font-pt-sans)'],
		},
		// },
	},
	plugins: [
		remToPx({ baseFontSize: 14 }),
		// 备份，修改默认字体大小
		// (p: PluginAPI) => {
		// 	p.addBase({
		// 		p: { fontSize: 14 },
		// 		a: { fontSize: 14 },
		// 	} as unknown as Parameters<typeof p.addBase>[0]);
		// },
		// ({ addUtilities }: PluginAPI) => {
		// 	addUtilities({
		// 		'.flex-center': {
		// 			display: 'flex',
		// 			alignItems: 'center',
		// 			justifyContent: 'center',
		// 		},
		// 		'.grid-center': {
		// 			display: 'grid',
		// 			alignItems: 'center',
		// 			justifyContent: 'center',
		// 		},
		// 		'.rounded-max': {
		// 			'border-radius': '9999px',
		// 		},
		// 		/**
		// 		 * inset: 0; 这个也可以，兼容性一般，可能要借助 postcss
		// 		 * 暂时，还是用 position-full
		// 		 */
		// 		'.position-full': {
		// 			top: '0',
		// 			left: '0',
		// 			right: '0',
		// 			bottom: '0',
		// 		},
		// 		'.mask-bg-color': {
		// 			backgroundColor: 'rgba(0, 0, 0, 0.8)',
		// 		},
		// 		'.z-mask': {
		// 			zIndex: '1000',
		// 		},
		// 		'.z-overlay-content': {
		// 			zIndex: '5000',
		// 		},
		// 	});
		// },
	],
};
export default config;
