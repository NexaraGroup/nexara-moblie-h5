import { TOKEN_KEY } from '@/config/base';
import axios from 'axios';
import { isSuccess } from '@/utils/api';
import { NO_AUTH_ROUTES } from '@/config/base';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
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
	 * ↑↑↑ 暂时不做，代码留着
	 */
	const loginRedirectUrl = new URL('/login', request.url);
	// // 这个特殊参数，主动 encode 一次，避免问题
	// loginRedirectUrl.searchParams.set(
	// 	'redirect',
	// 	encodeURIComponent(request.nextUrl.toString().split(request.nextUrl.origin)[1]),
	// );

	// 检查 cookie 是否存在
	const token = request.cookies.get(TOKEN_KEY);
	if (!token?.value) {
		return NextResponse.redirect(loginRedirectUrl);
	}

	// 4. 去请求，看 cookie 是否过期
	try {
		const response = await axios.post(`${process.env.API_HOST}/health/checkToken`, {}, {
			headers: {
				'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.value}`,
            }
        });
        if (!isSuccess(response.data)) {
			console.log('jwt token error');
			return NextResponse.redirect(loginRedirectUrl);
        }
    } catch (error) {
        console.error(error);
        return NextResponse.redirect(loginRedirectUrl);
    }

	// 5. 上文都 pass 后，处理 / 的重定向
	if (request.nextUrl.pathname === '/') {
		return NextResponse.redirect(new URL('/home', request.url));
	}
}

// 匹配所有路径
export const config = {
	matcher: '/:path*',
};
