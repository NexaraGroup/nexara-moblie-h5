import { NO_AUTH_ROUTES } from '@/config/base';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	// 1. 检查是否是系统路径
	if (
		request.nextUrl.pathname.startsWith('/_next/') ||
		request.nextUrl.pathname.startsWith('/api/') ||
		request.nextUrl.pathname === '/favicon.ico'
	) {
		return;
	}

	// 2. 检查是否是无需认证的路由
	if (NO_AUTH_ROUTES.includes(request.nextUrl.pathname)) {
		return;
	}

	/**
	 * 3. 鉴权逻辑
	 * - 如果没有 cookie 或者 cookie 过期，重定向到登录页面
	 * - 记录重定向前的页面用于登录后跳转
	 */
	const authHeader = request.headers.get('Authorization');
	if (!authHeader) {
		const redirectUrl = new URL('/login', request.url);
		redirectUrl.searchParams.set(
			'redirect',
			request.nextUrl.toString().split(request.nextUrl.origin)[1],
		);
		return NextResponse.redirect(redirectUrl);
	}

	// 4. TODO, 去请求，看 cookie 是否过期

	// 5. TODO, 看是否需要去绑定 ga

	// 6. TODO, 上文都 pass 后，处理 / 的重定向
	if (request.nextUrl.pathname === '/') {
		return NextResponse.redirect(new URL('/home', request.url));
	}
}

// 匹配所有路径
export const config = {
	matcher: '/:path*',
};
