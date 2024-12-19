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
  BaseResponseTransactionVo,
  QueryStakingRequest,
  QueryTransactionByUserRequest,
  QueryTransactionRequest,
  StakingReqRequest,
  TransferRequest,
  UnStakingReqRequest,
  WithdrawRequest,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Transaction<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 查询用户的staking交易
   *
   * @tags transaction-controller
   * @name QueryStakingUsingPost
   * @summary queryStaking
   * @request POST:/transaction/queryStaking
   */
  queryStakingUsingPost = <T,>(request: QueryStakingRequest, params: RequestParams = {}) =>
    this.request<BasePageResponseTransactionVo, void>({
      path: `/transaction/queryStaking`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询交易信息
   *
   * @tags transaction-controller
   * @name QueryTransactionUsingPost2
   * @summary queryTransaction
   * @request POST:/transaction/queryTransaction
   */
  queryTransactionUsingPost2 = <T,>(request: QueryTransactionRequest, params: RequestParams = {}) =>
    this.request<BaseResponseTransactionVo, void>({
      path: `/transaction/queryTransaction`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询用户交易信息
   *
   * @tags transaction-controller
   * @name QueryTransactionByUserUsingPost
   * @summary queryTransactionByUser
   * @request POST:/transaction/queryTransactionByUser
   */
  queryTransactionByUserUsingPost = <T,>(
    request: QueryTransactionByUserRequest,
    params: RequestParams = {},
  ) =>
    this.request<BasePageResponseTransactionVo, void>({
      path: `/transaction/queryTransactionByUser`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询用户的unstaking交易
   *
   * @tags transaction-controller
   * @name QueryUnStakingUsingPost
   * @summary queryUnStaking
   * @request POST:/transaction/queryUnStaking
   */
  queryUnStakingUsingPost = <T,>(request: QueryStakingRequest, params: RequestParams = {}) =>
    this.request<BasePageResponseTransactionVo, void>({
      path: `/transaction/queryUnStaking`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags transaction-controller
   * @name StakingRequestUsingPost
   * @summary Staking request
   * @request POST:/transaction/stakingRequest
   */
  stakingRequestUsingPost = <T,>(request: StakingReqRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/transaction/stakingRequest`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 转账
   *
   * @tags transaction-controller
   * @name TransferUsingPost
   * @summary transfer
   * @request POST:/transaction/transfer
   */
  transferUsingPost = <T,>(request: TransferRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/transaction/transfer`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags transaction-controller
   * @name UnStakingRequestUsingPost
   * @summary Staking request
   * @request POST:/transaction/unStakingRequest
   */
  unStakingRequestUsingPost = <T,>(request: UnStakingReqRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/transaction/unStakingRequest`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 提现
   *
   * @tags transaction-controller
   * @name WithdrawUsingPost
   * @summary withdraw
   * @request POST:/transaction/withdraw
   */
  withdrawUsingPost = <T,>(request: WithdrawRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/transaction/withdraw`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
}
