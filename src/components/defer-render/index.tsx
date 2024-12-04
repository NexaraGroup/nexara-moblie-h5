'use client';

import { useEffect, useState } from 'react';

export default function DeferRender(props: React.PropsWithChildren) {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		import('amfe-flexible').finally(() => {
			setLoaded(true);
		});
	}, []);

	return <>{loaded ? props.children : null}</>;
}
