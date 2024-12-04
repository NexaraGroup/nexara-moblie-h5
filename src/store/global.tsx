import { I18N_COOKIE_NAME } from '@/config/base';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface S {
	mobileMenuVisible: boolean;
	setMobileMenuVisible: (v: boolean) => void;
	pageZoom: number;
	setPageZoom: (v: number) => void;
}

export default create<S>()(
	devtools(
		persist(
			(set) => ({
				mobileMenuVisible: false,
				setMobileMenuVisible: (v: boolean) =>
					set(() => {
						return { mobileMenuVisible: v };
					}),
				pageZoom: 1,
				setPageZoom: (v: number) => {
					set(() => {
						return { pageZoom: v };
					});
				},
			}),
			{
				name: I18N_COOKIE_NAME,
				partialize: (state) => ({
					pageZoom: state.pageZoom,
				}),
			},
		),
	),
);
