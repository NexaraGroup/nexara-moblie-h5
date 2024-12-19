/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  BaseRequest,
  BaseResponse,
  BaseResponseUserVo,
  Login2FacodeRequest,
  ResetPasswordRequest,
  Send2FACodeByLoginRequest,
  Send2FacodeByMailRequest,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Login<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Login by 2FA code
   *
   * @tags login-controller
   * @name Login2FacodeUsingPost
   * @summary login2Facode
   * @request POST:/login/login2Facode
   */
  login2FacodeUsingPost = <T,>(request: Login2FacodeRequest, params: RequestParams = {}) =>
    this.request<BaseResponseUserVo, void>({
      path: `/login/login2Facode`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description logout
   *
   * @tags login-controller
   * @name LogoutUsingPost
   * @summary logout
   * @request POST:/login/logout
   */
  logoutUsingPost = <T,>(request: BaseRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/login/logout`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description reset new password
   *
   * @tags login-controller
   * @name ResetPasswordUsingPost
   * @summary resetPassword
   * @request POST:/login/resetPassword
   */
  resetPasswordUsingPost = <T,>(request: ResetPasswordRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/login/resetPassword`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Login step1 by email and password ,send 2FA code
   *
   * @tags login-controller
   * @name Send2FacodeByLoginUsingPost
   * @summary send2Facode
   * @request POST:/login/send2FacodeByLogin
   */
  send2FacodeByLoginUsingPost = <T,>(
    request: Send2FACodeByLoginRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/login/send2FacodeByLogin`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description send 2FA Code to mail
   *
   * @tags login-controller
   * @name Send2FacodeByMailUsingPost
   * @summary send2FacodeByMail
   * @request POST:/login/send2FacodeByMail
   */
  send2FacodeByMailUsingPost = <T,>(
    request: Send2FacodeByMailRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/login/send2FacodeByMail`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description send reset password url to mail
   *
   * @tags login-controller
   * @name SendResetUrlMailUsingPost
   * @summary sendResetUrlMail
   * @request POST:/login/sendResetUrlMail
   */
  sendResetUrlMailUsingPost = <T,>(request: Send2FacodeByMailRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/login/sendResetUrlMail`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
}
