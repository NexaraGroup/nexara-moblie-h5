/**
 * 判断接口是否请求成功
 * @param {any} res - 要检查的值。
 * @returns {boolean} - 判断接口是否请求成功 -> true，否则 false
 */
export const isSuccess = (res?: any): boolean => {
	return res?.respCode === 0;
};
