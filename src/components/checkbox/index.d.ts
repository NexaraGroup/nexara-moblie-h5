import type { CheckboxValue } from 'antd-mobile';

export interface Props {
	onChange?: (checked: boolean) => void;
	value?: CheckboxValue;
	disabled?: boolean;
}
