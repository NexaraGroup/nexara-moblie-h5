export interface Props<T> {
	disabled?: boolean;
	className?: string;
	options?: {
		label: string;
		value: T;
	}[];
	value?: T;
	onChange?: (value: T) => void;
	onClick?: () => void;
}
