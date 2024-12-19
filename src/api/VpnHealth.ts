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

import { _ } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class VpnHealth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description check vpn health
   *
   * @tags health-controller
   * @name VpnHealthUsingGet
   * @summary vpnHealth
   * @request GET:/vpnHealth
   */
  vpnHealthUsingGet = <T,>(params: RequestParams = {}) =>
    this.request<_, void>({
      path: `/vpnHealth`,
      method: 'GET',
      ...params,
    });
}
