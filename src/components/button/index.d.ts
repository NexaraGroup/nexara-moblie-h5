export interface Props {
	type?: 'primary' | 'text' | 'link' | 'dashed';
	size?: 'small' | 'middle' | 'large';
	shape?: 'rounded' | 'default';
	disabled?: boolean;
	loading?: boolean;
	onClick?: () => void;
	style?: React.CSSProperties;
	className?: string;
	wrapperClassName?: string;
	block?: boolean;
	fontBold?: boolean;
}
