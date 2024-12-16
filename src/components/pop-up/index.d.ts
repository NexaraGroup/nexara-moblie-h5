export interface Props {
	visible: boolean;
	okText?: string;
	title?: string;
	onOk?: () => void;
	onClose: () => void;
	maskClosable?: boolean;
}
