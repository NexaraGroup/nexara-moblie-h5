import { StaticImageData } from 'next/image';

declare module '*.png' {
	const content: StaticImageData;

	export default content;
}

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			DEPLOY_ENV: 'dev' | 'prod' | 'uat';
			API_HOST: string;
			PX_TO_REM_ROOT_VALUE_WITH_DESIGN_WIDTH: number;
			TAILWIND_REM_TO_PX_BASE_FONT_SIZE: number;
		}
	}

	namespace G {
		interface Opts<T extends string | number = string> {
			label: string;
			value: T;
		}
	}
}
