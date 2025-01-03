import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import path from 'path';
import ImageToReactComponent from '@atom8/image-to-react-component';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imageToReactComponent = new ImageToReactComponent({
	input: path.resolve(__dirname, './src/assets/images'),
	output: path.resolve(__dirname, './src/components/images'),
	extensions: ['.png', '.jpg', '.jpeg', '.svg'],
	factor: true,
	prettierConfigPath: './.prettierrc.cjs',
});

imageToReactComponent.init();
