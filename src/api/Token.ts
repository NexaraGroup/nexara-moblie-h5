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
  BaseResponseListChainGasFeeVo,
  BaseResponseListChainTokenResponse,
  BaseResponseListTokenPolicyVo,
  BaseResponseListTokenVo,
  GetChainGasFeeRequest,
  GetTokenPolicyRequest,
  ValidateAddressRequest,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Token<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description estimate Chain Gas Fee
   *
   * @tags token-controller
   * @name GetChainGasFeeUsingPost1
   * @summary getChainGasFee
   * @request POST:/token/getChainGasFee
   */
  getChainGasFeeUsingPost1 = <T,>(request: GetChainGasFeeRequest, params: RequestParams = {}) =>
    this.request<BaseResponseListChainGasFeeVo, void>({
      path: `/token/getChainGasFee`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description list Fiat token
   *
   * @tags token-controller
   * @name GetFiatTokenListUsingPost
   * @summary getFiatTokenList
   * @request POST:/token/getFiatTokenList
   */
  getFiatTokenListUsingPost = <T,>(params: RequestParams = {}) =>
    this.request<BaseResponseListTokenVo, void>({
      path: `/token/getFiatTokenList`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description list fund sto token
   *
   * @tags token-controller
   * @name GetFundStoListUsingPost
   * @summary getFundStoList
   * @request POST:/token/getFundStoList
   */
  getFundStoListUsingPost = <T,>(params: RequestParams = {}) =>
    this.request<BaseResponseListTokenVo, void>({
      path: `/token/getFundStoList`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description list Crypto token
   *
   * @tags token-controller
   * @name GetNftListUsingPost
   * @summary getNftList
   * @request POST:/token/getNftList
   */
  getNftListUsingPost = <T,>(params: RequestParams = {}) =>
    this.request<BaseResponseListTokenVo, void>({
      path: `/token/getNftList`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description list Staking token
   *
   * @tags token-controller
   * @name GetStakingListUsingPost
   * @summary getStakingList
   * @request POST:/token/getStakingList
   */
  getStakingListUsingPost = <T,>(params: RequestParams = {}) =>
    this.request<BaseResponseListTokenVo, void>({
      path: `/token/getStakingList`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description list all chain and token
   *
   * @tags token-controller
   * @name GetTokenChainListUsingPost
   * @summary getTokenChainList
   * @request POST:/token/getTokenChainList
   */
  getTokenChainListUsingPost = <T,>(params: RequestParams = {}) =>
    this.request<BaseResponseListChainTokenResponse, void>({
      path: `/token/getTokenChainList`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description list Crypto token
   *
   * @tags token-controller
   * @name GetTokenListUsingPost1
   * @summary getTokenList
   * @request POST:/token/getTokenList
   */
  getTokenListUsingPost1 = <T,>(params: RequestParams = {}) =>
    this.request<BaseResponseListTokenVo, void>({
      path: `/token/getTokenList`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description list all  token policy
   *
   * @tags token-controller
   * @name GetTokenPolicyUsingPost
   * @summary getTokenPolicy
   * @request POST:/token/getTokenPolicy
   */
  getTokenPolicyUsingPost = <T,>(request: GetTokenPolicyRequest, params: RequestParams = {}) =>
    this.request<BaseResponseListTokenPolicyVo, void>({
      path: `/token/getTokenPolicy`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description list UnStaking token
   *
   * @tags token-controller
   * @name GetUnStakingListUsingPost
   * @summary getUnStakingList
   * @request POST:/token/getUnStakingList
   */
  getUnStakingListUsingPost = <T,>(params: RequestParams = {}) =>
    this.request<BaseResponseListTokenVo, void>({
      path: `/token/getUnStakingList`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description validAddress
   *
   * @tags token-controller
   * @name ValidAddressUsingPost
   * @summary validAddress
   * @request POST:/token/validAddress
   */
  validAddressUsingPost = <T,>(request: ValidateAddressRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/token/validAddress`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
}
