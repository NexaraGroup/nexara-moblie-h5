import { LOCAL_STORE_NAME } from '@/config/base';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface S {
	userInfo: {
		email: string;
		userName: string;
	};
	setUserInfo: (v: S['userInfo']) => void;
}

export default create<S>()(
	devtools(
		persist(
			(set) => ({
				userInfo: {
					email: '',
					userName: '',
				},
				setUserInfo: (v: S['userInfo']) => {
					set(() => {
						return { userInfo: v };
					});
				},
			}),
			// TODO，这个获取在 next 有问题，需要看下，或者直接通过 store key 初始化
			{
				name: LOCAL_STORE_NAME,
				partialize: (state) => ({
					userInfo: state.userInfo,
				}),
			},
		),
	),
);
