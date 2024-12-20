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
  BaseResponseQueryChildBalanceResponse,
  BaseResponseUserAcquisitionInfoResponse,
  GetUserInfoRequest,
  QueryByMailRequest,
  QueryUserRateRequest,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Market<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 分红页面-查询用户费率相关信息
   *
   * @tags market-controller
   * @name GetUserAcquisitionInfoUsingPost
   * @summary QueryChildBalanceRequest
   * @request POST:/market/acquisition/getUserAcquisitionInfo
   */
  getUserAcquisitionInfoUsingPost = <T,>(
    request: QueryUserRateRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponseUserAcquisitionInfoResponse, void>({
      path: `/market/acquisition/getUserAcquisitionInfo`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 分红页面-查询用户子用户列表
   *
   * @tags market-controller
   * @name QueryChildBalanceUsingPost
   * @summary QueryChildBalanceRequest
   * @request POST:/market/acquisition/queryChildBalance
   */
  queryChildBalanceUsingPost = <T,>(request: QueryByMailRequest, params: RequestParams = {}) =>
    this.request<BaseResponseQueryChildBalanceResponse, void>({
      path: `/market/acquisition/queryChildBalance`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 获取用户邀请码，有邀请码即有邀请权限，没有邀请码即没有邀请权限
   *
   * @tags market-controller
   * @name GetActiveInviteCodeUsingPost
   * @summary GetUserInfoRequest
   * @request POST:/market/user/getActiveInviteCode
   */
  getActiveInviteCodeUsingPost = <T,>(request: GetUserInfoRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/market/user/getActiveInviteCode`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
}
