/**
 * @file
 * a. 2 倍图太常用了，还有 alt 的赋值问题，所以写了这个组件
 * b. next 自己提供的 image 组件不好用，只能写像素
 * c. 默认都是用 rem 做单位
 */
import { basePxToRem } from '@/config/base';
import { StaticImageData } from 'next/image';

export default (props: {
	source: StaticImageData;
	alt?: string;
	className?: string;
	width?: number | string;
	height?: number | string;
	style?: React.CSSProperties;
}) => {
	const style = { ...props.style };
	delete style.width;
	delete style.height;

	return (
		<img
			src={props.source.src}
			alt={props.alt ?? 'Nexara'}
			className={`${props.className ?? ''}`}
			style={{
				width: props.width ?? `${Number(props.source.width ?? 0) / 2 / basePxToRem}rem`,
				height: props.height ?? 'auto',
				...style,
			}}
		/>
	);
};
