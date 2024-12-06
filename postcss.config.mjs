/** @type {import('postcss-load-config').Config} */

const config = {
	plugins: {
		tailwindcss: {},
		'postcss-pxtorem': {
			rootValue: process.env.PX_TO_REM_ROOT_VALUE_WITH_DESIGN_WIDTH,
			propList: ['*'],
			selectorBlackList: [],
			replace: true,
			mediaQuery: false,
			minPixelValue: 0,
		},
	},
};

export default config;
