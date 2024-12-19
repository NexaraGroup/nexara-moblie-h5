const isUat = process.env.DEPLOY_ENV === 'uat';
const isProd = process.env.DEPLOY_ENV === 'prod';

const noop = () => {};

const colors = {
	white: 'white',
	black: 'black',
	silver: 'silver',
	gray: 'gray',
	red: '#E86C5D',
	green: '#74ED7B',
	blue: '#3F6FFB',
	gold: 'gold',
	yellow: 'yellow',
	pink: 'pink',
	cyan: 'cyan',
};

type ColorsType = typeof colors;
type ColorsTypeKey = keyof ColorsType;

type CapitalizeBgInstance = {
	[Key in keyof ColorsType as `bg${Capitalize<Key & string>}`]: ChalkInstance;
};

const lib: IKV = {
	big: 'font-size: 2em',
	bold: 'font-weight: bold',
	italic: 'font-style: italic',
	capitalize: 'text-transform: capitalize',
	shadow: 'text-shadow: -1px 1px rgba(0,0,0,.5)',
};

export interface ChalkInstance {
	log: (message?: any, ...optionalParams: any[]) => () => void;
	white: this;
	black: this;
	silver: this;
	gray: this;
	red: this;
	green: this;
	blue: this;
	gold: this;
	yellow: this;
	pink: this;
	cyan: this;

	big: this;
	bold: this;
	italic: this;
	capitalize: this;
	shadow: this;
}

export function consoleColors(
	namespace?:
		| (typeof console & {
				json: (data: any[]) => void;
		  })
		| IKV,
) {
	namespace = namespace || {};

	const _log = console.log;
	const _warn = console.warn;
	const _clear = console.clear;

	const baseStyles = 'border-radius:3px; padding: 0 3px;';

	let styles = baseStyles; // chained styles (per "console" are stored here)

	// protect against non-existant methods (or typos) so the chain of methods will not be harmed
	const proxyC = new Proxy(namespace, {
		get(target, prop: keyof Console) {
			// if (typeof target[prop] == 'function') {
			//     return function () {
			//         console.dir(arguments);
			//         return target[prop].bind(target, arguments);
			//       }
			// }

			return prop in target ? target[prop] : namespace;
		},
	});

	// define chainable methods on the proxy object
	const define = (name: string, value: (v?: string) => any | string) => {
		Reflect.defineProperty(proxyC, name, {
			get() {
				styles = styles + ';' + (typeof value == 'function' ? value() : value);
				// proxyC.log = _log.bind(window.console, "%c%s", styles) // preserve file & line
				return proxyC;
			},
		});
	};

	const getRandomProperty = function (obj: ColorsType) {
		const keys = Object.keys(obj) as ColorsTypeKey[];
		return obj[keys[(keys.length * Math.random()) << 0]];
	};

	const randomBg = (v?: string) =>
		`background:${v || getRandomProperty(colors)}; padding:0 .6 0 0`;
	const userColor = (v?: string) => `color:${v || getRandomProperty(colors)}`;

	// add colors to the main lib
	for (const key in colors) {
		const bgKey = 'bg' + key.replace(/\b\w/g, (c) => c.toUpperCase());
		lib[key] = `color:${colors[key as ColorsTypeKey]}`;
		lib[bgKey] = `background:${colors[key as ColorsTypeKey]};`;
	}

	// add lib's properties as method getters on the console's proxy object
	for (const key in lib) {
		define(key, lib[key]);
	}

	define('bg', randomBg);
	define('random', userColor);

	// proxyC.color = function(s){
	//     if(s)
	//         styles = styles + ";" + userColor(s);

	//     return proxyC
	// }

	function print(args: any, method: any) {
		args = [...args];
		// non-primitive values cannot be styled (unfortunately)
		const isValid = args.some(
				(v: string) =>
					'string number boolean symbol undefined'.includes(typeof v) || v === null,
			),
			currentStyles = styles;

		styles = baseStyles;

		return isValid
			? method.bind(window.console, '%c ' + args.join(' '), currentStyles)
			: method.bind(window.console, ...args);
	}

	/**
	 * Actual console wrapper methods
	 */
	proxyC.log = function () {
		if (isUat || isProd) return noop;
		return print(arguments, _log);
	};

	proxyC.warn = function () {
		if (isUat || isProd) return noop;
		return print(arguments, _warn);
	};

	proxyC.clear = function () {
		_clear();
		if (isUat || isProd) return noop;
		arguments[0] && proxyC.log.apply(null, arguments);
		styles = baseStyles;
	};

	proxyC.json = function () {
		if (isUat || isProd) return noop;
		const value = [...arguments].map((v) => JSON.stringify(v)).join(' \n\n ');
		proxyC.log.call(null, value);
		styles = baseStyles;
	};

	// override the console with the overloaded proxyC
	return proxyC as ChalkInstance & CapitalizeBgInstance;
}

export const log = consoleColors();
