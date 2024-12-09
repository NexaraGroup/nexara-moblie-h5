import { ComponentsCheckboxArrowSvg } from '@/components/images/ComponentsCheckboxArrow';
import { Checkbox as AntdCheckbox } from 'antd-mobile';
import type { Props } from './index.d';
import styles from './index.module.scss';

export default function Checkbox(props: React.PropsWithChildren<Props>) {
	return (
		<div className={styles.wrapper}>
			<AntdCheckbox
				value={props.value}
				icon={(checked) =>
					!checked ? (
						<i
							className="rounded-[4px] border w-[20px] h-[20px] block
					border-bd-c2 dark:border-bd-c2"
							onClick={() => props.onChange?.(true)}
						/>
					) : (
						<div
							className="rounded-[4px] w-[20px] h-[20px] block flex-center
							bg-bg-c1 dark:bg-bg-c1
						"
							onClick={() => props.onChange?.(false)}
						>
							<ComponentsCheckboxArrowSvg
								className="w-[80%] h-[80%]
							stroke-bd-c0 dark:stroke-bd-c0"
								fill="none"
							/>
						</div>
					)
				}
			>
				{props.children}
			</AntdCheckbox>
		</div>
	);
}
