/** @type {import('postcss-load-config').Config} */
const config = {
	plugins: {
		tailwindcss: {},
		'postcss-pxtorem': {
			rootValue: 16,
			propList: ['*'],
			selectorBlackList: [],
			replace: true,
			mediaQuery: false,
			minPixelValue: 0,
		},
	},
};

export default config;
