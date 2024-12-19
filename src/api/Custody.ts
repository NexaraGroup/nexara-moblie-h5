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
  _,
  BasePageResponse,
  GenerateUserDepositAddressRequest,
  GetTokenPolicyRequest,
  GetTransactionRequest,
  GetUserInfoRequest,
  ListWalletInfoRequest,
  QueryBalanceRequest,
  QueryTransactionRequest,
  VerifyAddressRequest,
  WithdrawRequest,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Custody<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description listBlockchain
   *
   * @tags custody-controller
   * @name GetTokenListUsingPost
   * @summary getTokenList
   * @request POST:/custody/token/getTokenList
   */
  getTokenListUsingPost = <T,>(request: GetUserInfoRequest, params: RequestParams = {}) =>
    this.request<_, void>({
      path: `/custody/token/getTokenList`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 获取TokenPolicy
   *
   * @tags custody-controller
   * @name GetTokenPolicyUsingPost
   * @summary GetTokenPolicyRequest
   * @request POST:/custody/token/getTokenPolicy
   */
  getTokenPolicyUsingPost = <T,>(request: GetTokenPolicyRequest, params: RequestParams = {}) =>
    this.request<_, void>({
      path: `/custody/token/getTokenPolicy`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description listBlockchain
   *
   * @tags custody-controller
   * @name ListBlockchainUsingPost
   * @summary listBlockchain
   * @request POST:/custody/token/listBlockchain
   */
  listBlockchainUsingPost = <T,>(request: GetUserInfoRequest, params: RequestParams = {}) =>
    this.request<_, void>({
      path: `/custody/token/listBlockchain`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 验证Address
   *
   * @tags custody-controller
   * @name VerifyAddressUsingPost
   * @summary VerifyAddressRequest
   * @request POST:/custody/token/verifyAddress
   */
  verifyAddressUsingPost = <T,>(request: VerifyAddressRequest, params: RequestParams = {}) =>
    this.request<_, void>({
      path: `/custody/token/verifyAddress`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询充值和提现交易
   *
   * @tags custody-controller
   * @name GetTransactionUsingPost
   * @summary GetTransactionRequest
   * @request POST:/custody/transaction/getTransaction
   */
  getTransactionUsingPost = <T,>(request: GetTransactionRequest, params: RequestParams = {}) =>
    this.request<_, void>({
      path: `/custody/transaction/getTransaction`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询交易列表
   *
   * @tags custody-controller
   * @name QueryTransactionUsingPost
   * @summary QueryTransactionRequest
   * @request POST:/custody/transaction/queryTransaction
   */
  queryTransactionUsingPost = <T,>(request: QueryTransactionRequest, params: RequestParams = {}) =>
    this.request<BasePageResponse, void>({
      path: `/custody/transaction/queryTransaction`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 提现
   *
   * @tags custody-controller
   * @name WithdrawUsingPost
   * @summary QueryTransactionByBackendRequest
   * @request POST:/custody/transaction/withdraw
   */
  withdrawUsingPost = <T,>(request: WithdrawRequest, params: RequestParams = {}) =>
    this.request<_, void>({
      path: `/custody/transaction/withdraw`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 生成DepositAddress
   *
   * @tags custody-controller
   * @name GenerateDepositAddressUsingPost
   * @summary GenerateUserDepositAddressRequest
   * @request POST:/custody/user/generateDepositAddress
   */
  generateDepositAddressUsingPost = <T,>(
    request: GenerateUserDepositAddressRequest,
    params: RequestParams = {},
  ) =>
    this.request<_, void>({
      path: `/custody/user/generateDepositAddress`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 获取用户钱包
   *
   * @tags custody-controller
   * @name ListWalletInfoUsingPost
   * @summary ListWalletInfoRequest
   * @request POST:/custody/user/listWalletInfo
   */
  listWalletInfoUsingPost = <T,>(request: ListWalletInfoRequest, params: RequestParams = {}) =>
    this.request<_, void>({
      path: `/custody/user/listWalletInfo`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询用户账户余额
   *
   * @tags custody-controller
   * @name QueryUserBalanceUsingPost
   * @summary QueryBalanceRequest
   * @request POST:/custody/user/queryBalance
   */
  queryUserBalanceUsingPost = <T,>(request: QueryBalanceRequest, params: RequestParams = {}) =>
    this.request<_, void>({
      path: `/custody/user/queryBalance`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description listBlockchain
   *
   * @tags custody-controller
   * @name SumBalanceUsingPost
   * @summary sumBalance
   * @request POST:/custody/user/sumBalance
   */
  sumBalanceUsingPost = <T,>(request: GetUserInfoRequest, params: RequestParams = {}) =>
    this.request<_, void>({
      path: `/custody/user/sumBalance`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
}
