export interface Props {
	disabled?: boolean;
	className?: string;
	value?: string;
	maxLength?: number;
	onChange?: (value: string) => void;
	onBlur?: () => void;
	addonAfter?: React.ReactNode;
	type?: 'password' | 'text';
}
