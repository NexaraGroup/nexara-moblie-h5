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
  BasePageResponseCommissionVo,
  BasePageResponseTransactionVo,
  BasePageResponseYieldsVo,
  BaseResponse,
  BaseResponseListBalanceVo,
  BaseResponseListInvestmentVo,
  BaseResponseMapStringString,
  BaseResponseTransactionVo,
  GetInvestmentParameterRequest,
  GetTransactionRequest,
  GetUserInfoRequest,
  QueryInvestmentBalanceRequest,
  QueryTransactionRequest,
  QueryUserListInvestmentBalanceRequest,
  QueryYieldRequest,
  RedeemByGaRequest,
  RegisterRequest,
  SubscribeRequest,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Investment<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags investment-controller
   * @name GetInvestmentParameterUsingPost
   * @summary GetInvestmentParameterRequest
   * @request POST:/investment/investment/getInvestmentParameter
   */
  getInvestmentParameterUsingPost = <T,>(
    request: GetInvestmentParameterRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponseMapStringString, void>({
      path: `/investment/investment/getInvestmentParameter`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags investment-controller
   * @name QueryInvestmentListUsingPost
   * @summary queryInvestmentList
   * @request POST:/investment/investment/queryInvestmentList
   */
  queryInvestmentListUsingPost = <T,>(request: GetUserInfoRequest, params: RequestParams = {}) =>
    this.request<BaseResponseListInvestmentVo, void>({
      path: `/investment/investment/queryInvestmentList`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags investment-controller
   * @name GetTransactionUsingPost2
   * @summary GetTransactionRequest
   * @request POST:/investment/transaction/getTransaction
   */
  getTransactionUsingPost2 = <T,>(request: GetTransactionRequest, params: RequestParams = {}) =>
    this.request<BaseResponseTransactionVo, void>({
      path: `/investment/transaction/getTransaction`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询认购赎回交易
   *
   * @tags investment-controller
   * @name QueryTransactionUsingPost2
   * @summary QueryTransactionRequest
   * @request POST:/investment/transaction/queryTransaction
   */
  queryTransactionUsingPost2 = <T,>(request: QueryTransactionRequest, params: RequestParams = {}) =>
    this.request<BasePageResponseTransactionVo, void>({
      path: `/investment/transaction/queryTransaction`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 赎回接口，验证GA
   *
   * @tags investment-controller
   * @name RedeemUsingPost
   * @summary SubscribeRequest
   * @request POST:/investment/transaction/redeem
   */
  redeemUsingPost = <T,>(request: RedeemByGaRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/investment/transaction/redeem`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 申购接口
   *
   * @tags investment-controller
   * @name SubscribeUsingPost
   * @summary SubscribeRequest
   * @request POST:/investment/transaction/subscribe
   */
  subscribeUsingPost = <T,>(request: SubscribeRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/investment/transaction/subscribe`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询理财份额
   *
   * @tags investment-controller
   * @name QueryInvestmentBalanceUsingPost
   * @summary QueryInvestmentBalanceRequest
   * @request POST:/investment/user/queryInvestmentBalance
   */
  queryInvestmentBalanceUsingPost = <T,>(
    request: QueryInvestmentBalanceRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponseListBalanceVo, void>({
      path: `/investment/user/queryInvestmentBalance`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags investment-controller
   * @name QueryUserListInvestmentBalanceUsingPost
   * @summary QueryUserListInvestmentBalanceRequest
   * @request POST:/investment/user/queryUserListInvestmentBalance
   */
  queryUserListInvestmentBalanceUsingPost = <T,>(
    request: QueryUserListInvestmentBalanceRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponseListBalanceVo, void>({
      path: `/investment/user/queryUserListInvestmentBalance`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags investment-controller
   * @name SumInvestmentBalanceUsingPost
   * @summary QueryInvestmentBalanceRequest
   * @request POST:/investment/user/sumInvestmentBalance
   */
  sumInvestmentBalanceUsingPost = <T,>(
    request: QueryInvestmentBalanceRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponse, void>({
      path: `/investment/user/sumInvestmentBalance`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags investment-controller
   * @name RegisterV2UsingPost
   * @summary 用户签约
   * @request POST:/investment/user/v2/register
   */
  registerV2UsingPost = <T,>(request: RegisterRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/investment/user/v2/register`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags investment-controller
   * @name QueryCommissionUsingPost
   * @summary QueryYieldRequest
   * @request POST:/investment/yield/queryCommission
   */
  queryCommissionUsingPost = <T,>(request: QueryYieldRequest, params: RequestParams = {}) =>
    this.request<BasePageResponseCommissionVo, void>({
      path: `/investment/yield/queryCommission`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags investment-controller
   * @name QueryYieldUsingPost
   * @summary QueryYieldRequest
   * @request POST:/investment/yield/queryYield
   */
  queryYieldUsingPost = <T,>(request: QueryYieldRequest, params: RequestParams = {}) =>
    this.request<BasePageResponseYieldsVo, void>({
      path: `/investment/yield/queryYield`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags investment-controller
   * @name SumCommissionUsingPost
   * @summary QueryYieldRequest
   * @request POST:/investment/yield/sumCommission
   */
  sumCommissionUsingPost = <T,>(request: QueryYieldRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/investment/yield/sumCommission`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags investment-controller
   * @name SumYieldUsingPost
   * @summary QueryYieldRequest
   * @request POST:/investment/yield/sumYield
   */
  sumYieldUsingPost = <T,>(request: QueryYieldRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/investment/yield/sumYield`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
}
