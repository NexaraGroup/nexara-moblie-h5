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

import { BaseRequest, BaseResponse } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Health<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description check health
   *
   * @tags health-controller
   * @name GetHealthUsingGet
   * @summary health
   * @request GET:/health
   */
  getHealthUsingGet = <T,>(params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/health`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 检查token是否过期
   *
   * @tags health-controller
   * @name CheckTokenUsingPost
   * @summary 检查token是否过期
   * @request POST:/health/checkToken
   */
  checkTokenUsingPost = <T,>(request: BaseRequest, params: RequestParams = {}) =>
    this.request<BaseResponse, void>({
      path: `/health/checkToken`,
      method: 'POST',
      body: request,
      type: ContentType.Json,
      ...params,
    });
}
