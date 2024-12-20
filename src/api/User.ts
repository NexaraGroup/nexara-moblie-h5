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
  BasePageResponseTransactionVo,
  BaseResponse,
  BaseResponseGoogleAuthDto,
  GetTermConditionsUsingPostParams,
  GetUserInfoRequest,
  ModifyLanguageRequest,
  QueryTransactionRequest,
  SendFaCodeByLoginRequest,
  SetPasswordRequest,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description getGASecretKey
   *
   * @tags user-controller
   * @name GetGaSecretKeyUsingPost
   * @summary GetUserInfoRequest
   * @request POST:/user/getGASecretKey
   */
  getGaSecretKeyUsingPost = <T,>(request: GetUserInfoRequest, params: RequestParams = {}) =>
    this.request<BaseResponseGoogleAuthDto, void>({
      path: `/user/getGASecretKey`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 下载用户须知
   *
   * @tags user-controller
   * @name GetTermConditionsUsingPost
   * @summary 下载用户条款条件
   * @request POST:/user/getTermConditions
   */
  getTermConditionsUsingPost = <T,>(
    query: GetTermConditionsUsingPostParams,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/user/getTermConditions`,
      method: 'POST',
      query: query,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description modifyLanguage
   *
   * @tags user-controller
   * @name ModifyLanguageUsingPost
   * @summary modifyLanguage
   * @request POST:/user/modifyLanguage
   */
  modifyLanguageUsingPost = <T,>(request: ModifyLanguageRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/user/modifyLanguage`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description getGASecretKey
   *
   * @tags user-controller
   * @name SaveGaCodeUsingPost
   * @summary saveGACode
   * @request POST:/user/saveGACode
   */
  saveGaCodeUsingPost = <T,>(request: SendFaCodeByLoginRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/user/saveGACode`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description getGASecretKey
   *
   * @tags user-controller
   * @name SetPasswordUsingPost
   * @summary setPassword
   * @request POST:/user/setPassword
   */
  setPasswordUsingPost = <T,>(request: SetPasswordRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/user/setPassword`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description custoy页面查询充值提现认购赎回交易
   *
   * @tags user-controller
   * @name QueryTransactionUsingPost3
   * @summary QueryTransactionRequest
   * @request POST:/user/transaction/queryTransaction
   */
  queryTransactionUsingPost3 = <T,>(request: QueryTransactionRequest, params: RequestParams = {}) =>
    this.request<BasePageResponseTransactionVo, void>({
      path: `/user/transaction/queryTransaction`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
}
