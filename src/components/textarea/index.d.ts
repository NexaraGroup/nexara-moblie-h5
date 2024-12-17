export interface Props {
	disabled?: boolean;
	className?: string;
	value?: string;
	maxLength?: number;
	onChange?: (value: string) => void;
	rows?: number;
	onBlur?: () => void;
}
