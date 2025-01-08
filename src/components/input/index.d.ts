export interface Props {
	disabled?: boolean;
	className?: string;
	value?: string;
	maxLength?: number;
	placeholder?: string;
	onChange?: (value: string) => void;
	onEnterPress?: () => void;
	onBlur?: () => void;
	addonAfter?: React.ReactNode;
	min?: number;
	max?: number;
	type?: 'password' | 'text' | 'number';
}
