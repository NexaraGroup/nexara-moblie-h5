export type TabOption = {
	label: string;
	value: string;
};
type InferTabOption<T> = T extends readonly (infer U)[] ? U : never;
export type TabsProps<T extends readonly TabOption[]> = {
	options: T;
	value: InferTabOption<T>['value'];
	onChange: (value: InferTabOption<T>['value']) => void;
};
