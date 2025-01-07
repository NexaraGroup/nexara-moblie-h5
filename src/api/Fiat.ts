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
  AddBankRequest,
  BasePageResponseFiatTransactionInfoResponse,
  BaseResponse,
  BaseResponseFiatTransactionInfoResponse,
  BaseResponseListQueryAccountResponse,
  BaseResponseListQueryBankResponse,
  BaseResponseListQueryCurrencyResponse,
  BaseResponseListQueryParameterResponse,
  BaseResponseLong,
  BaseResponseString,
  BaseUserRequest,
  DepositRequest,
  GetTransactionRequest,
  GetUserInfoRequest,
  QueryFiatTransactionRequest,
  QueryParameterRequest,
  WithdrawFiatRequest,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Fiat<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 用户添加银行卡
   *
   * @tags fiat-controller
   * @name AddBankUsingPost
   * @summary 用户添加银行卡
   * @request POST:/fiat/addBank
   */
  addBankUsingPost = <T,>(request: AddBankRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/fiat/addBank`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 法币充值
   *
   * @tags fiat-controller
   * @name DepositUsingPost
   * @summary 法币充值
   * @request POST:/fiat/deposit
   */
  depositUsingPost = <T,>(request: DepositRequest, params: RequestParams = {}) =>
    this.request<BaseResponseLong, void>({
      path: `/fiat/deposit`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询法币汇率
   *
   * @tags fiat-controller
   * @name GetRateUsingPost
   * @summary 查询法币汇率
   * @request POST:/fiat/getRate
   */
  getRateUsingPost = <T,>(request: GetUserInfoRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/fiat/getRate`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 法币查询交易详情
   *
   * @tags fiat-controller
   * @name GetTransactionUsingPost1
   * @summary 法币查询交易详情
   * @request POST:/fiat/getTransaction
   */
  getTransactionUsingPost1 = <T,>(request: GetTransactionRequest, params: RequestParams = {}) =>
    this.request<BaseResponseFiatTransactionInfoResponse, void>({
      path: `/fiat/getTransaction`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询用户账户
   *
   * @tags fiat-controller
   * @name QueryAccountUsingPost
   * @summary 查询用户账户
   * @request POST:/fiat/queryAccount
   */
  queryAccountUsingPost = <T,>(request: BaseUserRequest, params: RequestParams = {}) =>
    this.request<BaseResponseListQueryAccountResponse, void>({
      path: `/fiat/queryAccount`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询用户银行卡
   *
   * @tags fiat-controller
   * @name QueryBankUsingPost
   * @summary 查询用户银行卡
   * @request POST:/fiat/queryBank
   */
  queryBankUsingPost = <T,>(request: BaseUserRequest, params: RequestParams = {}) =>
    this.request<BaseResponseListQueryBankResponse, void>({
      path: `/fiat/queryBank`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询法币币种
   *
   * @tags fiat-controller
   * @name QueryCurrencyUsingPost
   * @summary 查询法币币种
   * @request POST:/fiat/queryCurrency
   */
  queryCurrencyUsingPost = <T,>(request: BaseUserRequest, params: RequestParams = {}) =>
    this.request<BaseResponseListQueryCurrencyResponse, void>({
      path: `/fiat/queryCurrency`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询法币系统参数
   *
   * @tags fiat-controller
   * @name QueryParameterUsingPost
   * @summary 查询法币系统参数
   * @request POST:/fiat/queryParameter
   */
  queryParameterUsingPost = <T,>(request: QueryParameterRequest, params: RequestParams = {}) =>
    this.request<BaseResponseListQueryParameterResponse, void>({
      path: `/fiat/queryParameter`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询用户银行卡
   *
   * @tags fiat-controller
   * @name QueryPlatformBankUsingPost
   * @summary 查询用户银行卡
   * @request POST:/fiat/queryPlatformBank
   */
  queryPlatformBankUsingPost = <T,>(request: AddBankRequest, params: RequestParams = {}) =>
    this.request<BaseResponseListQueryBankResponse, void>({
      path: `/fiat/queryPlatformBank`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 法币查询交易列表
   *
   * @tags fiat-controller
   * @name QueryTransactionUsingPost1
   * @summary 法币查询交易列表
   * @request POST:/fiat/queryTransaction
   */
  queryTransactionUsingPost1 = <T,>(
    request: QueryFiatTransactionRequest,
    params: RequestParams = {},
  ) =>
    this.request<BasePageResponseFiatTransactionInfoResponse, void>({
      path: `/fiat/queryTransaction`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询用户账户
   *
   * @tags fiat-controller
   * @name SumAccountUsdUsingPost
   * @summary 查询用户账户
   * @request POST:/fiat/sumAccountUSD
   */
  sumAccountUsdUsingPost = <T,>(request: BaseUserRequest, params: RequestParams = {}) =>
    this.request<BaseResponseString, void>({
      path: `/fiat/sumAccountUSD`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 法币提现
   *
   * @tags fiat-controller
   * @name WithdrawUsingPost1
   * @summary 法币提现
   * @request POST:/fiat/withdraw
   */
  withdrawUsingPost1 = <T,>(request: WithdrawFiatRequest, params: RequestParams = {}) =>
    this.request<BaseResponseLong, void>({
      path: `/fiat/withdraw`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
}
