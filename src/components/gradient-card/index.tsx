import type { PropsWithChildren } from 'react';
import styles from './index.module.scss';

export default function GradientCard({
	children,
	className,
	type = 'type1',
}: PropsWithChildren<{ className?: string; type?: 'type1' | 'type2' | 'type3' }>) {
	return (
		<div className={`${styles.card} ${className ?? ''} ${!type ? '' : styles[type]}`}>
			{children}
		</div>
	);
}
