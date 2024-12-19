import { NO_AUTH_ROUTES } from '@/config/base';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	// TODO
	// 1. 如果没有 cookie 或者 cookie 过期，则重定向到登录页面，并且尝试清除 cookie（同时，记一下 redirect）
	// 2. 如果鉴权通过，继续查询 ga 的情况，如果 ga 没绑定，则跳转到绑定 ga 页面
	// 3. 如果是 /， 则跳转到 /home

	if (request.nextUrl.pathname === '/') {
		return NextResponse.redirect(new URL('/home', request.url));
	}
}

const excludePattern = NO_AUTH_ROUTES.join('|');
export const config = {
	matcher: [`/((?!${excludePattern}|_next/static|favicon.ico).*)`],
};
