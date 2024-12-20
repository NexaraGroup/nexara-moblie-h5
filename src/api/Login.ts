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
  BaseResponse,
  RegisterRequest,
  SendFaCodeByInvitationRequest,
  SendFaCodeByLoginRequest,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Login<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description loginByFaCode
   *
   * @tags login-controller
   * @name LoginByFaCodeUsingPost
   * @summary LoginByFaCodeRequest
   * @request POST:/login/loginByFaCode
   */
  loginByFaCodeUsingPost = <T,>(request: SendFaCodeByLoginRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/login/loginByFaCode`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description loginByFaGa
   *
   * @tags login-controller
   * @name LoginByFaGaUsingPost
   * @summary LoginByFaGaRequest
   * @request POST:/login/loginByFaGa
   */
  loginByFaGaUsingPost = <T,>(request: SendFaCodeByLoginRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/login/loginByFaGa`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description register
   *
   * @tags login-controller
   * @name RegisterUsingPost
   * @summary RegisterRequest
   * @request POST:/login/register
   */
  registerUsingPost = <T,>(request: RegisterRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/login/register`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description resetPassword
   *
   * @tags login-controller
   * @name ResetPasswordUsingPost
   * @summary ResetPasswordRequest
   * @request POST:/login/resetPassword
   */
  resetPasswordUsingPost = <T,>(request: SendFaCodeByLoginRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/login/resetPassword`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description sendFaByEmail
   *
   * @tags login-controller
   * @name SendFaByEmailUsingPost
   * @summary SendFaByEmailRequest
   * @request POST:/login/sendFaByEmail
   */
  sendFaByEmailUsingPost = <T,>(request: SendFaCodeByLoginRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/login/sendFaByEmail`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description sendFaCodeByinvitation
   *
   * @tags login-controller
   * @name SendFaCodeByInvitationUsingPost
   * @summary SendFaCodeByInvitationRequest
   * @request POST:/login/sendFaCodeByInvitation
   */
  sendFaCodeByInvitationUsingPost = <T,>(
    request: SendFaCodeByInvitationRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/login/sendFaCodeByInvitation`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description sendFaCodeByLogin
   *
   * @tags login-controller
   * @name SendFaCodeByLoginUsingPost
   * @summary SendFaCodeByLoginRequest
   * @request POST:/login/sendFaCodeByLogin
   */
  sendFaCodeByLoginUsingPost = <T,>(
    request: SendFaCodeByLoginRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/login/sendFaCodeByLogin`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description verifyGaFa
   *
   * @tags login-controller
   * @name VerifyGaFaUsingPost
   * @summary VerifyGaFaRequest
   * @request POST:/login/verifyGaFa
   */
  verifyGaFaUsingPost = <T,>(request: SendFaCodeByLoginRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/login/verifyGaFa`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
}
