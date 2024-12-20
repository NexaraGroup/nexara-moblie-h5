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
  BaseResponseListRecentTransactionResponse,
  QueryTransactionRequest,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Handle<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 最近十条交易
   *
   * @tags handle-business-controller
   * @name QueryRecentTransactionUsingPost
   * @summary 用户最近十条交易
   * @request POST:/handle/transaction/recent
   */
  queryRecentTransactionUsingPost = <T,>(
    request: QueryTransactionRequest,
    params: RequestParams = {},
  ) =>
    this.request<BaseResponseListRecentTransactionResponse, void>({
      path: `/handle/transaction/recent`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
}
